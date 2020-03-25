---
id: enable-snmp-traps
title: Activer les Traps SNMP
---

## Description

Les traps SNMP sont des informations envoyées en utilisant le protocole SNMP depuis un équipement supervisé vers un
serveur de supervision (satellite). Ces informations contiennent plusieurs attributs dont :

* Adresse de l’équipement qui a envoyé l’information.
* L’OID racine (Object Identifier) correspond à l’identifiant du message reçu.
* Le message envoyé au travers du trap SNMP qui correspond à un ensemble de paramètres (1 à N).

Afin de pouvoir interpréter l’évènement reçu, le serveur de supervision doit posséder dans sa configuration le
nécessaire pour traduire l’évènement. Pour cela, il doit disposer d’une base de données contenant les OID ainsi que
leurs descriptions, c’est ce qu’on appelle les fichiers MIB. Il existe deux types de MIB :

* Les MIB standards qui utilisent des OID standardisés et qui sont implémentés par de nombreux constructeurs sur leurs
  équipements.
* Les MIB constructeurs qui sont propres à chacun et souvent à chaque modèle d’équipement.

Les MIB constructeurs sont à récupérer auprès des constructeurs de matériels. Centreon permet de stocker la définition
des traps SNMP dans sa base de données MySQL. Les traps peuvent ensuite être reliés à des services passifs via l’onglet
**Relations** de la définition d’un service.

## Architecture

### Processus de traitement d’un trap par le serveur central

Voici le processus de traitement d’un trap SNMP :

1. snmptrapd est le service permettant de récupérer les traps SNMP envoyés par les équipements (par défaut il écoute
  sur le port **UDP 162**).
2. Une fois le trap SNMP reçu, il est envoyé au script ‘centreontrapdforward’ qui va écrire les informations reçues
  dans un dossier tampon (par défaut : **/var/spool/centreontrapd/**).
3. Le service ‘centreontrapd’ lit les informations reçues dans le dossier tampon et interprète les différents traps
  reçus en vérifiant dans la base de données Centreon les actions à entreprendre pour traiter ces évènements.
3. Le service ‘centreontrapd’ transmet les informations à l’ordonnanceur ou au service ‘centcore’ (pour transmettre
  les informations à un ordonnanceur distant) qui se charge de modifier le statut et les informations associées au
  service auquel est lié le trap SNMP.

![image](assets/configuration/06_trap_centreon.png)

### Processus de traitement d’un trap par un collecteur

Afin de garder une copie de la configuration des traps SNMP sur chaque serveur satellite, une base de données SQLite
est chargée de garder en cache les informations de traps contenues dans la base de données MySQL. Cette base de
données SQLite est automatiquement générée par le serveur Central.

Voici le processus de traitement d’un trap SNMP :

1. snmptrapd est le service permettant de récupérer les traps SNMP envoyées par les équipements (par défaut il écoute
  sur le port **UDP 162**).
2. Une fois le trap SNMP reçu, il est envoyé au script ‘centreontrapdforward’ qui va écrire les informations reçues
  dans un dossier tampon (par défaut : **/var/spool/centreontrapd/**).
3. Le service ‘centreontrapd’ lit les informations reçues dans le dossier tampon et interprète les différentes traps
  reçus en vérifiant dans la base de données SQLite les actions à entreprendre pour traiter les traps reçus.
4. Le service ‘centreontrapd’ transmet les informations à l’ordonnanceur qui se charge de modifier le statut et les
  informations associées au service dont est lié le trap SNMP.

![image](assets/configuration/06_trap_poller.png)

> Le processus Centcore à la charge, comme pour l’export de configuration de la supervision, de copier la base SQLite
> sur le collecteur distant..

### Ordre de réalisation des actions par le processus centreontrapd

Voici l’ordre des actions réalisé par le processus centreontrapd :

![image](assets/configuration/SNMP_Traps_management_general_view.png)

## Configuration des services

### Snmptrapd

Afin d’appeler le script ‘centreontrapdfoward’, le fichier **/etc/snmp/snmptrapd.conf** doit contenir les lignes
suivantes :
```Bash
disableAuthorization yes
traphandle default su -l centreon -c "/usr/share/centreon/bin/centreontrapdforward"
```

Vous pouvez optimiser les performances de snmptrapd en utilisant les options suivantes :

* **-On** n’essaye pas de transformer les OIDs
* **-t** ne log pas les traps au serveur syslog
* **-n** n’essaye pas de transformer les adresses IP en nom d’hôtes

Ces options peuvent être modifiées dans le fichier **/etc/sysconfig/snmptrapd**:
```Bash
OPTIONS="-On -d -t -n -p /var/run/snmptrapd.pid"
```

Il est également possible de placer le dossier tampon snmptrapd en mémoire vive. Pour cela, ajoutez la ligne suivante
dans le fichier **/etc/fstab** :
```Bash
tmpfs /var/run/snmpd    tmpfs defaults,size=128m 0 0
```

### centreontrapdforward

Pour modifier le dossier tampon vers lequel les informations seront écrites, modifiez le fichier de configuration
**/etc/centreon/centreontrapd.pm** :
```Perl
our %centreontrapd_config = (
    spool_directory => '/var/spool/centreontrapd/',
);

1;
```

Vous pouvez également mapper le dossier dans le cache en mémoire vive, en ajoutant la ligne suivante dans le fichier
**/etc/fstab** :
```Bash
tmpfs /var/spool/centreontrapd      tmpfs defaults,size=512m 0 0
```

### centreontrapd

Deux fichiers de configuration existent pour Centreontrapd :

* **/etc/centreon/conf.pm** contient les informations de connexion à la base de données MySQL
* **/etc/centreon/centreontrapd.pm** contient la configuration du service centreontrapd

#### Configuration du service

Au sein du fichier **/etc/centreon/centreontrapd.pm** il est conseillé de modifier uniquement trois paramètres (si
nécessaire) :

* Si l’option **mode** est définie à 1 alors centreontrapd fonctionne sur un serveur satellite, sinon il fonctionne sur
  un serveur central (Centreon).
* L’option **centreon_user** permet de modifier l’utilisateur qui exécute les actions.
* L’option **spool_directory** permet de modifier le dossier tampon à lire (si vous l’avez modifié dans le fichier de
  configuration de ‘centreontrapdforward’).

Voici un exemple de configuration possible du fichier **/etc/centreon/centreontrapd.pm** (le fichier de configuration
peut être modifiée avec ‘-config-extra = xxx’) :
```Perl
our %centreontrapd_config = (
    # Time in seconds before killing not gently sub process
    timeout_end => 30,
    spool_directory => "/var/spool/centreontrapd/",
    # Delay between spool directory check new files
    sleep => 2,
    # 1 = use the time that the trap was processed by centreontrapdforward
    use_trap_time => 1,
    net_snmp_perl_enable => 1,
    mibs_environment => '',
    remove_backslash_from_quotes => 1,
    dns_enable => 0,
    # Separator for arguments substitution
    separator => ' ',
    strip_domain => 0,
    strip_domain_list => [],
    duplicate_trap_window => 1,
    date_format => "",
    time_format => "",
    date_time_format => "",
    # Time in seconds before cache reload
    cache_unknown_traps_retention => 600,
    # 0 = central, 1 = poller
    mode => 0,
    cmd_timeout => 10,
    centreon_user => "centreon",
    # 0 => skip if MySQL error | 1 => don't skip (block) if MySQL error (and keep order)
    policy_trap => 1,
    # Log DB
    log_trap_db => 0,
    log_transaction_request_max => 500,
    log_transaction_timeout => 10,
    log_purge_time => 600
);

1;
```

#### Configuration de la connexion à la base de données

Sur un serveur Centreon central, éditer le fichier **/etc/centreon/conf.pm** :
```Perl
$centreon_config = {
    VarLib => "/var/lib/centreon",
    CentreonDir => "/usr/share/centreon/",
    "centreon_db" => "centreon",
    "centstorage_db" => "centreon_storage",
    "db_host" => "localhost:3306",
    "db_user" => "centreon",
    "db_passwd" => "centreon"
};

1;
```

Sur un collecteur, éditer le fichier **/etc/centreon/centreontrapd.pm** :
```Perl
our %centreontrapd_config = (
    ...
    "centreon_db" => "dbname=/etc/snmp/centreon_traps/centreontrapd.sdb",
    "centstorage_db" => "dbname=/etc/snmp/centreon_traps/centreontrapd.sdb",
    "db_host" => "",
    "db_user" => "",
    "db_passwd" => "",
    "db_type" => 'SQLite',
    ...
);

1;
```

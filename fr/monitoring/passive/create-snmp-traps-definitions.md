---
id: create-snmp-traps-definitions
title: Définition des Traps SNMP
---

## Ajouter un constructeur

Au sein de Centreon, les OIDs racines des traps SNMP sont classés par constructeur. Pour ajouter un constructeur :

Rendez-vous dans le menu **Configuration \> SNMP traps \> Manufacturer** et cliquez sur **Add**

![image](assets/configuration/06constructors.png)

* Les champ **Name** et **Alias** définissent le nom et l’alias du constructeur
* Le champ **Description** fournit une indication sur le constructeur

## Importation des MIB

Rendez-vous dans le menu**Configuration \> SNMP traps \> MIBs**

![image](assets/configuration/06importmibssuccess.png)

* La liste **Manufacturer** permet de choisir le constructeur auquel appartient la MIB que vous importez
* Le champ **File (.mib)** permet de charger la MIB

Lors de l'importation d'un fichier MiB, il est possible que des dépendances soient nécessaires. Pour trouver les
dépendances de votre MIB, vous devez ouvrir votre fichier MIB à l'aide d'un éditeur de texte standard, puis :

1. Recherchez la ligne commençant par IMPORT
2. Toutes les dépendances requises pour importer votre fichier MIB se trouvent après le mot clé **FROM**

![image](assets/configuration/kdependances.png)

Dans le fichier MIB illustré ci-dessus, quatre dépendances sont requises pour importer la MIB : SNMPv2-SMI, SNMPv2-TC,
SNMPv2-CONF, SNMP-FRAMEWORK-MIB.

> TLes dépendances des MIBS que vous importez doivent être présentes dans le dossier **/usr/share/snmp/mibs**. Une fois
> l’import terminé, supprimez les dépendances préalablement copiées.

## Configuration manuelle des traps

### Configuration basique

Il est également possible de créer manuellement des définitions de trap SNMP :

Rendez-vous dans le menu **Configuration \> SNMP traps \> SNMP traps** et cliquez sur **Add**

![image](assets/configuration/06addsnmptrap.png)

* Le champ **Trap name** éfinit le nom du trap.
* Le champ **Mode** éfinit comment le champ **OID** est interpreté lors de la réception de ce trap.
* Le champ **OID** définit l’OID racine à recevoir pour que ce trap soit considéré comme reçu.
* Le champ **Vendor name** définit le nom du constructeur auquel appartient le trap à sélectionner dans la liste
  déroulante.
* Le champ **Output message** contient le message à afficher en cas de réception d’un trap contenant l’OID configuré
  au-dessus.

> Par défaut, la MIB contient la définition de cette variable (Exemple : “Link up on interface $2. State: $4.”, ici $2
> sera remplacé par le 2ème argument reçu dans l’évènement.). Dans le cas contraire, la variable **$\*** permet
> d’afficher l’ensemble des arguments contenu dans le trap.

> Il est possible de construire soit même le message de sortie. Pour cela, utilisez la MIB afin de connaitre les
> arguments qui seront présents dans le corps de l’évènement et récupérer les arguments avec les variables **$n**.
> Chaque argument étant identifié par un OID, il est possible d’utiliser directement cet OID afin de le placer dans le
> message de sortie sans connaitre sa position via la variable **@{OID}**..

* Le champ **Default status** définit le statut "supervision" par défaut du service en cas de réception du trap.
* Si la case **Submit result** est cochée alors le résultat est soumis au moteur de supervision.
* Le champ **Comments** (dernier champ) contient par défaut le commentaire constructeur du trap SNMP. La plupart du
  temps, ce commentaire indique la liste des variables contenues dans le trap SNMP (voir chapitre suivant sur la
  configuration avancée).

### Configuration avancée des traps

Il est possible de détermine le statut d’un service à partir de la valeur d’un paramètre du trap SNMP plutôt qu’à
partir de l’OID racine. Anciennement les constructeurs définissaient un trap SNMP (OID racine) par type d’évènement à
envoyer (linkUp / linkDown). Aujourd’hui, la tendance est de définir un OID racine par catégorie d’évènements puis de
définir l’évènement via un ensemble de paramètres.

Pour cela, il est possible de définir des **Advanced Matching mode** en cliquant sur le bouton **Add a new entry** et
de créer autant de règles que nécessaire. Pour chaque règle, définir les paramètres :

* **String** définit l’élément sur lequel sera appliqué la recherche (@OUTPUT@ défini l’ensemble du **Output messages**
  traduit).
* **Regexp** définit la recherche de type REGEXP à appliquer.
* **Status** définit le statut du service en cas de concordance.

> L’ordre est important dans les règles de correspondance car le processus s’arrêtera à la première règle dont la
> correspondance est assurée.

* Le champ **Disable submit result if no matched rules** désactive l’envoi des informations au moteur d’ordonnancement
  si aucune correspondance avec une règle n’est validée.
* Si la case **Reschedule associated services** est cochée alors le prochain contrôle du service, qui doit être ‘actif’,
  sera reprogrammé au plus tôt après la réception du trap.
* Si la case **Execute special command** est cochée alors la commande définie dans **Special command** est exécutée.

### Onglet Advanced 

L’onglet **Advanced** permet de configurer le comportement d’exécution du processus de traitement des traps SNMP lors
de la réception de ce dernier.

![image](assets/configuration/06advancedconfiguration.png)

* **Enable routing** permet d’activer le routage des informations.
* **Route definition** permet de définir la commande à utiliser pour le routage.

Avant d’exécuter le traitement de l’évènement (traduction du **Output message**), il est possible d’exécuter une
commande appelée PREEXEC. Pour cela, il est possible de définir des **PREEXEC command (SNMPTT type)** en cliquant sur
le bouton **Add a new entry** et de créer autant de règles que nécessaire.

* **PREEXEC command** définit la commande à exécuter.

Voici un exemple d’utilisation avec le trap linkUP : Pour un équipement Cisco, $2 == ifDescr contient le numéro de port
de l’interface (GigabitEthernet0/1 par exemple). La meilleure description de l’interface est contenue dans le champ
SNMP ifAlias.

La commande suivante permet de récupérer cette valeur :
```Bash
snmpget -v 2c -Ovq -c <community> <cisco switch> ifAlias.$1
```

Pour utiliser le résultat de la commande PREEXEC dans le **Output message**, il faut utiliser la variable $p{n} où ‘n’
correspond à l’ordre de définition de la commande.

Exemple :
```Bash
"Interface $2 ( $p1 ) linkUP. State: $4." "$CA"
```

Le résultat sera de la forme : Interface GigabitEthernet0/1 ( SERVEUR NAS ) linkUP. State: up

* Le champ **Insert trap's information into database** permet de journaliser ou non les traps en base de données.
* Le champ **Timeout** exprimé en secondes, permet de définir le temps maximum de traitement de l’évènement y compris
  les commandes de prétraitement (PREEXEC) ainsi que celles de post-traitement (special command).
* Le champ **Execution interval** exprimé en secondes, permet de définir le temps minimum d’attente entre deux
  traitements d’un évènement.
* Le champ **Execution Type** permet d’activer **Execution interval** en définissant les conditions
* Le champ **Execution Method** permet de définir si lors de la réception de plusieurs mêmes évènements (OID racine).
  L’exécution est soit **Sequential** ou **Parallel**.

### Le code personnalisé

Le champ **custom code** permet d’ajouter un traitement Perl personnalisé. Pour l’activer, il est nécessaire de
modifier la variable **secure_mode** à 0 dans le fichier **/etc/centreon/centreontrapd.pm** tel que :
```Perl
our %centreontrapd_config = (
    ...
    secure_mode => 0,
    ....
);

1;
````

Par exemple, pour décoder le 4ème argument dont la valeur est en hexadécimal, le code personnalisé sera :
```Perl
if ($self->{trap_data}->{entvar}->[3] =~ /[[:xdigit:]]+/) {
    my $hexa_value = $self->{trap_data}->{entvar}->[3];
    $hexa_value =~ s/ //g;
    $self->{trap_data}->{entvar}->[3] = pack('H*', $hexa_value);
}
```

> Attention le tableau des arguments démarre à 0 pour l’argument 1 du trap SNMP.

### Les variables

Lors de l’ajout d’une règle de correspondance ou de l’exécution d’une commande spéciale il est possible de passer des
arguments aux champs **String** ou **Special command**. Ces arguments sont listés dans le tableau ci-dessous :

| Nom de la variable       | Description                                                                                                                               |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| @{NUMERIC_OID}           | Récupération de la valeur d’un argument via son OID, exemple @{.1.3.6.1.4.1.9.9.43.1.1.1}                                                 |
| $1, $2...                | Récupération de la valeur d’un argument via son ordre d’apparition                                                                        |
| $p1, $p2,...             | VValeur de la commande PREEXEC ($p1 = pour la première commande, $p2 pour la seconde, ...)                                                |
| $*                       | Tous les arguments séparés par un espace                                                                                                  |
| @HOSTNAME@               | Nom d’hôte (dans Centreon) auquel le service est rattaché                                                                                 |
| @HOSTADDRESS@            | Adresse IP de l’hôte ayant envoyé le trap                                                                                                 |
| @HOSTADDRESS2@           | Nom DNS de l’hôte ayant envoyé le trap (si le serveur n’arrive pas à effectuer une résolution DNS inversée alors on récupère l’adresse IP |
| @SERVICEDESC@            | Nom du service                                                                                                                            |
| @TRAPOUTPUT@ ou @OUTPUT@ | Message envoyé par l’expéditeur du trap                                                                                                   |
| @STATUS@                 | Statut du service                                                                                                                         |
| @SEVERITYNAME@           | Nom du niveau de criticité de l’évènement                                                                                                 |
| @SEVERITYLEVEL@          | Niveau de criticité de l’évènement                                                                                                        |
| @TIME@                   | Heure de réception du trap                                                                                                                |
| @POLLERID@               | ID du collecteur ayant reçu le trap                                                                                                       |
| @POLLERADDRESS@          | Adresse IP du collecteur ayant reçu le trap                                                                                               |
| @CMDFILE@                | Chemin vers le fichier de commande de CentCore (central) ou de Centreon Engine (collecteur)                                               |

De plus, il existe des variables spéciales pouvant être utilisées dans la section **Routing settings**  au niveau de la
**Routing command** si l’option **Enable routing** est sélectionnée :

| Nom de la variable  | Description                                                                                                 |
|---------------------|-------------------------------------------------------------------------------------------------------------|
| @GETHOSTBYADDR($1)@ | Résolution DNS inverse permettant de connaitre le nom DNS à partir de l’adresse IP (127.0.0.1 -> localhost) |
| @GETHOSTBYNAME($1)@ | Résolution DNS permettant de connaitre l’adresse IP à partir du nom DNS (localhost -> 127.0.0.1)            |

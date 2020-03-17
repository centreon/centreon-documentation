---
id: create-services-discovery-rules
title: Créer des règles de découverte des services
---

## Règles de découverte

### General options

Options générales
Une règle de découverte permet de créer dynamiquement des services et de les lier à un hôte, en se basant sur les
éléments remontés par les sondes. Les services unitaires créés sont attachés à des modèles de services ce qui permet
d’utiliser les fonctionnalités de Centreon (héritage, surcharge, etc.)

Pour créer une règle de découverte, rendez-vous dans le menu **Configuration \> Services \> Auto Discovery \> Rules**
et cliquez sur **Add** :

![image](assets/configuration/autodisco/create_rule_1.png)

Saisissez les premiers champs :

![image](assets/configuration/autodisco/create_rule_2.png)

Voici une description des premiers champs à saisir :

* **Rule name** : nom de la règle
* **Command Macro** : la commande exécutée pour lister les attributs du flux XML
* **Command Discover** : la commande de découverte exécutée pour lister les éléments
* **Service template**: le modèle de service utilisé pour créer les nouveaux services

Rendez-vous dans le second onglet **Inclusions / Exclusions & Macros** tab. You should see available XML attributes:

![image](assets/configuration/autodisco/create_rule_3.png)

Revenez au premier onglet et définir le nom des services qui seront créés ainsi que les autres champs disponibles :

![image](assets/configuration/autodisco/create_rule_4.png)

Saisir le nom du service qui sera créé via le champ **Service display name**.

> Le nom du service peut contenir une macro correspondant à un attribut du flux XML. Par exemple, pour une interface
> réseau, son nom peut être amené par l’attribut **name**. **Trafic-$name$ sera** remplacé par **Trafic-eth0** si le
> nom de l’interface est **eth0**. Le nom de l’attribut XML doit être mis entre deux caractères **$**.

Puis compléter la règle :

* **Hosts templates** : Les modèles qui seront utilisés pour définir la liste des hôtes pour lesquels les règles de
  découverte seront exécutées
* **Linked Instances** : permet d’exécuter la règle que pour les hôtes liés aux collecteurs sélectionnées.

> Laisser vide pour exécutr la règle depuis n’importe quel collecteur.

* **Contacts** : Les contacts qui seront notifiés sur la création ou la désactivation de services à la suite de la
  découverte
* **Contact groups**: Les groupes de contact qui seront notifiés sur la création ou la désactivation de services à la
  suite de la découverte
* **Disable elements not found** : Permettre au module de désactiver les services associés aux éléments qui ne sont
  plus trouvés
* **Update existing services** : Si actif, les services déjà découverts ne seront pas mis à jour si une propriété change
  (valeur de macros personnalisées, etc.).
* **Activate** : Activer ou désactiver la règle (la règle sera ignorée par le processus de découverte si elle est désactivée).

Cliquer sur **Save** pour sauvegarder la règle de découverte.

### Inclusions / Exclusions & Macros

Les **Inclusions / Exclusions et Macro** fonctionnent de la manière suivante :

![image](assets/configuration/autodisco/create_rule_5.png)

Les **Inclusions / Exclusions** permettent d’inclure ou d’exclure des éléments durant la découverte. Cette inclusion / 
exclusion concerne les attributs XML

Les règle d’inclusion/exclusion sont définies à partir de l’algorithme suivant :

* Si seules des règles d’inclusion sont présentes, la valeur de l’attribut correspondant à au moins une inclusion est
  prise en compte
* Si seulement des règles d’exclusion sont présentes, chaque élément sera pris en compte, sauf ceux correspondant à
  une exclusion
* Si les deux types sont présents, le processus vérifiera l’élément correspondant à une inclusion puis s’assurera qu’il
  n’est pas listé dans une exclusion
* Le seconde partie Macros permet de définir la relation entre l’attribut XML et la macro du modèle de service. Pour
  tous les services créés, les valeurs des macros seront remplacées par les valeurs des attributs.

![image](assets/configuration/autodisco/create_rule_6.png)

> Sur cette image toutes les macros seront créées sur le nouveau service car toutes les cases **Empty** sont sélectionnées.
> Pour ne pas créer ces macros, ne pas cocher les cases associées. La macro **$_SERVICEINTERFACEID** sera créée et contiendra
> la valeur associée à l’attribut XML **$interfaceid** de l’élément.

### Options avancées

Le dernier onglet **Advanced** permet d’appliquer des regexp sur le champ **Service display name** ou tout attribut du
flux XML. Cliquer sur **Add a new entry** pour ajouter une nouvelle entrée en définissant l’expression et le résultat
attendu :

![image](assets/configuration/autodisco/create_rule_7.png)

L’expression peut être appliquée sur :

* **@SERVICENAME@** : le nom du service qui sera créé
* tous les attributs du flux XML via **$attribute_name$**

La seconde partie **Customize** code permet d’utiliser du code Perl.

**Custom display scan** permet de modifier l’affichage dans la découverte manuelle Par défaut, la découverte manuelle
affiche le nom du service. Voici un exemple pour ajouter la taille des disques :

```Perl
my ($value, $unit) = change_bytes(value => $total$);
$description = "<span style='color: red; font-weight: bold'>@SERVICENAME@</span> [size = <b>$value $unit</b>]";
 ```

**Custom variables** permet de créer des macros personnalisables. Voici un exemple pour définir des seuils dynamiques
selon la taille des disques :
```Perl
my $total_gb = $total$ / 1000 / 1000 / 1000;
if ($total_gb < 100) {
    $warning$ = 80;
    $critical$ = 90;
} elsif ($total_gb < 500) {
    $warning$ = 90;
    $critical$ = 95;
} else {
    $warning$ = 95;
    $critical$ = 98;
}
```

Il est possible d’utiliser les macros **$warning$** et **$critical$** dans la partie **Macros**.

## Commandes de découverte

Une **discovery commands** est la définition d’une ligne de commande exécutant la [sonde de découverte](#discovery-plugins).

Chaque sonde de découverte doit disposer de deux commandes :

* La première pour récupérer la liste des attributs du flux XML
* La seconde pour récupérer la liste des éléments découverts sur l’équipement

![image](assets/configuration/autodisco/commands_list.png)

### Commande pour récupérer la liste des attributs XML

Rendez-vous dans le menu **Configuration \> Commands \> Discovery** et cliquez sur **Add** pour ajouter une nouvelle
commande.

Saisissez les champs suivants :

* **Command Name** : nom de la commande
* **Command type** : sélectionnez l’option **Discovery**
* **Command Line** : saisissez la ligne de commande pour exécuter la sonde et récupérer la liste des attributs XML

> Toute commande utilisant les sondes du projet Centreon Plugin doit définir l’option **hostname**. Donc ajoutez
> l’option **--hostname=127.0.0.1** dans votre commande.

![image](assets/configuration/autodisco/command_attributes.png)

Voici un exemple de ligne de commande exécutée dans un terminal :
```Bash
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --mode=list-interfaces --hostname=127.0.0.1 --disco-format
```
Et le résultat :
```XML
<?xml version="1.0" encoding="utf-8"?>
<data>
    <element>name</element>
    <element>total</element>
    <element>status</element>
    <element>interfaceid</element>
</data>
```

Sauvegardez votre commande.

### Command to get the list of items on a host

Rendez-vous dans le menu **Configuration \> Commands \> Discovery** et cliquez sur **Add** pour ajouter une nouvelle
commande.

Saisissez les champs suivants :

* **Command Name** : nom de la commande
* **Command type** : sélectionnez l’option **Discovery**
* **Command Line**: saisir la ligne de commande pour exécuter la sonde et récupérer la liste éléments disponibles

![image](assets/configuration/autodisco/command_disco.png)

Voici un exemple de ligne de commande exécutée dans un terminal :
```Bash
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --mode=list-interfaces --hostname=192.168.220.129 --snmp-version=2 --snmp-community=public --disco-show
```
Et le résultat :
```XML
<?xml version="1.0" encoding="utf-8"?>
<data>
    <label status="1" name="lo" total="10" interfaceid="1"/>
    <label status="1" name="eth0" total="1000" interfaceid="2"/>
</data>
```

Sauvegardez votre commande.

## Sondes de découverte

Une **sonde de découverte** (aussi appelée **plugin**) est un script qui liste un ensemble d’éléments similaires comme
les systèmes de fichiers ou les interfaces réseaux d’un équipement donné.

Cette sonde doit être exécutable en ligne de commande (shell) par l’utilisateur **centreon** (ou l’utilisateur du moteur
de supervision). Il peut être exécuté localement ou à distance en utilisant des protocoles comme SSH ou NRPE.

Les résultats doivent être présentés dans un flux XML valide où chaque élément doit être décrit comme un attribut d’un
noeud XML. Pour obtenir ce flux XML les sondes de supervision Centreon Plugins utilisent l’option ‘–mode=xxx –disco-show’.

Par exemple :
```Bash
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --mode=list-interfaces --hostname=192.168.220.129 --snmp-version=2 --snmp-community=public --disco-show
```
```XML
<?xml version="1.0" encoding="utf-8"?>
<data>
    <label status="1" name="lo" total="10" interfaceid="1"/>
    <label status="1" name="eth0" total="1000" interfaceid="2"/>
</data>
```

Ici, l’attribut ``name`` correspond au nom de l’interface réseau. ``status`` représente l’état de l’interface
(IFOPERSTATUS), ``total`` la bande passante (IFSPEED) et ``interfaceid`` l’identifiant de l’interface (IFINDEX).

La sonde de découverte doit également lister les attributs disponibles du flux XML via une option. Les sondes de
supervision Centreon Plugins utilisent l’option ‘–mode=xxx –disco-format’.

Par exemple :
```Bash
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --mode=list-interfaces --hostname=127.0.0.1 --disco-format
```
```XML
<?xml version="1.0" encoding="utf-8"?>
<data>
    <element>name</element>
    <element>total</element>
    <element>status</element>
    <element>interfaceid</element>
</data>
```

Ici 4 attributs sont disponibles : ``name``, ``total``, ``status`` et ``interfaceid``.

## Tester manuellement une règle

Il est possible de tester le fonctionnement du module manuellement grâce aux options :

* ``--filter-rule=<rule_name>`` : Permet d’exécuter une règle précise ;
* ``--filter-host=<host_name>`` Permet d’exécuter toutes les règles de découverte dont les modèles d’hôte de celui-ci
  sont liés ;
* ``--filter-poller=<poller_name>`` : Permet d’exécuter les règles de découverte pour les ressources appartenant au
  collecteur ;
* ``--dry-run` : Exécute la découverte sans créer de nouveaux objets en base. Permet de tester le fonctionnement d’une
  règle de découverte.

> YLes option ``--filter-*=<value>`` peut être combinées. L’option ``--dry-run``est indépendante des autres options.

### Exemples

Exécution de toutes les règles :
```Bash
/usr/share/centreon/www//modules/centreon-autodiscovery-server/cron/centreon_autodisco
```

Test de toutes les règles :
```Bash
/usr/share/centreon/www//modules/centreon-autodiscovery-server/cron/centreon_autodisco \
  --dry-run
```

Exécution de la règle **OS-Linux-SNMP-Network-Interfaces-Discovery** sans modification de la configuration Centreon :
```Bash
/usr/share/centreon/www//modules/centreon-autodiscovery-server/cron/centreon_autodisco \
  --filter-rule="OS-Linux-SNMP-Network-Interfaces-Discovery" \
  --dry-run
```

Exécution des règles de découverte pour l’hôte “centreon-server” sans modification de la configuration Centreon :
```Bash
/usr/share/centreon/www//modules/centreon-autodiscovery-server/cron/centreon_autodisco \
  --filter-host="centreon-server" \
  --dry-run
```

Exécution de la règle “OS-Linux-SNMP-Network-Interfaces-Discovery”, pour l’hôte “centreon-server”, sans modification de
la configuration Centreon :
```Bash
/usr/share/centreon/www//modules/centreon-autodiscovery-server/cron/centreon_autodisco \
  --filter-rule="OS-Linux-SNMP-Network-Interfaces-Discovery" \
  --filter-host="centreon-server" \
  --dry-run
```

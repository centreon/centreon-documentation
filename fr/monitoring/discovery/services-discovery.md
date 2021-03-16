---
id: services-discovery
title: Découverte des services
---

## Lancer une découverte manuellement

Une fois les règles de découverte programmées, il est possible de les exécuter
au travers de l’interface web Centreon.

Pour cela, se connecter et accéder au menu `Configuration > Services >
Manuelle`.

Commencez à saisir le nom de l’hôte sur lequel réaliser la découverte et
l’interface vous proposera de compléter automatiquement ce dernier :

![image](../../assets/configuration/autodisco/manual_scan_select_host.png)

Sélectionnez ensuite la commande de découverte à exécuter dans la liste
déroulante qui vient d’apparaître :

![image](../../assets/configuration/autodisco/manual_scan_select_command.png)

> Si cette liste est vide, cela signifie que cet hôte n’appartient pas à un
> modèle d’hôtes lié à une règle de découverte.

Cliquez sur le bouton **Scan** et patienter durant l’analyse des éléments
disponibles :

![image](../../assets/configuration/autodisco/manual_scan_wait.png)

Le résultat s’affiche. Sélectionnez les éléments à intégrer à la supervision et
cliquez sur le bouton **Save** :

![image](../../assets/configuration/autodisco/manual_scan_result.png)

Les éléments ont été ajoutés et il n’est plus possible de les sélectionner :

![image](../../assets/configuration/autodisco/manual_scan_added.png)

> Dans la liste de résultat de la découverte des éléments, il se peut que
> certains éléments ne puissent être sélectionnés. Cela indique qu’ils font déjà
> partie de la configuration.

Les services ont été ajoutés et sont visibles dans le menu `Configuration >
Services > Services par hôte`:

![image](../../assets/configuration/autodisco/manual_scan_services.png)

## Règles de découverte

### General options

Options générales Une règle de découverte permet de créer dynamiquement des
services et de les lier à un hôte, en se basant sur les éléments remontés par
les sondes. Les services unitaires créés sont attachés à des modèles de services
ce qui permet d’utiliser les fonctionnalités de Centreon (héritage, surcharge,
etc.)

Pour créer une règle de découverte, rendez-vous dans le menu `Configuration >
Services > Règles` et cliquez sur **Ajouter** :

![image](../../assets/configuration/autodisco/create_rule_1.png)

Saisissez les premiers champs :

![image](../../assets/configuration/autodisco/create_rule_2.png)

Voici une description des premiers champs à saisir :

  - **Rule name** : nom de la règle
  - **Command Macro** : la commande exécutée pour lister les attributs du flux
    XML
  - **Command Discover** : la commande de découverte exécutée pour lister les
    éléments
  - **Service template**: le modèle de service utilisé pour créer les nouveaux
    services

Rendez-vous dans le second onglet **Inclusions / Exclusions & Macros** tab. You
should see available XML attributes:

![image](../../assets/configuration/autodisco/create_rule_3.png)

Revenez au premier onglet et définir le nom des services qui seront créés ainsi
que les autres champs disponibles :

![image](../../assets/configuration/autodisco/create_rule_4.png)

Saisir le nom du service qui sera créé via le champ **Service display name**.

> Le nom du service peut contenir une macro correspondant à un attribut du flux
> XML. Par exemple, pour une interface réseau, son nom peut être amené par
> l’attribut **name**. **Trafic-$name$ sera** remplacé par **Trafic-eth0** si
> le nom de l’interface est **eth0**. Le nom de l’attribut XML doit être mis
> entre deux caractères **$**.

Puis compléter la règle :

  - **Hosts templates** : Les modèles qui seront utilisés pour définir la liste
    des hôtes pour lesquels les règles de découverte seront exécutées
  - **Linked Instances** : permet d’exécuter la règle que pour les hôtes liés
    aux collecteurs sélectionnées.

> Laisser vide pour exécutr la règle depuis n’importe quel collecteur.

  - **Contacts** : Les contacts qui seront notifiés sur la création ou la
    désactivation de services à la suite de la découverte
  - **Contact groups**: Les groupes de contact qui seront notifiés sur la
    création ou la désactivation de services à la suite de la découverte
  - **Disable elements not found** : Permettre au module de désactiver les
    services associés aux éléments qui ne sont plus trouvés
  - **Update existing services** : Si actif, les services déjà découverts
    seront mis à jour si une propriété change (valeur de macros
    personnalisées, etc.).
  - **Activate** : Activer ou désactiver la règle (la règle sera ignorée par le
    processus de découverte si elle est désactivée).

Cliquer sur **Save** pour sauvegarder la règle de découverte.

### Inclusions / Exclusions & Macros

Les **Inclusions / Exclusions et Macro** fonctionnent de la manière suivante :

![image](../../assets/configuration/autodisco/create_rule_5.png)

Les **Inclusions / Exclusions** permettent d’inclure ou d’exclure des éléments
durant la découverte. Cette inclusion/ exclusion concerne les attributs XML

Les règle d’inclusion/exclusion sont définies à partir de l’algorithme suivant :

  - Si seules des règles d’inclusion sont présentes, la valeur de l’attribut
    correspondant à au moins une inclusion est prise en compte
  - Si seulement des règles d’exclusion sont présentes, chaque élément sera pris
    en compte, sauf ceux correspondant à une exclusion
  - Si les deux types sont présents, le processus vérifiera l’élément
    correspondant à une inclusion puis s’assurera qu’il n’est pas listé dans une
    exclusion
  - Le seconde partie Macros permet de définir la relation entre l’attribut XML
    et la macro du modèle de service. Pour tous les services créés, les valeurs
    des macros seront remplacées par les valeurs des attributs.

![image](../../assets/configuration/autodisco/create_rule_6.png)

> Sur cette image toutes les macros seront créées sur le nouveau service car
> toutes les cases **Empty** sont sélectionnées. Pour ne pas créer ces macros,
> ne pas cocher les cases associées. La macro **$\_SERVICEINTERFACEID** sera
> créée et contiendra la valeur associée à l’attribut XML **$interfaceid** de
> l’élément.

### Options avancées

Le dernier onglet **Advanced** permet d’appliquer des regexp sur le champ
**Service display name** ou tout attribut du flux XML. Cliquer sur **Add a new
entry** pour ajouter une nouvelle entrée en définissant l’expression et le
résultat attendu :

![image](../../assets/configuration/autodisco/create_rule_7.png)

L’expression peut être appliquée sur :

  - **@SERVICENAME@** : le nom du service qui sera créé
  - tous les attributs du flux XML via **$attribute\_name$**

La seconde partie **Customize** code permet d’utiliser du code Perl.

**Custom display scan** permet de modifier l’affichage dans la découverte
manuelle Par défaut, la découverte manuelle affiche le nom du service. Voici un
exemple pour ajouter la taille des disques :

``` perl
my ($value, $unit) = change_bytes(value => $total$);
$description = "<span style='color: red; font-weight: bold'>@SERVICENAME@</span> [size = <b>$value $unit</b>]";
```

**Custom variables** permet de créer des macros personnalisables. Voici un
exemple pour définir des seuils dynamiques selon la taille des disques :

``` perl
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

Il est possible d’utiliser les macros **$warning$** et **$critical$** dans la
partie **Macros**.

## Commandes de découverte

Une **discovery commands** est la définition d’une ligne de commande exécutant
la [sonde de découverte](#discovery-plugins).

Chaque sonde de découverte doit disposer de deux commandes :

  - La première pour récupérer la liste des attributs du flux XML
  - La seconde pour récupérer la liste des éléments découverts sur l’équipement

![image](../../assets/configuration/autodisco/commands_list.png)

### Commande pour récupérer la liste des attributs XML

Rendez-vous dans le menu `Configuration > Commandes > Découverte` et cliquez sur
**Ajouter** pour ajouter une nouvelle commande.

Saisissez les champs suivants :

  - **Command Name** : nom de la commande
  - **Command type** : sélectionnez l’option **Discovery**
  - **Command Line** : saisissez la ligne de commande pour exécuter la sonde et
    récupérer la liste des attributs XML

> Toute commande utilisant les sondes du projet Centreon Plugin doit définir
> l’option **hostname**. Donc ajoutez l’option **--hostname=127.0.0.1** dans
> votre commande.

![image](../../assets/configuration/autodisco/command_attributes.png)

Voici un exemple de ligne de commande exécutée dans un terminal :

``` shell
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --mode=list-interfaces --hostname=127.0.0.1 --disco-format
```

Et le résultat :

``` xml
<?xml version="1.0" encoding="utf-8"?>
<data>
    <element>name</element>
    <element>total</element>
    <element>status</element>
    <element>interfaceid</element>
</data>
```

Sauvegardez votre commande.

### Commande pour récupérer la liste des items d'un hôte

Rendez-vous dans le menu `Configuration > Commandes > Découverte` et cliquez sur
**Ajouter** pour ajouter une nouvelle commande.

Saisissez les champs suivants :

  - **Command Name** : nom de la commande
  - **Command type** : sélectionnez l’option **Discovery**
  - **Command Line**: saisir la ligne de commande pour exécuter la sonde et
    récupérer la liste éléments disponibles

![image](../../assets/configuration/autodisco/command_disco.png)

Voici un exemple de ligne de commande exécutée dans un terminal :

``` shell
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --mode=list-interfaces --hostname=192.168.220.129 --snmp-version=2 --snmp-community=public --disco-show
```

Et le résultat :

``` xml
<?xml version="1.0" encoding="utf-8"?>
<data>
    <label status="1" name="lo" total="10" interfaceid="1"/>
    <label status="1" name="eth0" total="1000" interfaceid="2"/>
</data>
```

Sauvegardez votre commande.

## Sondes de découverte

Une **sonde de découverte** (aussi appelée **plugin**) est un script qui liste
un ensemble d’éléments similaires comme les systèmes de fichiers ou les
interfaces réseaux d’un équipement donné.

Cette sonde doit être exécutable en ligne de commande (shell) par l’utilisateur
**centreon** (ou l’utilisateur du moteur de supervision). Il peut être exécuté
localement ou à distance en utilisant des protocoles comme SSH ou NRPE.

Les résultats doivent être présentés dans un flux XML valide où chaque élément
doit être décrit comme un attribut d’un noeud XML. Pour obtenir ce flux XML les
sondes de supervision Centreon Plugins utilisent l’option ‘–mode=xxx
–disco-show’.

Par exemple :

``` shell
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --mode=list-interfaces --hostname=192.168.220.129 --snmp-version=2 --snmp-community=public --disco-show
```

``` xml
<?xml version="1.0" encoding="utf-8"?>
<data>
    <label status="1" name="lo" total="10" interfaceid="1"/>
    <label status="1" name="eth0" total="1000" interfaceid="2"/>
</data>
```

Ici, l’attribut `name` correspond au nom de l’interface réseau. `status`
représente l’état de l’interface (IFOPERSTATUS), `total` la bande passante
(IFSPEED) et `interfaceid` l’identifiant de l’interface (IFINDEX).

La sonde de découverte doit également lister les attributs disponibles du flux
XML via une option. Les sondes de supervision Centreon Plugins utilisent
l’option ‘–mode=xxx –disco-format’.

Par exemple :

``` shell
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --mode=list-interfaces --hostname=127.0.0.1 --disco-format
```

``` xml
<?xml version="1.0" encoding="utf-8"?>
<data>
    <element>name</element>
    <element>total</element>
    <element>status</element>
    <element>interfaceid</element>
</data>
```

Ici 4 attributs sont disponibles : `name`, `total`, `status` et `interfaceid`.

## Tester manuellement une règle

Il est possible de tester le fonctionnement du module manuellement grâce aux
options :

| Directive       | Type    | Description                                                                                             |
|-----------------|---------|---------------------------------------------------------------------------------------------------------|
| filter\_rules   | tableau | Permet d’exéxuter la ou les règles                                                                      |
| filter\_hosts   | tableau | Permet d’exécuter toutes les règles de découverte liées aux modèles d’hôte de ou des hôtes sélectionnés |
| filter\_pollers | tableau | Permet d’exécuter les règles de découverte pour les ressources appartenant à ou aux Collecteurs         |
| dry\_run        | booléen | Exécute la découverte sans changement dans la confugration (utiliser à des fin de test)                 |

### Exemples

Exécution de toutes les règles :

``` shell
curl --request POST "http://localhost:8085/api/centreon/autodiscovery/services" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{}'
```

Test de toutes les règles :

``` shell
curl --request POST "http://localhost:8085/api/centreon/autodiscovery/services" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "dry_run": 1
}'
```

Test d'une règle en particuliers :

``` shell
curl --request POST "http://localhost:8085/api/centreon/autodiscovery/services" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "filters_rules": ["OS-Linux-SNMP-Network-Interfaces-Discovery"],
    "dry_run": 1
}'
```

Test de toutes les règles liées aux modèles d'hôte utilisés par l'hôte défini :

``` shell
curl --request POST "http://localhost:8085/api/centreon/autodiscovery/services" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "filters_hosts": ["centreon-server"],
    "dry_run": 1
}'
```

Test d'une règle en particuliers pour l'hôte défini :

``` shell
curl --request POST "http://localhost:8085/api/centreon/autodiscovery/services" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "filters_rules": ["OS-Linux-SNMP-Network-Interfaces-Discovery"],
    "filters_hosts": ["centreon-server"],
    "dry_run": 1
}'
```

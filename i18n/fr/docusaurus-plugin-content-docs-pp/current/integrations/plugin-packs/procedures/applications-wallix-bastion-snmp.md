---
id: applications-wallix-bastion-snmp
title: Wallix Bastion SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack de supervision

### Objets supervisés

Le Pack Wallix Bastion collecte les données pour:
* License
* System

### Métriques collectées 

<Tabs groupId="sync">
<TabItem value="License" label="License">

| Metric name                                   | Description                                 | Unit  |
| :-------------------------------------------- | :------------------------------------------ | :---- |
| license status                                | Status of the licenses                      |       |
| license.expires.seconds                       | Expiration time                             | s     |
| *license\_resource*\#license.usage.count      | Number of used resources on the license     |       |
| *license\_resource*\#license.free.count       | Number of free resources on the license     |       |
| *license\_resource*\#license.usage.percentage | Percentage of used resources on the license | %     |

</TabItem>
<TabItem value="System" label="System">

| Metric name              | Description                             | Unit  |
| :----------------------- | :-------------------------------------- | :---- |
| services status          | Status of all services                  |       |
| sessions.total.count     | Number of total sessions                |       |
| sessions.primary.count   | Number of primary sessions              |       |
| sessions.secondary.count | Number of secondary sessions            |       |
| sessions.ghost.count     | Number of ghost sessions                |       |
| requests.pending.count   | Number of requests pending for approval |       |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler votre application Wallix Bastion, le SNMP doit être configuré.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Wallix-Bastion-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack *Wallix Bastion SNMP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Wallix-Bastion-Snmp
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-applications-wallix-bastion-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack *Wallix Bastion SNMP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
</Tabs>

## Configuration

* Ajoutez un nouvel Hôte depuis la page **Configuration > Hôtes**
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *App-Wallix-Bastion-SNMP-custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres d'authentification et de chiffrement adéquats. <br/>
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |


## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine* :

```bash
/usr/lib/centreon/plugins/centreon_wallix_bastion_snmp.pl \
    --plugin=apps::wallix::bastion::snmp::plugin \
    --mode=system \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='wallix_ro' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: system is ok | 'sessions.total.count'=13;;;0; 'sessions.primary.count'=7;;;0; 'sessions.secondary.count'=6;;;0; 'sessions.ghost.count'=0;;;0; 'requests.pending.count'=2;;;0;
checking system
    services status: running
    sessions total: 13 primary: 7 secondary: 6 ghost: 0
    requests pending: 2
```

Cette commande contrôle l'état du système Wallix Bastion (```--mode=system```) ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *wallix_ro* (```--snmp-community='wallix_ro'```).
 
Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peuvent être affichées
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_wallix_bastion_snmp.pl \
    --plugin=apps::wallix::bastion::snmp::plugin \
    --mode=system \
    --help
```

## Diagnostique

[Diagnostique des plugins](../getting-started/how-to-guides/troubleshooting-plugins.md#troubleshooting-snmp)

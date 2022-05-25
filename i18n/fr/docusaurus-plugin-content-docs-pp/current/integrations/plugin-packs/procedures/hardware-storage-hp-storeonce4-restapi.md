---
id: hardware-storage-hp-storeonce4-restapi
title: HP StoreOnce 4.x Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon HP StoreOnce apporte un modèle d'hôte :
* HW-Storage-Hp-Storeonce4-Restapi-custom

Il apporte les modèles de service suivants :

| Alias            | Modèle de services                                | Défaut  | Découverte |
|:-----------------|:--------------------------------------------------|:--------|:-----------|
| Appliances       | HW-Storage-Hp-Storeonce4-Appliances-Restapi       | X       | X          |
| Hardware-Storage | HW-Storage-Hp-Storeonce4-Hardware-Storage-Restapi | X       |            |
| Stores           | HW-Storage-Hp-Storeonce4-Stores-Restapi           |         | X          |

### Règles de découverte

| Nom de la règle                                     | Description                                             |
|:----------------------------------------------------|:--------------------------------------------------------|
| HW-Storage-Hp-Storeonce4-Restapi-Appliance-Hostname | Découvre les appliances et supervise l'utilisation      |
| HW-Storage-Hp-Storeonce4-Restapi-Store-Name         | Découvre les catalyst stores et supervise l'utilisation |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Appliances" label="Appliances">

| Metric name                                                | Description                               | Unit  |
| :--------------------------------------------------------- | :---------------------------------------- | :---- |
| appliances.detected.count                                  | Number of appliances detected             |       |
| service status                                             | Current appliance service status          |       |
| *appliance_hostname*#appliance.disk.space.usage.bytes      | Space used on the appliance               | B     |
| *appliance_hostname*#appliance.disk.space.free.bytes       | Free space left on the appliance          |       |
| *appliance_hostname*#appliance.disk.space.usage.percentage | Space used on the appliance in percentage | %     |
| *appliance_hostname*#appliance.deduplication.ratio.count   | Deduplication ratio on the appliance      |       |

</TabItem>
<TabItem value="Hardware-Storage" label="Hardware-Storage">

| Metric name                                       | Description                       | Unit |
|:------------------------------------------------- |:--------------------------------- | :--- |
| drive status                                      | Current drive status              |      |
| drive enclosure status                            | Current drive enclosure status    |      |
| fan status                                        | Current fan status                |      |
| *component_location*#hardware.fan.speed.rpm       | Current fan speed                 | rpm  |
| iomodule status                                   | Current I/O module status         |      |
| pool status                                       | Current pool status               |      |
| power supply status                               | Current power supply status       |      |
| temperature status                                | Current temperature probes status |      |
| *component_location*#hardware.temperature.celsius | Current temperature               | C    |

</TabItem>
<TabItem value="Stores" label="Stores">

| Metric name                                  | Description                               | Unit  |
| :------------------------------------------- | :---------------------------------------- | :---- |
| stores.detected.count                        | Number of catalyst stores detected        |       |
| store health                                 | Current catalyst store health level       |       |
| *store_name*#store.disk.space.usage.bytes    | Disk space used on the catalyst store     | B     |
| *store_name*#store.user.space.usage.bytes    | User space used on the catalyst store     | B     |
| *store_name*#store.deduplication.ratio.count | Deduplication ratio on the catalyst store |       |

</TabItem>
</Tabs>

## Prérequis

Ce Pack supporte uniquement les versions 4.x des équipements HP StoreOnce.
Pour la supervision, un utilisateur avec les droits en lecture est nécessaire. Référez vous à la documentation officielle: https://hewlettpackard.github.io/storeonce-rest/index.html

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **HP StoreOnce 4.x Rest API** :

```bash
yum install centreon-plugin-Hardware-Storage-Hp-Storeonce4-Restapi
```

2. Sur l'interface web de Centreon, installer le Pack **HP StoreOnce 4.x Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **HP StoreOnce 4.x Rest API** :

```bash
yum install centreon-plugin-Hardware-Storage-Hp-Storeonce4-Restapi
```

2. Sur le serveur central Centreon, installer le RPM du Pack **HP StoreOnce 4.x Rest API** :

```bash
yum install centreon-pack-hardware-storage-hp-storeonce4-restapi
```

3. Sur l'interface web de Centreon, installer le Pack **HP StoreOnce 4.x Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre serveur **HP StoreOnce 4.x Rest API**.
* Appliquez le modèle d'hôte **HW-Storage-Hp-Storeonce4-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Nom                      | Description                                                                |
| :---------- | :----------------------- | :------------------------------------------------------------------------- |
| X           | STOREONCEAPIPORT         | Port used (Default: 443)                                                   |
| X           | STOREONCEAPIPROTO        | Specify http if needed (default: 'https')                                  |
| X           | STOREONCEAPIUSERNAME     | Api username                                                               |
| X           | STOREONCEAPIPASSWORD     | Api password                                                               |
|             | STOREONCEAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
$CENTREONPLUGINS$/centreon_hp_storeonce4_restapi.pl \
    --plugin=storage::hp::storeonce::4::restapi::plugin \
    --mode=stores \
    --hostname='10.0.0.1' \
    --port='443' \
    --proto='https' \
    --api-username='my-username' \
    --api-password='my-password' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All catalyst stores are ok | 'stores.detected.count'=3;;;0; 'Catalyst01#store.disk.space.usage.bytes'=1838969531121B;;;0; 'Catalyst01#store.user.space.usage.bytes'=62700600887099B;;;0; 'Catalyst01#store.deduplication.ratio.count'=34.00;;;0; 'Catalyst02#store.disk.space.usage.bytes'=50306416657426B;;;0; 'Catalyst02#store.user.space.usage.bytes'=1793362240355355B;;;0; 'Catalyst02#store.deduplication.ratio.count'=35.60;;;0; 'Catalyst03#store.disk.space.usage.bytes'=21192464324702B;;;0; 'Catalyst03#store.user.space.usage.bytes'=540818386772559B;;;0; 'Catalyst03#store.deduplication.ratio.count'=25.50;;;0;
checking catalyst store 'Catalyst01'
    health: ok
    disk space used: 1.67TB, user space used: 57.03TB
    deduplication ratio: 34.00
checking catalyst store 'Catalyst02'
    health: ok
    disk space used: 45.75TB, user space used: 1631.05TB
    deduplication ratio: 35.60
checking catalyst store 'Catalyst03'
    health: ok
    disk space used: 19.27TB, user space used: 491.87TB
    deduplication ratio: 25.50
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
$CENTREONPLUGINS$/centreon_hp_storeonce4_restapi.pl \
    --plugin=storage::hp::storeonce::4::restapi::plugin \
    --mode=stores \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
$CENTREONPLUGINS$/centreon_hp_storeonce4_restapi.pl \
    --plugin=storage::hp::storeonce::4::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

---
id: hardware-storage-dell-powerstore-restapi
title: Dell PowerStore Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Objets supervisés

Le Pack Centreon **Dell PowerStore** apporte un modèle d'hôte :
* HW-Storage-Dell-Powerstore-Restapi-custom

Il apporte les modèles de services suivants :

| Alias    | Modèle de services                          | Description                            | Défaut  |
|:---------|:--------------------------------------------|:---------------------------------------|:--------|
| Alerts   | HW-Storage-Dell-Powerstore-Alerts-Restapi   | Contrôle les alertes                   | X       |
| Clusters | HW-Storage-Dell-Powerstore-Clusters-Restapi | Contrôle les performances des clusters | X       |
| Hardware | HW-Storage-Dell-Powerstore-Hardware-Restapi | Contrôle l'état du matériel            | X       |
| Memory   | HW-Storage-Dell-Powerstore-Memory-Restapi   | Contrôle la mémoire                    | X       |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Métrique                       | Unité |
| :----------------------------- | :---- |
| alerts.severity.none.count     |       |
| alerts.severity.info.count     |       |
| alerts.severity.minor.count    |       |
| alerts.severity.major.count    |       |
| alerts.severity.critical.count |       |

</TabItem>
<TabItem value="Clusters" label="Clusters">

| Métrique                                                   | Unité |
| :--------------------------------------------------------- | :---- |
| clusters.detected.count                                    |       |
| *cluster_id*#cluster.io.read.latency.5m.milliseconds       | ms    |
| *cluster_id*#cluster.io.read.latency.30m.milliseconds      | ms    |
| *cluster_id*#cluster.io.read.latency.1h.milliseconds       | ms    |
| *cluster_id*#cluster.io.read.latency.24h.milliseconds      | ms    |
| *cluster_id*#cluster.io.write.latency.5m.milliseconds      | ms    |
| *cluster_id*#cluster.io.write.latency.30m.milliseconds     | ms    |
| *cluster_id*#cluster.io.write.latency.1h.milliseconds      | ms    |
| *cluster_id*#cluster.io.write.latency.24h.milliseconds     | ms    |
| *cluster_id*#cluster.io.read.5m.iops                       |       |
| *cluster_id*#cluster.io.read.30m.iops                      |       |
| *cluster_id*#cluster.io.read.1h.iops                       |       |
| *cluster_id*#cluster.io.read.24h.iops                      |       |
| *cluster_id*#cluster.io.write.5m.iops                      |       |
| *cluster_id*#cluster.io.write.30m.iops                     |       |
| *cluster_id*#cluster.io.write.1h.iops                      |       |
| *cluster_id*#cluster.io.write.24h.iops                     |       |
| *cluster_id*#cluster.io.read.bandwidth.5m.bytespersecond   | B/s   |
| *cluster_id*#cluster.io.read.bandwidth.30m.bytespersecond  | B/s   |
| *cluster_id*#cluster.io.read.bandwidth.1h.bytespersecond   | B/s   |
| *cluster_id*#cluster.io.read.bandwidth.24h.bytespersecond  | B/s   |
| *cluster_id*#cluster.io.write.bandwidth.5m.bytespersecond  | B/s   |
| *cluster_id*#cluster.io.write.bandwidth.30m.bytespersecond | B/s   |
| *cluster_id*#cluster.io.write.bandwidth.1h.bytespersecond  | B/s   |
| *cluster_id*#cluster.io.write.bandwidth.24h.bytespersecond | B/s   |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Métrique            | Unité |
| :------------------ | :---- |
| appliance status    |       |
| battery status      |       |
| dimm status         |       |
| disk status         |       |
| enclosure status    |       |
| fan status          |       |
| node status         |       |
| io module status    |       |
| power supply status |       |
| sfp status          |       |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                               | Unité |
| :------------------------------------- | :---- |
| *appliance_id*#memory.usage.bytes      | B     |
| *appliance_id*#memory.free.bytes       | B     |
| *appliance_id*#memory.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler votre équipement Dell PowerStore, l'API Rest doit être configurée (cf: https://downloads.dell.com/manuals/common/pwrstr-apig_en-us.pdf).

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Dell PowerStore** :

```bash
yum install centreon-plugin-Hardware-Storage-Dell-Powerstore-Restapi
```

2. Sur l'interface web de Centreon, installer le Pack **Dell PowerStore Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Dell PowerStore** :

```bash
yum install centreon-plugin-Hardware-Storage-Dell-Powerstore-Restapi
```

2. Sur le serveur central Centreon, installer le RPM du Pack **Dell PowerStore Rest API** :

```bash
yum install centreon-pack-hardware-storage-dell-powerstore-restapi
```

3. Sur l'interface web de Centreon, installer le Pack **Dell PowerStore Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** et **IP Address / DNS** correspondant à votre serveur **Dell PowerStore**.
* Appliquez le modèle d'hôte **HW-Storage-Dell-Powerstore-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Nom             | Description                                                                |
| :---------- | :-------------- | :------------------------------------------------------------------------- |
| X           | APIPORT         | Port used (Default: 443)                                                   |
| X           | APIPROTO        | Specify https if needed (Default: 'https')                                 |
| X           | APIUSERNAME     | Api username                                                               |
| X           | APIPASSWORD     | Api password                                                               |
|             | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \
    --plugin=storage::dell::powerstore::restapi::plugin \
    --mode=alerts \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
CRITICAL: 1 alerts detected | 'alerts.severity.none.count'=0;;;0; 'alerts.severity.info.count'=1;;;0; 'alerts.severity.minor.count'=0;;;0; 'alerts.severity.major.count'=1;;;0; 'alerts.severity.critical.count'=0;;;0; 'alerts.problems.current.count'=1;;;0;
critical: alert [severity: major] [name: XMS_JBOD_CONTROLLER_SAS1_HEALTH_LEVEL_LEVEL_1_CLEAR] [resource: ] 2021-09-08T08:13:14.804936+00:00
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \
    --plugin=storage::dell::powerstore::restapi::plugin \
    --mode=alerts \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \
    --plugin=storage::dell::powerstore::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

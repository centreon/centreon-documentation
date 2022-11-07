---
id: hardware-storage-netapp-ontap-restapi
title: NetApp Ontap Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

ONTAP ou Data ONTAP ou Clustered Data ONTAP (cDOT) ou Data ONTAP 7-Mode est un système d'exploitation proriétaire NetApp utilisé sur le stockage de données.

## Contenu du Plugin-Pack

### Éléments supervisés

Le Plugin-Pack permet de superviser les ressources:

* Aggregates
* Cluster
* Hardware
* Luns
* Snapmirrors
* Volumes

### Métriques collectées

Les métriques collectées sont les suivantes:

<Tabs groupId="sync">
<TabItem value="Aggregates" label="Aggregates">

| Metric name                             | Unit  |
|:----------------------------------------|:------|
| aggregate.space.usage.bytes             | B     |
| aggregate.space.free.bytes              | B     |
| aggregate.space.usage.percentage        | %     |
| aggregate.io.read.usage.bytespersecond  | B/s   |
| aggregate.io.write.usage.bytespersecond | B/s   |
| aggregate.io.other.usage.bytespersecond | B/s   |
| aggregate.io.total.usage.bytespersecond | B/s   |
| aggregate.io.read.usage.iops            | iops  |
| aggregate.io.write.usage.iops           | iops  |
| aggregate.io.other.usage.iops           | iops  |
| aggregate.io.total.usage.iops           | iops  |
| aggregate.io.read.latency.microseconds  | µs    |
| aggregate.io.write.latency.microseconds | µs    |
| aggregate.io.other.latency.microseconds | µs    |
| aggregate.io.total.latency.microseconds | µs    |

</TabItem>
<TabItem value="Cluster" label="Cluster">

| Metric name                           | Description                                                                                    |
| :------------------------------------ | :--------------------------------------------------------------------------------------------- |
| node_status                           | The node status                                                                                |
| cluster.io.read.usage.bytespersecond  | I/O read. Unit: B/s                                                                            |
| cluster.io.write.usage.bytespersecond | I/O written. Unit: B/s                                                                         |
| cluster.io.read.usage.iops            | I/O read per seconds. Unit: iops                                                               |
| cluster.io.write.usage.iops           | I/O written per seconds. Unit: iops                                                            |
| cluster.io.read.latency.milliseconds  | I/O read latency. Unit: ms                                                                     |
| cluster.io.write.latency.milliseconds | I/O written latency. Unit: ms                                                                  |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name                         | Description                                                                 |
| :---------------------------------- | :---------------------------------------------------------------------------|
| status                              | Check components operational status: bay, fru, shelf. Unit: count           |

</TabItem>
<TabItem value="Luns" label="Luns">

| Metric name                         | Description                                                                 |
| :---------------------------------- | :---------------------------------------------------------------------------|
| status                              | The LUN status                                                              |

</TabItem>
<TabItem value="Snapmirrors" label="Snapmirrors">

| Metric name                         | Description                                                                 |
| :---------------------------------- | :---------------------------------------------------------------------------|
| status                              | The snapmirror status                                                       |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Metric name                          | Description                                                                                    |
| :----------------------------------- | :--------------------------------------------------------------------------------------------- |
| status                               | The volume status                                                                              |
| volume.space.usage.bytes             | Volume space usage. Unit: B. By instances (```volume_name```)                                  |
| volume.space.usage.percentage        | Volume space percentage usage. Unit: %. By instances (```volume_name```)                       |
| volume.space.free.bytes              | Volume free space. Unit: B. By instances (```volume_name```)                                   |
| volume.io.read.usage.bytespersecond  | Volume I/O read. Unit: B/s. By instances (```volume_name```)                                   |
| volume.io.write.usage.bytespersecond | Volume I/O written. Unit: B/s. By instances (```volume_name```)                                |
| volume.io.read.usage.iops            | Volume I/O read per seconds. Unit: iops. By instances (```volume_name```)                      |
| volume.io.write.usage.iops           | Volume I/O written per seconds. Unit: iops. By instances (```volume_name```)                   |
| volume.io.read.latency.milliseconds  | Volume I/O read latency. Unit: ms. By instances (```volume_name```)                            |
| volume.io.write.latency.milliseconds | Volume I/O written latency. Unit: ms. By instances (```volume_name```)                         |

</TabItem>
</Tabs>

## Prérequis

### Configuration

Un compte en lecture est requis (user/password).

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources NetApp Ontap:

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Ontap-Restapi
```

2. Depuis l'interface Web de Centreon, installer le Plugin-Pack *NetApp Ontap Rest API* depuis la page "Configuration > Plugin Packs > Manager"

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources NetApp Ontap:

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Ontap-Restapi
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-hardware-storage-netapp-ontap-restapi
```

3. Depuis l'interface Web de Centreon, installer le Plugin-Pack *NetApp Ontap Rest API* depuis la page "Configuration > Plugin Packs > Manager"

</TabItem>
</Tabs>

## Configuration

* Depuis l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes".
* Appliquez le modèle d'Hôte "HW-Storage-NetApp-Ontap-Restapi-custom" et configurer les macros nécessaires :

| Mandatory   | Nom                    | Description                                                                |
| :---------- | :--------------------- | :------------------------------------------------------------------------- |
| X           | APIPORT                | Port used. Default is 443                                                  |
| X           | APIPROTO               | Protocol used. Default is https                                            |
| X           | APIUSERNAME            | Username to access to the API.                                             |
| X           | APIPASSWORD            | Password to access to the API.                                             |
|             | APIEXTRAOPTIONS        | Any extra option you may want to add to the command                        |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur
Centreon avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_netapp_ontap_restapi.pl \	
    --plugin=storage::netapp::ontap::restapi::plugin \
    --hostname=netapp.centreon.com \
    --port=443 \
    --proto=https \
    --api-username='admin' \
    --api-password='xxxx' \
    --mode=volumes \
    --verbose
```

Cette commande vérifie le statut des volumes NetApp (```--mode=volumes```) du stockage *netapp.centreon.com* (```--hostname=netapp.centreon.com```).
L'authentification à l'API s'effectue avec un utilisateur *admin* (```--api-username=admin```) et un mot de passe *xxxx* associé (```--api-password='xxxx'```).

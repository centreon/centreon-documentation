---
id: applications-monitoring-ntopng-restapi
title: NtopNG Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon NtopNG apporte 1 modèle d'hôte :
* App-Monitoring-Ntopng-Restapi-custom

Il apporte les Modèles de Service suivants :

| Service Alias  | Service Template                             | Default | Discovery |
|:---------------|:---------------------------------------------|:--------|:----------|
| Alerts         | App-Monitoring-Ntopng-Restapi-Alerts         | X       |           |
| Host-Flows     | App-Monitoring-Ntopng-Restapi-Host-Flows     |         |           |
| Netflow-Health | App-Monitoring-Ntopng-Restapi-Netflow-Health | X       |           |
| Probe-Health   | App-Monitoring-Ntopng-Restapi-Probe-Health   | X       |           |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Metric name                       | Description                                  | Unit  |
| :-------------------------------- | :------------------------------------------- | :---- |
| alerts.severity.error.count       | Number of alerts with error severity         |       |
| alerts.severity.warning.count     | Number of alerts with warning severity       |       |
| alerts.severity.info.count        | Number of alerts with informational severity |       |
| alert status                      | Current alert status                         |       |
| *type*#alerts.type.detected.count | Number of alerts detected by type            |       |

</TabItem>
<TabItem value="Host-Flows" label="Host-Flows">

| Metric name                                 | Description                               | Unit  |
| :------------------------------------------ | :---------------------------------------- | :---- |
| *ipaddress*#host.packets.received.persecond | Number of incoming packets per IP address |       |
| *ipaddress*#host.packets.sent.persecond     | Number of outgoing packets per IP address |       |
| *ipaddress*#host.traffic.in.bitspersecond   | Incoming traffic per IP address           | b/s   |
| *ipaddress*#host.traffic.out.bitspersecond  | Outgoing traffic per IP address           | b/s   |

</TabItem>
<TabItem value="Netflow-Health" label="Netflow-Health">

| Metric name                  | Description                          | Unit  |
| :--------------------------- | :----------------------------------- | :---- |
| flows.detected.count         | Number of flows detected             |       |
| flows.alerted.detected.count | Number of alerted flows detected     |       |
| flows.alerted.percentage     | Percentage of alerted flows detected | %     |
| packets.download.persecond   | Number of incoming packets           |       |
| packets.upload.persecond     | Number of outgoing packets           |       |
| traffic.in.bitspersecond     | Incoming traffic                     | b/s   |
| traffic.out.bitspersecond    | Outgoing traffic                     | b/s   |

</TabItem>
<TabItem value="Probe-Health" label="Probe-Health">

| Metric name                | Description              | Unit  |
| :------------------------- | :----------------------- | :---- |
| cpu.utilization.percentage | Average total CPU usage  |       |
| cpu.load.percentage        | System CPU load          |       |
| memory.usage.percentage    | Current memory usage     | %     |
| alerts.dropped.persecond   | Number of dropped alerts |       |

</TabItem>
</Tabs>

## Prérequis

Afin de superviser votre NtopNG, l'API Rest doit être configurée.
cf: https://www.ntop.org/guides/ntopng/api/

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **NtopNG RestAPI** :

```bash
yum install centreon-plugin-Applications-Monitoring-Ntopng-Restapi
```

2. Sur l'interface Web de Centreon, installer le Pack **NtopNG RestAPI** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **NtopNG RestAPI** :

```bash
yum install centreon-plugin-Applications-Monitoring-Ntopng-Restapi
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **NtopNG RestAPI** :

```bash
yum install centreon-pack-applications-monitoring-ntopng-restapi
```

3. Sur l'interface Web de Centreon, installer le Pack **NtopNG RestAPI** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre serveur **NtopNG RestAPI**.
* Appliquez le modèle d'hôte **App-Monitoring-Ntopng-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name                | Description                                                                  |
| :-------- | :-------------------- | :------------------------------------------------------------------------- |
| X         | NTOPNGAPIPORT         | Port used (Default: 3000)                                                  |
| X         | NTOPNGAPIPROTO        | Specify https if needed (default: 'http')                                  |
| X         | NTOPNGAPIUSERNAME     | Api username                                                               |
| X         | NTOPNGAPIPASSWORD     | Api password                                                               |
|           | NTOPNGAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_monitoring_ntopng_restapi.pl \
    --plugin=apps::monitoring::ntopng::restapi::plugin \
    --mode=probe-health \
    --hostname='10.0.0.1' \
    --port='443' \
    --proto='https' \
    --api-username='my-username' \
    --api-password='my-password' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: cpu utilization: 2.10%, cpu load: 0.06, memory used: 11.83 %, dropped alerts: 0.00/s | 'cpu.utilization.percentage'=2.10%;;;0;100 'cpu.load.percentage'=0.06;;;0; 'memory.usage.percentage'=11.83%;;;0;100 'alerts.dropped.persecond'=0.00/s;;;0;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_ntopng_restapi.pl \
    --plugin=apps::monitoring::ntopng::restapi::plugin \
    --mode=probe-health \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_ntopng_restapi.pl \
    --plugin=apps::monitoring::ntopng::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

---
id: hardware-devices-hms-netbiter-argos-restapi
title: HMS Netbiter Argos RestAPI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **HMS Netbiter Argos RestAPI** apporte un modèle d'hôte :

* HW-Device-Hms-Netbiter-Argos-Restapi-custom

Il apporte les modèles de service suivants :

| Alias          | Modèle de service                                   | Description                     | Défaut | Découverte |
|:---------------|:----------------------------------------------------|:--------------------------------|:-------|:-----------|
| Alarms         | HW-Device-Hms-Netbiter-Argos-Alarms-Restapi         | Contrôle les alarmes du système | X      |            |
| Sensors-Global | HW-Device-Hms-Netbiter-Argos-Sensors-Global-Restapi | Contrôle les sondes             |        | X          |

> Les services par **Défaut** sont créés automatiquement lorsque le modèle d'hôte est appliqué.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Nom de la règle                | Description                                            |
|:-------------------------------|:-------------------------------------------------------|
| Netbiter Argos RestAPI Systems | Discover HMS/Ewon Netbiter Systems using Argos RestAPI |

> Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery)
> pour en savoir plus sur la découverte automatique d'hôtes.

</TabItem>
<TabItem value="Service" label="Service">

| Nom de la règle                                  | Description                        |
|:-------------------------------------------------|:-----------------------------------|
| HW-Device-Hms-Netbiter-Argos-Restapi-Sensor-Name | Discover HMS/Ewon Netbiter Sensors |

> Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
> pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Métrique            | Unité  |
|:-----------------------|:------|
| alarm.duration.seconds | s     |
| alarms.total.count     | count |
| alarm-active           | N/A   |
| alarm-acked            | N/A   |
| alarm-severity         | N/A   |

</TabItem>
<TabItem value="Sensors-Global" label="Sensors-Global">

| Metric Name          | Unité |
|:---------------------|:------|
| sensor.reading.count | count |

</TabItem>
</Tabs>

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-devices-hms-netbiter-argos-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-devices-hms-netbiter-argos-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-devices-hms-netbiter-argos-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-devices-hms-netbiter-argos-restapi
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **HMS Netbiter Argos RestAPI**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Devices-Hms-Netbiter-Argos-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Hardware-Devices-Hms-Netbiter-Argos-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Devices-Hms-Netbiter-Argos-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-devices-hms-netbiter-argos-restapi
```

</TabItem>
</Tabs>

## Configuration

### Hôte

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom** & **Alias** correspondant à votre ressource.
3. Indiquez le FQDN de l'API Netbiter (généralement *api.netbiter.net*) dans le champ **IP Address/DNS**.
4. Appliquez le modèle d'hôte **HW-Device-Hms-Netbiter-Argos-Restapi-custom-custom**.
5. Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro        | Description                                                                              | Défaut |
|:----------|:-------------|:-----------------------------------------------------------------------------------------|:--------|
|           | APIACCESSKEY | For Access Key "direct" authentication method. Example: --access-key='ABCDEFG1234567890' |         |
|           | APIPASSWORD  | For Username/Password authentication method. Must be used with --api-password option     |         |
| X         | APIPORT      | Port used                                                                                | 443     |
| X         | APIPROTO     | Specify https if needed                                                                  | https   |
|           | APIUSERNAME  | For Username/Password authentication method. Must be used with --api-password option     |         |
|           | PROXYURL     | Proxy URL                                                                                |         |
| X         | SYSTEMID     | Set the Netbiter Argos System ID                                                         |         |
|           | EXTRAOPTIONS | Any extra option you may want to add to every command line (eg. a --verbose flag)        |         |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_hms_netbiter_argos_restapi.pl \
    --plugin=hardware::devices::hms::netbiter::argos::restapi::plugin \
    --mode=alarms \
    --hostname='api.netbiter.net' \
    --port='443' \
    --proto='https' \
    --proxyurl='' \
    --access-key='ABCDEFG1234567890' \
    --system-id='XYZ123'  \
    --warning-alarms-total='1' \
    --critical-alarms-total='2'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Alarms: total current: 0 | 'alarms.total.count'=0;;;0 ;;;;;
```

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_hms_netbiter_argos_restapi.pl \
    --plugin=hardware::devices::hms::netbiter::argos::restapi::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode         | Modèle de service associé                           |
|:-------------|:----------------------------------------------------|
| alarms       | HW-Device-Hms-Netbiter-Argos-Alarms-Restapi         |
| discovery    | Not used in this Plugin Pack                        |
| list-sensors | Used for service discovery                          |
| sensors      | HW-Device-Hms-Netbiter-Argos-Sensors-Global-Restapi |


### Options complémentaires

#### Options globales

Les options globales aux modes sont listées ci-dessus :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type         |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --mode                                     | Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global       |
| --dyn-mode                                 | Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global       |
| --list-mode                                | List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global       |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global       |
| --version                                  | Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global       |
| --custommode                               | Choose a custom mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global       |
| --list-custommode                          | List available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Global       |
| --multiple                                 | Multiple custom mode objects (required by some specific modes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global       |
| --pass-manager                             | Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global       |
| --verbose                                  | Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --debug                                    | Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --filter-perfdata                          | Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output       |
| --filter-perfdata-adv                      | Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output       |
| --explode-perfdata-max                     | Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output       |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output       |
| --extend-perfdata-group                    | Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output       |
| --change-short-output --change-long-output | Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --change-exit                              | Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output       |
| --filter-uom                               | Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output       |
| --opt-exit                                 | Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --output-ignore-perfdata                   | Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --output-ignore-label                      | Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --output-xml                               | Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output       |
| --output-json                              | Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output       |
| --output-openmetrics                       | Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output       |
| --output-file                              | Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --disco-format                             | Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output       |
| --disco-show                               | Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output       |
| --float-precision                          | Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --source-encoding                          | Set encoding of monitoring sources (In some case. Default: 'UTF-8').      Netbiter Argos RestAPI                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --hostname                                 | Argos API hostname (Default: api.netbiter.net).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Api          |
| --port                                     | Port used (Default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Api          |
| --proto                                    | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Api          |
| --api-endpoint                             | Argos API requests endpoint (Default: '/operation/v1/rest/json')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Api          |
| --access-key                               | For Access Key "direct" authentication method. Example: --access-key='ABCDEFG1234567890'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Api          |
| --api-username                             | For Username/Password authentication method. Must be used with --api-password option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Api          |
| --api-password                             | For Username/Password authentication method. Must be used with --api-username option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Api          |
| --timeout                                  | Set timeout in seconds (Default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Api          |
| --http-peer-addr                           | Set the address you want to connect (Useful if hostname is only a vhost. no ip resolve)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Http global  |
| --proxyurl                                 | Proxy URL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --proxypac                                 | Proxy pac file (can be an url or local file)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Http global  |
| --insecure                                 | Insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --http-backend                             | Set the backend used (Default: 'lwp') For curl: --http-backend=curl                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Http global  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Backend lwp  |
| --ssl                                      | Set SSL version (=TLSv1).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Backend lwp  |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Backend curl |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Retention    |
| --redis-server                             | Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Retention    |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Retention    |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Retention    |
| --failback-file                            | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Retention    |
| --memexpiration                            | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Retention    |
| --statefile-dir                            | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Retention    |
| --statefile-suffix                         | Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Retention    |
| --statefile-concat-cwd                     | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Retention    |
| --statefile-format                         | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Retention    |
| --statefile-key                            | Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Retention    |
| --statefile-cipher                         | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Retention    |


#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Option                    | Description                                                                                                                                                                                                                                    | Type |
|:--------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-active | Only show active alarms.                                                                                                                                                | Mode |
| --system-id               | Set the Netbiter Argos System ID (Mandatory).                                                                                                                                                                                                  | Mode |
| --filter-acked            | Hide acknowledged alarms.                                                                                                                                                                                                                      | Mode |
| --filter-active           | Only show active alarms.                                                                                                                                                                                                                       | Mode |
| --filter-severity         | Only show alarms with a given severity level. Can be: 'critical', 'major', 'minor', 'warning', 'cleared'. Only one value can be set (no multiple values).                                                                                      | Mode |
| --warning-active-status   | Set warning threshold for active status (Default: ''). Typical syntax: --warning-active-status='%{active} =~ "true"'                                                                                                                           | Mode |
| --critical-active-status  | Set critical threshold for active status (Default: '%{active} =~ "true"'). Typical syntax: --critical-active-status='%{active} =~ "true"'                                                                                                      | Mode |
| --warning-acked-status    | Set warning threshold for acked status (Default: '%{acked} =~ "false"'). Typical syntax: --warning-acked-status='%{acked} =~ "false"'                                                                                                          | Mode |
| --critical-acked-status   | Set critical threshold for acked status (Default: ''). Typical syntax: --critical-acked-status='%{acked} =~ "false"'                                                                                                                           | Mode |
| --warning-* --critical-*  | Thresholds. Can be: 'warning-alarms-total' (count) 'critical-alarms-total' (count), 'warning-alarm-duration' (s), 'critical-alarm-duration' (s), 'warning-alarm-severity' (level from 0 to 5), critical-alarm-severity (level from 0 to 5).    | Mode |

</TabItem>
<TabItem value="Sensors-Global" label="Sensors-Global">

| Option                  | Description                                                                                     | Type |
|:------------------------|:------------------------------------------------------------------------------------------------|:-----|
| --filter-name           | Filter by sensor name (Regexp can be used). Example: --filter-name='^temperature\_(in\|out)$'   | Mode |
| --system-id             | Set the Netbiter Argos System ID (Mandatory).                                                   | Mode |
| --filter-id             | Filter by sensor ID (Regexp can be used). Example: --filter-id='^1234.5678$'                    | Mode |
| --filter-device         | Filter by device name (Regexp can be used). Example: --filter-device='^ZONE(1\|2)$'             | Mode |
| --warning-sensor-value  | Warning threshold.                                                                              | Mode |
| --critical-sensor-value | Critical threshold.                                                                             | Mode |

</TabItem>
</Tabs>



Pour un mode, la liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_hms_netbiter_argos_restapi.pl \
    --plugin=hardware::devices::hms::netbiter::argos::restapi::plugin \
    --mode=alarms \
    --help
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
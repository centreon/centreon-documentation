---
id: network-keysight-nvos-restapi
title: Keysight NVOS Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le connecteur de supervision **Keysight NVOS Rest API** apporte un modèle d'hôte :

* Net-Keysight-Nvos-Restapi-custom

Le connecteur apporte les modèles de service suivants :

| Alias           | Modèle de service                         | Description                                                 | Défaut | Découverte |
|:----------------|:------------------------------------------|:------------------------------------------------------------|:-------|:-----------|
| Dynamic-Filters | Net-Keysight-Nvos-Dynamic-Filters-Restapi | Contrôle les filtres dynamiques                             |        | X          |
| Hardware        | Net-Keysight-Nvos-Hardware-Restapi        | Contrôle l'état du matériel                                 | X      |            |
| Ports           | Net-Keysight-Nvos-Ports-Restapi           | Contrôle les ports                                          |        | X          |
| Time            | Net-Keysight-Nvos-Time-Restapi            | Contrôle le décalage de temps                               | X      |            |
| Uptime          | Net-Keysight-Nvos-Uptime-Restapi          | Durée depuis laquelle l'équipement tourne sans interruption | X      |            |

> Les services par **Défaut** sont créés automatiquement lorsque le modèle d'hôte est appliqué.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

### Règles de découverte

| Nom de la règle                               | Description                                                |
|:----------------------------------------------|:-----------------------------------------------------------|
| Net-Keysight-Nvos-Restapi-Dynamic-Filter-Name | Découvre les filtres dynamiques et supervise l'utilisation |
| Net-Keysight-Nvos-Restapi-Port-Name           | Découvre les ports et supervise le statut et l'utilisation |

> Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Dynamic-Filters" label="Dynamic-Filters">

| Metric Name                                          | Unité |
|:-----------------------------------------------------|:------|
| *df_name*#dynamic_filter.traffic.pass.bytespersecond | B/s   |
| *df_name*#dynamic_filter.traffic.insp.bytespersecond | B/s   |
| *df_name*#dynamic_filter.packets.denied.count        |       |
| *df_name*#dynamic_filter.packets.pass.count          |       |
| *df_name*#dynamic_filter.packets.insp.count          |       |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Métrique                     | Unité |
|:-----------------------------|:------|
| temperature status           |       |
| hardware.temperature.celsius | C     |
| fans.failed.count            |       |
| power supply status          |       |

</TabItem>
<TabItem value="Ports" label="Ports">

| Métrique                                    | Unité |
|:--------------------------------------------|:------|
| license status                              |       |
| link status                                 |       |
| *port_name*#port.traffic.out.percentage     | %     |
| *port_name*#port.traffic.out.bytespersecond | B/s   |
| *port_name*#port.packets.out.count          |       |
| *port_name*#port.packets.dropped.count      |       |
| *port_name*#port.packets.pass.count         |       |
| *port_name*#port.packets.insp.count         |       |

</TabItem>
<TabItem value="Time" label="Time">

| Metric Name         | Unité |
|:--------------------|:------|
| ntp status          |       |
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric Name           | Unité |
|:----------------------|:------|
| system.uptime.seconds |       |

</TabItem>
</Tabs>

## Prérequis

Pour la supervision, un utilisateur avec des droits de lecture sur l'[Automation API](https://docs.bmc.com/docs/automation-api/918/) Control-M est nécessaire.

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
dnf install centreon-pack-network-keysight-nvos-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-keysight-nvos-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-keysight-nvos-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-keysight-nvos-restapi
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Keysight NVOS Rest API**
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
dnf install centreon-plugin-Network-Keysight-Nvos-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Network-Keysight-Nvos-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Keysight-Nvos-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-keysight-nvos-restapi
```

</TabItem>
</Tabs>

## Configuration

### Hôte

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Keysight-Nvos-Restapi-custom**.
4. Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Mandatory      | Macro                       | Description                                                                       | Défaut     |
|:---------------|:----------------------------|:----------------------------------------------------------------------------------|:-----------|
|                | KEYSIGHTNVOSAPIPORT         | Port used                                                                         | 8000       |
|                | KEYSIGHTNVOSAPIPROTO        | Specify https if needed                                                           | https      |
| X              | KEYSIGHTNVOSAPIUSERNAME     | API username                                                                      |            |
| X              | KEYSIGHTNVOSAPIPASSWORD     | API password                                                                      |            |
|                | KEYSIGHTNVOSAPIEXTRAOPTIONS | Any extra option you may want to add to every command line (eg. a --verbose flag) | --insecure |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
	--mode=hardware \
	--hostname='10.0.0.1' \
	--proto='https' \
	--port='8000' \
	--api-username='username' \
	--api-password='*****'  \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: temperature 'MAIN' status: normal, reading: 40 C - all power supplies are ok | 'MAIN#hardware.temperature.celsius'=40C;;;;
temperature 'MAIN' status: normal, reading: 40 C
power supply 'power_module_a' status: good
power supply 'power_module_b' status: good
```

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode                 | Modèle de service associé                 |
|:---------------------|:------------------------------------------|
| dynamic-filters      | Net-Keysight-Nvos-Dynamic-Filters-Restapi |
| hardware             | Net-Keysight-Nvos-Hardware-Restapi        |
| list-dynamic-filters | Used for service discovery                |
| list-ports           | Used for service discovery                |
| ports                | Net-Keysight-Nvos-Ports-Restapi           |
| time                 | Net-Keysight-Nvos-Time-Restapi            |
| uptime               | Net-Keysight-Nvos-Uptime-Restapi          |

### Options complémentaires

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
| --source-encoding                          | Set encoding of monitoring sources (In some case. Default: 'UTF-8').      Keysight NVOS API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output       |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --port                                     | Port used (Default: 8000)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Api          |
| --proto                                    | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Api          |
| --api-username                             | API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --api-password                             | API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --timeout                                  | Set timeout in seconds (Default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Api          |
| --http-peer-addr                           | Set the address you want to connect (Useful if hostname is only a vhost. no ip resolve)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Http global  |
| --proxyurl                                 | Proxy URL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --proxypac                                 | Proxy pac file (can be an url or local file)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Http global  |
| --insecure                                 | Insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --http-backend                             | Set the backend used (Default: 'lwp') For curl: --http-backend=curl                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Http global  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Backend lwp  |
| --ssl                                      | Set SSL version (=TLSv1).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Backend lwp  |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Backend curl |

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Dynamic-Filters" label="Dynamic-Filters">

| Option                   | Description                                                                                                                 | Type      |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                  | Retention |
| --redis-server           | Redis server to use (only one server). SYntax: address\[:port\]                                                             | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                     | Retention |
| --redis-db               | Set Redis database index.                                                                                                   | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                        | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                              | Retention |
| --statefile-dir          | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                         | Retention |
| --statefile-suffix       | Add a suffix for the statefile name (Default: '').                                                                          | Retention |
| --statefile-concat-cwd   | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                  | Retention |
| --statefile-format       | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                          | Retention |
| --statefile-key          | Key to encrypt/decrypt cache.                                                                                               | Retention |
| --statefile-cipher       | Cipher to encrypt cache (Default: 'AES').                                                                                   | Retention |
| --filter-name            | Filter dynamic filters by name (can be a regexp).                                                                           | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'traffic-out-prct', 'traffic-out', 'packets-out', 'packets-dropped', 'packets-pass', 'packets-insp'.    | Mode      |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option                        | Description                                                                                                                   | Type |
|:------------------------------|:------------------------------------------------------------------------------------------------------------------------------|:-----|
| --unknown-temperature-status  | Set unknown threshold for status (Default : '%{status} eq "unknown"'). Can used special variables like: %{status}, %{class}   | Mode |
| --warning-temperature-status  | Set warning threshold for status (Default : '%{status} eq "warn"'). Can used special variables like: %{status}, %{class}      | Mode |
| --critical-temperature-status | Set critical threshold for status (Default: '%{status} eq "hot"'); Can used special variables like: %{status}, %{class}       | Mode |
| --unknown-psu-status          | Set unknown threshold for status. Can used special variables like: %{status}, %{name}                                         | Mode |
| --warning-psu-status          | Set warning threshold for status. Can used special variables like: %{status}, %{name}                                         | Mode |
| --critical-status             | Set critical threshold for status (Default: '%{status} eq "bad"'); Can used special variables like: %{status}, %{name}        | Mode |
| --warning-* --critical-*      | Thresholds. Can be: 'temperature', 'fans-failed'.                                                                             | Mode |

</TabItem>
<TabItem value="Ports" label="Ports">

| Option                    | Description                                                                                                                                                                                   | Type      |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached               | Memcached server to use (only one server).                                                                                                                                                    | Retention |
| --redis-server            | Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                               | Retention |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                       | Retention |
| --redis-db                | Set Redis database index.                                                                                                                                                                     | Retention |
| --failback-file           | Failback on a local file if redis connection failed.                                                                                                                                          | Retention |
| --memexpiration           | Time to keep data in seconds (Default: 86400).                                                                                                                                                | Retention |
| --statefile-dir           | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                           | Retention |
| --statefile-suffix        | Add a suffix for the statefile name (Default: '').                                                                                                                                            | Retention |
| --statefile-concat-cwd    | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                    | Retention |
| --statefile-format        | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                            | Retention |
| --statefile-key           | Key to encrypt/decrypt cache.                                                                                                                                                                 | Retention |
| --statefile-cipher        | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                     | Retention |
| --filter-name             | Filter ports by name (can be a regexp).                                                                                                                                                       | Mode      |
| --unknown-license-status  | Set unknown threshold for status. Can used special variables like: %{status}, %{name}                                                                                                         | Mode      |
| --warning-license-status  | Set warning threshold for status (Default: '%{status} =~ /invalid\_software\_version/'). Can used special variables like: %{status}, %{name}                                                  | Mode      |
| --critical-license-status | Set critical threshold for status. Can used special variables like: %{status}, %{name}                                                                                                        | Mode      |
| --unknown-link-status     | Set unknown threshold for status. Can used special variables like: %{adminStatus}, %{operationalStatus}, %{name}                                                                              | Mode      |
| --warning-link-status     | Set warning threshold for status. Can used special variables like: %{adminStatus}, %{operationalStatus}, %{name}                                                                              | Mode      |
| --critical-link-status    | Set critical threshold for status (Default: '%{adminStatus} eq "enabled" and %{operationalStatus} ne "up"'). Can used special variables like: %{adminStatus}, %{operationalStatus}, %{name}   | Mode      |
| --warning-* --critical-*  | Thresholds. Can be: 'traffic-out-prct', 'traffic-out', 'packets-out', 'packets-dropped', 'packets-pass', 'packets-insp'.                                                                      | Mode      |

</TabItem>
<TabItem value="Time" label="Time">

| Option                | Description                                                                                                                       | Type |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------|:-----|
| --unknown-ntp-status  |                                                                                                                                   | Mode |
| --warning-ntp-status  |                                                                                                                                   | Mode |
| --critical-ntp-status | Set thresholds for status (Default critical: '%{status} !~ /in\_reach\|in\_sync/i')  Can used special variables like: %{status}   | Mode |
| --warning-offset      | Time offset warning threshold (in seconds).                                                                                       | Mode |
| --critical-offset     | Time offset critical Threshold (in seconds).                                                                                      | Mode |
| --ntp-hostname        | Set the ntp hostname (if not set, localtime is used).                                                                             | Mode |
| --ntp-port            | Set the ntp port (Default: 123).                                                                                                  | Mode |
| --timezone            | Override the timezone of distant equipment. Can use format: 'Europe/London' or '+0100'.                                           | Mode |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option            | Description                                                                                                                                                    | Type |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-uptime  | Threshold warning.                                                                                                                                             | Mode |
| --critical-uptime | Threshold critical.                                                                                                                                            | Mode |
| --unit            | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds    | Mode |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
	--mode=dynamic-filters \
    --help
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

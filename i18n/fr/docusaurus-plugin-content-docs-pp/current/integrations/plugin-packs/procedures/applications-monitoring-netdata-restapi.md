---
id: applications-monitoring-netdata-restapi
title: Netdata RestAPI
description: Supervisez Netdata via son API REST : CPU, mémoire, espace disque, inodes, charge système, swap et trafic réseau.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Netdata RestAPI**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Netdata RestAPI** apporte un modèle d'hôte :

* **App-Monitoring-Netdata-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Netdata-Restapi-custom" label="App-Monitoring-Netdata-Restapi-custom">

| Alias          | Modèle de service                                    | Description                                                                                                                                                                  | Découverte |
|:---------------|:-----------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------:|
| Alarms         | App-Monitoring-Netdata-Restapi-Alarms-custom         | Liste les alarmes actives remontées par Netdata sur le serveur                                                                                                               |            |
| Cpu            | App-Monitoring-Netdata-Restapi-Cpu-custom            | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |            |
| Disks-Global   | App-Monitoring-Netdata-Restapi-Disks-Global-custom   | Contrôle du taux d'espace libre disponible des disques. Pour chaque contrôle apparaîtra le point de montage des disques                                                     | X          |
| Inodes-Global  | App-Monitoring-Netdata-Restapi-Inodes-Global-custom  | Contrôle du taux d'inodes disponibles d'un disque                                                                                                                             | X          |
| Load           | App-Monitoring-Netdata-Restapi-Load-custom           | Contrôle de la charge serveur                                                                                                                                                |            |
| Memory         | App-Monitoring-Netdata-Restapi-Memory-custom         | Contrôle du taux d'utilisation de la mémoire vive (RAM)                                                                                                                      |            |
| Swap           | App-Monitoring-Netdata-Restapi-Swap-custom           | Contrôle du taux d'utilisation de la mémoire virtuelle (SWAP)                                                                                                                |            |
| Traffic-Global | App-Monitoring-Netdata-Restapi-Traffic-Global-custom | Contrôle de la bande passante des interfaces. Pour chaque contrôle apparaîtra le nom de l'interface                                                                         | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Monitoring-Netdata-Restapi-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                             | Description                                                                                       |
|:--------------------------------------------|:--------------------------------------------------------------------------------------------------|
| App-Monitoring-Netdata-Restapi-Disk-Name    | Découvre les partitions du disque et supervise l'espace occupé                                    |
| App-Monitoring-Netdata-Restapi-Inodes-Name  | Découvre les partitions du disque en utilisant son nom et supervise l'utilisation des inodes      |
| App-Monitoring-Netdata-Restapi-Traffic-Name | Découvre les interfaces réseau en utilisant leur nom et supervise leur statut et leur utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Nom                                   | Unité |
|:--------------------------------------|:------|
| netdata.alarms.current.total.count    | count |
| netdata.alarms.current.warning.count  | count |
| netdata.alarms.current.critical.count | count |
| alarm                                 | N/A   |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Nom                                           | Unité |
|:----------------------------------------------|:------|
| cpu.utilization.percentage                    | %     |
| *cpu_results*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disks-Global" label="Disks-Global">

| Nom                                        | Unité |
|:-------------------------------------------|:------|
| storage.partitions.count                   | count |
| *disk_name*#storage.space.usage.bytes      | B     |
| *disk_name*#storage.space.free.bytes       | B     |
| *disk_name*#storage.space.usage.percentage | %     |

</TabItem>
<TabItem value="Inodes-Global" label="Inodes-Global">

| Nom                                      | Unité |
|:-----------------------------------------|:------|
| *inodes*#storage.inodes.usage.percentage | %     |

</TabItem>
<TabItem value="Load" label="Load">

| Nom                          | Unité |
|:-----------------------------|:------|
| system.loadaverage.1m.count  | count |
| system.loadaverage.5m.count  | count |
| system.loadaverage.15m.count | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Nom                     | Unité |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |
| memory.buffer.bytes     | B     |
| memory.cached.bytes     | B     |
| memory.shared.bytes     | B     |

</TabItem>
<TabItem value="Swap" label="Swap">

| Nom                   | Unité |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Nom                                             | Unité |
|:------------------------------------------------|:------|
| *interfaces1*#network.traffic.in.bitspersecond  | b/s   |
| *interfaces2*#network.traffic.in.bitspersecond  | b/s   |
| *interfaces1*#network.traffic.out.bitspersecond | b/s   |
| *interfaces2*#network.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prérequis

### Installation de l'agent Netdata

L'agent Netdata doit être installé et opérationnel sur le serveur cible afin de pouvoir utiliser le connecteur de supervision Centreon Netdata.

Vous trouverez plus d'informations sur comment installer et configurer l'agent Netdata en suivant la documentation officielle:
https://learn.netdata.cloud/docs/agent/packaging/installer

## Installer le connecteur de supervision

### Pack

La procédure d'installation des connecteurs de supervision diffère légèrement [suivant que votre licence est offline ou online](../getting-started/how-to-guides/connectors-licenses.md).

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Connecteurs > Connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-monitoring-netdata-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-netdata-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-monitoring-netdata-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-netdata-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Netdata RestAPI**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un connecteur. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Monitoring-Netdata-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Monitoring-Netdata-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-monitoring-netdata-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Netdata-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Monitoring-Netdata-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro              | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NETDATAAPIPROTOCOL | Specify https if needed (default: 'http')                                                            | http              |             |
| NETDATAAPIPORT     | Port used (default: 19999)                                                                           | 19999             |             |
| NETDATAAPIENDPOINT | Specify the API URL path (Default: '/api/v1')                                                                                                     | /api/v1           |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Macro                  | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| ALARMSTATUS            | Filter on specific alarm status. Can be 'WARNING' or 'CRITICAL' (default: both status shown)       |                   |             |
| WARNINGALARMSWARNING   | Threshold                                                                                          |                   |             |
| CRITICALALARMSWARNING  | Threshold                                                                                          |                   |             |
| WARNINGALARMSCRITICAL  | Threshold                                                                                          |                   |             |
| CRITICALALARMSCRITICAL | Threshold                                                                                          |                   |             |
| WARNINGALARMSTOTAL     | Threshold                                                                                                   |                   |             |
| CRITICALALARMSTOTAL    | Threshold                                                                                                   |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro           | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGAVERAGE  | Warning threshold on average CPU utilization                                                       |                   |             |
| CRITICALAVERAGE | Critical threshold on average CPU utilization                                                      |                   |             |
| WARNINGCORE     | Warning threshold for each CPU core                                                                |                   |             |
| CRITICALCORE    | Critical threshold for each CPU core                                                               |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Disks-Global" label="Disks-Global">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FSNAME            | Filter on one or more specific FS. Regexp can be used Example: --fs-name='(^/$\|^/boot$)'          | .*                |             |
| WARNINGCOUNT      | Threshold                                                                                                   |                   |             |
| CRITICALCOUNT     | Threshold                                                                                                   |                   |             |
| WARNINGFREE       | Warning threshold on FS free space                                                                 |                   |             |
| CRITICALFREE      | Critical threshold on FS free space                                                                |                   |             |
| WARNINGUSAGE      | Warning threshold on FS space usage (in B)                                                         |                   |             |
| CRITICALUSAGE     | Critical threshold on FS space usage (in B)                                                        |                   |             |
| WARNINGUSAGEPRCT  | Warning threshold on FS percentage space usage (in %)                                              |                   |             |
| CRITICALUSAGEPRCT | Critical threshold on FS percentage space usage (in %)                                             |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Inodes-Global" label="Inodes-Global">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FSNAME            | Filter on one or more specific FS. Regexp can be used Example: --fs-name='(^/$\|^/boot$)'          | .*                |             |
| WARNINGUSAGEPRCT  | Warning threshold on FS used Inodes  (in %)                                                        |                   |             |
| CRITICALUSAGEPRCT | Critical threshold on FS used Inodes (in %)                                                        |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Load" label="Load">

| Macro          | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGLOAD1   | Threshold                                                                                          |                   |             |
| CRITICALLOAD1  | Threshold                                                                                          |                   |             |
| WARNINGLOAD15  | Threshold                                                                                          |                   |             |
| CRITICALLOAD15 | Threshold                                                                                          |                   |             |
| WARNINGLOAD5   | Threshold                                                                                          |                   |             |
| CRITICALLOAD5  | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGBUFFER     | Threshold                                                                                          |                   |             |
| CRITICALBUFFER    | Threshold                                                                                          |                   |             |
| WARNINGCACHED     | Threshold                                                                                          |                   |             |
| CRITICALCACHED    | Threshold                                                                                          |                   |             |
| WARNINGSHARED     | Threshold                                                                                          |                   |             |
| CRITICALSHARED    | Threshold                                                                                          |                   |             |
| WARNINGUSAGE      | Warning threshold on used memory (in B)                                                            |                   |             |
| CRITICALUSAGE     | Critical threshold on used memory (in B)                                                           |                   |             |
| WARNINGUSAGEFREE  | Warning threshold on free memory (in B)                                                            |                   |             |
| CRITICALUSAGEFREE | Critical threshold on free memory (in B)                                                           |                   |             |
| WARNINGUSAGEPRCT  | Warning threshold on used memory (in %)                                                            |                   |             |
| CRITICALUSAGEPRCT | Critical threshold on percentage used memory (in %)                                                |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGE      | Warning threshold on used swap (in B)                                                              |                   |             |
| CRITICALUSAGE     | Critical threshold on used swap (in B)                                                             |                   |             |
| WARNINGUSAGEFREE  | Warning threshold on free swap (in B)                                                              |                   |             |
| CRITICALUSAGEFREE | Critical threshold on free swap (in B)                                                             |                   |             |
| WARNINGUSAGEPRCT  | Warning threshold on used swap (in %)                                                              |                   |             |
| CRITICALUSAGEPRCT | Critical threshold on percentage used swap (in %)                                                  |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Macro              | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACENAME      | Filter on a specific interface. Regexp can be used. Example: --interface-name='^eth0$'             | .*                |             |
| INTERFACESPEED     | Set interfaces speed in b/s. Default: 1000000000 (1Gb/s)                                           |                   |             |
| WARNINGTRAFFICIN   | Threshold                                                                                          |                   |             |
| CRITICALTRAFFICIN  | Threshold                                                                                          |                   |             |
| WARNINGTRAFFICOUT  | Threshold                                                                                          |                   |             |
| CRITICALTRAFFICOUT | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une ressource en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_monitoring_netdata_restapi.pl \
	--plugin=apps::monitoring::netdata::restapi::plugin \
	--mode=traffic \
	--hostname='10.0.0.1' \
	--port='19999' \
	--proto='http' \
	--endpoint='/api/v1'  \
	--interface-name='.*' \
	--speed='' \
	--warning-traffic-in='' \
	--critical-traffic-in='' \
	--warning-traffic-out='' \
	--critical-traffic-out='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All interfaces are ok | 'interfaces1#network.traffic.in.bitspersecond'=23283b/s;;;0;speed 'interfaces2#network.traffic.in.bitspersecond'=18326b/s;;;0;speed 'interfaces1#network.traffic.out.bitspersecond'=35543b/s;;;0;speed 'interfaces2#network.traffic.out.bitspersecond'=22681b/s;;;0;speed
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#contrôles-http-et-api)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_monitoring_netdata_restapi.pl \
	--plugin=apps::monitoring::netdata::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                           | Modèle de service associé                            |
|:-----------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|
| alarms [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/netdata/restapi/mode/alarms.pm)]                  | App-Monitoring-Netdata-Restapi-Alarms-custom         |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/netdata/restapi/mode/cpu.pm)]                        | App-Monitoring-Netdata-Restapi-Cpu-custom            |
| disks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/netdata/restapi/mode/disks.pm)]                    | App-Monitoring-Netdata-Restapi-Disks-Global-custom   |
| get-chart [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/netdata/restapi/mode/getchart.pm)]             | Not used in this Monitoring Connector                |
| inodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/netdata/restapi/mode/inodes.pm)]                  | App-Monitoring-Netdata-Restapi-Inodes-Global-custom  |
| list-charts [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/netdata/restapi/mode/listcharts.pm)]         | Used for service discovery                           |
| list-disks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/netdata/restapi/mode/listdisks.pm)]           | Used for service discovery                           |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/netdata/restapi/mode/listinterfaces.pm)] | Not used in this Monitoring Connector                |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/netdata/restapi/mode/load.pm)]                      | App-Monitoring-Netdata-Restapi-Load-custom           |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/netdata/restapi/mode/memory.pm)]                  | App-Monitoring-Netdata-Restapi-Memory-custom         |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/netdata/restapi/mode/swap.pm)]                      | App-Monitoring-Netdata-Restapi-Swap-custom           |
| traffic [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/netdata/restapi/mode/traffic.pm)]                | App-Monitoring-Netdata-Restapi-Traffic-Global-custom |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 |   Netdata API hostname (server address)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --port                                     |   Port used (default: 19999)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --proto                                    |   Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --timeout                                  |   Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Option              | Description                                                                                         |
|:--------------------|:----------------------------------------------------------------------------------------------------|
| --filter-status     |   Filter on specific alarm status. Can be 'WARNING' or 'CRITICAL' (default: both status shown)      |
| --warning-alarms-*  |   Set Warning threshold for alarms count (default: '') where '*' can be warning or 'critical'       |
| --critical-alarms-* |   Set Critical threshold for alarms count (default: '') where '*' can be 'warning' or 'critical'    |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option             | Description                                                                                                             |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------|
| --chart-period     |   The period in seconds on which the values are calculated Default: 300                                                 |
| --chart-statistic  |   The statistic calculation method used to parse the collected data. Can be : average, sum, min, max Default: average   |
| --warning-average  |   Warning threshold on average CPU utilization.                                                                         |
| --critical-average |   Critical threshold on average CPU utilization.                                                                        |
| --warning-core     |   Warning threshold for each CPU core                                                                                   |
| --critical-core    |   Critical threshold for each CPU core                                                                                  |

</TabItem>
<TabItem value="Disks-Global" label="Disks-Global">

| Option                | Description                                                                                                                                                             |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --chart-period        |   The period in seconds on which the values are calculated Default: 300                                                                                                 |
| --chart-statistic     |   The statistic calculation method used to parse the collected data. Can be : average, sum, min, max Default: average                                                   |
| --fs-name             |   Filter on one or more specific FS. Regexp can be used Example: --fs-name='(^/$\|^/boot$)'                                                                             |
| --warning-usage       |   Warning threshold on FS space usage (in B).                                                                                                                           |
| --critical-usage      |   Critical threshold on FS space usage (in B).                                                                                                                          |
| --warning-usage-prct  |   Warning threshold on FS percentage space usage (in %).                                                                                                                |
| --critical-usage-prct |   Critical threshold on FS percentage space usage (in %).                                                                                                               |
| --warning-free        |   Warning threshold on FS free space.                                                                                                                                   |
| --critical-free       |   Critical threshold on FS free space.                                                                                                                                  |
| --space-reservation   |   On specific systems, partitions can have reserved space (like ext4 for root). This option will consider this space in the calculation (like for the 'df' command).    |

</TabItem>
<TabItem value="Inodes-Global" label="Inodes-Global">

| Option                | Description                                                                                                                                                                    |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --chart-period        |   The period in seconds on which the values are calculated Default: 300                                                                                                        |
| --chart-statistic     |   The statistic calculation method used to parse the collected data. Can be : average, sum, min, max Default: average                                                          |
| --fs-name             |   Filter on one or more specific FS. Regexp can be used Example: --fs-name='(^/$\|^/boot$)'                                                                                    |
| --warning-usage-prct  |   Warning threshold on FS used Inodes  (in %).                                                                                                                                 |
| --critical-usage-prct |   Critical threshold on FS used Inodes (in %).                                                                                                                                 |
| --space-reservation   |   On specific systems, partitions can have reserved space/inodes (like ext4 for root). This option will consider this space in the calculation (like for the 'df' command).    |

</TabItem>
<TabItem value="Load" label="Load">

| Option                   | Description                                                                                                              |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| --chart-period           |   The period in seconds on which the values are calculated. Default: 300                                                 |
| --chart-statistic        |   The statistic calculation method used to parse the collected data. Can be : average, sum, min, max. Default: average   |
| --average                |   Load average for the number of CPUs.                                                                                   |
| --warning-* --critical-* |   Threshold where '*' can be: load1, load5, load15                                                                       |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                | Description                                                                                                             |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------|
| --chart-period        |   The period in seconds on which the values are calculated Default: 300                                                 |
| --chart-statistic     |   The statistic calculation method used to parse the collected data. Can be : average, sum, min, max Default: average   |
| --warning-usage       |   Warning threshold on used memory (in B).                                                                              |
| --critical-usage      |   Critical threshold on used memory (in B)                                                                              |
| --warning-usage-prct  |   Warning threshold on used memory (in %).                                                                              |
| --critical-usage-prct |   Critical threshold on percentage used memory (in %)                                                                   |
| --warning-usage-free  |   Warning threshold on free memory (in B).                                                                              |
| --critical-usage-free |   Critical threshold on free memory (in B)                                                                              |
| --warning-*           |   Warning threshold (in B) on other metrics where '*' can be: buffer,cached,shared                                      |
| --critical-*          |   Critical threshold (in B) on other metrics where '*' can be: buffer,cached,shared                                     |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                | Description                                                                                                             |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------|
| --chart-period        |   The period in seconds on which the values are calculated Default: 300                                                 |
| --chart-statistic     |   The statistic calculation method used to parse the collected data. Can be : average, sum, min, max Default: average   |
| --warning-usage       |   Warning threshold on used swap (in B).                                                                                |
| --critical-usage      |   Critical threshold on used swap (in B)                                                                                |
| --warning-usage-prct  |   Warning threshold on used swap (in %).                                                                                |
| --critical-usage-prct |   Critical threshold on percentage used swap (in %)                                                                     |
| --warning-usage-free  |   Warning threshold on free swap (in B).                                                                                |
| --critical-usage-free |   Critical threshold on free swap (in B)                                                                                |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Option               | Description                                                                                                             |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------|
| --chart-period       |   The period in seconds on which the values are calculated Default: 300                                                 |
| --chart-statistic    |   The statistic calculation method used to parse the collected data. Can be : average, sum, min, max Default: average   |
| --interface-name     |   Filter on a specific interface. Regexp can be used. Example: --interface-name='^eth0$'                                |
| --speed              |   Set interfaces speed in b/s. Default: 1000000000 (1Gb/s).                                                             |
| --warning-traffic-*  |   Warning threshold on interface traffic where '*' can be: in,out.                                                      |
| --critical-traffic-* |   Critical threshold on interface traffic where '*' can be: in,out.                                                     |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_monitoring_netdata_restapi.pl \
	--plugin=apps::monitoring::netdata::restapi::plugin \
	--mode=traffic \
	--help
```

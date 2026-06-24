---
id: hardware-devices-polycom-trio-restapi
slug: /hardware-devices-polycom-trio-restapi
title: Polycom Trio Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Polycom Trio Rest API**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Polycom Trio Rest API** apporte un modèle d'hôte :

* **HW-Device-Polycom-Trio-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Device-Polycom-Trio-Restapi-custom" label="HW-Device-Polycom-Trio-Restapi-custom">

| Alias            | Modèle de service                                   | Description                                         |
|:-----------------|:----------------------------------------------------|:----------------------------------------------------|
| Calls-Rt         | HW-Device-Polycom-Trio-Calls-Rt-Restapi-custom      | Contrôle les appels audio/vidéo en temps réel       |
| Calls-Summary    | HW-Device-Polycom-Trio-Calls-Summary-Restapi-custom | Contrôle l'historique des appels                    |
| Device           | HW-Device-Polycom-Trio-Device-Restapi-custom        | Contrôle la mémoire, l'utilisation CPU et le statut |
| Network          | HW-Device-Polycom-Trio-Network-Restapi-custom       | Contrôle le trafic réseau                          |
| Sip-Registration | HW-Device-Polycom-Trio-Registration-Restapi-custom  | Contrôle l'enregistrement SIP                       |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Device-Polycom-Trio-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias          | Modèle de service                            | Description                        |
|:---------------|:---------------------------------------------|:-----------------------------------|
| Paired-Devices | HW-Device-Polycom-Trio-Paired-Restapi-custom | Contrôle les équipements connectés |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Calls-Rt" label="Calls-Rt">

| Nom                                            | Unité |
|:-----------------------------------------------|:------|
| *channels*#call.channel.traffic.in.bytes       | B/s   |
| *channels*#call.channel.traffic.out.bytes      | B/s   |
| *channels*#call.channel.maxjitter.milliseconds | ms    |
| *channels*#call.channel.packetloss.count       | count |
| *channels*#call.channel.packetloss.percentage  | %     |

</TabItem>
<TabItem value="Calls-Summary" label="Calls-Summary">

| Nom                  | Unité |
|:---------------------|:------|
| calls.total.count    | count |
| calls.placed.count   | count |
| calls.missed.count   | count |
| calls.received.count | count |

</TabItem>
<TabItem value="Device" label="Device">

| Nom                                       | Unité |
|:------------------------------------------|:------|
| status                                    | N/A   |
| device.cpu.utilization.average.percentage | %     |
| device.memory.usage.bytes                 | B     |
| device.memory.free.bytes                  | B     |
| device.memory.usage.percentage            | %     |

</TabItem>
<TabItem value="Network" label="Network">

| Nom                           | Unité |
|:------------------------------|:------|
| network.packets.in.persecond  | /s    |
| network.packets.out.persecond | /s    |

</TabItem>
<TabItem value="Paired-Devices" label="Paired-Devices">

| Nom                             | Unité |
|:--------------------------------|:------|
| devices.camera.paired.count     | count |
| devices.audio.paired.count      | count |
| devices.display_ui.paired.count | count |

</TabItem>
<TabItem value="Sip-Registration" label="Sip-Registration">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

</TabItem>
</Tabs>

## Prérequis

Pour utiliser le connecteur Polycom Trio Rest API, activez l'API REST sur le téléphone (paramètre apps.restapi.enabled="1") et configurez un mot de passe administrateur personnalisé via l'interface web ou un fichier de provisionnement. Assurez-vous que le téléphone est accessible sur le réseau (port 443/HTTPS) et exécute le logiciel UC 5.8.0 ou supérieur.

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
dnf install centreon-pack-hardware-devices-polycom-trio-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-devices-polycom-trio-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-devices-polycom-trio-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-devices-polycom-trio-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Polycom Trio Rest API**
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
dnf install centreon-plugin-Hardware-Devices-Polycom-Trio-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Devices-Polycom-Trio-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-devices-polycom-trio-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Devices-Polycom-Trio-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Device-Polycom-Trio-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                      | Description                                                                                          | Valeur par défaut | Obligatoire |
|:---------------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| POLYCOMTRIOAPIUSERNAME     | Set username                                                                                         | Polycom           | X           |
| POLYCOMTRIOAPIPASSWORD     | Set password                                                                                         |                   | X           |
| POLYCOMTRIOAPIPROTO        | Specify https if needed (default: 'https')                                                           | https             |             |
| POLYCOMTRIOAPIPORT         | Set port (default: '443')                                                                            | 443               |             |
| POLYCOMTRIOAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Calls-Rt" label="Calls-Rt">

| Macro                         | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCHANNELMAXJITTER       | Threshold                                                                                          |                   |             |
| CRITICALCHANNELMAXJITTER      | Threshold                                                                                          |                   |             |
| WARNINGCHANNELPACKETLOSS      | Threshold                                                                                          |                   |             |
| CRITICALCHANNELPACKETLOSS     | Threshold                                                                                          |                   |             |
| WARNINGCHANNELPACKETLOSSPRCT  | Threshold                                                                                          |                   |             |
| CRITICALCHANNELPACKETLOSSPRCT | Threshold                                                                                          |                   |             |
| WARNINGCHANNELTRAFFICIN       | Threshold                                                                                          |                   |             |
| CRITICALCHANNELTRAFFICIN      | Threshold                                                                                          |                   |             |
| WARNINGCHANNELTRAFFICOUT      | Threshold                                                                                          |                   |             |
| CRITICALCHANNELTRAFFICOUT     | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Calls-Summary" label="Calls-Summary">

| Macro            | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGMISSED    | Threshold                                                                                          |                   |             |
| CRITICALMISSED   | Threshold                                                                                          |                   |             |
| WARNINGPLACED    | Threshold                                                                                          |                   |             |
| CRITICALPLACED   | Threshold                                                                                          |                   |             |
| WARNINGRECEIVED  | Threshold                                                                                          |                   |             |
| CRITICALRECEIVED | Threshold                                                                                          |                   |             |
| WARNINGTOTAL     | Threshold                                                                                          |                   |             |
| CRITICALTOTAL    | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Device" label="Device">

| Macro                         | Description                                                                                                                                         | Valeur par défaut       | Obligatoire |
|:------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| WARNINGCPUUTILIZATIONAVERAGE  | Threshold                                                                                                                                           |                         |             |
| CRITICALCPUUTILIZATIONAVERAGE | Threshold                                                                                                                                           |                         |             |
| WARNINGMEMORYUSAGE            | Threshold                                                                                                                                           |                         |             |
| CRITICALMEMORYUSAGE           | Threshold                                                                                                                                           |                         |             |
| WARNINGMEMORYUSAGEFREE        | Threshold                                                                                                                                           |                         |             |
| CRITICALMEMORYUSAGEFREE       | Threshold                                                                                                                                           |                         |             |
| WARNINGMEMORYUSAGEPRCT        | Threshold                                                                                                                                           |                         |             |
| CRITICALMEMORYUSAGEPRCT       | Threshold                                                                                                                                           |                         |             |
| CRITICALSTATUS                | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /error/i'). You can use the following variables: %\{status\} | %\{status\} =~ /error/i |             |
| WARNINGSTATUS                 | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{status\}                         |                         |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                  |                         |             |

</TabItem>
<TabItem value="Network" label="Network">

| Macro              | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGPACKETSIN   | Threshold                                                                                          |                   |             |
| CRITICALPACKETSIN  | Threshold                                                                                          |                   |             |
| WARNINGPACKETSOUT  | Threshold                                                                                          |                   |             |
| CRITICALPACKETSOUT | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Paired-Devices" label="Paired-Devices">

| Macro                   | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERDEVICENAME        | Filter devices by name                                                                             |                   |             |
| FILTERDEVICETYPE        | Filter devices by type                                                                             |                   |             |
| WARNINGAUDIOPAIRED      | Threshold                                                                                          |                   |             |
| CRITICALAUDIOPAIRED     | Threshold                                                                                          |                   |             |
| WARNINGCAMERAPAIRED     | Threshold                                                                                          |                   |             |
| CRITICALCAMERAPAIRED    | Threshold                                                                                          |                   |             |
| WARNINGDISPLAYUIPAIRED  | Threshold                                                                                          |                   |             |
| CRITICALDISPLAYUIPAIRED | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Sip-Registration" label="Sip-Registration">

| Macro          | Description                                                                                                                                             | Valeur par défaut            | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /registred/i'). You can use the following variables: %\{status\} | %\{status\} !~  /registred/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}                                           |                              |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                      |                              |             |

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
/usr/lib/centreon/plugins/centreon_polycom_trio_restapi.pl \
	--plugin=hardware::devices::polycom::trio::restapi::plugin \
	--mode=paired \
	--hostname='10.0.0.1' \
	--api-username='Polycom' \
	--api-password='xxxxxx' \
	--port='443' \
	--proto='https'  \
	--filter-device-name='' \
	--filter-device-type='' \
	--warning-camera-paired='' \
	--critical-camera-paired='' \
	--warning-audio-paired='' \
	--critical-audio-paired='' \
	--warning-displayui-paired='' \
	--critical-displayui-paired=''
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: camera: 90577 audio: 33412 display ui: 54353 | 'devices.camera.paired.count'=90577;;;0; 'devices.audio.paired.count'=33412;;;0; 'devices.display_ui.paired.count'=54353;;;0;
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
/usr/lib/centreon/plugins/centreon_polycom_trio_restapi.pl \
	--plugin=hardware::devices::polycom::trio::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                             | Modèle de service associé                           |
|:-------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
| calls-rt [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/trio/restapi/mode/callsrt.pm)]           | HW-Device-Polycom-Trio-Calls-Rt-Restapi-custom      |
| calls-summary [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/trio/restapi/mode/callssummary.pm)] | HW-Device-Polycom-Trio-Calls-Summary-Restapi-custom |
| device [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/trio/restapi/mode/device.pm)]              | HW-Device-Polycom-Trio-Device-Restapi-custom        |
| network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/trio/restapi/mode/network.pm)]            | HW-Device-Polycom-Trio-Network-Restapi-custom       |
| paired [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/trio/restapi/mode/paired.pm)]              | HW-Device-Polycom-Trio-Paired-Restapi-custom        |
| registration [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/trio/restapi/mode/registration.pm)]  | HW-Device-Polycom-Trio-Registration-Restapi-custom  |

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
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
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
| --hostname                                 |   Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     |   Set port (default: '443').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --proto                                    |   Specify https if needed (default: 'https').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --api-username                             |   Set username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --api-password                             |   Set password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --lockfile-dir                             |   Specify the lock file directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --timeout                                  |   Threshold for HTTP timeout (default: '30').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Calls-Rt" label="Calls-Rt">

| Option                   | Description                                                                                                                                |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-* --critical-* |   Thresholds. Can be: 'channel-traffic-in', 'channel-traffic-out', 'channel-maxjitter' 'channel-packetloss', 'channel-packetloss-prct'.    |

</TabItem>
<TabItem value="Calls-Summary" label="Calls-Summary">

| Option                   | Description                                                                                                                                                                                                                                     |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration          |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-* --critical-* |   Thresholds. Can be: 'total', 'placed', 'missed', 'received'.                                                                                                                                                                                  |

</TabItem>
<TabItem value="Device" label="Device">

| Option                   | Description                                                                                                                                             |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{status\}                           |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /error/i'). You can use the following variables: %\{status\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'cpu-utilization-average', 'memory-usage', 'memory-usage-free', 'memory-usage-prct'.                                              |

</TabItem>
<TabItem value="Network" label="Network">

| Option                   | Description                                           |
|:-------------------------|:------------------------------------------------------|
| --warning-* --critical-* |   Thresholds. Can be: 'packets-in', 'packets-out'.    |

</TabItem>
<TabItem value="Paired-Devices" label="Paired-Devices">

| Option                   | Description                                                                    |
|:-------------------------|:-------------------------------------------------------------------------------|
| --filter-device-name     |   Filter devices by name.                                                      |
| --filter-device-type     |   Filter devices by type.                                                      |
| --warning-* --critical-* |   Thresholds. Can be: 'camera-paired', 'audio-paired', 'displayui-paired'.     |

</TabItem>
<TabItem value="Sip-Registration" label="Sip-Registration">

| Option            | Description                                                                                                                                                  |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}                                              |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /registred/i'). You can use the following variables: %\{status\}    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_polycom_trio_restapi.pl \
	--plugin=hardware::devices::polycom::trio::restapi::plugin \
	--mode=paired \
	--help
```

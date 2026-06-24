---
id: virtualization-proxmox-ve-restapi
slug: /virtualization-proxmox-ve-restapi
title: Proxmox VE Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Proxmox VE** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Proxmox VE** apporte un modèle d'hôte :

* **Virt-Proxmox-Ve-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Virt-Proxmox-Ve-Restapi-custom" label="Virt-Proxmox-Ve-Restapi-custom">

| Alias         | Modèle de service                            | Description                                               | Découverte |
|:--------------|:---------------------------------------------|:----------------------------------------------------------|:----------:|
| Node-Usage    | Virt-Proxmox-Ve-Node-Usage-Restapi-custom    | Contrôle permettant de vérifier l'utilisation des noeuds  | X          |
| Storage-Usage | Virt-Proxmox-Ve-Storage-Usage-Restapi-custom | Contrôle permettant de vérifier l'utilisation du stockage | X          |
| Vm-Usage      | Virt-Proxmox-Ve-Vm-Usage-Restapi-custom      | Contrôle permettant de vérifier l'utilisation des VMs     | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Virt-Proxmox-Ve-Restapi-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                   |
|:----------------|:----------------------------------------------|
| Proxmox VM      | Découverte des machines virtuelles Proxmox VE |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle                      | Description                                                 |
|:-------------------------------------|:------------------------------------------------------------|
| Virt-Proxmox-Ve-Restapi-Node-Name    | Découvre les noeuds et supervise l'utilisation              |
| Virt-Proxmox-Ve-Restapi-Storage-Name | Découvre les stockages et supervise l'utilisation           |
| Virt-Proxmox-Ve-Restapi-Vm-Name      | Découvre les machines virtuelles et supervise l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Node-Usage" label="Node-Usage">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| node-status                             | N/A   |
| *nodes*#node.cpu.utilization.percentage | %     |
| *nodes*#node.memory.usage.bytes         | B     |
| *nodes*#node.filesystem.usage.bytes     | B     |
| *nodes*#node.swap.usage.bytes           | B     |

</TabItem>
<TabItem value="Storage-Usage" label="Storage-Usage">

| Nom                                   | Unité |
|:--------------------------------------|:------|
| storage-status                        | N/A   |
| *disk_name*#storage.space.usage.bytes | B     |

</TabItem>
<TabItem value="Vm-Usage" label="Vm-Usage">

| Nom                                  | Unité |
|:-------------------------------------|:------|
| vm-status                            | N/A   |
| *vms1*#vm.cpu.utilization.percentage | %     |
| *vms2*#vm.cpu.utilization.percentage | %     |
| *vms1*#vm.memory.usage.bytes         | B     |
| *vms2*#vm.memory.usage.bytes         | B     |
| *vms1*#vm.read.usage.iops            | iops  |
| *vms2*#vm.read.usage.iops            | iops  |
| *vms1*#vm.write.usage.iops           | iops  |
| *vms2*#vm.write.usage.iops           | iops  |
| *vms1*#vm.swap.usage.bytes           | B     |
| *vms2*#vm.swap.usage.bytes           | B     |
| *vms1*#vm.traffic.in.bitspersecond   | b/s   |
| *vms2*#vm.traffic.in.bitspersecond   | b/s   |
| *vms1*#vm.traffic.out.bitspersecond  | b/s   |
| *vms2*#vm.traffic.out.bitspersecond  | b/s   |

</TabItem>
</Tabs>

## Prérequis

Pour la supervision, un utilisateur avec les droits suivants en lecture est nécessaire : 

<Tabs groupId="sync">
<TabItem value="Proxmox VE < 9.1" label="Proxmox VE < 9.1">

`VM.Monitor`, `VM.Audit`, `Datastore.Audit`, `Sys.Audit`, `Sys.Syslog`

</TabItem>
<TabItem value="Proxmox VE ≥ 9.1" label="Proxmox VE ≥ 9.1">

`VM.Audit`, `Datastore.Audit`, `Sys.Audit`, `Sys.Syslog`, `Sys.Modify`

> Le privilège `VM.Monitor` a été supprimé. Remplacez-le par `Sys.Audit` pour l'accès basique. Certaines commandes avancées nécessitent le privilège `Sys.Modify`.

</TabItem>
</Tabs>

Référez vous à la [documentation officielle](https://pve.proxmox.com/wiki/Proxmox_VE_API).

Les fonctions de découverte des adresses IP et des informations sur l’OS des machines virtuelles nécessitent que l’agent [Qemu-guest-agent](https://pve.proxmox.com/wiki/Qemu-guest-agent) y soit installé.

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
dnf install centreon-pack-virtualization-proxmox-ve-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-proxmox-ve-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-virtualization-proxmox-ve-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-proxmox-ve-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Proxmox VE**
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
dnf install centreon-plugin-Virtualization-Proxmox-Ve-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Virtualization-Proxmox-Ve-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-virtualization-proxmox-ve-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Virtualization-Proxmox-Ve-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Virt-Proxmox-Ve-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                  | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROXMOXAPIUSERNAME     | Set Proxmox VE username                                                                                                                            |                   |      X      |
| PROXMOXAPIPASSWORD     | Set Proxmox VE password                                                                                                                            |                   |      X      |
| PROXMOXAPIPROTO        | Specify https if needed                                                                                                                            | https             |             |
| PROXMOXAPIPORT         | Set Proxmox VE port                                                                                                                                | 8006              |             |
| PROXMOXAPIREALM        | Set Proxmox VE realm (pam, pve or custom)                                                                                                          | pam               |             |
| PROXMOXAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Node-Usage" label="Node-Usage">

| Macro          | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME     | Filter by node name (can be a regexp)                                                                                                            | .*                |             |
| WARNINGCPU     | Threshold                                                                                                                                        | 80                |             |
| CRITICALCPU    | Threshold                                                                                                                                        | 90                |             |
| WARNINGFS      | Threshold                                                                                                                                        | 80                |             |
| CRITICALFS     | Threshold                                                                                                                                        | 90                |             |
| WARNINGMEMORY  | Threshold                                                                                                                                        | 80                |             |
| CRITICALMEMORY | Threshold                                                                                                                                        | 90                |             |
| WARNINGSWAP    | Threshold                                                                                                                                        | 50                |             |
| CRITICALSWAP   | Threshold                                                                                                                                        | 70                |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Storage-Usage" label="Storage-Usage">

| Macro           | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME      | Filter by storage name (can be a regexp)                                                                                                         | .*                |             |
| NODEID          | Exact node ID                                                                                                                                    |                   |             |
| NODENAME        | Exact node name                                                                                                                                  |                   |             |
| WARNINGSTORAGE  | Threshold                                                                                                                                        | 80                |             |
| CRITICALSTORAGE | Threshold                                                                                                                                        | 90                |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Vm-Usage" label="Vm-Usage">

| Macro              | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME         | Filter by vm name (can be a regexp)                                                                                                              | .*                |             |
| EXCLUDENAME        | Exclude by virtual machine name (can be a regexp)                                                                                                |                   |             |
| INCLUDENODENAME    | Filter only virtual machine running on specified node name (can be a regexp)                                                                     |                   |             |
| EXCLUDENODENAME    | Exclude virtual machine running on specified node name (can be a regexp)                                                                         |                   |             |
| WARNINGCPU         | Threshold                                                                                                                                        | 80                |             |
| CRITICALCPU        | Threshold                                                                                                                                        | 90                |             |
| WARNINGMEMORY      | Threshold                                                                                                                                        | 80                |             |
| CRITICALMEMORY     | Threshold                                                                                                                                        | 90                |             |
| WARNINGREADIOPS    | Threshold                                                                                                                                        |                   |             |
| CRITICALREADIOPS   | Threshold                                                                                                                                        |                   |             |
| WARNINGTRAFFICIN   | Threshold                                                                                                                                        |                   |             |
| CRITICALTRAFFICIN  | Threshold                                                                                                                                        |                   |             |
| WARNINGTRAFFICOUT  | Threshold                                                                                                                                        |                   |             |
| CRITICALTRAFFICOUT | Threshold                                                                                                                                        |                   |             |
| WARNINGWRITEIOPS   | Threshold                                                                                                                                        |                   |             |
| CRITICALWRITEIOPS  | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --use-name        |             |

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
/usr/lib/centreon/plugins/centreon_proxmox_ve_restapi.pl \
	--plugin apps::proxmox::ve::restapi::plugin \
	--mode=storage \
	--hostname=10.0.0.1 \
	--api-username='XXXX' \
	--api-password='XXXX' \
	--proto='https' \
	--port='8006' \
	--realm='pam'  \
	--filter-name='.*' \
	--node-id='' \
	--node-name='' \
	--warning-storage='80' \
	--critical-storage='90' \
```

La commande devrait retourner un message de sortie similaire à :

```bash
-OK: Storage 'storage/nuc/local' state: available, space total: 217.61 GB used: 145.86 GB (67.03%) free: 71.76 GB (32.97%) | 'storage/nuc/local#storage.space.usage.bytes'=156610641920B;0:186927058124;0:210292940390;0;233658822656
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
/usr/lib/centreon/plugins/centreon_proxmox_ve_restapi.pl \
	--plugin apps::proxmox::ve::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                               | Modèle de service associé                    |
|:-----------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/proxmox/ve/restapi/mode/discovery.pm)]        | Used for host discovery                      |
| list-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/proxmox/ve/restapi/mode/listnodes.pm)]       | Used for service discovery                   |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/proxmox/ve/restapi/mode/liststorages.pm)] | Used for service discovery                   |
| list-vms [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/proxmox/ve/restapi/mode/listvms.pm)]           | Used for service discovery                   |
| node-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/proxmox/ve/restapi/mode/nodeusage.pm)]       | Virt-Proxmox-Ve-Node-Usage-Restapi-custom    |
| storage-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/proxmox/ve/restapi/mode/storageusage.pm)] | Virt-Proxmox-Ve-Storage-Usage-Restapi-custom |
| version [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/proxmox/ve/restapi/mode/version.pm)]            | Not used in this Monitoring Connector        |
| vm-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/proxmox/ve/restapi/mode/vmusage.pm)]           | Virt-Proxmox-Ve-Vm-Usage-Restapi-custom      |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)' |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         || --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-counters                          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --proxypac                                 | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --failback-file                            | Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --hostname                                 | Set hostname or IP of Proxmox VE Cluster node                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --port                                     | Set Proxmox VE Port (default: '8006')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proto                                    | Specify https if needed (default: 'https').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --api-username                             | Set Proxmox VE username                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-password                             | Set Proxmox VE password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --realm                                    | Set Proxmox VE realm (pam, pve or custom) (default: 'pam').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  | Threshold for HTTP timeout.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Node-Usage" label="Node-Usage">

| Option                   | Description                                                                                                                    |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------|
| --node-id                |   Exact node ID.                                                                                                               |
| --node-name              |   Exact node name (if multiple names: names separated by ':').                                                                 |
| --use-name               |   Use node name for perfdata and display.                                                                                      |
| --filter-name            |   Filter by node name (can be a regexp).                                                                                       |
| --exclude-name           |   Exclude by virtual machine name (can be a regexp).                                                                           |
| --include-node-name      |   Filter only virtual machine running on specified node name (can be a regexp).                                                |
| --exclude-node-name      |   Exclude virtual machine running on specified node name (can be a regexp).                                                    |
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='^node-status$'                                  |
| --warning-* --critical-* |   Thresholds. Can be: 'cpu' (%), 'memory' (%), 'swap' (%), 'fs' (%).                                                           |
| --warning-node-status    |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{state\}.     |
| --critical-node-status   |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name\}, %\{state\}.    |

</TabItem>
<TabItem value="Storage-Usage" label="Storage-Usage">

| Option                    | Description                                                                                                                   |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters         |   Only display some counters (regexp can be used). Example: --filter-counters='^storage-status$'                              |
| --storage-id              |   Exact storage ID.                                                                                                           |
| --storage-name            |   Exact storage name (if multiple names: names separated by ':').                                                             |
| --use-name                |   Use storage name for perfdata and display.                                                                                  |
| --filter-name             |   Filter by storage name (can be a regexp).                                                                                   |
| --node-id                 |   Exact node ID.                                                                                                              |
| --node-name               |   Exact node name.                                                                                                            |
| --warning-storage-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{state\}.    |
| --critical-storage-status |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name\}, %\{state\}.   |
| --warning-* --critical-*  |   Thresholds. Can be: 'storage' (%).                                                                                          |

</TabItem>
<TabItem value="Vm-Usage" label="Vm-Usage">

| Option               | Description                                                                                                                                 |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-id              |   Exact VM ID.                                                                                                                              |
| --vm-name            |   Exact VM name (if multiple names: names separated by ':').                                                                                |
| --use-name           |   Use VM name for perfdata and display.                                                                                                     |
| --filter-name        |   Filter by vm name (can be a regexp).                                                                                                      |
| --filter-counters    |   Only display some counters (regexp can be used). Example: --filter-counters='^vm-status$'                                                 |
| --warning-*          |   Warning threshold. Can be: 'read-iops', 'write-iops', 'traffic-in', 'traffic-out', 'cpu' (%), 'memory' (%), 'swap' (%).                   |
| --critical-*         |   Critical threshold. Can be: 'read-iops', 'write-iops', 'traffic-in', 'traffic-out', 'cpu' (%), 'memory' (%), 'swap' (%).                  |
| --warning-vm-status  |   Define the conditions to match for the status to be WARNING (default: -) You can use the following variables: %\{name\}, %\{state\}.      |
| --critical-vm-status |   Define the conditions to match for the status to be CRITICAL (default: -). You can use the following variables: %\{name\}, %\{state\}.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_proxmox_ve_restapi.pl \
	--plugin apps::proxmox::ve::restapi::plugin \
	--mode=vm-usage \
	--help
```
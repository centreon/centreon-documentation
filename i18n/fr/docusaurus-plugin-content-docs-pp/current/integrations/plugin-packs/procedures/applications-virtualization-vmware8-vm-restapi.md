---
id: applications-virtualization-vmware8-vm-restapi
title: VMware8 VM REST API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du Connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **VMware8 VM REST API** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **VMware8 VM REST API** apporte un modèle d'hôte :

* **Virt-VMware8-VM-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Virt-VMware8-VM-Restapi-custom" label="Virt-VMware8-VM-Restapi-custom">

| Alias     | Modèle de service                        | Description                                                                           |
|:----------|:-----------------------------------------|:--------------------------------------------------------------------------------------|
| Vm-Cpu    | Virt-VMWare8-VM-Vm-Cpu-Restapi-custom    | Contrôle permettant de vérifier le taux d'utilisation CPU d'une machine virtuelle     |
| Vm-Disk-IO            | Virt-VMWare8-VM-Vm-Disk-IO-Restapi-custom            | Supervision des statistiques agrégées d'entrées/sorties disque d'une machine virtuelle |
| Vm-Memory | Virt-VMWare8-VM-Vm-Memory-Restapi-custom | Contrôle permettant de vérifier le taux d'utilisation mémoire d'une machine virtuelle |
| Vm-Network-Throughput | Virt-VMWare8-VM-Vm-Network-Throughput-Restapi-custom | Supervision des statistiques agrégées de trafic réseau d'une machine virtuelle         |
| Vm-Power              | Virt-VMWare8-VM-Vm-Power-Restapi-custom              | Supervision de la puissance électrique consommée par une machine virtuelle             |
| Vm-Tools  | Virt-VMWare8-VM-Vm-Tools-Restapi-custom  | Supervision de l'état des VMware Tools                                                |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Virt-VMware8-VM-Restapi-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle     | Description                                                                             |
|:--------------------|:----------------------------------------------------------------------------------------|
| VMware VM vSphere 8 | Discover VMware virtual machines by requesting vCenter server using vSphere REST API v8 |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Vm-Cpu" label="Vm-Cpu">

| Nom                           | Unité |
|:------------------------------|:------|
| cpu.capacity.usage.percentage | %     |
| cpu.capacity.usage.hertz      | Hz    |

</TabItem>
<TabItem value="Vm-Disk-IO" label="Vm-Disk-IO">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| disk.throughput.usage.bytespersecond    | Bps   |
| disk.throughput.contention.milliseconds | ms    |

</TabItem>
<TabItem value="Vm-Memory" label="Vm-Memory">

| Nom                     | Unité |
|:------------------------|:------|
| memory.usage.percentage | %     |
| memory.usage.bytes      | B     |

</TabItem>
<TabItem value="Vm-Network-Throughput" label="Vm-Network-Throughput">

| Nom                                    | Unité |
|:---------------------------------------|:------|
| network.throughput.usage.bitspersecond | nps   |
| network.throughput.contention.count    | count |

</TabItem>
<TabItem value="Vm-Power" label="Vm-Power">

| Nom                       | Unité |
|:--------------------------|:------|
| power.capacity.usage.watt | W     |

</TabItem>
<TabItem value="Vm-Tools" label="Vm-Tools">

| Nom                          | Unité |
|:-----------------------------|:------|
| tools.install.attempts.count | count |
| version-status               | N/A   |
| upgrade-policy               | N/A   |
| run-state                    | N/A   |

</TabItem>
</Tabs>

## Prérequis

Pour pouvoir utiliser ce connecteur, il faut disposer d'un compte utilisateur pouvant accéder à l'[API vCenter](https://developer.broadcom.com/xapis/vsphere-automation-api/latest/)
de version au moins égale à 8 et disposant des privilèges suivants :
- Collecter les données statistiques
- Interroger les données statistiques

Ces privilèges sont inclus dans le rôle prédéfini `vStatsUser`.

NB: Ce connecteur n'a été testé qu'avec une authentification de type `Basic` (de la forme `user@vsphere.local`).

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Connecteurs > Connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-virtualization-vmware8-vm-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-virtualization-vmware8-vm-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-virtualization-vmware8-vm-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-virtualization-vmware8-vm-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **VMware8 VM REST API**
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
dnf install centreon-plugin-Virtualization-Vmware8-Vm-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Virtualization-Vmware8-Vm-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-virtualization-vmware8-vm-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Virtualization-Vmware8-Vm-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Virt-VMware8-VM-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro               | Description                                                                                                                                               | Valeur par défaut | Obligatoire |
|:--------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VMWARE8USERNAME     | Define the username for authentication                                                                                                                    | USERNAME          | X           |
| VMWARE8PASSWORD     | Define the password for authentication                                                                                                                    | PASSWORD          | X           |
| VMWARE8PROTO        | Define the protocol to use (default: https)                                                                                                               | https             |             |
| VMWARE8PORT         | Define the port of the vSphere server (default: 443)                                                                                                      | 443               |             |
| TIMEOUT             | Define the timeout for API requests (default: 10 seconds)                                                                                                 |                   |             |
| VMWARE8VCENTER      | Define the hostname of the vSphere server                                                                                                                 |                   | X           |
| VMWARE8VMID         | Define which VM to monitor based on its resource ID (example: `vm-1234`). **Using this option is mandatory if you have several VMs with the same name.** |                   |             |
| VMWARE8VMNAME       | Define which VM to monitor based on its name (example: `WEBSERVER01`). When possible, it is recommended to use `--vm-id` instead. **Do not use this option if you have several VMs with the same name.** |                   |             |
| VMWARE8EXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                      |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Vm-Cpu" label="Vm-Cpu">

| Macro                  | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGEFREQUENCY  | Threshold in Hertz                                                                                                                               |                   |             |
| CRITICALUSAGEFREQUENCY | Threshold in Hertz                                                                                                                               |                   |             |
| WARNINGUSAGEPRCT       | Threshold in percentage                                                                                                                          |                   |             |
| CRITICALUSAGEPRCT      | Threshold in percentage                                                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Vm-Disk-IO" label="Vm-Disk-IO">

| Macro                | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONTENTIONMS  | Threshold in milliseconds                                                                          |                   |             |
| CRITICALCONTENTIONMS | Threshold in milliseconds                                                                          |                   |             |
| WARNINGUSAGEBPS      | Threshold in bytes per second                                                                      |                   |             |
| CRITICALUSAGEBPS     | Threshold in bytes per second                                                                      |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Vm-Memory" label="Vm-Memory">

| Macro              | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGEBYTES  | Threshold in bytes                                                                                                                               |                   |             |
| CRITICALUSAGEBYTES | Threshold in bytes                                                                                                                               |                   |             |
| WARNINGUSAGEPRCT   | Threshold in percentage                                                                                                                          |                   |             |
| CRITICALUSAGEPRCT  | Threshold in percentage                                                                                                                          |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Vm-Network-Throughput" label="Vm-Network-Throughput">

| Macro                   | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONTENTIONCOUNT  | Threshold                                                                                          |                   |             |
| CRITICALCONTENTIONCOUNT | Threshold                                                                                          |                   |             |
| WARNINGUSAGEBPS         | Threshold in bytes per second                                                                      |                   |             |
| CRITICALUSAGEBPS        | Threshold in bytes per second                                                                      |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Vm-Power" label="Vm-Power">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGEWATT  | Threshold in Watts                                                                                 |                   |             |
| CRITICALUSAGEWATT | Threshold in Watts                                                                                 |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Vm-Tools" label="Vm-Tools">

| Macro                   | Description                                                                                                                                                                                                                                                                                                | Valeur par défaut                                                                 | Obligatoire |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------|:-----------:|
| WARNINGINSTALLATTEMPTS  | Threshold based on the number of attempts that have been made to install or upgrade the version of Tools installed on this virtual machine. In case of failed attempts, adding the `--verbose` option will display the error messages in the long output                                                   |                                                                                   |             |
| CRITICALINSTALLATTEMPTS | Threshold based on the number of attempts that have been made to install or upgrade the version of Tools installed on this virtual machine. In case of failed attempts, adding the `--verbose` option will display the error messages in the long output                                                   |                                                                                   |             |
| WARNINGRUNSTATE         | Define the conditions to match for the status to be WARNING based on the Current run state of VMware Tools in the guest operating system. You can use the following variables: %\{run\_state\} (can be "NOT\_RUNNING", "RUNNING" or "EXECUTING\_SCRIPTS").                                                 | %\{run\_state\} =~ /^NOT\_RUNNING$/i                                              |             |
| CRITICALRUNSTATE        | Define the conditions to match for the status to be CRITICAL based on the Current run state of VMware Tools in the guest operating system. You can use the following variables: %\{run\_state\} (can be "NOT\_RUNNING", "RUNNING" or "EXECUTING\_SCRIPTS")                                                 |                                                                                   |             |
| WARNINGUPGRADEPOLICY    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{auto\_update\_supported\} (can be "true" or "false"), %\{upgrade\_policy\} (can be "MANUAL" or "UPGRADE\_AT\_POWER\_CYCLE")                                                                           |                                                                                   |             |
| CRITICALUPGRADEPOLICY   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{auto\_update\_supported\} (can be "true" or "false"), %\{upgrade\_policy\} (can be "MANUAL" or "UPGRADE\_AT\_POWER\_CYCLE")                                                                          |                                                                                   |             |
| WARNINGVERSIONSTATUS    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{version\_status\} (can be "NOT\_INSTALLED", "CURRENT", "UNMANAGED", "TOO\_OLD\_UNSUPPORTED", "SUPPORTED\_OLD", "SUPPORTED\_NEW", "TOO\_NEW" or "BLACKLISTED") and %\{version\} (example: "v12.3.0").  | %\{version\_status\} =~ /^(SUPPORTED\_OLD\|TOO\_NEW)$/i                           |             |
| CRITICALVERSIONSTATUS   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{version\_status\} (can be "NOT\_INSTALLED", "CURRENT", "UNMANAGED", "TOO\_OLD\_UNSUPPORTED", "SUPPORTED\_OLD", "SUPPORTED\_NEW", "TOO\_NEW" or "BLACKLISTED") and %\{version\} (example: "v12.3.0"). | %\{version\_status\} =~ /^(NOT\_INSTALLED\|TOO\_OLD\_UNSUPPORTED\|BLACKLISTED)$/i |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                                           | --verbose                                                                         |             |

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
/usr/lib/centreon/plugins/centreon_vmware8_vm_restapi.pl \
	--plugin=apps::vmware::vsphere8::vm::plugin \
	--custommode=api \
	--mode=vm-tools \
	--hostname='myvcenter.network.local' \
	--port='443' \
	--proto='https' \
	--username='USERNAME' \
	--password='PASSWORD' \
	--timeout='' \
	--vm-name='' \
	--vm-id='vm-4562'  \
	--warning-install-attempts='' \
	--critical-install-attempts='' \
	--warning-run-state='%\{run\_state\} =~ /^NOT\_RUNNING$/i' \
	--critical-run-state='' \
	--warning-upgrade-policy='' \
	--critical-upgrade-policy='' \
	--warning-version-status='%\{version\_status\} =~ /^(SUPPORTED\_OLD|TOO\_NEW)$/i' \
	--critical-version-status='%\{version\_status\} =~ /^(NOT\_INSTALLED|TOO\_OLD\_UNSUPPORTED|BLACKLISTED)$/i' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
WARNING: vm-4562 had 3 install attempts (error messages available in long output with --verbose option) | 'tools.install.attempts.count'=3;0:2;;0;
Version status: UNMANAGED - Explanation: VMware Tools is installed, but it is not managed by VMware. This includes open-vm-tools or OSPs which should be managed by the guest operating system.
Error: [com.vmware.api.vcenter.error] An error has occurred while invoking the operation.
Error: [vmsg.VmToolsUpgradeFault.summary] Error upgrading VMware Tools.
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
/usr/lib/centreon/plugins/centreon_vmware8_vm_restapi.pl \
	--plugin=apps::vmware::vsphere8::vm::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                        | Modèle de service associé                            |
|:----------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/vm/mode/cpu.pm)]             | Virt-VMWare8-VM-Vm-Cpu-Restapi-custom                |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/vm/mode/discovery.pm)] | Used for host discovery                              |
| disk-io [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/vm/mode/diskio.pm)]      | Virt-VMWare8-VM-Vm-Disk-IO-Restapi-custom            |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/vm/mode/memory.pm)]       | Virt-VMWare8-VM-Vm-Memory-Restapi-custom             |
| network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/vm/mode/network.pm)]     | Virt-VMWare8-VM-Vm-Network-Throughput-Restapi-custom |
| power [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/vm/mode/power.pm)]         | Virt-VMWare8-VM-Vm-Power-Restapi-custom              |
| vm-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/vm/mode/vmstatus.pm)]  | Used for the host status                |
| vm-tools [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/vm/mode/vmtools.pm)]    | Virt-VMWare8-VM-Vm-Tools-Restapi-custom              |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|:-------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --vm-id                                    | Define which VM to monitor based on its resource ID (example: `vm-16`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --vm-name                                  | Define which VM to monitor based on its name (example: `WEBSERVER01`). When possible, it is recommended to use `--vm-id` instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --proxypac                                 | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --failback-file                            | Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --hostname                                 | Define the hostname of the vSphere server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --port                                     | Define the port of the vSphere server (default: 443).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proto                                    | Define the protocol to use (default: https).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --username                                 | Define the username for authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --password                                 | Define the password for authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --vstats-interval                          | Define the interval (in seconds) at which the `vstats` must be recorded (default: 300). Used to create entries at the `/api/stats/acq-specs` endpoint.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --vstats-duration                          | Define the time (in seconds) after which the `vstats` will stop being recorded (default: 2764800, meaning 32 days). Used to create entries at the `/api/stats/acq-specs` endpoint.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --timeout                                  | Define the timeout for API requests (default: 10 seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Vm-Cpu" label="Vm-Cpu">

| Option                     | Description                                                                                                               |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --warning-usage-frequency  | Threshold in Hertz.                                                                                                       |
| --critical-usage-frequency | Threshold in Hertz.                                                                                                       |
| --warning-usage-prct       | Threshold in percentage.                                                                                                  |
| --critical-usage-prct      | Threshold in percentage.                                                                                                  |


</TabItem>
<TabItem value="Vm-Disk-IO" label="Vm-Disk-IO">

| Option                   | Description                         |
|:-------------------------|:------------------------------------|
| --warning-contention-ms  | Threshold in milliseconds.        |
| --critical-contention-ms | Threshold in milliseconds.        |
| --warning-usage-bps      | Threshold in bytes per second.    |
| --critical-usage-bps     | Threshold in bytes per second.    |

</TabItem>
<TabItem value="Vm-Memory" label="Vm-Memory">

| Option                 | Description                   |
|:-----------------------|:------------------------------|
| --warning-usage-bytes  | Threshold in bytes.         |
| --critical-usage-bytes | Threshold in bytes.         |
| --warning-usage-prct   | Threshold in percentage.    |
| --critical-usage-prct  | Threshold in percentage.    |

</TabItem>
<TabItem value="Vm-Network-Throughput" label="Vm-Network-Throughput">

| Option                      | Description                         |
|:----------------------------|:------------------------------------|
| --warning-contention-count  | Threshold.                        |
| --critical-contention-count | Threshold.                        |
| --warning-usage-bps         | Threshold in bytes per second.    |
| --critical-usage-bps        | Threshold in bytes per second.    |

</TabItem>
<TabItem value="Vm-Power" label="Vm-Power">

| Option                | Description              |
|:----------------------|:-------------------------|
| --warning-usage-watt  | Threshold in Watts.    |
| --critical-usage-watt | Threshold in Watts.    |

</TabItem>
<TabItem value="Vm-Tools" label="Vm-Tools">

| Option                      | Description                                                                                                                                                                                                                                                                                                                                                                                            |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-install-attempts  | Threshold based on the number of attempts that have been made to install or upgrade the version of Tools installed on this virtual machine. In case of failed attempts, adding the `--verbose` option will display the error messages in the long output.                                                                                                                                              |
| --critical-install-attempts | Threshold based on the number of attempts that have been made to install or upgrade the version of Tools installed on this virtual machine. In case of failed attempts, adding the `--verbose` option will display the error messages in the long output.                                                                                                                                              |
| --warning-run-state         | Define the conditions to match for the status to be WARNING based on the Current run state of VMware Tools in the guest operating system. You can use the following variables: %\{run\_state\} (can be "NOT\_RUNNING", "RUNNING" or "EXECUTING\_SCRIPTS").  Default: %\{run\_state\} =~ /^NOT\_RUNNING$/i                                                                                              |
| --critical-run-state        | Define the conditions to match for the status to be CRITICAL based on the Current run state of VMware Tools in the guest operating system. You can use the following variables: %\{run\_state\} (can be "NOT\_RUNNING", "RUNNING" or "EXECUTING\_SCRIPTS").                                                                                                                                            |
| --warning-upgrade-policy    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{auto\_update\_supported\} (can be "true" or "false"), %\{upgrade\_policy\} (can be "MANUAL" or "UPGRADE\_AT\_POWER\_CYCLE").                                                                                                                                                                      |
| --critical-upgrade-policy   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{auto\_update\_supported\} (can be "true" or "false"), %\{upgrade\_policy\} (can be "MANUAL" or "UPGRADE\_AT\_POWER\_CYCLE").                                                                                                                                                                     |
| --warning-version-status    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{version\_status\} (can be "NOT\_INSTALLED", "CURRENT", "UNMANAGED", "TOO\_OLD\_UNSUPPORTED", "SUPPORTED\_OLD", "SUPPORTED\_NEW", "TOO\_NEW" or "BLACKLISTED") and %\{version\} (example: "v12.3.0").  Default: %\{version\_status\} =~ /^(SUPPORTED\_OLD\|TOO\_NEW)$/i                           |
| --critical-version-status   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{version\_status\} (can be "NOT\_INSTALLED", "CURRENT", "UNMANAGED", "TOO\_OLD\_UNSUPPORTED", "SUPPORTED\_OLD", "SUPPORTED\_NEW", "TOO\_NEW" or "BLACKLISTED") and %\{version\} (example: "v12.3.0").  Default: %\{version\_status\} =~ /^(NOT\_INSTALLED\|TOO\_OLD\_UNSUPPORTED\|BLACKLISTED)$/i |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_vmware8_vm_restapi.pl \
	--plugin=apps::vmware::vsphere8::vm::plugin \
	--custommode=api \
	--help
```

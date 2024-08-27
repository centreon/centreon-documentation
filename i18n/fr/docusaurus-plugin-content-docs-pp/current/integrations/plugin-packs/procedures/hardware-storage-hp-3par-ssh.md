---
id: hardware-storage-hp-3par-ssh
title: HP 3PAR SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **HP 3PAR SSH** apporte un modèle d'hôte :

* **HW-Storage-HP-3par-SSH-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-HP-3par-SSH-custom" label="HW-Storage-HP-3par-SSH-custom">

| Alias        | Modèle de service                          | Description                                           |
|:-------------|:-------------------------------------------|:------------------------------------------------------|
| Capacity     | HW-Storage-HP-3par-Capacity-SSH-custom     | Contrôle la capacité des différents types de stockage |
| Components   | HW-Storage-HP-3par-Components-SSH-custom   | Contrôle le matériel                                  |
| Disk-Usage   | HW-Storage-HP-3par-Disk-Usage-SSH-custom   | Contrôle les disques                                  |
| Nodes        | HW-Storage-HP-3par-Nodes-SSH-custom        | Contrôle les noeuds                                   |
| Volume-Usage | HW-Storage-HP-3par-Volume-Usage-SSH-custom | Contrôle les volumes                                  |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-HP-3par-SSH-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias  | Modèle de service                    | Description                                    |
|:-------|:-------------------------------------|:-----------------------------------------------|
| Afc    | HW-Storage-HP-3par-Afc-SSH-custom    | Contrôle l'adaptive flash cache                |
| Cages  | HW-Storage-HP-3par-Cages-SSH-custom  | Contrôle les cages                             |
| Psu    | HW-Storage-HP-3par-Psu-SSH-custom    | Contrôle les alimentations                     |
| Time   | HW-Storage-HP-3par-Time-SSH-custom   | Contrôle la dérive de temps des noeuds         |
| Uptime | HW-Storage-HP-3par-Uptime-SSH-custom | Contrôle la durée de fonctionnement des noeuds |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Afc" label="Afc">

| Métrique                                        | Unité |
|:------------------------------------------------|:------|
| *nodes*~status                                  | N/A   |
| *nodes*~node.flashcache.usage.bytes             | B     |
| *nodes*~node.flashcache.free.bytes              | B     |
| *nodes*~node.flashcache.usage.percentage        | %     |
| *nodes*~node.flashcache.readhits.percentage     | %     |
| *volumes*~volume.flashcache.readhits.percentage | %     |

</TabItem>
<TabItem value="Cages" label="Cages">

| Métrique                               | Unité |
|:---------------------------------------|:------|
| *cages*~status                         | N/A   |
| *cages*~*boards*#board-firmware-status | N/A   |
| *cages*~*boards*#board-self-status     | N/A   |
| *cages*~*boards*#board-partner-status  | N/A   |
| *cages*~*psu*#psu-status               | N/A   |
| *cages*~*psu*#psu-ac-status            | N/A   |
| *cages*~*psu*#psu-dc-status            | N/A   |
| *cages*~*psu*#psu-fan-status           | N/A   |
| *cages*~*drives*#drive-status          | N/A   |

</TabItem>
<TabItem value="Capacity" label="Capacity">

| Métrique                                              | Unité |
|:------------------------------------------------------|:------|
| *storages*~storage.space.usage.bytes                  | B     |
| *storages*~storage.space.free.bytes                   | B     |
| *storages*~storage.space.usage.percentage             | %     |
| *storages*~storage.space.unavailable.bytes            | B     |
| *storages*~storage.space.failed.bytes                 | B     |
| *storages*~storage.space.compaction.ratio.count       | count |
| *storages*~storage.space.deduplication.ratio.count    | count |
| *storages*~storage.space.compression.ratio.count      | count |
| *storages*~storage.space.data_reduction.ratio.count   | count |
| *storages*~storage.space.overprovisioning.ratio.count | count |

</TabItem>
<TabItem value="Components" label="Components">

Coming soon

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| *disk_name*#status                      | N/A   |
| *disk_name*#disk.space.usage.bytes      | B     |
| *disk_name*#disk.space.free.bytes       | B     |
| *disk_name*#disk.space.usage.percentage | %     |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Métrique                                      | Unité |
|:----------------------------------------------|:------|
| *nodes*~status                                | N/A   |
| *nodes*~*cpu*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Psu" label="Psu">

| Métrique             | Unité |
|:---------------------|:------|
| *psu*~status         | N/A   |
| *psu*~ac-status      | N/A   |
| *psu*~dc-status      | N/A   |
| *psu*~fan-status     | N/A   |
| *psu*~battery-status | N/A   |

</TabItem>
<TabItem value="Time" label="Time">

Coming soon

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique                    | Unité |
|:----------------------------|:------|
| *nodes*#node.uptime.seconds | s     |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Métrique                               | Unité |
|:---------------------------------------|:------|
| *volume*#volume.space.usage.bytes      | B     |
| *volume*#volume.space.free.bytes       | B     |
| *volume*#volume.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SSH

L'utilisation de ce connecteur requiert la création d'un utilisateur sur la
ressource supervisée, lequel sera utilisé par le collecteur Centreon pour
s'authentifier et exécuter les requêtes SSH. Les privilèges `sudo` ou `root` ne
sont pas nécessaires, un utilisateur 'simple' est suffisant.

Deux méthodes de connexion SSH sont possibles :
* soit en échangeant la clé SSH publique de l'utilisateur `centreon-engine` du collecteur Centreon
* soit en définissant votre utilisateur et votre mot de passe directement dans les macros d'hôtes.

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-storage-hp-3par-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-hp-3par-ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-storage-hp-3par-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-hp-3par-ssh
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **HP 3PAR SSH**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

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
dnf install centreon-plugin-Hardware-Storage-Hp-3par-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Hp-3par-Ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-storage-hp-3par-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Hp-3par-Ssh
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-HP-3par-SSH-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                                                         | Valeur par défaut | Obligatoire |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                          |                   |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead |                   |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                       |                   |             |
| SSHBACKEND      | Define the backend you want to use. It can be: sshcli (default), plink and libssh                                                                                   | sshcli            |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Afc" label="Afc">

| Macro                            | Description                                                                                                                                                                                 | Valeur par défaut      | Obligatoire |
|:---------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| FILTERNODEID                     | Filter nodes by ID (can be a regexp)                                                                                                                                                        |                        |             |
| FILTERVOLUMENAME                 | Filter volumes by name (can be a regexp)                                                                                                                                                    |                        |             |
| WARNINGFLASHCACHENODEREADHITS    | Define the WARNING thresholds for the following components: 'flashcache-usage', 'flashcache-usage-free', 'flashcache-usage-prct', 'flashcache-node-readhits', 'flashcache-volume-readhits'  |                        |             |
| CRITICALFLASHCACHENODEREADHITS   | Define the CRITICAL thresholds for the following components: 'flashcache-usage', 'flashcache-usage-free', 'flashcache-usage-prct', 'flashcache-node-readhits', 'flashcache-volume-readhits' |                        |             |
| WARNINGFLASHCACHEUSAGE           | Define the WARNING thresholds for the following components: 'flashcache-usage', 'flashcache-usage-free', 'flashcache-usage-prct', 'flashcache-node-readhits', 'flashcache-volume-readhits'  |                        |             |
| CRITICALFLASHCACHEUSAGE          | Define the CRITICAL thresholds for the following components: 'flashcache-usage', 'flashcache-usage-free', 'flashcache-usage-prct', 'flashcache-node-readhits', 'flashcache-volume-readhits' |                        |             |
| WARNINGFLASHCACHEUSAGEFREE       | Define the WARNING thresholds for the following components: 'flashcache-usage', 'flashcache-usage-free', 'flashcache-usage-prct', 'flashcache-node-readhits', 'flashcache-volume-readhits'  |                        |             |
| CRITICALFLASHCACHEUSAGEFREE      | Define the CRITICAL thresholds for the following components: 'flashcache-usage', 'flashcache-usage-free', 'flashcache-usage-prct', 'flashcache-node-readhits', 'flashcache-volume-readhits' |                        |             |
| WARNINGFLASHCACHEUSAGEPRCT       | Define the WARNING thresholds for the following components: 'flashcache-usage', 'flashcache-usage-free', 'flashcache-usage-prct', 'flashcache-node-readhits', 'flashcache-volume-readhits'  |                        |             |
| CRITICALFLASHCACHEUSAGEPRCT      | Define the CRITICAL thresholds for the following components: 'flashcache-usage', 'flashcache-usage-free', 'flashcache-usage-prct', 'flashcache-node-readhits', 'flashcache-volume-readhits' |                        |             |
| WARNINGFLASHCACHEVOLUMEREADHITS  | Define the WARNING thresholds for the following components: 'flashcache-usage', 'flashcache-usage-free', 'flashcache-usage-prct', 'flashcache-node-readhits', 'flashcache-volume-readhits'  |                        |             |
| CRITICALFLASHCACHEVOLUMEREADHITS | Define the CRITICAL thresholds for the following components: 'flashcache-usage', 'flashcache-usage-free', 'flashcache-usage-prct', 'flashcache-node-readhits', 'flashcache-volume-readhits' |                        |             |
| CRITICALSTATUS                   | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /normal/i') You can use the following variables: %{status}, %{node\_id}                                | %{status} !~ /normal/i |             |
| WARNINGSTATUS                    | Define the conditions to match for the status to be WARNING                                                                                                                                 |                        |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                          | --verbose              |             |

</TabItem>
<TabItem value="Cages" label="Cages">

| Macro                       | Description                                                                                                                                                                 | Valeur par défaut       | Obligatoire |
|:----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERCAGEID                | Filter cages by ID (can be a regexp)                                                                                                                                        |                         |             |
| CRITICALBOARDFIRMWARESTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /Current/i') You can use the following variables: %{status}, %{cage\_id}, %{board\_id} | %{status} !~ /Current/i |             |
| WARNINGBOARDFIRMWARESTATUS  | Define the conditions to match for the status to be WARNING                                                                                                                 |                         |             |
| CRITICALBOARDPARTNERSTATUS  |                                                                                                                                                                             | %{status} !~ /ok/i      |             |
| WARNINGBOARDPARTNERSTATUS   |                                                                                                                                                                             |                         |             |
| CRITICALBOARDSELFSTATUS     |                                                                                                                                                                             | %{status} !~ /ok/i      |             |
| WARNINGBOARDSELFSTATUS      |                                                                                                                                                                             |                         |             |
| CRITICALDRIVEPORTASTATUS    |                                                                                                                                                                             | %{status} !~ /ok/i      |             |
| WARNINGDRIVEPORTASTATUS     |                                                                                                                                                                             |                         |             |
| CRITICALDRIVEPORTBSTATUS    |                                                                                                                                                                             | %{status} !~ /ok/i      |             |
| WARNINGDRIVEPORTBSTATUS     |                                                                                                                                                                             |                         |             |
| WARNINGDRIVESTATUS          | Define the conditions to match for the status to be WARNING                                                                                                                 |                         |             |
| CRITICALDRIVESTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /normal/i') You can use the following variables: %{status}, %{cage\_id}, %{drive\_id}  |                         |             |
| WARNINGDRIVETEMPERATURE     | Define WARNING threshold for the temperature of the drives                                                                                                                  |                         |             |
| CRITICALDRIVETEMPERATURE    | Define CRITICAL threshold for the temperature of the drives                                                                                                                 |                         |             |
| CRITICALPSUACSTATUS         |                                                                                                                                                                             | %{status} !~ /ok/i      |             |
| WARNINGPSUACSTATUS          |                                                                                                                                                                             |                         |             |
| CRITICALPSUDCSTATUS         |                                                                                                                                                                             | %{status} !~ /ok/i      |             |
| WARNINGPSUDCSTATUS          |                                                                                                                                                                             |                         |             |
| CRITICALPSUFANSTATUS        |                                                                                                                                                                             | %{status} !~ /ok/i      |             |
| WARNINGPSUFANSTATUS         |                                                                                                                                                                             |                         |             |
| CRITICALPSUSTATUS           | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i') You can use the following variables: %{status}, %{cage\_id}, %{psu\_id}        | %{status} !~ /ok/i      |             |
| WARNINGPSUSTATUS            | Define the conditions to match for the status to be WARNING                                                                                                                 |                         |             |
| CRITICALSTATUS              | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /Normal/i') You can use the following variables: %{status}, %{cage\_id}                | %{status} !~ /Normal/i  |             |
| WARNINGSTATUS               | Define the conditions to match for the status to be WARNING                                                                                                                 |                         |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                          | --verbose               |             |

</TabItem>
<TabItem value="Capacity" label="Capacity">

| Macro                    | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERTYPE               | Filter storages by type (can be a regexp)                                                          |                   |             |
| WARNINGCOMPACTION        | Thresholds                                                                                         |                   |             |
| CRITICALCOMPACTION       | Thresholds                                                                                         |                   |             |
| WARNINGCOMPRESSION       | Thresholds                                                                                         |                   |             |
| CRITICALCOMPRESSION      | Thresholds                                                                                         |                   |             |
| WARNINGDATAREDUCTION     | Thresholds                                                                                         |                   |             |
| CRITICALDATAREDUCTION    | Thresholds                                                                                         |                   |             |
| WARNINGDEDUP             | Thresholds                                                                                         |                   |             |
| CRITICALDEDUP            | Thresholds                                                                                         |                   |             |
| WARNINGOVERPROVISIONING  | Thresholds                                                                                         |                   |             |
| CRITICALOVERPROVISIONING | Thresholds                                                                                         |                   |             |
| WARNINGSPACEFAILED       | Thresholds                                                                                         |                   |             |
| CRITICALSPACEFAILED      | Thresholds                                                                                         |                   |             |
| WARNINGSPACEUNAVAILABLE  | Thresholds                                                                                         |                   |             |
| CRITICALSPACEUNAVAILABLE | Thresholds                                                                                         |                   |             |
| WARNINGSPACEUSAGE        | Thresholds                                                                                         |                   |             |
| CRITICALSPACEUSAGE       | Thresholds                                                                                         |                   |             |
| WARNINGSPACEUSAGEFREE    | Thresholds                                                                                         |                   |             |
| CRITICALSPACEUSAGEFREE   | Thresholds                                                                                         |                   |             |
| WARNINGSPACEUSAGEPRCT    | Thresholds                                                                                         |                   |             |
| CRITICALSPACEUSAGEPRCT   | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Components" label="Components">

| Macro        | Description                                                                                                          | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'battery', 'cim', 'port', 'node', 'disk', 'psu', 'sensor', 'wsapi' | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                   | --verbose         |             |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Macro             | Description                                                                                                                                                  | Valeur par défaut      | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| FILTERNAME        | Filter disk name (can be a regexp)                                                                                                                           |                        |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /normal/i'). You can use the following variables: %{status}, %{display} | %{status} !~ /normal/i |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{status}, %{display}                        |                        |             |
| WARNINGUSAGE      | Warning threshold                                                                                                                                            |                        |             |
| CRITICALUSAGE     | Warning threshold                                                                                                                                            |                        |             |
| WARNINGUSAGEFREE  | Warning threshold                                                                                                                                            |                        |             |
| CRITICALUSAGEFREE | Warning threshold                                                                                                                                            |                        |             |
| WARNINGUSAGEPRCT  | Warning threshold                                                                                                                                            |                        |             |
| CRITICALUSAGEPRCT | Warning threshold                                                                                                                                            |                        |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                           | --verbose              |             |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Macro                  | Description                                                                                                                                               | Valeur par défaut  | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| FILTERNODEID           | Filter nodes by ID (can be a regexp)                                                                                                                      |                    |             |
| WARNINGCPUUTILIZATION  | Thresholds                                                                                                                                                |                    |             |
| CRITICALCPUUTILIZATION | Thresholds                                                                                                                                                |                    |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{node\_id} | %{status} !~ /ok/i |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{node\_id}                                  |                    |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                        | --verbose          |             |

</TabItem>
<TabItem value="Psu" label="Psu">

| Macro                          | Description                                                                                                                                                           | Valeur par défaut  | Obligatoire |
|:-------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| FILTERNODEID                   | Filter nodes by ID (can be a regexp)                                                                                                                                  |                    |             |
| FILTERPSUID                    | Filter power supplies by ID (can be a regexp)                                                                                                                         |                    |             |
| CRITICALACSTATUS               | Set critical threshold for AC status (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                         | %{status} !~ /ok/i |             |
| WARNINGACSTATUS                | Set warning threshold for AC status. You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                                                          |                    |             |
| CRITICALBATTERYSTATUS          | Set critical threshold for battery status (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                    | %{status} !~ /ok/i |             |
| WARNINGBATTERYSTATUS           | Set warning threshold for battery status. You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                                                     |                    |             |
| WARNINGCHARGEREMAINING         | Thresholds                                                                                                                                                            |                    |             |
| CRITICALCHARGEREMAINING        | Thresholds                                                                                                                                                            |                    |             |
| WARNINGCHARGEREMAININGMINUTES  |                                                                                                                                                                       |                    |             |
| CRITICALCHARGEREMAININGMINUTES |                                                                                                                                                                       |                    |             |
| CRITICALDCSTATUS               | Set critical threshold for DC status (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                         | %{status} !~ /ok/i |             |
| WARNINGDCSTATUS                | Set warning threshold for DC status. You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                                                          |                    |             |
| CRITICALFANSTATUS              | Set critical threshold for fan status (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                        | %{status} !~ /ok/i |             |
| WARNINGFANSTATUS               | Set warning threshold for fan status. You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                                                         |                    |             |
| CRITICALSTATUS                 | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{node\_id}, %{psu\_id} | %{status} !~ /ok/i |             |
| WARNINGSTATUS                  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                                  |                    |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                    | --verbose          |             |

</TabItem>
<TabItem value="Time" label="Time">

| Macro          | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNODEID   | Filter nodes by ID (can be a regexp)                                                               |                   |             |
| NTPHOSTNAME    | Set the ntp hostname (if not set, localtime is used)                                               |                   |             |
| NTPPORT        | Set the ntp port (default: 123)                                                                    |                   |             |
| TIMEZONE       | Set the timezone for displaying the date (default: UTC)                                            |                   |             |
| WARNINGOFFSET  | Time offset warning threshold (in seconds)                                                         |                   |             |
| CRITICALOFFSET | Time offset critical Threshold (in seconds)                                                        |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro          | Description                                                                                                                                                          | Valeur par défaut | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNODEID   | Filter nodes by ID (can be a regexp)                                                                                                                                 |                   |             |
| UNIT           | Select the time unit for the performance data and thresholds.May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds |                   |             |
| TIMEZONE       | Timezone options. Default is 'UTC'                                                                                                                                   |                   |             |
| WARNINGUPTIME  | Thresholds                                                                                                                                                           |                   |             |
| CRITICALUPTIME | Thresholds                                                                                                                                                           |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                   | --verbose         |             |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME        | Filter volume name (can be a regexp)                                                               |                   |             |
| WARNINGUSAGE      | Thresholds                                                                                         |                   |             |
| CRITICALUSAGE     | Thresholds                                                                                         |                   |             |
| WARNINGUSAGEFREE  | Thresholds                                                                                         |                   |             |
| CRITICALUSAGEFREE | Thresholds                                                                                         |                   |             |
| WARNINGUSAGEPRCT  | Thresholds                                                                                         |                   |             |
| CRITICALUSAGEPRCT | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_hp_3par_ssh.pl \
	--plugin=storage::hp::3par::ssh::plugin \
	--mode=volume-usage \
	--hostname='10.0.0.1' \
	--ssh-backend='sshcli' \
	--ssh-username='' \
	--ssh-password='' \
	--ssh-port=''  \
	--filter-name='' \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-free='' \
	--critical-usage-free='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All volumes are ok | '*volume*#volume.space.usage.bytes'=B;;;0;total'*volume*#volume.space.free.bytes'=B;;;0;total'*volume*#volume.space.usage.percentage'=%;;;0;100
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_hp_3par_ssh.pl \
	--plugin=storage::hp::3par::ssh::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                         | Modèle de service associé                  |
|:-----------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|
| afc [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/afc.pm)]                  | HW-Storage-HP-3par-Afc-SSH-custom          |
| cages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/cages.pm)]              | HW-Storage-HP-3par-Cages-SSH-custom        |
| capacity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/capacity.pm)]        | HW-Storage-HP-3par-Capacity-SSH-custom     |
| components [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/hardware.pm)]      | HW-Storage-HP-3par-Components-SSH-custom   |
| disk-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/diskusage.pm)]     | HW-Storage-HP-3par-Disk-Usage-SSH-custom   |
| nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/nodes.pm)]              | HW-Storage-HP-3par-Nodes-SSH-custom        |
| psu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/psu.pm)]                  | HW-Storage-HP-3par-Psu-SSH-custom          |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/time.pm)]                | HW-Storage-HP-3par-Time-SSH-custom         |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/uptime.pm)]            | HW-Storage-HP-3par-Uptime-SSH-custom       |
| volume-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/volumeusage.pm)] | HW-Storage-HP-3par-Volume-Usage-SSH-custom |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Timeout in seconds for the command (default: 45).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --command                                  | Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --command-path                             | Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          | Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --ssh-backend                              | Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-username                             | Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ssh-password                             | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-port                                 | Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-priv-key                             | Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --sshcli-command                           | ssh command (default: 'ssh').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --sshcli-path                              | ssh command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sshcli-option                            | Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-command                            | plink command (default: 'plink').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-path                               | plink command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --plink-option                             | Specify plink options (example: --plink-option='-T').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --libssh-strict-connect                    | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Afc" label="Afc">

| Option               | Description                                                                                                                                                                                     |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-node-id     | Filter nodes by ID (can be a regexp).                                                                                                                                                           |
| --filter-volume-name | Filter volumes by name (can be a regexp).                                                                                                                                                       |
| --unknown-status     | Define the conditions to match for the status to be UNKNOWN.                                                                                                                                    |
| --warning-status     | Define the conditions to match for the status to be WARNING.                                                                                                                                    |
| --critical-status    | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /normal/i') You can use the following variables: %{status}, %{node\_id}                                    |
| --warning-*          | Define the WARNING thresholds for the following components: 'flashcache-usage', 'flashcache-usage-free', 'flashcache-usage-prct', 'flashcache-node-readhits', 'flashcache-volume-readhits'.     |
| --critical-*         | Define the CRITICAL thresholds for the following components: 'flashcache-usage', 'flashcache-usage-free', 'flashcache-usage-prct', 'flashcache-node-readhits', 'flashcache-volume-readhits'.    |

</TabItem>
<TabItem value="Cages" label="Cages">

| Option                                    | Description                                                                                                                                                                   |
|:------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-cage-id                          | Filter cages by ID (can be a regexp).                                                                                                                                         |
| --unknown-status                          | Define the conditions to match for the status to be UNKNOWN.                                                                                                                  |
| --warning-status                          | Define the conditions to match for the status to be WARNING.                                                                                                                  |
| --critical-status                         | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /Normal/i') You can use the following variables: %{status}, %{cage\_id}                  |
| --unknown-board-firmware-status           | Define the conditions to match for the status to be UNKNOWN.                                                                                                                  |
| --warning-board-firmware-status           | Define the conditions to match for the status to be WARNING.                                                                                                                  |
| --critical-board-firmware-status          | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /Current/i') You can use the following variables: %{status}, %{cage\_id}, %{board\_id}   |
| --unknown-board-\[self\|partner\]-status  | Define the conditions to match for the status to be UNKNOWN.                                                                                                                  |
| --warning-board-\[self\|partner\]-status  | Define the conditions to match for the status to be WARNING.                                                                                                                  |
| --critical-board-\[self\|partner\]-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i') You can use the following variables: %{status}, %{cage\_id}, %{board\_id}        |
| --unknown-psu-status                      | Define the conditions to match for the status to be UNKNOWN.                                                                                                                  |
| --warning-psu-status                      | Define the conditions to match for the status to be WARNING.                                                                                                                  |
| --critical-psu-status                     | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i') You can use the following variables: %{status}, %{cage\_id}, %{psu\_id}          |
| --unknown-psu-\[ac\|dc\|fan\]-status      | Define the conditions to match for the status to be UNKNOWN.                                                                                                                  |
| --warning-psu-\[ac\|dc\|fan\]-status      | Define the conditions to match for the status to be WARNING.                                                                                                                  |
| --critical-psu-\[ac\|dc\|fan\]-status     | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i') You can use the following variables: %{status}, %{cage\_id}, %{psu\_id}          |
| --unknown-drive-status                    | Define the conditions to match for the status to be UNKNOWN.                                                                                                                  |
| --warning-drive-status                    | Define the conditions to match for the status to be WARNING.                                                                                                                  |
| --critical-drive-status                   | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /normal/i') You can use the following variables: %{status}, %{cage\_id}, %{drive\_id}    |
| --unknown-drive-\[porta\|portb\]-status   | Define the conditions to match for the status to be UNKNOWN.                                                                                                                  |
| --warning-drive-\[porta\|portb\]-status   | Define the conditions to match for the status to be WARNING.                                                                                                                  |
| --critical-drive-\[porta\|portb\]-status  | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i') You can use the following variables: %{status}, %{cage\_id}, %{drive\_id}        |
| --warning-drive-temperature               | Define WARNING threshold for the temperature of the drives.                                                                                                                   |
| --critical-drive-temperature              | Define CRITICAL threshold for the temperature of the drives.                                                                                                                  |

</TabItem>
<TabItem value="Capacity" label="Capacity">

| Option                   | Description                                                                                                                                                                                    |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-type            | Filter storages by type (can be a regexp).                                                                                                                                                     |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct', 'space-unavailable', 'space-failed', 'compaction', 'dedup', 'compression', 'data-reduction', 'overprovisioning'.    |

</TabItem>
<TabItem value="Components" label="Components">

| Option               | Description                                                                                                                                                                                                          |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'battery', 'cim', 'port', 'node', 'disk', 'psu', 'sensor', 'wsapi'.                                                                                                |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=battery --filter=cim). You can also exclude items from specific instances: --filter=port,free                                                   |
| --add-name-instance  | Add literal description for instance value (used in filter and threshold options).                                                                                                                                   |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                           |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='battery,OK,degraded'   |
| --warning            | Set warning threshold for 'battery.charge' (syntax: type,regexp,threshold) Example: --warning='battery.charge,.*,30'                                                                                                 |
| --critical           | Set critical threshold for 'battery.charge' (syntax: type,regexp,threshold) Example: --critical='battery.charge,.*,50'                                                                                               |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Option                   | Description                                                                                                                                                    |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^status$'                                                                         |
| --filter-name            | Filter disk name (can be a regexp).                                                                                                                            |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{status}, %{display}                          |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /normal/i'). You can use the following variables: %{status}, %{display}   |
| --warning-* --critical-* | Warning threshold. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                                                                                    |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Option                   | Description                                                                                                                                                 |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-node-id         | Filter nodes by ID (can be a regexp).                                                                                                                       |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{node\_id}                                    |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{node\_id}                                    |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{node\_id}   |
| --warning-* --critical-* | Thresholds. Can be: 'cpu-utilization'.                                                                                                                      |

</TabItem>
<TabItem value="Psu" label="Psu">

| Option                    | Description                                                                                                                                                             |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-node-id          | Filter nodes by ID (can be a regexp).                                                                                                                                   |
| --filter-psu-id           | Filter power supplies by ID (can be a regexp).                                                                                                                          |
| --unknown-status          | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                                    |
| --warning-status          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                                    |
| --critical-status         | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{node\_id}, %{psu\_id}   |
| --unknown-ac-status       | Set unknown threshold for AC status. You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                                                            |
| --warning-ac-status       | Set warning threshold for AC status. You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                                                            |
| --critical-ac-status      | Set critical threshold for AC status (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                           |
| --unknown-dc-status       | Set unknown threshold for DC status. You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                                                            |
| --warning-dc-status       | Set warning threshold for DC status. You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                                                            |
| --critical-dc-status      | Set critical threshold for DC status (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                           |
| --unknown-fan-status      | Set unknown threshold for fan status. You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                                                           |
| --warning-fan-status      | Set warning threshold for fan status. You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                                                           |
| --critical-fan-status     | Set critical threshold for fan status (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                          |
| --unknown-battery-status  | Set unknown threshold for battery status. You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                                                       |
| --warning-battery-status  | Set warning threshold for battery status. You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                                                       |
| --critical-battery-status | Set critical threshold for battery status (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{node\_id}, %{psu\_id}                      |
| --warning-* --critical-*  | Thresholds. Can be: 'charge-remaining', 'charge-remaining-minutes.                                                                                                      |

</TabItem>
<TabItem value="Time" label="Time">

| Option            | Description                                                |
|:------------------|:-----------------------------------------------------------|
| --filter-node-id  | Filter nodes by ID (can be a regexp).                      |
| --ntp-hostname    | Set the ntp hostname (if not set, localtime is used).      |
| --ntp-port        | Set the ntp port (default: 123).                           |
| --timezone        | Set the timezone for displaying the date (default: UTC).   |
| --warning-offset  | Time offset warning threshold (in seconds).                |
| --critical-offset | Time offset critical Threshold (in seconds).               |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option                   | Description                                                                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-node-id         | Filter nodes by ID (can be a regexp).                                                                                                                                   |
| --timezone               | Timezone options. Default is 'UTC'.                                                                                                                                     |
| --unit                   | Select the time unit for the performance data and thresholds.May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.   |
| --warning-* --critical-* | Thresholds. Can be: 'uptime'.                                                                                                                                           |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Option                   | Description                                                                             |
|:-------------------------|:----------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^usage$'   |
| --filter-name            | Filter volume name (can be a regexp).                                                   |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_hp_3par_ssh.pl \
	--plugin=storage::hp::3par::ssh::plugin \
	--mode=volume-usage \
	--help
```

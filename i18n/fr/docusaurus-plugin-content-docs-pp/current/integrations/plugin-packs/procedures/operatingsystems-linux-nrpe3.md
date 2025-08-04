---
id: operatingsystems-linux-nrpe3
title: Linux NRPE3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Linux NRPE3**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Linux NRPE3** apporte un modèle d'hôte :

* **OS-Linux-NRPE3-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="OS-Linux-NRPE3-custom" label="OS-Linux-NRPE3-custom">

| Alias  | Modèle de service            | Description                                                                                                                                                               |
|:-------|:-----------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cpu    | OS-Linux-Cpu-NRPE3-custom    | Contrôle du taux d'utilisation CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |
| Load   | OS-Linux-Load-NRPE3-custom   | Contrôle de la charge serveur                                                                                                                                             |
| Memory | OS-Linux-Memory-NRPE3-custom | Contrôle du taux d'utilisation de la mémoire vive (RAM)                                                                                                                   |
| Swap   | OS-Linux-Swap-NRPE3-custom   | Contrôle du taux d'utilisation de la mémoire virtuelle (SWAP)                                                                                                             |
| Uptime | OS-Linux-Uptime-NRPE3-custom | Durée depuis laquelle le serveur tourne sans interruption                                                                                                                 |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **OS-Linux-NRPE3-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias               | Modèle de service                         | Description                                                                                                                                                                           | Découverte |
|:--------------------|:------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------:|
| Cmd-Generic         | OS-Linux-Cmd-Generic-NRPE3-custom         | Permet de vérifier le code retour de commandes Linux                                                                                                                                  |            |
| Connections-Generic | OS-Linux-Connections-Generic-NRPE3-custom | Contrôle les connexions tcp/udp                                                                                                                                                       |            |
| Cpu-Detailed        | OS-Linux-Cpu-Detailed-NRPE3-custom        | Contrôle du taux d'utilisation détaillé du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |            |
| Disk-IO             | OS-Linux-Disk-IO-NRPE3-custom             | Contrôle les compteurs I/O des disques                                                                                                                                                |            |
| Disks               | OS-Linux-Disks-NRPE3-custom               | Contrôle du taux d'espace libre disponible des disques. Pour chaque contrôle apparaîtra le point de montage des disques                                                             | X          |
| File-Date-Generic   | OS-Linux-File-Date-Generic-NRPE3-custom   | Permet de vérifier le temps de modification/création/accès/... de fichiers et/ou répertoires                                                                                          |            |
| File-Size-Generic   | OS-Linux-File-Size-Generic-NRPE3-custom   | Permet de vérifier la taille de fichiers et/ou répertoires                                                                                                                            |            |
| Inodes              | OS-Linux-Inodes-NRPE3-custom              | Contrôle du taux d'inodes disponible des disques                                                                                                                                      |            |
| Is-File-Generic     | OS-Linux-Is-File-Generic-NRPE3-custom     | Permet de vérifier si le fichier 'xxx' est présent                                                                                                                                    |            |
| Is-Not-File-Generic | OS-Linux-Is-Not-File-Generic-NRPE3-custom | Permet de vérifier si le fichier 'xxx' n'est pas présent                                                                                                                              |            |
| Ntp                 | OS-Linux-Ntp-NRPE3-custom                 | Contrôle la synchronisation du système avec un serveur de temps                                                                                                                       |            |
| Open-Files          | OS-Linux-Open-Files-NRPE3-custom          | Permet de vérifier le nombre de fichiers ouverts                                                                                                                                      |            |
| Packet-Errors       | OS-Linux-Packet-Errors-NRPE3-custom       | Contrôle le pourcentage de paquets en erreur/écarté de plusieurs interfaces réseau                                                                                                    |            |
| Pending-Updates     | OS-Linux-Pending-Updates-NRPE3-custom     | Contrôle le nombre de mises à jour en attente                                                                                                                                         |            |
| Process-Generic     | OS-Linux-Process-Generic-NRPE3-custom     | Contrôle permettant de vérifier des processus Linux                                                                                                                                   |            |
| Systemd-Journal     | OS-Linux-Systemd-Journal-NRPE3-custom     | Compte le nombre d'entrées dans le journal systemd                                                                                                                                    |            |
| Systemd-Sc-Status   | OS-Linux-Systemd-Sc-Status-NRPE3-custom   | Contrôle le statut des services systemd                                                                                                                                               |            |
| Traffic             | OS-Linux-Traffic-NRPE3-custom             | Contrôle de la bande passante des interfaces. Pour chaque contrôle apparaîtra le nom de l'interface                                                                                  | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle            | Description                                                                                       |
|:---------------------------|:--------------------------------------------------------------------------------------------------|
| OS-Linux-NRPE-Disk-Name    | Discover the disk partitions and monitor space occupation                                         |
| OS-Linux-NRPE-Traffic-Name | Découvre les interfaces réseau en utilisant leur nom et supervise leur statut et leur utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Nom                     | Unité |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Nom          | Unité   |
|-------------------|---------|
| con_closed        | count  |
| con_listen        | count  |
| con_synSent       | count  |
| con_synReceived   | count  |
| con_established   | count  |
| con_finWait1      | count  |
| con_finWait2      | count  |
| con_closeWait     | count  |
| con_lastAck       | count  |
| con_closing       | count  |
| con_timeWait      | count  |
| service_<tag>     | count  |
| app_<tag>         | count  |
| total             | count  |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Nom                                        | Unité |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Nom                             | Unité |
|:--------------------------------|:------|
| core.cpu.utilization.percentage | %     |
| cpu.utilization.percentage      | %     |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Nom                                           | Unité |
|:----------------------------------------------|:------|
| *device*#device.io.read.usage.bytespersecond  | B/s   |
| *device*#device.io.write.usage.bytespersecond | B/s   |
| *device*#device.io.read.wait.milliseconds     | ms    |
| *device*#device.io.write.wait.milliseconds    | ms    |
| *device*#device.io.servicetime.count          | count |
| *device*#device.io.utils.percentage           | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Disks" label="Disks">

| Nom                                   | Unité |
|:--------------------------------------|:------|
| *disk_name*#storage.space.usage.bytes | B     |

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Nom                     | Unité |
|:------------------------|:------|
| file.mtime.last.seconds | s     |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Nom              | Unité |
|:-----------------|:------|
| file.size.bytes  | B     |
| files.size.bytes | B     |

</TabItem>
<TabItem value="Inodes" label="Inodes">

| Nom                                      | Unité |
|:-----------------------------------------|:------|
| *inodes*#storage.inodes.usage.percentage | %     |

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Nom                     | Unité |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Nom                     | Unité |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Load" label="Load">

| Nom        | Unité |
|:-----------|:------|
| avg_load1  | N/A   |
| avg_load5  | N/A   |
| avg_load15 | N/A   |
| load1      | N/A   |
| load5      | N/A   |
| load15     | N/A   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Nom                         | Unité |
|:----------------------------|:------|
| memory.usage.bytes          | B     |
| memory.free.bytes           | B     |
| memory.usage.percentage     | %     |
| memory.available.bytes      | B     |
| memory.available.percentage | %     |
| memory.buffer.bytes         | B     |
| memory.cached.bytes         | B     |
| memory.slab.bytes           | B     |
| swap.usage.bytes            | B     |
| swap.free.bytes             | B     |
| swap.usage.percentage       | %     |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Nom                                   | Unité |
|:--------------------------------------|:------|
| peers.detected.count                  | count |
| status                                | N/A   |
| *peers*#peer.time.offset.milliseconds | ms    |
| *peers*#peer.stratum.count            | count |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Nom                     | Unité |
|:------------------------|:------|
| system.files.open.count | count |

</TabItem>
<TabItem value="Packet-Errors" label="Packet-Errors">

| Nom                                                  | Unité |
|:-----------------------------------------------------|:------|
| status                                               | N/A   |
| *interface*#interface.packets.in.discard.percentage  | %     |
| *interface*#interface.packets.out.discard.percentage | %     |
| *interface*#interface.packets.in.error.percentage    | %     |
| *interface*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Pending-Updates" label="Pending-Updates">

| Nom                          | Unité |
|:-----------------------------|:------|
| pending.updates.total.count  | count |
| security.updates.total.count | count |
| update                       | N/A   |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Nom                                           | Unité |
|:----------------------------------------------|:------|
| time                                          | N/A   |
| memory-usage                                  | N/A   |
| cpu-utilization                               | N/A   |
| disks-read                                    | N/A   |
| disks-write                                   | N/A   |
| processes.total.count                         | count |
| processes.memory.usage.bytes                  | B     |
| processes.cpu.utilization.percentage          | %     |
| processes.disks.io.read.usage.bytespersecond  | B/s   |
| processes.disks.io.write.usage.bytespersecond | B/s   |

</TabItem>
<TabItem value="Swap" label="Swap">

| Nom                   | Unité |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Systemd-Journal" label="Systemd-Journal">

| Nom                   | Unité |
|:----------------------|:------|
| journal.entries.count | count |

</TabItem>
<TabItem value="Systemd-Sc-Status" label="Systemd-Sc-Status">

| Nom                            | Unité |
|:-------------------------------|:------|
| systemd.services.running.count | count |
| systemd.services.failed.count  | count |
| systemd.services.dead.count    | count |
| systemd.services.exited.count  | count |
| status                         | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Nom                                              | Unité |
|:-------------------------------------------------|:------|
| status                                           | N/A   |
| status                                           | N/A   |
| *interface1*#interface.traffic.in.bitspersecond  | b/s   |
| *interface2*#interface.traffic.in.bitspersecond  | b/s   |
| *interface1*#interface.traffic.out.bitspersecond | b/s   |
| *interface2*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Nom                   | Unité |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

### Centreon NSClient++

Pour surveiller les ressources *Windows* via NRPE, installez la version Centreon
de l'agent NSClient++. Veuillez suivre notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) et assurez-vous que la configuration du **serveur NRPE** est correcte.

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
dnf install centreon-pack-operatingsystems-linux-nrpe3
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-linux-nrpe3
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-operatingsystems-linux-nrpe3
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-linux-nrpe3
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Linux NRPE3**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

### Plugin

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-nrpe3-plugin
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **OS-Linux-NRPE3-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro            | Description                                                                                          | Valeur par défaut      | Obligatoire |
|:-----------------|:-----------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| NRPEPORT         | Port used to reach the NRPE server                                                                                                     | 5666                   |             |
| NRPECLIENT       | NRPE Binary used to perform the check                                                                                                     | check\_centreon\_nrpe3 |             |
| NRPETIMEOUT      | Timeout to connect to the NRPE Server                                                                                                     | 5                      |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                        |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Macro          | Description                                                                                                                                       | Valeur par défaut | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMMAND        | Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'                                                                           |                   |             |
| COMMANDOPTIONS | Command options (default: none)                                                                                                                   |                   |             |
| THRESHOLDS     | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                |                   |             |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold for total connections                                                            |                   |             |
| CRITICAL     | Critical threshold for total connections                                                           |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro           | Description                                                                                        | Valeur par défaut                         | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------------------------------|:-----------:|
| WARNINGAVERAGE  | Warning threshold average CPU utilization                                                          |                                           |             |
| CRITICALAVERAGE | Critical  threshold average CPU utilization                                                        |                                           |             |
| WARNINGCORE     | Warning thresholds for each CPU core                                                               |                                           |             |
| CRITICALCORE    | Critical thresholds for each CPU core                                                              |                                           |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --statefile-dir=/var/log/nrpe/centplugins |             |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Macro        | Description                                                                                        | Valeur par défaut                         | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------------------------------|:-----------:|
| WARNINGIDLE  | Threshold                                                                                          |                                           |             |
| CRITICALIDLE | Threshold                                                                                          |                                           |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --statefile-dir=/var/log/nrpe/centplugins |             |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Macro              | Description                                                                                        | Valeur par défaut                                          | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|:-----------:|
| FILTERPARTITIONAME | Filter partition name (regexp can be used)                                                         |                                                            |             |
| WARNINGREADUSAGE   | Threshold                                                                                          |                                                            |             |
| CRITICALREADUSAGE  | Threshold                                                                                          |                                                            |             |
| WARNINGREADWAIT    | Threshold                                                                                          |                                                            |             |
| CRITICALREADWAIT   | Threshold                                                                                          |                                                            |             |
| WARNINGSVCTIME     | Threshold                                                                                          |                                                            |             |
| CRITICALSVCTIME    | Threshold                                                                                          |                                                            |             |
| WARNINGUTILS       | Threshold                                                                                          |                                                            |             |
| CRITICALUTILS      | Threshold                                                                                          |                                                            |             |
| WARNINGWRITEUSAGE  | Threshold                                                                                          |                                                            |             |
| CRITICALWRITEUSAGE | Threshold                                                                                          |                                                            |             |
| WARNINGWRITEWAIT   | Threshold                                                                                          |                                                            |             |
| CRITICALWRITEWAIT  | Threshold                                                                                          |                                                            |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose --skip --statefile-dir=/var/log/nrpe/centplugins |             |

</TabItem>
<TabItem value="Disks" label="Disks">

| Macro            | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMOUNTPOINT | Filter filesystem mount point (regexp can be used)                                                 |                   |             |
| WARNING          | Warning threshold                                                                                  |                   |             |
| CRITICAL         | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Macro        | Description                                                                                                                                | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILES        | Files/Directories to check. (Shell expansion is ok)                                                                                        |                   |             |
| FILTERPLUGIN | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used |                   |             |
| WARNING      | Warning threshold in seconds for each files/directories (diff time)                                                                        |                   |             |
| CRITICAL     | Critical threshold in seconds for each files/directories (diff time)                                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                         | --verbose         |             |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Macro         | Description                                                                                                                                | Valeur par défaut | Obligatoire |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILES         | Files/Directories to check. (Shell expansion is ok)                                                                                        |                   |             |
| FILTERPLUGIN  | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used |                   |             |
| WARNINGONE    | Warning threshold in bytes for each files/directories                                                                                      |                   |             |
| CRITICALONE   | Critical threshold in bytes for each files/directories                                                                                     |                   |             |
| WARNINGTOTAL  | Warning threshold in bytes for all files/directories                                                                                       |                   |             |
| CRITICALTOTAL | Critical threshold in bytes for all files/directories                                                                                      |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                         | --verbose         |             |

</TabItem>
<TabItem value="Inodes" label="Inodes">

| Macro            | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMOUNTPOINT | Filter filesystem mount point (regexp can be used)                                                 |                   |             |
| WARNING          | Warning threshold in percent                                                                       |                   |             |
| CRITICAL         | Critical threshold in percent                                                                      |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMMAND      | Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'                            | test              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMMAND      | Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'                            | test              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Load" label="Load">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold (1min,5min,15min)                                                                |                   |             |
| CRITICAL     | Critical threshold (1min,5min,15min)                                                               |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Threshold                                                                                                   |                   |             |
| CRITICAL     | Threshold                                                                                                   |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Macro           | Description                                                                                                                                                                     | Valeur par défaut            | Obligatoire |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| NTPCOMMAND      | Default mode for parsing and command: 'ntpq' (default), 'chronyc' or 'all'                                                                                                      | ntpq                         |             |
| FILTERPEERNAME  | Filter peer name (can be a regexp)                                                                                                                                              | .*                           |             |
| FILTERPEERSTATE | Filter peer state (can be a regexp)                                                                                                                                             | .*                           |             |
| WARNINGOFFSET   | Warning threshold offset deviation value in milliseconds                                                                                                                        |                              |             |
| CRITICALOFFSET  | Critical threshold offset deviation value in milliseconds                                                                                                                       |                              |             |
| WARNINGPEERS    | Warning threshold minimum amount of NTP-Server                                                                                                                                  |                              |             |
| CRITICALPEERS   | Critical threshold minimum amount of NTP-Server                                                                                                                                 |                              |             |
| WARNINGSTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{rawstate\}, %\{type\}, %\{rawtype\}, %\{reach\}, %\{display\}  |                              |             |
| CRITICALSTATUS  | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{rawstate\}, %\{type\}, %\{rawtype\}, %\{reach\}, %\{display\} |                              |             |
| WARNINGSTRATUM  | Warning threshold                                                                                                                                                               |                              |             |
| CRITICALSTRATUM | Critical threshold                                                                                                                                                              |                              |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                              | --use-new-perfdata --verbose |             |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Macro          | Description                                                                                        | Valeur par défaut            | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| FILTERAPPNAME  | Filter application name (can be a regexp)                                                          |                              |             |
| FILTERUSERNAME | Filter username name (can be a regexp)                                                             |                              |             |
| FILTERPID      | Filter PID (can be a regexp)                                                                       |                              |             |
| WARNING        | Threshold                                                                                          |                              |             |
| CRITICAL       | Threshold                                                                                          |                              |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose --use-new-perfdata |             |

</TabItem>
<TabItem value="Packet-Errors" label="Packet-Errors">

| Macro              | Description                                                                                        | Valeur par défaut                                                 | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------------------------------------------------------|:-----------:|
| FILTERINTERFACE    | Filter interface name (regexp can be used)                                                         |                                                                   |             |
| FILTERSTATE        | Filter filesystem type (regexp can be used)                                                        |                                                                   |             |
| WARNINGINDISCARD   | Threshold                                                                                          |                                                                   |             |
| CRITICALINDISCARD  | Threshold                                                                                          |                                                                   |             |
| WARNINGINERROR     | Threshold                                                                                          |                                                                   |             |
| CRITICALINERROR    | Threshold                                                                                          |                                                                   |             |
| WARNINGOUTDISCARD  | Threshold                                                                                          |                                                                   |             |
| CRITICALOUTDISCARD | Threshold                                                                                          |                                                                   |             |
| WARNINGOUTERROR    | Threshold                                                                                          |                                                                   |             |
| CRITICALOUTERROR   | Threshold                                                                                          |                                                                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose --statefile-dir=/var/log/nrpe/centplugins --no-loopback |             |

</TabItem>
<TabItem value="Pending-Updates" label="Pending-Updates">

| Macro            | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| OSMODE           | Default mode for parsing and command: 'rhel' (default), 'debian', 'suse'                           | rhel              |             |
| FILTERPACKAGE    | Filter package name                                                                                |                   |             |
| FILTERREPOSITORY | Filter repository name                                                                             |                   |             |
| WARNINGTOTAL     | Warning threshold for total amount of pending updates                                              |                   |             |
| CRITICALTOTAL    | Critical threshold for total amount of pending updates                                             |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Macro         | Description                                                                                                                                                                                                                          | Valeur par défaut | Obligatoire |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOMMAND | Define which processes should be included based on the name of the executable. This option will be treated as a regular expression                                                                                                   |                   |             |
| FILTERARG     | Define which processes should be included based on the arguments of the executable. This option will be treated as a regular expression                                                                                              |                   |             |
| FILTERSTATE   | Define which processes should be excluded based on the process state. This option will be treated as a regular expression. You can use: 'zombie', 'dead', 'paging', 'stopped', 'InterrupibleSleep', 'running', 'UninterrupibleSleep' |                   |             |
| WARNINGTIME   | Thresholds                                                                                                                                                                                                                           |                   |             |
| CRITICALTIME  | Thresholds                                                                                                                                                                                                                           |                   |             |
| WARNINGTOTAL  | Thresholds                                                                                                                                                                                                                           |                   |             |
| CRITICALTOTAL | Thresholds                                                                                                                                                                                                                           |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                   | --verbose         |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Threshold                                                                                          |                   |             |
| CRITICAL     | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Systemd-Journal" label="Systemd-Journal">

| Macro           | Description                                                                                                                                                          | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SINCE           | Defines the amount of time to look back at messages. Can be minutes (example: 5 "minutes ago") or 'cache' to use the timestamp from last execution. Default: 'cache' | cache             |             |
| TIMEZONE        | Defines the timezone to use for date/time conversion when using a timestamp from the cache. Default: 'local'                                                         | local             |             |
| UNIT            | Only look for messages from the specified unit, i.e. the name of the systemd service who created the message                                                         |                   |             |
| FILTERMESSAGE   | Filter on message content (can be a regexp)                                                                                                                          |                   |             |
| WARNINGENTRIES  | Thresholds to apply to the number of journal entries found with the specified parameters                                                                             |                   |             |
| CRITICALENTRIES | Thresholds to apply to the number of journal entries found with the specified parameters                                                                             |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                   |                   |             |

</TabItem>
<TabItem value="Systemd-Sc-Status" label="Systemd-Sc-Status">

| Macro                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Valeur par défaut            | Obligatoire |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| FILTERNAME           | Filter service name (can be a regexp)                                                                                                                                                                                                                                                                                                                                                                                                                       | .*                           |             |
| EXCLUDENAME          | Exclude service name (can be a regexp)                                                                                                                                                                                                                                                                                                                                                                                                                      |                              |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL (default: '%\{active\} =~ /failed/i'). You can use the following variables: %\{display\}, %\{active\}, %\{sub\}, %\{load\}, %\{boot\} Example of statuses for the majority of these variables: %\{active\}: active, inactive %\{sub\}: waiting, plugged, mounted, dead, failed, running, exited, listening, active %\{load\}: loaded, not-found %\{boot\}: enabled, disabled, static, indirect | %\{active\} =~ /failed/i     |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %\{active\}, %\{sub\}, %\{load\}, %\{boot\} Example of statuses for the majority of these variables: %\{active\}: active, inactive %\{sub\}: waiting, plugged, mounted, dead, failed, running, exited, listening, active %\{load\}: loaded, not-found %\{boot\}: enabled, disabled, static, indirect                                        |                              |             |
| WARNINGTOTALDEAD     | Threshold                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                              |             |
| CRITICALTOTALDEAD    | Threshold                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                              |             |
| WARNINGTOTALEXITED   | Threshold                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                              |             |
| CRITICALTOTALEXITED  | Threshold                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                              |             |
| WARNINGTOTALFAILED   | Threshold                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                              |             |
| CRITICALTOTALFAILED  | Threshold                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                              |             |
| WARNINGTOTALRUNNING  | Threshold                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                              |             |
| CRITICALTOTALRUNNING | Threshold                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                              |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                                                                                                                                                                                                                                          | --use-new-perfdata --verbose |             |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Macro           | Description                                                                                        | Valeur par défaut                         | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------------------------------|:-----------:|
| FILTERSTATE     | Filter interfaces type (regexp can be used)                                                        | RU                                        |             |
| FILTERINTERFACE | Filter interface name (regexp can be used)                                                         |                                           |             |
| SPEED           | Set interface speed (in Mb)                                                                        |                                           |             |
| WARNINGIN       | Warning threshold in percent for 'in' traffic                                                      |                                           |             |
| CRITICALIN      | Critical threshold in percent for 'in' traffic                                                     |                                           |             |
| WARNINGOUT      | Warning threshold in percent for 'out' traffic                                                     |                                           |             |
| CRITICALOUT     | Critical threshold in percent for 'out' traffic                                                    |                                           |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --statefile-dir=/var/log/nrpe/centplugins |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in seconds                                                                       |                   |             |
| CRITICAL     | Critical threshold in seconds                                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib64/nagios/plugins//check\_centreon\_nrpe3 -H 10.0.0.1 -p 5666 -t 5  -c check_centreon_plugins -a 'os::linux::local::plugin' 'traffic'  ' \
	--filter-interface="" \
	--warning-in="" \
	--critical-in="" \
	--warning-out="" \
	--critical-out="" \
	--filter-state="RU" \
	--speed="" \
	--statefile-dir=/var/log/nrpe/centplugins'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All interfaces are ok | 'interface1#interface.traffic.in.bitspersecond'=54067b/s;;;; 'interface2#interface.traffic.in.bitspersecond'=37229b/s;;;; 'interface1#interface.traffic.out.bitspersecond'=92358b/s;;;; 'interface2#interface.traffic.out.bitspersecond'=28004b/s;;;;
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
/usr/lib64/nagios/plugins//check\_centreon\_nrpe3 -H 10.0.0.1 -p 5666 -t 5  -c check_centreon_plugins -a 'os::linux::local::plugin' 'traffic'  ' \
	--filter-interface="" \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                    | Modèle de service associé                                                                                                   |
|:----------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------|
| check-plugin [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/checkplugin.pm)]                 | Not used in this Monitoring Connector                                                                                       |
| cmd-return [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/cmdreturn.pm)]                     | OS-Linux-Cmd-Generic-NRPE3-custom<br />OS-Linux-Is-File-Generic-NRPE3-custom<br />OS-Linux-Is-Not-File-Generic-NRPE3-custom |
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/connections.pm)]                  | OS-Linux-Connections-Generic-NRPE3-custom                                                                                   |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/cpu.pm)]                                  | OS-Linux-Cpu-NRPE3-custom                                                                                                   |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/cpudetailed.pm)]                 | OS-Linux-Cpu-Detailed-NRPE3-custom                                                                                          |
| discovery-snmp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/discoverysnmp.pm)]             | Not used in this Monitoring Connector                                                                                       |
| discovery-snmpv3 [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/discoverysnmpv3.pm)]         | Not used in this Monitoring Connector                                                                                       |
| diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/diskio.pm)]                            | OS-Linux-Disk-IO-NRPE3-custom                                                                                               |
| files-date [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/filesdate.pm)]                     | OS-Linux-File-Date-Generic-NRPE3-custom                                                                                     |
| files-size [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/filessize.pm)]                     | OS-Linux-File-Size-Generic-NRPE3-custom                                                                                     |
| inodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/inodes.pm)]                            | OS-Linux-Inodes-NRPE3-custom                                                                                                |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/listinterfaces.pm)]           | Used for service discovery                                                                                                  |
| list-partitions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/listpartitions.pm)]           | Not used in this Monitoring Connector                                                                                       |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/liststorages.pm)]               | Used for service discovery                                                                                                  |
| list-systemdservices [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/listsystemdservices.pm)] | Not used in this Monitoring Connector                                                                                       |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/loadaverage.pm)]                         | OS-Linux-Load-NRPE3-custom                                                                                                  |
| lvm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/lvm.pm)]                                  | Not used in this Monitoring Connector                                                                                       |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/memory.pm)]                            | OS-Linux-Memory-NRPE3-custom                                                                                                |
| mountpoint [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/mountpoint.pm)]                    | Not used in this Monitoring Connector                                                                                       |
| ntp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/ntp.pm)]                                  | OS-Linux-Ntp-NRPE3-custom                                                                                                   |
| open-files [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/openfiles.pm)]                     | OS-Linux-Open-Files-NRPE3-custom                                                                                            |
| packet-errors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/packeterrors.pm)]               | OS-Linux-Packet-Errors-NRPE3-custom                                                                                         |
| paging [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/paging.pm)]                            | Not used in this Monitoring Connector                                                                                       |
| pending-updates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/pendingupdates.pm)]           | OS-Linux-Pending-Updates-NRPE3-custom                                                                                       |
| process [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/process.pm)]                          | OS-Linux-Process-Generic-NRPE3-custom                                                                                       |
| quota [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/quota.pm)]                              | Not used in this Monitoring Connector                                                                                       |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/storage.pm)]                          | OS-Linux-Disks-NRPE3-custom                                                                                                 |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/swap.pm)]                                | OS-Linux-Swap-NRPE3-custom                                                                                                  |
| systemd-journal [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/systemdjournal.pm)]           | OS-Linux-Systemd-Journal-NRPE3-custom                                                                                       |
| systemd-sc-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/systemdscstatus.pm)]        | OS-Linux-Systemd-Sc-Status-NRPE3-custom                                                                                     |
| traffic [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/traffic.pm)]                          | OS-Linux-Traffic-NRPE3-custom                                                                                               |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/uptime.pm)]                            | OS-Linux-Uptime-NRPE3-custom                                                                                                |

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
| --ssh-backend                              |   Define the backend you want to use. It can be: C\<sshcli\> (default), C\<plink\> and C\<libssh\>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --ssh-username                             |   Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ssh-password                             |   Define the password associated with the user name. Cannot be used with the C\<sshcli\> backend. Warning: using a password is not recommended. Use C\<--ssh-priv-key\> instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-port                                 |   Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-priv-key                             |   Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --hostname                                 |   Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  |   Timeout in seconds for the command (default: 45). Default value can be override by the mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --command                                  |   Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --command-path                             |   Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          |   Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sudo                                     |   sudo command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Option                 | Description                                                                                                                                           |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
| --manage-returns       |   Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   |
| --separator            |   Set the separator used in --manage-returns (default : #)                                                                                            |
| --exec-command         |   Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            |
| --exec-command-path    |   Command path (default: none).                                                                                                                       |
| --exec-command-options |   Command options (default: none).                                                                                                                    |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Option        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|:--------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning     |   Warning threshold for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --critical    |   Critical threshold for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --service     |   Check tcp connections following rules: tag,\[type\],\[state\],\[port-src\],\[port-dst\],\[filter-ip-src\],\[filter-ip-dst\],\[threshold-warning\],\[threshold-critical\]  Example to test SSH connections on the server: --service="ssh,,,22,,,,10,20"   =over 16  =item \<tag\>  Name to identify service (must be unique and couldn't be 'total').  =item \<type\>  regexp - can use 'ipv4', 'ipv6', 'udp', 'udp6'. Empty means all.  =item \<state\>  regexp - can use 'finWait1', 'established',... Empty means all (minus listen). For udp connections, there are 'established' and 'listen'.  =item \<filter-ip-*\>  regexp - can use to exclude or include some IPs.  =item \<threshold-*\>  nagios-perfdata - number of connections.  =back   |
| --application |   Check tcp connections of mutiple services: tag,\[services\],\[threshold-warning\],\[threshold-critical\]  Example: --application="web,http\|https,100,200"  =over 16  =item \<tag\>  Name to identify application (must be unique).  =item \<services\>  List of services (used the tag name. Separated by '\|').  =item \<threshold-*\>  nagios-perfdata - number of connections.  =back                                                                                                                                                                                                                                                                                                                                                             |
| --con-mode    |   Default mode for parsing and command: 'netstat' (default) or 'ss'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option             | Description                                                                                                                   |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters  |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-average  |   Warning threshold average CPU utilization.                                                                                  |
| --critical-average |   Critical  threshold average CPU utilization.                                                                                |
| --warning-core     |   Warning thresholds for each CPU core                                                                                        |
| --critical-core    |   Critical thresholds for each CPU core                                                                                       |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Option                 | Description                                                                                                                                                                                                                                     |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-*            |   Warning threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                                        |
| --critical-*           |   Critical threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                                       |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-* --critical-* |   Thresholds. Can be: 'read-usage', 'write-usage', 'read-wait', 'write-wait', 'svctime', 'utils'.                             |
| --filter-partition-name  |   Filter partition name (regexp can be used).                                                                                 |
| --exclude-partition-name |   Exclude partition name (regexp can be used).                                                                                |
| --bytes-per-sector       |   Bytes per sector (default: 512)                                                                                             |
| --interrupt-frequency    |   Linux Kernel Timer Interrupt Frequency (default: 1000)                                                                      |
| --skip                   |   Skip partitions with 0 sectors read/write.                                                                                  |

</TabItem>
<TabItem value="Disks" label="Disks">

| Option               | Description                                                                                                                   |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters    |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-usage      |   Warning threshold.                                                                                                          |
| --critical-usage     |   Critical threshold.                                                                                                         |
| --units              |   Units of thresholds (default: '%') ('%', 'B').                                                                              |
| --free               |   Thresholds are on free space left.                                                                                          |
| --filter-mountpoint  |   Filter filesystem mount point (regexp can be used).                                                                         |
| --exclude-mountpoint |   Exclude filesystem mount point (regexp can be used).                                                                        |
| --filter-type        |   Filter filesystem type (regexp can be used).                                                                                |
| --filter-fs          |   Filter filesystem (regexp can be used).                                                                                     |
| --exclude-fs         |   Exclude filesystem (regexp can be used).                                                                                    |

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Option          | Description                                                                                                                                              |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| --files         |   Files/Directories to check. (Shell expansion is ok)                                                                                                    |
| --warning       |   Warning threshold in seconds for each files/directories (diff time).                                                                                   |
| --critical      |   Critical threshold in seconds for each files/directories (diff time).                                                                                  |
| --separate-dirs |   Do not include size of subdirectories.                                                                                                                 |
| --max-depth     |   Don't check fewer levels. (can be use --separate-dirs)                                                                                                 |
| --time          |   Check another time than modified time.                                                                                                                 |
| --exclude-du    |   Exclude files/directories with 'du' command. Values from exclude files/directories are not counted in parent directories. Shell pattern can be used.   |
| --filter-plugin |   Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used.            |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Option           | Description                                                                                                                                              |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| --files          |   Files/Directories to check. (Shell expansion is ok)                                                                                                    |
| --warning-one    |   Warning threshold in bytes for each files/directories.                                                                                                 |
| --critical-one   |   Critical threshold in bytes for each files/directories.                                                                                                |
| --warning-total  |   Warning threshold in bytes for all files/directories.                                                                                                  |
| --critical-total |   Critical threshold in bytes for all files/directories.                                                                                                 |
| --separate-dirs  |   Do not include size of subdirectories.                                                                                                                 |
| --max-depth      |   Don't check fewer levels. (can be use --separate-dirs)                                                                                                 |
| --all-files      |   Add files when you check directories.                                                                                                                  |
| --exclude-du     |   Exclude files/directories with 'du' command. Values from exclude files/directories are not counted in parent directories. Shell pattern can be used.   |
| --filter-plugin  |   Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used.            |

</TabItem>
<TabItem value="Inodes" label="Inodes">

| Option               | Description                                                                                                                   |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters    |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-usage      |   Warning threshold in percent.                                                                                               |
| --critical-usage     |   Critical threshold in percent.                                                                                              |
| --filter-mountpoint  |   Filter filesystem mount point (regexp can be used).                                                                         |
| --exclude-mountpoint |   Exclude filesystem mount point (regexp can be used).                                                                        |
| --filter-type        |   Filter filesystem type (regexp can be used).                                                                                |
| --filter-fs          |   Filter filesystem (regexp can be used).                                                                                     |
| --exclude-fs         |   Exclude filesystem (regexp can be used).                                                                                    |

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Option                 | Description                                                                                                                                           |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
| --manage-returns       |   Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   |
| --separator            |   Set the separator used in --manage-returns (default : #)                                                                                            |
| --exec-command         |   Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            |
| --exec-command-path    |   Command path (default: none).                                                                                                                       |
| --exec-command-options |   Command options (default: none).                                                                                                                    |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Option                 | Description                                                                                                                                           |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
| --manage-returns       |   Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   |
| --separator            |   Set the separator used in --manage-returns (default : #)                                                                                            |
| --exec-command         |   Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            |
| --exec-command-path    |   Command path (default: none).                                                                                                                       |
| --exec-command-options |   Command options (default: none).                                                                                                                    |

</TabItem>
<TabItem value="Load" label="Load">

| Option     | Description                               |
|:-----------|:------------------------------------------|
| --warning  |   Warning threshold (1min,5min,15min).    |
| --critical |   Critical threshold (1min,5min,15min).   |
| --average  |   Load average for the number of CPUs.    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                                                                                                                                                                                |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                |
| --swap                   |   Check swap also.                                                                                                                                                                                                                         |
| --warning-* --critical-* |   Thresholds. Can be: 'memory-usage' (B), 'memory-usage-free' (B), 'memory-usage-prct' (%), 'memory-available' (B), 'memory-available-prct' (%), 'swap' (B), 'swap-free' (B), 'swap-prct' (%), 'buffer' (B), 'cached' (B), 'slab' (B).     |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option             | Description                                                                                                                                                                          |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters  |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                          |
| --ntp-mode         |   Default mode for parsing and command: 'ntpq' (default), 'chronyc' or 'all'.                                                                                                        |
| --filter-name      |   Filter peer name (can be a regexp).                                                                                                                                                |
| --filter-state     |   Filter peer state (can be a regexp).                                                                                                                                               |
| --warning-peers    |   Warning threshold minimum amount of NTP-Server                                                                                                                                     |
| --critical-peers   |   Critical threshold minimum amount of NTP-Server                                                                                                                                    |
| --warning-offset   |   Warning threshold offset deviation value in milliseconds                                                                                                                           |
| --critical-offset  |   Critical threshold offset deviation value in milliseconds                                                                                                                          |
| --warning-stratum  |   Warning threshold.                                                                                                                                                                 |
| --critical-stratum |   Critical threshold.                                                                                                                                                                |
| --unknown-status   |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{rawstate\}, %\{type\}, %\{rawtype\}, %\{reach\}, %\{display\}     |
| --warning-status   |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{rawstate\}, %\{type\}, %\{rawtype\}, %\{reach\}, %\{display\}     |
| --critical-status  |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{rawstate\}, %\{type\}, %\{rawtype\}, %\{reach\}, %\{display\}    |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --filter-appname         |   Filter application name (can be a regexp).                                                                                  |
| --filter-username        |   Filter username name (can be a regexp).                                                                                     |
| --filter-pid             |   Filter PID (can be a regexp).                                                                                               |
| --warning-* --critical-* |   Thresholds. Can be: 'files-open'.                                                                                           |

</TabItem>
<TabItem value="Packet-Errors" label="Packet-Errors">

| Option              | Description                                                                                                                                                        |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters   |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                        |
| --unknown-status    |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{display\}                                      |
| --warning-status    |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}                                      |
| --critical-status   |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} ne "RU"'). You can use the following variables: %%\{status\}, %\{display\}   |
| --warning-*         |   Warning threshold in percent of total packets. Can be: in-error, out-error, in-discard, out-discard                                                              |
| --critical-*        |   Critical threshold in percent of total packets. Can be: in-error, out-error, in-discard, out-discard                                                             |
| --filter-interface  |   Filter interface name (regexp can be used).                                                                                                                      |
| --exclude-interface |   Exclude interface name (regexp can be used).                                                                                                                     |
| --filter-state      |   Filter filesystem type (regexp can be used).                                                                                                                     |
| --no-loopback       |   Don't display loopback interfaces.                                                                                                                               |

</TabItem>
<TabItem value="Pending-Updates" label="Pending-Updates">

| Option              | Description                                                                                                                   |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters   |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --os-mode           |   Default mode for parsing and command: 'rhel' (default), 'debian', 'suse'.                                                   |
| --warning-total     |   Warning threshold for total amount of pending updates.                                                                      |
| --critical-total    |   Critical threshold for total amount of pending updates.                                                                     |
| --warning-security  |   Warning threshold for total amount of pending security updates.                                                             |
| --critical-security |   Critical threshold for total amount of pending security updates.                                                            |
| --filter-package    |   Filter package name.                                                                                                        |
| --filter-repository |   Filter repository name.                                                                                                     |
| --check-security    |   Display number of pending security updates.   Only available for Red Hat-Based distributions.                               |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Option                           | Description                                                                                                                                                                                                                               |
|:---------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters                |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                               |
| --add-cpu                        |   Monitor CPU usage.                                                                                                                                                                                                                      |
| --add-memory                     |   Monitor memory usage. It's inaccurate but it provides a trend.                                                                                                                                                                          |
| --add-disk-io                    |   Monitor disk I/O.                                                                                                                                                                                                                       |
| --filter-command                 |   Define which processes should be included based on the name of the executable. This option will be treated as a regular expression.                                                                                                     |
| --exclude-command                |   Define which processes should be excluded based on the name of the executable. This option will be treated as a regular expression.                                                                                                     |
| --filter-arg                     |   Define which processes should be included based on the arguments of the executable. This option will be treated as a regular expression.                                                                                                |
| --exclude-arg                    |   Define which processes should be excluded based on the arguments of the executable. This option will be treated as a regular expression.                                                                                                |
| --filter-ppid                    |   Define which processes should be excluded based on the process's parent process ID (PPID). This option will be treated as a regular expression.                                                                                         |
| --filter-state                   |   Define which processes should be excluded based on the process state. This option will be treated as a regular expression. You can use: 'zombie', 'dead', 'paging', 'stopped', 'InterrupibleSleep', 'running', 'UninterrupibleSleep'.   |
| --warning-total                  |   Thresholds.                                                                                                                                                                                                                             |
| --critical-total                 |   Thresholds.                                                                                                                                                                                                                             |
| --warning-total-memory-usage     |   Thresholds.                                                                                                                                                                                                                             |
| --critical-total-memory-usage    |   Thresholds.                                                                                                                                                                                                                             |
| --warning-total-cpu-utilization  |   Thresholds.                                                                                                                                                                                                                             |
| --critical-total-cpu-utilization |   Thresholds.                                                                                                                                                                                                                             |
| --warning-total-disks-read       |   Thresholds.                                                                                                                                                                                                                             |
| --critical-total-disks-read      |   Thresholds.                                                                                                                                                                                                                             |
| --warning-total-disks-write      |   Thresholds.                                                                                                                                                                                                                             |
| --critical-total-disks-write     |   Thresholds.                                                                                                                                                                                                                             |
| --warning-time                   |   Thresholds.                                                                                                                                                                                                                             |
| --critical-time                  |   Thresholds.                                                                                                                                                                                                                             |
| --warning-memory-usage           |   Thresholds.                                                                                                                                                                                                                             |
| --critical-memory-usage          |   Thresholds.                                                                                                                                                                                                                             |
| --warning-cpu-utilization        |   Thresholds.                                                                                                                                                                                                                             |
| --critical-cpu-utilization       |   Thresholds.                                                                                                                                                                                                                             |
| --warning-disks-read             |   Thresholds.                                                                                                                                                                                                                             |
| --critical-disks-read            |   Thresholds.                                                                                                                                                                                                                             |
| --warning-disks-write            |   Thresholds.                                                                                                                                                                                                                             |
| --critical-disks-write           |   Thresholds.                                                                                                                                                                                                                             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --no-swap                |   Threshold if no active swap (default: 'critical').                                                                          |
| --warning-* --critical-* |   Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%).                                            |

</TabItem>
<TabItem value="Systemd-Journal" label="Systemd-Journal">

| Option             | Description                                                                                                                                                               |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters  |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                               |
| --unit             |   Only look for messages from the specified unit, i.e. the name of the systemd service who created the message.                                                           |
| --filter-message   |   Filter on message content (can be a regexp).                                                                                                                            |
| --since            |   Defines the amount of time to look back at messages. Can be minutes (example: 5 "minutes ago") or 'cache' to use the timestamp from last execution. Default: 'cache'.   |
| --timezone         |   Defines the timezone to use for date/time conversion when using a timestamp from the cache. Default: 'local'.                                                           |
| --warning-entries  |   Thresholds to apply to the number of journal entries found with the specified parameters.                                                                               |
| --critical-entries |   Thresholds to apply to the number of journal entries found with the specified parameters.                                                                               |

</TabItem>
<TabItem value="Systemd-Sc-Status" label="Systemd-Sc-Status">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                      |
| --filter-name            |   Filter service name (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --exclude-name           |   Exclude service name (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --warning-* --critical-* |   Thresholds. Can be: 'total-running', 'total-dead', 'total-exited', 'total-failed'.                                                                                                                                                                                                                                                                                                                                                                             |
| --warning-status         |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %\{active\}, %\{sub\}, %\{load\}, %\{boot\} Example of statuses for the majority of these variables: %\{active\}: active, inactive %\{sub\}: waiting, plugged, mounted, dead, failed, running, exited, listening, active %\{load\}: loaded, not-found %\{boot\}: enabled, disabled, static, indirect                                           |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{active\} =~ /failed/i'). You can use the following variables: %\{display\}, %\{active\}, %\{sub\}, %\{load\}, %\{boot\} Example of statuses for the majority of these variables: %\{active\}: active, inactive %\{sub\}: waiting, plugged, mounted, dead, failed, running, exited, listening, active %\{load\}: loaded, not-found %\{boot\}: enabled, disabled, static, indirect    |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Option              | Description                                                                                                                                                       |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters   |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                       |
| --warning-in        |   Warning threshold in percent for 'in' traffic.                                                                                                                  |
| --critical-in       |   Critical threshold in percent for 'in' traffic.                                                                                                                 |
| --warning-out       |   Warning threshold in percent for 'out' traffic.                                                                                                                 |
| --critical-out      |   Critical threshold in percent for 'out' traffic.                                                                                                                |
| --unknown-status    |   Define the conditions to match for the status to be UNKNOWN (default: ''). You can use the following variables: %\{status\}, %\{display\}                       |
| --warning-status    |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{status\}, %\{display\}                       |
| --critical-status   |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} ne "RU"'). You can use the following variables: %\{status\}, %\{display\}   |
| --units             |   Units of thresholds (default: 'b/s') ('%', 'b/s'). Percent can be used only if --speed is set.                                                                  |
| --filter-interface  |   Filter interface name (regexp can be used).                                                                                                                     |
| --exclude-interface |   Exclude interface name (regexp can be used).                                                                                                                    |
| --filter-state      |   Filter interfaces type (regexp can be used).                                                                                                                    |
| --speed             |   Set interface speed (in Mb).                                                                                                                                    |
| --guess-speed       |   Try to guess speed with commands ethtool and iwconfig.                                                                                                          |
| --no-loopback       |   Don't display loopback interfaces.                                                                                                                              |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option     | Description                        |
|:-----------|:-----------------------------------|
| --warning  |   Warning threshold in seconds.    |
| --critical |   Critical threshold in seconds.   |
| --seconds  |   Display uptime in seconds.       |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib64/nagios/plugins//check\_centreon\_nrpe3 -H 10.0.0.1 -p 5666 -t 5  -c check_centreon_plugins -a 'os::linux::local::plugin' 'traffic'  ' \
	--filter-interface="" \
	--warning-in="" \
	--help
```

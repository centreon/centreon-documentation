---
id: operatingsystems-linux-nrpe
title: Linux NRPE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Linux NRPE** apporte un modèle d'hôte :

* **OS-Linux-NRPE-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="OS-Linux-NRPE-custom" label="OS-Linux-NRPE-custom">

| Alias  | Modèle de service           | Description                                                                                                                                                               |
|:-------|:----------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cpu    | OS-Linux-Cpu-NRPE-custom    | Contrôle du taux d'utilisation CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |
| Load   | OS-Linux-Load-NRPE-custom   | Contrôle de la charge serveur                                                                                                                                             |
| Memory | OS-Linux-Memory-NRPE-custom | Contrôle du taux d'utilisation de la mémoire vive                                                                                                                         |
| Swap   | OS-Linux-Swap-NRPE-custom   | Contrôle du taux d'utilisation de la mémoire virtuelle                                                                                                                    |
| Uptime | OS-Linux-Uptime-NRPE-custom | Durée depuis laquelle le serveur tourne sans interruption                                                                                                                 |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **OS-Linux-NRPE-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                      | Modèle de service                               | Description                                                                                                                                                                           |
|:---------------------------|:------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cmd-Generic                | OS-Linux-Cmd-Generic-NRPE-custom                | Permet de vérifier le code retour de commandes Linux                                                                                                                                  |
| Connections-Generic        | OS-Linux-Connections-Generic-NRPE-custom        | Contrôle les connexions tcp                                                                                                                                                           |
| Cpu-Detailed               | OS-Linux-Cpu-Detailed-NRPE-custom               | Contrôle du taux d'utilisation détaillé du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |
| Disk-Generic-Name          | OS-Linux-Disk-Generic-Name-NRPE-custom          | Contrôle du taux d'espace libre disponible du disque. Pour chaque contrôle apparaîtra le point de montage du disque                                                                   |
| Disk-Global                | OS-Linux-Disk-Global-NRPE-custom                | Contrôle du taux d'espace libre disponible des disques. Pour chaque contrôle apparaîtra le point de montage des disques                                                               |
| Disk-IO-Generic-Name       | OS-Linux-Disk-IO-Generic-Name-NRPE-custom       | Contrôle les compteurs I                                                                                                                                                              |
| Disk-IO-Global             | OS-Linux-Disk-IO-Global-NRPE-custom             | Contrôle les compteurs I                                                                                                                                                              |
| File-Date-Generic          | OS-Linux-File-Date-Generic-NRPE-custom          | Permet de vérifier le temps de modification                                                                                                                                           |
| File-Size-Generic          | OS-Linux-File-Size-Generic-NRPE-custom          | Permet de vérifier la taille de fichiers et                                                                                                                                           |
| Inodes-Generic-Name        | OS-Linux-Inodes-Generic-Name-NRPE-custom        | Contrôle du taux d'inodes disponible d'un disque                                                                                                                                      |
| Inodes-Global              | OS-Linux-Inodes-Global-NRPE-custom              | Contrôle du taux d'inodes disponible des disques                                                                                                                                      |
| Is-File-Generic            | OS-Linux-Is-File-Generic-NRPE-custom            | Permet de vérifier si le fichier 'xxx' est présent                                                                                                                                    |
| Is-Not-File-Generic        | OS-Linux-Is-Not-File-Generic-NRPE-custom        | Permet de vérifier si le fichier 'xxx' n'est pas présent                                                                                                                              |
| Packet-Errors-Generic-Name | OS-Linux-Packet-Errors-Generic-Name-NRPE-custom | Contrôle le pourcentage de paquets en erreur                                                                                                                                          |
| Packet-Errors-Global       | OS-Linux-Packet-Errors-Global-NRPE-custom       | Contrôle le pourcentage de paquets en erreur                                                                                                                                          |
| Process-Generic            | OS-Linux-Process-Generic-NRPE-custom            | Contrôle permettant de vérifier des processus Linux                                                                                                                                   |
| Traffic-Generic-Name       | OS-Linux-Traffic-Generic-Name-NRPE-custom       | Contrôle de la bande passante de l'interface. Pour chaque contrôle apparaîtra le nom de l'interface                                                                                   |
| Traffic-Global             | OS-Linux-Traffic-Global-NRPE-custom             | Contrôle de la bande passante des interfaces. Pour chaque contrôle apparaîtra le nom de l'interface                                                                                   |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Métrique                | Unité |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

Coming soon

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

Coming soon

</TabItem>
<TabItem value="Disk-*" label="Disk-*">

| Métrique     | Unité |
|:-------------|:------|
| *disks*#used | B     |

> Concerne les modèles de service suivants : Disk-Generic-Name, Disk-Global

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Disk-IO-*" label="Disk-IO-*">

| Métrique                                      | Unité |
|:----------------------------------------------|:------|
| *device*#device.io.read.usage.bytespersecond  | B/s   |
| *device*#device.io.write.usage.bytespersecond | B/s   |
| *device*#device.io.read.wait.milliseconds     | ms    |
| *device*#device.io.write.wait.milliseconds    | ms    |
| *device*#device.io.servicetime.count          | count |
| *device*#device.io.utils.percentage           | %     |

> Concerne les modèles de service suivants : Disk-IO-Generic-Name, Disk-IO-Global

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

Coming soon

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Métrique    | Unité |
|:------------|:------|
| total       | B     |

</TabItem>
<TabItem value="Inodes-*" label="Inodes-*">

| Métrique       | Unité |
|:---------------|:------|
| *inodes*#usage | %     |

> Concerne les modèles de service suivants : Inodes-Generic-Name, Inodes-Global

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Métrique                | Unité |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Métrique                | Unité |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Load" label="Load">

| Métrique    | Unité |
|:------------|:------|
| avg_load1   | N/A   |
| avg_load5   | N/A   |
| avg_load15  | N/A   |
| load1       | N/A   |
| load5       | N/A   |
| load15      | N/A   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                    | Unité |
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
<TabItem value="Packet-Errors-*" label="Packet-Errors-*">

| Métrique                | Unité |
|:------------------------|:------|
| *interface*#status      | N/A   |
| *interface*#in-discard  | %     |
| *interface*#out-discard | %     |
| *interface*#in-error    | %     |
| *interface*#out-error   | %     |

> Concerne les modèles de service suivants : Packet-Errors-Generic-Name, Packet-Errors-Global

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Métrique                                      | Unité |
|:----------------------------------------------|:------|
| *processes*#time                              | N/A   |
| *processes*#memory-usage                      | N/A   |
| *processes*#cpu-utilization                   | N/A   |
| *processes*#disks-read                        | N/A   |
| *processes*#disks-write                       | N/A   |
| processes.total.count                         | count |
| processes.memory.usage.bytes                  | B     |
| processes.cpu.utilization.percentage          | %     |
| processes.disks.io.read.usage.bytespersecond  | B/s   |
| processes.disks.io.write.usage.bytespersecond | B/s   |

</TabItem>
<TabItem value="Swap" label="Swap">

| Métrique              | Unité |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Métrique             | Unité |
|:---------------------|:------|
| *interface*#status   | N/A   |
| *interface*#traffic_ | b/s   |
| *interface*#traffic_ | b/s   |

> Concerne les modèles de service suivants : Traffic-Generic-Name, Traffic-Global

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique    | Unité |
|:------------|:------|
| uptime      | s     |

</TabItem>
</Tabs>

## Prérequis

### Centreon NSClient++

Pour surveiller les ressources *Windows* via NRPE, installez la version Centreon
de l'agent NSClient++. Veuillez suivre notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) et assurez-vous que la configuration du **serveur NRPE** est correcte.

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
dnf install centreon-pack-operatingsystems-linux-nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-linux-nrpe
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-operatingsystems-linux-nrpe
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-linux-nrpe
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Linux NRPE**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

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
<TabItem value="Debian 11" label="Debian 11">

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
3. Appliquez le modèle d'hôte **OS-Linux-NRPE-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro            | Description                                                                                           | Valeur par défaut     | Obligatoire |
|:-----------------|:------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| NRPEPORT         |                                                                                                       | 5666                  |             |
| NRPECLIENT       |                                                                                                       | check\_centreon\_nrpe |             |
| NRPETIMEOUT      |                                                                                                       | 30                    |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                       |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Macro          | Description                                                                                                                                       | Valeur par défaut | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMMAND        |                                                                                                                                                   |                   |             |
| COMMANDOPTIONS |                                                                                                                                                   |                   |             |
| THRESHOLDS     | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem |                   | X           |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                               |                   |             |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold for total connections                                                             |                   |             |
| CRITICAL     | Critical threshold for total connections                                                            |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro           | Description                                                                                         | Valeur par défaut | Obligatoire |
|:----------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGAVERAGE  | Warning threshold average CPU utilization                                                           | 80                |             |
| CRITICALAVERAGE | Critical threshold average CPU utilization                                                          | 90                |             |
| WARNINGCORE     | Warning thresholds for each CPU core                                                                |                   |             |
| CRITICALCORE    | Critical thresholds for each CPU core                                                               |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGIDLE  | Warning threshold in percent                                                                        | 20:               |             |
| CRITICALIDLE | Critical threshold in percent                                                                       | 10:               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Disk-Generic-Name" label="Disk-Generic-Name">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DISKNAME     |                                                                                                     |                   |             |
| WARNING      | Warning threshold                                                                                   | 80                |             |
| CRITICAL     | Critical threshold                                                                                  | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       |                                                                                                     | .*                |             |
| WARNING      | Warning threshold                                                                                   | 80                |             |
| CRITICAL     | Critical threshold                                                                                  | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Disk-IO-Generic-Name" label="Disk-IO-Generic-Name">

| Macro              | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DISKNAME           |                                                                                                     |                   |             |
| WARNINGREADTIME    |                                                                                                     |                   |             |
| CRITICALREADTIME   |                                                                                                     |                   |             |
| WARNINGREADUSAGE   | Thresholds                                                                                          |                   |             |
| CRITICALREADUSAGE  | Thresholds                                                                                          |                   |             |
| WARNINGUTILS       | Thresholds                                                                                          |                   |             |
| CRITICALUTILS      | Thresholds                                                                                          |                   |             |
| WARNINGWRITETIME   |                                                                                                     |                   |             |
| CRITICALWRITETIME  |                                                                                                     |                   |             |
| WARNINGWRITEUSAGE  | Thresholds                                                                                          |                   |             |
| CRITICALWRITEUSAGE | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Disk-IO-Global" label="Disk-IO-Global">

| Macro              | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER             |                                                                                                     | .*                |             |
| WARNINGREADTIME    |                                                                                                     |                   |             |
| CRITICALREADTIME   |                                                                                                     |                   |             |
| WARNINGREADUSAGE   | Thresholds                                                                                          |                   |             |
| CRITICALREADUSAGE  | Thresholds                                                                                          |                   |             |
| WARNINGUTILS       | Thresholds                                                                                          |                   |             |
| CRITICALUTILS      | Thresholds                                                                                          |                   |             |
| WARNINGWRITETIME   |                                                                                                     |                   |             |
| CRITICALWRITETIME  |                                                                                                     |                   |             |
| WARNINGWRITEUSAGE  | Thresholds                                                                                          |                   |             |
| CRITICALWRITEUSAGE | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose --skip  |             |

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Macro        | Description                                                                                                                                | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILES        | Files/Directories to check. (Shell expansion is ok)                                                                                        |                   | X           |
| FILTERPLUGIN | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used |                   |             |
| WARNING      | Warning threshold in seconds for each files/directories (diff time)                                                                        |                   |             |
| CRITICAL     | Critical threshold in seconds for each files/directories (diff time)                                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                        | --verbose         |             |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Macro         | Description                                                                                                                                | Valeur par défaut | Obligatoire |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILES         | Files/Directories to check. (Shell expansion is ok)                                                                                        |                   | X           |
| FILTERPLUGIN  | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used |                   |             |
| WARNINGONE    | Warning threshold in bytes for each files/directories                                                                                      |                   |             |
| CRITICALONE   | Critical threshold in bytes for each files/directories                                                                                     |                   |             |
| WARNINGTOTAL  | Warning threshold in bytes for all files/directories                                                                                       |                   |             |
| CRITICALTOTAL | Critical threshold in bytes for all files/directories                                                                                      |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                        | --verbose         |             |

</TabItem>
<TabItem value="Inodes-Generic-Name" label="Inodes-Generic-Name">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DISKNAME     |                                                                                                     |                   |             |
| WARNING      | Warning threshold in percent                                                                        | 80                |             |
| CRITICAL     | Critical threshold in percent                                                                       | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Inodes-Global" label="Inodes-Global">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       |                                                                                                     | .*                |             |
| WARNING      | Warning threshold in percent                                                                        | 80                |             |
| CRITICAL     | Critical threshold in percent                                                                       | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMMAND      |                                                                                                     | test              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMMAND      |                                                                                                     | test              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Load" label="Load">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold (1min,5min,15min)                                                                 | 4,3,2             |             |
| CRITICAL     | Critical threshold (1min,5min,15min)                                                                | 6,5,4             |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      |                                                                                                     | 80                |             |
| CRITICAL     |                                                                                                     | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Packet-Errors-Generic-Name" label="Packet-Errors-Generic-Name">

| Macro              | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACENAME      |                                                                                                     |                   |             |
| FILTERSTATE        | Filter filesystem type (regexp can be used)                                                         |                   |             |
| WARNINGINDISCARD   |                                                                                                     |                   |             |
| CRITICALINDISCARD  |                                                                                                     |                   |             |
| WARNINGINERROR     |                                                                                                     |                   |             |
| CRITICALINERROR    |                                                                                                     |                   |             |
| WARNINGOUTDISCARD  |                                                                                                     |                   |             |
| CRITICALOUTDISCARD |                                                                                                     |                   |             |
| WARNINGOUTERROR    |                                                                                                     |                   |             |
| CRITICALOUTERROR   |                                                                                                     |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Packet-Errors-Global" label="Packet-Errors-Global">

| Macro              | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER             |                                                                                                     | .*                |             |
| FILTERSTATE        | Filter filesystem type (regexp can be used)                                                         |                   |             |
| WARNINGINDISCARD   |                                                                                                     |                   |             |
| CRITICALINDISCARD  |                                                                                                     |                   |             |
| WARNINGINERROR     |                                                                                                     |                   |             |
| CRITICALINERROR    |                                                                                                     |                   |             |
| WARNINGOUTDISCARD  |                                                                                                     |                   |             |
| CRITICALOUTDISCARD |                                                                                                     |                   |             |
| WARNINGOUTERROR    |                                                                                                     |                   |             |
| CRITICALOUTERROR   |                                                                                                     |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Macro         | Description                                                                                                                                           | Valeur par défaut | Obligatoire |
|:--------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOMMAND | Filter process commands (regexp can be used)                                                                                                          |                   |             |
| FILTERARG     | Filter process arguments (regexp can be used)                                                                                                         |                   |             |
| FILTERSTATE   | Filter process states (regexp can be used). You can use: 'zombie', 'dead', 'paging', 'stopped', 'InterrupibleSleep', 'running', 'UninterrupibleSleep' |                   |             |
| WARNING       |                                                                                                                                                       |                   |             |
| CRITICAL      |                                                                                                                                                       |                   |             |
| WARNINGTIME   | Thresholds                                                                                                                                            |                   |             |
| CRITICALTIME  | Thresholds                                                                                                                                            |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                   | --verbose         |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%)                     | 10                |             |
| CRITICAL     | Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%)                     | 30                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Macro         | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSTATE   | Filter interfaces type (regexp can be used)                                                         | RU                |             |
| INTERFACENAME |                                                                                                     |                   |             |
| SPEED         | Set interface speed (in Mb)                                                                         |                   | X           |
| WARNINGIN     | Warning threshold in percent for 'in' traffic                                                       |                   |             |
| CRITICALIN    | Critical threshold in percent for 'in' traffic                                                      |                   |             |
| WARNINGOUT    | Warning threshold in percent for 'out' traffic                                                      |                   |             |
| CRITICALOUT   | Critical threshold in percent for 'out' traffic                                                     |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       |                                                                                                     | .*                |             |
| FILTERSTATE  | Filter interfaces type (regexp can be used)                                                         | RU                |             |
| SPEED        | Set interface speed (in Mb)                                                                         |                   | X           |
| WARNINGIN    | Warning threshold in percent for 'in' traffic                                                       |                   |             |
| CRITICALIN   | Critical threshold in percent for 'in' traffic                                                      |                   |             |
| WARNINGOUT   | Warning threshold in percent for 'out' traffic                                                      |                   |             |
| CRITICALOUT  | Critical threshold in percent for 'out' traffic                                                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in seconds                                                                        |                   |             |
| CRITICAL     | Critical threshold in seconds                                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

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
/usr/lib64/nagios/plugins//check_centreon_nrpe -H 10.0.0.1 -p 5666 -t 30  -c check_centreon_plugins -a '' ''  " \
	--warning= \
	--critical= \
	--warning-time= \
	--critical-time= \
	--filter-command='' \
	--filter-arg='' \
	--filter-state=''  \
	--verbose"
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Number of current processes: 76 memory used: 46 46 cpu usage: 0 % disks read: 91 91/s disks write: 77 77/s | 'processes.total.count'=76;;;0; 'processes.memory.usage.bytes'=46B;;;0; 'processes.cpu.utilization.percentage'=0%;;;0; 'processes.disks.io.read.usage.bytespersecond'=91B/s;;;0; 'processes.disks.io.write.usage.bytespersecond'=77B/s;;;0; 
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
/usr/lib64/nagios/plugins//check_centreon_nrpe -H 10.0.0.1 -p 5666 -t 30  -c check_centreon_plugins -a '' ''  " \
	--warning= \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                    | Modèle de service associé                                                                                                |
|:----------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| check-plugin [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/checkplugin.pm)]                 | Not used in this Monitoring Connector                                                                                    |
| cmd-return [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/cmdreturn.pm)]                     | OS-Linux-Cmd-Generic-NRPE-custom<br />OS-Linux-Is-File-Generic-NRPE-custom<br />OS-Linux-Is-Not-File-Generic-NRPE-custom |
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/connections.pm)]                  | OS-Linux-Connections-Generic-NRPE-custom                                                                                 |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/cpu.pm)]                                  | OS-Linux-Cpu-NRPE-custom                                                                                                 |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/cpudetailed.pm)]                 | OS-Linux-Cpu-Detailed-NRPE-custom                                                                                        |
| directlvm-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/directlvmusage.pm)]           | Not used in this Monitoring Connector                                                                                    |
| discovery-snmp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/discoverysnmp.pm)]             | Not used in this Monitoring Connector                                                                                    |
| discovery-snmpv3 [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/discoverysnmpv3.pm)]         | Not used in this Monitoring Connector                                                                                    |
| diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/diskio.pm)]                            | OS-Linux-Disk-IO-Generic-Name-NRPE-custom<br />OS-Linux-Disk-IO-Global-NRPE-custom                                       |
| files-date [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/filesdate.pm)]                     | OS-Linux-File-Date-Generic-NRPE-custom                                                                                   |
| files-size [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/filessize.pm)]                     | OS-Linux-File-Size-Generic-NRPE-custom                                                                                   |
| inodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/inodes.pm)]                            | OS-Linux-Inodes-Generic-Name-NRPE-custom<br />OS-Linux-Inodes-Global-NRPE-custom                                         |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/listinterfaces.pm)]           | Not used in this Monitoring Connector                                                                                    |
| list-partitions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/listpartitions.pm)]           | Not used in this Monitoring Connector                                                                                    |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/liststorages.pm)]               | Not used in this Monitoring Connector                                                                                    |
| list-systemdservices [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/listsystemdservices.pm)] | Not used in this Monitoring Connector                                                                                    |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/loadaverage.pm)]                         | OS-Linux-Load-NRPE-custom                                                                                                |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/memory.pm)]                            | OS-Linux-Memory-NRPE-custom                                                                                              |
| mountpoint [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/mountpoint.pm)]                    | Not used in this Monitoring Connector                                                                                    |
| ntp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/ntp.pm)]                                  | Not used in this Monitoring Connector                                                                                    |
| open-files [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/openfiles.pm)]                     | Not used in this Monitoring Connector                                                                                    |
| packet-errors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/packeterrors.pm)]               | OS-Linux-Packet-Errors-Generic-Name-NRPE-custom<br />OS-Linux-Packet-Errors-Global-NRPE-custom                           |
| paging [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/paging.pm)]                            | Not used in this Monitoring Connector                                                                                    |
| pending-updates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/pendingupdates.pm)]           | Not used in this Monitoring Connector                                                                                    |
| process [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/process.pm)]                          | OS-Linux-Process-Generic-NRPE-custom                                                                                     |
| quota [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/quota.pm)]                              | Not used in this Monitoring Connector                                                                                    |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/storage.pm)]                          | OS-Linux-Disk-Generic-Name-NRPE-custom<br />OS-Linux-Disk-Global-NRPE-custom                                             |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/swap.pm)]                                | OS-Linux-Swap-NRPE-custom                                                                                                |
| systemd-sc-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/systemdscstatus.pm)]        | Not used in this Monitoring Connector                                                                                    |
| traffic [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/traffic.pm)]                          | OS-Linux-Traffic-Generic-Name-NRPE-custom<br />OS-Linux-Traffic-Global-NRPE-custom                                       |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/uptime.pm)]                            | OS-Linux-Uptime-NRPE-custom                                                                                              |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Timeout in seconds for the command (Default: 45). Default value can be override by the mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --command                                  | Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --command-path                             | Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          | Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sudo  sudo command                       | .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
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
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Option                 | Description                                                                                                                                         |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| --manage-returns       | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   |
| --separator            | Set the separator used in --manage-returns (default : #)                                                                                            |
| --exec-command         | Command to test (Default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            |
| --exec-command-path    | Command path (Default: none).                                                                                                                       |
| --exec-command-options | Command options (Default: none).                                                                                                                    |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Option        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|:--------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning     | Warning threshold for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --critical    | Critical threshold for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --service     | Check tcp connections following rules: tag,\[type\],\[state\],\[port-src\],\[port-dst\],\[filter-ip-src\],\[filter -ip-dst\],\[threshold-warning\],\[threshold-critical\]  Example to test SSH connections on the server: --service="ssh,,,22,,,,10,20"  \<tag\>           Name to identify service (must be unique and     couldn't be 'total').  \<type\>          regexp - can use 'ipv4', 'ipv6', 'udp', 'udp6'.     Empty means all.  \<state\>         regexp - can use 'finWait1', 'established',...     Empty means all (minus listen). For udp     connections, there are 'established' and     'listen'.  \<filter-ip-*\>   regexp - can use to exclude or include some IPs.  \<threshold-*\>   nagios-perfdata - number of connections.   |
| --application | Check tcp connections of mutiple services: tag,\[services\],\[threshold-warning\],\[threshold-critical\]  Example: --application="web,http\|https,100,200"  \<tag\>           Name to identify application (must be unique).  \<services\>      List of services (used the tag name. Separated     by '\|').  \<threshold-*\>   nagios-perfdata - number of connections.                                                                                                                                                                                                                                                                                                                                                                             |
| --con-mode    | Default mode for parsing and command: 'netstat' (default) or 'ss'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-average      | Warning threshold average CPU utilization.                                                                                                                                                                                                    |
| --critical-average     | Critical threshold average CPU utilization.                                                                                                                                                                                                   |
| --warning-core         | Warning thresholds for each CPU core                                                                                                                                                                                                          |
| --critical-core        | Critical thresholds for each CPU core                                                                                                                                                                                                         |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                                        |
| --critical-*           | Critical threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                                       |

</TabItem>
<TabItem value="Disk-*" label="Disk-*">

| Option               | Description                                            |
|:---------------------|:-------------------------------------------------------|
| --warning-usage      | Warning threshold.                                     |
| --critical-usage     | Critical threshold.                                    |
| --units              | Units of thresholds (Default: '%') ('%', 'B').         |
| --free               | Thresholds are on free space left.                     |
| --filter-mountpoint  | Filter filesystem mount point (regexp can be used).    |
| --exclude-mountpoint | Exclude filesystem mount point (regexp can be used).   |
| --filter-type        | Filter filesystem type (regexp can be used).           |
| --filter-fs          | Filter filesystem (regexp can be used).                |
| --exclude-fs         | Exclude filesystem (regexp can be used).               |

</TabItem>
<TabItem value="Disk-IO-*" label="Disk-IO-*">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'read-usage', 'write-usage', 'read-wait', 'write-wait', 'svctime', 'utils'.                                                                                                                                               |
| --filter-partition-name  | Filter partition name (regexp can be used).                                                                                                                                                                                                   |
| --exclude-partition-name | Exclude partition name (regexp can be used).                                                                                                                                                                                                  |
| --bytes-per-sector       | Bytes per sector (Default: 512)                                                                                                                                                                                                               |
| --interrupt-frequency    | Linux Kernel Timer Interrupt Frequency (Default: 1000)                                                                                                                                                                                        |
| --skip                   | Skip partitions with 0 sectors read/write.                                                                                                                                                                                                    |

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Option          | Description                                                                                                                                            |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --files         | Files/Directories to check. (Shell expansion is ok)                                                                                                    |
| --warning       | Warning threshold in seconds for each files/directories (diff time).                                                                                   |
| --critical      | Critical threshold in seconds for each files/directories (diff time).                                                                                  |
| --separate-dirs | Do not include size of subdirectories.                                                                                                                 |
| --max-depth     | Don't check fewer levels. (can be use --separate-dirs)                                                                                                 |
| --time          | Check another time than modified time.                                                                                                                 |
| --exclude-du    | Exclude files/directories with 'du' command. Values from exclude files/directories are not counted in parent directories. Shell pattern can be used.   |
| --filter-plugin | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used.            |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Option           | Description                                                                                                                                            |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --files          | Files/Directories to check. (Shell expansion is ok)                                                                                                    |
| --warning-one    | Warning threshold in bytes for each files/directories.                                                                                                 |
| --critical-one   | Critical threshold in bytes for each files/directories.                                                                                                |
| --warning-total  | Warning threshold in bytes for all files/directories.                                                                                                  |
| --critical-total | Critical threshold in bytes for all files/directories.                                                                                                 |
| --separate-dirs  | Do not include size of subdirectories.                                                                                                                 |
| --max-depth      | Don't check fewer levels. (can be use --separate-dirs)                                                                                                 |
| --all-files      | Add files when you check directories.                                                                                                                  |
| --exclude-du     | Exclude files/directories with 'du' command. Values from exclude files/directories are not counted in parent directories. Shell pattern can be used.   |
| --filter-plugin  | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used.            |

</TabItem>
<TabItem value="Inodes-*" label="Inodes-*">

| Option               | Description                                            |
|:---------------------|:-------------------------------------------------------|
| --warning-usage      | Warning threshold in percent.                          |
| --critical-usage     | Critical threshold in percent.                         |
| --filter-mountpoint  | Filter filesystem mount point (regexp can be used).    |
| --exclude-mountpoint | Exclude filesystem mount point (regexp can be used).   |
| --filter-type        | Filter filesystem type (regexp can be used).           |
| --filter-fs          | Filter filesystem (regexp can be used).                |
| --exclude-fs         | Exclude filesystem (regexp can be used).               |

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Option                 | Description                                                                                                                                         |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| --manage-returns       | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   |
| --separator            | Set the separator used in --manage-returns (default : #)                                                                                            |
| --exec-command         | Command to test (Default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            |
| --exec-command-path    | Command path (Default: none).                                                                                                                       |
| --exec-command-options | Command options (Default: none).                                                                                                                    |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Option                 | Description                                                                                                                                         |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| --manage-returns       | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   |
| --separator            | Set the separator used in --manage-returns (default : #)                                                                                            |
| --exec-command         | Command to test (Default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            |
| --exec-command-path    | Command path (Default: none).                                                                                                                       |
| --exec-command-options | Command options (Default: none).                                                                                                                    |

</TabItem>
<TabItem value="Load" label="Load">

| Option     | Description                             |
|:-----------|:----------------------------------------|
| --warning  | Warning threshold (1min,5min,15min).    |
| --critical | Critical threshold (1min,5min,15min).   |
| --average  | Load average for the number of CPUs.    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                                                                                                                                                                             |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --swap                   | Check swap also.                                                                                                                                                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'memory-usage' (B), 'memory-usage-free' (B), 'memory-usage-prct' (%), 'memory-available' (B), 'memory-available-prct' (%), 'swap' (B), 'swap-free' (B), 'swap-prct' (%), 'buffer' (B), 'cached' (B), 'slab' (B).    |

</TabItem>
<TabItem value="Packet-Errors-*" label="Packet-Errors-*">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold in percent of total packets. Can be: in-error, out-error, in-discard, out-discard                                                                                                                                           |
| --critical-*           | Critical threshold in percent of total packets. Can be: in-error, out-error, in-discard, out-discard                                                                                                                                          |
| --filter-interface     | Filter interface name (regexp can be used).                                                                                                                                                                                                   |
| --exclude-interface    | Exclude interface name (regexp can be used).                                                                                                                                                                                                  |
| --filter-state         | Filter filesystem type (regexp can be used).                                                                                                                                                                                                  |
| --no-loopback          | Don't display loopback interfaces.                                                                                                                                                                                                            |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --add-cpu                | Monitor cpu usage.                                                                                                                                                                                                                            |
| --add-memory             | Monitor memory usage. It's inaccurate but it provides a trend.                                                                                                                                                                                |
| --add-disk-io            | Monitor disk I/O.                                                                                                                                                                                                                             |
| --filter-command         | Filter process commands (regexp can be used).                                                                                                                                                                                                 |
| --exclude-command        | Exclude process commands (regexp can be used).                                                                                                                                                                                                |
| --filter-arg             | Filter process arguments (regexp can be used).                                                                                                                                                                                                |
| --exclude-arg            | Exclude process arguments (regexp can be used).                                                                                                                                                                                               |
| --filter-ppid            | Filter process ppid (regexp can be used).                                                                                                                                                                                                     |
| --filter-state           | Filter process states (regexp can be used). You can use: 'zombie', 'dead', 'paging', 'stopped', 'InterrupibleSleep', 'running', 'UninterrupibleSleep'.                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'total-memory-usage', 'total-cpu-utilization', 'total-disks-read', 'total-disks-write', 'time', 'memory-usage', 'cpu-utilization', 'disks-read', 'disks-write'.                                                  |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                   | Description                                                                         |
|:-------------------------|:------------------------------------------------------------------------------------|
| --no-swap                | Threshold if no active swap (default: 'critical').                                  |
| --warning-* --critical-* | Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%).    |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-in           | Warning threshold in percent for 'in' traffic.                                                                                                                                                                                                |
| --critical-in          | Critical threshold in percent for 'in' traffic.                                                                                                                                                                                               |
| --warning-out          | Warning threshold in percent for 'out' traffic.                                                                                                                                                                                               |
| --critical-out         | Critical threshold in percent for 'out' traffic.                                                                                                                                                                                              |
| --unknown-status       | Define the conditions to match for the status to be UNKNOWN (Default: ''). You can use the following variables: %{status}, %{display}                                                                                                         |
| --warning-status       | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}, %{display}                                                                                                         |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (Default: '%{status} ne "RU"'). You can use the following variables: %{status}, %{display}                                                                                       |
| --units                | Units of thresholds (Default: 'b/s') ('%', 'b/s'). Percent canbe used only if --speed is set.                                                                                                                                                 |
| --filter-interface     | Filter interface name (regexp can be used).                                                                                                                                                                                                   |
| --exclude-interface    | Exclude interface name (regexp can be used).                                                                                                                                                                                                  |
| --filter-state         | Filter interfaces type (regexp can be used).                                                                                                                                                                                                  |
| --speed                | Set interface speed (in Mb).                                                                                                                                                                                                                  |
| --guess-speed          | Try to guess speed with commands ethtool and iwconfig.                                                                                                                                                                                        |
| --no-loopback          | Don't display loopback interfaces.                                                                                                                                                                                                            |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option     | Description                      |
|:-----------|:---------------------------------|
| --warning  | Warning threshold in seconds.    |
| --critical | Critical threshold in seconds.   |
| --seconds  | Display uptime in seconds.       |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib64/nagios/plugins//check_centreon_nrpe -H 10.0.0.1 -p 5666 -t 30  -c check_centreon_plugins -a '' ''  " \
	--warning= \
	--critical= \
	--help
```

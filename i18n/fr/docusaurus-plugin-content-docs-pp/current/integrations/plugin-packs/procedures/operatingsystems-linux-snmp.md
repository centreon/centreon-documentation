---
id: operatingsystems-linux-snmp
title: Linux SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Linux SNMP** apporte un modèle d'hôte :

* OS-Linux-SNMP-custom

Il apporte les modèles de service suivants :

| Alias                      | Modèle de service                        | Description                                                                                                                                                                        | Défaut | Découverte |
|:---------------------------|:-----------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|:-----------|
| Cpu-Detailed               | OS-Linux-Cpu-Detailed-SNMP               | Contrôle du taux d'utilisation détaillé CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |        |            |
| Cpu                        | OS-Linux-Cpu-SNMP                        | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur       | X      |            |
| Disk-Generic-Id            | OS-Linux-Disk-Generic-Id-SNMP            | Contrôle du taux d'espace libre disponible du disque. Pour chaque contrôle apparaîtra le nom du disque                                                                             |        |            |
| Disk-Generic-Name          | OS-Linux-Disk-Generic-Name-SNMP          | Contrôle du taux d'espace libre disponible du disque. Pour chaque contrôle apparaîtra le point de montage du disque                                                                |        |            |
| Disk-Global                | OS-Linux-Disk-Global-SNMP                | Contrôle du taux d'espace libre disponible des disques. Pour chaque contrôle apparaîtra le point de montage des disques                                                            |        | X          |
| Disk-IO                    | OS-Linux-Disk-IO-SNMP                    | Contrôle les accès disques du disque. Pour chaque contrôle apparaîtra le nom du disque                                                                                             |        |            |
| Inodes-Global              | OS-Linux-Inodes-Global-SNMP              | Contrôle l'utilisation des inodes                                                                                                                                                  |        | X          |
| Load                       | OS-Linux-Load-SNMP                       | Contrôle de la charge serveur                                                                                                                                                      | X      |            |
| Memory                     | OS-Linux-Memory-SNMP                     | Contrôle du taux d'utilisation de la mémoire vive                                                                                                                                  | X      |            |
| Ntp                        | OS-Linux-NTP-SNMP                        | Contrôle la synchronisation avec un serveur NTP                                                                                                                                    |        |            |
| Process-Generic            | OS-Linux-Process-Generic-SNMP            | Contrôle permettant de vérifier le fonctionnement d'un processus                                                                                                                   |        | X          |
| Swap                       | OS-Linux-Swap-SNMP                       | Contrôle du taux d'utilisation de la mémoire virtuelle                                                                                                                             | X      |            |
| Tcpcon-Generic             | OS-Linux-Tcpcon-Generic-SNMP             | Contrôle permettant de vérifier les connexions tcp Linux                                                                                                                           |        |            |
| Traffic-Generic-Id         | OS-Linux-Traffic-Generic-Id-SNMP         | Contrôle de la bande passante de l'interface. Pour chaque contrôle apparaîtra le nom de l'interface                                                                                |        |            |
| Traffic-Generic-Name       | OS-Linux-Traffic-Generic-Name-SNMP       | Contrôle de la bande passante de l'interface. Pour chaque contrôle apparaîtra le nom de l'interface                                                                                |        |            |
| Traffic-Global             | OS-Linux-Traffic-Global-SNMP             | Contrôle de la bande passante des interfaces. Pour chaque contrôle apparaîtra le nom de l'interface                                                                                |        | X          |
| Uptime                     | OS-Linux-Uptime-SNMP                     | Durée depuis laquelle le serveur tourne sans interruption                                                                                                                          |        |            |
| Packet-Errors-Generic-Id   | Os-Linux-Packet-Errors-Generic-Id-SNMP   | Contrôle le pourcentage de paquets en erreur                                                                                                                                       |        |            |
| Packet-Errors-Generic-Name | Os-Linux-Packet-Errors-Generic-Name-SNMP | Contrôle le pourcentage de paquets en erreur                                                                                                                                       |        |            |
| Packet-Errors-Global       | Os-Linux-Packet-Errors-Global-SNMP       | Contrôle le pourcentage de paquets en erreur                                                                                                                                       |        | X          |

### Règles de découverte

| Nom de la règle                  | Description                                                           |
|:---------------------------------|:----------------------------------------------------------------------|
| OS-Linux-SNMP-Inodes-Name        | Discover the disk partitions and monitor inodes usage                 |
| OS-Linux-SNMP-Disk-Name          | Discover the disk partitions and monitor space occupation             |
| OS-Linux-SNMP-Packet-Errors-Name | Discover network interfaces and monitor errored and discarded packets |
| OS-Linux-SNMP-Traffic-Name       | Discover network interfaces and monitor bandwidth utilization         |
| OS-Linux-SNMP-Disk-Path          | Discover the disk partitions and monitor space occupation             |
| OS-Linux-SNMP-Processes-Name     | Discover processes and monitor their system usage                     |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| cpu.guest.utilization.percentage     | %     |
| cpu.guestnice.utilization.percentage | %     |
| cpu.idle.utilization.percentage      | %     |
| cpu.interrupt.utilization.percentage | %     |
| cpu.kernel.utilization.percentage    | %     |
| cpu.nice.utilization.percentage      | %     |
| cpu.softirq.utilization.percentage   | %     |
| cpu.steal.utilization.percentage     | %     |
| cpu.system.utilization.percentage    | %     |
| cpu.user.utilization.percentage      | %     |
| cpu.wait.utilization.percentage      | %     |

</TabItem>
<TabItem value="Disk-*" label="Disk-*">

| Métrique                            | Unité |
|:------------------------------------|:------|
| storage.partitions.count            | count |
| *storage*#storage.access.count      | count |
| *storage*#storage.space.usage.bytes | bytes |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Métrique            | Unité |
|:--------------------|:------|
| total-read          | B/s   |
| total-read-iops     | iops  |
| total-write         | B/s   |
| total-write-iops    | iops  |
| sum-read-write      | B/s   |
| sum-read-write-iops | iops  |
| *disk*#read         | B/s   |
| *disk*#read-iops    | iops  |
| *disk*#write        | B/s   |
| *disk*#write-iops   | iops  |

</TabItem>
<TabItem value="Inodes-*" label="Inodes-*">

| Métrique                               | Unité |
|:---------------------------------------|:------|
| *disk*#storage.inodes.usage.percentage | %     |

</TabItem>
<TabItem value="Load" label="Load">

| Métrique               | Unité |
|:-----------------------|:------|
| load.1m.average.count  | count |
| load.15m.average.count | count |
| load.5m.average.count  | count |
| load.1m.count          | count |
| load.15m.count         | count |
| load.5m.count          | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                | Unité |
|:------------------------|:------|
| memory.buffer.bytes     | B     |
| memory.cached.bytes     | B     |
| memory.shared.bytes     | B     |
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |
| swap.usage.bytes        | B     |
| swap.free.bytes         | B     |
| swap.usage.percentage   | %     |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Métrique            | Unité |
|:--------------------|:------|
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Packet-Errors-*" label="Packet-Errors-*">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| *int*#interface.packets.in.discard.percentage  | %     |
| *int*#interface.packets.in.error.percentage    | %     |
| *int*#interface.packets.out.discard.percentage | %     |
| *int*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Métrique    | Unité |
|:------------|:------|
| cpu_total   | %     |
| mem_avg     | B     |
| mem_total   | B     |
| nbproc      |       |

</TabItem>
<TabItem value="Swap" label="Swap">

| Métrique              | Unité |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

</TabItem>
<TabItem value="Tcpcon-Generic" label="Tcpcon-Generic">

| Métrique         | Unité |
|:-----------------|:------|
| connections.tcp. |       |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique    | Unité |
|:------------|:------|
| uptime      |       |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **BDD Oracle** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* LINK

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Plugin Packs > Gestionnaire**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-operatingsystems-linux-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-linux-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-operatingsystems-linux-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Linux SNMP**
depuis l'interface web et le menu **Configuration > Plugin Packs > Gestionnaire**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Operatingsystems-Linux-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-Linux-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-operatingsystems-linux-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **BDD Oracle**.
* Appliquez le modèle d'hôte **OS-Linux-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Obligatoire | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --mode=swap \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-usage-prct='10' \
    --critical-usage-prct='30' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:   Used : %.2f %% | 'swap.usage.bytes'=9000B;;;0; 'swap.free.bytes'=9000B;;;0; 'swap.usage.percentage'=9000%;;;0;100 
```

### Mode disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --list-mode
```

* arp
* cpu
* cpu-detailed
* disk-usage
* diskio
* inodes
* interfaces
* list-diskspath
* list-interfaces
* list-processes
* list-storages
* load
* memory
* processcount
* storage
* swap
* tcpcon
* time
* udpcon
* uptime

### Options complémentaires

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --mode=swap \
    --help
```

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option             | Description                                   |
|:-------------------|:----------------------------------------------|
| --use-ucd          | Use UCD mib for cpu average.                  |
| --warning-average  | Warning threshold average CPU utilization.    |
| --critical-average | Critical threshold average CPU utilization.   |
| --warning-core     | Warning thresholds for each CPU core          |
| --critical-core    | Critical thresholds for each CPU core         |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Option                 | Description                                                                                                                                          |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                           |
| --redis-server         | Redis server to use (only one server). SYntax: address\\[:port\\]                                                                                        |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx_timeout=5").                                                                                               |
| --redis-db             | Set Redis database index.                                                                                                                            |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                 |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                       |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                  |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                                                                   |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                           |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                   |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                                                        |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                                                            |
| --warning-*            | Threshold warning in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'kernel', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.     |
| --critical-*           | Threshold critical in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'kernel', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.    |

</TabItem>
<TabItem value="Disk-*" label="Disk-*">

| Option                  | Description                                                                                                                              |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --memcached             | Memcached server to use (only one server).                                                                                               |
| --redis-server          | Redis server to use (only one server). SYntax: address\\[:port\\]                                                                            |
| --redis-attribute       | Set Redis Options (--redis-attribute="cnx_timeout=5").                                                                                   |
| --redis-db              | Set Redis database index.                                                                                                                |
| --failback-file         | Failback on a local file if redis connection failed.                                                                                     |
| --memexpiration         | Time to keep data in seconds (Default: 86400).                                                                                           |
| --statefile-dir         | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                      |
| --statefile-suffix      | Add a suffix for the statefile name (Default: '').                                                                                       |
| --statefile-concat-cwd  | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                               |
| --statefile-format      | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                       |
| --statefile-key         | Key to encrypt/decrypt cache.                                                                                                            |
| --statefile-cipher      | Cipher to encrypt cache (Default: 'AES').                                                                                                |
| --warning-usage         | Threshold warning.                                                                                                                       |
| --critical-usage        | Threshold critical.                                                                                                                      |
| --warning-access        | Threshold warning.                                                                                                                       |
| --critical-access       | Threshold critical. Check if storage is readOnly: --critical-access=readOnly                                                             |
| --add-access            | Check storage access (readOnly, readWrite).                                                                                              |
| --units                 |                                                                                                                                          |
| --free                  |                                                                                                                                          |
| --storage               | Set the storage (number expected) ex: 1, 2,... (empty means 'check all storage').                                                        |
| --name                  | storage oid index.                                                                                                                       |
| --regexp                | Allows to use regexp to filter storage (with option --name).                                                                             |
| --regexp-isensitive     | Allows to use regexp non case-sensitive (with --regexp).                                                                                 |
| --path-best-match       | Allows to select best path mount point (with --name).                                                                                    |
| --reload-cache-time     | Time in minutes before reloading cache file (default: 180).                                                                              |
| --oid-filter            | Choose OID used to filter storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                    |
| --oid-display           | Choose OID used to display storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                   |
| --display-transform-src | Regexp src to transform display value. (security risk!!!)                                                                                |
| --display-transform-dst | Regexp dst to transform display value. (security risk!!!)                                                                                |
| --show-cache            | Display cache storage datas.                                                                                                             |
| --space-reservation     | Some filesystem has space reserved (like ext4 for root). The value is in percent of total (Default: none) (results like 'df' command).   |
| --filter-duplicate      | Filter duplicate storages (in used size and total size).                                                                                 |
| --filter-storage-type   | Filter storage types with a regexp (Default: '^(hrStorageFixedDisk|hrStorageNetworkDisk|hrFSBerkeleyFFS)$').                             |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Option                 | Description                                                                                                                                                                            |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                             |
| --redis-server         | Redis server to use (only one server). SYntax: address\\[:port\\]                                                                                                                          |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx_timeout=5").                                                                                                                                 |
| --redis-db             | Set Redis database index.                                                                                                                                                              |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                   |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                         |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                    |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                                                                                                     |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                             |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                     |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                                                                                          |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                                                                                              |
| --warning-*            | Threshold warning. Can be: 'read', 'write', 'read-iops', 'write-iops', 'total-read', 'total-write', 'total-read-iops', 'total-write-iops', 'sum-read-write', 'sum-read-write-iops'.    |
| --critical-*           | Threshold critical. Can be: 'read', 'write', 'read-iops', 'write-iops', 'total-read', 'total-write', 'total-read-iops', 'total-write-iops', 'sum-read-write', 'sum-read-write-iops'.   |
| --device               | Set the device (number expected) ex: 1, 2,... (empty means 'check all devices').                                                                                                       |
| --name                 | oid index.                                                                                                                                                                             |
| --regexp               | Allows to use regexp to filter devices (with option --name).                                                                                                                           |
| --regexp-isensitive    | Allows to use regexp non case-sensitive (with --regexp).                                                                                                                               |

</TabItem>
<TabItem value="Inodes-*" label="Inodes-*">

| Option                  | Description                                                                              |
|:------------------------|:-----------------------------------------------------------------------------------------|
| --warning-usage         | Threshold warning in percent.                                                            |
| --critical-usage        | Threshold critical in percent.                                                           |
| --diskpath              | Set the disk path (number expected) ex: 1, 2,... (empty means 'check all disks path').   |
| --name                  | disk path oid index.                                                                     |
| --regexp                | Allows to use regexp to filter diskpath (with option --name).                            |
| --regexp-isensitive     | Allows to use regexp non case-sensitive (with --regexp).                                 |
| --display-transform-src | Regexp src to transform display value. (security risk!!!)                                |
| --display-transform-dst | Regexp dst to transform display value. (security risk!!!)                                |
| --filter-device         | Filter devices by name (regexp).                                                         |
| --filter-path           | Filter devices by path (regexp).                                                         |

</TabItem>
<TabItem value="Load" label="Load">

| Option     | Description                             |
|:-----------|:----------------------------------------|
| --warning  | Threshold warning (1min,5min,15min).    |
| --critical | Threshold critical (1min,5min,15min).   |
| --average  | Load average for the number of CPUs.    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --units                  | (Deprecated. Please use new counters directly)                                                                                                                          |
| --free                   | counters directly)                                                                                                                                                      |
| --swap                   |                                                                                                                                                                         |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'swap' (B), 'swap-free' (B), 'swap-prct' (%), 'buffer' (B), 'cached' (B), 'shared' (B).            |
| --patch-redhat           | If using RedHat distribution with net-snmp \\>= 5.7.2-43 and net-snmp \\< 5.7.2-47. But you should update net-snmp!!!!  memAvailReal  - memCached // free = total - used    |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option            | Description                                                                                                         |
|:------------------|:--------------------------------------------------------------------------------------------------------------------|
| --oid             |                                                                                                                     |
| --warning-offset  | Time offset warning threshold (in seconds).                                                                         |
| --critical-offset | Time offset critical Threshold (in seconds).                                                                        |
| --ntp-hostname    | Set the ntp hostname (if not set, localtime is used).                                                               |
| --ntp-port        | Set the ntp port (Default: 123).                                                                                    |
| --timezone        | Set the timezone of distant server. For Windows, you need to set it. Can use format: 'Europe/London' or '+0100'.    |

</TabItem>
<TabItem value="Packet-Errors-*" label="Packet-Errors-*">

| Option                   | Description                                                                                                                                                                                                                                                                                |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                 |
| --redis-server           | Redis server to use (only one server). SYntax: address\\[:port\\]                                                                                                                                                                                                                              |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx_timeout=5").                                                                                                                                                                                                                                     |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                  |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             |
| --statefile-dir          | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        |
| --statefile-suffix       | Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         |
| --statefile-concat-cwd   | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 |
| --statefile-format       | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         |
| --statefile-key          | Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              |
| --statefile-cipher       | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  |
| --add-global             | Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     |
| --add-status             | Check interface status.                                                                                                                                                                                                                                                                    |
| --add-duplex-status      | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                                                                   |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                                                                    |
| --add-cast               | Check interface cast.                                                                                                                                                                                                                                                                      |
| --add-speed              | Check interface speed.                                                                                                                                                                                                                                                                     |
| --add-volume             | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      |
| --check-metrics          | If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           |
| --warning-status         | Set warning threshold for status. Can used special variables                                                                                                                                                                                                                               |
| --critical-status        | Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent_delta') ('percent_delta', 'bps', 'counter').                                                                                                                                                                                        |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent_delta') ('percent_delta', 'percent', 'delta', 'counter').                                                                                                                                                                       |
| --units-cast             | Units of thresholds for communication types (Default: 'percent_delta') ('percent_delta', 'percent', 'delta', 'counter').                                                                                                                                                                   |
| --nagvis-perfdata        | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              |
| --interface              | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                       |
| --name                   | interface oid index (Can be a regexp)                                                                                                                                                                                                                                                      |
| --speed                  |                                                                                                                                                                                                                                                                                            |
| --speed-in               | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out              | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --map-speed-dsl          | Get interface speed configuration for interface type 'adsl' and 'vdsl2'.   E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                                                                                          |
| --force-counters64       | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    |
| --force-counters32       | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   |
| --reload-cache-time      | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter             | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           |
| --oid-display            | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          |
| --oid-extra-display      | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src  | Regexp src to transform display value.                                                                                                                                                                                                                                                     |
| --display-transform-dst  | Regexp dst to transform display value.                                                                                                                                                                                                                                                     |
| --show-cache             | Display cache interface datas.                                                                                                                                                                                                                                                             |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Option                 | Description                                                                                                                                                                              |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                               |
| --redis-server         | Redis server to use (only one server). SYntax: address\\[:port\\]                                                                                                                            |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx_timeout=5").                                                                                                                                   |
| --redis-db             | Set Redis database index.                                                                                                                                                                |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                     |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                           |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                      |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                                                                                                       |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                               |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                       |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                                                                                            |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                |
| --process-status       | Filter process status. Can be a regexp. (Default: 'running|runnable').                                                                                                                   |
| --process-name         | Filter process name.                                                                                                                                                                     |
| --regexp-name          | Allows to use regexp to filter process name (with option --process-name).                                                                                                                |
| --process-path         | Filter process path.                                                                                                                                                                     |
| --regexp-path          | Allows to use regexp to filter process path (with option --process-path).                                                                                                                |
| --process-args         | Filter process arguments.                                                                                                                                                                |
| --regexp-args          | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                           |
| --warning              | Threshold warning of matching processes count.                                                                                                                                           |
| --critical             | Threshold critical of matching processes count.                                                                                                                                          |
| --memory               | Check memory usage.                                                                                                                                                                      |
| --warning-mem-each     | Threshold warning of memory used by each matching processes (in Bytes).                                                                                                                  |
| --critical-mem-each    | Threshold critical of memory used by each matching processes (in Bytes).                                                                                                                 |
| --warning-mem-total    | Threshold warning of total memory used by matching processes (in Bytes).                                                                                                                 |
| --critical-mem-total   | Threshold critical of total memory used by matching processes (in Bytes).                                                                                                                |
| --warning-mem-avg      | Threshold warning of average memory used by matching processes (in Bytes).                                                                                                               |
| --critical-mem-avg     | Threshold critical of average memory used by matching processes (in Bytes).                                                                                                              |
| --cpu                  | pid changes too much, the plugin can't compute values.                                                                                                                                   |
| --warning-cpu-total    | Threshold warning of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.    |
| --critical-cpu-total   | Threshold critical of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.   |
| --top                  |                                                                                                                                                                                          |
| --top-num              | Number of processes in top memory display (Default: 5).                                                                                                                                  |
| --top-size             | Minimum memory usage to be in top memory display (Default: 52428800 -\\> 50 MB).                                                                                                           |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                   | Description                                                             |
|:-------------------------|:------------------------------------------------------------------------|
| --no-swap                | Threshold if no active swap (default: 'critical').                      |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).    |

</TabItem>
<TabItem value="Tcpcon-Generic" label="Tcpcon-Generic">

| Option        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning     | Threshold warning for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --critical    | Threshold critical for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --service     | tag,\\[type\\],\\[state\\],\\[port-src\\],\\[port-dst\\],\\[filter-ip-src\\],\\[filter -ip-dst\\],\\[threshold-warning\\],\\[threshold-critical\\]  --service="ssh,,,22,,,,10,20"  \\<tag\\>           Name to identify service (must be unique and     couldn't be 'total').  \\<type\\>          regexp - can use 'ipv4', 'ipv6'. Empty means     all.  \\<state\\>         regexp - can use 'finWait1', 'established',...     Empty means all (minus listen).  \\<filter-ip-*\\>   regexp - can use to exclude or include some IPs.  \\<threshold-*\\>   nagios-perfdata - number of connections.   |
| --application | tag,\\[services\\],\\[threshold-warning\\],\\[threshold-critical\\]   \\<tag\\>           Name to identify application (must be unique).  \\<services\\>      List of services (used the tag name. Separated     by '|').  \\<threshold-*\\>   nagios-perfdata - number of connections.                                                                                                                                                                                                                                                                                    |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Option                   | Description                                                                                                                                                                                                                                                                                |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                 |
| --redis-server           | Redis server to use (only one server). SYntax: address\\[:port\\]                                                                                                                                                                                                                              |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx_timeout=5").                                                                                                                                                                                                                                     |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                  |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             |
| --statefile-dir          | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        |
| --statefile-suffix       | Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         |
| --statefile-concat-cwd   | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 |
| --statefile-format       | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         |
| --statefile-key          | Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              |
| --statefile-cipher       | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  |
| --add-global             | Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     |
| --add-status             | Check interface status.                                                                                                                                                                                                                                                                    |
| --add-duplex-status      | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                                                                   |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                                                                    |
| --add-cast               | Check interface cast.                                                                                                                                                                                                                                                                      |
| --add-speed              | Check interface speed.                                                                                                                                                                                                                                                                     |
| --add-volume             | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      |
| --check-metrics          | If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           |
| --warning-status         | Set warning threshold for status. Can used special variables                                                                                                                                                                                                                               |
| --critical-status        | Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent_delta') ('percent_delta', 'bps', 'counter').                                                                                                                                                                                        |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent_delta') ('percent_delta', 'percent', 'delta', 'counter').                                                                                                                                                                       |
| --units-cast             | Units of thresholds for communication types (Default: 'percent_delta') ('percent_delta', 'percent', 'delta', 'counter').                                                                                                                                                                   |
| --nagvis-perfdata        | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              |
| --interface              | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                       |
| --name                   | interface oid index (Can be a regexp)                                                                                                                                                                                                                                                      |
| --speed                  |                                                                                                                                                                                                                                                                                            |
| --speed-in               | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out              | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --map-speed-dsl          | Get interface speed configuration for interface type 'adsl' and 'vdsl2'.   E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                                                                                          |
| --force-counters64       | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    |
| --force-counters32       | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   |
| --reload-cache-time      | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter             | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           |
| --oid-display            | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          |
| --oid-extra-display      | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src  | Regexp src to transform display value.                                                                                                                                                                                                                                                     |
| --display-transform-dst  | Regexp dst to transform display value.                                                                                                                                                                                                                                                     |
| --show-cache             | Display cache interface datas.                                                                                                                                                                                                                                                             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option                 | Description                                                                                                                                               |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                |
| --redis-server         | Redis server to use (only one server). SYntax: address\\[:port\\]                                                                                             |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx_timeout=5").                                                                                                    |
| --redis-db             | Set Redis database index.                                                                                                                                 |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                      |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                            |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                       |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                                                                        |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                        |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                                                             |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                                                                 |
| --warning-uptime       | Threshold warning.                                                                                                                                        |
| --critical-uptime      | Threshold critical.                                                                                                                                       |
| --add-sysdesc          | Display system description.                                                                                                                               |
| --force-oid            | Can choose your oid (numeric format only).                                                                                                                |
| --check-overload       | Uptime counter limit is 4294967296 and overflow. With that option, we manage the counter going back. But there is a few chance we can miss a reboot.      |
| --reboot-window        | To be used with check-overload option. Time in milliseconds (Default: 5000) You increase the chance of not missing a reboot if you decrease that value.   |
| --unit                 | for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds                                                              |

</TabItem>
</Tabs>

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
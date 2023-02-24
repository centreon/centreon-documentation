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



> Les services par "Défaut" sont automatiquement liés au(x) modèle(s) d'hôte.

> Les modèles de service avec le champ "Découverte" sont liés à une règle de découverte automatique de service.

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
<TabItem value="Disk-Generic-Id" label="Disk-Generic-Id">

| Métrique                            | Unité |
|:------------------------------------|:------|
| storage.partitions.count            | count |
| *storage*#storage.access.count      | count |
| *storage*#storage.space.usage.bytes | bytes |

</TabItem>
<TabItem value="Disk-Generic-Name" label="Disk-Generic-Name">

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
<TabItem value="Packet-Errors-Generic-Id" label="Packet-Errors-Generic-Id">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| *int*#interface.packets.in.discard.percentage  | %     |
| *int*#interface.packets.in.error.percentage    | %     |
| *int*#interface.packets.out.discard.percentage | %     |
| *int*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Packet-Errors-Generic-Name" label="Packet-Errors-Generic-Name">

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
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

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

Afin de superviser votre ressource en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
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
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
* Appliquez le modèle d'hôte **OS-Linux-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Obligatoire    | Macro            | Description                                  |
|:---------------|:-----------------|:---------------------------------------------|
|                | SNMPEXTRAOPTIONS | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --mode=swap \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-usage-prct='10' \
    --critical-usage-prct='30' \
    
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:   Used : %.2f %% | 'swap.usage.bytes'=66B;;;0; 'swap.free.bytes'=38B;;;0; 'swap.usage.percentage'=84%;;;0;100 
```

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

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

#### Options globales

Les options globales aux modes sont listées ci-dessus :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --mode                                     |     Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global      |
| --dyn-mode                                 |     Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global      |
| --list-mode                                |     List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --mode-version                             |     Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --version                                  |     Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --pass-manager                             |     Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --verbose                                  |     Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --debug                                    |     Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --filter-perfdata                          |     Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output      |
| --filter-perfdata-adv                      |     Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output      |
| --explode-perfdata-max                     |     Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output      |
| --change-perfdata --extend-perfdata        |     Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output      |
| --extend-perfdata-group                    |     Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output      |
| --change-short-output --change-long-output |     Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --change-exit                              |     Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --range-perfdata                           |     Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output      |
| --filter-uom                               |     Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output      |
| --opt-exit                                 |     Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --output-ignore-perfdata                   |     Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --output-ignore-label                      |     Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --output-xml                               |     Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output      |
| --output-json                              |     Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output      |
| --output-openmetrics                       |     Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output      |
| --output-file                              |     Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --disco-format                             |     Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output      |
| --disco-show                               |     Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output      |
| --float-precision                          |     Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --source-encoding                          |     Set encoding of monitoring sources (In some case. Default: 'UTF-8').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --hostname                                 |     Hostname to query (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Snmp        |
| --snmp-community                           |     Read community (defaults to public).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Snmp        |
| --snmp-version                             |     Version: 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Snmp        |
| --snmp-port                                |     Port (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Snmp        |
| --snmp-timeout                             |     Timeout in secondes (default: 1) before retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Snmp        |
| --snmp-retries                             |     Set the number of retries (default: 5) before failure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Snmp        |
| --maxrepetitions                           |     Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Snmp        |
| --subsetleef                               |     How many oid values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                   | Snmp        |
| --snmp-autoreduce                          |     Auto reduce SNMP request size in case of SNMP errors (By default, the divisor is 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Snmp        |
| --snmp-force-getnext                       |     Use snmp getnext function (even in snmp v2c and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Snmp        |
| --snmp-username                            |     Security name (only for SNMP v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Snmp        |
| --authpassphrase                           |     Authentication protocol pass phrase.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Snmp        |
| --authprotocol                             |     Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Snmp        |
| --privpassphrase                           |     Privacy protocol pass phrase                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Snmp        |
| --privprotocol                             |     Privacy protocol: DES\|AES. Since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Snmp        |
| --contextname                              |     Context name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Snmp        |
| --contextengineid                          |     Context engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Snmp        |
| --securityengineid                         |     Security engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Snmp        |
| --snmp-errors-exit                         |     Exit code for SNMP Errors (default: unknown)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Snmp        |
| --snmp-tls-transport                       |     TLS Transport communication used (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Snmp        |
| --snmp-tls-our-identity                    |     Our X.509 identity to use, which should either be a fingerprint or the filename that holds the certificate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Snmp        |
| --snmp-tls-their-identity                  |     The remote server's identity to connect to, specified as either a fingerprint or a file name. Either this must be specified, or the hostname below along with a trust anchor.                                                                                                                                                                                                                                                                                                                                                                                              | Snmp        |
| --snmp-tls-their-hostname                  |     The remote server's hostname that is expected. If their certificate was signed by a CA then their hostname presented in the certificate must match this value or the connection fails to be established (to avoid man-in-the-middle attacks).                                                                                                                                                                                                                                                                                                                              | Snmp        |
| --snmp-tls-trust-cert                      |     A trusted certificate to use as trust anchor (like a CA certificate) for verifying a remote server's certificate. If a CA certificate is used to validate a certificate then the TheirHostname parameter must also be specified to ensure their presented hostname in the certificate matches.                                                                                                                                                                                                                                                                             | Snmp        |


#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option             | Description                                       | Option type |
|:-------------------|:--------------------------------------------------|:------------|
| --use-ucd          |     Use UCD mib for cpu average.                  | Mode        |
| --warning-average  |     Warning threshold average CPU utilization.    | Mode        |
| --critical-average |     Critical threshold average CPU utilization.   | Mode        |
| --warning-core     |     Warning thresholds for each CPU core          | Mode        |
| --critical-core    |     Critical thresholds for each CPU core         | Mode        |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Option                 | Description                                                                                                                                              | Option type |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached            |     Memcached server to use (only one server).                                                                                                           | Retention   |
| --redis-server         |     Redis server to use (only one server). SYntax: address\[:port\]                                                                                      | Retention   |
| --redis-attribute      |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                              | Retention   |
| --redis-db             |     Set Redis database index.                                                                                                                            | Retention   |
| --failback-file        |     Failback on a local file if redis connection failed.                                                                                                 | Retention   |
| --memexpiration        |     Time to keep data in seconds (Default: 86400).                                                                                                       | Retention   |
| --statefile-dir        |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                  | Retention   |
| --statefile-suffix     |     Add a suffix for the statefile name (Default: '').                                                                                                   | Retention   |
| --statefile-concat-cwd |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                           | Retention   |
| --statefile-format     |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                   | Retention   |
| --statefile-key        |     Key to encrypt/decrypt cache.                                                                                                                        | Retention   |
| --statefile-cipher     |     Cipher to encrypt cache (Default: 'AES').                                                                                                            | Retention   |
| --warning-*            |     Threshold warning in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'kernel', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.     | Mode        |
| --critical-*           |     Threshold critical in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'kernel', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.    | Mode        |

</TabItem>
<TabItem value="Disk-*" label="Disk-*">

| Option                  | Description                                                                                                                                  | Option type |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached             |     Memcached server to use (only one server).                                                                                               | Retention   |
| --redis-server          |     Redis server to use (only one server). SYntax: address\[:port\]                                                                          | Retention   |
| --redis-attribute       |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                  | Retention   |
| --redis-db              |     Set Redis database index.                                                                                                                | Retention   |
| --failback-file         |     Failback on a local file if redis connection failed.                                                                                     | Retention   |
| --memexpiration         |     Time to keep data in seconds (Default: 86400).                                                                                           | Retention   |
| --statefile-dir         |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                      | Retention   |
| --statefile-suffix      |     Add a suffix for the statefile name (Default: '').                                                                                       | Retention   |
| --statefile-concat-cwd  |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                               | Retention   |
| --statefile-format      |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                       | Retention   |
| --statefile-key         |     Key to encrypt/decrypt cache.                                                                                                            | Retention   |
| --statefile-cipher      |     Cipher to encrypt cache (Default: 'AES').                                                                                                | Retention   |
| --warning-usage         |     Threshold warning.                                                                                                                       | Mode        |
| --critical-usage        |     Threshold critical.                                                                                                                      | Mode        |
| --warning-access        |     Threshold warning.                                                                                                                       | Mode        |
| --critical-access       |     Threshold critical. Check if storage is readOnly: --critical-access=readOnly                                                             | Mode        |
| --add-access            |     Check storage access (readOnly, readWrite).                                                                                              | Mode        |
| --units                 |     Units of thresholds (Default: '%') ('%', 'B').                                                                                           | Mode        |
| --free                  |     Thresholds are on free space left.                                                                                                       | Mode        |
| --storage               |     Set the storage (number expected) ex: 1, 2,... (empty means 'check all storage').                                                        | Mode        |
| --name                  |     Allows to use storage name with option --storage instead ofstorage oid index.                                                            | Mode        |
| --regexp                |     Allows to use regexp to filter storage (with option --name).                                                                             | Mode        |
| --regexp-isensitive     |     Allows to use regexp non case-sensitive (with --regexp).                                                                                 | Mode        |
| --path-best-match       |     Allows to select best path mount point (with --name).                                                                                    | Mode        |
| --reload-cache-time     |     Time in minutes before reloading cache file (default: 180).                                                                              | Mode        |
| --oid-filter            |     Choose OID used to filter storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                    | Mode        |
| --oid-display           |     Choose OID used to display storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                   | Mode        |
| --display-transform-src |     Regexp src to transform display value. (security risk!!!)                                                                                | Mode        |
| --display-transform-dst |     Regexp dst to transform display value. (security risk!!!)                                                                                | Mode        |
| --show-cache            |     Display cache storage datas.                                                                                                             | Mode        |
| --space-reservation     |     Some filesystem has space reserved (like ext4 for root). The value is in percent of total (Default: none) (results like 'df' command).   | Mode        |
| --filter-duplicate      |     Filter duplicate storages (in used size and total size).                                                                                 | Mode        |
| --filter-storage-type   |     Filter storage types with a regexp (Default: '^(hrStorageFixedDisk\|hrStorageNetworkDisk\|hrFSBerkeleyFFS)$').                           | Mode        |

</TabItem>
<TabItem value="Disk-Generic-Id" label="Disk-Generic-Id">

| Option                  | Description                                                                                                                                  | Option type |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached             |     Memcached server to use (only one server).                                                                                               | Retention   |
| --redis-server          |     Redis server to use (only one server). SYntax: address\[:port\]                                                                          | Retention   |
| --redis-attribute       |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                  | Retention   |
| --redis-db              |     Set Redis database index.                                                                                                                | Retention   |
| --failback-file         |     Failback on a local file if redis connection failed.                                                                                     | Retention   |
| --memexpiration         |     Time to keep data in seconds (Default: 86400).                                                                                           | Retention   |
| --statefile-dir         |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                      | Retention   |
| --statefile-suffix      |     Add a suffix for the statefile name (Default: '').                                                                                       | Retention   |
| --statefile-concat-cwd  |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                               | Retention   |
| --statefile-format      |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                       | Retention   |
| --statefile-key         |     Key to encrypt/decrypt cache.                                                                                                            | Retention   |
| --statefile-cipher      |     Cipher to encrypt cache (Default: 'AES').                                                                                                | Retention   |
| --warning-usage         |     Threshold warning.                                                                                                                       | Mode        |
| --critical-usage        |     Threshold critical.                                                                                                                      | Mode        |
| --warning-access        |     Threshold warning.                                                                                                                       | Mode        |
| --critical-access       |     Threshold critical. Check if storage is readOnly: --critical-access=readOnly                                                             | Mode        |
| --add-access            |     Check storage access (readOnly, readWrite).                                                                                              | Mode        |
| --units                 |     Units of thresholds (Default: '%') ('%', 'B').                                                                                           | Mode        |
| --free                  |     Thresholds are on free space left.                                                                                                       | Mode        |
| --storage               |     Set the storage (number expected) ex: 1, 2,... (empty means 'check all storage').                                                        | Mode        |
| --name                  |     Allows to use storage name with option --storage instead ofstorage oid index.                                                            | Mode        |
| --regexp                |     Allows to use regexp to filter storage (with option --name).                                                                             | Mode        |
| --regexp-isensitive     |     Allows to use regexp non case-sensitive (with --regexp).                                                                                 | Mode        |
| --path-best-match       |     Allows to select best path mount point (with --name).                                                                                    | Mode        |
| --reload-cache-time     |     Time in minutes before reloading cache file (default: 180).                                                                              | Mode        |
| --oid-filter            |     Choose OID used to filter storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                    | Mode        |
| --oid-display           |     Choose OID used to display storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                   | Mode        |
| --display-transform-src |     Regexp src to transform display value. (security risk!!!)                                                                                | Mode        |
| --display-transform-dst |     Regexp dst to transform display value. (security risk!!!)                                                                                | Mode        |
| --show-cache            |     Display cache storage datas.                                                                                                             | Mode        |
| --space-reservation     |     Some filesystem has space reserved (like ext4 for root). The value is in percent of total (Default: none) (results like 'df' command).   | Mode        |
| --filter-duplicate      |     Filter duplicate storages (in used size and total size).                                                                                 | Mode        |
| --filter-storage-type   |     Filter storage types with a regexp (Default: '^(hrStorageFixedDisk\|hrStorageNetworkDisk\|hrFSBerkeleyFFS)$').                           | Mode        |

</TabItem>
<TabItem value="Disk-Generic-Name" label="Disk-Generic-Name">

| Option                  | Description                                                                                                                                  | Option type |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached             |     Memcached server to use (only one server).                                                                                               | Retention   |
| --redis-server          |     Redis server to use (only one server). SYntax: address\[:port\]                                                                          | Retention   |
| --redis-attribute       |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                  | Retention   |
| --redis-db              |     Set Redis database index.                                                                                                                | Retention   |
| --failback-file         |     Failback on a local file if redis connection failed.                                                                                     | Retention   |
| --memexpiration         |     Time to keep data in seconds (Default: 86400).                                                                                           | Retention   |
| --statefile-dir         |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                      | Retention   |
| --statefile-suffix      |     Add a suffix for the statefile name (Default: '').                                                                                       | Retention   |
| --statefile-concat-cwd  |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                               | Retention   |
| --statefile-format      |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                       | Retention   |
| --statefile-key         |     Key to encrypt/decrypt cache.                                                                                                            | Retention   |
| --statefile-cipher      |     Cipher to encrypt cache (Default: 'AES').                                                                                                | Retention   |
| --warning-usage         |     Threshold warning.                                                                                                                       | Mode        |
| --critical-usage        |     Threshold critical.                                                                                                                      | Mode        |
| --warning-access        |     Threshold warning.                                                                                                                       | Mode        |
| --critical-access       |     Threshold critical. Check if storage is readOnly: --critical-access=readOnly                                                             | Mode        |
| --add-access            |     Check storage access (readOnly, readWrite).                                                                                              | Mode        |
| --units                 |     Units of thresholds (Default: '%') ('%', 'B').                                                                                           | Mode        |
| --free                  |     Thresholds are on free space left.                                                                                                       | Mode        |
| --storage               |     Set the storage (number expected) ex: 1, 2,... (empty means 'check all storage').                                                        | Mode        |
| --name                  |     Allows to use storage name with option --storage instead ofstorage oid index.                                                            | Mode        |
| --regexp                |     Allows to use regexp to filter storage (with option --name).                                                                             | Mode        |
| --regexp-isensitive     |     Allows to use regexp non case-sensitive (with --regexp).                                                                                 | Mode        |
| --path-best-match       |     Allows to select best path mount point (with --name).                                                                                    | Mode        |
| --reload-cache-time     |     Time in minutes before reloading cache file (default: 180).                                                                              | Mode        |
| --oid-filter            |     Choose OID used to filter storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                    | Mode        |
| --oid-display           |     Choose OID used to display storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                   | Mode        |
| --display-transform-src |     Regexp src to transform display value. (security risk!!!)                                                                                | Mode        |
| --display-transform-dst |     Regexp dst to transform display value. (security risk!!!)                                                                                | Mode        |
| --show-cache            |     Display cache storage datas.                                                                                                             | Mode        |
| --space-reservation     |     Some filesystem has space reserved (like ext4 for root). The value is in percent of total (Default: none) (results like 'df' command).   | Mode        |
| --filter-duplicate      |     Filter duplicate storages (in used size and total size).                                                                                 | Mode        |
| --filter-storage-type   |     Filter storage types with a regexp (Default: '^(hrStorageFixedDisk\|hrStorageNetworkDisk\|hrFSBerkeleyFFS)$').                           | Mode        |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Option                 | Description                                                                                                                                                                                | Option type |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached            |     Memcached server to use (only one server).                                                                                                                                             | Retention   |
| --redis-server         |     Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                        | Retention   |
| --redis-attribute      |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                | Retention   |
| --redis-db             |     Set Redis database index.                                                                                                                                                              | Retention   |
| --failback-file        |     Failback on a local file if redis connection failed.                                                                                                                                   | Retention   |
| --memexpiration        |     Time to keep data in seconds (Default: 86400).                                                                                                                                         | Retention   |
| --statefile-dir        |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                    | Retention   |
| --statefile-suffix     |     Add a suffix for the statefile name (Default: '').                                                                                                                                     | Retention   |
| --statefile-concat-cwd |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                             | Retention   |
| --statefile-format     |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                     | Retention   |
| --statefile-key        |     Key to encrypt/decrypt cache.                                                                                                                                                          | Retention   |
| --statefile-cipher     |     Cipher to encrypt cache (Default: 'AES').                                                                                                                                              | Retention   |
| --warning-*            |     Threshold warning. Can be: 'read', 'write', 'read-iops', 'write-iops', 'total-read', 'total-write', 'total-read-iops', 'total-write-iops', 'sum-read-write', 'sum-read-write-iops'.    | Mode        |
| --critical-*           |     Threshold critical. Can be: 'read', 'write', 'read-iops', 'write-iops', 'total-read', 'total-write', 'total-read-iops', 'total-write-iops', 'sum-read-write', 'sum-read-write-iops'.   | Mode        |
| --device               |     Set the device (number expected) ex: 1, 2,... (empty means 'check all devices').                                                                                                       | Mode        |
| --name                 |     Allows to use device name with option --device instead of devoceoid index.                                                                                                             | Mode        |
| --regexp               |     Allows to use regexp to filter devices (with option --name).                                                                                                                           | Mode        |
| --regexp-isensitive    |     Allows to use regexp non case-sensitive (with --regexp).                                                                                                                               | Mode        |

</TabItem>
<TabItem value="Inodes-*" label="Inodes-*">

| Option                  | Description                                                                                  | Option type |
|:------------------------|:---------------------------------------------------------------------------------------------|:------------|
| --warning-usage         |     Threshold warning in percent.                                                            | Mode        |
| --critical-usage        |     Threshold critical in percent.                                                           | Mode        |
| --diskpath              |     Set the disk path (number expected) ex: 1, 2,... (empty means 'check all disks path').   | Mode        |
| --name                  |     Allows to use disk path name with option --diskpath instead ofdisk path oid index.       | Mode        |
| --regexp                |     Allows to use regexp to filter diskpath (with option --name).                            | Mode        |
| --regexp-isensitive     |     Allows to use regexp non case-sensitive (with --regexp).                                 | Mode        |
| --display-transform-src |     Regexp src to transform display value. (security risk!!!)                                | Mode        |
| --display-transform-dst |     Regexp dst to transform display value. (security risk!!!)                                | Mode        |
| --filter-device         |     Filter devices by name (regexp).                                                         | Mode        |
| --filter-path           |     Filter devices by path (regexp).                                                         | Mode        |

</TabItem>
<TabItem value="Load" label="Load">

| Option     | Description                                 | Option type |
|:-----------|:--------------------------------------------|:------------|
| --warning  |     Threshold warning (1min,5min,15min).    | Mode        |
| --critical |     Threshold critical (1min,5min,15min).   | Mode        |
| --average  |     Load average for the number of CPUs.    | Mode        |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                                                                                                                                                                                                                                              | Option type |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --units                  |     Units of thresholds (Default: '%') ('%', 'absolute')(Deprecated. Please use new counters directly)                                                                                                                                                                                                   | Mode        |
| --free                   |     Thresholds are on free space left (Deprecated. Please use newcounters directly)                                                                                                                                                                                                                      | Mode        |
| --swap                   |     Check swap also.                                                                                                                                                                                                                                                                                     | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'swap' (B), 'swap-free' (B), 'swap-prct' (%), 'buffer' (B), 'cached' (B), 'shared' (B).                                                                                                                                         | Mode        |
| --patch-redhat           |     If using RedHat distribution with net-snmp \>= 5.7.2-43 and net-snmp \< 5.7.2-47. But you should update net-snmp!!!!  This version: used = memTotalReal - memAvailReal // free = memAvailReal  Others versions: used = memTotalReal - memAvailReal - memBuffer - memCached // free = total - used    | Mode        |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option            | Description                                                                                                             | Option type |
|:------------------|:------------------------------------------------------------------------------------------------------------------------|:------------|
| --oid             |     Override default OID.                                                                                               | Mode        |
| --warning-offset  |     Time offset warning threshold (in seconds).                                                                         | Mode        |
| --critical-offset |     Time offset critical Threshold (in seconds).                                                                        | Mode        |
| --ntp-hostname    |     Set the ntp hostname (if not set, localtime is used).                                                               | Mode        |
| --ntp-port        |     Set the ntp port (Default: 123).                                                                                    | Mode        |
| --timezone        |     Set the timezone of distant server. For Windows, you need to set it. Can use format: 'Europe/London' or '+0100'.    | Mode        |

</TabItem>
<TabItem value="Packet-Errors-*" label="Packet-Errors-*">

| Option                   | Description                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached              |     Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention   |
| --redis-server           |     Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                                                                                                                            | Retention   |
| --redis-attribute        |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    | Retention   |
| --redis-db               |     Set Redis database index.                                                                                                                                                                                                                                                                  | Retention   |
| --failback-file          |     Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       | Retention   |
| --memexpiration          |     Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             | Retention   |
| --statefile-dir          |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        | Retention   |
| --statefile-suffix       |     Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         | Retention   |
| --statefile-concat-cwd   |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 | Retention   |
| --statefile-format       |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         | Retention   |
| --statefile-key          |     Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              | Retention   |
| --statefile-cipher       |     Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  | Retention   |
| --add-global             |     Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     | Mode        |
| --add-status             |     Check interface status.                                                                                                                                                                                                                                                                    | Mode        |
| --add-duplex-status      |     Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         | Mode        |
| --add-traffic            |     Check interface traffic.                                                                                                                                                                                                                                                                   | Mode        |
| --add-errors             |     Check interface errors.                                                                                                                                                                                                                                                                    | Mode        |
| --add-cast               |     Check interface cast.                                                                                                                                                                                                                                                                      | Mode        |
| --add-speed              |     Check interface speed.                                                                                                                                                                                                                                                                     | Mode        |
| --add-volume             |     Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      | Mode        |
| --check-metrics          |     If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           | Mode        |
| --warning-status         |     Set warning threshold for status. Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                  | Mode        |
| --critical-status        |     Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode        |
| --units-traffic          |     Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode        |
| --units-errors           |     Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                     | Mode        |
| --units-cast             |     Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                 | Mode        |
| --nagvis-perfdata        |     Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode        |
| --interface              |     Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                       | Mode        |
| --name                   |     Allows to use interface name with option --interface instead ofinterface oid index (Can be a regexp)                                                                                                                                                                                       | Mode        |
| --speed                  |     Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode        |
| --speed-in               |     Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --speed-out              |     Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --map-speed-dsl          |     Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode        |
| --force-counters64       |     Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode        |
| --force-counters32       |     Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode        |
| --reload-cache-time      |     Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode        |
| --oid-filter             |     Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           | Mode        |
| --oid-display            |     Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          | Mode        |
| --oid-extra-display      |     Add an OID to display.                                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-src  |     Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-dst  |     Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --show-cache             |     Display cache interface datas.                                                                                                                                                                                                                                                             | Mode        |

</TabItem>
<TabItem value="Packet-Errors-Generic-Id" label="Packet-Errors-Generic-Id">

| Option                   | Description                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached              |     Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention   |
| --redis-server           |     Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                                                                                                                            | Retention   |
| --redis-attribute        |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    | Retention   |
| --redis-db               |     Set Redis database index.                                                                                                                                                                                                                                                                  | Retention   |
| --failback-file          |     Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       | Retention   |
| --memexpiration          |     Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             | Retention   |
| --statefile-dir          |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        | Retention   |
| --statefile-suffix       |     Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         | Retention   |
| --statefile-concat-cwd   |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 | Retention   |
| --statefile-format       |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         | Retention   |
| --statefile-key          |     Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              | Retention   |
| --statefile-cipher       |     Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  | Retention   |
| --add-global             |     Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     | Mode        |
| --add-status             |     Check interface status.                                                                                                                                                                                                                                                                    | Mode        |
| --add-duplex-status      |     Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         | Mode        |
| --add-traffic            |     Check interface traffic.                                                                                                                                                                                                                                                                   | Mode        |
| --add-errors             |     Check interface errors.                                                                                                                                                                                                                                                                    | Mode        |
| --add-cast               |     Check interface cast.                                                                                                                                                                                                                                                                      | Mode        |
| --add-speed              |     Check interface speed.                                                                                                                                                                                                                                                                     | Mode        |
| --add-volume             |     Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      | Mode        |
| --check-metrics          |     If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           | Mode        |
| --warning-status         |     Set warning threshold for status. Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                  | Mode        |
| --critical-status        |     Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode        |
| --units-traffic          |     Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode        |
| --units-errors           |     Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                     | Mode        |
| --units-cast             |     Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                 | Mode        |
| --nagvis-perfdata        |     Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode        |
| --interface              |     Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                       | Mode        |
| --name                   |     Allows to use interface name with option --interface instead ofinterface oid index (Can be a regexp)                                                                                                                                                                                       | Mode        |
| --speed                  |     Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode        |
| --speed-in               |     Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --speed-out              |     Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --map-speed-dsl          |     Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode        |
| --force-counters64       |     Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode        |
| --force-counters32       |     Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode        |
| --reload-cache-time      |     Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode        |
| --oid-filter             |     Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           | Mode        |
| --oid-display            |     Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          | Mode        |
| --oid-extra-display      |     Add an OID to display.                                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-src  |     Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-dst  |     Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --show-cache             |     Display cache interface datas.                                                                                                                                                                                                                                                             | Mode        |

</TabItem>
<TabItem value="Packet-Errors-Generic-Name" label="Packet-Errors-Generic-Name">

| Option                   | Description                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached              |     Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention   |
| --redis-server           |     Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                                                                                                                            | Retention   |
| --redis-attribute        |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    | Retention   |
| --redis-db               |     Set Redis database index.                                                                                                                                                                                                                                                                  | Retention   |
| --failback-file          |     Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       | Retention   |
| --memexpiration          |     Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             | Retention   |
| --statefile-dir          |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        | Retention   |
| --statefile-suffix       |     Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         | Retention   |
| --statefile-concat-cwd   |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 | Retention   |
| --statefile-format       |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         | Retention   |
| --statefile-key          |     Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              | Retention   |
| --statefile-cipher       |     Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  | Retention   |
| --add-global             |     Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     | Mode        |
| --add-status             |     Check interface status.                                                                                                                                                                                                                                                                    | Mode        |
| --add-duplex-status      |     Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         | Mode        |
| --add-traffic            |     Check interface traffic.                                                                                                                                                                                                                                                                   | Mode        |
| --add-errors             |     Check interface errors.                                                                                                                                                                                                                                                                    | Mode        |
| --add-cast               |     Check interface cast.                                                                                                                                                                                                                                                                      | Mode        |
| --add-speed              |     Check interface speed.                                                                                                                                                                                                                                                                     | Mode        |
| --add-volume             |     Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      | Mode        |
| --check-metrics          |     If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           | Mode        |
| --warning-status         |     Set warning threshold for status. Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                  | Mode        |
| --critical-status        |     Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode        |
| --units-traffic          |     Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode        |
| --units-errors           |     Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                     | Mode        |
| --units-cast             |     Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                 | Mode        |
| --nagvis-perfdata        |     Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode        |
| --interface              |     Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                       | Mode        |
| --name                   |     Allows to use interface name with option --interface instead ofinterface oid index (Can be a regexp)                                                                                                                                                                                       | Mode        |
| --speed                  |     Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode        |
| --speed-in               |     Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --speed-out              |     Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --map-speed-dsl          |     Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode        |
| --force-counters64       |     Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode        |
| --force-counters32       |     Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode        |
| --reload-cache-time      |     Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode        |
| --oid-filter             |     Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           | Mode        |
| --oid-display            |     Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          | Mode        |
| --oid-extra-display      |     Add an OID to display.                                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-src  |     Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-dst  |     Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --show-cache             |     Display cache interface datas.                                                                                                                                                                                                                                                             | Mode        |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Option                 | Description                                                                                                                                                                                  | Option type |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached            |     Memcached server to use (only one server).                                                                                                                                               | Retention   |
| --redis-server         |     Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                          | Retention   |
| --redis-attribute      |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                  | Retention   |
| --redis-db             |     Set Redis database index.                                                                                                                                                                | Retention   |
| --failback-file        |     Failback on a local file if redis connection failed.                                                                                                                                     | Retention   |
| --memexpiration        |     Time to keep data in seconds (Default: 86400).                                                                                                                                           | Retention   |
| --statefile-dir        |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                      | Retention   |
| --statefile-suffix     |     Add a suffix for the statefile name (Default: '').                                                                                                                                       | Retention   |
| --statefile-concat-cwd |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                               | Retention   |
| --statefile-format     |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                       | Retention   |
| --statefile-key        |     Key to encrypt/decrypt cache.                                                                                                                                                            | Retention   |
| --statefile-cipher     |     Cipher to encrypt cache (Default: 'AES').                                                                                                                                                | Retention   |
| --process-status       |     Filter process status. Can be a regexp. (Default: 'running\|runnable').                                                                                                                  | Mode        |
| --process-name         |     Filter process name.                                                                                                                                                                     | Mode        |
| --regexp-name          |     Allows to use regexp to filter process name (with option --process-name).                                                                                                                | Mode        |
| --process-path         |     Filter process path.                                                                                                                                                                     | Mode        |
| --regexp-path          |     Allows to use regexp to filter process path (with option --process-path).                                                                                                                | Mode        |
| --process-args         |     Filter process arguments.                                                                                                                                                                | Mode        |
| --regexp-args          |     Allows to use regexp to filter process arguments (with option --process-args).                                                                                                           | Mode        |
| --warning              |     Threshold warning of matching processes count.                                                                                                                                           | Mode        |
| --critical             |     Threshold critical of matching processes count.                                                                                                                                          | Mode        |
| --memory               |     Check memory usage.                                                                                                                                                                      | Mode        |
| --warning-mem-each     |     Threshold warning of memory used by each matching processes (in Bytes).                                                                                                                  | Mode        |
| --critical-mem-each    |     Threshold critical of memory used by each matching processes (in Bytes).                                                                                                                 | Mode        |
| --warning-mem-total    |     Threshold warning of total memory used by matching processes (in Bytes).                                                                                                                 | Mode        |
| --critical-mem-total   |     Threshold critical of total memory used by matching processes (in Bytes).                                                                                                                | Mode        |
| --warning-mem-avg      |     Threshold warning of average memory used by matching processes (in Bytes).                                                                                                               | Mode        |
| --critical-mem-avg     |     Threshold critical of average memory used by matching processes (in Bytes).                                                                                                              | Mode        |
| --cpu                  |     Check cpu usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                   | Mode        |
| --warning-cpu-total    |     Threshold warning of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.    | Mode        |
| --critical-cpu-total   |     Threshold critical of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.   | Mode        |
| --top                  |     Enable top memory usage display.                                                                                                                                                         | Mode        |
| --top-num              |     Number of processes in top memory display (Default: 5).                                                                                                                                  | Mode        |
| --top-size             |     Minimum memory usage to be in top memory display (Default: 52428800 -\> 50 MB).                                                                                                          | Mode        |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                   | Description                                                                 | Option type |
|:-------------------------|:----------------------------------------------------------------------------|:------------|
| --no-swap                |     Threshold if no active swap (default: 'critical').                      | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).    | Mode        |

</TabItem>
<TabItem value="Tcpcon-Generic" label="Tcpcon-Generic">

| Option        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Option type |
|:--------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --warning     |     Threshold warning for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Mode        |
| --critical    |     Threshold critical for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Mode        |
| --service     |     Check tcp connections following rules: tag,\[type\],\[state\],\[port-src\],\[port-dst\],\[filter-ip-src\],\[filter -ip-dst\],\[threshold-warning\],\[threshold-critical\]  Example to test SSH connections on the server: --service="ssh,,,22,,,,10,20"  \<tag\>           Name to identify service (must be unique and     couldn't be 'total').  \<type\>          regexp - can use 'ipv4', 'ipv6'. Empty means     all.  \<state\>         regexp - can use 'finWait1', 'established',...     Empty means all (minus listen).  \<filter-ip-*\>   regexp - can use to exclude or include some IPs.  \<threshold-*\>   nagios-perfdata - number of connections.   | Mode        |
| --application |     Check tcp connections of mutiple services: tag,\[services\],\[threshold-warning\],\[threshold-critical\]  Example: --application="web,http\|https,100,200"  \<tag\>           Name to identify application (must be unique).  \<services\>      List of services (used the tag name. Separated     by '\|').  \<threshold-*\>   nagios-perfdata - number of connections.                                                                                                                                                                                                                                                                                           | Mode        |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Option                   | Description                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached              |     Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention   |
| --redis-server           |     Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                                                                                                                            | Retention   |
| --redis-attribute        |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    | Retention   |
| --redis-db               |     Set Redis database index.                                                                                                                                                                                                                                                                  | Retention   |
| --failback-file          |     Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       | Retention   |
| --memexpiration          |     Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             | Retention   |
| --statefile-dir          |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        | Retention   |
| --statefile-suffix       |     Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         | Retention   |
| --statefile-concat-cwd   |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 | Retention   |
| --statefile-format       |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         | Retention   |
| --statefile-key          |     Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              | Retention   |
| --statefile-cipher       |     Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  | Retention   |
| --add-global             |     Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     | Mode        |
| --add-status             |     Check interface status.                                                                                                                                                                                                                                                                    | Mode        |
| --add-duplex-status      |     Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         | Mode        |
| --add-traffic            |     Check interface traffic.                                                                                                                                                                                                                                                                   | Mode        |
| --add-errors             |     Check interface errors.                                                                                                                                                                                                                                                                    | Mode        |
| --add-cast               |     Check interface cast.                                                                                                                                                                                                                                                                      | Mode        |
| --add-speed              |     Check interface speed.                                                                                                                                                                                                                                                                     | Mode        |
| --add-volume             |     Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      | Mode        |
| --check-metrics          |     If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           | Mode        |
| --warning-status         |     Set warning threshold for status. Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                  | Mode        |
| --critical-status        |     Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode        |
| --units-traffic          |     Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode        |
| --units-errors           |     Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                     | Mode        |
| --units-cast             |     Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                 | Mode        |
| --nagvis-perfdata        |     Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode        |
| --interface              |     Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                       | Mode        |
| --name                   |     Allows to use interface name with option --interface instead ofinterface oid index (Can be a regexp)                                                                                                                                                                                       | Mode        |
| --speed                  |     Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode        |
| --speed-in               |     Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --speed-out              |     Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --map-speed-dsl          |     Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode        |
| --force-counters64       |     Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode        |
| --force-counters32       |     Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode        |
| --reload-cache-time      |     Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode        |
| --oid-filter             |     Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           | Mode        |
| --oid-display            |     Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          | Mode        |
| --oid-extra-display      |     Add an OID to display.                                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-src  |     Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-dst  |     Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --show-cache             |     Display cache interface datas.                                                                                                                                                                                                                                                             | Mode        |

</TabItem>
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Option                   | Description                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached              |     Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention   |
| --redis-server           |     Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                                                                                                                            | Retention   |
| --redis-attribute        |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    | Retention   |
| --redis-db               |     Set Redis database index.                                                                                                                                                                                                                                                                  | Retention   |
| --failback-file          |     Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       | Retention   |
| --memexpiration          |     Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             | Retention   |
| --statefile-dir          |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        | Retention   |
| --statefile-suffix       |     Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         | Retention   |
| --statefile-concat-cwd   |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 | Retention   |
| --statefile-format       |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         | Retention   |
| --statefile-key          |     Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              | Retention   |
| --statefile-cipher       |     Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  | Retention   |
| --add-global             |     Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     | Mode        |
| --add-status             |     Check interface status.                                                                                                                                                                                                                                                                    | Mode        |
| --add-duplex-status      |     Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         | Mode        |
| --add-traffic            |     Check interface traffic.                                                                                                                                                                                                                                                                   | Mode        |
| --add-errors             |     Check interface errors.                                                                                                                                                                                                                                                                    | Mode        |
| --add-cast               |     Check interface cast.                                                                                                                                                                                                                                                                      | Mode        |
| --add-speed              |     Check interface speed.                                                                                                                                                                                                                                                                     | Mode        |
| --add-volume             |     Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      | Mode        |
| --check-metrics          |     If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           | Mode        |
| --warning-status         |     Set warning threshold for status. Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                  | Mode        |
| --critical-status        |     Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode        |
| --units-traffic          |     Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode        |
| --units-errors           |     Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                     | Mode        |
| --units-cast             |     Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                 | Mode        |
| --nagvis-perfdata        |     Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode        |
| --interface              |     Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                       | Mode        |
| --name                   |     Allows to use interface name with option --interface instead ofinterface oid index (Can be a regexp)                                                                                                                                                                                       | Mode        |
| --speed                  |     Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode        |
| --speed-in               |     Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --speed-out              |     Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --map-speed-dsl          |     Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode        |
| --force-counters64       |     Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode        |
| --force-counters32       |     Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode        |
| --reload-cache-time      |     Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode        |
| --oid-filter             |     Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           | Mode        |
| --oid-display            |     Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          | Mode        |
| --oid-extra-display      |     Add an OID to display.                                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-src  |     Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-dst  |     Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --show-cache             |     Display cache interface datas.                                                                                                                                                                                                                                                             | Mode        |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Option                   | Description                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached              |     Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention   |
| --redis-server           |     Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                                                                                                                            | Retention   |
| --redis-attribute        |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    | Retention   |
| --redis-db               |     Set Redis database index.                                                                                                                                                                                                                                                                  | Retention   |
| --failback-file          |     Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       | Retention   |
| --memexpiration          |     Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             | Retention   |
| --statefile-dir          |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        | Retention   |
| --statefile-suffix       |     Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         | Retention   |
| --statefile-concat-cwd   |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 | Retention   |
| --statefile-format       |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         | Retention   |
| --statefile-key          |     Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              | Retention   |
| --statefile-cipher       |     Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  | Retention   |
| --add-global             |     Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     | Mode        |
| --add-status             |     Check interface status.                                                                                                                                                                                                                                                                    | Mode        |
| --add-duplex-status      |     Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         | Mode        |
| --add-traffic            |     Check interface traffic.                                                                                                                                                                                                                                                                   | Mode        |
| --add-errors             |     Check interface errors.                                                                                                                                                                                                                                                                    | Mode        |
| --add-cast               |     Check interface cast.                                                                                                                                                                                                                                                                      | Mode        |
| --add-speed              |     Check interface speed.                                                                                                                                                                                                                                                                     | Mode        |
| --add-volume             |     Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      | Mode        |
| --check-metrics          |     If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           | Mode        |
| --warning-status         |     Set warning threshold for status. Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                  | Mode        |
| --critical-status        |     Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode        |
| --units-traffic          |     Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode        |
| --units-errors           |     Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                     | Mode        |
| --units-cast             |     Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                 | Mode        |
| --nagvis-perfdata        |     Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode        |
| --interface              |     Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                       | Mode        |
| --name                   |     Allows to use interface name with option --interface instead ofinterface oid index (Can be a regexp)                                                                                                                                                                                       | Mode        |
| --speed                  |     Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode        |
| --speed-in               |     Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --speed-out              |     Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --map-speed-dsl          |     Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode        |
| --force-counters64       |     Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode        |
| --force-counters32       |     Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode        |
| --reload-cache-time      |     Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode        |
| --oid-filter             |     Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           | Mode        |
| --oid-display            |     Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          | Mode        |
| --oid-extra-display      |     Add an OID to display.                                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-src  |     Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-dst  |     Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --show-cache             |     Display cache interface datas.                                                                                                                                                                                                                                                             | Mode        |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option                 | Description                                                                                                                                                        | Option type |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached            |     Memcached server to use (only one server).                                                                                                                     | Retention   |
| --redis-server         |     Redis server to use (only one server). SYntax: address\[:port\]                                                                                                | Retention   |
| --redis-attribute      |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                        | Retention   |
| --redis-db             |     Set Redis database index.                                                                                                                                      | Retention   |
| --failback-file        |     Failback on a local file if redis connection failed.                                                                                                           | Retention   |
| --memexpiration        |     Time to keep data in seconds (Default: 86400).                                                                                                                 | Retention   |
| --statefile-dir        |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                            | Retention   |
| --statefile-suffix     |     Add a suffix for the statefile name (Default: '').                                                                                                             | Retention   |
| --statefile-concat-cwd |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                     | Retention   |
| --statefile-format     |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                             | Retention   |
| --statefile-key        |     Key to encrypt/decrypt cache.                                                                                                                                  | Retention   |
| --statefile-cipher     |     Cipher to encrypt cache (Default: 'AES').                                                                                                                      | Retention   |
| --warning-uptime       |     Threshold warning.                                                                                                                                             | Mode        |
| --critical-uptime      |     Threshold critical.                                                                                                                                            | Mode        |
| --add-sysdesc          |     Display system description.                                                                                                                                    | Mode        |
| --force-oid            |     Can choose your oid (numeric format only).                                                                                                                     | Mode        |
| --check-overload       |     Uptime counter limit is 4294967296 and overflow. With that option, we manage the counter going back. But there is a few chance we can miss a reboot.           | Mode        |
| --reboot-window        |     To be used with check-overload option. Time in milliseconds (Default: 5000) You increase the chance of not missing a reboot if you decrease that value.        | Mode        |
| --unit                 |     Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds    | Mode        |

</TabItem>
</Tabs>


Pour un mode, la liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --mode=swap \
    --help
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
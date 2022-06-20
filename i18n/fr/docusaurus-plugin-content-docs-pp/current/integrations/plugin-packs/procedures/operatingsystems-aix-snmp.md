---
id: operatingsystems-aix-snmp
title: AIX SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **AIX SNMP** apporte un modèle d'hôte :

* OS-AIX-SNMP-custom

Il apporte les modèles de service suivants :

| Alias                | Modèle de service                | Description                                                                                                                                                                  | Défaut | Découverte |
|:---------------------|:---------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|:-----------|
| Cpu                  | OS-AIX-Cpu-SNMP                  | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur | X      |            |
| Disk-Generic-Id      | OS-AIX-Disk-Generic-Id-SNMP      | Contrôle du taux d'espace libre disponible du disque. Pour chaque contrôle apparaîtra le nom du disque                                                                       |        |            |
| Disk-Generic-Name    | OS-AIX-Disk-Generic-Name-SNMP    | Contrôle du taux d'espace libre disponible du disque. Pour chaque contrôle apparaîtra le point de montage du disque                                                          |        |            |
| Disk-Global          | OS-AIX-Disk-Global-SNMP          | Contrôle du taux d'espace libre disponible des disques. Pour chaque contrôle apparaîtra le point de montage des disques                                                      |        | X          |
| Process-Generic      | OS-AIX-Process-Generic-SNMP      | Contrôle permettant de vérifier le fonctionnement d'un processus                                                                                                             |        | X          |
| Swap                 | OS-AIX-Swap-SNMP                 | Contrôle du taux d'utilisation de la mémoire virtuelle                                                                                                                       | X      |            |
| Time                 | OS-AIX-Time-SNMP                 | Contrôle de la synchronisation NTP                                                                                                                                           | X      |            |
| Traffic-Generic-Id   | OS-AIX-Traffic-Generic-Id-SNMP   | Contrôle de la bande passante de l'interface. Pour chaque contrôle apparaîtra le nom de l'interface                                                                          |        |            |
| Traffic-Generic-Name | OS-AIX-Traffic-Generic-Name-SNMP | Contrôle de la bande passante de l'interface. Pour chaque contrôle apparaîtra le nom de l'interface                                                                          |        |            |
| Traffic-Global       | OS-AIX-Traffic-Global-SNMP       | Contrôle de la bande passante des interfaces. Pour chaque contrôle apparaîtra le nom de l'interface                                                                          |        | X          |

### Règles de découverte

| Nom de la règle            | Description                                                   |
|:---------------------------|:--------------------------------------------------------------|
| OS-AIX-SNMP-Traffic-Name   | Discover network interfaces and monitor bandwidth utilization |
| OS-AIX-SNMP-Disk-Name      | Discover the disk partitions and monitor space occupation     |
| OS-AIX-SNMP-Processes-Name | Discover processes and monitor their system usage             |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

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
<TabItem value="Disk-Global" label="Disk-Global">

| Métrique                            | Unité |
|:------------------------------------|:------|
| storage.partitions.count            | count |
| *storage*#storage.access.count      | count |
| *storage*#storage.space.usage.bytes | bytes |

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

| Métrique                      | Unité |
|:------------------------------|:------|
| page.space.active.count       | count |
| page.space.usage.bytes        | B     |
| *swap*#page.space.usage.bytes | B     |

</TabItem>
<TabItem value="Time" label="Time">

| Métrique            | Unité |
|:--------------------|:------|
| time.offset.seconds | s     |

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
<TabItem value="Traffic-Global" label="Traffic-Global">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **AIX SNMP** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* [IBM-AIX](https://www.ibm.com/support/pages/ibm-aix-how-configure-community-based-snmp-and-snmp-traps)

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **AIX SNMP** :

```bash
yum install centreon-plugin-Operatingsystems-Aix-Snmp
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **AIX SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **AIX SNMP** :

```bash
yum install centreon-plugin-Operatingsystems-Aix-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **AIX SNMP** :

```bash
yum install centreon-pack-operatingsystems-aix-snmp
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **AIX SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **AIX SNMP**.
* Appliquez le modèle d'hôte **OS-AIX-SNMP-custom**.

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres
spécifiques associés via la macro **SNMPEXTRAOPTIONS**.

| Obligatoire | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_aix_snmp.pl \
    --plugin=os::aix::snmp::plugin \
    --mode=cpu \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-average='-5:5' \
    --critical-average='-10:10' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: %.2f %% usage : %.2f %% | 'cpu.utilization.percentage'=9000%;;;0;100 'core.cpu.utilization.percentage'=9000%;;;0;100 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_aix_snmp.pl \
    --plugin=os::aix::snmp::plugin \
    --mode=cpu \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_aix_snmp.pl \
    --plugin=os::aix::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
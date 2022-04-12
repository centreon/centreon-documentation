---
id: virtualization-nutanix-snmp
title: Nutanix
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Nutanix** apporte 4 modèles d'hôte différents :

* Virt-Nutanix-SNMP-custom
* Virt-Nutanix-VM-SNMP-custom
* Virt-Nutanix-Hypervisor-SNMP-custom
* Virt-Nutanix-Container-SNMP-custom

Il apporte les modèles de service suivants :

| Alias              | Modèle de service                     | Description                                                                      | Défaut | Découverte |
|:-------------------|:--------------------------------------|:---------------------------------------------------------------------------------|:-------|:-----------|
| Cluster-Usage      | Virt-Nutanix-Cluster-Usage-SNMP       | Contrôle l'utilisation du cluster                                                | X      |            |
| Iops               | Virt-Nutanix-Container-Iops-SNMP      | Contrôle les opérations de lecture et d'écriture des containers Nutanix          | X      |            |
| Latency            | Virt-Nutanix-Container-Latency-SNMP   | Contrôle la latence des containers Nutanix                                       | X      |            |
| Storage            | Virt-Nutanix-Container-Storage-SNMP   | Contrôle l'utilisation du stockage des containers Nutanix                        | X      |            |
| Container-Usage    | Virt-Nutanix-Container-Usage-SNMP     | Contrôle l'utilisation du containers                                             | X      |            |
| Disk-Usage         | Virt-Nutanix-Disk-Usage-SNMP          | Contrôle l'utilisation des disques                                               | X      | X          |
| Cpu                | Virt-Nutanix-Hypervisor-Cpu-SNMP      | Contrôle l'utilisation des processeurs des hyperviseurs Nutanix                  | X      |            |
| Iops               | Virt-Nutanix-Hypervisor-Iops-SNMP     | Contrôle les opérations de lecture et d'écriture des hyperviseurs Nutanix        | X      |            |
| Latency            | Virt-Nutanix-Hypervisor-Latency-SNMP  | Contrôle la latence des hyperviseurs Nutanix                                     | X      |            |
| Memory             | Virt-Nutanix-Hypervisor-Memory-SNMP   | Contrôle l'utilisation de la mémoire des hyperviseurs Nutanix                    | X      |            |
| Hypervisor-Usage   | Virt-Nutanix-Hypervisor-Usage-SNMP    | Contrôle l'utilisation des hyperviseurs                                          | X      |            |
| Vm-count           | Virt-Nutanix-Hypervisor-Vm-Count-SNMP | Contrôle le nombre de machines virtuelles des hyperviseurs Nutanix               | X      |            |
| Storage-Pool-Usage | Virt-Nutanix-Storage-Pool-Usage-SNMP  | Contrôle l'utilisation des 'storage pools'                                       | X      | X          |
| Cpu                | Virt-Nutanix-VM-Cpu-SNMP              | Contrôle l'utilisation du processeur des machines virtuelles Nutanix             | X      |            |
| Iops               | Virt-Nutanix-VM-Iops-SNMP             | Contrôle les opérations de lecture et d'écriture des machines virtuelles Nutanix | X      |            |
| Latency            | Virt-Nutanix-VM-Latency-SNMP          | Contrôle la latence des machines virtuelles Nutanix                              | X      |            |
| Power-State        | Virt-Nutanix-VM-Power-State-SNMP      | Contrôle l'état d'alimentation des machines virtuelles Nutanix                   | X      |            |
| Traffic            | Virt-Nutanix-VM-Traffic-SNMP          | Contrôle le traffic des machines virtuelles Nutanix                              | X      |            |
| Vm-Usage           | Virt-Nutanix-Vm-Usage-SNMP            | Contrôle l'utilisation des machines virtuelles                                   | X      |            |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Nom de la règle    | Description                                                   |
|:-------------------|:--------------------------------------------------------------|
| Nutanix VM         | Découverte des machines virtuelles Nutanix avec l'agent SNMP  |
| Nutanix Container  | Découverte des conteneurs Nutanix avec l'agent SNMP           |
| Nutanix Hypervisor | Découverte des hyperviseurs Nutanix avec l'agent SNMP         |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery)
pour en savoir plus sur la découverte automatique d'hôtes.

</TabItem>
<TabItem value="Service" label="Service">

| Nom de la règle                 | Description                                                              |
|:--------------------------------|:-------------------------------------------------------------------------|
| Virt-Nutanix-SNMP-Disk-Name     | Découverte des partitions et supervision de l'espace de stockage utilisé |
| Virt-Nutanix-SNMP-Storage-Pools | Découverte des Storage Pools et supervision de leur utilisation          |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/administration#tâche-planifiée-de-découverte-de-services).

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cluster-Usage" label="Cluster-Usage">

| Metric Name                             | Unit  |
|:----------------------------------------|:------|
| cluster.average.io.latency.microseconds | µs    |
| cluster.operations.iops                 | iops  |
| status                                  |       |
| cluster.storage.space.usage.bytes       | bytes |

</TabItem>
<TabItem value="Container-Usage" label="Container-Usage">

| Metric Name                                           | Unit  |
|:------------------------------------------------------|:------|
| *container*#container.average.io.latency.microseconds | µs    |
| *container*#container.operations.iops                 | iops  |
| *container*#container.storage.space.usage.bytes       | bytes |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Metric Name                                 | Unit  |
|:--------------------------------------------|:------|
| *disk*#disk.average.io.latency.microseconds | µs    |
| *disk*#disk.storage.inodes.usage.percentage | %     |
| *disk*#disk.operations.iops                 | iops  |
| *disk*#status                               |       |
| *disk*#disk.storage.space.usage.bytes       | bytes |

</TabItem>
<TabItem value="Hypervisor-Usage" label="Hypervisor-Usage">

| Metric Name                                             | Unit  |
|:--------------------------------------------------------|:------|
| *hypervisor*#hypervisor.average.io.latency.microseconds | µs    |
| *hypervisor*#hypervisor.cpu.utilization.percentage      | %     |
| *hypervisor*#hypervisor.memory.usage.bytes              | bytes |
| *hypervisor*#hypervisor.read.usage.iops                 | iops  |
| *hypervisor*#hypervisor.vm.count                        | count |
| *hypervisor*#hypervisor.write.usage.iops                | iops  |

</TabItem>
<TabItem value="Storage-Pool-Usage" label="Storage-Pool-Usage">

| Metric Name                                      | Unit  |
|:-------------------------------------------------|:------|
| *sp*#storagepool.average.io.latency.microseconds | µs    |
| *sp*#storagepool.operations.iops                 | iops  |
| *sp*#storagepool.storage.space.usage.bytes       | bytes |

</TabItem>
<TabItem value="Vm-Usage" label="Vm-Usage">

| Metric Name                             | Unit  |
|:----------------------------------------|:------|
| *vm*#vm.average.io.latency.microseconds | µs    |
| *vm*#vm.cpu.utilization.percentage      | %     |
| *vm*#vm.memory.usage.bytes              | bytes |
| *vm*#vm.read.usage.iops                 | iops  |
| *vm*#vm.traffic.in.bitspersecond        | b/s   |
| *vm*#vm.traffic.out.bitspersecond       | b/s   |
| *vm*#vm-power-state                     |       |
| *vm*#vm.write.usage.iops                | iops  |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Nutanix** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* https://portal.nutanix.com/page/documents/kbs/details?targetId=kA0600000008bAECAY

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Nutanix** :

```bash
yum install centreon-plugin-Virtualization-Nutanix-Snmp
```

2. Sur l'interface Web de Centreon, installez le Plugin Pack **Nutanix** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Nutanix** :

```bash
yum install centreon-plugin-Virtualization-Nutanix-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **Nutanix** :

```bash
yum install centreon-pack-virtualization-nutanix-snmp
```

3. Sur l'interface Web de Centreon, installez le Plugin Pack **Nutanix** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Nutanix**.
* Appliquez le Modèle d'hôte **Virt-Nutanix-SNMP-custom**.

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres
spécifiques associés via la macro **SNMPEXTRAOPTIONS**.

| Obligatoire | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | FILTERNAME       |                                              |
|             | SNMPEXTRAOPTIONS | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_nutanix_snmp.pl \
    --plugin=cloud::nutanix::snmp::plugin \
    --mode=hypervisor-usage \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --filter-name='' \
    --warning-vm-count='' \
    --critical-vm-count='' \
    --filter-counters='vm-count' \
    --verbose \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Hypervisor 'abc-123ntx1' VM Count : 2 | 'abc-123ntx1#hypervisor.vm.count'=2;;;0;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_nutanix_snmp.pl \
    --plugin=cloud::nutanix::snmp::plugin \
    --mode=hypervisor-usage \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_nutanix_snmp.pl \
    --plugin=cloud::nutanix::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#snmp-checks)
pour le diagnostic des erreurs communes des plugins Centreon.

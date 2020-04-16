---
id: virtualization-nutanix-snmp
title: Nutanix
---

## Vue d'ensemble

Nutanix est une une plateforme hyperconvergée permettant le déploiement de machines virtuelles, containers tout en permettant une maitrise avancée du stockage et de la couche d'hypervision. 

## Contenu du pack de supervision

### Objets supervisés

* Clusters
* Machines virtuelles 
* Containers 
* Hyperviseurs
* Disques et stockage logiciel 

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->
<!--Hosts-->

> **_NOTE:_**  Coming soon ...

| Rule name                                  | Description                                                   |
| :----------------------------------------- | :------------------------------------------------------------ |
| Virt-Nutanix-Hypervisor-SNMP-HostDiscovery | Découvrez vos hyperviseurs                                    |
| Virt-Nutanix-VM-SNMP-HostDiscovery         | Découvrez vos machines virtuelles                             |
| Virt-Nutanix-Container-SNMP-HostDiscovery  | Découvrez vos containers                                      |

<!--Services-->

| Rule name                                  | Description                                                   |
| :----------------------------------------- | :------------------------------------------------------------ |
| Virt-Nutanix-Disk-SNMP                     |  Découvrez les disques attachés à votre cluster               |
| Virt-Nutanix-Storage-Pools-SNMP            |  Découvrez les espaces de stockage exposés à vos ressources   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->
<!--Cluster-usage-->

| Metric name              | Description                                              |
| :----------------------- | :------------------------------------------------------- |
| clusterStatus            | Status of the Nutanix cluster                            |
| cluster\*StorageCapacity | Used and Total cluster storage allocated. Units: Bytes   |
| clusterIops              | Number of IOPS on the cluster. Units: Count/persecond    |
| clusterLatency           | Cluster storage latency. Units: Microseconds             |

<!--Container-usage-->

| Metric name        | Description                                                    |
| :----------------- | :------------------------------------------------------------- |
| cit\*Capacity      | Used and Total container storage allocated. Units: Bytes       |
| citIOPerSecond     | Number of IOPS of the container. Units: Count/persecond        |
| citAvgLatencyUsecs | Average Container I/O operations latency. Units: Microseconds  |

A regexp filter is available on the name of the container - citContainerName [```--filter-name='^my-container-name$'```]

<!--Disk-usage-->

| Metric name       | Description                                              |
| :---------------- | :------------------------------------------------------- |
| dstNum\*Bytes      | Used and Total disk storage allocated. Units: Bytes      |
| dstNum\*Inodes     | Used and Total Inodes available. Units: Count            |
| dstAverageLatency | Average Disk I/O operations latency. Units: Microseconds |
| dstNumberIops     | Number of Disk operations. Units: Count/persecond        |
| dstState          | State of the disk (online/offline).                      |

A regexp filter is available to target a specific disk identifier - dstDiskId [```--filter-name='^my-disk-name$'```]

<!--Hypervisor-usage-->

| Metric name                   | Description                                                    |
| :---------------------------- | :------------------------------------------------------------- |
| hypervisorVmCount             | Number of VM running on the hypervisor. Unit: Count            |
| hypervisorCpuUsagePercent     | CPU Utilization of the hypervisor. Units: %                    |
| hypervisorMemory              | Memory Usage of the hypervisor. Units: Bytes                   |
| hypervisorMemoryUsagePercent  | Memory Usage of the hypervisor. Units: %                       |
| hypervisorReadIOPerSecond     | Number of read operations from this hypervisor. Unit: count    |
| hypervisorWriteIOPerSecond    | Number of write operations from this hypervisor. Unit: count   |
| hypervisorAverageLatency      | Storage access latency for the hypervisor. Units: Microseconds |

A regexp filter is available on the name of the hypervisor - hypervisorName [```--filter-name='^my-hypervisor-name$'```]

<!--Storagepool-usage-->

| Metric name               | Description                                                                                                                                              |
| :------------------------ | :----------------------------------------------------------- |
| spit\*Capacity             | Used and Total Storage pool allocated. Units: Bytes          |
| spitIOPerSecond           | Storage pool IO count. Units: Count/persecond                |
| spitAvgLatencyUsecs       | Cluster storage latency. Units: Microseconds                 |

A regexp filter is available on the name of the storage pool - spitStoragePoolName [```--filter-name='^my-storage-pool-name$'```]

<!--VM-Usage-->

| Metric name          | Description                                            |
| :------------------- | :----------------------------------------------------- |
| vmCpuUsagePercent    | CPU Usage of the VM. Units: %                          |
| vmMemory             | Memory Usage of the VM. Units: Bytes                   |
| vmMemoryUsagePercent | Memory Usage of the VM. Units: %                       |
| vmReadIOPerSecond    | Number of read operation on disks. Units: Count        |
| vmWriteIOPerSecond   | Number of write operation on disks. Units: Count       |
| vmAverageLatency     | Average storage access latency. Units: microseconds    |
| vmRxBytes            | Incoming bytes VM traffic. Units: Bytes/sec            |
| vmTxBytes            | Outcoming bytes VM traffic. Units: Bytes/sec           |

A regexp filter is available on the name of the VM - vmName [```--filter-name='^my-vm-name$'```]

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de superviser votre cluster Nutanix, le SNMP v2 ou v3 doit être configuré comme indiqué sur la documentation officielle du constructeur: https://portal.nutanix.com/page/documents/details/?targetId=Web-Console-Guide-Prism-v511:wc-system-snmp-wc-t.html

La communication doit être possible sur le port 161 depuis le collecteur de supervision vers le cluster Nutanix.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le code du connecteur sur l'ensemble des collecteurs supervisant des ressources Nutanix:

```bash
yum install centreon-plugin-Virtualization-Nutanix-Snmp
```


2. Installer le pack depuis la page "Configuration > Plugin packs > Manager"


<!--Offline IMP License-->

1. Installer le code du connecteur sur l'ensemble des collecteurs supervisant des ressources Nutanix:

```bash
yum install centreon-plugin-Virtualization-Nutanix-Snmp
```

2. Installer le RPM contenant les modèles de supervision:

```bash
yum install centreon-pack-virtualization-nutanix-snmp
```

3. Installer le pack depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Dans le formulaire de création de votre hôte, il est nécessaire de renseigner les valeurs pour les champs "Snmp Community" et "Snmp Version". 

  :warning: Si vous utilisez SNMP en version 3, selectionnez la version SNMP 3 et configureé les paramètres SNMP v3 via la macro SNMPEXTRAOPTIONS 

| Obligatoire | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### Comment tester en ligne de commande et que signifient les options principales ?

A partir du moment ou la sonde est installée, vous pouvez tester directement depuis votre collecteur de supervision Centreon avec l'utilisateur centreon-engine:

```bash
/usr/lib/centreon/plugins//centreon_nutanix_snmp.pl \
    --plugin=cloud::nutanix::snmp::plugin \
    --mode=cluster-usage \
    --hostname=10.30.2.15 \
    --snmp-version='2c' \
    --snmp-community='test/nutanix' \
    --warning-status=''
    --critical-status=''
    --warning-usage=''
    --critical-usage=''
    --warning-avg-latency=''
    --critical-avg-latency=''
    --warning-iops=''
    --critical-iops='' 

OK: Cluster 'Nutanix-awesome-cluster' status : started, Usage Total: 14.64 TB Used: 430.39 GB (2.87%) Free: 14.22 TB (97.13%), Average Latency : 953 µs, IOPs : 2 | 'used'=462125867281B;;;0;16102324391545 'avg_latency'=953µs;;;0; 'iops'=2iops;;;0;
```

La commande ci-dessus interroge les métriques de performances d'un cluster Nutanix (```--mode=cluster-usage```). Les informations importantes sont l'adresse IP/FQDN  (```--hostname=10.30.2.15```) et la communauté SNMP configurée sur l'équipement (```--snmp-community='test/nutanix'```) 

Tous les modes sont affichables via la commande suivante:

```bash
/usr/lib/centreon/plugins//centreon_nutanix_snmp.pl \
    --plugin=cloud::nutanix::snmp::plugin \
    --list-mode
```

Les options des différents modes sont consultables via le parramètre ```--help``` du mode: 

```bash
/usr/lib/centreon/plugins//centreon_nutanix_snmp.pl \
    --plugin=cloud::nutanix::snmp::plugin \
    --mode=cluster-usage \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter votre cluster Nutanix sur le port 161, ou alors que la communauté SNMP configurée n'est pas correcte.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'utilisateur en SNMP soient trop restreintes. L'agent SNMP doit avoir accès à la branche entreprise Nutanix: .1.3.6.1.4.1.41263 

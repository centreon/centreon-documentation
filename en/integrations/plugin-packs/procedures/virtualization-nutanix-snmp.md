---
id: virtualization-nutanix-snmp
title: Nutanix
---

## Overview

Nutanix, Inc. is a cloud computing company that sells hyper-converged infrastructure (HCI) software, cloud services (such as Desktops as a service, Disaster Recovery as a service, and cloud monitoring), and software-defined storage.

## Plugin-pack assets

### Monitored objects 

* Clusters
* Virtual machines
* Containers 
* Hypervisors
* Disks and logical storage pool 

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->
<!--Hosts-->

> **_NOTE:_**  Coming soon ...

| Rule name                                  | Description                                                   |
| :----------------------------------------- | :------------------------------------------------------------ |
| Virt-Nutanix-Hypervisor-SNMP-HostDiscovery | Hypervisor discovery                                          |
| Virt-Nutanix-VM-SNMP-HostDiscovery         | Virtual Machine discovery                                     |
| Virt-Nutanix-Container-SNMP-HostDiscovery  | Containers discovery                                          |

<!--Services-->

| Rule name                                  | Description                                                   |
| :----------------------------------------- | :------------------------------------------------------------ |
| Virt-Nutanix-Disk-SNMP                     |  Discover disks attached to your cluster                      |
| Virt-Nutanix-Storage-Pools-SNMP            |  Discover storage pool exposed to managed resources           |

<!--END_DOCUSAURUS_CODE_TABS-->

## Collected metrics

<!--DOCUSAURUS_CODE_TABS-->
<!--Cluster-usage-->

| Metric name              | Description                                              |
| :----------------------- | :------------------------------------------------------- |
| clusterStatus            | Status of the Nutanix cluster                            |
| cluster*StorageCapacity  | Used and Total cluster storage allocated. Units: Bytes   |
| clusterIops              | Number of IOPS on the cluster. Units: Count/persecond    |
| clusterLatency           | Cluster storage latency. Units: Microseconds             |

<!--Container-usage-->

| Metric name        | Description                                                    |
| :----------------- | :------------------------------------------------------------- |
| cit*Capacity       | Used and Total container storage allocated. Units: Bytes       |
| citIOPerSecond     | Number of IOPS of the container. Units: Count/persecond        |
| citAvgLatencyUsecs | Average Container I/O operations latency. Units: Microseconds  |

A regexp filter is available on the name of the container - citContainerName [```--filter-name='^my-container-name$'```]

<!--Disk-usage-->

| Metric name       | Description                                              |
| :---------------- | :------------------------------------------------------- |
| dstNum*Bytes      | Used and Total disk storage allocated. Units: Bytes      |
| dstNum*Inodes     | Used and Total Inodes available. Units: Count            |
| dstAverageLatency | Average Disk I/O operations latency. Units: Microseconds |
| dstNumberIops     | Number of Disk operations. Units: Count/persecond        |
| dstState          | State of the disk (online/offline).                      |

A regexp filter is available to target a specific disk identifier - dstDiskId [```--filter-name='^my-disk-name$']

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
| spit*Capacity             | Used and Total Storage pool allocated. Units: Bytes          |
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

To monitor your Nutanix system, SNMP v2 or v3 must be enabled and configured: https://portal.nutanix.com/page/documents/details/?targetId=Web-Console-Guide-Prism-v511:wc-system-snmp-wc-t.html

The network communication should be open from the Centreon poller to the Nutanix appliance over TCP port 161 (SNMP)

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install plugin code on every poller monitoring Nutanix resources:

```bash
yum install centreon-plugin-Virtualization-Nutanix-Snmp
```

2. Install plugin-pack from "Configuration > Plugin packs > Manager" Centreon Web UI page:


<!--Offline IMP License-->

1. Install plugin code on every poller monitoring Nutanix resources:

```bash
yum install centreon-plugin-Virtualization-Nutanix-Snmp
```

2. Install the RPM containing pack content

```bash
yum install centreon-pack-virtualization-nutanix-snmp
```

3. Install plugin-pack from "Configuration > Plugin packs > Manager" Centreon Web UI page:

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Create your host and apply the 'Virt-Nutanix-SNMP-custom' template. You must set SNMP community and version in the dedicated box of your host form. 

  :warning: If you are using SNMP v3, set all specific parameters within SNMPEXTRAOPTIONS host macro

| Obligatoire | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test my plugin and what does the main parameters stand for ? 

Once the plugin is installed, you can test it under centreon-engine user through CLI. 

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

The command above monitors cluster usage and performance metrics (```--mode=cluster-usage```). Mandatory options are the IP/FQDN  (```--hostname=10.30.2.15```) and the SNMP version you have set on your appliance (```--snmp-community='nutanix'```) 

You can see all available modes with the commande below: 

```bash
/usr/lib/centreon/plugins//centreon_nutanix_snmp.pl \
    --plugin=cloud::nutanix::snmp::plugin \
    --list-mode
```

All options and what they mean can be seen through the help of each mode. Below an example for the cluster-usage mode. 

```bash
/usr/lib/centreon/plugins//centreon_nutanix_snmp.pl \
    --plugin=cloud::nutanix::snmp::plugin \
    --mode=cluster-usage \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this error, it might indicate that some equipment are blocking the communication between your poller and the Nutanix appliance. 

It could also means that your Centreon configuration doesn't reflect the SNMP configuration on the Nutanix side (version, community). 

### UNKNOWN: SNMP GET Request : Cant get a single value.

You may get this error when SNMP rights are not wide enough. You can check that the SNMP community used in your command line has enough rights to walk the Nutanix entreprise SNMP branch: .1.3.6.1.4.1.41263. 

You can use the snmpwalk utilities which is provided through net-snmp package. 
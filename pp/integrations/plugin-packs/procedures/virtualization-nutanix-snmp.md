---
id: virtualization-nutanix-snmp
title: Nutanix
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Nutanix** brings 4 different host templates:

* Virt-Nutanix-SNMP-custom
* Virt-Nutanix-VM-SNMP-custom
* Virt-Nutanix-Hypervisor-SNMP-custom
* Virt-Nutanix-Container-SNMP-custom

It brings the following service templates:

| Service Alias      | Service Template                      | Service Description                       | Default | Discovery |
|:-------------------|:--------------------------------------|:------------------------------------------|:--------|:----------|
| Cluster-Usage      | Virt-Nutanix-Cluster-Usage-SNMP       | Check cluster usage                       | X       |           |
| Iops               | Virt-Nutanix-Container-Iops-SNMP      | Check Nutanix containers IOPS             | X       |           |
| Latency            | Virt-Nutanix-Container-Latency-SNMP   | Check Nutanix containers latency          | X       |           |
| Storage            | Virt-Nutanix-Container-Storage-SNMP   | Check Nutanix container storage usage     | X       |           |
| Container-Usage    | Virt-Nutanix-Container-Usage-SNMP     | Check container usage                     | X       |           |
| Disk-Usage         | Virt-Nutanix-Disk-Usage-SNMP          | Check disk usage                          | X       | X         |
| Cpu                | Virt-Nutanix-Hypervisor-Cpu-SNMP      | Check Nutanix hypervisor CPU usage        | X       |           |
| Iops               | Virt-Nutanix-Hypervisor-Iops-SNMP     | Check Nutanix hypervisors IOPS            | X       |           |
| Latency            | Virt-Nutanix-Hypervisor-Latency-SNMP  | Check Nutanix hypervisor latency          | X       |           |
| Memory             | Virt-Nutanix-Hypervisor-Memory-SNMP   | Check Nutanix hypervisor memory usage     | X       |           |
| Hypervisor-Usage   | Virt-Nutanix-Hypervisor-Usage-SNMP    | Check hypervisor usage                    | X       |           |
| Vm-count           | Virt-Nutanix-Hypervisor-Vm-Count-SNMP | Check hypervisor virtual machines count   | X       |           |
| Storage-Pool-Usage | Virt-Nutanix-Storage-Pool-Usage-SNMP  | Check storage pool usage                  | X       | X         |
| Cpu                | Virt-Nutanix-VM-Cpu-SNMP              | Check Nutanix virtual machine CPU usage   | X       |           |
| Iops               | Virt-Nutanix-VM-Iops-SNMP             | Check Nutanix virtual machine IOPS        | X       |           |
| Latency            | Virt-Nutanix-VM-Latency-SNMP          | Check Nutanix virtual machine latency     | X       |           |
| Power-State        | Virt-Nutanix-VM-Power-State-SNMP      | Check Nutanix virtual machine power state | X       |           |
| Traffic            | Virt-Nutanix-VM-Traffic-SNMP          | Check Nutanix virtual machine traffic     | X       |           |
| Vm-Usage           | Virt-Nutanix-Vm-Usage-SNMP            | Check virtual machine usage               | X       |           |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Rule Name          | Description                                                   |
|:-------------------|:--------------------------------------------------------------|
| Nutanix VM         | Discover Nutanix virtal machines by requesting its SNMP agent |
| Nutanix Container  | Discover Nutanix containers by requesting its SNMP agent      |
| Nutanix Hypervisor | Discover Nutanix hypervisors by requesting its SNMP agent     |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

</TabItem>
<TabItem value="Service" label="Service">

| Rule Name                       | Description                                               |
|:--------------------------------|:----------------------------------------------------------|
| Virt-Nutanix-SNMP-Disk-Name     | Discover the disk partitions and monitor space occupation |
| Virt-Nutanix-SNMP-Storage-Pools | Discover the storage pools and their usage                |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/administration.md#service-discovery-scheduled-job).

</TabItem>
</Tabs>

### Collected metrics & status

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

## Prerequisites

### SNMP Configuration

To monitor your Nutanix system, SNMP v2 or v3 must be enabled and configured: 
https://portal.nutanix.com/page/documents/details?targetId=Web-Console-Guide-Prism-v5_17:wc-system-snmp-wc-t

### Network flow

The network flows should be allowed from the Centreon poller to the Nutanix appliance over UDP port 161 (SNMP).

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Nutanix** resources:

```bash
yum install centreon-plugin-Virtualization-Nutanix-Snmp
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Nutanix** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Nutanix** resources:

```bash
yum install centreon-plugin-Virtualization-Nutanix-Snmp
```

2. Install the **Nutanix** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-virtualization-nutanix-snmp
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Nutanix** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Nutanix** server settings.
* Apply the **Virt-Nutanix-SNMP-custom** template to the host.

If you are using SNMP Version 3, use the **SNMPEXTRAOPTIONS** macro to configure
your own SNMPv3 credentials combo.

| Mandatory   | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | FILTERNAME       |                                              |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo  |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

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
    --filter-counters='' \
    --verbose \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: Hypervisor 'abc-123ntx1' VM Count : 2 | 'abc-123ntx1#hypervisor.vm.count'=2;;;0; 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_nutanix_snmp.pl \
    --plugin=cloud::nutanix::snmp::plugin \
    --mode=hypervisor-usage \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_nutanix_snmp.pl \
    --plugin=cloud::nutanix::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../tutorials/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
---
id: virtualization-vmware2-vcenter-generic
title: VMware vCenter
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

VMWare provides cloud computing and virtualization software and services.

The Centreon Plugins and Monitoring Connectors rely on the Centreon VMWare Connector to request the vCenter API.

With this connector, Centreon can monitor VMs, Datastores, ESXs, Clusters, etc.

> This Monitoring Connector can be used with either version 6 or 7 of the VMware API.

## Pack assets

### Templates

The Monitoring Connector **VMware vCenter** brings a host template:

* **Virt-VMWare2-VCenter-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Virt-VMWare2-VCenter-custom" label="Virt-VMWare2-VCenter-custom">

| Service Alias   | Service Template                    | Service Description                              |
|:----------------|:------------------------------------|:-------------------------------------------------|
| Vm-Tools-Global | Virt-VMWare2-Vm-Tools-Global-custom | Check vmtools state of multiple virtual machines |

> The services listed above are created automatically when the **Virt-VMWare2-VCenter-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias                 | Service Template                                  | Service Description                                                                                            | Discovery  |
|:------------------------------|:--------------------------------------------------|:---------------------------------------------------------------------------------------------------------------|:----------:|
| Cluster-Cpu                   | Virt-VMWare2-Cluster-Cpu-Generic-custom           | Check cluster cpu usage                                                                                        |            |
| Cluster-Cpu-Global            | Virt-VMWare2-Cluster-Cpu-Global-custom            | Check cluster cpu usage                                                                                        |            |
| Cluster-Status                | Virt-VMWare2-Cluster-Status-Generic-custom        | Check global status of a virtual machine                                                                       |            |
| Cluster-Status-Global         | Virt-VMWare2-Cluster-Status-Global-custom         | Check global status of multiple virtual machines                                                               | X          |
| Datacenter-Alarms             | Virt-VMWare2-Datacenter-Alarms-Generic-custom     | Check alarms of a datacenter                                                                                   |            |
| Datacenter-Alarms-Global      | Virt-VMWare2-Datacenter-Alarms-Global-custom      | Check datacenters alarms                                                                                       | X          |
| Datastore-Io-Global           | Virt-VMWare2-Datastore-Io-Global-custom           | Check datastore usages in Kbps                                                                                 | X          |
| Datastore-Iops-Global         | Virt-VMWare2-Datastore-Iops-Global-custom         | Check average IOPs of multiple datastores                                                                      | X          |
| Datastore-Snapshots-Global    | Virt-VMWare2-Datastore-Snapshots-Global-custom    | Check snapshots usage on multiple datastores                                                                   |            |
| Datastore-Usage-Global        | Virt-VMWare2-Datastore-Usage-Global-custom        | Check multiple datastores usage                                                                                | X          |
| Datastore-Vm-Count-Global     | Virt-VMWare2-Datastore-Vm-Count-Global-custom     | Check virtual machines running/off/suspended on multiple datastores                                            | X          |
| ESX-Alarms-Global             | Virt-VMWare2-ESX-Alarms-Global-custom             | Check ESX hosts alarms                                                                                         |            |
| Esx-Cpu-Global                | Virt-VMWare2-ESX-Cpu-Global-custom                | Check CPU usage of multiple ESX Servers                                                                        |            |
| Esx-Datastores-Latency-Global | Virt-VMWare2-ESX-Datastores-Latency-Global-custom | Check Datastores latency of multiple ESX Servers                                                               |            |
| Esx-Health-Global             | Virt-VMWare2-ESX-Health-Global-custom             | Check hardware and CPU sensors of multiple ESX Servers                                                         |            |
| Esx-Memory-Global             | Virt-VMWare2-ESX-Memory-Global-custom             | Check Memory usage of multiple ESX Servers                                                                     |            |
| Esx-Service-Global            | Virt-VMWare2-ESX-Service-Global-custom            | Check services of multiple ESX Servers                                                                         |            |
| Esx-Status-Global             | Virt-VMWare2-ESX-Status-Global-custom             | Check global status of multiple ESX Servers                                                                    |            |
| Esx-Storage-Global            | Virt-VMWare2-ESX-Storage-Global-custom            | Check ESX storage informations                                                                                 |            |
| Esx-Swap-Global               | Virt-VMWare2-ESX-Swap-Global-custom               | Check if a virtual machine is swapping on ESX servers                                                          |            |
| Esx-Time-Global               | Virt-VMWare2-ESX-Time-Global-custom               | Check time of multiple ESX Servers                                                                             |            |
| Esx-Traffic-Global            | Virt-VMWare2-ESX-Traffic-Global-custom            | Check traffic usage of multiple physical network interfaces on multiple ESX servers. Thresholds are in percent |            |
| Esx-Uptime-Global             | Virt-VMWare2-ESX-Uptime-Global-custom             | Get uptime in days of multiple ESX Servers                                                                     |            |
| Esx-Vm-Count-Global           | Virt-VMWare2-ESX-Vm-Count-Global-custom           | Check virtual machines running/off/suspended on multiple ESX Servers                                           |            |
| Esx-is-Maintenance-Global     | Virt-VMWare2-ESX-Maintenance-Global-custom        | Check maintenance mode of multiple ESX Servers                                                                 |            |
| Licenses                      | Virt-VMWare2-Licenses-custom                      | Check licenses                                                                                                 |            |
| Vm-Cpu-Global                 | Virt-VMWare2-Vm-Cpu-Global-custom                 | Check CPU usage of a virtual machine                                                                           |            |
| Vm-Datastores-Iops-Global     | Virt-VMWare2-Vm-Datastores-Iops-Global-custom     | Check datastores IOPS linked to virtual machines.                                                              |            |
| Vm-Device-Global              | Virt-VMWare2-Vm-Device-Global-custom              | Check CPU usage of a virtual machine                                                                           |            |
| Vm-Limit-Global               | Virt-VMWare2-Vm-Limit-Global-custom               | Check limit definition                                                                                         |            |
| Vm-Memory-Global              | Virt-VMWare2-Vm-Memory-Global-custom              | Check memory usage of virtual machines                                                                         |            |
| Vm-Snapshot-Global            | Virt-VMWare2-Vm-Snapshot-Global-custom            | Check snapshot age of multiple virtual machines                                                                |            |
| Vm-Status-Global              | Virt-VMWare2-Vm-Status-Global-custom              | Check global status of multiple virtual machines                                                               |            |
| Vm-Swap-Global                | Virt-VMWare2-Vm-Swap-Global-custom                | Check if  virtual machines are swapping                                                                        |            |
| Vm-Thinprovisioning-Global    | Virt-VMWare2-Vm-Thinprovisioning-Global-custom    | Check if a virtual machine has a disk in mode 'thinprovisioning' or not                                        |            |
| Vsan-Cluster-Usage            | Virt-VMWare2-Vsan-Cluster-Usage-Generic-custom    | Check vsan cluster usage                                                                                       |            |
| Vsan-Cluster-Usage-Global     | Virt-VMWare2-Vsan-Cluster-Usage-Global-custom     | Check vsan cluster usage                                                                                       |            |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                                     | Description |
|:----------------------------------------------|:------------|
| Virt-VMWare2-Datacenters-Alarm-Name           |             |
| Virt-VMWare2-Vcenter-Clusters-Status-Name     |             |
| Virt-VMWare2-Vcenter-Datastores-Io-Name       |             |
| Virt-VMWare2-Vcenter-Datastores-Iops-Name     |             |
| Virt-VMWare2-Vcenter-Datastores-Usage-Name    |             |
| Virt-VMWare2-Vcenter-Datastores-Vm-Count-Name |             |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Cluster-Cpu" label="Cluster-Cpu">

| Metric name                                   | Unit  |
|:----------------------------------------------|:------|
| *clusters*~cluster.cpu.utilization.percentage | %     |
| *clusters*~cluster.cpu.utilization.mhz        | MHz   |

</TabItem>
<TabItem value="Cluster-Cpu-Global" label="Cluster-Cpu-Global">

| Metric name                                   | Unit  |
|:----------------------------------------------|:------|
| *clusters*~cluster.cpu.utilization.percentage | %     |
| *clusters*~cluster.cpu.utilization.mhz        | MHz   |

</TabItem>
<TabItem value="Cluster-Status" label="Cluster-Status">

| Metric name      | Unit  |
|:-----------------|:------|
| *cluster*#status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Cluster-Status-Global" label="Cluster-Status-Global">

| Metric name      | Unit  |
|:-----------------|:------|
| *cluster*#status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Datacenter-Alarms" label="Datacenter-Alarms">

| Metric name                              | Unit  |
|:-----------------------------------------|:------|
| datacenter.alarms.warning.current.count  | count |
| datacenter.alarms.critical.current.count | count |
| status                                   | N/A   |
| alarm-warning                            | N/A   |
| alarm-critical                           | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Datacenter-Alarms-Global" label="Datacenter-Alarms-Global">

| Metric name                              | Unit  |
|:-----------------------------------------|:------|
| datacenter.alarms.warning.current.count  | count |
| datacenter.alarms.critical.current.count | count |
| status                                   | N/A   |
| alarm-warning                            | N/A   |
| alarm-critical                           | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Datastore-Io-Global" label="Datastore-Io-Global">

| Metric name                                      | Unit  |
|:-------------------------------------------------|:------|
| datastore.read.usage.bytespersecond              | B/s   |
| datastore.write.usage.bytespersecond             | B/s   |
| *datastore*#status                               | N/A   |
| *datastore*#datastore.read.usage.bytespersecond  | B/s   |
| *datastore*#datastore.write.usage.bytespersecond | B/s   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Datastore-Iops-Global" label="Datastore-Iops-Global">

| Metric name                                    | Unit  |
|:-----------------------------------------------|:------|
| datastores.read.usage.iops                     | iops  |
| datastores.write.usage.iops                    | iops  |
| *datastore*~status                             | N/A   |
| *datastore*~datastore.read.usage.iops          | iops  |
| *datastore*~datastore.write.usage.iops         | iops  |
| *datastore*~*vm*#datastore.vm.read.usage.iops  | iops  |
| *datastore*~*vm*#datastore.vm.write.usage.iops | iops  |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Datastore-Snapshots-Global" label="Datastore-Snapshots-Global">

| Metric name                                        | Unit  |
|:---------------------------------------------------|:------|
| *datastore*~status                                 | N/A   |
| *datastore*~datastore.snapshots.usage.bytes        | B     |
| *datastore*~*files*#datastore.snapshot.usage.bytes | B     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Datastore-Usage-Global" label="Datastore-Usage-Global">

| Metric name                                   | Unit  |
|:----------------------------------------------|:------|
| *datastore*#status                            | N/A   |
| *datastore*#datastore.space.usage.bytes       | B     |
| *datastore*#datastore.space.free.bytes        | B     |
| *datastore*#datastore.space.usage.percentage  | %     |
| *datastore*#datastore.space.provisioned.bytes | B     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Datastore-Vm-Count-Global" label="Datastore-Vm-Count-Global">

| Metric name                                       | Unit  |
|:--------------------------------------------------|:------|
| datastore.vm.poweredon.current.count              | count |
| datastore.vm.poweredoff.current.count             | count |
| datastore.vm.suspended.current.count              | count |
| *datastore*#status                                | N/A   |
| *datastore*#datastore.vm.poweredon.current.count  | count |
| *datastore*#datastore.vm.poweredoff.current.count | count |
| *datastore*#datastore.vm.suspended.current.count  | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="ESX-Alarms-Global" label="ESX-Alarms-Global">

| Metric name                        | Unit  |
|:-----------------------------------|:------|
| host.alarms.warning.current.count  | count |
| host.alarms.critical.current.count | count |
| status                             | N/A   |
| alarm-warning                      | N/A   |
| alarm-critical                     | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Esx-Cpu-Global" label="Esx-Cpu-Global">

| Metric name                                       | Unit  |
|:--------------------------------------------------|:------|
| *host*~status                                     | N/A   |
| *host*~host.cpu.utilization.percentage            | %     |
| *host*~host.cpu.utilization.mhz                   | MHz   |
| *host*~*cpu*#host.core.cpu.utilization.percentage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Esx-Datastores-Latency-Global" label="Esx-Datastores-Latency-Global">

| Metric name                                                  | Unit  |
|:-------------------------------------------------------------|:------|
| *host*~status                                                | N/A   |
| *host*~*datastore*#host.datastore.latency.read.milliseconds  | ms    |
| *host*~*datastore*#host.datastore.latency.write.milliseconds | ms    |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Esx-Health-Global" label="Esx-Health-Global">

| Metric name                                           | Unit  |
|:------------------------------------------------------|:------|
| host.health.problems.current.count                    | count |
| *host*~status                                         | N/A   |
| *host*~ok                                             | N/A   |
| *host*~host.health.problems.current.count             | count |
| *host*~host.health.yellow.current.count               | count |
| *host*~host.health.red.current.count                  | count |
| *host*~*global_summary*#global-summary                | N/A   |
| *host*~*sensors_temp*#host.sensor.temperature.celsius | C     |
| *host*~*sensors_fan*#host.sensor.fan.speed.rpm        | rpm   |
| *host*~*sensors_voltage*#host.sensor.voltage.volt     | V     |
| *host*~*sensors_power*#host.sensor.power.watt         | W     |

</TabItem>
<TabItem value="Esx-Memory-Global" label="Esx-Memory-Global">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| *host*#status                     | N/A   |
| *host*#host.memory.usage.bytes    | B     |
| *host*#host.memory.overhead.bytes | B     |
| *host*#host.memory.state.count    | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Esx-Service-Global" label="Esx-Service-Global">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| *host*~status                   | N/A   |
| *host*~*service*#service-status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Esx-Status-Global" label="Esx-Status-Global">

| Metric name           | Unit  |
|:----------------------|:------|
| *host*#status         | N/A   |
| *host*#overall-status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Esx-Storage-Global" label="Esx-Storage-Global">

| Metric name                        | Unit  |
|:-----------------------------------|:------|
| *host*~status                      | N/A   |
| *host*~host.adapters.total.count   | count |
| *host*~host.adapters.online.count  | count |
| *host*~host.adapters.offline.count | count |
| *host*~host.adapters.fault.count   | count |
| *host*~host.adapters.unknown.count | count |
| *host*~host.luns.total.count       | count |
| *host*~host.luns.ok.count          | count |
| *host*~host.luns.error.count       | count |
| *host*~host.luns.off.count         | count |
| *host*~host.luns.unknown.count     | count |
| *host*~host.luns.quiesced.count    | count |
| *host*~host.luns.degraded.count    | count |
| *host*~host.paths.total.count      | count |
| *host*~host.paths.active.count     | count |
| *host*~host.paths.disabled.count   | count |
| *host*~host.paths.standby.count    | count |
| *host*~host.paths.dead.count       | count |
| *host*~host.paths.unknown.count    | count |
| *host*~*adapters*#adapter-status   | N/A   |
| *host*~*luns*#lun-status           | N/A   |
| *host*~*paths*#path-status         | N/A   |

</TabItem>
<TabItem value="Esx-Swap-Global" label="Esx-Swap-Global">

| Metric name                               | Unit  |
|:------------------------------------------|:------|
| *host*#status                             | N/A   |
| *host*#host.swap.in.usage.bytespersecond  | B/s   |
| *host*#host.swap.out.usage.bytespersecond | B/s   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Esx-Time-Global" label="Esx-Time-Global">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| *host*#status                   | N/A   |
| *host*#host.time.offset.seconds | s     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Esx-Traffic-Global" label="Esx-Traffic-Global">

| Metric name                                              | Unit  |
|:---------------------------------------------------------|:------|
| *host*~status                                            | N/A   |
| *host*~host.traffic.in.bitsperseconds                    | b/s   |
| *host*~host.traffic.out.bitsperseconds                   | b/s   |
| *host*~*pnic*#link-status                                | N/A   |
| *host*~*pnic*#host.traffic.in.bitsperseconds             | b/s   |
| *host*~*pnic*#host.traffic.out.bitsperseconds            | b/s   |
| *host*~*pnic*#host.packets.in.dropped.percentage         | %     |
| *host*~*pnic*#host.packets.out.dropped.percentage        | %     |
| *host*~*vswitch*#host.vswitch.traffic.in.bitsperseconds  | b/s   |
| *host*~*vswitch*#host.vswitch.traffic.out.bitsperseconds | b/s   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Esx-Uptime-Global" label="Esx-Uptime-Global">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| *host*#status                     | N/A   |
| *host*#host.uptime.offset.seconds | s     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Esx-Vm-Count-Global" label="Esx-Vm-Count-Global">

| Metric name                             | Unit  |
|:----------------------------------------|:------|
| host.vm.poweredon.current.count         | count |
| host.vm.poweredoff.current.count        | count |
| host.vm.suspended.current.count         | count |
| *host*#status                           | N/A   |
| *host*#host.vm.poweredon.current.count  | count |
| *host*#host.vm.poweredoff.current.count | count |
| *host*#host.vm.suspended.current.count  | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Esx-is-Maintenance-Global" label="Esx-is-Maintenance-Global">

| Metric name               | Unit  |
|:--------------------------|:------|
| *host*#status             | N/A   |
| *host*#maintenance-status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| licenses.total.count                | count |
| *licenses*#license.usage.count      | count |
| *licenses*#license.free.count       | count |
| *licenses*#license.usage.percentage | %     |
| *licenses*#license.expires.days     | d     |

</TabItem>
<TabItem value="Vm-Cpu-Global" label="Vm-Cpu-Global">

| Metric name                                   | Unit  |
|:----------------------------------------------|:------|
| *vm*~status                                   | N/A   |
| *vm*~vm.cpu.utilization.percentage            | %     |
| *vm*~vm.cpu.utilization.mhz                   | MHz   |
| *vm*~vm.cpu.ready.percentage                  | %     |
| *vm*~*cpu*#vm.core.cpu.utilization.percentage | MHz   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Datastores-Iops-Global" label="Vm-Datastores-Iops-Global">

| Metric name                                    | Unit  |
|:-----------------------------------------------|:------|
| *vm*~status                                    | N/A   |
| *vm*~vm.datastore.latency.max.milliseconds     | ms    |
| *vm*~*datastore*#vm.datastore.read.usage.iops  | iops  |
| *vm*~*datastore*#vm.datastore.write.usage.iops | iops  |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Device-Global" label="Vm-Device-Global">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| vm.devices.connected.count      | count |
| *vm*#status                     | N/A   |
| *vm*#vm.devices.connected.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Limit-Global" label="Vm-Limit-Global">

| Metric name   | Unit  |
|:--------------|:------|
| cpu-status    | N/A   |
| memory-status | N/A   |
| disk-status   | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Memory-Global" label="Vm-Memory-Global">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| *vm*~status                         | N/A   |
| *vm*~vm.memory.consumed.usage.bytes | B     |
| *vm*~vm.memory.active.usage.bytes   | B     |
| *vm*~vm.memory.overhead.bytes       | B     |
| *vm*~vm.memory.ballooning.bytes     | B     |
| *vm*~vm.memory.shared.bytes         | B     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Snapshot-Global" label="Vm-Snapshot-Global">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| vm.snapshots.warning.current.count  | count |
| vm.snapshots.critical.current.count | count |

</TabItem>
<TabItem value="Vm-Status-Global" label="Vm-Status-Global">

| Metric name         | Unit  |
|:--------------------|:------|
| *vm*#status         | N/A   |
| *vm*#overall-status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Swap-Global" label="Vm-Swap-Global">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| *vm*#status                           | N/A   |
| *vm*#vm.swap.in.usage.bytespersecond  | B/s   |
| *vm*#vm.swap.out.usage.bytespersecond | B/s   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Thinprovisioning-Global" label="Vm-Thinprovisioning-Global">

| Metric name                         | Unit                                   |
|-------------------------------------|----------------------------------------|
| VM Connection State                 | N/A      							|
| Thin Provisioning Status of VMs     | N/A            						|
| VM Power State                      | N/A            						|


</TabItem>
<TabItem value="Vm-Tools-Global" label="Vm-Tools-Global">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| vm.tools.notupdated.current.count   | count |
| vm.tools.notrunning.current.count   | count |
| vm.tools.notinstalled.current.count | count |

</TabItem>
<TabItem value="Vsan-Cluster-Usage" label="Vsan-Cluster-Usage">

| Metric name                                                    | Unit  |
|:---------------------------------------------------------------|:------|
| *cluster*#cluster.vsan.backend.read.usage.iops                 | iops  |
| *cluster*#cluster.vsan.backend.write.usage.iops                | iops  |
| *cluster*#cluster.vsan.backend.congestions.count               | count |
| *cluster*#cluster.vsan.backend.outstanding.io.count            | count |
| *cluster*#cluster.vsan.backend.throughput.read.bytespersecond  | B/s   |
| *cluster*#cluster.vsan.backend.throughput.write.bytespersecond | B/s   |
| *cluster*#cluster.vsan.backend.latency.read.milliseconds       | ms    |
| *cluster*#cluster.vsan.backend.latency.write.milliseconds      | ms    |

</TabItem>
<TabItem value="Vsan-Cluster-Usage-Global" label="Vsan-Cluster-Usage-Global">

| Metric name                                                    | Unit  |
|:---------------------------------------------------------------|:------|
| *cluster*#cluster.vsan.backend.read.usage.iops                 | iops  |
| *cluster*#cluster.vsan.backend.write.usage.iops                | iops  |
| *cluster*#cluster.vsan.backend.congestions.count               | count |
| *cluster*#cluster.vsan.backend.outstanding.io.count            | count |
| *cluster*#cluster.vsan.backend.throughput.read.bytespersecond  | B/s   |
| *cluster*#cluster.vsan.backend.throughput.write.bytespersecond | B/s   |
| *cluster*#cluster.vsan.backend.latency.read.milliseconds       | ms    |
| *cluster*#cluster.vsan.backend.latency.write.milliseconds      | ms    |

</TabItem>
</Tabs>

## Prerequisites

### Centreon VMWare Connector

For the VMWare monitoring, Centreon use daemon to connect and request the vCenter.

Install this daemon on each needed poller:

```
yum install centreon-plugin-Virtualization-VMWare-daemon
```

To configure the access to your infrastructure, edit the
"/etc/centreon/centreon\_vmware.pm" configuration file:

``` perl
%centreon_vmware_config = (
    vsphere_server => {
        default => {
            url => 'https://<ip_hostname>/sdk',
            username => '<username>',
            password => '<password>'
        }
    }
);

1;
```

Make sure to replace variables with needed information:

- _ip\_hostname_: IP address or hostname of the vCenter or ESX (if standalone),
- _username_: username with at least "read only" access to the vCenter or ESX (you can use domain user),
- _password_: password of the username.

You can configure multiple vCenter or ESXi connections using this
structure:

``` perl
%centreon_vmware_config = (
    vsphere_server => {
        'my_first_vcenter' => {
            url => 'https://<ip_hostname>/sdk',
            username => '<username>',
            password => '<password>'
        },
        'my_other_vcenter' => {
            url => 'https://<ip_hostname>/sdk',
            username => '<DOMAIN>\<username>',
            password => '<password>'
        },
    },
    port => 5700
);

1;
```

Each entry is called a **container**.

> You can also define the "port" attribute to change listening port.

Then start the daemon and make sure it is configured to start at server boot:

``` bash
systemctl start centreon_vmware
systemctl enable centreon_vmware
```

Make sure that the daemon configuration works fine by looking for errors in
"/var/log/centreon/centreon\_vmware.log".

### Network flows

The Poller with the Centreon VMware Connector installed need to access in TCP/443 HTTPS to the vCenter.

The Pollers that request the Centreon VMWare Connector host need to access in TCP/5700 to the Centreon VMWare Connector host.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-virtualization-vmware2-vcenter-generic
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-vmware2-vcenter-generic
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-virtualization-vmware2-vcenter-generic
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-vmware2-vcenter-generic
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **VMware vCenter** connector through
the **Configuration > Monitoring Connectors Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-virtualization-vmware2-connector-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Virt-VMWare2-VCenter-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                      | Description                                                                                           | Default value     | Mandatory   |
|:---------------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CENTREONVMWAREPORT         | Connector port (default: 5700)                                                                        | 5700              |             |
| CENTREONVMWARECONTAINER    | Container to use (it depends on the connector's configuration)                                          | default           |             |
| CENTREONVMWAREHOST         | Connector hostname (required)                                                                         | localhost         |             |
| CENTREONVMWAREEXTRAOPTIONS | Any extra option you may want to add to every command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cluster-Cpu" label="Cluster-Cpu">

| Macro               | Description                                                                                         | Default value     | Mandatory   |
|:--------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGTOTALCPU     | Thresholds                                                                                          |                   |             |
| CRITICALTOTALCPU    | Thresholds                                                                                          |                   |             |
| WARNINGTOTALCPUMHZ  | Thresholds                                                                                          |                   |             |
| CRITICALTOTALCPUMHZ | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Cluster-Cpu-Global" label="Cluster-Cpu-Global">

| Macro               | Description                                                                                         | Default value     | Mandatory   |
|:--------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME          | cluster to check. If not set, we check all clusters                                                 | .*                |             |
| WARNINGTOTALCPU     | Thresholds                                                                                          |                   |             |
| CRITICALTOTALCPU    | Thresholds                                                                                          |                   |             |
| WARNINGTOTALCPUMHZ  | Thresholds                                                                                          |                   |             |
| CRITICALTOTALCPUMHZ | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Cluster-Status" label="Cluster-Status">

| Macro          | Description                                                                                                                                                                                                                                           | Default value                                                     | Mandatory   |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN (Default: '%{overall\_status} =~ /gray/i \|\| %{vsan\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}, %{vsan\_status}, %{drs\_enabled}, %{ha\_enabled}     | %{overall\_status} =~ /gray/i \|\| %{vsan\_status} =~ /gray/i     |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /yellow/i \|\| %{vsan\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status}, %{vsan\_status}, %{drs\_enabled}, %{ha\_enabled} | %{overall\_status} =~ /yellow/i \|\| %{vsan\_status} =~ /yellow/i |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{overall\_status} =~ /red/i \|\| %{vsan\_status} =~ /red/i'). You can use the following variables: %{overall\_status}, %{vsan\_status}, %{drs\_enabled}, %{ha\_enabled}      | %{overall\_status} =~ /red/i \|\| %{vsan\_status} =~ /red/i       |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                                                   | --verbose                                                         |             |

</TabItem>
<TabItem value="Cluster-Status-Global" label="Cluster-Status-Global">

| Macro          | Description                                                                                                                                                                                                                                           | Default value                                                     | Mandatory   |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------|:-----------:|
| FILTERNAME     | cluster to check. If not set, we check all clusters                                                                                                                                                                                                   | .*                                                                |             |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN (Default: '%{overall\_status} =~ /gray/i \|\| %{vsan\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}, %{vsan\_status}, %{drs\_enabled}, %{ha\_enabled}     | %{overall\_status} =~ /gray/i \|\| %{vsan\_status} =~ /gray/i     |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /yellow/i \|\| %{vsan\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status}, %{vsan\_status}, %{drs\_enabled}, %{ha\_enabled} | %{overall\_status} =~ /yellow/i \|\| %{vsan\_status} =~ /yellow/i |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{overall\_status} =~ /red/i \|\| %{vsan\_status} =~ /red/i'). You can use the following variables: %{overall\_status}, %{vsan\_status}, %{drs\_enabled}, %{ha\_enabled}      | %{overall\_status} =~ /red/i \|\| %{vsan\_status} =~ /red/i       |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                                                   | --verbose                                                         |             |

</TabItem>
<TabItem value="Datacenter-Alarms" label="Datacenter-Alarms">

| Macro                      | Description                                                                                                                                                                 | Default value               | Mandatory   |
|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| FILTERTIME                 | Do not check alarms older than specified time (value in seconds)                                                                                                            | 3600                        |             |
| WARNINGSTATUS              | Define the conditions to match for the status to be WARNING (Default: '%{status} =~ /yellow/i). You can use the following variables: %{status}, %{name}, %{entity}, %{type} | %{status} =~ /yellow/i      |             |
| CRITICALSTATUS             | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /red/i'). You can use the following variables: %{status}, %{name}, %{entity}, %{type}  | %{status} =~ /red/i         |             |
| WARNINGTOTALALARMWARNING   | Warning threshold                                                                                                                                                           |                             |             |
| CRITICALTOTALALARMWARNING  | Critical threshold                                                                                                                                                          |                             |             |
| WARNINGTOTALALARMCRITICAL  | Warning threshold                                                                                                                                                           |                             |             |
| CRITICALTOTALALARMCRITICAL | Critical threshold                                                                                                                                                          |                             |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                         | --verbose --ignore-warn-msg |             |

</TabItem>
<TabItem value="Datacenter-Alarms-Global" label="Datacenter-Alarms-Global">

| Macro                      | Description                                                                                                                                                                 | Default value               | Mandatory   |
|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| FILTER                     | Datacenter to check. If not set, we check all datacenters                                                                                                                   | .*                          |             |
| FILTERTIME                 | Do not check alarms older than specified time (value in seconds)                                                                                                            | 3600                        |             |
| WARNINGSTATUS              | Define the conditions to match for the status to be WARNING (Default: '%{status} =~ /yellow/i). You can use the following variables: %{status}, %{name}, %{entity}, %{type} | %{status} =~ /yellow/i      |             |
| CRITICALSTATUS             | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /red/i'). You can use the following variables: %{status}, %{name}, %{entity}, %{type}  | %{status} =~ /red/i         |             |
| WARNINGTOTALALARMWARNING   | Warning threshold                                                                                                                                                           |                             |             |
| CRITICALTOTALALARMWARNING  | Critical threshold                                                                                                                                                          |                             |             |
| WARNINGTOTALALARMCRITICAL  | Warning threshold                                                                                                                                                           |                             |             |
| CRITICALTOTALALARMCRITICAL | Critical threshold                                                                                                                                                          |                             |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                         | --verbose --ignore-warn-msg |             |

</TabItem>
<TabItem value="Datastore-Io-Global" label="Datastore-Io-Global">

| Macro              | Description                                                                                                                                                | Default value     | Mandatory   |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER             | The connector will only take into account alerts coming from the datastores listed here                                                                                                                                      | .*                |             |
| UNKNOWNSTATUS      | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible} |                   |             |
| WARNINGREAD        | Warning threshold                                                                                                                                          |                   |             |
| CRITICALREAD       | Critical threshold                                                                                                                                         |                   |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                              |                   |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                             |                   |             |
| WARNINGTOTALREAD   | Warning threshold                                                                                                                                          |                   |             |
| CRITICALTOTALREAD  | Critical threshold                                                                                                                                         |                   |             |
| WARNINGTOTALWRITE  | Warning threshold                                                                                                                                          |                   |             |
| CRITICALTOTALWRITE | Critical threshold                                                                                                                                         |                   |             |
| WARNINGWRITE       | Warning threshold                                                                                                                                          |                   |             |
| CRITICALWRITE      | Critical threshold                                                                                                                                         |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                        | --verbose         |             |

</TabItem>
<TabItem value="Datastore-Iops-Global" label="Datastore-Iops-Global">

| Macro              | Description                                                                                                                                                | Default value     | Mandatory   |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER             | The connector will only take into account alerts coming from the datastores listed here                                                                                                                                     | .*                |             |
| UNKNOWNSTATUS      | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible} |                   |             |
| WARNINGREAD        | Thresholds                                                                                                                                                 |                   |             |
| CRITICALREAD       | Thresholds                                                                                                                                                 |                   |             |
| WARNINGREADTOTAL   | Thresholds                                                                                                                                                 |                   |             |
| CRITICALREADTOTAL  | Thresholds                                                                                                                                                 |                   |             |
| WARNINGREADVM      | Thresholds                                                                                                                                                 |                   |             |
| CRITICALREADVM     | Thresholds                                                                                                                                                 |                   |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                              |                   |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                             |                   |             |
| WARNINGWRITE       | Thresholds                                                                                                                                                 |                   |             |
| CRITICALWRITE      | Thresholds                                                                                                                                                 |                   |             |
| WARNINGWRITETOTAL  | Thresholds                                                                                                                                                 |                   |             |
| CRITICALWRITETOTAL | Thresholds                                                                                                                                                 |                   |             |
| WARNINGWRITEVM     | Thresholds                                                                                                                                                 |                   |             |
| CRITICALWRITEVM    | Thresholds                                                                                                                                                 |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                        | --verbose         |             |

</TabItem>
<TabItem value="Datastore-Snapshots-Global" label="Datastore-Snapshots-Global">

| Macro            | Description                                                                                                                                                | Default value     | Mandatory   |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER           | The connector will only take into account alerts coming from the datastores listed here                                                                                                                                   | .*                |             |
| UNKNOWNSTATUS    | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible} |                   |             |
| WARNINGSNAPSHOT  | Warning threshold                                                                                                                                          |                   |             |
| CRITICALSNAPSHOT | Critical threshold                                                                                                                                         |                   |             |
| WARNINGSTATUS    | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                              |                   |             |
| CRITICALSTATUS   | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                             |                   |             |
| WARNINGTOTAL     | Warning threshold                                                                                                                                          |                   |             |
| CRITICALTOTAL    | Critical threshold                                                                                                                                         |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                        | --verbose         |             |

</TabItem>
<TabItem value="Datastore-Usage-Global" label="Datastore-Usage-Global">

| Macro               | Description                                                                                                                                                | Default value     | Mandatory   |
|:--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER              | The connector will only take into account alerts coming from the datastores listed here                                                                                                                                     | .*                |             |
| UNIT                |                                                                                                                                                            | %                 |             |
| UNKNOWNSTATUS       | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible} |                   |             |
| WARNINGPROVISIONED  | Thresholds. : 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'provisioned'                                                                               |                   |             |
| CRITICALPROVISIONED | Thresholds. : 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'provisioned'                                                                               |                   |             |
| WARNINGSTATUS       | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                              |                   |             |
| CRITICALSTATUS      | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                             |                   |             |
| WARNINGUSAGE        | Thresholds. : 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'provisioned'                                                                               | 80                |             |
| CRITICALUSAGE       | Thresholds. : 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'provisioned'                                                                               | 90                |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                        | --verbose         |             |

</TabItem>
<TabItem value="Datastore-Vm-Count-Global" label="Datastore-Vm-Count-Global">

| Macro                  | Description                                                                                                                                                | Default value     | Mandatory   |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER                 | The connector will only take into account alerts coming from the datastores listed here                                                                                                                                   | .*                |             |
| UNKNOWNSTATUS          | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible} |                   |             |
| WARNINGOFF             | Warning threshold                                                                                                                                          |                   |             |
| CRITICALOFF            | Critical threshold                                                                                                                                         |                   |             |
| WARNINGON              | Warning threshold                                                                                                                                          |                   |             |
| CRITICALON             | Critical threshold                                                                                                                                         |                   |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                              |                   |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                             |                   |             |
| WARNINGSUSPENDED       | Warning threshold                                                                                                                                          |                   |             |
| CRITICALSUSPENDED      | Critical threshold                                                                                                                                         |                   |             |
| WARNINGTOTALOFF        | Warning threshold                                                                                                                                          |                   |             |
| CRITICALTOTALOFF       | Critical threshold                                                                                                                                         |                   |             |
| WARNINGTOTALON         | Warning threshold                                                                                                                                          |                   |             |
| CRITICALTOTALON        | Critical threshold                                                                                                                                         |                   |             |
| WARNINGTOTALSUSPENDED  | Warning threshold                                                                                                                                          |                   |             |
| CRITICALTOTALSUSPENDED | Critical threshold                                                                                                                                         |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                        | --verbose         |             |

</TabItem>
<TabItem value="ESX-Alarms-Global" label="ESX-Alarms-Global">

| Macro                      | Description                                                                                                                                                                 | Default value               | Mandatory   |
|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| FILTER                     | Hostnames of the ESX to monitor. If not set, we check all ESX                                                                                                                         | .*                          |             |
| FILTERTIME                 | The connector will ignore any alert older than the time period specified here (in seconds).                                                                                                                                 | 3600                        |             |
| WARNINGSTATUS              | Define the conditions to match for the status to be WARNING (Default: '%{status} =~ /yellow/i). You can use the following variables: %{status}, %{name}, %{entity}, %{type} | %{status} =~ /yellow/i      |             |
| CRITICALSTATUS             | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /red/i'). You can use the following variables: %{status}, %{name}, %{entity}, %{type}  | %{status} =~ /red/i         |             |
| WARNINGTOTALALARMWARNING   | Warning threshold                                                                                                                                                           |                             |             |
| CRITICALTOTALALARMWARNING  | Critical threshold                                                                                                                                                          |                             |             |
| WARNINGTOTALALARMCRITICAL  | Warning threshold                                                                                                                                                           |                             |             |
| CRITICALTOTALALARMCRITICAL | Critical threshold                                                                                                                                                          |                             |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                         | --verbose --ignore-warn-msg |             |

</TabItem>
<TabItem value="Esx-Cpu-Global" label="Esx-Cpu-Global">

| Macro               | Description                                                                                                                                          | Default value     | Mandatory   |
|:--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER              | Hostnames of the ESX to monitor. If not set, we check all ESX                                                                                                  | .*                |             |
| UNKNOWNSTATUS       | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} |                   |             |
| WARNING             | Warning threshold                                                                                                                                    |                   |             |
| CRITICAL            | Critical threshold                                                                                                                                   |                   |             |
| WARNINGCPU          | Warning threshold                                                                                                                                    |                   |             |
| CRITICALCPU         | Critical threshold                                                                                                                                   |                   |             |
| WARNINGSTATUS       | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                            |                   |             |
| CRITICALSTATUS      | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                           |                   |             |
| WARNINGTOTALCPUMHZ  | Warning threshold                                                                                                                                    |                   |             |
| CRITICALTOTALCPUMHZ | Critical threshold                                                                                                                                   |                   |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                  | --verbose         |             |

</TabItem>
<TabItem value="Esx-Datastores-Latency-Global" label="Esx-Datastores-Latency-Global">

| Macro                | Description                                                                                                                                          | Default value     | Mandatory   |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERESXNAME        | Hostnames of the ESX to monitor. If not set, we check all ESX                                                                                                  | .*                |             |
| FILTERDATASTORENAME  | Datastore to check. If not set, we check all datastores                                                                                              | .*                |             |
| UNKNOWNSTATUS        | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} |                   |             |
| WARNINGREADLATENCY   | Warning threshold                                                                                                                                    |                   |             |
| CRITICALREADLATENCY  | Critical threshold                                                                                                                                   |                   |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                            |                   |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                           |                   |             |
| WARNINGWRITELATENCY  | Warning threshold                                                                                                                                    |                   |             |
| CRITICALWRITELATENCY | Critical threshold                                                                                                                                   |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                  | --verbose         |             |

</TabItem>
<TabItem value="Esx-Health-Global" label="Esx-Health-Global">

| Macro                  | Description                                                                                                                                          | Default value               | Mandatory   |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| FILTER                 | Hostnames of the ESX to monitor. If not set, we check all ESX                                                                                                  | .*                          |             |
| UNKNOWNSTATUS          | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} | %{status} !~ /^connected$/i |             |
| WARNINGPROBLEMS        | Thresholds                                                                                                                                           |                             |             |
| CRITICALPROBLEMS       | Thresholds                                                                                                                                           |                             |             |
| WARNINGPROBLEMSRED     | Thresholds                                                                                                                                           |                             |             |
| CRITICALPROBLEMSRED    | Thresholds                                                                                                                                           |                             |             |
| WARNINGPROBLEMSYELLOW  | Thresholds                                                                                                                                           |                             |             |
| CRITICALPROBLEMSYELLOW | Thresholds                                                                                                                                           |                             |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                            |                             |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                           |                             |             |
| WARNINGTOTALPROBLEMS   | Thresholds                                                                                                                                           |                             |             |
| CRITICALTOTALPROBLEMS  | Thresholds                                                                                                                                           |                             |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                  | --verbose                   |             |

</TabItem>
<TabItem value="Esx-Memory-Global" label="Esx-Memory-Global">

| Macro                  | Description                                                                                                                                          | Default value     | Mandatory   |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER                 | Hostnames of the ESX to monitor. If not set, we check all ESX                                                                                                  | .*                |             |
| UNKNOWNSTATUS          | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} |                   |             |
| WARNING                | Warning threshold (can use unit option)                                                                                                              |                   |             |
| CRITICAL               | Critical threshold (can use unit option)                                                                                                             |                   |             |
| WARNINGOVERHEADMEMORY  | Overhead threshold                                                                                                                                  |                   |             |
| CRITICALOVERHEADMEMORY | Critical threshold                                                                                                                                   |                   |             |
| WARNINGSTATEMEMORY     | Warning threshold. For state != 'high': --warning-state=0                                                                                            |                   |             |
| CRITICALSTATEMEMORY    | Critical threshold. For state != 'high': --warning-state=0                                                                                           |                   |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                            |                   |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                           |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                  | --verbose         |             |

</TabItem>
<TabItem value="Esx-Service-Global" label="Esx-Service-Global">

| Macro                 | Description                                                                                                                                                                                   | Default value                                 | Mandatory   |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|:-----------:|
| FILTER                | Hostnames of the ESX to monitor. If not set, we check all ESX                                                                                                                                           | .*                                            |             |
| FILTERSERVICES        | Filter services you want to check (can be a regexp)                                                                                                                                           | ^(?!(snmpd\|xorg)$)                           |             |
| UNKNOWNSTATUS         | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i && %{maintenance} =~ /false/i'). You can use the following variables: %{status}            |                                               |             |
| CRITICALSERVICESTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{policy} =~ /^on\|automatic/i && !%{running}'). You can use the following variables: %{running}, %{label}, %{policy} | %{policy} =~ /^on\|automatic/i && !%{running} |             |
| WARNINGSERVICESTATUS  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{running}, %{label}, %{policy}                                               |                                               |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                                                     |                                               |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                                                                    |                                               |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                           | --verbose                                     |             |

</TabItem>
<TabItem value="Esx-Status-Global" label="Esx-Status-Global">

| Macro                 | Description                                                                                                                                                       | Default value                   | Mandatory   |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|:-----------:|
| FILTER                | Hostnames of the ESX to monitor. If not set, we check all ESX                                                                                                               | .*                              |             |
| UNKNOWNOVERALLSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}   | %{overall\_status} =~ /gray/i   |             |
| UNKNOWNSTATUS         | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}              |                                 |             |
| WARNINGOVERALLSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status} | %{overall\_status} =~ /yellow/i |             |
| CRITICALOVERALLSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{overall\_status} =~ /red/i'). You can use the following variables: %{overall\_status}   | %{overall\_status} =~ /red/i    |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                         |                                 |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                                        |                                 |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                               | --verbose                       |             |

</TabItem>
<TabItem value="Esx-Storage-Global" label="Esx-Storage-Global">

| Macro                   | Description                                                                                                                                                                                        | Default value                           | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|:-----------:|
| FILTER                  | Hostnames of the ESX to monitor. If not set, we check all ESX                                                                                                                                                | .*                                      |             |
| FILTERADAPTERNAME       | Filter adapters by name (can be a regexp)                                                                                                                                                          |                                         |             |
| FILTERLUNNAME           | Filter luns by name (can be a regexp)                                                                                                                                                              |                                         |             |
| FILTERPATHNAME          | Filter paths by name (can be a regexp)                                                                                                                                                             |                                         |             |
| UNKNOWNSTATUS           | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i && %{maintenance} =~ /false/i'). You can use the following variables: %{status}, %{maintenance} |                                         |             |
| WARNINGADAPTERSFAULT    | Thresholds                                                                                                                                                                                         |                                         |             |
| CRITICALADAPTERSFAULT   | Thresholds                                                                                                                                                                                         |                                         |             |
| WARNINGADAPTERSOFFLINE  | Thresholds                                                                                                                                                                                         |                                         |             |
| CRITICALADAPTERSOFFLINE | Thresholds                                                                                                                                                                                         |                                         |             |
| WARNINGADAPTERSONLINE   | Thresholds                                                                                                                                                                                         |                                         |             |
| CRITICALADAPTERSONLINE  | Thresholds                                                                                                                                                                                         |                                         |             |
| CRITICALADAPTERSTATUS   | Set critical threshold for adapter status (Default: '%{status} =~ /fault/'). You can use the following variables: %{name}, %{host}, %{status}                                                      | %{status} =~ /fault/                    |             |
| WARNINGADAPTERSTATUS    | Set warning threshold for adapter status. You can use the following variables: %{name}, %{host}, %{status}                                                                                         |                                         |             |
| WARNINGADAPTERSTOTAL    | Thresholds                                                                                                                                                                                         |                                         |             |
| CRITICALADAPTERSTOTAL   | Thresholds                                                                                                                                                                                         |                                         |             |
| WARNINGADAPTERSUNKNOWN  | Thresholds                                                                                                                                                                                         |                                         |             |
| CRITICALADAPTERSUNKNOWN | Thresholds                                                                                                                                                                                         |                                         |             |
| WARNINGLUNSDEGRADED     | Set warning threshold for the count of LUNs in a degraded state.                                                                                                                                                                                                   |                                         |             |
| CRITICALLUNSDEGRADED    | Set critical threshold for the count of LUNs in a degraded state.                                                                                                                                                                                                   |                                         |             |
| WARNINGLUNSERROR        | Set warning threshold for the count of LUNs in an error state.                                                                                                                                                                                                   |                                         |             |
| CRITICALLUNSERROR       | Set critical threshold for the count of LUNs in an error state.                                                                                                                                                                                                   |                                         |             |
| WARNINGLUNSOFF          | Set warning threshold for the count of LUNs that are offline.                                                                                                                                                                                                   |                                         |             |
| CRITICALLUNSOFF         | Set critical threshold for the count of LUNs that are offline.                                                                                                                                                                                                   |                                         |             |
| WARNINGLUNSOK           | Set warning threshold for the count of LUNs that are operational.                                                                                                                                                                                                   |                                         |             |
| CRITICALLUNSOK          | Set critical threshold for the count of LUNs that are operational.                                                                                                                                                                                                   |                                         |             |
| WARNINGLUNSQUIESCED     | Set warning threshold for the count of LUNs that are in a quiesced state.                                                                                                                                                                                                   |                                         |             |
| CRITICALLUNSQUIESCED    | Set critical threshold for the count of LUNs that are in a quiesced state.                                                                                                                                                                                                   |                                         |             |
| WARNINGLUNSTATUS        | Set warning threshold for lun status (Default: '%{status} =~ /degraded\|quiesced/'). You can use the following variables: %{name}, %{host}, %{status}                                              | %{status} =~ /degraded\|quiesced/       |             |
| CRITICALLUNSTATUS       | Set critical threshold for lun status (Default: '%{status} =~ /lostcommunication\|error/'). You can use the following variables: %{name}, %{host}, %{status}                                       | %{status} =~ /lostcommunication\|error/ |             |
| WARNINGLUNSTOTAL        |  Set warning threshold for the total count of LUNs.                                                                                                                                                                                                  |                                         |             |
| CRITICALLUNSTOTAL       | Set critical threshold for the total count of LUNs.                                                                                                                                                                                                   |                                         |             |
| WARNINGLUNSUNKNOWN      | Set warning threshold for the count of LUNs with an unknown status.                                                                                                                                                                                                   |                                         |             |
| CRITICALLUNSUNKNOWN     | Set critical threshold for the count of LUNs with an unknown status.                                                                                                                                                                                                   |                                         |             |
| WARNINGPATHSACTIVE      | Set warning threshold for the count of active storage paths.                                                                                                                                                                                                   |                                         |             |
| CRITICALPATHSACTIVE     | Set critical threshold for the count of active storage paths.                                                                                                                                                                                                   |                                         |             |
| WARNINGPATHSDEAD        | Set warning threshold for the count of dead storage paths.                                                                                                                                                                                                   |                                         |             |
| CRITICALPATHSDEAD       | Set critical threshold for the count of dead storage paths.                                                                                                                                                                                                   |                                         |             |
| WARNINGPATHSDISABLED    | Set warning threshold for the count of disabled storage paths.                                                                                                                                                                                                   |                                         |             |
| CRITICALPATHSDISABLED   | Set critical threshold for the count of disabled storage paths.                                                                                                                                                                                                   |                                         |             |
| WARNINGPATHSSTANDBY     | Set warning threshold for the count of storage paths in standby mode.                                                                                                                                                                                                   |                                         |             |
| CRITICALPATHSSTANDBY    | Set critical threshold for the count of storage paths in standby mode.                                                                                                                                                                                                   |                                         |             |
| CRITICALPATHSTATUS      | Set critical threshold for path status (Default: '%{status} =~ /dead/'). You can use the following variables: %{name}, %{host}, %{status}                                                          | %{status} =~ /dead/                     |             |
| WARNINGPATHSTATUS       | Set warning threshold for path status. You can use the following variables: %{name}, %{host}, %{status}                                                                                            |                                         |             |
| WARNINGPATHSTOTAL       | Set warning threshold for the total count of storage paths.                                                                                                                                                                                                   |                                         |             |
| CRITICALPATHSTOTAL      | Set critical threshold for the total count of storage paths.                                                                                                                                                                                                   |                                         |             |
| WARNINGPATHSUNKNOWN     | Set warning threshold for the count of storage paths with an unknown status.                                                                                                                                                                                                   |                                         |             |
| CRITICALPATHSUNKNOWN    | Set critical threshold for the count of storage paths with an unknown status.                                                                                                                                                                                                   |                                         |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{maintenance}                                                                        |                                         |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{maintenance}                                                                       |                                         |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                | --verbose                               |             |

</TabItem>
<TabItem value="Esx-Swap-Global" label="Esx-Swap-Global">

| Macro           | Description                                                                                                                                          | Default value     | Mandatory   |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER          | Hostnames of the ESX to monitor. If not set, we check all ESX                                                                                                  | .*                |             |
| UNKNOWNSTATUS   | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} |                   |             |
| WARNINGSTATUS   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                            |                   |             |
| CRITICALSTATUS  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                           |                   |             |
| WARNINGSWAPIN   | Warning threshold                                                                                                                                    |                   |             |
| CRITICALSWAPIN  | Critical threshold                                                                                                                                   |                   |             |
| WARNINGSWAPOUT  | Warning threshold                                                                                                                                    |                   |             |
| CRITICALSWAPOUT | Critical threshold                                                                                                                                   |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                  | --verbose         |             |

</TabItem>
<TabItem value="Esx-Time-Global" label="Esx-Time-Global">

| Macro          | Description                                                                                                                                          | Default value     | Mandatory   |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER         | Hostnames of the ESX to monitor. If not set, we check all ESX                                                                                                  | .*                |             |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} |                   |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                            |                   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                           |                   |             |
| WARNINGTIME    | Warning threshold in seconds                                                                                                                         | -2:2              |             |
| CRITICALTIME   | Critical threshold in seconds                                                                                                                        | -5:5              |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                  | --verbose         |             |

</TabItem>
<TabItem value="Esx-Traffic-Global" label="Esx-Traffic-Global">

| Macro                  | Description                                                                                                                                                         | Default value     | Mandatory   |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERESXNAME          | Hostnames of the ESX to monitor. If not set, we check all ESX                                                                                                                 | .*                |             |
| FILTERNICNAME          | ESX nic to check. If not set, we check all nics                                                                                                                     | .*                |             |
| UNKNOWNSTATUS          | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}                |                   |             |
| UNKNOWNLINKSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{link\_status}, %{display}                                       |                   |             |
| WARNINGDROPPEDIN       | Thresholds                                                                                                                                                          |                   |             |
| CRITICALDROPPEDIN      | Thresholds                                                                                                                                                          |                   |             |
| WARNINGDROPPEDOUT      | Thresholds                                                                                                                                                          |                   |             |
| CRITICALDROPPEDOUT     | Thresholds                                                                                                                                                          |                   |             |
| WARNINGHOSTTRAFFICIN   | Thresholds                                                                                                                                                          |                   |             |
| CRITICALHOSTTRAFFICIN  | Thresholds                                                                                                                                                          |                   |             |
| WARNINGHOSTTRAFFICOUT  | Thresholds                                                                                                                                                          |                   |             |
| CRITICALHOSTTRAFFICOUT | Thresholds                                                                                                                                                          |                   |             |
| WARNINGIN              | Thresholds                                                                                                                                                          | 80                |             |
| CRITICALIN             | Thresholds                                                                                                                                                          | 90                |             |
| WARNINGLINKSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{link\_status}, %{display}                                       |                   |             |
| CRITICALLINKSTATUS     | Define the conditions to match for the status to be CRITICAL (Default: '%{link\_status} !~ /up/'). You can use the following variables: %{link\_status}, %{display} |                   |             |
| WARNINGOUT             | Thresholds                                                                                                                                                          | 80                |             |
| CRITICALOUT            | Thresholds                                                                                                                                                          | 90                |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                           |                   |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                 | --verbose         |             |

</TabItem>
<TabItem value="Esx-Uptime-Global" label="Esx-Uptime-Global">

| Macro          | Description                                                                                                                                          | Default value     | Mandatory   |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER         | Hostnames of the ESX to monitor. If not set, we check all ESX                                                                                                  | .*                |             |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} |                   |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                            |                   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                           |                   |             |
| WARNINGTIME    | Warning threshold in seconds                                                                                                                         |                   |             |
| CRITICALTIME   | Critical threshold in seconds                                                                                                                        |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                  | --verbose         |             |

</TabItem>
<TabItem value="Esx-Vm-Count-Global" label="Esx-Vm-Count-Global">

| Macro                  | Description                                                                                                                                          | Default value     | Mandatory   |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER                 | Hostnames of the ESX to monitor. If not set, we check all ESX                                                                                                  | .*                |             |
| UNKNOWNSTATUS          | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} |                   |             |
| WARNINGOFF             | Warning threshold                                                                                                                                    |                   |             |
| CRITICALOFF            | Critical threshold                                                                                                                                   |                   |             |
| WARNINGON              | Warning threshold                                                                                                                                    |                   |             |
| CRITICALON             | Critical threshold                                                                                                                                   |                   |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                            |                   |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                           |                   |             |
| WARNINGSUSPENDED       | Warning threshold                                                                                                                                    |                   |             |
| CRITICALSUSPENDED      | Critical threshold                                                                                                                                   |                   |             |
| WARNINGTOTALOFF        | Warning threshold                                                                                                                                    |                   |             |
| CRITICALTOTALOFF       | Critical threshold                                                                                                                                   |                   |             |
| WARNINGTOTALON         | Warning threshold                                                                                                                                    |                   |             |
| CRITICALTOTALON        | Critical threshold                                                                                                                                   |                   |             |
| WARNINGTOTALSUSPENDED  | Warning threshold                                                                                                                                    |                   |             |
| CRITICALTOTALSUSPENDED | Critical threshold                                                                                                                                   |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                  | --verbose         |             |

</TabItem>
<TabItem value="Esx-is-Maintenance-Global" label="Esx-is-Maintenance-Global">

| Macro                     | Description                                                                                                                                              | Default value             | Mandatory   |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------|:-----------:|
| FILTER                    | Hostnames of the ESX to monitor. If not set, we check all ESX                                                                                                      | .*                        |             |
| UNKNOWNSTATUS             | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}     |                           |             |
| CRITICALMAINTENANCESTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{maintenance} !~ /false/'). You can use the following variables: %{maintenance} | %{maintenance} !~ /false/ |             |
| WARNINGMAINTENANCESTATUS  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{maintenance}                           |                           |             |
| WARNINGSTATUS             | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                |                           |             |
| CRITICALSTATUS            | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                               |                           |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                      | --verbose                 |             |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Macro                 | Description                                                                                                                                | Default value     | Mandatory   |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNIT                  | Select the unit for performance data and thresholds. May be 's' for seconds,'m' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is days | d                 | X           |
| FILTERNAME            | Filter licenses by name (can be a regexp)                                                                                                  |                   |             |
| FILTEREDITION         | Filter licenses by edition name (can be a regexp)                                                                                          |                   |             |
| WARNINGEXPIRES        | Thresholds                                                                                                                                 |                   |             |
| CRITICALEXPIRES       | Thresholds                                                                                                                                 |                   |             |
| WARNINGTOTALLICENSES  | Thresholds                                                                                                                                 |                   |             |
| CRITICALTOTALLICENSES | Thresholds                                                                                                                                 |                   |             |
| WARNINGUSAGE          | Thresholds                                                                                                                                 |                   |             |
| CRITICALUSAGE         | Thresholds                                                                                                                                 |                   |             |
| WARNINGUSAGEFREE      | Thresholds                                                                                                                                 |                   |             |
| CRITICALUSAGEFREE     | Thresholds                                                                                                                                 |                   |             |
| WARNINGUSAGEPRCT      | Thresholds                                                                                                                                 |                   |             |
| CRITICALUSAGEPRCT     | Thresholds                                                                                                                                 |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                        | --verbose         |             |

</TabItem>
<TabItem value="Vm-Cpu-Global" label="Vm-Cpu-Global">

| Macro            | Description                                                                                                                                                                                                                      | Default value     | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER           | Hostnames of the VMs to monitor. If not set, we check all VMs                                                                                                                                                                               | .*                |             |
| VMUUID           |                                                                                                                                                                                                                                  |                   |             |
| UNKNOWNSTATUS    | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state} |                   |             |
| WARNINGCPU       | Warning threshold                                                                                                                                                                                                                |                   |             |
| CRITICALCPU      | Critical threshold                                                                                                                                                                                                               |                   |             |
| WARNINGREADY     | Warning threshold                                                                                                                                                                                                                | 5                 |             |
| CRITICALREADY    | Critical threshold                                                                                                                                                                                                               | 10                |             |
| WARNINGSTATUS    | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                            |                   |             |
| CRITICALSTATUS   | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                           |                   |             |
| WARNINGUSAGE     | Warning threshold                                                                                                                                                                                                                | 80                |             |
| CRITICALUSAGE    | Critical threshold                                                                                                                                                                                                               | 90                |             |
| WARNINGUSAGEMHZ  | Warning threshold                                                                                                                                                                                                                |                   |             |
| CRITICALUSAGEMHZ | Critical threshold                                                                                                                                                                                                               |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                              | --verbose         |             |

</TabItem>
<TabItem value="Vm-Datastores-Iops-Global" label="Vm-Datastores-Iops-Global">

| Macro                   | Description                                                                                                                                                                                                                      | Default value     | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER                  | Hostnames of the VMs to monitor. If not set, we check all VMs                                                                                                                                                                               | .*                |             |
| FILTERDATASTORENAME     | Datastore to check. If not set, we check all datastores                                                                                                                                                                          | .*                |             |
| VMUUID                  |                                                                                                                                                                                                                                  |                   |             |
| UNKNOWNSTATUS           | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state} |                   |             |
| WARNINGMAXTOTALLATENCY  | Thresholds                                                                                                                                                                                                                       |                   |             |
| CRITICALMAXTOTALLATENCY | Thresholds                                                                                                                                                                                                                       |                   |             |
| WARNINGREAD             | Thresholds                                                                                                                                                                                                                       |                   |             |
| CRITICALREAD            | Thresholds                                                                                                                                                                                                                       |                   |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                            |                   |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                           |                   |             |
| WARNINGWRITE            | Thresholds                                                                                                                                                                                                                       |                   |             |
| CRITICALWRITE           | Thresholds                                                                                                                                                                                                                       |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                              | --verbose         |             |

</TabItem>
<TabItem value="Vm-Device-Global" label="Vm-Device-Global">

| Macro                        | Description                                                                                                                                                                | Default value     | Mandatory   |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER                       | Hostnames of the VMs to monitor. If not set, we check all VMs                                                                                                                         | .*                |             |
| VMUUID                       |                                                                                                                                                                            |                   |             |
| FILTERDEVICE                 | Device to check (Required) (Example: --device='VirtualCdrom')                                                                                                              |                   | X           |
| UNKNOWNSTATUS                | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state} |                   |             |
| WARNINGSTATUS                | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}                                       |                   |             |
| CRITICALSTATUS               | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}                                      |                   |             |
| WARNINGTOTALDEVICECONNECTED  | Warning threshold                                                                                                                                                          |                   |             |
| CRITICALTOTALDEVICECONNECTED | Critical threshold                                                                                                                                                         |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                        | --verbose         |             |

</TabItem>
<TabItem value="Vm-Limit-Global" label="Vm-Limit-Global">

| Macro                | Description                                                                                                                                                                                                                | Default value     | Mandatory   |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER               | Hostnames of the VMs to monitor. If not set, we check all VMs                                                                                                                                                                         | .*                |             |
| VMUUID               |                                                                                                                                                                                                                            |                   |             |
| CRITICALCPUSTATUS    | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit} | %{limit} != -1    |             |
| WARNINGCPUSTATUS     | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                            |                   |             |
| CRITICALDISKSTATUS   | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit} | %{limit} != -1    |             |
| WARNINGDISKSTATUS    | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                            |                   |             |
| CRITICALMEMORYSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit} | %{limit} != -1    |             |
| WARNINGMEMORYSTATUS  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                            |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                        | --verbose         |             |

</TabItem>
<TabItem value="Vm-Memory-Global" label="Vm-Memory-Global">

| Macro              | Description                                                                                                                                                                                                                      | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER             | Hostnames of the VMs to monitor. If not set, we check all VMs                                                                                                                                                                               | .*                |             |
| VMUUID             |                                                                                                                                                                                                                                  |                   |             |
| UNKNOWNSTATUS      | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state} |                   |             |
| WARNING            | Warning threshold                                                                                                                                                                                                                |                   |             |
| CRITICAL           | Critical threshold                                                                                                                                                                                                               |                   |             |
| WARNINGACTIVE      | Warning threshold                                                                                                                                                                                                                |                   |             |
| CRITICALACTIVE     | Critical threshold                                                                                                                                                                                                               |                   |             |
| WARNINGBALLOONING  | Warning threshold                                                                                                                                                                                                                |                   |             |
| CRITICALBALLOONING | Critical threshold                                                                                                                                                                                                               |                   |             |
| WARNINGOVERHEAD    | Warning threshold                                                                                                                                                                                                                |                   |             |
| CRITICALOVERHEAD   | Critical threshold                                                                                                                                                                                                               |                   |             |
| WARNINGSHARED      | Warning threshold                                                                                                                                                                                                                |                   |             |
| CRITICALSHARED     | Critical threshold                                                                                                                                                                                                               |                   |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                            |                   |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                           |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                              | --verbose         |             |

</TabItem>
<TabItem value="Vm-Snapshot-Global" label="Vm-Snapshot-Global">

| Macro        | Description                                                                                         | Default value                                         | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| FILTER       | Hostnames of the VMs to monitor. If not set, we check all VMs                                                  | .*                                                    |             |
| VMUUID       |                                                                                                     |                                                       |             |
| WARNING      | Warning threshold for snapshot's age                                                                | 259200                                                |             |
| CRITICAL     | Critical threshold for snapshot's age                                                               | 432000                                                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --disconnect-status='ok' --nopoweredon-skip --verbose |             |

</TabItem>
<TabItem value="Vm-Status-Global" label="Vm-Status-Global">

| Macro                 | Description                                                                                                                                                                                 | Default value                   | Mandatory   |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|:-----------:|
| FILTER                | Hostnames of the VMs to monitor. If not set, we check all VMs                                                                                                                                          | .*                              |             |
| UNKNOWNOVERALLSTATUS  | Define the conditions to match for the status to be UNKNOWN (Default: '%{overall\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}                             | %{overall\_status} =~ /gray/i   |             |
| VMUUID                |                                                                                                                                                                                             |                                 |             |
| UNKNOWNSTATUS         | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state}, %{power\_state} |                                 |             |
| WARNINGOVERALLSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status}                           | %{overall\_status} =~ /yellow/i |             |
| CRITICALOVERALLSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{overall\_status} =~ /red/i'). You can use the following variables: %{overall\_status}                             | %{overall\_status} =~ /red/i    |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{connection\_state}                                                                      |                                 |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{connection\_state}, %{power\_state}                                                    |                                 |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                         | --verbose                       |             |

</TabItem>
<TabItem value="Vm-Swap-Global" label="Vm-Swap-Global">

| Macro           | Description                                                                                                                                                                                                                      | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER          | Hostnames of the VMs to monitor. If not set, we check all VMs                                                                                                                                                                               | .*                |             |
| VMUUID          |                                                                                                                                                                                                                                  |                   |             |
| UNKNOWNSTATUS   | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state} |                   |             |
| WARNINGSTATUS   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                            |                   |             |
| CRITICALSTATUS  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                           |                   |             |
| WARNINGSWAPIN   | Warning threshold                                                                                                                                                                                                                |                   |             |
| CRITICALSWAPIN  | Critical threshold                                                                                                                                                                                                               |                   |             |
| WARNINGSWAPOUT  | Warning threshold                                                                                                                                                                                                                |                   |             |
| CRITICALSWAPOUT | Critical threshold                                                                                                                                                                                                               |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                              | --verbose         |             |

</TabItem>
<TabItem value="Vm-Thinprovisioning-Global" label="Vm-Thinprovisioning-Global">

| Macro        | Description                                                                                         | Default value                                         | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| FILTER       | Hostnames of the VMs to monitor. If not set, we check all VMs                                                  | .*                                                    |             |
| STATUS       | Thinprovisioning status (default: none) Example: 'active,CRITICAL' or 'notactive,WARNING'           | active,WARNING                                        | X           |
| VMUUID       |                                                                                                     |                                                       |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --disconnect-status='ok' --nopoweredon-skip --verbose |             |

</TabItem>
<TabItem value="Vm-Tools-Global" label="Vm-Tools-Global">

| Macro              | Description                                                                                         | Default value                                         | Mandatory   |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| FILTER             | Hostnames of the VMs to monitor. If not set, we check all VMs                                                  | .*                                                    |             |
| NOTINSTALLEDSTATUS | Status if vmtools is not installed (default: critical)                                              | critical                                              | X           |
| NOTRUNNINGSTATUS   | Status if vmtools is not running (default: critical)                                                | critical                                              | X           |
| NOTUP2DATESTATUS   | Status if vmtools is not up to date (default: warning)                                                | warning                                               |             |
| VMUUID             |                                                                                                     |                                                       |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --disconnect-status='ok' --nopoweredon-skip --verbose |             |

</TabItem>
<TabItem value="Vsan-Cluster-Usage" label="Vsan-Cluster-Usage">

| Macro                          | Description                                                                                         | Default value     | Mandatory   |
|:-------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGBACKENDCONGESTIONS      | Thresholds                                                                                          |                   |             |
| CRITICALBACKENDCONGESTIONS     | Thresholds                                                                                          |                   |             |
| WARNINGBACKENDLATENCYREAD      |                                                                                                     |                   |             |
| CRITICALBACKENDLATENCYREAD     |                                                                                                     |                   |             |
| WARNINGBACKENDLATENCYWRITE     |                                                                                                     |                   |             |
| CRITICALBACKENDLATENCYWRITE    |                                                                                                     |                   |             |
| WARNINGBACKENDOUTSTANDINGIO    | Thresholds                                                                                          |                   |             |
| CRITICALBACKENDOUTSTANDINGIO   | Thresholds                                                                                          |                   |             |
| WARNINGBACKENDREADUSAGE        | Thresholds                                                                                          |                   |             |
| CRITICALBACKENDREADUSAGE       | Thresholds                                                                                          |                   |             |
| WARNINGBACKENDTHROUGHPUTREAD   | Thresholds                                                                                          |                   |             |
| CRITICALBACKENDTHROUGHPUTREAD  | Thresholds                                                                                          |                   |             |
| WARNINGBACKENDTHROUGHPUTWRITE  | Thresholds                                                                                          |                   |             |
| CRITICALBACKENDTHROUGHPUTWRITE | Thresholds                                                                                          |                   |             |
| WARNINGBACKENDWRITEUSAGE       | Thresholds                                                                                          |                   |             |
| CRITICALBACKENDWRITEUSAGE      | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Vsan-Cluster-Usage-Global" label="Vsan-Cluster-Usage-Global">

| Macro                          | Description                                                                                         | Default value     | Mandatory   |
|:-------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                     | cluster to check. If not set, we check all clusters                                                 | .*                |             |
| WARNINGBACKENDCONGESTIONS      | Thresholds                                                                                          |                   |             |
| CRITICALBACKENDCONGESTIONS     | Thresholds                                                                                          |                   |             |
| WARNINGBACKENDLATENCYREAD      |                                                                                                     |                   |             |
| CRITICALBACKENDLATENCYREAD     |                                                                                                     |                   |             |
| WARNINGBACKENDLATENCYWRITE     |                                                                                                     |                   |             |
| CRITICALBACKENDLATENCYWRITE    |                                                                                                     |                   |             |
| WARNINGBACKENDOUTSTANDINGIO    | Thresholds                                                                                          |                   |             |
| CRITICALBACKENDOUTSTANDINGIO   | Thresholds                                                                                          |                   |             |
| WARNINGBACKENDREADUSAGE        | Thresholds                                                                                          |                   |             |
| CRITICALBACKENDREADUSAGE       | Thresholds                                                                                          |                   |             |
| WARNINGBACKENDTHROUGHPUTREAD   | Thresholds                                                                                          |                   |             |
| CRITICALBACKENDTHROUGHPUTREAD  | Thresholds                                                                                          |                   |             |
| WARNINGBACKENDTHROUGHPUTWRITE  | Thresholds                                                                                          |                   |             |
| CRITICALBACKENDTHROUGHPUTWRITE | Thresholds                                                                                          |                   |             |
| WARNINGBACKENDWRITEUSAGE       | Thresholds                                                                                          |                   |             |
| CRITICALBACKENDWRITEUSAGE      | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--mode=vsan-cluster-usage \
	--custommode=connector \
	--connector-hostname='localhost' \
	--connector-port='5700' \
	--container='default'  \
	--cluster-name='.*' \
	--filter \
	--warning-backend-read-usage='' \
	--critical-backend-read-usage='' \
	--warning-backend-write-usage='' \
	--critical-backend-write-usage='' \
	--warning-backend-congestions='' \
	--critical-backend-congestions='' \
	--warning-backend-outstanding-io='' \
	--critical-backend-outstanding-io='' \
	--warning-backend-throughput-read='' \
	--critical-backend-throughput-read='' \
	--warning-backend-throughput-write='' \
	--critical-backend-throughput-write='' \
	--warning-backend-latency-read='' \
	--critical-backend-latency-read='' \
	--warning-backend-latency-write='' \
	--critical-backend-latency-write=''
```

The expected command output is shown below:

```bash
OK: All clusters are ok | '*cluster*#cluster.vsan.backend.read.usage.iops'=iops;;;0;'*cluster*#cluster.vsan.backend.write.usage.iops'=iops;;;0;'*cluster*#cluster.vsan.backend.congestions.count'=;;;0;'*cluster*#cluster.vsan.backend.outstanding.io.count'=;;;0;'*cluster*#cluster.vsan.backend.throughput.read.bytespersecond'=B/s;;;0;'*cluster*#cluster.vsan.backend.throughput.write.bytespersecond'=B/s;;;0;'*cluster*#cluster.vsan.backend.latency.read.milliseconds'=ms;;;0;'*cluster*#cluster.vsan.backend.latency.write.milliseconds'=ms;;;0;
```

Here is another example:

```bash
/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl \
    --plugin=apps::vmware::connector::plugin \
    --mode=snapshot-vm \
    --custommode=connector \
    --connector-hostname='localhost' \
    --connector-port='5700' \
    --container='vcenter01' \
    --vm-hostname='.*' \
    --filter \
    --filter-uuid='' \
    --warning='259200' \
    --critical='432000' \
    --disconnect-status='ok' \
    --nopoweredon-skip \
    --check-consolidation \
    --verbose
```

The expected output is shown below:

```bash
CRITICAL: Snapshots for VM older than 432000 seconds: [TLS-LIN-001] | 'num_warning'=0;;;0; 'num_critical'=1;;;0;
'TLS-LIN-001' snapshot create time: 2020-07-20T12:19:16.246902Z [only base os image]
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                         | Linked service template                                                                           |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------|
| alarm-datacenter [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/alarmdatacenter.pm)]       | Virt-VMWare2-Datacenter-Alarms-Generic-custom<br />Virt-VMWare2-Datacenter-Alarms-Global-custom   |
| alarm-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/alarmhost.pm)]                   | Virt-VMWare2-ESX-Alarms-Global-custom                                                             |
| countvm-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/countvmhost.pm)]               | Virt-VMWare2-ESX-Vm-Count-Global-custom                                                           |
| cpu-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpucluster.pm)]                 | Virt-VMWare2-Cluster-Cpu-Generic-custom<br />Virt-VMWare2-Cluster-Cpu-Global-custom               |
| cpu-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpuhost.pm)]                       | Virt-VMWare2-ESX-Cpu-Global-custom                                                                |
| cpu-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpuvm.pm)]                           | Virt-VMWare2-Vm-Cpu-Global-custom                                                                 |
| datastore-countvm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorecountvm.pm)]     | Virt-VMWare2-Datastore-Vm-Count-Global-custom                                                     |
| datastore-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorehost.pm)]           | Virt-VMWare2-ESX-Datastores-Latency-Global-custom                                                 |
| datastore-io [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreio.pm)]               | Virt-VMWare2-Datastore-Io-Global-custom                                                           |
| datastore-iops [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreiops.pm)]           | Virt-VMWare2-Datastore-Iops-Global-custom                                                         |
| datastore-snapshot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoresnapshot.pm)]   | Virt-VMWare2-Datastore-Snapshots-Global-custom                                                    |
| datastore-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreusage.pm)]         | Virt-VMWare2-Datastore-Usage-Global-custom                                                        |
| datastore-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorevm.pm)]               | Virt-VMWare2-Vm-Datastores-Iops-Global-custom                                                     |
| device-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/devicevm.pm)]                     | Virt-VMWare2-Vm-Device-Global-custom                                                              |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/discovery.pm)]                    | Not used in this Monitoring Connector                                                             |
| getmap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/getmap.pm)]                          | Not used in this Monitoring Connector                                                             |
| health-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/healthhost.pm)]                 | Virt-VMWare2-ESX-Health-Global-custom                                                             |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/licenses.pm)]                      | Virt-VMWare2-Licenses-custom                                                                      |
| limit-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/limitvm.pm)]                       | Virt-VMWare2-Vm-Limit-Global-custom                                                               |
| list-clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listclusters.pm)]             | Used for service discovery                                                                        |
| list-datacenters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listdatacenters.pm)]       | Used for service discovery                                                                        |
| list-datastores [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listdatastores.pm)]         | Used for service discovery                                                                        |
| list-nichost [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listnichost.pm)]               | Not used in this Monitoring Connector                                                             |
| maintenance-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/maintenancehost.pm)]       | Virt-VMWare2-ESX-Maintenance-Global-custom                                                        |
| memory-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/memoryhost.pm)]                 | Virt-VMWare2-ESX-Memory-Global-custom                                                             |
| memory-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/memoryvm.pm)]                     | Virt-VMWare2-Vm-Memory-Global-custom                                                              |
| net-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/nethost.pm)]                       | Virt-VMWare2-ESX-Traffic-Global-custom                                                            |
| net-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/netvm.pm)]                           | Not used in this Monitoring Connector                                                             |
| service-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/servicehost.pm)]               | Virt-VMWare2-ESX-Service-Global-custom                                                            |
| snapshot-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/snapshotvm.pm)]                 | Virt-VMWare2-Vm-Snapshot-Global-custom                                                            |
| stat-connectors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statconnectors.pm)]         | Not used in this Monitoring Connector                                                             |
| status-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statuscluster.pm)]           | Virt-VMWare2-Cluster-Status-Generic-custom<br />Virt-VMWare2-Cluster-Status-Global-custom         |
| status-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statushost.pm)]                 | Virt-VMWare2-ESX-Status-Global-custom                                                             |
| status-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statusvm.pm)]                     | Virt-VMWare2-Vm-Status-Global-custom                                                              |
| storage-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/storagehost.pm)]               | Virt-VMWare2-ESX-Storage-Global-custom                                                            |
| swap-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/swaphost.pm)]                     | Virt-VMWare2-ESX-Swap-Global-custom                                                               |
| swap-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/swapvm.pm)]                         | Virt-VMWare2-Vm-Swap-Global-custom                                                                |
| thinprovisioning-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/thinprovisioningvm.pm)] | Virt-VMWare2-Vm-Thinprovisioning-Global-custom                                                    |
| time-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/timehost.pm)]                     | Virt-VMWare2-ESX-Time-Global-custom                                                               |
| tools-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/toolsvm.pm)]                       | Virt-VMWare2-Vm-Tools-Global-custom                                                               |
| uptime-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/uptimehost.pm)]                 | Virt-VMWare2-ESX-Uptime-Global-custom                                                             |
| vmoperation-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/vmoperationcluster.pm)] | Not used in this Monitoring Connector                                                             |
| vsan-cluster-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/vsanclusterusage.pm)]    | Virt-VMWare2-Vsan-Cluster-Usage-Generic-custom<br />Virt-VMWare2-Vsan-Cluster-Usage-Global-custom |

### Available options

#### Generic options

All generic options are listed here:

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
| --connector-hostname                       | Connector hostname (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --connector-port                           | Connector port (default: 5700).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --container                                | Container to use (it depends on the connector's configuration).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --vsphere-address                          | Address of vpshere/ESX to connect.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --vsphere-username                         | Username of vpshere/ESX connection (with --vsphere-address).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --vsphere-password                         | Password of vpshere/ESX connection (with --vsphere-address).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --timeout                                  | Set global execution timeout (Default: 50)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --sampling-period                          | Choose the sampling period (can change the default sampling for counters). Should be not different than 300 or 20.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --time-shift                               | Can shift the time. We the following option you can average X counters values (default: 0).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --case-insensitive                         | Searchs are case insensitive.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --unknown-connector-status                 | Set unknown threshold for connector status (Default: '%{code} \< 0 \|\| (%{code} \> 0 && %{code} \< 200)'). You can use the following variables: %{code}, %{short\_message}, %{extra\_message}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --warning-connector-status                 | Set warning threshold for connector status (Default: ''). You can use the following variables: %{code}, %{short\_message}, %{extra\_message}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --critical-connector-status                | Set critical threshold for connector status (Default: ''). You can use the following variables: %{code}, %{short\_message}, %{extra\_message}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cluster-Cpu" label="Cluster-Cpu">

| Option                   | Description                                            |
|:-------------------------|:-------------------------------------------------------|
| --cluster-name           | cluster to check. If not set, we check all clusters.   |
| --filter                 | Cluster name is a regexp.                              |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).   |
| --warning-* --critical-* | Thresholds. Can be: 'total-cpu', 'total-cpu-mhz'.      |

</TabItem>
<TabItem value="Cluster-Cpu-Global" label="Cluster-Cpu-Global">

| Option                   | Description                                            |
|:-------------------------|:-------------------------------------------------------|
| --cluster-name           | cluster to check. If not set, we check all clusters.   |
| --filter                 | Cluster name is a regexp.                              |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).   |
| --warning-* --critical-* | Thresholds. Can be: 'total-cpu', 'total-cpu-mhz'.      |

</TabItem>
<TabItem value="Cluster-Status" label="Cluster-Status">

| Option             | Description                                                                                                                                                                                                                                             |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --cluster-name     | cluster to check. If not set, we check all clusters.                                                                                                                                                                                                    |
| --filter           | Cluster name is a regexp.                                                                                                                                                                                                                               |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                                                                                                                    |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{overall\_status} =~ /gray/i \|\| %{vsan\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}, %{vsan\_status}, %{drs\_enabled}, %{ha\_enabled}       |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /yellow/i \|\| %{vsan\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status}, %{vsan\_status}, %{drs\_enabled}, %{ha\_enabled}   |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: '%{overall\_status} =~ /red/i \|\| %{vsan\_status} =~ /red/i'). You can use the following variables: %{overall\_status}, %{vsan\_status}, %{drs\_enabled}, %{ha\_enabled}        |

</TabItem>
<TabItem value="Cluster-Status-Global" label="Cluster-Status-Global">

| Option             | Description                                                                                                                                                                                                                                             |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --cluster-name     | cluster to check. If not set, we check all clusters.                                                                                                                                                                                                    |
| --filter           | Cluster name is a regexp.                                                                                                                                                                                                                               |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                                                                                                                    |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{overall\_status} =~ /gray/i \|\| %{vsan\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}, %{vsan\_status}, %{drs\_enabled}, %{ha\_enabled}       |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /yellow/i \|\| %{vsan\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status}, %{vsan\_status}, %{drs\_enabled}, %{ha\_enabled}   |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: '%{overall\_status} =~ /red/i \|\| %{vsan\_status} =~ /red/i'). You can use the following variables: %{overall\_status}, %{vsan\_status}, %{drs\_enabled}, %{ha\_enabled}        |

</TabItem>
<TabItem value="Datacenter-Alarms" label="Datacenter-Alarms">

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
| --datacenter           | Datacenter to check. If not set, we check all datacenters.                                                                                                                                                                                    |
| --exclude-type         | Exclude alarms of specified type(s). Can be a regex.  Can be for example: --exclude-type='HostSystem' will not show HostSystem alarms.                                                                                                        |
| --filter               | Datacenter is a regexp.                                                                                                                                                                                                                       |
| --filter-time          | Do not check alarms older than specified time (value in seconds).                                                                                                                                                                             |
| --filter-type          | Check only alarms for specified type(s). Can be a regex.  Can be for example: --filter-type='VirtualMachine' will only show alarms for VirtualMachines.                                                                                       |
| --memory               | Check new alarms only.                                                                                                                                                                                                                        |
| --warning-status       | Define the conditions to match for the status to be WARNING (Default: '%{status} =~ /yellow/i). You can use the following variables: %{status}, %{name}, %{entity}, %{type}.                                                                  |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /red/i'). You can use the following variables: %{status}, %{name}, %{entity}, %{type}.                                                                   |
| --warning-*            | Warning threshold. Can be: 'total-alarm-warning', 'total-alarm-critical'.                                                                                                                                                                     |
| --critical-*           | Critical threshold. Can be: 'total-alarm-warning', 'total-alarm-critical'.                                                                                                                                                                    |

</TabItem>
<TabItem value="Datacenter-Alarms-Global" label="Datacenter-Alarms-Global">

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
| --datacenter           | Datacenter to check. If not set, we check all datacenters.                                                                                                                                                                                    |
| --exclude-type         | Exclude alarms of specified type(s). Can be a regex.  Can be for example: --exclude-type='HostSystem' will not show HostSystem alarms.                                                                                                        |
| --filter               | Datacenter is a regexp.                                                                                                                                                                                                                       |
| --filter-time          | Do not check alarms older than specified time (value in seconds).                                                                                                                                                                             |
| --filter-type          | Check only alarms for specified type(s). Can be a regex.  Can be for example: --filter-type='VirtualMachine' will only show alarms for VirtualMachines.                                                                                       |
| --memory               | Check new alarms only.                                                                                                                                                                                                                        |
| --warning-status       | Define the conditions to match for the status to be WARNING (Default: '%{status} =~ /yellow/i). You can use the following variables: %{status}, %{name}, %{entity}, %{type}.                                                                  |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /red/i'). You can use the following variables: %{status}, %{name}, %{entity}, %{type}.                                                                   |
| --warning-*            | Warning threshold. Can be: 'total-alarm-warning', 'total-alarm-critical'.                                                                                                                                                                     |
| --critical-*           | Critical threshold. Can be: 'total-alarm-warning', 'total-alarm-critical'.                                                                                                                                                                    |

</TabItem>
<TabItem value="Datastore-Io-Global" label="Datastore-Io-Global">

| Option             | Description                                                                                                                                                  |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --datastore-name   | The connector will only take into account alerts coming from the datastores listed here.                                                                                                                                       |
| --filter           | Datastore name is a regexp.                                                                                                                                  |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                         |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                                |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                               |
| --warning-*        | Warning threshold. Can be: 'total-read', 'total-write', 'read', 'write'.                                                                                     |
| --critical-*       | Critical threshold. Can be: 'total-read', 'total-write', 'read', 'write'.                                                                                    |

</TabItem>
<TabItem value="Datastore-Iops-Global" label="Datastore-Iops-Global">

| Option                   | Description                                                                                                                                                  |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --datastore-name         | The connector will only take into account alerts coming from the datastores listed here.                                                                                                                                      |
| --filter                 | Datastore name is a regexp.                                                                                                                                  |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).                                                                                                         |
| --detail-iops-min        | Only display VMs with iops higher value (default: 50).                                                                                                       |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible}   |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                                |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                               |
| --warning-* --critical-* | Thresholds. Can be: 'read-total', 'write-total', 'read', 'write', 'read-vm', 'write-vm'.                                                                     |

</TabItem>
<TabItem value="Datastore-Snapshots-Global" label="Datastore-Snapshots-Global">

| Option             | Description                                                                                                                                                  |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --datastore-name   | The connector will only take into account alerts coming from the datastores listed here.                                                                                                                                     |
| --filter           | Datastore name is a regexp.                                                                                                                                  |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                         |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                                |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                               |
| --warning-*        | Warning threshold. Can be: 'total', 'snapshot'.                                                                                                              |
| --critical-*       | Critical threshold. Can be: 'total', 'snapshot'.                                                                                                             |

</TabItem>
<TabItem value="Datastore-Usage-Global" label="Datastore-Usage-Global">

| Option                   | Description                                                                                                                                                  |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --datastore-name         | The connector will only take into account alerts coming from the datastores listed here.                                                                                                                                   |
| --filter                 | Datastore name is a regexp.                                                                                                                                  |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).                                                                                                         |
| --filter-host            | Filter datastores attached to hosts (can be a regexp).                                                                                                       |
| --refresh                | Explicitly ask vmware to refreshes free-space and capacity values (slower).                                                                                  |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible}   |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                                |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                               |
| --warning-* --critical-* | Thresholds. Can be: Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'provisioned'.                                                                  |

</TabItem>
<TabItem value="Datastore-Vm-Count-Global" label="Datastore-Vm-Count-Global">

| Option             | Description                                                                                                                                                  |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --datastore-name   | The connector will only take into account alerts coming from the datastores listed here.                                                                                                                                     |
| --filter           | Datastore name is a regexp.                                                                                                                                  |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                         |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                                |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                               |
| --warning-*        | Warning threshold. Can be: 'total-on', 'total-off', 'total-suspended', 'on', 'off', 'suspended'.                                                             |
| --critical-*       | Critical threshold. Can be: 'total-on', 'total-off', 'total-suspended', 'on', 'off', 'suspended'.                                                            |

</TabItem>
<TabItem value="ESX-Alarms-Global" label="ESX-Alarms-Global">

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
| --esx-hostname         | Hostnames of the ESX to monitor. If not set, we check all ESX.                                                                                                                                                                                          |
| --filter               | Datacenter is a regexp.                                                                                                                                                                                                                       |
| --scope-datacenter     | Search in following datacenter(s) (can be a regexp).                                                                                                                                                                                          |
| --scope-cluster        | Search in following cluster(s) (can be a regexp).                                                                                                                                                                                             |
| --filter-time          | The connector will ignore any alert older than the time period specified here (in seconds).                                                                                                                                                                                                  |
| --memory               | Check new alarms only.                                                                                                                                                                                                                        |
| --warning-status       | Define the conditions to match for the status to be WARNING (Default: '%{status} =~ /yellow/i). You can use the following variables: %{status}, %{name}, %{entity}, %{type}.                                                                  |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /red/i'). You can use the following variables: %{status}, %{name}, %{entity}, %{type}.                                                                   |
| --warning-*            | Warning threshold. Can be: 'total-alarm-warning', 'total-alarm-critical'.                                                                                                                                                                     |
| --critical-*           | Critical threshold. Can be: 'total-alarm-warning', 'total-alarm-critical'.                                                                                                                                                                    |

</TabItem>
<TabItem value="Esx-Cpu-Global" label="Esx-Cpu-Global">

| Option             | Description                                                                                                                                            |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname     | Hostnames of the ESX to monitor. If not set, we check all ESX.                                                                                                   |
| --filter           | ESX hostname is a regexp.                                                                                                                              |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                   |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                                                      |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                              |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                             |
| --warning-*        | Warning threshold. Can be: 'total-cpu', 'total-cpu-mhz', 'cpu'.                                                                                        |
| --critical-*       | Critical threshold. Can be: 'total-cpu', 'total-cpu-mhz', 'cpu'.                                                                                       |

</TabItem>
<TabItem value="Esx-Datastores-Latency-Global" label="Esx-Datastores-Latency-Global">

| Option             | Description                                                                                                                                            |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname     | Hostnames of the ESX to monitor. If not set, we check all ESX.                                                                                                   |
| --filter           | ESX hostname is a regexp.                                                                                                                              |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                   |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                                                      |
| --datastore-name   | Datastore to check. If not set, we check all datastores.                                                                                               |
| --filter-datastore | Datastore name is a regexp.                                                                                                                            |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                              |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                             |
| --warning-*        | Warning threshold. Can be: 'read-latency', 'write-latency'.                                                                                            |
| --critical-*       | Critical threshold. Can be: 'read-latency', 'write-latency'.                                                                                           |

</TabItem>
<TabItem value="Esx-Health-Global" label="Esx-Health-Global">

| Option                   | Description                                                                                                                                                   |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname           | Hostnames of the ESX to monitor. If not set, we check all ESX.                                                                                                          |
| --filter                 | ESX hostname is a regexp.                                                                                                                                     |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).                                                                                                          |
| --scope-cluster          | Search in following cluster(s) (can be a regexp).                                                                                                             |
| --storage-status         | Check storage(s) status.                                                                                                                                      |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}          |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                     |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                                    |
| --warning-* --critical-* | Thresholds. Can be: 'total-problems', 'problems', 'problems-yellow', 'problems-red', 'sensor-temperature', 'sensor-fan', 'sensor-voltage', 'sensor-power'.    |

</TabItem>
<TabItem value="Esx-Memory-Global" label="Esx-Memory-Global">

| Option                     | Description                                                                                                                                            |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname             | Hostnames of the ESX to monitor. If not set, we check all ESX.                                                                                                   |
| --filter                   | ESX hostname is a regexp.                                                                                                                              |
| --scope-datacenter         | Search in following datacenter(s) (can be a regexp).                                                                                                   |
| --scope-cluster            | Search in following cluster(s) (can be a regexp).                                                                                                      |
| --units                    | Units of thresholds (Default: '%') ('%', 'B').                                                                                                         |
| --free                     | Thresholds are on free space left.                                                                                                                     |
| --unknown-status           | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   |
| --warning-status           | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                              |
| --critical-status          | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                             |
| --warning-consumed-memory  | Warning threshold (can use unit option).                                                                                                               |
| --critical-consumed-memory | Critical threshold (can use unit option).                                                                                                              |
| --warning-overhead-memory  | Overhead threshold.                                                                                                                                    |
| --critical-overhead-memory | Critical threshold.                                                                                                                                    |
| --warning-state-memory     | Warning threshold. For state != 'high': --warning-state=0                                                                                              |
| --critical-state-memory    | Critical threshold. For state != 'high': --warning-state=0                                                                                             |
| --no-memory-state          | Don't check memory state.                                                                                                                              |

</TabItem>
<TabItem value="Esx-Service-Global" label="Esx-Service-Global">

| Option                    | Description                                                                                                                                                                                      |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname            | Hostnames of the ESX to monitor. If not set, we check all ESX.                                                                                                                                             |
| --filter                  | ESX hostname is a regexp.                                                                                                                                                                        |
| --scope-datacenter        | Search in following datacenter(s) (can be a regexp).                                                                                                                                             |
| --scope-cluster           | Search in following cluster(s) (can be a regexp).                                                                                                                                                |
| --filter-services         | Filter services you want to check (can be a regexp).                                                                                                                                             |
| --unknown-status          | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i && %{maintenance} =~ /false/i'). You can use the following variables: %{status}               |
| --warning-status          | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                                                        |
| --critical-status         | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                                                                       |
| --warning-service-status  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{running}, %{label}, %{policy}                                                  |
| --critical-service-status | Define the conditions to match for the status to be CRITICAL (Default: '%{policy} =~ /^on\|automatic/i && !%{running}'). You can use the following variables: %{running}, %{label}, %{policy}    |

</TabItem>
<TabItem value="Esx-Status-Global" label="Esx-Status-Global">

| Option                    | Description                                                                                                                                                         |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname            | Hostnames of the ESX to monitor. If not set, we check all ESX.                                                                                                                |
| --filter                  | ESX hostname is a regexp.                                                                                                                                           |
| --scope-datacenter        | Search in following datacenter(s) (can be a regexp).                                                                                                                |
| --scope-cluster           | Search in following cluster(s) (can be a regexp).                                                                                                                   |
| --unknown-status          | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}                |
| --warning-status          | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                           |
| --critical-status         | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                                          |
| --unknown-overall-status  | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}     |
| --warning-overall-status  | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status}   |
| --critical-overall-status | Define the conditions to match for the status to be CRITICAL (Default: '%{overall\_status} =~ /red/i'). You can use the following variables: %{overall\_status}     |

</TabItem>
<TabItem value="Esx-Storage-Global" label="Esx-Storage-Global">

| Option                    | Description                                                                                                                                                                                          |
|:--------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname            | Hostnames of the ESX to monitor. If not set, we check all ESX.                                                                                                                                                 |
| --filter                  | ESX hostname is a regexp.                                                                                                                                                                            |
| --scope-datacenter        | Search in following datacenter(s) (can be a regexp).                                                                                                                                                 |
| --scope-cluster           | Search in following cluster(s) (can be a regexp).                                                                                                                                                    |
| --filter-adapter-name     | Filter adapters by name (can be a regexp).                                                                                                                                                           |
| --filter-lun-name         | Filter luns by name (can be a regexp).                                                                                                                                                               |
| --filter-path-name        | Filter paths by name (can be a regexp).                                                                                                                                                              |
| --unknown-status          | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i && %{maintenance} =~ /false/i'). You can use the following variables: %{status}, %{maintenance}   |
| --warning-status          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{maintenance}                                                                          |
| --critical-status         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{maintenance}                                                                         |
| --warning-adapter-status  | Set warning threshold for adapter status. You can use the following variables: %{name}, %{host}, %{status}                                                                                           |
| --critical-adapter-status | Set critical threshold for adapter status (Default: '%{status} =~ /fault/'). You can use the following variables: %{name}, %{host}, %{status}                                                        |
| --warning-lun-status      | Set warning threshold for lun status (Default: '%{status} =~ /degraded\|quiesced/'). You can use the following variables: %{name}, %{host}, %{status}                                                |
| --critical-lun-status     | Set critical threshold for lun status (Default: '%{status} =~ /lostcommunication\|error/'). You can use the following variables: %{name}, %{host}, %{status}                                         |
| --warning-path-status     | Set warning threshold for path status. You can use the following variables: %{name}, %{host}, %{status}                                                                                              |
| --critical-path-status    | Set critical threshold for path status (Default: '%{status} =~ /dead/'). You can use the following variables: %{name}, %{host}, %{status}                                                            |
| --warning-* --critical-*  | Thresholds. Can be: 'adapters-total', 'adapters-online', 'adapters-offline', 'adapters-fault', 'adapters-unknown',                                                                                   |

</TabItem>
<TabItem value="Esx-Swap-Global" label="Esx-Swap-Global">

| Option             | Description                                                                                                                                            |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname     | Hostnames of the ESX to monitor. If not set, we check all ESX.                                                                                                   |
| --filter           | ESX hostname is a regexp.                                                                                                                              |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                   |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                                                      |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                              |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                             |
| --warning-*        | Warning threshold. Can be: 'swap-in', 'swap-out'.                                                                                                      |
| --critical-*       | Critical threshold. Can be: 'swap-in', 'swap-out'.                                                                                                     |

</TabItem>
<TabItem value="Esx-Time-Global" label="Esx-Time-Global">

| Option             | Description                                                                                                                                            |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname     | Hostnames of the ESX to monitor. If not set, we check all ESX.                                                                                                   |
| --filter           | ESX hostname is a regexp.                                                                                                                              |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                   |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                                                      |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                              |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                             |
| --warning-time     | Warning threshold in seconds.                                                                                                                          |
| --critical-time    | Critical threshold in seconds.                                                                                                                         |

</TabItem>
<TabItem value="Esx-Traffic-Global" label="Esx-Traffic-Global">

| Option                   | Description                                                                                                                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname           | Hostnames of the ESX to monitor. If not set, we check all ESX.                                                                                                                                                                    |
| --filter                 | ESX hostname is a regexp.                                                                                                                                                                                               |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).                                                                                                                                                                    |
| --scope-cluster          | Search in following cluster(s) (can be a regexp).                                                                                                                                                                       |
| --nic-name               | ESX nic to check. If not set, we check all nics.                                                                                                                                                                        |
| --filter-vswitch-name    | Filter vswitch by name. It monitors only ESX nic that belongs to the filtered vswitches.                                                                                                                                |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}                                                                    |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                                                                               |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                                                                                              |
| --unknown-link-status    | Define the conditions to match for the status to be WARNING. You can use the following variables: %{link\_status}, %{display}                                                                                           |
| --warning-link-status    | Define the conditions to match for the status to be WARNING. You can use the following variables: %{link\_status}, %{display}                                                                                           |
| --critical-link-status   | Define the conditions to match for the status to be CRITICAL (Default: '%{link\_status} !~ /up/'). You can use the following variables: %{link\_status}, %{display}                                                     |
| --warning-* --critical-* | Thresholds. Can be: 'host-traffic-in' (b/s), 'host-traffic-out' (b/s), 'vswitch-traffic-in' (b/s), 'vswitch-traffic-out' (b/s), 'link-traffic-in' (%), 'link-traffic-out' (%), 'link-dropped-in', 'link-dropped-out'.   |
| --no-proxyswitch         | Use the following option if you are checking an ESX 3.x version (it's mandatory).                                                                                                                                       |

</TabItem>
<TabItem value="Esx-Uptime-Global" label="Esx-Uptime-Global">

| Option             | Description                                                                                                                                            |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname     | Hostnames of the ESX to monitor. If not set, we check all ESX.                                                                                                   |
| --filter           | ESX hostname is a regexp.                                                                                                                              |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                   |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                                                      |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                              |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                             |
| --warning-time     | Warning threshold in seconds.                                                                                                                          |
| --critical-time    | Critical threshold in seconds.                                                                                                                         |

</TabItem>
<TabItem value="Esx-Vm-Count-Global" label="Esx-Vm-Count-Global">

| Option             | Description                                                                                                                                            |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname     | Hostnames of the ESX to monitor. If not set, we check all ESX.                                                                                                   |
| --filter           | ESX hostname is a regexp.                                                                                                                              |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                   |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                                                      |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                              |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                             |
| --warning-*        | Warning threshold. Can be: 'total-on', 'total-off', 'total-suspended', 'on', 'off', 'suspended'.                                                       |
| --critical-*       | Critical threshold. Can be: 'total-on', 'total-off', 'total-suspended', 'on', 'off', 'suspended'.                                                      |

</TabItem>
<TabItem value="Esx-is-Maintenance-Global" label="Esx-is-Maintenance-Global">

| Option                        | Description                                                                                                                                                 |
|:------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname                | Hostnames of the ESX to monitor. If not set, we check all ESX.                                                                                                        |
| --filter                      | ESX hostname is a regexp.                                                                                                                                   |
| --scope-datacenter            | Search in following datacenter(s) (can be a regexp).                                                                                                        |
| --scope-cluster               | Search in following cluster(s) (can be a regexp).                                                                                                           |
| --unknown-status              | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}        |
| --warning-status              | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                   |
| --critical-status             | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                                  |
| --warning-maintenance-status  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{maintenance}                              |
| --critical-maintenance-status | Define the conditions to match for the status to be CRITICAL (Default: '%{maintenance} !~ /false/'). You can use the following variables: %{maintenance}    |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Option                   | Description                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter licenses by name (can be a regexp).                                                                                                    |
| --exclude-name           | Exclude licenses by name (can be a regexp).                                                                                                   |
| --filter-edition         | Filter licenses by edition name (can be a regexp).                                                                                            |
| --exclude-edition        | Exclude licenses by edition name (can be a regexp).                                                                                           |
| --unit                   | Select the unit for performance data and thresholds. May be 's' for seconds,'m' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is days.   |
| --warning-* --critical-* | Thresholds. Can be: 'total-licenses', 'usage', 'usage-free', 'usage-prct', 'expires'.                                                         |

</TabItem>
<TabItem value="Vm-Cpu-Global" label="Vm-Cpu-Global">

| Option               | Description                                                                                                                                                                                                                        |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname        | Hostnames of the VMs to monitor. If not set, we check all VMs.                                                                                                                                                                                |
| --filter             | VM hostname is a regexp. Exemple : --vm-hostname='^((VM-PROD-*))' --filter                                                                                                                                                         |
| --filter-description | Filter also virtual machines description (can be a regexp).                                                                                                                                                                        |
| --filter-os          | Filter also virtual machines OS name (can be a regexp).                                                                                                                                                                            |
| --scope-datacenter   | Search in following datacenter(s) (can be a regexp).                                                                                                                                                                               |
| --scope-cluster      | Search in following cluster(s) (can be a regexp).                                                                                                                                                                                  |
| --scope-host         | Search in following host(s) (can be a regexp).                                                                                                                                                                                     |
| --unknown-status     | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   |
| --warning-status     | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                              |
| --critical-status    | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                             |
| --warning-*          | Warning threshold. Can be: 'total-cpu', 'total-cpu-mhz', 'cpu-ready', 'cpu'.                                                                                                                                                       |
| --critical-*         | Critical threshold. Can be: 'total-cpu', 'total-cpu-mhz', 'cpu-ready', 'cpu'.                                                                                                                                                      |

</TabItem>
<TabItem value="Vm-Datastores-Iops-Global" label="Vm-Datastores-Iops-Global">

| Option                   | Description                                                                                                                                                                                                                        |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname            | Hostnames of the VMs to monitor. If not set, we check all VMs.                                                                                                                                                                                |
| --filter                 | VM hostname is a regexp.                                                                                                                                                                                                           |
| --filter-description     | Filter also virtual machines description (can be a regexp).                                                                                                                                                                        |
| --filter-os              | Filter also virtual machines OS name (can be a regexp).                                                                                                                                                                            |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).                                                                                                                                                                               |
| --scope-cluster          | Search in following cluster(s) (can be a regexp).                                                                                                                                                                                  |
| --scope-host             | Search in following host(s) (can be a regexp).                                                                                                                                                                                     |
| --datastore-name         | Datastore to check. If not set, we check all datastores.                                                                                                                                                                           |
| --filter-datastore       | Datastore name is a regexp.                                                                                                                                                                                                        |
| --display-description    | Display virtual machine description.                                                                                                                                                                                               |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                              |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                             |
| --warning-* --critical-* | Thresholds. Can be: 'max-total-latency', 'read', 'write'.                                                                                                                                                                          |

</TabItem>
<TabItem value="Vm-Device-Global" label="Vm-Device-Global">

| Option                | Description                                                                                                                                                                  |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname         | Hostnames of the VMs to monitor. If not set, we check all VMs.                                                                                                                          |
| --filter              | VM hostname is a regexp.                                                                                                                                                     |
| --filter-description  | Filter also virtual machines description (can be a regexp).                                                                                                                  |
| --filter-os           | Filter also virtual machines OS name (can be a regexp).                                                                                                                      |
| --scope-datacenter    | Search in following datacenter(s) (can be a regexp).                                                                                                                         |
| --scope-cluster       | Search in following cluster(s) (can be a regexp).                                                                                                                            |
| --scope-host          | Search in following host(s) (can be a regexp).                                                                                                                               |
| --display-description | Display virtual machine description.                                                                                                                                         |
| --device              | Device to check (Required) (Example: --device='VirtualCdrom').                                                                                                               |
| --unknown-status      | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state}   |
| --warning-status      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}                                         |
| --critical-status     | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}                                        |
| --warning-*           | Warning threshold. Can be: 'total-device-connected', 'device-connected'.                                                                                                     |
| --critical-*          | Critical threshold. Can be: 'total-device-connected', 'device-connected'.                                                                                                    |

</TabItem>
<TabItem value="Vm-Limit-Global" label="Vm-Limit-Global">

| Option                   | Description                                                                                                                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname            | Hostnames of the VMs to monitor. If not set, we check all VMs.                                                                                                                                                                           |
| --filter                 | VM hostname is a regexp.                                                                                                                                                                                                      |
| --filter-description     | Filter also virtual machines description (can be a regexp).                                                                                                                                                                   |
| --filter-os              | Filter also virtual machines OS name (can be a regexp).                                                                                                                                                                       |
| --display-description    | Display virtual machine description.                                                                                                                                                                                          |
| --check-disk-limit       | Check disk limits (since vsphere 5.0).                                                                                                                                                                                        |
| --warning-disk-status    | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                               |
| --critical-disk-status   | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}    |
| --warning-cpu-status     | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                               |
| --critical-cpu-status    | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}    |
| --warning-memory-status  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                               |
| --critical-memory-status | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}    |

</TabItem>
<TabItem value="Vm-Memory-Global" label="Vm-Memory-Global">

| Option                | Description                                                                                                                                                                                                                        |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname         | Hostnames of the VMs to monitor. If not set, we check all VMs.                                                                                                                                                                                |
| --filter              | VM hostname is a regexp.                                                                                                                                                                                                           |
| --filter-description  | Filter also virtual machines description (can be a regexp).                                                                                                                                                                        |
| --filter-os           | Filter also virtual machines OS name (can be a regexp).                                                                                                                                                                            |
| --scope-datacenter    | Search in following datacenter(s) (can be a regexp).                                                                                                                                                                               |
| --scope-cluster       | Search in following cluster(s) (can be a regexp).                                                                                                                                                                                  |
| --scope-host          | Search in following host(s) (can be a regexp).                                                                                                                                                                                     |
| --display-description | Display virtual machine description.                                                                                                                                                                                               |
| --unknown-status      | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   |
| --warning-status      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                              |
| --critical-status     | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                             |
| --units               | Units of thresholds (Default: '%') ('%', 'B').                                                                                                                                                                                     |
| --free                | Thresholds are on free space left.                                                                                                                                                                                                 |
| --warning-*           | Warning threshold. Can be: 'consumed', 'active', 'overhead', 'ballooning', 'shared'.                                                                                                                                               |
| --critical-*          | Critical threshold. Can be: 'consumed', 'active', 'overhead', 'ballooning', 'shared'.                                                                                                                                              |

</TabItem>
<TabItem value="Vm-Snapshot-Global" label="Vm-Snapshot-Global">

| Option                | Description                                                                                                                                                   |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname         | Hostnames of the VMs to monitor. If not set, we check all VMs.                                                                                                           |
| --filter              | VM hostname is a regexp.                                                                                                                                      |
| --filter-description  | Filter also virtual machines description (can be a regexp).                                                                                                   |
| --filter-os           | Filter also virtual machines OS name (can be a regexp).                                                                                                       |
| --scope-datacenter    | Search in following datacenter(s) (can be a regexp).                                                                                                          |
| --scope-cluster       | Search in following cluster(s) (can be a regexp).                                                                                                             |
| --scope-host          | Search in following host(s) (can be a regexp).                                                                                                                |
| --display-description | Display virtual machine description.                                                                                                                          |
| --check-consolidation | Check if VM needs consolidation (since vsphere 5.0).                                                                                                          |
| --disconnect-status   | Status if VM disconnected (default: 'unknown').                                                                                                               |
| --nopoweredon-skip    | Skip check if VM is not poweredOn.                                                                                                                            |
| --empty-continue      | Ask to the connector that an empty response is ok.                                                                                                            |
| --unit                | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds   |
| --warning             | Warning threshold for snapshot's age.                                                                                                                         |
| --critical            | Critical threshold for snapshot's age.                                                                                                                        |

</TabItem>
<TabItem value="Vm-Status-Global" label="Vm-Status-Global">

| Option                    | Description                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname             | Hostnames of the VMs to monitor. If not set, we check all VMs.                                                                                                                                           |
| --filter                  | VM hostname is a regexp.                                                                                                                                                                      |
| --filter-description      | Filter also virtual machines description (can be a regexp).                                                                                                                                   |
| --filter-os               | Filter also virtual machines OS name (can be a regexp).                                                                                                                                       |
| --scope-datacenter        | Search in following datacenter(s) (can be a regexp).                                                                                                                                          |
| --scope-cluster           | Search in following cluster(s) (can be a regexp).                                                                                                                                             |
| --scope-host              | Search in following host(s) (can be a regexp).                                                                                                                                                |
| --unknown-status          | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   |
| --warning-status          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{connection\_state}                                                                        |
| --critical-status         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{connection\_state}, %{power\_state}                                                      |
| --unknown-overall-status  | Define the conditions to match for the status to be UNKNOWN (Default: '%{overall\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}                               |
| --warning-overall-status  | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status}                             |
| --critical-overall-status | Define the conditions to match for the status to be CRITICAL (Default: '%{overall\_status} =~ /red/i'). You can use the following variables: %{overall\_status}                               |

</TabItem>
<TabItem value="Vm-Swap-Global" label="Vm-Swap-Global">

| Option                | Description                                                                                                                                                                                                                        |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname         | Hostnames of the VMs to monitor. If not set, we check all VMs.                                                                                                                                                                                |
| --filter              | VM hostname is a regexp.                                                                                                                                                                                                           |
| --filter-description  | Filter also virtual machines description (can be a regexp).                                                                                                                                                                        |
| --filter-os           | Filter also virtual machines OS name (can be a regexp).                                                                                                                                                                            |
| --scope-datacenter    | Search in following datacenter(s) (can be a regexp).                                                                                                                                                                               |
| --scope-cluster       | Search in following cluster(s) (can be a regexp).                                                                                                                                                                                  |
| --scope-host          | Search in following host(s) (can be a regexp).                                                                                                                                                                                     |
| --display-description | Display virtual machine description.                                                                                                                                                                                               |
| --unknown-status      | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   |
| --warning-status      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                              |
| --critical-status     | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                             |
| --warning-*           | Warning threshold. Can be: 'swap-in', 'swap-out'.                                                                                                                                                                                  |
| --critical-*          | Critical threshold. Can be: 'swap-in', 'swap-out'.                                                                                                                                                                                 |

</TabItem>
<TabItem value="Vm-Thinprovisioning-Global" label="Vm-Thinprovisioning-Global">

| Option                    | Description                                                                                  |
|:--------------------------|:---------------------------------------------------------------------------------------------|
| --vm-hostname             | Hostnames of the VMs to monitor. If not set, we check all VMs.                                          |
| --filter                  | VM hostname is a regexp.                                                                     |
| --filter-description      | Filter also virtual machines description (can be a regexp).                                  |
| --filter-os               | Filter also virtual machines OS name (can be a regexp).                                      |
| --scope-datacenter        | Search in following datacenter(s) (can be a regexp).                                         |
| --scope-cluster           | Search in following cluster(s) (can be a regexp).                                            |
| --scope-host              | Search in following host(s) (can be a regexp).                                               |
| --disconnect-status       | Status if VM disconnected (default: 'unknown').                                              |
| --nopoweredon-skip        | Skip check if VM is not poweredOn.                                                           |
| --display-description     | Display virtual machine description.                                                         |
| --thinprovisioning-status | Thinprovisioning status (default: none) Example: 'active,CRITICAL' or 'notactive,WARNING'    |

</TabItem>
<TabItem value="Vm-Tools-Global" label="Vm-Tools-Global">

| Option                      | Description                                                   |
|:----------------------------|:--------------------------------------------------------------|
| --vm-hostname               | Hostnames of the VMs to monitor. If not set, we check all VMs.           |
| --filter                    | VM hostname is a regexp.                                      |
| --filter-description        | Filter also virtual machines description (can be a regexp).   |
| --filter-os                 | Filter also virtual machines OS name (can be a regexp).       |
| --scope-datacenter          | Search in following datacenter(s) (can be a regexp).          |
| --scope-cluster             | Search in following cluster(s) (can be a regexp).             |
| --scope-host                | Search in following host(s) (can be a regexp).                |
| --disconnect-status         | Status if VM disconnected (default: 'unknown').               |
| --nopoweredon-skip          | Skip check if VM is not poweredOn.                            |
| --empty-continue            | Ask to the connector that an empty response is ok.            |
| --display-description       | Display virtual machine description.                          |
| --tools-notinstalled-status | Status if vmtools is not installed (default: critical).       |
| --tools-notrunning-status   | Status if vmtools is not running (default: critical).         |
| --tools-notup2date-status   | Status if vmtools is not upd2date (default: warning).         |

</TabItem>
<TabItem value="Vsan-Cluster-Usage" label="Vsan-Cluster-Usage">

| Option                   | Description                                                                                                                                                                  |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --cluster-name           | cluster to check. If not set, we check all clusters.                                                                                                                         |
| --filter                 | Cluster name is a regexp.                                                                                                                                                    |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).                                                                                                                         |
| --warning-* --critical-* | Thresholds. Can be: 'backend-write-usage', 'backend-read-usage', 'backend-outstanding-io', 'backend-congestions', 'backend-throughput-read', 'backend-throughput-write' .    |

</TabItem>
<TabItem value="Vsan-Cluster-Usage-Global" label="Vsan-Cluster-Usage-Global">

| Option                   | Description                                                                                                                                                                  |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --cluster-name           | cluster to check. If not set, we check all clusters.                                                                                                                         |
| --filter                 | Cluster name is a regexp.                                                                                                                                                    |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).                                                                                                                         |
| --warning-* --critical-* | Thresholds. Can be: 'backend-write-usage', 'backend-read-usage', 'backend-outstanding-io', 'backend-congestions', 'backend-throughput-read', 'backend-throughput-write' .    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--mode=vsan-cluster-usage \
	--help
```

---
id: network-cisco-standard-snmp
title: Cisco Standard SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Cisco Standard** brings a host template:

* **Net-Cisco-Standard-SNMP**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Cisco-Standard-SNMP" label="Net-Cisco-Standard-SNMP">

| Service Alias | Service Template                    | Service Description                                                                                           |
|:--------------|:------------------------------------|:--------------------------------------------------------------------------------------------------------------|
| Cpu           | Net-Cisco-Standard-Cpu-SNMP         | Check the rate of utilization of CPU for the machine. This check can give the average utilization rate of CPU |
| Environment   | Net-Cisco-Standard-Environment-SNMP | Check hardware environment                                                                                    |
| Memory        | Net-Cisco-Standard-Memory-SNMP      | Check machine memory usage                                                                                    |

> The services listed above are created automatically when the **Net-Cisco-Standard-SNMP** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                      | Service Description                           | Discovery  |
|:--------------|:--------------------------------------|:----------------------------------------------|:-----------|
| Aaa-Servers   | Net-Cisco-Standard-Aaa-Servers-SNMP   | Check AAA servers                             | X          |
| Anycast       | Net-Cisco-Standard-Anycast-SNMP       | Check traffic types                           |            |
| Arp           | Net-Cisco-Standard-Arp-SNMP           | Check arp table                               |            |
| Bgp           | Net-Cisco-Standard-Bgp-SNMP           | Check BGP                                     |            |
| Configuration | Net-Cisco-Standard-Configuration-SNMP | Check Cisco changed and saved configurations  |            |
| Hsrp          | Net-Cisco-Standard-Hsrp-SNMP          | Check Cisco HSRP status                       |            |
| Interfaces    | Net-Cisco-Standard-Interfaces-SNMP    | Check interfaces                              | X          |
| Ipsla         | Net-Cisco-Standard-Ipsla-SNMP         | Check RTT Controls                            |            |
| Memory-Flash  | Net-Cisco-Standard-Memory-Flash-SNMP  | Check memory flash usages                     |            |
| Qos-Usage     | Net-Cisco-Standard-Qos-Usage-SNMP     | Check QoS usage                               |            |
| Spanning-Tree | Net-Cisco-Standard-SpanningTree-SNMP  | Check Spanning Tree state on interfaces       |            |
| Stack         | Net-Cisco-Standard-Stack-SNMP         | Check Cisco stack state                       |            |
| Voice-Call    | Net-Cisco-Standard-Voice-Call-SNMP    | Check call traffic statistics                 |            |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then appy the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                               | Description                                         |
|:----------------------------------------|:----------------------------------------------------|
| Net-Cisco-Standard-SNMP-Aaa-Server-Name | Discover AAA servers and monitor utilization        |
| Net-Cisco-Standard-SNMP-Interface-Name  | Discover network interfaces and monitor utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Aaa-Servers" label="Aaa-Servers">

| Metric name                                                                               | Unit  |
|:------------------------------------------------------------------------------------------|:------|
| aaa_servers.total.count                                                                   |       |
| aaa server status                                                                         |       |
| *address:authen_port:acc_port*#aaa_server.authentication.requests.persecond               | /s    |
| *address:authen_port:acc_port*#aaa_server.authentication.requests.timeout.count           |       |
| *address:authen_port:acc_port*#aaa_server.authentication.transactions.succeeded.persecond | /s    |
| *address:authen_port:acc_port*#aaa_server.authentication.roundtrip.time.milliseconds      | ms    |
| *address:authen_port:acc_port*#aaa_server.accounting.requests.persecond                   | /s    |
| *address:authen_port:acc_port*#aaa_server.accounting.requests.timeout.count               |       |
| *address:authen_port:acc_port*#aaa_server.accounting.transactions.succeeded.persecond     | /s    |
| *address:authen_port:acc_port*#aaa_server.accounting.roundtrip.time.milliseconds          | ms    |

</TabItem>
<TabItem value="Anycast" label="Anycast">

| Metric name                                            | Unit  |
|:-------------------------------------------------------|:------|
| interface status                                       |       |
| *interface_name*#interface.packets.in.unicast.count    |       |
| *interface_name*#interface.packets.in.broadcast.count  |       |
| *interface_name*#interface.packets.in.multicast.count  |       |
| *interface_name*#interface.packets.out.unicast.count   |       |
| *interface_name*#interface.packets.out.broadcast.count |       |
| *interface_name*#interface.packets.out.multicast.count |       |

</TabItem>
<TabItem value="Arp" label="Arp">

| Metric name                 | Unit  |
|:----------------------------|:------|
| arp.total.entries.count     |       |
| arp.duplicate.macaddr.count |       |
| arp.duplicate.ipaddr.count  |       |

</TabItem>
<TabItem value="Bgp" label="Bgp">

| Metric name                                                | Unit  |
|:-----------------------------------------------------------|:------|
| bgp.peers.detected.count                                   |       |
| peers status                                               |       |
| *remote_addr~remote_port*#bgp.peer.update.last.seconds     | s     |
| *remote_addr~remote_port*#bgp.peer.prefixes.accepted.count |       |
| *remote_addr~remote_port*#bgp.peer.prefixes.denied.count   |       |

</TabItem>
<TabItem value="Configuration" label="Configuration">

| Metric name          | Unit  |
|:---------------------|:------|
| running_last_changed | s     |
| running_last_saved   | s     |
| startup_last_changed | s     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name                                  | Unit  |
|:---------------------------------------------|:------|
| cpu.utilization.5s.percentage                | %     |
| cpu.utilization.1m.percentage                | %     |
| cpu.utilization.5m.percentage                | %     |
| *cpu_num*#core.cpu.utilization.5s.percentage | %     |
| *cpu_num*#core.cpu.utilization.1m.percentage | %     |
| *cpu_num*#core.cpu.utilization.5m.percentage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Environment" label="Environment">

Coming soon

</TabItem>
<TabItem value="Hsrp" label="Hsrp">

| Metric name | Unit  |
|:------------|:------|
| hsrp status |       |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                                | Unit  |
|:-----------------------------------------------------------|:------|
| status                                                     |       |
| *interface_name*#interface.traffic.in.bitspersecond        |  b/s  |
| *interface_name*#interface.traffic.in.limit.bitspersecond  |  b/s  |
| *interface_name*#interface.traffic.out.bitspersecond       |  b/s  |
| *interface_name*#interface.traffic.out.limit.bitspersecond |  b/s  |
| *interface_name*#interface.packets.in.error.percentage     |  %    |
| *interface_name*#interface.packets.in.discard.percentage   |  %    |
| *interface_name*#interface.packets.out.error.percentage    |  %    |
| *interface_name*#interface.packets.out.discard.percentage  |  %    |
| *interface_name*#interface.packets.in.crc.count            |       |
| *interface_name*#interface.packets.in.fcserror.count       |       |

</TabItem>
<TabItem value="Ipsla" label="Ipsla">

Coming soon

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                    | Unit  |
|:-------------------------------|:------|
| *name*#memory.usage.percentage |       |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Memory-Flash" label="Memory-Flash">

| Metric name                                    | Unit  |
|:-----------------------------------------------|:------|
| memory partition status                        |       |
| *partition_name*#memory.flash.usage.bytes      | B     |
| *partition_name*#memory.flash.free.bytes       | B     |
| *partition_name*#memory.flash.usage.percentage | %     |

</TabItem>
<TabItem value="Qos-Usage" label="Qos-Usage">

| Metric name                                                                 | Unit  |
|:----------------------------------------------------------------------------|:------|
| qos.traffic.bitspersecond                                                   | b/s   |
| qos.drop.bitspersecond                                                      | b/s   |
| *interface_name:classmap_name*#qos.interface.classmap.traffic.bitspersecond |       |
| *interface_name:classmap_name*#qos.interface.classmap.drop.bitspersecond    | b/s   |
| *classmap_name*#qos.classmap.traffic.bitspersecond                          | b/s   |
| *classmap_name*#qos.classmap.drop.bitspersecond                             | b/s   |

</TabItem>
<TabItem value="Spanning-Tree" label="Spanning-Tree">

| Metric name          | Unit  |
|:---------------------|:------|
| spanning tree status |       |

</TabItem>
<TabItem value="Stack" label="Stack">

Coming soon

</TabItem>
<TabItem value="Voice-Call" label="Voice-Call">

| Metric name                                     | Unit  |
|:------------------------------------------------|:------|
| calls.active.1m.average.count                   |       |
| calls.active.5m.average.count                   |       |
| calls.active.15m.average.count                  |       |
| *connection_type*#connection.calls.active.count |       |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your Cisco device. Cisco provides an official documentation to achieve this: https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/7282-12.html

Here is an example: 

  * Connect to your router and reach the configuration prompt:

```
Router#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
Router(config)# 
``` 

  * Use this command to enable snmp-server and set a read-only community

```
Router(config)#snmp-server community public RO 
```

In the example above, 'public' is your snmp community. You do now want to use it in production ;)  
### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

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
dnf install centreon-pack-network-cisco-standard-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-cisco-standard-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-cisco-standard-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-cisco-standard-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Cisco Standard** connector through
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
dnf install centreon-plugin-Network-Cisco-Standard-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Cisco-Standard-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-cisco-standard-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Cisco-Standard-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Net-Cisco-Standard-SNMP-custom** template to the host. 

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Macro            | Description                                                                                           | Default value     | Mandatory   |
|:-----------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

4. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Aaa-Servers" label="Aaa-Servers">

| Macro                            | Description                                                                                                                  | Default value        | Mandatory   |
|:---------------------------------|:-----------------------------------------------------------------------------------------------------------------------------|:---------------------|:------------|
| FILTERNAME                       | Filter AAA server by name (E.g.: 10.199.126.100:1812:1813. Format: \[address\]:\[authPort\]:\[accPort\])                     |                      |             |
| WARNINGACCREQUESTS               | Thresholds                                                                                                                   |                      |             |
| CRITICALACCREQUESTS              | Thresholds                                                                                                                   |                      |             |
| WARNINGACCREQUESTSTIMEOUT        | Thresholds                                                                                                                   |                      |             |
| CRITICALACCREQUESTSTIMEOUT       | Thresholds                                                                                                                   |                      |             |
| WARNINGACCROUNDTRIPTIME          | Thresholds                                                                                                                   |                      |             |
| CRITICALACCROUNDTRIPTIME         | Thresholds                                                                                                                   |                      |             |
| WARNINGACCTRANSACTIONSSUCEEDED   | Thresholds                                                                                                                   |                      |             |
| CRITICALACCTRANSACTIONSSUCEEDED  | Thresholds                                                                                                                   |                      |             |
| WARNINGAUTHREQUESTS              | Thresholds                                                                                                                   |                      |             |
| CRITICALAUTHREQUESTS             | Thresholds                                                                                                                   |                      |             |
| WARNINGAUTHREQUESTSTIMEOUT       | Thresholds                                                                                                                   |                      |             |
| CRITICALAUTHREQUESTSTIMEOUT      | Thresholds                                                                                                                   |                      |             |
| WARNINGAUTHROUNDTRIPTIME         | Thresholds                                                                                                                   |                      |             |
| CRITICALAUTHROUNDTRIPTIME        | Thresholds                                                                                                                   |                      |             |
| WARNINGAUTHTRANSACTIONSSUCEEDED  | Thresholds                                                                                                                   |                      |             |
| CRITICALAUTHTRANSACTIONSSUCEEDED | Thresholds                                                                                                                   |                      |             |
| CRITICALSTATUS                   | Set critical threshold for status (Default: '%{status} =~ /dead/i'). You can use the following variables: %{status}, %{name} | %{status} =~ /dead/i |             |
| WARNINGSTATUS                    | Set warning threshold for status. You can use the following variables: %{status}, %{name}                                    |                      |             |
| WARNINGTOTAL                     | Thresholds                                                                                                                   |                      |             |
| CRITICALTOTAL                    | Thresholds                                                                                                                   |                      |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                          | --verbose            |             |

</TabItem>
<TabItem value="Anycast" label="Anycast">

| Macro            | Description                                                                                                                                                                                             | Default value     | Mandatory   |
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTER           | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface')                                                                                                                     | .*                |             |
| CRITICALINUCAST  | Thresholds                                                                                                                                                                                              |                   |             |
| WARNINGINUCAST   | Thresholds                                                                                                                                                                                              |                   |             |
| CRITICALOUTUCAST | Thresholds                                                                                                                                                                                              |                   |             |
| WARNINGOUTUCAST  | Thresholds                                                                                                                                                                                              |                   |             |
| CRITICALSTATUS   | Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display} |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                     | --verbose         |             |

</TabItem>
<TabItem value="Arp" label="Arp">

| Macro                    | Description                                                                                         | Default value     | Mandatory   |
|:-------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGDUPLICATEIPADDR   | Thresholds                                                                                          |                   |             |
| CRITICALDUPLICATEIPADDR  | Thresholds                                                                                          |                   |             |
| WARNINGDUPLICATEMACADDR  | Thresholds                                                                                          |                   |             |
| CRITICALDUPLICATEMACADDR | Thresholds                                                                                          |                   |             |
| WARNINGTOTALENTRIES      | Thresholds                                                                                          |                   |             |
| CRITICALTOTALENTRIES     | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Bgp" label="Bgp">

| Macro                  | Description                                                                                                                                                                                                    | Default value                                          | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|:------------|
| FILTERREMOTEADDR       | Filter based on IP of peers (regexp allowed)                                                                                                                                                                   |                                                        |             |
| FILTERREMOTEAS         | Filter based on remote AS number (regexp allowed)                                                                                                                                                              |                                                        |             |
| WARNINGPEERSDETECTED   | Thresholds                                                                                                                                                                                                     |                                                        |             |
| CRITICALPEERSDETECTED  | Thresholds                                                                                                                                                                                                     |                                                        |             |
| WARNINGPEERUPDATELAST  | Thresholds                                                                                                                                                                                                     |                                                        |             |
| CRITICALPEERUPDATELAST | Thresholds                                                                                                                                                                                                     |                                                        |             |
| CRITICALSTATUS         | Set critical threshold for status (Default: '%{adminStatus} =~ /start/ && %{state} !~ /established/'). You can use the following variables: %{adminStatus}, %{state}, %{localAddr}, %{remoteAddr}, %{remoteAs} | %{adminStatus} =~ /start/ && %{state} !~ /established/ |             |
| WARNINGSTATUS          | Set warning threshold for status. You can use the following variables: %{adminStatus}, %{state}, %{localAddr}, %{remoteAddr}, %{remoteAs}                                                                      |                                                        |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                            | --verbose                                              |             |

</TabItem>
<TabItem value="Configuration" label="Configuration">

| Macro          | Description                                                                                                                                                                                                             | Default value                                   | Mandatory   |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|:------------|
| CRITICALSTATUS | Set critical threshold for status (Default: '%{running\_last\_changed} \> %{running\_last\_saved}'). You can use the following variables: %{running\_last\_changed}, %{running\_last\_saved}, %{startup\_last\_changed} | %{running_last_changed} > %{running_last_saved} |             |
| WARNINGSTATUS  | Set warning threshold for status (Default: ''). You can use the following variables: %{running\_last\_changed}, %{running\_last\_saved}, %{startup\_last\_changed}                                                      |                                                 |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                     |                                                 |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro             | Description                                                                                         | Default value     | Mandatory   |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGAVERAGE1M  | Thresholds                                                                                          |                   |             |
| CRITICALAVERAGE1M | Thresholds                                                                                          |                   |             |
| WARNINGAVERAGE5M  | Thresholds                                                                                          |                   |             |
| CRITICALAVERAGE5M | Thresholds                                                                                          |                   |             |
| WARNINGAVERAGE5S  | Thresholds                                                                                          |                   |             |
| CRITICALAVERAGE5S | Thresholds                                                                                          |                   |             |
| WARNINGCORE1M     | Thresholds                                                                                          |                   |             |
| CRITICALCORE1M    | Thresholds                                                                                          |                   |             |
| WARNINGCORE5M     | Thresholds                                                                                          | 90                |             |
| CRITICALCORE5M    | Thresholds                                                                                          | 95                |             |
| WARNINGCORE5S     | Thresholds                                                                                          |                   |             |
| CRITICALCORE5S    | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Environment" label="Environment">

| Macro                    | Description                                                                                                              | Default value                                                   | Mandatory   |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------|:------------|
| COMPONENT                | Which component to check (Default: '.*'). Can be: 'fan', 'psu', 'temperature', 'voltage', 'module', 'physical', 'sensor' | .*                                                              |             |
| WARNINGCOUNTFAN          |                                                                                                                          |                                                                 |             |
| CRITICALCOUNTFAN         |                                                                                                                          |                                                                 |             |
| WARNINGCOUNTMODULE       |                                                                                                                          |                                                                 |             |
| CRITICALCOUNTMODULE      |                                                                                                                          |                                                                 |             |
| WARNINGCOUNTPHYSICAL     |                                                                                                                          |                                                                 |             |
| CRITICALCOUNTPHYSICAL    |                                                                                                                          |                                                                 |             |
| WARNINGCOUNTPSU          |                                                                                                                          |                                                                 |             |
| CRITICALCOUNTPSU         |                                                                                                                          |                                                                 |             |
| WARNINGCOUNTSENSOR       |                                                                                                                          |                                                                 |             |
| CRITICALCOUNTSENSOR      |                                                                                                                          |                                                                 |             |
| WARNINGCOUNTTEMPERATURE  |                                                                                                                          |                                                                 |             |
| CRITICALCOUNTTEMPERATURE |                                                                                                                          |                                                                 |             |
| WARNINGCOUNTVOLTAGE      |                                                                                                                          |                                                                 |             |
| CRITICALCOUNTVOLTAGE     |                                                                                                                          |                                                                 |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                      | --verbose  --filter-perfdata='^(sensor\.(celsius_|rpm_)|temp_)' |             |

</TabItem>
<TabItem value="Hsrp" label="Hsrp">

| Macro        | Description                                                                                                                                      | Default value     | Mandatory   |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| ROLE         | If role is 'primary', an error if HSRPs are 'standby' states. Ifrole is 'secondary', an error if HSRPs are 'active' states. (Default: 'primary') | primary           |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                              | --verbose         |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro                   | Description                                                                                                                                                                                             | Default value                                        | Mandatory   |
|:------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|:------------|
| UNITSTRAFFIC            | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter')                                                                                                    | percent_delta                                        |             |
| UNITSERROR              | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter')                                                                        | percent_delta                                        |             |
| OIDFILTER               | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                                         | ifname                                               |             |
| OIDDISPLAY              | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                                        | ifname                                               |             |
| INTERFACENAME           | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface')                                                                                                                     |                                                      |             |
| WARNINGINBCAST          | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINBCAST         | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINCRC            | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINCRC           | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINDISCARD        | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINDISCARD       | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINERROR          | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINERROR         | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINFCSERROR       | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINFCSERROR      | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINMCAST          | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINMCAST         | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINTRAFFIC        | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINTRAFFIC       | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINTRAFFICLIMIT   | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINTRAFFICLIMIT  | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINUCAST          | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINUCAST         | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINVOLUME         |                                                                                                                                                                                                         |                                                      |             |
| CRITICALINVOLUME        |                                                                                                                                                                                                         |                                                      |             |
| WARNINGOUTBCAST         | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALOUTBCAST        | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGOUTDISCARD       | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALOUTDISCARD      | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGOUTERROR         | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALOUTERROR        | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGOUTMCAST         | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALOUTMCAST        | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGOUTTRAFFIC       | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALOUTTRAFFIC      | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGOUTTRAFFICLIMIT  | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALOUTTRAFFICLIMIT | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGOUTUCAST         | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALOUTUCAST        | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGOUTVOLUME        |                                                                                                                                                                                                         |                                                      |             |
| CRITICALOUTVOLUME       |                                                                                                                                                                                                         |                                                      |             |
| WARNINGSPEED            | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALSPEED           | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALSTATUS          | Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display} | %{admstatus} eq "up" and %{opstatus} !~ /up|dormant/ |             |
| WARNINGSTATUS           | Set warning threshold for status. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display}                                                            |                                                      |             |
| WARNINGTOTALADMINDOWN   | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALTOTALADMINDOWN  | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGTOTALADMINUP     | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALTOTALADMINUP    | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGTOTALOPERDOWN    | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALTOTALOPERDOWN   | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGTOTALOPERUP      | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALTOTALOPERUP     | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGTOTALPORT        | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALTOTALPORT       | Thresholds                                                                                                                                                                                              |                                                      |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                     | --verbose --use-new-perfdata                         |             |

</TabItem>
<TabItem value="Ipsla" label="Ipsla">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERTAG    | Filter tag (Default: '.*')                                                                          | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERPOOL   | Filter pool to check (can use regexp)                                                               |                   |             |
| CRITICAL     | Threshold critical in percent                                                                       | 90                |             |
| WARNING      | Threshold warning in percent                                                                        | 80                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Memory-Flash" label="Memory-Flash">

| Macro             | Description                                                                                                 | Default value     | Mandatory   |
|:------------------|:------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERNAME        | Filter partition name (can be a regexp)                                                                     | .*                |             |
| WARNINGSTATUS     | Set warning threshold for status (Default: ''). You can use the following variables: %{status}, %{display}  |                   |             |
| CRITICALSTATUS    | Set critical threshold for status (Default: ''). You can use the following variables: %{status}, %{display} |                   |             |
| WARNINGUSAGE      | Thresholds                                                                                                  |                   |             |
| CRITICALUSAGE     | Thresholds                                                                                                  |                   |             |
| WARNINGUSAGEFREE  | Thresholds                                                                                                  |                   |             |
| CRITICALUSAGEFREE | Thresholds                                                                                                  |                   |             |
| WARNINGUSAGEPRCT  | Thresholds                                                                                                  |                   |             |
| CRITICALUSAGEPRCT | Thresholds                                                                                                  |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)         |                   |             |

</TabItem>
<TabItem value="Qos-Usage" label="Qos-Usage">

| Macro                  | Description                                                                                                                                          | Default value     | Mandatory   |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERSOURCE           | Filter interface name and class-map (can be a regexp). Example of a source (interfacename:servicepolicy:classmap:...): FastEthernet1:Visioconference | .*                |             |
| FILTERCOUNTERS         | Only display some counters (regexp can be used). Example: --filter-counters='^(total-traffic)$'                                                      |                   |             |
| WARNINGCMAPDROP        | Threshold warning                                                                                                                                    |                   |             |
| CRITICALCMAPDROP       | Threshold critical                                                                                                                                   |                   |             |
| WARNINGCMAPTRAFFIC     | Threshold warning                                                                                                                                    |                   |             |
| CRITICALCMAPTRAFFIC    | Threshold critical                                                                                                                                   |                   |             |
| WARNINGINTCMAPDROP     | Threshold warning                                                                                                                                    |                   |             |
| CRITICALINTCMAPDROP    | Threshold critical                                                                                                                                   |                   |             |
| WARNINGINTCMAPTRAFFIC  | Threshold warning                                                                                                                                    |                   |             |
| CRITICALINTCMAPTRAFFIC | Threshold critical                                                                                                                                   |                   |             |
| WARNINGTOTALDROP       | Threshold warning                                                                                                                                    |                   |             |
| CRITICALTOTALDROP      | Threshold critical                                                                                                                                   |                   |             |
| WARNINGTOTALTRAFFIC    | Threshold warning                                                                                                                                    |                   |             |
| CRITICALTOTALTRAFFIC   | Threshold critical                                                                                                                                   |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                  | --verbose         |             |

</TabItem>
<TabItem value="Spanning-Tree" label="Spanning-Tree">

| Macro          | Description                                                                                                                                                                                               | Default value                 | Mandatory   |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:------------|
| FILTERPORT     | Filter on port description (can be a regexp)                                                                                                                                                              | .*                            |             |
| CRITICALSTATUS | Set critical threshold for status (Default: '%{op\_status} =~ /up/ && %{state} =~ /blocking\|broken/'). You can use the following variables: %{state}, %{op\_status}, %{admin\_status}, %{port}, %{index} | %{state} =~ /blocking|broken/ |             |
| WARNINGSTATUS  | Set warning threshold for status. You can use the following variables: %{state}, %{op\_status}, %{admin\_status}, %{port}, %{index}                                                                       |                               |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                       | --verbose                     |             |

</TabItem>
<TabItem value="Stack" label="Stack">

| Macro                   | Description                                                                                                                                                                                                                                                                                                                                                                                        | Default value                                    | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|:------------|
| WARNINGADDED            | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALADDED           | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGFEATUREMISMATCH  | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALFEATUREMISMATCH | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGINVALID          | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALINVALID         | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGNEWMASTERINIT    | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALNEWMASTERINIT   | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGPROGRESSING      | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALPROGRESSING     | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGPROVISIONED      | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALPROVISIONED     | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGREADY            | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALREADY           | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGREMOVED          | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALREMOVED         | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGSDMMISMATCH      | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALSDMMISMATCH     | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALSTACKSTATUS     | Set critical threshold for stack status (Default: '%{stack\_status} =~ /notredundant/'). You can use the following variables: %{stack\_status}                                                                                                                                                                                                                                                     | %{stack_status} =~ /notredundant/                |             |
| WARNINGSTACKSTATUS      | Set warning threshold for stack status (Default: ''). You can use the following variables: %{stack\_status}                                                                                                                                                                                                                                                                                        |                                                  |             |
| CRITICALSTATUS          | Set critical threshold for member status (Default: '%{state} !~ /ready/ && %{state} !~ /provisioned/'). You can use the following variables: %{name}, %{role}, %{state}  Role can be: 'master', 'member', 'notMember', 'standby'.  State can be: 'waiting', 'progressing', 'added', 'ready', 'sdmMismatch', 'verMismatch', 'featureMismatch', 'newMasterInit', 'provisioned', 'invalid', 'removed' | %{state} !~ /ready/ && %{state} !~ /provisioned/ |             |
| WARNINGSTATUS           | Set warning threshold for members status (Default: ''). You can use the following variables: %{name}, %{role}, %{state}                                                                                                                                                                                                                                                                            |                                                  |             |
| WARNINGVERSIONMISMATCH  | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALVERSIONMISMATCH | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGWAITING          | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALWAITING         | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                                                                                                                                                                                                | --verbose                                        |             |

</TabItem>
<TabItem value="Voice-Call" label="Voice-Call">

| Macro                         | Description                                                                                         | Default value     | Mandatory   |
|:------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGACTIVE15MAVERAGE       | Thresholds                                                                                          |                   |             |
| CRITICALACTIVE15MAVERAGE      | Thresholds                                                                                          |                   |             |
| WARNINGACTIVE1MAVERAGE        | Thresholds                                                                                          |                   |             |
| CRITICALACTIVE1MAVERAGE       | Thresholds                                                                                          |                   |             |
| WARNINGACTIVE5MAVERAGE        | Thresholds                                                                                          |                   |             |
| CRITICALACTIVE5MAVERAGE       | Thresholds                                                                                          |                   |             |
| WARNINGCONNECTIONCALLSACTIVE  | Thresholds                                                                                          |                   |             |
| CRITICALCONNECTIONCALLSACTIVE | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of service, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a server using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_cisco_standard_snmp.pl \
	--plugin=network::cisco::standard::snmp::plugin \
	--mode=cpu \
	--hostname=10.30.2.114 \
	--snmp-version='2c' \
	--snmp-community='cisco_ro' \
  	--verbose
```

The expected command output is shown below:

```bash
OK: 2 CPU(s) average usage is 5.50 % (1m) 6.00 % (5m) - All core cpu are ok | 'cpu.utilization.1m.percentage'=5.50%;;;0;100 'cpu.utilization.5m.percentage'=6.00%;;;0;100 '4097#core.cpu.utilization.1m.percentage'=11.00%;;;0;100 '4097#core.cpu.utilization.5m.percentage'=12.00%;;;0;100 '4129#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 '4129#core.cpu.utilization.5m.percentage'=0.00%;;;0;100
CPU '4097' usage 11.00 % (1m) 12.00 % (5m)
CPU '4129' usage 0.00 % (1m) 0.00 % (5m)
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_standard_snmp.pl \
	--plugin=network::cisco::standard::snmp::plugin \
    --list-mode
```

The plugin brings the following modes:

| Mode                | Linked service template                                                 |
|:--------------------|:------------------------------------------------------------------------|
| aaa-servers         | Net-Cisco-Standard-Aaa-Servers-SNMP                                     |
| arp                 | Net-Cisco-Standard-Arp-SNMP                                             |
| bgp                 | Net-Cisco-Standard-Bgp-SNMP                                             |
| configuration       | Net-Cisco-Standard-Configuration-SNMP                                   |
| cpu                 | Net-Cisco-Standard-Cpu-SNMP                                             |
| environment         | Net-Cisco-Standard-Environment-SNMP                                     |
| hsrp                | Net-Cisco-Standard-Hsrp-SNMP                                            |
| interfaces          | Net-Cisco-Standard-Anycast-SNMP<br />Net-Cisco-Standard-Interfaces-SNMP |
| ipsla               | Net-Cisco-Standard-Ipsla-SNMP                                           |
| list-aaa-servers    | Used for service discovery                                              |
| list-interfaces     | Used for service discovery                                              |
| list-spanning-trees | Not used in this Monitoring Connector                                   |
| load                | Not used in this Monitoring Connector                                   |
| memory              | Net-Cisco-Standard-Memory-SNMP                                          |
| memory-flash        | Net-Cisco-Standard-Memory-Flash-SNMP                                    |
| qos-usage           | Net-Cisco-Standard-Qos-Usage-SNMP                                       |
| spanning-tree       | Net-Cisco-Standard-SpanningTree-SNMP                                    |
| stack               | Net-Cisco-Standard-Stack-SNMP                                           |
| uptime              | Not used in this Monitoring Connector                                   |
| voice-call          | Net-Cisco-Standard-Voice-Call-SNMP                                      |
| vpc                 | Not used in this Monitoring Connector                                   |
| vss                 | Not used in this Monitoring Connector                                   |
| wan3g               | Not used in this Monitoring Connector                                   |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   | Output |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Output |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Output |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | SNMP   |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | SNMP   |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --subsetleef                               | How many oid values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | SNMP   |
| --snmp-autoreduce                          | Progressively reduce the number requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --snmp-force-getnext                       | Use snmp getnext function in snmp v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --snmp-username                            | SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | SNMP   |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | SNMP   |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | SNMP   |
| --privprotocol                             | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | SNMP   |
| --contextname                              | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | SNMP   |
| --contextengineid                          | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | SNMP   |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | SNMP   |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | SNMP   |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | SNMP   |
| --snmp-tls-their-hostname                  | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | SNMP   |

#### Modes options

All modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Aaa-Servers" label="Aaa-Servers">

| Option                   | Description                                                                                                                                                                                                                                   | Type      |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       | Retention |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                | Retention |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        | Retention |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                | Retention |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   | Retention |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         | Retention |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  | Retention |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            | Retention |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='auth'                                                                                                                                                            | Mode      |
| --filter-name            | Filter AAA server by name (E.g.: 10.199.126.100:1812:1813. Format: \[address\]:\[authPort\]:\[accPort\]).                                                                                                                                     | Mode      |
| --unknown-status         | Set unknown threshold for status. You can use the following variables: %{status}, %{name}                                                                                                                                                     | Mode      |
| --warning-status         | Set warning threshold for status. You can use the following variables: %{status}, %{name}                                                                                                                                                     | Mode      |
| --critical-status        | Set critical threshold for status (Default: '%{status} =~ /dead/i'). You can use the following variables: %{status}, %{name}                                                                                                                  | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'auth-requests', 'auth-requests-timeout', 'auth-transactions-suceeded', 'auth-roundtrip-time', 'acc-requests', 'acc-requests-timeout', 'acc-transactions-suceeded', 'acc-roundtrip-time'.                        | Mode      |

</TabItem>
<TabItem value="Anycast" label="Anycast">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                  | Type      |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                   | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                              | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                      | Retention |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                                                                                    | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                         | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                               | Retention |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                       | Retention |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                                                                                               | Retention |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                  | Retention |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                        | Retention |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                 | Retention |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                                                                                           | Retention |
| --add-global             | Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                                                                                       | Mode      |
| --add-status             | Check interface status.                                                                                                                                                                                                                                                                                                                                      | Mode      |
| --add-duplex-status      | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                           | Mode      |
| --add-err-disable        | Check error disable (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                           | Mode      |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                                                                                                                                     | Mode      |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                                                                                                                                      | Mode      |
| --add-cast               | Check interface cast.                                                                                                                                                                                                                                                                                                                                        | Mode      |
| --add-speed              | Check interface speed.                                                                                                                                                                                                                                                                                                                                       | Mode      |
| --add-volume             | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                                                                                        | Mode      |
| --add-qos-limit          | Check QoS traffic limit rate.                                                                                                                                                                                                                                                                                                                                | Mode      |
| --check-metrics          | If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                                                                                             | Mode      |
| --warning-status         | Set warning threshold for status. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display}                                                                                                                                                                                                                 | Mode      |
| --critical-status        | Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display}                                                                                                                                                      | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-traffic-limit', 'out-traffic-limit', 'in-crc', 'in-fcserror', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode      |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                                                                                        | Mode      |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                            | Mode      |
| --units-cast             | Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                        | Mode      |
| --nagvis-perfdata        | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                                                                                                | Mode      |
| --interface              | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                                                                                         | Mode      |
| --name                   | Allows to use interface name with option --interface instead ofinterface oid index (Can be a regexp)                                                                                                                                                                                                                                                         | Mode      |
| --speed                  | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                   | Mode      |
| --speed-in               | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                                                                                            | Mode      |
| --speed-out              | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                            | Mode      |
| --force-counters32       | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                                                                                     | Mode      |
| --reload-cache-time      | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                                                                                  | Mode      |
| --oid-filter             | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                             | Mode      |
| --oid-display            | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                            | Mode      |
| --oid-extra-display      | Add an OID to display.                                                                                                                                                                                                                                                                                                                                       | Mode      |
| --display-transform-src  | Regexp src to transform display value.                                                                                                                                                                                                                                                                                                                       | Mode      |
| --display-transform-dst  | Regexp dst to transform display value.                                                                                                                                                                                                                                                                                                                       | Mode      |
| --show-cache             | Display cache interface datas.                                                                                                                                                                                                                                                                                                                               | Mode      |

</TabItem>
<TabItem value="Arp" label="Arp">

| Option                   | Description                                                                      | Type |
|:-------------------------|:---------------------------------------------------------------------------------|:-----|
| --filter-macaddr         | Filter mac addresses (can be a regexp).                                          | Mode |
| --filter-ipaddr          | Filter ip addresses (can be a regexp).                                           | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'total-entries', 'duplicate-macaddr', 'duplicate-ipaddr'.    | Mode |

</TabItem>
<TabItem value="Bgp" label="Bgp">

| Option                   | Description                                                                                                                                                                                                                                   | Type      |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       | Retention |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                | Retention |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        | Retention |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                | Retention |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   | Retention |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         | Retention |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  | Retention |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            | Retention |
| --filter-remote-as       | Filter based on remote AS number (regexp allowed)                                                                                                                                                                                             | Mode      |
| --filter-remote-addr     | Filter based on IP of peers (regexp allowed)                                                                                                                                                                                                  | Mode      |
| --unknown-status         | Set unknown threshold for status. You can use the following variables: %{adminStatus}, %{state}, %{localAddr}, %{remoteAddr}, %{remoteAs}                                                                                                     | Mode      |
| --warning-status         | Set warning threshold for status. You can use the following variables: %{adminStatus}, %{state}, %{localAddr}, %{remoteAddr}, %{remoteAs}                                                                                                     | Mode      |
| --critical-status        | Set critical threshold for status (Default: '%{adminStatus} =~ /start/ && %{state} !~ /established/'). You can use the following variables: %{adminStatus}, %{state}, %{localAddr}, %{remoteAddr}, %{remoteAs}                                | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'peers-detected', 'peer-update-last', 'peer-prefixes-accepted', 'peer-prefixes-denied'.                                                                                                                                   | Mode      |

</TabItem>
<TabItem value="Configuration" label="Configuration">

| Option            | Description                                                                                                                                                                                                                | Type |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-status  | Set warning threshold for status (Default: ''). You can use the following variables: %{running\_last\_changed}, %{running\_last\_saved}, %{startup\_last\_changed}                                                         | Mode |
| --critical-status | Set critical threshold for status (Default: '%{running\_last\_changed} \> %{running\_last\_saved}'). You can use the following variables: %{running\_last\_changed}, %{running\_last\_saved}, %{startup\_last\_changed}    | Mode |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                   | Description                                                                                                                                                              | Type |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --check-order            | Check cpu in standard cisco mib. If you have some issue (wrong cpu information in a specific mib), you can change the order (Default: 'process,old\_sys,system\_ext').   | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'core-5s', 'core-1m', 'core-5m', 'average-5s', 'average-1m', 'average-5m'.                                                                           | Mode |

</TabItem>
<TabItem value="Environment" label="Environment">

| Option               | Description                                                                                                                                                                                 | Type |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --component          | Which component to check (Default: '.*'). Can be: 'fan', 'psu', 'temperature', 'voltage', 'module', 'physical', 'sensor'.                                                                   | Mode |
| --filter             | Exclude some parts (comma seperated list) (Example: --filter=fan --filter=psu) Can also exclude specific instance: --filter=fan,1                                                           | Mode |
| --add-name-instance  | Add literal description for instance value (used in filter, absent-problem and threshold options).                                                                                          | Mode |
| --use-physical-name  | Use entPhysicalName OID instead of entPhysicalDescr.                                                                                                                                        | Mode |
| --add-fru-power      | Check FRU power status.                                                                                                                                                                     | Mode |
| --absent-problem     | Return an error if an entity is not 'present' (default is skipping) (comma seperated list) Can be specific or global: --absent-problem=fan,1                                                | Mode |
| --no-component       | Return an error if no compenents are checked. If total (with skipped) is 0. (Default: 'critical' returns).                                                                                  | Mode |
| --threshold-overload | Set to overload default threshold values (syntax: section,status,regexp) It used before default thresholds (order stays). Example: --threshold-overload='fan,CRITICAL,^(?!(up\|normal)$)'   | Mode |
| --warning            | Set warning threshold for temperatures, voltages, sensors (syntax: type,regexp,threshold) Example: --warning='temperature,.*,30'                                                            | Mode |
| --critical           | Set critical threshold for temperatures, voltages, sensors (syntax: type,regexp,threshold) Example: --critical='temperature,.*,40'                                                          | Mode |

</TabItem>
<TabItem value="Hsrp" label="Hsrp">

| Option        | Description                                                                                                                                         | Type |
|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-vrid | Filter VRID (can be a regexp).                                                                                                                      | Mode |
| --role        | If role is 'primary', an error if HSRPs are 'standby' states. Ifrole is 'secondary', an error if HSRPs are 'active' states. (Default: 'primary')    | Mode |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                  | Type      |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                   | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                              | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                      | Retention |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                                                                                    | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                         | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                               | Retention |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                       | Retention |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                                                                                               | Retention |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                  | Retention |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                        | Retention |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                 | Retention |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                                                                                           | Retention |
| --add-global             | Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                                                                                       | Mode      |
| --add-status             | Check interface status.                                                                                                                                                                                                                                                                                                                                      | Mode      |
| --add-duplex-status      | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                           | Mode      |
| --add-err-disable        | Check error disable (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                           | Mode      |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                                                                                                                                     | Mode      |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                                                                                                                                      | Mode      |
| --add-cast               | Check interface cast.                                                                                                                                                                                                                                                                                                                                        | Mode      |
| --add-speed              | Check interface speed.                                                                                                                                                                                                                                                                                                                                       | Mode      |
| --add-volume             | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                                                                                        | Mode      |
| --add-qos-limit          | Check QoS traffic limit rate.                                                                                                                                                                                                                                                                                                                                | Mode      |
| --check-metrics          | If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                                                                                             | Mode      |
| --warning-status         | Set warning threshold for status. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display}                                                                                                                                                                                                                 | Mode      |
| --critical-status        | Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display}                                                                                                                                                      | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-traffic-limit', 'out-traffic-limit', 'in-crc', 'in-fcserror', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode      |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                                                                                        | Mode      |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                            | Mode      |
| --units-cast             | Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                        | Mode      |
| --nagvis-perfdata        | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                                                                                                | Mode      |
| --interface              | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                                                                                         | Mode      |
| --name                   | Allows to use interface name with option --interface instead ofinterface oid index (Can be a regexp)                                                                                                                                                                                                                                                         | Mode      |
| --speed                  | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                   | Mode      |
| --speed-in               | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                                                                                            | Mode      |
| --speed-out              | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                            | Mode      |
| --force-counters32       | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                                                                                     | Mode      |
| --reload-cache-time      | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                                                                                  | Mode      |
| --oid-filter             | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                             | Mode      |
| --oid-display            | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                            | Mode      |
| --oid-extra-display      | Add an OID to display.                                                                                                                                                                                                                                                                                                                                       | Mode      |
| --display-transform-src  | Regexp src to transform display value.                                                                                                                                                                                                                                                                                                                       | Mode      |
| --display-transform-dst  | Regexp dst to transform display value.                                                                                                                                                                                                                                                                                                                       | Mode      |
| --show-cache             | Display cache interface datas.                                                                                                                                                                                                                                                                                                                               | Mode      |

</TabItem>
<TabItem value="Ipsla" label="Ipsla">

| Option                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Type      |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Retention |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Retention |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                           | Retention |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Retention |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                      | Retention |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                            | Retention |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Retention |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                               | Retention |
| --filter-tag           | Filter tag (Default: '.*')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Mode      |
| --threshold-overload   | Set to overload default threshold values (syntax: section,status,regexp) It used before default thresholds (order stays). Example: --threshold-overload='opersense,CRITICAL,^(?!(ok)$)'                                                                                                                                                                                                                                                                                                                          | Mode      |
| --warning-*            | Threshold warning. Can be: 'CompletionTime', 'NumberOverThresholds', 'AverageDelaySD', 'AverageDelayDS', 'PacketLossRatio', 'PercentagePacketsPositiveJitter', 'AverageJitterPerPacketPositiveJitter', 'PercentagePacketsNegativeJitter', 'AverageJitterPerPacketNegativeJitter', 'AverageJitter', 'RTTStandardDeviation', 'DelaySource2DestinationStandardDeviation', 'DelayDestination2SourceStandardDeviation', 'JitterSource2DestinationStandardDeviation', 'JitterDestination2SourceStandardDeviation'.     | Mode      |
| --critical-*           | Threshold critical. Can be: 'CompletionTime', 'NumberOverThresholds', 'AverageDelaySD', 'AverageDelayDS', 'PacketLossRatio', 'PercentagePacketsPositiveJitter', 'AverageJitterPerPacketPositiveJitter', 'PercentagePacketsNegativeJitter', 'AverageJitterPerPacketNegativeJitter', 'AverageJitter', 'RTTStandardDeviation', 'DelaySource2DestinationStandardDeviation', 'DelayDestination2SourceStandardDeviation', 'JitterSource2DestinationStandardDeviation', 'JitterDestination2SourceStandardDeviation'.    | Mode      |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option           | Description                                                                                                                                                                                | Type |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-usage  | Threshold warning in percent.                                                                                                                                                              | Mode |
| --critical-usage | Threshold critical in percent.                                                                                                                                                             | Mode |
| --filter-pool    | Filter pool to check (can use regexp).                                                                                                                                                     | Mode |
| --check-order    | Check memory in standard cisco mib. If you have some issue (wrong memory information in a specific mib), you can change the order (Default: 'enhanced\_pool,pool,process,system\_ext').    | Mode |

</TabItem>
<TabItem value="Memory-Flash" label="Memory-Flash">

| Option                   | Description                                                                                                                          | Type |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --unknown-status         | Set unknown threshold for status (Default: '%{status} =~ /readOnly/i'). You can use the following variables: %{status}, %{display}   | Mode |
| --warning-status         | Set warning threshold for status (Default: ''). You can use the following variables: %{status}, %{display}                           | Mode |
| --critical-status        | Set critical threshold for status (Default: ''). You can use the following variables: %{status}, %{display}                          | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                                                                 | Mode |
| --filter-name            | Filter partition name (can be a regexp).                                                                                             | Mode |

</TabItem>
<TabItem value="Qos-Usage" label="Qos-Usage">

| Option                 | Description                                                                                                                                                                                                                                   | Type      |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       | Retention |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                | Retention |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        | Retention |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                | Retention |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   | Retention |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         | Retention |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  | Retention |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            | Retention |
| --filter-source        | Filter interface name and class-map (can be a regexp). Example of a source (interfacename:servicepolicy:classmap:...): FastEthernet1:Visioconference                                                                                          | Mode      |
| --filter-counters      | Only display some counters (regexp can be used). Example: --filter-counters='^(total-traffic)$'                                                                                                                                               | Mode      |
| --warning-*            | Threshold warning. Can be: 'int-cmap-traffic', 'int-cmap-drop', 'cmap-traffic', 'cmap-drop', 'total-traffic', 'total-drop'.                                                                                                                   | Mode      |
| --critical-*           | Threshold critical. Can be: 'int-cmap-traffic', 'int-cmap-drop', 'cmap-traffic', 'cmap-drop', 'total-traffic', 'total-drop'.                                                                                                                  | Mode      |
| --units-traffic        | Units of thresholds for the traffic (Default: '%') ('%', 'b/s'). Only for --warning-int-traffic and --critical-int-traffic options.                                                                                                           | Mode      |
| --oid-filter           | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName).                                                                                                                                                      | Mode      |
| --oid-display          | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName).                                                                                                                                                     | Mode      |

</TabItem>
<TabItem value="Spanning-Tree" label="Spanning-Tree">

| Option            | Description                                                                                                                                                                                                   | Type |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-port     | Filter on port description (can be a regexp).                                                                                                                                                                 | Mode |
| --warning-status  | Set warning threshold for status. You can use the following variables: %{state}, %{op\_status}, %{admin\_status}, %{port}, %{index}.                                                                          | Mode |
| --critical-status | Set critical threshold for status (Default: '%{op\_status} =~ /up/ && %{state} =~ /blocking\|broken/'). You can use the following variables: %{state}, %{op\_status}, %{admin\_status}, %{port}, %{index}.    | Mode |

</TabItem>
<TabItem value="Stack" label="Stack">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                            | Type |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-* --critical-* | Set thresholds on members count for each states. (Can be: 'waiting', 'progressing', 'added', 'ready', 'sdm-mismatch', 'version-mismatch', 'feature-mismatch', 'new-master-init', 'provisioned', 'invalid', 'removed')                                                                                                                                                                                  | Mode |
| --warning-stack-status   | Set warning threshold for stack status (Default: ''). You can use the following variables: %{stack\_status}                                                                                                                                                                                                                                                                                            | Mode |
| --critical-stack-status  | Set critical threshold for stack status (Default: '%{stack\_status} =~ /notredundant/'). You can use the following variables: %{stack\_status}                                                                                                                                                                                                                                                         | Mode |
| --warning-status         | Set warning threshold for members status (Default: ''). You can use the following variables: %{name}, %{role}, %{state}                                                                                                                                                                                                                                                                                | Mode |
| --critical-status        | Set critical threshold for member status (Default: '%{state} !~ /ready/ && %{state} !~ /provisioned/'). You can use the following variables: %{name}, %{role}, %{state}  Role can be: 'master', 'member', 'notMember', 'standby'.  State can be: 'waiting', 'progressing', 'added', 'ready', 'sdmMismatch', 'verMismatch', 'featureMismatch', 'newMasterInit', 'provisioned', 'invalid', 'removed'.    | Mode |

</TabItem>
<TabItem value="Voice-Call" label="Voice-Call">

| Option                   | Description                                                                                                       | Type |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-* --critical-* | Thresholds. Can be: 'active-1m-average', 'active-5m-average', 'active-15m-average', 'connection-calls-active'.    | Mode |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_standard_snmp.pl \
	--plugin=network::cisco::standard::snmp::plugin \
	--mode=cpu \
    --help
```

---
id: network-versa-snmp
title: Versa SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Versa SNMP** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Versa SNMP** brings a host template:

* **Net-Versa-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Versa-SNMP-custom" label="Net-Versa-SNMP-custom">

| Service Alias | Service Template              | Service Description             |
|:--------------|:------------------------------|:--------------------------------|
| Devices       | Net-Versa-Devices-SNMP-custom | Check device system statistics  |

> The services listed above are created automatically when the **Net-Versa-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                 | Service Description             | Discovery  |
|:--------------|:---------------------------------|:--------------------------------|:----------:|
| Bgp-Peers     | Net-Versa-Bgp-Peers-SNMP-custom  | Check device system statistics  |            |
| Interfaces    | Net-Versa-Interfaces-SNMP-custom | Check interfaces                | X          |
| Ipsec         | Net-Versa-Ipsec-SNMP-custom      | Check IPsec tunnels             | X          |
| Qos-Policy    | Net-Versa-Qos-Policy-SNMP-custom | Check QoS policies              |            |
| Sdwan         | Net-Versa-Sdwan-SNMP-custom      | Check SD-Wan rules              | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                    |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **Net-Versa-SNMP-custom** host template. |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                         | Description                                                           |
|:----------------------------------|:----------------------------------------------------------------------|
| Net-Versa-SNMP-Ipsec-Name         | Discover IPSec tunnels and monitor traffic and packets                |
| Net-Versa-SNMP-Packet-Errors-Name | Discover network interfaces and monitor errored and discarded packets |
| Net-Versa-SNMP-Sdwan-Name         | Discover SDWAN rules and monitor traffic/hits                         |
| Net-Versa-SNMP-Traffic-Name       | Discover network interfaces and monitor bandwidth utilization         |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Bgp-Peers" label="Bgp-Peers">

| Name                             | Unit  |
|:---------------------------------|:------|
| status                           | N/A   |
| *peers*#peer.update.last.seconds | s     |

</TabItem>
<TabItem value="Devices" label="Devices">

| Name                                        | Unit  |
|:--------------------------------------------|:------|
| *devices*#device.cpu.utilization.percentage | %     |
| *devices*#device.memory.usage.percentage    | %     |
| *devices*#device.sessions.active.count      | count |
| *devices*#device.sessions.active.percentage | %     |
| *devices*#device.sessions.failed.count      | count |
| *devices*#device.sessions.failed.percentage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Name                                                      | Unit  |
|:----------------------------------------------------------|:------|
| status                                                    | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Ipsec" label="Ipsec">

| Name                                     | Unit  |
|:-----------------------------------------|:------|
| *ipsec*#ipsec.packets.in.count           | count |
| *ipsec*#ipsec.packets.invalid.count      | count |
| *ipsec*#ipsec.traffic.in.bytespersecond  | B/s   |
| *ipsec*#ipsec.packets.out.count          | count |
| *ipsec*#ipsec.traffic.out.bytespersecond | B/s   |
| *ipsec*#ipsec.ike.disconnected.count     | count |

</TabItem>
<TabItem value="Qos-Policy" label="Qos-Policy">

| Name                                                          | Unit  |
|:--------------------------------------------------------------|:------|
| *qospolicy*#qos.policy.hit.count                              | count |
| *qospolicy*#qos.policy.sessions.deny.count                    | count |
| *qospolicy*#qos.policy.packets.dropped.count                  | count |
| *qospolicy*#qos.policy.traffic.dropped.bytespersecond         | B/s   |
| *qospolicy*#qos.policy.packets.forwarded.count                | count |
| *qospolicy*#qos.policy.traffic.forwarded.bytespersecond       | B/s   |
| *appqospolicy*#appqos.policy.hit.count                        | count |
| *appqospolicy*#appqos.policy.packets.dropped.count            | count |
| *appqospolicy*#appqos.policy.traffic.dropped.bytespersecond   | B/s   |
| *appqospolicy*#appqos.policy.packets.forwarded.count          | count |
| *appqospolicy*#appqos.policy.traffic.forwarded.bytespersecond | B/s   |

</TabItem>
<TabItem value="Sdwan" label="Sdwan">

| Name                                             | Unit  |
|:-------------------------------------------------|:------|
| *sdwan1*#sdwan.policy.hit.count                  | count |
| *sdwan2*#sdwan.policy.hit.count                  | count |
| *sdwan1*#sdwan.policy.packets.in.count           | count |
| *sdwan2*#sdwan.policy.packets.in.count           | count |
| *sdwan1*#sdwan.policy.traffic.in.bytespersecond  | B/s   |
| *sdwan2*#sdwan.policy.traffic.in.bytespersecond  | B/s   |
| *sdwan1*#sdwan.policy.packets.out.count          | count |
| *sdwan2*#sdwan.policy.packets.out.count          | count |
| *sdwan1*#sdwan.policy.traffic.out.bytespersecond | B/s   |
| *sdwan2*#sdwan.policy.traffic.out.bytespersecond | B/s   |

</TabItem>
</Tabs>

## Prerequisites

### Device Configuration

The SNMP agent must be enabled and configured on the resource. Please refer to the official documentation from the manufacturer/publisher. 
Your resource may require a list of addresses authorized to query it to be set up. 
Please ensure that the addresses of the Centreon pollers are included in this list.

### Network flows

The Centreon Poller must be able to reach the UDP 161 port of the Versa Networks device.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-versa-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-versa-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-versa-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-versa-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Versa SNMP** connector through
the **Configuration > Monitoring Connector Manager** menu.

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
dnf install centreon-plugin-Network-Versa-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Versa-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-versa-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Versa-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-Versa-SNMP-custom** template to the host. 

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Macro            | Description                                                                                                                              | Default value     | Mandatory   |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

4. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Bgp-Peers" label="Bgp-Peers">

| Macro              | Description                                                                                                                                                     | Default value             | Mandatory   |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------|:-----------:|
| FILTERAS           | Filter based on AS number (regexp allowed)                                                                                                                      |                           |             |
| FILTERLOCALADDR    | Filter based on local IP:PORT of peers (regexp allowed)                                                                                                         |                           |             |
| FILTERREMOTEADDR   | Filter based on remote IP:PORT of peers (regexp allowed)                                                                                                        |                           |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{local\_addr}, %{remote\_addr}, %{as}, %{state}, %{display} | %{state} !~ /established/ |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{local\_addr}, %{remote\_addr}, %{as}, %{state}, %{display}  |                           |             |
| WARNINGUPDATELAST  | Threshold                                                                                                                                                       |                           |             |
| CRITICALUPDATELAST | Threshold                                                                                                                                                       |                           |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                          | --verbose                 |             |

</TabItem>
<TabItem value="Devices" label="Devices">

| Macro                      | Description                                                                                                                            | Default value     | Mandatory   |
|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERVSNID                | Filter monitoring on vsn ID (can be a regexp)                                                                                          |                   |             |
| WARNINGCPUUTILIZATION      | Threshold                                                                                                                              |                   |             |
| CRITICALCPUUTILIZATION     | Threshold                                                                                                                              |                   |             |
| WARNINGMEMORYUSAGE         | Threshold                                                                                                                              |                   |             |
| CRITICALMEMORYUSAGE        | Threshold                                                                                                                              |                   |             |
| WARNINGSESSIONSACTIVE      | Threshold                                                                                                                              |                   |             |
| CRITICALSESSIONSACTIVE     | Threshold                                                                                                                              |                   |             |
| WARNINGSESSIONSACTIVEPRCT  | Threshold                                                                                                                              |                   |             |
| CRITICALSESSIONSACTIVEPRCT | Threshold                                                                                                                              |                   |             |
| WARNINGSESSIONSFAILED      | Threshold                                                                                                                              |                   |             |
| CRITICALSESSIONSFAILED     | Threshold                                                                                                                              |                   |             |
| WARNINGSESSIONSFAILEDPRCT  | Threshold                                                                                                                              |                   |             |
| CRITICALSESSIONSFAILEDPRCT | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro              | Description                                                                                                                                               | Default value                                         | Mandatory   |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| OIDFILTER          | Define the OID to be used to filter interfaces (values: ifDesc, ifAlias, ifName, IpAddr)                                                                  | ifname                                                |             |
| OIDDISPLAY         | Define the OID that will be used to name the interfaces (values: ifDesc, ifAlias, ifName, IpAddr)                                                         | ifname                                                |             |
| INTERFACENAME      | Define the interface filter on IDs (OID indexes, e.g.: 1,2,...). If empty, all interfaces will be monitored.  To filter on interface names, see --name    |                                                       |             |
| WARNINGINDISCARD   | Threshold                                                                                                                                                 |                                                       |             |
| CRITICALINDISCARD  | Threshold                                                                                                                                                 |                                                       |             |
| WARNINGINERROR     | Threshold                                                                                                                                                 |                                                       |             |
| CRITICALINERROR    | Threshold                                                                                                                                                 |                                                       |             |
| WARNINGINTRAFFIC   | Threshold                                                                                                                                                 |                                                       |             |
| CRITICALINTRAFFIC  | Threshold                                                                                                                                                 |                                                       |             |
| WARNINGOUTDISCARD  | Threshold                                                                                                                                                 |                                                       |             |
| CRITICALOUTDISCARD | Threshold                                                                                                                                                 |                                                       |             |
| WARNINGOUTERROR    | Threshold                                                                                                                                                 |                                                       |             |
| CRITICALOUTERROR   | Threshold                                                                                                                                                 |                                                       |             |
| WARNINGOUTTRAFFIC  | Threshold                                                                                                                                                 |                                                       |             |
| CRITICALOUTTRAFFIC | Threshold                                                                                                                                                 |                                                       |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display} | %{admstatus} eq "up" and %{opstatus} !~ /up\|dormant/ |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}  |                                                       |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                    | --verbose --no-skipped-counters --use-new-perfdata    |             |

</TabItem>
<TabItem value="Ipsec" label="Ipsec">

| Macro                   | Description                                                                                                                            | Default value     | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERORG               | Filter monitoring on 'org' -organization name- (can be a regexp)                                                                       |                   |             |
| WARNINGIKEDISCONNECTED  | Threshold                                                                                                                              |                   |             |
| CRITICALIKEDISCONNECTED | Threshold                                                                                                                              |                   |             |
| WARNINGPACKETSIN        | Threshold                                                                                                                              |                   |             |
| CRITICALPACKETSIN       | Threshold                                                                                                                              |                   |             |
| WARNINGPACKETSINVALID   | Threshold                                                                                                                              |                   |             |
| CRITICALPACKETSINVALID  | Threshold                                                                                                                              |                   |             |
| WARNINGPACKETSOUT       | Threshold                                                                                                                              |                   |             |
| CRITICALPACKETSOUT      | Threshold                                                                                                                              |                   |             |
| WARNINGTRAFFICIN        | Threshold                                                                                                                              |                   |             |
| CRITICALTRAFFICIN       | Threshold                                                                                                                              |                   |             |
| WARNINGTRAFFICOUT       | Threshold                                                                                                                              |                   |             |
| CRITICALTRAFFICOUT      | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Qos-Policy" label="Qos-Policy">

| Macro                                | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERORG                            | Filter monitoring on 'org' -organization name- (can be a regexp). An org may have 1 to n associated policies and rules                 |                   |             |
| FILTERPOLICY                         | Filter monitoring on 'policy' -policy name- (can be a regexp). A policy may have 1 to n associated rules                               |                   |             |
| FILTERRULE                           | Filter monitoring on 'rule' -rule name- (can be a regexp)                                                                              |                   |             |
| WARNINGAPPQOSPOLICYHIT               | Threshold                                                                                                                              |                   |             |
| CRITICALAPPQOSPOLICYHIT              | Threshold                                                                                                                              |                   |             |
| WARNINGAPPQOSPOLICYPACKETSDROPPED    | Threshold                                                                                                                              |                   |             |
| CRITICALAPPQOSPOLICYPACKETSDROPPED   | Threshold                                                                                                                              |                   |             |
| WARNINGAPPQOSPOLICYPACKETSFORWARDED  | Threshold                                                                                                                              |                   |             |
| CRITICALAPPQOSPOLICYPACKETSFORWARDED | Threshold                                                                                                                              |                   |             |
| WARNINGAPPQOSPOLICYTRAFFICDROPPED    | Threshold                                                                                                                              |                   |             |
| CRITICALAPPQOSPOLICYTRAFFICDROPPED   | Threshold                                                                                                                              |                   |             |
| WARNINGAPPQOSPOLICYTRAFFICFORWARDED  | Threshold                                                                                                                              |                   |             |
| CRITICALAPPQOSPOLICYTRAFFICFORWARDED | Threshold                                                                                                                              |                   |             |
| WARNINGQOSPOLICYHIT                  | Threshold                                                                                                                              |                   |             |
| CRITICALQOSPOLICYHIT                 | Threshold                                                                                                                              |                   |             |
| WARNINGQOSPOLICYPACKETSDROPPED       | Threshold                                                                                                                              |                   |             |
| CRITICALQOSPOLICYPACKETSDROPPED      | Threshold                                                                                                                              |                   |             |
| WARNINGQOSPOLICYPACKETSFORWARDED     | Threshold                                                                                                                              |                   |             |
| CRITICALQOSPOLICYPACKETSFORWARDED    | Threshold                                                                                                                              |                   |             |
| WARNINGQOSPOLICYSESSIONSDENY         | Threshold                                                                                                                              |                   |             |
| CRITICALQOSPOLICYSESSIONSDENY        | Threshold                                                                                                                              |                   |             |
| WARNINGQOSPOLICYTRAFFICDROPPED       | Threshold                                                                                                                              |                   |             |
| CRITICALQOSPOLICYTRAFFICDROPPED      | Threshold                                                                                                                              |                   |             |
| WARNINGQOSPOLICYTRAFFICFORWARDED     | Threshold                                                                                                                              |                   |             |
| CRITICALQOSPOLICYTRAFFICFORWARDED    | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS                         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Sdwan" label="Sdwan">

| Macro              | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERORG          | Filter monitoring on 'org' -organization name- (can be a regexp). An org may have 1 to n associated policies and rules                 |                   |             |
| FILTERPOLICY       | Filter monitoring on 'policy' -policy name- (can be a regexp). A policy may have 1 to n associated rules                               |                   |             |
| FILTERRULE         | Filter monitoring on 'rule' -rule name- (can be a regexp)                                                                              |                   |             |
| WARNINGHIT         | Threshold                                                                                                                              |                   |             |
| CRITICALHIT        | Threshold                                                                                                                              |                   |             |
| WARNINGPACKETSIN   | Threshold                                                                                                                              |                   |             |
| CRITICALPACKETSIN  | Threshold                                                                                                                              |                   |             |
| WARNINGPACKETSOUT  | Threshold                                                                                                                              |                   |             |
| CRITICALPACKETSOUT | Threshold                                                                                                                              |                   |             |
| WARNINGTRAFFICIN   | Threshold                                                                                                                              |                   |             |
| CRITICALTRAFFICIN  | Threshold                                                                                                                              |                   |             |
| WARNINGTRAFFICOUT  | Threshold                                                                                                                              |                   |             |
| CRITICALTRAFFICOUT | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_versa_snmp.pl \
	--plugin=network::versa::snmp::plugin \
	--mode=sdwan \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-org='' \
	--filter-policy='' \
	--filter-rule='' \
	--warning-hit='' \
	--critical-hit='' \
	--warning-packets-in='' \
	--critical-packets-in='' \
	--warning-traffic-in='' \
	--critical-traffic-in='' \
	--warning-packets-out='' \
	--critical-packets-out='' \
	--warning-traffic-out='' \
	--critical-traffic-out='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All SD-Wan are ok | 'sdwan1#sdwan.policy.hit.count'=32961;;;; 'sdwan2#sdwan.policy.hit.count'=69808;;;; 'sdwan1#sdwan.policy.packets.in.count'=12844;;;; 'sdwan2#sdwan.policy.packets.in.count'=88400;;;; 'sdwan1#sdwan.policy.traffic.in.bytespersecond'=78360;;;; 'sdwan2#sdwan.policy.traffic.in.bytespersecond'=56836;;;; 'sdwan1#sdwan.policy.packets.out.count'=1916;;;; 'sdwan2#sdwan.policy.packets.out.count'=31072;;;; 'sdwan1#sdwan.policy.traffic.out.bytespersecond'=77254;;;; 'sdwan2#sdwan.policy.traffic.out.bytespersecond'=51000;;;; 
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
/usr/lib/centreon/plugins/centreon_versa_snmp.pl \
	--plugin=network::versa::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                         | Linked service template          |
|:-----------------------------------------------------------------------------------------------------------------------------|:---------------------------------|
| bgp-peers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/versa/snmp/mode/bgppeers.pm)]        | Net-Versa-Bgp-Peers-SNMP-custom  |
| devices [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/versa/snmp/mode/devices.pm)]           | Net-Versa-Devices-SNMP-custom    |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/interfaces.pm)]          | Net-Versa-Interfaces-SNMP-custom |
| ipsec [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/versa/snmp/mode/ipsec.pm)]               | Net-Versa-Ipsec-SNMP-custom      |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)] | Used for service discovery       |
| list-ipsec [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/versa/snmp/mode/listipsec.pm)]      | Used for service discovery       |
| list-sdwan [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/versa/snmp/mode/listsdwan.pm)]      | Used for service discovery       |
| qos-policy [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/versa/snmp/mode/qospolicy.pm)]      | Net-Versa-Qos-Policy-SNMP-custom |
| sdwan [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/versa/snmp/mode/sdwan.pm)]               | Net-Versa-Sdwan-SNMP-custom      |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --hostname                                 |   Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-community                           |   SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-version                             |   Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-port                                |   UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-timeout                             |   Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --snmp-retries                             |   Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --maxrepetitions                           |   Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --subsetleef                               |   How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --snmp-autoreduce                          |    Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --snmp-force-getnext                       |   Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-cache-file                          |   Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-username                            |   SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --authpassphrase                           |   SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the  --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --authprotocol                             |   SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --privpassphrase                           |   SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --privprotocol                             |   SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --contextname                              |   SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --contextengineid                          |   SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given  as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --securityengineid                         |   SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-errors-exit                         |   Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --snmp-tls-transport                       |   Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-our-identity                    |   X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --snmp-tls-their-identity                  |   X.509 certificate to identify the remote host. Can be the path to the  certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-their-hostname                  |   Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-trust-cert                      |   A trusted CA certificate used to verify a remote host's certificate.  If you use this option, you must also  define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Bgp-Peers" label="Bgp-Peers">

| Option               | Description                                                                                                                                                                                                 |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-as          |   Filter based on AS number (regexp allowed)                                                                                                                                                                |
| --filter-local-addr  |   Filter based on local IP:PORT of peers (regexp allowed)                                                                                                                                                   |
| --filter-remote-addr |   Filter based on remote IP:PORT of peers (regexp allowed)                                                                                                                                                  |
| --warning-updates    |   Warning threshold on last update (seconds)                                                                                                                                                                |
| --critical-updates   |   Critical threshold on last update (seconds)                                                                                                                                                               |
| --unknown-status     |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{local\_addr}, %{remote\_addr}, %{as}, %{state}, %{display}                                            |
| --warning-status     |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{local\_addr}, %{remote\_addr}, %{as}, %{state}, %{display}                                            |
| --critical-status    |   Define the conditions to match for the status to be CRITICAL (default: '%{state} !~ /established/'). You can use the following variables: %{local\_addr}, %{remote\_addr}, %{as}, %{state}, %{display}    |

</TabItem>
<TabItem value="Devices" label="Devices">

| Option                   | Description                                                                                                                                        |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='cpu\_load'                                                          |
| --filter-vsn-id          |   Filter monitoring on vsn ID (can be a regexp).                                                                                                   |
| --warning-* --critical-* |   Thresholds. Can be: 'cpu-utilization', 'memory-usage', 'sessions-active', 'sessions-active-prct', 'sessions-failed', 'sessions-failed-prct'.     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                                          | Description                                                                                                                                                                                                                                                                                  |
|:------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                                     |   Memcached server to use (only one server).                                                                                                                                                                                                                                                 |
| --redis-server                                  |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            |
| --redis-attribute                               |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    |
| --redis-db                                      |   Set Redis database index.                                                                                                                                                                                                                                                                  |
| --failback-file                                 |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                       |
| --memexpiration                                 |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                             |
| --statefile-dir                                 |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                     |
| --statefile-suffix                              |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                             |
| --statefile-concat-cwd                          |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                |
| --statefile-format                              |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                      |
| --statefile-key                                 |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                               |
| --statefile-cipher                              |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                         |
| --add-global                                    |   Check global port statistics (by default if no --add-* option is set).                                                                                                                                                                                                                     |
| --add-status                                    |   Check interface status.                                                                                                                                                                                                                                                                    |
| --add-duplex-status                             |   Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         |
| --add-traffic                                   |   Check interface traffic.                                                                                                                                                                                                                                                                   |
| --add-errors                                    |   Check interface errors.                                                                                                                                                                                                                                                                    |
| --add-cast                                      |   Check interface cast.                                                                                                                                                                                                                                                                      |
| --add-speed                                     |   Check interface speed.                                                                                                                                                                                                                                                                     |
| --add-volume                                    |   Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      |
| --check-metrics                                 |   If the expression is true, metrics are checked (default: '%{opstatus} eq "up"').                                                                                                                                                                                                           |
| --warning-status                                |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                   |
| --critical-status                               |   Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                        |
| --warning-* --critical-*                        |   Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   |
| --units-traffic                                 |   Units of thresholds for the traffic (default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      |
| --units-errors                                  |   Units of thresholds for errors/discards (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                          |
| --units-cast                                    |   Units of thresholds for communication types (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                      |
| --nagvis-perfdata                               |   Display traffic perfdata to be compatible with NagVis widget.                                                                                                                                                                                                                              |
| --interface                                     |   Define the interface filter on IDs (OID indexes, e.g.: 1,2,...). If empty, all interfaces will be monitored.  To filter on interface names, see --name.                                                                                                                                    |
| --name                                          |   With this option, the interfaces will be filtered by name (given in option --interface) instead of OID index. The name matching mode supports regular expressions.                                                                                                                         |
| --regex-id                                      |   With this option, interface IDs will be filtered using the --interface parameter as a regular expression instead of a list of IDs.                                                                                                                                                         |
| --speed                                         |   Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 |
| --speed-in                                      |   Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out                                     |   Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --map-speed-dsl                                 |   Get interface speed configuration for interfaces of type 'ADSL' and 'VDSL2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                        |
| --force-counters64                              |   Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    |
| --force-counters32                              |   Force to use 32-bits counters (even with SNMP versions 2c and 3). To use when 64 bits counters are buggy.                                                                                                                                                                                  |
| --reload-cache-time                             |   Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter                                    |   Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                |
| --oid-display                                   |   Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                       |
| --oid-extra-display                             |   Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src --display-transform-dst |   Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens'  will replace all occurrences of 'eth' with 'ens'                                                                                          |
| --show-cache                                    |   Display cache interface data.                                                                                                                                                                                                                                                              |

</TabItem>
<TabItem value="Ipsec" label="Ipsec">

| Option                   | Description                                                                                                                |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='traffic'                                    |
| --filter-org             |   Filter monitoring on 'org' -organization name- (can be a regexp).                                                        |
| --warning-* --critical-* |   Thresholds. Can be: 'packets-in', 'packets-invalid', 'traffic-in', 'packets-out',  'traffic-out', 'ike-disconnected'.    |

</TabItem>
<TabItem value="Qos-Policy" label="Qos-Policy">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='qos-policy-hit'                                                                                                                                                                                                                                                                                                                                  |
| --filter-org             |   Filter monitoring on 'org' -organization name- (can be a regexp). An org may have 1 to n associated policies and rules                                                                                                                                                                                                                                                                                                        |
| --filter-policy          |   Filter monitoring on 'policy' -policy name- (can be a regexp). A policy may have 1 to n associated rules                                                                                                                                                                                                                                                                                                                      |
| --filter-rule            |   Filter monitoring on 'rule' -rule name- (can be a regexp)                                                                                                                                                                                                                                                                                                                                                                     |
| --warning-* --critical-* |   Thresholds for QoS policy: Can be: 'qos-policy-hit', 'qos-policy-sessions-deny', 'qos-policy-packets-dropped', 'qos-policy-traffic-dropped', 'qos-policy-packets-forwarded', 'qos-policy-traffic-forwarded'.  Thresholds for applications QoS policy: Can be: 'appqos-policy-hit', 'appqos-policy-packets-dropped', 'appqos-policy-traffic-dropped', 'appqos-policy-packets-forwarded', 'appqos-policy-traffic-forwarded'.    |

</TabItem>
<TabItem value="Sdwan" label="Sdwan">

| Option                   | Description                                                                                                                |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='traffic'                                    |
| --filter-org             |   Filter monitoring on 'org' -organization name- (can be a regexp). An org may have 1 to n associated policies and rules   |
| --filter-policy          |   Filter monitoring on 'policy' -policy name- (can be a regexp). A policy may have 1 to n associated rules                 |
| --filter-rule            |   Filter monitoring on 'rule' -rule name- (can be a regexp)                                                                |
| --warning-* --critical-* |   Thresholds. Can be: 'hit', 'packets-in', 'traffic-in', 'packets-out', 'traffic-out'.                                     |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_versa_snmp.pl \
	--plugin=network::versa::snmp::plugin \
	--mode=sdwan \
	--help
```

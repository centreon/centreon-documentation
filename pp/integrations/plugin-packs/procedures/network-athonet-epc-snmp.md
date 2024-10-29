---
id: network-athonet-epc-snmp
title: Athonet ePC SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Athonet ePC SNMP** brings a host template:

* **Net-Athonet-Epc-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Athonet-Epc-SNMP-custom" label="Net-Athonet-Epc-SNMP-custom">

| Service Alias | Service Template                    | Service Description |
|:--------------|:------------------------------------|:--------------------|
| License       | Net-Athonet-Epc-License-SNMP-custom | Check license       |

> The services listed above are created automatically when the **Net-Athonet-Epc-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias       | Service Template                                | Service Description          | Discovery  |
|:--------------------|:------------------------------------------------|:-----------------------------|:----------:|
| Aggregate           | Net-Athonet-Epc-Aggregate-SNMP-custom           | Check aggregate statistics   |            |
| Apns                | Net-Athonet-Epc-Apns-SNMP-custom                | Check APNs                   | X          |
| Interfaces-Diameter | Net-Athonet-Epc-Interfaces-Diameter-SNMP-custom | Check diameter interfaces    | X          |
| Interfaces-Ga       | Net-Athonet-Epc-Interfaces-Ga-SNMP-custom       | Check GA interfaces          | X          |
| Interfaces-Gtpc     | Net-Athonet-Epc-Interfaces-Gtpc-SNMP-custom     | Check GTP control interfaces | X          |
| Interfaces-Lte      | Net-Athonet-Epc-Interfaces-Lte-SNMP-custom      | Check LTE interfaces         | X          |
| Lte                 | Net-Athonet-Epc-Lte-SNMP-custom                 | Check LTE statistics         |            |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                         |
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **Net-Athonet-Epc-SNMP-custom** host template |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                                                   | Description                                                               |
|:------------------------------------------------------------|:--------------------------------------------------------------------------|
| Net-Athonet-Epc-SNMP-Apn-Name                               | Discover APN and monitor them                                             |
| Net-Athonet-Epc-SNMP-Interface-Diameter-Name                | Discover Diameter network interfaces and monitor bandwidth utilization    |
| Net-Athonet-Epc-SNMP-Interface-Ga-Name                      | Discover GA network interfaces and monitor bandwidth utilization          |
| Net-Athonet-Epc-SNMP-Interface-Gtpc-Source-Destination-Type | Discover GTP Control network interfaces and monitor bandwidth utilization |
| Net-Athonet-Epc-SNMP-Interface-Lte-Name                     | Discover LTE network interfaces and monitor bandwidth utilization         |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Aggregate" label="Aggregate">

| Metric name                          | Unit  |
|:-------------------------------------|:------|
| aggregate.traffic.in.bytespersecond  | B/s   |
| aggregate.traffic.out.bytespersecond | B/s   |
| hss.users.roaming.connected.count    | count |
| hss.requests.authentication.count    | count |
| hss.location.updates.count           | count |

</TabItem>
<TabItem value="Apns" label="Apns">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| *apns*~apn.traffic.in.bytespersecond  | B/s   |
| *apns*~apn.traffic.out.bytespersecond | B/s   |
| *apns*~apn.pdp_contexts.count         | count |

</TabItem>
<TabItem value="Interfaces-Diameter" label="Interfaces-Diameter">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| diameter.interfaces.total.count | count |
| *interfaces*#status             | N/A   |
| *interfaces*#transport-status   | N/A   |

</TabItem>
<TabItem value="Interfaces-Ga" label="Interfaces-Ga">

| Metric name               | Unit  |
|:--------------------------|:------|
| ga.interfaces.total.count | count |
| *interfaces*#status       | N/A   |

</TabItem>
<TabItem value="Interfaces-Gtpc" label="Interfaces-Gtpc">

| Metric name                 | Unit  |
|:----------------------------|:------|
| gtpc.interfaces.total.count | count |
| *interfaces*#status         | N/A   |

</TabItem>
<TabItem value="Interfaces-Lte" label="Interfaces-Lte">

| Metric name                                                                        | Unit  |
|:-----------------------------------------------------------------------------------|:------|
| lte.interfaces.total.count                                                         | count |
| *interfaces*~status                                                                | N/A   |
| *interfaces*~lte.interface.traffic.in.bytespersecond                               | B/s   |
| *interfaces*~lte.interface.traffic.out.bytespersecond                              | B/s   |
| *interfaces*~lte.interface.users.connected.count                                   | count |
| *interfaces*~lte.interface.users.idle.count                                        | count |
| *interfaces*~lte.interface.sessions.active.count                                   | count |
| *interfaces*~lte.interface.requests.attach.success.count                           | count |
| *interfaces*~lte.interface.requests.attach.success.percentage                      | %     |
| *interfaces*~lte.interface.requests.pdn_context.activations.success.count          | count |
| *interfaces*~lte.interface.requests.pdn_context.activations.success.percentage     | %     |
| *interfaces*~lte.interface.requests.ue_context_release.total.count                 | count |
| *interfaces*~lte.interface.requests.ue_context_release.radio_lost.count            | count |
| *interfaces*~lte.interface.requests.pdn_context.reject.insufficent_resources.count | count |
| *interfaces*~lte.interface.requests.pdn_context.reject.no_apn.count                | count |
| *interfaces*~lte.interface.requests.pdn_context.reject.not_subscribed.count        | count |

</TabItem>
<TabItem value="License" label="License">

| Metric name                                        | Unit  |
|:---------------------------------------------------|:------|
| *license*~status                                   | N/A   |
| *license*~license.expires.days                     | d     |
| *license*~license.users.active.usage.count         | count |
| *license*~license.users.active.free.count          | count |
| *license*~license.users.active.usage.percentage    | %     |
| *license*~license.sessions.active.usage.count      | count |
| *license*~license.sessions.active.free.count       | count |
| *license*~license.sessions.active.usage.percentage | %     |
| *license*~license.usim.usage.count                 | count |
| *license*~license.usim.free.count                  | count |
| *license*~license.usim.usage.percentage            | %     |

</TabItem>
<TabItem value="Lte" label="Lte">

| Metric name                                                       | Unit  |
|:------------------------------------------------------------------|:------|
| *lte*~lte.traffic.in.bytespersecond                               | B/s   |
| *lte*~lte.traffic.out.bytespersecond                              | B/s   |
| *lte*~lte.users.connected.count                                   | count |
| *lte*~lte.users.idle.count                                        | count |
| *lte*~lte.sessions.active.count                                   | count |
| *lte*~lte.requests.attach.success.count                           | count |
| *lte*~lte.requests.attach.success.percentage                      | %     |
| *lte*~lte.requests.pdn_context.activations.success.count          | count |
| *lte*~lte.requests.pdn_context.activations.success.percentage     | %     |
| *lte*~lte.requests.ue_context_release.total.count                 | count |
| *lte*~lte.requests.ue_context_release.radio_lost.count            | count |
| *lte*~lte.requests.pdn_context.reject.insufficent_resources.count | count |
| *lte*~lte.requests.pdn_context.reject.no_apn.count                | count |
| *lte*~lte.requests.pdn_context.reject.not_subscribed.count        | count |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

The SNMP agent must be configured and activated on the host. Please refer to the official documentation from the manufacturer/publisher.

### Network flow

The target resource must be reachable from the Centreon poller on the UDP/161 SNMP port.

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
dnf install centreon-pack-network-athonet-epc-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-athonet-epc-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-athonet-epc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-athonet-epc-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Athonet ePC SNMP** connector through
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
dnf install centreon-plugin-Network-Athonet-Epc-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Athonet-Epc-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-athonet-epc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Athonet-Epc-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-Athonet-Epc-SNMP-custom** template to the host. 

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
<TabItem value="Aggregate" label="Aggregate">

| Macro                          | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGLOCATIONUPDATES         | Thresholds                                                                                                                             |                   |             |
| CRITICALLOCATIONUPDATES        | Thresholds                                                                                                                             |                   |             |
| WARNINGREQUESTSAUTHENTICATION  | Thresholds                                                                                                                             |                   |             |
| CRITICALREQUESTSAUTHENTICATION | Thresholds                                                                                                                             |                   |             |
| WARNINGTRAFFICIN               | Thresholds                                                                                                                             |                   |             |
| CRITICALTRAFFICIN              | Thresholds                                                                                                                             |                   |             |
| WARNINGTRAFFICOUT              | Thresholds                                                                                                                             |                   |             |
| CRITICALTRAFFICOUT             | Thresholds                                                                                                                             |                   |             |
| WARNINGUSERSROAMINGCONNECTED   | Thresholds                                                                                                                             |                   |             |
| CRITICALUSERSROAMINGCONNECTED  | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Apns" label="Apns">

| Macro               | Description                                                                                                                            | Default value     | Mandatory   |
|:--------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME          | Filter APN by name (can be a regexp)                                                                                                   |                   |             |
| WARNINGPDPCONTEXTS  | Thresholds                                                                                                                             |                   |             |
| CRITICALPDPCONTEXTS | Thresholds                                                                                                                             |                   |             |
| WARNINGTRAFFICIN    | Thresholds                                                                                                                             |                   |             |
| CRITICALTRAFFICIN   | Thresholds                                                                                                                             |                   |             |
| WARNINGTRAFFICOUT   | Thresholds                                                                                                                             |                   |             |
| CRITICALTRAFFICOUT  | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Interfaces-Diameter" label="Interfaces-Diameter">

| Macro                   | Description                                                                                                                                          | Default value                   | Mandatory   |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|:-----------:|
| FILTERNAME              | Filter interfaces by name (can be a regexp)                                                                                                          |                                 |             |
| FILTEROWNER             | Filter interfaces by owner (can be a regexp)                                                                                                         |                                 |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}, %{owner}                      | %{status} =~ /down/i            |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}, %{owner}                       |                                 |             |
| WARNINGTOTAL            | Thresholds                                                                                                                                           |                                 |             |
| CRITICALTOTAL           | Thresholds                                                                                                                                           |                                 |             |
| CRITICALTRANSPORTSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{transport\_status}, %{transport\_type}, %{name} | %{transport\_status} =~ /down/i |             |
| WARNINGTRANSPORTSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{transport\_status}, %{transport\_type}, %{name}  |                                 |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).               | --verbose                       |             |

</TabItem>
<TabItem value="Interfaces-Ga" label="Interfaces-Ga">

| Macro              | Description                                                                                                                                                | Default value        | Mandatory   |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| FILTERNAME         | Filter interfaces by name (can be a regexp)                                                                                                                |                      |             |
| FILTERLOCALADDRESS | Filter interfaces by local address (can be a regexp)                                                                                                       |                      |             |
| FILTERPEERADDRESS  | Filter interfaces by peer address (can be a regexp)                                                                                                        |                      |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{local\_address}, %{peer\_address}, %{name} | %{status} =~ /down/i |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{local\_address}, %{peer\_address}, %{name}  |                      |             |
| WARNINGTOTAL       | Thresholds                                                                                                                                                 |                      |             |
| CRITICALTOTAL      | Thresholds                                                                                                                                                 |                      |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                     | --verbose            |             |

</TabItem>
<TabItem value="Interfaces-Gtpc" label="Interfaces-Gtpc">

| Macro                    | Description                                                                                                                                               | Default value        | Mandatory   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| FILTESOURCEADDRESS       | Filter interfaces by source address (can be a regexp)                                                                                                     |                      |             |
| FILTERDESTINATIONADDRESS | Filter interfaces by destination address (can be a regexp)                                                                                                |                      |             |
| FILTERTYPE               | Filter interfaces by type (can be a regexp)                                                                                                               |                      |             |
| CRITICALSTATUS           | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{source\_address}, %{destination\_address} | %{status} =~ /down/i |             |
| WARNINGSTATUS            | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{source\_address}, %{destination\_address}  |                      |             |
| WARNINGTOTAL             | Thresholds                                                                                                                                                |                      |             |
| CRITICALTOTAL            | Thresholds                                                                                                                                                |                      |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                    | --verbose            |             |

</TabItem>
<TabItem value="Interfaces-Lte" label="Interfaces-Lte">

| Macro                                     | Description                                                                                                                                  | Default value                                              | Mandatory   |
|:------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|:-----------:|
| FILTERNAME                                | Filter interfaces by name (can be a regexp)                                                                                                  |                                                            |             |
| WARNINGREQUESTSATTACHSUCCESS              | Thresholds                                                                                                                                   |                                                            |             |
| CRITICALREQUESTSATTACHSUCCESS             | Thresholds                                                                                                                                   |                                                            |             |
| WARNINGREQUESTSATTACHSUCCESSPRCT          | Thresholds                                                                                                                                   |                                                            |             |
| CRITICALREQUESTSATTACHSUCCESSPRCT         | Thresholds                                                                                                                                   |                                                            |             |
| WARNINGREQUESTSPDNCONTEXTACTIVATION       | Thresholds                                                                                                                                   |                                                            |             |
| CRITICALREQUESTSPDNCONTEXTACTIVATION      | Thresholds                                                                                                                                   |                                                            |             |
| WARNINGREQUESTSPDNCONTEXTACTIVATIONPRCT   | Thresholds                                                                                                                                   |                                                            |             |
| CRITICALREQUESTSPDNCONTEXTACTIVATIONPRCT  | Thresholds                                                                                                                                   |                                                            |             |
| WARNINGREQUESTSPDNCONTEXTREJINSUFRES      | Thresholds                                                                                                                                   |                                                            |             |
| CRITICALREQUESTSPDNCONTEXTREJINSUFRES     | Thresholds                                                                                                                                   |                                                            |             |
| WARNINGREQUESTSPDNCONTEXTREJNOAPN         | Thresholds                                                                                                                                   |                                                            |             |
| CRITICALREQUESTSPDNCONTEXTREJNOAPN        | Thresholds                                                                                                                                   |                                                            |             |
| WARNINGREQUESTSPDNCONTEXTREJNOSUB         | Thresholds                                                                                                                                   |                                                            |             |
| CRITICALREQUESTSPDNCONTEXTREJNOSUB        | Thresholds                                                                                                                                   |                                                            |             |
| WARNINGREQUESTSUECONTEXTRELEASERADIOLOST  | Thresholds                                                                                                                                   |                                                            |             |
| CRITICALREQUESTSUECONTEXTRELEASERADIOLOST | Thresholds                                                                                                                                   |                                                            |             |
| WARNINGREQUESTSUECONTEXTRELEASETOTAL      | Thresholds                                                                                                                                   |                                                            |             |
| CRITICALREQUESTSUECONTEXTRELEASETOTAL     | Thresholds                                                                                                                                   |                                                            |             |
| WARNINGSESSIONSACTIVE                     | Thresholds                                                                                                                                   |                                                            |             |
| CRITICALSESSIONSACTIVE                    | Thresholds                                                                                                                                   |                                                            |             |
| CRITICALSTATUS                            | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{sctp\_status}, %{s1ap\_status}, %{name} | %{sctp\_status} =~ /down/i \|\| %{s1ap\_status} =~ /down/i |             |
| WARNINGSTATUS                             | Define the conditions to match for the status to be WARNING. You can use the following variables: %{sctp\_status}, %{s1ap\_status}, %{name}  |                                                            |             |
| WARNINGTOTAL                              | Thresholds                                                                                                                                   |                                                            |             |
| CRITICALTOTAL                             | Thresholds                                                                                                                                   |                                                            |             |
| WARNINGTRAFFICIN                          | Thresholds                                                                                                                                   |                                                            |             |
| CRITICALTRAFFICIN                         | Thresholds                                                                                                                                   |                                                            |             |
| WARNINGTRAFFICOUT                         | Thresholds                                                                                                                                   |                                                            |             |
| CRITICALTRAFFICOUT                        | Thresholds                                                                                                                                   |                                                            |             |
| WARNINGUSERSCONNECTED                     | Thresholds                                                                                                                                   |                                                            |             |
| CRITICALUSERSCONNECTED                    | Thresholds                                                                                                                                   |                                                            |             |
| WARNINGUSERSIDLE                          | Thresholds                                                                                                                                   |                                                            |             |
| CRITICALUSERSIDLE                         | Thresholds                                                                                                                                   |                                                            |             |
| EXTRAOPTIONS                              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).       | --verbose                                                  |             |

</TabItem>
<TabItem value="License" label="License">

| Macro                            | Description                                                                                                                                            | Default value                    | Mandatory   |
|:---------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| UNIT                             | Select the time unit for the expiration threshold. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is days |                                  |             |
| WARNINGEXPIRES                   | Thresholds                                                                                                                                             |                                  |             |
| CRITICALEXPIRES                  | Thresholds                                                                                                                                             |                                  |             |
| WARNINGLICENSESESSIONSFREE       | Thresholds                                                                                                                                             |                                  |             |
| CRITICALLICENSESESSIONSFREE      | Thresholds                                                                                                                                             |                                  |             |
| WARNINGLICENSESESSIONSUSAGE      | Thresholds                                                                                                                                             |                                  |             |
| CRITICALLICENSESESSIONSUSAGE     | Thresholds                                                                                                                                             |                                  |             |
| WARNINGLICENSESESSIONSUSAGEPRCT  | Thresholds                                                                                                                                             |                                  |             |
| CRITICALLICENSESESSIONSUSAGEPRCT | Thresholds                                                                                                                                             |                                  |             |
| WARNINGLICENSEUSERSFREE          | Thresholds                                                                                                                                             |                                  |             |
| CRITICALLICENSEUSERSFREE         | Thresholds                                                                                                                                             |                                  |             |
| WARNINGLICENSEUSERSUSAGE         | Thresholds                                                                                                                                             |                                  |             |
| CRITICALLICENSEUSERSUSAGE        | Thresholds                                                                                                                                             |                                  |             |
| WARNINGLICENSEUSERSUSAGEPRCT     | Thresholds                                                                                                                                             |                                  |             |
| CRITICALLICENSEUSERSUSAGEPRCT    | Thresholds                                                                                                                                             |                                  |             |
| WARNINGLICENSEUSIMFREE           | Thresholds                                                                                                                                             |                                  |             |
| CRITICALLICENSEUSIMFREE          | Thresholds                                                                                                                                             |                                  |             |
| WARNINGLICENSEUSIMUSAGE          | Thresholds                                                                                                                                             |                                  |             |
| CRITICALLICENSEUSIMUSAGE         | Thresholds                                                                                                                                             |                                  |             |
| WARNINGLICENSEUSIMUSAGEPRCT      | Thresholds                                                                                                                                             |                                  |             |
| CRITICALLICENSEUSIMUSAGEPRCT     | Thresholds                                                                                                                                             |                                  |             |
| CRITICALSTATUS                   | Define the conditions to match for the status to be CRITICAL. Can use special variables like: %{status}                                                | %{status} =~ /expired\|invalid/i |             |
| WARNINGSTATUS                    | Define the conditions to match for the status to be WARNING. Can use special variables like: %{status}                                                 |                                  |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                 | --verbose                        |             |

</TabItem>
<TabItem value="Lte" label="Lte">

| Macro                                     | Description                                                                                                                            | Default value     | Mandatory   |
|:------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGREQUESTSATTACHSUCCESS              | Thresholds                                                                                                                             |                   |             |
| CRITICALREQUESTSATTACHSUCCESS             | Thresholds                                                                                                                             |                   |             |
| WARNINGREQUESTSATTACHSUCCESSPRCT          | Thresholds                                                                                                                             |                   |             |
| CRITICALREQUESTSATTACHSUCCESSPRCT         | Thresholds                                                                                                                             |                   |             |
| WARNINGREQUESTSPDNCONTEXTACTIVATION       | Thresholds                                                                                                                             |                   |             |
| CRITICALREQUESTSPDNCONTEXTACTIVATION      | Thresholds                                                                                                                             |                   |             |
| WARNINGREQUESTSPDNCONTEXTACTIVATIONPRCT   | Thresholds                                                                                                                             |                   |             |
| CRITICALREQUESTSPDNCONTEXTACTIVATIONPRCT  | Thresholds                                                                                                                             |                   |             |
| WARNINGREQUESTSPDNCONTEXTREJINSUFRES      | Thresholds                                                                                                                             |                   |             |
| CRITICALREQUESTSPDNCONTEXTREJINSUFRES     | Thresholds                                                                                                                             |                   |             |
| WARNINGREQUESTSPDNCONTEXTREJNOAPN         | Thresholds                                                                                                                             |                   |             |
| CRITICALREQUESTSPDNCONTEXTREJNOAPN        | Thresholds                                                                                                                             |                   |             |
| WARNINGREQUESTSPDNCONTEXTREJNOSUB         | Thresholds                                                                                                                             |                   |             |
| CRITICALREQUESTSPDNCONTEXTREJNOSUB        | Thresholds                                                                                                                             |                   |             |
| WARNINGREQUESTSUECONTEXTRELEASERADIOLOST  | Thresholds                                                                                                                             |                   |             |
| CRITICALREQUESTSUECONTEXTRELEASERADIOLOST | Thresholds                                                                                                                             |                   |             |
| WARNINGREQUESTSUECONTEXTRELEASETOTAL      | Thresholds                                                                                                                             |                   |             |
| CRITICALREQUESTSUECONTEXTRELEASETOTAL     | Thresholds                                                                                                                             |                   |             |
| WARNINGSESSIONSACTIVE                     | Thresholds                                                                                                                             |                   |             |
| CRITICALSESSIONSACTIVE                    | Thresholds                                                                                                                             |                   |             |
| WARNINGTRAFFICIN                          | Thresholds                                                                                                                             |                   |             |
| CRITICALTRAFFICIN                         | Thresholds                                                                                                                             |                   |             |
| WARNINGTRAFFICOUT                         | Thresholds                                                                                                                             |                   |             |
| CRITICALTRAFFICOUT                        | Thresholds                                                                                                                             |                   |             |
| WARNINGUSERSCONNECTED                     | Thresholds                                                                                                                             |                   |             |
| CRITICALUSERSCONNECTED                    | Thresholds                                                                                                                             |                   |             |
| WARNINGUSERSIDLE                          | Thresholds                                                                                                                             |                   |             |
| CRITICALUSERSIDLE                         | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS                              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_athonet_epc_snmp.pl \
	--plugin=network::athonet::epc::snmp::plugin \
	--mode=apns \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-name='' \
	--warning-traffic-in='' \
	--critical-traffic-in='' \
	--warning-traffic-out='' \
	--critical-traffic-out='' \
	--warning-pdp-contexts='' \
	--critical-pdp-contexts='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: in: 10 10/s out: 7 7/s pdp contexts: 34 | '*apns*~apn.traffic.in.bytespersecond'=10B/s;;;0;'*apns*~apn.traffic.out.bytespersecond'=7B/s;;;0;'*apns*~apn.pdp_contexts.count'=34;;;0;
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
/usr/lib/centreon/plugins/centreon_athonet_epc_snmp.pl \
	--plugin=network::athonet::epc::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                     | Linked service template                         |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| aggregate [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/athonet/epc/snmp/mode/aggregate.pm)]                             | Net-Athonet-Epc-Aggregate-SNMP-custom           |
| apns [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/athonet/epc/snmp/mode/apns.pm)]                                       | Net-Athonet-Epc-Apns-SNMP-custom                |
| interfaces-diameter [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/athonet/epc/snmp/mode/interfacesdiameter.pm)]          | Net-Athonet-Epc-Interfaces-Diameter-SNMP-custom |
| interfaces-ga [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/athonet/epc/snmp/mode/interfacesga.pm)]                      | Net-Athonet-Epc-Interfaces-Ga-SNMP-custom       |
| interfaces-gtpc [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/athonet/epc/snmp/mode/interfacesgtpc.pm)]                  | Net-Athonet-Epc-Interfaces-Gtpc-SNMP-custom     |
| interfaces-lte [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/athonet/epc/snmp/mode/interfaceslte.pm)]                    | Net-Athonet-Epc-Interfaces-Lte-SNMP-custom      |
| license [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/athonet/epc/snmp/mode/license.pm)]                                 | Net-Athonet-Epc-License-SNMP-custom             |
| list-apns [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/athonet/epc/snmp/mode/listapns.pm)]                              | Used for service discovery                      |
| list-interfaces-diameter [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/athonet/epc/snmp/mode/listinterfacesdiameter.pm)] | Used for service discovery                      |
| list-interfaces-ga [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/athonet/epc/snmp/mode/listinterfacesga.pm)]             | Used for service discovery                      |
| list-interfaces-gtpc [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/athonet/epc/snmp/mode/listinterfacesgtpc.pm)]         | Used for service discovery                      |
| list-interfaces-lte [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/athonet/epc/snmp/mode/listinterfaceslte.pm)]           | Used for service discovery                      |
| lte [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/athonet/epc/snmp/mode/lte.pm)]                                         | Net-Athonet-Epc-Lte-SNMP-custom                 |

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
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --subsetleef                               | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-autoreduce                          | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-force-getnext                       | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-username                            | SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --privprotocol                             | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --contextname                              | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --contextengineid                          | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-tls-their-hostname                  | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Aggregate" label="Aggregate">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='roaming'                                                                                                                                                         |
| --warning-* --critical-* | Thresholds. Can be: 'traffic-in', 'traffic-out', 'users-roaming-connected', 'requests-authentication', 'location-updates'.                                                                                                                    |

</TabItem>
<TabItem value="Apns" label="Apns">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='traffic'                                                                                                                                                         |
| --filter-name            | Filter APN by name (can be a regexp).                                                                                                                                                                                                         |
| --warning-* --critical-* | Thresholds. Can be: 'traffic-in', 'traffic-out', 'pdp-contexts'.                                                                                                                                                                              |

</TabItem>
<TabItem value="Interfaces-Diameter" label="Interfaces-Diameter">

| Option                      | Description                                                                                                                                                                                         |
|:----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters           | Only display some counters (regexp can be used). Example: --filter-counters='transport'                                                                                                             |
| --filter-name               | Filter interfaces by name (can be a regexp).                                                                                                                                                        |
| --filter-owner              | Filter interfaces by owner (can be a regexp).                                                                                                                                                       |
| --unknown-status            | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}, %{owner}                                                                      |
| --warning-status            | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}, %{owner}                                                                      |
| --critical-status           | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /down/i'). You can use the following variables: %{status}, %{name}, %{owner}                                   |
| --unknown-transport-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{transport\_status}, %{transport\_type}, %{name}                                                 |
| --warning-transport-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{transport\_status}, %{transport\_type}, %{name}                                                 |
| --critical-transport-status | Define the conditions to match for the status to be CRITICAL (default: '%{transport\_status} =~ /down/i'). You can use the following variables: %{transport\_status}, %{transport\_type}, %{name}   |
| --warning-* --critical-*    | Thresholds. Can be: 'total'.                                                                                                                                                                        |

</TabItem>
<TabItem value="Interfaces-Ga" label="Interfaces-Ga">

| Option                   | Description                                                                                                                                                                                    |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter interfaces by name (can be a regexp).                                                                                                                                                   |
| --filter-local-address   | Filter interfaces by local address (can be a regexp).                                                                                                                                          |
| --filter-peer-address    | Filter interfaces by peer address (can be a regexp).                                                                                                                                           |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{local\_address}, %{peer\_address}, %{name}                                      |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{local\_address}, %{peer\_address}, %{name}                                      |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /down/i'). You can use the following variables: %{status}, %{local\_address}, %{peer\_address}, %{name}   |
| --warning-* --critical-* | Thresholds. Can be: 'total'.                                                                                                                                                                   |

</TabItem>
<TabItem value="Interfaces-Gtpc" label="Interfaces-Gtpc">

| Option                       | Description                                                                                                                                                                                   |
|:-----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-source-address      | Filter interfaces by source address (can be a regexp).                                                                                                                                        |
| --filter-destination-address | Filter interfaces by destination address (can be a regexp).                                                                                                                                   |
| --filter-type                | Filter interfaces by type (can be a regexp).                                                                                                                                                  |
| --unknown-status             | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{source\_address}, %{destination\_address}                                      |
| --warning-status             | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{source\_address}, %{destination\_address}                                      |
| --critical-status            | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /down/i'). You can use the following variables: %{status}, %{source\_address}, %{destination\_address}   |
| --warning-* --critical-*     | Thresholds. Can be: 'total'.                                                                                                                                                                  |

</TabItem>
<TabItem value="Interfaces-Lte" label="Interfaces-Lte">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                     |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                        |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                            |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                 |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                         |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                 |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                    |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                          |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                             |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='users'                                                                                                                                                                                                                                                                                                                                                            |
| --filter-name            | Filter interfaces by name (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                   |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{sctp\_status}, %{s1ap\_status}, %{name}                                                                                                                                                                                                                                                                                                    |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{sctp\_status}, %{s1ap\_status}, %{name}                                                                                                                                                                                                                                                                                                    |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{sctp\_status} =~ /down/i \|\| %{s1ap\_status} =~ /down/i'). You can use the following variables: %{sctp\_status}, %{s1ap\_status}, %{name}                                                                                                                                                                                                                           |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'users-connected', 'users-idle', 'sessions-active', 'traffic-in', 'traffic-out', 'requests-ue-context-release-total', 'requests-ue-context-release-radio-lost', 'requests-attach-success', 'requests-attach-success-prct', 'requests-pdn-context-activation', 'requests-pdn-context-activation-prct', 'requests-pdn-context-rej-insufres', 'requests-pdn-context-rej-noapn', 'requests-pdn-context-rej-nosub'.    |

</TabItem>
<TabItem value="License" label="License">

| Option                   | Description                                                                                                                                                                                                                                                        |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='users'                                                                                                                                                                                |
| --warning-status         | Define the conditions to match for the status to be WARNING. Can use special variables like: %{status}                                                                                                                                                             |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /expired\|invalid/i'). Can use special variables like: %{status}                                                                                                              |
| --unit                   | Select the time unit for the expiration threshold. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is days.                                                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'expires', 'license-users-usage', 'license-users-free', 'license-users-usage-prct', 'license-sessions-usage', 'license-sessions-free', 'license-sessions-usage-prct', 'license-usim-usage', 'license-usim-free', 'license-usim-usage-prct'.    |

</TabItem>
<TabItem value="Lte" label="Lte">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                           |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                            |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                       |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                             |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                   |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                        |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                        |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                           |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                 |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                          |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='users'                                                                                                                                                                                                                                                                                                                                                   |
| --warning-* --critical-* | Thresholds. Can be: 'users-connected', 'users-idle', 'sessions-active', 'traffic-in', 'traffic-out', 'requests-ue-context-release-total', 'requests-ue-context-release-radio-lost', 'requests-attach-success', 'requests-attach-success-prct', 'requests-pdn-context-activation', 'requests-pdn-context-activation-prct', 'requests-pdn-context-rej-insufres', 'requests-pdn-context-rej-noapn', 'requests-pdn-context-rej-nosub'.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_athonet_epc_snmp.pl \
	--plugin=network::athonet::epc::snmp::plugin \
	--mode=apns \
	--help
```

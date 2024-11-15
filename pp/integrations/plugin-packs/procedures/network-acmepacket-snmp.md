---
id: network-acmepacket-snmp
title: Acme Packet SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Acme Packet** brings a host template:

* **Net-Acmepacket-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Acmepacket-SNMP-custom" label="Net-Acmepacket-SNMP-custom">

| Service Alias | Service Template                        | Service Description        |
|:--------------|:----------------------------------------|:---------------------------|
| Hardware      | Net-Acmepacket-Hardware-SNMP-custom     | Check hardware environment |
| System-Usage  | Net-Acmepacket-System-Usage-SNMP-custom | Check system usage         |

> The services listed above are created automatically when the **Net-Acmepacket-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias  | Service Template                          | Service Description                     | Discovery  |
|:---------------|:------------------------------------------|:----------------------------------------|:----------:|
| Codec          | Net-Acmepacket-Codec-SNMP-custom          | Check codec transcoding                 |            |
| Interfaces     | Net-Acmepacket-Interfaces-SNMP-custom     | Check interfaces                        | X          |
| Policy-Servers | Net-Acmepacket-Policy-Servers-SNMP-custom | Check external policy server statistics | X          |
| Realm-Usage    | Net-Acmepacket-Realm-Usage-SNMP-custom    | Check realm usage                       | X          |
| Security       | Net-Acmepacket-Security-SNMP-custom       | Check security statistics               |            |
| Sip-Usage      | Net-Acmepacket-Sip-Usage-SNMP-custom      | Check SIP usage                         | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                        |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **Net-Acmepacket-SNMP-custom** host template |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                              | Description                                                   |
|:---------------------------------------|:--------------------------------------------------------------|
| Net-Acmepacket-SNMP-Interface-Name     | Discover network interfaces and monitor bandwidth utilization |
| Net-Acmepacket-SNMP-Policy-Server-Name | Discover external policy servers and monitor statistics       |
| Net-Acmepacket-SNMP-Realm-Name         | Discover realms and monitor utilization                       |
| Net-Acmepacket-SNMP-Sip-Name           | Discover Sip interfaces and monitor utilization               |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Codec" label="Codec">

| Metric name                                    | Unit  |
|:-----------------------------------------------|:------|
| *codec*~transcoding.sessions.active.count      | count |
| *codec*~transcoding.resources.usage.count      | count |
| *codec*~transcoding.resources.free.count       | count |
| *codec*~transcoding.resources.usage.percentage | %     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name | Description       | Unit  |
|:------------|:------------------|:------|
| fan status  | Status of the fan |       |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                               | Unit  |
|:----------------------------------------------------------|:------|
| *interface_name*#status                                   | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Policy-Servers" label="Policy-Servers">

| Metric name                                                                     | Unit  |
|:--------------------------------------------------------------------------------|:------|
| policy_servers.total.count                                                      | count |
| *ps*~policy_server.client_transactions.total.count                              | count |
| *ps*~policy_server.client_transactions.errors.count                             | count |
| *ps*~policy_server.server_transactions.total.count                              | count |
| *ps*~policy_server.server_transactions.requests.count                           | count |
| *ps*~policy_server.server_transactions.requests.dropped.count                   | count |
| *ps*~policy_server.server_transactions.responses.succeeded.count                | count |
| *ps*~policy_server.server_transactions.responses.errors.count                   | count |
| *ps*~policy_server.messages.authorization_authentication_request.count          | count |
| *ps*~policy_server.messages.authorization_authentication_answer.succeeded.count | count |
| *ps*~policy_server.messages.authorization_authentication_answer.errors.count    | count |
| *ps*~policy_server.messages.session_termination_request.count                   | count |
| *ps*~policy_server.messages.session_termination_answer.succeeded.count          | count |
| *ps*~policy_server.messages.session_termination_answer.errors.count             | count |
| *ps*~policy_server.messages.abort_session_request.count                         | count |
| *ps*~policy_server.messages.abort_session_answer.succeeded.count                | count |
| *ps*~policy_server.messages.abort_session_answer.errors.count                   | count |
| *ps*~policy_server.messages.re_auth_request.count                               | count |
| *ps*~policy_server.messages.re_auth_answer.succeeded.count                      | count |
| *ps*~policy_server.messages.re_auth_answer.errors.count                         | count |

</TabItem>
<TabItem value="Realm-Usage" label="Realm-Usage">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| *realm*#realm.sessions.in.current.count    | count |
| *realm*#realm.sessions.in.rate.count       | count |
| *realm*#realm.sessions.in.total.count      | count |
| *realm*#realm.sessions.out.current.count   | count |
| *realm*#realm.sessions.out.rate.count      | count |
| *realm*#realm.sessions.out.total.count     | count |
| *realm*#realm.rfactor.qos.average.count    | count |
| *realm*#realm.rfactor.execeded.total.count | count |

</TabItem>
<TabItem value="Security" label="Security">

| Metric name                                                                  | Unit  |
|:-----------------------------------------------------------------------------|:------|
| *ipsec*~security.ipsec.tunnels.count                                         | count |
| *ipsec*~security.ipsec.license.usage.percentage                              | %     |
| *ims*~security.ims_aka.registrations.total.count                             | count |
| *ims*~security.ims_aka.registrations.protected.count                         | count |
| *ims*~security.ims_aka.security_association_add.requests.in.count            | count |
| *ims*~security.ims_aka.security_association_add.responses.out.succeded.count | count |
| *ims*~security.ims_aka.security_association_add.responses.out.failed.count   | count |
| *ims*~security.ims_aka.security_association_add.added.count                  | count |
| *ims*~security.ims_aka.security_association_del.requests.in.count            | count |
| *ims*~security.ims_aka.security_association_del.responses.out.succeded.count | count |
| *ims*~security.ims_aka.security_association_del.responses.out.failed.count   | count |
| *ims*~security.ims_aka.security_association_del.deleted.count                | count |

</TabItem>
<TabItem value="Sip-Usage" label="Sip-Usage">

| Metric name                          | Unit  |
|:-------------------------------------|:------|
| *sip*#status                         | N/A   |
| *sip*#sip.sessions.in.rate           | N/A   |
| *sip*#sip.sessions.out.rate          | N/A   |
| *sip*#sip.stats.latency.milliseconds | ms    |
| *sip*#sip.stats.asr.percentage       | %     |

</TabItem>
<TabItem value="System-Usage" label="System-Usage">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| *system*~health.score.percentage    | %     |
| *system*~cpu.utilization.percentage | %     |
| *system*~memory.usage.percentage    | %     |
| *system*~licence.usage.percentage   | %     |
| *system*~sessions.current.count     | count |
| *system*~calls.current.count        | /s    |
| *system*~replication-status         | N/A   |

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
dnf install centreon-pack-network-acmepacket-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-acmepacket-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-acmepacket-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-acmepacket-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Acme Packet** connector through
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
dnf install centreon-plugin-Network-Acmepacket-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Acmepacket-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-acmepacket-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Acmepacket-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-Acmepacket-SNMP-custom** template to the host. 

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
<TabItem value="Codec" label="Codec">

| Macro                      | Description                                                                                                                            | Default value     | Mandatory   |
|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGRESOURCESUSAGE      | Thresholds                                                                                                                             |                   |             |
| CRITICALRESOURCESUSAGE     | Thresholds                                                                                                                             |                   |             |
| WARNINGRESOURCESUSAGEFREE  | Thresholds                                                                                                                             |                   |             |
| CRITICALRESOURCESUSAGEFREE | Thresholds                                                                                                                             |                   |             |
| WARNINGRESOURCESUSAGEPRCT  | Thresholds                                                                                                                             |                   |             |
| CRITICALRESOURCESUSAGEPRCT | Thresholds                                                                                                                             |                   |             |
| WARNINGSESSIONSACTIVE      | Thresholds                                                                                                                             |                   |             |
| CRITICALSESSIONSACTIVE     | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check. Can be: 'voltage', 'temperature', 'fan', 'psu'                                                               | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro              | Description                                                                                                                                                 | Default value                                         | Mandatory   |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| OIDFILTER          | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                  | ifname                                                |             |
| OIDDISPLAY         | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                         | ifname                                                |             |
| INTERFACENAME      | Define the interface filter on IDs (OID indexes, e.g.: 1,2,...). If empty, all interfaces will be monitored. To filter on interface names, see --name       |                                                       |             |
| WARNINGINDISCARD   | Thresholds                                                                                                                                                  |                                                       |             |
| CRITICALINDISCARD  | Thresholds                                                                                                                                                  |                                                       |             |
| WARNINGINERROR     | Thresholds                                                                                                                                                  |                                                       |             |
| CRITICALINERROR    | Thresholds                                                                                                                                                  |                                                       |             |
| WARNINGINTRAFFIC   | Thresholds                                                                                                                                                  |                                                       |             |
| CRITICALINTRAFFIC  | Thresholds                                                                                                                                                  |                                                       |             |
| WARNINGOUTDISCARD  | Thresholds                                                                                                                                                  |                                                       |             |
| CRITICALOUTDISCARD | Thresholds                                                                                                                                                  |                                                       |             |
| WARNINGOUTERROR    | Thresholds                                                                                                                                                  |                                                       |             |
| CRITICALOUTERROR   | Thresholds                                                                                                                                                  |                                                       |             |
| WARNINGOUTTRAFFIC  | Thresholds                                                                                                                                                  |                                                       |             |
| CRITICALOUTTRAFFIC | Thresholds                                                                                                                                                  |                                                       |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}   | %{admstatus} eq "up" and %{opstatus} !~ /up\|dormant/ |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}    |                                                       |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                      | --verbose --no-skipped-counters --use-new-perfdata    |             |

</TabItem>
<TabItem value="Policy-Servers" label="Policy-Servers">

| Macro                                       | Description                                                                                                                            | Default value     | Mandatory   |
|:--------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                                  | Filter policy servers by name (can be a regexp)                                                                                        |                   |             |
| WARNINGCLIENTTRANSACTIONS                   | Thresholds                                                                                                                             |                   |             |
| CRITICALCLIENTTRANSACTIONS                  | Thresholds                                                                                                                             |                   |             |
| WARNINGCLIENTTRANSACTIONSTOTAL              | Thresholds                                                                                                                             |                   |             |
| CRITICALCLIENTTRANSACTIONSTOTAL             | Thresholds                                                                                                                             |                   |             |
| WARNINGMESSAGESAAAERRORS                    | Thresholds                                                                                                                             |                   |             |
| CRITICALMESSAGESAAAERRORS                   | Thresholds                                                                                                                             |                   |             |
| WARNINGMESSAGESAAASUCCEEDED                 | Thresholds                                                                                                                             |                   |             |
| CRITICALMESSAGESAAASUCCEEDED                | Thresholds                                                                                                                             |                   |             |
| WARNINGMESSAGESAAR                          | Thresholds                                                                                                                             |                   |             |
| CRITICALMESSAGESAAR                         | Thresholds                                                                                                                             |                   |             |
| WARNINGMESSAGESASAERRORS                    | Thresholds                                                                                                                             |                   |             |
| CRITICALMESSAGESASAERRORS                   | Thresholds                                                                                                                             |                   |             |
| WARNINGMESSAGESASASUCCEEDED                 | Thresholds                                                                                                                             |                   |             |
| CRITICALMESSAGESASASUCCEEDED                | Thresholds                                                                                                                             |                   |             |
| WARNINGMESSAGESASR                          | Thresholds                                                                                                                             |                   |             |
| CRITICALMESSAGESASR                         | Thresholds                                                                                                                             |                   |             |
| WARNINGMESSAGESRAAERRORS                    | Thresholds                                                                                                                             |                   |             |
| CRITICALMESSAGESRAAERRORS                   | Thresholds                                                                                                                             |                   |             |
| WARNINGMESSAGESRAASUCCEEDED                 | Thresholds                                                                                                                             |                   |             |
| CRITICALMESSAGESRAASUCCEEDED                | Thresholds                                                                                                                             |                   |             |
| WARNINGMESSAGESRAR                          | Thresholds                                                                                                                             |                   |             |
| CRITICALMESSAGESRAR                         | Thresholds                                                                                                                             |                   |             |
| WARNINGMESSAGESSTAERRORS                    | Thresholds                                                                                                                             |                   |             |
| CRITICALMESSAGESSTAERRORS                   | Thresholds                                                                                                                             |                   |             |
| WARNINGMESSAGESSTASUCCEEDED                 | Thresholds                                                                                                                             |                   |             |
| CRITICALMESSAGESSTASUCCEEDED                | Thresholds                                                                                                                             |                   |             |
| WARNINGMESSAGESSTR                          | Thresholds                                                                                                                             |                   |             |
| CRITICALMESSAGESSTR                         | Thresholds                                                                                                                             |                   |             |
| WARNINGSERVERTRANSACTIONSREQUESTS           | Thresholds                                                                                                                             |                   |             |
| CRITICALSERVERTRANSACTIONSREQUESTS          | Thresholds                                                                                                                             |                   |             |
| WARNINGSERVERTRANSACTIONSREQUESTSDROPPED    | Thresholds                                                                                                                             |                   |             |
| CRITICALSERVERTRANSACTIONSREQUESTSDROPPED   | Thresholds                                                                                                                             |                   |             |
| WARNINGSERVERTRANSACTIONSRESPONSESERRORS    | Thresholds                                                                                                                             |                   |             |
| CRITICALSERVERTRANSACTIONSRESPONSESERRORS   | Thresholds                                                                                                                             |                   |             |
| WARNINGSERVERTRANSACTIONSRESPONSESSUCCEDED  | Thresholds                                                                                                                             |                   |             |
| CRITICALSERVERTRANSACTIONSRESPONSESSUCCEDED | Thresholds                                                                                                                             |                   |             |
| WARNINGSERVERTRANSACTIONSTOTAL              | Thresholds                                                                                                                             |                   |             |
| CRITICALSERVERTRANSACTIONSTOTAL             | Thresholds                                                                                                                             |                   |             |
| WARNINGTOTAL                                | Thresholds                                                                                                                             |                   |             |
| CRITICALTOTAL                               | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS                                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Realm-Usage" label="Realm-Usage">

| Macro                          | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                     | Filter by realm name (can be a regexp)                                                                                                 |                   |             |
| WARNINGAVGQOSRFACTOR           | Warning threshold                                                                                                                      |                   |             |
| CRITICALAVGQOSRFACTOR          | Critical threshold                                                                                                                     |                   |             |
| WARNINGCURRENTINSESSIONS       | Warning threshold                                                                                                                      |                   |             |
| CRITICALCURRENTINSESSIONS      | Critical threshold                                                                                                                     |                   |             |
| WARNINGCURRENTINSESSIONSRATE   | Warning threshold                                                                                                                      |                   |             |
| CRITICALCURRENTINSESSIONSRATE  | Critical threshold                                                                                                                     |                   |             |
| WARNINGCURRENTOUTSESSIONS      | Warning threshold                                                                                                                      |                   |             |
| CRITICALCURRENTOUTSESSIONS     | Critical threshold                                                                                                                     |                   |             |
| WARNINGCURRENTOUTSESSIONSRATE  | Warning threshold                                                                                                                      |                   |             |
| CRITICALCURRENTOUTSESSIONSRATE | Critical threshold                                                                                                                     |                   |             |
| WARNINGTOTALINSESSIONS         | Warning threshold                                                                                                                      |                   |             |
| CRITICALTOTALINSESSIONS        | Critical threshold                                                                                                                     |                   |             |
| WARNINGTOTALOUTSESSIONS        | Warning threshold                                                                                                                      |                   |             |
| CRITICALTOTALOUTSESSIONS       | Critical threshold                                                                                                                     |                   |             |
| WARNINGTOTALRFACTOR            | Warning threshold                                                                                                                      |                   |             |
| CRITICALTOTALRFACTOR           | Critical threshold                                                                                                                     |                   |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Security" label="Security">

| Macro                                 | Description                                                                                                                            | Default value     | Mandatory   |
|:--------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGIMSAKASAADDADDED               | Thresholds                                                                                                                             |                   |             |
| CRITICALIMSAKASAADDADDED              | Thresholds                                                                                                                             |                   |             |
| WARNINGIMSAKASAADDREQUESTSIN          | Thresholds                                                                                                                             |                   |             |
| CRITICALIMSAKASAADDREQUESTSIN         | Thresholds                                                                                                                             |                   |             |
| WARNINGIMSAKASAADDRESPONSESFAILED     | Thresholds                                                                                                                             |                   |             |
| CRITICALIMSAKASAADDRESPONSESFAILED    | Thresholds                                                                                                                             |                   |             |
| WARNINGIMSAKASAADDRESPONSESSUCCEEDED  | Thresholds                                                                                                                             |                   |             |
| CRITICALIMSAKASAADDRESPONSESSUCCEEDED | Thresholds                                                                                                                             |                   |             |
| WARNINGIMSAKASADELDELETED             | Thresholds                                                                                                                             |                   |             |
| CRITICALIMSAKASADELDELETED            | Thresholds                                                                                                                             |                   |             |
| WARNINGIMSAKASADELREQUESTSIN          | Thresholds                                                                                                                             |                   |             |
| CRITICALIMSAKASADELREQUESTSIN         | Thresholds                                                                                                                             |                   |             |
| WARNINGIMSAKASADELRESPONSESFAILED     | Thresholds                                                                                                                             |                   |             |
| CRITICALIMSAKASADELRESPONSESFAILED    | Thresholds                                                                                                                             |                   |             |
| WARNINGIMSAKASADELRESPONSESSUCCEEDED  | Thresholds                                                                                                                             |                   |             |
| CRITICALIMSAKASADELRESPONSESSUCCEEDED | Thresholds                                                                                                                             |                   |             |
| WARNINGIPSECLICENSEUSAGE              | Thresholds                                                                                                                             |                   |             |
| CRITICALIPSECLICENSEUSAGE             | Thresholds                                                                                                                             |                   |             |
| WARNINGIPSECTUNNELS                   | Thresholds                                                                                                                             |                   |             |
| CRITICALIPSECTUNNELS                  | Thresholds                                                                                                                             |                   |             |
| WARNINGREGISTRATIONSPROTECTED         | Thresholds                                                                                                                             |                   |             |
| CRITICALREGISTRATIONSPROTECTED        | Thresholds                                                                                                                             |                   |             |
| WARNINGREGISTRATIONSTOTAL             | Thresholds                                                                                                                             |                   |             |
| CRITICALREGISTRATIONSTOTAL            | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS                          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Sip-Usage" label="Sip-Usage">

| Macro                   | Description                                                                                                                            | Default value                                                         | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------|:-----------:|
| FILTERNAME              | Filter by SIP name (can be a regexp)                                                                                                   |                                                                       |             |
| STATUS                  | Define the conditions to match for the status to be WARNING (default: -). You can use the following variables: %{status}               |                                                                       |             |
| WARNINGASR              | Warning threshold                                                                                                                      |                                                                       |             |
| CRITICALASR             | Critical threshold                                                                                                                     |                                                                       |             |
| WARNINGINSESSIONSRATE   | Warning threshold                                                                                                                      |                                                                       |             |
| CRITICALINSESSIONSRATE  | Critical threshold                                                                                                                     |                                                                       |             |
| WARNINGLATENCY          | Warning threshold                                                                                                                      |                                                                       |             |
| CRITICALLATENCY         | Critical threshold                                                                                                                     |                                                                       |             |
| WARNINGOUTSESSIONSRATE  | Warning threshold                                                                                                                      |                                                                       |             |
| CRITICALOUTSESSIONSRATE | Critical threshold                                                                                                                     |                                                                       |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}                           | %{status} =~ /outOfService\|constraintsViolation\|inServiceTimedOut/i |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                                                             |             |

</TabItem>
<TabItem value="System-Usage" label="System-Usage">

| Macro                     | Description                                                                                                                            | Default value                            | Mandatory   |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|:-----------:|
| WARNINGCPULOAD            | Warning threshold                                                                                                                      |                                          |             |
| CRITICALCPULOAD           | Critical threshold                                                                                                                     |                                          |             |
| WARNINGCURRENTCALLS       | Warning threshold                                                                                                                      |                                          |             |
| CRITICALCURRENTCALLS      | Critical threshold                                                                                                                     |                                          |             |
| WARNINGCURRENTSESSIONS    | Warning threshold                                                                                                                      |                                          |             |
| CRITICALCURRENTSESSIONS   | Critical threshold                                                                                                                     |                                          |             |
| WARNINGHEALTHSCORE        | Warning threshold                                                                                                                      |                                          |             |
| CRITICALHEALTHSCORE       | Critical threshold                                                                                                                     |                                          |             |
| WARNINGLICENSEUSAGE       | Warning threshold                                                                                                                      |                                          |             |
| CRITICALLICENSEUSAGE      | Critical threshold                                                                                                                     |                                          |             |
| WARNINGMEMORYUSAGE        | Warning threshold                                                                                                                      |                                          |             |
| CRITICALMEMORYUSAGE       | Critical threshold                                                                                                                     |                                          |             |
| CRITICALREPLICATIONSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{replication\_state}               | %{replication\_state} =~ /outOfService/i |             |
| WARNINGREPLICATIONSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{replication\_state}                |                                          |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                                          |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_acmepacket_snmp.pl \
	--plugin=network::acmepacket::snmp::plugin \
	--mode=sip-usage \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-name='' \
	--warning-status='' \
	--critical-status='%{status} =~ /outOfService|constraintsViolation|inServiceTimedOut/i' \
	--warning-in-sessions-rate='' \
	--critical-in-sessions-rate='' \
	--warning-out-sessions-rate='' \
	--critical-out-sessions-rate='' \
	--warning-latency='' \
	--critical-latency='' \
	--warning-asr='' \
	--critical-asr='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: SIP 'Sip Agent Host 1' status: inService, inbound sessions rate: 63.83/s, outbound sessions rate: 42.55/s, average latency: 20 ms, answer-to-seizure ratio: 80 % | 'Sip Agent Host 1#sip.sessions.in.rate'=63.83;;;0; 'Sip Agent Host 1#sip.sessions.out.rate'=42.55;;;0; 'Sip Agent Host 1#sip.stats.latency.milliseconds'=20ms;;;0; 'Sip Agent Host 1#sip.stats.asr.percentage'=80%;;;0;
SIP 'Sip Agent Host 1' status: inService, inbound sessions rate: 63.83/s, outbound sessions rate: 42.55/s, average latency: 20 ms, answer-to-seizure ratio: 80 %
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
/usr/lib/centreon/plugins/centreon_acmepacket_snmp.pl \
	--plugin=network::acmepacket::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                          | Linked service template                   |
|:----------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------|
| codec [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/acmepacket/snmp/mode/codec.pm)]                           | Net-Acmepacket-Codec-SNMP-custom          |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/acmepacket/snmp/mode/hardware.pm)]                     | Net-Acmepacket-Hardware-SNMP-custom       |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/interfaces.pm)]                           | Net-Acmepacket-Interfaces-SNMP-custom     |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]                  | Used for service discovery                |
| list-policy-servers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/acmepacket/snmp/mode/listpolicyservers.pm)] | Used for service discovery                |
| list-realm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/acmepacket/snmp/mode/listrealm.pm)]                  | Used for service discovery                |
| list-sip [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/acmepacket/snmp/mode/listsip.pm)]                      | Used for service discovery                |
| policy-servers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/acmepacket/snmp/mode/policyservers.pm)]          | Net-Acmepacket-Policy-Servers-SNMP-custom |
| realm-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/acmepacket/snmp/mode/realmusage.pm)]                | Net-Acmepacket-Realm-Usage-SNMP-custom    |
| security [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/acmepacket/snmp/mode/security.pm)]                     | Net-Acmepacket-Security-SNMP-custom       |
| sip-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/acmepacket/snmp/mode/sipusage.pm)]                    | Net-Acmepacket-Sip-Usage-SNMP-custom      |
| system-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/acmepacket/snmp/mode/systemusage.pm)]              | Net-Acmepacket-System-Usage-SNMP-custom   |

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
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
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
<TabItem value="Codec" label="Codec">

| Option                   | Description                                                                                                  |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^memory-usage$'                 |
| --warning-* --critical-* | Thresholds. Can be: 'sessions-active', 'resources-usage', 'resources-usage-free', 'resources-usage-prct'.    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                                           |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'voltage', 'temperature', 'fan', 'psu'.                                                                                                                                             |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=fan,1                                                                            |
| --absent-problem     | Return an error if an entity is not 'present' (default is skipping) (comma separated list) Can be specific or global: --absent-problem=psu,1                                                                                          |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                                            |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='psu,CRITICAL,^(?!(normal\|initial)$)'   |
| --warning            | Set warning threshold for 'temperature', 'fan', 'voltage' (syntax: type,regexp,threshold) Example: --warning='temperature,.*,40'                                                                                                      |
| --critical           | Set critical threshold for 'temperature', 'fan', 'voltage' (syntax: type,regexp,threshold) Example: --critical='temperature,.*,50'                                                                                                    |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                                          | Description                                                                                                                                                                                                                                                                                |
|:------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                                     | Memcached server to use (only one server).                                                                                                                                                                                                                                                 |
| --redis-server                                  | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            |
| --redis-attribute                               | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    |
| --redis-db                                      | Set Redis database index.                                                                                                                                                                                                                                                                  |
| --failback-file                                 | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                        |
| --memexpiration                                 | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                             |
| --statefile-dir                                 | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                     |
| --statefile-suffix                              | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                             |
| --statefile-concat-cwd                          | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                |
| --statefile-format                              | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                      |
| --statefile-key                                 | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                               |
| --statefile-cipher                              | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                         |
| --add-global                                    | Check global port statistics (by default if no --add-* option is set).                                                                                                                                                                                                                     |
| --add-status                                    | Check interface status.                                                                                                                                                                                                                                                                    |
| --add-duplex-status                             | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         |
| --add-traffic                                   | Check interface traffic.                                                                                                                                                                                                                                                                   |
| --add-errors                                    | Check interface errors.                                                                                                                                                                                                                                                                    |
| --add-cast                                      | Check interface cast.                                                                                                                                                                                                                                                                      |
| --add-speed                                     | Check interface speed.                                                                                                                                                                                                                                                                     |
| --add-volume                                    | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      |
| --check-metrics                                 | If the expression is true, metrics are checked (default: '%{opstatus} eq "up"').                                                                                                                                                                                                           |
| --warning-status                                | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                   |
| --critical-status                               | Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                        |
| --warning-* --critical-*                        | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   |
| --units-traffic                                 | Units of thresholds for the traffic (default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      |
| --units-errors                                  | Units of thresholds for errors/discards (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                          |
| --units-cast                                    | Units of thresholds for communication types (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                      |
| --nagvis-perfdata                               | Display traffic perfdata to be compatible with NagVis widget.                                                                                                                                                                                                                              |
| --interface                                     | Define the interface filter on IDs (OID indexes, e.g.: 1,2,...). If empty, all interfaces will be monitored. To filter on interface names, see --name.                                                                                                                                     |
| --name                                          | With this option, the interfaces will be filtered by name (givenin option --interface) instead of OID index. The name matching mode supports regular expressions.                                                                                                                          |
| --regex-id                                      | With this option, interface IDs will be filtered using the --interface parameter as a regular expression instead of a list of IDs.                                                                                                                                                         |
| --speed                                         | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 |
| --speed-in                                      | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out                                     | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --map-speed-dsl                                 | Get interface speed configuration for interfaces of type 'ADSL' and 'VDSL2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                        |
| --force-counters64                              | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    |
| --force-counters32                              | Force to use 32-bits counters (even with SNMP versions 2c and 3). To use when 64 bits counters are buggy.                                                                                                                                                                                  |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                       |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens' will replace all occurrences of 'eth' with 'ens'                                                                                           |
| --show-cache                                    | Display cache interface data.                                                                                                                                                                                                                                                              |

</TabItem>
<TabItem value="Policy-Servers" label="Policy-Servers">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                    |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='total'                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --filter-name            | Filter policy servers by name (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'client-transactions-total', 'client-transactions', 'server-transactions-total', 'server-transactions-requests', 'server-transactions-requests-dropped', 'server-transactions-responses-succeded', 'server-transactions-responses-errors', 'messages-aar', 'messages-aaa-succeeded', 'messages-aaa-errors', 'messages-rar', 'messages-raa-succeeded', 'messages-raa-errors', 'messages-str', 'messages-sta-succeeded', 'messages-sta-errors', 'messages-asr', 'messages-asa-succeeded', 'messages-asa-errors'.    |

</TabItem>
<TabItem value="Realm-Usage" label="Realm-Usage">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold. Can be: 'current-in-sessions', 'current-in-sessions-rate', 'total-in-sessions', 'current-out-sessions', 'current-out-sessions-rate', 'total-out-session', 'avg-qos-rfactor', 'total-rfactor'.                              |
| --critical-*           | Critical threshold. Can be: 'current-in-sessions', 'current-in-sessions-rate', 'total-in-sessions', 'current-out-sessions', 'current-out-sessions-rate', 'total-out-session', 'avg-qos-rfactor', 'total-rfactor'.                             |
| --filter-name          | Filter by realm name (can be a regexp).                                                                                                                                                                                                       |

</TabItem>
<TabItem value="Security" label="Security">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                              |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                         |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                 |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                                                                                               |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                     |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                          |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                  |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                          |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                             |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                   |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                            |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                      |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='registration'                                                                                                                                                                                                                                                                              |
| --warning-* --critical-* | Thresholds. Can be: 'registrations-total', 'registrations-protected', 'ipsec-tunnels, 'ipsec-license-usage', 'imsaka-sa-add-requests-in', 'imsaka-sa-add-responses-succeeded', 'imsaka-sa-add-responses-failed', 'imsaka-sa-add-added', 'imsaka-sa-del-requests-in', 'imsaka-sa-del-responses-succeeded', 'imsaka-sa-del-responses-failed', 'imsaka-sa-del-deleted'.    |

</TabItem>
<TabItem value="Sip-Usage" label="Sip-Usage">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-status       | Define the conditions to match for the status to be WARNING (default: -). You can use the following variables: %{status}                                                                                                                      |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /outOfService\|constraintsViolation\|inServiceTimedOut/i'). You can use the following variables: %{status}                                               |
| --warning-*            | Warning threshold. Can be: 'in-sessions-rate', 'out-sessions-rate', 'latency', 'asr'.                                                                                                                                                         |
| --critical-*           | Critical threshold. Can be: 'in-sessions-rate', 'out-sessions-rate', 'latency', 'asr'.                                                                                                                                                        |
| --filter-name          | Filter by SIP name (can be a regexp).                                                                                                                                                                                                         |

</TabItem>
<TabItem value="System-Usage" label="System-Usage">

| Option                        | Description                                                                                                                                                                      |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters             | Only display some counters (regexp can be used). Example: --filter-counters='^memory-usage$'                                                                                     |
| --warning-replication-status  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{replication\_state}                                            |
| --critical-replication-status | Define the conditions to match for the status to be CRITICAL (default: '%{replication\_state} =~ /outOfService/i'). You can use the following variables: %{replication\_state}   |
| --warning-*                   | Warning threshold. Can be: 'license-usage' (%), 'memory-usage' (%), 'cpu-load' (%), 'health-score' (%), 'current-sessions', 'current-calls'.                                     |
| --critical-*                  | Critical threshold. Can be: 'license-usage' (%), 'memory-usage' (%), 'cpu-load' (%), 'health-score' (%), 'current-sessions', 'current-calls'.                                    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_acmepacket_snmp.pl \
	--plugin=network::acmepacket::snmp::plugin \
	--mode=sip-usage \
	--help
```

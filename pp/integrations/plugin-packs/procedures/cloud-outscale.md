---
id: cloud-outscale
slug: /cloud-outscale
title: Outscale API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Outscale API** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Outscale API** brings a host template:

* **Cloud-Outscale-Osscli-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Outscale-Osscli-custom" label="Cloud-Outscale-Osscli-custom">

| Service Alias        | Service Template                                  | Service Description                   |
|:---------------------|:--------------------------------------------------|:--------------------------------------|
| Account-Consumptions | Cloud-Outscale-Account-Consumptions-Osccli-custom | Check the consumption of your account |

> The services listed above are created automatically when the **Cloud-Outscale-Osscli-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias     | Service Template                               | Service Description     | Discovery  |
|:------------------|:-----------------------------------------------|:------------------------|:----------:|
| Client-Gateways   | Cloud-Outscale-Client-Gateways-Osccli-custom   | Check client gateways   | X          |
| Internet-Services | Cloud-Outscale-Internet-Services-Osccli-custom | Check internet services | X          |
| Load-Balancers    | Cloud-Outscale-Load-Balancers-Osccli-custom    | Check load balancers    | X          |
| Nat-Services      | Cloud-Outscale-Nat-Services-Osccli-custom      | Check NAT services      | X          |
| Nets              | Cloud-Outscale-Nets-Osccli-custom              | Check Nets              | X          |
| Quotas            | Cloud-Outscale-Quotas-Osccli-custom            | Check quotas            | X          |
| Route-Tables      | Cloud-Outscale-Route-Tables-Osccli-custom      | Check route tables      | X          |
| Subnets           | Cloud-Outscale-Subnets-Osccli-custom           | Check subnets           | X          |
| Virtual-Gateways  | Cloud-Outscale-Virtual-Gateways-Osccli-custom  | Check virtual gateways  | X          |
| Vms               | Cloud-Outscale-Vms-Osccli-custom               | Check virtual machines  | X          |
| Volumes           | Cloud-Outscale-Volumes-Osccli-custom           | Check volumes           | X          |
| Vpn-Connections   | Cloud-Outscale-Vpn-Connections-Osccli-custom   | Check VPN connections   | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                                   | Description                                      |
|:--------------------------------------------|:-------------------------------------------------|
| Cloud-Outscale-Osccli-Client-Gateway-Name   | Discover client gateways and monitor status   |
| Cloud-Outscale-Osccli-Internet-Service-Name | Discover internet services and monitor status |
| Cloud-Outscale-Osccli-Load-Balancer-Name    | Discover load balancers and monitor status    |
| Cloud-Outscale-Osccli-Nat-Service-Name      | Discover NAT services and monitor status      |
| Cloud-Outscale-Osccli-Net-Name              | Discover Nets and monitor status              |
| Cloud-Outscale-Osccli-Quota-Type-Name       | Discover quotas and monitor status            |
| Cloud-Outscale-Osccli-Route-Table-Id        | Discover route tables and monitor status      |
| Cloud-Outscale-Osccli-Subnet-Name           | Discover subnets and monitor status           |
| Cloud-Outscale-Osccli-Virtual-Gateway-Name  | Discover virtual gateways and monitor status  |
| Cloud-Outscale-Osccli-Vm-Name               | Discover virtual machines and monitor status  |
| Cloud-Outscale-Osccli-Volume-Id             | Discover volumes and monitor status           |
| Cloud-Outscale-Osccli-Vpn-Connection-Name   | Discover VPN connections and monitor status   |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Account-Consumptions" label="Account-Consumptions">

| Name                                      | Unit  |
|:------------------------------------------|:------|
| account.consumptions.detected.count       | count |
| *consumptions*~accounts.consumption.count | count |

</TabItem>
<TabItem value="Client-Gateways" label="Client-Gateways">

| Name                            | Unit  |
|:--------------------------------|:------|
| client_gateways.detected.count  | count |
| client_gateways.available.count | count |
| client_gateways.pending.count   | count |
| client_gateways.deleting.count  | count |
| client_gateways.deleted.count   | count |
| cg-status                       | N/A   |

</TabItem>
<TabItem value="Internet-Services" label="Internet-Services">

| Name                              | Unit  |
|:----------------------------------|:------|
| internet_services.detected.count  | count |
| internet_services.available.count | count |
| internet-service-status           | N/A   |

</TabItem>
<TabItem value="Load-Balancers" label="Load-Balancers">

| Name                                            | Unit  |
|:------------------------------------------------|:------|
| load_balancers.detected.count                   | count |
| *lbs*~load_balancer.virtual_machines.up.count   | count |
| *lbs*~load_balancer.virtual_machines.down.count | count |
| vm-status                                       | N/A   |

</TabItem>
<TabItem value="Nat-Services" label="Nat-Services">

| Name                         | Unit  |
|:-----------------------------|:------|
| nat_services.detected.count  | count |
| nat_services.pending.count   | count |
| nat_services.available.count | count |
| nat_services.deleting.count  | count |
| nat_services.deleted.count   | count |
| nat-service-status           | N/A   |

</TabItem>
<TabItem value="Nets" label="Nets">

| Name                 | Unit  |
|:---------------------|:------|
| nets.detected.count  | count |
| nets.pending.count   | count |
| nets.available.count | count |
| nets.deleted.count   | count |
| net-status           | N/A   |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Name                            | Unit  |
|:--------------------------------|:------|
| *quotas*#quota.usage.count      | count |
| *quotas*#quota.free.count       | count |
| *quotas*#quota.usage.percentage | %     |

</TabItem>
<TabItem value="Route-Tables" label="Route-Tables">

| Name                               | Unit  |
|:-----------------------------------|:------|
| route_tables.detected.count        | count |
| *tables*#route_tables.routes.count | count |

</TabItem>
<TabItem value="Subnets" label="Subnets">

| Name                                  | Unit  |
|:--------------------------------------|:------|
| subnets.detected.count                | count |
| subnets.pending.count                 | count |
| subnets.available.count               | count |
| subnets.deleted.count                 | count |
| subnet-status                         | N/A   |
| *subnets*~subnet.addresses.free.count | count |

</TabItem>
<TabItem value="Virtual-Gateways" label="Virtual-Gateways">

| Name                             | Unit  |
|:---------------------------------|:------|
| virtual_gateways.detected.count  | count |
| virtual_gateways.available.count | count |
| virtual_gateways.pending.count   | count |
| virtual_gateways.deleting.count  | count |
| virtual_gateways.deleted.count   | count |
| vg-status                        | N/A   |

</TabItem>
<TabItem value="Vms" label="Vms">

| Name                                 | Unit  |
|:-------------------------------------|:------|
| virtual_machines.detected.count      | count |
| virtual_machines.pending.count       | count |
| virtual_machines.running.count       | count |
| virtual_machines.stopping.count      | count |
| virtual_machines.stopped.count       | count |
| virtual_machines.shutting-down.count | count |
| virtual_machines.terminated.count    | count |
| virtual_machines.quarantine.count    | count |
| vm-status                            | N/A   |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Name                    | Unit  |
|:------------------------|:------|
| volumes.detected.count  | count |
| volumes.creating.count  | count |
| volumes.available.count | count |
| volumes.in-use.count    | count |
| volumes.updating.count  | count |
| volumes.deleting.count  | count |
| volumes.error.count     | count |
| volume-status           | N/A   |
| vm-status               | N/A   |

</TabItem>
<TabItem value="Vpn-Connections" label="Vpn-Connections">

| Name                            | Unit  |
|:--------------------------------|:------|
| vpn_connections.detected.count  | count |
| vpn_connections.available.count | count |
| vpn_connections.pending.count   | count |
| vpn_connections.deleting.count  | count |
| vpn_connections.deleted.count   | count |
| vpn-connection-status           | N/A   |

</TabItem>
</Tabs>

## Prerequisites

Please follow the official documentation to install ```osc-cli``` for the user ```centreon-engine```:
https://docs.outscale.com/en/userguide/Installing-and-Configuring-OSC-CLI.html

A user Outscale with the following privileges should be used:
```
    "Statement": [
        {
            "Action": [
                "*:Describe*",   ç Les droits sont bien positionnés…
                "*:Read*"
            ],
            "Resource": "*",
            "Effect": "Allow"
        }
    ]

```

## Installing the monitoring connector

### Pack

The installation procedures for monitoring connectors are slightly different depending on [whether your license is offline or online](../getting-started/how-to-guides/connectors-licenses.md).

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-outscale
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-outscale
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-outscale
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-outscale
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Outscale API** connector through
the **Configuration > Connectors > Monitoring Connectors** menu.

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
dnf install centreon-plugin-Cloud-Outscale-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Outscale-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-outscale-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Outscale-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Cloud-Outscale-Osscli-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                | Description                                                                                          | Default value     | Mandatory   |
|:---------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| OUTSCALEPROFILE      | Set profile option                                                                                   |                   |             |
| OUTSCALEVIRTUALENV   | Set python virtual environment (to be used if osc-cli is installed in python venv)                   |                   |             |
| PROXYURL             | Proxy URL if any                                                                                     |                   |             |
| OUTSCALEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Account-Consumptions" label="Account-Consumptions">

| Macro                               | Description                                                                                        | Default value     | Mandatory   |
|:------------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERREGION                        | Filter account consumptions by region                                                              |                   |             |
| FILTERSERVICE                       | Filter account consumptions by service                                                             |                   |             |
| FILTERCATEGORY                      | Filter account consumptions by category                                                            |                   |             |
| FILTERTITLE                         | Filter account consumptions by title                                                               |                   |             |
| TIMEFRAME                           | Set timeframe in days (default: 1)                                                                 |                   |             |
| WARNINGACCOUNTCONSUMPTION           | Threshold                                                                                          |                   |             |
| CRITICALACCOUNTCONSUMPTION          | Threshold                                                                                          |                   |             |
| WARNINGACCOUNTCONSUMPTIONSDETECTED  | Threshold                                                                                          |                   |             |
| CRITICALACCOUNTCONSUMPTIONSDETECTED | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Client-Gateways" label="Client-Gateways">

| Macro                | Description                                                                                                                | Default value     | Mandatory   |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CGTAGNAME            | Client gateway tags to be used for the name (default: 'name')                                                              | name              |             |
| FILTERNAME           | Filter client gateways by name                                                                                             |                   |             |
| WARNINGCGSAVAILABLE  | Threshold                                                                                                                  |                   |             |
| CRITICALCGSAVAILABLE | Threshold                                                                                                                  |                   |             |
| WARNINGCGSDELETED    | Threshold                                                                                                                  |                   |             |
| CRITICALCGSDELETED   | Threshold                                                                                                                  |                   |             |
| WARNINGCGSDELETING   | Threshold                                                                                                                  |                   |             |
| CRITICALCGSDELETING  | Threshold                                                                                                                  |                   |             |
| WARNINGCGSDETECTED   | Threshold                                                                                                                  |                   |             |
| CRITICALCGSDETECTED  | Threshold                                                                                                                  |                   |             |
| WARNINGCGSPENDING    | Threshold                                                                                                                  |                   |             |
| CRITICALCGSPENDING   | Threshold                                                                                                                  |                   |             |
| WARNINGCGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{cgName\}  |                   |             |
| CRITICALCGSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{cgName\} |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                         | --verbose         |             |

</TabItem>
<TabItem value="Internet-Services" label="Internet-Services">

| Macro                             | Description                                                                                                                             | Default value     | Mandatory   |
|:----------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERNETSERVICETAGNAME            | Internet service tag to be used for the name (default: 'name')                                                                          | name              |             |
| FILTERID                          | Filter internet services by id                                                                                                          |                   |             |
| FILTERNAME                        | Filter internet services by name                                                                                                        |                   |             |
| WARNINGINTERNETSERVICESAVAILABLE  | Threshold                                                                                                                               |                   |             |
| CRITICALINTERNETSERVICESAVAILABLE | Threshold                                                                                                                               |                   |             |
| WARNINGINTERNETSERVICESDETECTED   | Threshold                                                                                                                               |                   |             |
| CRITICALINTERNETSERVICESDETECTED  | Threshold                                                                                                                               |                   |             |
| WARNINGINTERNETSERVICESTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{internetServiceName\}  |                   |             |
| CRITICALINTERNETSERVICESTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{internetServiceName\} |                   |             |
| EXTRAOPTIONS                      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                      | --verbose         |             |

</TabItem>
<TabItem value="Load-Balancers" label="Load-Balancers">

| Macro                         | Description                                                                                                                | Default value     | Mandatory   |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VMTAGNAME                     | Virtual machine tags to used for the name (default: 'name')                                                                | name              |             |
| FILTERNAME                    | Filter load balancers by name                                                                                              |                   |             |
| WARNINGLOADBALANCERSDETECTED  | Threshold                                                                                                                  |                   |             |
| CRITICALLOADBALANCERSDETECTED | Threshold                                                                                                                  |                   |             |
| WARNINGLOADBALANCERVMSDOWN    | Threshold                                                                                                                  |                   |             |
| CRITICALLOADBALANCERVMSDOWN   | Threshold                                                                                                                  |                   |             |
| WARNINGLOADBALANCERVMSUP      | Threshold                                                                                                                  |                   |             |
| CRITICALLOADBALANCERVMSUP     | Threshold                                                                                                                  |                   |             |
| WARNINGVMSTATUS               | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{vmName\}  |                   |             |
| CRITICALVMSTATUS              | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{vmName\} |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                         | --verbose         |             |

</TabItem>
<TabItem value="Nat-Services" label="Nat-Services">

| Macro                        | Description                                                                                                                 | Default value     | Mandatory   |
|:-----------------------------|:----------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NATTAGNAME                   | Nat service tag to be used for the name (default: 'name')                                                                   | name              |             |
| FILTERID                     | Filter nat services by id                                                                                                   |                   |             |
| FILTERNAME                   | Filter nat services by name                                                                                                 |                   |             |
| WARNINGNATSERVICESAVAILABLE  | Threshold                                                                                                                   |                   |             |
| CRITICALNATSERVICESAVAILABLE | Threshold                                                                                                                   |                   |             |
| WARNINGNATSERVICESDELETED    | Threshold                                                                                                                   |                   |             |
| CRITICALNATSERVICESDELETED   | Threshold                                                                                                                   |                   |             |
| WARNINGNATSERVICESDELETING   | Threshold                                                                                                                   |                   |             |
| CRITICALNATSERVICESDELETING  | Threshold                                                                                                                   |                   |             |
| WARNINGNATSERVICESDETECTED   | Threshold                                                                                                                   |                   |             |
| CRITICALNATSERVICESDETECTED  | Threshold                                                                                                                   |                   |             |
| WARNINGNATSERVICESPENDING    | Threshold                                                                                                                   |                   |             |
| CRITICALNATSERVICESPENDING   | Threshold                                                                                                                   |                   |             |
| WARNINGNATSERVICESTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{natName\}  |                   |             |
| CRITICALNATSERVICESTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{natName\} |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                          | --verbose         |             |

</TabItem>
<TabItem value="Nets" label="Nets">

| Macro                 | Description                                                                                                                 | Default value     | Mandatory   |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NETTAGNAME            | Nets tag to be used for the name (default: 'name')                                                                          | name              |             |
| FILTERNAME            | Filter nets by name                                                                                                         |                   |             |
| WARNINGNETSAVAILABLE  | Threshold                                                                                                                   |                   |             |
| CRITICALNETSAVAILABLE | Threshold                                                                                                                   |                   |             |
| WARNINGNETSDELETED    | Threshold                                                                                                                   |                   |             |
| CRITICALNETSDELETED   | Threshold                                                                                                                   |                   |             |
| WARNINGNETSDETECTED   | Threshold                                                                                                                   |                   |             |
| CRITICALNETSDETECTED  | Threshold                                                                                                                   |                   |             |
| WARNINGNETSPENDING    | Threshold                                                                                                                   |                   |             |
| CRITICALNETSPENDING   | Threshold                                                                                                                   |                   |             |
| WARNINGNETSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{netName\}  |                   |             |
| CRITICALNETSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{netName\} |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                          | --verbose         |             |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Macro                  | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME             | Filter nets by name                                                                                |                   |             |
| FILTERTYPE             | Threshold                                                                                                   |                   |             |
| WARNINGQUOTAUSAGE      | Threshold                                                                                                   |                   |             |
| CRITICALQUOTAUSAGE     | Threshold                                                                                                   |                   |             |
| WARNINGQUOTAUSAGEFREE  | Threshold                                                                                                   |                   |             |
| CRITICALQUOTAUSAGEFREE | Threshold                                                                                                   |                   |             |
| WARNINGQUOTAUSAGEPRCT  | Threshold                                                                                                   |                   |             |
| CRITICALQUOTAUSAGEPRCT | Threshold                                                                                                   |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Route-Tables" label="Route-Tables">

| Macro                       | Description                                                                                        | Default value     | Mandatory   |
|:----------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERROUTETABLEID          | Filter route tables by id                                                                          |                   |             |
| WARNINGROUTETABLESDETECTED  | Threshold                                                                                          |                   |             |
| CRITICALROUTETABLESDETECTED | Threshold                                                                                          |                   |             |
| WARNINGROUTETABLESROUTES    | Threshold                                                                                          |                   |             |
| CRITICALROUTETABLESROUTES   | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Subnets" label="Subnets">

| Macro                            | Description                                                                                                                    | Default value     | Mandatory   |
|:---------------------------------|:-------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SUBNETTAGNAME                    | Subnet tags to be used for the name (default: 'name')                                                                          | name              |             |
| FILTERNAME                       | Filter subnets by name                                                                                                         |                   |             |
| WARNINGSUBNETADDRESSESUSAGEFREE  | Threshold                                                                                                                               |                   |             |
| CRITICALSUBNETADDRESSESUSAGEFREE | Threshold                                                                                                                               |                   |             |
| WARNINGSUBNETSAVAILABLE          | Threshold                                                                                                                      |                   |             |
| CRITICALSUBNETSAVAILABLE         | Threshold                                                                                                                      |                   |             |
| WARNINGSUBNETSDELETED            | Threshold                                                                                                                      |                   |             |
| CRITICALSUBNETSDELETED           | Threshold                                                                                                                      |                   |             |
| WARNINGSUBNETSDETECTED           | Threshold                                                                                                                      |                   |             |
| CRITICALSUBNETSDETECTED          | Threshold                                                                                                                      |                   |             |
| WARNINGSUBNETSPENDING            | Threshold                                                                                                                      |                   |             |
| CRITICALSUBNETSPENDING           | Threshold                                                                                                                      |                   |             |
| WARNINGSUBNETSTATUS              | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{subnetName\}  |                   |             |
| CRITICALSUBNETSTATUS             | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{subnetName\} |                   |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                             | --verbose         |             |

</TabItem>
<TabItem value="Virtual-Gateways" label="Virtual-Gateways">

| Macro                | Description                                                                                                                | Default value     | Mandatory   |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VGTAGNAME            | Virtual gateway tag to be used for the name (default: 'name')                                                              | name              |             |
| FILTERNAME           | Filter virtual gateways by name                                                                                            |                   |             |
| WARNINGVGSAVAILABLE  | Threshold                                                                                                                  |                   |             |
| CRITICALVGSAVAILABLE | Threshold                                                                                                                  |                   |             |
| WARNINGVGSDELETED    | Threshold                                                                                                                  |                   |             |
| CRITICALVGSDELETED   | Threshold                                                                                                                  |                   |             |
| WARNINGVGSDELETING   | Threshold                                                                                                                  |                   |             |
| CRITICALVGSDELETING  | Threshold                                                                                                                  |                   |             |
| WARNINGVGSDETECTED   | Threshold                                                                                                                  |                   |             |
| CRITICALVGSDETECTED  | Threshold                                                                                                                  |                   |             |
| WARNINGVGSPENDING    | Threshold                                                                                                                  |                   |             |
| CRITICALVGSPENDING   | Threshold                                                                                                                  |                   |             |
| WARNINGVGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{vgName\}  |                   |             |
| CRITICALVGSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{vgName\} |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                         | --verbose         |             |

</TabItem>
<TabItem value="Vms" label="Vms">

| Macro                   | Description                                                                                                                | Default value     | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VMTAGNAME               | Virtual machine tag to be used for the name (default: 'name')                                                              | name              |             |
| FILTERID                | Filter virtual machines by id                                                                                              |                   |             |
| FILTERNAME              | Filter virtual machines by name                                                                                            |                   |             |
| WARNINGVMSDETECTED      | Threshold                                                                                                                  |                   |             |
| CRITICALVMSDETECTED     | Threshold                                                                                                                  |                   |             |
| WARNINGVMSPENDING       | Threshold                                                                                                                  |                   |             |
| CRITICALVMSPENDING      | Threshold                                                                                                                  |                   |             |
| WARNINGVMSQUARANTINE    | Threshold                                                                                                                  |                   |             |
| CRITICALVMSQUARANTINE   | Threshold                                                                                                                  |                   |             |
| WARNINGVMSRUNNING       | Threshold                                                                                                                  |                   |             |
| CRITICALVMSRUNNING      | Threshold                                                                                                                  |                   |             |
| WARNINGVMSSHUTTINGDOWN  | Threshold                                                                                                                  |                   |             |
| CRITICALVMSSHUTTINGDOWN | Threshold                                                                                                                  |                   |             |
| WARNINGVMSSTOPPED       | Threshold                                                                                                                  |                   |             |
| CRITICALVMSSTOPPED      | Threshold                                                                                                                  |                   |             |
| WARNINGVMSSTOPPING      | Threshold                                                                                                                  |                   |             |
| CRITICALVMSSTOPPING     | Threshold                                                                                                                  |                   |             |
| WARNINGVMSTATUS         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{vmName\}  |                   |             |
| CRITICALVMSTATUS        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{vmName\} |                   |             |
| WARNINGVMSTERMINATED    | Threshold                                                                                                                  |                   |             |
| CRITICALVMSTERMINATED   | Threshold                                                                                                                  |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                         | --verbose         |             |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Macro                    | Description                                                                                                                  | Default value     | Mandatory   |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VMTAGNAME                | Virtual machine tags to used for the name (default: 'name')                                                                  | name              |             |
| FILTERID                 | Filter volumes by id                                                                                                         |                   |             |
| WARNINGVMSTATUS          | Threshold                                                                                                                             |                   |             |
| CRITICALVMSTATUS         | Threshold                                                                                                                             |                   |             |
| WARNINGVOLUMESAVAILABLE  | Threshold                                                                                                                    |                   |             |
| CRITICALVOLUMESAVAILABLE | Threshold                                                                                                                    |                   |             |
| WARNINGVOLUMESCREATING   | Threshold                                                                                                                    |                   |             |
| CRITICALVOLUMESCREATING  | Threshold                                                                                                                    |                   |             |
| WARNINGVOLUMESDELETING   | Threshold                                                                                                                    |                   |             |
| CRITICALVOLUMESDELETING  | Threshold                                                                                                                    |                   |             |
| WARNINGVOLUMESDETECTED   | Threshold                                                                                                                    |                   |             |
| CRITICALVOLUMESDETECTED  | Threshold                                                                                                                    |                   |             |
| WARNINGVOLUMESERROR      | Threshold                                                                                                                    |                   |             |
| CRITICALVOLUMESERROR     | Threshold                                                                                                                    |                   |             |
| WARNINGVOLUMESINUSE      | Threshold                                                                                                                    |                   |             |
| CRITICALVOLUMESINUSE     | Threshold                                                                                                                    |                   |             |
| WARNINGVOLUMESTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{volumeId\}  |                   |             |
| CRITICALVOLUMESTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{volumeId\} |                   |             |
| WARNINGVOLUMESUPDATING   | Threshold                                                                                                                    |                   |             |
| CRITICALVOLUMESUPDATING  | Threshold                                                                                                                    |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                           | --verbose         |             |

</TabItem>
<TabItem value="Vpn-Connections" label="Vpn-Connections">

| Macro                           | Description                                                                                                                 | Default value     | Mandatory   |
|:--------------------------------|:----------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VPNTAGNAME                      | Vpn connection tag to be used for the name (default: 'name')                                                                | name              |             |
| FILTERNAME                      | Filter virtual connections by name                                                                                          |                   |             |
| WARNINGVPNCONNECTIONSAVAILABLE  | Threshold                                                                                                                   |                   |             |
| CRITICALVPNCONNECTIONSAVAILABLE | Threshold                                                                                                                   |                   |             |
| WARNINGVPNCONNECTIONSDELETED    | Threshold                                                                                                                   |                   |             |
| CRITICALVPNCONNECTIONSDELETED   | Threshold                                                                                                                   |                   |             |
| WARNINGVPNCONNECTIONSDELETING   | Threshold                                                                                                                   |                   |             |
| CRITICALVPNCONNECTIONSDELETING  | Threshold                                                                                                                   |                   |             |
| WARNINGVPNCONNECTIONSDETECTED   | Threshold                                                                                                                   |                   |             |
| CRITICALVPNCONNECTIONSDETECTED  | Threshold                                                                                                                   |                   |             |
| WARNINGVPNCONNECTIONSPENDING    | Threshold                                                                                                                   |                   |             |
| CRITICALVPNCONNECTIONSPENDING   | Threshold                                                                                                                   |                   |             |
| WARNINGVPNCONNECTIONSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{vpnName\}  |                   |             |
| CRITICALVPNCONNECTIONSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{vpnName\} |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                          | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_outscale_api.pl \
	--plugin=cloud::outscale::plugin \
	--mode=vpn-connections \
	--custommode='osccli' \
	--profile='' \
	--virtual-env='' \
	--proxyurl=''  \
	--filter-name='' \
	--vpn-tag-name='name' \
	--warning-vpn-connections-detected='' \
	--critical-vpn-connections-detected='' \
	--warning-vpn-connections-available='' \
	--critical-vpn-connections-available='' \
	--warning-vpn-connections-pending='' \
	--critical-vpn-connections-pending='' \
	--warning-vpn-connections-deleting='' \
	--critical-vpn-connections-deleting='' \
	--warning-vpn-connections-deleted='' \
	--critical-vpn-connections-deleted='' \
	--warning-vpn-connection-status='' \
	--critical-vpn-connection-status='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: detected: 79659 available: 55477 pending: 36052 deleting: 52086 deleted: 35352 | 'vpn_connections.detected.count'=79659;;;0; 'vpn_connections.available.count'=55477;;;0; 'vpn_connections.pending.count'=36052;;;0; 'vpn_connections.deleting.count'=52086;;;0; 'vpn_connections.deleted.count'=35352;;;0;
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
/usr/lib/centreon/plugins/centreon_outscale_api.pl \
	--plugin=cloud::outscale::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                       | Linked service template                           |
|:-------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|
| account-consumptions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/accountconsumptions.pm)]    | Cloud-Outscale-Account-Consumptions-Osccli-custom |
| client-gateways [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/clientgateways.pm)]              | Cloud-Outscale-Client-Gateways-Osccli-custom      |
| internet-services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/internetservices.pm)]          | Cloud-Outscale-Internet-Services-Osccli-custom    |
| list-client-gateways [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listclientgateways.pm)]     | Used for service discovery                        |
| list-internet-services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listinternetservices.pm)] | Used for service discovery                        |
| list-load-balancers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listloadbalancers.pm)]       | Used for service discovery                        |
| list-nat-services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listnatservices.pm)]           | Used for service discovery                        |
| list-nets [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listnets.pm)]                          | Used for service discovery                        |
| list-quotas [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listquotas.pm)]                      | Used for service discovery                        |
| list-route-tables [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listroutetables.pm)]           | Used for service discovery                        |
| list-subnets [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listsubnets.pm)]                    | Used for service discovery                        |
| list-virtual-gateways [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listvirtualgateways.pm)]   | Used for service discovery                        |
| list-vms [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listvms.pm)]                            | Used for service discovery                        |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listvolumes.pm)]                    | Used for service discovery                        |
| list-vpn-connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listvpnconnections.pm)]     | Used for service discovery                        |
| load-balancers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/loadbalancers.pm)]                | Cloud-Outscale-Load-Balancers-Osccli-custom       |
| nat-services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/natservices.pm)]                    | Cloud-Outscale-Nat-Services-Osccli-custom         |
| nets [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/nets.pm)]                                   | Cloud-Outscale-Nets-Osccli-custom                 |
| quotas [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/quotas.pm)]                               | Cloud-Outscale-Quotas-Osccli-custom               |
| route-tables [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/routetables.pm)]                    | Cloud-Outscale-Route-Tables-Osccli-custom         |
| subnets [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/subnets.pm)]                             | Cloud-Outscale-Subnets-Osccli-custom              |
| virtual-gateways [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/virtualgateways.pm)]            | Cloud-Outscale-Virtual-Gateways-Osccli-custom     |
| vms [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/vms.pm)]                                     | Cloud-Outscale-Vms-Osccli-custom                  |
| volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/volumes.pm)]                             | Cloud-Outscale-Volumes-Osccli-custom              |
| vpn-connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/vpnconnections.pm)]              | Cloud-Outscale-Vpn-Connections-Osccli-custom      |

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
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proxyurl                                 |   Proxy URL if any                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --osc-secret-key                           |   Set Outscale secret key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --osc-access-key                           |   Set Outscale access key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --region                                   |   Set the region name (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     |   Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --token                                    |   API token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --timeout                                  |   Set timeout in seconds (default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --profile                                  |   Set profile option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --virtual-env                              |   Set python virtual environment (to be used if osc-cli is installed in python venv).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --sudo                                     |   Use 'sudo' to execute the command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --command                                  |   Command to get information (default: 'osc-cli'). Can be changed if you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --command-path                             |   Command path (default: none).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --command-options                          |   Command options (default: none). Only use for testing purpose, when you want to set ALL parameters of a command by yourself.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Account-Consumptions" label="Account-Consumptions">

| Option                   | Description                                                                      |
|:-------------------------|:---------------------------------------------------------------------------------|
| --filter-title           |   Filter account consumptions by title.                                          |
| --filter-service         |   Filter account consumptions by service.                                        |
| --filter-category        |   Filter account consumptions by category.                                       |
| --filter-region          |   Filter account consumptions by region.                                         |
| --timeframe              |   Set timeframe in days (default: 1).                                            |
| --warning-* --critical-* |   Thresholds. Can be: 'account-consumptions-detected', 'account-consumption'.    |

</TabItem>
<TabItem value="Client-Gateways" label="Client-Gateways">

| Option                   | Description                                                                                                                    |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter client gateways by name.                                                                                              |
| --cg-tag-name            |   Client gateway tags to be used for the name (default: 'name').                                                               |
| --unknown-cg-status      |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{cgName\}    |
| --warning-cg-status      |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{cgName\}    |
| --critical-cg-status     |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{cgName\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'cgs-detected', 'cgs-available', 'cgs-pending', 'cgs-deleting', 'cgs-deleted'.                           |

</TabItem>
<TabItem value="Internet-Services" label="Internet-Services">

| Option                             | Description                                                                                                                                 |
|:-----------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-id                        |   Filter internet services by id.                                                                                                           |
| --filter-name                      |   Filter internet services by name.                                                                                                         |
| --internet-service-tag-name        |   Internet service tag to be used for the name (default: 'name').                                                                           |
| --unknown-internet-service-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{internetServiceName\}    |
| --warning-internet-service-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{internetServiceName\}    |
| --critical-internet-service-status |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{internetServiceName\}   |
| --warning-* --critical-*           |   Thresholds. Can be: 'internet-services-detected', 'internet-services-available'.                                                          |

</TabItem>
<TabItem value="Load-Balancers" label="Load-Balancers">

| Option                   | Description                                                                                                                    |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter load balancers by name.                                                                                               |
| --vm-tag-name            |   Virtual machine tags to used for the name (default: 'name').                                                                 |
| --unknown-vm-status      |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{vmName\}    |
| --warning-vm-status      |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{vmName\}    |
| --critical-vm-status     |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{vmName\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'load-balancers-detected', 'load-balancer-vms-up', ''load-balancer-vms-down'.                            |

</TabItem>
<TabItem value="Nat-Services" label="Nat-Services">

| Option                        | Description                                                                                                                                          |
|:------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-id                   |   Filter nat services by id.                                                                                                                         |
| --filter-name                 |   Filter nat services by name.                                                                                                                       |
| --nat-tag-name                |   Nat service tag to be used for the name (default: 'name').                                                                                         |
| --unknown-nat-service-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{natName\}                         |
| --warning-nat-service-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{natName\}                         |
| --critical-nat-service-status |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{natName\}                        |
| --warning-* --critical-*      |   Thresholds. Can be: 'nat-services-detected', 'nat-services-pending', 'nat-services-available', 'nat-services-deleting', 'nat-services-deleted'.    |

</TabItem>
<TabItem value="Nets" label="Nets">

| Option                   | Description                                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter nets by name.                                                                                                          |
| --net-tag-name           |   Nets tag to be used for the name (default: 'name').                                                                           |
| --unknown-net-status     |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{netName\}    |
| --warning-net-status     |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{netName\}    |
| --critical-net-status    |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{netName\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'nets-detected', 'nets-available', 'nets-pending', 'nets-deleted'.                                        |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Option                   | Description                                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter nets by name.                                                                                                          |
| --net-tag-name           |   Nets tag to be used for the name (default: 'name').                                                                           |
| --unknown-net-status     |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{netName\}    |
| --warning-net-status     |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{netName\}    |
| --critical-net-status    |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{netName\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'nets-detected', 'nets-available', 'nets-pending', 'nets-deleted'.                                        |

</TabItem>
<TabItem value="Route-Tables" label="Route-Tables">

| Option                   | Description                                                              |
|:-------------------------|:-------------------------------------------------------------------------|
| --filter-route-table-id  |   Filter route tables by id.                                             |
| --warning-* --critical-* |   Thresholds. Can be: 'route-tables-detected', 'route-tables-routes'.    |

</TabItem>
<TabItem value="Subnets" label="Subnets">

| Option                   | Description                                                                                                                        |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter subnets by name.                                                                                                          |
| --subnet-tag-name        |   Subnet tags to be used for the name (default: 'name').                                                                           |
| --unknown-subnet-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{subnetName\}    |
| --warning-subnet-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{subnetName\}    |
| --critical-subnet-status |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{subnetName\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'subnets-detected', 'subnets-available', 'subnets-pending', 'subnets-deleted'.                               |

</TabItem>
<TabItem value="Virtual-Gateways" label="Virtual-Gateways">

| Option                   | Description                                                                                                                    |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter virtual gateways by name.                                                                                             |
| --vg-tag-name            |   Virtual gateway tag to be used for the name (default: 'name').                                                               |
| --unknown-vg-status      |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{vgName\}    |
| --warning-vg-status      |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{vgName\}    |
| --critical-vg-status     |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{vgName\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'vgs-detected', 'vgs-available', 'vgs-pending', 'vgs-deleting', 'vgs-deleted'.                           |

</TabItem>
<TabItem value="Vms" label="Vms">

| Option                   | Description                                                                                                                                                    |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-id              |   Filter virtual machines by id.                                                                                                                               |
| --filter-name            |   Filter virtual machines by name.                                                                                                                             |
| --vm-tag-name            |   Virtual machine tag to be used for the name (default: 'name').                                                                                               |
| --unknown-vm-status      |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{vmName\}                                    |
| --warning-vm-status      |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{vmName\}                                    |
| --critical-vm-status     |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{vmName\}                                   |
| --warning-* --critical-* |   Thresholds. Can be: 'vms-detected', 'vms-pending', 'vms-running', 'vms-stopping', 'vms-stopped', 'vms-shutting-down', 'vms-terminated', 'vms-quarantine'.    |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Option                   | Description                                                                                                                                                       |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-id              |   Filter volumes by id.                                                                                                                                           |
| --vm-tag-name            |   Virtual machine tags to used for the name (default: 'name').                                                                                                    |
| --unknown-volume-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{volumeId\}                                     |
| --warning-volume-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{volumeId\}                                     |
| --critical-volume-status |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{volumeId\}                                    |
| --warning-* --critical-* |   Thresholds. Can be: 'volumes-detected', 'volumes-creating', 'volumes-available',  'volumes-in-use', 'volumes-updating', 'volumes-deleting', 'volumes-error'.    |

</TabItem>
<TabItem value="Vpn-Connections" label="Vpn-Connections">

| Option                           | Description                                                                                                                                                         |
|:---------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name                    |   Filter virtual connections by name.                                                                                                                               |
| --vpn-tag-name                   |   Vpn connection tag to be used for the name (default: 'name').                                                                                                     |
| --unknown-vpn-connection-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{vpnName\}                                        |
| --warning-vpn-connection-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{vpnName\}                                        |
| --critical-vpn-connection-status |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{vpnName\}                                       |
| --warning-* --critical-*         |   Thresholds. Can be: 'vpn-connections-detected', 'vpn-connections-available', 'vpn-connections-pending', 'vpn-connections-deleting', 'vpn-connections-deleted'.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_outscale_api.pl \
	--plugin=cloud::outscale::plugin \
	--mode=vpn-connections \
	--help
```

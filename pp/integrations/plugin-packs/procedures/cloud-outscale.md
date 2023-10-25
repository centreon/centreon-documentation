---
id: cloud-outscale
title: Outscale API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Monitoring Connector **Outscale** brings a host template:

* Cloud-Outscale-Osscli-custom

It brings the following service templates:

| Service Alias        | Service Template                           | Service Description                   | Default | Discovery |
|:---------------------|:-------------------------------------------|:--------------------------------------|:--------|:----------|
| Account-Consumptions | Cloud-Outscale-Account-Consumptions-Osccli | Check the consumption of your account | X       |           |
| Client-Gateways      | Cloud-Outscale-Client-Gateways-Osccli      | Check client gateways                 |         | X         |
| Internet-Services    | Cloud-Outscale-Internet-Services-Osccli    | Check internet services               |         | X         |
| Load-Balancers       | Cloud-Outscale-Load-Balancers-Osccli       | Check load balancers                  |         | X         |
| Nat-Services         | Cloud-Outscale-Nat-Services-Osccli         | Check NAT services                    |         | X         |
| Nets                 | Cloud-Outscale-Nets-Osccli                 | Check Nets                            |         | X         |
| Quotas               | Cloud-Outscale-Quotas-Osccli               | Check quotas                          |         | X         |
| Route-Tables         | Cloud-Outscale-Route-Tables-Osccli         | Check route tables                    |         | X         |
| Subnets              | Cloud-Outscale-Subnets-Osccli              | Check subnets                         |         | X         |
| Virtual-Gateways     | Cloud-Outscale-Virtual-Gateways-Osccli     | Check virtual gateways                |         | X         |
| Vms                  | Cloud-Outscale-Vms-Osccli                  | Check virtual machines                |         | X         |
| Volumes              | Cloud-Outscale-Volumes-Osccli              | Check volumes                         |         | X         |
| Vpn-Connections      | Cloud-Outscale-Vpn-Connections-Osccli      | Check VPN connections                 |         | X         |

### Discovery rules

| Rule Name                                   | Description                                   |
|:--------------------------------------------|:----------------------------------------------|
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

<Tabs groupId="sync">
<TabItem value="Account-Consumptions" label="Account-Consumptions">

| Metric Name                                       | Unit  |
|:--------------------------------------------------|:------|
| account.consumptions.detected.count               |       |
| *title~service~region*#accounts.consumption.count |       |

</TabItem>
<TabItem value="Client-Gateways" label="Client-Gateways">

| Metric Name                     | Unit  |
|:--------------------------------|:------|
| client_gateways.detected.count  |       |
| client_gateways.available.count |       |
| client_gateways.pending.count   |       |
| client_gateways.deleting.count  |       |
| client_gateways.deleted.count   |       |
| client gateway status           |       |

</TabItem>
<TabItem value="Internet-Services" label="Internet-Services">

| Metric Name                       | Unit  |
|:----------------------------------|:------|
| internet_services.detected.count  |       |
| internet_services.available.count |       |
| internet service status           |       |

</TabItem>
<TabItem value="Load-Balancers" label="Load-Balancers">

| Metric Name                                                    | Unit  |
|:---------------------------------------------------------------|:------|
| load_balancers.detected.count                                  |       |
| *load_balancer_name*#load_balancer.virtual_machines.up.count   |       |
| *load_balancer_name*#load_balancer.virtual_machines.down.count |       |
| load balancer virtual machine status                           |       |

</TabItem>
<TabItem value="Nat-Services" label="Nat-Services">

| Metric Name                  | Unit  |
|:-----------------------------|:------|
| nat_services.detected.count  |       |
| nat_services.pending.count   |       |
| nat_services.available.count |       |
| nat_services.deleting.count  |       |
| nat_services.deleted.count   |       |
| nat service status           |       |

</TabItem>
<TabItem value="Nets" label="Nets">

| Metric Name          | Unit  |
|:---------------------|:------|
| nets.detected.count  |       |
| nets.pending.count   |       |
| nets.available.count |       |
| nets.deleted.count   |       |
| net status           |       |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Metric Name                                    | Unit  |
|:-----------------------------------------------|:------|
| *quota_type~quota_name*#quota.usage.count      |       |
| *quota_type~quota_name*#quota.free.count       |       |
| *quota_type~quota_name*#quota.usage.percentage |       |

</TabItem>
<TabItem value="Route-Tables" label="Route-Tables">

| Metric Name                                | Unit  |
|:-------------------------------------------|:------|
| route_tables.detected.count                |       |
| *route_table_id*#route_tables.routes.count |       |

</TabItem>
<TabItem value="Subnets" label="Subnets">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| subnets.detected.count                    |       |
| subnets.pending.count                     |       |
| subnets.available.count                   |       |
| subnets.deleted.count                     |       |
| *subnet_name*#subnet.addresses.free.count |       |
| subnet status                             |       |

</TabItem>
<TabItem value="Virtual-Gateways" label="Virtual-Gateways">

| Metric Name                      | Unit  |
|:---------------------------------|:------|
| virtual_gateways.detected.count  |       |
| virtual_gateways.available.count |       |
| virtual_gateways.pending.count   |       |
| virtual_gateways.deleting.count  |       |
| virtual_gateways.deleted.count   |       |
| virtual gateway status           |       |

</TabItem>
<TabItem value="Vms" label="Vms">

| Metric Name                          | Unit  |
|:-------------------------------------|:------|
| virtual_machines.detected.count      |       |
| virtual_machines.pending.count       |       |
| virtual_machines.running.count       |       |
| virtual_machines.stopping.count      |       |
| virtual_machines.stopped.count       |       |
| virtual_machines.shutting-down.count |       |
| virtual_machines.terminated.count    |       |
| virtual_machines.quarantine.count    |       |
| virtual machine status               |       |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Metric Name              | Unit  |
|:-------------------------|:------|
| volume.detected.count    |       |
| volume.creating.count    |       |
| volume.available.count   |       |
| volume.in-use.count      |       |
| volume.updating.count    |       |
| volume.deleting.count    |       |
| volume.error.count       |       |
| volume status            |       |
| volume attachment status |       |

</TabItem>
<TabItem value="Vpn-Connections" label="Vpn-Connections">

| Metric Name                     | Unit  |
|:--------------------------------|:------|
| vpn_connections.detected.count  |       |
| vpn_connections.available.count |       |
| vpn_connections.pending.count   |       |
| vpn_connections.deleting.count  |       |
| vpn_connections.deleted.count   |       |
| vpn connection status           |       |

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

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Monitoring Connector Manager** menu.
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
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-outscale
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-outscale
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Outscale** Pack through
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
dnf install centreon-plugin-Cloud-Outscale-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Outscale-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Outscale-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-outscale-api
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Outscale** server settings.
* Apply the **Cloud-Outscale-Osscli-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro                | Description                                                                            |
|:------------|:---------------------|:---------------------------------------------------------------------------------------|
|             | OUTSCALEEXTRAOPTIONS | Any extra option you may want to add to every command line (eg. a --verbose flag)      |
|             | OUTSCALEPROFILE      | osc-cli profile                                                                        |
|             | OUTSCALEVIRTUALENV   | Python virtual environment for osc-cli (ex: /var/lib/centreon-engine/.venv)            |
|             | PROXYURL             |                                                                                        |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_outscale_api.pl \
    --plugin=cloud::outscale::plugin \
    --mode=quotas \
    --custommode='osccli' \
    --profile='default' \
    --virtual-env='/var/lib/centreon-engine/.venv' \
    --filter-name='^networklink_limit$' \
    --filter-type='^vpc-42484aa9$' \
    --verbose
```

The expected command output is shown below:

```bash
OK: quota 'networklink_limit' [type: vpc-42484aa9] total: 75 used: 1 (1.33%) free: 74 (98.67%) | 'vpc-42484aa9~networklink_limit#quota.usage.count'=1;;;0;75 'vpc-42484aa9~networklink_limit#license.free.count'=74;;;0;75 'vpc-42484aa9~networklink_limit#license.usage.percentage'=1.33%;;;0;100
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_outscale_api.pl \
    --plugin=cloud::outscale::plugin \
    --mode=quotas \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_outscale_api.pl \
    --plugin=cloud::outscale::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

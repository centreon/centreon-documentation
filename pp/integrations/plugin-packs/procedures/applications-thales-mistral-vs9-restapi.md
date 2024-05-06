---
id: applications-thales-mistral-vs9-restapi
title: Thales Mistral VS9 Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **Thales Mistral VS9** brings 2 different host templates:

* App-Thales-Mistral-Vs9-Host-Restapi-custom
* App-Thales-Mistral-Vs9-Mmc-Restapi-custom

It brings the following service templates:

<Tabs groupId="sync">
<TabItem value="App-Thales-Mistral-Vs9-Host-Restapi-custom" label="App-Thales-Mistral-Vs9-Host-Restapi-custom">

| Service Alias     | Service Template                                             | Service Description      | Default |
|:------------------|:-------------------------------------------------------------|:-------------------------|:--------|
| Certificates      | App-Thales-Mistral-Vs9-Host-Device-Certificates-Restapi      | Check certificates       | X       |
| Connection-Status | App-Thales-Mistral-Vs9-Host-Device-Connection-Status-Restapi | Check MMC connection     | X       |
| Interfaces        | App-Thales-Mistral-Vs9-Host-Device-Interfaces-Restapi        | Check interfaces         | X       |
| Mistral           | App-Thales-Mistral-Vs9-Host-Device-Mistral-Restapi           | Check Mistral equipment  | X       |
| System            | App-Thales-Mistral-Vs9-Host-Device-System-Restapi            | Check system             | X       |
| Tunnels           | App-Thales-Mistral-Vs9-Host-Device-Tunnels-Restapi           | Check vpn tunnels        | X       |

</TabItem>
<TabItem value="App-Thales-Mistral-Vs9-Mmc-Restapi-custom" label="App-Thales-Mistral-Vs9-Mmc-Restapi-custom">

| Service Alias     | Service Template                                | Service Description      | Default |
|:------------------|:------------------------------------------------|:-------------------------|:--------|
| Certificates      | App-Thales-Mistral-Vs9-Mmc-Certificates-Restapi | Check CA certificates    | X       |
| Cluster           | App-Thales-Mistral-Vs9-Mmc-Cluster-Restapi      | Check MMC cluster status | X       |
| Clusters          | App-Thales-Mistral-Vs9-Clusters-Restapi         | Check clusters           |         |

</TabItem>
</Tabs>

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Rule Name                  | Description                                        |
|:---------------------------|:---------------------------------------------------|
| Thales Mistral VS9 Devices | Discover devices from Thales Mistral MMC inventory |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Clusters" label="Clusters">

| Metric Name                                                 | Unit  |
|:------------------------------------------------------------|:------|
| clusters.detected.count                                     |       |
| cluster status                                              |       |
| member status                                               |       |
| *cluster_name~member_name*#member.contact.last.time.seconds | s     |

</TabItem>
<TabItem value="Device-Certificates" label="Device-Certificates">

| Metric Name                                    | Unit  |
|:-----------------------------------------------|:------|
| *certificate_name*#certificate.expires.seconds | s     |

</TabItem>
<TabItem value="Device-Connection-Status" label="Device-Connection-Status">

| Metric Name                                         | Unit  |
|:----------------------------------------------------|:------|
| connection status                                   |       |
| *serial_number*#device.connection.last.time.seconds | s     |

</TabItem>
<TabItem value="Device-Interfaces" label="Device-Interfaces">

| Metric Name                                                        | Unit  |
|:-------------------------------------------------------------------|:------|
| interface status                                                   |       |
| *serial_number~interface_name*#interface.traffic.in.bitspersecond  | bps   |
| *serial_number~interface_name*#interface.traffic.out.bitspersecond | bps   |

</TabItem>
<TabItem value="Device-Mistral" label="Device-Mistral">

| Metric Name                                | Unit  |
|:-------------------------------------------|:------|
| mistral version                            |       |
| operating state                            |       |
| *serial_number*#device.temperature.celsius | C     |
| autotest state                             |       |

</TabItem>
<TabItem value="Device-System" label="Device-System">

| Metric Name                                | Unit  |
|:-------------------------------------------|:------|
| system version                             |       |
| *serial_number*#system.uptime.seconds      | s     |
| *serial_number*#system.time.offset.seconds |       |

</TabItem>
<TabItem value="Device-Tunnels" label="Device-Tunnels">

| Metric Name                                          | Unit  |
|:-----------------------------------------------------|:------|
| ike service state                                    |       |
| ike sa state                                         |       |
| sa state                                             |       |
| *serial_number~sa_name*#vpn.sa.traffic.bitspersecond | bps   |

</TabItem>
<TabItem value="Mmc-Cluster" label="Mmc-Cluster">

| Metric Name                             | Unit  |
|:----------------------------------------|:------|
| cluster status                          |       |
| cluster.synchronization.done.percentage | %     |
| mmc node status                         |       |

</TabItem>
<TabItem value="Mmc-Certificates" label="Mmc-Certificates">

| Metric Name                                    | Unit  |
|:-----------------------------------------------|:------|
| *certificate_name*#certificate.expires.seconds | s     |

</TabItem>
</Tabs>

## Prerequisites

To monitor, a user with read privileges on MMC API is required.

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
dnf install centreon-pack-applications-thales-mistral-vs9-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-thales-mistral-vs9-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-thales-mistral-vs9-restapi
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Thales Mistral VS9 Rest API** Pack through
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
dnf install centreon-plugin-Applications-Thales-Mistral-Vs9-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Thales-Mistral-Vs9-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-thales-mistral-vs9-restapi
```

</TabItem>
</Tabs>

## Configuration

### Host

#### Mistral device

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Thales Mistral VS9 Host** server settings.
* Apply the **App-Thales-Mistral-Vs9-Host-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro              | Description        |
|:------------|:-------------------|:-------------------|
| X           | DEVICEID           |                    |
| X           | DEVICESN           |                    |
| X           | MMCAPIHOSTNAME     |                    |
| X           | MMCAPIUSERNAME     |                    |
| X           | MMCAPIPASSWORD     |                    |
|             | MMCAPIPORT         | (Défaut : '5572')  |
|             | MMCAPIPROTO        | (Défaut : 'https') |
|             | MMCAPIEXTRAOPTIONS | --insecure         |

#### Mistral MMC

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Thales Mistral VS9 MMC** server settings.
* Apply the **App-Thales-Mistral-Vs9-MMC-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro              | Description        |
|:------------|:-------------------|:-------------------|
| X           | MMCAPIUSERNAME     |                    |
| X           | MMCAPIPASSWORD     |                    |
|             | MMCAPIPORT         | (Défaut : '5572')  |
|             | MMCAPIPROTO        | (Défaut : 'https') |
|             | MMCAPIEXTRAOPTIONS | --insecure         |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_thales_mistral_vs9_restapi.pl \
    --plugin=apps::thales::mistral::vs9::restapi::plugin \
    --mode=mmc-cluster \
    --hostname='10.0.0.1' \
    --port='5572' \
    --proto='https' \
    --api-username='my-username' \
    --api-password='my-password' \
    --verbose
```

The expected command output is shown below:

```bash
OK: cluster enabled: yes, replication status: synchronized - all nodes are ok | 'cluster.synchronization.done.percentage'=0%;;;0;100
node 'mmc-1.local' status: true
node 'mmc-2.local' status: true
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_thales_mistral_vs9_restapi.pl \
    --plugin=apps::thales::mistral::vs9::restapi::plugin \
    --mode=mmc-cluster \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_thales_mistral_vs9_restapi.pl \
    --plugin=apps::thales::mistral::vs9::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

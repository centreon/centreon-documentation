---
id: network-freebox-restapi
title: Freebox RestAPI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Monitoring Connector **Freebox** brings a host template:

* Net-Freebox-Restapi-custom

It brings the following service templates:

| Service Alias | Service Template              | Service Description | Default |
|:--------------|:------------------------------|:--------------------|:--------|
| Dsl-Usage     | Net-Freebox-Dsl-Usage-RESTAPI | Check DSL usage     | X       |
| Net-Usage     | Net-Freebox-Net-Usage-RESTAPI | Check network usage | X       |
| System        | Net-Freebox-System-RESTAPI    | Check system usage  | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Dsl-Usage" label="Dsl-Usage">

| Metric Name | Unit  |
|:------------|:------|
| rate-down   | b/s   |
| rate-up     | b/s   |
| snr-down    | dB    |
| snr-up      | dB    |

</TabItem>
<TabItem value="Net-Usage" label="Net-Usage">

| Metric Name   | Unit  |
|:--------------|:------|
| bw-down       | b/s   |
| bw-up         | b/s   |
| rate-down     | b/s   |
| rate-up       | b/s   |
| vpn-rate-down | b/s   |
| vpn-rate-up   | b/s   |

</TabItem>
<TabItem value="System" label="System">

| Metric Name        | Unit  |
|:-------------------|:------|
| disk-status        |       |
| fan-speed          | rpm   |
| temperature-cpub   | C     |
| temperature-cpum   | C     |
| temperature-switch | C     |
| *wifi*#wifi-status |       |

</TabItem>
</Tabs>

## Prerequisites

You have to authorize the client and generate an app_id and a token to monitor your freebox.

- Call the login authorize enpoint, replace the IP and POST data by yours: 

`curl http://<freebox_ip>/api/v4/login/authorize -d '{"app_id":"centreon","app_name":"centreon","app_version":"3.0","device_name":"Freebox"}'`

- Validate within the Freebox UI and keep the token safe
- Navigate to http://<freebox_ip>/api/v4/login/authorize/<app_id>
- Check on the webpage that the application is authorized 

Keep your <app_id> and obtained token with you as you will need it during the host configuration. 

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instructions below as it is not required in order to have the pack displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-freebox-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-freebox-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-freebox-restapi
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Freebox** Pack through
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
dnf install centreon-plugin-Network-Freebox-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Freebox-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-freebox-restapi
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Freebox** server settings.
* Apply the **Net-Freebox-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro               | Description                                                                            |
|:------------|:--------------------|:---------------------------------------------------------------------------------------|
|             | FREEBOXAPPID        | The previously defined app_id                                                          |
|             | FREEBOXAPPTOKEN     | The previously obtained token                                                          |
|             | FREEBOXEXTRAOPTIONS | Any extra option you may want to add to every command line (eg. a --verbose flag)      |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_freebox_restapi.pl \
    --plugin=network::freebox::restapi::plugin \
    --mode=system \
    --hostname='10.0.0.1' \
    --freebox-app-id='' \
    --freebox-app-token='' \
    --warning-wifi-status='%{status} =~ /bad_param/i' \
    --critical-wifi-status='%{status} =~ /failed/i' \
    --warning-disk-status='' \
    --critical-disk-status='%{status} =~ /error/i' \
    --warning-temperature-cpum='' \
    --critical-temperature-cpum='' \
    --warning-temperature-cpub='' \
    --critical-temperature-cpub='' \
    --warning-temperature-switch='' \
    --critical-temperature-switch='' \
    --warning-fan-speed='' \
    --critical-fan-speed='' \
    --verbose \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: Temperature cpum : 34 C Temperature cpub : 27 C Temperature switch : 41 C fan speed : 2200 rpm   | 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_freebox_restapi.pl \
    --plugin=network::freebox::restapi::plugin \
    --mode=system \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_freebox_restapi.pl \
    --plugin=network::freebox::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
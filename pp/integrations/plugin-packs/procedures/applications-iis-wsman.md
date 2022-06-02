---
id: applications-iis-wsman
title: Microsoft IIS WSMAN
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack IIS brings 1 host template:

* App-Iis-WSMAN-custom

It brings the following service templates:

| Service Alias     | Service Template                | Service Description     | Default | Discovery |
|:------------------|:--------------------------------|:------------------------|:--------|:----------|
| Application-Pools | App-Iis-Application-Pools-WSMAN | Check application pools | X       | X         |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Rule name                           | Description                                   |
|:------------------------------------|:----------------------------------------------|
| App-Iis-WSMAN-Application-Pool-Name | Discover application pools and monitor status |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="metrics">
<TabItem value="Dcdiag" label="Dcdiag">

| Metric Name              | Unit  |
|:-------------------------|:------|
| domain controller status |       |

</TabItem>
</Tabs>

## Prerequisites

To monitor IIS, please follow our [official documentation](../getting-started/how-to-guides/windows-winrm-wsman-tutorial.md) and make sure that WinRM and all rights are properly configured.

On your Windows server, please install IIS WMI provider by installing the IIS Management Scripts and Tools component (compatibility IIS 6.0).

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Microsoft IIS Server WSMAN** resources:

```bash
yum install centreon-plugin-Applications-Iis-Wsman
```

2. On the Centreon web interface, install the **Microsoft IIS Server WSMAN** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Microsoft IIS Server WSMAN** resources:

```bash
yum install centreon-plugin-Applications-Iis-Wsman
```

2. Install the **Microsoft IIS Server WSMAN** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-iis-wsman
```

3. On the Centreon web interface, install the **Microsoft IIS Server WSMAN** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** and **IP Address/DNS** fields according to your **Microsoft IIS Server WSMAN** server's settings.
* Apply the **App-Iis-WSMAN-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro             | Description                                                                            |
|:------------|:------------------|:---------------------------------------------------------------------------------------|
|             | WSMANEXTRAOPTIONS | Any extra option you may want to add to every command line (eg. a --verbose flag)     |
|             | WSMANPASSWORD     |                                                                                        |
|             | WSMANPORT         | 5985                                                                                   |
|             | WSMANPROTO        | http                                                                                   |
|             | WSMANUSERNAME     |                                                                                        |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon Poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_iis_wsman.pl \
    --plugin=apps::microsoft::iis::wsman::plugin \
    --mode=application-pools \
    --hostname=10.0.0.1 \
    --wsman-scheme=http \
    --wsman-port=5985 \
    --wsman-username='' \
    --wsman-password=''
```

The expected command output is shown below:

```bash
All application pools are ok | 'pools.detected.count'=2;;;0;
Application pool 'test1' state: started [auto: on]
Application pool 'test2' state: stopped [auto: off]
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_iis_wsman.pl \
    --plugin=apps::microsoft::iis::wsman::plugin \
    --mode=application-pools \
    --help
```

All available options for a given mode can be displayed by adding the
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_iis_wsman.pl \
    --plugin=apps::microsoft::iis::wsman::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

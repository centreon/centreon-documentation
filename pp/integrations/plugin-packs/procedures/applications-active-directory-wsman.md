---
id: applications-active-directory-wsman
title: Microsoft Active Directory WSMAN
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack Active Directory WSMAN brings 1 host template:

* App-ActiveDirectory-WSMAN-custom

It brings the following service templates:

| Service Alias | Service Template                 | Service Description                                                          | Default | Discovery |
|:--------------|:---------------------------------|:-----------------------------------------------------------------------------|:--------|:----------|
| Dcdiag        | App-ActiveDirectory-Dcdiag-WSMAN | This check diagnose the domain controller. It executes the command `dcdiag`. | X       |           |

### Collected metrics & status

<Tabs groupId="metrics">
<TabItem value="Dcdiag" label="Dcdiag">

| Metric Name              | Unit  |
|:-------------------------|:------|
| domain controller status |       |

</TabItem>
</Tabs>

## Prerequisites

To monitor Active Directory, please follow our [official documentation](../getting-started/how-to-guides/windows-winrm-wsman-tutorial.md) and make sure that WinRM and all rights are properly configured.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Active Directory WSMAN** resources:

```bash
yum install centreon-plugin-Applications-ActiveDirectory-Wsman
```

2. On the Centreon web interface, install the **Active Directory WSMAN** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Active Directory WSMAN** resources:

```bash
yum install centreon-plugin-Applications-ActiveDirectory-Wsman
```

2. Install the **Active Directory WSMAN** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-active-directory-wsman
```

3. On the Centreon web interface, install the **Active Directory WSMAN** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** and **IP Address/DNS** fields according to your **Active Directory WSMAN** server's settings.
* Apply the **App-ActiveDirectory-WSMAN-custom** template to the host.
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
/usr/lib/centreon/plugins/centreon_activedirectory_wsman.pl \
    --plugin=apps::microsoft::activedirectory::wsman::plugin \
    --mode=dcdiag \
    --hostname=10.0.0.1 \
    --wsman-scheme=http \
    --wsman-port=5985 \
    --wsman-username='' \
    --wsman-password=''
```

The expected command output is shown below:

```bash
OK: Connectivity - Advertising - DFSREvent - SysVolCheck - KccEvent - MachineAccount - Replications - RidManager - Services - FsmoCheck
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_activedirectory_wsman.pl \
    --plugin=apps::microsoft::activedirectory::wsman::plugin \
    --mode=dcdiag \
    --help
```

All available options for a given mode can be displayed by adding the
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_activedirectory_wsman.pl \
    --plugin=apps::microsoft::activedirectory::wsman::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

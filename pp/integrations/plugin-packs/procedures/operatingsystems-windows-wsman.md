---
id: operatingsystems-windows-wsman
title: Windows WSMAN
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Plugin Pack Windows WSMAN brings 1 host template:

* OS-Windows-WSMAN-custom

It brings the following service templates:

| Service Alias      | Service Template                    | Service Description                                                                                                                                  | Default | Discovery |
|:-------------------|:------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:--------|:----------|
| Cpu                | OS-Windows-Cpu-WSMAN                | Check the rate of utilization of CPU for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPUs.  | X       |           |
| Disk-Global        | OS-Windows-Disk-Global-WSMAN        | Check the rate of free space on the disk. For each checks the name of the disk will appear                                                           |         | X         |
| Files-Date-Generic | OS-Windows-Files-Date-Generic-WSMAN | Check time                                                                                                                                           |         |           |
| Files-Size-Generic | OS-Windows-Files-Size-Generic-WSMAN | Check size of files                                                                                                                                  |         |           |
| Memory             | OS-Windows-Memory-WSMAN             | Check the rate of the utilization of memory                                                                                                          | X       |           |
| Ntp                | OS-Windows-Ntp-WSMAN                | Check the synchronization with an NTP server                                                                                                         |         |           |
| Pending-Reboot     | OS-Windows-Pending-Reboot-WSMAN     | Check windows pending reboot                                                                                                                         |         |           |
| Process-Global     | OS-Windows-Process-Global-WSMAN     | Check if Windows processes are started                                                                                                                 |         | X         |
| Service-Generic    | OS-Windows-Service-Generic-WSMAN    | Check if Windows services are started                                                                                                                |         | X         |
| Services-Auto      | OS-Windows-Services-Auto-WSMAN      | Check if Windows services are started                                                                                                                | X       |           |
| Sessions           | OS-Windows-Sessions-WSMAN           | Check Windows user sessions                                                                                                                          |         |           |
| Swap               | OS-Windows-Swap-WSMAN               | Check the rate of the utilization of virtual memory                                                                                                  | X       |           |
| Traffic-Global     | OS-Windows-Traffic-Global-WSMAN     | Check the bandwidth of the interface. For each checks the name of the interface will appear                                                          |         | X         |
| Uptime             | OS-Windows-Uptime-WSMAN             | Check the uptime of the Windows server since the last reboot. It's just an indication with no threshold                                              |         |           |

### Discovery rules

| Rule Name                       | Description                                                   |
|:--------------------------------|:--------------------------------------------------------------|
| OS-Windows-WSMAN-Disk-Name      | Discover the disk partitions and monitor space occupation     |
| OS-Windows-WSMAN-Processes-Name | Discover processes and monitor their system usage             |
| OS-Windows-WSMAN-Services-Name  | Discover services and monitor their system usage              |
| OS-Windows-WSMAN-Traffic-Name   | Discover network interfaces and monitor bandwidth utilization |

### Collected metrics & status

<Tabs groupId="metrics">
<TabItem value="Cpu" label="Cpu">

| Metric Name                                | Unit  |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| storages.detected.count                   | count |
| *storages*#storage.space.usage.bytes      | B     |
| *storages*#storage.space.free.bytes       | B     |
| *storages*#storage.space.usage.percentage | %     |

</TabItem>
<TabItem value="Files-Date-Generic" label="Files-Date-Generic">

| Metric Name             | Unit  |
|:------------------------|:------|
| file.mtime.last.seconds | s     |

</TabItem>
<TabItem value="Files-Size-Generic" label="Files-Size-Generic">

| Metric Name     | Unit  |
|:----------------|:------|
| file.size.bytes | B     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name             | Unit  |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Metric Name         | Unit  |
|:--------------------|:------|
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Metric Name | Unit   |
|:------------|:-------|
| status      | string |

</TabItem>
<TabItem value="Process-Global" label="Process-Global">

| Metric Name              | Unit   |
|:------------------------ |:-------|
| processes.detected.count | count  |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Metric Name                         | Unit  |
|:------------------------------------|:------|
| sessions.active.current.count       | count |
| sessions.created.total.count        | count |
| sessions.disconnected.total.count   | count |
| sessions.disconnected.current.count | count |
| sessions.reconnected.total.count    | count |

</TabItem>
<TabItem value="Swap" label="Swap">

| Metric Name                         | Unit  |
|:------------------------------------|:------|
| *files*#page.space.usage.bytes      | B     |
| *files*#page.space.free.bytes       | B     |
| *files*#page.space.usage.percentage | %     |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Metric Name                                      | Unit  |
|:-------------------------------------------------|:------|
| *interfaces*#interface.packets.in.discard.count  | count |
| *interfaces*#interface.packets.in.error.count    | count |
| *interfaces*#interface.traffic.in.bitspersecond  | B/s   |
| *interfaces*#interface.packets.out.discard.count | count |
| *interfaces*#interface.packets.out.error.count   | count |
| *interfaces*#interface.traffic.out.bitspersecond | B/s   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric Name | Unit   |
|:------------|:-------|
| uptime      | s      |

</TabItem>
</Tabs>

## Prerequisites

To monitor Windows Servers through WSMAN, please follow our [official documentation](../getting-started/how-to-guides/windows-winrm-wsman-tutorial.md) and make sure that WinRM and all rights are properly configured.

## Setup

<Tabs groupId="setup">
<TabItem value="Online License" label="Online License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Windows WSMAN** resources:

  ```bash
  yum install centreon-plugin-Operatingsystems-Windows-Wsman
  ```

2. On the Centreon web interface, install the **Windows WSMAN** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Windows WSMAN** resources:

  ```bash
  yum install centreon-plugin-Operatingsystems-Windows-Wsman
  ```

2. Install the **Windows WSMAN** Centreon Plugin Pack RPM on the Centreon Central server:

  ```bash
  yum install centreon-pack-operatingsystems-windows-wsman
  ```

3. On the Centreon web interface, install the **Windows WSMAN** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** and **IP Address/DNS** fields according to your **Windows WSMAN** server's settings.
* Apply the **OS-Windows-WSMAN-custom** template to the host.
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
/usr/lib/centreon/plugins//centreon_windows_wsman.pl \
    --plugin=os::windows::wsman::plugin \
    --mode=uptime \
    --hostname=10.0.0.1 \
    --wsman-scheme=http \
    --wsman-port=5985 \
    --wsman-username='' \
    --wsman-password='' \
    --warning='' \
    --critical='' \
    --use-new-perfdata 
```

The expected command output is shown below:

```bash
OK:  | System uptime is: 53m 15s | 'system.uptime.seconds'=3195s;;;0;
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_windows_wsman.pl \
    --plugin=os::windows::wsman::plugin \
    --mode=uptime \
    --help
```

All available options for a given mode can be displayed by adding the
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_windows_wsman.pl \
    --plugin=os::windows::wsman::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../getting-started/how-to-guides/troubleshooting-plugins.md).

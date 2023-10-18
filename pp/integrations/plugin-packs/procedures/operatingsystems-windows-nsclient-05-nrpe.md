---
id: operatingsystems-windows-nsclient-05-nrpe
title: Windows NRPE 0.5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

This Monitoring Connector allows to get metrics and statuses collected thanks to the NSClient++ 
monitoring agent and its embedded NRPE Server. 

### Templates

The Centreon Monitoring Connector **Windows NSClient 0.5** brings 1 host template:

* OS-Windows-NSClient-05-NRPE-custom

It brings the following service templates:

| Service Alias         | Service Template                                           | Service Description                                        | Default | Discovery |
|:----------------------|:-----------------------------------------------------------|:-----------------------------------------------------------|:--------|:----------|
| Active-Sessions       | OS-Windows-NSClient05-Counter-Active-Sessions-NRPE-custom  | Check active sessions using NRPE protocol                  |         |           |
| Counter-Generic       | OS-Windows-NSClient05-Counter-Generic-NRPE-custom          | Check generic counter using NRPE protocol                  |         |           |
| Cpu                   | OS-Windows-NSClient05-Cpu-NRPE-custom                      | Check Cpu usage using NRPE protocol                        | X       |           |
| Disks                 | OS-Windows-NSClient05-Disks-NRPE-custom                    | Check disks usage using NRPE protocol                      |         | X         |
| Eventlog-Generic      | OS-Windows-NSClient05-Eventlog-Generic-NRPE-custom         | Check event logs using NRPE protocol                       |         |           |
| Files-Generic         | OS-Windows-NSClient05-Files-Generic-NRPE-custom            | Check files (dates, size, etc...) using NRPE protocol      |         |           |
| Logfiles-Generic      | OS-Windows-NSClient05-Logfiles-Generic-NRPE-custom         | Check log file using NRPE protocol                         |         |           |
| Memory                | OS-Windows-NSClient05-Memory-NRPE-custom                   | Check memory usage using NRPE protocol                     | X       |           |
| Ntp                   | OS-Windows-NSClient05-Ntp-NRPE-custom                      | Check Ntp time synchronization using NRPE protocol         |         |           |
| Pending-Reboot        | OS-Windows-NSClient05-Pending-Reboot-NRPE-custom           | Check pending reboot using NRPE protocol                   |         |           |
| Process-generic       | OS-Windows-NSClient05-Process-Generic-NRPE-custom          | Check processes state using NRPE protocol                  |         |           |
| Remote-Ping           | OS-Windows-NSClient05-Remote-Ping-NRPE-custom              | Check remote ping using NRPE protocol                      |         |           |
| Services-Auto         | OS-Windows-NSClient05-Services-Auto-NRPE-custom            | Check automatic started services state using NRPE protocol | X       |           |
| Services-Generic-Name | OS-Windows-NSClient05-Services-Generic-Name-NRPE-custom    | Check services state using NRPE protocol                   |         |           |
| Sessions              | OS-Windows-NSClient05-Sessions-NRPE-custom                 | Check sessions using NRPE protocol                         |         |           |
| Swap                  | OS-Windows-NSClient05-Swap-NRPE-custom                     | Check swap usage using NRPE protocol                       | X       |           |
| Task-Generic          | OS-Windows-NSClient05-Task-Generic-NRPE-custom             | Check scheduled tasks using NRPE protocol                  |         |           |
| Updates               | OS-Windows-Updates-NRPE-custom                             | Check windows pending updates                              |         |           |
| Uptime                | OS-Windows-NSClient05-Uptime-NRPE-custom                   | Check uptime using NRPE protocol                           |         |           |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Rule Name                 | Description         |
|:--------------------------|:--------------------|
| OS-Winfows-NRPE-Disk-Name | Discover disk name. |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery).

</TabItem>
</Tabs>

### Collected metrics

<Tabs groupId="sync">
<TabItem value="Counter-Active-Sessions" label="Counter-Active-Sessions">

| Metric name     | Unit  |
| :-------------- | :---- |
| Sessions\_value | Count |

</TabItem>
<TabItem value="Counter-Generic" label="Counter-Generic">

| Metric name    | Unit  |
| :------------- | :---- |
| Counter\_value | Count |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name | Unit |
| :---------- | :--- |
| total 5m    | %    |
| total 1m    | %    |
| total 5s    | %    |

</TabItem>
<TabItem value="Disk" label="Disk">

| Metric name | Unit  |
| :---------- | :---- |
| used        | Bytes |

</TabItem>
<TabItem value="Eventlog-Generic" label="Eventlog-Generic">

| Metric name  | Unit  |
| :----------- | :---- |
| problemCount | Count |

</TabItem>
<TabItem value="Files-Generic" label="Files-Generic">

| Metric name | Unit  |
| :---------- | :---- |
| count       | Count |

</TabItem>
<TabItem value="Logfiles-Generic" label="Logfiles-Generic">

| Metric name        | Unit  |
| :----------------- | :---- |
| default\_lines     | Count |
| default\_warnings  | Count |
| default\_criticals | Count |
| default\_unknowns  | Count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name | Unit  |
| :---------- | :---- |
| used        | Bytes |

</TabItem>
<TabItem value="Swap" label="Swap">

| Metric name | Unit  |
| :---------- | :---- |
| swap        | Bytes |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Metric name                   | Unit  |
| :---------------------------- | :---- |
| sessions-created              | Count |
| sessions-disconnected         | Count |
| sessions-reconnected          | Count |
| sessions-active               | Count |
| sessions-disconnected-current | Count |

</TabItem>
<TabItem value="Updates" label="Updates">

| Metric Name                   | Unit   |
|:------------------------------|:-------|
| windows.pending.updates.count |        |

</TabItem>
</Tabs>

## Prerequisites

### Centreon NSClient++

To monitor an *Active Directory* domain controller through NRPE, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) 
and make sure that the **NRPE Server** configuration is correct.

## Installation 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon NRPE Client package on every Poller expected to monitor *Windows* resources:

```bash
yum install centreon-nrpe3-plugin
```

2. On the Centreon Web interface, install the **Windows NRPE 0.5** Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon NRPE Client package on every Poller expected to monitor *Windows* resources:

```bash
yum install centreon-nrpe3-plugin
```

2. Install the **Windows NRPE 0.5** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-operatingsystems-windows-nsclient-05-nrpe
```

3. On the Centreon Web interface, install the **Windows NRPE 0.5** Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page.

</TabItem>
</Tabs>

## Host configuration

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your *Windows* server settings.
* Select the *OS-Windows-NSClient-05-NRPE-custom* template to apply to the Host.
* Once the template is applied, fill in the corresponding macros. If you're in 21.10 or higher version and you've just installed **centreon-nrpe3-plugin**, you will have to replace the default macro values by the bold ones:

| Mandatory | Name             | Value                     | Description                                                      |
|:----------|:-----------------|---------------------------| :----------------------------------------------------------------|
| X         | NRPECLIENT       | **check_centreon_nrpe3**  | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')       |
| X         | NRPEPORT         | 5666                      | NRPE Port of the target server (Default: '5666')                 |
| X         | NRPETIMEOUT      | 30                        | Timeout value (Default: '30')                                    |
| X         | NRPEEXTRAOPTIONS | **-u -2 -P 8192**         | Extraoptions to use with the NRPE binary (default: '-u -m 8192') |

## Troubleshooting

Please find the troubleshooting documentation for NRPE checks in the [dedicated chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#nrpe-checks) of the Centreon documentation.

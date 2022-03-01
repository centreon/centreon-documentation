---
id: operatingsystems-windows-nsclient-05-nrpe
title: Windows NRPE 0.5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

This Plugin Pack allow to get metrics and statuses collected thanks to the NSClient++ 
monitoring agent and its embedded NRPE Server. 

## Pack assets

### Monitored objects

* Windows Server OS from 2003 SP2 version
* Windows Workstation from XP version

### Collected metrics

<Tabs groupId="sync">
<TabItem value="Counter-Active-Sessions" label="Counter-Active-Sessions">

| Metric name     | Description                             |
| :-------------- | :-------------------------------------- |
| Sessions\_value | Number of actived sessions. Unit: Count |

</TabItem>
<TabItem value="Counter-Generic" label="Counter-Generic">

| Metric name    | Description                          |
| :------------- | :----------------------------------- |
| Counter\_value | Number of counter found. Unit: Count |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name | Description                                                      |
| :---------- | :--------------------------------------------------------------- |
| total 5m    | CPU Utilization of Windows serveur over 5 minutes. Unit: Percent |
| total 1m    | CPU Utilization of Windows serveur over 1 minutes. Unit: Percent |
| total 5s    | CPU Utilization of Windows serveur over 5 seconds. Unit: Percent |

</TabItem>
<TabItem value="Disk" label="Disk">

| Metric name | Description                                   |
| :---------- | :-------------------------------------------- |
| used        | Used and Total Storage allocated. Unit: Bytes |

</TabItem>
<TabItem value="Eventlog-Generic" label="Eventlog-Generic">

| Metric name  | Description                            |
| :----------- | :------------------------------------- |
| problemCount | Number of event log found. Unit: Count |

</TabItem>
<TabItem value="Files-Generic" label="Files-Generic">

| Metric name | Description                        |
| :---------- | :--------------------------------- |
| count       | Number of files found. Unit: Count |

</TabItem>
<TabItem value="Logfiles-Generic" label="Logfiles-Generic">

| Metric name        | Description                                                                   |
| :----------------- | :---------------------------------------------------------------------------- |
| default\_lines     | Number of line that match with tag word found in logfile. Unit: Count         |
| default\_warnings  | Number of line that match with warning pattern found in logfile. Unit: Count  |
| default\_criticals | Number of line that match with critical pattern found in logfile. Unit: Count |
| default\_unknowns  | Number of line that match with unknown pattern found in logfile. Unit: Count  |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name | Description                        |
| :---------- | :--------------------------------- |
| used        | Total usage of memory. Unit: Bytes |

</TabItem>
<TabItem value="Swap" label="Swap">

| Metric name | Description                             |
| :---------- | :-------------------------------------- |
| swap        | Total usage of swap memory. Unit: Bytes |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Metric name                   | Description                                               |
| :---------------------------- | :-------------------------------------------------------- |
| sessions-created              | Number of created users session. Unit: Count              |
| sessions-disconnected         | Number of disconnected users session. Unit: Count         |
| sessions-reconnected          | Number of reconnected users session. Unit: Count          |
| sessions-active               | Number of active users session. Unit: Count               |
| sessions-disconnected-current | Number of current disconnected users session. Unit: Count |

</TabItem>
</Tabs>

## Prerequisites

### Centreon NSClient++

To monitor an *Active Directory* domain controller through NRPE, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../tutorials/centreon-nsclient-tutorial.md) 
and make sure that the **NRPE Server** configuration is correct.

## Installation 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon NRPE Client package on every Poller expected to monitor *Windows* resources:

```bash
yum install centreon-nrpe3-plugin
```

2. On the Centreon Web interface, install the **Windows NRPE 0.5** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.
from the **Configuration > Plugin Packs > Manager** page

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

3. On the Centreon Web interface, install the Centreon Pack *Varnish* 
from the **Configuration > Plugin Packs > Manager** page

</TabItem>
</Tabs>

## Host configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
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

Please find all the troubleshooting documentation for NRPE checks in the [dedicated chapter](../tutorials/troubleshooting-plugins.md#nrpe-checks) of the Centreon documentation.
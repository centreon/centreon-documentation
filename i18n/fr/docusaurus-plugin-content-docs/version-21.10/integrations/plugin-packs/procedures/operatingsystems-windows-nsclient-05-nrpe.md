---
id: operatingsystems-windows-nsclient-05-nrpe
title: Windows NRPE 0.5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


> Hello community! We're looking for a contributor to help us to translate the 
content in french and provide a sample execution command. If it's you, let us 
know and ping us on [slack](https://centreon.slack.com)

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
of the NSClient++ agent. Please follow our [official documentation](../tutorials/centreon-nsclient-tutorial) 
and make sure that the **NRPE Server** configuration is correct.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon NRPE Client package on every Poller expected to monitor *Varnish*:

```bash
yum install centreon-nrpe-plugin
```

2. On the Centreon Web interface, install the Centreon Pack *Varnish* 
from the **Configuration > Plugin Packs > Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Poller expected to monitor *Varnish*:

```bash
yum install centreon-nrpe-plugin
```

2. Install the Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-operatingsystems-windows-nsclient-05-nrpe
```

3. On the Centreon Web interface, install the Centreon Pack *Varnish* 
from the **Configuration > Plugin Packs > Manager** page

</TabItem>
</Tabs>

## Host configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the *OS-Windows-NSClient-05-NRPE-custom* template and configure all the mandatory Macros:

| Mandatory | Name             | Description                                                      |
|:----------|:-----------------|:---------------------------------------------------------------- |
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')       |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                 |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                    |
| X         | NRPEEXTRAOPTIONS | Extraoptions to use with the NRPE binary (default: '-u -m 8192') |
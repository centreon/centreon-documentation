---
id: applications-netbackup-nrpe
title: Symantec Netbackup NSClient++ NRPE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


> Hello community! We're looking for a contributor to help us to translate the
content in french and provide a sample execution command. If it's you, let us
know and ping us on [slack](https://centreon.slack.com)

## Overview

The Plugin Pack *Symantec Netbackup* works with the Centreon NSClient++ monitoring
agent or a NRPE agent on Linux to check Netbackup backup solutions.

## Pack assets

### Monitored objects

* Veritas Netbackup solutions including:
* Deduplication
* Drives
* Jobs
* Tapes

### Collected metrics

*Coming soon*

## Prerequisites

### NSClient++

To monitor *Netbackup* software with NRPE, install the Centreon packaged version
of the NSClient++ agent. Please follow our [official documentation](../tutorials/centreon-nsclient-tutorial)
and make sure that the **NRPE Server** configuration is correct.

### NetBackup cli

The NetBackup CLI is available on both Windows and Linux and the Plugin uses it so it
has to be installed.

### Netbackup on Windows

When using Netbackup on a Windows system, add these options `--statefile-concat-cwd
--statefile-dir="scripts/centreon/tmp"` in the `EXTRAOPTIONS` Macro within
`App-Netbackup-Job-Status-NRPE-Custom` Service Template.

Use `|` character in your Centreon Macro definitions is not possible.

## Installation

<Tabs groupId="operating-systems">
<TabItem value="online" label="Online License">

1. Install the Centreon NRPE Client package on every Poller expected to monitor *Symantec NetBackup*:

```bash
yum install centreon-nrpe-plugin
```

2. On the Centreon Web interface, install the Centreon Pack *NetBackup*
from the **Configuration > Plugin Packs > Manager** page

</TabItem>
<TabItem value="offline" label="Offline License">

1. Install the Centreon Plugin package on every Poller expected to monitor *Symantec NetBackup*:

```bash
yum install centreon-nrpe-plugin
```

2. Install the Centreon Pack RPM on the Central server:

```bash
yum install centreon-pack-applications-netbackup-nrpe
```

3. On the Centreon Web interface, install the Centreon Pack *Symantec Netbackup*
from the **Configuration > Plugin Packs > Manager** page

</TabItem>
</Tabs>

## Host configuration

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Apply the *App-Netbackup-NRPE-custom* template and configure all the mandatory Macros:

| Mandatory | Name             | Description                                                      |
|:----------|:-----------------|:---------------------------------------------------------------- |
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')       |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                 |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                    |
| X         | NRPEEXTRAOPTIONS | Extraoptions to use with the NRPE binary (default: '-u -m 8192') |
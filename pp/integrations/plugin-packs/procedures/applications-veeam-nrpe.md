---
id: applications-veeam-nrpe
title: Veeam NSClient++ NRPE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


> Hello community! We're looking for a contributor to help us to translate the 
content in french and provide a sample execution command. If it's you, let us 
know by making a PR or pinging us on [slack](https://centreon.slack.com)

## Overview

The Plugin Pack *Veeam* works with the Centreon NSClient++ monitoring agent and 
Powershell to check operating status of a Veeam Server.

## Pack assets

### Monitored objects

* Veeam Servers: 
    * Jobs 
    * Tapes

### Collected metrics

*Coming soon*

## Prerequisites

### Centreon NSClient++

To monitor *Veeam* backup solution through NRPE, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) 
and make sure that the **NRPE Server** configuration is correct.

### Powershell 

Powershell and the `Veeam.Backup.PowerShell` snap-in must be installed
on the target Server. 

Starting with Veeam 11, the Plugin will try to find the most recent version of 
the `VeeamPSSnapin`. 

## Installation 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon NRPE Client package on every Poller expected to monitor *Veeam*:

```bash
yum install centreon-nrpe-plugin
```

2. On the Centreon Web interface, install the Centreon Pack *Veeam* 
from the **Configuration > Plugin Packs > Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Poller expected to monitor *Veeam*:

```bash
yum install centreon-nrpe-plugin
```

2. Install the Centreon Plugin-Pack RPM on the Central server:

```bash
yum install centreon-pack-applications-veeam-nrpe
```

3. On the Centreon Web interface, install the Centreon Pack *Veeam* 
from the **Configuration > Plugin Packs > Manager** page

</TabItem>
</Tabs>

## Host configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the *App-Veeam-NRPE-custom* template and configure all the mandatory Macros:

| Mandatory | Name             | Description                                                      |
|:----------|:-----------------|:---------------------------------------------------------------- |
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')       |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                 |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                    |
| X         | NRPEEXTRAOPTIONS | Extraoptions to use with the NRPE binary (default: '-u -m 8192') |
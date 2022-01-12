---
id: hardware-storage-emc-symmetrix-nrpe
title: EMC Symmetrix NRPE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

The Pack *EMC Symmetrix* works with the Centreon NSClient++ monitoring
agent and offer controls to monitor hardware components of EMC Storage arrays. 

## Pack assets

### Monitored objects

* EMC Storage arrays, including following platforms:
    * DMX
    * Vmax

### Collected metrics

*Coming soon*

## Prerequisites

### NSClient++

To monitor *EMC Symmetrix* disk controllers through NRPE, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../tutorials/centreon-nsclient-tutorial) 
and make sure that the **NRPE Server** configuration is correct.

## Installation

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT-100 Editions" label="Online IMP Licence & IT-100 Editions">

1. Install the Centreon NRPE Client package on every Poller expected to monitor *EMC Symmetrix*:

```bash
yum install centreon-nrpe-plugin
```

2. On the Centreon Web interface, install the Centreon Pack *Veeam* 
from the **Configuration > Plugin Packs > Manager** page

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Install the Centreon Plugin package on every Poller expected to monitor *EMC Symmetrix*:

```bash
yum install centreon-nrpe-plugin
```

2. Install the Centreon Pack RPM on the Central server:

```bash
yum install centreon-pack-hardware-storage-emc-symmetrix
```

3. On the Centreon Web interface, install the Centreon Pack *EMC Symmetrix* 
from the **Configuration > Plugin Packs > Manager** page

</TabItem>
</Tabs>

## Host configuration

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Apply the *HW-Storage-EMC-Symmetrix-Dmx34-NRPE* or *HW-Storage-EMC-Symmetrix-Vmax-NRPE* 
template and configure all the mandatory Macros:

| Mandatory | Name             | Description                                                      |
|:----------|:-----------------|:---------------------------------------------------------------- |
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')       |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                 |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                    |
| X         | NRPEEXTRAOPTIONS | Extraoptions to use with the NRPE binary (default: '-u -m 8192') |
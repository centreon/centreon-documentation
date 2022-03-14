---
id: virtualization-hyperv-2012-nrpe
title: Hyper-V 2012 NSClient++ NRPE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

The Plugin Pack *Hyper-V* monitors nodes and virtual machine managers included in the 
Microsoft Hypervisor and Virtualization solutions. 

## Pack assets

### Monitored objects

* Microsoft HyperV Servers from 2k12 to latest versions
    * Nodes
    * System Center Virtual Machine Manager

### Collected metrics

*Coming soon*

## Prerequisites

### Centreon NSClient++

To monitor *HyperV* components through NRPE, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](/docs/tutorials/centreon-nsclient-tutorial) 
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
yum install centreon-pack-virtualization-hyperv-2012-nrpe
```

3. On the Centreon Web interface, install the Centreon Pack *Varnish* 
from the **Configuration > Plugin Packs > Manager** page

</TabItem>
</Tabs>

## Host configuration

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Apply the *Virt-Hyperv-2012-Node-NRPE-custom* or *Virt-Hyperv-2012-Scvmm-NRPE-custom* 
template according to the componenent you want to monitor and configure all the mandatory Macros:

| Mandatory | Name             | Description                                                      |
|:----------|:-----------------|:---------------------------------------------------------------- |
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')       |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                 |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                    |
| X         | NRPEEXTRAOPTIONS | Extraoptions to use with the NRPE binary (default: '-u -m 8192') |
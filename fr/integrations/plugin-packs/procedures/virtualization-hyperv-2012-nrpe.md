---
id: virtualization-hyperv-2012-nrpe
title: Hyper-V 2012 NSClient++ NRPE
---

> Hello community! We're looking for a contributor to help us to translate this 
content in french and provide a sample execution command. If it's you, let us 
know and ping us on [slack](https://centreon.slack.com)

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
of the NSClient++ agent. Please follow our [official documentation](../tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **NRPE Server** configuration is correct.

## Installation 

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon NRPE Client package on every Poller expected to monitor *Varnish*:

```bash
yum install centreon-nrpe-plugin
```

2. On the Centreon Web interface, install the Centreon Pack *Varnish* 
from the **Configuration > Plugin Packs > Manager** page

<!--Offline IMP License-->

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

<!--END_DOCUSAURUS_CODE_TABS-->

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
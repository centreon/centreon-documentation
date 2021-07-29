---
id: applications-quadstor-nrpe
title: Quadstor NSClient++ NRPE
---

## Overview

The Plugin Pack *Quadstor* works with the Centreon NSClient++ monitoring
agent to check Quadstor virtual tape library (VTL). 

## Pack assets

### Monitored objects

* Quadstor VTL:
    * Disks
    * Jobs 
    * Tapes

### Collected metrics

*Coming soon* 

## Prerequisites

### NSClient++

To monitor a *Quadstor* through NRPE, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../plugin-packs/tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **NRPE Server** configuration is correct. 

## Installation 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon NRPE Client package on every poller expected to monitor *Quadstor*:

```bash
yum install centreon-nrpe-plugin
```

2. On the Centreon Web interface, install the Centreon Pack *Quadstor* 
from the **Configuration > Plugin Packs > Manager** page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Poller expected to monitor *Quadstor*:

```bash
yum install centreon-nrpe-plugin
```

2. Install the Centreon Pack RPM on the Central server:

```bash
yum install centreon-pack-applications-quadstor-nrpe
```

3. On the Centreon Web interface, install the Centreon Pack *Quadstor* 
from the **Configuration > Plugin Packs > Manager** page

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Apply the *App-Quadstor-NRPE-custom* template and configure all the mandatory Macros:

| Mandatory | Name             | Description                                                      |
|:----------|:-----------------|:---------------------------------------------------------------- |
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')       |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                 |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                    |
| X         | NRPEEXTRAOPTIONS | Extraoptions to use with the NRPE binary (default: '-u -m 8192') |
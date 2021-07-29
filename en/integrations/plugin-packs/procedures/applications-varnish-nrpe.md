---
id: applications-varnish-nrpe
title: Varnish NRPE
---

## Overview

The Plugin Pack *Varnish* works with the Centreon NSClient++ monitoring agent on Windows
and NRPE Server on Linux to check the performance and behavior of a Varnish HTTP Cache Server. 

## Pack assets

### Monitored objects

* Varnish Cache statistics using varnishstat utility

### Collected metrics

*Coming soon*

## Prerequisites

### Command-line utility

The Plugin uses the *varnishstat* binary. 

### Centreon NSClient++

To monitor *Varnish HTTP Cache Server* on Windows, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../plugin-packs/tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **NRPE Server** configuration is correct.

### NRPE on Linux

Install the official NRPE package available from the operating system repository 
and configure it to allow connections from the Poller. Within the */etc/nrpe/nrpe.cfg* 
file, add the IP of the Poller in the *allowed_host=* directive. 

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
yum install centreon-pack-applications-varnish-nrpe
```

3. On the Centreon Web interface, install the Centreon Pack *Varnish* 
from the **Configuration > Plugin Packs > Manager** page

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the *App-Varnish-NRPE-custom* template and configure all the mandatory Macros:

| Mandatory | Name             | Description                                                      |
|:----------|:-----------------|:---------------------------------------------------------------- |
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')       |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                 |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                    |
| X         | NRPEEXTRAOPTIONS | Extraoptions to use with the NRPE binary (default: '-u -m 8192') |
---
id: infrastructure-active-directory-nrpe
title: MS Active Directory
---

> Hello community! We're looking for a contributor to help us to translate this 
content in french and provide a sample execution command. If it's you, let us 
know and ping us on [slack](https://centreon.slack.com)

## Overview

This Plugin Pack monitors AD Domain Controller using local commands and the 
Centreon NSClient++ agent to trigger their executions remotely.

## Pack assets

### Monitored objects

* Active Directory domain controller, including: 
    * Netdom connectivity
    * dfsr backlog
    * dcdiag

### Collected metrics

*Coming soon*

## Prerequisites

### Centreon NSClient++

To monitor an *Active Directory* domain controller through NRPE, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../plugin-packs/tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **NRPE Server** configuration is correct.

## Installation 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon NRPE Client package on every Poller expected to monitor *Active Directory*:

```bash
yum install centreon-nrpe-plugin
```

2. On the Centreon Web interface, install the Centreon Pack *Active Directory* 
from the **Configuration > Plugin Packs > Manager** page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Poller expected to monitor *Active Directory*:

```bash
yum install centreon-nrpe-plugin
```

2. Install the Centreon Pack RPM on the Central server:

```bash
yum install centreon-pack-infrastructure-active-directory-nrpe
```

3. On the Centreon Web interface, install the Centreon Pack *Active Directory* 
from the **Configuration > Plugin Packs > Manager** page

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Apply the *Infra-ActiveDirectory-NRPE-custom* template and configure all the mandatory Macros:

| Mandatory | Name             | Description                                                      |
|:----------|:-----------------|:---------------------------------------------------------------- |
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')       |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                 |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                    |
| X         | NRPEEXTRAOPTIONS | Extraoptions to use with the NRPE binary (default: '-u -m 8192') |
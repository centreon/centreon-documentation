---
id: applications-dynamics-ax-nsclient-05-nrpe
title: Dynamics NRPE 0.5
---

## Overview

This Plugin Pack allow to get metrics and statuses collected thanks to the NSClient++ 
monitoring agent and its embedded NRPE Server. 

## Pack assets

### Monitored objects

* Windows Server OS from 2003 SP2 version
* Windows Workstation from XP version

### Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Service-RIS-->

| Service name | Description                                                |
| :----------- | :--------------------------------------------------------- |
| Service-RIS  | Check state of the RecurringIntegrationsScheduler service. |

<!--RIS-Import-ProcessingErrors-->

| Service name                | Description                      |
| :-------------------------- | :------------------------------- |
| RIS-Import-ProcessingErrors | Check files importation failure. |

<!--RIS-Import-Input-->

| Service name     | Description                  |
| :--------------- | :--------------------------- |
| RIS-Import-Input | Check import files presence. |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Centreon NSClient++

To monitor an *Active Directory* domain controller through NRPE, install the Centreon packaged version 
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
yum install centreon-pack-operatingsystems-windows-nsclient-05-nrpe applications-dynamics-ax-nsclient-05-nrpe
```

3. On the Centreon Web interface, install the Centreon Pack *Varnish* 
from the **Configuration > Plugin Packs > Manager** page

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the *OS-Windows-NSClient-05-NRPE-custom* template and configure all the mandatory Macros:

| Mandatory | Name             | Description                                                      |
|:----------|:-----------------|:---------------------------------------------------------------- |
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')       |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                 |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                    |
| X         | NRPEEXTRAOPTIONS | Extraoptions to use with the NRPE binary (default: '-u -m 8192') |

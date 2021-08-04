---
id: applications-exchange-nrpe
title: Microsoft Exchange NSClient++ NRPE
---

## Overview

The Plugin Pack *Microsoft Exchange NRPE* works with the Centreon NSClient++ monitoring
agent to run Powershell code to check the health and performance of Microsoft Exchange 
Servers

## Pack assets

### Monitored objects

* From Exchange Server 2k10 to latest

### Collected metrics

*Coming soon ...*

## Prerequisites

### NSClient++

To monitor an *Exchange Server* through NRPE, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../plugin-packs/tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **NRPE Server** configuration is correct.

### Powershell 

Powershell and the `Microsoft.Exchange.Management.PowerShell` snap-in must be installed
on the target Server.

## Installation 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon NRPE Client package on every poller expected to monitor *Microsoft Exchange servers*:

```bash
yum install centreon-nrpe-plugin
```

2. On the Centreon Web interface, install the Centreon Plugin-Pack *Exchange NRPE* from the **Configuration > Plugin Packs > Manager** page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every poller expected to monitor *Microsoft Exchange*:

```bash
yum install centreon-nrpe-plugin
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-exchange-nrpe
```

3. On the Centreon Web interface, install the Centreon Plugin-Pack *Exchange NRPE* from the **Configuration > Plugin Packs > Manager** page

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the *App-Exchange-NRPE-custom* template and configure all the mandatory Macros :

| Mandatory | Name             | Description                                                            |
| :-------- | :--------------- | :--------------------------------------------------------------------- |
| X         | NRPECLIENT       | NRPE Binary used to perform the check (default: 'check_centreon_nrpe)  | 
| X         | NRPEPORT         | Port used to reach the NRPE server (default: '5666')                   |
| X         | NRPETIMEOUT      | Timeout to connect to the NRPE Server (default: '10')                  |
| X         | NRPEEXTRAOPTIONS | Extraoptions to use with the NRPE binary (default: '-u -m 8192')       |

## Important information

* The *Queue* monitoring Service only works on Exchange Server running with the 
hub/transport role. 
* Use this format to define MAILBOX macro at the service level: `DOMAIN\\USER`
* You cannot use the `|` nor `!` character in your Centreon Macro definitions. Prefer using NSClient++ API if you need this. 
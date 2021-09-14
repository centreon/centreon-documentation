---
id: applications-netbackup-nsclient-05-restapi
title: Netbackup NSClient++ API
---

## Overview 

The Plugin Pack Symantec Netbackup works with the Centreon NSClient++ monitoring agent 
to check Netbackup backup solutions using the Windows agent's API. 

## Pack assets

### Monitored objects

* Symantec Netbackup solutions including:
    * Deduplication
    * Drives
    * Jobs
    * Tapes

### Collected metrics

*Coming soon...*

## Prerequisites

### NSClient++

To monitor Netbackup software with NRPE, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **Webserver / RESTApi** configuration is correct. 

### NetBackup cli

The NetBackup CLI is available on both Windows and Linux and the Plugin uses it so it
has to be installed.

### Netbackup on Windows

When using Netbackup on a Windows system, add these options `--statefile-concat-cwd
--statefile-dir="scripts/centreon/tmp"` in the `EXTRAOPTIONS` Macro within
`App-Netbackup-Job-Status-NRPE-Custom` Service Template. 

## Installation 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor *Symantec Netbackup* using REST API:

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. On the Centreon Web interface, install the *Symantec Netbackup* Centreon Pack on the **Configuration > Plugin Packs > Manager** page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor *Symantec Netbackup* using REST API:

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. Install the Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-infrastructure-netbackup-nsclient-05-restapi
```

3. On the Centreon Web interface, install the *Symantec Netbackup* Pack on the **Configuration > Plugin Packs > Manager** page

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Apply the *App-Netbackup-NSClient-05-custom* template and configure all the mandatory Macros:

| Mandatory | Name                      | Description                                                                |
|:----------|:--------------------------|:-------------------------------------------------------------------------- |
| X         | NSCPRESTAPIPORT           | NSClient++ RestAPI port (Default: '8443')                                  |
| X         | NSCPRESTAPIPROTO          | NSClient++ RestAPI protocol to use (Default: 'https')                      |
|           | NSCPRESTAPILEGACYPASSWORD | Password to authenticate against the API if relevant                       |
|           | NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to the command (eg. a --verbose flag) |

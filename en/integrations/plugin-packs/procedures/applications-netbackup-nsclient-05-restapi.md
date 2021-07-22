---
id: applications-netbackup-nsclient-05-restapi
title: Netbackup NSClient++ API
---

## Pack assets

### Monitored objects

### Collected metrics

## Prerequisites

### NSClient++

To monitor Netbackup software with NRPE, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../plugin-packs/tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **Webserver / RESTApi** configuration is correct. 

### NetBackup cli

The NetBackup CLI is available on both Windows and Linux and the Plugin uses it so it
has to be installed.

### Netbackup on Windows

When using Netbackup on a Windows system, add these options `--statefile-concat-cwd
--statefile-dir="scripts/centreon/tmp"` in the `EXTRAOPTIONS` Macro within
`App-Netbackup-Job-Status-NRPE-Custom` Service Template. 

Using `|` character in your Centreon Macro definitions is not supported.

## Installation 

``` shell
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

## Host configuration

App-Netbackup-NSClient-05-custom

| Mandatory | Name                      | Description                                           |
|:----------|:--------------------------|:------------------------------------------------------|
| X         | NSCPRESTAPIPORT           | NSClient++ RestAPI port (Default: '8443')             |
| X         | NSCPRESTAPIPROTO          | NSClient++ RestAPI protocol to use (Default: 'https') |
|           | NSCPRESTAPILEGACYPASSWORD | Password to authenticate against the API if relevant  |


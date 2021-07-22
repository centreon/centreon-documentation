---
id: applications-netbackup-nrpe
title: Symantec Netbackup NSClient++ NRPE
---

## Overview

## Pack assets

### Monitored objects

### Collected metrics

## Prerequisites

### NSClient++

To monitor *Netbackup* software with NRPE, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../plugin-packs/tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **NRPE Server** configuration is correct. 

### NetBackup cli

The NetBackup CLI is available on both Windows and Linux and the Plugin uses it so it
has to be installed.

### Netbackup on Windows

When using Netbackup on a Windows system, add these options `--statefile-concat-cwd
--statefile-dir="scripts/centreon/tmp"` in the `EXTRAOPTIONS` Macro within
`App-Netbackup-Job-Status-NRPE-Custom` Service Template. 

Use `|` character in your Centreon Macro definitions is not possible. 

## Installation 

``` shell
yum install centreon-nrpe-plugin
```

## Host configuration

App-Netbackup-NRPE

| Mandatory | Name             | Description                                                                         |
|:----------|:-----------------|:------------------------------------------------------------------------------------|
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')                          |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                                    |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                                       |
|           | NRPEEXTRAOPTIONS | Any extra option you may want to add to every command\_line (Default: '-u -m 8192') |
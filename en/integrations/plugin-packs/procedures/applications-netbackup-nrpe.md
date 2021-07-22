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

To monitor Netbackup software with NRPE, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../plugin-packs/tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **NRPE Server** configuration is correct. 

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
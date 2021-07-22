---
id: applications-veeam-nrpe
title: Veeam NSClient++ NRPE
---

## Overview

## Pack assets

### Monitored objects

### Collected metrics

## Prerequisites

### Centreon NSClient++

To monitor *Veeam* backup solution through NRPE, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../plugin-packs/tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **NRPE Server** configuration is correct.

### Powershell 

Powershell and the `Veeam.Backup.PowerShell` snap-in must be installed
on the target Server. 

Starting with Veeam 11, the Plugin will try to find the most recent version of 
the `VeeamPSSnapin`. 

## Installation 

``` shell
yum install centreon-nrpe-plugin
```

## Host configuration

App-Veeam-NRPE-custom

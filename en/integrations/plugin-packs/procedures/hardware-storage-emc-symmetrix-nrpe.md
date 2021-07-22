---
id: hardware-storage-emc-symmetrix-nrpe
title: EMC Symmetrix NRPE
---

## Overview

## Pack assets

### Monitored objects

### Collected metrics

## Prerequisites

### NSClient++

To monitor an *Exchange Server* through NRPE, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../plugin-packs/tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **NRPE Server** configuration is correct.

### Powershell 

Powershell and the `Microsoft.Exchange.Management.PowerShell` snap-in must be installed
on the target Server.

## Installation 

``` shell
yum install centreon-nrpe-plugin
```

## Host configuration

HW-Storage-EMC-Symmetrix-Dmx34-NRPE
HW-Storage-EMC-Symmetrix-Vmax-NRPE
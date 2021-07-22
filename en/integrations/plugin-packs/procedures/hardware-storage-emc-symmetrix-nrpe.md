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

To monitor *EMC Symmetrix* disk controllers through NRPE, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../plugin-packs/tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **NRPE Server** configuration is correct.

## Installation 

``` shell
yum install centreon-nrpe-plugin
```

## Host configuration

HW-Storage-EMC-Symmetrix-Dmx34-NRPE
HW-Storage-EMC-Symmetrix-Vmax-NRPE

| Mandatory | Name             | Description                                                                         |
|:----------|:-----------------|:------------------------------------------------------------------------------------|
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')                          |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                                    |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                                       |
|           | NRPEEXTRAOPTIONS | Any extra option you may want to add to every command\_line (Default: '-u -m 8192') |

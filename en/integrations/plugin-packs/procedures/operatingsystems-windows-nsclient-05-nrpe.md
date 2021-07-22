---
id: operatingsystems-windows-nsclient-05-nrpe
title: Windows NRPE 0.5
---

## Overview

## Pack assets

### Monitored objects

### Collected metrics

## Prerequisites

### NSClient++

To monitor *Windows Servers* through NRPE, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../plugin-packs/tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **NRPE Server** configuration is correct.

## Installation 

``` shell
yum install centreon-nrpe-plugin
```

## Host configuration

OS-Windows-Nsclient-05-custom

| Mandatory | Name             | Description                                                                         |
|:----------|:-----------------|:------------------------------------------------------------------------------------|
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')                          |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                                    |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                                       |
|           | NRPEEXTRAOPTIONS | Any extra option you may want to add to every command\_line (Default: '-u -m 8192') |

---
id: applications-exchange-nsclient-restapi
title: Exchange NSClient++ API
---

## Overview

## Pack assets

### Monitored objects

### Collected metrics

## Prerequisites

### NSClient++

To monitor Exchange Servers through NSClient++ API, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../plugin-packs/tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **Webserver / RESTApi** configuration is correct. 

### Powershell 

Powershell and the `Microsoft.Exchange.Management.PowerShell` snap-in must be installed
on the target Server.

## Installation 

``` shell
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

## Host configuration

## Important information

* The *Queue* monitoring Service only works on Exchange Server running with the 
hub/transport role. 
* Use this format to define MAILBOX macro at the service level: DOMAIN\\USER
* You cannot use the `|` character in your Centreon Macro definitions
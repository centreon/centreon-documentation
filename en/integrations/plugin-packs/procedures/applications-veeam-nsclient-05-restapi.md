---
id: applications-veeam-nsclient-05-restapi
title: Veeam NSClient++ API
---

## Overview

## Pack assets

### Monitored objects

### Collected metrics

## Prerequisites

### NSClient++

To monitor *Veeam* solutions through NSClient++ API, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../plugin-packs/tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **Webserver / RESTApi** configuration is correct. 

### Powershell 

Powershell and the `Veeam.Backup.PowerShell` snap-in must be installed
on the target Server. 

Starting with Veeam 11, the Plugin will try to find the most recent version of 
the `VeeamPSSnapin`. 

## Installation 

``` shell
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

## Host configuration

App-Veeam-NSClient-05-Restapi-custom

| Mandatory | Name                      | Description                                           |
|:----------|:--------------------------|:------------------------------------------------------|
| X         | NSCPRESTAPIPORT           | NSClient++ RestAPI port (Default: '8443')             |
| X         | NSCPRESTAPIPROTO          | NSClient++ RestAPI protocol to use (Default: 'https') |
|           | NSCPRESTAPILEGACYPASSWORD | Password to authenticate against the API if relevant  |
---
id: applications-wsus-nsclient
title: Microsoft WSUS
---

## Overview

## Pack assets

### Monitored objects

### Collected metrics

## Prerequisites

### NSClient++

To monitor an *Exchange Server* through NSClient++ API, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../plugin-packs/tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **Webserver / RESTApi** configuration is correct. 

## Installation 

``` shell
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

``` shell
yum install centreon-nrpe-plugin
```

## Host configuration

Apps-Wsus-NRPE
App-Wsus-NSClient-05-Restapi

| Mandatory | Name                      | Description                                           |
|:----------|:--------------------------|:------------------------------------------------------|
| X         | NSCPRESTAPIPORT           | NSClient++ RestAPI port (Default: '8443')             |
| X         | NSCPRESTAPIPROTO          | NSClient++ RestAPI protocol to use (Default: 'https') |
|           | NSCPRESTAPILEGACYPASSWORD | Password to authenticate against the API if relevant  |
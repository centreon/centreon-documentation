---
id: infrastructure-active-directory-nsclient-05-restapi
title: Active Directory NSClient++ API
---

## Overview

## Pack assets

### Monitored objects

### Collected metrics

## Prerequisites

### Centreon NSClient++

To monitor an *Active Directory* domain controller through NSClient++ API, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../plugin-packs/tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **Webserver / RESTApi** configuration is correct.

## Installation 

``` shell
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

## Host configuration

Infra-ActiveDirectory-NSClient-05-Restapi-custom

| Mandatory | Name                      | Description                                           |
|:----------|:--------------------------|:------------------------------------------------------|
| X         | NSCPRESTAPIPORT           | NSClient++ RestAPI port (Default: '8443')             |
| X         | NSCPRESTAPIPROTO          | NSClient++ RestAPI protocol to use (Default: 'https') |
|           | NSCPRESTAPILEGACYPASSWORD | Password to authenticate against the API if relevant  |
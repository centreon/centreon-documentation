---
id: hardware-storage-emc-symmetrix-nsclient-05-restapi
title: EMC Symmetrix NSClient++ API
---

## Overview

The Pack *EMC Symmetrix API* works with the Centreon NSClient++ monitoring
agent and offer controls to monitor hardware components of EMC Storage arrays. 

## Pack assets

### Monitored objects

* EMC Storage arrays, including following platforms:
    * DMX
    * Vmax

### Collected metrics

*Coming soon...* 

## Prerequisites

### Centreon NSClient++

To monitor *EMC Symmetrix* disk controllers solutions through NSClient++ API, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **Webserver / RESTApi** configuration is correct.

## Installation 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor *EMC Symmetrix API* using REST API:

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. On the Centreon Web interface, install the *EMC Symmetrix API* Centreon Pack on the **Configuration > Plugin Packs > Manager** page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor *EMC Symmetrix API* using REST API:

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. Install the Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-infrastructure-active-directory-nsclient-05-restapi
```

3. On the Centreon Web interface, install the *EMC Symmetrix API* Pack on the **Configuration > Plugin Packs > Manager** page

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Apply the *HW-Storage-EMC-Symmetrix-Dmx34-NSClient-05-Restapi* or *HW-Storage-EMC-Symmetrix-Vmax-NSClient-05-Restapi* 
template and configure all the mandatory Macros:

| Mandatory | Name                      | Description                                                                |
| :-------- | :------------------------ | :------------------------------------------------------------------------- |
| X         | NSCPRESTAPIPORT           | Port of the REST API NSclient++ (default: 8443)                            |
| X         | NSCPRESTAPIPROTO          | Protocol used (default: https)                                             |
| X         | NSCPRESTAPILEGACYPASSWORD | Password used (configured in the prerequisites section)                    |
|           | NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to the command (eg. a --verbose flag) |
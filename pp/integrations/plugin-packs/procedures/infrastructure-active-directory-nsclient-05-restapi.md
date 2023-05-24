---
id: infrastructure-active-directory-nsclient-05-restapi
title: Microsoft Active Directory NSClient++ API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

This Monitoring Connector monitors AD Domain Controller using local commands and the 
Centreon NSClient++ API to trigger their executions remotely.

## Pack assets

### Monitored objects

* Active Directory domain controller, including:
    * Netdom connectivity
    * dfsr backlog
    * dcdiag

### Collected metrics

*Coming soon*

## Prerequisites

### Centreon NSClient++

To monitor an *Active Directory* domain controller through NSClient++ API, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) 
and make sure that the **Webserver / RESTApi** configuration is correct.

## Installation 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon package on every Centreon Poller expected to monitor *AD Domain controller* using REST API:

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. On the Centreon Web interface, install the *Active Directory API* Centreon Pack on the **Configuration > Monitoring Connectors Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon Poller expected to monitor *AD Domain controller* using REST API:

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. Install the Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-infrastructure-active-directory-nsclient-05-restapi
```

3. On the Centreon Web interface, install the *Active Directory API* Pack on the **Configuration > Monitoring Connectors Manager** page

</TabItem>
</Tabs>

## Host configuration

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Apply the *Infra-ActiveDirectory-NSClient-05-Restapi-custom* template and configure all the mandatory Macros:

| Mandatory | Name                      | Description                                                                |
| :-------- | :------------------------ | :------------------------------------------------------------------------- |
| X         | NSCPRESTAPIPORT           | Port of the REST API NSclient++ (default: 8443)                            |
| X         | NSCPRESTAPIPROTO          | Protocol used (default: https)                                             |
| X         | NSCPRESTAPILEGACYPASSWORD | Password used (configured in the prerequisites section)                    |
|           | NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to the command (eg. a --verbose flag) |
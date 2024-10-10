---
id: applications-exchange-nsclient-restapi
title: Exchange NSClient++ API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


> Hello community! We're looking for a contributor to help us translate this 
page into French and provide a sample execution command. If it's you, let us 
know and ping us on [our community platform The Watch](https://thewatch.centreon.com/).

## Overview

The Monitoring Connector *Exchange NSClient API* works with the Centreon NSClient++ monitoring
agent and its built-in web server to run Powershell code to check the health and 
performance of Microsoft Exchange Servers.

## Pack assets

### Monitored objects

* From Exchange Server 2k10 to latest

### Collected metrics

*Coming soon ...*

## Prerequisites

### NSClient++

To monitor an *Exchange Server* through NSClient++ API, install the Centreon packaged version 
of the NSClient++ agent. Please follow our [official documentation](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) 
and make sure that the **Webserver / RESTApi** configuration is correct. 

### Powershell 

Powershell and the `Microsoft.Exchange.Management.PowerShell` snap-in must be installed
on the target Server.

## Installation 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon NRPE Client package on every Poller expected to monitor *Microsoft Exchange servers*:

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. On the Centreon Web interface, install the Centreon connecteur de supervision *Exchange NSClient API* 
from the **Configuration > Monitoring Connector Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Poller expected to monitor *Microsoft Exchange*:

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. Install the Centreon connecteur de supervision RPM on the Central server:

```bash
yum install centreon-pack-applications-exchange-nsclient-restapi
```

3. On the Centreon Web interface, install the Centreon connecteur de supervision *Exchange NSClient API* 
from the **Configuration > Monitoring Connector Manager** page

</TabItem>
</Tabs>

## Host configuration

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Apply the *App-Exchange-NRPE-custom* template and configure all the mandatory Macros:

| Mandatory | Name                      | Description                                                                |
|:----------|:--------------------------|:-------------------------------------------------------------------------- |
| X         | NSCPRESTAPIPORT           | NSClient++ RestAPI port (Default: '8443')                                  |
| X         | NSCPRESTAPIPROTO          | NSClient++ RestAPI protocol to use (Default: 'https')                      |
|           | NSCPRESTAPILEGACYPASSWORD | Password to authenticate against the API if relevant                       |
|           | NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Important information

* The *Queue* monitoring Service only works on Exchange Server running with the 
hub/transport role
* Use this format to define MAILBOX macro at the service level: DOMAIN\\USER
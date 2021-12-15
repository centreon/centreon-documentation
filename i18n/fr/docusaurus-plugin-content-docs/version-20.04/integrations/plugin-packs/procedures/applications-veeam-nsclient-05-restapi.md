---
id: applications-veeam-nsclient-05-restapi
title: Veeam NSClient++ API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


> Hello community! We're looking for a contributor to help us to translate the
content in french and provide a sample execution command. If it's you, let us
know by offering a PR or pinging us on [slack](https://centreon.slack.com)

## Overview

The Plugin Pack *Veeam* works with the Centreon NSClient++ monitoring agent and
Powershell to check operating status of a Veeam Server. It uses the built-in NSClient++
API.

## Pack assets

### Monitored objects

* Veeam Servers:
* Jobs
* Tapes

### Collected metrics

*Coming soon*

## Prerequisites

### NSClient++

To monitor *Veeam* solutions through NSClient++ API, install the Centreon packaged version
of the NSClient++ agent. Please follow our [official documentation](../tutorials/centreon-nsclient-tutorial)
and make sure that the **Webserver / RESTApi** configuration is correct.

### Powershell

Powershell and the `Veeam.Backup.PowerShell` snap-in must be installed
on the target Server.

Starting with Veeam 11, the Plugin will try to find the most recent version of
the `VeeamPSSnapin`.

## Installation

<Tabs groupId="operating-systems">
<TabItem value="online" label="Online License">

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor *Veeam* using REST API:

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. On the Centreon Web interface, install the *Veeam* Centreon Pack on the **Configuration > Plugin Packs > Manager** page

</TabItem>
<TabItem value="offline" label="Offline License">

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor *Veeam* using REST API:

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. Install the Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-veeam-nsclient-05-restapi
```

3. On the Centreon Web interface, install the *Veeam* Pack on the **Configuration > Plugin Packs > Manager** page

</TabItem>
</Tabs>

## Host configuration

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Apply the *App-Veeam-NSClient-05-Restapi-custom* template and configure all the mandatory Macros:

| Mandatory | Name                      | Description                                                                |
|:----------|:--------------------------|:-------------------------------------------------------------------------- |
| X         | NSCPRESTAPIPORT           | NSClient++ RestAPI port (Default: '8443')                                  |
| X         | NSCPRESTAPIPROTO          | NSClient++ RestAPI protocol to use (Default: 'https')                      |
|           | NSCPRESTAPILEGACYPASSWORD | Password to authenticate against the API if relevant                       |
|           | NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to the command (eg. a --verbose flag) |
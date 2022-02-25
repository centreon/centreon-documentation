---
id: applications-wsus-nsclient
title: Microsoft WSUS NSClient++
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


> Hello community! We're looking for a contributor to help us to translate the 
content in french and provide a sample execution command. If it's you, let us 
know and ping us on [slack](https://centreon.slack.com)

## Overview

This Pack monitors server statistics, computer updates and global synchronisation 
of the Windows Server Update Services Server and the devices under its management. 

## Pack assets

### Monitored objects

* Windows Server Update Services Server, including these specific items: 
    * Computer Status
    * Update Status
    * Synchronisation status 
    * Server statistics

### Collected metrics

*Coming soon*

## Prerequisites

### Centreon NSClient++

The Windows WSUS Plugin is hosted by the *centreon-nsclient* agent which must be 
installed, configured and running on the Windows server running the WSUS Admin console. 

The Centreon Poller can connect to the agent using either the NRPE method or the 
RestAPI method. More information on how to achieve the installation and the configuration 
of the agent can be found [here](../tutorials/centreon-nsclient-tutorial.md).

### Powershell

The Plugin uses Powershell to collect monitoring datas. It's important that the following
module can be loaded: `Microsoft.UpdateServices.Administration`.

## Installation 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Depending on the monitoring method chosen (NRPE or RestAPI), install the relevant Centreon Plugin package on every Centreon
Poller expected to monitor WSUS through *centreon-nsclient*:

* NRPE

```bash
yum install centreon-nrpe-plugin
```

* RestAPI

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. On the Centreon Web interface, install the *Microsoft WSUS* Centreon Pack from the **Configuration > Plugin Packs > Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Depending on the monitoring method chosen (NRPE or RestAPI), install the relevant Centreon Plugin package on every Centreon
Poller expected to monitor WSUS through *centreon-nsclient*:

* NRPE

```bash
yum install centreon-nrpe-plugin
```

* RestAPI

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. On the Central Server, install the Centreon Pack RPM:

```bash
yum install centreon-pack-applications-wsus-nsclient
```

3. On the Centreon Web interface, install the *Microsoft WSUS* Centreon Pack from the **Configuration > Plugin Packs > Manager** page

</TabItem>
</Tabs>

## Host configuration

* On the Centreon Web Interface, go to **Configuration > Hosts** and add a new Host
* Set the Host IP address and select the relevant Host template according to the monitoring method chosen:
    * *App-Wsus-NRPE-custom* for NRPE
    * *App-Wsus-NSClient-05-Restapi-custom* for RestAPI
* Depending on the Host template, fill the Macro fields as follows:

<Tabs groupId="sync">
<TabItem value="App-Wsus-NRPE-custom" label="App-Wsus-NRPE-custom">

| Mandatory | Name             | Description                                                                         |
|:----------|:-----------------|:------------------------------------------------------------------------------------|
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')                          |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                                    |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                                       |
|           | NRPEEXTRAOPTIONS | Any extra option you may want to add to every command\_line (Default: '-u -m 8192') |

</TabItem>
<TabItem value="App-Wsus-NSClient-05-Restapi-custom" label="App-Wsus-NSClient-05-Restapi-custom">

| Mandatory | Name                      | Description                                                                |
|:----------|:--------------------------|:-------------------------------------------------------------------------- |
| X         | NSCPRESTAPIPORT           | NSClient++ RestAPI port (Default: '8443')                                  |
| X         | NSCPRESTAPIPROTO          | NSClient++ RestAPI protocol to use (Default: 'https')                      |
|           | NSCPRESTAPILEGACYPASSWORD | Password to authenticate against the API if relevant                       |
|           | NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to the command (eg. a --verbose flag) |

</TabItem>
</Tabs>

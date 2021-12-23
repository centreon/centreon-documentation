---
id: applications-sccm-nsclient
title: Microsoft SCCM
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

Microsoft Endpoint Configuration Manager, formely knwown as System Center Configuration
Manager or SCCM, is a systems management software product developed by Microsoft for
managing large groups of computers running Windows NT, Windows Embedded, macOS (OS X),
Linux or UNIX, as well as Windows Phone, Symbian, iOS and Android mobile operating systems.
Configuration Manager provides remote control, patch management, software distribution,
operating system deployment, network access protection and hardware and software inventory.

The Centreon Plugin-Pack allows to gather information and status about the SCCM
service using the centreon-nsclient agent. Both connection methods NRPE and RestAPI
are supported.

## Plugin-Pack assets

### Monitored objects

* Database replication
* Sites

### Collected metrics

<Tabs groupId="operating-systems">
<TabItem value="databasereplicationstatus" label="databasereplicationstatus">

| Metric name | Description                    |
| :---------- | :----------------------------- |
| link-status | Status of the replication link |
| site-status | Status of the site replication |

</TabItem>
<TabItem value="sitestatus" label="sitestatus">

| Metric name | Description                    |
| :---------- | :----------------------------- |
| status      | Operational status of the site |

</TabItem>
</Tabs>

## Prerequisites

## Centreon NSClient++

The Windows SCCM Plugin is hosted by the *centreon-nsclient* agent which must be
installed, configured and running on the Windows server running the SCCM Admin console.

The Centreon Poller can connect to the agent using either the NRPE method or the
RestAPI method. More information on how to achieve the installation and the configuration
of the agent can be found [here](../tutorials/centreon-nsclient-tutorial)

## Installation

<Tabs groupId="licence-systems">
<TabItem value="Online IMP Licence & IT100 Editions" label="Online IMP Licence & IT100 Editions">

1. Depending on the monitoring method chosen (NRPE or RestAPI), install the relevant Centreon Plugin package on every Centreon
Poller expected to monitor SCCM through *centreon-nsclient*:

* NRPE

```bash
yum install centreon-nrpe-plugin
```

* RestAPI

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. On the Centreon Web interface, install the *Microsoft SCCM* Centreon Pack from the **Configuration > Plugin Packs > Manager** page

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Depending on the monitoring method chosen (NRPE or RestAPI), install the relevant Centreon Plugin package on every Centreon
Poller expected to monitor SCCM through *centreon-nsclient*:

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
yum install centreon-pack-applications-sccm-nsclient
```

3. On the Centreon Web interface, install the *Microsoft SCCM* Centreon Pack from the **Configuration > Plugin Packs > Manager** page

</TabItem>
</Tabs>

## Host configuration

* On the Centreon Web Interface, go to **Configuration > Hosts** and add a new Host
* Set the Host IP address and select the relevant Host template according to the monitoring method chosen:
* *App-Sccm-NRPE-custom* for NRPE
* *App-Sccm-NSClient-05-Restapi-custom* for RestAPI
* Depending on the Host template, fill the Macro fields as follows:

<Tabs groupId="operating-systems">
<TabItem value="AppSccmNRPEcustom" label="AppSccmNRPEcustom">

| Mandatory | Name             | Description                                                                         |
| :-------- | :--------------- | :---------------------------------------------------------------------------------- |
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')                          |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                                    |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                                       |
|           | NRPEEXTRAOPTIONS | Any extra option you may want to add to every command\_line (Default: '-u -m 8192') |

</TabItem>
<TabItem value="AppSccmNSClient05Restapicustom" label="AppSccmNSClient05Restapicustom">

| Mandatory | Name                      | Description                                                                |
| :-------- | :------------------------ | :------------------------------------------------------------------------- |
| X         | NSCPRESTAPIPORT           | NSClient++ RestAPI port (Default: '8443')                                  |
| X         | NSCPRESTAPIPROTO          | NSClient++ RestAPI protocol to use (Default: 'https')                      |
|           | NSCPRESTAPILEGACYPASSWORD | Password to authenticate against the API if relevant                       |
|           | NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to the command (eg. a --verbose flag) |

</TabItem>
</Tabs>

Click on the *Save* button.

## How to check in the CLI that the configuration is OK and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine*
user account and test the Plugin by running the following command:

<Tabs groupId="operating-systems">
<TabItem value="NRPE" label="NRPE">

```bash
/usr/lib64/nagios/plugins/check_centreon_nrpe \
-H 10.0.0.1 \
-p 5666 \
-t 30 \
-u -m 8192 \
-c check_centreon_plugins -a 'apps::sccm::local::plugin' 'site-status' '--critical-status="%{status} eq FAILED"'
```

This command should return an output message like:

```bash
OK: Site 'MySite' status is 'ACTIVE' [Type: PRIMARY] [Mode: 'Unknown'] |
```

The command above connects to a *centreon-nsclient* agent using the NRPE protocol (```/usr/lib64/nagios/plugins/check_centreon_nrpe```) along with
the related connections settings defined in the Host Macros (```-p 5666 -t 30 -u -m 8192```).
The *centreon-nsclient* agent is requested to locally execute the *site-status* mode of the *SCCM* Plugin
(```-c check_centreon_plugins -a 'apps::sccm::local::plugin' 'site-status'```).
This command would trigger a CRITICAL alarm if the reported status of the *SCCM site* is *FAILED* (```--critical-status="%{status} eq FAILED"```).

All the available thresholds and options of the mode can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib64/nagios/plugins/check_centreon_nrpe -c check_centreon_plugins -a 'apps::sccm::local::plugin' 'site-status' '--help'
```

</TabItem>
<TabItem value="RestAPI" label="RestAPI">

```bash
/usr/lib/centreon/plugins/centreon_nsclient_restapi.pl \
--plugin=apps::nsclient::restapi::plugin  \
--mode=query  \
--hostname=10.0.0.1  \
--port='8443'  \
--proto='https'  \
--legacy-password='centreon' \
--command=check_centreon_plugins  \
--arg='apps::sccm::local::plugin'  \
--arg='site-status' \
--arg='--critical-status="%{status} eq FAILED"'

```
This command should return an output message like:

```bash
OK: Site 'MySite' status is 'ACTIVE' [Type: PRIMARY] [Mode: 'Unknown'] |
```

The command above connects to a *centreon-nsclient* agent using the RestAPI method (```--plugin=apps::nsclient::restapi::plugin --mode=query```)
along with the related connections settings defined in the Host Macros (```--port='8443' --proto='https' --legacy-password='centreon'```).
The *centreon-nsclient* agent is requested to locally execute the *site-status* mode of the *SCCM* Plugin
(```--command=check_centreon_plugins --arg='apps::sccm::local::plugin' --arg='site-status'```).
This command would trigger a CRITICAL alarm if the reported status of the *SCCM site* is *FAILED* (```--arg='--critical-status="%{status} eq FAILED"'```).

All the available thresholds and options of the mode can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl --plugin=apps::nsclient::restapi::plugin --mode=query --command=check_centreon_plugins --arg='apps::sccm::local::plugin' --arg='site-status' --arg='--help'
```

</TabItem>
</Tabs>
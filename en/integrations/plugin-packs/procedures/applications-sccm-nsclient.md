---
id: applications-sccm-nsclient
title: Microsoft SCCM
---

## Overview

Microsoft Endpoint Configuration Manager, formely knwown as System Center Configuration Manager or SCCM, is a systems management 
software product developed by Microsoft for managing large groups of computers running Windows NT, Windows Embedded, macOS (OS X), 
Linux or UNIX, as well as Windows Phone, Symbian, iOS and Android mobile operating systems. Configuration Manager provides remote control, 
patch management, software distribution, operating system deployment, network access protection and hardware and software inventory.

The Centreon Plugin-Pack allows to gather information and status about the SCCM service using the centreon-nsclient agent. Both connection methods
NRPE and RestAPI are supported.

## Plugin-Pack assets

### Monitored objects

* Database replication
* Sites 

### Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--database-replication-status-->

| Metric name              | Description                    |
| :----------------------- | :----------------------------- |
| link-status              | Status of the replication link |
| site-status              | Status of the site replication |

<!--site-status-->

| Metric name                 | Description                    |
| :-------------------------- | :----------------------------- |
| status                      | Operational status of the site |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites 

The Windows SCCM Plugin is hosted by the *centreon-nsclient* agent which must be installed, configured and running on the Windows server 
hosting the SCCM feature.
The Centreon Poller can connect to the agent using either the NRPE method or the RestAPI method.
More information on how to achieve the installation and the configuration of the agent can be found in the associated procedure:

* [NRPE](../operatingsystems-windows-nsclient-05-nrpe.html)
* [RestAPI](../operatingsystems-windows-nsclient-05-restapi.html)

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

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

2. On the Centreon Web interface, install the *Microsoft SCCM* Centreon Plugin-Pack from the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

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

2. On the Centreon Central Server, install the Centreon Plugin-Pack RPM:

```bash
yum install centreon-pack-applications-sccm-nsclient
```

3. On the Centreon Web interface, install the *Microsoft SCCM* Centreon Plugin-Pack from the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* On the Centreon Web Interface, go to "Configuration > Hosts" and add a new Host
* Set the Host IP address and select the relevant Host template according to the monitoring method chosen:
    * *App-Sccm-NRPE-custom* for NRPE
    * *App-Sccm-NSClient-05-Restapi-custom* for RestAPI
* Depending on the Host template, fill the Macro fields as follows:

<!--DOCUSAURUS_CODE_TABS-->

<!--App-Sccm-NRPE-custom-->

| Mandatory | Name             | Description                                                                         |
|:----------|:-----------------|:------------------------------------------------------------------------------------|
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')                          |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                                    |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                                       |
|           | NRPEEXTRAOPTIONS | Any extra option you may want to add to every command\_line (Default: '-u -m 8192') |

<!--App-Sccm-NSClient-05-Restapi-custom-->

| Mandatory | Name                      | Description                                           |
|:----------|:--------------------------|:------------------------------------------------------|
| X         | NSCPRESTAPIPORT           | NSClient++ RestAPI port (Default: '8443')             |
| X         | NSCPRESTAPIPROTO          | NSClient++ RestAPI protocol to use (Default: 'https') |
|           | NSCPRESTAPILEGACYPASSWORD | Password to authenticate against the API if relevant  |

<!--END_DOCUSAURUS_CODE_TABS-->

Click on the *Save* button.

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account and test the Plugin 
by running the following command:

<!--DOCUSAURUS_CODE_TABS-->

<!--NRPE-->

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

<!--RestAPI-->

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

<!--END_DOCUSAURUS_CODE_TABS-->

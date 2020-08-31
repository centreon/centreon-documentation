---
id: applications-cisco-ssms-restapi
title: Cisco SSMS
---

## Overview

Cisco Smart Software Manager On-Prem (formerly known as Cisco Smart Software Manager satellite) is a component of Cisco Smart Licensing
that works in conjunction with Cisco Smart Software Manager (SSM).
It offers near real-time visibility and reporting of the Cisco licensesyou purchase and consume while giving security-sensitive organizations,
a way to access a subset of Cisco SSM functionality without using a direct Internet connection to manage their install base.

## Plugin-Pack Assets

### Monitored Objects

* Applications
* Servers
* Licences
* Alerts

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Alerts-->

| Metric Name                | Description              |
| :------------------------- | :------------------------|
| account.alerts.minor.count | Number of alerts minor.  |
| account.alerts.major.count | Number of alerts major.  |

<!--Licenses-->

| Metric Name                | Description                              |
| :------------------------- | :--------------------------------------- |
| status                     | Status of licenses.                      |
| licenses.usage.count       | Number of licenses usage.                |
| licenses.free.count        | Number of licenses free.                 |
| licenses.usage.percentage  | Percentage of licenses usage. Unit : %   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

A service account is required to query the Cisco SSMS API. It must have sufficient read privileges in the account targeted.
More information is available in the official Cisco SSMS API : https://www.cisco.com/c/dam/en_us/buy/smart-accounts/smart-software-manager-satellite-enhanced-edition-6-2-0-user-guide.pdf

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every poller monitoring Cisco SSMS resources:

```bash
yum install centreon-plugin-Applications-Cisco-Ssms-Restapi.noarch
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Cisco SSMS* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every poller monitoring Cisco SSMS resources:

```bash
yum install centreon-plugin-Applications-Cisco-Ssms-Restapi.noarch
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-applications-cisco-ssms-restapi.noarch
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Cisco SSMS* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

The Plugin-Pack is designed to monitor resources based on one host per account.
Adding a host into Centreon, link it to the template named *App-Cisco-Ssms-Restapi-custom*. 
Once the template applied, some Macros have to be configured:

| Mandatory   | Name                    | Description                                                               |
| :---------- | :--------------------- | :------------------------------------------------------------------------- |
| X           | APIPORT                | Port used. Default is 8443                                                 |
| X           | APIPROTO               | Protocol used. Default is https                                            |
| X           | CLIENTID               | Client ID to access to the API.                                            |
| X           | CLIENTSECRET           | Client Secret to access to the API.                                        |
|             | APIEXTRAOPTIONS        | Any extra option you may want to add to the command                        |


## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your poller using the *centreon-engine* user account and test by running the following command 
(Parameters such as ```account``` or ```client-id```have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_cisco_ssms_restapi.pl \
    --plugin=apps::cisco::ssms::restapi::plugin \
	--mode=licenses \
	--hostname='myipaddress' \
	--client-id='myapiclientid' \
	--client-secret='myapiclientsecret' \
	--account='1234abc-56de-78fg-90hi-1234abcdefg' \
	--filter-counters='status' \
	--filter-license-name='mylicence'
	--critical-license-status='%{status} !~ /in compliance/i' \
	--verbose
```

The command above gets the status of a Cisco SSMS licenses (```--mode=licenses```) named *mylicense* (```--filter-licence-name='mylicence'```). 
This license belongs to account *1234abc-56de-78fg-90hi-1234abcdefg* (```--account='1234abc-56de-78fg-90hi-1234abcdefg'```). 

This command will trigger a CRITICAL alarm if the status of the license is different from *in compliance* (```--critical-license-status='%{status} !~ /in compliance/i'```) 

All the options that can be used with this plugin can be found over the ```--help``` command:

```bash
/usr/lib/centreon/plugins//centreon_cisco_ssms_restapi.pl --plugin=apps::cisco::ssms::restapi::plugin 
--mode=licences --help
```

### Why do I get the following error: 

#### ```UNKNOWN: 500 Can't connect to api.meraki.com:443```

This error message means that the Centreon Plugin couldn't successfully connect to the Cisco Meraki API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl``` option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

When using a proxy to connect to the Meraki API, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.

### How do I remove the *count* perfdatas if I want to filter on just one application ?

The Plugin adds the count of objects by default. This can be useless if the objects are filtered with the ```--filter-license-name``` parameter.
Therefore, these useless perfdatas can be omitted by adding a perfdata filter : ```--filter-perfdata='^$'```.

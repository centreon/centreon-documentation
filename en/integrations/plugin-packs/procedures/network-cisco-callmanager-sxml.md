---
id: network-cisco-callmanager-sxml
title: Cisco Callmanager SXML
---

## Overview

Using SXML, this Cisco Call Manager Plugin-Pack monitors alerts from the Cisco Unified Communications component.

## Plugin-Pack Assets

### Monitored Objects

* Alerts

### Collected Metrics

More information about collected metrics is available in the official Cisco Callmanager documentation : 
https://www.cisco.com/c/en/us/support/docs/unified-communications/unified-communications-manager-callmanager/213291-real-time-monitoring-tool-alerts.html#anc8

<!--DOCUSAURUS_CODE_TABS-->

<!--Alerts-->

| Metric name                      | Description                         | Unit  |
| :------------------------------- | :---------------------------------- | :---- |
| alerts.total.count               | Total number of alerts              | count |
| severity-$alerts.severity.count  | Number of different severities      | count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller monitoring Cisco Callmanager resources:

```bash
yum install centreon-plugin-Network-Cisco-Callmanager-Sxml.noarch
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Cisco Callmanager SXML* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller monitoring Cisco Callmanager resources:

```bash
yum install centreon-plugin-Network-Cisco-Callmanager-Sxml.noarch
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-network-cisco-callmanager-sxml.noarch
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Cisco Callmanager SXML* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

The Plugin-Pack is designed to monitor resources based on one Host per Cisco Callmanager SXML environment. 
Adding a Host into Centreon, link it to the Template named *Net-Cisco-Callmanager-Sxml-custom*.
Once the Template applied, some Macros have to be configured:

| Mandatory   | Name                     | Description                                         |
| :---------- | :----------------------- | :-------------------------------------------------- |
| X           | CUCMSXMLAPIPORT          | Port used. Default is 8443                          |          
| X           | CUCMSXMLAPIPROTO         | Protocol used. Default is https                     |
|             | CUCMSXMLAPIEXTRAOPTIONS  | Any extra option you may want to add to the command |

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your poller using the *centreon-engine* user account and test by running the following command
(Parameters such as ```api-username``` or ```api-password``` have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_cisco_cucm_sxml.pl \
    --plugin=network::cisco::callmanager::sxml::plugin \
	--mode=alerts \
	--Hostname='mycucm.com' \
	--api-username='centreoncucm' \
	--api-password='myapipassword' \
	--port='8443' \
	--proto='https' \ 
	--http-backend=curl \
	--curl-opt="CURLOPT_SSL_VERIFYPEER => 0" \
	--verbose \
	--display-alerts
OK: Alerts total: 1, informational: 0, error: 0, debugging: 0, critical: 1, alert: 0, warning: 0, emergency: 0, notice: 0 
| 'alerts.total.count'=1;;;0; 'alerts.severity.informational.count'=0;;;0;1 'alerts.severity.error.count'=0;;;0;1 'alerts.severity.debugging.count'=0;;;0;1 
'alerts.severity.critical.count'=1;;;0;1 'alerts.severity.alert.count'=0;;;0;1 'alerts.severity.warning.count'=0;;;0;1 'alerts.severity.emergency.count'=0;;;0;1 
'alerts.severity.notice.count'=0;;;0;1
alert [name: CDRFileDeliveryFailureContinues] [severity: critical] [date: Tue Oct  6 05:42:12 2020]:  BillingServerAddress : 172.28.172.105 
AppID : Cisco CDR Repository Manager ClusterID :  NodeID : server.centreon.com  TimeStamp : Tue Oct 06 05:41:50 EDT 2020. 
The alarm is generated on Tue Oct 06 05:41:50 EDT 2020.	
```

The command above gets the alerts of a Cisco Callmanager using SXML (```--mode=alerts```).
It uses api-username (```--api-username='centreoncum'```), an api-password (```--api-password='myapipassword'```)
and it connects to the Host _mycucm.com_ (```--Hostname='mycucm.com'```) 
on the port 443 (```--port='443'```) using https (```--proto='https'```).
By default, the backend method is _curl_ (```--http-backend=curl``).

```bash
/usr/lib/centreon/plugins//centreon_cisco_cucm_sxml.pl --plugin=network::cisco::callmanager::sxml::plugin \
--mode=alerts --help
```

### Why do I get the following error: 

#### ```UNKNOWN: 500 Can't connect to mycucm.com:443```

This error message means that the Centreon Plugin couldn't successfully connect to the Cisco Callmanager SXML.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl='http://proxy.mycompany:8080'``` option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

When using a proxy to connect to the Cisco Callmanager SXML, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *lwp* HTTP backend by adding the following option to the command: ```--http-backend='lwp'```.

### How do I remove the *count* perfdatas if I want to filter on just one application ?

The Plugin adds the count of objects by default. This can be useless if the objects are filtered with the ```--filter-name``` parameter.
Therefore, these useless perfdatas can be omitted by adding a perfdata filter : ```--filter-perfdata='^$'```.

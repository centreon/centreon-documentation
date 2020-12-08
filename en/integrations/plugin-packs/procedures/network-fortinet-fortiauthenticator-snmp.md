---
id: network-fortinet-fortiauthenticator-snmp
title: Fortinet FortiAuthenticator SNMP
---

## Overview

FortiAuthenticator is the gatekeeper of authorization into the Fortinet secured enterprise network identifying users, querying
access permissions from third party systems, and communicating this information to FortiGate devices for use in Identity-Based
Policies.

Th related Centreon Plugin-Pack uses the SNMP protocol to check and gather information and metrics about
the FortiAuthenticator devices.

## Plugin-Pack assets

### Monitored objects

* FortiAuthenticator appliances and virtual machines                

### Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Authenticator-->

| Metric name                                     | Description                                  | Unit |
|:------------------------------------------------|:---------------------------------------------|:-----|
| authenticator.authentication.events.persecond   | Number of authentication events per second   |      |
| authenticator.authentication.failures.persecond | Number of authentication failures per second |      |
| authenticator.groups.count                      | Total number of user groups                  |      |
| authenticator.groups.percentage                 | Percentage of user groups usage              | %    |
| authenticator.radius.nas.count                  | Total number of Radius NAS                   |      |
| authenticator.radius.nas.percentage             | Percentage of Radius NAS usage               | %    |
| authenticator.users.count                       | Total number of local users                  |      |
| authenticator.users.percentage                  | Percentage of users usage                    | %    |

<!--Cpu-->

| Metric name                 | Description                  | Unit  |
| :-------------------------- | :--------------------------- | :---- |
| cpu.utilization.percentage  | Current CPU usage percentage |   %   |

<!--Disk-Log-->

| Metric name                     | Description                                       | Unit |
|:--------------------------------|:--------------------------------------------------|:-----|
| disk.log.space.usage.percentage | Percentage of used space on the device's log disk | %    |

<!--Ha-->

| Metric name | Description                                     |
|:------------|:------------------------------------------------|
| ha-status   | Current status of the high-availability feature |

<!--Interfaces-->

| Metric name                                            | Description                                         | Unit |
|:-------------------------------------------------------|:----------------------------------------------------|:-----|
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface.       | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface.       | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

<<!--Memory-->

| Metric name             | Description                               | Unit  |
| :---------------------  | :---------------------------------------- | :---- |
| memory.usage.percentage | Percentage of memory usage on the device. |   %   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Device Configuration

On the FortiAuthenticator device, enable and configure the SNMP agent:

* Connect to the HDX Admin Web UI
* Go to *System > Administration > SNMP*
* Configure the SNMP settings to be used by Centreon

### Network flows

The Centreon Poller must be able to reach the UDP/161 SNMP port of the FortiAuthenticator device.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor FortiAuthenticator devices:

```bash
yum install centreon-plugin-Network-Fortinet-Fortiauthenticator-Snmp
```

2. On the Centreon Web interface, install the *Fortinet Fortiauthenticator SNMP* Plugin-Pack
through "Configuration > Plugin packs > Manager" page.

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor FortiAuthenticator devices:

```bash
yum install centreon-plugin-Network-Fortinet-Fortiauthenticator-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-fortinet-fortiauthenticator-snmp
```

3. On the Centreon Web interface, install the *Fortinet Fortiauthenticator SNMP* Plugin-Pack
through "Configuration > Plugin packs > Manager" page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *HW-Device-Polycom-Hdx-SNMP-Custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_fortinet_fortiauthenticator_snmp.pl \
    --plugin=network::fortinet::fortiauthenticator::snmp::plugin \
    --mode=authenticator \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='mysnmpcommunity' \
    --warning-users-usage-prct='80' \
    --critical-users-usage-prct='90' \
    --warning-authentication-failures='50' \
    --critical-authentication-failures='100' \
    --verbose
```

Expected command output is shown below:

```bash
OK: Authenticator statistics are ok | 'authenticator.users.count'=9;;;0;10100 'authenticator.users.percentage'=0.09%;;;0;100
'authenticator.groups.count'=1;;;0;1010 'authenticator.groups.percentage'=0.10%;;;0;100 'authenticator.radius.nas.count'=3;;;0;10100
'authenticator.radius.nas.percentage'=0.03%;;;0;100 'authenticator.authentication.events.persecond'=0/s;;;0;
'authenticator.authentication.failures.persecond'=0/s;;;0;
checking authenticator
    users total: 10100 used: 9 (0.09%) free: 10091 (99.91%)
    groups total: 1010 used: 1 (0.10%) free: 1009 (99.90%)
    radius nas total: 10100 used: 3 (0.03%) free: 10097 (99.97%)
    authentication events: 0/s, failures: 0/s
```

The command above monitors the authentication statistics of a FortiAuthenticator device (```--plugin=network::fortinet::fortiauthenticator::snmp::plugin
--mode=authenticator```) identified by the IP address *10.0.0.1* (```--hostname=10.0.0.1```). As the Plugin is using the SNMP protocol to request the device,
the related *community* and *version* are specified (```--snmp-version='2c' --snmp-community='mysnmpcommunity'```).

This command would trigger a WARNING alarm if the current user sessions rate raises over 80% of the device capabilities (```--warning-users-usage-prct='80'```)
and a CRITICAL alarm over 90% (```--critical-users-usage-prct='90'```).
In a similar way, alarms would also be triggered if the per second authentication failure rate raises over
the defined thresholds (```--warning-authentication-failures='50' --critical-authentication-failures='100'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_fortinet_fortiauthenticator_snmp.pl --plugin=network::fortinet::fortiauthenticator::snmp::plugin --mode=authenticator --help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues:
* The SNMP agent of the device isn't started or is misconfigured
* An external device is blocking the request (firewall, ...)

#### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues:
  * the FortiAuthenticator device doesn't support the MIB used by the Plugin
  * the targeted SNMP OID cannot be fetched because of insufficient privileges on the device
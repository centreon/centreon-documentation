---
id: hardware-servers-cisco-ucs-snmp
title: Cisco UCS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

Cisco Unified Computing System (UCS) is a system of servers, a network, storage and a storage network in a single platform.

The Centreon Plugin Pack *Cisco UCS* relies on the SNMP protocol to query and collect status and metrics of the UCS server.

## Plugin Pack assets

### Monitored objects

* UCS Server Resources

### Collected metrics 

<Tabs groupId="sync">
<TabItem value="Audit-Logs" label="Audit-Logs">

| Metric name                  | Description                                | Unit  |
| :--------------------------- | :----------------------------------------- | :---- |
| audit.total.count            | Number of audit logs                       | count |
| audit.cleared.count          | Number of cleared audit logs               | count |                          
| audit.info.count             | Number of info audit logs                  | count |                      
| audit.condition.count        | Number of condition audit logs             | count |                             
| audit.warning.count          | Number of warning audit logs               | count |                            
| audit.minor.count            | Number of minor audit logs                 | count |                          
| audit.critical.count         | Number of critical audit logs              | count |                             

</TabItem>
<TabItem value="Equipment" label="Equipment">

| Metric name | Description                                | Unit |
| :---------- | :----------------------------------------- | :--- |
| status      | Check Hardware status                      |      |

</TabItem>
<TabItem value="Faults" label="Faults">

| Metric name                   | Description                                | Unit  |
| :---------------------------- | :----------------------------------------- | :---- |
| faults.problems.current.count | Number of current faults                   | count |
| faults.total.count            | Number of faults                           | count |
| faults.cleared.count          | Number of cleared faults                   | count |
| faults.info.count             | Number of info faults                      | count |
| faults.condition.count        | Number of conditions faults                | count |
| faults.warning.count          | Number of warning faults                   | count |
| faults.minor.count            | Number of minor faults                     | count |
| faults.major.count            | Number of major faults                     | count |
| faults.critical.count         | Number of critical faults                  | count |

</TabItem>
<TabItem value="Mgmt-Entities" label="Mgmt-Entities">

| Metric name                     | Description                                | Unit  |
| :------------------------------ | :----------------------------------------- | :---- |
| management_entities.total.count | Number of management entities              | count |

</TabItem>
<TabItem value="Service-Profile" label="Service-Profile">

| Metric name                   | Description                                | Unit  |
| :---------------------------- | :----------------------------------------- | :---- |
| serviceprofiles.total.count   | Number of service profiles                 | count |
| serviceprofiles.online.count  | Number of online service profiles          | count |
| serviceprofiles.offline.count | Number of offline service profiles         | count |


</TabItem>
</Tabs>

## Prerequisites

### Device Configuration

The SNMP agent must be configured and running on the UCS server. Please refer to the manufacturer documentation to achieve this.

### Network flows

The Centreon Poller must be able to reach the UDP/161 SNMP port of the UCS server.

## Installation

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT-100 Editions" label="Online IMP Licence & IT-100 Editions">

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor UCS servers:

```bash
yum install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp
```

2. On the Centreon Web interface, install the *Cisco UCS* Plugin Pack through "Configuration > Plugin Packs > Manager" page.

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor UCS servers :

```bash
yum install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp
```

2. Install the Centreon Plugin Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-hardware-servers-cisco-ucs-snmp
```

3. On the Centreon Web interface, install the *Cisco UCS* Plugin Pack through "Configuration > Plugin Packs > Manager" page.

</TabItem>
</Tabs>

## Host configuration

Create your Host and apply the *HW-Server-Cisco-Ucs-custom* Host Template. You must set SNMP Community and Version in the dedicated fields of the Host Form. 

> If you are using SNMP v3, set all specific parameters within SNMPEXTRAOPTIONS Host Macro

| Mandatory   | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |


## How to test my plugin and what do the main parameters stand for ?

Once the plugin is installed, you can test it logging into the CLI with the centreon-engine user.

```bash
/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \
    --plugin=hardware::server::cisco::ucs::plugin \
    --mode=faults \ 
    --hostname=10.30.2.11 \
    --snmp-version='2c' \
    --snmp-community='cisco_ucs' \ 
    --filter-severity='critical|major=critical' \
    --filter-severity='warning|minor=warning' \
    --verbose
    
```

The above command checks for faults on a UCS server (``` --mode=faults ```). Mandatory options are the IP/FQDN of the device 

(``` --hostname=10.30.2.11 ```) and the SNMP version you have set on your appliance (``` --snmp-community='cisco_ucs' ```).

This command would trigger a WARNING alarm if a problem with the severity WARNING or MINOR is detected on a UCS server resource  (``` --filter-severity='warning|minor=warning' ```) and

a CRITICAL alarm if a problem is detected with the severity CRITICAL or MAJOR (``` --filter-severity='critical|major=critical' ```).

All available options for a given mode can be displayed by adding the ``` --help ``` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \
    --plugin=hardware::server::cisco::ucs::plugin \
    --mode=faults \
    --help
```

All plugin modes can be listed with the following command:

```bash
/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \
    --plugin=hardware::server::cisco::ucs::plugin \
    --list-mode 
```

## Troubleshooting

### UNKNOWN: SNMP GET Request : Timeout

If you get this error, it may indicate that some flows are blocked between the Centreon Poller and the UCS server. 

It can also mean that the Centreon Host Configuration doesn't reflect the SNMP configuration on UCS side (version, community). 

### UNKNOWN: SNMP GET Request : Cant get a single value.

You may get this error when SNMP privileges are not wide enough. You can check that the SNMP community used in your command line has enough rights to walk the Cisco UCS SNMP branch: .1.3.6.1.4.1.9.9.719 

You can use the snmpwalk utilities which is provided through net-snmp package. 
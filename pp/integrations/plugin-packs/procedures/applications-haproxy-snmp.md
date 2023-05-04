---
id: applications-haproxy-snmp
title: Haproxy SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

HAProxy is an open source software allowing high availability, load balancing 
and proxying solutions for TCP and HTTP-based applications.

The Centreon Monitoring Connector *Haproxy SNMP* aims to collect backend/frontend status
and sessions and traffic statistics using the SNMP protcol.

## Pack assets

### Monitored objects

* Frontend usage 

* Backend usage

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Frontend-Usage" label="Frontend-Usage">

| Metric name                       | Description                | Unit  |
|:----------------------------------|:---------------------------|:------|
| status                            | Frontend status            |       |
| frontend.sessions.current.count   | Number of current sessions | count |
| frontend.sessions.total.count     | Number of total sessions   | count |
| frontend.traffic.in.bitpersecond  | Incomming frontend traffic | b/s   |
| frontend.traffic.out.bitpersecond | Outgoing frontend traffic  | b/s   |

</TabItem>
<TabItem value="Backend-Usage" label="Backend-Usage">

| Metric name                      | Description                        | Unit  |
|:---------------------------------|:-----------------------------------|:------|
| status                           | Backend status                     |       |
| backend.queue.current.count      | Number of current request in queue | count |
| backend.sessions.current.count   | Number of current sessions         | count |
| backend.sessions.total.count     | Number of total sessions           | count |
| backend.traffic.in.bitpersecond  | Incomming backend traffic          | b/s   |
| backend.traffic.out.bitpersecond | Outgoing backend traffic           | b/s   |

</TabItem>
</Tabs>

## Prerequisites

To use this pack, the SNMP service must be properly configured on your HAProxy 
server. HAProxy provides an official documentation to achieve this:
https://www.haproxy.com/documentation/hapee/latest/observability/metrics/snmp/

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon package on every Centreon poller expected to monitor HAProxy ressources:

```bash
yum install centreon-plugin-Applications-Haproxy-Snmp
```

2. On the Centreon Web interface, install the *Haproxy SNMP* Centreon Monitoring Connector on the **Configuration > Monitoring Connectors Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor HAProxy ressources:

```bash
yum install centreon-plugin-Applications-Haproxy-Snmp
```

2. Install the *Haproxy SNMP* Centreon Monitoring Connector RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-haproxy-snmp
```

3. On the Centreon Web interface, install the *Haproxy SNMP* Centreon Monitoring Connector on the **Configuration > Monitoring Connectors Manager** page

</TabItem>
</Tabs>

## Configuration

### Host

 * Log into Centreon and add a new Host through "Configuration > Hosts".
 * Fill the "Name", "Alias" & "IP Address / DNS" fields according to your HAProxy Server settings
 * Select the *Applications-Haproxy-Snmp-custom* template to apply to the Host

I> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters 
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory | Name             | Description                                 |
|:----------|:-----------------|:--------------------------------------------|
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## How to check in the CLI that the configuration is OK and what are the main options for ? 

 Once the plugin installed, log into your Centreon Poller CLI using the 
 *centreon-engine* user account and test the Plugin by running the following 
 command:

 ```bash
 /usr/lib/centreon/plugins//centreon_haproxy_snmp.pl  \
    --plugin=apps::haproxy::snmp::plugin   \
    --mode=frontend-usage  \
    --hostname='10.0.0.1'  \
    --snmp-version='2c'  \
    --snmp-community='my-snmp-community'   \
    --filter-name=''  \
    --warning-status=''  \
    --critical-status='%{status} !~ /OPEN/i'  \
    --warning-total-sessions=''  \
    --critical-total-sessions=''  \
    --warning-current-sessions=''  \
    --critical-current-sessions=''  \
    --warning-traffic-in=''  \
    --critical-traffic-in=''  \
    --warning-traffic-out=''  \
    --critical-traffic-out=''  \
    --use-new-perfdata
    --verbose \
    --use-new-perfdata
 ```

 Expected command output is shown below:

 ```bash
OK : All frontends are ok | 'frontend.sessions.current.count'=9000;;;; 'frontend.sessions.total.count'=9000;;;; 'frontend.traffic.in.bitpersecond'=9000b/s;;;; 'frontend.traffic.out.bitpersecond'=9000b/s;;;;
 ```

This command would trigger a CRITICAL alarm if the status of the *frontend* is 
different than 'OPEN' (```--critical-status='%{status} !~ /OPEN/i'```).

 All available options for a given mode can be displayed by adding the 
```--help``` parameter to the command:

 ```bash
 /usr/lib/centreon/plugins//centreon_haproxy_snmp.pl  \
    --plugin=apps::haproxy::snmp::plugin   \
    --mode=frontend-usage  \
    --help
 ```

 All available options for a given mode can be displayed by adding the 
```--list-mode``` parameter to the command:

 ```bash
 /usr/lib/centreon/plugins//centreon_haproxy_snmp.pl  \
    --plugin=apps::haproxy::snmp::plugin   \
    --list-mode
 ```

### Troubleshooting
 
#### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues:

* Your SNMP server isn't started or misconfigured

* An external device is blocking your request (firewall, ...)

#### UNKNOWN: SNMP GET Request : Cant get a single value.

This message generally means that SNMP privileges are not wide enough for the
mode/plugin to work properly.
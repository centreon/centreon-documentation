---
id: applications-protocol-radius
title: Radius Service
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

The Remote Authentication Dial-In User Service (RADIUS) is a networking
protocol that allows centralized authentification.

The Centreon Monitoring Connector *Radius Service* aims to collect the status and 
response time of a RADIUS server login.

## Pack assets

### Monitored objects

* RADIUS server

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Radius-Login" label="Radius-Login">

| Metric name                  | Description         | Unit       |
|:-----------------------------|:--------------------|:-----------|
| status                       | Login status        |            |
| radius.response.time.seconds | Login response time | seconds    |

</TabItem>
</Tabs>

## Prerequisites

For this Monitoring Connector you will need :

* A RADIUS server
* An username and password used for authentication
* The RADIUS server secret

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon package on every Centreon poller expected to monitor RADIUS ressources:

```bash
yum install centreon-plugin-Applications-Protocol-Radius
```

2. On the Centreon Web interface, install the *Radius Service* Centreon Monitoring Connector on the **Configuration > Monitoring Connectors Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor RADIUS ressources:

```bash
yum install centreon-plugin-Applications-Protocol-Radius
```

2. Install the *Radius Service* Centreon Monitoring Connector RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-protocol-radius
```

3. On the Centreon Web interface, install the *Radius Service* Centreon Monitoring Connector on the **Configuration > Monitoring Connectors Manager** page

</TabItem>
</Tabs>

## Configuration

### Host

 * Log into Centreon and add a new Host through "Configuration > Hosts".
 * Fill the "Name", "Alias" & "IP Address / DNS" fields according to your RADIUS Server settings
 * Select the *Applications-Protocol-Radius-custom* template to apply to the Host
 * Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.

| Mandatory | Name           | Description                                                                        |
|:----------|:---------------|:-----------------------------------------------------------------------------------|
| X         | RADIUSUSERNAME | RADIUS server username                                                             |
| X         | RADIUSPASSWORD | RADIUS server password                                                             |
| X         | RADIUSADDR     | RADIUS server address                                                              |
| X         | RADIUSSECRET   | RADIUS server shared secret                                                        |
|           | EXTRAOPTIONS   | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for ? 

 Once the plugin installed, log into your Centreon Poller CLI using the 
 *centreon-engine* user account and test the Plugin by running the following 
 command:

 ```bash
 /usr/lib/centreon/plugins//centreon_protocol_radius.pl  \
    --plugin=apps::protocols::radius::plugin  \
    --mode=login  \
    --hostname=  \
    --secret=''  \
    --username=''  \
    --password=''   \
    --warning-status=''  \
    --critical-status='%{status} ne "accepted"'  \
    --warning-time='2'  \
    --critical-time='3'  \
    --use-new-perfdata 
 ```

 Expected command output is shown below:

 ```bash
OK : Radius Access Request Status: accepted | 'radius.response.time.seconds'=1s;0:2;0:3;; 
 ```

This command would trigger a WARNING alarm if the login response time is 
reported as over 2 seconds (```--warning-time='2'```) and a CRITICAL alarm 
over 3 seconds (```--critical-time='3'```) or if the login status if different
than "accepted".

 All available options for a given mode can be displayed by adding the 
```--help``` parameter to the command:

 ```bash
 /usr/lib/centreon/plugins//centreon_protocol_radius.pl  \
    --plugin=apps::protocols::radius::plugin  \
    --mode=login  \
    --help
 ```

 All available options for a given mode can be displayed by adding the 
```--list-mode``` parameter to the command:

 ```bash
 /usr/lib/centreon/plugins//centreon_protocol_radius.pl  \
    --plugin=apps::protocols::radius::plugin  \
    --list-mode
 ```

### Troubleshooting

#### ```UNKNOWN: Login endpoint returns error code 'Auth_TIMEOUT' ```

If you get this message, you're probably facing one of theses issues:

* Your RADIUS server isn't started
* An external device is blocking your request (firewall, ...)

#### ```UNKNOWN: Login endpoint returns error code 'Bad Response from server' ```

This error means the secret used to authenticate the RADIUS server is wrong.
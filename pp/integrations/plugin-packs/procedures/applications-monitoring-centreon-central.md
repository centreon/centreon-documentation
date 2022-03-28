---
id: applications-monitoring-centreon-central
title: Centreon Central
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The Centreon Central plugin pack will help you set up monitoring for your Centreon Central server. To be the most accurate, the central server should be monitored by a poller if you have one. 

## Pack Assets

### Templates

The Centreon Plugin Pack Centreon Central brings a host template:
* App-Monitoring-Centreon-Central-custom

It brings the following Service Templates: 

| Service Alias      | Service Template                              | Service Description                        | Default |
|:-------------------|:----------------------------------------------|:-------------------------------------------|:--------|
| Broker-Stats       | App-Monitoring-Centreon-Broker-Stats-Central  | Check Centreon Broker processes statistics | X       |
| proc-broker-rrd    | App-Monitoring-Centreon-Process-broker-rrd    | Check Broker RRD process                   | X       |
| proc-broker-sql    | App-Monitoring-Centreon-Process-broker-sql    | Check Broker SQL process                   | X       |
| proc-centcore      | App-Monitoring-Centreon-Process-centcore      | Check centcore process                     |         |
| proc-centengine    | App-Monitoring-Centreon-Process-centengine    | Check centreon-engine process              | X       |
| proc-centreontrapd | App-Monitoring-Centreon-Process-centreontrapd | Check centreontrapd process                |         |
| proc-crond         | App-Monitoring-Centreon-Process-crond         | Check crond process                        | X       |
| proc-gorgoned      | App-Monitoring-Centreon-Process-gorgoned      | Check gorgoned process                     | X       |
| proc-httpd         | App-Monitoring-Centreon-Process-httpd         | Check Apache process                       | X       |
| proc-ntpd          | App-Monitoring-Centreon-Process-ntpd          | Check NTP process                          | X       |
| proc-snmptrapd     | App-Monitoring-Centreon-Process-snmptrapd     | Check snmptrapd process                    |         |
| proc-sshd          | App-Monitoring-Centreon-Process-sshd          | Check sshd process                         | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Broker-Stats" label="Broker-Stats">

| Metric Name                      | Unit     |
|:---------------------------------|:---------|
| *endpoint*#queued_events         | events   |
| *endpoint*#speed_events          | events/s |
| status                           | string   |
| *endpoint*#unacknowledged_events | events   |

</TabItem>

<TabItem value="proc-broker-rrd" label="proc-broker-rrd">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-broker-sql" label="proc-broker-sql">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-centcore" label="proc-centcore">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-centengine" label="proc-centengine">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-centreontrapd" label="proc-centreontrapd">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-crond" label="proc-crond">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-gorgoned" label="proc-gorgoned">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-httpd" label="proc-httpd">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-ntpd" label="proc-ntpd">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-snmptrapd" label="proc-snmptrapd">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-sshd" label="proc-sshd">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

</Tabs>

## Prerequisites

### SNMP

SNMP must be configured on each poller being monitored. You can refer to this [documentation](operatingsystems-linux-snmp.md#prerequisites) describing how to set up a quick SNMP configuration.

### SSH key exchange

The checks related to **Broker-Stats** service should be done from a poller and it is done through SSH. If you only have a central server, then checks will be initiated and performed on and by the central server itself. You can skip below steps for SSH key exchange if the central server monitors itself. 

The poller monitoring the central will have to log on through SSH as **centreon** user on the central server while being **centreon-engine**. 

Follow below steps to exchange the SSH key:

1. From the **central server**, set a password for the **centreon** user: 

```
passwd centreon
```

2. From the poller server, create and copy the new **centreon-engine's SSH key** on the central: 

```
su - centreon-engine
ssh-keygen -t ed25519 -a 100
ssh-copy-id -i ~/.ssh/id_ed25519.pub centreon@<IP_CENTRAL>
```

You will then have to set the check to be performed remotely. To do so, after applying the Host template, you will have to set the EXTRAOPTIONS macro in the **Broker-Stats** service.

| Macro name          | Value                                           |
|:--------------------|:------------------------------------------------|
| EXTRAOPTIONS        | --verbose --remote --ssh-option='-l=centreon'   |

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on a poller or directly on the central server if it monitors itself:

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-Central centreon-plugin-Operatingsystems-Linux-Snmp
```

2. On the Centreon Web interface, install the **Centreon Central** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on a poller or directly on the central server if it monitors itself:

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-Central centreon-plugin-Operatingsystems-Linux-Snmp
```

2. Install the **Centreon Central** Centreon Plugin Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-monitoring-centreon-central
```

3. On the Centreon Web interface, install the **Centreon Central** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>

</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your *Centreon Central* server settings.
* Select the *App-Monitoring-Centreon-Central-custom* template to apply to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro            | Description                                                                           |
|:------------|:-----------------|:--------------------------------------------------------------------------------------|
|             | MODULESTATSFILE  | /var/lib/centreon-engine/central-module-master-stats.json                             |
|             | RRDSTATSFILE     | /var/lib/centreon-broker/central-rrd-master-stats.json                                |
|             | SNMPEXTRAOPTIONS | Any extra option you may want to add to every command\_line (eg. a --verbose flag)    |
|             | SQLSTATSFILE     | /var/lib/centreon-broker/central-broker-master-stats.json                             |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account (`su - centreon-engine`) and test the Plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --mode=processcount \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --process-name='sshd' \
    --process-path='' \
    --process-args='' \
    --regexp-name \
    --regexp-path \
    --regexp-args \
    --warning='' \
    --critical='' \
    --use-new-perfdata 
```

The expected command output is shown below:

```bash
OK: Number of current processes running: 1 | 'nbproc'=1;;;0; 
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --mode=processcount \
    --help
```

All available plugin modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../tutorials/troubleshooting-plugins.md) for Centreon Plugins typical issues.
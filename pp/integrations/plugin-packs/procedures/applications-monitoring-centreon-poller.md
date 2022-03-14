---
id: applications-monitoring-centreon-poller
title: Centreon Poller
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

The Centreon Poller plugin pack will help you set up monitoring for your pollers. To be the most accurate, the pollers should be monitored by the Central server. 

## Pack Assets

### Templates

The Centreon Plugin Pack Centreon Poller brings a host template:

* App-Monitoring-Centreon-Poller-custom

It brings the following Service Templates:

| Service Alias   | Service Template                            | Service Description                         | Default |
| :-------------- | :------------------------------------------ | :------------------------------------------ | :------ |
| Broker-Stats    | App-Monitoring-Centreon-Broker-Stats-Poller | Check Centreon Broker processes statistics. | X       |
| proc-centengine | App-Monitoring-Centreon-Process-centengine  | Check centengine process.                   | X       |
| proc-gorgoned   | App-Monitoring-Centreon-Process-gorgoned    | Check gorgoned process.                     | X       |
| proc-ntpd       | App-Monitoring-Centreon-Process-ntpd        | Check NTP process.                          | X       |
| proc-sshd       | App-Monitoring-Centreon-Process-sshd        | Check sshd process.                         | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Broker-Stats" label="Broker-Stats">

| Metric Name           | Unit   |
| :-------------------- | :----- |
| queued-events         | string |
| speed-events          | string |
| status                | string |
| unacknowledged-events | string |

</TabItem>
<TabItem value="proc-centegine" label="proc-centegine">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>
<TabItem value="proc-gorgoned" label="proc-gorgoned">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>
<TabItem value="proc-ntpd" label="proc-ntpd">

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

SNMP must be configured on each poller being monitored. You can refer to this [documentation](operatingsystems-linux-snmp#prerequisites) describing how to set up a quick SNMP configuration.

### SSH key exchange

One of the check coming along with the pack is performed through SSH, the Central server should be able to connect to each poller being monitored.

The Central server performs its checks while being **centreon-engine** user, and will log to the pollers as **centreon** user.

Follow below steps to exchange the SSH key:

1. From the poller being monitored by the Central server, set a password for the **centreon** user: 

```
passwd centreon
```

2. From the Central server, create and copy the new **centreon-user's SSH key** on the poller: 

```
su - centreon-engine
ssh-keygen -t ed25519 -a 100
ssh-copy-id -i ~/.ssh/id_ed25519.pub centreon@<IP_POLLER>
```

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on the Central Server:

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-Poller centreon-plugin-Operatingsystems-Linux-Snmp
```

2. On the Centreon Web interface, install the **Centreon Poller** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on the Central Server:

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-Poller centreon-plugin-Operatingsystems-Linux-Snmp
```

2. Install the **Centreon Poller** Centreon Plugin Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-applications-monitoring-centreon-poller
 ```

3. On the Centreon Web interface, install the **Centreon Poller** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your *Centreon Poller* server settings.
* Select the *App-Monitoring-Centreon-Poller-custom* template to apply to the Host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name            | Description                                                  |
| :-------- | :-------------- | :----------------------------------------------------------- |
|           | MODULESTATSFILE | (Default: '/var/lib/centreon-engine/*-module-stats.json')    |
|           | EXTRAOPTIONS    | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Central Server CLI using the **centreon-engine** user account (`su - centreon-engine`) and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins//centreon_centreon_central.pl \
    --plugin=apps::centreon::local::plugin \
    --hostname=10.0.0.1 \
    --mode=broker-stats \
    --broker-stats-file='/var/lib/centreon-engine/*-module-stats.json' \
    --filter-name='' \
    --warning-speed-events='' \
    --critical-speed-events='' \
    --warning-queued-events='' \
    --critical-queued-events='' \
    --warning-unacknowledged-events='' \
    --critical-unacknowledged-events='' \
    --warning-status='' \
    --critical-status='%{type} eq "output" and %{queue_file_enabled} =~ /true/i' \
    --verbose \
    --remote \
    --ssh-option='-l=centreon'
```

The expected command output is shown below:

```bash
OK:  Speed Events: %s/s Queued Events: %s Unacknowledged Events: %s | 
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_centreon_central.pl \
    --plugin=apps::centreon::local::plugin \
    --hostname=10.0.0.1 \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_centreon_central.pl \
    --plugin=apps::centreon::local::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins in the [dedicated page](../tutorials/troubleshooting-plugins.md).
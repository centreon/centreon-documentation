---
id: applications-wallix-bastion-snmp
title: Wallix Bastion SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Monitored Objects

The Pack Wallix Bastion collects metrics for:
* License
* System

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="License" label="License">

| Metric name                                   | Description                                 | Unit  |
| :-------------------------------------------- | :------------------------------------------ | :---- |
| license status                                | Status of the licenses                      |       |
| license.expires.seconds                       | Expiration time                             | s     |
| *license\_resource*\#license.usage.count      | Number of used resources on the license     |       |
| *license\_resource*\#license.free.count       | Number of free resources on the license     |       |
| *license\_resource*\#license.usage.percentage | Percentage of used resources on the license | %     |

</TabItem>
<TabItem value="System" label="System">

| Metric name              | Description                             | Unit  |
| :----------------------- | :-------------------------------------- | :---- |
| services status          | Status of all services                  |       |
| sessions.total.count     | Number of total sessions                |       |
| sessions.primary.count   | Number of primary sessions              |       |
| sessions.secondary.count | Number of secondary sessions            |       |
| sessions.ghost.count     | Number of ghost sessions                |       |
| requests.pending.count   | Number of requests pending for approval |       |

</TabItem>
</Tabs>

## Prerequisites

To monitor your Wallix Bastion, the SNMP must be configured.
The Poller should be able to perform SNMP requests toward the Lenovo device over SNMP UDP/161 port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Wallix-Bastion-Snmp
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Wallix Bastion SNMP* Pack

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Wallix-Bastion-Snmp
```

2. On the Centreon Central server, install the Pack from the RPM:

```bash
yum install centreon-pack-applications-wallix-bastion-snmp
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Wallix Bastion SNMP* Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the application's configuration
* Apply the *App-Wallix-Bastion-SNMP-custom* Host Template

> When using SNMP v3, set extra SNMP parameters in the SNMPEXTRAOPTIONS macro. <br/>
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_wallix_bastion_snmp.pl \
    --plugin=apps::wallix::bastion::snmp::plugin \
    --mode=system \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='wallix_ro' \
    --verbose
```

Expected command output is shown below:

```bash
OK: system is ok | 'sessions.total.count'=13;;;0; 'sessions.primary.count'=7;;;0; 'sessions.secondary.count'=6;;;0; 'sessions.ghost.count'=0;;;0; 'requests.pending.count'=2;;;0;
checking system
    services status: running
    sessions total: 13 primary: 7 secondary: 6 ghost: 0
    requests pending: 2
```

The command above monitors Wallix Bastion system (```--plugin=apps::wallix::bastion::snmp::plugin --mode=system```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='wallix_ro'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_wallix_bastion_snmp.pl \
    --plugin=apps::wallix::bastion::snmp::plugin \
    --mode=system \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../getting-started/how-to-guides/troubleshooting-plugins.md#troubleshooting-snmp)


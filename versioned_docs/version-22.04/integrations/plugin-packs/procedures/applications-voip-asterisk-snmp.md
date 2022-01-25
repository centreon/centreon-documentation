---
id: applications-voip-asterisk-snmp
title: Asterisk VoIP SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack Asterisk VoIP SNMP brings 1 host template:
* App-VoIP-Asterisk-SNMP-custom

It brings the following Service Template:

| Service Alias | Service Template                     | Service Description                | Default |
|:--------------|:-------------------------------------|:-----------------------------------|:--------|
| Channel-Usage | App-Voip-Asterisk-SNMP-Channel-Usage | Check number of calls and channels | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Channel-Usage" label="Channel-Usage">

| Metric Name           | Unit  |
|:----------------------|:------|
| calls.active.count    | count |
| calls.processed.count | count |
| channels.active.count | count |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your Asterisk
server. Asterisk provides an [official documentation](https://wiki.asterisk.org/wiki/display/AST/Simple+Network+Management+Protocol+%28SNMP%29+Support) to achieve this.

### Network flow

The Asterisk server must be reachable from the Centreon Poller on the UDP/161 SNMP
port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Asterisk** resources:

```bash
yum install centreon-plugin-Applications-Voip-Asterisk-Snmp
```

2. On the Centreon Web interface, install the **Asterisk VoIP SNMP** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Asterisk** resources:

```bash
yum install centreon-plugin-Applications-Voip-Asterisk-Snmp
```

2. Install the **Asterisk VoIP SNMP** Centreon Plugin Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-voip-asterisk-snmp
```

3. On the Centreon Web interface, install the **Asterisk VoIP SNMP** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Asterisk** server settings.
* Select the **App-VoIP-Asterisk-SNMP-custom** template to apply to the Host.

If you are using SNMP Version 3, use the SNMPEXTRAOPTIONS Macro to configure.
your own SNMPv3 credentials combo.

| Mandatory   | Macro            | Description                                 |
|:------------|:-----------------|:--------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account (`su - centreon-engine`) and test the Plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_asterisk_snmp.pl \
    --plugin=apps::voip::asterisk::snmp::plugin \
    --mode=channel-usage \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-channels-active='' \
    --critical-channels-active='' \
    --warning-calls-active='100' \
    --critical-calls-active='200' \
    --warning-calls-count='' \
    --critical-calls-count='' \
    --use-new-perfdata 
```

The expected command output is shown below:

```bash
OK: channels active: 54 calls active: 73 calls count: 746 | 'channels.active.count'=54;;;0; 'calls.active.count'=73;0:100;0:200;0; 'calls.processed.count'=746;;;0; 
```

This command would trigger a WARNING alarm if the number of active calls is 
reported as over 100 (`--warning-calls-active='100'`) and a CRITICAL alarm if 
over 200than 50% (`--critical-calls-active='200'`).

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_asterisk_snmp.pl \
    --plugin=apps::voip::asterisk::snmp::plugin \
    --mode=channel-usage \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_asterisk_snmp.pl \
    --plugin=apps::voip::asterisk::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins)
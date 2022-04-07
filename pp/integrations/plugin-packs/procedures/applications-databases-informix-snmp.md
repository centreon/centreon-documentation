---
id: applications-databases-informix-snmp
title: Informix DB SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack Informix DB SNMP brings 1 host template:
* App-DB-Informix-SNMP-custom

It brings the following Service Templates:

| Service Alias | Service Template                   | Default |
|:--------------|:-----------------------------------|:--------|
| Archivelevel0 | App-DB-Informix-Archivelevel0-SNMP | X       |
| Chunk-Status  | App-DB-Informix-Chunk-Status-SNMP  | X       |
| Dbspace-Usage | App-DB-Informix-Dbspace-Usage-SNMP | X       |
| Global-Cache  | App-DB-Informix-Global-Cache-SNMP  | X       |
| Lock-Stats    | App-DB-Informix-Lock-Stats-SNMP    | X       |
| Logfile-Usage | App-DB-Informix-Logfile-Usage-SNMP | X       |
| Sessions      | App-DB-Informix-Sessions-SNMP      | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Archivelevel0" label="Archivelevel0">

| Metric Name | Description                                 | Unit |
|:------------|:--------------------------------------------|:-----|
| seconds     | Number of seconds elapsed since last backup | s    |

</TabItem>
<TabItem value="Chunk-Status" label="Chunk-Status">

| Metric Name | Unit   |
|:------------|:-------|
| status      | string |

</TabItem>
<TabItem value="Dbspace-Usage" label="Dbspace-Usage">

| Metric Name | Description                         | Unit |
|:------------|:------------------------------------|:-----|
| used        | Space utilization for each DBspace  | %    |

</TabItem>
<TabItem value="Global-Cache" label="Global-Cache">

| Metric Name | Description                         | Unit |
|:------------|:------------------------------------|:-----|
| read        | Disk and logical read operations    |  %   |
| write       | Disk and logical write operations   |  %   |

</TabItem>
<TabItem value="Lock-Stats" label="Lock-Stats">

| Metric Name  | Unit   |
|:-------------|:-------|
| lock_dead    | count  |
| lock_request | count  |
| lock_timeout | count  |
| lock_wait    | count  |

</TabItem>
<TabItem value="Logfile-Usage" label="Logfile-Usage">

| Metric Name | Description                         | Unit |
|:------------|:------------------------------------|:-----|
| used        | Space utilization of the Logfile    |  %   |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Metric Name | Unit  |
|:------------|:------|
| sessions    | count |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your Informix
server. Please refer to the official documentation from IBM: 
* https://www.ibm.com/support/pages/simple-steps-support-snmp-informix-server

### Network flow

The target server must be reachable from the Centreon Poller on the UDP/161 SNMP
port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Informix SNMP** resources:

```bash
yum install centreon-plugin-Applications-Databases-Informix-Snmp
```

2. On the Centreon Web interface, install the **Informix DB SNMP** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Informix SNMP** resources:

```bash
yum install centreon-plugin-Applications-Databases-Informix-Snmp
```

2. Install the **Informix DB SNMP** Centreon Plugin Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-databases-informix-snmp
```

3. On the Centreon Web interface, install the **Informix DB SNMP** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Informix SNMP** server settings
* Select the **App-DB-Informix-SNMP-custom** template to apply to the Host

If you are using SNMP Version 3, use the SNMPEXTRAOPTIONS Macro to configure
your own SNMPv3 credentials combo.

| Mandatory | Name             | Description                                              |
|:----------|:-----------------|:---------------------------------------------------------|
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins//centreon_informix_snmp.pl \
    --plugin=database::informix::snmp::plugin \
    --mode=sessions \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-sessions='10' \
    --critical-sessions='20' \
    --use-new-perfdata 
```

The expected command output is shown below:

```bash
OK: 7 client sessions | sessions=7;10;20;0;;
```

This command would trigger a WARNING alarm if the number of sessions is reported as over 10
(`--warning-sessions='10'`) and a CRITICAL alarm over 20 (`--critical-sessions='20'`).

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_informix_snmp.pl \
    --plugin=database::informix::snmp::plugin \
    --mode=sessions \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_informix_snmp.pl \
    --plugin=database::informix::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../getting-started/how-to-guides/troubleshooting-plugins.md)
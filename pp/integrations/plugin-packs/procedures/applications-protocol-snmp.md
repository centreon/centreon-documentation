---
id: applications-protocol-snmp
title: Generic SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Generic SNMP** brings a host template:

* App-Protocol-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template                       | Service Description                                    | Default | Discovery |
|:--------------|:---------------------------------------|:-------------------------------------------------------|:--------|:----------|
| Collection    | App-Protocol-SNMP-Collection           | Collect and compute SNMP datas                         |         |           |
| Collection    | App-Protocol-SNMP-Collection-Discovery | Collect and compute SNMP datas                         |         | X         |
| Generic-Value | App-Protocol-SNMP-Numeric-Value        | Check allowing to retrieve a digital value from an OID |         |           |
| Generic-Value | App-Protocol-SNMP-String-Value         | Check allowing to retrieve a string value from an OID  |         |           |
| Uptime        | App-Protocol-SNMP-Uptime               | Check equipment uptime using standard OID              |         |           |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Rule Name       | Description                                                  |
|:----------------|:-------------------------------------------------------------|
| SNMP Agents     | Discover hosts by requesting their SNMP agents               |
| SNMP v3 Agents  | Discover hosts by requesting their SNMP agents using SNMP v3 |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

</TabItem>
<TabItem value="Service" label="Service">

| Rule Name                         | Description |
|:----------------------------------|:------------|
| App-Protocol-SNMP-Collection-Name |             |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Collection" label="Collection">

| Metric Name         | Unit  |
|:--------------------|:------|
| *selections*#select |       |

</TabItem>
<TabItem value="Generic-Value" label="Generic-Value">

Could not retrive metrics

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric Name | Unit  |
|:------------|:------|
| uptime      |       |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Generic SNMP**
server. Please refer to the official documentation from XXX:
* LINK

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Generic SNMP** resources:

```bash
yum install centreon-plugin-Applications-Protocol-Snmp
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Generic SNMP** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Generic SNMP** resources:

```bash
yum install centreon-plugin-Applications-Protocol-Snmp
```

2. Install the **Generic SNMP** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-applications-protocol-snmp
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Generic SNMP** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Generic SNMP** server settings.
* Apply the **App-Protocol-SNMP-custom** template to the host.

If you are using SNMP Version 3, use the **SNMPEXTRAOPTIONS** macro to configure
your own SNMPv3 credentials combo.

| Mandatory   | Macro                | Description                                  |
|:------------|:---------------------|:---------------------------------------------|
|             | SNMPCOLLECTIONCONFIG |                                              |
|             | SNMPEXTRAOPTIONS     | Configure your own SNMPv3 credentials combo  |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_generic_snmp.pl \
    --plugin=apps::protocols::snmp::plugin \
    --mode=string-value \
    --hostname=10.0.0.1 \
    --snmp-community='my-snmp-community' \
    --snmp-version=2c \
    --oid='' \
    --format-ok='' \
    --format-warning='' \
    --format-critical='' \
    --format-unknown='' \
    --warning-regexp= \
    --critical-regexp= \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: | 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_generic_snmp.pl \
    --plugin=apps::protocols::snmp::plugin \
    --mode=string-value \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_generic_snmp.pl \
    --plugin=apps::protocols::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
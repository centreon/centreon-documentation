---
id: hardware-pdu-clever-snmp
title: Clever PDU
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector **Clever PDU** brings a host template:

* HW-Pdu-Clever-SNMP-custom

It brings the following service template:

| Service Alias      | Service Template                      | Service Description      | Default |
|:-------------------|:--------------------------------------|:-------------------------|:--------|
| Power-Source-Usage | HW-Pdu-Clever-Power-Source-Usage-SNMP | Check power source usage | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Power-Source-Usage" label="Power-Source-Usage">

| Metric Name | Unit  |
|:------------|:------|
| current     | A     |
| power       | W     |
| voltage     | V     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Clever PDU**
server. Please refer to the official documentation from Clever:
* [Clever](https://www.china-clever.com/en/resources/specification/index.html)

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the package on every Centreon poller expected to monitor **Clever PDU** resources:

```bash
yum install centreon-plugin-Hardware-Pdu-Clever-Snmp
```

2. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Clever PDU** Centreon Monitoring Connector.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the package on every Centreon poller expected to monitor **Clever PDU** resources:

```bash
yum install centreon-plugin-Hardware-Pdu-Clever-Snmp
```

2. Install the **Clever PDU** Centreon Monitoring Connector RPM on the Centreon central server:

```bash
yum install centreon-pack-hardware-pdu-clever-snmp
```

3. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Clever PDU** Centreon Monitoring Connector.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Clever PDU** server settings.
* Apply the **HW-Pdu-Clever-SNMP-custom** template to the host.

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters 
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory   | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo  |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_pdu_clever_snmp.pl \
    --plugin=hardware::pdu::clever::snmp::plugin \
    --mode=ps-usage \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-power='' \
    --critical-power='' \
    --warning-voltage='' \
    --critical-voltage='' \
    --warning-current='' \
    --critical-current='' \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: Input power : %s W Current : %s A Voltage : %s V | 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_pdu_clever_snmp.pl \
    --plugin=hardware::pdu::clever::snmp::plugin \
    --mode=ps-usage \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_pdu_clever_snmp.pl \
    --plugin=hardware::pdu::clever::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
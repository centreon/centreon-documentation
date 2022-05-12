---
id: hardware-pdu-emerson-snmp
title: Emerson PDU
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Emerson PDU** brings a host template:

* HW-Pdu-Emerson-SNMP-custom

It brings the following service templates:

| Service Alias      | Service Template                       | Service Description      | Default |
|:-------------------|:---------------------------------------|:-------------------------|:--------|
| Global-Status      | HW-Pdu-Emerson-Global-Status-SNMP      | Check global status      | X       |
| Power-Source-Usage | HW-Pdu-Emerson-Power-Source-Usage-SNMP | Check power source usage | X       |
| Receptacles        | HW-Pdu-Emerson-Receptacles-SNMP        | Check receptacles        | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Global-Status" label="Global-Status">

| Metric Name  | Unit  |
|:-------------|:------|
| *pdu*#status |       |

</TabItem>
<TabItem value="Power-Source-Usage" label="Power-Source-Usage">

| Metric Name                                       | Unit     |
|:--------------------------------------------------|:---------|
| powersource.neutral.current.ampacrms              | AmpAcRMS |
| powersource.total.accumulated.energy.kilowatthour | kWh      |
| powersource.total.input.power.watt                | W        |
| *line*#line.neutral.current.ampere                | A        |
| *line*#line.load.percentage                       | %        |

</TabItem>
<TabItem value="Receptacles" label="Receptacles">

| Metric Name                                             | Unit     |
|:--------------------------------------------------------|:---------|
| receptaclebranch.line2neutral.current.ampacrms          | AmpAcRMS |
| receptaclebranch.line2neutral.apparent.power.voltampere | VA       |
| receptaclebranch.line2neutral.real.power.watt           | W        |
| receptaclebranch.line2neutral.potential.voltrms         | VoltRMS  |
| receptaclebranch.total.accumulated.energy.kilowatthour  | kWh      |
| *rcp*#rcp-status                                        |          |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Emerson PDU**
server. Please refer to the official documentation from XXX:
* LINK

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Emerson PDU** resources:

```bash
yum install centreon-plugin-Hardware-Pdu-Emerson-Snmp
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Emerson PDU** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Emerson PDU** resources:

```bash
yum install centreon-plugin-Hardware-Pdu-Emerson-Snmp
```

2. Install the **Emerson PDU** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-hardware-pdu-emerson-snmp
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Emerson PDU** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Emerson PDU** server settings.
* Apply the **HW-Pdu-Emerson-SNMP-custom** template to the host.

If you are using SNMP Version 3, use the **SNMPEXTRAOPTIONS** macro to configure
your own SNMPv3 credentials combo.

| Mandatory   | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo  |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_pdu_emerson_snmp.pl \
    --plugin=hardware::pdu::emerson::snmp::plugin \
    --mode=global-status \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --filter-name='' \
    --warning-status='' \
    --critical-status='' \
    --verbose \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK:  | 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_pdu_emerson_snmp.pl \
    --plugin=hardware::pdu::emerson::snmp::plugin \
    --mode=global-status \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_pdu_emerson_snmp.pl \
    --plugin=hardware::pdu::emerson::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
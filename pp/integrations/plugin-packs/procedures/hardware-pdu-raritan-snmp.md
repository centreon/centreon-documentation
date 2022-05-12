---
id: hardware-pdu-raritan-snmp
title: Raritan PDU
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Raritan PDU** brings a host template:

* HW-Pdu-Raritan-SNMP-custom

It brings the following service templates:

| Service Alias  | Service Template                  | Service Description      | Default |
|:---------------|:----------------------------------|:-------------------------|:--------|
| Inlet-Sensors  | HW-Pdu-Raritan-InletSensors-SNMP  | Check PDU inlets sensors | X       |
| Ocprt-Sensors  | HW-Pdu-Raritan-Ocprt-Sensors-SNMP | Check PDU OCPRT sensors  | X       |
| Outlet-Sensors | HW-Pdu-Raritan-OutletSensors-SNMP | Check PDU outlets        | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Inlet-Sensors" label="Inlet-Sensors">

Could not retrive metrics

</TabItem>
<TabItem value="Ocprt-Sensors" label="Ocprt-Sensors">

Could not retrive metrics

</TabItem>
<TabItem value="Outlet-Sensors" label="Outlet-Sensors">

Could not retrive metrics

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Raritan PDU**
server. Please refer to the official documentation from XXX:
* LINK

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Raritan PDU** resources:

```bash
yum install centreon-plugin-Hardware-Pdu-Raritan-Snmp
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Raritan PDU** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Raritan PDU** resources:

```bash
yum install centreon-plugin-Hardware-Pdu-Raritan-Snmp
```

2. Install the **Raritan PDU** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-hardware-pdu-raritan-snmp
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Raritan PDU** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Raritan PDU** server settings.
* Apply the **HW-Pdu-Raritan-SNMP-custom** template to the host.

If you are using SNMP Version 3, use the **SNMPEXTRAOPTIONS** macro to configure
your own SNMPv3 credentials combo.

| Mandatory   | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTS    |                                              |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo  |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_pdu_raritan_snmp.pl \
    --plugin=hardware::pdu::raritan::snmp::plugin \
    --mode=outlet-sensors \
    --hostname 10.0.0.1 \
    --snmp-version 2c \
    --snmp-community my-snmp-community \
    --component .* \
    --warning  \
    --verbose \
    --critical \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: | 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_pdu_raritan_snmp.pl \
    --plugin=hardware::pdu::raritan::snmp::plugin \
    --mode=outlet-sensors \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_pdu_raritan_snmp.pl \
    --plugin=hardware::pdu::raritan::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
---
id: hardware-servers-lenovo-xcc-snmp
title: Lenovo XCC SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Lenovo XCC SNMP** brings a host template:

* HW-Server-Lenovo-Xcc-SNMP-custom

It brings the following service template:

| Service Alias   | Service Template                   | Service Description | Default |
|:----------------|:-----------------------------------|:--------------------|:--------|
| Hardware-Global | HW-Lenovo-Xcc-Hardware-Global-SNMP | Check all sensors   | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Hardware-Global" label="Hardware-Global">

Could not retrive metrics

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Lenovo XCC SNMP**
server. Please refer to the official documentation from Lenovo XCC SNMP:
* [Lenovo XCC](https://lenovopress.lenovo.com/lp0880-xcc-support-on-thinksystem-servers)
* [Configuring SNMPv3](https://sysmgt.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.systems.management.xcc.doc%2FNN1ia_c_configuringSNMP.html)

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Lenovo XCC SNMP** resources:

```bash
yum install centreon-plugin-Hardware-Servers-Lenovo-Xcc-Snmp
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Lenovo XCC SNMP** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Lenovo XCC SNMP** resources:

```bash
yum install centreon-plugin-Hardware-Servers-Lenovo-Xcc-Snmp
```

2. Install the **Lenovo XCC SNMP** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-hardware-servers-lenovo-xcc-snmp
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Lenovo XCC SNMP** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Lenovo XCC SNMP** server settings.
* Apply the **HW-Server-Lenovo-Xcc-SNMP-custom** template to the host.

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
/usr/lib/centreon/plugins//centreon_lenovo_xcc_snmp.pl \
    --plugin=hardware::server::lenovo::xcc::snmp::plugin \
    --mode=hardware \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --component='.*' \
    --verbose \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: | 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_lenovo_xcc_snmp.pl \
    --plugin=hardware::server::lenovo::xcc::snmp::plugin \
    --mode=hardware \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_lenovo_xcc_snmp.pl \
    --plugin=hardware::server::lenovo::xcc::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
---
id: hardware-ats-apc
title: APC ATS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **APC ATS** brings a host template:

* HW-ATS-Apc-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template              | Service Description  | Default |
|:--------------|:------------------------------|:---------------------|:--------|
| Device-Status | HW-ATS-Apc-Device-Status-SNMP | Check device status  | X       |
| Input-Lines   | HW-ATS-Apc-Input-Lines-SNMP   | Check input metrics  | X       |
| Output-Lines  | HW-ATS-Apc-Output-Lines-SNMP  | Check output metrics | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Device-Status" label="Device-Status">

Could not retrive metrics

</TabItem>
<TabItem value="Input-Lines" label="Input-Lines">

| Metric Name     | Unit  |
|:----------------|:------|
| *input*#current | A     |
| *input*#power   | W     |
| *input*#voltage | V     |

</TabItem>
<TabItem value="Output-Lines" label="Output-Lines">

| Metric Name           | Unit  |
|:----------------------|:------|
| *oline*#current       | A     |
| *oline*#load          | VA    |
| *oline*#load-capacity | %     |
| *oline*#power         | W     |
| *oline*#status        |       |
| *oline*#voltage       | V     |

</TabItem>
</Tabs>

## Prerequisites

*Specify prerequisites that are relevant. You may want to just provide a link
to the manufacturer official documentation BUT you should try to be as complete
as possible here as it will save time to everybody.*

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **APC ATS** resources:

```bash
yum install centreon-plugin-Hardware-Ats-Apc-Snmp
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **APC ATS** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **APC ATS** resources:

```bash
yum install centreon-plugin-Hardware-Ats-Apc-Snmp
```

2. Install the **APC ATS** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-hardware-ats-apc
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **APC ATS** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **APC ATS** server settings.
* Apply the **HW-ATS-Apc-SNMP-custom** template to the host.

If you are using SNMP Version 3, use the **SNMPEXTRAOPTIONS** macro to configure
your own SNMPv3 credentials combo.

| Mandatory   | Macro            | Description                                                                            |
|:------------|:-----------------|:---------------------------------------------------------------------------------------|
|             | SNMPEXTRAOPTIONS | Any extra option you may want to add to every command line (eg. a --verbose flag)      |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_ats_apc_snmp.pl \
    --plugin=hardware::ats::apc::snmp::plugin \
    --mode=device-status \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --component='' \
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
/usr/lib/centreon/plugins//centreon_ats_apc_snmp.pl \
    --plugin=hardware::ats::apc::snmp::plugin \
    --mode=device-status \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_ats_apc_snmp.pl \
    --plugin=hardware::ats::apc::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
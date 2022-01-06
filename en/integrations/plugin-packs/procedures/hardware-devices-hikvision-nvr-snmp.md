---
id: hardware-devices-hikvision-nvr-snmp
title: Hikvision NVR SNMP
---

## Pack Assets

### Templates

The Centreon Pack Hikvision NVR SNMP brings 1 host template:
* HW-Device-Hikvision-Nvr-SNMP-custom

It brings the following Service Templates:

| Service Alias | Service Template                    | Default | Discovery |
|:--------------|:------------------------------------|:--------|:----------|
| Disks         | HW-Device-Hikvision-Nvr-Disks-SNMP  | X       |           |
| Memory        | HW-Device-Hikvision-Nvr-Memory-SNMP | X       |           |
| Uptime        | HW-Device-Hikvision-Nvr-Uptime-SNMP | X       |           |

### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Disks-->

| Metric name                             | Description                                                | Unit |
|:--------------------------------------- |:---------------------------------------------------------- |:---- |
| status                                  | Status of the disk                                         |      |
| disks.total.count                       | Current number of disks                                    |      |
| disks.errors.count                      | Current number of disks with status: abnormal, smartfailed |      |
| *disk_name*#disk.space.usage.bytes      | Space used on the disk                                     | B    |
| *disk_name*#disk.space.free.bytes       | Free space left on the disk                                | B    |
| *disk_name*#disk.space.usage.percentage | Space used on the disk in percentage                       | %    |

<!--Memory-->

| Metric name             | Description                | Unit  |
| :---------------------- | :------------------------- | :---- |
| memory.usage.bytes      | Memory usage               | B     |
| memory.free.bytes       | Free memory                | B     |
| memory.usage.percentage | Memory usage in percentage | %     |

<!--Uptime-->

| Metric name           | Description        | Unit  |
| :-------------------- | :----------------- | :---- |
| system.uptime.seconds | System uptime      | s     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your device.

### Network flow

The target equipment must be reachable from the Centreon Poller on the UDP/161 SNMP
port.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Hikvision NVR SNMP** resources:

```bash
yum install centreon-plugin-Hardware-Devices-Hikvision-Nvr-Snmp
```

2. On the Centreon Web interface, install the **Hikvision NVR SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

<!--Offline License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Hikvision NVR SNMP** resources:

```bash
yum install centreon-plugin-Hardware-Devices-Hikvision-Nvr-Snmp
```

2. Install the **Hikvision NVR SNMP** Centreon Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-hardware-devices-hikvision-nvr-snmp
```

3. On the Centreon Web interface, install the **Hikvision NVR SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Hikvision NVR SNMP** server settings
* Select the **HW-Device-Hikvision-Nvr-SNMP-custom** template to apply to the Host

If you are using SNMP Version 3, use the SNMPEXTRAOPTIONS Macro to configure
your own SNMPv3 credentials combo.

| Mandatory | Name             | Description                                              |
|:----------|:-----------------|:---------------------------------------------------------|
|           | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins/centreon_hikvision_nvr_snmp.pl \
    --plugin=hardware::devices::hikvision::nvr::snmp::plugin \
    --mode=memory \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-usage-prct='' \
    --critical-usage-prct='' \
    --verbose
```

The expected command output is shown below:

```bash
OK: Memory total: 500.00 MB used: 25.00 MB (5.00%) free: 475.00 MB (95.00%) | 'memory.usage.bytes'=26214400B;;;0;524288000 'memory.free.bytes'=498073600B;;;0;524288000 'memory.usage.percentage'=5.00%;;;0;100
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_hikvision_nvr_snmp.pl \
    --plugin=hardware::devices::hikvision::nvr::snmp::plugin \
    --mode=memory \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_hikvision_nvr_snmp.pl \
    --plugin=hardware::devices::hikvision::nvr::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins.html#snmp-checks)

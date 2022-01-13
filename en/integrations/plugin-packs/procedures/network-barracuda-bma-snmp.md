---
id: network-barracuda-bma-snmp
title: Barracuda Message Archiver SNMP
---

## Pack Assets

### Templates

The Centreon Pack Barracuda Message Archiver SNMP brings 1 host template:
* Net-Barracuda-Bma-SNMP-custom

It brings the following Service Templates:

| Service Alias | Service Template               | Default | Discovery |
|:--------------|:-------------------------------|:--------|:----------|
| Load          | Net-Barracuda-Bma-Load-SNMP    | X       |           |
| Mails         | Net-Barracuda-Bma-Mails-SNMP   | X       |           |
| Storage       | Net-Barracuda-Bma-Storage-SNMP | X       |           |

### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Load-->

| Metric name                | Description                                 | Unit  |
| :------------------------- | :------------------------------------------ | :---- |
| system.cpu.load.percentage | Estimate of CPU and disk load on the system | %     |

<!--Mails-->

| Metric name                 | Description                                                                        | Unit  |
| :-------------------------- | :--------------------------------------------------------------------------------- | :---- |
| mails.inbound.hourly.count  | Number of inbound e-mails during the current hour                                  |       |
| mails.inbound.daily.count   | Number of inbound e-mails during the current calendar day (beginning at midnight)  |       |
| mails.inbound.total.count   | Number of inbound e-mails during the check period                                  |       |
| mails.internal.hourly.count | Number of internal e-mails during the current hour                                 |       |
| mails.internal.daily.count  | Number of internal e-mails during the current calendar day (beginning at midnight) |       |
| mails.internal.total.count  | Number of internal e-mails during the check period                                 |       |
| mails.outbound.hourly.count | Number of outbound e-mails during the current hour                                 |       |
| mails.outbound.daily.count  | Number of outbound e-mails during the current calendar day (beginning at midnight) |       |
| mails.outbound.total.count  | Number of outbound e-mails during the check period                                 |       |

<!--Storage-->

| Metric name                             | Description                             | Unit  |
| :-------------------------------------- | :-------------------------------------- | :---- |
| storage.firmware.space.usage.percentage | Storage space occupied by the firmware  | %     |
| storage.maillog.space.usage.percentage  | Storage space occupied by mail and logs | %     |

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

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Barracuda Message Archiver SNMP** resources:

```bash
yum install centreon-plugin-Network-Barracuda-Bma-Snmp
```

2. On the Centreon Web interface, install the **Barracuda Message Archiver SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

<!--Offline License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Barracuda Message Archiver SNMP** resources:

```bash
yum install centreon-plugin-Network-Barracuda-Bma-Snmp
```

2. Install the **Barracuda Message Archiver SNMP** Centreon Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-network-barracuda-bma-snmp
```

3. On the Centreon Web interface, install the **Barracuda Message Archiver SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Barracuda Message Archiver SNMP** server settings
* Select the **Net-Barracuda-Bma-SNMP-custom** template to apply to the Host

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
/usr/lib/centreon/plugins/centreon_barracuda_bma_snmp.pl \
    --plugin=network::barracuda::bma::snmp::plugin \
    --mode=load \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-cpu-load='' \
    --critical-cpu-load='' \
    --verbose
```

The expected command output is shown below:

```bash
OK: system cpu load: 2.00% | 'system.cpu.load.percentage'=2.00%;;;0;100
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_barracuda_bma_snmp.pl \
    --plugin=network::barracuda::bma::snmp::plugin \
    --mode=load \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_barracuda_bma_snmp.pl \
    --plugin=network::barracuda::bma::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins.html#snmp-checks)

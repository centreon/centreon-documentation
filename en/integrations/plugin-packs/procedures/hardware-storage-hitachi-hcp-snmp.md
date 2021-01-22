---
id: hardware-storage-hitachi-hcp-snmp
title: Hitachi HCP SNMP
---

## Plugin-Pack Assets

### Monitored Objects

The Plugin-Pack Hitachi HCP SNMP including monitoring of Nodes, Tenants and Volumes.

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Nodes-->

| Metric name                              | Description                       | Unit |
| :--------------------------------------- | :-------------------------------- | :--- |
| node status                              | Status of the node                |      |
| nic status                               | Status of the nic                 |      |
| san path status                          | Status of the san path            |      |
| san path status                          | Status of the san path            |      |
| bbu status                               | Status of the battery backup unit |      |
| *nodeid*#node.space.usage.bytes          | Usage of the node                 | B    |
| *nodeid*#node.space.free.bytes           | Free space left on the node       | B    |
| *nodeid*#node.space.usage.percentage     | Usage of the node in percentage   | %    |
| *nodeid*#node.sensor.temperature.celsius | Sensor temperature                | C    |
| *nodeid*#node.sensor.fan.speed.rpm       | Sensor fan speed                  | rpm  |
| *nodeid*#node.sensor.voltage.volt        | Sensor voltage                    | V    |

It is possible to filter on the ID of a node using a REGEXP of the form [```--filter-node-id='101'```].

<!--Tenants-->

| Metric name                                | Description                       | Unit |
| :----------------------------------------- | :-------------------------------- | :--- |
| *tenantname*#tenant.space.usage.bytes      | Usage of the tenant               | B    |
| *tenantname*#tenant.space.free.bytes       | Free space left on the tenant     | B    |
| *tenantname*#tenant.space.usage.percentage | Usage of the tenant in percentage | %    |

It is possible to filter on the name of a tenant using a REGEXP of the form [```--filter-tenant-name='backup'```].

<!--Volumes-->

| Metric name                                    | Description                       | Unit |
| :--------------------------------------------- | :-------------------------------- | :--- |
| volume status                                  | Status of the volume              |      |
| *nodeid*:*label*#volume.space.usage.bytes      | Usage of the volume               | B    |
| *nodeid*:*label*#volume.space.free.bytes       | Free space left on the volume     | B    |
| *nodeid*:*label*#volume.space.usage.percentage | Usage of the volume in percentage | %    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Hitachi HCP, the SNMP must be configured.
(https://knowledge.hitachivantara.com/Documents/Storage/Content_Platform/9.0.x/Administering_HCP/System_monitoring/03_Configuring_SNMP)

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Storage-Hitachi-Hcp-Snmp
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Hitachi HCP SNMP* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Storage-Hitachi-Hcp-Snmp
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-hardware-storage-hitachi-hcp-snmp
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Hitachi HCP SNMP* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Add a new Host and apply the *HW-Storage-Hitachi-Hcp-SNMP-custom* Host Template
* Fill the SNMP Version and Community fields according to the device's configuration

> When using SNMP v3, use the SNMPEXTRAOPTIONS Host Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

By default, Host Template *HW-Storage-Hitachi-Hcp-SNMP* doesn't have Service Template attached. You could:
 * attached Service Template to Host Template *HW-Storage-Hitachi-Hcp-SNMP-custom*
 * using service discovery

## FAQ

### How to test the Plugin and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account 
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_hitachi_hcp_snmp.pl \
    --plugin=storage::hitachi::hcp::snmp::plugin \
    --mode=nodes \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='hcp_ro' \
    --filter-node-id='101' \
    --warning-space-usage-prct='80' \
    --critical-space-usage-prct='90' \
    --verbose
```

Expected command output is shown below: 

```bash
OK: node '101' [ip address: 10.214.4.16] node status: available, nic status: ok, san path status: rain, battery backup unit status: Healthy - space usage total: 13.58 TB used: 350.93 GB (2.52%) free: 13.24 TB (97.48%) | '101#node.space.usage.bytes'=376806080512B;;;0;14933122809856 '101#node.space.free.bytes'=14556316729344B;;;0;14933122809856 '101#node.space.usage.percentage'=2.52%;0:80;0:90;0;100 '101~Temp_Ambient_FP#node.sensor.temperature.celsius'=25.0C;;;; '101~Temp_CPU0#node.sensor.temperature.celsius'=35.0C;;;; '101~Temp_CPU1#node.sensor.temperature.celsius'=40.0C;;;; '101~Temp_DIMM_AB#node.sensor.temperature.celsius'=28.0C;;;; '101~Temp_DIMM_EF#node.sensor.temperature.celsius'=29.0C;;;; '101~Temp_Outlet#node.sensor.temperature.celsius'=29.0C;;;; '101~Temp_PCH#node.sensor.temperature.celsius'=37.0C;;;; '101~Temp_PCI_Area#node.sensor.temperature.celsius'=33.0C;;;; '101~Temp_PCI_Inlet1#node.sensor.temperature.celsius'=30.0C;;;; '101~Temp_PCI_Inlet2#node.sensor.temperature.celsius'=28.0C;;;; '101~Temp_VR_CPU0#node.sensor.temperature.celsius'=27.0C;;;; '101~Temp_VR_CPU1#node.sensor.temperature.celsius'=32.0C;;;; '101~Temp_VR_DIMM_AB#node.sensor.temperature.celsius'=25.0C;;;; '101~Temp_VR_DIMM_CD#node.sensor.temperature.celsius'=27.0C;;;; '101~Temp_VR_DIMM_EF#node.sensor.temperature.celsius'=29.0C;;;; '101~Temp_VR_DIMM_GH#node.sensor.temperature.celsius'=31.0C;;;; '101~Fan_SYS0#node.sensor.fan.speed.rpm'=5100rpm;;;0; '101~Fan_SYS1#node.sensor.fan.speed.rpm'=4300rpm;;;0; '101~Fan_SYS2#node.sensor.fan.speed.rpm'=5100rpm;;;0; '101~Fan_SYS3#node.sensor.fan.speed.rpm'=4200rpm;;;0; '101~Fan_SYS4#node.sensor.fan.speed.rpm'=6600rpm;;;0; '101~Fan_SYS5#node.sensor.fan.speed.rpm'=5400rpm;;;0; '101~Fan_SYS6#node.sensor.fan.speed.rpm'=6500rpm;;;0; '101~Fan_SYS7#node.sensor.fan.speed.rpm'=5300rpm;;;0; '101~Volt_P12V#node.sensor.voltage.volt'=12.18V;;;; '101~Volt_P1V05#node.sensor.voltage.volt'=1.058V;;;; '101~Volt_P1V8_AUX#node.sensor.voltage.volt'=1.833V;;;; '101~Volt_P3V3#node.sensor.voltage.volt'=3.339V;;;; '101~Volt_P3V3_AUX#node.sensor.voltage.volt'=3.339V;;;; '101~Volt_P3V_BAT#node.sensor.voltage.volt'=3.161V;;;; '101~Volt_P5V#node.sensor.voltage.volt'=5.009V;;;; '101~Volt_P5V_AUX#node.sensor.voltage.volt'=5.009V;;;; '101~Volt_VR_CPU0#node.sensor.voltage.volt'=1.81V;;;; '101~Volt_VR_CPU1#node.sensor.voltage.volt'=1.81V;;;; '101~Volt_VR_DIMM_AB#node.sensor.voltage.volt'=1.22V;;;; '101~Volt_VR_DIMM_CD#node.sensor.voltage.volt'=1.22V;;;; '101~Volt_VR_DIMM_EF#node.sensor.voltage.volt'=1.22V;;;; '101~Volt_VR_DIMM_GH#node.sensor.voltage.volt'=1.22V;;;;
checking node '101' [ip address: 10.214.4.16]
    node status: available, nic status: ok, san path status: rain, battery backup unit status: Healthy
    space usage total: 13.58 TB used: 350.93 GB (2.52%) free: 13.24 TB (97.48%)
```

The command above monitors Hitachi HCP (```--plugin=storage::hitachi::hcp::snmp::plugin --mode=nodes```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='hcp_ro'```).

This command would trigger a WARNING alarm if space usage over 80% 
(```--warning-space-usage-prct='80'```) and a CRITICAL alarm over 90% (```--critical-space-usage-prct='90'```).

For each Plugin mode, all the options as well as all the available thresholds can be displayed by adding the ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_hitachi_hcp_snmp.pl \
    --plugin=storage::hitachi::hcp::snmp::plugin \
	--mode=nodes \
	--help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of these issues: 
* The SNMP agent of the device isn't started or is misconfigured 
* An external device is blocking the request (firewall, ...)

### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues: 
  - The Hitachi HCP device doesn't support the MIB used by the plugin
  - The targeted SNMP OID cannot be fetched because of insufficient privileges on the device. 
    SNMP Agent must be capable of accessing to the enterprise branch Hitachi HCP: .1.3.6.1.4.1.116.5.46

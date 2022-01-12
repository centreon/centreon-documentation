---
id: applications-microsoft-dhcp-snmp
title: Microsoft DHCP SNMP
---

## Plugin-Pack Assets

### Monitored Objects

The Plugin-Pack Microsoft DHCP SNMP including monitoring of Subnets.

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Subnets-->

| Metric name                                       | Description                       | Unit |
| :------------------------------------------------ | :-------------------------------- | :--- |
| *subnetaddress*#subnet.addresses.usage.count      | Usage of the subnet               |      |
| *subnetaddress*#subnet.addresses.free.count       | Free address left on the subnet   |      |
| *subnetaddress*#subnet.addresses.usage.percentage | Usage of the subnet in percentage | %    |
| *subnetaddress*#subnet.pending.offers.count       | Number of pending offers          |      |

It is possible to filter on the address of a subnet using a REGEXP of the form [```--subnet-address='192.168.1.0'```].

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Microsoft DHCP software, the SNMP must be configured.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Microsoft-Dhcp-Snmp
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Microsoft DHCP SNMP* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Microsoft-Dhcp-Snmp
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-applications-microsoft-dhcp-snmp
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Microsoft DHCP SNMP* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Add a new Host and apply the *App-Microsoft-Dhcp-SNMP-custom* Host Template
* Fill the SNMP Version and Community fields according to the device's configuration

> When using SNMP v3, use the SNMPEXTRAOPTIONS Host Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account 
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_microsoft_dhcp_snmp.pl \
    --plugin=apps::microsoft::dhcp::snmp::plugin \
    --mode=subnets \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='dhcp_ro' \
    --filter-subnet-address='192.168.153.0' \
    --warning-addresses-usage-prct=80 \
    --critical-addresses-usage-prct=90 \
    --verbose
```

Expected command output is shown below: 

```bash
OK: Subnet '192.168.153.0' addresses usage total: 50 used: 35 (70.00%) free: 15 (30.00%), pending offers: 0 | '192.168.153.0#subnet.addresses.usage.count'=35;;;0;50 '192.168.153.0#subnet.addresses.free.count'=15;;;0;50 '192.168.153.0#subnet.addresses.usage.percentage'=70.00%;0:80;0:90;0;100 '192.168.153.0#subnet.pending.offers.count'=0;;;0;
```

The command above monitors Microsoft DHCP (```--plugin=apps::microsoft::dhcp::snmp::plugin --mode=subnets```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='dhcp_ro'```).

This command would trigger a WARNING alarm if subnet usage over 80% 
(```--warning-addresses-usage-prct='80'```) and a CRITICAL alarm over 90% (```--critical-addresses-usage-prct='90'```).

For each Plugin mode, all the options as well as all the available thresholds can be displayed by adding the ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_microsoft_dhcp_snmp.pl \
    --plugin=apps::microsoft::dhcp::snmp::plugin \
    --mode=subnets \
	--help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of these issues: 
* The SNMP agent of the device isn't started or is misconfigured 
* An external device is blocking the request (firewall, ...)

### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues: 
  - The agent doesn't support the MIB used by the plugin
  - The targeted SNMP OID cannot be fetched because of insufficient privileges on the device. 
    SNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.311.1.3

---
id: applications-antivirus-kaspersky-snmp
title: Kaspersky
---

## Overview

Kasperky is a cybersecurity and anti-virus provider founded in 1997 by Eugene
Kaspersky, Natalya Kaspersky and Alexey De-Monderik.

The Centreon Plugin-Pack *Kaspersky* aims to collect the condition of the 
Administration Server and managed products with the SNMP protocol.

## Plugin-Pack assests

### Monitored objects

* Kaspersky Security Center

### Collected Metrics

<!--Deployment-->

| Metric name                          | Description                               |
|:-------------------------------------|:------------------------------------------|
| hosts.antivirus.installed.count      | Number of successful remote installations |
| hosts.antivirus.install.failed.count | Number of failed remote installations     |
| hosts.expiring.licence.count         | Number of hosts with expiring licence     |
| hosts.expired.licence.count          | Number of hosts with expired licence      |

<!--Events-->

| Metric name           | Description               |
|:----------------------|:--------------------------| 
| events.critical.count | Number of critical events |     

<!--Logical-Network-->

| Metric name              | Description                                             |
| :------------------------| :-------------------------------------------------------|
| hosts.new.count          | Number of new hosts                                     |
| groups.total.count       | Number of groups on the server                          |
| hosts.notconnected.count | Number of hosts that have not connected for a long time |
| hosts.uncontrolled.count | Number of uncontrolled hosts                            |

<!--Protection-->

| Metric name                                        | Description                                            |
|:---------------------------------------------------|:-------------------------------------------------------|
| protection.hosts.antivirus.notrunning.count        | Number of hosts without a running antivirus            |
| protection.hosts.realtime.notrunning.count         | Number of hosts without a running real time protection |
| protection.hosts.realtime.unacceptable.level.count | Number of hosts with unacceptable protection level     |
| protection.hosts.uncured.objects.count             | Number of hosts with uncured objects                   |
| protection.hosts.toomanythreats.count              | Number of hosts with too many threats                  |

<!--Updates-->

| Metric name                     | Description                    | Unit   |
|:--------------------------------|:-------------------------------|:------ |
| update.server.freshness.seconds | Date of the last server update | s      |
| update.hosts.outdated.count     | Number of outdated hosts       |        |

<!--Full-Scan-->

| Metric name           | Description                          |
|:----------------------|:-------------------------------------|
| hosts.unscanned.count | Number of hosts not recently scanned |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Kasperky Security Center configuration

To use this pack, the SNMP service must be properly configured on your 
Kaspersky Security Center. Kaspersky provides an official documentation
to achieve this: https://support.kaspersky.com/12603#block3

### Network flow

The Kaspersky Security Center must be reachable from the Centreon Poller on the 
UDP/161 SNMP port.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Kaspersky Plugin package on every Centreon poller expected to monitor a Kaspersky Security Center:

```bash
yum install centreon-plugin-Applications-Antivirus-Kaspersky-Snmp
```

2. On the centreon Web interface, install the *Kaspersky* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Kaspersky Plugin package on every Centreon poller expected to monitor a Kaspersky Security Center:

```bash
yum install centreon-plugin-Applications-Antivirus-Kaspersky-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-antivirus-kaspersky-snmp
```

3. On the Centreon Web interface, install the *Kaspersky* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your Kaspersky Security Center settings
* Select the *App-Antivirus-Kaspersky-SNMP-custom* template to apply to the Host.

If you are using SNMP Version 3, use the *SNMPEXTRAOPTIONS* Macro to configure
your own SNMPv3 credentials combo.

| Mandatory | Name             | Description                                 |
|:----------|:-----------------|:--------------------------------------------|
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## FAQ

### How do I run my plugin through the CLI and what do the main parameters stand for ?

Once you've installed the plugin, you can test it logging with *centreon-engine*
user:
 
```bash
/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \
  --plugin=apps::antivirus::kaspersky::snmp::plugin --mode=protection \
  --hostname=10.0.0.1 --snmp-version='2c' --snmp-community='kaseprsky_ro' \
  --warning-status='%{status} =~ /Warning/i' --critical-status='%{status} =~ /Critical/i'
  --warning-no-antivirus='0' --critical-no-antivirus='' --warning-no-real-time='0' --critical-no-real-time='' \
  --warning-not-acceptable-level='0' --critical-not-acceptable-level='' \
  --warning-not-cured-objects='0' --critical-not-cured-objects='' \
  --warning-too-many-threats='0' --critical-too-many-threats='' \
  --warning-too-many-threats='0' --critical-too-many-threats='' \
  --use-new-perfdata
```

Expected command output is shown below:

```bash
WARNING: 2 host(s) without running antivirus - 1 hosts(s) without running real time protection - 8 host(s) with not cured objects - 5 host(s) with too many threats | 'protection.hosts.antivirus.notrunning.count'=2;0:0;;0; 'protection.hosts.realtime.notrunning.count'=1;0:0;;0; 'protection.hosts.realtime.unacceptable.level.count'=0;0:0;;0; 'protection.hosts.uncured.objects.count'=8;0:0;;0; 'protection.hosts.toomanythreats.count'=5;0:0;;0;
```

In this example, the Plugin gets protection status of the hosts managed by the Kaspersky Antivirus Manager
(```--plugin=apps::antivirus::kaspersky::snmp::plugin--mode=protection```) by 
requesting the Kaspersky Security Center using the SNMP protocol at 10.0.0.1
(```--hostname='10.0.0.1'  --snmp-version='2c' --snmp-community='kaseprsky_ro'```).

This command will trigger an alarm when the global protection status is not OK (```--warning-status='%{status} =~ /Warning/i' --critical-status='%{status} =~ /Critical/i'```)
or when the number of host without antivirus or an unsatisfying level of protection is above 0 (```--warning-no-antivirus='0' --warning-not-acceptable-level='0'```).

All available options for a given mode can be displayed by adding the 
```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \
  --plugin=apps::antivirus::kaspersky::snmp::plugin \
  --mode=deployment \
  --help
```

All Plugin modes can be listed with the following command:

```bash
/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \
  --plugin=apps::antivirus::kaspersky::snmp::plugin \
  --list-mode
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues:

* Your SNMP server isn't started or misconfigured
* An external device is blocking your request (firewall, ...)

### UNKNOWN: SNMP GET Request : Cant get a single value.

This message generally means that SNMP privileges are not wide enough for the
mode/plugin to work properly.

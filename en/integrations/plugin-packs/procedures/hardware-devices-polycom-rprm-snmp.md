---
id: hardware-devices-polycom-rprm-snmp
title: Polycom RPRM SNMP
---

## Overview

The RealPresence Resource Manager system is a management solution that provides unified management of the Polycom® RealPresence® Clariti™ and video and audio endpoints. 
Unified management features include license management, monitoring, conference scheduling, and provisioning of Polycom video infrastructure products 
and as well as both Polycom and third-party endpoints within your environment.

The Centreon Plugin Pack relies on the SNMP protocol to query and collect status and metrics of the Polycom RPRM solution.

## Plugin-Pack assets

### Monitored objects

* RPRM Devices and associated resources (sites, sitelinks...)

### Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Cluster-Status-->

| Metric name          | Description                             |
|:---------------------|:----------------------------------------|
| cluster-status       | Current status of the RPRM SuperCluster |
| cluster-change-cause | Reason of the last cluster state change |

<!--License-->

| Metric name                    | Description                                                     | Unit  |
|:-------------------------------|:----------------------------------------------------------------|:------|
| rprm.license.total.usage.count | Current usage of assets vs the license maximum capability       | Count |
| rprm.license.audio.usage.count | Current usage of audio assets vs the license maximum capability | Count |
| rprm.license.video.usage.count | Current usage of video assets vs the license maximum capability | Count |

<!--Provisioning-->

| Metric name                     | Description                           | Unit  |
|:--------------------------------|:--------------------------------------|:------|
| provisioning-status             | Current provisioning jobs status      |       |
| rprm.provisioning.failed.count  | Number of failed provisioning jobs    | Count |
| rprm.provisioning.success.count | Number of successed provisioning jobs | Count |

<!--SiteLinks-->

* Global

| Metric name                | Description                                   | Unit  |
|:---------------------------|:----------------------------------------------|:------|
| rprm.sitelinks.total.count | Total number of SiteLinks managed by the RPRM | Count |

* Per *SiteLink*

| Metric name                                  | Description                                         | Unit  |
|:---------------------------------------------|:----------------------------------------------------|-------|
| sitelink-status                              | Current SiteLink status                             |       |
| rprm.sitelink.calls.active.count             | Number of active calls on the SiteLink              | Count |
| rprm.sitelink.bandwidth.used.percentage      | Percentage rate of used bandwidth                   | %     |
| rprm.sitelink.bandwidth.total.bytespersecond | Total bandwidth allocated to the SiteLink           | %     |
| rprm.sitelink.callbitrate.average.ratio      | Average Call Bit Rate of calls made on the SiteLink |       |
| rprm.sitelink.packetloss.average.percentage  | Average packet-loss percentage rate on the SiteLink | %     |
| rprm.sitelink.jitter.average.milliseconds    | Average jitter time on the SiteLink                 | ms    |
| rprm.sitelink.delay.average.milliseconds     | Average delay time on the SiteLink                  | ms    |

<!--Sites-->

* Global

| Metric name            | Description                               | Unit  |
|:-----------------------|:------------------------------------------|-------|
| rprm.sites.total.count | Total number of Sites managed by the RPRM | Count |

* Per *Site*

| Metric name                              | Description                                     | Unit  |
|:-----------------------------------------|:------------------------------------------------|-------|
| rprm.site.calls.active.count             | Number of active calls on the Site              | Count |
| rprm.site.bandwidth.used.percentage      | Percentage rate of used bandwidth               | %     |
| rprm.site.bandwidth.total.bytespersecond | Total bandwidth allocated to the Site           | %     |
| rprm.site.callbitrate.average.ratio      | Average Call Bit Rate of calls made on the Site |       |
| rprm.site.packetloss.average.percentage  | Average packet-loss percentage rate on the Site | %     |
| rprm.site.jitter.average.milliseconds    | Average jitter time on the Site                 | ms    |
| rprm.site.delay.average.milliseconds     | Average delay time on the Site                  | ms    |

<!--Updates-->

| Metric name                | Description                      | Unit  |
|:---------------------------|:---------------------------------|:------|
| updates-status             | Current updates jobs status      |       |
| rprm.updates.failed.count  | Number of failed updates jobs    | Count |
| rprm.updates.success.count | Number of successed updates jobs | Count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Device Configuration

Configure the proper SNMP settings on your Polycom RPRM device according to the Polycom official documentation: 
https://documents.polycom.com/bundle/rprm-ops-10-5/page/rprm_ops/SNMP_Operations/SNMP_Operations.htm

### Network flows

The Centreon Poller must be able to reach the UDP/161 SNMP port of the Polycom RPRM device.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor 
Polycom RPRM devices:


```bash
yum install centreon-plugin-Hardware-Devices-Polycom-Rprm-Snmp
```

2. On the Centreon Web interface, install the *Polycom RPRM SNMP* Plugin-Pack 
through "Configuration > Plugin packs > Manager" page.


<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor
Polycom RPRM devices:

```bash
yum install centreon-plugin-Hardware-Devices-Polycom-Rprm-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:


```bash
yum install centreon-pack-hardware-devices-polycom-rprm-snmp
```

3. On the Centreon Web interface, install the *Polycom RPRM SNMP* Plugin-Pack 
through "Configuration > Plugin packs > Manager" page.


<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Add a new Host and apply the *HW-Device-Polycom-Rprm-SNMP-Custom* Host Template
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
/usr/lib/centreon/plugins/centreon_polycom_rprm_snmp.pl \
    --plugin=hardware::devices::polycom::rprm::snmp::plugin \
    --mode=sites \
    --hostname=10.0.0.1 \
    --snmp-version='2c'
    --snmp-community='mysnmpcommunity' \
    --warning-site-bandwidth-used-prct='80' \
    --critical-site-bandwidth-used-prct='90' \
    --warning-site-packetloss-prct='5' \
    --critical-site-packetloss-prct='10' \
    --verbose
```

Expected command output is shown below: 

```bash
OK: Total sites : 1 - Site 'My_Poly_Site_1' current active calls : 27, current bandwidth usage : 12.50 %, Total allowed bandwidth: 25.00 Mb/s, 
Average call bit rate : 1.11, Average packetloss : 1.03 %, Average jitter time : 0.77 ms, Average delay time : 1.10 ms | 
'rprm.sites.total.count'=3;;;0; 'My_Poly_Site_1#rprm.site.calls.active.count'=27;;;0; 'My_Poly_Site_1#rprm.site.bandwidth.used.percentage'=12.50%;80;90;0;100 
'My_Poly_Site_1#rprm.site.bandwidth.total.bytespersecond'=25000000.00B/s;;;0; 'My_Poly_Site_1#rprm.site.callbitrate.average.ratio'=1.11;;;0; 
'My_Poly_Site_1#rprm.site.packetloss.average.percentage'=1.03%;5;10;0;100 'My_Poly_Site_1#rprm.site.jitter.average.milliseconds'=0.77ms;;;0; 'My_Poly_Site_1#rprm.site.delay.average.milliseconds'=1.10ms;;;0;
Site 'My_Poly_Site_1' current active calls : 27, current bandwidth usage : 12.50 %, Total allowed bandwidth: 25.00 Mb/s, 
Average call bit rate : 1.11, Average packetloss : 1.03 %, Average jitter time : 0.77 ms, Average delay time : 1.10 ms
```

The command above monitors the sites managed by a RPRM device (```--plugin=hardware::devices::polycom::rprm::snmp::plugin --mode=sites```) identified
by the IP address *10.0.0.1* (```--hostname=10.0.0.1```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='mysnmpcommunity'```).

This command would trigger a WARNING alarm if the bandwidth used raises over 80% of the site bandwidth capacity 
(```--warning-site-bandwidth-used-prct='80'```) and a CRITICAL alarm over 90% (```--critical-site-bandwidth-used-prct='90'```).
WARNING/CRITICAL alarms would aslo be triggered if the packet-loss percentage rate raises over 5%/10%  (```--warning-site-packetloss-prct='5' --critical-site-packetloss-prct='10'```).

For each Plugin mode, all the options as well as all the available thresholds can be displayed by adding the ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_polycom_rprm_snmp.pl --plugin=hardware::devices::polycom::rprm::snmp::plugin --mode=sites --help
```

### How to monitor system metrics on the Ploycom RPRM ?

Polycom RPRM devices are Linux-Based, use the *OS-Linux-SNMP-Custom* Host Template in addition with the RPRM Template to monitor the operating system layer.

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues: 
* The SNMP agent of the device isn't started or is misconfigured 
* An external device is blocking the request (firewall, ...)
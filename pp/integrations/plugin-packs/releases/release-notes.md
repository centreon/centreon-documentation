---
id: release-notes
title: Release Notes
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 2022

### April

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- network-viptela-snmp - initial release
- network-fortinet-fortiadc-snmp - initial release
- applications-monitoring-iplabel-ekara-restapi - Initial experimental version

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- network-cisco-meraki-cloudcontroller-restapi - add new cache system
- apps-backup-veeam - add vsb-jobs service
- network-hp-procurve-snmp - add service virtual-chassis
- hardware-pdu-raritan-snmp - add service inlet-sensors
- network-cisco-meraki-cloudcontroller-restapi-plugin - add a variable to autodiscovery attributes
- cloud-microsoft-office365-management - add service app-credentials
- network-watchguard-snmp - add service cluster

</TabItem>
<TabItem value="Fix" label="Fix">

- cloud-azure-compute-virtualmachine - removing option in memory command

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- database-oracle - change threshold options for service rman-backup-problems
- apps-vtom-restapi - use official api

</TabItem>
</Tabs>

### February

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- network-viptela-snmp - initial release
- network-fortinet-fortiadc-snmp - initial release
- applications-monitoring-iplabel-ekara-restapi - Initial experimental version

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- network-cisco-meraki-cloudcontroller-restapi - add new cache system
- apps-backup-veeam - add vsb-jobs service
- network-hp-procurve-snmp - add service virtual-chassis
- hardware-pdu-raritan-snmp - add service inlet-sensors
- network-cisco-meraki-cloudcontroller-restapi-plugin - add a variable to autodiscovery attributes
- cloud-microsoft-office365-management - add service app-credentials
- network-watchguard-snmp - add service cluster

</TabItem>
<TabItem value="Fix" label="Fix">

- cloud-azure-compute-virtualmachine - removing option in memory command

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- database-oracle - change threshold options for service rman-backup-problems
- apps-vtom-restapi - use official api

</TabItem>
</Tabs>

### January

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- cloud-azure-compute-vmscalesets - initial release
- virtualization-hpe-simplivity-restapi - initial release
- network-barracuda-bma-snmp - initial release
- hardware-devices-hikvision-nvr-snmp - initial release
- hardware-servers-dell-omem-snmp - initial release
- network-lenovo-rackswitch-snmp - initial release
- network-fortinet-fortiswitch-snmp - initial release
- cloud-azure-compute-aks - initial release
- applications-redis-sentinel - initial release
- cloud-aws-fsx - add Amazon FSx discovery and monitoring
- network-microsens-g6-snmp - initial release
- network-switch-symbol-wing-snmp initial release
- applications-dynamics-ax-nsclient-05-nrpe initial release
- applications-dynamics-ax-mssql initial release
- applications-dynamics-365-nsclient-05-nrpe initial release

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- network-fortinet-fortigate-snmp - change threshold options 
- cloud-aws-ebs - add host discovery rule
- virtualization-vmware2 - new services coming with vmware connector 3.2.2

</TabItem>
<TabItem value="Fix" label="Fix">

- cloud-azure-network-virtualnetwork - fix resource macro
- hardware-servers-dell-cmc-snmp  - fix host template used
- network-ruckus-scg-snmp - fix cpu command options
- applications-awa-jmx - fixing the filtername macro

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- cloud-microsoft-office365-management - use new microsoft api
- cloud-azure-sqlserver/cloud-azure-sqldatabase - rewrite and extend
- database mssql - change thresholds for backup-age service

</TabItem>
</Tabs>
---
id: release-notes
title: Release Notes
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 2022

### February

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- (new) (garnier-quentin) (pack) network::viptela::snmp - initial release #1032
- (new) (garnier-quentin) (pack) network::fortinet::fortiadc::snmp - initial release #1025
- (new) (thibaults-centreon) (pack) applications-monitoring-iplabel-ekara-restapi - Initial experimental version #1016

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- (enhancement) (garnier-quentin) (pack) network::cisco::meraki::cloudcontroller::restapi - add new cache system #1031
- (enhancement) (garnier-quentin) (pack) apps::backup::veeam - add vsb-jobs service #1027
- (enhancement) (garnier-quentin) (pack) network::hp::procurve::snmp - add service virtual-chassis #1023
- (enhancement) (garnier-quentin) (pack) hardware::pdu::raritan::snmp - add service inlet-sensors #1022
- (enhancement) (lchrdn) (pack) network::cisco::meraki::cloudcontroller::restapi::plugin - add a variable to autodiscovery attributes #1020
- (enhancement) (garnier-quentin) (pack) cloud::microsoft::office365::management - add service app-credentials #1018
- (enhancement) (garnier-quentin) (pack) network::watchguard::snmp - add service cluster #1017

</TabItem>
<TabItem value="Fix" label="Fix">

- (fix) (lchrdn) (pack) cloud::azure::compute::virtualmachine - removing option in memory command #1021

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- (breaking change) (garnier-quentin) (pack) database::oracle - change threshold options for service rman-backup-problems #1024
- (breaking change) (garnier-quentin) (pack) apps::vtom::restapi - use official api #1015

</TabItem>
</Tabs>

### January

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- (new) (lchrdn) (pack) cloud::azure::compute::vmscalesets - initial release #1011
- (new) (garnier-quentin) (pack) virtualization-hpe-simplivity-restapi - initial release #1007
- (new) (garnier-quentin) (pack) network-barracuda-bma-snmp - initial release #1006
- (new) (garnier-quentin) (pack) hardware-devices-hikvision-nvr-snmp - initial release #1005
- (new) (garnier-quentin) (pack) hardware-servers-dell-omem-snmp - initial release #1002
- (new) (garnier-quentin) (pack) network-lenovo-rackswitch-snmp - initial release #1000
- (new) (garnier-quentin) (pack) network-fortinet-fortiswitch-snmp - initial release #999
- (new) (lchrdn) (pack) cloud-azure-compute-aks - initial release #991
- (new) (garnier-quentin) (pack) applications-redis-sentinel - initial release #988
- (new) (Sims24) (pack) cloud-aws-fsx - add Amazon FSx discovery and monitoring #986
- (new) (garnier-quentin) (pack) network-microsens-g6-snmp - initial release #985
- (new) (cedricmeschin) (pack) network-switch-symbol-wing-snmp initial release #976
- (new) (Tpo76) (pack) applications-dynamics-ax-nsclient-05-nrpe initial release #963
- (new) (Tpo76) (pack) applications-dynamics-ax-mssql initial release #962
- (new) (Tpo76) (pack) applications-dynamics-365-nsclient-05-nrpe initial release #961

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- (enhancement) (garnier-quentin) (pack) network::fortinet::fortigate::snmp - change threshold options  #1009
- (enhancement) (cedricmeschin) (pack) cloud-aws-ebs - add host discovery rule #983
- (enhancement) (garnier-quentin) (pack) virtualization-vmware2 - new services coming with vmware connector 3.2.2 #978

</TabItem>
<TabItem value="Fix" label="Fix">

- (fix) (thibaults-centreon) (pack) cloud-azure-network-virtualnetwork - fix resource macro #1003
- (fix) (garnier-quentin) (pack) hardware-servers-dell-cmc-snmp  - fix host template used #1001
- (fix) (garnier-quentin) (pack) network-ruckus-scg-snmp - fix cpu command options #998
- (fix) (itoussies) (pack) applications-awa-jmx - fixing the filtername macro #997

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- (enhancement,breaking change) (garnier-quentin) (pack) cloud::microsoft::office365::management - use new microsoft api #1008
- (enhancement,breaking change) (Sims24) (pack) cloud-azure-sqlserver/cloud-azure-sqldatabase - rewrite and extend #1004
- (enhancement,breaking change) (garnier-quentin) (pack) database mssql - change thresholds for backup-age service #980

</TabItem>
</Tabs>
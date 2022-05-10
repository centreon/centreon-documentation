---
id: release-notes
title: Release Notes
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 2022

### May 

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Protocol CIFS**](../procedures/applications-protocol-cifs.md) - Initial release - Status: stable - centreon-pack-applications-protocol-cifs-22.05.0-1
- [**Protocol SFTP**](../procedures/applications-protocol-sftp.md) - Initial release - Status: stable - centreon-pack-applications-protocol-sftp-22.05.0-1
- [**NtopNG RestAPI**](../procedures/applications-monitoring-ntopng-restapi.md) - Initial release - Status: stable - centreon-pack-applications-monitoring-ntopng-restapi-22.05.0-1

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**IP Fabric API**](../procedures/applications-ipfabric-api.md) - Add new discovery capabilities (aruba, cisco, checkpoint, ...) - Status: stable - centreon-pack-applications-ipfabric-api-22.05.0-1
- [**VMware ESX**](../procedures/virtualization-vmware2-esx.md) - Use custom_attributes in VMWare Discovery providers - Status: stable - centreon-pack-virtualization-vmware2-esx-22.05.0-1
- [**VMware VM**](../procedures/virtualization-vmware2-vm.md) - Use custom_attributes in VMWare Discovery providers - Status: stable - centreon-pack-virtualization-vmware2-vm-22.05.0-1
- [**Generic SNMP**](../procedures/applications-protocol-snmp.md) - Add Cisco ASA support in SNMP discovery providers - Status: stable - centreon-pack-applications-protocol-snmp-22.05.0-1

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Dell Me4 Rest API**](../procedures/hardware-storage-dell-me4-restapi.md) - Fix controller-statistics command options - Status: stable - centreon-pack-hardware-storage-dell-me4-restapi-22.05.0-1
- [**Amazon FSx**](../procedures/cloud-aws-fsx.md) - Fix inverted mapper logic leading to erroneous exclusions - Status: stable - centreon-pack-cloud-aws-fsx-22.05.0-1
- [**Amazon RDS**](../procedures/cloud-aws-rds.md) - Discovery jobs several fixes - Status: stable - centreon-pack-cloud-aws-rds-22.05.0-1
- [**Protocol SSH**](../procedures/applications-protocol-ssh.md) - Fix translation - Status: stable - centreon-pack-applications-protocol-ssh-22.05.0-1
- [**Windows WSMAN**](../procedures/operatingsystems-windows-wsman.md) - Fix typos in command lines options - Status: stable -  centreon-pack-operatingsystems-windows-wsman-22.05.0-1
- [**Linux SSH**](../procedures/operatingsystems-linux-ssh.md) - Adding missing Memory service template - Status: stable - centreon-pack-operatingsystems-linux-ssh-22.05.0-1

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**AWS ELB**](../procedures/cloud-aws-elb.md) - Adding a service disco rule and modify uuid attributes for Network ELB discovery - Status: stable - centreon-pack-cloud-aws-elb-22.05.0-1

</TabItem>
</Tabs>

### April

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- applications-ipfabric - initial release
- cloud-aws-backup - initial release
- virtualization-hyperv-nscp-restapi - initial release
- operatingsystems-windows-wsman - initial release

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- virtualization-nutanix-snmp - Nutanix host discovery & new templates
- network-ruckus-icx - new threshold for memory mode
- network-huawei-snmp - service interfaces add optical options
- network-arista-snmp - change threshold options for memory service
- apps-backup-veeam - add services repositories and licenses
- database-mssql - mode backup-age add thresholds options
- Remove and deprecate old Packs: oracle zfs and alcatel omniswitch

</TabItem>
<TabItem value="Fix" label="Fix">

- network-cisco-meraki-cloudcontroller-restapi - fix host disco attributes
- network-digi-portserverts-snmp - rename Pack
- cloud-aws-ec2 - fixing disco mapper and wrong HTPL STPL association
- network-aruba-standard-snmp - fixing extra space in disco commands
- applications-monitoring-centreon-mbi - MariaDB service name fix
- applications-docker-restapi - node-status mode macros fix
- applications-webservers-nsclient-05 - align pack status with documentation (deprecated)
- applications-webservers-iis-nrpe - align pack status with documentation (deprecated)
- cloud-azure-vmss - Fix azure vmss disco description
- network-symbol-wing-snmp - fix Systems command
- cloud-ibm-softlayer - fix commands options

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- network-oneaccess-snmp - add interfaces service + cells-radio
- storage-netapp-ontap-oncommandapi - refactoring volumes services

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
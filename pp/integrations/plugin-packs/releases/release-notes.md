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

- [**Azure Database for MariaDB**](../procedures/cloud-azure-database-mariadb.md) - Initial release - Status: stable - centreon-pack-cloud-azure-mariadb-api-22.05.0-1
- [**Kadiska Rest API**](../procedures/applications-monitoring-kadiska-restapi.md) - Initial release - Status: stable - centreon-pack-centreon-pack-applications-monitoring-kadiska-restapi-22.05.0-1
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

### Avril

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**IP Fabric API**](../procedures/applications-ipfabric-api.md) - Initial release - Status: stable
- [**Amazon Backup**](../procedures/cloud-aws-backup.md) - Initial release - Status: stable
- [**Hyper-V NSCP API**](../procedures/virtualization-hyperv-nscp-restapi.md) - Initial release - Status: stable
- [**Windows WSMAN**](../procedures/operatingsystems-windows-wsman.md) - Initial release - Status: stable

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Nutanix**](../procedures/virtualization-nutanix-snmp.md) - Nutanix host discovery & new templates - Status: stable
- [**Ruckus ICX SNMP**](../procedures/network-ruckus-icx-snmp.md) - Add new thresholds to Memory service
- [**Huawei SNMP**](../procedures/network-huawei-snmp.md) - Add optical monitoring in interfaces check
- [**Arista SNMP**](../procedures/ network-switchs-arista-snmp.md) - Change threshold options for Memory service
- [**Veeam**](../procedures/applications-veeam-nrpe.md) - Add new services: Repositories and Licenses
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - Add new threshold to Backup-age service

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Cisco Meraki RestAPI**](../procedures/network-cisco-meraki-restapi.md) - Fix host disco attributes
- [**Digi Portserverts SNMP**](../procedures/network-digi-portserverts-snmp.md) - Rename Pack
- [**Amazon EC2**](../procedures/cloud-aws-ec2.md) - Fixing discovery mapper and wrong HTPL/STPL association
- [**Aruba Standard**](../procedures/network-switchs-aruba-standard-snmp.md) - Fixing extra space in disco commands
- [**Centreon MBI**](../procedures/applications-monitoring-centreon-mbi.md) - MariaDB service name fix
- [**Docker RestAPI**](../procedures/applications-docker-restapi.md) - Fix macro in Node-status mode
- [**Microsoft IIS NSClient 0.5**](../procedures/applications-webservers-iis-nsclient-05-restapi.md) - Align pack status with documentation (deprecated)
- [**Microsoft IIS NRPE**](../procedures/applications-webservers-iis-nrpe.md) - Align pack status with documentation (deprecated)
- [**Azure Virtual Machine Scale Sets**](../procedures/cloud-azure-compute-vmscalesets.md) - Fix discovery provider description
- [**Symbol WiNG SNMP**](../procedures/network-switchs-symbol-wing-snmp.md) - Fix Systems command
- [**IBM Softlayer**](../procedures/cloud-ibm-softlayer-api.md) - Fix commands options

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**OneAccess SNMP**](../procedures/network-oneaccess-snmp.md) - Add new services: Interfaces and cells-radio - Status: stable
- [**NetApp Ontap OnCommand API**](../procedures/hardware-storage-netapp-ontap-oncommandapi.md) - Refactoring volumes services - Status: stable

</TabItem>
</Tabs>

### Février

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Viptela SNMP**](../procedures/network-viptela-snmp.md) - Initial release - Status: stable
- [**Fortinet FortiADC SNMP**](../procedures/network-fortinet-fortiadc-snmp.md) - Initial release - Status: stable
- [**IP-Label Ekara Rest API**](../procedures/applications-monitoring-iplabel-ekara-restapi.md) - Initial release - Status: stable

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Cisco Meraki Rest API**](../procedures/network-cisco-meraki-restapi.md) - Add new cache system - Status: stable
- [**Veeam**](../procedures/applications-veeam-nrpe.md) - Add vsb-jobs service - Status: stable
- [**HP Procurve**](../procedures/network-switchs-symbol-wing-snmp.md) - Add service virtual-chassis - Status: stable
- [**Raritan PDU**](../procedures/hardware-pdu-raritan-snmp.md) - Add service inlet-sensors - Status: stable
- [**Cisco Meraki Rest API**](../procedures/network-cisco-meraki-restapi.md) - Add a variable to autodiscovery attributes - Status: stable
- [**Office 365**](../procedures/cloud-microsoft-office365-management.md) - Add service app-credentials - Status: stable
- [**Watchguard**](../procedures/network-watchguard-snmp.md) - Add service cluster - Status: stable

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Azure Virtual Machine**](../procedures/cloud-azure-compute-virtualmachine.md) - Removing option in memory command - Status: stable

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Oracle Database**](../procedures/applications-databases-oracle.md) - Change threshold options for service rman-backup-problems - Status: stable
- [**VTOM Rest API**](../procedures/applications-vtom-restapi.md) - Use official and latest API - Status: stable

</TabItem>
</Tabs>

### Janvier

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Azure Virtual Machine Scale Sets**](../procedures/cloud-azure-compute-vmscalesets.md) - Initial release - Status: stable
- [**HPE Simplivity Rest API**](../procedures/virtualization-hpe-simplivity-restapi.md) - Initial release - Status: stable
- [**Barracuda Message Archiver SNMP**](../procedures/network-barracuda-bma-snmp.md) - Initial release - Status: stable
- [**Hikvision NVR SNMP**](../procedures/hardware-devices-hikvision-nvr-snmp.md) - Initial release - Status: stable
- [**Dell OMEModular SNMP**](../procedures/hardware-servers-dell-omem-snmp.md) - Initial release - Status: stable
- [**Lenovo RackSwitch SNMP**](../procedures/network-lenovo-rackswitch-snmp.md) - Initial release - Status: stable
- [**Fortinet FortiSwitch SNMP**](../procedures/network-fortinet-fortiswitch-snmp.md) - Initial release - Status: stable
- [**Azure Kubernetes Service**](../procedures/cloud-azure-compute-aks.md) - Initial release - Status: stable
- [**Redis Sentinel**](../procedures/applications-redis-sentinel.md) - Initial release - Status: stable
- [**Amazon FSx**](../procedures/cloud-aws-fsx.md) - add Amazon FSx discovery and monitoring
- [**Microsens G6 SNMP**](../procedures/network-microsens-g6-snmp.md) - Initial release - Status: stable
- [**Symbol WiNG SNMP**](../procedures/network-switchs-symbol-wing-snmp.md) - Initial release - Status: stable
- [**Dynamics NSClient**](../procedures/applications-dynamics-ax-nsclient-05-nrpe.md) - Initial release - Status: stable
- [**Dynamics AX Database**] - Initial release - Status: stable
- [**"Dynamics 365**](../procedures/applications-dynamics-365-nsclient-05-nrpe.md) - Initial release - Status: stable

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Fortinet Fortigate**](../procedures/network-firewalls-fortinet-fortigate-snmp.md) - Change threshold options - Status: stable
- [**Amazon EBS**](../procedures/cloud-aws-ebs.md) - Add host discovery rule - Status: stable
- [**VMWare**] - New services coming with VMWare connector 3.2.2 - Status: stable

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Azure Virtual Network**](../procedures/cloud-azure-network-virtualnetwork.md) - Fix resource macro - Status: stable
- [**Dell CMC**](../procedures/hardware-servers-dell-cmc-snmp.md)  - Fix host template used - Status: stable
- [**Ruckus SCG**](../procedures/network-ruckus-scg-snmp.md) - Fix cpu command options - Status: stable
- [**Awa JMX**](../procedures/applications-awa-jmx.md) - Fixing the filtername macro - Status: stable

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Office 365**](../procedures/cloud-microsoft-office365-management.md) - Use new microsoft api - Status: stable
- [**Azure SQL Server**](../procedures/ cloud-azure-database-sqlserver.md) - Rewrite and extend - Status: stable
- [**Azure SQL Database**](../procedures/cloud-azure-database-sqldatabase.md) - Rewrite and extend - Status: stable
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - Change thresholds for Backup-age service - Status: stable

</TabItem>
</Tabs>
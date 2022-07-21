---
id: release-notes
title: Release Notes
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 2022

### Juillet 

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

 - [**Azure Classic Storage**](../procedures/cloud-azure-classicstorage-storageaccount.md) - Add support for both Azure Storage and Classic Storage and add new metrics - Status:stable - centreon-pack-cloud-azure-classicstorage-storageaccount-22.07.0-1
 - [**Azure Storage Account**](../procedures/cloud-azure-storage-storageaccount.md) - Add support for both Azure Storage and Classic Storage and add new metrics - Status:stable - centreon-pack-cloud-azure-storage-storageaccount-22.07.0-1
 - [**Node Exporter Linux Metrics**](../procedures/applications-monitoring-node-exporter-linux.md) - Adding Linux Node Exporter Monitoring Pack - Status:stable - centreon-pack-applications-monitoring-node-exporter-linux-22.07.0-1

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

 - [**AWS Billing**](../procedures/cloud-aws-billing.md) - Moving AWS service discovery to host discovery - Status:stable - centreon-pack-cloud-aws-billing-22.07.0-1
 - [**Linux NRPE3**](../procedures/operatingsystems-linux-nrpe3.md) - Add Ntp command and template to Linux NRPE3 Pack - Status:stable - centreon-pack-operatingsystems-linux-nrpe3-22.07.0-1
 - [**AWS Lambda**](../procedures/cloud-aws-lambda.md) - Add discovery mode/rule for AWS Lambda - Status:stable - centreon-pack-cloud-aws-lambda-22.07.0-1
 - [**Nortel Standard**](../procedures/network-nortel-standard-snmp.md) - network-nortel-standard-snmp - add stack service - Status:stable - centreon-pack-network-nortel-standard-snmp-22.07.0-1
 - [**Amazon SNS**](../procedures/cloud-aws-sns.md) - Migrate AWS SNS & SQS Service Disco to Host Disco - Status:stable - centreon-pack-cloud-aws-sns-22.07.0-1
 - [**Amazon SQS**](../procedures/cloud-aws-sqs.md) - Migrate AWS SNS & SQS Service Disco to Host Disco - Status:stable - centreon-pack-cloud-aws-sqs-22.07.0-1
 - [**Dynatrace Rest API**](../procedures/applications-monitoring-dynatrace-restapi.md) - Enhance Dynatrace Restapi Packs with new services and new metrics - Status:stable - centreon-pack-applications-monitoring-dynatrace-restapi-22.07.0-1
 - [**Nmap CLI**](../procedures/applications-nmap-cli.md) - enh(nmap-disco): add wsman ports - Status:stable - centreon-pack-applications-nmap-cli-22.05.2-1

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

 - [**PostgreSQL**](../procedures/applications-databases-postgresql.md) - Add services bloat and collection to PostgreSQL - Status:stable - centreon-pack-applications-databases-postgresql-22.07.0-1

</TabItem>
<TabItem value="Fix" label="Fix">

 - [**Active Directory WSMAN**](../procedures/applications-active-directory-wsman.md) - Fix typos in Active Directory WSMan commands - Status:stable - centreon-pack-applications-active-directory-wsman-22.06.1-1
 - [**AWS ELB**](../procedures/cloud-aws-elb.md) - Add missing Classic and Applications ELB Discovery rules - Status:stable - centreon-pack-cloud-aws-elb-22.07.0-1
 - [**Azure Database for MySQL**](../procedures/cloud-azure-database-mysql.md) - cloud-azure-database-mysql - Fix typo in serverlog-usage option label - Status:stable - centreon-pack-cloud-azure-database-mysql-22.07.0-1
 - [**Ruckus ICX SNMP**](../procedures/network-ruckus-icx-snmp.md) - Fixing macro in Ruckus ICX Memory service template - Status:stable - centreon-pack-network-ruckus-icx-snmp-22.07.0-1

</TabItem>
</Tabs>

### Juin 

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Speedtest**](../procedures/applications-monitoring-speedtest.md) - Initial release - Status: stable - centreon-pack-applications-monitoring-speedtest-22.06.1-1
- [**Protocol WHOIS**](../procedures/applications-protocol-whois.md) - Initial release - Status: stable - centreon-pack-applications-protocol-whois-22.06.1-1
- [**Microsoft IIS Server WSMAN**](../procedures/applications-iis-wsman.md) - Initial release - Status: stable - centreon-pack-applications-iis-wsman-22.06.0-1
- [**Active Directory WSMAN**](../procedures/applications-active-directory-wsman.md) - Initial release - Status: stable - centreon-pack-applications-active-directory-wsman-22.06.0-1
- [**Ceph RestAPI**](../procedures/applications-ceph-restapi.md) - Initial release - Status: stable - centreon-pack-applications-ceph-restapi-22.06.0-1
- [**Libraesva SNMP**](../procedures/network-libraesva-snmp.md) - Initial release - Status: stable - centreon-pack-network-libraesva-snmp-22.06.0-1
- [**HP StoreOnce 4.x Rest API**](../procedures/hardware-storage-hp-storeonce4-restapi.md) - Initial release - Status: stable - centreon-pack-hardware-storage-hp-storeonce4-restapi-22.06.0-1
- [**Azure Traffic Manager**](../procedures/cloud-azure-network-trafficmanager.md) - Initial release - Status: stable - centreon-pack-cloud-azure-network-trafficmanager-22.06.0-1
- [**Cambium ePMP SNMP**](../procedures/network-cambium-epmp-snmp.md) - Initial release - Status: stable - centreon-pack-network-cambium-epmp-snmp-22.06.0-1

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Azure Discover**](../procedures/cloud-azure-management-discover.md) - New provider scanning all subscriptions for a given tenant and support for Azure KS & VMSS resources discovery - Status: stable - centreon-pack-cloud-azure-management-discover-22.06.1-1
- [**Raisecom**](../procedures/network-raisecom-snmp.md) - Add support for all Raisecom xPON series - Status: stable - centreon-pack-network-raisecom-snmp-22.06.0-1
- [**Linux NRPE3**](../procedures/operatingsystems-linux-nrpe3.md) - Add new check: systemd-sc-status  - Status: stable - centreon-pack-operatingsystems-linux-nrpe3-22.06.0-1
- [**Amazon EFS**](../procedures/cloud-aws-efs.md) - Add a host discovery rule - Status: stable - centreon-pack-cloud-aws-efs-22.05.1-1
- [**Proxmox VE**](../procedures/virtualization-proxmox-ve-restapi.md) - Add a host discovery rule for virtual machines - Status: stable - centreon-pack-virtualization-proxmox-ve-restapi-22.06.1-1
- [**Centreon Central**](../procedures/applications-monitoring-centreon-central.md) - Broker-Stats: support yes/no value in queue file status / Proc-Centengine: avoid wrong match resulting in annoying results - Status: stable - centreon-pack-applications-monitoring-centreon-central-22.05.1-1
- [**Centreon Poller**](../procedures/applications-monitoring-centreon-poller.md) - Broker-Stats: support yes/no value in queue file status / Proc-Centengine: avoid wrong match resulting in annoying results - Status: stable - centreon-pack-applications-monitoring-centreon-poller-22.05.1-1
- [**Stormshield SNMP**](../procedures/network-stormshield-snmp.md) - Add VPN-Status check for latest firmware and add several thresholds - Status: stable - centreon-pack-network-stormshield-snmp-22.06.0-1
- [**HP StoreOnce**](../procedures/hardware-storage-hp-storeonce-restapi.md) - Initial release and original StoreOnce Pack deprecation - Status:deprecated - centreon-pack-hardware-storage-hp-storeonce-restapi-22.06.0-1
- [**HP StoreOnce 3.x Rest API**](../procedures/hardware-storage-hp-storeonce3-restapi.md) - Initial release and original StoreOnce Pack deprecation - Status: stable - centreon-pack-hardware-storage-hp-storeonce3-restapi-22.06.0-1

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Ruckus Smartzone**](../procedures/network-ruckus-smartzone-snmp.md) - Remove extra space in Access Points check command - Status: stable - centreon-pack-network-ruckus-smartzone-snmp-22.06.0-1
- [**OneAccess SNMP**](../procedures/network-oneaccess-snmp.md) - Fix interfaces command options - Status: stable - centreon-pack-network-oneaccess-snmp-22.06.0-1
- [**Amazon EBS**](../procedures/cloud-aws-ebs.md) - Fix wrong mapper name and host template macros - Status: stable - centreon-pack-cloud-aws-ebs-22.06.0-1
- [**Amazon Backup Vault**](../procedures/cloud-aws-backup.md) - Fix Job-Status command and add missing macros - Status: stable - centreon-pack-cloud-aws-backup-22.05.1-1
- [**NtopNG RestAPI**](../procedures/applications-monitoring-ntopng-restapi.md) - Mismatch between template and command regarding host EXTRAOPTIONS - Status: stable - centreon-pack-applications-monitoring-ntopng-restapi-22.06.0-1
- [**Azure Functions**](../procedures/cloud-azure-compute-functions.md) - Fix extra newlines in commands definition causing failures during CLAPI import - Status: stable - centreon-pack-cloud-azure-compute-functions-22.05.0-1
- [**Azure App Service**](../procedures/cloud-azure-web-appservice.md) - Fix extra newlines in commands definition causing failures during CLAPI import - Status: stable - centreon-pack-cloud-azure-web-appservice-22.05.0-1
- [**Amazon RDS**](../procedures/cloud-aws-rds.md) - Support new attributes in host discovery provider - Status: stable - centreon-pack-cloud-aws-rds-22.05.1-1

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Dell N4000**](../procedures/network-dell-n4000.md) - Deprecate n4000, and initial release of nseries - Status:deprecated - centreon-pack-network-dell-n4000-22.06.0-1
- [**Dell N-series SNMP**](../procedures/network-dell-nseries-snmp.md) - Deprecate n4000, and initial release of nseries - Status: stable - centreon-pack-network-dell-nseries-snmp-22.06.0-1
- [**Protocol TCP**](../procedures/applications-protocol-tcp.md) - Rename response-time to Connection-Status and add new service Response-Time - Status: stable - centreon-pack-applications-protocol-tcp-22.06.0-1

</TabItem>
</Tabs>

### Mai

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Azure Database for MariaDB**](../procedures/cloud-azure-database-mariadb.md) - Initial release - Status: stable - centreon-pack-cloud-azure-mariadb-api-22.05.0-1
- [**Kadiska Rest API**](../procedures/applications-monitoring-kadiska-restapi.md) - Initial release - Status: stable - centreon-pack-applications-monitoring-kadiska-restapi-22.05.0-1
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
- [**Arista SNMP**](../procedures/network-switchs-arista-snmp.md) - Change threshold options for Memory service
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
- **Dynamics AX Database** - Initial release - Status: stable
- [**Dynamics 365**](../procedures/applications-dynamics-365-nsclient-05-nrpe.md) - Initial release - Status: stable

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Fortinet Fortigate**](../procedures/network-firewalls-fortinet-fortigate-snmp.md) - Change threshold options - Status: stable
- [**Amazon EBS**](../procedures/cloud-aws-ebs.md) - Add host discovery rule - Status: stable
- **VMWare** - New services coming with VMWare connector 3.2.2 - Status: stable

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Azure Virtual Network**](../procedures/cloud-azure-network-virtualnetwork.md) - Fix resource macro - Status: stable
- [**Dell CMC**](../procedures/hardware-servers-dell-cmc-snmp.md)  - Fix host template used - Status: stable
- [**Ruckus SCG**](../procedures/network-ruckus-scg-snmp.md) - Fix cpu command options - Status: stable
- [**Awa JMX**](../procedures/applications-awa-jmx.md) - Fixing the filtername macro - Status: stable

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Office 365**](../procedures/cloud-microsoft-office365-management.md) - Use new microsoft api - Status: stable
- [**Azure SQL Server**](../procedures/cloud-azure-database-sqlserver.md) - Rewrite and extend - Status: stable
- [**Azure SQL Database**](../procedures/cloud-azure-database-sqldatabase.md) - Rewrite and extend - Status: stable
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - Change thresholds for Backup-age service - Status: stable

</TabItem>
</Tabs>
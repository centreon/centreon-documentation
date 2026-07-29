---
id: release-notes
title: Release Notes
description: "Browse monthly release notes for Centreon Monitoring Connectors, covering new connectors, enhancements, breaking changes, and bug fixes."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 2026

### July

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**EMC Symmetrix CMA**](../procedures/hardware-storage-emc-symmetrix-cma.md) - Initial release.
- [**Waystream SNMP**](../procedures/network-waystream-snmp.md) - Initial release, from a community contribution ([PR 5956](https://github.com/centreon/centreon-plugins/pull/5956)).
- [**Dynamics365 CMA**](../procedures/applications-dynamics-365-cma.md) - Initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**3CX Rest API**](../procedures/applications-voip-3cx-restapi.md) - Added support for versions 20 and above and added **license** mode, based on a [community idea](https://thewatch.centreon.com/ideas/request-to-upgrade-connector-3cx-4418) and community contribution.
- [**APC PDU SNMP**](../procedures/hardware-pdu-apc-snmp.md) - Added native SNMP v3 host macro.
- [**APC UPS SNMP**](../procedures/hardware-ups-apc-snmp.md) - Added native SNMP v3 host macro.
- [**AWS Billing**](../procedures/cloud-aws-billing.md) - Changed host status checks output.
- [**AWS Health**](../procedures/cloud-aws-health.md) - Changed host status checks output.
- [**AWS Lambda**](../procedures/cloud-aws-lambda.md) - Changed host status checks output.
- [**AWS Transit Gateway**](../procedures/cloud-aws-transitgateway.md) - Changed host status checks output.
- [**AWS VPN**](../procedures/cloud-aws-vpn.md) - Changed host status checks output.
- [**Amazon API Gateway**](../procedures/cloud-aws-apigateway.md) - Changed host status checks output.
- [**Amazon Backup Vault**](../procedures/cloud-aws-backup.md) - Changed host status checks output.
- [**Amazon CloudFront**](../procedures/cloud-aws-cloudfront.md) - Changed host status checks output.
- [**Amazon CloudTrail**](../procedures/cloud-aws-cloudtrail.md) - Changed host status checks output.
- [**Amazon CloudWatch Logs**](../procedures/cloud-aws-cloudwatchlogs.md) - Changed host status checks output.
- [**Amazon CloudWatch**](../procedures/cloud-aws-cloudwatch.md) - Changed host status checks output.
- [**Amazon Direct Connect**](../procedures/cloud-aws-directconnect.md) - Changed host status checks output.
- [**Amazon EBS**](../procedures/cloud-aws-ebs.md) - Changed host status checks output.
- [**Amazon EC2**](../procedures/cloud-aws-ec2.md) - Changed host status checks output.
- [**Amazon EFS**](../procedures/cloud-aws-efs.md) - Changed host status checks output.
- [**Amazon ElastiCache**](../procedures/cloud-aws-elasticache.md) - Changed host status checks output.
- [**Amazon FSx**](../procedures/cloud-aws-fsx.md) - Changed host status checks output.
- [**Amazon Kinesis**](../procedures/cloud-aws-kinesis.md) - Changed host status checks output.
- [**Amazon RDS**](../procedures/cloud-aws-rds.md) - Changed host status checks output.
- [**Amazon S3**](../procedures/cloud-aws-s3.md) - Changed host status checks output.
- [**Amazon SES**](../procedures/cloud-aws-ses.md) - Changed host status checks output.
- [**Amazon SNS**](../procedures/cloud-aws-sns.md) - Changed host status checks output.
- [**Amazon SQS**](../procedures/cloud-aws-sqs.md) - Changed host status checks output.
- [**Aruba Instant SNMP**](../procedures/network-aruba-instant-snmp.md) - Added native SNMP v3 host macro.
- [**Aruba Standard SNMP**](../procedures/network-switchs-aruba-standard-snmp.md) - Added native SNMP v3 host macro.
- [**ArubaOS-CX SNMP**](../procedures/network-aruba-aoscx-snmp.md) - Added native SNMP v3 host macro.
- [**Azure App Service Plan**](../procedures/cloud-azure-web-appserviceplan.md) - Changed host status checks output.
- [**Azure App Service**](../procedures/cloud-azure-web-appservice.md) - Changed host status checks output.
- [**Azure Application Gateway**](../procedures/cloud-azure-network-appgateway.md) - Changed host status checks output.
- [**Azure Cache for Redis**](../procedures/cloud-azure-database-redis.md) - Changed host status checks output.
- [**Azure Classic Storage**](../procedures/cloud-azure-classicstorage-storageaccount.md) - Changed host status checks output.
- [**Azure Cosmos DB**](../procedures/cloud-azure-database-cosmosdb.md) - Changed host status checks output.
- [**Azure Event Hubs**](../procedures/cloud-azure-analytics-eventhubs.md) - Changed host status checks output.
- [**Azure ExpressRoute**](../procedures/cloud-azure-network-expressroute.md) - Changed host status checks output.
- [**Azure Firewall**](../procedures/cloud-azure-network-firewall.md) - Changed host status checks output.
- [**Azure Front Door**](../procedures/cloud-azure-network-frontdoor.md) - Changed host status checks output.
- [**Azure Functions**](../procedures/cloud-azure-compute-functions.md) - Changed host status checks output.
- [**Azure Kubernetes Service**](../procedures/cloud-azure-compute-aks.md) - Changed host status checks output.
- [**Azure Policies States**](../procedures/cloud-azure-policyinsights-policystates.md) - Changed host status checks output.
- [**Azure Public IP**](../procedures/cloud-azure-network-publicip.md) - Changed host status checks output.
- [**Azure SQL Database**](../procedures/cloud-azure-database-sqldatabase.md) - Changed host status checks output.
- [**Azure SQL Managed Instance**](../procedures/cloud-azure-database-sqlmanagedinstance.md) - Changed host status checks output.
- [**Azure SQL Server**](../procedures/cloud-azure-database-sqlserver.md) - Changed host status checks output.
- [**Azure Storage Account**](../procedures/cloud-azure-storage-storageaccount.md) - Changed host status checks output.
- [**Azure Storage Sync**](../procedures/cloud-azure-storage-storagesync.md) - Changed host status checks output.
- [**Azure Traffic Manager**](../procedures/cloud-azure-network-trafficmanager.md) - Changed host status checks output.
- [**Azure VPN Gateway**](../procedures/cloud-azure-network-vpngateway.md) - Changed host status checks output.
- [**Azure Virtual Machine Scale Sets**](../procedures/cloud-azure-compute-vmscalesets.md) - Changed host status checks output.
- [**Azure Virtual Machine**](../procedures/cloud-azure-compute-virtualmachine.md) - Changed host status checks output.
- [**Azure Virtual Network**](../procedures/cloud-azure-network-virtualnetwork.md) - Changed host status checks output.
- [**Brocade Switch SNMP**](../procedures/network-switchs-brocade-snmp.md) - Added native SNMP v3 host macro.
- [**Cisco ASA SNMP**](../procedures/network-firewalls-cisco-asa-snmp.md) - Added native SNMP v3 host macro.
- [**Cisco Meraki Rest API**](../procedures/network-cisco-meraki-restapi.md) - Added MRxx devices handling.
- [**Cisco Meraki SNMP**](../procedures/network-cisco-meraki-snmp.md) - Added native SNMP v3 host macro.
- [**Cisco Small Business SNMP**](../procedures/network-switchs-cisco-smallbusiness-standard-snmp.md) - Added native SNMP v3 host macro.
- [**Cisco WLC SNMP**](../procedures/network-cisco-wlc-snmp.md) - Added native SNMP v3 host macro.
- [**F5OS SNMP**](../procedures/operatingsystems-f5os-snmp.md) - Added support for new devices for temperature metrics.
- [**Fortinet Fortimanager SNMP**](../procedures/network-fortinet-fortimanager-snmp.md) - Added native SNMP v3 host macro.
- [**HP Proliant SNMP**](../procedures/hardware-servers-hp-snmp.md) - Added native SNMP v3 host macro.
- [**Microsoft DHCP SNMP**](../procedures/applications-microsoft-dhcp-snmp.md) - Added native SNMP v3 host macro.
- [**Mobotix Camera SNMP**](../procedures/hardware-devices-camera-mobotix-snmp.md) - Enhanced **system** mode with SD card availability checks.
- [**Oracle Database**](../procedures/applications-databases-oracle.md) - Added RMAN Catalog support.
- [**Palo Alto firewall API**](../procedures/network-firewalls-paloalto-standard-api.md) - Added **certificates** and **health** modes and host discovery to handle Panorama.
- [**Powerware UPS SNMP**](../procedures/hardware-ups-powerware-snmp.md) - Added native SNMP v3 host macro.
- [**Proxmox VE**](../procedures/virtualization-proxmox-ve-restapi.md) - Added tags to host discovery, from a [community idea](https://thewatch.centreon.com/ideas/proxmox-ve-tags-support-5602).
- [**Qnap SNMP**](../procedures/hardware-storage-qnap-snmp.md) - Added native SNMP v3 host macro.
- [**Stormshield SNMP**](../procedures/network-stormshield-snmp.md) - Added native SNMP v3 host macro.
- [**Ubiquiti UniFi SNMP**](../procedures/network-ubiquiti-unifi-snmp.md) - Added native SNMP v3 host macro.
- [**VMware8 VM REST API**](../procedures/applications-virtualization-vmware8-vm-restapi.md) - Added tags to host discovery.
- [**Veeam CMA**](../procedures/applications-veeam-centreon-monitoring-agent.md) - Enhanced message displayed when using wrong powershell version with veeam 13.
- [**Veeam NRPE**](../procedures/applications-veeam-nrpe.md) - Enhanced message displayed when using wrong powershell version with veeam 13.
- [**Veeam NSClient API**](../procedures/applications-veeam-nsclient-05-restapi.md) - Enhanced message displayed when using wrong powershell version with veeam 13.
- [**Veeam WSMAN**](../procedures/applications-veeam-wsman.md) - Enhanced message displayed when using wrong powershell version with veeam 13.
- [**Windows CMA**](../procedures/operatingsystems-windows-centreon-monitoring-agent.md) - Added timeout macro to all native CMA checks.
- [**Windows WSMAN**](../procedures/operatingsystems-windows-wsman.md) - Improved `gssnegotiate` authentication support.
- [**pfSense SNMP**](../procedures/network-firewalls-pfsense-snmp.md) - Added native SNMP v3 host macro.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Cisco Meraki Rest API**](../procedures/network-cisco-meraki-restapi.md) - Fixed the `devices.total.online.count` counter.
- [**Commvault Commserve Rest API**](../procedures/applications-commvault-commserve-restapi.md) - Fixed a token expiration issue.
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - Fixed a bad query issue revealed by a previous fix.
- [**Proxmox VE**](../procedures/virtualization-proxmox-ve-restapi.md) - Fixed authentication failures and caching issues.
- [**Rubrik Security Cloud GraphQL API**](../procedures/applications-rubrik-graphql.md) - Fixed display of job details in long output in **jobs** mode.
- [**VMware8 vCenter REST API**](../procedures/applications-virtualization-vmware8-vcenter-restapi.md) - Removed 4000 VMs limit for `vm-count` counter.
- [**Veeam CMA**](../procedures/applications-veeam-centreon-monitoring-agent.md) - Fixed Veeam job retrieval in **job-status** mode.
- [**Veeam NRPE**](../procedures/applications-veeam-nrpe.md) - Fixed Veeam job retrieval in **job-status** mode.
- [**Veeam NSClient API**](../procedures/applications-veeam-nsclient-05-restapi.md) - Fixed Veeam job retrieval in **job-status** mode.
- [**Veeam WSMAN**](../procedures/applications-veeam-wsman.md) - Fixed Veeam job retrieval in **job-status** mode.
- [**Windows CMA**](../procedures/operatingsystems-windows-centreon-monitoring-agent.md) - Fixed `CRITICALSTATUS` macro default value.

</TabItem>
</Tabs>

### June

> **Warning important information :** [**Nmap CLI**](../procedures/applications-nmap-cli.md) - `nmap` does not install automatically anymore.

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Centreon Log Management Rest API**](../procedures/applications-monitoring-centreon-clm-restapi.md) - Initial release.
- [**OpenShift API**](../procedures/cloud-openshift-api.md) - Initial release.
- [**Symantec Netbackup CMA**](../procedures/applications-netbackup-cma.md) - Initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Azure API Management**](../procedures/cloud-azure-management-apimanagement.md) - Changed host status checks output.
- [**Azure App Configuration**](../procedures/cloud-azure-devtools-appconfiguration.md) - Changed host status checks output.
- [**Azure Automation**](../procedures/cloud-azure-management-automation.md) - Changed host status checks output.
- [**Azure CDN**](../procedures/cloud-azure-network-cdn.md) - Changed host status checks output.
- [**Azure Container Registry**](../procedures/cloud-azure-storage-acr.md) - Changed host status checks output.
- [**Azure Database for MariaDB**](../procedures/cloud-azure-database-mariadb.md) - Changed host status checks output.
- [**Azure Database for MySQL**](../procedures/cloud-azure-database-mysql.md) - Changed host status checks output.
- [**Azure Database for PostgreSQL**](../procedures/cloud-azure-database-postgresql.md) - Changed host status checks output.
- [**Azure Elastic Pool**](../procedures/cloud-azure-database-elasticpool.md) - Changed host status checks output.
- [**Azure Event Grid**](../procedures/cloud-azure-integration-eventgrid.md) - Changed host status checks output.
- [**Azure InsightsMetrics**](../procedures/cloud-azure-management-insightsmetrics.md) - Changed host status checks output.
- [**Azure Key Vault**](../procedures/cloud-azure-security-keyvault.md) - Changed host status checks output.
- [**Azure Log Analytics**](../procedures/cloud-azure-management-loganalytics.md) - Changed host status checks output.
- [**Azure Network Interface**](../procedures/cloud-azure-network-networkinterface.md) - Changed host status checks output.
- [**Azure SQL Database**](../procedures/cloud-azure-database-sqldatabase.md) - Updated help section on **storage** mode.
- [**Azure ServiceBus**](../procedures/cloud-azure-integration-servicebus.md) - Changed host status checks output.
- [**Azure SignalR**](../procedures/cloud-azure-web-signalr.md) - Changed host status checks output.
- [**Cisco Standard SNMP**](../procedures/network-cisco-standard-snmp.md) - Added native SNMP v3 host macro.
- [**Dell iDRAC SNMP**](../procedures/hardware-servers-dell-idrac-snmp.md) - Added native SNMP v3 host macro.
- [**Fortinet Fortigate SNMP**](../procedures/network-firewalls-fortinet-fortigate-snmp.md) - Added native SNMP v3 host macro.
- [**FreeBSD SNMP**](../procedures/operatingsystems-freebsd-snmp.md) - Added native SNMP v3 host macro.
- [**Generic SNMP**](../procedures/applications-protocol-snmp.md) - Added service template for **response-time** mode and added native SNMP v3 host macro.
- [**HP MSL SNMP**](../procedures/hardware-storage-hp-msl-snmp.md) - Added native SNMP v3 host macro.
- [**HP Procurve SNMP**](../procedures/network-switchs-hp-procurve-snmp.md) - Added native SNMP v3 host macro.
- [**HP Standard Network SNMP**](../procedures/network-hp-standard-snmp.md) - Added native SNMP v3 host macro.
- [**HP-UX SNMP**](../procedures/operatingsystems-hpux-snmp.md) - Added native SNMP v3 host macro.
- [**Kairos SNMP**](../procedures/network-kairos-snmp.md) - Added native SNMP v3 host macro.
- [**Kubernetes API**](../procedures/cloud-kubernetes-api.md) - Added **ResourceQuota-Status** service and enhanced **Deployment-Status** service with label filter, based on a community contribution [PR 5812](https://github.com/centreon/centreon-plugins/pull/5812).
- [**Linux SNMP v3**](../procedures/operatingsystems-linux-snmpv3.md) - Deprecated with the enhancement of [**Linux SNMP**](../procedures/operatingsystems-linux-snmp.md).
- [**Linux SNMP**](../procedures/operatingsystems-linux-snmp.md) - Added native SNMP v3 host macro.
- [**Mac SNMP**](../procedures/operatingsystems-mac-snmp.md) - Added native SNMP v3 host macro.
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - Enhanced status threshold for **failed-jobs** mode.
- [**Mrv Optiswitch SNMP**](../procedures/network-switchs-mrv-optiswitch-snmp.md) - Added native SNMP v3 host macro.
- [**NetApp Ontap SNMP**](../procedures/hardware-storage-netapp-ontap-snmp.md) - Added native SNMP v3 host macro.
- [**Nmap CLI**](../procedures/applications-nmap-cli.md) - `nmap` does not install automatically anymore.
- [**Opengear SNMP**](../procedures/network-opengear-snmp.md) - Added CM8100 series compatibility.
- [**Palo Alto firewall SNMP**](../procedures/network-firewalls-paloalto-standard-snmp.md) - Added native SNMP v3 host macro.
- [**Printer standard SNMP**](../procedures/hardware-printers-standard-rfc3805-snmp.md) - Added native SNMP v3 host macro.
- [**RedBack Router SNMP**](../procedures/network-routers-redback-snmp.md) - Added native SNMP v3 host macro.
- [**Rubrik Security Cloud GraphQL API**](../procedures/applications-rubrik-graphql.md) - Added **SLA Unprotected** service and misc enhancements.
- [**Silverpeak SNMP**](../procedures/network-silverpeak-snmp.md) - Added native SNMP v3 host macro.
- [**Sonicwall SNMP**](../procedures/network-firewalls-sonicwall-snmp.md) - Added native SNMP v3 host macro.
- [**Stonesoft SNMP**](../procedures/network-firewalls-stonesoft.md) - Added native SNMP v3 host macro.
- [**Synology SNMP**](../procedures/hardware-storage-synology-snmp.md) - Added native SNMP v3 host macro.
- [**Thales Mistral VS9 Rest API**](../procedures/applications-thales-mistral-vs9-restapi.md) - Added support for API version 9.2.4.18.
- [**UPS Standard**](../procedures/hardware-ups-standard-rfc1628-snmp.md) - Added native SNMP v3 host macro.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Dynamics AX NSClient 0.5 NRPE**](../procedures/applications-dynamics-ax-nsclient-05-nrpe.md) - Replaced `check_centreon_nrpe3` with `check_nrpe`.
- [**Dynamics365 NSClient 0.5 NRPE**](../procedures/applications-dynamics-365-nsclient-05-nrpe.md) - Replaced `check_centreon_nrpe3` with `check_nrpe`.
- [**EMC Symmetrix NRPE**](../procedures/hardware-storage-emc-symmetrix-nrpe.md) - Replaced `check_centreon_nrpe3` with `check_nrpe`.
- [**Hyper-V 2012 NRPE**](../procedures/virtualization-hyperv-2012-nrpe.md) - Replaced `check_centreon_nrpe3` with `check_nrpe`.
- [**Microsoft Exchange NSClient NRPE**](../procedures/applications-exchange-nrpe.md) - Replaced `check_centreon_nrpe3` with `check_nrpe`.
- [**Microsoft SCCM NSClient**](../procedures/applications-sccm-nsclient.md) - Replaced `check_centreon_nrpe3` with `check_nrpe`.
- [**Microsoft WSUS NSClient**](../procedures/applications-wsus-nsclient.md) - Replaced `check_centreon_nrpe3` with `check_nrpe`.
- [**Quadstor NRPE**](../procedures/applications-quadstor-nrpe.md) - Replaced `check_centreon_nrpe3` with `check_nrpe`.
- [**Symantec Netbackup NRPE**](../procedures/applications-netbackup-nrpe.md) - Replaced `check_centreon_nrpe3` with `check_nrpe`.
- [**Veeam NRPE**](../procedures/applications-veeam-nrpe.md) - Replaced `check_centreon_nrpe3` with `check_nrpe`.
- [**Windows NSClient 0.5 NRPE**](../procedures/operatingsystems-windows-nsclient-05-nrpe.md) - Replaced `check_centreon_nrpe3` with `check_nrpe`.
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - Added new filtering and threshold options 

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Commvault Commserve Rest API**](../procedures/applications-commvault-commserve-restapi.md) - Fixed issues related to tokens in commands and removed undefined ARRAY value if no jobs have been sent in **jobs** mode.
- [**Fritz!Box UPnP**](../procedures/network-fritzbox-upnp.md) - Fixed **system** mode status thresholds.
- [**HashiCorp Vault Rest API**](../procedures/applications-hashicorp-vault-restapi.md) - Fixed handling of `--insecure` option.
- [**IBM AS400 Connector**](../procedures/operatingsystems-as400-connector.md) - Fixed daemon CVEs related to Log4j.
- [**Phoenixtec UPS SNMP**](../procedures/hardware-ups-phoenixtec-snmp.md) - Removed thresholds for non-existent counters in --help section.
- [**Powerware UPS SNMP**](../procedures/hardware-ups-powerware-snmp.md) - Fixed the output when the plugin does not detect the absence of an input line in **input-lines** mode.
- [**Veritas Backup Exec NSCP API**](../procedures/applications-backupexec-nscp-restapi.md) - Fixed discovery macro command.

</TabItem>
</Tabs>

### May

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**MessPC Ehternetbox SNMP**](../procedures/hardware-sensors-messpc-ethernetbox-snmp.md) - Initial release, based on community contribution [PR 6044](https://github.com/centreon/centreon-plugins/pull/6044).
- [**Rubrik Security Cloud GraphQL API**](../procedures/applications-rubrik-graphql.md) - Initial release.
- [**Westermo Standard SNMP**](../procedures/network-westermo-standard-snmp.md) - Initial release, based on community contribution [PR 5696](https://github.com/centreon/centreon-plugins/pull/5696).

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Centreon Central**](../procedures/applications-monitoring-centreon-central.md) - added centreonvault support to **metaservice** mode.
- [**Cisco Standard SNMP**](../procedures/network-cisco-standard-snmp.md) - added MAC address normalization in **vpc** mode.
- [**HTTP Server**](../procedures/applications-protocol-http.md) - added boolean2integer function to **collection** mode  based on community contribution [PR 5218](https://github.com/centreon/centreon-plugins/pull/5218).
- [**Huawei Standard SNMP**](../procedures/network-huawei-snmp.md) - added a way to handle missing fans in **hardware** mode.
- [**Kubernetes API**](../procedures/cloud-kubernetes-api.md) - added `include-status` and `exclude-status` options in **node-usage** mode.
- [**Linux CMA**](../procedures/operatingsystems-linux-centreon-monitoring-agent.md) -  added EL 10 and Debian 13 support.
- [**Linux NRPE4**](../procedures/operatingsystems-linux-nrpe4.md) - added EL10 and Debian13 prerequisites.
- Vmware connector plugin - added filtering in **stat-connectors** mode based on community contribution [PR 55143](https://github.com/centreon/centreon-plugins/pull/5143).

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Centreon MBI**](../procedures/applications-monitoring-centreon-mbi.md) - changed default values for `NRPEEXTRAOPTIONS` and `NRPECLIENT`.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Amazon CloudWatch Logs**](../procedures/cloud-aws-cloudwatchlogs.md) - fixed issues with perl paws custom mode.
- [**Amazon FSx**](../procedures/cloud-aws-fsx.md) - changed `FILESYSTEM` host macro to `AWSFILESYSTEM`.
- [**Cisco DNA Center Rest API**](../procedures/applications-cisco-dnac-restapi.md) - fixed wrong api-password macro in commands.
- [**Docker**](../procedures/applications-docker-restapi.md) - fixed memory usage calculation in **container-usage** mode.
- [**F5 BigIP**](../procedures/network-loadbalancers-f5-bigip-snmp.md) - fixed unknown status returned if no trunk was configured in **trunks** mode.
- [**HAProxy Web**](../procedures/applications-haproxy-web.md) - added missing `--credentials` option.
- Opentickets API -  the notification plugin now handles HTTP timeout.
- [**VMware ESX**](../procedures/virtualization-vmware2-esx.md) - fixed host macro `ESXNAME` default value.
- [**VMware8 ESX REST API**](../procedures/application-virtualization-vmware8-esx-restapi.md) - plugin can now recover from a corrupted cache.
- [**VMware8 VM REST API**](../procedures/applications-virtualization-vmware8-vm-restapi.md) - plugin can now recover from a corrupted cache.
- [**VMware8 vCenter REST API**](../procedures/applications-virtualization-vmware8-vcenter-restapi.md) - plugin can now recover from a corrupted cache.
- [**Veeam CMA**](../procedures/applications-veeam-centreon-monitoring-agent.md) - fixed warnings about uninitialized values in **job-status** mode.
- [**Veeam NRPE**](../procedures/applications-veeam-nrpe.md) - fixed warnings about uninitialized values in **job-status** mode.
- [**Veeam NSClient API**](../procedures/applications-veeam-nsclient-05-restapi.md) - fixed warnings about uninitialized values in **job-status** mode.

</TabItem>
</Tabs>

### April

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Hitachi E Series CMA**](../procedures/hardware-storage-hitachi-eseries-cma.md) - Initial release.
- [**Linux Libvirt SSH**](../procedures/virtualization-linux-libvirt-ssh.md) - Initial release.
- [**Palo Alto firewall API**](../procedures/network-firewalls-paloalto-standard-api.md) - Initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**AIX SNMP**](../procedures/operatingsystems-aix-snmp.md) - Handled unanticipated hrSWRunStatus in **processcount** mode (issue [#4925](https://github.com/centreon/centreon-plugins/issues/4925)).
- [**AWS Discover**](../procedures/cloud-aws-cloudwatch-discover.md) - Combined two filters in **listmetrics** mode, from community contribution (PR [#4743](https://github.com/centreon/centreon-plugins/pull/4743)).
- [**Amazon API Gateway**](../procedures/cloud-aws-apigateway.md) - Added possibility to change the instance dimension, based on community contribution (PR [#4843](https://github.com/centreon/centreon-plugins/pull/4843)).
- [**Amazon CloudWatch**](../procedures/cloud-aws-cloudwatch.md) - Combined two filters in **listmetrics** mode, from community contribution (PR [#4743](https://github.com/centreon/centreon-plugins/pull/4743)).
- [**Arkoon SNMP**](../procedures/network-firewalls-arkoon-snmp.md) - Handled unanticipated hrSWRunStatus in **processcount** mode (issue [#4925](https://github.com/centreon/centreon-plugins/issues/4925)).
- [**Aruba Standard SNMP**](../procedures/network-switchs-aruba-standard-snmp.md) - **License** mode now handles new status ES, from community contribution (PR [#5922](https://github.com/centreon/centreon-plugins/pull/5922)).
- [**Dell Me4 Rest API**](../procedures/hardware-storage-dell-me4-restapi.md) - Enhanced compatibility with Dell SAN for **interfaces** mode, based on community contribution (PR [#5912](https://github.com/centreon/centreon-plugins/pull/5912)).
- [**Fortinet Fortigate SNMP**](../procedures/network-firewalls-fortinet-fortigate-snmp.md) - Added option in **sdwan** mode to filter by interface name (from a [The Watch idea](https://thewatch.centreon.com/ideas/plugin-network-fortinet-fortigate-snmp-plugin-mode-sdwan-interface-filter-3023)). Handled more than one VPN phase 2 connection status in **vpn** mode (issue [#4337](https://github.com/centreon/centreon-plugins/issues/4337)). Added service discovery for **sdwan** (based on a [The Watch idea](https://thewatch.centreon.com/ideas/fortigate-s-sdwan-service-discovery-5071)) and **vpn** modes (based on a [The Watch idea](https://thewatch.centreon.com/ideas/network-fortinet-fortigate-snmp-plugin-mode-vpn-service-discovery-3910)).
- [**FreeBSD SNMP**](../procedures/operatingsystems-freebsd-snmp.md) - Handled unanticipated hrSWRunStatus in **processcount** mode (issue [#4925](https://github.com/centreon/centreon-plugins/issues/4925)).
- [**HTTP Server**](../procedures/applications-protocol-http.md) - Handled nested json path in **collection** mode (issue [#5118](https://github.com/centreon/centreon-plugins/issues/5118) & [The Watch issue](https://thewatch.centreon.com/infra-monitoring-data-collection-6/http-data-collection-path-depth-3639)).
- [**Huawei Standard SNMP**](../procedures/network-huawei-snmp.md) - Extended Huawei network devices with GPON ONT module monitoring, from community contribution (PR [#5675](https://github.com/centreon/centreon-plugins/pull/5675)).
- [**JBoss Server**](../procedures/applications-jboss-jmx.md) - Added service discovery rule for Datasources.
- [**Linux SNMP v3**](../procedures/operatingsystems-linux-snmpv3.md) - Added `--force-rfc` option to allow choosing a specific RFC in **tcpcon** mode (issue [#5693](https://github.com/centreon/centreon-plugins/issues/5693)).
- [**Linux SNMP**](../procedures/operatingsystems-linux-snmp.md) - Added `--force-rfc` option to allow choosing a specific RFC in **tcpcon** mode (issue [#5693](https://github.com/centreon/centreon-plugins/issues/5693)).
- [**Mac SNMP**](../procedures/operatingsystems-mac-snmp.md) - Handled unanticipated hrSWRunStatus in **processcount** mode (issue [#4925](https://github.com/centreon/centreon-plugins/issues/4925)).
- [**PVX**](../procedures/applications-pvx-restapi.md) - Authentication to API now requires a bearer header.
- [**Qnap**](../procedures/hardware-storage-qnap-snmp.md) - Handled unanticipated hrSWRunStatus in **processcount** mode (issue [#4925](https://github.com/centreon/centreon-plugins/issues/4925)).
- [**Rubrik Rest API**](../procedures/applications-rubrik-restapi.md) - Improved cache naming and **job** mode filtering, from a [The Watch idea](https://thewatch.centreon.com/ideas/code-optimization-for-mode-apps-backup-rubrik-restapi-mode-jobs-4911) (issue [#5865](https://github.com/centreon/centreon-plugins/issues/5865)).
- [**Solaris SNMP**](../procedures/operatingsystems-solaris-snmp.md) - Handled unanticipated hrSWRunStatus in **processcount** mode (issue [#4925](https://github.com/centreon/centreon-plugins/issues/4925)).
- [**Windows SNMP**](../procedures/operatingsystems-windows-snmp.md) - Handled unanticipated hrSWRunStatus in **processcount** mode (issue [#4925](https://github.com/centreon/centreon-plugins/issues/4925)).
- Enhanced debugging of CLI plugins.
- Improved NTP offset options documentation.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Zscaler ZDX Api**](../procedures/applications-monitoring-zscaler-zdx-api.md) - The former authentication method is no longer supported. Only OneAPI is now supported.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Activemq JMX**](../procedures/applications-activemq-jmx.md) - Fixed the plugin dependencies.
- [**Amazon CloudWatch**](../procedures/cloud-aws-cloudwatch.md) - Fixed **get-alarms** mode to handle multiple alarms (issue [#5731](https://github.com/centreon/centreon-plugins/issues/5731)).
- [**Awa JMX**](../procedures/applications-awa-jmx.md) - Fixed the plugin dependencies.
- [**Cassandra**](../procedures/applications-databases-cassandra-jmx.md) - Fixed the plugin dependencies.
- [**Exagrid SNMP**](../procedures/hardware-storage-exagrid-snmp.md) - Fixed landing_used calculation to prevent negative values in **server-usage** mode, from community contribution (PR [#5863](https://github.com/centreon/centreon-plugins/pull/5863)).
- [**Hibernate**](../procedures/applications-hibernate-jmx.md) - Fixed the plugin dependencies.
- [**HP Ilo XMLAPI**](../procedures/hardware-servers-hp-ilo-xmlapi.md) - Fixed ILO3 incorrect temperature thresholds in **hardware** mode.
- [**IBM AS400 Connector**](../procedures/operatingsystems-as400-connector.md) - Handled exceptions in refresh.
- [**IP-Label Ekara Rest API**](../procedures/applications-monitoring-iplabel-ekara-restapi.md) - Fixed host discovery macros (based on a community feedback on [The Watch](https://thewatch.centreon.com/infra-monitoring-product-how-to-21/tutorial-connect-centreon-with-ekara-by-ip-label-to-track-users-digital-experience-and-infrastructure-and-applications-health-736)).
- [**JBoss Server**](../procedures/applications-jboss-jmx.md) - Fixed the plugin dependencies.
- [**JMX value**](../procedures/applications-protocol-jmx.md) - Fixed the plugin dependencies.
- [**JVM JMX**](../procedures/applications-jvm-jmx.md) - Fixed the plugin dependencies.
- [**Kafka**](../procedures/applications-kafka-jmx.md) - Fixed the plugin dependencies.
- [**Linux SSH**](../procedures/operatingsystems-linux-ssh.md) - Fixed sudoers file.
- [**NetApp Ontap Rest API**](../procedures/hardware-storage-netapp-ontap-restapi.md) - Fixed latency values in **cluster** mode (issue [#5929](https://github.com/centreon/centreon-plugins/issues/5929)).
- [**Oracle UCP JMX**](../procedures/applications-oracle-ucp-jmx.md) - Fixed the plugin dependencies.
- [**Peoplesoft**](../procedures/applications-peoplesoft-jmx.md) - Fixed the plugin dependencies.
- [**Redis Database**](../procedures/applications-databases-redis.md) - Fixed an issue leading to a returned value of more than 1000 % in **cpu** mode  (issue [#4311](https://github.com/centreon/centreon-plugins/issues/4311)).
- [**Solr**](../procedures/applications-solr-jmx.md) - Fixed the plugin dependencies.
- [**Tomcat JMX**](../procedures/applications-webservers-tomcat-jmx.md) - Fixed the plugin dependencies.
- [**Veeam CMA**](../procedures/applications-veeam-centreon-monitoring-agent.md) - Fixed a regression causing an "Undefined subroutine" error.
- [**Veeam NSClient API**](../procedures/applications-veeam-nsclient-05-restapi.md) - Fixed a regression causing an "Undefined subroutine" error.
- [**Veeam NRPE**](../procedures/applications-veeam-nrpe.md) - Fixed a regression causing an "Undefined subroutine" error.
- [**Weblogic Server**](../procedures/applications-weblogic-jmx.md) - Fixed the plugin dependencies.
- [**Zookeeper**](../procedures/applications-zookeeper-jmx.md) - Fixed the plugin dependencies.

</TabItem>
</Tabs>

### March

> **Warning:**  As you may notice, almost all monitoring connectors will appear as updated in the Monitoring Connector Manager.
> Most of them have been reissued for technical reasons. If you do not find them in the tabs below, there will be no changes except that the required plugin version will be available for Debian 13 and EL10 to prepare the future availability of Centreon on these platforms.
> Also notice that Monitoring Connectors for EL7 will be archived soon since this platform is no longer supported.

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Aviat Networks SNMP**](../procedures/network-aviat-snmp.md) - Initial release.
- [**Kairos SNMP**](../procedures/network-kairos-snmp.md) - Initial release.
- [**Veeam ONE Rest API**](../procedures/applications-veeam-vone-restapi.md) - Initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**HAProxy SNMP**](../procedures/applications-haproxy-snmp.md) - Allow compatibility with version 17 OIDs.
- [**Linux SSH**](../procedures/operatingsystems-linux-ssh.md) - Added the number and percent of open files per process in process mode.
- [**Veeam Backup Enterprise Manager Rest API**](../procedures/applications-veeam-vbem-restapi.md) - Allow compatibility with version 13.
- [**Veeam CMA**](../procedures/applications-veeam-centreon-monitoring-agent.md) - Allow compatibility with version 13.
- [**Veeam NRPE**](../procedures/applications-veeam-nrpe.md) - Allow compatibility with version 13.
- [**Veeam NSClient API**](../procedures/applications-veeam-nsclient-05-restapi.md) - Allow compatibility with version 13.
- [**Veeam WSMAN**](../procedures/applications-veeam-wsman.md) - Allow compatibility with version 13.
- [**Windows WSMAN**](../procedures/operatingsystems-windows-wsman.md) - Add certificates mode.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Windows CMA**](../procedures/operatingsystems-windows-centreon-monitoring-agent.md) - Handle extended thresholds on CMA native checks.

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Linux SSH**](../procedures/operatingsystems-linux-ssh.md) - Fixed a `No peers detected` error with `--ntp-mode=ntpq`.
- [**Microsoft Exchange CMA**](../procedures/applications-exchange-cma.md) - Fixed edge cases size calculation in database mode.
- [**Microsoft Exchange NSClient NRPE**](../procedures/applications-exchange-nrpe.md) - Fixed edge cases size calculation in database mode.
- [**Microsoft Exchange NSClient RestAPI**](../procedures/applications-exchange-nsclient-restapi.md) - Fixed edge cases size calculation in database mode.
- [**PICOS SNMP**](../procedures/operatingsystems-picos-snmp.md) - Replaced obsolete '\C' pattern in regular expressions in Cpu, Psu and Temperature.
- [**SecurActive SNMP**](../procedures/network-securactive-snmp.md) - Fixed the **Net-Securactive-SNMP-Bca** and **Net-Securactive-SNMP-Bcn** commands.
- [**Splunk API**](../procedures/applications-monitoring-splunk-api.md) - Fixed the **App-Monitoring-Splunk-Api-String-Value** command that used a wrong mode.
- [**VMware8 VM REST API**](../procedures/applications-virtualization-vmware8-vm-restapi.md) - Fixed host ID macro in **Virt-VMWare8-VM-Restapi-Network-Throughput** command.
- [**Windows WSMAN**](../procedures/operatingsystems-windows-wsman.md) - The temporary files are now deleted when the execution ends.

</TabItem>
</Tabs>

### February

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Fortinet FortiAuthenticator RestAPI**](../procedures/network-fortinet-fortiauthenticator-restapi.md) - Initial release.
- [**Zscaler ZDX Api**](../procedures/applications-monitoring-zscaler-zdx-api.md) - Initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Base Pack**](../procedures/base-generic.md) - Reduced the ICMP packet size to ensure it can pass through firewalls protecting SaaS software.
- [**HP Ilo XMLAPI**](../procedures/hardware-servers-hp-ilo-xmlapi.md) - The connector now uses warning and critical thresholds provided by ILO data when no custom thresholds are defined.
- [**AIX SSH**](../procedures/operatingsystems-aix-ssh.md) - Added a `FILTERARG` macro to the **Process** service template to filter on the process' arguments. Also added the ability to display details of all processes (including "OK" processes) in the long output (issue [#5945](https://github.com/centreon/centreon-plugins/issues/5945)).
- [**Linux CMA**](../procedures/operatingsystems-linux-centreon-monitoring-agent.md) - Added a **Custom-Script** service template to run custom commands. 
- [**Windows CMA**](../procedures/operatingsystems-windows-centreon-monitoring-agent.md) - Added new parameters for the **Services** service template and added a **Custom-Script** service template to run custom commands.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**PostgreSQL**](../procedures/applications-databases-postgresql.md) - Added support for applying thresholds to the total number of connections, not just per database. This breaking change replaces the `*FILTER` macros in the **Query-Time**, **Locks**, **Backend** and **Hitratio** templates with more explicit `*INCLUDE*` and `*EXCLUDE*` macros (issue [#5350](https://github.com/centreon/centreon-plugins/issues/5350)).

- The following connectors are now compatible with NSClient++ 0.11.8, which is currently available as a pre-release [here](https://github.com/centreon/centreon-nsclient-build/releases). The breaking change occurs if you update NSClient++ without updating the connector. Updating the connector alone is safe. Fixing issue [#95](https://github.com/centreon/centreon-nsclient-build/issues/95).

   - [**Active Directory Rest API**](../procedures/infrastructure-active-directory-nsclient-05-restapi.md)
   - [**EMC Symmetrix API**](../procedures/hardware-storage-emc-symmetrix-nsclient-05-restapi.md)
   - [**Microsoft Exchange NSClient RestAPI**](../procedures/applications-exchange-nsclient-restapi.md)
   - [**Microsoft SCCM NSClient**](../procedures/applications-sccm-nsclient.md)
   - [**Microsoft WSUS**](../procedures/applications-wsus-nsclient.md)
   - [**Netbackup NSClient++ API**](../procedures/applications-netbackup-nsclient-05-restapi.md)
   - [**Veeam NSClient API**](../procedures/applications-veeam-nsclient-05-restapi.md)
   - [**Windows NSClient API**](../procedures/operatingsystems-windows-nsclient-05-restapi.md)

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Centreon Experience Monitoring (formerly Quanta) Rest API**](../procedures/applications-monitoring-centreon-experience-monitoring-restapi.md) - The connector now returns an OK status when no are incidents found (instead of UNKNOWN).
- [**Veeam WSMAN**](../procedures/applications-veeam-wsman.md) - Added a specific command handler dedicated to PowerShell scripts to avoid `JSON error` messages occurring in some cases. 
- [**Windows WSMAN**](../procedures/operatingsystems-windows-wsman.md) - Added a specific command handler dedicated to PowerShell scripts to avoid `JSON error` messages occurring in some cases, such as `updates` and `pending-reboot` modes (issues [#4461](https://github.com/centreon/centreon-plugins/issues/4461) and [#4599](https://github.com/centreon/centreon-plugins/issues/4599)). 
- [**Amazon FSx**](../procedures/cloud-aws-fsx.md) - Fixed a mix-up between `data-write-ops` and `data-write-bytes` for the **Fsx-DataUsage** service (issue [#5944](https://github.com/centreon/centreon-plugins/issues/5944)).
- [**Fortinet Fortigate SNMP**](../procedures/network-firewalls-fortinet-fortigate-snmp.md) - Fixed an error in the bandwidth calculation for the **SDWan** service (issue [#5959](https://github.com/centreon/centreon-plugins/issues/5959)).

</TabItem>
</Tabs>


### January

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Apache CXF**](../procedures/applications-apache-cxf-jmx.md) - Initial release.
- [**Centreon Experience Monitoring (formerly Quanta) Rest API**](../procedures/applications-monitoring-centreon-experience-monitoring-restapi.md) - Initial release.
- [**Microsoft SCCM CMA**](../procedures/applications-sccm-cma.md) - Initial release.
- [**VMware8 VCSA REST API**](../procedures/applications-virtualization-vmware8-vcsa-restapi.md) - Initial release ([Issue 5551](https://github.com/centreon/centreon-plugins/issues/5551)).

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Arista Switch SNMP**](../procedures/network-switchs-arista-snmp.md) - Added **bgp** service template.
- [**Cisco Standard SNMP**](../procedures/network-cisco-standard-snmp.md) - Added completion time to **ipsla** mode.
- [**Commvault Commserve Rest API**](../procedures/applications-commvault-commserve-restapi.md) - Added client name to the output prefix of the **jobs** mode.
- [**HPE Athonet w/ Prometheus API**](../procedures/network-hpe-athonet-node-exporter-api.md) - Added the common system checks from Prometheus node exporter.
- [**IP Fabric API**](../procedures/applications-ipfabric-api.md) - Handle the pagination brought by version 7.5.
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - Added an option to the **connected-users** mode to filter by database name ([PR 5195](https://github.com/centreon/centreon-plugins/pull/5195)).
- [**NetApp Ontap SNMP**](../procedures/hardware-storage-netapp-ontap-snmp.md) - Added the **snapmirrorlag** service template.
- [**Nutanix**](../procedures/virtualization-nutanix-snmp.md) - Added support of Nutanix 6.10 (fixes 'No disk found' error in **disk-usage**_ service template).
- [**Quanta Rest API**](../procedures/applications-monitoring-quanta-restapi.md) - Deprecated, replaced by [**Centreon Experience Monitoring (formerly Quanta) Rest API**](../procedures/applications-monitoring-centreon-experience-monitoring-restapi.md).
- [**VMware VCSA Rest API**](../procedures/applications-vmware-vcsa-restapi.md) - Deprecated, replaced by [**VMware8 VCSA REST API**](../procedures/applications-virtualization-vmware8-vcsa-restapi.md).

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Dell Compellent Nsclient NRPE**](../procedures/hardware-storage-dell-compellent-api.md) - The pack has been renamed and the default NRPECLIENT macro changed to use the official Nagios NRPE4 client.
- [**Microsoft Cluster Server NSClient++ NRPE**](../procedures/applications-mscs-nrpe.md) - Changed the default NRPECLIENT macro to use the official Nagios NRPE4 client and fixed the default client options.

</TabItem>
<TabItem value="Fix" label="Fix">

- [**D-Link DGS 3100 SNMP**](../procedures/network-dlink-dgs3100-snmp.md) - Fixed "uninitialized values" warnings on interfaces mode ([Issue 5903](https://github.com/centreon/centreon-plugins/issues/5903)).
- [**D-Link Network**](../procedures/network-dlink-standard-snmp.md) - Fixed "uninitialized values" warnings on interfaces mode ([Issue 5903](https://github.com/centreon/centreon-plugins/issues/5903)).
- [**Fortinet Fortigate SNMP**](../procedures/network-firewalls-fortinet-fortigate-snmp.md) - Fixed "uninitialized values" warnings on interfaces mode ([Issue 5903](https://github.com/centreon/centreon-plugins/issues/5903)).
- [**HP MSA2000 SNMP**](../procedures/hardware-storage-hp-msa2000-snmp.md) - Fixed GitHub [issue 5899](https://github.com/centreon/centreon-plugins/issues/5899), also talked about on [TheWatch](https://thewatch.centreon.com/infra-monitoring-platform-7/hp-msa-plugin-issue-5219).
- [**HP Procurve SNMP**](../procedures/network-switchs-hp-procurve-snmp.md) - Fixed "uninitialized values" warnings on interfaces mode ([Issue 5903](https://github.com/centreon/centreon-plugins/issues/5903)).
- [**Lenovo S Series SNMP**](../procedures/hardware-storage-lenovo-sseries-snmp.md) - Fixed GitHub [issue 5899](https://github.com/centreon/centreon-plugins/issues/5899), also talked about on [TheWatch](https://thewatch.centreon.com/infra-monitoring-platform-7/hp-msa-plugin-issue-5219).
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - Forced the version of a dependency, to fix a segmentation fault issue. 
- [**Palo Alto firewall SNMP**](../procedures/network-firewalls-paloalto-standard-snmp.md) - Fixed "uninitialized values" warnings on interfaces mode ([Issue 5903](https://github.com/centreon/centreon-plugins/issues/5903)).

</TabItem>
</Tabs>

## 2025

### December

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Cato Networks API**](../procedures/network-security-cato-networks-api.md) - Initial release, based on a [The Watch idea](https://thewatch.centreon.com/ideas/create-a-new-cato-network-connector-4025). 
- [**Microsoft Cluster Server CMA**](../procedures/applications-mscs-cma.md) - Initial release.
- [**Nvidia (formerly Mellanox) SNMP**](../procedures/network-nvidia-mellanox-snmp.md) - Initial release [PR 5753](https://github.com/centreon/centreon-plugins/pull/5753).
- [**OpenStack RESTAPI**](../procedures/cloud-openstack-restapi.md) - Initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Mikrotik SNMP**](../procedures/network-mikrotik-snmp.md) - New LTE service template.
- [**Active Directory CMA**](../procedures/infrastructure-active-directory-centreon-monitoring-agent.md) - All templates inherit **Generic-Passive-CMA-Service** from **base-generic** to avoid multiple notifications.
- [**Base Pack**](../procedures/base-generic.md) - New **Generic-Passive-CMA-Service** service template with `is_volatile` set to 0 to avoid multiple notifications.
- [**Hyper-V 2012 CMA**](../procedures/virtualization-hyperv-2012-cma.md) - All templates inherit **Generic-Passive-CMA-Service** from **base-generic** to avoid multiple notifications.
- [**Linux CMA**](../procedures/operatingsystems-linux-centreon-monitoring-agent.md) - All templates inherit **Generic-Passive-CMA-Service** from **base-generic** to avoid multiple notifications.
- [**Microsoft Exchange CMA**](../procedures/applications-exchange-cma.md) - All templates inherit **Generic-Passive-CMA-Service** from **base-generic** to avoid multiple notifications.
- [**Microsoft WSUS CMA**](../procedures/applications-wsus-cma.md) - All templates inherit **Generic-Passive-CMA-Service** from **base-generic** to avoid multiple notifications.
- [**Veeam CMA**](../procedures/applications-veeam-centreon-monitoring-agent.md) - All templates inherit **Generic-Passive-CMA-Service** from **base-generic** to avoid multiple notifications.
- [**Windows CMA**](../procedures/operatingsystems-windows-centreon-monitoring-agent.md) - All templates inherit **Generic-Passive-CMA-Service** from **base-generic** to avoid multiple notifications.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Cisco Waas SNMP**](../procedures/network-cisco-waas-snmp.md) - Fixed errors related to thresholds.

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Control-M Rest API**](../procedures/applications-controlm-restapi.md) - Fixed typo in jobs mode.
- [**NetApp Ontap Rest API**](../procedures/hardware-storage-netapp-ontap-restapi.md) - Added state to the requested fields in volume query [PR 5851](https://github.com/centreon/centreon-plugins/pull/5851).
- [**Netbackup NSClient++ API**](../procedures/applications-netbackup-nsclient-05-restapi.md) - Removed exchange command.
- [**Oracle Database**](../procedures/applications-databases-oracle.md) - Fixed wrong tablespace size calculation in tablespace-usage mode.
- [**Cisco Standard**](../procedures/network-cisco-standard-snmp.md) - Fixed percentage calculation in interfaces mode.
- [**D-Link DGS 3100**](../procedures/network-dlink-dgs3100-snmp.md) - Fixed percentage calculation in interfaces mode.
- [**D-Link Network**](../procedures/network-dlink-standard-snmp.md) - Fixed percentage calculation in interfaces mode.
- [**Fortinet Fortigate SNMP**](../procedures/network-firewalls-fortinet-fortigate-snmp.md) - Fixed percentage calculation in interfaces mode.
- [**HP Procurve SNMP**](../procedures/network-switchs-hp-procurve-snmp.md) - Fixed percentage calculation in interfaces mode.
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - Fixed wrong output unit in locks-wait mode.
- [**Palo Alto firewall SNMP**](../procedures/network-firewalls-paloalto-standard-snmp.md) - Fixed percentage calculation in interfaces mode.
- [**Windows NSClient 0.5 NRPE**](../procedures/operatingsystems-windows-nsclient-05-nrpe.md) - Fixed an issue in the NTP mode, causing zombie processes of `centreon_plugins.exe`.
- [**Windows NSClient API**](../procedures/operatingsystems-windows-nsclient-05-restapi.md) - Fixed an issue in the NTP mode, causing zombie processes of `centreon_plugins.exe`.
- [**Windows Telegraf Agent**](../procedures/operatingsystems-windows-telegraf-agent.md) - Fixed an issue in the NTP mode, causing zombie processes of `centreon_plugins.exe`.
- [**Windows WSMAN**](../procedures/operatingsystems-windows-wsman.md) - Fixed an issue in the NTP mode, causing zombie processes of `centreon_plugins.exe`.

</TabItem>
</Tabs>

### November

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**HPE Athonet w/ Prometheus API**](../procedures/network-hpe-athonet-node-exporter-api.md) - Initial release of HPE Athonet w/ Prometheus API.
- [**HPE Athonet Alertmanager w/ Prometheus API**](../procedures/network-hpe-athonet-alertmanager-api.md) - Initial release of HPE Athonet Alertmanager w/ Prometheus API.
- [**Microsoft Exchange CMA**](../procedures/applications-exchange-cma.md) - Initial release of Microsoft Exchange CMA.
- [**Prometheus Alertmanager API**](../procedures/cloud-prometheus-alertmanager-api.md) - Initial release of Prometheus Alertmanager API. 

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**APC PDU SNMP**](../procedures/hardware-pdu-apc-snmp.md) - Added **NTP** and **uptime** service templates.
- [**Active Directory WSMAN**](../procedures/applications-active-directory-wsman.md) - Added DE language support, based on community contribution [PR 5780](https://github.com/centreon/centreon-plugins/pull/5780).
- [**Dell Compellent SNMP**](../procedures/hardware-storage-dell-compellent-snmp.md) - Added SNMP in title to be more explicit.
- [**Fortinet Fortigate SNMP**](../procedures/network-firewalls-fortinet-fortigate-snmp.md) - Added **ap-usage** service template.
- [**Google Stackdriver**](../procedures/cloud-gcp-management-stackdriver.md) - Enhanced compatibility with DISTRIBUTION type values in **getmetrics** mode.
- [**Node Exporter w/ Prometheus API**](../procedures/cloud-prometheus-node-exporter-api.md) - Added **uptime** mode, **storage** mode and its discovery and **interfaces** mode and its discovery.
- [**Office365 Exchange**](../procedures/cloud-microsoft-office365-exchange.md) - Change service template aliases to avoid service deployment issues.
- [**Office365 OneDrive**](../procedures/cloud-microsoft-office365-onedrive.md) - Change service template aliases to avoid service deployment issues.
- [**Office365 SharePoint**](../procedures/cloud-microsoft-office365-sharepoint.md) - Change service template aliases to avoid service deployment issues.
- [**Office365 Skype**](../procedures/cloud-microsoft-office365-skype.md) - Change service template aliases to avoid service deployment issues.
- [**Office365 Teams**](../procedures/cloud-microsoft-office365-teams.md) - Change service template aliases to avoid service deployment issues.
- [**Redis Database**](../procedures/applications-databases-redis.md) - Added authentication with username for custommode perlmod, from community contribution [PR 5255](https://github.com/centreon/centreon-plugins/pull/5255).
- [**Veeam CMA**](../procedures/applications-veeam-centreon-monitoring-agent.md) - Improved execution time in **job-status** mode.
- [**Veeam NRPE**](../procedures/applications-veeam-nrpe.md) - Improved execution time in **job-status** mode.
- [**Veeam NSClient API**](../procedures/applications-veeam-nsclient-05-restapi.md) - Improved execution time in **job-status** mode.
- [**Veeam WSMAN**](../procedures/applications-veeam-wsman.md) - Improved execution time in **job-status** mode.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**APC UPS**](../procedures/hardware-ups-apc-snmp.md) - Fixed localized time calculation using the ` timezone` option.
- [**Azure ServiceBus**](../procedures/cloud-azure-integration-servicebus.md) - Fixed an issue in metric configuration in **namespaces** mode.
- [**Centreon Experience Monitoring (formerly Quanta) Rest API**](../procedures/applications-monitoring-quanta-restapi.md) - Handle empty table returns.
- [**Comet P8000 Sensor SNMP**](../procedures/hardware-sensors-comet-p8000-snmp.md) - Removed 'geist' from connector name.
- [**Dell Compellent Nsclient NRPE**](../procedures/hardware-storage-dell-compellent-api.md) - Made NSClient and NRPE usage more explicit.
- [**Dell iDRAC SNMP**](../procedures/hardware-servers-dell-idrac-snmp.md) - Fixed ready status for `pdisk.state` in **hardware** mode.
- [**Eclipse Mosquitto MQTT**](../procedures/applications-eclipse-mosquitto-mqtt.md) - Fixed `format-custom` option.
- [**Emerson PDU SNMP**](../procedures/hardware-pdu-emerson-snmp.md) - Fixed **Receptacles** command.
- [**Fortinet Fortigate RestAPI**](../procedures/network-fortinet-fortigate-restapi.md) - Take in charge other encodages than UTF8 in returned content.
- [**Google Stackdriver**](../procedures/cloud-gcp-management-stackdriver.md) - Fixed the minimum aggregation calculation.
- [**HP MSA2000 SNMP**](../procedures/hardware-storage-hp-msa2000-snmp.md) - Fixed **hardware** mode missing in plugin packaging.
- [**Huawei Standard SNMP**](../procedures/network-huawei-snmp.md) - Fixed missing fan state in short output.
- [**Huawei WLC SNMP**](../procedures/network-huawei-wlc-snmp.md) - Fixed missing fan state in short output.
- [**Lenovo S Series SNMP**](../procedures/hardware-storage-lenovo-sseries-snmp.md) - Fixed **hardware** mode missing in plugin packaging.
- [**Microsoft Exchange NSClient NRPE**](../procedures/applications-exchange-nrpe.md) - Fixed typo for custom perfdata in **databases** mode.
- [**Microsoft Exchange NSClient RestAPI**](../procedures/applications-exchange-nsclient-restapi.md) - Fixed typo for custom perfdata in **databases** mode.
- [**Panzura SNMP**](../procedures/hardware-storage-panzura-snmp.md) - Fixed **Disk-Usage-Cloud-Global** command.
- [**Podman REST API**](../procedures/applications-podman-restapi.md) - **Container-Usage** now returns UNKNOWN when container is not found.
- [**TrendMicro Iwsva SNMP**](../procedures/applications-trendmicro-iwsva-snmp.md) - Fixed plugin option value in commands.
- [**Veeam CMA**](../procedures/applications-veeam-centreon-monitoring-agent.md) - Added Veeam 12 compatibility by using the correct cmdlets in **vsb-jobs** mode.
- [**Veeam NRPE**](../procedures/applications-veeam-nrpe.md) - Added Veeam 12 compatibility by using the correct cmdlets in **vsb-jobs** mode.
- [**Veeam NSClient API**](../procedures/applications-veeam-nsclient-05-restapi.md) - Added Veeam 12 compatibility by using the correct cmdlets in **vsb-jobs** mode.
- [**Veeam WSMAN**](../procedures/applications-veeam-wsman.md) - Added Veeam 12 compatibility by using the correct cmdlets in **vsb-jobs** mode.
- [**VMware8 vCenter REST API**](../procedures/applications-virtualization-vmware8-vcenter-restapi.md) - Fixed **Clusters** and **Datastores** discovery macros.

</TabItem>
</Tabs>

### October

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Microsoft WSUS CMA**](../procedures/applications-wsus-cma.md) - Initial release of WSUS Microsoft CMA.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**APC UPS**](../procedures/hardware-ups-apc-snmp.md) - Added `timezone` option in **time** mode, based on community contribution [PR 5690](https://github.com/centreon/centreon-plugins/pull/5690).
- [**Cisco Meraki Rest API**](../procedures/network-cisco-meraki-restapi.md) - Enhanced help information about `hostname` (see [here](https://developer.cisco.com/meraki/api-v1/getting-started/#base-uri) for more information about URI).
- [**Elasticsearch**](../procedures/applications-databases-elasticsearch.md) - Added new **query** mode.
- [**Extreme Network SNMP**](../procedures/network-extreme-snmp.md) - Added supported models in documentation. 
- [**Extreme (formerly Nortel/Avaya) SNMP**](../procedures/network-nortel-standard-snmp.md) - **Nortel standard SNMP** rebranded to Extreme SNMP. 
- [**Linux NRPE3**](../procedures/operatingsystems-linux-nrpe3.md) - Now deprecated, please use [**Linux NRPE4**](../procedures/operatingsystems-linux-nrpe4.md).
- [**Office 365 Management**](../procedures/cloud-microsoft-office365-management.md) - Added `filter-classification` option to **service-status** mode.
- [**Splunk API**](../procedures/applications-monitoring-splunk-api.md) - Extended **query** mode, based on a [The Watch idea](https://thewatch.centreon.com/ideas/plugin-for-splunk-return-value-of-spl-request-3734). 
- [**pfSense SNMP**](../procedures/network-firewalls-pfsense-snmp.md) - Added new modes: **cpu**, **cpu-detailed**, **load**, **memory**, **swap** and **uptime**.
- [**Windows NSClient API**](../procedures/operatingsystems-windows-nsclient-05-restapi.md) - Added **Disk-Name** service discovery rule.
- [**VMware8 ESXi REST API**](../procedures/application-virtualization-vmware8-esx-restapi.md) - Enhanced performance by implementing cache, and handled pagination for **acq-specs**.
- [**VMware8 vCenter REST API**](../procedures/applications-virtualization-vmware8-vcenter-restapi.md) - Enhanced performance by implementing cache, and handled pagination for **acq-specs**.
- [**VMware8 VM REST API**](../procedures/applications-virtualization-vmware8-vm-restapi.md) - Added new modes: **disk-io**, **network** and **power**. Enhanced performance by implementing cache, and handled pagination for **acq-specs**.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Elasticsearch**](../procedures/applications-databases-elasticsearch.md) - The `ELASTICSEARCHPROTO` host macro's default value is now `https` to follow Elasticsearch recommendations (see [here](https://www.elastic.co/docs/deploy-manage/security/set-up-minimal-security)).
- [**VMware8 ESX REST API**](../procedures/application-virtualization-vmware8-esx-restapi.md) - Changed threshold options and metric names for **power** mode. Changed the way credentials are configured in Host Discovery.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Commvault Commserve Rest API**](../procedures/applications-commvault-commserve-restapi.md) - Fixed an error with **jobs** mode occurring when the output was too long.
- [**Fortinet Fortigate Rest API**](../procedures/network-fortinet-fortigate-restapi.md) - Fixed an issue with `resources` in **health** mode.
- [**IBM Storwize SSH**](../procedures/hardware-storage-ibm-storwize-ssh.md) - Fixed an issue occurring while parsing response, from community contribution [PR 5697](https://github.com/centreon/centreon-plugins/pull/5697).
- [**InfluxDB**](../procedures/applications-databases-influxdb.md) - Fixed an error in **query** mode command.
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - Fixed an issue where **deadlocks** mode returned false positives.
- [**Office 365 Management**](../procedures/cloud-microsoft-office365-management.md) - Fixed an issue where each new alert for a service overwrote the previous one, making it impossible to have a global vision in **service-status**.

</TabItem>
</Tabs>

### September

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Hyper-V 2012 CMA**](../procedures/virtualization-hyperv-2012-cma.md) - Initial release of Hyper-V 2012 CMA.
- [**VMware8 VM REST API**](../procedures/applications-virtualization-vmware8-vm-restapi.md) - Initial release of VMware8 VM REST API.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Ansible Tower**](../procedures/applications-ansible-tower.md) - Improve UUID generation to make it unique in **host discovery**.
- [**HP Standard Network SNMP**](../procedures/network-hp-standard-snmp.md) - Added **vrrp-status** mode, from community contribution [PR 4842](https://github.com/centreon/centreon-plugins/pull/4842).
- [**Linux CMA**](../procedures/operatingsystems-linux-centreon-monitoring-agent.md) - Added support for `timedatectl` in **ntp** mode, based on a [The Watch idea](https://thewatch.centreon.com/ideas/os-linux-local-plugin-adding-support-for-`timedatectl`-to-ntp-mode-2619).
- [**Linux NRPE4**](../procedures/operatingsystems-linux-nrpe4.md) - Added support for `timedatectl` in **ntp** mode, based on a [The Watch idea](https://thewatch.centreon.com/ideas/os-linux-local-plugin-adding-support-for-`timedatectl`-to-ntp-mode-2619).
- [**Linux SSH**](../procedures/operatingsystems-linux-ssh.md) - Added support for `timedatectl` in **ntp** mode, based on a [The Watch idea](https://thewatch.centreon.com/ideas/os-linux-local-plugin-adding-support-for-`timedatectl`-to-ntp-mode-2619).
- [**Linux Telegraf Agent**](../procedures/operatingsystems-linux-telegraf-agent.md) - Added support for `timedatectl` in **ntp** mode, based on a [The Watch idea](https://thewatch.centreon.com/ideas/os-linux-local-plugin-adding-support-for-`timedatectl`-to-ntp-mode-2619).
- [**Proxmox VE Rest API**](../procedures/virtualization-proxmox-ve-restapi.md) - Added option `include-node-name` in **vm-usage** mode, from community contribution [Issue 5642](https://github.com/centreon/centreon-plugins/issues/5642).
- [**APC UPS SNMP**](../procedures/hardware-ups-apc-snmp.md) - Added support for APC Galaxy in **sensors** mode, based on community contribution [PR 5692](https://github.com/centreon/centreon-plugins/pull/5692).
- [**Kubernetes API**](../procedures/cloud-kubernetes-api.md) - Added default values in **API custom** help section.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Quanta by Centreon Rest API**](../procedures/applications-monitoring-quanta-restapi.md) - Full rework of the current plugin.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Docker Rest API**](../procedures/applications-docker-restapi.md) - Fixed memory usage calculation in **container-usage** mode.
- [**Kubernetes w/ Prometheus API**](../procedures/cloud-prometheus-kubernetes-api.md) - Fixed `daemonset-status` incorrect key causing skips in **daemonset-status** mode.
- [**NetApp Ontap Rest API**](../procedures/hardware-storage-netapp-ontap-restapi.md) - Fixed total space calculation error and missing snapshot info in **volumes** mode. 
- [**VTOM Rest API**](../procedures/applications-vtom-restapi.md) - Fixed an issue leading to `Unknown option --token` in **jobs** mode.
- [**Veeam API**](../procedures/applications-veeam-nsclient-05-restapi.md) - Added Veeam Agent compatibility for job monitoring in **job-status** mode.
- [**Veeam CMA**](../procedures/applications-veeam-centreon-monitoring-agent.md) - Added Veeam Agent compatibility for job monitoring in **job-status** mode.
- [**Veeam WSMAN**](../procedures/applications-veeam-wsman.md) - Added Veeam Agent compatibility for job monitoring in **job-status** mode.
- [**Veeam**](../procedures/applications-veeam-nrpe.md) - Added Veeam Agent compatibility for job monitoring in **job-status** mode.

</TabItem>
</Tabs>

### August

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Forcepoint SNMP**](../procedures/network-firewalls-forcepoint-sdwan-snmp.md) - Initial release of Forcepoint SNMP, based on community contribution [PR 5512](https://github.com/centreon/centreon-plugins/pull/5512) and a [The Watch idea](https://thewatch.centreon.com/ideas/update-stonesoft-forcepoint-plugin-4169).
- [**Active Directory CMA**](../procedures/infrastructure-active-directory-centreon-monitoring-agent.md) - Initial release of Active Directory CMA.
- [**LatenceTech RestAPI**](../procedures/applications-monitoring-latencetech-restapi.md) - Initial release of LatenceTech RestAPI.


</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**IBM AS400 Connector**](../procedures/operatingsystems-as400-connector.md) - Added options to ignore acknowledged messages, from community contribution [PR 5487](https://github.com/centreon/centreon-plugins/pull/5487).
- [**IP-Label Ekara Rest API**](../procedures/applications-monitoring-iplabel-ekara-restapi.md) - Added a new authentication method using the `api-key` option.
- [**Proxmox VE**](../procedures/virtualization-proxmox-ve-restapi.md) - Added OS and IP info retrieval to **host discovery**.
- [**Redis Database**](../procedures/applications-databases-redis.md) - Added `cert` and `key` options for authentication (available for redis-cli >= 6.x), based on community contribution [PR 5555](https://github.com/centreon/centreon-plugins/pull/5555).
- [**Redis Sentinel**](../procedures/applications-redis-sentinel.md) - Added `cert` and `key` options for authentication (available for redis-cli >= 6.x), from community contribution [PR 5555](https://github.com/centreon/centreon-plugins/pull/5555).
- [**Veeam CMA**](../procedures/applications-veeam-centreon-monitoring-agent.md) - Converted into stable and added default timeout service macro, set to 120s.
- [**Windows CMA**](../procedures/operatingsystems-windows-centreon-monitoring-agent.md) - Added native checks for **Process**, **Counter**, **Taskched** and **Files**. Added default timeout service macro, set to 120s.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Windows CMA**](../procedures/operatingsystems-windows-centreon-monitoring-agent.md) - Converted into stable with the new CMA version leading to breaking changes for earlier versions.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**AIX SNMP**](../procedures/operatingsystems-aix-snmp.md) - Fixed an issue causing a parsing error.
- [**AWS Billing**](../procedures/cloud-aws-billing.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**AWS Discover**](../procedures/cloud-aws-cloudwatch-discover.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**AWS ELB**](../procedures/cloud-aws-elb.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**AWS Lambda**](../procedures/cloud-aws-lambda.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**AWS VPN**](../procedures/cloud-aws-vpn.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**Amazon API Gateway**](../procedures/cloud-aws-apigateway.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**Amazon Backup Vault**](../procedures/cloud-aws-backup.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**Amazon CloudFront**](../procedures/cloud-aws-cloudfront.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**Amazon Direct Connect**](../procedures/cloud-aws-directconnect.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**Amazon EBS**](../procedures/cloud-aws-ebs.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**Amazon EC2**](../procedures/cloud-aws-ec2.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**Amazon EFS**](../procedures/cloud-aws-efs.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**Amazon ElastiCache**](../procedures/cloud-aws-elasticache.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**Amazon FSx**](../procedures/cloud-aws-fsx.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**Amazon Kinesis**](../procedures/cloud-aws-kinesis.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**Amazon RDS**](../procedures/cloud-aws-rds.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**Amazon S3**](../procedures/cloud-aws-s3.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**Amazon SNS**](../procedures/cloud-aws-sns.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**Amazon SQS**](../procedures/cloud-aws-sqs.md) - Fixed AWS discovery that failed when `aws-access-key` and `aws-secret-key` were not set.
- [**Azure API Management**](../procedures/cloud-azure-management-apimanagement.md) - Fixed host discovery issue.
- [**Azure App Configuration**](../procedures/cloud-azure-devtools-appconfiguration.md) - Fixed host discovery issue.
- [**Azure Application Gateway**](../procedures/cloud-azure-network-appgateway.md) - Fixed host discovery issue.
- [**Azure Application Insights**](../procedures/cloud-azure-management-applicationinsights.md) - Fixed host discovery issue.
- [**Azure Automation**](../procedures/cloud-azure-management-automation.md) - Fixed host discovery issue.
- [**Azure CDN**](../procedures/cloud-azure-network-cdn.md) - Fixed host discovery issue.
- [**Azure Cache for Redis**](../procedures/cloud-azure-database-redis.md) - Fixed host discovery issue.
- [**Azure Classic Storage**](../procedures/cloud-azure-classicstorage-storageaccount.md) - Fixed host discovery issue.
- [**Azure Cosmos DB**](../procedures/cloud-azure-database-cosmosdb.md) - Fixed host discovery issue.
- [**Azure Data Factory**](../procedures/cloud-azure-datafactory-factories.md) - Fixed host discovery issue.
- [**Azure Database for MariaDB**](../procedures/cloud-azure-database-mariadb.md) - Fixed host discovery issue.
- [**Azure Discover**](../procedures/cloud-azure-management-discover.md) - Fixed host discovery issue.
- [**Azure Elastic Pool**](../procedures/cloud-azure-database-elasticpool.md) - Fixed host discovery issue.
- [**Azure ExpressRoute**](../procedures/cloud-azure-network-expressroute.md) - Fixed host discovery issue.
- [**Azure Firewall**](../procedures/cloud-azure-network-firewall.md) - Fixed host discovery issue.
- [**Azure Front Door**](../procedures/cloud-azure-network-frontdoor.md) - Fixed host discovery issue.
- [**Azure Functions**](../procedures/cloud-azure-compute-functions.md) - Fixed host discovery issue.
- [**Azure Kubernetes Service**](../procedures/cloud-azure-compute-aks.md) - Fixed host discovery issue.
- [**Azure Load Balancer**](../procedures/cloud-azure-network-loadbalancer.md) - Fixed host discovery issue.
- [**Azure Network Interface**](../procedures/cloud-azure-network-networkinterface.md) - Fixed host discovery issue.
- [**Azure Public IP**](../procedures/cloud-azure-network-publicip.md) - Fixed host discovery issue.
- [**Azure Recovery**](../procedures/cloud-azure-management-recovery.md) - Fixed host discovery issue.
- [**Azure Resource**](../procedures/cloud-azure-management-resource.md) - Fixed host discovery issue.
- [**Azure SQL Database**](../procedures/cloud-azure-database-sqldatabase.md) - Fixed host discovery issue.
- [**Azure SQL Managed Instance**](../procedures/cloud-azure-database-sqlmanagedinstance.md) - Fixed host discovery issue.
- [**Azure SQL Server**](../procedures/cloud-azure-database-sqlserver.md) - Fixed host discovery issue.
- [**Azure ServiceBus**](../procedures/cloud-azure-integration-servicebus.md) - Fixed host discovery issue.
- [**Azure Traffic Manager**](../procedures/cloud-azure-network-trafficmanager.md) - Fixed host discovery issue.
- [**Azure Virtual Machine Scale Sets**](../procedures/cloud-azure-compute-vmscalesets.md) - Fixed host discovery issue.
- [**Azure Virtual Machine**](../procedures/cloud-azure-compute-virtualmachine.md) - Fixed host discovery issue.
- [**Eclipse Mosquitto MQTT**](../procedures/applications-eclipse-mosquitto-mqtt.md) - Fixed a syntax error and an issue with encoding occurring when topic names contained accents.
- [**HP Ilo Rest API**](../procedures/hardware-servers-hp-ilo-restapi.md) - Fixed an issue with some firmware versions to exclude enclosure.
- [**Huawei HMM SNMP**](../procedures/hardware-servers-huawei-hmm-snmp.md) - Fixed `no-component` option.
- [**Hyper-V NSCP REST API**](../procedures/virtualization-hyperv-nscp-restapi.md) - Fixed an issue with **scvmm-discovery** stats.
- [**VMware ESX**](../procedures/virtualization-vmware2-esx.md) - Fixed an issue leading to `Cannot find 'ComputeResource' object` message.
- [**VMware VM**](../procedures/virtualization-vmware2-vm.md) - Fixed an issue leading to `Cannot find 'ComputeResource' object` message.
- [**VMware vCenter**](../procedures/virtualization-vmware2-vcenter-generic.md) - Fixed an issue leading to `Cannot find 'ComputeResource' object` message.

</TabItem>
</Tabs>

### July

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**VMware8 vCenter REST API**](../procedures/applications-virtualization-vmware8-vcenter-restapi.md) - Initial release of VMware8 vCenter REST API.
- [**HPE Alletra REST API**](../procedures/hardware-storage-hpe-alletra-restapi.md) - Initial release of HPE Alletra REST API, from a [The Watch idea](https://thewatch.centreon.com/ideas/plugin-baie-hp-alletra-mp-3721) and based on community contribution [PR 5174](https://github.com/centreon/centreon-plugins/pull/5174).

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Apache Server**](../procedures/applications-webservers-apache-serverstatus.md) - Reworked **requests** mode and enhanced **slot-states** mode, based on community contribution [PR 4920](https://github.com/centreon/centreon-plugins/pull/4920).
- [**Azure Management Costs**](../procedures/cloud-azure-management-costs.md) - Added an option to choose `cost-metric`, from community contribution [PR 4756](https://github.com/centreon/centreon-plugins/pull/4756).
- [**Google Stackdriver**](../procedures/cloud-gcp-management-stackdriver.md) - Allowed compatibility with `distribution` type values in **get-metrics** mode.
- [**HashiCorp Vault Rest API**](../procedures/applications-hashicorp-vault-restapi.md) - Enhanced standby-status counter and added code parameters options in **health** mode, from community contributions [PR 5522](https://github.com/centreon/centreon-plugins/pull/5522) and [PR 4839](https://github.com/centreon/centreon-plugins/pull/4839).

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Amazon CloudWatch**](../procedures/cloud-aws-cloudwatch.md) - Fixed an issue with the `zeroed` option, occurring when metrics were empty in **get-metrics** mode.
- [**DenyAll (Rohde & Schwarz) SNMP**](../procedures/network-denyall-snmp.md) - Fixed `FILTERSTORAGE` default macro value.
- [**EMC Data Domain SNMP**](../procedures/hardware-storage-emc-datadomain-snmp.md) - Fixed an issue where default value for `timezone` option was empty, leading to an unknown status being returned in **cleaning** mode.
- [**EMC Unisphere Rest API**](../procedures/hardware-storage-emc-unisphere-restapi.md) - Added missing mandatory parameters for discovery rules and fixed storage discovery rule.
- [**Huawei HMM**](../procedures/hardware-servers-huawei-hmm-snmp.md) - Removed experimental keys on scalar in **blade** mode components.
- [**Kubernetes API**](../procedures/cloud-kubernetes-api.md) - Fixed an issue occurring when a pod IP was empty in the **list-pods** discovery rule.
- [**Microsoft IIS Server WSMAN**](../procedures/applications-iis-wsman.md) - Fixed typo in `App-Iis-WSMAN-Application-Pools` command.
- [**Microsoft SCCM**](../procedures/applications-sccm-nsclient.md) - Fixed wrong argument in `App-Sccm-Site-Status` command.
- [**MySQL/MariaDB**](../procedures/applications-databases-mysql.md) - Fixed an error occurring when retrieving the server version.
- [**Podman REST API**](../procedures/applications-podman-restapi.md) - Fixed API endpoint for **container-usage** mode.
- [**Rubrik Rest API**](../procedures/applications-rubrik-restapi.md) - Removed `App-Rubrik-Restapi-Agent-Status` discovery rule that didn't exist.
- [**NetApp Santricity Restapi**](../procedures/hardware-storage-netapp-santricity-restapi.md) - Fixed `cmd` component count in **hardware** mode.

</TabItem>
</Tabs>

### June

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Juniper M-Series Netconf**](../procedures/network-routers-juniper-mseries-netconf.md) - Initial release of Juniper M-series with Netconf.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**F5 BigIP**](../procedures/network-loadbalancers-f5-bigip-snmp.md) - Added new **certificates** mode, from a [The Watch idea](https://thewatch.centreon.com/ideas/monitor-certificate-with-f5-bigip-3074).
- [**Fortinet Fortigate SNMP**](../procedures/network-firewalls-fortinet-fortigate-snmp.md) - Added **uptime** service template.
- [**Juniper EX Series**](../procedures/network-switchs-juniper-ex-snmp.md) - Reworked plugin path to be more explicit with the initial release of Juniper M-series with Netconf.
- [**Juniper GGSN**](../procedures/network-juniper-ggsn-snmp.md) - Reworked plugin path to be more explicit with the initial release of Juniper M-series with Netconf.
- [**Juniper ISG**](../procedures/network-juniper-isg-snmp.md) - Reworked plugin path to be more explicit with the initial release of Juniper M-series with Netconf.
- [**Juniper M-Series**](../procedures/network-routers-juniper-mseries-snmp.md) - Reworked plugin path to be more explicit with the initial release of Juniper M-series with Netconf.
- [**Juniper Mag**](../procedures/network-firewalls-juniper-mag-snmp.md) - Reworked plugin path to be more explicit with the initial release of Juniper M-series with Netconf.
- [**Juniper SA**](../procedures/network-firewalls-juniper-sa-snmp.md) - Reworked plugin path to be more explicit with the initial release of Juniper M-series with Netconf.
- [**Juniper SRX**](../procedures/network-firewalls-juniper-srx-snmp.md) - Reworked plugin path to be more explicit with the initial release of Juniper M-series with Netconf.
- [**Juniper SSG**](../procedures/network-firewalls-juniper-ssg-snmp.md) - Reworked plugin path to be more explicit with the initial release of Juniper M-series with Netconf.
- [**Juniper Trapeze**](../procedures/network-juniper-trapeze-snmp.md) - Reworked plugin path to be more explicit with the initial release of Juniper M-series with Netconf.
- [**Nmap CLI**](../procedures/applications-nmap-cli.md) - Enhanced secure execution of commands.
- [**Office 365 OneDrive**](../procedures/cloud-microsoft-office365-onedrive.md) - Added template for **users-activity** and service discovery rule for **site-usage**.
- [**Pure Storage FlashArray Rest API v2**](../procedures/hardware-storage-purestorage-flasharray-v2-restapi.md) - Added performance counters in **arrays** mode, based on community contribution [PR 5355](https://github.com/centreon/centreon-plugins/pull/5355).
- [**Qnap**](../procedures/hardware-storage-qnap-snmp.md) - Added QuTS Operating System handling for **hardware**, **pools** and **volumes** modes, from community contribution [PR 5564](https://github.com/centreon/centreon-plugins/pull/5564).

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Office 365 OneDrive**](../procedures/cloud-microsoft-office365-onedrive.md) - Fixed service discovery mode for **site-usage**.
- [**Oracle Database**](../procedures/applications-databases-oracle.md) - Fixed segmentation fault that occurred with glibc's latest version.
- [**Rubrik Rest API**](../procedures/applications-rubrik-restapi.md) - Fixed an issue affecting token renewal.
- **VMWare Daemon** - Change rights after installation to allow apache (central) and centreon-gorgone (poller) to update the **centreon_vmware.json** file after a configuration export.
- [**VMware ESX**](../procedures/virtualization-vmware2-esx.md) - Fixed the Vsan-Cluster-Usage `Cannot get response (timeout received)` error. See the notice below to apply the patch.
- [**VMware vCenter v6**](../procedures/virtualization-vmware2-vcenter-6.md) - Fixed the Vsan-Cluster-Usage `Cannot get response (timeout received)` error. See the notice below to apply the patch.
- [**VMware vCenter**](../procedures/virtualization-vmware2-vcenter-generic.md) - Fixed the Vsan-Cluster-Usage `Cannot get response (timeout received)` error. See the notice below to apply the patch.
- [**VMware VM**](../procedures/virtualization-vmware2-vm.md) - Fixed the Vsan-Cluster-Usage `Cannot get response (timeout received)` error. See the notice below to apply the patch.

#### How to patch the VSAN bug on Debian 11 & 12 and Alma/RHEL/Oracle 9?

1. Locate the file that must be patched.


```bash
find /usr/ -name VICommon.pm
```


It should be `/usr/local/share/perl5/5.32/VMware/VICommon.pm` on EL9, `/usr/local/share/perl/5.32.1/VMware/VICommon.pm` on Debian 11 and `/usr/local/share/perl/5.36.0/VMware/VICommon.pm` on Debian 12.


2. Run the following command to apply the patch (replace "FILE_TO_PATCH" with the results of the previous command):


```bash
patch --backup FILE_TO_PATCH <<'EOF'
--- lib/VMware/share/VMware/VICommon.pm	2025-04-24 17:18:24.938290503 +0200
+++ VICommon.pm	2025-04-24 17:18:18.690399614 +0200
@@ -2319,6 +2319,8 @@
    my $user_agent = $self->{user_agent};
    $user_agent->cookie_jar->as_string
       =~ m/(.*)vmware_soap_session=\"\\\"([0-9a-zA-Z-](.*)+)\\\"\"(.*)/;
+   $user_agent->cookie_jar->as_string
+      =~ m/(.*)vmware_soap_session=[\\\"]*([0-9a-zA-Z-]+)/ unless $2;
    return $2;
 }
EOF
```

The results of this command should be `patching file /usr/your/path/to/VICommon.pm`.
3. Then restart the daemon:


```bash
systemctl restart centreon_vmware
```

</TabItem>
</Tabs>

### May

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**F5OS SNMP**](../procedures/operatingsystems-f5os-snmp.md) - Initial release of F5OS SNMP.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Centreon Central**](../procedures/applications-monitoring-centreon-central.md) - Added the detection of systemd-timesyncd into `SERVICEPROCESSNAME` macro default value in proc-ntpd service.
- [**Centreon Poller**](../procedures/applications-monitoring-centreon-poller.md) - Added the detection of systemd-timesyncd into `SERVICEPROCESSNAME` macro default value in proc-ntpd service.
- [**Cisco Small Business**](../procedures/network-switchs-cisco-smallbusiness-standard-snmp.md) - Added a new **stack** mode, based on community contribution [PR 5317](https://github.com/centreon/centreon-plugins/pull/5317).
- [**EMC Data Domain SNMP**](../procedures/hardware-storage-emc-datadomain-snmp.md) - Added new threshold macro `SERVICEWARNINGSPACEUSAGEPRCT` and `SERVICECRITICALSPACEUSAGEPRCT` in filesystems template.
- [**Mikrotik SNMP**](../procedures/network-mikrotik-snmp.md) - Added new **lte-interfaces** mode and service discovery rules for **list-interfaces** and **list-lte-interfaces**, from a [The Watch idea](https://thewatch.centreon.com/ideas/mikrotik-lte-signal-strength-support-2579).
- [**Socomec Net Vision UPS SNMP**](../procedures/hardware-ups-socomec-netvision-snmp.md) - Added the `battery.temperatureambient.celsius` counter in **battery** service, from community contribution [PR 5493](https://github.com/centreon/centreon-plugins/pull/5493).
- [**Stormshield API**](../procedures/network-stormshield-api.md) - Added new **vpn-tunnels** mode and **list-vpn-tunnels** discovery rule, based on community contribution [PR 5048](https://github.com/centreon/centreon-plugins/pull/5048).
- [**VMware vCenter v4**](../procedures/virtualization-vmware2-vcenter-4.md) - Deprecated VMware vCenter v4.
- [**VMware vCenter v5**](../procedures/virtualization-vmware2-vcenter-5.md) - Deprecated VMware vCenter v5.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Azure Storage Sync**](../procedures/cloud-azure-storage-storagesync.md) - Removed deprecated `StorageSyncRecallIOTotalSizeBytes` metric in **recalls** mode.
- [**Cambium cnPilot SNMP**](../procedures/network-cambium-cnpilot-snmp.md) - Fixed a wrong plugin executable name.
- [**EMC Data Domain SNMP**](../procedures/hardware-storage-emc-datadomain-snmp.md) - Fixed wrong threshold default values in filesystems template.

</TabItem>
</Tabs>

### April

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Exense Step REST API**](../procedures/applications-exense-step-restapi.md) - Initial release of Exense Step REST API.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**APC UPS SNMP**](../procedures/hardware-ups-apc-snmp.md) - Enhance **replace-lasttime** output to be humanly readable in **battery-status** mode, from a [The Watch idea](https://thewatch.centreon.com/ideas/hardware-ups-apc-snmp-plugin-warn-crit-output-with-options-warning-replace-lasttime-critical-replace-lasttime-3427).
- [**Colubris SNMP**](../procedures/network-colubris-snmp.md) - Added the `--check-overload` option to the **uptime** service template.
- [**F5 BigIP SNMP**](../procedures/network-loadbalancers-f5-bigip-snmp.md) - Added new **cpu-usage** mode, based on community contribution [PR 4701](https://github.com/centreon/centreon-plugins/pull/4701).
- [**Fortinet FortiMail SNMP**](../procedures/network-fortinet-fortimail-snmp.md) - Added the `--check-overload` option to the **uptime** service template.
- [**Fortinet FortiSwitch SNMP**](../procedures/network-fortinet-fortiswitch-snmp.md) - Added the `--check-overload` option to the **uptime** service template.
- [**Fortinet Fortigate Rest API**](../procedures/network-fortinet-fortigate-restapi.md) - Added a new **certificates** mode, from community contribution [PR 5473](https://github.com/centreon/centreon-plugins/pull/5473).
- [**Fortinet Fortigate SNMP**](../procedures/network-firewalls-fortinet-fortigate-snmp.md) - Added **switch-usage** mode, **switch discovery rule** and **vdom discovery rule**, from community contribution [PR 5474](https://github.com/centreon/centreon-plugins/pull/5474).
- [**HP-UX SNMP**](../procedures/operatingsystems-hpux-snmp.md) - Added the `--check-overload` option to the **uptime** service template.
- [**IP-Label Ekara Rest API**](../procedures/applications-monitoring-iplabel-ekara-restapi.md) - Steps are now displayed in the actual step order instead of alphabetical.
- [**JMeter**](../procedures/applications-jmeter.md) - Added `--command-path` option as macro in host template.
- [**MySQL/MariaDB**](../procedures/applications-databases-mysql.md) - Enhance uptime date display in **uptime** mode, based on community contribution [PR 4853](https://github.com/centreon/centreon-plugins/pull/4853).
- [**Silverpeak SNMP**](../procedures/network-silverpeak-snmp.md) - Added **interfaces discovery rule**.
- [**Synology SNMP**](../procedures/hardware-storage-synology-snmp.md) - Added the `--check-overload` option to the **uptime** service template.
- [**VMware8 ESX REST API**](../procedures/application-virtualization-vmware8-esx-restapi.md) - Added new **diskio**, **network** and **swap** modes.
- [**Veeam Backup Enterprise Manager Rest API**](../procedures/applications-veeam-vbem-restapi.md) - Added handling of replication jobs to **jobs** mode.
- [**Viptela SNMP**](../procedures/network-viptela-snmp.md) - Added the `--check-overload` option to the **uptime** service template.
- [**Windows CMA**](../procedures/operatingsystems-windows-centreon-monitoring-agent.md) - Added new native checks: **cma-health**, **eventlog** and **services**.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Cisco Standard SNMP**](../procedures/network-cisco-standard-snmp.md) - The `status` metric has been changed in `config-running-ahead`, leading to a breaking-change state.
- [**F5 BigIP SNMP**](../procedures/network-loadbalancers-f5-bigip-snmp.md) - Switched metrics to v2, leading to a breaking-change state.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Cisco Standard SNMP**](../procedures/network-cisco-standard-snmp.md) - Fixed an issue concerning wrong calculations after reboot (sysuptime was not considered) in **configuration** mode, from community contribution [PR 5282](https://github.com/centreon/centreon-plugins/pull/5282).
- [**Eclipse Mosquitto MQTT**](../procedures/applications-eclipse-mosquitto-mqtt.md) - Fixed perfdata options in **numeric-value** mode, from community contribution [PR 5462](https://github.com/centreon/centreon-plugins/pull/5462).
- [**IBM FlashSystem 900 SNMP**](../procedures/hardware-storage-ibm-fs900-snmp.md) - Fixed wrong default value for CRITICALSTATUS in **arrays-status** template.
- [**Sonus SBC SNMP**](../procedures/network-sonus-sbc-snmp.md) - Fixed unknown call method map instance in **dsp-stats** mode, based on community contribution [PR 5477](https://github.com/centreon/centreon-plugins/pull/5477).

</TabItem>
</Tabs>

### March

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**VMware8 ESX REST API**](../procedures/application-virtualization-vmware8-esx-restapi.md) - Initial release of VMWare 8 ESX.
- [**Veeam CMA**](../procedures/applications-veeam-centreon-monitoring-agent.md) - Initial release of Veeam using the CMA, from a [The Watch idea](https://thewatch.centreon.com/ideas/prepare-veeam-template-with-centreon-monitoring-agent-4024).

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**ArubaOS-CX SNMP**](../procedures/network-aruba-aoscx-snmp.md) - Added **uptime**, **spanning tree** and **spanning tree discovery** modes, based on community contribution [PR 5424](https://github.com/centreon/centreon-plugins/pull/5424).
- [**ChapsVision CrossinG SNMP**](../procedures/network-chapsvision-crossing-snmp.md) - Added handling of new OIDs for **antivirus** mode.
- [**Fortinet Fortigate SNMP**](../procedures/network-firewalls-fortinet-fortigate-snmp.md) - Added ` ipsec-tunnels-count` in **vpn** mode, from community contribution [PR 5382](https://github.com/centreon/centreon-plugins/pull/5382).
- [**IBM AS400 Connector**](../procedures/operatingsystems-as400-connector.md) - Added capability to use AS400 SSL connection.
- [**Pure Storage FlashArray Rest API v2**](../procedures/hardware-storage-purestorage-flasharray-v2-restapi.md) - Added `flagged` status attribute in **alerts** mode, from community contribution [PR 5307](https://github.com/centreon/centreon-plugins/pull/5307).

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Azure VPN Gateway**](../procedures/cloud-azure-network-vpngateway.md) - Fixed wrong variable assignment in **vpn-gateway-status** mode.
- [**Cisco UCS SNMP**](../procedures/hardware-servers-cisco-ucs-snmp.md) - Fixed wrong count when memory component is not equipped in **equipment** mode.
- [**EMC Data Domain SNMP**](../procedures/hardware-storage-emc-datadomain-snmp.md) - Added `--timezone` option for equipment in **cleaning** mode to avoid misinterpreting the clean time frame.
- [**Generic SNMP**](../procedures/applications-protocol-snmp.md) - Added missing mandatory parameter in SNMP collection discovery command.
- [**Generic SNMP**](../procedures/applications-protocol-snmp.md) - Fixed an unsafe eval for unknown status option in **collection** mode, based on community contribution [PR 5151](https://github.com/centreon/centreon-plugins/pull/5151).
- [**HTTP Server**](../procedures/applications-protocol-http.md) - Fixed an unsafe eval for unknown status option in **collection** mode, based on community contribution [PR 5151](https://github.com/centreon/centreon-plugins/pull/5151).
- [**IBM AS400 Connector**](../procedures/operatingsystems-as400-connector.md) - Fixed previous pending error.
- [**IP-Label Ekara Rest API**](../procedures/applications-monitoring-iplabel-ekara-restapi.md) - Fixed step metrics when scenario failed in **scenario** mode.
- [**Linux SSH**](../procedures/operatingsystems-linux-ssh.md) - Fixed OS-Linux-SSH-Lvm command.
- [**MongoDB**](../procedures/applications-databases-mongodb.md) - Fixed an unsafe eval for unknown status option in **collection** mode, based on community contribution [PR 5151](https://github.com/centreon/centreon-plugins/pull/5151).
- [**MySQL/MariaDB**](../procedures/applications-databases-mysql.md) - Fixed an unsafe eval for unknown status option in **collection** mode, based on a community contribution [PR 5151](https://github.com/centreon/centreon-plugins/pull/5151).
- [**NetApp Ontap Rest API**](../procedures/hardware-storage-netapp-ontap-restapi.md) - Fixed hardware API requests for bays.
- [**PostgreSQL**](../procedures/applications-databases-postgresql.md) - Fixed an unsafe eval for unknown status option in **collection** mode, based on community contribution [PR 5151](https://github.com/centreon/centreon-plugins/pull/5151).
- [**Raritan PDU SNMP**](../procedures/hardware-pdu-raritan-snmp.md) - Fixed an issue with sensors when powerFactor value is missing.

</TabItem>
</Tabs>

### February

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**HAProxy Web**](../procedures/applications-haproxy-web.md) - Initial release of HAProxy Web.
- [**Podman API**](../procedures/applications-podman-restapi.md) - Initial release of Podman API.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Cyberoam SNMP**](../procedures/network-cyberoam-snmp.md) - Added **HA**, **license**, **VPN** and **VPN discovery** modes, based on a community contribution ([PR 5144](https://github.com/centreon/centreon-plugins/pull/5144)).
- [**Fortinet Fortigate Rest API**](../procedures/network-fortinet-fortigate-restapi.md) - Added threshold options `--warning-last-update` and `--critical-last-update` in **license** mode, from a community contribution ([PR 4964](https://github.com/centreon/centreon-plugins/pull/4964)).
- [**IP-Label Ekara Rest API**](../procedures/applications-monitoring-iplabel-ekara-restapi.md) - Changed status default thresholds and `--timeframe` option default value in **scenario** mode.
- [**Windows NSClient 0.5 NRPE**](../procedures/operatingsystems-windows-nsclient-05-nrpe.md) - Changed pack display name to make it clear that it uses the NRPE protocol.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Azure Database for PostgreSQL**](../procedures/cloud-azure-database-postgresql.md) - Fixed **storage** command by adding spaces before warning options.
- [**Fortinet Fortigate SNMP**](../procedures/network-firewalls-fortinet-fortigate-snmp.md) - Fixed **sdwan** mode incorrect traffic calculation and units, based on a community contribution ([PR 5343](https://github.com/centreon/centreon-plugins/pull/5343)).
- [**Mikrotik SNMP**](../procedures/network-mikrotik-snmp.md) - Fixed **Interfaces** service template that had too many default macros.
- [**MongoDB**](../procedures/applications-databases-mongodb.md) - Added missing dependencies to the plugin for Debian.
- [**Moxa Switch SNMP**](../procedures/network-moxa-switch-snmp.md) - Fixed `--add-duplex-status` option in **interface** mode.
- [**Proxmox Mail Gateway API**](../procedures/applications-proxmox-mg-api.md) - Fixed host macros typo.

</TabItem>
</Tabs>

### January

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Huawei WLC SNMP**](../procedures/network-huawei-wlc-snmp.md) - Initial release of Huawei WLC SNMP from community contribution [PR 5146](https://github.com/centreon/centreon-plugins/pull/5146) and [The Watch idea](https://thewatch.centreon.com/ideas/new-plugin-for-huawei-wlc-controller-2763).

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- **Centreon plugins option** - Added a common `--change-output-adv` plugin option to change the short output and the exit code at the same time.
- [**ArubaOS-CX SNMP**](../procedures/network-aruba-aoscx-snmp.md) - Added new **stack** mode from a [The Watch idea](https://thewatch.centreon.com/ideas/aruba-stack-members-check-if-not-vsf-or-vsx-stack-3832).
- [**Backbox Rest API**](../procedures/network-backbox-restapi.md) - Added **device-backup** mode and its service discovery.
- [**Cisco Meraki Rest API**](../procedures/network-cisco-meraki-restapi.md) - Added `--filter-model` option to host discovery, from community contribution [PR 5228](https://github.com/centreon/centreon-plugins/pull/5228).
- [**FreeBSD SNMP**](../procedures/operatingsystems-freebsd-snmp.md) - Refreshed service template descriptions.
- [**HP Procurve SNMP**](../procedures/network-switchs-hp-procurve-snmp.md) - Added **uptime**, **spanning-tree** modes and **spanning-tree** service discovery from community contribution [PR 5198](https://github.com/centreon/centreon-plugins/pull/5198).
- [**Informix DB SNMP**](../procedures/applications-databases-informix-snmp.md) - Improved the calculation of space used by created log files, from community contribution [PR 4943](https://github.com/centreon/centreon-plugins/pull/4943).
- [**IP-Label Ekara Rest API**](../procedures/applications-monitoring-iplabel-ekara-restapi.md) - Added `--filter-workspaceid` and ` --filter-siteid` options for **incidents** and **scenarios** modes.
- [**Lenovo XCC SNMP**](../procedures/hardware-servers-lenovo-xcc-snmp.md) - Added new components in the **hardware** mode: **cpu**, **memory** and **health**. Planned from a [The Watch idea](https://thewatch.centreon.com/ideas/hardware-server-lenovo-xcc-snmp-plugin-mode-hardware-system-health-memory-and-cpu-table-not-checked-2636). 
- [**NetApp Ontap Rest API**](../procedures/hardware-storage-netapp-ontap-restapi.md) - Added default values for **Volumes** and **Aggregates** service templates.
- [**NetApp Ontap SNMP**](../procedures/hardware-storage-netapp-ontap-snmp.md) - Added **uptime** mode and service template.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Cisco Meraki Rest API**](../procedures/network-cisco-meraki-restapi.md) - Fixed the attributes for VPN statuses.
- [**Huawei Standard SNMP**](../procedures/network-huawei-snmp.md) - Renamed, refactored, and added a new service template.
- [**Stormshield API**](../procedures/network-stormshield-api.md) - Fixed mapped values for **state** and **plugged in interfaces** modes.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- **Debian 12 Bookworm**: Mass update of 557 monitoring connectors has been undertaken to make the automatic installation of the required plugins work on this distribution.
- [**Adder AIM SNMP**](../procedures/hardware-kvm-adder-aim-snmp.md) - Fixed **HW-Kvm-Adder-Aim-SNMP-Server-Usage** command.
- [**Avaya AES SNMP**](../procedures/hardware-telephony-avaya-aes-snmp.md) - Fixed **HW-Telephony-Avaya-Aes-SNMP-Services** command.
- [**Axis Video SNMP**](../procedures/hardware-devices-video-axis-snmp.md) - Fixed wrong fan status mapping leading to false positives, from community contribution [PR 5356](https://github.com/centreon/centreon-plugins/pull/5356)
- [**Azure Classic Storage**](../procedures/cloud-azure-classicstorage-storageaccount.md) - Fixed **Cloud-Azure-ClassicStorage-StorageAccount-Api-File-Share-Quota** command.
- [**Azure Management Costs**](../procedures/cloud-azure-management-costs.md) - Fixed **Cloud-Azure-Management-Costs-Api-Tags-Compliance** command.
- [**Azure Monitor**](../procedures/cloud-azure-management-monitor.md) - Removed unrelated **Loganalytics** service template.
- [**Cambium CnPilot SNMP**](../procedures/network-cambium-cnpilot-snmp.md) - Fixed **Net-cambium-Cnpilot-SNMP-Radios** command.
- [**Colubris SNMP**](../procedures/network-colubris-snmp.md) - Fixed **Net-Colubris-SNMP-Memory** and **Net-Colubris-SNMP-Load** commands. Also fixed plugin to support options from **Net-Colubris-SNMP-Load** command.
- [**Dell OS10 SNMP**](../procedures/network-dell-os10-snmp.md) - Fixed **Net-Dell-Os10-SNMP-Disk-usage** command.
- [**EMC Data Domain SNMP**](../procedures/hardware-storage-emc-datadomain-snmp.md) - Fixed wrong output when cleaning is running and cleaned unused macros in **Filesystem** service template.
- [**Emerson PDU**](../procedures/hardware-pdu-emerson-snmp.md) - Fixed **HW-Pdu-Emerson-SNMP-Receptacles** command.
- [**Fortinet FortiAuthenticator SNMP**](../procedures/network-fortinet-fortiauthenticator-snmp.md) - Fixed **Net-Fortinet-Fortiauthenticator-SNMP-Ha** command.
- [**Github**](../procedures/applications-github-restapi.md) - Fixed **App-Github-Restapi-Repositories-Statistics**, **App-Github-Restapi-Repositories-Pull-Requests**, **App-Github-Restapi-Repositories-Issues** and **App-Github-Restapi-Repositories-Commits** commands as well as the default port and protocol.
- [**IBM Bladecenter Switch SNMP**](../procedures/network-ibm-bladecenter-snmp.md) - Fixed **Net-IBM-Bladecenter-SNMP-Time** command.
- [**IP-Label Ekara Rest API**](../procedures/applications-monitoring-iplabel-ekara-restapi.md) - Fixed scenario monitoring where scenarios names were not correctly ordered.
- [**Lenovo Flex System Switch SNMP**](../procedures/network-lenovo-flexsystem-snmp.md) - Fixed **Net-Lenovo-Flexsystem-SNMP-Time** command.
- [**Linux CMA**](../procedures/operatingsystems-linux-centreon-monitoring-agent.md) - Fixed wrong default values in uptime service.
- [**NetApp Ontap SNMP**](../procedures/hardware-storage-netapp-ontap-snmp.md) - Fixed **Disk-Failed** command.
- [**OpenMetrics**](../procedures/applications-monitoring-openmetrics.md) - Fixed **App-Monitoring-Openmetrics-File-Scrape-Metrics** command.
- [**Panzura SNMP**](../procedures/hardware-storage-panzura-snmp.md) - Removed unrelated service templates.
- [**Patton SmartNode SNMP**](../procedures/network-patton-smartnode-snmp.md) - Fixed **Net-Patton-Smartnode-SNMP-Call** command.
- [**pfSense SNMP**](../procedures/network-firewalls-pfsense-snmp.md) - Split **Net-FW-Pfsense-SNMP-Packet-Stats** into 6 dedicated commands.
- [**SecurActive SNMP**](../procedures/network-securactive-snmp.md) - Fixed **Net-Securactive-SNMP-Bca** and **Net-Securactive-SNMP-Bcn** commands.
- [**SMTP Server**](../procedures/applications-protocol-smtp.md) - Fixed a Perl warning in **App-Protocol-SMTP-Message** and **App-Protocol-SMTP-Login** commands.
- [**Solaris SNMP**](../procedures/operatingsystems-solaris-snmp.md) - Fixed **OS-Solaris-SNMP-Load** command.
- [**Sun MgmtCard**](../procedures/hardware-servers-sun-mgmtcards.md) - Fixed the default behavior of the `--command-plink` option of the plugin.
- [**Sybase**](../procedures/applications-databases-sybase.md) - Fixed **App-DB-Sybase-Databases-Size** command.
- [**VMware VCSA SNMP**](../procedures/applications-vmware-vcsa-snmp.md) - Fixed plugin package name.

</TabItem>
</Tabs>

## 2024

### December

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**AppearTV SNMP**](../procedures/hardware-devices-video-appeartv-snmp.md) - Initial release of AppearTV SNMP.
- [**JMeter**](../procedures/applications-jmeter.md) - Initial release of JMeter.
- [**Skyhigh Web Gateway SNMP**](../procedures/applications-antivirus-skyhigh-webgateway-snmp.md) - Replaces the McAfee Gateaway connector following the MacAfee Webgateway OID [end-of-life announcement](https://success.skyhighsecurity.com/Skyhigh_Secure_Web_Gateway_(On_Prem)/Secure_Web_Gateway_Overview/End-of-life_(EOL)_Dates_for_Secure_Web_Gateway).

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**AIX SSH**](../procedures/operatingsystems-aix-ssh.md) - Added `--warning-usage-prct` and `--critical-usage-prct` to the `OS-AIX-SSH-Storage` command.
- [**AWS Transit Gateway**](../procedures/cloud-aws-transitgateway.md) - Added default value `awscli` for host template custom mode.
- [**AWS VPN**](../procedures/cloud-aws-vpn.md) - Added default value `awscli` for host template custom mode.
- [**Fortinet Fortimanager SNMP**](../procedures/network-fortinet-fortimanager-snmp.md) - Added `device-policy-package-status thresholds` to the `Net-Fortinet-Fortimanager-SNMP-Device-Status` command (from an idea on [TheWatch](https://thewatch.centreon.com/ideas/fortimanager-monitoring-connector-device-status-integrate-policy-package-in-monitoring-connector-4022)).
- [**HP Procurve SNMP**](../procedures/network-switchs-hp-procurve-snmp.md) - Added new mode **stack** from community contribution [PR 5082](https://github.com/centreon/centreon-plugins/pull/5082).
- [**Keysight NVOS Rest API**](../procedures/network-keysight-nvos-restapi.md) - Enhanced **ports** mode and added **license** mode.
- [**Nokia TiMos SNMP**](../procedures/network-nokia-timos-snmp.md) - Added new **sas-alarm** mode from community contribution [PR 5083](https://github.com/centreon/centreon-plugins/pull/5083).
- [**Windows CMA**](../procedures/operatingsystems-windows-centreon-monitoring-agent.md) - Added native checks for CPU, Cpu-detailed, Memory, Storage, Swap and Uptime (these native checks will be available with the upcoming Collect 24.10.3 release).

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Linux SSH**](../procedures/operatingsystems-linux-ssh.md) - Fixed an issue with the **process** mode that wasn't returning the process in some cases. We added a column size limit to avoid filter issues.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Azure Elastic Pool**](../procedures/cloud-azure-database-elasticpool.md) - Fixed an issue with **storage** mode where thresholds weren't taken into account.
- [**Commvault Commserve Rest API**](../procedures/applications-commvault-commserve-restapi.md) - Fixed **storagepools** mode to avoid division by 0, from community feedback [PR 5141](https://github.com/centreon/centreon-plugins/pull/5141).

</TabItem>
</Tabs>

### November

<Tabs groupId="sync">
<TabItem value="Enhancements" label="Enhancements">

- [**Atrica Routeur**](../procedures/network-routers-atrica-snmp.md) - Added service discovery rule for **connections** mode.
- [**Centreon Database**](../procedures/applications-monitoring-centreon-database.md) - Used the correct MariaDB message when checking MySQL replication state.
- [**EMC Data Domain SNMP**](../procedures/hardware-storage-emc-datadomain-snmp.md) - Added several new modes and service discovery rules.
- [**MySQL/MariaDB**](../procedures/applications-databases-mysql.md) - Used the correct MariaDB message when checking MySQL replication state.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**EMC Data Domain SNMP**](../procedures/hardware-storage-emc-datadomain-snmp.md) - Changed mode names and dependencies paths.
- [**Linux Telegraf Agent**](../procedures/operatingsystems-linux-telegraf-agent.md) - The default inherited templates are now passive.
- [**PostgreSQL**](../procedures/applications-databases-postgresql.md) - Fixed `exclude` option working as "include".
- [**Windows Telegraf Agent**](../procedures/operatingsystems-windows-telegraf-agent.md) - The default inherited templates are now passive.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Amazon CloudTrail**](../procedures/cloud-aws-cloudtrail.md) - Fixed command for event lookup, from community feedback [PR 5086](https://github.com/centreon/centreon-plugins/pull/5086).
- [**Eclipse Mosquitto MQTT**](../procedures//applications-eclipse-mosquitto-mqtt.md) - Fixed ` warning-regexp` and `critical-regexp` options.
- [**HPE Primera REST API**](../procedures/hardware-storage-hpe-primera-restapi.md) - Fixed status handling & retry on invalid token, from community feedback [PR 5256](https://github.com/centreon/centreon-plugins/pull/5256).
- [**Speedtest**](../procedures/applications-monitoring-speedtest.md) - Fixed packaging issue leading to conflict between speedtest and speedtest-cli binaries.
- [**Cisco WLC**](../procedures/network-cisco-wlc-snmp.md) - Fixed wrong unit for roundtrip-time.

</TabItem>
</Tabs>

### October

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Linux CMA**](../procedures/operatingsystems-linux-centreon-monitoring-agent.md) - Initial release of Linux CMA.
- [**Windows CMA**](../procedures/operatingsystems-windows-centreon-monitoring-agent.md) - Initial release of Windows CMA.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Ansible Tower**](../procedures/applications-ansible-tower.md) - Added `filter-time` option to **jobs** mode, redesigned from community contribution [PR 4990](https://github.com/centreon/centreon-plugins/pull/4990).
- [**Ansible Tower**](../procedures/applications-ansible-tower.md) - The host discovery now returns a Host IP field.
- [**Cisco Meraki Rest API**](../procedures/network-cisco-meraki-restapi.md) - Added Centreon user-agent key to Meraki API calls.
- [**Cisco Standard**](../procedures/network-cisco-standard-snmp.md) -  Added `add-fc-fe-errors` option to **interfaces** mode.
- [**CyberPower Systems PDU SNMP**](../procedures/hardware-pdu-cyberpower-snmp.md) - Added `phase-voltage` metric to **load** mode.
- [**Linux SNMP v3**](../procedures/operatingsystems-linux-snmpv3.md) - Added an option `force-64bits-counters` to switch to 64-bit counters for **memory** mode.
- [**Linux SNMP**](../procedures/operatingsystems-linux-snmp.md) - Added an option `force-64bits-counters` to switch to 64-bit counters for **memory** mode.
- [**Rubrik Rest API**](../procedures/applications-rubrik-restapi.md) - Added a host macro to support several ways to authenticate to the API.
- [**WD NAS SNMP**](../procedures/hardware-storage-wd-nas-snmp.md) - Added support for ex4100 models in **volumes**, **listvolumes** and **hardware** modes, from community contributions ([PR 4805](https://github.com/centreon/centreon-plugins/pull/4805), [PR 4806](https://github.com/centreon/centreon-plugins/pull/4806) and [PR 4807](https://github.com/centreon/centreon-plugins/pull/4807)).
- [**Cisco WLC**](../procedures/network-cisco-wlc-snmp.md) - Added host macros to the AP host template to make configuration easier.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Cisco WLC**](../procedures/network-cisco-wlc-snmp.md) - Fixed host template used in the host discovery template mapper.
- [**CyberPower Systems PDU SNMP**](../procedures/hardware-pdu-cyberpower-snmp.md) - Fixed power value in **load** mode (the value is no longer multiplied by 10).
- [**HPE Primera REST API**](../procedures/hardware-storage-hpe-primera-restapi.md) - Fixed header leading to API authentication issue, from community feedback [PR 5183](https://github.com/centreon/centreon-plugins/pull/5183).
- [**Linux NRPE4**](../procedures/operatingsystems-linux-nrpe4.md) - Added an `--output-fields` option for some OSs in the **systemd-journal** mode, when journalctl is in version 236 or higher.
- [**Linux SSH**](../procedures/operatingsystems-linux-ssh.md) - Added an `--output-fields` option for some OSs in the **systemd-journal** mode, when journalctl is in version 236 or higher.
- [**Linux Telegraf Agent**](../procedures/operatingsystems-linux-telegraf-agent.md) - Added an `--output-fields` option for some OSs in the **systemd-journal** mode, when journalctl is in version 236 or higher.
- [**Rapid Recovery SNMP**](../procedures/applications-rapidrecovery-snmp.md) - Fixed in typo in commands for the **repository** and **agent** modes.
- [**Stormshield SNMP**](../procedures/network-stormshield-snmp.md) - The temperature value is now correctly used in the **hardware** mode.
- [**VMware vCenter**](../procedures/virtualization-vmware2-vcenter-generic.md) - Fixed the unit for the latency for the **vsan-cluster-usage** mode.

</TabItem>
</Tabs>

### September

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Backbox REST API**](../procedures/network-backbox-restapi.md) - Initial release of Backbox REST API.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Active Directory API**](../procedures/infrastructure-active-directory-nsclient-05-restapi.md) - Added Italian and German language support from community contributions ([PR 5073](https://github.com/centreon/centreon-plugins/pull/5073), [PR 5072](https://github.com/centreon/centreon-plugins/pull/5072) and [PR 5070](https://github.com/centreon/centreon-plugins/pull/5070)).
- [**Active Directory**](../procedures/infrastructure-active-directory-nrpe.md) - Added Italian and German language support from community contributions ([PR 5073](https://github.com/centreon/centreon-plugins/pull/5073), [PR 5072](https://github.com/centreon/centreon-plugins/pull/5072) and [PR 5070](https://github.com/centreon/centreon-plugins/pull/5070)).
- [**IP Fabric API**](../procedures/applications-ipfabric-api.md) - Added the missing SNMP community in host discovery.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Azure SQL Database**](../procedures/cloud-azure-database-sqldatabase.md) - Added the missing `--server` option in some checks.
- [**Hyper-V 2012**](../procedures/virtualization-hyperv-2012-nrpe.md) - Fixed the default `--filter-status` value on VM status.
- [**Hyper-V NSCP API**](../procedures/virtualization-hyperv-nscp-restapi.md) - Fixed the default `--filter-status` value on VM status.

</TabItem>
</Tabs>

### August

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**HPE Primera REST API**](../procedures/hardware-storage-hpe-primera-restapi.md) - First official release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**3CX**](../procedures/applications-voip-3cx-restapi.md) - Added support for authentication on versions higher than 18.0.5 and made the default values more explicit.
- [**Teldat Edge Routers SNMP**](../procedures/network-teldat-snmp.md) - Enhanced the cells-radio mode.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Kubernetes API**](../procedures/cloud-kubernetes-api.md) - Endpoint changed from beta to v1 and split the host templates into API and CLI to make both easier to use.
- [**Office365 Teams**](../procedures/cloud-microsoft-office365-teams.md) - Added a new mode for notifications to face the [approaching deprecation of the webhook in favor of workflows](https://devblogs.microsoft.com/microsoft365dev/retirement-of-office-365-connectors-within-microsoft-teams/).

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Aruba CPPM SNMP**](../procedures/network-aruba-cppm-snmp.md) - Fixed the plugin's packaging.
- [**Sonus SBC **](../procedures/network-sonus-sbc-snmp.md) - Fixed the CPU service template.
- [**VMware VeloCloud**](../procedures/cloud-vmware-velocloud-restapi.md) - Fixed the listing (for discovery) and monitoring of Edges.

</TabItem>
</Tabs>

### July

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Linux Telegraf Agent**](../procedures/operatingsystems-linux-telegraf-agent.md) - Initial release of Linux Telegraf Agent.
- [**Nokia Isam SNMP**](../procedures/network-nokia-isam-snmp.md) - Initial release of Nokia formerly Alcatel Isam SNMP.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Cisco Meraki Rest API**](../procedures/network-cisco-meraki-restapi.md) - Added new mode to monitor VPN tunnels and its associated discovery rule using their network name.
- [**Pacemaker**](../procedures/applications-pacemaker-ssh.md) - Added an `SSHPRIVKEY` host macro allowing to define the path to the private key file for user authentication.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**MySQL/MariaDB**](../procedures/applications-databases-mysql.md) - The way fragmentation is calculated has changed to avoid getting values ​​above 100.
- [**Pacemaker**](../procedures/applications-pacemaker-ssh.md) - The Clustat service template and its associated command are deprecated and have been removed.

</TabItem>
</Tabs>

### June

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Eclipse Mosquitto MQTT**](../procedures/applications-eclipse-mosquitto-mqtt.md)  - Initial release of Eclipse Mosquitto MQTT.
- [**Loggly Rest API**](../procedures/applications-monitoring-loggly-restapi.md) - Initial release of Loggly Rest API.
- [**Windows Telegraf Agent**](../procedures/operatingsystems-windows-telegraf-agent.md) - Initial release of Windows Telegraf Agent.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**HashiCorp Vault Rest API**](../procedures/applications-hashicorp-vault-restapi.md) - Added an option `auth-path` to handle variable path for hashicorp vault authentication ([Community contribution](https://github.com/centreon/centreon-plugins/pull/4764)). This option will be available for the monitoring connectors of the current release and those to come. 
- [**HTTP Server**](../procedures/applications-protocol-http.md) - Added possibility for collection mode to use the `full_url` and `functions` attributes ([Community contribution](https://github.com/centreon/centreon-plugins/pull/4915)). 
- [**TrendMicro Iwsva**](../procedures/applications-trendmicro-iwsva-snmp.md) - Added disk partition discovery rule.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Kadiska Rest API**](../procedures/applications-monitoring-kadiska-restapi.md) - Will no longer be supported and will be deprecated.
- [**TrendMicro Iwsva**](../procedures/applications-trendmicro-iwsva-snmp.md) - Fixed packaging and change thresholds macro naming.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Datacore SANsymphony RESTAPI**](../procedures/hardware-storage-datacore-api.md) - Fixed API path in pools check and added verbosity in monitoring Datacore “monitors” objects.
- [**HTTP Server**](../procedures/applications-protocol-http.md) - Fixed in collection mode an infinite looping if the `parse` attribute was not defined and of another anomaly resulting in an “Unknown” error ([Community contribution](https://github.com/centreon/centreon-plugins/pull/4915)). 
- [**Windows SNMP**](../procedures/operatingsystems-windows-snmp.md) - Fixed an issue with windows services containing parenthesis blocking discovery exportation. This parenthesis will automatically be replaced by square brackets to avoid this issue.

</TabItem>
</Tabs>

### May

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Camera Avigilon SNMP**](../procedures/hardware-devices-camera-avigilon-snmp.md) - Initial release of Avigilon SNMP.
- [**Quanta Rest API**](../procedures/applications-monitoring-quanta-restapi.md) - Initial release of Quanta RESTAPI.
- [**RRDcached**](../procedures/applications-rrdcached.md) - Initial release of RRDCached.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Citrix Netscaler**](../procedures/network-loadbalancers-netscaler-snmp.md) - Fixed status mapping on Citrix PSU ([Community contribution](https://github.com/centreon/centreon-plugins/pull/4722))
- [**FTP Server**](../procedures/applications-protocol-ftp.md) - Fixed file processing when both --filter-file and --max-depth options were used.
- [**HTTP Server**](../procedures/applications-protocol-http.md) - Fixed the package version of perl-JSON-Path and added missing perl-Exporter-Easy package.
- [**Protocol CIFS**](../procedures/applications-protocol-cifs.md) - Fixed file processing when both --filter-file and --max-depth options were used.
- [**Protocol SFTP**](../procedures/applications-protocol-sftp.md) - Fixed file processing when both --filter-file and --max-depth options were used.
- [**Windows WSMAN**](../procedures/operatingsystems-windows-wsman.md) - Fixed the OS-Windows-WSMAN-Services-Macro command and its discovery rule.

</TabItem>
</Tabs>

### April

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Azure Database for PostgreSQL**](../procedures/cloud-azure-database-postgresql.md) - First release of Azure PostgreSQL.
- [**Infor ION Grid**](../procedures/applications-infor-ion-grid-restapi.md) - First release of Infor Ion Grid RESTAPI. 
- [**Veeam WSMAN**](../procedures/applications-veeam-wsman.md) - First release of Veeam WSMAN.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Dell S-series**](../procedures/network-dell-sseries-snmp.md) - New filtering option supported for the SNMP IDs of the interfaces.
- [**Generic SNMP**](../procedures/applications-protocol-snmp.md) - Enhanced the functionality provided by the '--convert-custom-values' option of the 'string-value' mode.
- [**Windows SNMP**](../procedures/operatingsystems-windows-snmp.md) - The 'services' mode can now filter using non-ASCII characters.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Active Directory**](../procedures/infrastructure-active-directory-nrpe.md) - Changed the default NRPE plugin and options for Active Directory.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Azure SQL Database**](../procedures/cloud-azure-database-sqldatabase.md) - Fixed the Cloud-Azure-Database-SqlDatabase-Api-Cpu command.
- [**Elasticsearch**](../procedures/applications-databases-elasticsearch.md) - Removed two useless macros from the App-DB-Elasticsearch-Indice-Statistics-custom service template.
- [**Linux NRPE4**](../procedures/operatingsystems-linux-nrpe4.md) - The 'storage' mode now takes the reserved space of the file systems into account.
- [**Linux SSH**](../procedures/operatingsystems-linux-ssh.md) - The 'storage' mode now takes the reserved space of the file systems into account.

</TabItem>
</Tabs>

### March

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Linux NRPE4**](../procedures/operatingsystems-linux-nrpe4.md) - First release of Linux NRPE4.
- [**Datacore Sansymphony RESTAPI**](../procedures/hardware-storage-datacore-api.md) - First release of Datacore.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Centreon Central**](../procedures/applications-monitoring-centreon-central.md) - Updated host template logo.
- [**Centreon Database**](../procedures/applications-monitoring-centreon-database.md) - Updated host template logo.
- [**Centreon MBI**](../procedures/applications-monitoring-centreon-mbi.md) - Updated host template logo.
- [**Centreon Poller**](../procedures/applications-monitoring-centreon-poller.md) - Updated host template logo.
- [**Centreon SQL Metrics**](../procedures/applications-monitoring-centreon-sql-metrics.md) - Updated host template logo.
- [**Centreon-HA**](../procedures/applications-monitoring-centreon-ha.md) - Updated host template logo.
- [**Linux NRPE3**](../procedures/operatingsystems-linux-nrpe3.md) - Added Open-Files, Pending-Updates and Systemd-Journal service templates. This monitoring connector is now deprecated. For a more standard deployment, monitor your Linux servers using **[Linux NRPE4](../procedures/operatingsystems-linux-nrpe4.md)**.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**APC Sensor SNMP**](../procedures/hardware-sensors-apc-snmp.md) - Fixed an issue causing Perl warnings for 'use of uninitialized value'.
- [**Bluemind SSH**](../procedures/applications-bluemind-ssh.md) - On Webserver service template, use storable as cache method to fix an issue.
- [**Generic SNMP**](../procedures/applications-protocol-snmp.md) - Fixed the App-Protocol-SNMP-Host command and a random behaviour on SNMP-Collection.
- [**Socomec Net Vision UPS SNMP**](../procedures/hardware-ups-socomec-netvision-snmp.md) - Fixed the Netvision version detection in the plugin.

</TabItem>
</Tabs>

### February

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Centreon Map Engine**](../procedures/applications-monitoring-centreon-map-engine-actuator.md) - First release of Centreon Map Engine monitoring connector.
- [**Inmatics PSU Sputnik**](../procedures/hardware-ups-inmatics-sputnik-snmp.md) - First release of Inmatics PSU Sputnik monitoring connector.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Azure Kubernetes Service**](../procedures/cloud-azure-compute-aks.md) - Added Memory, Node-State, Pod-State and Unschedulable-Pods service templates to Azure AKS.
- [**Rubrik Rest API**](../procedures/applications-rubrik-restapi.md) - Enhanced jobs and cache modes.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Aruba Instant SNMP**](../procedures/network-aruba-instant-snmp.md) - Fixed an "uninitialized value in concatenation" issue on AP-Usage.

</TabItem>
</Tabs>

### January

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Avocent ACS 8000**](../procedures/hardware-kvm-avocent-acs-8000-snmp.md) - Initial release of Avocent 8000.
- [**Teldat Edge Routers SNMP**](../procedures/network-teldat-snmp.md) - Initial release of Teldat Edge Routers SNMP.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Dell Xseries**](../procedures/network-switchs-dell-xseries-snmp.md) - Fixed the wrong options in the Net-Dell-Xseries-SNMP-Cpu command.
- [**IBM Storwize**](../procedures/hardware-storage-ibm-storwize-ssh.md) - Fixed date issue and added replication service template.
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - Fixed a regression on sql-string mode.
- [**MySQL/MariaDB**](../procedures/applications-databases-mysql.md) - Fixed a regression on sql-string mode.
- [**Oracle Database**](../procedures/applications-databases-oracle.md) - Fixed a regression on sql-string mode.
- [**Warp10 Sensision**](../procedures/applications-databases-warp10-sensision.md) - Fixed an issue that blocked the uninstallation process and a broker command.

</TabItem>
</Tabs>

## 2023

### December

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Linux SNMP v3**](../procedures/operatingsystems-linux-snmpv3.md) [EXPERIMENTAL] - Initial release of Linux SNMP v3. This experimental plugin contains a host template with native v3 custom macros. Once we'll have gathered some feedback, we'll integrate this template into the [**Linux SNMP**](../procedures/operatingsystems-linux-snmp.md) connector.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Centreon Central**](../procedures/applications-monitoring-centreon-central.md) - Replace the old logo with the current one.
- [**Centreon Database**](../procedures/applications-monitoring-centreon-database.md) - Replace the old logo with the current one.
- [**Centreon MBI**](../procedures/applications-monitoring-centreon-mbi.md) - Replace the old logo with the current one.
- [**Centreon Map**](../procedures/applications-monitoring-centreon-map-jmx.md) - Replace the old logo with the current one.
- [**Centreon Map4**](../procedures/applications-monitoring-centreon-map4-jmx.md) - Replace the old logo with the current one.
- [**Centreon Poller**](../procedures/applications-monitoring-centreon-poller.md) - Replace the old logo with the current one.
- [**Centreon SQL Metrics**](../procedures/applications-monitoring-centreon-sql-metrics.md) - Replace the old logo with the current one.
- [**Centreon-HA**](../procedures/applications-monitoring-centreon-ha.md) - Replace the old logo with the current one.
- [**Gorgone Rest API**](../procedures/applications-gorgone-restapi.md) - Replace the old logo with the current one.
- [**Linux SNMP**](../procedures/operatingsystems-linux-snmp.md) - Added the `--check-overload` option in the `EXTRAOPTIONS` macro.
- [**Linux SNMP**](../procedures/operatingsystems-linux-snmp.md) - The Uptime service now supports floating numbers in thresholds.
- [**Windows SNMP**](../procedures/operatingsystems-windows-snmp.md) - Added the `--check-overload` option in the `EXTRAOPTIONS` macro.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Alcatel Omniswitch**](../procedures/network-switchs-alcatel-omniswitch-snmp.md) - The Traffic-Global service template is now replaced by Interfaces.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Citrix Acceleration**](../procedures/network-citrix-appacceleration-snmp.md) - Fixed incorrect carriage return in Service Discovery commands.
- [**Stormshield API**](../procedures/network-stormshield-api.md) - Fixed an incorrect option in the HA command.
- [**Synology**](../procedures/hardware-storage-synology-snmp.md) - Fixed an issue with the status that was returned when disks were failing.
- [**UPS Standard**](../procedures/hardware-ups-standard-rfc1628-snmp.md) - Fixed the plugin's input-lines mode when all lines were at 0.

</TabItem>
</Tabs>

### November

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**ChapsVision CrossinG SNMP**](../procedures/network-chapsvision-crossing-snmp.md) - Initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Centreon SQL Metrics**](../procedures/applications-monitoring-centreon-sql-metrics.md) - Added execution-time template and cleaned up duplicate templates.
- [**HTTP Server**](../procedures/applications-protocol-http.md) - Improved the troubleshooting/debug messages of HTTP Collections.
- [**Printer standard**](../procedures/hardware-printers-standard-rfc3805-snmp.md) - The plugin now handles marker supplies of type "other".
- [**Wazuh Rest API**](../procedures/applications-wazuh-restapi.md) - Updated the logo.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Amazon CloudFront**](../procedures/cloud-aws-cloudfront.md) - Fixed the Cloud-Aws-CloudFront-Api-HostDiscovery host discovery command.
- [**Azure Data Factory**](../procedures/cloud-azure-datafactory-factories.md) - Fixed the required plugin's package name.
- [**Azure Discover**](../procedures/cloud-azure-management-discover.md) - Added the missing **Azure Tenant Discovery** host discovery provider.
- [**Cisco Wap**](../procedures/network-cisco-wap-snmp.md) - Fixed the Net-Cisco-Wap-SNMP-Clients command.
- [**HP Ilo XMLAPI**](../procedures/hardware-servers-hp-ilo-xmlapi.md) - Fixed the plugin that returned a CRITICAL state instead of a WARNING state.
- [**Hitachi HCP SNMP**](../procedures/hardware-storage-hitachi-hcp-snmp.md) - Fixed the service discovery macro commands.
- [**Juniper ISG**](../procedures/network-juniper-isg-snmp.md) - The Hardware mode no longer returns an UNKNOWN state for fans in a failed state.
- [**Juniper SSG**](../procedures/network-firewalls-juniper-ssg-snmp.md) - The Hardware mode no longer returns an UNKNOWN state for fans in a failed state.
- [**Netbackup SSH**](../procedures/applications-netbackup-ssh.md) - Fixed the App-Netbackup-SSH-Drive-Cleaning command.
- [**SmarterMail Server**](../procedures/applications-smartermail-api.md) - Fixed the App-Smartermail-Api-Spools command.
- [**VMware ESX**](../procedures/virtualization-vmware2-esx.md) - Fixed a bug in VMware health.
- [**VMware vCenter**](../procedures/virtualization-vmware2-vcenter-generic.md) - Fixed the macro discovery command for datacenter discovery.
- [**VMware vCenter**](../procedures/virtualization-vmware2-vcenter-generic.md) - Fixed a bug in VMware health.
- [**Windows NSClient 0.5**](../procedures/operatingsystems-windows-nsclient-05-nrpe.md) - Fixed the certificate check command.
- [**Windows NSClient API**](../procedures/operatingsystems-windows-nsclient-05-restapi.md) - Fixed the certificate check command.
- [**Windows SNMP**](../procedures/operatingsystems-windows-snmp.md) - Fixed the bug on Windows SNMP Services monitoring returning "UNKNOWN: No service found." instead of CRITICAL.

</TabItem>
</Tabs>

### October

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Docker SSH**](../procedures/applications-docker-ssh.md) - Initial release.
- [**EES UPS SNMP**](../procedures/hardware-ups-ees-snmp.md) - Initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Amazon EC2**](../procedures/cloud-aws-ec2.md) - New host check commands to monitor EC2 instances and auto-scaling groups.
- [**Amazon RDS**](../procedures/cloud-aws-rds.md) - New host check command to monitor all RDS host templates.
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - Option --printf-value of mode sql-string supports a new format for variable names (e.g. `--printf-value="%{value_field}"`).
- [**MongoDB**](../procedures/applications-databases-mongodb.md) - Added the ability to collect shards statistics in Collection-Statistics and Database-Statistics.
- [**MySQL/MariaDB**](../procedures/applications-databases-mysql.md) - Option --printf-value of mode sql-string supports a new format for variable names (e.g. `--printf-value="%{value_field}"`).
- [**Oracle Database**](../procedures/applications-databases-oracle.md) - Option --printf-value of mode sql-string supports a new format for variable names (e.g. `--printf-value="%{value_field}"`).
- [**Speedtest**](../procedures/applications-monitoring-speedtest.md) - Added the unit to jitter service.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**PostgreSQL**](../procedures/applications-databases-postgresql.md) - Added `--database` option to the SQL statement command.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**AWS Discover**](../procedures/cloud-aws-cloudwatch-discover.md) - Added the missing is\_password attribute to the host discovery provider.
- [**Amazon FSx**](../procedures/cloud-aws-fsx.md) - Linked the freespace template to the right check command.
- [**ArubaOS-CX SNMP**](../procedures/network-aruba-aoscx-snmp.md) - Fixed the hardware mode: "ready" states now give OK status.
- [**Azure Functions**](../procedures/cloud-azure-compute-functions.md) - Linked Executions template to the right check command.
- [**cAdvisor API**](../procedures/cloud-cadvisor-api.md) - Fixed a **Use of uninitialized value** error on Container-Usage mode.
- [**Fortinet Fortigate Rest API**](../procedures/network-fortinet-fortigate-restapi.md) - Fixed a **Not an ARRAY reference**  error on System mode.

</TabItem>
</Tabs>

### September

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Sahi Pro Rest API**](../procedures/applications-sahipro-restapi.md) - First release.
- [**Optelecom camera SNMP**](../procedures/hardware-devices-camera-optelecom-snmp.md) - First release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Linux SNMP**](../procedures/operatingsystems-linux-snmp.md) - New service discovery rule: disk-io.
- [**Linux SSH**](../procedures/operatingsystems-linux-ssh.md) - New service template: systemd-journal + new service discovery rule: systemd-service.
- [**NetApp Ontap Rest API**](../procedures/hardware-storage-netapp-ontap-restapi.md) - now skipping empty FRUs (Field Replaceable Units).

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Linux SSH**](../procedures/operatingsystems-linux-ssh.md) - Replaced **directlvm-usage** mode with new **lvm** mode (breaks only if used with custom command).

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Alvarion BreezeACCESS SNMP**](../procedures/network-alvarion-breezeaccess-snmp.md) - Fixed interfaces service template.
- [**APC UPS SNMP**](../procedures/hardware-ups-apc-snmp.md) - Fixed **input-lines** mode.
- [**Barracuda Cloudgen SNMP**](../procedures/network-barracuda-cloudgen-snmp.md) - Fixed interfaces service template.
- [**Citrix Netscaler**](../procedures/network-loadbalancers-netscaler-snmp.md) - Fixed the status mapping for power supplies in Health service template.
- [**F5 BigIP**](../procedures/network-loadbalancers-f5-bigip-snmp.md) - Fixed a bug causing a failure when the pool name was too long.
- [**InfluxDB**](../procedures/applications-databases-influxdb.md) - Fixed a bug causing unknown status with "uninitialized values" when running multiple queries.
- [**Linux SSH**](../procedures/operatingsystems-linux-ssh.md) - Fixed an issue on the cpu mode causing stats calculation to fail when there was only one processor.
- [**Mikrotik SNMP**](../procedures/network-mikrotik-snmp.md) - Fixed interfaces service template.
- [**Peplink Pepwave SNMP**](../procedures/network-peplink-pepwave-snmp.md) - Fixed interfaces service template.
- [**Perle IDS SNMP**](../procedures/network-perle-ids-snmp.md) - Fixed interfaces service template.
- [**Rad Airmux SNMP**](../procedures/network-rad-airmux-snmp.md) - Fixed interfaces service template.
- [**Ubiquiti Edge SNMP**](../procedures/network-ubiquiti-edge-snmp.md) - Fixed interfaces service template.
- [**X509 Certificate**](../procedures/applications-protocol-x509.md) - Renamed the pack.

</TabItem>
</Tabs>

### August

> **Major change impacting all host discovery providers**: the default host templates used in host discovery used to be the *read-only* ones. The "-custom" *read-write* ones are now used. As an example, **generic-active-host-custom** will be used instead of **generic-active-host**. See "Breaking changes" for more information.


<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Rittal CMC3 SNMP**](../procedures/hardware-sensors-rittal-cmc3-snmp.md) - initial release.
- [**SailPoint IdentityNow Rest API**](../procedures/applications-sailpoint-identitynow-restapi.md) - initial release.
- [**Tosca Rest API**](../procedures/applications-tosca-restapi.md) - initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**APC UPS**](../procedures/hardware-ups-apc-snmp.md) - added Time and Uptime services.
- [**AudioCodes**](../procedures/network-audiocodes-snmp.md) - added Sbc-Calls service.
- [**Azure App Service**](../procedures/cloud-azure-web-appservice.md) - removed privatebytes threshold from Memory service.
- [**Azure Functions**](../procedures/cloud-azure-compute-functions.md) - removed privatebytes threshold from Memory service.
- [**Azure Management Costs**](../procedures/cloud-azure-management-costs.md) - moved to correct pack category.
- [**IP Fabric API**](../procedures/applications-ipfabric-api.md) - updated the logo.
- [**IP-Label Newtest Rest API**](../procedures/applications-monitoring-iplabel-newtest-restapi.md) - added the **--timeframe** option to scenario mode.
- [**Speedtest**](../procedures/applications-monitoring-speedtest.md) - now using Ookla's speedtest.
- [**UPS Standard**](../procedures/hardware-ups-standard-rfc1628-snmp.md) - added thresholds for output-lines and alarms modes.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Teltonika SNMP**](../procedures/network-teltonika-snmp.md) - renamed System service to Modem.
- [**AWS Billing**](../procedures/cloud-aws-billing.md) - now using "*-custom" host templates as Host Discovery default template.
- [**AWS Discover**](../procedures/cloud-aws-cloudwatch-discover.md) - now using "*-custom" host templates as Host Discovery default template.
- [**AWS ELB**](../procedures/cloud-aws-elb.md) - now using "*-custom" host templates as Host Discovery default template.
- [**AWS Lambda**](../procedures/cloud-aws-lambda.md) - now using "*-custom" host templates as Host Discovery default template.
- [**AWS VPN**](../procedures/cloud-aws-vpn.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Amazon API Gateway**](../procedures/cloud-aws-apigateway.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Amazon Backup Vault**](../procedures/cloud-aws-backup.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Amazon CloudFront**](../procedures/cloud-aws-cloudfront.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Amazon Direct Connect**](../procedures/cloud-aws-directconnect.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Amazon EBS**](../procedures/cloud-aws-ebs.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Amazon EC2**](../procedures/cloud-aws-ec2.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Amazon EFS**](../procedures/cloud-aws-efs.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Amazon ElastiCache**](../procedures/cloud-aws-elasticache.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Amazon FSx**](../procedures/cloud-aws-fsx.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Amazon Kinesis**](../procedures/cloud-aws-kinesis.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Amazon RDS**](../procedures/cloud-aws-rds.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Amazon S3**](../procedures/cloud-aws-s3.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Amazon SNS**](../procedures/cloud-aws-sns.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Amazon SQS**](../procedures/cloud-aws-sqs.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Ansible Tower**](../procedures/applications-ansible-tower.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Ansible**](../procedures/applications-ansible-cli.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Azure Event Hubs**](../procedures/cloud-azure-analytics-eventhubs.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Ericsson ENM API**](../procedures/applications-ericsson-enm-api.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Generic SNMP**](../procedures/applications-protocol-snmp.md) - now using "*-custom" host templates as Host Discovery default template.
- [**IP Fabric API**](../procedures/applications-ipfabric-api.md) - now using "*-custom" host templates as Host Discovery default template.
- [**IP-Label Ekara Rest API**](../procedures/applications-monitoring-iplabel-ekara-restapi.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Kadiska Rest API**](../procedures/applications-monitoring-kadiska-restapi.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Nmap CLI**](../procedures/applications-nmap-cli.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Rudder**](../procedures/applications-rudder-restapi.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Thales Mistral VS9 Rest API**](../procedures/applications-thales-mistral-vs9-restapi.md) - now using "*-custom" host templates as Host Discovery default template.
- [**Windows SNMP**](../procedures/operatingsystems-windows-snmp.md) - added options for Service-Generic mode (may change the behaviour of existing services).

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Gorgy NTP Server**](../procedures/hardware-device-gorgy-ntpserver-snmp.md) - fixed the $_HOSTSNMPEXTRAOPTIONS$ macros.
- [**NetApp Ontap SNMP**](../procedures/hardware-storage-netapp-ontap-snmp.md) - fixed the $_HOSTSNMPEXTRAOPTIONS$ macros.
- [**Pure Storage FlashArray Rest API v2**](../procedures/hardware-storage-purestorage-flasharray-v2-restapi.md) - fixed an error that occurred when the storage size was zero.

</TabItem>
</Tabs>

### July

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Fortinet FortiMail SNMP**](../procedures/network-fortinet-fortimail-snmp.md) - initial release.
- [**Veeam Backup Enterprise Manager Rest API**](../procedures/applications-veeam-vbem-restapi.md) - initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Aruba CPPM SNMP**](../procedures/network-aruba-cppm-snmp.md) - added swap monitoring.
- [**Azure SQL Database**](../procedures/cloud-azure-database-sqldatabase.md) - added CPU and Memory monitoring.
- [**Cisco Meraki Rest API**](../procedures/network-cisco-meraki-restapi.md) - added thresholds for devices monitoring.
- [**Cisco Standard**](../procedures/network-cisco-standard-snmp.md) - added interfaces monitoring.
- [**Cisco WLC**](../procedures/network-cisco-wlc-snmp.md) - added a host discovery rule.
- [**Generic SNMP**](../procedures/applications-protocol-snmp.md) - added dependencies to avoid errors when using host discovery.
- [**IP Fabric API**](../procedures/applications-ipfabric-api.md) - updated path verification service.
- [**OneAccess SNMP**](../procedures/network-oneaccess-snmp.md) - added options to Cells-Radio monitoring.
- [**Palo Alto firewall SNMP**](../procedures/network-firewalls-paloalto-standard-snmp.md) - added interfaces monitoring.
- [**Rubrik Rest API**](../procedures/applications-rubrik-restapi.md) - added job monitoring.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**AWS ELB**](../procedures/cloud-aws-elb.md) - fixed the host discovery unicity.
- [**IP-Label Datametrie Rest API**](../procedures/applications-monitoring-iplabel-datametrie-restapi.md) - marked as deprecated (service end of life).
- [**Dell PowerStore Rest API**](../procedures/hardware-storage-dell-powerstore-restapi.md) - fixed bug on Memory.

</TabItem>
</Tabs>

### June

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Amazon CloudTrail**](../procedures/cloud-aws-cloudtrail.md) - initial release.
- [**Cambium cnPilot SNMP**](../procedures/network-cambium-cnpilot-snmp.md) - initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Palo Alto firewall SSH**](../procedures/network-firewalls-paloalto-standard-ssh.md) - added new licences mode.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Windows NSClient 0.5**](../procedures/operatingsystems-windows-nsclient-05-nrpe.md) - Updated default NRPE client and options.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Adva FSP 3000 SNMP**](../procedures/network-adva-fsp3000-snmp.md) - Fixed options for interfaces mode.
- [**Hitachi NAS**](../procedures/hardware-storage-hitachi-hnas-snmp.md) - Fixed option in virtual-volumes-quotas mode.

</TabItem>
</Tabs>

### May

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Amazon Direct Connect**](../procedures/cloud-aws-directconnect.md) - initial release.
- [**HMS Netbiter Argos RestAPI**](../procedures/hardware-devices-hms-netbiter-argos-restapi.md) - initial release.
- [**Keysight NVOS Rest API**](../procedures/network-keysight-nvos-restapi.md) - initial release.
- [**Outscale**](../procedures/cloud-outscale.md) - initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Generic SNMP**](../procedures/applications-protocol-snmp.md) - added a SNMP-based host template.
- [**Linux SSH**](../procedures/operatingsystems-linux-ssh.md) - updated diskio command options.
- [**MySQL/MariaDB**](../procedures/applications-databases-mysql.md) - added a collection service.
- [**Protocol TCP**](../procedures/applications-protocol-tcp.md) - added a TCP-based host template.
- [**Protocol UDP**](../procedures/applications-protocol-udp.md) - added a UDP-based host template.
- [**Sonus SBC **](../procedures/network-sonus-sbc-snmp.md) - change thresholds names.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Azure Policies States**](../procedures/cloud-azure-policyinsights-policystates.md) - Add policy-name macro.
- [**Azure Policies States**](../procedures/cloud-azure-policyinsights-policystates.md) - changed command name.
- [**Centreon Poller**](../procedures/applications-monitoring-centreon-poller.md) - fix options for Broker stats.
- [**xFusion iBMC SNMP**](../procedures/hardware-servers-xfusion-ibmc-snmp.md) - wrong command.

</TabItem>
</Tabs>

### April

> In the Monitoring Connector Manager, you may notice that all connectors have been updated. If they are not listed in the table below, they haven’t been modified: they have been republished in order to take into account the last version of their plugin.

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Aruba CPPM SNMP**](../procedures/network-aruba-cppm-snmp.md) - initial release.
- [**Opengear SNMP**](../procedures/network-opengear-snmp.md) - initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Control-M Rest API**](../procedures/applications-controlm-restapi.md) - service jobs add option **--job-name**.
- [**Fortinet Fortigate**](../procedures/network-firewalls-fortinet-fortigate-snmp.md) - added default value for CRITICALSTATUS macro in Traffic-Global.
- [**VMware VM**](../procedures/virtualization-vmware2-vm.md) - added **ip_vmanagement** and **ip_vmotion** to Host Discovery attributes.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Kadiska Rest API**](../procedures/applications-monitoring-kadiska-restapi.md) - added various improvements.

</TabItem>
</Tabs>

### March

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Azure Policies States**](../procedures/cloud-azure-policyinsights-policystates.md) - initial release.
- [**Control-M Rest API**](../procedures/applications-controlm-restapi.md) - initial release.
- [**Riello UPS SNMP**](../procedures/hardware-ups-riello-snmp.md) - initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Azure Discover**](../procedures/cloud-azure-management-discover.md) - add missing packs for discovery.
- [**CheckPoint firewall**](../procedures/network-firewalls-checkpoint-snmp.md) - add disk service.
- [**Cisco WLC**](../procedures/network-cisco-wlc-snmp.md) - add AP discovery.
- [**UPS Standard**](../procedures/hardware-ups-standard-rfc1628-snmp.md) - add thresholds for alarm services.
- [**VMware ESX**](../procedures/virtualization-vmware2-esx.md) - new attributes and fixed types.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Centreon SQL Metrics**](../procedures/applications-monitoring-centreon-sql-metrics.md) - fix partitioning mode.
- [**Kubernetes API**](../procedures/cloud-kubernetes-api.md) - fix node host discovery.

</TabItem>
</Tabs>

### February

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Oracle UCP JMX**](../procedures/applications-oracle-ucp-jmx.md) - initial release.
- [**WD NAS SNMP**](../procedures/hardware-storage-wd-nas-snmp.md) - initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Alcatel Omniswitch**](../procedures/network-switchs-alcatel-omniswitch-snmp.md) - add interfaces service.
- [**Azure SQL Database**](../procedures/cloud-azure-database-sqldatabase.md) - add EXTRAOPTIONS on health template.
- [**Dell PowerStore Rest API**](../procedures/hardware-storage-dell-powerstore-restapi.md) - add service memory.
- [**Kubernetes API**](../procedures/cloud-kubernetes-api.md) - add **--namespace** option.
- [**Raritan PDU**](../procedures/hardware-pdu-raritan-snmp.md) - add external-sensors mode.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Jenkins API**](../procedures/applications-jenkins.md) - changed service name and options.

</TabItem>
</Tabs>

### January

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Talend TMC API**](../procedures/cloud-talend-tmc-api.md) - initial release.
- [**Vectra Rest API**](../procedures/network-vectra-restapi.md) - initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Pure Storage FlashArray Legacy Rest API**](../procedures/hardware-storage-purestorage-flasharray-legacy-restapi.md) - refactoring purestorage rest api.
- [**Pure Storage FlashArray Rest API v2**](../procedures/hardware-storage-purestorage-flasharray-v2-restapi.md) - refactoring purestorage rest api.
- [**Pure Storage FlashBlade Rest API v2**](../procedures/hardware-storage-purestorage-flashblade-v2-restapi.md) - refactoring purestorage rest api.
- [**Pure Storage RestAPI**](../procedures/hardware-storage-purestorage-restapi.md) - refactoring purestorage rest api.
- [**Linux NRPE3**](../procedures/operatingsystems-linux-nrpe3.md) - update diskio command options.
- [**Amazon ElastiCache**](../procedures/cloud-aws-elasticache.md) - enh (cloud-aws-elasticache): Add discovery mode/rule for AWS ElastiCache.
- [**Centreon SQL Metrics**](../procedures/applications-monitoring-centreon-sql-metrics.md) - fix (sql-metrics): add poller delay.
- [**Amazon CloudFront**](../procedures/cloud-aws-cloudfront.md) - enh (cloud-aws-cloudfront): Add discovery mode/rule for AWS CloudFront.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Amazon RDS**](../procedures/cloud-aws-rds.md) - fix typo cloud-aws-rds instance-status mode.
- [**AWS Billing**](../procedures/cloud-aws-billing.md) - fix (virtualization-proxmox-ve-restapi): unlock host discovery parameters.
- [**Cisco Meraki Rest API**](../procedures/network-cisco-meraki-restapi.md) - fix (virtualization-proxmox-ve-restapi): unlock host discovery parameters.
- [**Kadiska Rest API**](../procedures/applications-monitoring-kadiska-restapi.md) - fix(kadiska): fix the discovery commands and arguments.
- [**Nmap CLI**](../procedures/applications-nmap-cli.md) - fix(pp): increased release number.
- [**Proxmox VE**](../procedures/virtualization-proxmox-ve-restapi.md) - fix (virtualization-proxmox-ve-restapi): unlock host discovery parameters.
- [**RabbitMQ RestAPI**](../procedures/applications-rabbitmq-restapi.md) - Update MACROS values.

</TabItem>
</Tabs>

## 2022

### December

<Tabs groupId="sync">

<TabItem value="New connectors" label="New connectors">

- [**Stormshield API**](../procedures/network-stormshield-api.md) - initial release.
- [**Patton SmartNode SNMP**](../procedures/network-patton-smartnode-snmp.md) - Add Patton Snmp Monitoring Connector.
- [**APC Sensor SNMP**](../procedures/hardware-sensors-apc-snmp.md) - initial release.

</TabItem>

<TabItem value="Enhancements" label="Enhancements">

- [**NetApp Ontap Rest API**](../procedures/hardware-storage-netapp-ontap-restapi.md) - add service quotas.
- [**Thales Mistral VS9 Rest API**](../procedures/applications-thales-mistral-vs9-restapi.md) - add service clusters.
- [**Office 365**](../procedures/cloud-microsoft-office365-management.md) - add subscriptions service.
- [**Hitachi NAS**](../procedures/hardware-storage-hitachi-hnas-snmp.md) - add service virtual-volumes-quotas.

</TabItem>

<TabItem value="Breaking changes" label="Breaking changes">

- [**Informix DB**](../procedures/applications-databases-informix.md) - change sql-statement option protection.
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - change sql-statement option protection.
- [**MySQL/MariaDB**](../procedures/applications-databases-mysql.md) - change sql-statement option protection.
- [**Oracle Database**](../procedures/applications-databases-oracle.md) - change sql-statement option protection.
- [**PostgreSQL**](../procedures/applications-databases-postgresql.md) - change sql-statement option protection.
- [**Sybase**](../procedures/applications-databases-sybase.md) - change sql-statement option protection.
- [**Antivirus ClamAV**](../procedures/applications-antivirus-clamav-ssh.md) - use new ssh backend.

</TabItem>

</Tabs>

### November

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Himoinsa UPS**](../procedures/hardware-ups-himoinsa-snmp.md) - Adding Himoinsa Monitoring Connector.
- [**Azure Data Factory**](../procedures/cloud-azure-datafactory-factories.md) - New monitoring pack.
- [**xFusion iBMC SNMP**](../procedures/hardware-servers-xfusion-ibmc-snmp.md) - New monitoring pack.
- [**Enterasys SNMP**](../procedures/network-enterasys-snmp.md) - New monitoring pack.
- [**Avaya CM SNMP**](../procedures/hardware-telephony-avaya-cm-snmp.md) - New monitoring pack.
- [**PICOS SNMP**](../procedures/operatingsystems-picos-snmp.md) - Adding Pica8 PICOS Monitoring Connector.
- [**Thales Mistral VS9 Rest API**](../procedures/applications-thales-mistral-vs9-restapi.md) - New monitoring pack.
- [**PineApp Mail Secure**](../procedures/applications-pineapp-securemail-snmp.md) - Add new Pineapp Secure mail Pack.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Azure Management Costs**](../procedures/cloud-azure-management-costs.md) - Cost-Explorer, Orphan-Resources, Hybrid-Benefits, Tags-Compliance.
- [**Generic SNMP**](../procedures/applications-protocol-snmp.md) - New SNMP Host discovery for IP protocol (rfc4293).
- [**Huawei OceanStor SNMP**](../procedures/hardware-storage-huawei-oceanstor-snmp.md) - Add new service to check luns.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Ansible**](../procedures/applications-ansible-cli.md) - Migrate and secure the underlying modes.
- [**EMC RecoveryPoint**](../procedures/applications-backup-emc-recoverypoint-ssh.md) - Migrate and secure the underlying modes.
- [**Sun SFxxK**](../procedures/hardware-servers-sun-sfxxk-pssh.md) - Migrate and secure the underlying modes.
- [**Cisco Standard SSH**](../procedures/network-cisco-standard-ssh.md) - Migrate and secure the underlying modes.
- [**Stormshield SSH**](../procedures/network-stormshield-ssh.md) - Migrate and secure the underlying modes.
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - Replace a standard command by dedicated ones.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**NetApp Ontap Rest API**](../procedures/hardware-storage-netapp-ontap-restapi.md) - Adding Aggregates service template.
- [**IP-Label Ekara Rest API**](../procedures/applications-monitoring-iplabel-ekara-restapi.md) - Fix PASSWORD and FILTER macros attributes.
- [**Windows NSClient 0.5**](../procedures/operatingsystems-windows-nsclient-05-nrpe.md) - Fix erroneous mode name in Updates command.
- [**Mikrotik SNMP**](../procedures/network-mikrotik-snmp.md) - Remove wrong options from the uptime command.

</TabItem>
</Tabs>

### October

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**VMware VCSA SNMP**](../procedures/applications-vmware-vcsa-snmp.md) - New Pack to check VMWare vCenter Appliance OS with SNMP.
- [**Splunk**](../procedures/applications-monitoring-splunk-api.md) - Adding Splunk Monitoring Connector.
- [**Aruba Orchestrator Rest API**](../procedures/network-aruba-orchestrator-restapi.md) - New Pack monitoring the orchestrator using its restapi.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Base Pack**](../procedures/base-generic.md) - add macro service EXTRAOPTIONS.
- [**Kadiska Rest API**](../procedures/applications-monitoring-kadiska-restapi.md) - Adding new STPL.
- [**Windows NSClient 0.5**](../procedures/operatingsystems-windows-nsclient-05-nrpe.md) - add service updates for windows pack.
- [**Windows NSClient API**](../procedures/operatingsystems-windows-nsclient-05-restapi.md) - add service updates for windows pack.
- [**Windows WSMAN**](../procedures/operatingsystems-windows-wsman.md) - add service updates for windows pack.
- [**Alcatel Omniswitch**](../procedures/network-switchs-alcatel-omniswitch-snmp.md) - Add new service to check virtual chassis.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Fujitsu Eternus DX**](../procedures/hardware-storage-fujitsu-eternus-dx-ssh.md) - use new ssh backend.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Amazon API Gateway**](../procedures/cloud-aws-apigateway.md) - Fix bug with assume-role option.
- [**Amazon Backup Vault**](../procedures/cloud-aws-backup.md) - Fix bug with assume-role option.
- [**AWS Billing**](../procedures/cloud-aws-billing.md) - Fix bug with assume-role option.
- [**AWS Discover**](../procedures/cloud-aws-cloudwatch-discover.md) - Fix bug with assume-role option.
- [**Amazon EBS**](../procedures/cloud-aws-ebs.md) - Fix bug with assume-role option.
- [**Amazon EC2**](../procedures/cloud-aws-ec2.md) - Fix bug with assume-role option.
- [**Amazon EFS**](../procedures/cloud-aws-efs.md) - Fix bug with assume-role option.
- [**AWS ELB**](../procedures/cloud-aws-elb.md) - Fix bug with assume-role option.
- [**Amazon FSx**](../procedures/cloud-aws-fsx.md) - Fix bug with assume-role option.
- [**Amazon Kinesis**](../procedures/cloud-aws-kinesis.md) - Fix bug with assume-role option.
- [**AWS Lambda**](../procedures/cloud-aws-lambda.md) - Fix bug with assume-role option.
- [**Amazon RDS**](../procedures/cloud-aws-rds.md) - Fix bug with assume-role option.
- [**Amazon S3**](../procedures/cloud-aws-s3.md) - Fix bug with assume-role option.
- [**Amazon SNS**](../procedures/cloud-aws-sns.md) - Fix bug with assume-role option.
- [**Amazon SQS**](../procedures/cloud-aws-sqs.md) - Fix bug with assume-role option.
- [**AWS VPN**](../procedures/cloud-aws-vpn.md) - Fix bug with assume-role option.
- [**HP 3PAR SSH**](../procedures/hardware-storage-hp-3par-ssh.md) - fix macros for service cages.
- [**Office 365 Azure AD**](../procedures/cloud-microsoft-office365-azuread.md) - Fixing typo in check command.

</TabItem>
</Tabs>

### September

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**AWS Discover**](../procedures/cloud-aws-cloudwatch-discover.md) - Add unified AWS host discovery and add assume-role support.
- [**Azure Management Costs**](../procedures/cloud-azure-management-costs.md) - New Pack to monitor Azure budgets consumptions.
- [**Cisco Umbrella**](../procedures/network-cisco-umbrella-snmp.md) - Add Cisco Umbrella Pack.
- [**Dell VxRail Manager Rest API**](../procedures/hardware-servers-dell-vxm-restapi.md) - Add VxRail Manager Pack.
- [**Fortinet Fortigate Rest API**](../procedures/network-fortinet-fortigate-restapi.md) - Add monitoring Pack to monitor Fortinet using Rest API.
- [**HP Moonshot SNMP**](../procedures/network-hp-moonshot-snmp.md) - initial release.
- [**IICS Rest API**](../procedures/cloud-iics-restapi.md) - Add Informatica Intelligent Cloud Services Pack.
- [**Netgear SSeries SNMP**](../procedures/network-netgear-sseries-snmp.md) - Add Netgear sseries switches Pack.
- [**Node Exporter Windows Metrics**](../procedures/applications-monitoring-node-exporter-windows.md) - Adding Windows node exporter Pack.
- [**Office 365 Azure AD**](../procedures/cloud-microsoft-office365-azuread.md) - Add AzureAD Pack (graphapi).

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Alcatel OXE**](../procedures/hardware-telephony-alcatel-oxe-snmp.md) - Add new service Trunk and new metrics to Domain-Usage.
- [**Amazon EC2**](../procedures/cloud-aws-ec2.md) - Adding platformDetails attribute in EC2 discovery.
- [**Azure Recovery**](../procedures/cloud-azure-management-recovery.md) - Add command option to filter on period for Azure backup job status.
- [**Azure Recovery**](../procedures/cloud-azure-management-recovery.md) - Add site replication service.
- [**Cisco Standard**](../procedures/network-cisco-standard-snmp.md) - Add BGP modes with IPv6 support.
- [**Efficient IP**](../procedures/network-efficientip-snmp.md) - Add SOLID server service template.
- [**HP 3PAR SSH**](../procedures/hardware-storage-hp-3par-ssh.md) - Add services afc, cages, capacity, nodes to HP 3par SSH Pack.
- [**HTTP Server**](../procedures/applications-protocol-http.md) - Add Collection service template.
- [**IBM AS400 Connector**](../procedures/operatingsystems-as400-connector.md) - Add FILTERSTATUS capability to Jobs check.
- [**OneAccess SNMP**](../procedures/network-oneaccess-snmp.md) - Add new rtt-probes service.
- [**Prometheus Server**](../procedures/cloud-prometheus-api.md) - Add discovery rule for Prometheus targets.
- [**VMware ESX**](../procedures/virtualization-vmware2-esx.md) - Add a new "tags" attributes in discovery results.
- [**VMware VM**](../procedures/virtualization-vmware2-vm.md) - Add a new "tags" attributes in discovery results.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Azure Virtual Machine**](../procedures/cloud-azure-compute-virtualmachine.md) - Upgrage Packs Azure VM, Expressroute, VPN Gateway to use latest guidelines.
- [**Azure Discover**](../procedures/cloud-azure-management-discover.md) - Upgrage Packs Azure VM, Expressroute, VPN Gateway to use latest guidelines.
- [**Azure ExpressRoute**](../procedures/cloud-azure-network-expressroute.md) - Upgrage Packs Azure VM, Expressroute, VPN Gateway to use latest guidelines.
- [**Azure VPN Gateway**](../procedures/cloud-azure-network-vpngateway.md) - Upgrage Packs Azure VM, Expressroute, VPN Gateway to use latest guidelines.
- [**Oracle Database**](../procedures/applications-databases-oracle.md) - Add more thresholds to fra-usage service.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Azure Virtual Machine**](../procedures/cloud-azure-compute-virtualmachine.md) - Remove deprecated VM-State service template.
- [**Huawei**](../procedures/network-huawei-snmp.md) - Make regex more restrictive when using interface discovery scan.
- [**IBM AS400 Connector**](../procedures/operatingsystems-as400-connector.md) - Fix typo in AS400-Command command thresholds.
- [**IP-Label Ekara Rest API**](../procedures/applications-monitoring-iplabel-ekara-restapi.md) - Discovery provider didn't obfuscate correctly sensitive macros.
- [**Kadiska Rest API**](../procedures/applications-monitoring-kadiska-restapi.md) - Fix outdated command option for nettracer mode.
- [**Silverpeak**](../procedures/network-silverpeak-snmp.md) - Fix Uptime command thresholds.

</TabItem>
</Tabs>

### July 

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Azure Classic Storage**](../procedures/cloud-azure-classicstorage-storageaccount.md) - Added support for both Azure Storage and Classic Storage and added new metrics.
- [**Azure Storage Account**](../procedures/cloud-azure-storage-storageaccount.md) - Added support for both Azure Storage and Classic Storage and added new metrics.
- [**Node Exporter Linux Metrics**](../procedures/applications-monitoring-node-exporter-linux.md) - Added Linux Node Exporter Monitoring Pack.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**AWS Billing**](../procedures/cloud-aws-billing.md) - Moved AWS service discovery to host discovery.
- [**Linux NRPE3**](../procedures/operatingsystems-linux-nrpe3.md) - Added Ntp command and template to Linux NRPE3 Pack.
- [**AWS Lambda**](../procedures/cloud-aws-lambda.md) - Added discovery mode/rule for AWS Lambda.
- [**Nortel Standard**](../procedures/network-nortel-standard-snmp.md) - Added stack service.
- [**Amazon SNS**](../procedures/cloud-aws-sns.md) - Migrated AWS SNS & SQS Service Disco to Host Disco.
- [**Amazon SQS**](../procedures/cloud-aws-sqs.md) - Migrated AWS SNS & SQS Service Disco to Host Disco.
- [**Dynatrace Rest API**](../procedures/applications-monitoring-dynatrace-restapi.md) - Enhanced Dynatrace Restapi Packs with new services and new metrics.
- [**Nmap CLI**](../procedures/applications-nmap-cli.md) - Added WSMAN ports to Nmap discovery.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**PostgreSQL**](../procedures/applications-databases-postgresql.md) - Added services bloat and collection to PostgreSQL.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Active Directory WSMAN**](../procedures/applications-active-directory-wsman.md) - Fixed typos in Active Directory WSMan commands.
- [**AWS ELB**](../procedures/cloud-aws-elb.md) - Added missing Classic and Applications ELB Discovery rules.
- [**Azure Database for MySQL**](../procedures/cloud-azure-database-mysql.md) - Fixed typo in serverlog-usage option label.
- [**Ruckus ICX SNMP**](../procedures/network-ruckus-icx-snmp.md) - Fixed macro in Ruckus ICX Memory service template.

</TabItem>
</Tabs>

### June 

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Speedtest**](../procedures/applications-monitoring-speedtest.md) - Initial release.
- [**Protocol WHOIS**](../procedures/applications-protocol-whois.md) - Initial release.
- [**Microsoft IIS Server WSMAN**](../procedures/applications-iis-wsman.md) - Initial release.
- [**Active Directory WSMAN**](../procedures/applications-active-directory-wsman.md) - Initial release.
- [**Ceph RestAPI**](../procedures/applications-ceph-restapi.md) - Initial release.
- [**Libraesva SNMP**](../procedures/network-libraesva-snmp.md) - Initial release.
- [**HP StoreOnce 4.x Rest API**](../procedures/hardware-storage-hp-storeonce4-restapi.md) - Initial release.
- [**Azure Traffic Manager**](../procedures/cloud-azure-network-trafficmanager.md) - Initial release.
- [**Cambium ePMP SNMP**](../procedures/network-cambium-epmp-snmp.md) - Initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Azure Discover**](../procedures/cloud-azure-management-discover.md) - New provider scanning all subscriptions for a given tenant and support for Azure KS & VMSS resources discovery.
- [**Raisecom**](../procedures/network-raisecom-snmp.md) - Add support for all Raisecom xPON series.
- [**Linux NRPE3**](../procedures/operatingsystems-linux-nrpe3.md) - Add new check: systemd-sc-status.
- [**Amazon EFS**](../procedures/cloud-aws-efs.md) - Add a host discovery rule.
- [**Proxmox VE**](../procedures/virtualization-proxmox-ve-restapi.md) - Add a host discovery rule for virtual machines.
- [**Centreon Central**](../procedures/applications-monitoring-centreon-central.md) - Broker-Stats: support yes/no value in queue file status / Proc-Centengine: avoid wrong match resulting in annoying results.
- [**Centreon Poller**](../procedures/applications-monitoring-centreon-poller.md) - Broker-Stats: support yes/no value in queue file status / Proc-Centengine: avoid wrong match resulting in annoying results.
- [**Stormshield SNMP**](../procedures/network-stormshield-snmp.md) - Add VPN-Status check for latest firmware and add several thresholds.
- [**HP StoreOnce**](../procedures/hardware-storage-hp-storeonce-restapi.md) - Initial release and original StoreOnce Pack deprecation.
- [**HP StoreOnce 3.x Rest API**](../procedures/hardware-storage-hp-storeonce3-restapi.md) - Initial release and original StoreOnce Pack deprecation.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Ruckus Smartzone**](../procedures/network-ruckus-smartzone-snmp.md) - Remove extra space in Access Points check command.
- [**OneAccess SNMP**](../procedures/network-oneaccess-snmp.md) - Fix interfaces command options.
- [**Amazon EBS**](../procedures/cloud-aws-ebs.md) - Fix wrong mapper name and host template macros.
- [**Amazon Backup Vault**](../procedures/cloud-aws-backup.md) - Fix Job-Status command and add missing macros.
- [**NtopNG RestAPI**](../procedures/applications-monitoring-ntopng-restapi.md) - Mismatch between template and command regarding host EXTRAOPTIONS.
- [**Azure Functions**](../procedures/cloud-azure-compute-functions.md) - Fix extra newlines in commands definition causing failures during CLAPI import.
- [**Azure App Service**](../procedures/cloud-azure-web-appservice.md) - Fix extra newlines in commands definition causing failures during CLAPI import.
- [**Amazon RDS**](../procedures/cloud-aws-rds.md) - Support new attributes in host discovery provider.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Dell N4000**](../procedures/network-dell-n4000.md) - Deprecate n4000, and initial release of nseries.
- [**Dell N-series SNMP**](../procedures/network-dell-nseries-snmp.md) - Deprecate n4000, and initial release of nseries.
- [**Protocol TCP**](../procedures/applications-protocol-tcp.md) - Rename response-time to Connection-Status and add new service Response-Time.

</TabItem>
</Tabs>

### May

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Azure Database for MariaDB**](../procedures/cloud-azure-database-mariadb.md) - Initial release.
- [**Kadiska Rest API**](../procedures/applications-monitoring-kadiska-restapi.md) - Initial release.
- [**Protocol CIFS**](../procedures/applications-protocol-cifs.md) - Initial release.
- [**Protocol SFTP**](../procedures/applications-protocol-sftp.md) - Initial release.
- [**NtopNG RestAPI**](../procedures/applications-monitoring-ntopng-restapi.md) - Initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**IP Fabric API**](../procedures/applications-ipfabric-api.md) - Add new discovery capabilities (aruba, cisco, checkpoint, ...).
- [**VMware ESX**](../procedures/virtualization-vmware2-esx.md) - Use custom_attributes in VMWare Discovery providers.
- [**VMware VM**](../procedures/virtualization-vmware2-vm.md) - Use custom_attributes in VMWare Discovery providers.
- [**Generic SNMP**](../procedures/applications-protocol-snmp.md) - Add Cisco ASA support in SNMP discovery providers.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Dell Me4 Rest API**](../procedures/hardware-storage-dell-me4-restapi.md) - Fix controller-statistics command options.
- [**Amazon FSx**](../procedures/cloud-aws-fsx.md) - Fix inverted mapper logic leading to erroneous exclusions.
- [**Amazon RDS**](../procedures/cloud-aws-rds.md) - Discovery jobs several fixes.
- [**Protocol SSH**](../procedures/applications-protocol-ssh.md) - Fix translation.
- [**Windows WSMAN**](../procedures/operatingsystems-windows-wsman.md) - Fix typos in command lines options.
- [**Linux SSH**](../procedures/operatingsystems-linux-ssh.md) - Adding missing Memory service template.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**AWS ELB**](../procedures/cloud-aws-elb.md) - Adding a service disco rule and modify uuid attributes for Network ELB discovery.

</TabItem>
</Tabs>

### April

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**IP Fabric API**](../procedures/applications-ipfabric-api.md) - Initial release.
- [**Amazon Backup**](../procedures/cloud-aws-backup.md) - Initial release.
- [**Hyper-V NSCP API**](../procedures/virtualization-hyperv-nscp-restapi.md) - Initial release.
- [**Windows WSMAN**](../procedures/operatingsystems-windows-wsman.md) - Initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Nutanix**](../procedures/virtualization-nutanix-snmp.md) - Nutanix host discovery & new templates.
- [**Ruckus ICX SNMP**](../procedures/network-ruckus-icx-snmp.md) - Add new thresholds to Memory service.
- [**Huawei SNMP**](../procedures/network-huawei-snmp.md) - Add optical monitoring in interfaces check.
- [**Arista SNMP**](../procedures/network-switchs-arista-snmp.md) - Change threshold options for Memory service.
- [**Veeam**](../procedures/applications-veeam-nrpe.md) - Add new services: Repositories and Licenses.
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - Add new threshold to Backup-age service.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Cisco Meraki RestAPI**](../procedures/network-cisco-meraki-restapi.md) - Fix host disco attributes.
- [**Digi Portserverts SNMP**](../procedures/network-digi-portserverts-snmp.md) - Rename Pack.
- [**Amazon EC2**](../procedures/cloud-aws-ec2.md) - Fixing discovery mapper and wrong HTPL/STPL association.
- [**Aruba Standard**](../procedures/network-switchs-aruba-standard-snmp.md) - Fixing extra space in disco commands.
- [**Centreon MBI**](../procedures/applications-monitoring-centreon-mbi.md) - MariaDB service name fix.
- [**Docker RestAPI**](../procedures/applications-docker-restapi.md) - Fix macro in Node-status mode.
- [**Microsoft IIS NSClient 0.5**](../procedures/applications-webservers-iis-nsclient-05-restapi.md) - Align pack status with documentation (deprecated).
- [**Microsoft IIS NRPE**](../procedures/applications-webservers-iis-nrpe.md) - Align pack status with documentation (deprecated).
- [**Azure Virtual Machine Scale Sets**](../procedures/cloud-azure-compute-vmscalesets.md) - Fix discovery provider description.
- [**Symbol WiNG SNMP**](../procedures/network-symbol-wing-snmp.md) - Fix Systems command.
- [**IBM Softlayer**](../procedures/cloud-ibm-softlayer-api.md) - Fix commands options.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**OneAccess SNMP**](../procedures/network-oneaccess-snmp.md) - Add new services: Interfaces and cells-radio.
- [**NetApp Ontap OnCommand API**](../procedures/hardware-storage-netapp-ontap-oncommandapi.md) - Refactoring volumes services.

</TabItem>
</Tabs>

### February

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Viptela SNMP**](../procedures/network-viptela-snmp.md) - Initial release.
- [**Fortinet FortiADC SNMP**](../procedures/network-fortinet-fortiadc-snmp.md) - Initial release.
- [**IP-Label Ekara Rest API**](../procedures/applications-monitoring-iplabel-ekara-restapi.md) - Initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Cisco Meraki Rest API**](../procedures/network-cisco-meraki-restapi.md) - Add new cache system.
- [**Veeam**](../procedures/applications-veeam-nrpe.md) - Add vsb-jobs service.
- [**HP Procurve**](../procedures/network-switchs-hp-procurve-snmp.md) - Add service virtual-chassis.
- [**Raritan PDU**](../procedures/hardware-pdu-raritan-snmp.md) - Add service inlet-sensors.
- [**Cisco Meraki Rest API**](../procedures/network-cisco-meraki-restapi.md) - Add a variable to autodiscovery attributes.
- [**Office 365**](../procedures/cloud-microsoft-office365-management.md) - Add service app-credentials.
- [**Watchguard**](../procedures/network-watchguard-snmp.md) - Add service cluster.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Azure Virtual Machine**](../procedures/cloud-azure-compute-virtualmachine.md) - Removing option in memory command.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Oracle Database**](../procedures/applications-databases-oracle.md) - Change threshold options for service rman-backup-problems.
- [**VTOM Rest API**](../procedures/applications-vtom-restapi.md) - Use official and latest API.

</TabItem>
</Tabs>

### January

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Azure Virtual Machine Scale Sets**](../procedures/cloud-azure-compute-vmscalesets.md) - Initial release.
- [**HPE Simplivity Rest API**](../procedures/virtualization-hpe-simplivity-restapi.md) - Initial release.
- [**Barracuda Message Archiver SNMP**](../procedures/network-barracuda-bma-snmp.md) - Initial release.
- [**Hikvision NVR SNMP**](../procedures/hardware-devices-hikvision-nvr-snmp.md) - Initial release.
- [**Dell OMEModular SNMP**](../procedures/hardware-servers-dell-omem-snmp.md) - Initial release.
- [**Lenovo RackSwitch SNMP**](../procedures/network-lenovo-rackswitch-snmp.md) - Initial release.
- [**Fortinet FortiSwitch SNMP**](../procedures/network-fortinet-fortiswitch-snmp.md) - Initial release.
- [**Azure Kubernetes Service**](../procedures/cloud-azure-compute-aks.md) - Initial release.
- [**Redis Sentinel**](../procedures/applications-redis-sentinel.md) - Initial release.
- [**Amazon FSx**](../procedures/cloud-aws-fsx.md) - add Amazon FSx discovery and monitoring.
- [**Microsens G6 SNMP**](../procedures/network-microsens-g6-snmp.md) - Initial release.
- [**Symbol WiNG SNMP**](../procedures/network-symbol-wing-snmp.md) - Initial release.
- [**Dynamics NSClient**](../procedures/applications-dynamics-ax-nsclient-05-nrpe.md) - Initial release.
- **Dynamics AX Database** - Initial release.
- [**Dynamics 365**](../procedures/applications-dynamics-365-nsclient-05-nrpe.md) - Initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Fortinet Fortigate**](../procedures/network-firewalls-fortinet-fortigate-snmp.md) - Change threshold options.
- [**Amazon EBS**](../procedures/cloud-aws-ebs.md) - Add host discovery rule.
- **VMWare** - New services coming with VMWare connector 3.2.2.

</TabItem>
<TabItem value="Bug fixes" label="Bug fixes">

- [**Azure Virtual Network**](../procedures/cloud-azure-network-virtualnetwork.md) - Fix resource macro.
- [**Dell CMC**](../procedures/hardware-servers-dell-cmc-snmp.md)  - Fix host template used.
- [**Ruckus SCG**](../procedures/network-ruckus-scg-snmp.md) - Fix cpu command options.
- [**Awa JMX**](../procedures/applications-awa-jmx.md) - Fixing the filtername macro.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Office 365**](../procedures/cloud-microsoft-office365-management.md) - Use new microsoft api.
- [**Azure SQL Server**](../procedures/cloud-azure-database-sqlserver.md) - Rewrite and extend.
- [**Azure SQL Database**](../procedures/cloud-azure-database-sqldatabase.md) - Rewrite and extend.
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - Change thresholds for Backup-age service.

</TabItem>
</Tabs>

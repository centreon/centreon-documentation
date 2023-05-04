---
id: release-notes
title: Release Notes
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 2023

### April

> In the Monitoring Connectors Manager, you may notice that all connectors have been updated. If they are not listed in the table below, they haven’t been modified: they have been republished in order to take into account the last version of their plugin.

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Aruba CPPM SNMP**](../procedures/network-aruba-cppm-snmp.md) - network-aruba-cppm-snmp - initial release - Status:stable - centreon-pack-network-aruba-cppm-snmp-23.04.0-1
- [**Opengear SNMP**](../procedures/network-opengear-snmp.md) - network-opengear-snmp - initial release - Status:stable - centreon-pack-network-opengear-snmp-23.04.0-1

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Control-M Rest API**](../procedures/applications-controlm-restapi.md) - applications-controlm-restapi - service jobs add option --job-name - Status:stable - centreon-pack-applications-controlm-restapi-23.04.0-1
- [**Fortinet Fortigate**](../procedures/network-firewalls-fortinet-fortigate-snmp.md) - added default value for CRITICALSTATUS macro in Traffic-Global - Status:stable - centreon-pack-network-firewalls-fortinet-fortigate-snmp-23.04.0-1
- [**VMware VM**](../procedures/virtualization-vmware2-vm.md) - added `ip_vmanagement` and `ip_vmotion` to Host Discovery attributes - Status:stable - centreon-pack-virtualization-vmware2-vm-23.04.0-1

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Kadiska Rest API**](../procedures/applications-monitoring-kadiska-restapi.md) - added various improvements - Status:stable - centreon-pack-applications-monitoring-kadiska-restapi-23.04.0-1

</TabItem>
</Tabs>

### March

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Azure Policies States**](../procedures/cloud-azure-policyinsights-policystates.md) - cloud-azure-policyinsights-policystates - initial release - Status:stable - centreon-pack-cloud-azure-policyinsights-policystates-23.03.1-1
- [**Control-M Rest API**](../procedures/applications-controlm-restapi.md) - applications-controlm-restapi - initial release - Status:stable - centreon-pack-applications-controlm-restapi-23.03.0-1
- [**Riello UPS SNMP**](../procedures/hardware-ups-riello-snmp.md) - hardware-ups-riello-snmp - initial release - Status:stable - centreon-pack-hardware-ups-riello-snmp-23.03.0-1

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Azure Discover**](../procedures/cloud-azure-management-discover.md) - add missing packs for discovery - Status:stable - centreon-pack-cloud-azure-management-discover-23.03.0-1
- [**CheckPoint firewall**](../procedures/network-firewalls-checkpoint-snmp.md) - network-firewalls-checkpoint-snmp - add disk service - Status:stable - centreon-pack-network-firewalls-checkpoint-snmp-23.03.0-1
- [**Cisco WLC**](../procedures/network-cisco-wlc-snmp.md) - add AP discovery - Status:stable - centreon-pack-network-cisco-wlc-snmp-23.03.2-1
- [**UPS Standard**](../procedures/hardware-ups-standard-rfc1628-snmp.md) - hardware-ups-standard-rfc1628-snmp - add thresholds for alarm services - Status:stable - centreon-pack-hardware-ups-standard-rfc1628-snmp-23.03.0-1
- [**VMware ESX**](../procedures/virtualization-vmware2-esx.md) - new attributes and fixed types - Status:stable - centreon-pack-virtualization-vmware2-esx-23.03.2-1

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Centreon SQL Metrics**](../procedures/applications-monitoring-centreon-sql-metrics.md) - centreon-sql-metrics - fix partitioning mode - Status:stable - centreon-pack-applications-monitoring-centreon-sql-metrics-23.03.0-1
- [**Kubernetes API**](../procedures/cloud-kubernetes-api.md) - cloud-kubernetes-api - fix node host discovery - Status:stable - centreon-pack-cloud-kubernetes-api-23.03.0-1

</TabItem>
</Tabs>

### February

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Oracle UCP JMX**](../procedures/applications-oracle-ucp-jmx.md) - applications-oracle-ucp-jmx - initial release - Status:stable - centreon-pack-applications-oracle-ucp-jmx-23.02.0-1
- [**WD NAS SNMP**](../procedures/hardware-storage-wd-nas-snmp.md) - hardware-storage-wd-nas-snmp - initial release - Status:stable - centreon-pack-hardware-storage-wd-nas-snmp-23.02.0-1

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Alcatel Omniswitch**](../procedures/network-switchs-alcatel-omniswitch-snmp.md) - network-switchs-alcatel-omniswitch-snmp - add interfaces service - Status:stable - centreon-pack-network-switchs-alcatel-omniswitch-snmp-23.02.0-1
- [**Azure SQL Database**](../procedures/cloud-azure-database-sqldatabase.md) - cloud::azure::database::sqldatabase - add EXTRAOPTIONS on health template - Status:stable - centreon-pack-cloud-azure-database-sqldatabase-23.02.1-1
- [**Dell PowerStore Rest API**](../procedures/hardware-storage-dell-powerstore-restapi.md) - storage::dell::powerstore::restapi - add service memory - Status:stable - centreon-pack-hardware-storage-dell-powerstore-restapi-23.02.0-1
- [**Kubernetes API**](../procedures/cloud-kubernetes-api.md) - cloud-kubernetes-api - add --namespace option - Status:stable - centreon-pack-cloud-kubernetes-api-23.02.2-1
- [**Raritan PDU**](../procedures/hardware-pdu-raritan-snmp.md) - hardware-pdu-raritan-snmp - add external-sensors mode - Status:stable - centreon-pack-hardware-pdu-raritan-snmp-23.02.0-1

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Jenkins API**](../procedures/applications-jenkins.md) - applications-jenkins - change service name and options - Status:stable - centreon-pack-applications-jenkins-23.02.0-1

</TabItem>
</Tabs>

### January

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Talend TMC API**](../procedures/cloud-talend-tmc-api.md) - cloud-talend-tmc-api - initial release - Status:stable - centreon-pack-cloud-talend-tmc-api-23.01.0-1
- [**Vectra Rest API**](../procedures/network-vectra-restapi.md) - network-vectra-restapi - initial release - Status:stable - centreon-pack-network-vectra-restapi-23.01.0-1

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Pure Storage FlashArray Legacy Rest API**](../procedures/hardware-storage-purestorage-flasharray-legacy-restapi.md) - refactoring purestorage rest api - Status:stable - centreon-pack-hardware-storage-purestorage-flasharray-legacy-restapi-23.01.0-1
- [**Pure Storage FlashArray Rest API v2**](../procedures/hardware-storage-purestorage-flasharray-v2-restapi.md) - refactoring purestorage rest api - Status:stable - centreon-pack-hardware-storage-purestorage-flasharray-v2-restapi-23.01.0-1
- [**Pure Storage FlashBlade Rest API v2**](../procedures/hardware-storage-purestorage-flashblade-v2-restapi.md) - refactoring purestorage rest api - Status:stable - centreon-pack-hardware-storage-purestorage-flashblade-v2-restapi-23.01.0-1
- [**Pure Storage RestAPI**](../procedures/hardware-storage-purestorage-restapi.md) - refactoring purestorage rest api - Status:deprecated - centreon-pack-hardware-storage-purestorage-restapi-23.01.0-1
- [**Linux NRPE3**](../procedures/operatingsystems-linux-nrpe3.md) - operatingsystems-linux-nrpe3 - update diskio command options - Status:stable - centreon-pack-operatingsystems-linux-nrpe3-23.01.0-1
- [**Amazon ElastiCache**](../procedures/cloud-aws-elasticache.md) - enh (cloud-aws-elasticache): Add discovery mode/rule for AWS ElastiCache - Status:stable - centreon-pack-cloud-aws-elasticache-23.01.2-1
- [**Centreon SQL Metrics**](../procedures/applications-monitoring-centreon-sql-metrics.md) - fix (sql-metrics): add poller delay - Status:stable - centreon-pack-applications-monitoring-centreon-sql-metrics-23.01.5-1
- [**Amazon CloudFront**](../procedures/cloud-aws-cloudfront.md) - enh (cloud-aws-cloudfront): Add discovery mode/rule for AWS CloudFront - Status:stable - centreon-pack-cloud-aws-cloudfront-23.01.0-1

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Amazon RDS**](../procedures/cloud-aws-rds.md) - fix typo cloud-aws-rds instance-status mode - Status:stable - centreon-pack-cloud-aws-rds-23.01.0-1
- [**AWS Billing**](../procedures/cloud-aws-billing.md) - fix (virtualization-proxmox-ve-restapi): unlock host discovery parameters - Status:stable - centreon-pack-cloud-aws-billing-23.01.0-1
- [**Cisco Meraki Rest API**](../procedures/network-cisco-meraki-restapi.md) - fix (virtualization-proxmox-ve-restapi): unlock host discovery parameters - Status:stable - centreon-pack-network-cisco-meraki-restapi-23.01.0-1
- [**Kadiska Rest API**](../procedures/applications-monitoring-kadiska-restapi.md) - fix(kadiska): fix the discovery commands and arguments  - Status:stable - centreon-pack-applications-monitoring-kadiska-restapi-23.01.2-1
- [**Nmap CLI**](../procedures/applications-nmap-cli.md) - fix(pp): increased release number - Status:stable - centreon-pack-applications-nmap-cli-23.01.0-1
- [**Proxmox VE**](../procedures/virtualization-proxmox-ve-restapi.md) - fix (virtualization-proxmox-ve-restapi): unlock host discovery parameters - Status:stable - centreon-pack-virtualization-proxmox-ve-restapi-23.01.0-1
- [**RabbitMQ RestAPI**](../procedures/applications-rabbitmq-restapi.md) - FIX(pack): RabbitMQ - Update MACROS values - Status:stable - centreon-pack-applications-rabbitmq-restapi-23.02.0-1

</TabItem>
</Tabs>

## 2022

### December

<Tabs groupId="sync">

<TabItem value="New connectors" label="New connectors">

- [**Stormshield API**](../procedures/network-stormshield-api.md) - network-stormshield-api - initial release - Status:stable - centreon-pack-network-stormshield-api-22.12.0-1
- [**Patton SmartNode SNMP**](../procedures/network-patton-smartnode-snmp.md) - Add Patton Snmp Monitoring Connector - Status:stable - centreon-pack-network-patton-smartnode-snmp-22.12.0-1
- [**APC Sensor SNMP**](../procedures/hardware-sensors-apc-snmp.md) - hardware-sensors-apc-snmp - initial release - Status:stable - centreon-pack-hardware-sensors-apc-snmp-22.12.0-1

</TabItem>

<TabItem value="Enhancements" label="Enhancements">

- [**NetApp Ontap Rest API**](../procedures/hardware-storage-netapp-ontap-restapi.md) - hardware-storage-netapp-ontap-restapi - add service quotas - Status:stable - centreon-pack-hardware-storage-netapp-ontap-restapi-22.12.0-1
- [**Thales Mistral VS9 Rest API**](../procedures/applications-thales-mistral-vs9-restapi.md) - applications-thales-mistral-vs9-restapi - add service clusters - Status:stable - centreon-pack-applications-thales-mistral-vs9-restapi-22.12.0-1
- [**Office 365**](../procedures/cloud-microsoft-office365-management.md) - cloud-microsoft-office365-management - add subscriptions service - Status:stable - centreon-pack-cloud-microsoft-office365-management-22.12.0-1
- [**Hitachi NAS**](../procedures/hardware-storage-hitachi-hnas-snmp.md) - hardware-storage-hitachi-hnas-snmp - add service virtual-volumes-quotas - Status:stable - centreon-pack-hardware-storage-hitachi-hnas-snmp-22.12.0-1

</TabItem>

<TabItem value="Breaking changes" label="Breaking changes">

- [**Informix DB**](../procedures/applications-databases-informix.md) - multiple database packs - change sql-statement option protection - Status:stable - centreon-pack-applications-databases-informix-22.12.0-1
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - multiple database packs - change sql-statement option protection - Status:stable - centreon-pack-applications-databases-mssql-22.12.0-1
- [**MySQL/MariaDB**](../procedures/applications-databases-mysql.md) - multiple database packs - change sql-statement option protection - Status:stable - centreon-pack-applications-databases-mysql-22.12.0-1
- [**Oracle Database**](../procedures/applications-databases-oracle.md) - multiple database packs - change sql-statement option protection - Status:stable - centreon-pack-applications-databases-oracle-22.12.0-1
- [**PostgreSQL**](../procedures/applications-databases-postgresql.md) - multiple database packs - change sql-statement option protection - Status:stable - centreon-pack-applications-databases-postgresql-22.12.0-1
- [**Sybase**](../procedures/applications-databases-sybase.md) - multiple database packs - change sql-statement option protection - Status:stable - centreon-pack-applications-databases-sybase-22.12.0-1
- [**Antivirus ClamAV**](../procedures/applications-antivirus-clamav-ssh.md) - applications-antivirus-clamav-ssh - use new ssh backend - Status:stable - centreon-pack-applications-antivirus-clamav-ssh-22.12.0-1

</TabItem>

</Tabs>

### November

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Himoinsa UPS**](../procedures/hardware-ups-himoinsa-snmp.md) - Adding Himoinsa Monitoring Connector - Status:stable - centreon-pack-hardware-ups-himoinsa-snmp-22.11.0-1
- [**Azure Data Factory**](../procedures/cloud-azure-datafactory-factories.md) - New monitoring pack - Status:stable - centreon-pack-cloud-azure-datafactory-factories-22.11.2-1
- [**xFusion iBMC SNMP**](../procedures/hardware-servers-xfusion-ibmc-snmp.md) - New monitoring pack - Status:stable - centreon-pack-hardware-servers-xfusion-ibmc-snmp-22.11.0-1
- [**Enterasys SNMP**](../procedures/network-enterasys-snmp.md) - New monitoring pack - Status:stable - centreon-pack-network-enterasys-snmp-22.11.0-1
- [**Avaya CM SNMP**](../procedures/hardware-telephony-avaya-cm-snmp.md) - New monitoring pack - Status:stable - centreon-pack-hardware-telephony-avaya-cm-snmp-22.11.0-1
- [**PICOS SNMP**](../procedures/operatingsystems-picos-snmp.md) - Adding Pica8 PICOS Monitoring Connector - Status:stable - centreon-pack-operatingsystems-picos-snmp-22.11.0-1
- [**Thales Mistral VS9 Rest API**](../procedures/applications-thales-mistral-vs9-restapi.md) - New monitoring pack - Status:stable - centreon-pack-applications-thales-mistral-vs9-restapi-22.11.0-1
- [**PineApp Mail Secure**](../procedures/applications-pineapp-securemail-snmp.md) - Add new Pineapp Secure mail Pack - Status:stable - centreon-pack-applications-pineapp-securemail-snmp-22.11.0-1

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Azure Management Costs**](../procedures/cloud-azure-management-costs.md) - Add four new modes - Cost-Explorer, Orphan-Resources, Hybrid-Benefits, Tags-Compliance - Status:stable - centreon-pack-cloud-azure-management-costs-22.11.2-1
- [**Generic SNMP**](../procedures/applications-protocol-snmp.md) - New SNMP Host discovery for IP protocol (rfc4293) - Status:stable - centreon-pack-applications-protocol-snmp-22.11.0-1
- [**Huawei OceanStor SNMP**](../procedures/hardware-storage-huawei-oceanstor-snmp.md) - Add new service to check luns - Status:stable - centreon-pack-hardware-storage-huawei-oceanstor-snmp-22.11.0-1

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Ansible**](../procedures/applications-ansible-cli.md) - Migrate and secure the underlying modes - Status:stable - centreon-pack-applications-ansible-cli-22.11.0-1
- [**EMC RecoveryPoint**](../procedures/applications-backup-emc-recoverypoint-ssh.md) - Migrate and secure the underlying modes - Status:stable - centreon-pack-applications-backup-emc-recoverypoint-ssh-22.11.0-1
- [**Sun SFxxK**](../procedures/hardware-servers-sun-sfxxk-pssh.md) - Migrate and secure the underlying modes - Status:stable - centreon-pack-hardware-servers-sun-sfxxk-pssh-22.11.0-1
- [**Cisco Standard SSH**](../procedures/network-cisco-standard-ssh.md) - Migrate and secure the underlying modes - Status:stable - centreon-pack-network-cisco-standard-ssh-22.11.0-1
- [**Stormshield SSH**](../procedures/network-stormshield-ssh.md) - Migrate and secure the underlying modes - Status:stable - centreon-pack-network-stormshield-ssh-22.11.0-1
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - Replace a standard command by dedicated ones - Status:stable - centreon-pack-applications-databases-mssql-22.11.1-1

</TabItem>
<TabItem value="Fix" label="Fix">

- [**NetApp Ontap Rest API**](../procedures/hardware-storage-netapp-ontap-restapi.md) - Ontap Restapi - Adding Aggregates service template - Status:stable - centreon-pack-hardware-storage-netapp-ontap-restapi-22.11.0-1
- [**IP-Label Ekara Rest API**](../procedures/applications-monitoring-iplabel-ekara-restapi.md) - Fix PASSWORD and FILTER macros attributes - Status:stable - centreon-pack-applications-monitoring-iplabel-ekara-restapi-22.11.0-1
- [**Windows NSClient 0.5**](../procedures/operatingsystems-windows-nsclient-05-nrpe.md) - Fix erroneous mode name in Updates command - Status:stable - centreon-pack-operatingsystems-windows-nsclient-05-nrpe-22.11.0-1
- [**Mikrotik SNMP**](../procedures/network-mikrotik-snmp.md) - Remove wrong options from the uptime command - Status:stable - centreon-pack-network-mikrotik-snmp-22.11.0-1

</TabItem>
</Tabs>

### October

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**VMware VCSA SNMP**](../procedures/applications-vmware-vcsa-snmp.md) - New Pack to check VMWare vCenter Appliance OS with SNMP - Status:stable - centreon-pack-applications-vmware-vcsa-snmp-22.10.0-1
- [**Splunk**](../procedures/applications-monitoring-splunk-api.md) - Adding Splunk Monitoring Connector - Status:stable - centreon-pack-applications-monitoring-splunk-api-22.10.0-1
- [**Aruba Orchestrator Rest API**](../procedures/network-aruba-orchestrator-restapi.md) - New Pack monitoring the orchestrator using its restapi - Status:stable - centreon-pack-network-aruba-orchestrator-restapi-22.10.0-1

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Base Pack**](../procedures/base-generic.md) - base-generic - add macro service EXTRAOPTIONS - Status:stable - centreon-pack-base-generic-22.10.0-1
- [**Kadiska Rest API**](../procedures/applications-monitoring-kadiska-restapi.md) - Kadiska - Adding new STPL  - Status:stable - centreon-pack-applications-monitoring-kadiska-restapi-22.10.1-1
- [**Windows NSClient 0.5**](../procedures/operatingsystems-windows-nsclient-05-nrpe.md) - add service updates for windows pack - Status:stable - centreon-pack-operatingsystems-windows-nsclient-05-nrpe-22.10.0-1
- [**Windows NSClient API**](../procedures/operatingsystems-windows-nsclient-05-restapi.md) - add service updates for windows pack - Status:stable - centreon-pack-operatingsystems-windows-nsclient-05-restapi-22.10.0-1
- [**Windows WSMAN**](../procedures/operatingsystems-windows-wsman.md) - add service updates for windows pack - Status:stable - centreon-pack-operatingsystems-windows-wsman-22.10.0-1
- [**Alcatel Omniswitch**](../procedures/network-switchs-alcatel-omniswitch-snmp.md) - Add new service to check virtual chassis - Status:stable - centreon-pack-network-switchs-alcatel-omniswitch-snmp-22.10.0-1

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Fujitsu Eternus DX**](../procedures/hardware-storage-fujitsu-eternus-dx-ssh.md) - hardware-storage-fujitsu-eternus-dx-ssh - use new ssh backend - Status:stable - centreon-pack-hardware-storage-fujitsu-eternus-dx-ssh-22.10.0-1

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Amazon API Gateway**](../procedures/cloud-aws-apigateway.md) - Fix bug with assume-role option - Status:stable - centreon-pack-cloud-aws-apigateway-22.10.0-1
- [**Amazon Backup Vault**](../procedures/cloud-aws-backup.md) - Fix bug with assume-role option - Status:stable - centreon-pack-cloud-aws-backup-22.10.0-1
- [**AWS Billing**](../procedures/cloud-aws-billing.md) - Fix bug with assume-role option - Status:stable - centreon-pack-cloud-aws-billing-22.10.0-1
- [**AWS Discover**](../procedures/cloud-aws-cloudwatch-discover.md) - Fix bug with assume-role option - Status:stable - centreon-pack-cloud-aws-cloudwatch-discover-22.10.0-1
- [**Amazon EBS**](../procedures/cloud-aws-ebs.md) - Fix bug with assume-role option - Status:stable - centreon-pack-cloud-aws-ebs-22.10.0-1
- [**Amazon EC2**](../procedures/cloud-aws-ec2.md) - Fix bug with assume-role option - Status:stable - centreon-pack-cloud-aws-ec2-22.10.0-1
- [**Amazon EFS**](../procedures/cloud-aws-efs.md) - Fix bug with assume-role option - Status:stable - centreon-pack-cloud-aws-efs-22.10.0-1
- [**AWS ELB**](../procedures/cloud-aws-elb.md) - Fix bug with assume-role option - Status:stable - centreon-pack-cloud-aws-elb-22.10.0-1
- [**Amazon FSx**](../procedures/cloud-aws-fsx.md) - Fix bug with assume-role option - Status:stable - centreon-pack-cloud-aws-fsx-22.10.0-1
- [**Amazon Kinesis**](../procedures/cloud-aws-kinesis.md) - Fix bug with assume-role option - Status:stable - centreon-pack-cloud-aws-kinesis-22.10.0-1
- [**AWS Lambda**](../procedures/cloud-aws-lambda.md) - Fix bug with assume-role option - Status:stable - centreon-pack-cloud-aws-lambda-22.10.0-1
- [**Amazon RDS**](../procedures/cloud-aws-rds.md) - Fix bug with assume-role option - Status:stable - centreon-pack-cloud-aws-rds-22.10.0-1
- [**Amazon S3**](../procedures/cloud-aws-s3.md) - Fix bug with assume-role option - Status:stable - centreon-pack-cloud-aws-s3-22.10.0-1
- [**Amazon SNS**](../procedures/cloud-aws-sns.md) - Fix bug with assume-role option - Status:stable - centreon-pack-cloud-aws-sns-22.10.0-1
- [**Amazon SQS**](../procedures/cloud-aws-sqs.md) - Fix bug with assume-role option - Status:stable - centreon-pack-cloud-aws-sqs-22.10.0-1
- [**AWS VPN**](../procedures/cloud-aws-vpn.md) - Fix bug with assume-role option - Status:stable - centreon-pack-cloud-aws-vpn-22.10.0-1
- [**HP 3PAR SSH**](../procedures/hardware-storage-hp-3par-ssh.md) - hardware-storage-hp-3par-ssh - fix macros for service cages - Status:stable - centreon-pack-hardware-storage-hp-3par-ssh-22.10.0-1
- [**Office 365 Azure AD**](../procedures/cloud-microsoft-office365-azuread.md) - AzureAD - Fixing typo in check command - Status:stable - centreon-pack-cloud-microsoft-office365-azuread-22.10.0-1

</TabItem>
</Tabs>

### September

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**AWS Discover**](../procedures/cloud-aws-cloudwatch-discover.md) - Add unified AWS host discovery and add assume-role support - Status:stable - centreon-pack-cloud-aws-cloudwatch-discover-22.09.0-1
- [**Azure Management Costs**](../procedures/cloud-azure-management-costs.md) - New Pack to monitor Azure budgets consumptions - Status:stable - centreon-pack-cloud-azure-management-costs-22.09.0-1
- [**Cisco Umbrella**](../procedures/network-cisco-umbrella-snmp.md) - Add Cisco Umbrella Pack - Status:stable - centreon-pack-network-cisco-umbrella-snmp-22.09.0-1
- [**Dell VxRail Manager Rest API**](../procedures/hardware-servers-dell-vxm-restapi.md) - Add VxRail Manager Pack - Status:stable - centreon-pack-hardware-servers-dell-vxm-restapi-22.08.2-1
- [**Fortinet Fortigate Rest API**](../procedures/network-fortinet-fortigate-restapi.md) - Add monitoring Pack to monitor Fortinet using Rest API - Status:stable - centreon-pack-network-fortinet-fortigate-restapi-22.09.0-1
- [**HP Moonshot SNMP**](../procedures/network-hp-moonshot-snmp.md) - network-hp-moonshot-snmp - initial release - Status:stable - centreon-pack-network-hp-moonshot-snmp-22.09.0-1
- [**IICS Rest API**](../procedures/cloud-iics-restapi.md) - Add Informatica Intelligent Cloud Services Pack - Status:stable - centreon-pack-cloud-iics-restapi-22.09.0-1
- [**Netgear SSeries SNMP**](../procedures/network-netgear-sseries-snmp.md) - Add Netgear sseries switches Pack - Status:stable - centreon-pack-network-netgear-sseries-snmp-22.08.0-1
- [**Node Exporter Windows Metrics**](../procedures/applications-monitoring-node-exporter-windows.md) - Adding Windows node exporter Pack - Status:stable - centreon-pack-applications-monitoring-node-exporter-windows-22.08.0-1
- [**Office 365 Azure AD**](../procedures/cloud-microsoft-office365-azuread.md) - Add AzureAD Pack (graphapi) - Status:stable - centreon-pack-cloud-microsoft-office365-azuread-22.08.0-1

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Alcatel OXE**](../procedures/hardware-telephony-alcatel-oxe-snmp.md) - Add new service Trunk and new metrics to Domain-Usage - Status:stable - centreon-pack-hardware-telephony-alcatel-oxe-snmp-22.08.0-1
- [**Amazon EC2**](../procedures/cloud-aws-ec2.md) - Adding platformDetails attribute in EC2 discovery - Status:stable - centreon-pack-cloud-aws-ec2-22.08.0-1
- [**Azure Recovery**](../procedures/cloud-azure-management-recovery.md) - Add command option to filter on period for Azure backup job status - Status:stable - centreon-pack-cloud-azure-management-recovery-22.09.0-1
- [**Azure Recovery**](../procedures/cloud-azure-management-recovery.md) - Add site replication service - Status:stable - centreon-pack-cloud-azure-management-recovery-22.09.0-1
- [**Cisco Standard**](../procedures/network-cisco-standard-snmp.md) - Add BGP modes with IPv6 support - Status:stable - centreon-pack-network-cisco-standard-snmp-22.08.1-1
- [**Efficient IP**](../procedures/network-efficientip-snmp.md) - Add SOLID server service template - Status:stable - centreon-pack-network-efficientip-snmp-22.09.0-1
- [**HP 3PAR SSH**](../procedures/hardware-storage-hp-3par-ssh.md) - Add services afc, cages, capacity, nodes to HP 3par SSH Pack - Status:stable - centreon-pack-hardware-storage-hp-3par-ssh-22.09.0-1
- [**HTTP Server**](../procedures/applications-protocol-http.md) - Add Collection service template - Status:stable - centreon-pack-applications-protocol-http-22.09.0-1
- [**IBM AS400 Connector**](../procedures/operatingsystems-as400-connector.md) - Add FILTERSTATUS capability to Jobs check - Status:stable - centreon-pack-operatingsystems-as400-connector-22.08.0-1
- [**OneAccess SNMP**](../procedures/network-oneaccess-snmp.md) - Add new rtt-probes service - Status:stable - centreon-pack-network-oneaccess-snmp-22.09.0-1
- [**Prometheus Server**](../procedures/cloud-prometheus-api.md) - Add discovery rule for Prometheus targets - Status:stable - centreon-pack-cloud-prometheus-api-22.08.0-1
- [**VMware ESX**](../procedures/virtualization-vmware2-esx.md) - Add a new "tags" attributes in discovery results - Status:stable - centreon-pack-virtualization-vmware2-esx-22.09.0-1
- [**VMware VM**](../procedures/virtualization-vmware2-vm.md) - Add a new "tags" attributes in discovery results - Status:stable - centreon-pack-virtualization-vmware2-vm-22.09.0-1

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Azure Virtual Machine**](../procedures/cloud-azure-compute-virtualmachine.md) - Upgrage Packs Azure VM, Expressroute, VPN Gateway to use latest guidelines - Status:stable - centreon-pack-cloud-azure-compute-virtualmachine-22.08.0-1
- [**Azure Discover**](../procedures/cloud-azure-management-discover.md) - Upgrage Packs Azure VM, Expressroute, VPN Gateway to use latest guidelines - Status:stable - centreon-pack-cloud-azure-management-discover-22.08.0-1
- [**Azure ExpressRoute**](../procedures/cloud-azure-network-expressroute.md) - Upgrage Packs Azure VM, Expressroute, VPN Gateway to use latest guidelines - Status:stable - centreon-pack-cloud-azure-network-expressroute-22.08.0-1
- [**Azure VPN Gateway**](../procedures/cloud-azure-network-vpngateway.md) - Upgrage Packs Azure VM, Expressroute, VPN Gateway to use latest guidelines - Status:stable - centreon-pack-cloud-azure-network-vpngateway-22.08.0-1
- [**Oracle Database**](../procedures/applications-databases-oracle.md) - Add more thresholds to fra-usage service - Status:stable - centreon-pack-applications-databases-oracle-22.09.0-1

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Azure Virtual Machine**](../procedures/cloud-azure-compute-virtualmachine.md) - Remove deprecated VM-State service template - Status:stable - centreon-pack-cloud-azure-compute-virtualmachine-22.09.0-1
- [**Huawei**](../procedures/network-huawei-snmp.md) - Make regex more restrictive when using interface discovery scan - Status:stable - centreon-pack-network-huawei-snmp-22.08.0-1
- [**IBM AS400 Connector**](../procedures/operatingsystems-as400-connector.md) - Fix typo in AS400-Command command thresholds - Status:stable - centreon-pack-operatingsystems-as400-connector-22.09.1-1 
- [**IP-Label Ekara Rest API**](../procedures/applications-monitoring-iplabel-ekara-restapi.md) - Discovery provider didn't obfuscate correctly sensitive macros - Status:stable - centreon-pack-applications-monitoring-iplabel-ekara-restapi-22.08.0-1
- [**Kadiska Rest API**](../procedures/applications-monitoring-kadiska-restapi.md) - Fix outdated command option for nettracer mode - Status:stable - centreon-pack-applications-monitoring-kadiska-restapi-22.08.0-1
- [**Silverpeak**](../procedures/network-silverpeak-snmp.md) - Fix Uptime command thresholds - Status:stable - centreon-pack-network-silverpeak-snmp-22.08.0-1

</TabItem>
</Tabs>

### July 

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

### June 

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

### May 

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

### April

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

### February

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

### January

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

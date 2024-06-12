---
id: release-notes
title: Release Notes
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 2024

### Juin

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Loggly Rest API**](../procedures/applications-monitoring-loggly-restapi.md) - Initial release.
- [**Windows Telegraf Agent**](../procedures/operatingsystems-windows-telegraf-agent.md) - Initial release.
- [**Mosquitto MQTT Broker**](../procedures/) - Initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**HTTP Server**](../procedures/applications-protocol-http.md) - Added possibility for collection mode to use the `full_url` and `functions` attributes ([Community contribution](https://github.com/centreon/centreon-plugins/pull/4915)). 
- [**TrendMicro Iwsva**](../procedures/applications-trendmicro-iwsva-snmp.md) - 
- [**HashiCorp Vault Rest API**](../procedures/applications-hashicorp-vault-restapi.md) - Added an option `auth-path` to handle variable path for hashicorp vault authentication ([Community contribution](https://github.com/centreon/centreon-plugins/pull/4764)). 

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Kadiska Rest API**](../procedures/applications-monitoring-kadiska-restapi.md) - Will no longer be supported and will be deprecated.
- [**TrendMicro Iwsva**](../procedures/applications-trendmicro-iwsva-snmp.md) - Fixed packaging and change thresholds macro naming.

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Datacore SANsymphony RESTAPI**](../procedures/hardware-storage-datacore-api.md) - Fixed API path in pools check and added verbosity in monitoring Datacore “monitors” objects.
- [**HTTP Server**](../procedures/applications-protocol-http.md) - Fixed in collection mode an infinite looping if the `parse` attribute was not defined and of another anomaly resulting in an “Unknown” error ([Community contribution](https://github.com/centreon/centreon-plugins/pull/4915)). 
- [**Windows SNMP**](../procedures/operatingsystems-windows-snmp.md) - Fixed an issue with windows services containing parenthesis blocking discovery exportation. This parenthesis will automatically be replaced by square brackets to avoid this issue.

</TabItem>
</Tabs>

### Mai

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Camera Avigilon SNMP**](../procedures/hardware-devices-camera-avigilon-snmp.md) - Initial release of Avigilon SNMP.
- [**Quanta Rest API**](../procedures/applications-monitoring-quanta-restapi.md) - Initial release of Quanta RESTAPI.
- [**RRDcached**](../procedures/applications-rrdcached.md) - Initial release of RRDCached.

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Citrix Netscaler**](../procedures/network-loadbalancers-netscaler-snmp.md) - Fixed status mapping on Citrix PSU ([Community contribution](https://github.com/centreon/centreon-plugins/pull/4722))
- [**FTP Server**](../procedures/applications-protocol-ftp.md) - Fixed file processing when both --filter-file and --max-depth options were used.
- [**HTTP Server**](../procedures/applications-protocol-http.md) - Fixed the package version of perl-JSON-Path and added missing perl-Exporter-Easy package.
- [**Protocol CIFS**](../procedures/applications-protocol-cifs.md) - Fixed file processing when both --filter-file and --max-depth options were used.
- [**Protocol SFTP**](../procedures/applications-protocol-sftp.md) - Fixed file processing when both --filter-file and --max-depth options were used.
- [**Windows WSMAN**](../procedures/operatingsystems-windows-wsman.md) - Fixed the OS-Windows-WSMAN-Services-Macro command and its discovery rule.

</TabItem>
</Tabs>

### Avril

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
<TabItem value="Fix" label="Fix">

- [**Azure SQL Database**](../procedures/cloud-azure-database-sqldatabase.md) - Fixed the Cloud-Azure-Database-SqlDatabase-Api-Cpu command.
- [**Elasticsearch**](../procedures/applications-databases-elasticsearch.md) - Removed two useless macros from the App-DB-Elasticsearch-Indice-Statistics-custom service template.
- [**Linux NRPE4**](../procedures/operatingsystems-linux-nrpe4.md) - The 'storage' mode now takes the reserved space of the file systems into account.
- [**Linux SSH**](../procedures/operatingsystems-linux-ssh.md) - The 'storage' mode now takes the reserved space of the file systems into account.

</TabItem>
</Tabs>

### Mars

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
<TabItem value="Fix" label="Fix">

- [**APC Sensor SNMP**](../procedures/hardware-sensors-apc-snmp.md) - Fixed an issue causing Perl warnings for 'use of uninitialized value'.
- [**Bluemind SSH**](../procedures/applications-bluemind-ssh.md) - On Webserver service template, use storable as cache method to fix an issue.
- [**Generic SNMP**](../procedures/applications-protocol-snmp.md) - Fixed the App-Protocol-SNMP-Host command and a random behaviour on SNMP-Collection.
- [**Socomec Net Vision UPS SNMP**](../procedures/hardware-ups-socomec-netvision-snmp.md) - Fixed the Netvision version detection in the plugin.

</TabItem>
</Tabs>

### Février

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Centreon Map Engine**](../procedures/applications-monitoring-centreon-map-engine-actuator.md) - First release of Centreon Map Engine monitoring connector.
- [**Inmatics PSU Sputnik**](../procedures/hardware-ups-inmatics-sputnik-snmp.md) - First release of Inmatics PSU Sputnik monitoring connector.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Azure Kubernetes Service**](../procedures/cloud-azure-compute-aks.md) - Added Memory, Node-State, Pod-State and Unschedulable-Pods service templates to Azure AKS.
- [**Rubrik Rest API**](../procedures/applications-rubrik-restapi.md) - Enhanced jobs and cache modes.

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Aruba Instant SNMP**](../procedures/network-aruba-instant-snmp.md) - Fixed an "uninitialized value in concatenation" issue on AP-Usage.

</TabItem>
</Tabs>

### Janvier

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Avocent ACS 8000**](../procedures/hardware-kvm-avocent-acs-8000-snmp.md) - Initial release of Avocent 8000.
- [**Teldat Edge Routers SNMP**](../procedures/network-teldat-snmp.md) - Initial release of Teldat Edge Routers SNMP.

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Dell Xseries**](../procedures/network-switchs-dell-xseries-snmp.md) - Fixed the wrong options in the Net-Dell-Xseries-SNMP-Cpu command.
- [**IBM Storwize**](../procedures/hardware-storage-ibm-storwize-ssh.md) - Fixed date issue and added replication service template.
- [**Microsoft SQL Server**](../procedures/applications-databases-mssql.md) - Fixed a regression on sql-string mode.
- [**MySQL/MariaDB**](../procedures/applications-databases-mysql.md) - Fixed a regression on sql-string mode.
- [**Oracle Database**](../procedures/applications-databases-oracle.md) - Fixed a regression on sql-string mode.
- [**Warp10 Sensision**](../procedures/applications-databases-warp10-sensision.md) - Fixed an issue that blocked the uninstallation process and a broker command.

</TabItem>
</Tabs>

## 2023

### Décembre

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
<TabItem value="Fix" label="Fix">

- [**Citrix Acceleration**](../procedures/network-citrix-appacceleration-snmp.md) - Fixed incorrect carriage return in Service Discovery commands.
- [**Stormshield API**](../procedures/network-stormshield-api.md) - Fixed an incorrect option in the HA command.
- [**Synology**](../procedures/hardware-storage-synology-snmp.md) - Fixed an issue with the status that was returned when disks were failing.
- [**UPS Standard**](../procedures/hardware-ups-standard-rfc1628-snmp.md) - Fixed the plugin's input-lines mode when all lines were at 0.

</TabItem>
</Tabs>

### Novembre

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
<TabItem value="Fix" label="Fix">

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

### Octobre

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
<TabItem value="Fix" label="Fix">

- [**AWS Discover**](../procedures/cloud-aws-cloudwatch-discover.md) - Added the missing is\_password attribute to the host discovery provider.
- [**Amazon FSx**](../procedures/cloud-aws-fsx.md) - Linked the freespace template to the right check command.
- [**ArubaOS-CX SNMP**](../procedures/network-aruba-aoscx-snmp.md) - Fixed the hardware mode: "ready" states now give OK status.
- [**Azure Functions**](../procedures/cloud-azure-compute-functions.md) - Linked Executions template to the right check command.
- [**cAdvisor API**](../procedures/cloud-cadvisor-api.md) - Fixed a **Use of uninitialized value** error on Container-Usage mode.
- [**Fortinet Fortigate Rest API**](../procedures/network-fortinet-fortigate-restapi.md) - Fixed a **Not an ARRAY reference**  error on System mode.

</TabItem>
</Tabs>

### Septembre

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
<TabItem value="Fix" label="Fix">

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

### Août

> **Changement majeur concernant les règles de découverte d'hôte** : Host Discovery utilisait des modèles en lecture seule comme modèles par défaut. Désormais ce sont les modèles "-custom", qui sont en lecture-écriture, qui sont utilisés. Par exemple, `generic-active-host-custom` sera utilisé à la place de `generic-active-host`. Voir la section "Breaking changes" pour plus d'informations.


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
<TabItem value="Fix" label="Fix">

- [**Gorgy NTP Server**](../procedures/hardware-device-gorgy-ntpserver-snmp.md) - fixed the $_HOSTSNMPEXTRAOPTIONS$ macros.
- [**NetApp Ontap SNMP**](../procedures/hardware-storage-netapp-ontap-snmp.md) - fixed the $_HOSTSNMPEXTRAOPTIONS$ macros.
- [**Pure Storage FlashArray Rest API v2**](../procedures/hardware-storage-purestorage-flasharray-v2-restapi.md) - fixed an error that occurred when the storage size was zero.

</TabItem>
</Tabs>

### Juillet

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
<TabItem value="Fix" label="Fix">

- [**AWS ELB**](../procedures/cloud-aws-elb.md) - fixed the host discovery unicity.
- [**IP-Label Datametrie Rest API**](../procedures/applications-monitoring-iplabel-datametrie-restapi.md) - marked as deprecated (service end of life).
- [**Dell PowerStore Rest API**](../procedures/hardware-storage-dell-powerstore-restapi.md) - fixed bug on Memory.

</TabItem>
</Tabs>

### Juin

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
<TabItem value="Fix" label="Fix">

- [**Adva FSP 3000 SNMP**](../procedures/network-adva-fsp3000-snmp.md) - Fixed options for interfaces mode.
- [**Hitachi NAS**](../procedures/hardware-storage-hitachi-hnas-snmp.md) - Fixed option in virtual-volumes-quotas mode.

</TabItem>
</Tabs>

### Mai

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
<TabItem value="Fix" label="Fix">

- [**Azure Policies States**](../procedures/cloud-azure-policyinsights-policystates.md) - Add policy-name macro.
- [**Azure Policies States**](../procedures/cloud-azure-policyinsights-policystates.md) - changed command name.
- [**Centreon Poller**](../procedures/applications-monitoring-centreon-poller.md) - fix options for Broker stats.
- [**xFusion iBMC SNMP**](../procedures/hardware-servers-xfusion-ibmc-snmp.md) - wrong command.

</TabItem>
</Tabs>

### Avril

> Dans la page de gestion des connecteurs de supervision, vous constaterez que ceux-ci ont tous été mis à jour. S’ils n’apparaissent pas dans le tableau ci-dessous, aucune modification n’a été faite : il s’agissait seulement de prendre en compte la toute dernière version de leur plugin.

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

### Mars

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
<TabItem value="Fix" label="Fix">

- [**Centreon SQL Metrics**](../procedures/applications-monitoring-centreon-sql-metrics.md) - fix partitioning mode.
- [**Kubernetes API**](../procedures/cloud-kubernetes-api.md) - fix node host discovery.

</TabItem>
</Tabs>

### Février

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

### Janvier

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
<TabItem value="Fix" label="Fix">

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

### Décembre


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

### Novembre

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
<TabItem value="Fix" label="Fix">

- [**NetApp Ontap Rest API**](../procedures/hardware-storage-netapp-ontap-restapi.md) - Adding Aggregates service template.
- [**IP-Label Ekara Rest API**](../procedures/applications-monitoring-iplabel-ekara-restapi.md) - Fix PASSWORD and FILTER macros attributes.
- [**Windows NSClient 0.5**](../procedures/operatingsystems-windows-nsclient-05-nrpe.md) - Fix erroneous mode name in Updates command.
- [**Mikrotik SNMP**](../procedures/network-mikrotik-snmp.md) - Remove wrong options from the uptime command.

</TabItem>
</Tabs>

### Octobre

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
<TabItem value="Fix" label="Fix">

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

### Septembre

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
<TabItem value="Fix" label="Fix">

- [**Azure Virtual Machine**](../procedures/cloud-azure-compute-virtualmachine.md) - Remove deprecated VM-State service template.
- [**Huawei**](../procedures/network-huawei-snmp.md) - Make regex more restrictive when using interface discovery scan.
- [**IBM AS400 Connector**](../procedures/operatingsystems-as400-connector.md) - Fix typo in AS400-Command command thresholds.
- [**IP-Label Ekara Rest API**](../procedures/applications-monitoring-iplabel-ekara-restapi.md) - Discovery provider didn't obfuscate correctly sensitive macros.
- [**Kadiska Rest API**](../procedures/applications-monitoring-kadiska-restapi.md) - Fix outdated command option for nettracer mode.
- [**Silverpeak**](../procedures/network-silverpeak-snmp.md) - Fix Uptime command thresholds.

</TabItem>
</Tabs>

### Juillet 

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
<TabItem value="Fix" label="Fix">

- [**Active Directory WSMAN**](../procedures/applications-active-directory-wsman.md) - Fixed typos in Active Directory WSMan commands.
- [**AWS ELB**](../procedures/cloud-aws-elb.md) - Added missing Classic and Applications ELB Discovery rules.
- [**Azure Database for MySQL**](../procedures/cloud-azure-database-mysql.md) - Fixed typo in serverlog-usage option label.
- [**Ruckus ICX SNMP**](../procedures/network-ruckus-icx-snmp.md) - Fixed macro in Ruckus ICX Memory service template.

</TabItem>
</Tabs>

### Juin 

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
<TabItem value="Fix" label="Fix">

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

### Mai

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
<TabItem value="Fix" label="Fix">

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

### Avril

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
<TabItem value="Fix" label="Fix">

- [**Cisco Meraki RestAPI**](../procedures/network-cisco-meraki-restapi.md) - Fix host disco attributes.
- [**Digi Portserverts SNMP**](../procedures/network-digi-portserverts-snmp.md) - Rename Pack.
- [**Amazon EC2**](../procedures/cloud-aws-ec2.md) - Fixing discovery mapper and wrong HTPL/STPL association.
- [**Aruba Standard**](../procedures/network-switchs-aruba-standard-snmp.md) - Fixing extra space in disco commands.
- [**Centreon MBI**](../procedures/applications-monitoring-centreon-mbi.md) - MariaDB service name fix.
- [**Docker RestAPI**](../procedures/applications-docker-restapi.md) - Fix macro in Node-status mode.
- [**Microsoft IIS NSClient 0.5**](../procedures/applications-webservers-iis-nsclient-05-restapi.md) - Align pack status with documentation (deprecated).
- [**Microsoft IIS NRPE**](../procedures/applications-webservers-iis-nrpe.md) - Align pack status with documentation (deprecated).
- [**Azure Virtual Machine Scale Sets**](../procedures/cloud-azure-compute-vmscalesets.md) - Fix discovery provider description.
- [**Symbol WiNG SNMP**](../procedures/network-switchs-symbol-wing-snmp.md) - Fix Systems command.
- [**IBM Softlayer**](../procedures/cloud-ibm-softlayer-api.md) - Fix commands options.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**OneAccess SNMP**](../procedures/network-oneaccess-snmp.md) - Add new services: Interfaces and cells-radio.
- [**NetApp Ontap OnCommand API**](../procedures/hardware-storage-netapp-ontap-oncommandapi.md) - Refactoring volumes services.

</TabItem>
</Tabs>

### Février

<Tabs groupId="sync">
<TabItem value="New connectors" label="New connectors">

- [**Viptela SNMP**](../procedures/network-viptela-snmp.md) - Initial release.
- [**Fortinet FortiADC SNMP**](../procedures/network-fortinet-fortiadc-snmp.md) - Initial release.
- [**IP-Label Ekara Rest API**](../procedures/applications-monitoring-iplabel-ekara-restapi.md) - Initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Cisco Meraki Rest API**](../procedures/network-cisco-meraki-restapi.md) - Add new cache system.
- [**Veeam**](../procedures/applications-veeam-nrpe.md) - Add vsb-jobs service.
- [**HP Procurve**](../procedures/network-switchs-symbol-wing-snmp.md) - Add service virtual-chassis.
- [**Raritan PDU**](../procedures/hardware-pdu-raritan-snmp.md) - Add service inlet-sensors.
- [**Cisco Meraki Rest API**](../procedures/network-cisco-meraki-restapi.md) - Add a variable to autodiscovery attributes.
- [**Office 365**](../procedures/cloud-microsoft-office365-management.md) - Add service app-credentials.
- [**Watchguard**](../procedures/network-watchguard-snmp.md) - Add service cluster.

</TabItem>
<TabItem value="Fix" label="Fix">

- [**Azure Virtual Machine**](../procedures/cloud-azure-compute-virtualmachine.md) - Removing option in memory command.

</TabItem>
<TabItem value="Breaking changes" label="Breaking changes">

- [**Oracle Database**](../procedures/applications-databases-oracle.md) - Change threshold options for service rman-backup-problems.
- [**VTOM Rest API**](../procedures/applications-vtom-restapi.md) - Use official and latest API.

</TabItem>
</Tabs>

### Janvier

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
- [**Symbol WiNG SNMP**](../procedures/network-switchs-symbol-wing-snmp.md) - Initial release.
- [**Dynamics NSClient**](../procedures/applications-dynamics-ax-nsclient-05-nrpe.md) - Initial release.
- **Dynamics AX Database** - Initial release.
- [**Dynamics 365**](../procedures/applications-dynamics-365-nsclient-05-nrpe.md) - Initial release.

</TabItem>
<TabItem value="Enhancements" label="Enhancements">

- [**Fortinet Fortigate**](../procedures/network-firewalls-fortinet-fortigate-snmp.md) - Change threshold options.
- [**Amazon EBS**](../procedures/cloud-aws-ebs.md) - Add host discovery rule.
- **VMWare** - New services coming with VMWare connector 3.2.2.

</TabItem>
<TabItem value="Fix" label="Fix">

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

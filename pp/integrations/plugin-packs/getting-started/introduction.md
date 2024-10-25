---
id: introduction
title: Introduction to Monitoring Connectors
---

> TTTTTTAs of April 2023, we're changing the name of some Centreon objects and attributes. "Monitoring Connectors" becomes the new name for Plugin Packs. We're making this change because users were often confused between two similar terms, Plugins and Plugin Packs, sometimes using one for the other. We're only changing the name! The functionalities and capabilities stay the same.

> To know how to install Monitoring Connectors, you can go to the dedicated part: 
> [Monitoring Connectors installation](/docs/monitoring/pluginpacks).

A Monitoring Connector is a downloadable package containing a set of configuration
templates that make it fast and easy to monitor your IT infrastructure.

The templates (commands, hosts and services templates) configure a monitoring
plugin that actually executes the monitoring commands on a Centreon Poller.
Plugins are not packaged with Monitoring Connectors and must be installed separately:
this is explained in the monitoring procedure that comes with each Monitoring Connector.
Some Monitoring Connectors also require a Connector (e.g. AS400, VMWare) or an agent
(e.g. Windows NRPE).

For each type of equipment, the templates determine which indicators will be
monitored and set default warning and critical thresholds. These may be
fine-tuned later-on.

Some Monitoring Connectors also contain discovery rules. Discovery rules instruct the
Centreon discovery engine to fetch additional assets to be monitored. Host
discovery rules will look for new hosts (e.g. EC2 assets on AWS, virtual
machines on VMware) while Service discovery rules will look for new services
(e.g. Disk Volumes or Ethernet Interfaces on a server).

Monitoring Connectors on your Centreon platform are managed by the Monitoring Connector Manager
user interface. Monitoring Connectors may be updated or new Monitoring Connectors may be added to
the Centreon online library on a weekly basis. These are accessed from the
Monitoring Connector Manager.

This chapter contains an up-to-date list of all Monitoring Connectors with their
respective monitoring procedure. They are organized in 14 categories
(Applications, Centreon, Cloud, Database, Hardware, Network, Operating System,
Protocol, Sensor, Storage, ToIP-VoIP, UPS-PDU, Virtualization) and then listed
alphabetically.

Here is a list of commonly used Monitoring Connectors:

  - [Linux SNMP](../procedures/operatingsystems-linux-snmp.md)
  - [Windows SNMP](../procedures/operatingsystems-windows-snmp.md)
  - [Windows NRPE/NSClient 0.5](../procedures/operatingsystems-windows-nsclient-05-nrpe.md)
  - [VMware virtual machines](../procedures/virtualization-vmware2-vm.md)
  - [VMware ESX](../procedures/virtualization-vmware2-esx.md)
  - [Cisco standard switches](../procedures/network-cisco-standard-snmp.md)
  - [HP Procurve](../procedures/network-switchs-hp-procurve-snmp.md)
  - [MySQL/MariaDB](../procedures/applications-databases-mysql.md)
  - [Oracle database](../procedures/applications-databases-oracle.md)
  - [Fortinet Fortigate](../procedures/network-firewalls-fortinet-fortigate-snmp.md)
  - [Dell iDRAC](../procedures/hardware-servers-dell-idrac-snmp.md)

And a list of Monitoring Connectors with embedded Host Discovery providers:

  - [Generic SNMP](../procedures/applications-protocol-snmp.md)
  - [VMware virtual machines](../procedures/virtualization-vmware2-vm.md)
  - [VMware ESX](../procedures/virtualization-vmware2-esx.md)
  - [Amazon EC2](../procedures/cloud-aws-ec2.md)
  - [Amazon S3](../procedures/cloud-aws-s3.md)
  - [Amazon RDS](../procedures/cloud-aws-rds.md)
  - [Azure Virtual Machine](../procedures/cloud-azure-compute-virtualmachine.md)
  - [Azure Storage Account](../procedures/cloud-azure-storage-storageaccount.md)
  - [Azure SQL Server](../procedures/cloud-azure-database-sqlserver.md)
  - [Ansible Tower](../procedures/applications-ansible-tower.md)
  - [Aruba standard switches](../procedures/network-switchs-aruba-standard-snmp.md)

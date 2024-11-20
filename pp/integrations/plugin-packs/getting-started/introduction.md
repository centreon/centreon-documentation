---
id: introduction
title: Introduction to Monitoring Connectors
---

> As of April 2023, we're changing the name of some Centreon objects and attributes. "Monitoring Connectors" becomes the new name for Plugin Packs. We're making this change because users were often confused between two similar terms, Plugins and Plugin Packs, sometimes using one for the other. We're only changing the name! The functionalities and capabilities stay the same.

> Need a hand?
> We have a section dedicated to help you [install monitoring connectors](/docs/monitoring/pluginpacks) or [troubleshooting connectors](../how-to-guides/troubleshooting-plugins.md).

## What are monitoring connectors (or connectors for short)?

A monitoring connector is the software brick that allows Centreon to communicate with the monitored equipments.

The connector is made of a pack (preconfigured templates) and a plugin (the probe that executes the commands). Plugins are not downloaded along the monitoring connecters and must be installed separately, this is more extensively explained in the guides specific to each connector.
Some connectors may also have a "discovery" feature that allows them to find by themselves a certain type of resources to monitor.

Centreon offers a vast array of monitoring connectors ready for use to monitor all sorts of equipments and our catalog grows every month.


## Where can I find connectors supported by Centreon?

The table of contents on the left contains an up-to-date list of all Monitoring Connectors organized in 14 categories
(Applications, Centreon, Cloud, Database, Hardware, Network, Operating System,
Protocol, Sensor, Storage, ToIP-VoIP, UPS-PDU, Virtualization) and then listed
alphabetically. Each connector page indicates its requirements, the objects it monitors and the installation procedure.

Here is a list of commonly used Monitoring Connectors:

  - [Base Pack](../procedures/base-generic.md)
  - [Linux SNMP](../procedures/operatingsystems-linux-snmp.md)
  - [Centreon Central](../procedures/applications-monitoring-centreon-central.md)
  - [Windows SNMP](../procedures/operatingsystems-windows-snmp.md)
  - [MySQL/MariaDB](../procedures/applications-databases-mysql.md)
  - [Centreon Database](../procedures/applications-monitoring-centreon-database.md)
  - [Centreon Poller](../procedures/applications-monitoring-centreon-poller.md)
  - [Cisco standard switches](../procedures/network-cisco-standard-snmp.md)
  - [Printer standard](../procedures/hardware-printers-standard-rfc3805-snmp/)
  - [UPS Standard SNMP](../procedures/hardware-ups-standard-rfc1628-snmp/)

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

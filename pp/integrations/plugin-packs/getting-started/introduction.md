---
id: introduction
title: Introduction to Monitoring Connectors
---

> As of April 2023, we're changing the name of some Centreon objects and attributes. "Monitoring Connectors" becomes the new name for Plugin Packs. We're making this change because users were often confused between two similar terms, Plugins and Plugin Packs, sometimes using one for the other. We're only changing the name! The functionalities and capabilities stay the same.

> To know how to install Monitoring Connectors, you can go to the dedicated part: 
> [Monitoring Connectors installation](/docs/monitoring/pluginpacks).

A monitoring connector is the software brick that allows Centreon to communicate with the monitored equipments.

Centreon offers a vast array of monitoring connectors ready for use to monitor all sorts of equipments and our catalog grows every month.

The connector is made of a pack (preconfigured templates) and a plugin (the probe that executes the commands). Plugins are not downloaded along the monitoring connecters and must be installed separately, this is more extensively explained in the guides specific to each connector.
Some connectors may also have a "discovery" feature that allows them to find by themselves a certain type of resources to monitor.


## What am I getting when I download a connector?

The pack contains information such as the services to monitor, their alert thresholds and commands necessary to their checks. The pack allows for the set up of a predetermined configuration for the services but this remains highly customizable later on.
The command lines contain what we call macros: placeholder text that is to be replaced with information specific to each object to monitor.

Service and host templates are preconfigurations. For example, a monitoring connector for servers will have the configuration necessary to monitor the CPU usage but also alert thresholds already established for the servers the user will add to Centreon.
When a check request is made, Centreon Engine takes the corresponding command line, replaces the default text of the macros by the identifiers of the equipment that needs to be checked, adapts to the appropriate protocol (like HTTP for an API) and specifies the information it wants to obtain. Once all the blanks are filled in, the command is sent to the plugin to be executed and retrieve the data from the service.


## Can I still use Centreon without connectors?

The user can, if they prefer it, set up by themselves all the fonctions obtained from connectors (by creating custom commands). The goal of connectors is to save the time that would be spent configuring everything: connectors are ready to be implemented from the moment htey are installed.

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

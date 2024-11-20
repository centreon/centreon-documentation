---
id: introduction
title: Démarrer avec les connecteurs de supervision
---

> À partir d'avril 2023, nous changeons le nom de certains objets Centreon. "Connecteurs de supervision" est désormais le nouveau nom des Plugin Packs. Nous procédons à ce changement car les utilisateurs confondaient souvent deux termes similaires, Plugins et Plugin Packs, utilisant parfois l'un à la place de l'autre. Nous ne changeons que le nom ! Les fonctionnalités et les capacités restent les mêmes.

> # Besoin d'aide ?
> Consultez la documentation dédiée pour [installater des connecteurs de supervision](/docs/monitoring/pluginpacks)  ou pour [troubleshooter des connecteurs](../how-to-guides/troubleshooting-plugins.md).

## Que sont les connecteurs de supervision ?

Un connecteur de supervision est la brique logicielle qui permet à Centreon de communiquer avec les équipements supervisés.

Le connecteur est constitué d’un pack (des modèles préconfigurés) et d’un plugin (la sonde qui exécute les contrôles). Les plugins ne sont pas téléchargées avec les connecteurs de supervision et doivent être installées par ailleurs : ceci est expliqué en détail dans la procédure de mise en supervision associée à chaque connecteur de supervision.
Certains connecteurs ont également une option de “découverte” qui leur permet de détecter par eux-mêmes un certain type de ressources à superviser.

Centreon propose une large gamme connecteurs de supervision prêts à l’emploi qui permettent de contrôler tout type d’équipement. Nous agrandissons notre collection de connecteurs tous les mois.

## Où puis-je trouver des connecteurs compatibles avec Centreon ?

La table des matières à gauche contient tous les connecteurs actuellement disponibles répartis en 14
catégories (Applications, Centreon, Cloud, Database, Hardware, Network,
Operating System, Protocol, Sensor, Storage, ToIP-VoIP, UPS-PDU,
Virtualization) puis listés par ordre alphabétique. La page de chacun de ces connecteurs indique ses préréquis, objets qu'ils monitorent et la procédure d'installation.


Vous trouverez ici une liste des connecteurs de supervision fréquemment utilisés :

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

Et une liste de connecteurs de supervision avec des fournisseurs de découverte d'hôte
intégrés :

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

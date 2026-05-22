---
id: introduction
title: Démarrer avec les connecteurs de supervision
---

> À partir d'avril 2023, nous changeons le nom de certains objets Centreon. "Connecteurs de supervision" est désormais le nouveau nom des Plugin Packs. Nous procédons à ce changement car les utilisateurs confondaient souvent deux termes similaires, Plugins et Plugin Packs, utilisant parfois l'un à la place de l'autre. Nous ne changeons que le nom ! Les fonctionnalités et les capacités restent les mêmes.

> Pour savoir comment installer un connecteur de supervision, vous pouvez vous rendre sur la documentation dédiée: 
> [installation des connecteurs de supervision](/docs/monitoring/pluginpacks).

Un connecteur de supervision (ou pack de supervision en français) est un jeu téléchargeable
de modèles de configuration qui rendent la supervision de votre infrastructure
facile et intuitive.

Ces modèles (modèles d’hôtes et de services, commandes associées) configurent
une sonde (aussi appelée plugin) qui elle-même exécute les commandes de
supervision depuis un Centreon Poller. Les sondes ne sont pas téléchargées avec
les connecteurs de supervision et doivent être installées par ailleurs : ceci est expliqué
dans la procédure de mise en supervision associée à chaque connecteur de supervision.
Certains connecteurs de supervision nécessitent aussi un Connecteur (ex : AS400 ou VMware)
ou un agent (ex : Windows NRPE).

Pour chaque type d’équipement, les modèles déterminent quels indicateurs seront
supervisés et définissent les valeurs par défaut des seuils Warning et
Critical. Ceux-ci sont modifiables par la suite.

Certains connecteurs de supervision contiennent aussi des règles de découverte. Ces règles
sont exécutées par le moteur de découverte Centreon pour déterminer une liste
de ressources supplémentaires à superviser. Les règles de découverte de hôtes
listent de nouveaux hôtes (ex : des ressources AWS EC2, des machines virtuelles
VMware) alors que les règles de découverte de services listent des services
supplémentaires (ex : volumes disques ou interfaces Ethernet sur un serveur).

Les connecteurs de supervision de votre plateforme Centreon sont gérés à travers l’IHM Plugin
Pack Manager. Les connecteurs de supervision sont susceptibles d’être mis à jour, ou de
nouveaux connecteurs de supervision sont susceptibles d’être ajouté à la bibliothèque en
ligne Centreon chaque semaine. Ils sont tous accessibles depuis l’IHM Gestionnaire de connecteurs de supervision.

Le chapitre ci-dessous est la liste à jour de tous les connecteurs de supervision disponibles
avec leur procédure de mise en supervision associée. Ils sont répartis en 14
catégories (Applications, Centreon, Cloud, Database, Hardware, Network,
Operating System, Protocol, Sensor, Storage, ToIP-VoIP, UPS-PDU,
Virtualization) puis listés par ordre alphabétique.

Vous trouverez ici une liste des connecteurs de supervision fréquemment utilisés :

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

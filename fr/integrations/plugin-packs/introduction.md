---
id: introduction
title: Introduction to Plugin Packs
---

Un Plugin Pack (ou pack de supervision en français) est un jeu téléchargeable
de modèles de configuration qui rendent la supervision de votre infrastructure
facile et intuitive.

Pour pouvoir en bénéficier il est nécessaire d'avoir une licence et d'installer le dépôts associé:

    yum install https://yum.centreon.com/plugin-packs/2e83f5ff110c44a9cab8f8c7ebbe3c4f/20.04/el7/stable/noarch/RPMS/centreon-plugin-packs-release-20.04-1.el7.centos.noarch.rpm

Ces modèles (modèles d’hôtes et de services, commandes associées) configurent
une sonde (aussi appelée plugin) qui elle-même exécute les commandes de
supervision depuis un Centreon Poller. Les sondes ne sont pas téléchargées avec
les Plugin Packs et doivent être installées par ailleurs : ceci est expliqué
dans la procédure de mise en supervision associée à chaque Plugin Pack.
Certains Plugin Packs nécessitent aussi un Connecteur (ex : AS400 ou VMware)
ou un agent (ex : Windows NRPE).

Pour chaque type d’équipement, les modèles déterminent quels indicateurs seront
supervisés et définissent les valeurs par défaut des seuils Warning et
Critical. Ceux-ci sont modifiables par la suite.

Certains Plugin Packs contiennent aussi des règles de découverte. Ces règles
sont exécutées par le moteur de découverte Centreon pour déterminer une liste
de ressources supplémentaires à superviser. Les règles de découverte de hôtes
listent de nouveaux hôtes (ex : des ressources AWS EC2, des machines virtuelles
VMware) alors que les règles de découverte de services listent des services
supplémentaires (ex : volumes disques ou interfaces Ethernet sur un serveur).

Les Plugin Packs de votre plateforme Centreon sont gérés à travers l’IHM Plugin
Pack Manager. Les Plugin Packs sont susceptibles d’être mis à jour, ou de
nouveaux Plugin Packs sont susceptibles d’être ajouté à la bibliothèque en
ligne Centreon chaque semaine. Ils sont tous accessibles depuis l’IHM Plugin
Pack Manager.

Pour en savoir plus sur le téléchargement et la mise en oeuvre des Plugin
Packs, référez-vous au chapitre Monitoring/Plugin Packs de cette documentation.

Le chapitre ci-dessous est la liste à jour de tous les Plugin Packs disponibles
avec leur procédure de mise en supervision associée. Ils sont répartis en 14
catégories (Applications, Centreon, Cloud, Database, Hardware, Network,
Operating System, Protocol, Sensor, Storage, ToIP-VoIP, UPS-PDU,
Virtualization) puis listés par ordre alphabétique : mais la fonction de
recherche de votre navigateur est là pour vous aider !

Vous trouverez ici une liste des Plugin Packs fréquemment utilisés :

  - [Linux SNMP](procedures/operatingsystems-linux-snmp.html)
  - [Windows SNMP](procedures/operatingsystems-windows-snmp.html)
  - [Windows NRPE/NSClient 0.5](procedures/operatingsystems-windows-nsclient-05-nrpe.html)
  - [VMware virtual machines](procedures/virtualization-vmware2-vm.html)
  - [VMware ESX](procedures/virtualization-vmware2-esx.html)
  - [Cisco standard switches](procedures/network-cisco-standard-snmp.html)
  - [HP Procurve](procedures/network-switchs-hp-procurve-snmp.html)
  - [MySQL/MariaDB](procedures/applications-databases-mysql.html)
  - [Oracle database](procedures/applications-databases-oracle.html)
  - [Fortinet Fortigate](procedures/network-firewalls-fortinet-fortigate-snmp.html)
  - [Dell iDRAC](procedures/hardware-servers-dell-idrac-snmp.html)

Et une liste de Plugin Packs avec des fournisseurs de découverte d'hôte
intégrés :

  - [Generic SNMP](procedures/applications-protocol-snmp.html)
  - [VMware virtual machines](procedures/virtualization-vmware2-vm.html)
  - [VMware ESX](procedures/virtualization-vmware2-esx.html)
  - [Amazon EC2](procedures/cloud-aws-ec2.html)
  - [Amazon S3](procedures/cloud-aws-s3.html)
  - [Amazon RDS](procedures/cloud-aws-rds.html)
  - [Azure Virtual Machine](procedures/cloud-azure-compute-virtualmachine.html)
  - [Azure Storage Account](procedures/cloud-azure-storage-storageaccount.html)
  - [Azure SQL Server](procedures/cloud-azure-database-sqlserver.html)
  - [Ansible Tower](procedures/applications-ansible-tower.html)
  - [Aruba standard switches](procedures/network-switchs-aruba-standard-snmp.html)

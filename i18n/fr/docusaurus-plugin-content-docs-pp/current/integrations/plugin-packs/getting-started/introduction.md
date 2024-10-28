---
id: introduction
title: Démarrer avec les connecteurs de supervision
---

> À partir d'avril 2023, nous changeons le nom de certains objets Centreon. "Connecteurs de supervision" est désormais le nouveau nom des Plugin Packs. Nous procédons à ce changement car les utilisateurs confondaient souvent deux termes similaires, Plugins et Plugin Packs, utilisant parfois l'un à la place de l'autre. Nous ne changeons que le nom ! Les fonctionnalités et les capacités restent les mêmes.

> Pour savoir comment installer un connecteur de supervision, vous pouvez vous rendre sur la documentation dédiée: 
> [installation des connecteurs de supervision](/docs/monitoring/pluginpacks).

Un connecteur de supervision est la brique logicielle qui permet à Centreon de communiquer avec les équipements supervisés.

Centreon propose de nombreux connecteurs de supervision prêts à l’emploi qui permettent de contrôler tout type d’équipement. Notre collection de connecteurs s’agrandit tous les mois.

Le connecteur est constitué d’un pack (des modèles préconfigurés) et d’un plugin (la sonde qui exécute les contrôles). Les plugins ne sont pas téléchargées avec les connecteurs de supervision et doivent être installées par ailleurs : ceci est expliqué en détail dans la procédure de mise en supervision associée à chaque connecteur de supervision.
Certains connecteurs ont également une option de “découverte” qui leur permet de détecter par eux-mêmes un certain type de ressources à superviser.

Le pack contient les informations relatives aux indicateurs qui seront supervisés, leurs seuils d’alertes et les commandes nécessaires pour les contrôles. Le pack permet une configuration prédéterminée pour les services mais celle-ci reste hautement personnalisable par la suite. 


Les lignes de commande contiennent ce que l’on appelle des macros: des espaces dans les lignes de code alloués aux informations spécifiques à chacun des objets à superviser. 

Les modèles de service et d’hôtes sont des préconfigurations d’hôtes. Par exemple, un connecteur pour serveur contiendra la configuration nécessaire pour contrôler l’usage du CPU mais également des seuils d’alerte déjà définis pour les serveurs que l’utilisateur ajoutera à Centreon.
Lorsqu’une requête de contrôle est réalisée, Centreon Engine prend la ligne de commande correspondante et remplace le texte par défaut des macros par les identifiants relatifs à l’équipement interrogé, utilise le protocole adapté (tel que HTTP pour une API) et spécifie les informations à obtenir. Une fois que tous les blancs sont remplis, la commande est envoyée au plugin qui exécute et renvoie les informations qu’il a obtenu du service.


L’utilisateur peut, s’il le souhaite, mettre en place lui-même toutes les fonctions qu’il obtiendrait en employant les connecteurs (en créant des commandes personnalisées). Le but du connecteur est de lui économiser le temps qu’il passerait à configurer cela : les connecteurs sont prêts à être intégrés à Centreon dès leur installation.


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

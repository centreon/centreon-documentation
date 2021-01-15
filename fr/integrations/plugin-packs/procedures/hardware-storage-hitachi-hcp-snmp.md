---
id: hardware-storage-hitachi-hcp-snmp
title: Hitachi HCP SNMP
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack Hitachi HCP SNMP inclut la supervision des Nodes, Tenants et Volumes.

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Nodes-->

| Metric name                              | Description                       | Unit |
| :--------------------------------------- | :-------------------------------- | :--- |
| node status                              | Status of the node                |      |
| nic status                               | Status of the nic                 |      |
| san path status                          | Status of the san path            |      |
| san path status                          | Status of the san path            |      |
| bbu status                               | Status of the battery backup unit |      |
| *nodeid*#node.space.usage.bytes          | Usage of the node                 | B    |
| *nodeid*#node.space.free.bytes           | Free space left on the node       | B    |
| *nodeid*#node.space.usage.percentage     | Usage of the node in percentage   | %    |
| *nodeid*#node.sensor.temperature.celsius | Sensor temperature                | C    |
| *nodeid*#node.sensor.fan.speed.rpm       | Sensor fan speed                  | rpm  |
| *nodeid*#node.sensor.voltage.volt        | Sensor voltage                    | V    |

It is possible to filter on the name of a node using a REGEXP of the form [```--filter-node-id='101'```].

<!--Tenants-->

| Metric name                                | Description                       | Unit |
| :----------------------------------------- | :-------------------------------- | :--- |
| *tenantname*#tenant.space.usage.bytes      | Usage of the tenant               | B    |
| *tenantname*#tenant.space.free.bytes       | Free space left on the tenant     | B    |
| *tenantname*#tenant.space.usage.percentage | Usage of the tenant in percentage | %    |

It is possible to filter on the ID of a tenant using a REGEXP of the form [```--filter-tenant-name='backup'```].

<!--Volumes-->

| Metric name                                    | Description                       | Unit |
| :--------------------------------------------- | :-------------------------------- | :--- |
| volume status                                  | Status of the volume              |      |
| *nodeid*:*label*#volume.space.usage.bytes      | Usage of the volume               | B    |
| *nodeid*:*label*#volume.space.free.bytes       | Free space left on the volume     | B    |
| *nodeid*:*label*#volume.space.usage.percentage | Usage of the volume in percentage | %    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler vos équipements Hitachi HCP, le SNMP doit être configuré.
(https://knowledge.hitachivantara.com/Documents/Storage/Content_Platform/9.0.x/Administering_HCP/System_monitoring/03_Configuring_SNMP)

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Storage-Hitachi-Hcp-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Hitachi HCP SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Storage-Hitachi-Hcp-Snmp
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-hardware-storage-hitachi-hcp-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Hitachi HCP SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par équipement Hitachi HCP.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *HW-Storage-Hitachi-Hcp-SNMP-custom*. 
Il est nécessaire de remplir les valeurs des champs "SNMP Community" et "SNMP Version".

:warning: Si vous utilisez SNMP version 3, sélectionnez la version SNMP appropriée 
et configurez les paramètres SNMP v3 via la macro SNMPEXTRAOPTIONS.

| Mandatory   | Name                    | Description                                                                 |
| :---------- | :---------------------- | :-------------------------------------------------------------------------- |
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                                                          |

Par défaut, le modèle *HW-Storage-Hitachi-Hcp-SNMP* n'a pas de modèles de services associés. Vous pouvez au choix:
 * associer des modèles de services au modèle d'hôte *HW-Storage-Hitachi-Hcp-SNMP-custom*
 * utiliser la découverte des services

## FAQ

#### Comment faire le test en ligne de commande et que signifient les principales options ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur *centreon-engine* :

```bash
/usr/lib/centreon/plugins/centreon_hitachi_hcp_snmp.pl \
    --plugin=storage::hitachi::hcp::snmp::plugin \
    --mode=nodes \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='hcp_ro' \
    --filter-node-id='101' \
    --warning-space-usage-prct='80' \
    --critical-space-usage-prct='90' \
    --verbose
```

Exemple de sortie :

```
OK: node '101' [ip address: 10.214.4.16] node status: available, nic status: ok, san path status: rain, battery backup unit status: Healthy - space usage total: 13.58 TB used: 350.93 GB (2.52%) free: 13.24 TB (97.48%) | '101#node.space.usage.bytes'=376806080512B;;;0;14933122809856 '101#node.space.free.bytes'=14556316729344B;;;0;14933122809856 '101#node.space.usage.percentage'=2.52%;0:80;0:90;0;100 '101~Temp_Ambient_FP#node.sensor.temperature.celsius'=25.0C;;;; '101~Temp_CPU0#node.sensor.temperature.celsius'=35.0C;;;; '101~Temp_CPU1#node.sensor.temperature.celsius'=40.0C;;;; '101~Temp_DIMM_AB#node.sensor.temperature.celsius'=28.0C;;;; '101~Temp_DIMM_EF#node.sensor.temperature.celsius'=29.0C;;;; '101~Temp_Outlet#node.sensor.temperature.celsius'=29.0C;;;; '101~Temp_PCH#node.sensor.temperature.celsius'=37.0C;;;; '101~Temp_PCI_Area#node.sensor.temperature.celsius'=33.0C;;;; '101~Temp_PCI_Inlet1#node.sensor.temperature.celsius'=30.0C;;;; '101~Temp_PCI_Inlet2#node.sensor.temperature.celsius'=28.0C;;;; '101~Temp_VR_CPU0#node.sensor.temperature.celsius'=27.0C;;;; '101~Temp_VR_CPU1#node.sensor.temperature.celsius'=32.0C;;;; '101~Temp_VR_DIMM_AB#node.sensor.temperature.celsius'=25.0C;;;; '101~Temp_VR_DIMM_CD#node.sensor.temperature.celsius'=27.0C;;;; '101~Temp_VR_DIMM_EF#node.sensor.temperature.celsius'=29.0C;;;; '101~Temp_VR_DIMM_GH#node.sensor.temperature.celsius'=31.0C;;;; '101~Fan_SYS0#node.sensor.fan.speed.rpm'=5100rpm;;;0; '101~Fan_SYS1#node.sensor.fan.speed.rpm'=4300rpm;;;0; '101~Fan_SYS2#node.sensor.fan.speed.rpm'=5100rpm;;;0; '101~Fan_SYS3#node.sensor.fan.speed.rpm'=4200rpm;;;0; '101~Fan_SYS4#node.sensor.fan.speed.rpm'=6600rpm;;;0; '101~Fan_SYS5#node.sensor.fan.speed.rpm'=5400rpm;;;0; '101~Fan_SYS6#node.sensor.fan.speed.rpm'=6500rpm;;;0; '101~Fan_SYS7#node.sensor.fan.speed.rpm'=5300rpm;;;0; '101~Volt_P12V#node.sensor.voltage.volt'=12.18V;;;; '101~Volt_P1V05#node.sensor.voltage.volt'=1.058V;;;; '101~Volt_P1V8_AUX#node.sensor.voltage.volt'=1.833V;;;; '101~Volt_P3V3#node.sensor.voltage.volt'=3.339V;;;; '101~Volt_P3V3_AUX#node.sensor.voltage.volt'=3.339V;;;; '101~Volt_P3V_BAT#node.sensor.voltage.volt'=3.161V;;;; '101~Volt_P5V#node.sensor.voltage.volt'=5.009V;;;; '101~Volt_P5V_AUX#node.sensor.voltage.volt'=5.009V;;;; '101~Volt_VR_CPU0#node.sensor.voltage.volt'=1.81V;;;; '101~Volt_VR_CPU1#node.sensor.voltage.volt'=1.81V;;;; '101~Volt_VR_DIMM_AB#node.sensor.voltage.volt'=1.22V;;;; '101~Volt_VR_DIMM_CD#node.sensor.voltage.volt'=1.22V;;;; '101~Volt_VR_DIMM_EF#node.sensor.voltage.volt'=1.22V;;;; '101~Volt_VR_DIMM_GH#node.sensor.voltage.volt'=1.22V;;;;
checking node '101' [ip address: 10.214.4.16]
    node status: available, nic status: ok, san path status: rain, battery backup unit status: Healthy
    space usage total: 13.58 TB used: 350.93 GB (2.52%) free: 13.24 TB (97.48%)
```

Cette commande contrôle les noeuds (```--mode=nodes```) d'un équipement ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *hcp_ro* (```--snmp-community='hcp_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation de l'espace disque est supérieur à 80% (```--warning-space-usage-prct='80'```)
et une alarme CRITICAL si supérieur à 90% (```--critical-space-usage-prct='90'```).
 
Toutes les options qui peuvent être utilisées avec ce plugin se trouvent sur la commande ```--help``` :

```bash
/usr/lib/centreon/plugins/centreon_hitachi_hcp_snmp.pl \
    --plugin=storage::hitachi::hcp::snmp::plugin \
	--mode=nodes \
	--help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement Hitachi HCP sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement Hitachi HCP ne prend pas en charge la MIB utilisée par le Plugin (branche: .1.3.6.1.4.1.116.5.46).
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.

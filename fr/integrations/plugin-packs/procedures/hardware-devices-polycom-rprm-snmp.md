---
id: hardware-devices-polycom-rprm-snmp
title: Polycom RPRM SNMP
---

## Vue d'ensemble

Polycom RealPresence Resource Manager (RPRM) offre une gestion centralisée de tous vos périphériques pris en charge, des téléphones mobiles 
aux téléphones de bureau et de conférence, tout au long de vos systèmes de salle de visioconférence et de téléprésence. 
Lors d'un déploiement dans le cadre de la solution RealPresence Clariti, les entreprises bénéficient d'applications pour assurer
la liaison, la redondance, la traversée de pare-feu, la signalisation d'appels et la vidéo mobile.

Le Plugin-Pack Centreon utilise le protocole SNMP pour se connecter et récupérer informations et métriques relatives aux équipements
Polycom RPRM.

## Contenu du Plugin-Pack

### Objets supervisés

* Appliances Polycom RPRM

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Cluster-Status-->

| Metric name          | Description                             |
|:---------------------|:----------------------------------------|
| cluster-status       | Current status of the RPRM SuperCluster |
| cluster-change-cause | Reason of the last cluster state change |

<!--License-->

| Metric name                    | Description                                                     | Unit  |
|:-------------------------------|:----------------------------------------------------------------|:------|
| rprm.license.total.usage.count | Current usage of assets vs the license maximum capability       | Count |
| rprm.license.audio.usage.count | Current usage of audio assets vs the license maximum capability | Count |
| rprm.license.video.usage.count | Current usage of video assets vs the license maximum capability | Count |

<!--Provisioning-->

| Metric name                     | Description                           | Unit  |
|:--------------------------------|:--------------------------------------|:------|
| provisioning-status             | Current provisioning jobs status      |       |
| rprm.provisioning.failed.count  | Number of failed provisioning jobs    | Count |
| rprm.provisioning.success.count | Number of successed provisioning jobs | Count |

<!--SiteLinks-->

* Global

| Metric name                | Description                                   | Unit  |
|:---------------------------|:----------------------------------------------|:------|
| rprm.sitelinks.total.count | Total number of SiteLinks managed by the RPRM | Count |

* Par *SiteLink*

| Metric name                                  | Description                                         | Unit  |
|:---------------------------------------------|:----------------------------------------------------|-------|
| sitelink-status                              | Current SiteLink status                             |       |
| rprm.sitelink.calls.active.count             | Number of active calls on the SiteLink              | Count |
| rprm.sitelink.bandwidth.used.percentage      | Percentage rate of used bandwidth                   | %     |
| rprm.sitelink.bandwidth.total.bytespersecond | Total bandwidth allocated to the SiteLink           | %     |
| rprm.sitelink.callbitrate.average.ratio      | Average Call Bit Rate of calls made on the SiteLink |       |
| rprm.sitelink.packetloss.average.percentage  | Average packet-loss percentage rate on the SiteLink | %     |
| rprm.sitelink.jitter.average.milliseconds    | Average jitter time on the SiteLink                 | ms    |
| rprm.sitelink.delay.average.milliseconds     | Average delay time on the SiteLink                  | ms    |

<!--Sites-->

* Global

| Metric name            | Description                               | Unit  |
|:-----------------------|:------------------------------------------|-------|
| rprm.sites.total.count | Total number of Sites managed by the RPRM | Count |

* Par *Site*

| Metric name                              | Description                                     | Unit  |
|:-----------------------------------------|:------------------------------------------------|-------|
| rprm.site.calls.active.count             | Number of active calls on the Site              | Count |
| rprm.site.bandwidth.used.percentage      | Percentage rate of used bandwidth               | %     |
| rprm.site.bandwidth.total.bytespersecond | Total bandwidth allocated to the Site           | %     |
| rprm.site.callbitrate.average.ratio      | Average Call Bit Rate of calls made on the Site |       |
| rprm.site.packetloss.average.percentage  | Average packet-loss percentage rate on the Site | %     |
| rprm.site.jitter.average.milliseconds    | Average jitter time on the Site                 | ms    |
| rprm.site.delay.average.milliseconds     | Average delay time on the Site                  | ms    |

<!--Updates-->

| Metric name                | Description                      | Unit  |
|:---------------------------|:---------------------------------|:------|
| updates-status             | Current updates jobs status      |       |
| rprm.updates.failed.count  | Number of failed updates jobs    | Count |
| rprm.updates.success.count | Number of successed updates jobs | Count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration SNMP de l'équipement

La documentation officielle Polycom (en anglais, lien ci-dessous) détaille les étapes pour activer et configurer le service SNMP:
https://documents.polycom.com/bundle/rprm-ops-10-5/page/rprm_ops/SNMP_Operations/SNMP_Operations.htm

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser des équipements Polycom RPRM:

```bash
yum install centreon-plugin-Hardware-Devices-Polycom-Rprm-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Polycom RPRM SNMP* 
depuis la page "Configuration > Plugin Packs > Gestionnaire" 

<!--Offline IMP License-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser des équipements Polycom RPRM:

```bash
yum install centreon-plugin-Hardware-Devices-Polycom-Rprm-Snmp
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-hardware-devices-polycom-rprm-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Polycom RPRM SNMP* 
depuis la page "Configuration > Plugin Packs > Gestionnaire"

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *HW-Device-Polycom-Rprm-SNMP-Custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_polycom_rprm_snmp.pl \
    --plugin=hardware::devices::polycom::rprm::snmp::plugin \
    --mode=sites \
    --hostname=10.0.0.1 \
    --snmp-version='2c'
    --snmp-community='mysnmpcommunity' \
    --warning-site-bandwidth-used-prct='80' \
    --critical-site-bandwidth-used-prct='90' \
    --warning-site-packetloss-prct='5' \
    --critical-site-packetloss-prct='10' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Total sites : 1 - Site 'My_Poly_Site_1' current active calls : 27, current bandwidth usage : 12.50 %, Total allowed bandwidth: 25.00 Mb/s, 
Average call bit rate : 1.11, Average packetloss : 1.03 %, Average jitter time : 0.77 ms, Average delay time : 1.10 ms | 
'rprm.sites.total.count'=3;;;0; 'My_Poly_Site_1#rprm.site.calls.active.count'=27;;;0; 'My_Poly_Site_1#rprm.site.bandwidth.used.percentage'=12.50%;80;90;0;100 
'My_Poly_Site_1#rprm.site.bandwidth.total.bytespersecond'=25000000.00B/s;;;0; 'My_Poly_Site_1#rprm.site.callbitrate.average.ratio'=1.11;;;0; 
'My_Poly_Site_1#rprm.site.packetloss.average.percentage'=1.03%;5;10;0;100 'My_Poly_Site_1#rprm.site.jitter.average.milliseconds'=0.77ms;;;0; 'My_Poly_Site_1#rprm.site.delay.average.milliseconds'=1.10ms;;;0;
Site 'My_Poly_Site_1' current active calls : 27, current bandwidth usage : 12.50 %, Total allowed bandwidth: 25.00 Mb/s, 
Average call bit rate : 1.11, Average packetloss : 1.03 %, Average jitter time : 0.77 ms, Average delay time : 1.10 ms
```

Dans cet exemple, le Plugin récupère les informations concernant les *Sites* d'un équipement Polycom RPRM (```--plugin=hardware::devices::polycom::rprm::snmp::plugin --mode=sites```)
identifé par l'adresse IP *10.0.0.1* (```--hostname=10.0.0.1```). Les paramètres de communauté et de version SNMP (```--snmp-version='2c' --snmp-community='mysnmpcommunity'```) 
correspondants sont renseignés afin de pouvoir joindre l'équipement.

Une alarme WARNING sera ainsi déclenchée si l'utilisation de la bande passante du *site* est supérieure à 80% (```--warning-site-bandwidth-used-prct='80'```);
l'alarme sera de type CRITICAL au delà de 90% d'utilisation (```--critical-site-bandwidth-used-prct='90'```).
De la même manière, des alarmes seront déclenchés lors du dépassement des seuils fixés pour le taux de *packetloss* observé
(```--warning-site-packetloss-prct='5' --critical-site-packetloss-prct='10'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée 
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_polycom_rprm_snmp.pl --plugin=hardware::devices::polycom::rprm::snmp::plugin --mode=sites --help
```

### Comment puis-je superviser les resources système tels que CPU, disques...?

Les équipements Polycom RPRM sont basés sur des systèmes Linux. Il est ainsi possible de superviser les resources de la couche OS
en appliquant le Modèle d'Hôte *OS-Linux-Snmp-Custom* en complément du Modèle *HW-Device-Polycom-Rprm-SNMP-Custom* décrit précédemment.

### J'obtiens le message d'erreur suivant:

#### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement Polycom RPRM sur le port UDP/161, 
ou que la communauté SNMP configurée n'est pas correcte. Il est également possible qu'un pare-feu bloque le flux.

#### UNKNOWN: SNMP GET Request : Cant get a single value.

Les causes de cette erreur peuvent être les suivantes: 
  * cet équipement ne supporte ou n'embarque pas la MIB utilisée par ce mode
  * les autorisations données à l'utilisateur en SNMP sont trop restreintes.
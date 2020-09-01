---
id: network-versa-snmp
title: Versa SNMP
---

## Vue d'ensemble

Versa Networks est un fournisseur d'architectures Cloud sécurisées.
Versa Networks propose notamment des solutions SD-WAN (Software-Defined Wide Area Network).

Le Plugin-Pack Centreon utilise le protocole SNMP pour se connecter, récupérer des informations
et des métriques relatives aux équipements Versa Networks

## Contenu du Plugin-Pack

### Objets supervisés

* CPE
* Branch
* Gateway

### Règles de découverte

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Nom de la règle                   | Description                                                                                  |
|:--------------------------------- |:-------------------------------------------------------------------------------------------- |
| Net-Versa-SNMP-Ipsec-Name         | Découvre les tunnels IPsec et supervise le trafic et les paquets                             |
| Net-Versa-SNMP-Sdwan-Name         | Découvre les règles SD-WAN et supervise le trafic                                            |
| Net-Versa-SNMP-Traffic-Name       | Découvre les interfaces réseaux et supervise le statut et l'utilisation de la bande passante |
| Net-Versa-SNMP-Packet-Errors-Name | Découvre les interfaces réseaux et supervise les paquets en erreurs                          |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Bgp-Peers-->

| Metric name              | Description         | Unit |
|:------------------------ |:------------------- |:---- |
| status                   | Status of the peers |      |
| peer.update.last.seconds | Last update by peer | s    |

<!--Devices-->

| Metric name                       | Description                                 | Unit  |
|:--------------------------------- | :------------------------------------------ |:----- |
| device.cpu.utilization.percentage | Device CPU utilization                      | %     |
| device.memory.usage.percentage    | Device Memory usage                         | %     |
| device.sessions.active.count      | Number of actives sessions on the device    | Count |
| device.sessions.active.percentage | Percentage of active sessions on the device | %     |
| device.sessions.failed.count      | Number of failed sessions on the device     | Count |
| device.sessions.failed.percentage | Percentage of failed sessions on the device | %     |

<!--Interfaces-->

| Metric name                               | Description                                            | Unit |
|:----------------------------------------- |:------------------------------------------------------ |:---- |
| status                                    | Status of the interface                                |      |
| interface.traffic.in.bitspersecond        | Incoming traffic going through the interface           | b/s  |
| interface.traffic.out.bitspersecond       | Outgoing traffic going through the interface           | b/s  |
| interface.packets.in.errors.percentage    | Incoming errored packets going through the interface   | %    |
| interface.packets.out.errors.percentage   | Outgoing errored packets going through the interface   | %    |
| interface.packets.in.discards.percentage  | Incoming discarded packets going through the interface | %    |
| interface.packets.out.discards.percentage | Outgoing discarded packets going through the interface | %    |

<!--Ipsec-->

| Metric name                      | Description                                        | Unit  |
|:-------------------------------- |:-------------------------------------------------- |:----- |
| ipsec.packets.in.count           | Number of incoming packets trough the IPsec tunnel | Count |
| ipsec.traffic.in.bytespersecond  | Incoming traffic going through the IPsec tunnel    | B/s   |
| ipsec.packets.out.count          | Number of outgoing packets trough the IPsec tunnel | Count |
| ipsec.packets.out.count          | Number of outgoing packets trough the IPsec tunnel | Count |
| ipsec.traffic.out.bytespersecond | Outcoming taffic going through the IPsec tunnel    | B/s   |
| ipsec.packets.invalid.count      | Number of invalid packets through the IPsec tunnel | Count |
| ipsec.ike.disconnected.count     | number of IKE disconnect by IPsec tunnel           | Count |

<!--Qos-Policy-->

* Par QoS policy

| Metric name                                 | Description                               | Unit  |
|:------------------------------------------- |:----------------------------------------- |:----  |
| qos.policy.hit.count                        | Number of hits by QoS policy              | Count |
| qos.policy.sessions.deny.count              | Number of sessions denied by QoS Policy   | Count |
| qos.policy.packets.dropped.count            | Number of packets dropped by Qos Policy   | Count |
| qos.policy.traffic.dropped.bytespersecond   | Traffic dropped by Qos Policy             | B/s   |
| qos.policy.packets.forwarded.count          | Number of packets forwarded by Qos Policy | Count |
| qos.policy.traffic.forwarded.bytespersecond | Traffic forwarded by QoS Policy           | B/s   |

* Par application Qos Policy

| Metric name                                    | Description                                           | Unit  |
|:---------------------------------------------- |:----------------------------------------------------- |:----- |
| appqos.policy.hit.count                        | Number of hits by Application Qos Policy              | Count |
| appqos.policy.packets.dropped.count            | Number of packets dropped by Application Qos Policy   | Count |
| appqos.policy.traffic.dropped.bytespersecond   | Traffic dropped by Application Qos Policy             | B/s   |
| appqos.policy.packets.forwarded.count          | Number of packets forwarded by Application Qos Policy | Count |
| appqos.policy.traffic.forwarded.bytespersecond | Traffic forwarded by QoS Policy                       | B/s   |

<!--Sdwan-->

| Metric name                             | Description                                     | Unit  |
|:--------------------------------------- |:----------------------------------------------- |:----- |
| sdwan.policy.hit.count                  | Number of hists by SDWAN policy                 | Count |
| sdwan.policy.packets.in.count           | Number of incoming packets by SDWAN policy      | Count |
| sdwan.policy.traffic.in.bytespersecond  | Incoming traffic going through by SDWAN policy  | B/s   |
| sdwan.policy.packets.out.count          | Number of outgoing packets by SDWAN policy      | Count |
| sdwan.policy.traffic.out.bytespersecond | Outcoming traffic going through by SDWAN Policy | B/s   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration SNMP de l'équipement

La documentation officielle Versa Networks détaille les étapes pour activer et configurer le service SNMP.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur Centreon vers l'équipement Versa Networks supervisé.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser des équipements
Versa Networks :

```bash
yum install centreon-plugin-Network-Versa-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Versa SNMP* 
depuis la page "Configuration > Plugin Packs > Gestionnaire" 

<!--Offline IMP License-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser des équipements
Versa Networks :

```bash
yum install centreon-plugin-Network-Versa-Snmp
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-network-versa-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Versa SNMP*
depuis la page "Configuration > Plugin Packs > Gestionnaire" 

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *Net-Versa-SNMP-Custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_versa_snmp.pl \
  --plugin=network::versa::snmp::plugin \
  --mode=devices \
  --hostname=10.0.0.1 \
  --snmp-version='2c' \
  --snmp-community='mysnmpcommunity' \
  --warning-sessions-active-prct='80' \
  --critical-sessions-active-prct='90' \
  --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Device '0' cpu load: 8.00 %, memory used: 10.00%, sessions active: 0 (1000000), sessions failed: 0 (1000000) |
'0#device.cpu.utilization.percentage'=8.00%;;;0;100 '0#device.memory.usage.percentage'=10.00%;;;0;100 
'0#device.sessions.active.count'=0;;;0;1000000 '0#device.sessions.active.percentage'=0.00%;0:80;0:90;0;100
'0#device.sessions.failed.count'=0;;;0;1000000 '0#device.sessions.active.percentage'=0.00%;;;0;100
Device '0' cpu load: 8.00 %, memory used: 10.00%, sessions active: 0 (1000000), sessions failed: 0 (1000000)
```

Dans cet exemple, le Plugin récupère l'utilisation d'un équipement Versa Networks (```--plugin=network::versa::snmp::plugin --mode=devices```)

identifié par l'adresse IP *10.0.0.1* (```--hostname=10.0.0.1```). Les paramètres de communauté et de version SNMP (```--snmp-version='2c' --snmp-community='mysnmpcommunity'```) 
correspondants sont renseignés afin de pouvoir joindre l'équipement.

Une alarme WARNING sera ainsi déclenchée si le pourcentage d'utilisation des sessions actives est supérieur à 80% (```--warning-sessions-active-prct='80'```);
l'alarme sera de type CRITICAL au delà de 90% de cette même utilisation (```--critical-sessions-active-prct='90'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée 
en ajoutant le paramètre ```--help``` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_versa_snmp.pl --plugin=network::versa::snmp::plugin --mode=devices --help
```

### J'obtiens le message d'erreur suivant:

#### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement Versa Networks sur le port UDP/161, 
ou que la communauté SNMP configurée n'est pas correcte. Il est également possible qu'un pare-feu bloque le flux.

#### UNKNOWN: SNMP GET Request : Cant get a single value.

Les causes de cette erreur peuvent être les suivantes: 
  * cet équipement ne supporte ou n'embarque pas la MIB utilisée par ce mode
  * les autorisations données à l'utilisateur en SNMP sont trop restreintes.

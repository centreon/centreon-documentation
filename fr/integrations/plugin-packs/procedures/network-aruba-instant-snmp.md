---
id: network-aruba-instant-snmp
title: Aruba Instant SNMP
---

## Vue d'ensemble

Aruba Networks est un fournisseur de solutions d'accès réseau.

Le Plugin Pack *Aruba Instant SNMP* utilise le protocole SNMP pour se connecter, récupérer des informations et les métriques relatives aux bornes d'accès sans fil de marque Aruba.

## Contenu du Plugin Pack

### Objets supervisés

* Equipements : Point d'accès, etc.

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Session-Usage-->

| Metric name                         | Description                                      | Unit   |
| :---------------------------------- | :----------------------------------------------- | :----- |
| accesspoints.total.count            | Number of access points on the Aruba device      | Count  |
| ap_name#clients.current.count       | Number of clients connected to the access point  | Count  |
| ap_name#cpu.utilization.percentage  | Percentage of used CPU on the access point       |   %    |
| ap_name#memory.usage.bytes          | Memory usage of the access point                 |   B    |
| ap_name#memory.usage.percentage     | Percentage of memory usage of the access point   |   %    |
| ap_name#memory.free.bytes           | Free memory on the access point                  |   B    |
| ap_name#memory.free.percentage      | Percentage of free memory on the access point    |   %    |
| ap_name#memory.usage.bytes          | Memory usage on the access point                 |   B    |
| ap_name#memory.usage.percentage     | Percentage of memory usage on the access point   |   %    |

<!--SSID-Status-->

| Metric name | Description                                | Unit |
| :---------- | :----------------------------------------- | :--- |
| status      | Check SSID status                          |      |

<!--END_DOCUSAURUS_CODE_TABS-->


## Prérequis

La communauté SNMP doit être activée sur l'équipement en mode Read-only.

La communication doit être possible sur le port UDP 161 depuis le collecteur Centreon vers la borne d'accès sans fil Aruba.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des équipements Aruba:

```bash
yum install centreon-plugin-Network-Aruba-Instant-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *Aruba Instant SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des équipements Aruba :

```bash
yum install centreon-plugin-Network-Aruba-Instant-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Plugin Pack *Aruba Instant SNMP* :

 ```bash
yum install centreon-pack-network-aruba-instant-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack *Aruba Instant SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"".
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre équipement Aruba
* Appliquez le Modèle d'Hôte *Net-Aruba-Instant-SNMP-custom*

## Comment tester mes configurations et le Plugin en ligne de commande ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis un collecteur Centreon en vous connectant avec l'utilisateur
*centreon-engine* :

```bash
/usr/lib/centreon/plugins//centreon_aruba_instant_snmp.pl --plugin=network::aruba::instant::snmp::plugin \
	--mode=ap-usage \
	--hostname=10.30.2.11 \
	--snmp-version='2c' \
	--snmp-community='test/aruba' \
	--filter-name='' \
	--warning-status='' \
	--critical-status='%{status} !~ /up/i' \
	--warning-cpu='' \
	--critical-cpu='' \
	--warning-clients='20' \
	--critical-clients='50' \
	--warning-mem-usage='' \
	--critical-mem-usage='' \
	--warning-mem-usage-free='' \
	--critical-mem-usage-free='' \
	--warning-mem-usage-prct='' \
	--critical-mem-usage-prct='' \
	--verbose

```

La commande ci-dessus collecte les données d'utilisation d'un point d'accès Aruba (``` --mode=ap-usage ```). Les informations importantes sont l'adresse IP/FQDN 

(``` --hostname=10.30.2.11 ```) et la communauté SNMP configurée sur l'équipement (``` --snmp-community='test/aruba' ```).

Une alarme de type WARNING est déclenchée si le nombre de clients connectés est supérieur à 20 (``` --warning-clients='20' ```).

Une alarme CRITICAL est quant à elle déclenchée si le nombre de clients connectés est supérieur à 50 (``` --critical-clients='50' ```).

La liste de toutes les options complémentaires et leur signification peut être affichée en ajoutant le paramètre ``` --help ``` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_aruba_instant_snmp.pl \
	--plugin=network::aruba::instant::snmp::plugin \
	--mode=ap-usage \
	--help
```

Tous les modes disponibles peuvent être affichés via l'option ``` --list-mode ``` :

```bash
/usr/lib/centreon/plugins//centreon_aruba_instant_snmp.pl \
	--plugin=network::aruba::instant::snmp::plugin \
	--list-mode
```

## J'obtiens le message d'erreur suivant:

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que le collecteur Centreon ne parvient pas à contacter votre borne d'accès sans fil Aruba sur le port UDP 161, ou alors que la communauté SNMP configurée n'est pas correcte.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. Ce dernier doit avoir accès à la branche entreprise Aruba: .1.3.6.1.4.1.14823

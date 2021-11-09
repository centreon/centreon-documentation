---
id: hardware-ups-socomec-netvision-snmp
title: UPS Socomec Net Vision SNMP
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack Socomec Net Vision SNMP inclut Alarms, Battery, Input-lines et Output-lines.

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Alarms-->

| Metric name                 | Description                  | Unit  |
| :-------------------------- | :--------------------------- | :---- |
| alarms.current.count        | Number of alarms             |       |

<!--Battery-->

| Metric name                                    | Description                     | Unit |
| :--------------------------------------------- | :------------------------------ | :--- |
| status                                         | Battery status                  |      |
| battery.charge.remaining.percent               | Battery load                    | %    |
| battery.charge.remaining.minutes               | Battery charge remaining        |      |
| battery.current.ampere                         | Battery current                 | A    |
| battery.voltage.volt                           | Battery voltage                 | V    |
| battery.temperature.celsius                    | Battery temperature             | C    |

<!--Input-lines-->

| Metric name                            | Description                               | Unit  |
| :------------------------------------- | :---------------------------------------- | :---- |
| lines.input.frequence.hertz            | Lines frequency                           | Hz    |
| *linenumber*#line.input.current.ampere | Line current                              | A     |
| *linenumber*#line.input.voltage.volt   | Line voltage                              | V     |

<!--Output-lines-->

| Metric name                              | Description                               | Unit  |
| :--------------------------------------- | :---------------------------------------- | :---- |
| source status                            | Input source status                       |       |
| *linenumber*#line.output.load.percentage | Line load                                 | %     |
| *linenumber*#line.output.current.ampere  | Line current                              | A     |
| *linenumber*#line.output.voltage.volt    | Line voltage                              | V     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre équipement Socomec, le SNMP doit être configuré. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Ups-Socomec-Netvision-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Socomec Net Vision UPS SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Ups-Socomec-Netvision-Snmp
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-hardware-ups-socomec-netvision-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Socomec Net Vision UPS SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *HW-UPS-Socomec-Netvision-SNMP-Custom*

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
/usr/lib/centreon/plugins/centreon_ups_socomec_netvision_snmp.pl \
    --plugin=hardware::ups::socomec::netvision::snmp::plugin \
    --mode=output-lines \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='socomec_ro' \
    --warning-voltage='235' \
    --critical-voltage='240' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Output source status is 'onInverter' - All output lines are ok | '1#line.output.load.percentage'=33.00%;;;0;100 '1#line.output.current.ampere'=5.70A;;;0; '1#line.output.voltage.volt'=230.00V;235;240;; '2#line.output.load.percentage'=20.00%;;;0;100 '2#line.output.current.ampere'=1.80A;;;0; '2#line.output.voltage.volt'=229.00V;235;240;; '3#line.output.load.percentage'=29.00%;;;0;100 '3#line.output.current.ampere'=5.20A;;;0; '3#line.output.voltage.volt'=230.00V;235;240;;
Output line '1' load: 33.00 %, current: 5.70 A, voltage: 230.00 V
Output line '2' load: 20.00 %, current: 1.80 A, voltage: 229.00 V
Output line '3' load: 29.00 %, current: 5.20 A, voltage: 230.00 V
```

Cette commande contrôle la sortie (```--mode=output-lines```) d'un équipement UPS Socomec ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *socomec_ro* (```--snmp-community='socomec_ro'```).

Cette commande déclenchera une alarme WARNING si le voltage est supérieur à 235V (```--warning-voltage='235'```)
et une alarme CRITICAL si supérieur à 240V (```--critical-voltage='240'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_ups_socomec_netvision_snmp.pl \
    --plugin=hardware::ups::socomec::netvision::snmp::plugin \
    --mode=output-lines \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement ne prend pas en charge la MIB utilisée par le Plugin (branche: .1.3.6.1.4.1.4555).
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.

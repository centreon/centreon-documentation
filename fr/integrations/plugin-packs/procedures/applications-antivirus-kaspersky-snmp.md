---
id: applications-antivirus-kaspersky-snmp
title: Kaspersky
---

## Vue d'ensemble

Kaspersky est une société privée qui fournit des solutions de cybersécurité et 
antivirus. Elle a été fondée en 1997 par Eugene Kaspersky, Natalya Kaspersky et
Alexey De-Monderik.

Le Plugin-Pack Centreon Kaspersky permet de récupérer, par l'intermédiaire du
protocole SNMP, le statut du Serveur d'Administration et des applications 
administrées.

## Contenu du Plugin-Pack 

### Elément supervisés

* Kaspersky Security Center

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Deployment-->

| Metric name                          | Description                               |
|:-------------------------------------|:------------------------------------------|
| hosts.antivirus.installed.count      | Number of successful remote installations |
| hosts.antivirus.install.failed.count | Number of failed remote installations     |
| hosts.expiring.licence.count         | Number of hosts with expiring licence     |
| hosts.expired.licence.count          | Number of hosts with expired licence      |

<!--Events-->

| Metric name           | Description               |
|:---------------------|:---------------------------| 
| events.critical.count | Number of critical events |     

<!--Logical-Network-->

| Metric name              | Description                                             |
| :------------------------| :-------------------------------------------------------|
| hosts.new.count          | Number of new hosts                                     |
| groups.total.count       | Number of groups on the server                          |
| hosts.notconnected.count | Number of hosts that have not connected for a long time |
| hosts.uncontrolled.count | Number of uncontrolled hosts                            |

<!--Protection-->

| Metric name                                        | Description                                            |
|:---------------------------------------------------|:-------------------------------------------------------|
| protection.hosts.antivirus.notrunning.count        | Number of hosts without a running antivirus            |
| protection.hosts.realtime.notrunning.count         | Number of hosts without a running real time protection |
| protection.hosts.realtime.unacceptable.level.count | Number of hosts with unacceptable protection level     |
| protection.hosts.uncured.objects.count             | Number of hosts with uncured objects                   |
| protection.hosts.2manythreats.count                | Number of hosts with too many threats                  |

<!--Updates-->

| Metric name                     | Description                    | Unit   |
|:--------------------------------|:-------------------------------|:------ |
| update.server.freshness.seconds | Date of the last server update | s      |
| update.hosts.outdated.count     | Number of outdated hosts       |        |

<!--Full-Scan-->

| Metric name           | Description                          |
|:----------------------|:-------------------------------------|
| hosts.unscanned.count | Number of hosts not recently scanned |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration de l'équipement

Afin de superviser le serveur Kaspersky Security Center, le SNMP v2 ou v3 doit
être configuré comme indiqué sur la documentation officielle : 
https://support.kaspersky.com/fr/12603#block3

### Flux réseaux

La communication doit être possible depuis le collecteur Centreon vers le port
SNMP (UDP/161) du Kaspersky Security Center.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin Centreon Kaspersky sur l'ensemble des collecteurs Centreon supervisant des ressources Kaspersky Security Center :

```bash
yum install centreon-plugin-Applications-Antivirus-Kaspersky-Snmp
```

2. Installer le Plugin-Pack 'Kaspersky' depuis la page "Configuration > Plugin packs > Manager" de l'interface Web Centreon

<!--Offline IMP License-->

1. Installer le Plugin Centreon Kaspersky sur l'ensemble des collecteurs Centreon supervisant des ressources Kaspersky Security Center :

```bash
yum install centreon-plugin-Applications-Antivirus-Kaspersky-Snmp
```

2. Installer le RPM du Plugin-Pack contenant les Modèles de supervision sur le serveur Central Centreon :

```bash
yum install centreon-pack-applications-antivirus-kaspersky-snmp
```

3. Installer le Plugin-Pack 'Kaspersky' depuis la page "Configuration > Plugin packs > Manager" de l'interface Web Centreon

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration de l'Hôte

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre serveur Kaspersky Security Center
* Appliquez le Modèle d'Hôte *App-Antivirus-Kaspersky-SNMP-custom*

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres 
spécifiques associés via la macro SNMPEXTRAOPTIONS

| Obligatoire | Nom              | Description                                 |
|:----------- |:---------------- |:------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## FAQ

### Comment tester mes configurations et le Plugin en ligne de commande ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis un collecteur Centreon en vous connectant avec l'utilisateur 
*centreon-engine* :
 
```bash
/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \
  --plugin=apps::antivirus::kaspersky::snmp::plugin --mode=protection 
  --hostname=10.0.0.1 --snmp-version='2c' --snmp-community='kaseprsky_ro' \
  --warning-status='%{status} =~ /Warning/i' --critical-status='%{status} =~ /Critical/i'
  --warning-no-antivirus='0' --critical-no-antivirus='' --warning-no-real-time='0' --critical-no-real-time='' \
  --warning-not-acceptable-level='0' --critical-not-acceptable-level='' \
  --warning-not-cured-objects='0' --critical-not-cured-objects='' \
  --warning-too-many-threats='0' --critical-too-many-threats='' \
  --warning-too-many-threats='0' --critical-too-many-threats='' \
  --use-new-perfdata
```

La commande devrait retourner un message de sortie de la forme ci-dessous :

```bash
WARNING: 2 host(s) without running antivirus - 1 hosts(s) without running real time protection - 8 host(s) with not cured objects - 5 host(s) with too many threats | 'protection.hosts.antivirus.notrunning.count'=2;0:0;;0; 'protection.hosts.realtime.notrunning.count'=1;0:0;;0; 'protection.hosts.realtime.unacceptable.level.count'=0;0:0;;0; 'protection.hosts.uncured.objects.count'=8;0:0;;0; 'protection.hosts.toomanythreats.count'=5;0:0;;0;
```

Dans cet exemple, le Plugin contrôle le statut de la protection des éléments du parc
(```--plugin=apps::antivirus::kaspersky::snmp::plugin--mode=protection```) indiqué par 
le Kasperky Security Center à l'adresse 10.0.0.1 par l'intermédiaire du 
protocole SNMP 
(```--hostname='10.0.0.1'  --snmp-version='2c' --snmp-community='kaseprsky_ro'```).

Dans cet exemple, une alarme est déclenchée si le statut global de la protection est différent de 'OK' 
(```--warning-status='%{status} =~ /Warning/i'``` et ```--critical-status='%{status} =~ /Critical/i'```) 
ou alors que le nombre de PC sans protection ou avec une protection insuffisante est supérieur à 0 (```--warning-no-antivirus='0'```).

La liste de toutes les options complémentaires et leur signification
peut être affichée en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \
  --plugin=apps::antivirus::kaspersky::snmp::plugin \
  --mode=deployment \
  --help
```

Tous les modes disponibles peuvent être affichés via l'option 
```--list-mode``` :

```bash
/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \
  --plugin=apps::antivirus::kaspersky::snmp::plugin \
  --list-mode
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie le collecteur Centreon ne parvient
pas à contacter le serveur Kaspersky Security Center sur le port 161 (firewall
ou autre équipement en coupure) ou que la communauté SNMP configurée n'est pas 
correcte.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Les autorisations données à l'utilisateur en SNMP sont trop restreintes pour
faire fonctionner le mode/plugin.

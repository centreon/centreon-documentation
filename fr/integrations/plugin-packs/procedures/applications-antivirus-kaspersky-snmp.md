---
id: applications-antivirus-kaspersky-snmp
title: Kaspersky
---

## Vue d'ensemble

Kaspersky est une société privée qui fournit des solutions de cybersécurité et 
antivirus. Elle a été fondée en 1997 par Eugene Kaspersky, Natalya Kaspersky et
Alexey De-Monderik.

Le Plugin-Pack Centreon Kaspersky permet de récupérer le statut du Serveur 
d'administration et des applications administrées par l'intermédiaire 
du protocole SNMP.

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
| events.critical.count | Number of critacal events |     

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
| protection.hosts.uncured.objects.count             | Number of hosts with uncurred objects                  |
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
SNMP (UDP/161) du serveur Kaspersky Security Center.

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

2. Installer le RPM du Plugin-Pack contenant les Modèles de supervision sur le serveur Centreon **Central** :

```bash
yum install centreon-pack-applications-antivirus-kaspersky-snmp
```

3. Installer le Plugin-Pack 'Kaspersky' depuis la page "Configuration > Plugin packs > Manager" de l'interface Web Centreon

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre serveur Kaspersky Security Center
* Appliquez le Modèle d'Hôte App-Monitoring-Alyvix-Restapi-custom


Lorsque vous ajoutez un Hôte, complétez les champs 'Communauté Snmp' et 
'Version Snmp' pour refléter la configuration de l'équipement cible.

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
  --plugin=apps::antivirus::kaspersky::snmp::plugin \
  --mode=deployment --hostname=10.0.0.1 \
  --snmp-version='2c' \
  --snmp-community='mysnmpcommunity' \
  --warning-status='%{status} =~ /Warning/i' \
  --critical-status='%{status} =~ /Critical/i' \
  --warning-progress='100:' \
  --critical-progress='95:' \
  --warning-failed='0' \
  --critical-failed='' \
  --warning-expiring='0' \
  --critical-expiring='' \
  --warning-expired='0' \
  --critical-expired=''
```

La commande devrait retourner un message de sortie de la forme ci-dessous :

```bash
OK: status : skipped (no value(s)) - Deployment progress: 4743/4844 (97.91%) - 0 failed remote installation(s) - 0 host(s) with expiring licence - 0 host(s) with expired licence | 'progress'=4743;;;0;4844 'failed'=0;0:0;;0; 'expiring'=0;0:0;;0; 'expired'=0;0:0;;0;
```

Dans cet exemple, le Plugin récupère le status du déploiement de l'antivirus 
(--plugin=apps::antivirus::kaspersky::snmp::plugin--mode=deployment) indiqué par 
le Kasperky Security Center à l'adresse 10.0.0.1 par l'intermédiaire du 
protocole SNMP 
(--hostname='10.0.0.1'  --snmp-version='2c' --snmp-community='mysnmpcommunity').

Dans cet exemple, une alarme de type WARNING est déclenchée si :
* Le nombre d'installations à distance réussies est inférieur à 100 (--warning-progress='100:')
* Le nombre d'installations à distance échouées est supérieur à 0 (--warning-failed='0')
* Le nombre d'hôtes ayant une licence qui va expirer est supérieur à 0 (--warning-expiring='0')
* Le nombre d'hôtes ayant une licence expirée est supérieur à 0 (--warning-expired='0')

Une alarme CRITICAL est quant à elle déclenchée si le nombre d'installations 
à distance réussies est inférieur à 95 (--critical-progress='95:').

La liste de toutes les options complémentaires et leur signification
peut être affichée en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \
  --plugin=apps::antivirus::kaspersky::snmp::plugin \
  --mode=deployment \
  --help
```

Tous les modes disponibles peuvent être affichés via l'option ```--list-mode``` :

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

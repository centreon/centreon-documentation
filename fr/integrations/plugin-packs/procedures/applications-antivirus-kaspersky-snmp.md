---
id: applications-antivirus-kaspersky-snmp
title: Kaspersky
---

## Vue d'ensemble

Kaspersky est une société privée qui fournit des solutions de cybersécurité et 
antivirus. Elle a été fondée en 1997 par Eugene Kaspersky, Natalya Kaspersky et
Alexey De-Monderik.

## Contenu du Plugin-Pack 

### Elément supervisés

* Kaspersky Security Center

### Métriques collectées

Les métriques suivantes sont collectées par le plugin Centreon Kaspersky Plugin :

<!--DOCUSAURUS_CODE_TABS-->

<!--Deployment-->

| Metric name            | Description                                 |
| :----------------------| :-------------------------------------------| 
| progress               | Number of remote installations in progress  |     
| failed                 | Number of failed remote installations       |          
| expiring               | Number of hosts with expiring licence       |        
| expired                | Number of hosts with expired licence        |

<!--Events-->

| Metric name            | Description             |
| :----------------------| :-----------------------| 
| events                 | Number of events        |     

<!--Logical-Network-->

| Metric name               | Description                                            |
| :-------------------------| :------------------------------------------------------| 
| new_hosts                 | Number of new hosts                                    |     
| groups                    | Number of groups on the server                         |          
| not_connected_long_time   | Number of hosts that have not connected in a long time |        
| not_controlled            | Number of uncontrolled hosts                           |

<!--Protection-->

| Metric name            | Description                                           |
| :----------------------| :-----------------------------------------------------| 
| no_antivirus           | Number of hosts without running antivirus             |     
| no_real_time           | Number of hosts without running real time protection  |          
| not_acceptable_level   | Number of hosts with unacceptable protection level    |
| not_curred_objects     | Number of hosts with not curred objects               |
| too_many_threat        | Number of hosts with too many threats                 |

<!--Updates-->

| Metric name            | Description                             | Unit   |
| :----------------------| :---------------------------------------|:------ | 
| last_server_update     | Date of the last server update          | s      |    
| not_updated            | Number of failed remote installation    | string |        

<!--Full-Scan-->

| Metric name            | Description                                |
| :----------------------| :------------------------------------------| 
| not_scanned            | Number of hosts not recently scanned       |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration de l'équipement

Afin de superviser le serveur Kaspersky Security Center, le SNMP v2 ou v3 doit
être configuré comme indiqué sur la documentation officielle : 
https://support.kaspersky.com/12603#block3

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

Lorsque vous ajoutez un Hôte, complétez les champs 'Communauté Snmp' et 
'Version Snmp' pour refléter la configuration de l'équipement cible.

:warning: Si vous utilisez SNMP en version 3, vous devez configurer les
paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS

| Obligatoire | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### Comment tester mes configurations et le Plugin en ligne de commande ?

Une fois le Plugin installé, vous pouvez le tester en ligne de commande avec l'utilisateur *centreon-engine* :
 
```bash
/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \
  --plugin=apps::antivirus::kaspersky::snmp::plugin \
  --mode=deployment --hostname=10.30.2.15 \
  --snmp-version='2c' \
  --snmp-community='netsec/hqavscckaspersky'
```

Output :

```
OK: status : skipped (no value(s)) - Deployment progress: 4743/4844 (97.91%) - 4 failed remote installation(s) - 137 host(s) with expiring licence - 4 host(s) with expired licence | 'progress'=4743;;;0;4844 'failed'=4;;;0; 'expiring'=137;;;0; 'expired'=4;;;0;
```

Tous les modes disponibles peuvent être affichés via l'option ```--list-mode``` :

```bash
/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \
  --plugin=apps::antivirus::kaspersky::snmp::plugin \
  --list-mode
```

Pour un mode en particulier, il est possible d'utiliser le paramètre ```--help``` pour lister toutes les options disponibles.

```bash
/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \
  --plugin=apps::antivirus::kaspersky::snmp::plugin \
  --mode=deployment \
  --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie le collecteur Centreon ne parvient
pas à contacter le serveur Kaspersky Security Center sur le port 161 (firewall
ou autre équipement en coupure) ou que la communauté SNMP configurée n'est pas 
correcte.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Les autorisations données à l'utilisateur en SNMP sont trop restreintes pour faire
fonctionner le mode/plugin.

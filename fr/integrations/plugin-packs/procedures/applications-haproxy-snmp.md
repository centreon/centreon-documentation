---
id: applications-haproxy-snmp
title: Haproxy SNMP
---

## Vue d'ensemble

HAProxy est un logiciel libre fournissant, avec une haute disponiblité,
un load balancer et un proxy pour des applications TCP et HTTP.

Le Plugin Pack Centreon *Haproxy SNMP* permet de récuperer le status du backend
et du frontend ainsi que des métriques sur le nombre de sessions et le trafic par
l'intermédiaire du protocole SNMP.

## Contenu du Pack

### Objets supervisés

* Utilisation du Frontend

* Utilisation du Backend

### Métriques & statuts collectés

<!--DOCUSAURUS_CODE_TABS-->

<!--Frontend-Usage-->

| Metric name                       | Description                | Unit  |
|:----------------------------------|:---------------------------|:------|
| status                            | Frontend status            |       |
| frontend.sessions.current.count   | Number of current sessions | count |
| frontend.sessions.total.count     | Number of total sessions   | count |
| frontend.traffic.in.bitpersecond  | Incomming frontend traffic | b/s   |
| frontend.traffic.out.bitpersecond | Outgoing frontend traffic  | b/s   |

<!--Backend-Usage-->

| Metric name                      | Description                        | Unit  |
|:---------------------------------|:-----------------------------------|:------|
| status                           | Backend status                     |       |
| backend.queue.current.count      | Number of current request in queue | count |
| backend.sessions.current.count   | Number of current sessions         | count |
| backend.sessions.total.count     | Number of total sessions           | count |
| backend.traffic.in.bitpersecond  | Incomming backend traffic          | b/s   |
| backend.traffic.out.bitpersecond | Outgoing backend traffic           | b/s   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de superviser le serveur HAProxy, le SNMP v2 ou v3 doit être 
configuré comme indiqué sur la documentation officielle :
https://www.haproxy.com/documentation/hapee/latest/observability/metrics/snmp/

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources HAProxy:

```bash
yum install centreon-plugin-Applications-Haproxy-Snmp
```

2. Sur l'interface Integration de Centreon, installer le Plugin Pack *Haproxy SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources HAProxy:

```bash
yum install centreon-plugin-Applications-Haproxy-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *Haproxy SNMP*:

 ```bash
yum install centreon-pack-applications-haproxy-snmp
```

3. Sur l'interface Integration de Centreon, installer le Plugin Pack *Haproxy SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page "Configuration > Hôtes".
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre serveur HAProxy
* Appliquez le Modèle d'Hôte *Applications-Haproxy-Snmp-custom* 

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres
spécifiques associés via la macro SNMPEXTRAOPTIONS.

| Mandatory | Name             | Description                                 |
|:----------|:-----------------|:--------------------------------------------|
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

 Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
 de commande depuis votre collecteur Centreon en vous connectant avec 
 l'utilisateur *centreon-engine*:

 ```bash
 /usr/lib/centreon/plugins//centreon_haproxy_snmp.pl  \
    --plugin=apps::haproxy::snmp::plugin   \
    --mode=frontend-usage  \
    --hostname='10.0.0.1'  \
    --snmp-version='2c'  \
    --snmp-community='my-snmp-community'   \
    --filter-name=''  \
    --warning-status=''  \
    --critical-status='%{status} !~ /OPEN/i'  \
    --warning-total-sessions=''  \
    --critical-total-sessions=''  \
    --warning-current-sessions=''  \
    --critical-current-sessions=''  \
    --warning-traffic-in=''  \
    --critical-traffic-in=''  \
    --warning-traffic-out=''  \
    --critical-traffic-out=''  \
    --verbose \
    --use-new-perfdata
 ```

 La commande devrait retourner un message de sortie similaire à :

 ```bash
OK : All frontends are ok | 'frontend.sessions.current.count'=9000;;;; 'frontend.sessions.total.count'=9000;;;; 'frontend.traffic.in.bitpersecond'=9000b/s;;;; 'frontend.traffic.out.bitpersecond'=9000b/s;;;;
 ```

Dans cet exemple, une alarme est déclenchée si le status du *frontend* est
différent de 'OPEN' (```--critical-status='%{status} !~ /OPEN/i'```).

 La liste de toutes les options complémentaires et leur signification peut être 
 affichée en ajoutant le paramètre ```--help``` à la commande:

 ```bash
 /usr/lib/centreon/plugins//centreon_haproxy_snmp.pl  \
    --plugin=apps::haproxy::snmp::plugin   \
    --mode=frontend-usage  \
    --help
 ```

 Tous les modes disponibles peuvent être affichés en ajoute le paramètre 
 ```--list-mode``` à la commande:

 ```bash
 /usr/lib/centreon/plugins//centreon_haproxy_snmp.pl  \
    --plugin=apps::haproxy::snmp::plugin   \
    --list-mode
 ```

### Diagnostic des erreurs communes
 
#### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie le collecteur Centreon ne parvient
pas à contacter le serveur HAProxy sur le port 161 (firewall ou autre équipement
en coupure) ou que la communauté SNMP configurée n'est pas correcte.

#### UNKNOWN: SNMP GET Request : Cant get a single value.

Les autorisations données à l'utilisateur en SNMP sont trop restreintes pour
faire fonctionner le mode/plugin.

---
id: applications-antivirus-mcafee-webgateway-snmp
title: McAfee Web Gateway
---

## Vue d'ensemble

McAfee Web Gateway est un proxy d'entreprise qui fournit une analyse proactive
du trafic Web et une protection contre les logiciels malveillants grâce à des 
techniques avancées d'inspection en temps réel.

Le Centreon Plugin-Pack Centreon *McAfee Web Gateway* permet de récupérer les 
versions de signature des bases de données et les statistiques Web et de 
détections des logiciels malveillants par l'intermédiaire du protocole SNMP.

## Contenu du Plugin-Pack

### Eléments supervisés

* McAfee Web Gateway proxy

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Clients-->

| Metric name             | Description                         |
|:------------------------|:------------------------------------|
| clients.connected.count | The number of connected client      |
| sockets.connected.count | The number of open network sockets  |

<!--Connections-->

| Metric name                               | Description                                                      | Unit          |
|:------------------------------------------|:-----------------------------------------------------------------|:--------------|
| connections.legitimate.persecond          | The number of legitimate connections per second                  | connections/s |
| connections.blocked.persecond             | The number of blocked connections per second                     | connections/s |
| connections.antimalware.blocked.persecond | The number of connections blocked by the Anti Malware per second | connections/s |
| connections.mediafilter.blocked.persecond | The number of connections blocked by the Media Filter per second | connections/s |
| connections.urlfilter.blocked.persecond   | The number of connections blocked by the URL Filter per second   | connections/s |

<!--Detections-->

* Global

| Metric name                 | Description                               | Unit         |
|:----------------------------|:------------------------------------- ----|:-------------|
| malwares.detected.persecond | The number of malware detected per second | detections/s |

* Per *categories*

| Metric name                                         | Description                               | Unit         |
|:----------------------------------------------------|:------------------------------------------|:-------------|
| *categoryname*#category.malwares.detected.persecond | The number of malware detected per second | detections/s |

<!--Ftpstatistics-->

| Metric name                            | Description                      | Unit    |
|:---------------------------------------|:---------------------------------|:------- |
| ftp.traffic.clienttoproxy.bitspersecond | FTP traffic from client to proxy | b/s     |
| ftp.traffic.servertoproxy.bitspersecond | FTP traffic from server to proxy | b/s     |
| ftp.traffic.proxytoclient.bitspersecond | FTP traffic from proxy to client | b/s     |
| ftp.traffic.proxytoserver.bitspersecond | FTP traffic from proxy to server | b/s     |

<!--Httpstatistics-->

| Metric name                             | Description                           | Unit    |
|:----------------------------------------|:--------------------------------------|:------- |
| http.requests.persecond                 | The number of HTTP request per second |         |
| http.traffic.clienttoproxy.bitspersecond | HTTP traffic from client to proxy     | b/s     |
| http.traffic.servertoproxy.bitspersecond | HTTP traffic from server to proxy     | b/s     |
| http.traffic.proxytoclient.bitspersecond | HTTP traffic from proxy to client     | b/s     |
| http.traffic.proxytoserver.bitspersecond | HTTP traffic from proxy to server     | b/s     |

<!--Httpsstatistics-->


| Metric name                              | Description                            | Unit    |
|:-----------------------------------------|:---------------------------------------|:--------|
| https.requests.persecond                 | The number of HTTPS request per second |         |
| https.traffic.clienttoproxy.bitspersecond | HTTPS traffic from client to proxy     | b/s     |
| https.traffic.servertoproxy.bitspersecond | HTTPS traffic from server to proxy     | b/s     |
| https.traffic.proxytoclient.bitspersecond | HTTPS traffic from proxy to client     | b/s     |
| https.traffic.proxytoserver.bitspersecond | HTTPS traffic from proxy to server     | b/s     |

<!--Versions-->

| Metric name       | Description                    |
|:------------------|:-------------------------------|
| dat-version       | DAT version                    |
| tsdb-version      | TrustedSource Database Version |
| proactive-version | ProActive Database Version     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration du proxy McAfee Web Gateway

Afin de superviser le proxy McAfee Web Gateway, le SNMP v2 ou v3 doit être 
configuré comme indiqué sur la documentation officielle :

* https://docs.mcafee.com/bundle/web-gateway-8.2.x-product-guide/page/GUID-7F25543B-2BE5-47A5-BC40-AEEF65F5D156.html

* https://docs.mcafee.com/bundle/web-gateway-8.2.x-interface-reference-guide/page/GUID-92B0527B-9709-43DD-AEDC-FE82966AC6EF.html

## Flux réseaux
La communication doit être possible depuis le Collecteur Centreon vers le port SNMP (UDP/161) du Kaspersky Security Center.


## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin Centreon McAfee Web Gatewaysur l'ensemble des Collecteurs Centreon supervisant un proxy McAfee Web Gateway :

```bash
yum install centreon-plugin-Applications-Antivirus-Mcafee-Webgateway-Snmp
```

2. Installer le Plugin-Pack 'McAfee Web Gateway' depuis la page "Configuration > Plugin packs > Manager" de l'interface Web Centreon

<!--Offline IMP License-->

1. Installer le Plugin Centreon McAfee Web Gateway sur l'ensemble des Collecteurs Centreon supervisant un proxy McAfee Web Gateway :

```bash
yum install centreon-plugin-Applications-Antivirus-Mcafee-Webgateway-Snmp
```

2. Installer le RPM du Plugin-Pack contenant les Modèles de supervision sur le serveur Central Centreon :

 ```bash
yum install centreon-pack-applications-antivirus-mcafee-webgateway-snmp
```

3. Installer le Plugin-Pack 'McAfee Web Gateway' depuis la page "Configuration > Plugin packs > Manager" de l'interface Web Centreon

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration de l'Hôte

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes".
* Complétez les champs "Nom", "Alias" & "IP Address / DNS" correspondant à votre proxy McAfee Web Gateway
* Appliquez le Modèle d'Hôte *App-Antivirus-Mcafee-Webgateway-SNMP-custom*

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres 
spécifiques associés via la macro SNMPEXTRAOPTIONS

| Mandatory | Name             | Description                                 |
|:----------|:---------------- |:--------------------------------------------|
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## FAQ

### Comment tester mes configurations et le Plugin en ligne de commande ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de
commande depuis un collecteur Centreon en vous connectant avec l'utilisateur 
*centreon-engine* :

```bash
/usr/lib/centreon/plugins/centreon_mcafee_webgateway_snmp.pl \
    --plugin=apps::antivirus::mcafee::webgateway::snmp::plugin \
    --mode=clients \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --filter-counters='' \
    --warning-clients='20' \
    --critical-clients='30' \
    --warning-sockets='60' \
    --critical-sockets='70' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie de la forme ci-dessous :

```bash
OK: Connected clients: 10, Open network sockets: 50 | 'clients.connected.count'=10;0:20;0:30;0;  'sockets.connected.count'=50;0:60;0:70;0;;
```

Dans cet exemple, le Plugin récupère le nombre de clients connectés
(```--plugin=apps::antivirus::mcafee::webgateway::snmp::plugin--mode=client```)
renvoyé par McAfee Web Gateway à l'adresse 10.0.0.1 par l'intermédiaire du 
protocole SNMP
(```--hostname='10.0.0.1'  --snmp-version='2c' --snmp-community='mysnmpcommunity'```).

Dans cet exemple, une alarme est déclenchée si le nombre de client connectés est
plus grand que 30 (```--critical-clients='30'```) ou si le nombre de prise 
réseaux ouvertes est plus grand que 70 (```--critical-sockets='70'```)

La liste de toutes les options complémentaires et leur signification peut être 
affichée en ajoutant le paramètre ```--help``` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_mcafee_webgateway_snmp.pl \
    --plugin=apps::antivirus::mcafee::webgateway::snmp::plugin \
    --mode=clients \
    --help
```

Tous les modes disponibles peuvent être affichés via l'option 
```--list-mode``` :

```bash
/usr/lib/centreon/plugins/centreon_mcafee_webgateway_snmp.pl \
    --plugin=apps::antivirus::mcafee::webgateway::snmp::plugin \
    --list-mode
```

## Troubleshooting

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie le collecteur Centreon ne parvient
pas à contacter le proxy McAfee Web Gateway sur le port 161 (firewall
ou autre équipement en coupure) ou que la communauté SNMP configurée n'est pas 
correcte.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Les autorisations données à l'utilisateur en SNMP sont trop restreintes pour
faire fonctionner le mode/plugin. L'agent SNMP doit pouvoir accéder à la branche 
.1.3.6.1.4.1.1230.

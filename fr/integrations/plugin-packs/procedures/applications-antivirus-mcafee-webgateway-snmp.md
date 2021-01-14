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

### Objets supervisés

* McAfee Web Gateway

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Clients-->

| Metric name             | Description                    |
|:------------------------|:-------------------------------|
| clients.connected.count | Number of connected client     |
| sockets.connected.count | Number of open network sockets |

<!--Connections-->

| Metric name                               | Description                                                  | Unit          |
|:------------------------------------------|:-------------------------------------------------------------|:--------------|
| connections.legitimate.persecond          | Number of legitimate connections per second                  | connections/s |
| connections.blocked.persecond             | Number of blocked connections per second                     | connections/s |
| connections.antimalware.blocked.persecond | Number of connections blocked by the Anti Malware per second | connections/s |
| connections.mediafilter.blocked.persecond | Number of connections blocked by the Media Filter per second | connections/s |
| connections.urlfilter.blocked.persecond   | Number of connections blocked by the URL Filter   per second | connections/s |

<!--Detections-->

* Global

| Metric name                 | Description                           | Unit         |
|:----------------------------|:--------------------------------------|:-------------|
| malwares.detected.persecond | Number of malware detected per second | detections/s |

* Per *categories*

| Metric name                                         | Description                          | Unit         |
|:----------------------------------------------------|:-------------------------------------|:-------------|
| *categoryname*#category.malwares.detected.persecond |Number of malware detected per second | detections/s |

<!--Ftpstatistics-->

| Metric name                            | Description                      | Unit    |
|:---------------------------------------|:---------------------------------|:------- |
| ftp.traffic.client2proxy.bitspersecond | FTP traffic from client to proxy | b/s     |
| ftp.traffic.server2proxy.bitspersecond | FTP traffic from server to proxy | b/s     |
| ftp.traffic.proxy2client.bitspersecond | FTP traffic from proxy to client | b/s     |
| ftp.traffic.proxy2server.bitspersecond | FTP traffic from proxy to server | b/s     |

<!--Httpstatistics-->

| Metric name                             | Description                       | Unit    |
|:----------------------------------------|:----------------------------------|:------- |
| http.requests.persecond                 | Number of HTTP request per second |         |
| http.traffic.client2proxy.bitspersecond | HTTP traffic from client to proxy | b/s     |
| http.traffic.server2proxy.bitspersecond | HTTP traffic from server to proxy | b/s     |
| http.traffic.proxy2client.bitspersecond | HTTP traffic from proxy to client | b/s     |
| http.traffic.proxy2server.bitspersecond | HTTP traffic from proxy to server | b/s     |

<!--Httpsstatistics-->


| Metric name                              | Description                        | Unit    |
|:-----------------------------------------|:-----------------------------------|:--------|
| https.requests.persecond                 | Number of HTTPS request per second |         |
| https.traffic.client2proxy.bitspersecond | HTTPS traffic from client to proxy | b/s     |
| https.traffic.server2proxy.bitspersecond | HTTPS traffic from server to proxy | b/s     |
| https.traffic.proxy2client.bitspersecond | HTTPS traffic from proxy to client | b/s     |
| https.traffic.proxy2server.bitspersecond | HTTPS traffic from proxy to server | b/s     |

<!--Versions-->

| Metric name       | Description                    |
|:------------------|:-------------------------------|
| dat-version       | DAT version                    |
| tsdb-version      | TrustedSource Database Version |
| proactive-version | ProActive Database Version     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

*Specify prerequisites that are relevant. You may want to just provide a link to the manufacturer official documentation
BUT you should try to be as complete as possible here as it will save time to everybody*

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources *TO CHANGE* :

```bash
yum install centreon-plugin-Applications-Antivirus-Mcafee-Webgateway-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *McAfee Web Gateway* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources *TO CHANGE* :

```bash
yum install centreon-plugin-Applications-Antivirus-Mcafee-Webgateway-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-applications-antivirus-mcafee-webgateway-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *McAfee Web Gateway* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"".
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre serveur *TO CHANGE*
* Appliquez le Modèle d'Hôte *Applications-Antivirus-mcafee-webgateway-snmp-custom*

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres 
spécifiques associés via la macro SNMPEXTRAOPTIONS

| Obligatoire | Nom              | Description                                 |
|:----------- |:---------------- |:------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

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
    --critical-sockets='70' 
```

Expected command output is shown below:

```bash
OK: Connected clients: 10, Open network sockets: 50 | clients.connected.count=10;0:20;0:30;0;   sockets.connected.count=50;0:60;0:70;0;
```

Dans cet exemple, le Plugin récupère le nombre de clients connectés
(--plugin=apps::antivirus::mcafee::webgateway::snmp::plugin--mode=client)
renvoyé par McAfee Web Gateway à l'adresse 10.0.0.1 par l'intermédiaire du 
protocole SNMP
(--hostname='10.0.0.1'  --snmp-version='2c' --snmp-community='mysnmpcommunity').

Dans cet exemple, une alarme de type WARNING est déclenchée si :

* Le nombre de client connectés est plus grand que 20 (--warning-clients='30)
* Le nombre de prise réseaux ouvertes est plus grand que 60 (--warning-sockets='70')

Une alarme CRITICAL est quant à elle déclenchée dans les cas suivants :

* Le nombre de client connectés est plus grand que 30 (--critical-clients='20)
* Le nombre de prise réseaux ouvertes est plus grand que 70 (--critical-sockets='60')

La liste de toutes les options complémentaires et leur signification peut être 
affichée en ajoutant le paramètre ```--help``` à la commande:

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
---
id: applications-graylog-restapi
title: Graylog Rest API
---

## Vue d'ensemble

Graylog est une solution de gestion de log permettant stocker ces derniers et de
les analyser en temps réél. 

Le Plugin-Pack Centreon *Applications-Graylog-Restapi* permet (par
l'interrogation de l'API Rest) de récupérer le nombre de notifications système
par sévérité ainsi que le nombre de résultats obtenu suite à une requête Lucène.

## Contenu du Plugin-Pack

### Objets supervisés

* Requêtes Lucène
* Notifications système

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Query-->

| Metric name                | Description               | Unit   |
| :------------------------- | :------------------------ | :----- |
| graylog.query.match.count  | Number of query matches   | Count  |

<!--System-Notifications-->

| Metric name                                 | Description                                       | Unit   |
| :------------------------------------------ | :------------------------------------------------ | :----- |
| graylog.system.notifications.total.count    | Total number of system notifications              | Count  |
| graylog.system.notifications.normal.count   | Number of system notifications (normal severity)  | Count  | 
| graylog.system.notifications.urgent.count   | Number of system notifications (urgent severity)  | Count  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequis

Un compte avec le rôle "Reader" est suffisant pour obtenir les métriques sur les
notifications systèmes. Cependant, un compte avec le rôle "admin" est nécessaire
pour effectuer les requêtes Lucène sur le serveur Graylog.

Plus d'informations sur le site officiel de Graylog : 
https://docs.graylog.org/en/latest/pages/configuration/rest_api.html.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant un serveur Graylog :

```bash
yum install centreon-plugin-Applications-Graylog-Restapi
```

2. Depuis l'interface Web de Centreon, installer le Plugin-Pack *Graylog* depuis la page "Configuration > Packs de plugins > Manager" 

<!--Offline IMP License-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant un serveur Graylog :

```bash
yum install centreon-plugin-Applications-Graylog-Restapi
```

2. Sur le serveur Central Centreon, installer le RPM du Plugin-Pack *Graylog* :

```bash
yum install centreon-pack-graylog-restapi
```

3. Depuis l'interface Web de Centreon, installer le Plugin-Pack *Graylog* depuis la page "Configuration > Packs de plugins > Manager" 

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Lors de la création de votre Hôte dans Centreon, choisissez le modèle
*App-Graylog-Restapi-custom*. Une fois celui-ci appliqué, 
certaines Macros liées à l'Hôte doivent être renseignées :

| Mandatory | Name         | Description                                                                              |
| :-------- | :----------- | :--------------------------------------------------------------------------------------- |
| X         | USERNAME     | Username for authentication                                                              |
| X         | PASSWORD     | Password for authentication                                                              | 
|           | PROTOCOL     | Protocol (default: 'http')                                                               |
|           | PORT         | API port (default: '9000)                                                                |
|           | EXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag or any header) |

Une fois l'Hôte créé, il est également possible de paramétrer un ensemble de
Macros de Service selon la configuration souhaitée :

| Mandatory | Name           | Description                      |
| :-------- | :------------- | :------------------------------- |
|           | FILTERNODE     | Filter by notification severity  |
|           | FILTERSEVERITY | Filter by node                   |

## FAQ

### Comment tester le Plugin Office 365 Onedrive en ligne de commande et que signifient les options principales ?

Une fois le Plugin installé, vous pouvez tester directement celui-ci en ligne de
commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine* :

```bash
/usr/lib/centreon/plugins//centreon_graylog_restapi.pl \
  --plugin=apps::graylog::restapi::plugin \
  --mode=query \
  --hostname=10.0.0.1 \
  --username='username' \
  --password='password' \
  --query='centreon'
```

Résultat attendu :

```bash
OK: current queue messages : 10 | 'graylog.query.match.count'=10;;;0;
```

Les options des différents modes sont consultables via le paramètre ```--help```
du mode :

```bash
/usr/lib/centreon/plugins//centreon_graylog_restapi.pl \
  --plugin=apps::graylog::restapi::plugin \
  --mode=query \
  --query='centreon'
  --help
```

Tous les modes disponibles dans le Plugin peuvent être listés via la commande
suivante :

```bash
/usr/lib/centreon/plugins//centreon_graylog_restapi.pl \
  --plugin=apps::graylog::restapi::plugin \
  --list-mode
```

#### ```UNKNOWN: 403 Forbidden``` ?

Le compte utilisé par le Plugin Centreon ne dispose pas des droits nécessaire
pour effectuer la requêtes via l'API.
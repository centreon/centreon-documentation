---
id: applications-monitoring-iplabel-newtest-restapi
title: IP-Label Newtest Rest API
---

## Overview

IP-Label est un spécialiste de la mesure de la qualité de l'expérience de l'utilisateur.

A partir de points représentatifs de votre entreprise, chaque Newtest Robot simule régulièrement des transactions métiers qui permettent de connaître à tout moment la disponibilité, les temps de réponse et la performance de vos services applicatifs critiques.

## Contenu du Plugin-Pack

### Objets Supervisés

* Robots Newtest et leurs Scénarios

## Métriques collectées 

<!--DOCUSAURUS_CODE_TABS-->
<!--Scenario-->

| Metric name                              | Description                | Unit |
| :--------------------------------------- | :------------------------- | :----|
| scenario.status.green.percentage         | Green scenario percentage  |   %  |
| scenario.status.red.percentage           | Red scenario percentage    |   %  |
| scenario.status.orange.percentage        | Orange scenario percentage |   %  |
| scenario.status.grey.percentage          | Grey scenario percentage   |   %  |
| scenario.execution.time.milliseconds     | Scenario exeecution time   |   ms |

Les options  ```--filter-robot-name``` et  ```--filter-scenario-name``` permettent de filtrer les résultats. 

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration d'IP-Label Newtest 

Un compte en lecture seule (login/password) sur la RestAPI Newtest est nécessaire. Rapprochez-vous de votre support IP-Label
si nécessaire. 

Par défaut, le Plugin requête l'URL '/rest/api/results' de l'API. Cette valeur peut être modifiée si besoin
lors de l'ajout de l'Hôte dans Centreon.  

## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin *IP-Label Newtest* sur chaque collecteur Centreon devant superviser des robots Newtest:

```bash
yum install centreon-plugin-Applications-Monitoring-Iplabel-Newtest-Restapi
```

2. Sur l'interface Web de Centreon, installer Plugin-Pack *IP-Label Newtest Rest API* au travers du menu "Configuration > Plugin packs > Gestionnaire"

<!--Offline IMP License-->

1. Installer le Plugin *IP-Label Newtest* sur chaque collecteur Centreon devant superviser des robots Newtest:

```bash
yum install centreon-plugin-Applications-Monitoring-Iplabel-Newtest-Restapi
```

2. Installer le paquet RPM du Plugin Pack contenant les Modèles de supervision sur le serveur Centreon Central:

```bash
yum install centreon-pack-applications-monitoring-iplabel-newtest-restapi
```

3. Sur l'interface Web de Centreon, installer Plugin-Pack *IP-Label Newtest Rest API* au travers du menu "Configuration > Plugin packs > Gestionnaire"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajouter un nouvel hôte dans Centreon
* Appliquer le Modèle d'Hôte *App-Monitoring-Iplabel-Newtest-Restapi-custom* 
* Configurer les Macros marquées comme obligatoires ci-après:   

| Mandatory   | Name                             | Description                                                                                                              |
| :---------- | :------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| X           | IPLABELNEWTESTAPIHOSTNAME        | Api URL.                                                                                                                 |
| X           | IPLABELNEWTESTAPIUSERNAME        | Api username                                                                                                             |
| X           | IPLABELNEWTESTAPIPASSWORD        | Api password                                                                                                             |
|             | IPLABELNEWTESTAPIPROTO           | Protocol to use. Default: 'https'                                                                                        |
|             | IPLABELNEWTESTAPIPORT            | Port to use. Default: ```443```                                                                                          |
|             | IPLABELNEWTESTAPIEXTRAOPTIONS    | Customize it with your own if needed. E.g. proxy: ```--http-backend=curl --proxyurl='https://proxy.mycompany:3128'```    |

## FAQ

### Comment tester le plugin et comment afficher de l'aide ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_iplabel_newtest_restapi.pl \
    --plugin=apps::monitoring::iplabel::newtest::restapi::plugin \
    --mode=scenarios \
    --hostname='the.newtest.fqdn' \
    --api-username='ro_user' \
    --api-password='strong_psswd' \
    --port='443' \
    --proto='https' \
    --http-backend=curl \
    --filter-robot-name='^HELSINKI$' \
    --filter-scenario-name='^Sharepoint$'
```

La commande doit retourner un résultat de la forme suivante: 

```
OK: Robot 'HELSINKI' scenario 'Sharepoint' green status: 100.00 %, red status: 0.00 %, orange status: 0.00 %, grey status: 0.00 %, execution time: 45000 ms
Extended status information 	
checking robot 'HELSINKI'
scenario 'Sharepoint' green status: 100.00 %, red status: 0.00 %, orange status: 0.00 %, grey status: 0.00 %, execution time: 45000 ms
```

La commande contrôle un Robot dont le nom est HELSINSKI (```--filter-robot-name='^HELSINKI$'```), et le scénario visé est nommé Sharepoint. (```--filter-scenario-name='^Sharepoint$'```).

Il utilise l'utilisateur et le password configuré côté Newtest (```--api-username='ro_user' --api-password='strong_psswd'```) via des requêtes 
HTTPS sur l'API IP-Label Newtest (```--proto='https'```)

Pour chaque mode, les options disponibles peuvent être consultées en ajoutant l'option ```--help``` à la commande:

```
/usr/lib/centreon/plugins//centreon_monitoring_iplabel_newtest_restapi.pl \
	--plugin=apps::monitoring::iplabel::newtest::restapi::plugin \
	--mode=scenarios \
    --help 
```

### Comment interpréter les erreurs suivantes ? 

#### ```UNKNOWN: 500 Can't connect to the.newtest.fqdn:443```

Ce message indique que la connexion a l'API a échouée.

Il est nécessaire de vérifier qu'aucun équipement tiers agissant en tant que Pare-Feu ne bloque le flux. Il est également possible qu'une connexion via 
proxy soit requise. Dans ce cas, il vous est possible de renseigner l'adresse de votre proxy via l'option ```--proxyurl```. 

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

SI vous utilisez un proxy, il est possible d'obtenir cette erreur. Lorsque c'est le cas, utiliser le Backend curl qui résoudra cette erreur:

```--http-backend='curl'```.

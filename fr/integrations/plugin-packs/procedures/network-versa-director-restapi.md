---
id: network-versa-director-restapi
title: Versa Director Restapi
---

## Vue d'ensemble

Versa Director est la plateforme de management, supervision et d'orchestration
pour délivrer les services de sécurité et de réseau VNF de la suite Versa Networks.

Le Plugin-Pack Centreon utilise l'API de Versa Director pour se connecter et
récupérer des informations et des métriques relatives aux équipements Versa.

Vous trouverez plus d'information à propos de l'API Versa Director sur la documentation officielle :
https://apidocs.versa-networks.com/

## Contenu du Plugin-Pack

### Elements supervisés

* Versa Networks devices

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Hosts-->

| Nom de la règle                                  | Description                                                   |
|:------------------------------------------------ |:------------------------------------------------------------- |
| Net-Versa-Director-Restapi-HostDiscovery-devices | Découvrez vos équipements Versa managés par un Versa Director |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques Collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Devices-->

* Global

| Metric name                                        | Description                                | Unit  |
|:-------------------------------------------------- |:------------------------------------------ |:----- |
| status                                             | Status of the device                       |       |
| memory.usage.bytes                                 | Memory usage on the device                 | B     |
| memory.free.bytes                                  | Free memory on the device                  | B     |
| memory.usage.percentage                            | Percentage of memory usage on the device   | %     |
| disk.usage.bytes                                   | Disk usage on the device                   | B     |
| disk.free.bytes                                    | Free disk space on the device              | B     |
| disk.usage.percentage                              | Percentage of disk usage on the device     | %     |
| alarms.critical.count                              | Number of critical alarms on the device    | Count |
| alarms.major.count                                 | Number of major alarms on the device       | Count |
| alarms.minor.count                                 | Number of minor alarms on the device       | Count |
| alarms.warning.count                               | Number of warning alarms on the device     | Count |
| alarms.inderminate.count                           | Number of inderminate alarm on the device  | Count |
| policy.violation.packets.dropped.novalidlink.count | Number of packets dropped by no valid link | Count |
| policy.violation.packets.dropped.slaaction.count   | Number of packets dropped by sla action    | Count |

* by health monitor

| Metric name           | Description                        | Unit  |
|:--------------------- |:---------------------------------- |:----- |
| health.up.count       | Number of health monitors up       | Count |
| health.disabled.count | Number of health monitors disabled | Count |
| health.down.count     | Number of health monitors down     | Count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### API

l'API doit être activée et démarrée sur le Versa Director.
Référencez-vous à la documentation officielle de Versa Networks pour l'activation de l'API.

### Flux réseaux

La communication doit être possible sur le port TCP 9182 (en HTTPS) depuis le collecteur Centreon vers le Versa Director.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant
des équipements Versa via l'API du Versa Director :

```bash
yum install centreon-plugin-Network-Versa-Director-Restapi
```

2. Installer le Plugin-Pack 'Versa Director Restapi' depuis la page "Configuration > Plugin packs > Manager" sur l'interface Web de Centreon.

<!--Offline IMP License-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant
des équipements Versa via l'API du Versa Director :

```bash
yum install centreon-plugin-Network-Versa-Director-Restapi
```

2. Installer le RPM du Plugin-Pack contenant les modèles de supervision:

```bash
yum install centreon-pack-network-versa-director-restapi
```

3. Installer le Plugin-Pack 'Versa Director Restapi' depuis la page "Configuration > Plugin packs > Manager" sur l'interface Web de Centreon.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration 

* Depuis l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes".
* Appliquez le modèle *Net-Versa-Director-Device-Restapi-custom* et configurez tous les macros nécessaires :

| Mandatory | Name                    | Description                                                                |
| :-------- | :---------------------- | :------------------------------------------------------------------------- |
| X         | DIRECTORAPIPORT         | Port used. Default: 9182                                                   |
| X         | DIRECTORAPIPROTO        | Protocol used. Default: https                                              |
| X         | DIRECTORAPIORGANIZATION | Linked organizations of the device. Default: .*                            |
| X         | DIRECTORAPIHOSTNAME     | Hostname of the Versa Director.                                            |
| X         | DIRECTORAPIUSERNAME     | Username to access to the API.                                             |
| X         | DIRECTORAPIPASSWORD     | Password to access to the API.                                             |
| X         | DIRECTORAPIDEVICENAME   | Name of the Versa device.                                                  |
|           | DIRECTORAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |
|           | PROXYURL                | Proxy URL. (eg. http://myproxy.int:3128)                                   |

> Utiliez le module de découverte pour ajouter à votre supervision vos équipements Versa.
> Allez dans le menu "Configuration > Host > Discovery" et utilisez le provider *Versa Networks devices (Director RestAPI)*

## FAQ

### Comment tester un contrôle en ligne de commande et que signifient les options principales ?

A partir du moment ou le Plugin est installé, vous pouvez tester directement celui-ci en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins//centreon_versa_director_restapi.pl \
  --plugin=network::versa::director::restapi::plugin \
  --mode=devices \
  --hostname=10.0.0.1 \
  --port='9182' \
  --proto='https' \
  --api-username='jdoe' \
  --api-password='6fbadZEJbsLG' \
  --organization='.*' \
  --filter-device-name='^CENFRGW101$' \
  --warning-status='' \
  --critical-status='%{ping_status} ne "reachable" or %{services_status} ne "good"' \
  --verbose
```

La commande retourne le message de sortie ci-dessous:

```bash
OK: Device 'CENFRGW101' status services: good [ping: reachable] [sync: in_sync] [path: unavailable] [controller: unavailable] -
memory total: 31.42 GB used: 11.49 GB (36.57%) free: 19.93 GB (63.43%) - disk total: 250.00 B used: 18.00 B (7.20%) free: 232.00 B (92.80%) -
alarms critical: 0, major: 0, minor: 0, warning: 0, indeterminate: 0 -
policy violation packets-dropped-novalidlink : 0, packets-dropped-slaaction : 0 -
all health monitors are ok | 'devices.total.count'=1;;;0; 'CENFRGW101#memory.usage.bytes'=12337293557B;;;0;33736968110.08
'CENFRGW101#memory.free.bytes'=21399674552B;;;0;33736968110.08 'CENFRGW101#memory.usage.percentage'=36.57;;;0;100
'CENFRGW101#disk.usage.bytes'=18B;;;0;250 'CENFRGW101#disk.free.bytes'=232B;;;0;250
'CENFRGW101#disk.usage.percentage'=7.20;;;0;100 'CENFRGW101#alarms.critical.count'=0;;;0;
'CENFRGW101#alarms.major.count'=0;;;0; 'CENFRGW101#alarms.minor.count'=0;;;0; 'CENFRGW101#alarms.warning.count'=0;;;0;
'CENFRGW101#alarms.indeterminate.count'=0;;;0; 'CENFRGW101~bgp adjacencies#health.up.count'=3;;;0;3
'CENFRGW101~bgp adjacencies#health.down.count'=0;;;0;3 'CENFRGW101~bgp adjacencies#health.disabled.count'=0;;;0;3
'CENFRGW101~config sync status#health.up.count'=1;;;0;1 'CENFRGW101~config sync status#health.down.count'=0;;;0;1
'CENFRGW101~config sync status#health.disabled.count'=0;;;0;1 'CENFRGW101~ike status#health.up.count'=2;;;0;2
'CENFRGW101~ike status#health.down.count'=0;;;0;2 'CENFRGW101~ike status#health.disabled.count'=0;;;0;2
'CENFRGW101~interfaces#health.up.count'=3;;;0;3 'CENFRGW101~interfaces#health.down.count'=0;;;0;3
'CENFRGW101~interfaces#health.disabled.count'=0;;;0;3 'CENFRGW101~paths#health.up.count'=24;;;0;24
'CENFRGW101~paths#health.down.count'=0;;;0;24 'CENFRGW101~paths#health.disabled.count'=0;;;0;24
'CENFRGW101~physical ports#health.up.count'=0;;;0;0 'CENFRGW101~physical ports#health.down.count'=0;;;0;0
'CENFRGW101~physical ports#health.disabled.count'=0;;;0;0 'CENFRGW101~reachability status#health.up.count'=1;;;0;1
'CENFRGW101~reachability status#health.down.count'=0;;;0;1 'CENFRGW101~reachability status#health.disabled.count'=0;;;0;1
'CENFRGW101~service status#health.up.count'=1;;;0;1 'CENFRGW101~service status#health.down.count'=0;;;0;1
'CENFRGW101~service status#health.disabled.count'=0;;;0;1
checking device 'CENFRGW101' [type: hub]
    status services: good [ping: reachable] [sync: in_sync] [path: unavailable] [controller: unavailable]
    memory total: 31.42 GB used: 11.49 GB (36.57%) free: 19.93 GB (63.43%)
    disk total: 250.00 B used: 18.00 B (7.20%) free: 232.00 B (92.80%)
    alarms critical: 0, major: 0, minor: 0, warning: 0, indeterminate: 0
    policy violation packets-dropped-novalidlink : 0, packets-dropped-slaaction : 0
    health monitor 'bgp adjacencies' up: 3, down: 0, disabled: 0
    health monitor 'config sync status' up: 1, down: 0, disabled: 0
    health monitor 'ike status' up: 2, down: 0, disabled: 0
    health monitor 'interfaces' up: 3, down: 0, disabled: 0
    health monitor 'paths' up: 24, down: 0, disabled: 0
    health monitor 'physical ports' up: 0, down: 0, disabled: 0
    health monitor 'reachability status' up: 1, down: 0, disabled: 0
    health monitor 'service status' up: 1, down: 0, disabled: 0
```

Cette commande supervise un équipement Versa Networks **CENFRGW101** (```--filter-device-name='^CENFRGW101$'```)
à l'aide l'API Versa Director (```--plugin=network::versa::director::restapi::plugin --mode=devices```).
Le plugin requête l'API du Versa Director **10.0.0.1** (```--hostname=10.0.0.1```) avec l'utilisateur
**jdoe** et son mot de passe (```--api-username='jdoe' --api-password='6fbadZEJbsLG'```).
Un équipement Versa peut être lié à plusieurs organisations, nous utilisons une widlcard (```--organization='.*'```).

Cette commande retournera une alerte CRITICAL (```--critical-status='%{ping_status} ne "reachable" or %{services_status} ne "good"'```) si :

* Le 'ping status' de l'équipement est différent de **reachable**
* Le 'service_status' de l'équipement est différent de **good**

Des seuils peuvent être positionnés à l'aide des options ```--warning-*``` et ```--critical-*``` sur les métriques.

Pour chaque mode, les options disponibles peuvent être consultées en ajoutant l'option ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_versa_snmp.pl \
  --plugin=network::versa::director::restapi::plugin \
  --mode=devices \
  --help
```

### J'obtiens le message d'erreur suivant: 

#### ```UNKNOWN: 500 Can't connect to myversadirector:9182 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant ```UNKNOWN: 500 Can't connect to myversadirector:9182 |```.
Cela signifie que Centreon n'a pas réussi à se connecter à l'API du Versa Director.
La plupart du temps, il faut préciser le proxy à utiliser pour requêter l'API du Versa Director en utilisant l'option ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

Suite à la mise en place du proxy, j'obtiens le message suivant ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```
Cela signifie que le protocole de connexion au proxy n'est pas supporté par la libraire *LWP* utlisée par défaut par le Plugin Centreon.
Cette erreur peut être résolue en utilisant le backend HTTP *curl*. Pour ce faire, ajoutez l'option ```--http-backend='curl'``` à la commande.

#### ```UNKNOWN: Cannot load module 'Net::Curl::Easy'```

Ce message d'erreur indique qu'une librairie Perl est maquante pour utiliser le backend curl.
Pour corriger ce problème, installer la librairie Perl Net::Curl::Easy à l'aide de la commande suivante :

```bash
yum install perl-Net-Curl
```

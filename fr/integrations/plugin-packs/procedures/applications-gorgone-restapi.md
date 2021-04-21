---
id: applications-gorgone-restapi
title: Gorgone Restapi
---

## Vue d'ensemble

Le démon Gorgone est un gestionnaire de tâche en mode distribué (https://github.com/centreon/centreon-gorgone).

## Plugin-Pack assets

### Objets supervisés

* Instances gorgoned

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Events-->

| Metric name             | Description                                                                            |
| :---------------------- | :------------------------------------------------------------------------------------- |
| path.events.total.count | By instances. e.g. `internal` `external`. Number of events on a path                   |
| event.total.count       | By instances. e.g. `internal~pong`, `internal~command`, ... Number of a specific event |

<!--Nodes-->

| Metric name                         | Description                                                            |
| :---------------------------------- | :----------------------------------------------------------------------|
| node.ping.received.lasttime.seconds | By instances (`node_id`). Time since last ping response. Unit: seconds |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration de Gorgone

Assurer vous que le module Gorgone `httpserver` est correctement configuré. Au besoin, ajouter le avec la directive suivante

```yaml
modules:
    - name: httpserver
      package: "gorgone::modules::core::httpserver::hooks"
      enable: true
      address: "0.0.0.0"
      port: "8085"
      ssl: false
      auth:
        enabled: false
      allowed_hosts:
        enabled: true
        subnets:
          - 127.0.0.1/32
```

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur les Poller supervisant des instances de Gorgone:

```bash
yum install centreon-plugin-Applications-Gorgone-Restapi
```

2. Dans l'interface Centreon, rendez-vous dans le menu "Configuration > Plugin Packs > Gestionnaire" et installer le Plugin-Pack 'Gorgone Rest API'

<!--Offline IMP License-->

1. Installer le Plugin sur les Poller supervisant des instances de Gorgone:

```bash
yum install centreon-plugin-Applications-Gorgone-Restapi
```

2. Installer le RPM du Plugin-Pack RPM sur le serveur Centreon Central:

```bash
yum install centreon-pack-applications-gorgone-restapi.noarch
```

3. Dans l'interface Centreon, rendez-vous dans le menu "Configuration > Plugin Packs > Gestionnaire" et installer le Plugin-Pack 'Gorgone Rest API'

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Rendez-vous dans le menu "Configuration > Hôtes" et ajouter un nouvel Hôte
* Appliquer le modèle *App-Gorgone-Restapi-custom* et configurer les macros obligatoires mentionnées ci-dessous:

| Mandatory   | Nom                    | Description                                                                |
| :---------- | :--------------------- | :------------------------------------------------------------------------- |
| X           | GORGONEAPIPORT         | Port used. Default is 8085                                                 |
| X           | GORGONEAPIPROTO        | Protocol used. Default is http                                             |
|             | GORGONEAPIUSERNAME     | Username to access to the API.                                             |
|             | GORGONEAPIPASSWORD     | Password to access to the API.                                             |
|             | GORGONEAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

### Comment tester le Plugin et quelle est la signification des options principales

Une fois le Plugin installé, vous pouvez l'exécuter avec l'utilisateur centreon-engine:

```bash
/usr/lib/centreon/plugins/centreon_gorgone_restapi.pl \
    --plugin=apps::gorgone::restapi::plugin \
    --mode=events \
    --hostname='127.0.0.1' \
    --port='8085' \
    --proto='http' \
    --verbose
```

Cette commande superviser le nombre d'événements traités par Gorgone. Lorsqu'une authentification basique est configurée, il est nécessaire de spécifier le nom
d'utilisateur et le mot de passe dans la commande comme ceci (`--api-username='John.doe' --api-password='6fbadZEJbsLG'`).

Le résultat attendu est similaire à:

```bash
OK: All paths are ok | 'external#path.events.total.count'=0;;;0; 'internal#path.events.total.count'=12;;;0; 'internal~actionready#event.total.count'=0;;;0; 'internal~bcastlogger#event.total.count'=0;;;0; 'internal~centreonnodesready#event.total.count'=0;;;0; 'internal~command#event.total.count'=0;;;0; 'internal~constatus#event.total.count'=1;;;0; 'internal~dbcleanerready#event.total.count'=0;;;0; 'internal~enginecommand#event.total.count'=0;;;0; 'internal~engineready#event.total.count'=0;;;0; 'internal~httpserverready#event.total.count'=0;;;0; 'internal~information#event.total.count'=1;;;0; 'internal~judgeready#event.total.count'=0;;;0; 'internal~legacycmdready#event.total.count'=0;;;0; 'internal~pipelineready#event.total.count'=0;;;0; 'internal~pong#event.total.count'=6;;;0; 'internal~proxyready#event.total.count'=0;;;0; 'internal~putlog#event.total.count'=0;;;0; 'internal~registernodes#event.total.count'=0;;;0; 'internal~setcoreid#event.total.count'=0;;;0; 'internal~setlogs#event.total.count'=4;;;0; 'internal~unregisternodes#event.total.count'=0;;;0;
checking path 'external'
    total events: 0
checking path 'internal'
    total events: 12
    event 'actionready' total: 0
...
```

Les options permettant au Plugin de déclencher des alertes peuvent être affiché via l'aide de la sonde. (`--help`):

```bash
/usr/lib/centreon/plugins/centreon_gorgone_restapi.pl \
    --plugin=apps::gorgone::restapi::plugin \
    --mode=events \
    --help
```

Il est possible d'afficher l'ensemble des modes disponibles avec la commande ci-dessous:

```bash
/usr/lib/centreon/plugins//centreon_gorgone_restapi.pl \
    --plugin=apps::gorgone::restapi::plugin \
    --list-mode
```

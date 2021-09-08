---
id: applications-slack-restapi
title: Slack
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Pack Slack collecte les données pour:
* Channels
* Members
* Services

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                       | Description                                |
| :------------------------------ | :----------------------------------------- |
| App-Slack-Restapi-Services-Name | Discover services and monitor their status |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Count-channels-->

| Metric name                            | Description                      | Unit |
| :------------------------------------- | :------------------------------- | :--- |
| channels.total.count                   | Number of channels               |      |
| *channel\_name*\#channel.members.count | Number of members in the channel |      |

<!--Count-members-->

| Metric name         | Description     | Unit |
| :-------------------| :-------------- | :--- |
| members.total.count | Number of users |      |

<!--Services-->

| Metric name          | Description                            | Unit |
| :------------------- | :------------------------------------- | :--- |
| slack.services.count | Number of services currently monitored |      |
| status               | Status of the service                  |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Le collecteur Centreon doit pouvoir joindre les serveurs Slack (slack.com) sur Internet sur le port TCP/443 (HTTPS).
Il est possible de spécifier un proxy à utiliser le cas échéant.

| Service        | API Token ?    | Scope         |
| :------------- | :------------- | :------------ |
| count-channels | Yes            | channels.read |
| count-members  | Yes            | users.read    |
| services       | No             |               |

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Slack-Restapi
```

2. Sur l'interface Web de Centreon, installer le Pack *Slack* depuis la page **Configuration > Plugin Packs > Gestionnaire**

<!--Offline IMP License-->

1.Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Slack-Restapi
```

2. Installer le RPM du Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-applications-slack-restapi
```

3. Sur l'interface Web de Centreon, installer le Pack *Slack* depuis la page **Configuration > Plugin Packs > Gestionnaire**

## Configuration

* Ajoutez un nouvel Hôte depuis la page **Configuration > Hôtes**
* Complétez le champ "IP Address / DNS" en indiquant une IP *localhost* (par exemple 127.0.0.1)
* Appliquez le Modèle d'Hôte *App-Slack-Restapi-custom*

| Mandatory | Name                 | Description                                                                        |
| :-------- | :------------------- | :--------------------------------------------------------------------------------- |
|           | SLACKAPITOKEN        | Slack API Token                                                                    |
|           | SLACKAPIEXTRAOPTIONS | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

> Par défaut, un Service de type "Global" sera déployé, supervisant l'ensemble des services Slack.
> Utilisez la fonctionnalité **Service Discovery** si vous souhaitez obtenir un Service par service Slack.

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_slack_restapi.pl \
    --plugin='apps::slack::restapi::plugin' \
    --mode=services \
    --proxyurl='http://myproxy.mycompany.org:8080' \
    --filter-name='Connections|Messaging' \
    --warning-status='%{status} eq "active" and %{type} eq "incident"' \
    --critical-status='%{status} eq "active" and %{type} eq "outage"' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: All slack services are ok | 'slack.services.count'=2;;;0;
Service 'Connections' status is ok
Service 'Messaging' status is ok
```

Dans cet exemple, le Plugin récupère les statuts des services Slack (```--plugin='apps::slack::restapi::plugin' --mode=services```).
On choisit ci-desus de n'afficher que le statut des services *Connections* et *Messaging*
(```--filter-name='Connections|Messaging'```).

Une alarme WARNING sera ainsi déclenchée si le statut d'un de ces services est signalée comme dégradée (```--warning-status='%{status} eq "active" and %{type} eq "incident"'```);
l'alarme sera de type CRITICAL pour un service inaccessible (```--critical-status='%{status} eq "active" and %{type} eq "outage"'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée 
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_slack_restapi.pl \
    --plugin='apps::slack::restapi::plugin' \
    --mode=services \
    --help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins.html)

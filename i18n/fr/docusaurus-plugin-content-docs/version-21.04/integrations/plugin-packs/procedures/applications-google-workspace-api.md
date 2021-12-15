---
id: applications-google-workspace-api
title: Google Workspace
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

Google Workspace est une suite d'outils et de logiciels de productivité de type Cloud computing et de groupware destinée aux professionnels,
proposée par Google sous la forme d'un abonnement.

Le Plugin Pack Centreon permet de récupérer le statut en temps réel de la disponibilité des services composant cette suite,
ceci par le biais du portail dédié mis à disposition par Google.

## Contenu du Plugin-Pack

### Objets supervisés

* Applications: Gmail, Meet, Drive, etc...

La liste complète des applications prises en charge est disponible ici:
https://workspace.google.fr/intl/en/features/

### Règles de découvertes

<Tabs groupId="operating-systems">
<TabItem value="Services" label="Services">

| Rule name                          | Description                                |
| :--------------------------------- | :----------------------------------------- |
| App-Google-Workspace-Services-Name | Discover services and monitor their status |

</TabItem>
</Tabs>

### Métriques collectées

<Tabs groupId="operating-systems">
<TabItem value="Services" label="Services">

| Metric name                     | Description                            |
| :------------------------------ | :------------------------------------- |
| google.workspace.services.count | Number of services currently monitored |
| status                          | Status of the service                  |

</TabItem>
</Tabs>

## Prérequis

Le collecteur Centreon doit pouvoir joindre les serveurs Google (www.google.com) sur Internet sur le port TCP/443 (HTTPS).
Il est possible de spécifier un proxy à utiliser le cas échéant.

## Installation

<Tabs groupId="operating-systems">
<TabItem value="online" label="Online License">

1. Installer le Plugin sur chaque collecteur Centreon devant superviser les services *Google Workspace*:

```bash
yum install centreon-plugin-Applications-Google-Workspace-Api
```

2. Sur l'interface Web de Centreon, installer le Pack *Google Workspace* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
<TabItem value="offline" label="Offline License">

1. Installer le Plugin sur chaque collecteur Centreon devant superviser les services *Google Workspace*:

```bash
yum install centreon-plugin-Applications-Google-Workspace-Api
```

2. Installer le RPM du Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-applications-google-workspace-api
```

3. Sur l'interface Web de Centreon, installer le Pack *Google Workspace* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
</Tabs>

## Configuration

* Ajoutez un nouvel Hôte depuis la page **Configuration > Hôtes**
* Complétez le champ "IP Address / DNS" en indiquant une IP *localhost* (par exemple 127.0.0.1)
* Appliquez le Modèle d'Hôte *App-Google-Workspace-Api-custom*

> Ce modèle d'Hôte est de type *dummy* afin de ne pas initier de commande de vérification (*ping*) vers Internet
> (ce type de requête étant souvent bloquée). l'Hôte ajouté renverra donc par défaut *OK*.

| Mandatory | Name                          | Description                                                                                 |
| :-------- | :---------------------------- | :------------------------------------------------------------------------------------------ |
| X         | GOOGLEWORKSPACESTATUSHOSTNAME | IP or name of the Status server (Default: 'www.google.com')                                 |
| X         | GOOGLEWORKSPACESTATUSPORT     | Port used to reach the Google server (Default: '443')                                       |
| X         | GOOGLEWORKSPACESTATUSPROTO    | Protocol used to reach the Google server (Default: 'https')                                 |
|           | PROXYURL                      | Configure a proxy URL to use if needed                                                      |
|           | GOOGLEWORKSPACEEXTRAOPTIONS   | Any extra option you may want to add to every command\_line (eg. a --verbose flag)          |
|           | DUMMYSTATUS                   | Host state. Default is OK, do not modify it unless you know what you are doing              |
|           | DUMMYOUTPUT                   | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

> Par défaut, un Service de type "Global" sera déployé, supervisant l'ensemble des services Google Workspace.
> Utilisez la fonctionnalité **Service Discovery** si vous souhaitez obtenir un Service par service Google Workspace.

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_google_workspace_api.pl \
--plugin='apps::google::workspace::plugin' \
--mode=services \
--hostname='www.google.com' \
--proto='https' \
--port='443' \
--proxyurl='http://myproxy.mycompany.org:8080' \
--filter-name='mail|drive|meet' \
--warning-status='%{status} eq "disruption"' \
--critical-status='%{status} eq "outage"' \
--verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: All Google workspace services are ok | 'google.workspace.services.count'=3;;;0;
Service 'Gmail' status is available
Service 'Google Drive' status is available
Service 'Google Meet' status is available
```

Dans cet exemple, le Plugin récupère les statuts des services Google Workspace (```--plugin='apps::google::workspace::plugin' --mode=services```)
depuis le site dédié (--hostname='www.google.com'). On choisit ci-desus de n'afficher que le statut des applications *gmail*, *drive* et *meet*
(```--filter-name='gmail|drive|meet'```).

Une alarme WARNING sera ainsi déclenchée si le statut d'un de ces services est signalée comme dégradée (```--warning-status='%{status} eq "disruption"'```);
l'alarme sera de type CRITICAL pour un service inaccessible (```--critical-status='%{status} eq "outage"'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_google_workspace_api.pl \
--plugin='apps::google::workspace::plugin' \
--mode=services \
--help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins)

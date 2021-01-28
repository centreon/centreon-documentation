---
id: applications-google-gsuite-api
title: Google GSuite
---

## Vue d'ensemble

GSuite est une suite d'outils et de logiciels de productivité de type Cloud computing et de groupware destinée aux professionnels, 
proposée par Google sous la forme d'un abonnement.

Le Plugin-Pack Centreon permet de récupérer le statut en temps réel de la disponibilité des applications composant cette suite,
ceci par le biais du portail dédié mis à disposition par Google.

## Contenu du Plugin-Pack

### Objets supervisés

* Applications: Gmail, Meet, Drive, etc...

La liste complète des applications prises en charge est disponible ici:
https://workspace.google.fr/intl/en/features/

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Applications-->

| Rule name                                | Description                                                        |
| :--------------------------------------- | :----------------------------------------------------------------- |
| App-Google-Gsuite-Api--Application-Name  | Discover GSuite applications and monitor their status              |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Gsuite-Application-*-->

| Metric name               | Description                                |
|:--------------------------|:-------------------------------------------|
| google.apps.current.count | Number of applications currently monitored |
| status                    | status of the GSuite application           |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Le collecteur Centreon doit pouvoir joindre les serveurs Google (www.google.com) sur Internet sur le port TCP/443 (HTTPS).
Il est possible de spécifier un proxy à utiliser le cas échéant.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser les applications *Google GSuite*:

```bash
yum install centreon-plugin-Applications-Google-Gsuite-Api
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Google GSuite* 
depuis la page "Configuration > Plugin Packs > Gestionnaire" 

<!--Offline IMP License-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser les applications *Google GSuite*:

```bash
yum install centreon-plugin-centreon-plugin-Applications-Google-Gsuite-Api
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-applications-google-gsuite-api
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Google GSuite* 
depuis la page "Configuration > Plugin Packs > Gestionnaire"

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez le champ "IP Address / DNS" en indiquant une IP *localhost* (par exemple 127.0.0.1)
* Appliquez le Modèle d'Hôte *App-Google-Gsuite-Api*

> Ce modèle d'Hôte est de type *dummy* afin de ne pas initier de commande de vérification (*ping*) vers Internet
> (ce type de requête étant souvent bloquée). l'Hôte ajouté renverra donc par défaut *OK*.

| Mandatory | Name                     | Description                                                                                 |
|:----------|:-------------------------|:--------------------------------------------------------------------------------------------|
| X         | GOOGLEAPPSSTATUSHOSTNAME | IP or name of the Status server (Default: 'www.google.com')                                 |
| X         | GOOGLEAPPSSTATUSPORT     | Port used to reach the Google server (Default: '443')                                       |
| X         | GOOGLEAPPSSTATUSPROTO    | Protocol used to reach the Google server (Default: 'https')                                 |
| X         | GOOGLEAPPSSTATUSLANGUAGE | Language for the Application names (Default: 'en')                                          |
|           | PROXYURL                 | Configure a proxy URL to use if needed                                                      |
|           | EXTRAOPTIONS             | Any extra option you may want to add to every command\_line (eg. a --verbose flag)          |
|           | DUMMYSTATUS              | Host state. Default is OK, do not modify it unless you know what you are doing              |
|           | DUMMYOUTPUT              | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

> Par défaut, un Service de type "Global" sera déployé, supervisant l'ensemble des applications GSuite.
> Utilisez la fonctionnalité **Service Discovery** si vous souhaitez obtenir un Service par application.

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_google_gsuite_api.pl \
    --plugin='apps::google::gsuite::plugin' \
    --mode=applications \
    --hostname='www.google.com' \
    --proto='https' \
    --port='443' \
    --proxyurl='http://myproxy.mycompany.org:8080' \
    --language='en' \
    --filter-app='gmail|drive|meet' \
    --warning-status='%{status} eq "DEGRADED"' \
    --critical-status='%{status} eq "UNAVALAIBLE"' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: 3 GApps - All Google Apps are ok | 'google.apps.current.count'=3;;;0;
Gmail (OK): '' (since '2020-10-10T10:00:00')
Google Drive (OK): '' (since '2020-10-10T10:00:00')
Google Meet (OK): '' (since '2020-10-10T10:00:00')
```

Dans cet exemple, le Plugin récupère les statuts des applications GSuite (```--plugin='apps::google::gsuite::plugin' --mode=applications```)
depuis le site dédié (--hostname='www.google.com'). On choisit ci-desus de n'afficher que le statut des applications *gmail*, *drive* et *meet*
(```--filter-app='gmail|drive|meet'```).

Une alarme WARNING sera ainsi déclenchée si le statut d'une de ces applications est signalée comme dégradée (```--warning-status='%{status} eq "DEGRADED"'```);
l'alarme sera de type CRITICAL pour une application inaccessible (```--critical-status='%{status} eq "UNAVALAIBLE"'```).


Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée 
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_google_gsuite_api.pl \
--plugin='apps::google::gsuite::plugin' \
--mode=applications \
--help
```

### J'obtiens le message d'erreur suivant: ```UNKNOWN: 500 Can't connect to www.google.com.443 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant: ```UNKNOWN: 500 Can't connect to www.google.com.443 |```.

Cela signifie que Centreon n'a pas réussi à se connecter à l'API du serveur Google.

Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le collecteur Centreon,
il est nécessaire de le préciser dans la commande en utilisant l'option ```--proxyurl='http://proxy.mycompany.com:8080'```.

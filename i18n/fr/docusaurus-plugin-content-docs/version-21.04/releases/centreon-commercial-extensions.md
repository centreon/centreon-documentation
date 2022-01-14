---
id: centreon-commercial-extensions
title: Extensions Commerciales
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne les **extensions
commerciales** de Centreon.

> Il est important de mettre à jour en utilisant la documentation
> adéquate de mise à jour et de lire attentivement les notes de mise à
> jour afin d'être au courant des changements qui pourraient impacter
> votre usage ou votre plateforme ou des développements spécifiques que
> vous auriez fait.

Pour faire des demandes d'évolutions ou reporter des bugs sur les extensions
commerciales, veuillez contacter le support.

## Centreon MAP

### 21.04.4

Release date: `December 20, 2021`

#### Security fixes 

- Log4J version updated to 2.17.0

### 21.04.3

Release date: `December 16, 2021`

#### Bug fixes

- Path to map server backup log file in cron is now correct
- A simple link can now be created between a container and a view through API

#### Security fixes

- Log4J version updated to 2.16.0

### 21.04.2

`November 25, 2021`

#### Bugfixes

 - Disabled Business Activities are now displayed as disabled even after restarting centreon-map service
 - HeapDumpPath is now pointing to the proper folder (/var/log/centreon-map folder)
 - Metrics labels with specific characters and white spaces are now supported
 - Service elements in a view are not clickable anymore
 - Metrics not following the naming specification do not cause map server to crash anymore

#### Enhancements

 - Links to monitoring pages now redirects properly to resource status or older deprecated pages
 - Perfdata values separated by multiple white spaces are now properly handled by map server

### 21.04.1

`2 août 2021`

#### Améliorations

- [Web-Client] Display only markers with geocoord setup for geoview usage

#### Correctifs

- [Server] RestTemplate as an http client should validate with the truststore or ignore CA validation of auto-signed certificates
- [Web-Client] Graph scale is wrong in web interface
- [Web-Client] Infrastructure View link (BA) doesn't work
- [Web-Client] Links to hosts/services not completely working on MAP
- [Web-Client] Sort maps by alphabetic order


### 21.04.0

- Compatibility with Centreon 21.04

## Centreon BAM

### 21.04.0

- Compatibility with Centreon 21.04

## Centreon MBI

### 21.04.2

`15 juillet 2021`

#### Améliorations

- Requêtes optimisées pour les widgets

#### Correctifs

- Correctif additionnel de l'exécution immédiate des tâches
- Correction des noms de BA manquants dans le rapport BV-BA-Availabilities-1
- Correction d'un cas de division par zéro dans les widgets

### 21.04.1

`24 Juin 2021`

#### Correctifs

- Correction des erreurs JQuery avec MBI web client

### 21.04.0

- Compatibility with Centreon 21.04

## Centreon Auto Discovery

### 21.04.3

Release date: `November 24, 2021`

#### Improvements

- Improved the way search requests are sent to the backend. The old way caused errors of type 500 when all search filters were removed.

#### Bug fixes

- An invalid path in upgrade.php caused PHP errors in the update process

### 21.04.2

Release date: `9 novembre 2021`

#### Improvements

- Improve the way host discovery providers are identified as compatible with the current version of autodiscovery

### 21.04.1

`19 juillet 2021`

#### Host discovery

- Désactiver le bouton de rafraîchissement pendant le chargement des listings
- Mémoriser la saisie en cours lorsque l'utilisateur clique hors du champ de saisie de texte d'un modificateur
- Suggérer de réinstaller le Plugin Pack lorsque le fournisseur de découverte n'est pas compatible
- Avertir l'utilisateur que les changements non sauvegardés seront perdus en quittant l'édition d'une tâche
- Bloquer l'utilisation des attributs discovery.credentials dans les modificateurs (à l'exception des Macro)
- Traduction de l'affichage des conditions et affichage d'une version grammaticalement correcte des opérateurs de comparaison

### 21.04.0

- Les modificateurs *Association* se nomment désormais *Property*.
- Possibilité de lier les hôtes découverts à des groupes d'hôtes, soit déjà existants, soit créés à la volée.
- Possibilité de lier les hôtes découverts à des catégories d'hôtes, soit déjà existants, soit créés à la volée.
- Possibilité de lier les hôtes découverts à des sévérités d'hôtes (déjà existantes).
- Les modificateurs de type *Property*, *Host group*, *Host category* et *Macro* supportent la concaténation.
- Changement de comportement pour aligner l'UX sur celle de la page de *Statut des ressources* : 
    - Cliquer sur la ligne d'une tâche fait désormmais apparaître le panneau latéral de paramétrage de la tâche, et non plus les résultats de la tâche.
    - Cliquer sur la flèche qui apparaît sur la ligne d'une tâche lorsqu'on y passe la souris permet d'accéder aux résultats de la tâche de découverte, c'est à dire afficher les hôtes découverts.

## Centreon Plugin Packs Manager

### 21.04.1

`Release date: December 10, 2021`

#### Bug fixes

- Fixed a bug that prevented the description of the Plugin Packs from being displayed when the user's UI language was set to something other than EN or FR
- Fixed installation of Plugin Packs with similar names

#### Security fixes

- [Packaging] Remove .gitignore files

### 21.04.0

- Compatibility with Centreon 21.04

## Centreon License Manager

### 21.04.1

Release date: `December 30, 2021`

#### Bug fixes

- Fixed getting fingerprint on Safari

#### Security fixes

- Packaging, remove .gitignore files

### 21.04.0

- Compatibility with Centreon 21.04

## Centreon Anomaly Detection

### 21.04.2

Release date: `December 22, 2021`

#### Bugfixes

- Fixed an issue that caused the Anomaly Detection services to lose their graphs when they were renamed

### 21.04.1

`September 30, 2021`

#### Bugfixes

- Do not suggest anomaly thresholds metrics
- Fixed Gorgone cron.d definition
- Fixed access to suggestion page with non admin account
- Fixed anomaly detection's stream connector crashes with no apparent error in broker logs
- Fixed error in cron perl script
- Fixed generation of services based on metric from a Meta Service
- Script: Do not try to send data to SAAS if the service does not exist

### 21.04.0

- Compatibility with Centreon 21.04
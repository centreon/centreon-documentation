---
id: centreon-commercial-extensions
title: Extensions Commerciales
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne les **extensions
commerciales** de Centreon.

> Il est important de mettre à jour en utilisant la documentation adéquate de
> mise à jour et de lire attentivement les notes de mise à jour afin d'être au
> courant de changements qui pourraient impacter votre usage ou votre plateforme
> ou des développements spécifiques que vous auriez fait.

Pour faire des demandes d'évolutions ou reporter des bugs sur les extensions
commerciales, veuillez contacter le support.

## Centreon MAP release notes

### 20.04.4

* Sauvegarder une Geo View sur un Widget Custom View MAP était impossible dû à l'absence du bouton "Sauvegarder"
* Partager les métriques de statistiques d'usage entre le serveur MAP et le Central en HTTPS échouait
* Créer des liens en utilisant l'API REST peut maintenant recourir aux propriétés 'bendpoints', 'displayValue' et 'displayPercent'
* Ajouter des ressources Centreon lors de la création d'un Widget Output par l'API REST est maintenant possible
* Installer MAP Studio lors d'une nouvelle installation échouait à cause de la configuration du back-up automatique

### 20.04.3

* Filtre sur le nom complet des cartes et geoviews sur la page d'accueil
* Correction de l'accès aux images Centreon à partir du serveur Map

### 20.04.2

* Il est désormais possible de configurer le nombre de chiffres à afficher après la virgule sur les liens de métriques dans les vues standards
* Mise à jour de Leaflet en version [1.6.0](https://leafletjs.com/2019/11/17/leaflet-1.6.0.html)
* Mise à jour des intéractions avec Mapbox suite à la mise à jour de leurs API et leurs styles [voir la documentation](https://docs.mapbox.com/help/troubleshooting/migrate-legacy-static-tiles-api/)
* Correction d'un problème affectant la première arrivée sur les widgets Centreon Map ou la page `Supervision > Map` après la mise à jour en 20.04.0 (ou >=). Il fallait rafraîchir plusieurs fois la page pour que cela fonctionne, ce n'est plus le cas.
* Correction d'un problème affectant les tooltips des activités métier qui utilisent les nouvelles méthodes de calcul
* (widget) Correction d'un bug affectant la sauvegarde
* La surcharge de couleur de métrique d'un graphe  dans le client lourd est maintenant pris en charge dans le web.
* Lors de métriques de status de services dont l'hôte est dans un statut différent de OK, les liens sont maintenant de la même couleur que le client lourd

### 20.04.1

* Mise à jour de SpringBoot en version 2.3.0 (Tomcat 9.0.35) ([CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-9484))

### 20.04.0

* Simplification du packaging: la dépendance à Tomcat a été retirée, les logs
sont désormais dans `/var/log/centreon-map/` et le service  s'appelle
`centreon-map` (*systemctl restart centreon-map*). Suivez la [procédure de mise
à niveau](../graph-views/upgrade.html).
* Mode d'installation silencieux: il est possible de fournir des variables au
script d'installation plutôt que de passer par le mode interactif
* La licence est désormais gérée sur le serveur Central, comme pour les autres
extensions
* [API] Gestion des metaservice
* [API] Simplification de l'authentification
* [API] Les ressources sont désormais manipulées vis l'ID réel de la ressource
et non l'ID interne
* Il est possible de choisir l'arrondi à prendre en compte pour le label des
liens

## Centreon BAM release notes

### 20.04.5

#### Bugfixes

* Sélectionner les filtres "Indisponible" ou "Indisponible et dégradé" dans les préférences d'un widget BAM ne renvoyait aucun résultat
* Lier une Business Activity à un Remote Server échouait avec un code erreur 500
* Lier une Business Activity à un Remote Server causait l'affichage d'un doublon sur le Central
* Installer BAM forçait la traduction anglaise des labels "Unreachable" and "Unknown" dans la page "Resources Status"
* Ajouter des Indicateurs à des Business Activities en utilisant l'import SSV échouait


### 20.04.4

#### Bugfixes

* Les filtres n'étaient pas conservés lorsque la page de supervision était
  rafraîchie
* Les activités métiers ne pouvaient pas être liées à un Remote Server
* Correction de la pagination quand le nombre de ligne par page était
  modifié ou lors de l'utilisation de la recherche
* Certains paramètres n'étaient pas sauvegardés dans le formulaire des
  activités métiers

#### Security fixes

* Mise à jour de la librairie Moment.js pour corriger une vulnérabilité
  aux attaques ReDOS

### 20.04.3

* Gestion de la compatibilité avec HTTP2
* Correction d'un bug affectant le paramètre "Display only Top level BA" du widget de listing des activités métier
* Ajout d'une bulle d'aide lors du choix de la gestion des plages de maintenance planifiées au niveau des activités métier

### 20.04.2

* Les seuils ayant pour valeur "0" sont désormais correctement affichés dans les différentes pages de configuration et de supervision
* Le fil d'ariane de la configuration amène désormais à la bonne page
* Des erreurs SQL n'apparaîssent plus lorsqu'un utilisateur sauvegarde les préférences générales de Centreon BAM
* Correction de la pagination de la page des indicateurs
* Correction du tooltip affichant la règle booléenne et son statut dans l'arbre d'impact
* Correction diverses sur le français
* Correction du bouton d'aide sur le seuil critique lors de la configuration d'une activité métier
* Amélioration des noms de paramètre d'héritage de plage de maintenance planifiée
* Amélioration de la gestion de la license

### 20.04.1

* La méthode de calcul par défaut est maintenant "Worst" lorsque vous créez une activité métier
* Configuration d'une activité métier: il est désormais possible de ne configurer qu'un seuil Warning
* Reporting: les plages horaires autres que 24x7 sont désormais correctement gérées dans les graphiques et tableaux
* Amélioration de l'affichage des seuils "null" dans les différentes pages
* Widget: gestion des méthodes de calcul worst/best/ratio

### 20.04.0

* Ajout de nouvelles méthodes de calcul: Worst, Best et Ratio
* Il est désormais possible d'ignorer l'indicateur dans le calcul lorsque
l'indicateur est en plage de maintenance planifiée
* Toutes les pages de configuration & temps réelle ont été mise à jour pour
gérer ces nouvelles méthodes de calcul

## Centreon MBI release notes

### 20.04.3

* Correction des problèmes liés aux caractères accentués
* Correction de l'erreur au lancement du script de diagnostic dûe au mode strict MYSQL
* Gestion des caractères accentués lors de l'importation des données
* [rapport] Amélioration de la lisibilité des noms des activités métiers sur bv-ba-availabilities-1

### 20.04.2

* Gestion de la compatibilité avec le mode HTTP2
* [rapport] Amélioration du rapport "Poller-Performance" en supprimant la section "Current load average" car inutile et non performante

### 20.04.1

* La replanification immédiate d'un job avançait la date d'exécution de plusieurs jours
* La prévisualisation des logos est à nouveau fonctionnelle
* Corrections de traduction dans certains rapports

### 20.04.0

* Gestion de la compatibilité avec Centreon 20.04

## Centreon Auto Discovery release notes

### 20.04.6

#### Bugfixes

- [Service Discovery] Cannot recreate deleted rules when reinstalling Pack
- [Host Discovery] Possible to add host with missing properties
- [Host Discovery] Check for illegal characters when creating hosts
- [Host Discovery] Incoherent paging when using search
- [Host Discovery] Proxy password input field value is visible

#### Enhancements

- [Host Discovery] Create services when adding hosts

### 20.04.5

#### Bugfixes

- [Host Discovery] Fields are not mandatory when editing credentials
- [Host Discovery] Monitoring mapper does not use infinity scroll to list all
  monitoring servers
- [Host Discovery] Job edition retrieves default proxy when none was set
- [Host Discovery] Error when editing a job and monitoring server doens't exist
  anymore
- [Host Discovery] Incoherent paging information in listings
- [Host Discovery] Next button not available at wizard's step 2 when changing
  provider
- [Host Discovery] Disable next button when mappers are not yet loaded in wizard

#### Enhancements

- [Host Discovery] Do bulk insert in temporary table when listing job's result

### 20.04.4

#### Bugfixes

- [Host Discovery] Impossible to list all monitoring servers in job
  creation/edition
- [Host Discovery] Cannot find local monitoring server when having 10+ Pollers
- [Host Discovery] Broken display when reaching job result page
- [Host Discovery] Wizard "Next" actions broken when using "Enter" key
- [Host Discovery] Failed to insert data in temporary table due to null/undef
  values
- [Host Discovery] Impossible to save job when provider doesn't need credentials
- [Host Discovery] Fix some wordings and cases
- [Service Discovery] Error when duplicating a rule

#### Enhancements

- [Host Discovery] Make filters more efficient in jobs listing
- [Host Discovery] Invert default sorting on "Creation Date" column

### 20.04.3

#### Enhancements

- [Host Discovery] Save of job not possible if no modification

### 20.04.2

> Known issues:
>
> - You might encounter route definition issue when accessing to Host Discovery
>   jobs listing. This is due to Symfony cache not beeing refreshed with the
>   right routes at update.
>
>   To solve this, execute the following commands on the Central server:
>
>   ```shell
>   cp /usr/share/centreon/www/modules/centreon-autodiscovery-server/routes/CentreonAutoDiscovery.yaml.wait /usr/share/centreon/www/modules/centreon-autodiscovery-server/routes/CentreonAutoDiscovery.yaml
>   sudo -u apache /usr/share/centreon/bin/console cache:clear
>   ```

#### Enhancements

- [Host Discovery] Better handle forms testing in Host Discovery wizard
- [Host Discovery] Enhance error render for jobs

#### Bugfixes

- [Service Discovery] Unable to run Service Discovery since 20.04.1
- [Host Discovery] Some words are not translated in french
- [Host Discovery] Use $rg API directive to search in providers listing
- [Host Discovery] Remove bad characters in the JSON result in Host Discovery
- [Host Discovery] Mapper Monitoring - "From job" setting does not take job
  monitoring server

### 20.04.1

#### Enhancements

- [Host Discovery] Job with 0 discovered items redirects to empty job details

#### Bugfixes

- [Host Discovery] Overlapping text when configuring job with default proxy
- [Service Discovery] Use direct connection to Poller when having Remote Server
  is ignored

### 20.04.0

Redesign hosts discovery with a new wizard to add discovery job:

  - Better credentials management
  - Possibility to define from where the discovery will be made
  - New *mappers* system and preview of result

The *mappers* system is a feature to map discovered items value with a
configuration value:

  - **association**: allows you to map the value of an attribute of a discovered
    resource with a property in the Centreon configuration (on a condition or
    not)
  - **macro**: allows you to map the value of an attribute of a discovered
    resource with a custom macro (on a condition or not)
  - **template**: allows to selected the template to apply (on a condition or
    not)
  - **monitoring**: allows to select the monitoring server which will monitor
    the discovered resource (on a condition or not)

## Centreon Plugin Pack Manager release notes

### 20.04.1

  - Drop legacy table not used since PPM version 2.1.0 (PR #100)

### 20.04.0

  - Improve management of errors during Plugin Packs installation process
  - The procedures for installing Plugin Packs are now hosted on the official
    Centreon documentation

## Centreon License Manager release notes

### 20.04.1

- Manage unlink platform from previous IMP trial to access to IT-100 free etition.

### 20.04.0

Remove `Administration > Extensions > Subscription` menu to manage IT Edition
subscription from `Administration > Extensions > Manager` menu:

  - Add a button to add a Centreon IT Edition subscription
  - Add a button to view a Centreon IT Edition subscription

Licenses for products linked to Centreon IT and Business Editions online
subscriptions are now automatically downloaded.

## Centreon Anomaly Detection

### 20.04.4

#### Bugfixes

- [ACL] Issue with service anomaly is part of ALL acl and specific ACL

### 20.04.3

#### Enhancements

- [ceip] Add statistics for anomaly

#### Bugfixes

- [configuration] Centreon db configuration name hard coded
- [configuration] No notification_period generated
- [lua] Avoid using forbidden label

### 20.04.2

#### Bugfixes

- [configuration] Can't change "Enable change of status" when editing form
- [configuration] Remove mandatory fields which are not mandatory

### 20.04.1

#### Enhancements

- [configuration] Manage ACL
- [lua] Automatically reloads filter files if changed

#### Bugfixes

- [core] Remove version in uri to connect to saas
- [history] Select correct metric to forward
- [history] Avoid useless newline character
- [lua] Typo fixed
- [lua] New error case on service_id checked

### 20.04.0

First version allowing to monitor the detection of anomalies using floating thresholds.

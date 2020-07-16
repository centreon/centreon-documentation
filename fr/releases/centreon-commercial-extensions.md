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

### 20.04.3

#### Enhancements

- Save of job not possible if no modification

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

- Better handle forms testing in Host Discovery wizard
- Enhance error render for jobs

#### Bugfixes

- Unable to run Service Discovery since 20.04.1
- Some words are not translated in french
- Use $rg API directive to search in providers listing
- Remove bad characters in the JSON result in Host Discovery
- Mapper Monitoring - "From job" setting does not take job monitoring server

### 20.04.1

#### Enhancements

- Job with 0 discovered items redirects to empty job details

#### Bugfixes

- Overlapping text when configuring job with default proxy
- Use direct connection to Poller when having Remote Server is ignored by
  Service Discovery

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


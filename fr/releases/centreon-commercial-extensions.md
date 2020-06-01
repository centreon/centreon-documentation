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

## Centreon MAP

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

## Centreon BAM

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

## Centreon MBI

### 20.04.1

* La replanification immédiate d'un job avançait la date d'exécution de plusieurs jours
* La prévisualisation des logos est à nouveau fonctionnelle
* Corrections de traduction dans certains rapports

### 20.04.0

* Gestion de la compatibilité avec Centreon 20.04

## Centreon Auto Discovery

### 20.04.1

#### Enhancements

- Client on 0 items redirects to empty job details
- Sort host discovery listing

#### Bugfixes

- Overlapping text when configuring job with default proxy
- Some words are not translated in french
- Use $rg API directive
- Remove bad characters in the json result in host discovery
- Check use remote proxy definition to run discovery in service discovery

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

## Centreon Plugin Pack Manager

### 20.04.1

  - Drop legacy table not used since PPM version 2.1.0 (PR #100)

### 20.04.0

  - Improve management of errors during Plugin Packs installation process
  - The procedures for installing Plugin Packs are now hosted on the official
    Centreon documentation

## Centreon License Manager

### 20.04.1

- Manage unlink platform from previous IMP trial to access to IT-100 free etition.

### 20.04.0

Remove `Administration > Extensions > Subscription` menu to manage IT Edition
subscription from `Administration > Extensions > Manager` menu:

  - Add a button to add a Centreon IT Edition subscription
  - Add a button to view a Centreon IT Edition subscription

Licenses for products linked to Centreon IT and Business Editions online
subscriptions are now automatically downloaded.



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

*Sortie le 22 avril 2020*

#### Nouvelles fonctionnalités

**Nouveau packaging**

Le packaging et le service du serveur Centreon Map ont été simplifiés et la
dépendance avec Tomcat a été retirée.

Les logs sont maintenant dans `/var/log/centreon-map/` et le service à manipuler
est désormais `centreon-map` (*systemctl restart centreon-map* par exemple)

**Mode d'installation**

Il est désormais possible d'installer Centreon Map en mode "silencieux" en plus
du mode "interactif" actuel.

**Licence sur le serveur Central**

Le système de licensing a été simplifié. La license de Centreon Map se situe
maintenant sur le serveur Central permettant des installation & mise en place de
license facilitée.

Pas d'inquiétude, la mise à jour reste compatible avec une license positionnée
sur le serveur Map (cas pour toutes les versions < 20.04.0)

Si vous le souhaitez et pour anticiper des futures mises à jour, vous pouvez
demander au Support une nouvelle license puis l'uploader dans `Administration >
Extension > Manager`

## Centreon BAM

### 20.04.0

Manage compatibility with Centreon 20.04

#### Centreon MBI

### 20.04.0

Manage compatibility with Centreon 20.04

## Centreon Auto Discovery

### 20.04.0

Redesign the discovery of the hosts:

- New page to select provider
- New page to define access parameters
- Possibility to select the poller which run the discovery
- New page to select additional  parameters
- Add a page to define mappers and show the result preview

The Mappers is a technology to map discovered items value with a configuration value:

- **association**: Allows you to map the value of a property of a discovered resource with a field in the Centreon configuration (on a condition or not)
- **macro**: Allows you to map the value of a property of a discovered resource with a custom macro (on a condition or not)
- **template**: Allows to selected the template of of to apply (on a condition or not)
- **monitoring**: Allows to select the poller which will monitor the discovered resource (on a condition or not)


## Centreon Plugin Pack Manager

- Improve management of errors during Plugin Packs installation process
- The procedures for installing Plugin Packs are now hosted on the official Centreon documentation

### 20.04.0

## Centreon License Manager

### 20.04.0

Remove "Administration > Extensions > Subscription" menu to manage IT Edition subscription from "Administration >
Extensions > Manager" menu:

- Add a button to add a Centreon IT Edition subscription
- Add a button to view a Centreon IT Edition subscription

Licenses for products linked to Centreon IT and Business Editions online subscriptions are now automatically downloaded.

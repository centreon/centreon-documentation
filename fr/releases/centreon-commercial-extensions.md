---
id: centreon-commercial-extensions
title: Extensions Commerciales
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne les **extensions commerciales** de Centreon.

> Il est important de mettre à jour en utilisant la documentation adéquate de mise à jour et 
> de lire attentivement les notes de mise à jour afin d'être au courant de changements qui pourraient 
> impacter votre usage ou votre plateforme ou des développements spécifiques que vous auriez 
> fait.

Pour faire des demandes d'évolutions ou de bug sur les extensions commerciales, veuillez contacter le support.

## Centreon MAP

### 20.04.0

*Released April, 22  2020*

#### New features

**Nouveau packaging**

Le packaging et le service du serveur Centreon Map ont été simplifiés et la dépendance avec Tomcat a été retirée.

Les logs sont maintenant dans `/var/log/centreon-map/` et le service à manipuler est désormais `centreon-map` 
(*systemctl restart centreon-map par exemple*)

**Mode d'installation**

Il est désormais possible d'installer Centreon Map en mode "silencieux" en plus du mode "interactif" actuel.

**License en Central**

Le système de licensing a été simplifié. La license de Centreon Map se situe maintenant sur le serveur Central
permettant des installation & mise en place de license facilitée. 

Pas d'inquiétude, la mise à jour reste compatible avec une license positionnée sur le serveur Map (cas pour toutes 
les versions < 20.04.0)

Si vous le souhaitez et pour anticiper des futures mises à jour, vous pouvez demander au Support une nouvelle license
puis l'uploader dans `Administration > Extension > Manager`

## Centreon BAM

### 20.04.0

Manage compatibility with Centreon 20.04

#### Centreon MBI 

### 20.04.0

Manage compatibility with Centreon 20.04
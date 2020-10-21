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

### 20.10.0

- Compatibilité avec Centreon 20.10

#### Serveur plus rapide pour les cartes complexes

Centreon Map dispose maintenant en parrallèle du serveur actuel, d'un
serveur nouvelle génération. Il est encore en phase expérimentale et
n'est donc pas installé par défaut.

Celui-ci a été pensé pour être plus performant, plus léger et optimisé
pour le chargement et le calcul de données temps réél. Pour en savoir
plus sur ce nouveau serveur, référez vous à la
[note de version 20.10](../graph-views/release-notes.html)

## Centreon BAM release notes

### 20.10.0

- [Configuration] Mise à jour du style des pages *Activités métiers*
  et *Vues métiers*

## Centreon MBI release notes

### 20.10.0

- Compatibilité avec Centreon 20.10

## Centreon Auto Discovery release notes

### 20.10.0

> Référez vous à la [Configuration du module Gorgone](../monitoring/discovery/administration.html#configuration-du-module-Gorgone)
> pour vous assurer que la configuration correspond aux prérequis minimaux.

> Si une découverte est effectuée sur un Remote Server ou un Poller,
> assurez-vous que le serveur utilise les derniers composants 20.10.

> Sur un Remote Server, le module Autodiscovery peut être désinstallé depuis
> le menu `Administration > Extensions > Gestionnaire` afin que de ne
> pas générer d'erreurs inutiles dans les logs de Gorgone.

#### Host Discovery

L'assistant de découverte d'hôte permet désormais de planifier vos découvertes
de plusieurs manières : annuelle, mensuelle, quotidienne et même
toutes les x heures ou minutes.

Les tâches de découverte planifiées peuvent être suspendus et reprise à
tout moment.

Le résultat de la découverte peut également être traité automatiquement pour
ajouter, désactiver et, si nécessaire, réactiver les hôtes dans la
configuration.

Si vous décidez d'ajouter manuellement les hôtes à partir de la page de
résultats de la tâche, la règle d'association peut maintenant être
modifiée et enregistrée à partir de cette page pour répondre à vos besoins
en appliquant la règle directement sur le résultat.

Les nouveaux modificateurs *d'exclusion* et *d'inclusion* vous aideront à
décider quels hôtes sont censés être ajoutés dans la configuration, et ceux
qui doivent être désactivés ou activés.

Jetez un oeil à cet exemple pour bien comprendre leurs impacts:
[Mettre à jour votre configuration dynamiquement](../monitoring/discovery/hosts-discovery.html#mettre-a-jour-votre-configuration-dynamiquement)

#### Service Discovery

La découverte de service utilise maintenant Gorgone pour exécuter les plugins
de découverte, et par conséquent le système de communication de Gorgone et
non plus des connexions SSH autonomes.

## Centreon Plugin Packs Manager release notes

### 20.10.0

- Compatibilité avec Centreon 20.10

## Centreon License Manager release notes

### 20.10.0

- Compatibilité avec Centreon 20.10

## Centreon Anomaly Detection

### 20.10.0

- Compatibilité avec Centreon 20.10

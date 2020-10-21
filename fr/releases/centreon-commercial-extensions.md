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
- Le système de licence est entièrement géré sur le serveur central Centreon, il n'y en a plus du côté du serveur Map.

#### Serveur plus rapide pour les cartes complexes

Cette version est axée sur la création d'un nouveau serveur MAP Centreon (nom de code **"NG "** pour "nouvelle génération"), qui a été conçu pour être plus puissant, plus rapide et plus léger.

Pour permettre l'évolution de ce serveur, il est en **phase expérimentale** pour les clients souhaitant l'activer, car il n'est pas installé par défaut.

Côté Web, tout est adapté, un nouveau champ de saisie est apparu dans les paramètres du module pour entrer la nouvelle IP du serveur Map NG, et un bouton de choix permet de passer de l'un à l'autre.

  - Administration \> Extensions \> Gestionnaire

 > **Attention** : tout l'environnement NG est en lecture seule. Pour permettre d'incrémenter progressivement les évolutions en fonction des commentaires des utilisateurs.

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
> le menu `Administration > Extensions > Gestionnaire` afin de ne
> pas générer d'erreurs inutiles dans les logs de Gorgone.

#### Host Discovery

L'assistant de découverte d'hôte permet désormais de planifier vos découvertes
de plusieurs manières : annuelle, mensuelle, quotidienne et même
toutes les x heures ou minutes.

Les tâches de découverte planifiées peuvent être suspendues et reprises à
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

---
id: traces-use-cases
title: Cas d'usage
description: "Usages courants des traces : trouver les goulets d'étranglement, remonter à la source d'une erreur, cartographier les services, évaluer un déploiement."
---

Les traces servent principalement à comprendre et à améliorer vos systèmes. Voici les cas d'usage les plus courants.

## Identifier les goulots d'étranglement

[Une trace découpe une requête en spans](concepts.md#quest-ce-quune-trace) répartis entre services, bases de données et appels externes : vous voyez exactement quelle étape est lente. « La validation de la commande prend 3 s » devient « l'appel à l'API de paiement prend 2,4 s, la requête SQL 0,4 s ». Plus besoin de deviner ni de fouiller dans les logs.

## Diagnostiquer les erreurs en cascade lors d'un incident

Lorsqu'une alerte se déclenche, les traces vous permettent de suivre la requête en échec jusqu'au service, à l'endpoint ou à la dépendance où l'erreur est réellement apparue, et pas seulement là où elle s'est manifestée. C'est indispensable lorsqu'une défaillance en entraîne d'autres en aval.

## Relier une erreur de log au contexte complet de sa requête

Une ligne de log comme **ERROR: payment declined** apparaît dans Log Management. [Le **trace_id** de ce log ouvre directement la trace complète](exploring.md#passer-dun-log-à-sa-trace) : appels en amont, services impliqués, attributs de la requête (utilisateur, tenant, version, région). Sans les traces, un log est une donnée isolée. Avec elles, il raconte toute l'histoire. Dans Log Management, l'intégration native rend ce passage transparent pour les clients existants.

## Cartographier les dépendances réelles entre services

Agrégées sur de nombreuses requêtes, [les traces produisent une carte à jour des appels entre services](exploring.md#graphe-des-services), et non le schéma d'architecture qui n'a pas été modifié depuis six mois. C'est utile pour évaluer la portée d'un changement avant de l'appliquer, ou pour repérer des dépendances inattendues en production.

## Mesurer l'impact d'un déploiement ou d'une nouvelle version

Comparez la latence et le taux d'erreur des traces avant et après un déploiement, ou entre une version canary et une version stable. Confirmez ou écartez une régression en quelques minutes au lieu de plusieurs heures. Dans Log Management, [définissez manuellement deux groupes de traces](exploring.md#comparer-des-groupes-de-traces) et comparez leurs p50/p95/p99 côte à côte.

## Repérer les schémas de code inefficaces

Un endpoint interroge la base de données 47 fois au lieu d'une seule (problème N+1), déclenche des avalanches de nouvelles tentatives ou exécute l'un après l'autre des appels qui pourraient être parallélisés. Ces schémas sont invisibles dans les métriques et noyés dans les logs. Dans Log Management, vous les repérez manuellement dans la [vue en cascade des spans (waterfall)](concepts.md#la-vue-en-cascade-dune-trace) : aucune configuration n'est nécessaire, il suffit d'ouvrir la trace.

## Superviser les API externes et les dépendances tierces

Les spans des appels sortants montrent précisément l'effet des fournisseurs externes (paiement, authentification, API cloud) sur la latence et la fiabilité de votre service. Mesurez leurs temps de réponse réels, détectez les timeouts récurrents et vérifiez s'ils respectent leurs SLA.

## Prouver qu'un correctif a vraiment fonctionné

Après un correctif, [comparez objectivement les traces d'avant et d'après](exploring.md#comparer-des-groupes-de-traces) : p50/p95 par opération, taux d'erreur, fréquence du schéma problématique. Dans Log Management, il suffit de configurer manuellement une comparaison de groupes de traces avant/après. Vous obtenez ainsi des preuves concrètes, faciles à partager lors des revues et des post-mortems.

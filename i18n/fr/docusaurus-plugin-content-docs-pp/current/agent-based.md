---
id: agent-based
title: Connecteurs à base d'agent
description: "Découvrez les différents types de connecteurs à base d'agent, de l'agent CMA à NSClient++ et NRPE, et ce qui les distingue."
---

Les connecteurs à base d'agent se répartissent en plusieurs types.

## Agent CMA (Centreon Monitoring Agent)

L'agent de Centreon. Récemment développé pour remplacer les agents NSClient++ et le protocole NRPE, il présente plusieurs avantages : de meilleures performances et une sécurité renforcée par défaut (chiffrement TLS, jeton d'authentification). Il est important de préciser que CMA propose une supervision par contrôles passifs. Les connecteurs qui l'utilisent portent généralement le suffixe « CMA » (par exemple Windows CMA, Hyper-V 2012 CMA).

## NSClient++ NRPE

Ces connecteurs collectent les métriques et les statuts via l'agent NSClient++ et son serveur NRPE intégré (principalement pour Windows).

## NSClient++ RestAPI

Ces connecteurs utilisent l'agent NSClient++, mais communiquent via son API REST au lieu de NRPE (par exemple Microsoft Exchange NSClient RestAPI).

## NRPE / NRPE4

Le protocole NRPE standard, principalement pour les serveurs Linux (par exemple Linux NRPE4). NRPE4 utilise la version 4 du protocole NRPE, plus récente, et remplace le connecteur NRPE3, désormais obsolète.

> Centreon recommande de migrer les installations NSClient++ et NRPE vers l'agent CMA. L'ensemble des connecteurs NSClient++ et NRPE existants ont désormais un équivalent CMA.

## Résoudre les problèmes des connecteurs à base d'agent

* Voir la section [**Contrôles NRPE** de notre page de résolution des problèmes](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#contrôles-nrpe).
* La section [**Problèmes communs**](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#problèmes-communs) peut aussi vous aider.

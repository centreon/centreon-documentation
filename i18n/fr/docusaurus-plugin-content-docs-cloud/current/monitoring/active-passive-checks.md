---
id: active-passive-checks
title: Contrôles actifs vs contrôles passifs
description: "Différence entre contrôles actifs et passifs, leurs méthodes de collecte, et comment les choisir ou les combiner"
---

Un contrôle est une opération qui détermine le [statut](../alerts-notifications/concepts.md) d'une ressource, et peut produire des [métriques](./metrics.md) (données de performance). Le résultat d’un contrôle met à jour la ligne correspondant à la ressource dans la page **Statut des ressources**.
Un contrôle peut être effectué soit par le moteur de supervision (contrôle actif), soit par l’équipement lui-même (contrôle passif).

## Contrôles actifs

Un contrôle actif est initié par le moteur de supervision, qui déclenche lui-même la collecte de la donnée, à intervalles réguliers définis dans la configuration (à l'exception des vérifications forcées, exécutées à la demande en dehors de cet intervalle).

Ce mode est utilisé par l'ensemble des connecteurs de supervision, à l'exception des connecteurs de type [CMA](../cma/cma.md). Les connecteurs peuvent utiliser typiquement les méthodes de collecte suivantes :

* ICMP
* SNMP
* Requêtes HTTP
* Requêtes vers une base de données

## Contrôles passifs

Un contrôle passif est initié par l'équipement lui-même (ou par une source externe soumettant un résultat en son nom), qui envoie sa donnée sans sollicitation du moteur de supervision, soit à intervalles réguliers, soit lors d'un événement spécifique.

Dans Centreon Cloud, ce mode est utilisé par les connecteurs de type CMA: l'agent envoie ses données à intervalles réguliers.

## Stratégie de supervision

Le choix entre contrôle actif et contrôle passif dépend de plusieurs facteurs :

* Exigences de sécurité : certaines politiques imposent ou excluent l'un des deux modes.
* Contraintes techniques, notamment le cloisonnement réseau.
* Volonté d'être agentless ou non : si l'on a la main sur l'équipement, on peut y installer un agent et fonctionner en contrôle passif ; si l'équipement est une boîte noire, on privilégiera le contrôle actif.

Lorsque les besoins de supervision ne sont pas entièrement couverts par un seul mode, il est possible de combiner actif et passif sur un même équipement.

Ordre de mise en œuvre recommandé :

1. Supervision système active
2. Supervision matérielle active (dans le cas d'un serveur physique par exemple)
3. Supervision applicative active via des protocoles applicatifs (HTTP, connexion à des bases de données...)
4. Complément par de la supervision passive.

---
id: observability
title: Centreon Log Management et l'observabilité
description: Le rôle de Centreon Log Management dans une stratégie d'observabilité
---

## Qu'est-ce que l'observabilité?

L'observabilité, c'est la capacité à comprendre ce qui se passe dans un système informatique en temps réel, même lorsqu'il est complexe ou distribué. Elle repose sur un ensemble d'évènements contextualisés d'origines variées, provenant de systèmes pouvant être dynamiques.

* Dans Centreon Log Management, un évènement est une entrée de log.
* contextualisé : le log indique quelle est sa source (nom du service, environnement, etc).
* d'origines variées : Les logs proviennent de tous types d'équipements et d'applications. Par exemple, les données techniques peuvent être croisées avec des données de vente.

L'observabilité répond à deux grands types de besoins :

* **La réaction** : pour les équipes opérationnelles, l'observabilité est un outil de réaction rapide. Elle permet de détecter un symptôme, comprendre ce qui se passe réellement, et réaliser une analyse de cause racine (root cause analysis) pour corriger le problème. L'objectif est de réduire l'impact des incidents et de restaurer le service le plus vite possible.
* **La prise de décision** : pour un manager, l'observabilité sert à disposer d'une vision globale et fiable de l'état du système. Grâce aux tableaux de bord, il peut suivre les tendances, évaluer la performance, anticiper les risques et prendre des décisions éclairées pour améliorer les services ou optimiser les ressources.

## En quoi l'observabilité est-elle complémentaire de la supervision?
<!--* La supervision dit "il y a un problème", l'observabilité permet de trouver d'où celui-ci vient et pourquoi il est apparu.-->

* La supervision détecte les problèmes qu'on peut anticiper, car elle repose sur des métriques déclarées dans l'outil et des alertes basées sur des seuils définis grâce à une analyse préalable. Elle répond à la question : "Est-ce que le système fonctionne comme prévu ?".
* À l'inverse, l'observabilité permet de découvrir et prendre en charge des problèmes imprévus, même dans des environnements dynamiques. Dans Log Management, elle consiste en l'analyse de logs détaillés et contextualisés. Elle permet d'investiguer des problèmes inconnus, dans un système complexe (microservices, events, queues…).
* Une fois les problèmes inconnus diagnostiqués via Log Management, vous pouvez intégrer leur détection dans votre outil de supervision (ou directement dans Log Management).

Exemple :

1. Je constate un incident dans Centreon Infra Monitoring, mon outil de supervision, mais celui-ci ne me permet pas d'en trouver la cause.
2. Dans Log Management, je cherche la root cause du problème, en explorant le contexte du log concerné.
3. Une fois que j'ai compris la cause du problème, je peux créer une alerte dans mon outil de supervision (ou une [règle d'alerte](alerts.md) dans Log Management) afin de le détecter dans le futur.

<!--### Exemple 1 — Supervision classique d'un serveur

* CPU > 90 % → alerte
* RAM > 80 % → alerte
* Espace disque < 10 % → alerte
* Service HTTP renvoie un code ≠ 200 → alerte

Si quelque chose d'imprévu se passe, mais qu'aucun seuil n'a été défini, la supervision ne verra rien.-->



<!--### Exemple 1 — Latence élevée : supervision vs observabilité

* Supervision : détecte que "latence > 300 ms".

* Observabilité : permet de répondre à :
   * quel microservice cause la latence ?
   * quelle requête précise déclenche le problème ?
   * sur quel pod / instance ?
   * avec quel paramètre d'entrée ?

→ Grâce aux traces distribuées, on voit que la latence vient d'un appel interne à un service de facturation.-->

## Résumé simple

| Aspect | Supervision | Observabilité |
| --- | --- | --- |
| Finalité | Savoir qu'il y a un problème | Comprendre pourquoi et où |
| Nature | Prévue à l'avance (seuils connus) | Explorable, ouverte |
| Données |	Métriques simples | Logs enrichis |
| Pertinent pour | Systèmes simples | Microservices, event-driven, cloud |
| Capacité | Détecter |	Diagnostiquer |

<!--
durée de rétention : mois pour les logs (coût de stockage)
métrique = années-->

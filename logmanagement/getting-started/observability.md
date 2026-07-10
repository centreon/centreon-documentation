---
id: observability
title: Centreon Log Management and observability
---

## What is observability?

Observability is the ability to understand what is happening in an IT system in real time, even when it is complex or distributed. It is based on a set of contextualized events from various sources, originating from systems that may be dynamic.

* In Centreon Log Management, an event is a log entry.
* Contextualized: the log indicates its source (service name, environment, etc.).
* From various sources: Logs come from all types of devices and applications. For example, technical data can be cross-referenced with sales data.

Observability meets two main types of needs:

* **Response**: for operational teams, observability is a rapid response tool. It allows them to detect a symptom, understand what is really happening, and perform a root cause analysis to correct the problem. The goal is to reduce the impact of incidents and restore service as quickly as possible.
* **Decision-making**: for managers, observability provides a comprehensive and reliable overview of the system's status. Dashboards enable them to track trends, evaluate performance, anticipate risks, and make informed decisions to improve services or optimize resources.

## How does observability complement monitoring?
<!--* La supervision dit "il y a un problème", l'observabilité permet de trouver d'où celui-ci vient et pourquoi il est apparu.-->

* Monitoring detects problems that can be anticipated, as it relies on metrics declared in the tool and alerts based on thresholds defined through prior analysis. It answers the following question: "Is the system working as expected?"
* On the other hand, observability allows you to discover and address unexpected problems, even in dynamic environments. In Log Management, it means analyzing detailed and contextualized logs. This allows you to investigate unknown problems in a complex system (microservices, events, queues, etc.).
* Once unknown issues have been diagnosed using Log Management, you can integrate their detection into your monitoring tool (or directly in Log Management).

Example:

1. I notice an incident in Centreon Infra Monitoring, but I can't find enough information to determine the cause.
2. In Log Management, I investigate the relevant logs and explore their context to identify the root cause of the problem.
3. Once the cause is understood, I can create an alert in Centreon Infra Monitoring (or an [alert rule](alerts.md) in Log Management) to detect the issue automatically in the future.

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

## Simple summary

| Aspect | Monitoring | Observability |
| --- | --- | --- |
| Purpose | Know that there is a problem | Understand why and where it occurs |
| Nature | Predefined (known thresholds) | Exploratory, open-ended |
| Data | Simple metrics | Enriched logs |
| Relevant for | Simple systems | Microservices, event-driven, cloud |
| Capability | Detect | Diagnose |



<!--
durée de rétention : mois pour les logs (coût de stockage)
métrique = années-->
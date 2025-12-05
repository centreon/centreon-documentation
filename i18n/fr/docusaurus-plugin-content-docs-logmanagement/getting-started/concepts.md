---
id: concepts
title: Concepts
---

## What does Centreon Log Management do?

Voici les principales fonctionnalités de Centreon Log Management :

1. CLM [collecte](../collector/collector.md) et centralise des logs provenant de diverses sources (serveurs, applications, bases de données, dispositifs réseau, etc). Ces logs contiennent des informations détaillées sur les évènements, les erreurs et les performances de votre système informatique.

3. CLM permet d'analyser ces logs en temps réel ou a posteriori, via des résumés générés automatiquements, des filtres, des requêtes Lucene ou des tableaux de bord, afin de détecter des anomalies, des erreurs, des incidents de sécurité ou des comportements inattendus. Pour en savoir plus, voir la page [**Use cases**](use_cases.md).

4. CLM envoie des notifications en cas d'alertes ou de seuils critiques dépassés.

5. CLM permet de stocker des logs de façon sécurisée sur de longues périodes (pour la conformité, la sécurité, ou pour l'analyse historique).

## What is OpenTelemetry and how is it used by Centreon Log Management?

"Telemetry" is when a system sends information about what it's doing to another system so people can see and understand it.
OpenTelemetry is a protocol for sending that kind of data. Centreon Log Management can read logs in OpenTelemetry format.

* You can send OpenTelemetry data directly to Centreon Log Management.
* If a device doesn’t support OpenTelemetry, use an OpenTelemetry Collector to convert the data. The collector can run as an agent on the device or in gateway mode to receive and forward logs to Centreon Log Management.

## What does a log entry in OpenTelemetry format look like?

json.

A log entry in OpenTelemetry format always has a timestamp and a service name (for the service that created the log). Usually, it also shows the log's severity: DEBUG, INFO, WARN, ERROR, or FATAL. All the other information in the log depends on how you have configured your OpenTelemetry Collector.

```json
{
  "attributes": {
    "event.id": 16394,
    "event.record.id": 226535,
    "event.task": "0",
    "process.pid": 0
  },
  "body": {
    "message": "La migration de bas niveau hors connexion a réussi."
  },
  "observed_timestamp_nanos": 1763648218788360200,
  "resource_attributes": {
    "event.provider.guid": "{E23B33B0-C8C9-472C-A5F9-F2BDFEA0F156}",
    "event.provider.name": "Microsoft-Windows-Security-SPP",
    "host.name": "CNTR-PORT-A157",
    "os.name": "Microsoft Windows 10 Pro",
    "os.type": "windows",
    "os.version": "22H2",
    "service.namespace": "application",
    "service.version": "1.0.0"
  },
  "service_name": "windows-event-log",
  "severity_number": 9,
  "severity_text": "INFO",
  "timestamp_nanos": 1763648218609230600,
  "trace_flags": 0
}
```

## How is an OpenTelemetry Collector configured?

An OpenTelemetry Collector has three main components that are executed one after the other:

* **Receivers** ingest data. They accept logs in various formats and from various sources (e.g., OTLP, syslog, etc).
* **Processors** let you filter, transform, or enrich data before it leaves the collector.
* **Exporters** send the logs in OpenTelemetry format to Centreon Log Management. The corresponding exporter is configured using the general config.yaml file of the collector.

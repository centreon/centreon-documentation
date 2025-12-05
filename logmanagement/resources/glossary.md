---
id: glossary
title: Glossary of Centreon Log Management terms
---

## Alert rule

A set of conditions that indicate when a problem is occurring. When these conditions are met, an alert event is created and shown on the **Alerts > Alert events** page.

## Alert event

The record generated when an alert rule condition is met. The alert event is given a status based on the criteria you've defined. Alert events are shown on the **Alerts > Alert events** page. Possible alert statuses are:

* CRITICAL
* ERROR
* WARNING
* OK
* UNKNOWN

## Service

What produced the log. Examples: Apache, HTTPD, MySQL, Syslog, Postgres, Grafana... This information is provided by the **ServiceName** OpenTelemetry attribute.

## service_namespace [TBC]

A label for a set of services. Example: **e-commerce site.**

## Custom attributes

Custom attributes are key–value pairs that you add yourself to logs to provide extra context that isn't included by default. They let you describe business-specific, application-specific, or domain-specific details that OpenTelemetry doesn't define in its standard attribute set.

## Severity

Across most tools and platforms, logs are presented using log levels like INFO or ERROR — the format end users are most familiar with. In OpenTelemetry, this information is managed using two attributes: [SeverityNumber](https://opentelemetry.io/docs/specs/otel/logs/data-model/#field-severitynumber) (the severity's ID) and SeverityText (the severity's label). One **SeverityText** value corresponds to several **SeverityNumbers**.

In CLM, all queries are based on the **SeverityNumber** attribute. However, the labels shown always follow the OpenTelemetry standard. If your device uses different labels in its **SeverityText** attribute, those labels will be ignored. This prevents duplicates or inconsistent entries in the severity list - you'll only ever see logs with a **DEBUG**, **INFO**, **WARN**, **ERROR**, or **FATAL** severity.

Here is the range of severity numbers that CLM takes into account (the descriptions are those of the OpenTelemetry documentation):

| SeverityNumber range | Name | Description |
| --- | --- |--- |
| 5-8	| **DEBUG**	| A debugging event. |
| 9-12	| **INFO**	| An informational event. Indicates that an event happened. |
| 13-16	| **WARN**	| A warning event. Not an error but is likely more important than an informational event. |
| 17-20	| **ERROR**	| An error event. Something went wrong. |
| 21-24	| **FATAL**	| A fatal error such as application or system crash. |

Some tools may not include a severity number at all in their logs. Any log entry received without a severity number is given by CLM the severity number **0** (**UNSPECIFIED**).

## Event

### Log event

A log event is a log entry.

See also [Alert event](#alert-event).

## Telemetry

"Telemetry" is when a system sends information about what it's doing to another system so people can see and understand what's going on.

---
id: glossary
title: Glossary of Centreon Log Management terms
---

## Alert event/alert status

The record generated when an alert rule condition is met. The alert event is given a status based on the criteria you've defined. Alert events are shown on the **Alerts > Alert events** page. Possible alert statuses are:

* <span style={{color:'#ff4a4a'}}>**CRITICAL**</span>
* <span style={{color:'#fd9b27'}}>**ERROR**</span>
* <span style={{color:'#ffca34'}}>**WARNING**</span>
* <span style={{color:'#88b917'}}>**OK**</span>
* <span style={{color:'#bcbdc0'}}>**UNKNOWN**</span>

## Alert rule

A set of conditions that indicate when a problem is occurring. When these conditions are met, an alert event is created and shown on the **Alerts > Alert events** page.

## Custom attributes

Custom attributes are key–value pairs that you add yourself to logs to provide extra context that isn't included by default. They let you describe business-specific, application-specific, or domain-specific details that OpenTelemetry doesn't define in its standard attribute set.

## Event

### Log event

A log event is a log entry.

Not to be confused with [Alert events](#alert-eventalert-status).

## Service

What produced the log. Examples: Apache, HTTPD, MySQL, Syslog, Postgres... This information is provided by the **service_name** attribute.

<!-- ## service_namespace [TBC]

A label for a set of services. Example: **e-commerce site.** -->

## Severity

Across most tools and platforms, logs are presented using log levels like INFO or ERROR — the format end users are most familiar with. In OpenTelemetry, this information is managed using two attributes: [SeverityNumber](https://opentelemetry.io/docs/specs/otel/logs/data-model/#field-severitynumber) (the severity's ID) and SeverityText (the severity's label). One **SeverityText** value corresponds to several **SeverityNumbers**.

Typical severity texts are <span style={{color:"#4a8c6f"}}>**TRACE**</span>, <span style={{color:"#1ebeb3"}}>**DEBUG**</span>, <span style={{color:"#1588d1"}}>**INFO**</span>, <span style={{color:"#ffca34"}} >**WARNING**</span>, <span style={{color:"#fd9b27"}}>**ERROR**</span>, or <span style={{color:"#ff4a4a"}}>**FATAL**</span>.

Here is the range of severity numbers that Log Management takes into account (the descriptions are those of the OpenTelemetry documentation):

| SeverityNumber range | Name | Description |
| --- | --- |--- |
| 1-4| <span style={{color:'#4a8c6f'}}>**TRACE**</span>	| A fine-grained debugging event. |
| 5-8	| <span style={{color:'#1ebeb3'}}>**DEBUG**</span>	| A debugging event. |
| 9-12	| <span style={{color:'#1588d1'}}>**INFO**</span>	| An informational event. Indicates that an event happened. |
| 13-16	| <span style={{color:'#ffca34'}}>**WARNING**</span>	| A warning event. Not an error but is likely more important than an informational event. |
| 17-20	| <span style={{color:'#fd9b27'}}>**ERROR**</span>	| An error event. Something went wrong. |
| 21-24	| <span style={{color:'#ff4a4a'}}>**FATAL**</span>	| A fatal error such as application or system crash. |

Some tools may not include a severity number at all in their logs. Any log entry received without a severity number is given by Log Management the severity number **0** (the severity is <span style={{color:'#999999'}}>**UNSPECIFIED**</span>).

## Telemetry

"Telemetry" is when a system sends information about what it's doing to another system so people can see and understand what's going on.

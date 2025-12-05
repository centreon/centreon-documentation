---
id: lucene-queries
title: Lucene queries
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Refer to the [Lucene official documentation](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html) for a full description of the syntax.

Use Lucene queries in the [**Log explorer** page](explore-analyze.md) , in [alert rules](alerts.md) or in [dashboards](dashboards.md) to filter your data. Lucene queries let you query OpenTelemetry attributes. The attributes you will be able to query will be the ones [retrieved by your OpenTelemetry Collector, as you configured it](./collector/collector.md). See [What does a log entry in OpenTelemetry format look like?](./getting-started/concepts.md#what-does-a-log-entry-in-opentelemetry-format-look-like) for an overview of the main attributes.

In the **Log explorer** page, do not include time parameters in your queries: time periods are defined using the list in the top right corner.

## Examples of simple Lucene queries

Select all logs with a [severity number](resources/glossary.md#severity) strictly above 20, i.e. logs with the FATAL severity.

```text
severity_number:[20 TO *]
```

Select all FATAL logs concerning a specific service ("payments-api"). Use the [boolean operator AND](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html#AND).

```text
severity_number:[20 TO *] AND service.name:"payments-api"
```

Select all FATAL logs for the payments-api service, coming from hosts in a specified IP range. Use [wildcards](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html#Wildcard%20Searches).

```text
severity_number:[20 TO *] AND service.name:"payments-api" AND host.ip:192.168.1.*
```

Select all FATAL logs for the payments-api service, coming from hosts in a specified IP range, except 192.168.1.10. Combine AND and [NOT](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html#NOT) boolean operators.

```text
severity_number:[20 TO *] AND service.name:"payments-api" AND host.ip:192.168.1.* AND NOT host.ip:"192.168.1.10"
```

In these logs, find logs whose message body includes the word "failed". (Bear in mind that Lucene is case-sensitive).

```text
SeverityNumber:[20 TO *] AND service.name:"payments-api" AND host.ip:192.168.1.* AND NOT host.ip:"192.168.1.10" AND body.message:*failed*
```

Instead of looking exactly for the word "failed', find logs whose message body includes terms like "failed". Use [fuzzy matching](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html#Fuzzy%20Searches).

```text
SeverityNumber:[20 TO *] AND service.name:"payments-api" AND host.ip:192.168.1.* AND NOT host.ip:"192.168.1.10" AND body.message:failed~
```

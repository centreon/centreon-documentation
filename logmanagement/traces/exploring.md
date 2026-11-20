---
id: traces-explore
title: Exploring and analyzing traces
description: "Search traces in the trace explorer, jump between logs and their traces, map service dependencies, and compare trace groups across two time periods."
---

## Trace explorer

The trace explorer works the same way as the [log explorer](../log-explorer.md): you use the same [query syntax](../query-syntax.md), [query builder and filters](../log-explorer.md#searching-for-logs) to search and analyze your traces.

Click a trace to display the waterfall view. In this view, click a span to display its details below the waterfall. The **Status** field shows whether the operation completed successfully.

### Go from a log to its trace

In the **Log explorer**, when a log shows an error, the trace it belongs to gives you the full context: what happened before and after, in every service involved.

1. In the log explorer, open a log.
2. In the details panel, go to **Attributes** > **Other fields**. If the log has a `trace_id` field, it was emitted during the execution recorded by that trace.
3. Open the **Trace** tab to see the waterfall of the whole execution.
4. To open the trace in the trace explorer, click the `trace_id` at the top of the panel.

### Go from a trace to logs

1. In the trace explorer, in the details panel of a trace, click a span in the waterfall view.
2. Scroll down: in the **Logs** tab, a list of related logs is displayed. Click to display them in Log explorer.

## Service graph

**Traces > Service graph**.

The service graph automatically builds a map of your services from your trace data, showing how they call each other. It is generated dynamically: every connection found in your traces appears on the map, so it stays up to date as your architecture changes, with no manual configuration.

Use the service graph to:

* **Visualize dependencies between services:** see at a glance which services call which, including dependencies you might not know about.
* **Identify the source of a problem:** when an issue occurs, quickly spot which service is failing and which services it affects.

## Compare trace groups

**Traces > Compare groups**.

The **Compare trace groups** feature lets you run the same query over two different time periods and compare the results side by side.

For example, after a deployment you can compare traces from before and after the release to check whether it affected performance.

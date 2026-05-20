---
id: explore-analyze
title: Exploring and analyzing logs
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

According to your [use case](./getting-started/use-cases.md), you’ll either filter the log explorer for high-severity logs or rely on alert events for more complex situations.

> To see logs in Centreon Log Management, you first need to [configure an OpenTelemetry collector on each host you want to receive logs from](./collector/collector.md).

## Using the Log explorer page

The **log explorer** page allows you to search and filter logs so you can investigate issues and perform root-cause analysis.

* Use the **Time period** list at the top right of the page to select the range of logs to display.
* Use the search bar to filter your logs using [queries](query-syntax.md). You can enrich your search with additional context (attributes) to refine the results and identify the root cause of problems.
* Expand logs to see the details of their attributes.
* Navigate your data using the timeline: click and drag your mouse over the graph to select a new time range.
<!--filters-->

## Using the Alert events page

On the [**Alert events** page](alerts.md#viewing-all-alert-events), [alert events](./resources/glossary.md#alert-eventalert-status) show what's happening in real time and allow you to react quickly to incidents. (To get alert events, you need to create [alert rules](alerts.md) first.)

<!-- ### Generating a summary of your logs

Once the **Log explorer** page only shows the logs you want, generate a summary of the displayed logs to see what they can tell you: click the **Summarize logs** button to the right of the search bar.
Log summaries are a list of the main events detected for a period:

- Critical errors and failures
- Security-related events
- Unusual system behavior
- Important updates or configuration changes -->

## Using dashboards

Create [dashboards](dashboards.md) to view and explore your data visually. Dashboards display both current information and historical data, allowing you to examine trends and understand changes over time.

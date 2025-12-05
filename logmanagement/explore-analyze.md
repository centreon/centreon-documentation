---
id: explore-analyze
title: Exploring and analyzing logs
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Using the Alert events page

On the [**Alert events** page](alerts.md#viewing-all-alerts), [alert events](./resources/glossary.md#alert-event) show what's happening in real time and allow you to react quickly to incidents.

## Using dashboards

Create [dashboards](dashboards.md) to view and explore your data visually. Dashboards display both current information and historical data, allowing you to examine trends and understand changes over time.

## Using the log explorer

The **Log Explorer** page allows you to search and filter logs so you can investigate issues and perform root-cause analysis.

* Use the **Time period** list at the top right of the page to select the range of logs to display.
* Use the search bar to filter your logs using [Lucene queries](lucene-queries.md). You can enrich your search with additional context (attributes) to refine the results and identify the root cause of problems.
* Navigate your data using the timeline.
<!--filters-->

### Generating a summary of your logs

Once the **Log explorer** page only shows the logs you want, generate a summary of the displayed logs to see what they can tell you: click the **Summarize logs** button to the right of the search bar.

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

### Time period

* Use the **Time period** list at the top right of the page to select the range of logs to display.
* Navigate your data using the timeline: click and drag your mouse over the graph to select a new time range.

### Searching for logs

Use the search bar to filter your logs. The search bar has two modes (use the switch on the right to select the one you want):

* In query mode, you type your search directly using the [query syntax](query-syntax.md).
* In **Query builder** mode, blocks lets you build your search step by step - you add a block, then you select attribute names and values and select syntax elements like AND, OR, and NOT.

   * Click the plus sign in the search bar to add a blank block.
   * Add a pre-filled block automatically by clicking the plus sign to the left of an attribute value in the **Filters** panel.

   ![image](./assets/log_explorer_full.png)

In both cases, you need to click the **Search** button to launch the search.

### Detailed log info

Click a log to see all related information in the **Log details** panel, including the raw log entry.

* You can open several logs in the panel.
* The search bar will inspect attribute names and values.

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

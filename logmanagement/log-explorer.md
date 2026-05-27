---
id: log-explorer
title: Using the log explorer
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **log explorer** page allows you to search and filter logs so you can investigate issues and perform root-cause analysis.

## Time period

* Use the **Time period** list at the top right of the page to select the range of logs to display.
* Navigate your data using the timeline: click and drag your mouse over the graph to select a new time range.

## Searching for logs

Use the search bar to filter your logs. The search bar has two modes (use the switch on the right to select the one you want):

* In query mode:

   * Type your search directly using the [query syntax](query-syntax.md).
   * Click the **Ask AI** button to the right of the search bar. Write a query with your own words in the field that appears, then click **Apply and search**. This will generate a query with the correct syntax.

      > AI responses may be inaccurate or incomplete. Always check the results.

      ![image](assets/ask-ai.png)
     
* In **Query builder** mode, blocks lets you build your search step by step - you add a block, then you select attribute names and values and select syntax elements like AND, OR, and NOT.

   * Click the plus sign in the search bar to add a blank block.
   * Add a pre-filled block automatically by clicking the plus sign to the left of an attribute value in the **Filters** panel.

      ![image](./assets/log_explorer_full.png)

In both cases, you need to click the **Search** button to launch the search.

## Detailed log info

Click a log to see all related information in the **Log details** panel, including the raw log entry.

* You can open several logs in the panel.
* The search bar will inspect attribute names and values.

## Rearranging columns

* Use the **Search and add column** button at the top right of the results to choose which columns/attributes you want to display.

   ![image](assets/column-management.png)
  
* The **Time** column is always displayed first and cannot be unpinned. You can pin one other column in second position.

<!-- ## Generating a summary of your logs

Once the **Log explorer** page only shows the logs you want, generate a summary of the displayed logs to see what they can tell you: click the **Summarize logs** button to the right of the search bar.
Log summaries are a list of the main events detected for a period:

- Critical errors and failures
- Security-related events
- Unusual system behavior
- Important updates or configuration changes -->

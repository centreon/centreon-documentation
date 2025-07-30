---
id: mbi-intro
title: Introduction to MBI
---

## What is Centreon MBI?

Centreon Monitoring Business Intelligence (MBI) is an extension that is used to generate reports on host groups, host categories and service categories. MBI requires users to [prepare their data](preparing-data.md) carefully so that reports can be generated.
We highly recommend you read our documentation to avoid running into issues. You can start with our [concepts](concepts.md) page.

> Centreon MBI is a Centreon **extension** that requires a valid [license](../administration/licenses.md). To
> purchase one and retrieve the necessary repositories, contact
> [Centreon](mailto:sales@centreon.com).

## What does MBI do?

MBI runs "jobs" to collect data from host groups, host categories and service categories, and generate reports. This allows for an overview of the performance of the selected resources over a given period of time. These reports can be configured to be generated once or on a regular basis (i.e. once per day, week, month...). This will help you keep track of your IT environment with monthly uptime reports, weekly infrastructure performance summaries...

![image](../assets/reporting/guide/available-reports/Hostgroups-Rationalization-Of-Resources-1_1.png)

Note that MBI only takes into account [HARD statuses](../alerts-notifications/concepts.md#status-types) for its outputs.

## What are the possible outputs formats?
  
* MBI generates reports in different formats, such as CSV or PDF.
* Not all reports can be exported to every format: check our [list of available reports](available-reports/available-reports.md) to learn more about the specifics of each report.
* By default, these reports can be downloaded from the **Reports view** page, but they can also be configured to be sent to specific people when generated.
* Report data can also be displayed in your Centreon [custom views](../alerts-notifications/custom-views.md) using dedicated widgets.

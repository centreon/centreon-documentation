---
id: mbi-intro
title: Introduction to MBI
---

## What is Centreon MBI?

The Monitoring Business Intelligence (MBI) is a Centreon extension that is used to generate reports on host groups. MBI requires users to [prepare their data](preparing-data.md) carefully or the reports will not be generated.
We highly recommend you read our documentation to avoid running into issues. You can start with our [concepts](concepts.md) page.

> Centreon MBI is a Centreon **extension** that requires a valid [license](https://docs.centreon.com/docs/administration/licenses/). To
> purchase one and retrieve the necessary repositories, contact
> [Centreon](mailto:sales@centreon.com).

## What does MBI do?

MBI runs "jobs" to collect data from host groups and generate reports. This allows for an overview of the performance of the selected host groups over a given period of time. These reports can be configured to be generated once or on a regular basis (i.e. once per day, week, month...). This will help you keep track of your IT environment with monthly uptime reports, weekly infrastructure performance summaries... 

![image](../assets/reporting/guide/available-reports/Hostgroups-Rationalization-Of-Resources-1_1.png)


Note that MBI only takes into account [hard statuses](https://docs.centreon.com/docs/alerts-notifications/concepts/) for its outputs.

## What are the possible outputs formats?
  
* MBI generates reports in different formats such as CSV or PDF. 
* Not all reports can be exported to every format, check our [available reports list](available-reports.md) to learn more about the specifics of each report.
* By default, these reports are to be visualized from Centreon but can be configured to be sent to specific people when generated. 
* Reports can also be consulted on your Centreon dashboard using dedicated widgets.



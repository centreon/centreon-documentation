---
id: mbi-intro
title: Introduction to MBI
---

The report generating capabilites of Centreon rely on the **Monitoring Business Intelligence (MBI)** extension.

> Centreon BAM is a Centreon **extension** that requires a valid [license](../administration/licenses.md). To
> purchase one and retrieve the necessary repositories, contact
> [Centreon](mailto:sales@centreon.com).

## What is Centreon MBI?

Centreon MBI is a Centreon extension that is used to generate reports about groups of hosts. MBI requires the user to respect specific settings and procedures or the reports will not be generated.
We highly recommend you read our documentation to avoid running into issues.

## What does MBI do?
MBI runs "jobs" to collect data from host groups and generate reports that allow for an overview of the performance of the host groups over a given period of time. These reports can be configured to be generated once or on a regular basis (i.e. once per day, week, month...) to let you keep track of your it environment with monthly uptime reports, weekly infrastructure performance summaries...

## What are the possible outputs?
MBI generates reports that can be exported to different formats such as CSV or PDF. Not all reports can be exported to every format, check our [available reports list](available-reports.md) to learn more about the specifics of each report.
By default, these reports are to be visualized from Centreon but can be configured to be sent to specific people when generated. They can also be consulted on your Centreon dashboard using dedicated widgets.



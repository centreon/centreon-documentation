---
id: introduction
title: Introduction to MBI
---

## What is Centreon MBI?

Centreon Monitoring Business Intelligence (MBI) is an extension that is used to generate reports on host groups, host categories and service categories. MBI requires users to [prepare their data](preparing-data.md) carefully so that reports can be generated.
We highly recommend you read our documentation to avoid running into issues. You can start with our [concepts](concepts.md) page.

> Centreon MBI is a Centreon **extension** that requires a valid [license](https://docs-next-int.centreon.com/docs/administration/licenses/).
> To purchase one and retrieve the necessary repositories, contact
> [Centreon](mailto:sales@centreon.com).

## What does MBI do?

Centreon MBI runs [jobs](concepts.md#jobs) to generate reports. MBI has more than 30 different ready-to-use templates (report "designs").

![image](../assets/reporting/first_page.png)

Reports address:

* Capacity planning and management
* Availability management
* SLA (Service Level Agreement) management
* Performance management.

 This allows for an overview of the performance of the selected resources over a given period of time. These reports can be configured to be generated once or on a regular basis (i.e. once per day, week, month...). This will help you keep track of your IT environment with monthly uptime reports, weekly infrastructure performance summaries...

## What kind of data can appear on the reports ?

Reports can display data about:
- Host groups
- Host categories
- Service categories
- Business views
- Business activities

Although data [must be organized into groups and categories](preparing-data.md#making-your-resources-available-to-mbi), some reports allow you to see the details of statuses and metrics for hosts and services.

MBI also creates reports on availability by converting checks into [events](concepts.md#event). Note that MBI only takes into account [HARD statuses](https://docs-next-int.centreon.com/docs/alerts-notifications/concepts/#status-types) when calculating availability.

Note that reports only contain data up to the previous day. The data for each day is [aggregated by the ETL the following day](how-mbi-works.md#phase-2-the-etl-is-launched-data-is-copied-to-mbi-and-aggregated).

## What are the possible output formats?
  
* MBI generates reports in different formats: PDF, CSV, XLSX, DOCX, PPTX, ODT, ODS, ODP.
* Not all reports can be exported to every format: check our [list of available reports](available-reports/available-reports.md) to learn more about the specifics of each report.
* By default, these reports can be downloaded from the **Reports view** page, but they can also be [configured to be sent to specific people when generated](reports-publication-rule.md).
* Report data can also be displayed in your Centreon [custom views](https://docs-next-int.centreon.com/docs/alerts-notifications/custom-views/) using dedicated [widgets](widgets.md).

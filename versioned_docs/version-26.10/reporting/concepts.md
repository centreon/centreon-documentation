---
id: concepts
title: MBI concepts
description: Key vocabulary and concepts used throughout Centreon MBI
---

MBI is an extension of Centreon with its own vocabulary and concepts. This section breaks down the key concepts to understanding Centreon MBI. Note that this section expects you to be familiar with the [regular Centreon vocabulary](../resources/glossary.md).

## Data retention

By default, [MBI retains the data](installation.md#etl-data-retention) for a limited amount of time. The amount of time depends on the type of data. This is configured in the **Reporting > Monitoring Business Intelligence >  General options** page, **Data retention options** tab. Data retention can also be completely disabled from there.

## ETL

The ETL obtains the raw data from the central server and transforms it to a format readable by MBI, it then stores it in the database where CBIS will retrieve it for generating the reports.

The MBI ETL is static, it does not automatically detect changes to its configurations outside of [its routine check the following morning](how-mbi-works.md#phase-2-the-etl-is-launched-data-is-copied-to-mbi-and-aggregated). For changes to be taken into account right away, [launch a rebuild](rebuilding-data.md).

## Dimension

In MBI, a dimension represents an axis of data analysis. MBI reports calculate data according to dimensions (but can present data with details of individual hosts or host groups, for example).

The list of dimensions present for each host and service is calculated by the ETL every day (script **dimension_builder.pl** launched at 4:30 a.m. by default).

The hosts and services taken into account by MBI (and thus included in the calculation of dimensions), are those selected in the **Reporting > Monitoring Business Intelligence > General options** page, on the **ETL options** tab, in the **Reporting perimeter selection** section.

## MBI ACL rules

To be able to [give users access to generated reports in the Centreon interface and/or to jobs](share.md), you must use MBI ACL rules (**Administration > ACL > Centreon MBI > ACL rules**). MBI ACL rules work as an intermediary between regular [Centreon ACLs](../administration/access-control-lists.md) and [job groups](#job-groups) as these two cannot be linked directly.

## Metrics

All [metrics](../monitoring/metrics.md) for each service are taken into account. For each metric, 5 statistics are calculated: average, minimum, maximum, first, last.

Make sure your services only have the necessary metrics, as this may have an impact on performance. You may also want to make sure MBI only takes into account a limited number of host groups, host categories and service categories.

## Event

In MBI, an event is a period of time associated with a status. It has a start date/time, an end date/time, and a status. Its purpose is to be able to calculate [availability](#availability).

Check results are converted into events by the central server every day at 3AM (**eventReportBuilder** script). Only checks in a HARD state are taken into account.

## Jobs

A job is a report definition. Running a job generates a report.

* Jobs can be performed immediately or be scheduled at a specified time and date.
* You can also decide if the job is to be run only once or if it should be run periodically.

## Job groups

Job groups determine [which non-admin users are allowed to see each generated report or edit the corresponding job](share.md).

* You create job groups using the **Reporting > Monitoring Business Intelligence > Job groups** page.
* For each job, you define which people will be able to see the report in the **Configuration** tab of the job (**Linked job groups** fields). A report will be visible to users that are linked to the selected job groups
* Please note that the data included in the report depends on the [rights on resources](../administration/access-control-lists.md#access-filters-on-resources) of the user who creates the job. It is the responsibility of the user creating the job to make sure that the resources included in the report are authorized for the users with which they want to share the report.

   Example: if **user 1** has rights on the **Paris** and **London** hosts, the report will contain data for **Paris** and **London**. If the report is shared with **user 2** who doesn't have rights on **London**, **user 2** will still be able to see the data for **London**, as the report has been generated this way.

## Report

End-result of a job. The data shown and the layout of the report is determined by the report design, which can be selected from our [catalog of available reports](available-reports/available-reports.md). You can also [create your own report designs using BIRT](report-development.md).

## CBIS user

Service user created automatically when the extension is installed. This user will generate reports. The CBIS user must be granted access to all resources using [the regular Centreon ACLs](../administration/access-control-lists.md) to function properly.

## Availability

The amount of time a host has spent in an "available" [status](../alerts-notifications/concepts.md#host-status), in the selected time period. Only [hard statuses](../alerts-notifications/concepts.md#status-types) are taken into account when calculating availability.

* For hosts: When calculating availability, only the time the host has spent in an UP or DOWN status is taken into account, not the time spent in an UNREACHABLE state or in downtime.
* For services: When calculating availability, only the time the service has spent in an "OK" or "Warning" status is taken into account, not the time spent in an UNKNOWN state or in downtime.

This means if a host or service spent the previous day as available 90% of the time and was in downtime the remaining 10%, it will show as 100% available in the reports.

## Publication rules

By default, a report is only available for download on **Reporting > Monitoring Business Intelligence > Report view**. [Publication rules](reports-publication-rule.md) allow a report to be sent out to specific users every time the corresponding job finishes running.

## Report designs

Templates for reports. There are over [30 different ready-to-use report designs](available-reports/available-reports.md) that determine the data that can be shown in the report and the ayout of the report. You can also [create your own report designs using BIRT](report-development.md).

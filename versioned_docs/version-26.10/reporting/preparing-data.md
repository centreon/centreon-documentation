---
id: preparing-data
title: Preparing data for report generation
description: "Prepare hosts, categories, and time periods before generating MBI reports"
---

## Making your resources available to MBI

For host/service availability and performance reports, the resources you want to see appear in reports must be organized into [host groups](../monitoring/groups.md#creating-a-host-group), [host categories](../monitoring/categories.md#hosts-category) and [service categories](../monitoring/categories.md#services-category).

- Each host that you want to see in reports must belong to at least one [host group](../monitoring/groups.md#creating-a-host-group) and one [host category](../monitoring/categories.md#hosts-category).
- Each service that you want to see in reports must belong to at least one [service category](../monitoring/categories.md#services-category).

The best way to link hosts to host categories and services to service categories is to use the **Linked host template/Linked service template** fields in the category creation form. This will mean less maintenance, as this will ensure that all future hosts that inherit from the template will be added to the category automatically (and you don't have to add them one by one manually as you create them).

* If the report you want to generate concerns only one resource, you still need to create a group/category containing only that resource.
* Make sure that all monitored resources return a status (for availability reports) and metrics (for performance reports).

## Creating the time periods you need

Every [job](concepts.md#jobs) uses a [time period](../monitoring/basic-objects/timeperiods.md) as a parameter: 24x7, workhours, non-workhours, etc... Only the data contained in the selected time periods will be included in the report.

We recommend you create all the custom time periods you need before you start configuring reports.

## Defining the scope of data for MBI

Only [data compiled by the ETL](how-mbi-works.md#phase-2-the-etl-is-launched-data-is-copied-to-mbi-and-aggregated) can be used in reports.
For perfomance reasons, it is recommended to limit the scope of data for MBI to what you want to see in reports as large amounts of data take more time to compile, and take up storage space.

Ideally, this should have been done as part of the installation process: see [Defining which data will be used by MBI](installation.md#defining-which-data-will-be-used-by-mbi). If you haven't already done so, go to **Reporting > Monitoring Business Intelligence > General options**, **ETL options** tab.

By default, the ETL is configured to compute availability and performance for all of your data: all host groups, host categories and service categories. If you don't want to see some of these groups and categories in your reports, uncheck **All group perimeters** and select only the data you want.

Select the time periods and the service categories you want (disk, ping, memory, traffic). This is also where you configure how precise you want the data statistics to be (i.e. calculated by month, day, hour...)

- An empty report may be generated if the ETL could not be executed, if there is a problem with the ETL configuration or there is no monitoring data for the resource (no status/metric are returned).
- The ETL is static: it does not automatically detect configuration changes on Centreon outside of its regular checks (scheduled for 4:30 a.m. by default). You must [launch a rebuild of the ETL](rebuilding-data.md) for new data/configuration to be taken into account immediately.
- If data has started being compiled for less than a month, it is possible to get gaps in reports that display data by month, or compare months between them.

## Making it possible to share reports

Generated reports can be [shared locally (via the Centreon interface)](share.md), or [published by email or to a server](reports-publication-rule.md). Before you [create a job](generating-reports.md#step-1-create-a-new-job), make sure you ave created the job groups or the publication rules you need.

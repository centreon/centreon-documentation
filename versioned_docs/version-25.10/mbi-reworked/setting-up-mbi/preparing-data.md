---
id: preparing-data
title: Preparing data for report generation
---

## Making your resources available to MBI

For hosts/services availability and performance reports, the resources you want to see appear in reports must be organized into [host groups](https://docs.centreon.com/docs/monitoring/groups/#creating-a-host-group), [host categories](https://docs.centreon.com/docs/monitoring/groups/#hosts-category) and [service categories](https://docs.centreon.com/docs/monitoring/groups/#services-category).

MBI requires you to use host groups, host categories and service categories. 
- Each host that you want to see in reports must belong to at least one host group and one host category. 
- Each service that you want to see in reports must belong to at least one service category. 

If the report you want to generate concerns only one resource, create a group/category containing only that resource.

Make sure that all monitored resources return a status (for availability reports) and metrics (for performance reports).

## Creating the time periods you need

Every job uses a [time period](https://docs.centreon.com/docs/monitoring/basic-objects/timeperiods/) as a parameter: 24x7, workhours, non-workhours, etc... 
Only the data contained in these time periods will be included in the report.

We recommend you create all the custom time periods you need before starting to configure reports.

## Defining the scope of data for MBI

Only [data compiled by the ETL](../using-mbi/how-mbi-works.md#phase-2-the-etl-is-launched-data-is-copied-to-mbi-and-aggregated) is available to be imported into MBI.
For perfomance reasons, it is recommended to limit the scope of data for MBI to what you want to see on reports as large amounts of data takes more time to compile.

To define the scope of the data used by MBI, go to **Reporting > Monitoring Business Intelligence > General options, ETL options** tab.

By default, the ETL is configured to compute availability and performance for all existings perimeters: host groups, hostcategories and servicecategories. If some perimeters are not mandatory, you can uncheck "All group perimeters" to select only desired perimeters.

Select the [perimeters](../concepts.md#report-perimeter) for the reports, the time periods and the service categories (disk, ping, memory, traffic). This is also where you configure how precise you want the data statistics to be (I.E. per months, days, hours...)


- An empty report may be generated if there is mismatch in the ETL configuration or there is no monitoring on the resource (no status/metric return)
- The ETL is static, it does not automatically detect configuration changes on Centreon outside of its regular checks (scheduled for 4:30 a.m. by default). You must launch a rebuild of the ETL for new data/configuration to be taken into account immediately.
- If data has started being compiled for less than a month, it is possible to get gaps in the generated report.

## Granting users access with ACLs

The user creating a job determines its perimeter while only seeing the resources their [ACLs](https://docs.centreon.com/docs/administration/access-control-lists/) allows them.
If needed, ask an admin to modify your ACL to add missing resources.

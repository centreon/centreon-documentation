---
id: preparing-data
title: Preparing data for report generation
---

## Making your resources available to MBI

For hosts/services availability and performance reports, the resources you want to see appear in reports need to be organized in [host groups](../monitoring/groups.md#creating-a-host-group), [host categories](../monitoring/categories.md#hosts-category) and [service categories](../monitoring/categories.md#services-category). 

For business activities and business views availability reports template, the resources you want to see appear in reports need to be organized in [business activities](../service-mapping/ba-management.md#business-activities-ba) and [business views](../service-mapping/ba-management.md#business-view-bv)

Notes:
- Be sure that all perimeters used by ETL are filled:
    - Each host group must be filled with at least one host
    - Each host category must be filled with at least one host or host template
    - Each service category must be filled with at least one service template
    - Each business activity must be linked with at least one business view
- Be sure that all desired resources are monitored by Centreon (pollers)
- Be sure that all monitored resources return status (for availability reports) and metrics (for performance reports)

### Time periods

Every job uses [time-period](../monitoring/basic-objects/timeperiods.md) as a parameter: 24x7, workhours, non-workhours, etc...

This defines the timeframes that should be included in the report.

If you need to create a custom timeperiod, go to  **Configuration > User > Time Periods** and create a new one following
[this procedure](../monitoring/basic-objects/timeperiods.md).


## Configuring MBI

Configuration of the ETL should be done shortly after installation and is normally done once. It is not necessary to change the configurations it for different types of reports and should only be done if you are [having issues](troubleshooting.md). 

Go to **Reporting > Monitoring Business Intelligence > General options**

### ETL options tab

Select the [perimeters](concepts.md#report-perimeter) for the reports, the time periods and the service categories (disk, ping, memory, traffic). This is also where you configure how precise you want the data statistics to be (I.E. per months, days, hours...)

By default, ELT is configured to compute availability and performance for all existings perimeters: host groups, hostcategories and servicecategories. If some perimeters are not mandatory, you can uncheck "All group perimeters" to select only desired perimeters.

Your regular monitoring and reports are linked: the host groups, host categories and service categories determine the visibility of the data in the report. So if you need to generate report on any resource, you have to be sure that :
- The resource (host/service) is yet monitored by Centreon
- The perimeter (hg,hc,sc) configuration is up to date and not empty 
- The perimeter is yet computed by ETL

> Notes:
> - It is possible to generate a report on a perimeter without data if there is mismatch in the ETL configuration or there is no monitoring on the resource (no status/metric return)
> - The ETL is static, it does not automatically detect configuration changes on Centreon outside of its regular checks (scheduled for 4:30 a.m. by default). You must launch a rebuild of the ETL for new data/configuration to be taken into account immediately.
> - If data has started being compiled for less than a month, it is possible to get gaps in the generated report.

## ACL Configuration

The user creating a job determines its perimeter while only seeing the resources their [ACLs](../administration/access-control-lists.md) allows them.
If needed, ask an admin to modify your ACL to add missing resources.

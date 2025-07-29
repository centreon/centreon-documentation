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

### Time period

Each time you create a new job , you will use "Time-period" parameter: 24x7, workhours, non-workhours, etc...
Time-period applied for each job report is used to considered only time needed for your reporting analysis depending your use case and your function.
For example:
- SRE team need to consider in their scope every hour applincation running, so for analyze the situation they need "24x7" timeperiod.
- DSI create an automatic shutdown of all internal servers at 7 PM and restarting at 7 A, so for analyze the situation they need "workhour" timeperiod
- Data team need to analyse nightly jobs than begin at 10 PM and can finished at 7 AM, so for analyze the situation, they need "non-workhours" timeperiod

If you need to use a specific timeperiod, go to  **Configuration > User > Time Periods** and create new one following
[this procedure](../monitoring/basic-objects/timeperiods.md).


## Configuring MBI

Configuration of the ETL should be done shortly after installation and is normally done once. It is not necessary to change the configurations it for different types of reports and should only be done if you are [havinng issues](troubleshooting.md). 

Go to **Reporting > Monitoring Business Intelligence > General options**

### ETL options tab

Select the perimeters for the reports, the time periods and the service categories (disk, ping, memory, traffic). This is also where you configure how precise you want the data statistics to be (I.E. per months, days, hours...)

By default, ELT is configured to compute availability and performance for all existings perimeters: host groups, hostcategories and servicecategories. If some perimeters are not mandatory, you can uncheck "All group perimeters" to select only desired perimeters.

There is consistency between supervision and reports, the host groups, host categories and service categories conditions the visibility of the data in the report. So if you need to generate report on any resource, you have to be sure than :
- Resource (host/service) is yet monitored by Centreon
- perimeter (hg,hc,sc) configuration is up to date and not empty 
- perimeter is yet computed by ETL

Notes:
- It is possible to generate a report job with a scope without data if there is mismatch ETL configuration or there is no monitoring on the resource (no status/metric return)
- The ETL is static; it does not automatically detect configuration changes on Centreon outside of its regular checks (scheduled for 4:30 a.m. by default). The user who updates their data must launch a rebuild of the ETL for the data to be taken into account immediately. Otherwise, we must wait until the next day for the latest changes to be taken into account.
- If there is less historical data than 1 month, it's possible to get gaps in the generated report

## ACL Configuration

### ACL Resources

For all non-admin user, during job report creation, you will provide some perimeters for your report. Remember that you will only see the resources you are entitled to.
If needed, ask your Centreon admin to modify your ACL resources and add missing resource.

### ACL menu

For all non-admin user, you will be subject to the menu ACL rule. In the case where you will not be able to see generated reports or job configuration, contact your Centreon admin to make sure you are in the acl mbi menu.

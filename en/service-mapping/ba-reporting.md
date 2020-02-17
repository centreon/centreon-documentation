---
id: ba-reporting
title: Report Business Activities
---

You can visualize, at any time, the evolution of historical data on the
reporting and log screens, and on performance graphs. These screens are
similar to those used on the Centreon server.

## Reporting

The reporting page to the \"Reporting \> Dashboard\" one on Centreon.
Select a BA to display operational availability, warning and critical
statistics for a given period:

![image](assets/service-mapping/guide/reporting.png)

You can export the data to a .csv file by clicking on the **Export in
CSV format** link.

## Logs

The **Logs** menu displays the evolution of the BA level over time along
with its KPI status when impacting the BA, for a given period. The
maximum historical day is *the last 30 days*.

Only changes in BA status are recorded: you cannot display the status of
KPIs at a specific point in time.

First, select the BA and the time period:

![image](assets/service-mapping/guide/log_param.png)

The **Display details** box shows the BA status on a growth curve.

This chart displays the evolution of the BA health level in a given time
frame. Click on each spike to display the KPIs impacting the BA.

![image](assets/service-mapping/guide/log_chart.png)

The table below details the KPI screen:

  **Column**       |  **Description**
  -----------------|----------------------------------------------------
  Key Performance Indicators |    KPI List
  KPI Type      |     KPI type (service, meta service or BA)
  Status | KPI status (Operational, Warning, Critical, Unknown)
  Impact     |        KPI impact weight on the BA
  In Downtime    |    Programming or no programming of downtime on the KPI at the time of calculation
  Check Time     |    Time during which the KPI was verified
  Output      |       KPI output message during the KPI check

## Force statistics calculation

Events & availability statistics are automatically calculated daily. In
case you modify the default reporting period, add an extra one or change
BV association, you may need to rebuild the previously calculated data.

To do so, run the following script::

    /usr/share/centreon/www/modules/centreon-bam-server/engine/centreon-bam-rebuild-events --all

It is also possible to rebuild a specific BA::

    /usr/share/centreon/www/modules/centreon-bam-server/engine/centreon-bam-rebuild-events --ba=<id of ba>

For more information regarding this script, run the following command::

    /usr/share/centreon/www/modules/centreon-bam-server/engine/centreon-bam-rebuild-events --help

If you are also using Centreon MBI and wish to use the updated data, run the following command on the reporting server: :

    /usr/share/centreon-bi/etl/importData.pl -r --bam-only

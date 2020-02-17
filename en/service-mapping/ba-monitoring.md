---
id: ba-monitoring
title: Monitore Business Activities
---

After adding, editing or deleting the BAs, KPIs and BVs the objects
linked to Centreon BAM, go to **Configuration \> Poller**, generate the
configuration files and push them to the Centreon central server.

After loading the configuration and checked the services linked to the
KPIs, the BA will be up to date and available under **Monitoring \>
Business Activity \> Monitoring**.

## Interpret real-time data

### Main page

A table on the main page lists all the essential information concerning
live status and health level of the BAs.

Non-admin users can only see the BAs associated with BVs linked to their
access group:

![image](assets/service-mapping/guide/mon_ba_list.png)

  Column        |  Description
  ------------------|-------------------------------------------
  Current Level      | Current level in %
  Business Activity |  Name of the BA
  Description     |    Description of the BA
  Duration      |      Duration of the current status
  Reporting Period  |  Default reporting period used for that BA

You can visualize the evolution of BA health level by hovering your
mouse over the name or description of the BA and a pop-up appears
displaying all the KPIs and status information.

![image](assets/service-mapping/guide/mon_mouse_over.png)

Click on the name of the BA to bring up a detailed live view.

### Detailed View

The detailed view is divided into seven parts:

![image](assets/service-mapping/guide/mon_detailed.png)

1.  List of KPIs that impact the BA level
2.  Table containing the BA health level and alert thresholds
3.  Tab containing the BA impact tree. You can open a sublevel, zoom in
    and out and move the tree.
4.  Tab containing the health level graph of the BA
5.  Tab containing a list of all KPIs.
6.  Dropdown list to change the BA
7.  Link to the reporting page.

The list of KPIs display real-time information on their status and also
their impact on the BA:

![image](assets/service-mapping/guide/mon_kpi_list.png)

The **Trend** tab panel displays four graphs -- daily, weekly, monthly
and annually showing the BA level and status over time:

![image](assets/service-mapping/guide/mon_trend.png)

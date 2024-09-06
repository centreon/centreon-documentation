---
id: reports
title: Centreon Reports Beta
---

Centreon Reports is a reporting solution available as a beta feature for Cloud users. You can create reports from the Centreon interface and view data directly in Grafana. Access to the Grafana instance is handled by Centreon and requires no installation. The resulting report is also ready to use and requires no configuration.

## Creating a report

1. In Centreon, go to **Reporting > Reports** to display the **Report list** page.

2. Click **Create a Report** to display the creation form.

3. Select a **Report template**:

   - **SLA_Template**: the report shows calculations based on the status of the resources (MTTR, MTRS, number of status changes...)
   - A report based on metrics will be released shortly.
   <!--- Metric_Template: le rapport présente des données agrégées relatives à des métriques (moyenne, max etc pendant une période donnée)-->

4. In the **Report properties** section, fill in the **Name** field. You can also add a description, which will be displayed in the card for this report in the list of reports.

5. Select **24x7** from the **Calculations based on time period** list. This means that all of the data (availability, number of events...) will be taken into account in the calculations.

<!--ça filtre les données utilisées pour faire les calculs (exemple si tu veux faire un calcul de taux de dispo sur working hours, les max les min, etc tout sera basé sur cette time period)-->

6. Select an **Aggregation period** (**Hourly** or **Daily**). This is the time unit that one data point in a graph will represent (**Hourly**: one data point represents an hour, **Daily**: one data point represents a day).

7. In the **Report scope** section:

   - Select a type of resource and refine your filter by selecting one or several resources. Click **Add filter** to refine your filter. If you select for instance a hostgroup, when you refine your filter, only the host categories that are included in this host group will be available.

   > The first resource type you select defines the type of status the report will display. If you select a host group, only the status of the hosts will be taken into account. If you want to display the status of services, select a service-related type of resource directly.
   <!-- For the **Metric_Template** template, select the **Metrics** you want to display.-->

   The **Resources preview** section displays a list of the resources you have selected. This is **not** a preview of your report.

8. Check your settings carefully: in Reports Beta, reports cannot be edited.

   > If the **Create** button is not available, check that you have defined all mandatory options.

9. Once the configuration is done, click **Create**. Your report appears in the **Report list** in a new card, with the status **In progress**.

   > The report takes a few minutes to generate. If it takes too long, refresh the page.

   Your report is now created and available to be displayed.

## Viewing reports in Grafana

1. Go to the **Report list** page that displays all the reports that have been created.

2. Click on the card corresponding to the report you want to display. It opens a new tab and displays your report in the Grafana interface. You may need to log in to Grafana using your [CIAM account](../ciam/ciam.md#what-is-centreon-ciam).

   You can define the time range of the report or its refresh rate by using the menus at the top right of the window.

## Deleting a report

You can delete a report from the **Report list** page: click the **trash** button at the bottom left of the card, then confirm the deletion. Deleting a report cannot be undone.

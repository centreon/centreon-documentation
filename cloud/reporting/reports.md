---
id: reports
title: Centreon Reports Beta
---

Centreon Reports is a reporting solution available as a beta feature for Cloud users. You can create reports from the Centreon interface and view data directly in Grafana.

## Creating a report

1. In Centreon, go to **Reporting > Reports** to display the **Report list** page.

2. Click **Create a Report** to display the creation form.

3. Select a **Report template**:
   - SLA_Template
   - Metric_Template

### Set the report properties

1. In the **Report properties section**, fill in the **Name** field. You can also add a description.

2. Set the **Calculations based on time period**:
   - 24x7

3. Set the **Aggregation period**:
   - Hourly
   - Daily

### Set the report scope

1. In the **Report scope** section, select a type of resource, then one or several resources.
2. Select the **Metrics**.
The **Resources preview** displays the resources you have selected.

3. Once the configuration is done, click **Create**.

> If the **Create** button is not available, this means you have not configured your report correctly.

Your report appears in the **Report list** in a new card, with the status **In progress**.

> The report takes a few minutes to generate. If it takes too long, refresh the page.

Your report is now created and available to be displayed.

### Delete a report

You can delete a report from the **Report list** page.

- Click the **trash** button at the bottom left of the card, then confirm the deletion.

## Viewing reports in Grafana

1. Go to the **Report list** page that displays all the reports that have been created.

2. Click on the card corresponding to the report you want to display. It opens a new tab and displays your report in the Grafana interface.

*[Add a screenshot of a beautiful report in Grafana]*

---
id: quickstart
title: Quickstart Guide
---

Using MBI to its full extent requires a lot of specific configuration. This topic helps you get a quick grasp of MBI, intentionally glossing over several aspects of the extension and leaving many settings in default configuration. A complete guide for [installing and configuring MBI](installation.md) as well as a complete guide for [generating reports](generating-reports.md) are also available.

## Configuration

Go to **Reporting > Monitoring Business Intelligence > General Options** 

1. In the **Scheduler options** tab, fill in the CBIS server IP address in the CBIS host field.

2. In the **ETL options** tab, determine the dimensions that will be taken into account for the generation of reports.

3. In the **Data retention options** tab, determine for how long should the data be kept before its deletion.

4. In the **Report Parameters** tab, determine the admin user that will grant access to CBIS to calculate data and show it.

5. In the **Reporting Widgets** tab, fill in the datawarehouse as well as the MySQL credentials that will grant access to the data necessary for widgets.

## Create the necessary groups and categories

MBI requires you to have host groups, host categories and service categories. Even if your the report you want to generate concerns only one host, MBI requires a host group to function and so you should create a host group containing only this one host to generate the report.

## Create a job

You will now create a job that will generate an immediate report
Go to **Reporting > Monitoring Business Intelligence > Jobs** and click on Add

1. In the **Configuration** tab, choose a name for the report and select one of the [available report designs](available-reports.md)

2. 

3. The **Report Parameters** tab's content depend on the report design so we cannot provide accurate step by step instructions. However note that all fields should be filled and fields that require you to move categories from left to right should have at least one categorie in the right side for each field.

4. 

5. 

6. 

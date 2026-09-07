---
id: introduction
title: Introduction to Centreon BAM
description: "Overview of Centreon Business Activity Monitoring (BAM) and how it correlates IT operations with business service performance"
---

The service mapping capabilities in Centreon rely on the **Centreon Business
Activity Monitoring (BAM)** extension.

## What is centreon BAM?

**Centreon Business Activity Monitoring (BAM)** helps ITSM and business
operation teams gain a common perspective to align IT with business. Based on
ITIL practices, it measures real-time IT operating vitals from
Centreon-monitored data to show crucial correlations to service performance.
Prioritizing and proactively managing IT operations and service delivery for
the required SLA becomes easier. Centreon BAM contributes to showing that IT counts for
business operations.

**Centreon BAM** uses an advanced Business Activities (BA) calculation engine
based on Key Performance Indicators.

Definitions:

  - **BA** - Business Activity
  - **BV** - Business View: a group of business activities.
  - **KPI** - Key Performance Indicator: the weighted indicator considered in the
    BA calculation.

> Centreon BAM can also be used [through its API](https://docs-api.centreon.com/api/centreon-bam/cloud/).

## Business Activity configuration

Centreon BAM's configuration interface lets you manage a whole business
activity from a single screen:

- **See the whole structure at a glance**: the Business Activity and all
  its indicators are displayed as a single tree, so you get a full picture
  of what's being monitored without jumping from screen to screen.

  ![image](../assets/service-mapping/bam-config-1.gif)

- **Edit every node in its context**: select any node in the tree to edit
  its calculation method, thresholds, or downtime inheritance directly,
  without switching menus.

  ![image](../assets/service-mapping/bam-config-2.gif)

- **Save all your changes at once**: make several changes across the tree,
  then save them together instead of one node at a time.

  ![image](../assets/service-mapping/bam-config-3.gif)

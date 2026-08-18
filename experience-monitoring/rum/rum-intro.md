---
id: rum-intro
title: What is Real User Monitoring?
description: How RUM captures 100% of real traffic without sampling
---

RUM lets you analyze the actual experience of users on your site in real time. RUM data captures 100% of real traffic to a site - meaning every time any user loads a page or clicks a link, a performance data point is recorded.

This is what makes it fundamentally different from [Synthetic Monitoring](../getting-started/synthetic-monitoring.md), which only tests a predefined set of pages or user journeys on a fixed schedule. With RUM, you don't choose what to measure in advance - the data naturally covers every page that users actually visit, weighted by how often they visit it.

![image](../assets/getting-started/rum-1.png)

## How does it work?

RUM works via [a lightweight, asynchronous tag added to the page](../installation/real-user-monitoring-installation.md), which sends data back to Centreon Experience Monitoring.

* It doesn't slow the user's browsing on the site.
* The data collected is purely technical (no personal identifiers), making it GDPR-compliant, and allows segmentation by browser type without tracking individual users.

## What are the main benefits?

* Objective performance measurement: since it's measured from real users' browsers, issues specific to certain browsers or devices (e.g., poor performance on Safari) are immediately visible and quantifiable by traffic impact.

   ![image](../assets/getting-started/rum-2.png)

* Exhaustive page coverage: unlike [Synthetic Monitoring](../getting-started/synthetic-monitoring.md) which only tests predefined pages or journeys, RUM automatically captures performance metrics (TTFB, Speed Index, full page load time, etc.) on every single page visit, building a real-time, comprehensive view of performance across the entire site.

   ![image](../assets/getting-started/rum-3.png)

In short, RUM doesn't require you to anticipate what to monitor - it automatically builds a performance picture of your entire site, driven by what your users actually do.

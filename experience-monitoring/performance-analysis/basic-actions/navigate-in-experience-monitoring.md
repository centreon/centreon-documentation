---
id: navigate-in-experience-monitoring
title: Navigating in Experience Monitoring
---

Centreon Experience Monitoring allows you to:

1. [Switch between sites](#switching-between-sites).
2. [Switch between modules](#switching-between-modules) (user journeys, RUM...).
3. [Change the time period covered by the displayed data](#changing-the-time-period-covered-by-the-data).

![image](../../assets/performance-analysis/basic-actions/navigate-1.png)

## Organizations and sites

The platform supports a two-level hierarchy that lets you organize and monitor multiple websites from a single account.

* Organizations are top-level groupings that contain one or more sites — for example, separate organizations for different business units or clients.
* Sites are individual websites within an organization. A common setup is separate sites for different environments, such as production and pre-production.

### Switching between sites

* Hover over the site name in the top navigation bar to open the **Sites** panel, then click any site in the list to switch to it. The **Global view** is displayed for that site.
* If you need to, use the search box to filter sites by name.

### Adding a site to an organization

1. Hover over the site name in the top navigation bar to open the **Sites** panel, then click **Go to the organization page** for the organization you want.
2. Click the **Licenses & Sites** tab. The number of sites in this organization is displayed on the right.
3. Click **Create a site**.
4. Enter the homepage's URL, then click **Create** and confirm. The site appears in the list of sites on the page, and in the site selector.

## Switching between modules

The **horizontal navigation bar** (at the top) lets you switch between Experience Monitoring modules ([**User Journeys**](../../getting-started/synthetic-monitoring.md), [**System**](../../getting-started/system-view.md), [**Real User Monitoring**](../../getting-started/real-user-monitoring.md), etc.).

## Changing the time period covered by the displayed data

A **time range selector** (at the top-right) lets you change the analyzed period at any time. This is useful to observe how a site's response times evolve over days, weeks, or months. By default, Experience Monitoring shows the last 24 hours and refreshes every minute to show the latest measurements in real time.

## Global view page

When you first log into Experience Monitoring, you land on the **Global view** page by default. Select the site you want, then click **Settings** in the top right corner to fine-tune what the page displays for this site.

### User Journeys taken into account in the calculations

This section defines which user journeys are used to calculate the **Global View** scores// all scores for this site (where?).
Two modes are available:

- **All user journeys** — every configured user journey contributes to the calculations.
- **Only selected journeys** — manually select which user journeys to include using the checkboxes. This is useful for excluding test journeys or journeys that are not representative of the real user experience.

### Data source of calculations for the digital sobriety score

Select the data source used to calculate the eco-design score and CO₂ emissions for all [digital sobriety](../../digital-sobriety/digital-sobriety-concepts.md) data across the site (only one source can be selected at a time):

* **Real User Monitoring** —  all calculations will be based on real traffic collected by the RUM tag
* **User journeys** — all calculations will be based on automated measurements from STM probes.

### Site screenshot reference

Select the screenshot you want to appear in the **Global view** page for this site: choose between the thumbnails you selected for your user journeys.

<!--
If your account has access to multiple Experience Monitoring sites — for example
under an Enterprise license or as an agency managing several clients — you can
use the site selector to switch between them or work across them simultaneously.

Multi-site mode lets you:

- **Compare performance data** across several sites side by side.
- **Build custom dashboards** that aggregate metrics from multiple sites into a
  single view.-->
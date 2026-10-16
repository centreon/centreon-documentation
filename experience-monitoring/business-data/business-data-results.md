---
id: business-data-results
title: Understanding business data results
description: Compare Business Data traffic to RUM and use it in dashboards
---

The Business Data module displays traffic and conversion metrics sourced from your analytics tool (Google Analytics or Matomo). Correlate the technical performance of your site and your sales. A key thing to do is to [plot events onto your graphs](../installation/monitor-production-events.md) so as to explain changes.

## Business data or RUM?

Business Data traffic refers to the traffic that customers typically view in their analytics. It is a filtered "business-specific" view, unlike [RUM](../rum/rum.md), which captures all raw traffic.

| Criterion | RUM in Experience Monitoring | Business data (Google Analytics) |
| --- | --- | --- |
| Traffic coverage | 100% of traffic (before GDPR pop-in) | Only visitors who have accepted GDPR consent |
| Bots | Included (US bots, crawlers, etc.) | Excluded (filtered in the GA view configured by the client) |
| GDPR consent | Independent of consent | Dependent on consent acceptance |
| Estimated difference | Full raw traffic | Approximately 1/3 of traffic missing (GDPR refusals + filtered bots) |
| Configuration | Managed in Experience Monitoring | Experience Monitoring retrieves the view as configured in GA (no additional processing) |

## Use cases

### Traffic + Performance Dashboard

Create a [dashboard](../performance-analysis/dashboards.md) that combines website traffic (from GA) with the execution speed of user journey scenarios. This allows you to monitor the overall health of the site at a glance: traffic and performance side by side.

### Impact of a deployment on sales

After a deployment, check whether a slowdown in the site has a negative impact on the conversion rate or revenue. Use in conjunction with [event tags](../installation/monitor-production-events.md) to date the deployment.

### Impact of a deployment on the bounce rate

Check whether a deployment (successful or failed) caused an increase or decrease in the bounce rate. Example: sudden spike in the bounce rate on a certain date, to be correlated with a possible slowdown.

## Metrics

The Business Data module displays the following metrics, all sourced from Google Analytics:

* Website traffic: number of sessions/visitors over the selected period. For non-monetized websites, only this metric is truly relevant.
* E-commerce conversion rate: for e-commerce sites, tracks conversion trends.
* Revenue per minute: revenue generated minute by minute.
* Number of transactions per minute: transaction volume over time.
* Revenue per session per minute: average revenue per session, minute by minute.
* Bounce rate: percentage of visitors leaving the site after viewing only one page.

> Google Analytics Delay: There is a delay of 4 to 24 hours between the data reported by GA and actual results. For example, a bounce rate of 90% may be adjusted within the next 48 hours. This delay is inherent to GA and not to Experience Monitoring.




<!--Centreon Experience Monitoring links with Analytics so you can:

Have your business KPIs correlating the technical performance and your sales.
See the impact of peak traffic on your page load time.
Measure the capacity and impact of your site's modifications on your architecture load (Infrastructure Cost Per Clic evolution)

In the **Business data** page, you can:

* **Overview** tab - Analytics summary over the period
* **Opportunities** tab

* Correlate Google Analytics data with Synthetic Monitoring data in the **Journey and revenues** tab (you need to have configured a user journey). You can see an estimation of losses due to downtime or slow loading pages.

* Correlate Google Analytics data with system data in the **Infrastructure cost/click** (you need to have configured an agent collecting [system data](../installation/servers/install-system-agents.md)).-->

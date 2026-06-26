---
id: business-alerts
title: Business alerts
---

> Available by default on Business and Full licenses; optional on other plans.

Business alerting monitors the impact of site issues (for example drops in traffic or conversion) rather than a predefined list of causes.
They detect abnormal drops in traffic or conversion and let you analyze precisely when those drops occurred.

Because this data comes from Google Analytics, it is processed with a default 4-hour delay (GA data is refined over time).

## Prerequisites

[Users must have filled in their personal data](../configuration/manage-users-and-rights.md) (email, SMS, Slack) and defined the time periods during which they want to be notified or not.

## Creating business alerts

1. Go to **Settings > Alerting**.
2. In the **Business alerts** section, click **Add a business alert**, then select the alert type you want ([**Alert on conversion rate**](#conversion-rate-alerts) or [**Alerts on pageviews/mn**](#page-view-alerts)).
3. Name your alert and define which users should receive it. Select email, SMS or Slack.
4. If you want to define another notification channel than email, SMS or Slack, define the webhook to be used. This type of notifications are not linked to a user.
5. Hover over the alert's tile. 2 buttons appear:

   * **Configure this alert's planning**: define the time periods during which alerts should be sent.
   * **Configure this alert's thresholds**: define criteria for triggering an alert and a recovery notification.

### Conversion rate alerts

This checks whether your conversion rate average over a given period (2 hours by default) is lower compared to the same period historically (daily, weekly, or monthly baselines).

By default this alert triggers when the conversion rate drops by 30% compared to the usual value. A resolution notification is sent when the metric returns to 75% of the usual conversion rate.

You can also set a fixed conversion-rate threshold below which you want to be alerted.

### Page view alerts

This works the same way as conversion-rate alerts but is applied to page views per minute.

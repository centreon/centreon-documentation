---
id: how-alerts-work
title: Understanding how alerts work in Experience Monitoring
---

## Preamble

Experience Monitoring can alert you about many different events. If you haven't enabled alerts yet, see:

[Receive and configure alerts](../../configuration/receive-and-configure-alerts.md)

This article describes the types of alerts you may receive and helps you understand and analyze them.

## Scenario-related alerts

> Available by email on all licenses. Slack, Chat, and SMS alerts may depend on your plan.

These alerts trigger when our probes detect an anomaly in one of your user journeys (scenarios). There are two main categories.

### Alerts on scenario status

These alerts fire when a monitored scenario is failing for several minutes — by default, 3 failures within a 5-minute window.

A resolution notification is sent once the scenario returns to normal for several minutes — by default, 5 successes within a 5-minute window. At that point the alert is considered closed.

Notifications are sent via your chosen channel (email, SMS, or Slack).

Example alerts we can send:

- Expected string/element not found
- Step timeout
- Scenario timeout
- Invalid return code
- Dynamic selector not found
- Network error while receiving data
- SSL negotiation error

These alerts are also visible on your scenarios; red bars appear on charts when they occur.

### Alerts on scenario execution time

These alerts are sent when our probes detect a variation in scenario execution time that exceeds the threshold you configured.

Every minute, the scenario's current execution time is compared with a reference period based on your chosen baseline (daily, weekly, or monthly).

Examples:

- Comparing to a daily baseline compares the current time at 16:00 to the average of the last X days at 16:00.
- Comparing to a weekly baseline compares the current Tuesday 16:00 to the average of the last X Tuesdays at 16:00.
- Comparing to a monthly baseline uses the last X instances of the same day of the month.

You can also trigger an alert when a scenario exceeds a fixed duration you set.

By default, these alerts are sent when the deviation occurs at least 15 times within a 25-minute window. They are marked as resolved once the deviation stops for at least 20 out of those 25 minutes.

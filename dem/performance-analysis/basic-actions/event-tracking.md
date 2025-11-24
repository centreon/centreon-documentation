---
id: event-tracking
title: Track and add events from your site in DEM
--- 


# Track and add events from your site in DEM

<aside>
💡 This page explains how to add your own annotations via the UI; you can also add them automatically (for example at each deployment). See:

[Automatically track production events](../../installation/monitor-production-events.md)

</aside>

You can add custom events in DEM to provide contextual information on various charts.

You can report many types of events, including:

- Comment: Add commentary to a chart, for example to explain a spike in load time.
- Code deployment: Visually mark when site code was deployed.
- Server configuration change: Use these events to interpret charts while accounting for infrastructure changes.

Additionally, for Magento sites, events are created automatically when we detect changes in your servers or web scenarios.

If you need an event type that doesn't match the above, use the "custom" event type for generic annotations.

In short, events help you collaborate with partners and get more value from the tool.

## View events that occur on your site

Events appear above charts (see image). To keep charts readable, only events potentially related to the chart are shown (for example, scenario step changes do not appear on system charts).

The displayed icon represents the event type (or the API Token icon if the event was added by a token). If events of different categories are present, a generic icon (small flag) is shown.

Hovering an event shows the count of events by type. Clicking an icon opens the details for each event (timestamp, author, and message), as shown below.

## Add annotations (comments)

To add an annotation, click the chart where you want to add it, choose *Leave a comment*, enter your message, and click *Send*.

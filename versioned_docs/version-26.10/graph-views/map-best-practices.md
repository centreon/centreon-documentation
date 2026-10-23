---
id: map-best-practices
title: Best practices for using maps
description: "Design clear, maintainable Centreon MAP views: tailor each map to its audience, choose the right map type and widgets, and manage access and updates."
---

This topic provides recommendations to help you design maps that are clear, easy to maintain, and useful for the audience they are built for.

## Start with your audience, not your infrastructure

Before opening the MAP editor, identify who the map is for. The same infrastructure can be represented very differently depending on who will look at it:

- **Executives and senior project managers** need a strategic, high-level view of how the business is running. Build these maps on [Business Activities](/docs/alerts-notifications/dashboards) with carefully chosen, business-oriented KPIs, and keep the visual style aligned with your company's branding — this audience shouldn't see raw technical alerts.
- **Application managers and business process managers** need a view balanced between technical and business information — for example, a customer journey map that includes both system checks (authentication, database) and business indicators (orders, payments).
- **Operations and production teams** need speed and clarity above all: a reactive view that makes it immediate to spot a critical resource, with minimal decoration.

Asking your users what they expect before you start designing saves rework later.

## Match the level of detail to the map's purpose

More detail is not always better. Before adding an element, ask "why does this need to be on the map?":

- A map meant to give a worldwide status overview calls for a [geographic view](/docs/graph-views/map-web-create-geoview), not a detailed technical breakdown.
- A map meant to help troubleshoot a specific host calls for precise widgets (gauges, output) on that host's resources, not an overview of the whole infrastructure.

Adding details that don't serve the map's purpose makes it harder, not easier, to read.

## Design for how the map will actually be viewed

A map displayed on an unattended wallboard (no keyboard, no mouse, no interaction) needs a different design than one used interactively by an operations team:

- **Static, unattended displays:** present the essential information as simply and clearly as possible, since no one can click through for more detail.
- **Interactive, operational use:** make resources clickable, surface details on hover (for example, a link to the resource's configuration), and let users acknowledge alerts or refresh status directly from the map.

## Choose the map type that fits the need

Centreon MAP supports several complementary formats — pick the one suited to the audience and purpose rather than defaulting to the same format each time:

- **Specialist dashboards:** detailed, technical views (server load, memory, network) for IT specialists who need to monitor system behavior closely.
- **Business views (BV):** aggregated views built with [Centreon BAM](/docs/alerts-notifications/dashboards), suited to a wide audience. They can be organized as a dashboard, a process-oriented map (e.g. a customer journey), or a mix of business and technical indicators.
- **Geographic views:** used to display resources across geographic locations. Only hosts, host groups, and business activities can carry geographic coordinates, which must be set beforehand on each resource (`Latitude, Longitude` format) before they can appear on the map.

## Keep related maps consistent across levels

A map built for one application or team is often reused as a building block inside a higher-level map for another audience (for example, an application-level map feeding into an executive-level Business View). When you do this:

- Reuse the same element (or the same underlying Business Activity) across levels instead of recreating it independently in each map.
- Avoid maintaining two separate representations of the same resource in different maps — if they fall out of sync, one audience may see a healthy status while another sees an incident, which undermines trust in the maps.

## Use containers to reflect your infrastructure's levels

Containers let you split a map into multiple levels, each with its own status. Use them when:

- A single view would otherwise become too dense to read.
- You want to give a team access to a specific sublevel without duplicating content or granting access to the whole view.
- Your infrastructure has a natural hierarchy (for example: site > building > server room) that benefits from drill-down navigation.

Keep the number of levels reasonable — a map with too many nested containers becomes as hard to navigate as a flat, overcrowded one.

## Choose the right widget for the right information

Each widget type answers a different question. Picking the right one keeps the map focused:

- **Pie chart:** overall status distribution of a host or host group.
- **Line chart:** performance trend of a service over time.
- **Gauge:** the percentage of a specific metric (requires a maximum value to be defined).
- **Output:** the current status/output of a single service.
- **Process:** a quick corrective action for operators (e.g. restarting a service via a passive service and shell command) — reserve this for well-known, low-risk recovery actions.

Avoid mixing many widget types on the same map section — a consistent set of widgets is faster to interpret during an incident.

## Keep maps readable at a glance

A map is meant to be understood in seconds, not read like a document:

- Group related elements visually and use consistent colors and shapes for similar resource types.
- Limit the number of elements per view; move detail into a sub-level (container) rather than adding more icons to the same canvas.
- Use status and metric links instead of static text whenever the information can change, so the map always reflects the current state.
- Reserve free-standing shapes and images for elements that genuinely need annotation, not for every resource.

## Manage access rights deliberately

Access to a map is granted through access groups and privilege levels (read, write, owner) rather than to individual users. Keep this in mind when sharing maps:

- Only Centreon administrators can authorize access groups to create maps (via **Edit creators** in the Map page); grant this role only to groups that genuinely need to build or restructure maps.
- Map creators automatically get owner privileges on the maps they create; owners can view, edit, share, and delete the map, while read/write access groups get progressively fewer of these permissions.
- Use containers to share a sublevel with a specific team instead of duplicating a map or widening access to the full view.
- If a user belongs to several access groups with different privileges on the same map, the highest privilege applies — review group membership periodically to avoid unintentionally broad access.

## Add resources in bulk to save time

When a map needs many similar resources, use the bulk mode (via the **Search a resource** bar) instead of adding elements one by one. This is faster and reduces the risk of inconsistent formatting across similar elements.

## Save your perspective for a consistent experience

Once a map's layout, zoom, and position are set the way your team expects to see it, save the perspective. This ensures the map opens in the same view every time, which is especially useful for maps displayed on wallboards or shared dashboards.

## Keep maps up to date

A map is only useful if it reflects the current infrastructure:

- Revisit maps after significant infrastructure changes (new hosts, decommissioned services, reorganized containers).
- Remove elements that are no longer tied to a monitored resource, or clearly label free-standing elements so they aren't mistaken for monitored ones.
- For maps maintained through automation, consider using the [MAP API](/docs/api/map-api) to keep them in sync with your configuration instead of updating them manually.

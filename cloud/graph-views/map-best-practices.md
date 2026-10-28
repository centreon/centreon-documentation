---
id: map-best-practices
title: Best practices for using maps
description: "Design clear, maintainable Centreon MAP views: tailor each map to its audience, choose the right map type and widgets, and manage access and updates."
---

Use these tips to build maps that are clear, easy to maintain, and useful to the people who read them.

## Design for your audience

Depending on the user's profile, the same infrastructure should be presented differently. Before you start creating a map, identify the profile type:

- **Executives** need an overall view of how the business is doing. Use KPIs that are meaningful to the business, and leave out technical alerts.
- **Application and business process managers** need technical and business information side by side. For example, a customer journey map can show technical checks (login, database) alongside business data (orders, payments).
- **Operations teams** need to spot problems quickly. Make critical resources stand out immediately, and keep decorative elements to a minimum.

Also think about where the map will be displayed:

- **On a wall screen that no one interacts with:** show only the essentials, because no one can click to see more.
- **On a screen people use:** make resources clickable, and let users acknowledge alerts from the map.

## Choose the right map type

- **Specialist dashboards:** for IT specialists. They show technical details such as server load, memory, or network use.
- **Business views:** for a wide audience. They sum up the state of the business and are built with [Centreon BAM](../service-mapping/introduction.md).
- **Geographic views:** they show [resources according to their location](map-web-create-geoview.md). You can only add hosts, host groups, and business activities. First, set their coordinates (`Latitude, Longitude`).

## Keep maps easy to read

Users should understand a map in a few seconds:

- Only add what the map needs.
- If a map is too crowded, use [containers](map-web-create-standard-map.md#container) to split it into levels (for example, site > building > server room). Do not create too many levels.
- Group related elements. Use the same colors and shapes for the same kinds of resources.
- Use status and metric links rather than plain text. This way, the map always shows the latest data.
- Choose the widget that shows what you need, and use the same widgets throughout the map:
  - **Pie chart:** the statuses of a host or host group.
  - **Line chart:** how a service performs over time.
  - **Gauge:** a metric as a percentage. You must set a maximum value.
  - **Output:** the latest output of a service.
  - **Process:** a quick fix, such as restarting a service. Only use it for simple, safe actions.

## Reuse elements across maps

You can include one map inside another, for example an application map inside an executive business view. In that case, reuse the same element or business activity. Do not create a copy. If you create two versions of the same resource, they may end up showing different statuses.

## Manage access rights

You give access to maps through access groups. Administrators and Editors can create maps, and can see, edit, delete, and share all maps. Users (Operators) only see the maps that are shared with them. See [Managing access rights in MAP](map-web-access.md).

- When you share a map with Users, grant the lowest privilege they need: **Viewer** in most cases, **Editor** only if they must change the map.
- Check what a map contains before you share it. With the **Viewer** privilege, users can see all the resources in the map, even if they do not have the corresponding ACL.
- To give a team access to only part of a map, [create a map from a container](map-web-create-standard-map.md#create-a-map-from-an-existing-container) and share it. Do not copy the map, and do not give access to the whole map.
- Do not remove the **Owner** privilege from the **Editor** role. Otherwise, all users may lose access to maps.

## Save time and keep maps up to date

- To add many similar resources at once, use the **Search a resource** bar.
- Save the perspective (zoom and position). The map will then always open the same way. This is useful for wall screens.
- Check your maps when your infrastructure changes. Remove elements that are no longer linked to a monitored resource.

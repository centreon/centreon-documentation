---
id: map-web-create-geoview
title: Create a geographic view
description: "How to create geographic views in Centreon MAP by adding geo-coordinates to resources, with details on clustering, blinking resources, and datalayers"
---

This topic explains how to create geographic views from the Centreon MAP interface.

If you see the **Add a Geographic view** button on the **Monitoring > Map** page, you belong to an access group that is granted the creator role, and you can create geographic views.

## Requirement

To place a resource (host, host group or business activity) on a geographic view, first enter its geographic coordinates in the **Extended infos** tab of the resource.

For example, to fill in geographic coordinates for the **Central** host:

1. Go to **Configuration > Hosts > Hosts**. Then click the **Central** host.
2. Click the **Host Extended Infos** tab.
3. Fill in the **Geographic coordinates** field in the `Latitude, Longitude` format. Then click **Save**.

> For a map, you can enter the **Geo coordinates** in the map properties: go to **Monitoring > Map**, **Standard maps** section, then click the **wrench** button of the map.

## Create a geographic view

1. On the **Monitoring > Map** page, click the **Add a Geographic view** button located in the **Geographic views** section.

2. Fill in the **Name** part:
   - Name and Image: enter a name for the geographic view and select an image in the dropdown list.

3. Fill in the **Add resources** part by selecting the resources listed by type. Each field provides a list of the available resources:
   - Maps
   - Host groups
   - Hosts by host group
   - Business activities by business view (BV)

4. Click **Add**.

The new geographic view opens directly in the editor interface.

## Additional information

### How resources are displayed

When a resource (host, host group or business activity) is positioned on a geographic view, it is displayed as a circle whose color is defined using the following rules:

- **Host:** worst status between the host and its services.
- **Host group:** worst status of the hosts belonging to the host group.
- **Business activity:** current status.

Worst status order: Critical (red) \> Down (red) \> Warning (orange) \>
Unknown (gray) \> Unreachable (gray) \> OK (green) \> Up (green) \> Pending (blue)

### Clustering

When resources are close to each other at the current zoom level, they are grouped into a single circle that shows:

- The worst status among these resources (shown as a color: green, orange, red or gray).
- The number of resources in this status.

This behavior can be disabled in the global Centreon MAP options, by setting the **Clustering mode** option to **No**.

### Blinking resources

If a resource is not in an OK status, it blinks.
This behavior can be disabled in the global Centreon MAP options by setting the **Blink markers** option to **No**.

### Data layers on geographic views

Centreon MAP allows you to display additional data layers on maps to add context to the real-time status of your IT infrastructure.

First, add data layers in the Centreon MAP options, in the **Data Layers geographic services** section.
Once a data layer is enabled, use the icon in the top-left corner to show or hide it.

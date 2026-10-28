---
id: map-web-create-geoview
title: Creating a geographic view
description: "Create geographic views in Centreon MAP to display your resources on a map, and learn how resource display, clustering, blinking, and datalayers work."
---

This topic provides information about how to create geographic views from the Centreon MAP interface.

The display of the **Add a new Geographic view** button on the **Map** page means that you are allowed to create a geographic view and that you belong to an access group that is granted the creator role.

## Requirement

To place a resource (host, host group or business activity) on a geographic view, first enter its geographic coordinates in the **Extended infos** tab of the resource.

For example, to fill in geographic coordinates for the **Central** host:

1. Go to **Configuration > Hosts > Hosts**. Then click the **Central** host.
2. Click the **Host Extended Infos** tab.
3. Fill in the **Geographic coordinates** field with the `Latitude, Longitude` format. Then click **Save**.

> For a map, you can enter the **Geo coordinates** in the map editing window (go to the **Monitoring > Map** menu, **Standard maps** section, then click the **configuration** button to access the map properties).

## Create a geographic view

1. In the **Monitoring > Map** page, click the **Add a Geographic view** button located in the **Geographic views** section.

2. Fill in the **Name** part:
   - Name and Image: enter a name for the geographic view and select an image in the dropdown list.

3. Fill in the **Add resources** part by selecting the resources listed by type. Each field provides a list of the available resources:
   - Maps
   - Host groups
   - Hosts by Host group
   - Business Activities by BV

4. Click **Add**.

The new geographic view opens directly in the editor interface.

## Additional information

### How resources are displayed

When a resource (host, hostgroup or business activity) is positioned on a geographic view, it is displayed as a circle whose color is defined using the following rules:

- **Host:** worst state between the host and its services.
- **Hostgroups:** worst state of hosts belonging to the hostgroups.
- **Business activity:** current status.

Worst state order: Critical (red) \> Down (red) \> Warning(orange) \>
Unknown(gray) \> Unreachable(gray) \> Ok(green) \> Up(green) \> Pending(blue)

### Clustering

When resources are close to each other at the current zoom level, they are grouped into a single circle that shows:

- Status of the worst object (displayed as a color between green, orange, red
  and gray).
- Number of resources in this state.

This behavior can be disabled in the global Centreon Map options, by setting the **Clustering mode** option to **No**.

### Blinking resources

If a resource is in a "non-ok" state, it blinks.
This behavior can be disabled in the global Centreon Map options by setting the **Blink markers** option to **No**.

### Datalayers on geographic views

Centreon MAP allows you to display additional data layers on maps to add context to your real time IT infrastructure status.

First you need to add data layers in Centreon Map options, in the **Data Layers geographic services** section.
Once a data layer is enabled, use the icon in the top-left corner to show or hide it.

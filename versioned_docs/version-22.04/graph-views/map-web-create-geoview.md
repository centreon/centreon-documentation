---
id: map-web-create-geoview
title: Creating a geographic view
---

This topic provides information about how to create geographic views from the Centreon MAP interface.

The display of the **Add a new Geographic view** button on the **Map** page means that you are allowed to create a geographic view and that you belong to an access group that is granted the creator role.

## Requirement

In order to apply geographic coordinates while configuring a new geographic view, it is necessary to provide them on the **Extended infos** tab corresponding to the resource you want to monitor (a host, a hostgroup or a business activity).

For example, to fill in geographic coordinates for the **Central** host:

1. Go to **Configuration > Hosts > Hosts**. Then click on the **Central** host.
2. Click the **Host Extended Infos** tab.
3. Fill in the **Geographic coordinates** field with the `Latitude, Longitude` format. Then click **Save**.

## Create a geographic view

1. In the **Monitoring > Map** page, click the **Add a new Geographic view** button located in the **Geographic views** section.

2. Fill in the **Add a new geographic view** property:
   - Name: provide a name to the geographic view.

3. Click **Add**.
The new view is added to the **Geographic views** section. Click on it to complete its configuration.

4. Click the **Edit** button and fill in the **Edit view parameters**.
  
5. Click **Edit** to confirm the parameters.

## Additional information

### How resources are displayed

When a resource (host, hostgroup or business activity) is positionned on a geographic view, it is displayed as a circle which color is defined using the following rules:

- **Host:** worst state between the host and its services.
- **Hostgroups:** worst state of hosts belonging to the hostgroups.
- **Business activity:** current status.

Worst state order: Critical (red) \> Down (red) \> Warning(orange) \>
Unknown(gray) \> Unreachable(gray) \> Ok(green) \> Up(green) \> Pending(blue)

### Clustering

When multiple resources are geographically close and you are at a "certain" zoom level, then they are grouped into one single circle
displaying two elements:

- Status of the worst object (displayed as a color between green, orange, red
  and grey).
- Number of resources in this state.

This behavior can be disabled in the global Centreon Map options, by setting the **Clustering mode** option to **No**.

### Blinking resources

If a resource is in a "non-ok" state, it blinks.
This behavior can be disabled in the global Centreon Map options, by setting the **Blink markers** option to **No**.

### Datalayers on geographic views

Centreon MAP allows you to display additionnal data layers on maps to add context to your real time IT infrastructure status.

First you need to add data layers in Centreon Map options, in the **Data Layers geographic services** section.
Then, if the data layer is enabled, you can make it visible or not by checking the dedicated layer using the top left icon.

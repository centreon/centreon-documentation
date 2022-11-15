---
id: map-web-manage
title: Manage maps in MAP
---

This topic provides information about how to create and manage maps from the Centreon MAP interface. You can create two types of map:
- Standard maps: to visualize graphical representations of your monitored infrastructure.
- Geographic views: to display the resources of your IT environment across a defined geographical area.

> Options that are available in the MAP interface depend on the permissions assigned to you by your administrator. See the [Manage access rights on MAP](map-web-access.md) topic to know more about rights and permissions.

The display of the **+** button means that you are allowed to create a map and that you belong to an access group that is granted the creator role.

## Create a standard map

1. In the **Monitoring > Map** page, click the **+** button located in the **Standard** section.

2. Fill in the **Add a Map** properties:
   - Name: provide a name to the map.
   - Image: select an image if you want to customize the map's display in the list of maps.

3. Click **Add** to confirm the map's creation.

The new map opens directly in the editor interface.
Go to the [Use the map editor](map-web-editor.md) topic to know how to customize your map.

## Create a geographic view

1. In the **Monitoring > Map** page, click the **+** button located in the **Geographic** section.

2. Fill in the **Add a new geographical view** property:
   - Name: provide a name to the geographical view.

3. Click **Create** to continue the view's configuration.

4. Fill in the following **Edit view parameters** properties:
   - Only one marker of the hostgroup(s) will be displayed on the view.
   - Hosts belonging to the following hostgroup(s) will be displayed on the view.
   - Business Activities belonging to the following Business View(s) will be displayed on the view.

5. Click the **Advanced** button to display more parameters.

6. Fill in the following **Advanced** parameters:
   - Zoom
   - Lat
   - Long

7. Click **Save** to confirm the view's creation.

## Perform actions on a map

You can perform actions on each standard map and geographic view you have access to. Use the following procedures if you need to edit the map properties, share or delete a map.

> Deleting a map is the unique action you can perform on a geographic view.

Hover over the map on which you want to apply an action and click the corresponding button.

### Delete a map

Click the **red cross** button and confirm the deletion by clicking the **Delete** button.

### Edit map properties

Click the **wrench** button to edit the map properties and confirm the changes by clicking the **Edit** button.

### Share a map

Click the **arrow** button to edit the access group privileges and confirm the changes by clicking the **Save** button.

### Copy MAP URL

A **Copy MAP URL** button is available when you open a map in view mode, allowing you to easily share the map you opened. 

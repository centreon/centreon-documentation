---
id: cloud-release-notes
title: Centreon Cloud - notes de release
---

## January 22, 2024

### Anomaly Detection

- [API] Added an endpoint to UPDATE Cloud Token.

### Centreon Broker

- [Broker] Fixed a bug occurring when a Business Activity was updated after a status change for a KPI with a BA type.

### Centreon IT Edition

- [IT edition extensions] Added EPP license control mechanism.

### Centreon MAP

- [Editor] Handled meta services in output widget.
- [Viewer] You can now perform delete and duplicate actions from the viewer.

### Centreon WEB

- [API] Added an administration endpoint to upload medias.
- [API] Added an endpoint to List all installed connectors.
- [API] Added an endpoint to list Graph Templates.
- [API] Added an endpoint to GET Business Activities.
- [API] Added an endpoint to update partially Host.
- [API] Added an endpoint to PATCH a service.
- [API] Added an endpoint to DELETE Business activities.
- [API] Added an endpoint to LIST Medias.
- [API] Added an endpoint to update a service severity..
- [API] Added new endpoint to list all metrics of a given service.
- [API] Added metrics by service listing endpoint to service resource type.
- [API] Added Resource UUID in endpoints
- [Centreon-cloud] Added possibility to configure monitoring scheduling options and to select icon for hosts.
- [Centreon-cloud] Added possibility to configure monitoring scheduling options and to select icon for host templates.
- [Centreon-cloud] Added possibility to configure monitoring scheduling options and to select icon for services.
- [Centreon-cloud] Added possibility to configure monitoring scheduling options and to select icon for service templates.
- [Centreon-cloud] In case of some notification configuration too long, the notification lua script did not get all its content. Then it was unable to send notifications.
- [Centreon-web] Installed server registration script by centreon-poller package.
- [Cloud migration] Added a script to migrate commands.
- [Cloud migration] Added a script to migrate medias.
- [Dataset] Fixed an issue that allowed to select a resource type more than once.
- [Graph] Optimized legend.
- [Graph] Thickened curves.
- [Log] Add possibility to enable/disable application logs through UI.
- [Server] URL patterns have been modified.
- [Status Grid widget] Added "unhandled" state property.
- [UX] Reorganized rich text options for widget description.
- [UX] Displayed warning message when dashboard modifications have not been saved yet.
- [UX] Made the widget edition more accessible.
- [UI] Updated dashboard global refresh icon.
- [Widget edit] Made the dataset selection header sticky.
- [Widget edit] Renamed "add resource" button to "refine filter".
- [Widget] Simplified resource selection.
- [Widget] Added new widget "Status Grid".
- [Widget MAP] Added information message when editing.
- [Widget Single Metric ] Simplified metric selection.

## December 5, 2023

### Centreon IT Edition

* **New notification configuration system**:

   You can now configure notifications on a per user and per resource basis.
Associate users with resources and the statuses for which users will be notified, define a notification format, and tailor notifications according to your users' scope of monitoring. Only email notifications are available now (more to come).

* **Resources Status**:

   - In addition to the current view (**All** view), you can now access to two new views to see only the services (**By Services** view), as well as a view to see the hosts and all their attached services (**By Hosts** view).
   - We have also completely redesigned filters, making it easier to select resources.

* **Dashboards Beta**:

   With Dashboards, you can effortlessly create and share intuitive dashboards for real-time monitoring of metrics, host/service statuses, and much more. Join our [Dashboards Beta group](https://thewatch.centreon.com/groups/centreon-dashboards-beta-59) on our community platform The Watch!

* **HTTPS connection between central and poller**:

   Communication between the central server and the pollers is now done using HTTPS instead of going through Centreon's VPN.

### Centreon Business Edition

#### Centreon BAM

The output message for business activities has been modified to give more understandable information about the reason for the BA's status. This will particularly affect the clarity of the notifications.

#### Centreon MAP

- [Editor] Improved the layout of the output widget edition window.
- [Editor] You can now add Centreon resources to a map by searching their names.
- [Server] Made link anchors consistent between viewer and editor.
- [Server] You can now save maps that contain elements not associated with a Centreon resource.
- [UI] You can now use the MAP module in French.
- [UI] You can now use a button to save zoom and position in editor and viewer.
- [UI] You can now hide the label of a resource.
- [UI] Made the labels in the metric link window more explicit by replacing "metric 1" and "metric 2" by "metric in" and "metric out".
- [UX] You can now duplicate maps.
- [Viewer] Made resource status unique for hosts (include host status in inherited status computation).
- [Viewer] You can now define a label for a URL shape.

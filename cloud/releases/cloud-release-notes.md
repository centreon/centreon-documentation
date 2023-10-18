---
id: cloud-release-notes
title: Centreon Cloud release notes
---

## XX October/November, 2023

### Centreon IT Edition

* **New notification configuration system**:

   You can now configure notifications on a per user and per resource basis.
Associate users with resources and the statuses for which users will be notified, define a notification format, and tailor notifications according to your users' scope of monitoring. Only email notifications are available now (more to come).

* **Resources Status**:

   - In addition to the current view (**All** view), we have added 2 new views allowing users to see only the services
  (**By Services** view), as well as a view to see the hosts and all their attached services (**By Hosts** view).
  These two new views have been designed based on what was done in deprecated pages.
   - We have also completely redesigned filters, making it easier to select resources.

* **Dashboards Beta**:

   With Dashboards, effortlessly create and share intuitive dashboards for real-time monitoring of metrics, host/service statuses, and much more.

### Centreon Business Edition

#### Centreon BAM

The output message for business activities has been modified to give more understandable information about the reason for the BA's status. This will particularly affect the clarity of the notifications.

#### Centreon MAP

- [UI] You can now use the MAP module in French.
- [UI] Added button to save zoom and position in editor and viewer.
- [UI] Added the possibility to hide the label of a resource.
- [UI] Made the labels in the metric link window more explicit by replacing "metric 1" and "metric 2" by "metric in" and "metric out".
- [UX] You can now duplicate maps.
- [Editor] Improved the layout of the output widget edition window.
- [Editor] Users can now add Centreon resources to a map by searching their names.
- [Server] Made link anchors consistent between viewer and editor.
- [Server] Users can now save maps that contain elements not associated with a Centreon resource.
- [Viewer] Made resource status unique for hosts (include host status in inherited status computation).
- [Viewer] You can now define a label for a URL shape.

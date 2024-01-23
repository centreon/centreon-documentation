---
id: cloud-release-notes
title: Centreon Cloud - notes de release
---

## January 22, 2024

### Centreon IT Edition

- More configurations options for hosts and services:
When configuring your hosts and services, you can now configure the interval between checks both when the resource is OK and when it is needed to validate a non-OK state. You can also configure the number of checks to validate a non-ok state before triggering and alert.
Finally, you can also assign your resources with a dedicated icon to ease readability of the interface. 

- Dashboards Beta:
As we keep improving our new proposition for effortlessly create and share intuitive dashboards, you can now benefit of multiple improvements (resources selection, graphs look and feel, ...), one new widget named "status grid" and bug fixes for the Centreon Dashboards feature.

  
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

---
id: cloud-release-notes
title: Centreon Cloud release notes
---

## March 29, 2024

### Custom Check Command definition
   You now have the ability to define your own check commands, allowing for personalized monitoring configurations.
To maintain system integrity, this feature is secured by a whitelist mechanism (requires a poller update), ensuring only authorized commands are executed.

### Dashboards Beta:
   As usual, lots of improvements of the Dashboard feature with this release:
- Navigation in dashboards has been enhanced with a new search feature, a listing presentation and a better responsiveness.
- Existing widgets have been improved, based on beta tester feedbacks. It is now more intuitive to select metrics or to select the widget you need.
- A new widget named “Resource Table” is available allowing to visualize status of a set of selected resources.
Important note: this is the last time Centreon Dashboards is delivered as a beta version. On next version, Centreon Dashboards will be generally available.

### Miscenaleous improvements
- You can now display any page of Centreon, and in particular dashboards, in Full Screen Mode.
- It is now possible to use semicolons in command macros (and in particular in passwords).

## February 26, 2024

### Centreon IT Edition

- **More configuration options for hosts and services**:

   When configuring your hosts and services, you can now configure the interval between checks, both when the resource is OK and when validating a non-OK state. You can also configure the number of checks needed to validate a non-OK state before triggering an alert.
Finally, you can also assign your resources with specific icons to improve the readability of the interface. 

- **Dashboards Beta**:

   We keep improving our new proposition for creating and sharing intuitive dashboards effortlessly! With this release you can benefit from multiple improvements (with the selection of resources, with the look and feel of graphs...), from a new widget named "Status grid", and from bug fixes.

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

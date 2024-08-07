---
id: cloud-release-notes
title: Centreon Cloud release notes
---

## August xx, 2024

### Centreon IT Edition

**Open Access to Centreon APIs**

  It is now possible to interact with Centreon through APIs and therefore integrate Centreon with any monitoring or data processing tool you may use, automatize monitoring configuration updates and any other use case you may have in mind. Access to APIs is granted thanks to tokens linked to contacts for access right management, but completely independent in terms of lifecycle.
API documentation is available here (link)

**Centreon Dashboards**

  It is now possible to declare dashboards playlists as public. An URL is genrated and give access to the dashboard playlist without authentication. This feature is ideal to display dahboards on big screens.
Note that this feature was implemented in a completely secured way. No confidential information is carried by the URL, nor it is possible to have access to any other information or data than the one displayed.
Note: MAP widget is not supported yet on public playlists.

This version of Centreon Dashboards comes with many other improvements.
Graph widget allows much more configuration (automatic curves color adjustement for metric of same kind, bar chart and stacked bar chart presentation, 3 different curves design, and many others).
Widgets are also now more compact, allowing to display more of them on a single display.
And finally, freshness of data is now exposed and user can reload data at the widget level.

**Miscellaneous improvements**

  Resource Status filter modal has been improved by adding resource type and host name filters.

### Centreon Business Edition

**MAP**

  The Geoview modal has been redesigned.
In standard maps, it is now possible to hide containers labels and to display status as background color for resources in weather style.


## June 26, 2024

### Centreon IT Edition

**Resource Access Management**

  Resource Access Management allows administrators to assign specific access permissions to each user or user group. This enables control over which users can access particular monitored resources. An intuitive interface helps manage these permissions, while audit logs provide a record of access activities. This feature supports organizations in maintaining security and efficiency by allowing tailored access control.

**Centreon Dashboards**

  Centreon Dashboards is now Generally Available!
In addition to our stabilization work through the beta, we have added several features like dashboard duplication, or a new mechanism to prevent exiting edition mode with unsaved changes.
We have also improved the look and feel of existing widgets, in particular graph legends and tooltips, and enriched our widget library with two new widgets: Status Chart and Business Activity Diagram.

**Stream Connectors**

  It is now possible to forward data collected by Centreon to third-party systems using our Stream Connector library. Please contact your Customer Success Manager if you need to set up such an integration.

**Pollers**

  You can now choose amongst all operating systems supported by Centreon to install your poller. This includes Alma, RHEL, and Oracle Linux version 8 and 9, and Debian version 11 and 12 (from poller version 24.04).


## April 11, 2024

### Centreon IT Edition

**Custom check command definition**

  You now have the ability to define your own check commands, allowing for customized monitoring configurations.
To maintain system integrity, this feature is secured by a whitelist mechanism, ensuring only authorized commands are executed.
As an important note, whether or not you plan to use this feature, it may introduce a security vulnerability if you do not update your poller by following [this procedure](../installation/poller-update-upgrade.md).

**Dashboards Beta**

  As usual, lots of improvements to the dashboard feature with this release:
- Navigation in dashboards has been enhanced with a new search feature, a listing presentation and a better responsiveness.
- Existing widgets have been improved, based on feedback from beta testers. It is now more intuitive to select metrics or to select the widget you need.
- A new widget named “Resource Table” is available, allowing you to visualize the status of a set of selected resources.
- It is now possible to create dashboards playlists. Selected dashboards will be displayed sequentially without any interaction allowing to broadcast them on TV set on public spaces.

**Important note**: this is the last time Centreon Dashboards is delivered as a beta version. In the next version, Centreon Dashboards will be generally available.

**Miscellaneous improvements**

- You can now display any page in Centreon, and in particular dashboards, in full screen mode.
- It is now possible to use semicolons in command macros (and in particular in passwords).


## February 26, 2024

### Centreon IT Edition

**More configuration options for hosts and services**

   When configuring your hosts and services, you can now configure the interval between checks, both when the resource is OK and when validating a non-OK state. You can also configure the number of checks needed to validate a non-OK state before triggering an alert.
Finally, you can also assign your resources with specific icons to improve the readability of the interface. 

**Dashboards Beta**

   We keep improving our new proposition for creating and sharing intuitive dashboards effortlessly! With this release you can benefit from multiple improvements (with the selection of resources, with the look and feel of graphs...), from a new widget named "Status grid", and from bug fixes.
   

## December 5, 2023

### Centreon IT Edition

**New notification configuration system**

   You can now configure notifications on a per user and per resource basis.
Associate users with resources and the statuses for which users will be notified, define a notification format, and tailor notifications according to your users' scope of monitoring. Only email notifications are available now (more to come).

**Resources Status**

   - In addition to the current view (**All** view), you can now access to two new views to see only the services (**By Services** view), as well as a view to see the hosts and all their attached services (**By Hosts** view).
   - We have also completely redesigned filters, making it easier to select resources.

**Dashboards Beta**

   With Dashboards, you can effortlessly create and share intuitive dashboards for real-time monitoring of metrics, host/service statuses, and much more. Join our [Dashboards Beta group](https://thewatch.centreon.com/groups/centreon-dashboards-beta-59) on our community platform The Watch!

**HTTPS connection between central and poller**:

   Communication between the central server and the pollers is now done using HTTPS instead of going through Centreon's VPN.

### Centreon Business Edition

**Centreon BAM**

The output message for business activities has been modified to give more understandable information about the reason for the BA's status. This will particularly affect the clarity of the notifications.

**Centreon MAP**

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

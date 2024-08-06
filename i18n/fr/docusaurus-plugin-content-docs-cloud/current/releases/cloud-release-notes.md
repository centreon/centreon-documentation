---
id: cloud-release-notes
title: Centreon Cloud - notes de release
---

## Centreon web

### 24.07.0

Release date: `August 06 , 2024`

<details open>
  <summary>Enhancements</summary>

- [Dashboards] Added last update to widgets and enabled refresh directly from widgets.
- [Dashboards] Allowed smaller dimensions for widgets through more responsive behavior.
- [Dashboards] Added the ability to create a public link to a playlist.
- [Dashboards] Added a pending refresh indicator to widgets.
- [Dashboards] Added meta-services to Resource Table widget.
- [Metrics Graph widget] Added curve type format setting.
- [Metrics Graph widget] Added multiple options to customize graph.
- [Metrics Graph widget] Enabled visualization using bar chart and stacked bar chart.
- [Metrics Graph widget] Distinguished curves for same metric name, by automatically adjusting colors.
- [Resource Table widget] Moved display type selection into the widget.

</details>

<details>
  <summary>Bug fixes</summary>

- [Dataset] Removed incompatible resources when filtering using multiple resource types.
- Whitelist errors now have a ERROR level in Gorgone logs.

</details>

## Centreon gorgone

### 24.07.0

Release date: `August 06 , 2024`

<details>
  <summary>Bug fixes</summary>

- [MBI] Fixed the perfdataStatisticsBuilder.pl script: when using the '-r --centile-only' parameters, the mod_bi_metrichourlyvalue table is no longer truncated.
- Whitelist errors now have a ERROR level in Gorgone logs.

</details>

## Centreon collect

### 24.07.0

Release date: `August 06 , 2024`

<details open>
  <summary>Enhancements</summary>

- [Engine] The customvariables configuration is now independent from the main Engine code.
- [Engine] The whitelist now works with all the commands executed by Engine, including notifications and handlers.
- [Engine] Engine can now handle extra configuration files to complete/overload the centengine.cfg file. This enhancement allows to keep a custom configuration unchanged by the configuration export.
- [Engine] Added a host_down_disable_service_checks option.
- The spdlog logger library has been mutualized for Engine and Broker, as well as the log files. This change will not impact Broker's logs, but Engine will log all its messages (including broker-module's messages) in centengine.log.
- Whitelist errors now have a ERROR level in Gorgone logs.

</details>

## Centreon map

### 24.07.0

Release date: `August 06 , 2024`

<details open>
  <summary>Enhancements</summary>

- [Editor] Added option to not display label for Containers.
- Display a message on the MAP widget when displayed in a public page.
- [GeoViews] Redesigned the edit modal.
- [VIEWER] Added possibility to display status as bg color for resource in weather style.

</details>

<details>
  <summary>Bug fixes</summary>

- [Map list] Fixed an issue that could prevent the map list from being displayed.
- Status of BA is not aligned with the status in Resource Status.

</details>

## Centreon mbi

### 24.07.0

Release date: `August 06 , 2024`

<details>
  <summary>Bug fixes</summary>

- Fixed the perfdataStatisticsBuilder.pl script: when using the '-r --centile-only' parameters, the mod_bi_metrichourlyvalue table is no longer truncated.

</details>

## Centreon BAM

### 24.07.0

Release date: `August 06 , 2024`

<details>
  <summary>Bug fixes</summary>

- [BAM] Fixed Deprecation due to Symfony Upgrade.

</details>

## June 26, 2024

### Resource Access Management

Resource Access Management allows administrators to assign specific access permissions to each user or user group. This enables control over which users can access particular monitored resources. An intuitive interface helps manage these permissions, while audit logs provide a record of access activities. This feature supports organizations in maintaining security and efficiency by allowing tailored access control.

### Centreon Dashboards

Centreon Dashboards is now Generally Available!
In addition to our stabilization work through the beta, we have added several features like dashboard duplication, or a new mechanism to prevent exiting edition mode with unsaved changes.
We have also improved the look and feel of existing widgets, in particular graph legends and tooltips, and enriched our widget library with two new widgets: Status Chart and Business Activity Diagram.

### Stream Connectors

It is now possible to forward data collected by Centreon to third-party systems using our Stream Connector library. Please contact your Customer Success Manager if you need to set up such an integration.

### Pollers

You can now choose amongst all operating systems supported by Centreon to install your poller. This includes Alma, RHEL, and Oracle Linux version 8 and 9, and Debian version 11 and 12 (from poller version 24.04).

## April 11, 2024

### Custom check command definition

You now have the ability to define your own check commands, allowing for customized monitoring configurations.
To maintain system integrity, this feature is secured by a whitelist mechanism, ensuring only authorized commands are executed.
As an important note, whether or not you plan to use this feature, it may introduce a security vulnerability if you do not update your poller by following [this procedure](../installation/poller-update-upgrade.md).

### Dashboards Beta

As usual, lots of improvements to the dashboard feature with this release:
- Navigation in dashboards has been enhanced with a new search feature, a listing presentation and a better responsiveness.
- Existing widgets have been improved, based on feedback from beta testers. It is now more intuitive to select metrics or to select the widget you need.
- A new widget named “Resource Table” is available, allowing you to visualize the status of a set of selected resources.
- It is now possible to create dashboards playlists. Selected dashboards will be displayed sequentially without any interaction allowing to broadcast them on TV set on public spaces.

**Important note**: this is the last time Centreon Dashboards is delivered as a beta version. In the next version, Centreon Dashboards will be generally available.

### Miscellaneous improvements

- You can now display any page in Centreon, and in particular dashboards, in full screen mode.
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

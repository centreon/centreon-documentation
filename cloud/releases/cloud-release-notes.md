---
id: cloud-release-notes
title: Centreon Cloud release notes
---

## March 3rd, 2025

### Centreon  Autodiscovery

<details>
  <summary>Bug fixes</summary>
  
- [Discovery] Fixed autodiscovery credentials lost during update.

</details>

### Centreon Bam

<details>
  <summary>Bug fixes</summary>
  
- [BA monitoring] Fixed issue preventing KPI Informations to be displayed.

</details>

### Centreon Centreon Cloud Extensions

<details open>
  <summary>Enhancements</summary>
  
- [Open tickets] Enabled Open Tickets feature.

</details>

### Centreon Collect

<details open>
  <summary>Enhancements</summary>
  
- [Broker] Adapted Broker to a new behavior of the MariaDB database concerning errors: Broker no longer fails to reconnect after an error.
- [Broker]Broker can now read Engine configurations and if it already knows it, Engine knows it don't have to send it again.
Usually, when Engine starts it reads it and sends it to Broker. Now, during the negociation, if broker already knows it, Engine doesn't send it anymore.
This means a big evolution on the negociation between Engine and Broker.
- [Broker] Broker is now Vault compatible, if its passwords to access databases are encrypted, it is able to ask the vault for the decrypted password.
- [CMA] Added a silent mode (CLI) on Windows installer.
- [CMA] Added a native Storage check for Windows.
- [CMA] Added a native Health check for Windows & Linux.
- [CMA] Added a native Services check for Windows.
- [CMA] Added a native Uptime check for Windows.
- [CMA] Added a native Memory check for Windows.
- [CMA] Added a native CPU check for Windows & Linux.
- [CMA] Added an option in Windows installer to use embedded plugins in case of offline execution.
- [CMA] Agent checks scheduling has been optimized to avoid delay if checks take too long.
- [CMA] Centreon Monitoring Agent & installer are now signed.
- [gRPC API] GetService function have been improved to return more information.
- [gRPC API] GetHostgroups function return information about hostgroups.
- [gRPC API] GetTag function return information about Tag.

</details>

<details>
  <summary>Bug fixes</summary>
  
- [Broker] Adapted Broker parsing so as to avoid breaking a metric name ending with the ] character.
- [Broker] Adapted Broker to a new behavior of the MariaDB database concerning errors: Broker no longer fails to reconnect after an error.
- [Broker] Fixed errors in RRD logs that appeared following the upgrade to the new log engine in collect.
- [Collect] Delivered the correct libraries for Collect, so as to avoid issues with template inheritance or Engine crashes.
- Fixed a typo in an SQL query.
- Fixed an issue where a segmentation fault could occur when host relations were modified.

</details>

### Centreon MBI

<details>
  <summary>Bug fixes</summary>
  
- [MBI] Fixed an issue preventing a report from being generated.

</details>

### Centreon Map

<details open>
  <summary>Enhancements</summary>
  
- [Database] Extended bend point limitations for links.
- [Gauge widget] Added an option to display the name of the parent resource.

</details>

<details>
  <summary>Bug fixes</summary>
  
- [Engine] Updated dependency.
- [Geoviews] Fixed an issue that ignored ACLs when listing Business Activities.
- [Server] Fixed boot failure that may occur when using service templates.
- [Viewer] Fixed wrong call to get the details of a resource.
- [Migration from Legacy] Fixed an incorrect value in identifier generation.
- [Viewer] The widgets and links are now propagating their status to their parent Map.

</details>

<details>
  <summary>Security fixes</summary>
  
- [Security] Fixed log4j vulnerability.
- [Security] Removed commons-logging (including Log4j).
- [Security] Updated JSON in Java dependency.
- [Security] Updated Symfony Security-Http component.
- [Security] Upgraded Apache Tomcat version.
- [Security] Upgraded dependency tomcat-embed-core.

</details>

### Centreon Gorgone

<details open>
  <summary>Enhancements</summary>
  
- [Gorgone] Added the ability to fetch configuration credentials from a Vault.

</details>

<details>
  <summary>Bug fixes</summary>
  
- [Packaging] Fixed centreon-engine restart issue on poller caused by a missing service binary.

</details>

### Centreon Web

<details open>
  <summary>Enhancements</summary>
  
- [ACC VMware] Enhanced translation and UX on Additional Connectors Configuration.
- [Agents configuration] A new feature is available to manage agents configuration, including Centreon Monitoring Agent and Telegraf.
- [API] Added missing configuration change logs for service categories configuration.
- [Authentification] Improved the way errors are logged for authentications with OpenID.
- [CEIP] Added telemetry on Poller/Agent configuration.
- [Dashboards] Added default sizes for widgets, and optimized their default positioning on the grid of the dashboard.
- [Dashboards] Added the possibility to mark a dashboard as a favorite one, and to list all favorites.
- [Dashboards] Improved Status Grid widget responsiveness in condensed mode.
- [Dashboards] It is now possible to expand an individual widget.
- [Dashboards][Metrics Graph] Added new time periods: 14 days and 2 months.
- [Dashboards][Resource Table widget] Added FQDN, Alias, Parent Alias and Monitoring Server columns.
- [Install] added 24.10 support to unattended script.
- [Library - view by card] Added thumbnail, that show a snapshot of your data, taken when the dashboard is saved.
- [Resource status] In the Resource Status page, custom order for filters can now be saved.
- [UI] Centered the reset password form.
- [UI] Reset password form now take into account login page customization.

</details>

<details>
  <summary>Bug fixes</summary>
  
- [API Token] Fixed the list of contact with pagination.
- [Configuration] Fixed incorrect mandatory field for mass change on services.
- [Configuration] Fixed incorrect mandatory field for mass change on hosts.
- [Dashboards] Fixed error when trying to share a dashboard.
- [Notification] Options in the notifications panel are now saved correctly.
- [Packaging] Fix an issue that prevented centreontrapd from starting properly due to perl dependencies.

</details>

<details>
  <summary>Security fixes</summary>
  
- [Security] Updated Symfony Security-Http component.

</details>

## December 17th, 2024

This release contains numerous bug and vulnerability fixes but also the following improvements:

### Centreon IT Edition

**Data Collection**

- Thanks to the Additional Connector Configurations feature, you can now define the credentials to access a monitored resource through the Centreon interface rather than having to connect to your pollers manually.

  > Warning: If you were using the following monitoring connectors, you must now declare all of their configurations using [the **Configuration \> Additional connector configurations** page](/pp/integrations/plugin-packs/getting-started/how-to-guides/additional-connector-configuration) before deploying the configuration of the corresponding poller:
  > * [VMware ESX](https://docs.centreon.com/pp/integrations/plugin-packs/procedures/virtualization-vmware2-esx/)
  > * [VMware vCenter](https://docs.centreon.com/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-generic/)
  > * [VMware VM](https://docs.centreon.com/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vm/)
  > * [VMware vCenter v4](https://docs.centreon.com/fr/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-4/)
  > * [VMware vCenter v5](https://docs.centreon.com/fr/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-5/)
  > * [VMware vCenter v6](https://docs.centreon.com/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-6/)

- It is also now possible to duplicate and then customize commands coming from official Centreon Monitoring Connectors.

## October 10th, 2024

### Centreon IT Edition

**Notifications**

It is now possible to configure a time period for a notification. When you do so, notifications will be issued only in the time range corresponding to the defined time period.
Please note that time period exceptions are not taken into account yet.

**Centreon Dashboards**

A new widget named "Clock / Timer" is available, allowing you to contextualize your dashboards by adding a time reference in it (either time and date of a specific timezone or a timer).
Status Grid widget tiles have also been improved by displaying resource icons and information about the state of the resource (acknowledged or in downtime).

**APIs**

The creation of a resource is now synchronous with the computation of its associated access rights, which improves automatic resource creation using the API.

### Centreon Business Edition

**MAP**

It is now possible to use different common fonts in your maps. As a note, "roboto" will now be the default font. 
You are now also able to display the host's name in a service object.

**Service Mapping**

We have also improved the integration of Business Edition features in "Centreon Dashboard" by adding the possibility to display Business Activities in the Status Grid widget.

## August 22, 2024

### Centreon IT Edition

**Security**

As we keep improving the security of our software, the SNMP community is now considered as a password. As such, it is now obfuscated in host and host template forms. There is no way to copy or read the SNMP community from the configuration form. Users can still edit the SNMP community. Please note that exporting the monitoring configuration is required to enforce changes.

**Open Access to Centreon APIs**

It is now possible to interact with Centreon through APIs and therefore integrate Centreon with any monitoring or data processing tool you may use, automate monitoring configuration updates and any other use case you may have in mind. Access to APIs is granted thanks to tokens linked to users (the user's access rights apply).
[The API documentation is available here](https://docs-api.centreon.com/api/centreon-web/cloud/).

**Centreon Dashboards**

It is now possible to declare dashboard playlists as public. A URL is generated, giving access to the dashboard playlist without authentication. This feature is ideal to display dashboards on big screens.
Note that this feature was implemented in a completely secure way. No confidential information is carried by the URL, and it is not possible to have access to any other information or data than the one displayed.
Note: The MAP widget is not supported yet on public playlists.

This version of Centreon Dashboards comes with many other improvements.
The Graph widget allows for much more configuration (automatic curve color adjustment for metrics of the same kind, bar chart and stacked bar chart presentations, 3 different designs for curves, and many others).
Widgets are also now more compact, allowing you to display more of them on a single dashboard.
And finally, data freshness is now displayed, and users can reload data at widget level.

**Miscellaneous improvements**

The Resource Status filter window has been improved by adding 'resource type' and 'host name' filters.

### Centreon Business Edition

**MAP**

The Geoview window has been redesigned.
In standard maps, it is now possible to hide container labels and to use the status as background color for resources in weather style.

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

**HTTPS connection between SaaS platform and poller**:

Communication between the SaaS platform and the pollers is now done using HTTPS instead of going through Centreon's VPN.

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

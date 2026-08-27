---
id: cloud-release-notes
title: Centreon Cloud release notes
description: "Release notes for Centreon Cloud, detailing new features, improvements, and fixes for each release"
---

## September XXth, 2026

### Centreon IT Edition



## August 11th, 2026

### Centreon IT Edition

**Resource Status**

- Performance has been drastically improved on many search use cases. The default **Unhandled alerts** filter, free-text search, searching on several tags at once, and sorting or filtering by severity level are all significantly faster, for administrators as well as for users restricted by access groups.

**Centreon Dashboards**

- Status Grid widget: a new filter based on the state of the resources (unhandled, acknowledged, in downtime, flapping) is now available for the condensed view, allowing a more precise selection of what is displayed — for example excluding problems that have already been acknowledged by a user. This filter was already available for the standard view.

**Configuration**

- The VMware additional configuration no longer restarts the `centreon_vmware` process on every configuration deployment. The process is now restarted only when its own configuration has actually changed, which removes collection interruptions previously triggered by unrelated configuration changes.


**Centreon Collect**

The improvements below have been released on the collect components since the previous Centreon Cloud update. They do not come with this platform update: update your pollers and your **Centreon Monitoring Agents** to the latest available version to benefit from them.

- Check timeperiods are now honored on resources monitored by the Centreon Monitoring Agent. The **check period** configured on the host or the service is respected with the same semantics as checks scheduled by the Centreon Engine: no check is executed outside the valid window, no performance data is collected and no status update is produced, and the next check is rescheduled on the next valid window. Freshness calculation excludes the inactive window, forced checks still run regardless of the timeperiod, and the timezone used is the one of the host where the agent is installed. This behavior is available on both Linux and Windows agents.
- The Linux installation script of the agent now prepares the plugin cache directory required by several native checks, so that modes such as CPU, disk I/O, processes, traffic or packet errors work as expected right after installation.

### Centreon Pro Edition

**Service Mapping**

The Business Activity configuration experience has been thoroughly reworked around an interactive tree, and refined based on the first feedback collected:

- Business Activities can now be configured directly through an interactive dependency tree. The whole hierarchy — the top-level activity, its child activities and all their KPIs — is displayed and edited on a single page, and saved in one single action, with a clear distinction between blocking errors and warnings.
- Two new actions allow you to expand or collapse the entire tree at once, making it much faster to grasp the overall structure or to reach a specific node.
- The tree is now rendered with straight, orthogonal links instead of curves. The layout is far more compact and requires much less zooming and panning to navigate large activities.
- The configuration workflow has been smoothed out: the side panel is now closed by default when opening a Business Activity, so that the tree structure is immediately visible, and a Business Activity created from the tree is attached to its parent right away, without having to open and save its panel.
- The tooltips describing the **Impact** and **Ratio** threshold calculation methods have been corrected and clarified.

**MAP**

- Hover pop-ups in the Viewer are now positioned reliably next to the cursor. They no longer appear far above it at the bottom of the view, no longer overlap the cursor or get clipped by the edges of the container, and they follow the map when it is panned or zoomed. Firefox behavior, in particular, has been fixed.
- Metric Link widget: meta-services can now be used as a data source. By combining one meta-service aggregating inbound metrics with another one aggregating outbound metrics, you can represent the cumulative traffic of a bidirectional network link and anticipate its saturation.


## June 22nd, 2026

### Centreon IT Edition

**REST API**

This release delivers a significant expansion of the Centreon REST API, enabling broader automation and integration capabilities across the platform.
* A new endpoint is now available to retrieve Services (GET).
* New endpoints have been introduced for retrieving and deleting Media resources (GET, DELETE).
* A new endpoint allows retrieving Host configurations (GET).
* New endpoints are available for Host Templates (GET) and Service Templates (GET).
* Service Categories can now be retrieved and updated via API (GET, UPDATE).
* Service Groups can now be retrieved and updated via API (GET, UPDATE).
* Missing filter parameters have been added to the GET Maps API specification.

**Authentication**

* A new token type has been introduced: poller tokens. Dedicated tokens and agent configurations are now automatically created when deploying or upgrading a platform.
* The accepted list of special characters has been improved for better compatibility.

**Configuration**

* Macros can now reference other macros (recursive macros), enabling more flexible and dynamic configurations.
* BBDO state synchronization reliability has been improved: the default periodic reload is now disabled, while a manual sync API remains available.
* The commands configuration page has been reworked for improved usability.

**Collect**

Several important improvements have been made to Centreon Broker to enhance performance, security, and protocol support:
* The broker event queue capacity has been expanded to enhance overall performance.
* The fixed-size BBDO message queue has been replaced with a dynamic scaling queue, preventing message loss while maintaining strict memory usage limits.

**Centreon Monitoring Agent (CMA)**

* The CMA installer now handles upgrades of existing instances, ensuring seamless version transitions.
A new feature allows retrieving a public CA certificate using its fingerprint and establishing a TLS connection from it.
* A dedicated window now allows you to automatically generate the correct CMA installation command for your target host. Simply copy the command and run it on the host.
### Centreon Pro Edition

**Service Mapping**

A new streamlined and guided mode has been introduced for creating Business Activities, simplifying the setup process step by step.

**MAP**

The logo used as the MAP default image has been modernized to align with the current product branding.
The Viewer now features a modernized resource display and updated status indicators, improving readability and consistency with Centreon's design standards.
Host group tooltips in the Viewer now explicitly display each host's status alongside its most degraded service state, providing clearer incident visibility at a glance.

## April 8th, 2026

### Centreon IT Edition

**Centreon Monitoring Agent (CMA)**

This release focuses on streamlining the deployment lifecycle of the Centreon Monitoring Agent, from installation to automated host provisioning:

* Automated Host Creation: To accelerate large-scale deployments, hosts can now be automatically created in the Centreon configuration upon agent registration. This behavior can be enabled via a new option in the Agent configuration menu.
* Simplified Deployment: New helper scripts for both Linux and Windows are now available to simplify the download, installation, and initial registration of the agent.
* Enhanced Native Checks: The **File** native check has been improved and can now trigger alerts when a result set is empty, providing better visibility into missing critical files.
* Certificate Management: The Centreon Engine is now capable of automatically generating and renewing CMA certificates, reducing manual administrative overhead and ensuring continuous secure communication.
* Threshold Compatibility: A dedicated script is now provided to help administrators adapt threshold formats specifically for CMA native checks.
* Certificate Authority: New columns dedicated to CA certificates have been integrated into the instances database to support enhanced security tracking.

**Centreon Dashboards**

* Resource Table Widget: To offer better control over incident management workflows, new options allow users to enable or disable the ticket creation action directly from the widget (available for both hosts and services).

**Configuration & Poller Wizard**

* Global Macros: In an effort to clarify configuration terminology, **Resource macros** have been renamed **Global macros** throughout the interface.
* Poller Setup: When creating a new poller, the system now automatically generates the dedicated token and agent configuration, ensuring a "ready-to-monitor" state immediately.
* Poller Commands: The poller wizard has been updated to use systemctl instead of the legacy service command for Engine and Broker management, aligning with modern OS standards.
* Broker Enhancements: A new Broker output has been added to handle script execution, and a mechanism has been implemented to delay write retries in specific scenarios where the system call does not return a boolean.

**Centreon Customer Identity and Access Management**

* Improved invitation management: A new page is available to have visibility over invitation status.

## February 17th, 2026

### Centreon IT Edition

**Centreon Monitoring Agent (CMA)**

This release brings significant enhancements to the Centreon Monitoring Agent, focusing on automation, security, and broader check capabilities:
* A new generic native check for custom scripts has been added.
* For Windows environments, service checks now include filters for startup type and delayed services.
* Deploying a CMA-related Monitoring Connector now automatically activates freshness by default and creates the required links to the commands connector. Freshness is also activated by default on all CMA-related services, hosts, and templates.
* The CMA Token is now mandatory even when using "No TLS" mode. Additionally, the agent configuration now supports .cert formats, allows any certificate path, and includes a listening port parameter for agent-initiated connections.

**Data Visualization**

* Charts in Performance Graphs are now limited to 20 metrics to keep them readable.
* The Resource Table widget in Centreon Dashboards now includes a direct link to ticket details in the incident management system, helping connect monitoring and incident response.

**Configuration**

* We have improved the handling of password fields in additional configuration menus to enhance security and usability.

### Centreon Pro Edition

**MAP**

* Geoviews: The geographic view interface now includes new actions, allowing users to duplicate or delete views, copy their URL, and save the map position directly.
* Editor: For better visual impact and clarity, geometric resources can now be enlarged up to a maximum size of 84x84 pixels and other shapes reduced to a minimum of 20x20 pixels.

## January 8th, 2026

### Centreon IT Edition

**Centreon Monitoring Agent**

This release brings significant improvements to the Centreon Monitoring Agent (CMA) to align its behavior with standard monitoring logic and to offer more flexibility in deployment:

* CMA now supports the **retry_interval** and **max_attempts** parameters, allowing for more granular control over alerting. Additionally, freshness checks are now fully supported, ensuring data consistency even in case of communication silence.
* The Windows installer has been enhanced to support multiple CMA instances on a single host, catering to complex infrastructure requirements.
* To simplify the configuration process, the “CA common name” field is now only displayed when **Insecure TLS** mode is selected.

**Centreon Dashboards**

* A new filtering layer has been added to the **Status Grid** widget. You can now filter resources based on their specific state: unhandled, acknowledged, in downtime, or flapping. This allows for a much more focused view of critical events.

**Configuration**

* When using the **Deploy Service** action on a host, the **Pollers** list will now correctly display the **Conf Changed** status, ensuring administrators know exactly when a configuration update is required.

### Centreon Pro Edition

**Business Activities**

* We have improved the readability of Business Activity diagrams. Label width has been increased to accommodate longer names, and an ellipsis is displayed to gracefully handle very long strings.

**MAP**

* Enhancements have been made to geographic views. It is now possible to define specific geo-coordinates directly for maps and display them accurately within your geographic views, bridging the gap between logical topology and physical location.


## November 6th, 2025

### Centreon IT Edition

**Centreon Dashboards**

It is now easier to keep your dashboards up to date, as regular expressions are supported in the dataset configuration section of the **Resource Table**, **Group Monitoring** and **Status Grid** widgets.

**User interface**

A few adjustments have been made to the Centreon Monitoring Agent configuration interface. 

**Collect**

**Note:** Updating your poller (as described [here](https://docs.centreon.com/docs/installation/poller-update-upgrade)) and the Centreon Monitoring Agent will unlock the following features.

Thanks to the new version of the Centreon Monitoring Agent, you will be able to use autosigned certificates as CMA now allows insecure TLS connection mode. Security has still be reenforced by making usage of Centreon authentication tokens mandatory.

On top of that, new native Files check for Windows have been implemented, and it is now possible to trigger on-demand forced check performed by CMA.

### Centreon Pro Edition

**MAP**

* This release introduces image folders in Resource Access Management: folder-level access control is now available for images in MAP. Administrators can organize images into folders and manage access permissions in one place.
* It is now possible to use the MAP API. As for the Centreon web API, use an authentication token to get started and begin automating your MAP usage.
* Besides, you can now customize geographic view tiles in the dashboard homepage by adding a custom image to the tile.

## September 25th, 2025

### Centreon IT Edition

**Centreon Monitoring Agent**

The Centreon Monitoring Agent is now generally available and fully supported by our teams.
As such, we have implemented the following features and enhancements:

- Authenticated communication thanks to token management.
- Dedicated whitelist for CMA commands. Only whitelisted commands can be executed by the CMA agent.
- Native **Files** and **Task scheduler** check for Windows & Linux.
- Central poller configuration: you can now use the central poller to collect data from your agents.
- The agent configuration now requires a valid authentication token for TLS connection.
- To avoid disrupting configurations already in place at the time of the update, a default token has been generated and applied to existing configurations and hosts.
  * This token must be copied (from the **Administration > Authentication tokens** page) and applied to the agent configuration, on the host.
- An issue has also been fixed regarding host mapping in **Poller-initiated connection** mode, and may need a check if you are using the same IP addresses for multiple hosts:
  * In **Agent configuration**, please ensure each host is correctly mapped in the **Select host** field, which must display the host's name
  * Deploy the configuration and restart Engine, as well as the agent on the host.

**Metaservices**

It is now possible to use Centreon metaservices. 
A metaservice is a virtual service providing the aggregation of metrics from different services via a mathematical operation. 
Metaservices are managed in the same way as a service, i.e. they have thresholds, a notification process, they generate a performance graph, etc.


**Miscellaneous**

Centreon uses service accounts for technical purposes. Those are now correctly hidden in all user interfaces, and only real users are listed.

Flapping detection is now enabled, as well as the possibility to disable service checks when a host is down.

Two new options have been added to the script which handles poller installation and update:
- the **--reset** option allows you to reinstall the poller from scratch.
- the **--private-repo** option allows you to specify a repository from where Centreon packages are fetched in case you cannot use the default ones.

## July 29th, 2025

### Centreon IT Edition

**Centreon Monitoring Agent**

As the Centreon Monitoring Agent (CMA) is about to be generally available, enhancements in its configuration are now available for our Centreon Cloud customers.

As a reminder, CMA collects metrics and computes statuses on the servers it monitors, and sends them to Centreon.
Centreon plugins as well as Nagios-compatible plugins can be used with this agent.
More information about configuration is available in our [official documentation](https://docs.centreon.com/cloud/cma/).

This version adds the following enhancements to agent communication configuration:
- A "no TLS" option was added for troubleshooting purposes (valid for a time-limited period).
- It is now possible to store certificates in sub-directories.

> With the changes introduced in communication schemes, if you are planning on using CMA,
> it is important to update your poller to at least version 24.10.8 of the Centreon Collect package.

**Centreon Dashboards**

The **Metrics graph** widget has been enhanced to add the name of the service and/or host when needed in order to more clearly identify metrics that have the same name.

**Resource status**

It is now possible to export the current data as filtered by Resource status in CSV format.

**Host group configuration**

The configuration page for host groups has been improved to provide a better experience with listing, adding, editing etc.

### Centreon Pro Edition

**MAP**

The MAP widget is now operational when displayed in Dashboard public playlists.
An option to "Display icons" was added to map containers and resources. If checked, custom and state icons are displayed on the shape.

**Business Activities**

A new Dashboard widget was added: **Business Activity status timeline**. It displays the distribution of current statuses on a BA, as a chronological timeline for a given time period.
In addition, a new, modern version of the BA monitoring page is now available. It includes the BA tree and the BA timeline, and lists BA KPIs.

## June 12th, 2025

### Centreon IT Edition

**Centreon Monitoring Agent Beta**

The Beta version of the Centreon Monitoring Agent is now available for our Centreon Cloud customers.
The Centreon Monitoring Agent (CMA) collects metrics and computes statuses on the servers it monitors, and sends them to Centreon. 
Centreon plugins as well as Nagios-compatible plugins can be used with this agent.
More information about configuration is available in our [official documentation](https://docs.centreon.com/cloud/cma/) and in a dedicated [TheWatch group](https://thewatch.centreon.com/groups/opentelemetry-agent-beta-program-61).

**Centreon Dashboards**

No big new features for Centreon Dashboards this time, but still some improvements have been made.
The readability of the Business Activities Diagram widget has been improved by adding the host's name to service KPIs and by increasing the number of characters displayed. 
Designing dashboards has been made easier: you can now resize the widgets in all directions, and reduce unused spacing between widgets.

**Resource status**

Performance for the Resource Status page has been improved by optimizing filtering requests.

### Centreon Business Edition

**MAP**

We have enhanced access control on maps: you can now assign privileges (owner, editor, viewer or none) to geographic views.
Note that for now, it is only possible to select ACL groups derived either from roles (Administrator, Editor, Viewer) or from Resource Access Management rules. A section based on user groups will follow.
The widget that displays the output of a check has also been improved by adding more macros that the editor can display.

## March 18th, 2025

### Centreon IT Edition

**Open Ticket**

Centreon Open Tickets, our module to create tickets into an ITSM platform directly from Centreon is now available.
Once a provider is configured, the module allows for an operator to create tickets for hosts and services in a non-OK status, using the Resource table widget in dashboards.

**Event Handler**

Event handlers are optional system commands (scripts or executables) that are run whenever a resource status change occurs. 
Define your event handler command in the Centreon interface and authorize it on your poller using whitelists.

**Centreon Dashboards**

As usual, we continue to make improvements to our dashboard feature. 
You can now mark a dashboard as favorite for immediate access.
It is also possible to expand widgets to get a better visibility on specific data.
The home page has also been improved with dashboard thumbnails which allows to identify dashboards easily.


### Centreon Business Edition

**Centreon MAP**

This version brings significant performance enhancements.
Other minor improvements have been made: improvements to the design of tooltips, a link to the Resource Status page, the ability to combine tile background color with weather icons to represent the status of a resource, the possibility to open the links in URL widgets to a new tab and the display of the resource's parent name in Gauge widgets.


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
As an important note, whether or not you plan to use this feature, it may introduce a security vulnerability if you do not update your poller by following [this procedure](https://docs.centreon.com/docs/installation/poller-update-upgrade).

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


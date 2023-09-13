---
id: centreon-commercial-extensions
title: Commercial Extensions
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Commercial Extension**.

> It is very important when you update your system to refer to this section in order to learn about behavior changes or
> major changes that have been made on this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have built on your platform (modules,
> widgets, plugins).

If you have feature requests or want to report a bug, please contact support.

## Centreon MAP

### 22.04.10

Release date: `September 13, 2023`

#### Bug fixes

- [Packaging] Fixed a regression in centreon-map-server and centreon-map-engine packaging that caused a broken dependency situation with Java.
- [Server] Fixed MAP service ExecStart command to take JVM parameters into account.

### 22.04.9

Release date: `August 31, 2023`

#### Bug fixes

- [Server] Fixed an issue that prevented the MAP Engine server from starting.
- [Server] Updated dependencies.

### 22.04.8 ###

Release date: `July 20, 2023`

#### Enhancements

- [UI] You can now hide the label of a resource.

#### Bug fixes

- [Editor] Fixed a bug where empty metric names were blocking edition.
- [Editor] Fixed metric links when no metric name was filled in.
- [Server] Fixed an issue which made diagnostic.sh raise an error if a custom URI was used.
- [UI] Fixed image edition for a MAP thumbnail or media component.
- [Viewer] Fixed a regression causing output not to be displayed in the output widget.
- [Viewer] Fixed an issue that caused links not to be reactivated when the associated resource went back online.
- [Viewer] Fixed an issue that prevented graphs from being displayed for non admin users.

### 22.04.7 ###

Release date: `June 19, 2023`

#### New features

- [Editor] You can now edit styles on multiple resources at once.
- [Editor] You can now manage font properties in the editor.
- [UI] Made metric link modal labels more explicit by replacing "metric 1" and "metric 2" by "metric in" and "metric out".
- [Viewer] You can now define a label for a URL shape.
- [Viewer] Resources now have a unique status.

#### Bug fixes

- [Server] Enable to parse metric from Broker NEB packets.
- [Server] Fixed an issue causing MAP server to crash at start up due to service group loading.
- [Server] Fixed an issue preventing images from being displayed in views after an update.
- [Server] Fixed an issue that prevented access to MAP in HTTPS.
- [UI] Fixed a timeout issue when loading the homepage.
- [UI] Fixed missing icons on maps in the homepage when migrating.
- [UI] Fixed view freezes beyond 500 elements.
- [Viewer] Fixed an error message on a call failure.
- [Viewer] Fixed an issue preventing the font color from being applied at the first edition.

### 22.04.6 ###

Release date: `April 6, 2023`

#### Bug fix

- [Install] Fixed an issue that could prevent **centreon-map-engine** from installing on CentOS 7.

### 22.04.5 ###

Release date: `April 3, 2023`

> You need to [execute the **configure.sh** script](../graph-views/map-web-install.md#step-6--execute-the-configuresh-script) in order to apply some fixes provided by this release.

#### Bug fixes

- [API] Fixed an issue with create element in view that could break default icon.
- [Authentication] Fixed an issue with authentication when several sessions are active.
- [CEIP] Added more details for MAP engine telemetry.
- [Editor] Fixed edition of specific views after migration.
- [Editor] Fixed an issue in shapes edition modal that caused scrollbar to be reset when browsing images.
- [Editor] Fixed an issue that prevented users from drawing rectangles and ellipses.
- [Editor] Fixed an issue where users could not edit pie chart properties.
- [Editor] Fixed an issue with Host and Service icons configuration that were not handled properly.
- [Editor] Fixed an issue with insert an object in a link prevented the map from being saved.
- [Editor] Fixed an issue with link properties that prevented the link from being visible in the editor.
- [Editor] Fixed an issue with links in the editor that prevented the user from saving a view.
- [Editor] Fixed an issue with map sharing.
- [Install] Fixed an issue preventing the installation of **centreon-map-engine** on the same machine as **centreon-map-server**.
- [Install] Fixed the **configure.sh** script to include storage event from Broker output.
- [Monitoring] Fixed an issue where MAP was not supporting performance data returned by Cisco ASA plugin.
- [Server] Fixed an issue that caused server to crash on corrupted metrics.
- [Server] Fixed an issue that made new hosts and services unavailable until restart.
- [Server] Fixed an issue that prevented the migration between MAP Legacy and MAP.
- [Server] Fixed an issue with migration and images that could cause migration process to stop.
- [Server] Fixed an issue with the server startup error caused by platform without virtual hosts.
- [Viewer] Fixed an issue that could cause a blank page to be displayed when user clicked on host name link inside a map.
- [Viewer] Fixed an issue that prevented to display all metrics in tooltips graphs.
- [Viewer] Fixed an issue when custom URL was set and prevented some old media in maps from being displayed correctly.
- [Viewer] Fixed an issue when dark theme was not applied on tooltips in Geo views or Standard views.
- [Viewer] Fixed an issue with colors for a "Text" type element that was ignored by the viewer.
- [Viewer] Fixed the background layout not fitting large map.
- [Viewer] Fixed view edition with some links having corrupted bend points.

#### Enhancements

- [API] Added documentation and sanitization of the API.
- [API] Improved API response when server is starting up.
- [API] Removed deprecated REST endpoints.
- [Editor] Added resource parent name in graph.
- [Editor] Added spacing to the title inside the MAP configuration modal.
- [Editor] Added the display of supported shapes only at the double-click on the editor.
- [Editor] Aligned "Submit button" inside the MAP configuration modal.
- [Editor] Managed view background color.
- [Viewer] Made viewer and editor rendering more consistent.

### 22.04.4

Release date : `January 20, 2023`

#### Bug fixes

- Fixed an issue preventing users to create a map with the API.
- Fixed an issue that caused server to fail to start when trying to load empty output.
- Fixed links where empty bendpoints caused maps to become not editable.
- Resource name properties are now used for links when saving maps.
- Fixed an issue that caused metric links in the same views to display the same value after the first refresh.
- Fixed server startup error due to duplicate key.
- Fixed an issue that could prevent the correct application of layers.
- Fixed an issue that caused MAP Engine server to require java-17-openjdk-devel RPM and prevented successful installation.
- Fixed an issue where resource names modifications in the editor were not correctly updated after reopening the editor.

### 22.04.3

Release date: `December 28, 2022`

- Fixed "COPY FROM URL" feature from viewer.

### 22.04.2

- First release: `December 16, 2022`

The new MAP extension is now available in a full web version with a new server, under the name of MAP. The former version, including desktop client and associated server, becomes MAP Legacy.

- Web editor: Create and edit your views directly from your web browser.
- New server: Brand new server and data model providing better performance.
- Migration process: Integrated migration process of your legacy views.

## Centreon MAP Legacy

### 22.04.10

Release date: `September 13, 2023`

#### Bug fixes

- [Packaging] Fixed a regression in centreon-map-server and centreon-map-engine packaging that caused a broken dependency situation with Java.
- [Server] Fixed MAP service ExecStart command to take JVM parameters into account.

### 22.04.9

Release date: `August 31, 2023`

- No change.

### 22.04.8 ###

Release date: `July 20, 2023`

- No change.

### 22.04.7 ###

Release date: `June 19, 2023`

- No change.

### 22.04.6 ###

Release date: `April 6, 2023`

- No change.

### 22.04.5

Release date: `April 3, 2023`

- [Server] Fixed Spring persistence issue on sign in.

### 22.04.4

Release date : `January 20, 2023`

- No change.

### 22.04.3

- No change.

### 22.04.2

Release date: `December 16, 2022`

#### Bug fixes

- Fixed a connection problem between MAP desktop client and MAP server that could lead to timeouts on large maps.
- Fixed an issue with Java 17 that caused MAP server to fail to start.
- Fixed an issue with the API preventing an authenticated user from creating a resource with an image.
- Fixed an issue with the display of line charts if the period and precision values of the chart were too large.

#### Security fixes

- Actuator endpoints are now disabled by default, except for health and metrics.
- Fixed the security issue CVE-2022-42889 (Text4shell vulnerability).

#### Enhancements

- Updated the diagnostic.sh script to handle Java 17 installation instead of returning an error.
- MAP extension configuration now requires only one MAP server address to be configured.

### 22.04.1

Release date: `July 13, 2022`

#### Bug fixes

- Updated the notification number field to match the central database schema.

#### Enhancements

- The diagnostic.sh script is now compatible with Debian.
- Updated the connected server label to 'Configured server' for more clarity.
- BBDOv3 is now enabled by default at installation and after the MAP server upgrade, to match the central Broker's new 22.04 configuration.

### 22.04.0

> If you have just installed Centreon 22.04 or upgraded your platform to this version, be aware that the platform now uses the new BBDO v3 protocol. [Configure MAP](../graph-views/install.md#configuration) to use it.

- Compatibility with other 22.04 components.

## Centreon BAM

### 22.04.3

Release date: `April 3, 2023`

#### Bug fixes

- [Configuration] Fixed an error message in boolean rules when a host name was longer than 15 characters.
- [Server] Fixed an export issue that prevented Remote Servers from displaying BAM reporting statistics.
- [Server] Fixed an issue in the KPI configuration export process to Remote Servers that caused the KPIs' states to be reset at each export of the configuration.
- [Server] Fixed an issue that prevented the children Business Activities from being displayed on Remote Servers.
- [UI] Fixed an issue in the BA monitoring redirection.
- [UI] Fixed an issue that made BA tree not visible if dark mode was used.
- [UI] Fixed an issue that prevented Business Activities top counter from loading.
- [Widget] Fixed an issue that made links to Business Activities broken on **BAM - Live Business Activity Tree**.

### 22.04.2

Release date: `September 14, 2022`

- [Install] Fixed installation of module if 24x7 timeperiod is missing
- [Banner] Fixed display of empty skeleton
- [UI] Fixed header and skeleton UI instability
- [UI] Change BAM widget background font color to white when dark mode is active
- [Configuration] Refresh the BAM configuration page when adding a new BA


### 22.04.1

Release date: `May 25, 2022`

- Fixed the blank page when opening BAM configuration menu

### 22.04.0

- Compatibility with other 22.04 components.

## Centreon MBI

### 22.04.4

Release date: `June 19, 2023`

#### Bug fix

- [Core] Improved the size of the database column.

### 22.04.3

Release date: `October 25, 2022`

#### Bug fixes

- Fixed an issue with report publication that could cause LDAP users or local users without passwords to not receive the email

### 22.04.2

Release date: `October 12, 2022`

#### Security fixes

- Fixed multiple vulnerabilities in report generation

### 22.04.1

Release date: `July 5, 2022`

#### Bug fixes

- Fixed an issue related to the new password policy that would prevent reports from being generated.

### 22.04.0

- Compatibility with other 22.04 components.

## Centreon Auto Discovery

### 22.04.1

Release date: `August 10, 2022`

#### Improvements

- [Configuration] When a host receives no host template from the mappers, the default template that is hard-coded in the Plugin Pack will be applied to this host

#### Bug fixes

- For some host discovery providers where no credentials were actually required, the job creation wizard no longer demands to enter credentials
- Fixed a front-end issue that caused existing Host Discovery jobs to lose all their parameters when clicking on **Schedule**


### 22.04.0

#### Enhancements

- The Centreon Host Discovery engine can now perform changes on existing hosts when using the automatic policy. This means that existing hosts may now gain templates, groups, categories and macros, and get monitored by a different server.
- Centreon Host Discovery can now deploy the new monitoring configuration as soon as the job is run in the background.

## Centreon Plugin Packs Manager

### 22.04.0

#### Enhancements

- The Plugin Packs now provide the package name and version of the required plugins, and Gorgone will automatically install the required plugins on your pollers. This means you don't need to install the Centreon Plugins manually on each poller anymore.

## Centreon License Manager

### 22.04.0

- Compatibility with other 22.04 components.

## Centreon Anomaly Detection

### 22.04.1

Release date: `April 3, 2023`

#### Bug fix

- [Core] Fixed SQL queries when databases names contain dash.

#### Enhancement

- [Monitoring] Downtimes are now also sent to Centreon SaaS platform for Anomaly Detection services.

### 22.04.0

- Compatibility with other 22.04 components.

## Centreon Data Source For Grafana

- [Grafana] Centreon data source

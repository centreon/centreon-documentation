---
id: centreon-commercial-extensions
title: Extensions Commerciales
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne les **extensions commerciales** de Centreon.

> Il est important de mettre à jour en utilisant la documentation adéquate de mise à jour et de lire attentivement les
> notes de mise à jour afin d'être au courant des changements qui pourraient impacter votre usage ou votre plateforme
> ou des développements spécifiques que vous auriez fait.

Pour faire des demandes d'évolutions ou reporter des bugs sur les extensions commerciales, veuillez contacter le support.

Retrouvez plus de détails sur la version 22.10 dans notre [post de blog](https://www.centreon.com/blog/centreon-22-10-les-nouveautes).

## Centreon MAP

### 22.10.18

Release date: `December 16, 2024`

#### Bug fixes

- [API] Fixed issue with the "centreon-map/api/beta/actuator/metrics" endpoint.
- [Legacy server] Fixed an issue preventing the states of resources (acknowledged, in downtime, etc.) from being up to date on maps.

### 22.10.17

Release date: `October 7, 2024`

#### Enhancements

- [SELinux] Packaged SELinux rules for centreon-map.

#### Bug fixes

- [Diagnostic] Fixed an issue in the diagnostic script when MAP was configured in HTTPS.

### 22.10.16

Release date: `April 17, 2024`

#### Enhancements

- [Packaging] Correct rights are now set for Centreon MAP configuration files.

#### Security fixes

- [Security] Updated dependencies.

### 22.10.15

Release date: `February 19, 2024`

#### Bug fixes

- [Editor] Fixed the label font size in the editor mode.
- [Viewer] Fixed an issue in the container status color.
- [Viewer] Made resource labels contained in shapes (no overflow).
- [Viewer] Fixed an issue that converted breadcrumb elements to lowercase.
- [Widget] Fixed an issue preventing non admin users from saving the position and the zooming of a map.

### 22.10.14

Release date: `December 21, 2023`

#### Enhancements

- [Viewer] Fixed an issue with the "status as font color" option in the Output widget.

#### Bug fixes

- [Editor] Removed border and fill colors parameters for Centreon resources shapes.
  
### 22.10.13

Release date: `November 22, 2023`

#### Enhancements

- [CEIP] Fixed telemetry error when Centreon MAP engine is configured.
- [Editor] You can now add Centreon resources to a map by searching their names.
- [Editor] Handled metaservices in output widget.
- [Migration] Improved the image migration process.

#### Security fixes

- [Server] Updated dependencies.

#### Bug fixes

- [Editor] Fixed an issue which caused links to disappear when editing anchor points.
- [Geoviews] Fixed the display of tooltip when infrastructure view is defined.
- [Server] Fixed an issue that caused server to crash on duplicated Centreon modules.
- [UX] Fixed miscellaneous translation issues.
- [Viewer] Fixed issue with monitoring links containing a double slash.
- [Viewer] Fixed the redirection to monitoring pages from tooltips.

### 22.10.12

Release date: `October 04, 2023`

#### Enhancements

- [Server] Make link anchors consistent between viewer and editor.

#### Security fixes

- [Server] Updated dependencies.

#### Bug fixes

- [Editor] Fixed an issue where copying and pasting an object deleted it.
- [Packaging] Fixed a Debian packaging issue preventing MAP from starting.
- [Server] Fixed MAP service ExecStart command to take JVM parameters into account.
- [Server] Fixed the diagnostic protocol test.

### 22.10.11

Release date: `September 07, 2023`

#### Bug fixes

- [Packaging] Fixed a regression in centreon-map-server and centreon-map-engine packaging that caused a broken dependency situation with Java.

### 22.10.10

Release date: `August 31, 2023`

#### Bug fixes

- [Editor] Fixed an issue that made it impossible to use the extended output in the "output" widget.
- [Server] Fixed an issue that prevented the MAP Engine server from starting.
- [Server] Updated dependencies.
- [Viewer] Fixed the alignment of output text in the "output" widget.

### 22.10.9

Release date: `August 03, 2023`

#### Bug fixes

- [Editor] Fixed an issue that could lead to an empty page when trying to edit an existing map.
- [Server] Fixed an issue that could prevent some maps from being edited.

### 22.10.8

Release date: `July 28, 2023`

#### Bug fixes

- [Geoviews] Fixed an issue that prevented hosts from being displayed on geoviews.
- [Install] Fixed a documentation link for Mapbox account linking in configure.sh installation script.
- Allowed elements to be grouped.
- Fixed an issue making Business Activities' size different between viewer and editor.
- Fixed an issue that caused server to crash because of duplicated Centreon modules.
- [UI] You can now freely resize basic geometric shapes.

### 22.10.7

Release date: `July 20, 2023`

#### Enhancements

- [UI] You can now hide the label of a resource.
- [Viewer] Resources now have a unique status.
- [Viewer] You can now define a label for a URL shape.

#### Bug fixes

- [Editor] Fixed a bug where empty metric min or max prevented users from saving a map.
- [Editor] Fixed an issue that made duplicated containers point to the same view.
- [Editor] Fixed metric links when no metric name were filled in.
- [Install] Fixed a documentation link for Mapbox account linking in configure.sh installation script.
- [Server] Fixed an issue which made diagnostic.sh raise an error if a custom URI was used.
- [UI] Fixed image edition for a MAP thumbnail or media component.
- [UI] Fixed the selection of layers in Geo views.
- [Viewer] Fixed a regression causing output not to be displayed in the output widget.
- [Viewer] Fixed an issue that caused links not to be reactivated when the associated resource went back online.
- [Viewer] Fixed an issue preventing hosts from being displayed in Geo views.
- [Viewer] Fixed an issue preventing the font color from being applied at the first edition.
- [Viewer] Fixed an issue that prevented graphs from being displayed for non admin users.
- [Widget] Fixed incorrect behavior when saving the MAP widget.

### 22.10.6

Release date: `June 5, 2023`

#### New Features

- [UX] You can now duplicate maps.

#### Enhancements

- [UI] Make metric link modal labels more explicit by replacing "metric 1" and "metric 2" by "metric in" and "metric out".

#### Bug fixes

- [Server] Enable to parse metric from Broker NEB packets.
- [Server] Fixed a critical error when editing a Geo view.
- [Server] Fixed an issue causing MAP server to crash at start up due to service group loading.
- [Server] Fixed an issue preventing images from being displayed in views after an update.
- [Server] Fixed an issue preventing to save a map with "not a diagram" error message.
- [UI] Fixed view freezes beyond 500 elements.

### 22.10.5

Release date: `April 24, 2023`

> You need to [execute the **configure.sh** script](../graph-views/map-web-install.md#étape-6--exécuter-le-script-configuresh) in order to apply some fixes provided by this release.

#### Bug fixes

- [API] Fixed an issue with create element in view that could break default icon.
- [Editor] Fixed an issue in shapes edition modal that caused scrollbar to be reset when browsing images.
- [Editor] Fixed view edition with some links having corrupted bend points.
- [Install] Fixed an issue preventing the installation of **centreon-map-engine** on the same machine as **centreon-map-server**.
- [Install] Fixed the **configure.sh** script to include storage event from Broker output.
- [Monitoring] Fixed an issue where MAP was not supporting performance data returned by Cisco ASA plugin.
- [Server] Fixed a migration issue with images that could stop the migration process.
- [Server] Fixed an issue that caused server to crash on corrupted metrics.
- [Server] Fixed an issue that prevented the migration between MAP Legacy and MAP.
- [Server] Fixed an issue that prevented access to MAP in HTTPS.
- [Server] Fixed an issue to allow more than 25 maps to be migrated.
- [Server] Fixed an issue with authentication when several sessions are active.
- [Server] Fixed an issue with insert an object in a link prevented the map from being saved.
- [Server] Fixed an issue with map sharing.
- [Server] Fixed an issue that made new hosts and services unavailable until restart.
- [Server] Fixed an issue with the server startup error caused by platform without virtual hosts.
- [UI] Fixed an issue where tooltips were not displayed for "old perfdata" plugin in the graph.
- [UI] Fixed an issue where updating a resource was not displaying the new resource name.
- [UI] Fixed an issue where Host and Service icons configuration was not handled properly.
- [UI] Fixed an issue where some old media in maps were not displayed correctly, when custom URI is set.
- [UI] Fixed an issue where a blank page was displayed when the user clicked on a host name inside a map.
- [UI] Fixed an issue where dark theme was not applied on tooltips in Geo views.
- [UI] Fixed issues and improved the map display (visibility, background and breadcrumb color).
- [UI] Fixed the background layout that was not fitting large maps.
- [Viewer] Fixed an issue that caused the unit not matching the axis on graph widget.
- [Viewer] Fixed an issue with colors for a "Text" type element that was ignored by the viewer.

#### Enhancements

- [API] Improved the API response when server is starting up.
- [Editor] You can now manage font properties in the editor.
- [Editor] You can now manage the view background color.
- [Editor] Updated dependencies to avoid security issues.
- [UI] Added resource parent name in graph.

### 22.10.4

Release date : `January 17, 2023`

#### Bug fixes

- Fixed an issue preventing users to create a map with the API.
- Fixed an issue that caused server to fail to start when trying to load empty output.
- Fixed links where empty bendpoints caused maps to become not editable.
- Resource name properties are now used for links when saving maps.
- Fixed an issue that caused metric links in the same views to display the same value after the first refresh.

### 22.10.3

Release date: `December 16, 2022`

#### Bug fixes

- Added more fixes for server startup error due to duplicate key.

### 22.10.2

Release date: `December 9, 2022`

#### Bug fixes

- Fixed server startup error due to duplicate key.

### 22.10.1

- First release: `November 29, 2022`

The new MAP extension is now available in a full web version with a new server, under the name of MAP. The former version, including desktop client and associated server, becomes MAP Legacy.

- Web editor: Create and edit your views directly from your web browser.
- New server: Brand new server and data model providing better performance.
- Migration process: Integrated migration process of your legacy views.

## Centreon MAP Legacy

### 22.10.17

Release date: `October 7, 2024`

#### Bug fixes

- [Diagnostic] Fixed an issue in the diagnostic script when MAP was configured in HTTPS.

### 22.10.13

Release date: `November 22, 2023`

#### Bug fixes

- [Server] Fixed an issue that caused server to crash on duplicated Centreon modules.
- [Viewer] Fixed the redirection to monitoring pages from tooltips.

### 22.10.12

Release date: `October 04, 2023`

#### Security fixes

- [Server] Fixed a vulnerable property.
- [Server] Updated dependencies.

#### Bug fixes

- [Packaging] Fixed a Debian packaging issue preventing MAP from starting.

### 22.10.11

Release date: `September 07, 2023`

#### Bug fixes

- [Packaging] Fixed a regression in centreon-map-server and centreon-map-engine packaging that caused a broken dependency situation with Java.

### 22.10.10

Release date: `August 31, 2023`

- No change.

### 22.10.9

Release date: `August 03, 2023`

- No change.

### 22.10.8

Release date: `July 28, 2023`

- No change.

### 22.10.7

Release date: `July 20, 2023`

- No change.

### 22.10.6

Release date: `June 5, 2023`

- No change.

### 22.10.5

Release date: `April 24, 2023`

- No change.

### 22.10.4

Release date: `January 17, 2023`

- No change.

### 22.10.3

Release date: `December 16, 2022`

- No change.

### 22.10.2

Release date: `December 9, 2022`

- No change.

### 22.10.1

Release date: `November 29, 2022`

#### Security fixes

- Actuator endpoints are now disabled by default, except for health and metrics.
- Fixed the security issue CVE-2022-42889 (Text4shell).

#### Bug fixes

- Fixed an issue where resources' tooltips in the MAP legacy widget could not be displayed properly.

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

#### Performance

- Move to Java 17

## Centreon BAM

### 22.10.7

Release date: `December 16, 2024`

#### Security fixes

- [Security] Fixed SQLi in the user settings form, only accessible to authenticated users with high privilege access. (CVE-2024-45757)

### 22.10.6

Release date: `April 17, 2024`

#### Security fixes

- Upgraded svg-sanitize dependency.
  
### 22.10.5

Release date: `November 22, 2023`

#### Bug fixes

- [UI] Renamed "massive change" to "mass change" in the "More actions" selectbox.
  
### 22.10.4

Release date: `July 20, 2023`

#### Bug fixes

- [UI] Fixed the way column names were displayed in the acknowledgment description pop-up.

### 22.10.3

Release date: `June 5, 2023`

#### Bug fixes

- [Rules] Fixed an issue that would make the image drop down for BAM edition panel reset when scrolling.
- [Rules] Fixed boolean rules when resource contains boolean operator in its name.

### 22.10.2

Release date: `April 24, 2023`

#### Bug fixes

- [KPI] Fixed a flaw in the KPI configuration export process to Remote Servers that caused the KPIs' states to be reset at each export of the configuration.
- [Reporting] Fixed an export issue that prevented Remote Servers from displaying BAM reporting stats.
- [Rules] Fixed an error message in boolean rules when a host name was longer than 15 characters.
- [UI] Fixed a cosmetic issue in BAM table header.

### 22.10.1

Release date: `February 9, 2023`

#### Bug fixes

- Fixed an issue where 0 as a value was not displayed in BA notification fields.

#### Enhancements

- It is now possible to use BAM notifications commands via CLAPI.

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

## Centreon MBI

### 22.10.12

Release date: `December 16, 2024`

#### Enhancements

#### Bug fixes

- [MBI] Fixed an issue preventing a report from being generated.
- [MBI] Fixed the SFTP Connection with configuration key as it was causing an error on job publication.

#### Security fixes

- [Security] Fixed file permission in purgeArchive cron file, only accessible to authenticated users with high privilege access.
- [Security] Replaced dom4j with another package.
- [Security] Upgraded Apache Commons Collection dependency.
- [Security] Upgraded XmlBeans dependency.

### 22.10.11

Release date: `October 7, 2024`

#### Enhancements

- [SELinux] Packaged SELinux rules for centreon-mbi.
  
#### Bug fixes

- [Dependencies] Upgraded Spring framework.

#### Security fixes

- [Security] Fixed SQLi in configuration pages, only accessible to authenticated users with high privilege access (CVE-2024-45754).

### 22.10.10

Release date: `July 4, 2024`

#### Bug fixes

- [Packaging] Fixed an issue with the report design functionality on Debian.

### 22.10.9

Release date: `April 17, 2024`

#### Enhancements

- [Packaging] Correct rights are now set for Centreon MBI configuration files.

### 22.10.8

Release date: `January 18, 2024`

#### Bug fixes

- [Reports] Fixed an issue that prevented reports to be sent by email with Office 365.

### 22.10.7

Release date: `December 21, 2023`

#### Bug fixes

- [MBI] Updated dependency.

### 22.10.6

Release date: `September 14, 2023`

#### Bug fixes

- [Packaging] Fixed a regression in the packaging of centreon-bi-engine that caused a broken dependency situation with Java.

### 22.10.5

Release date: `August 31, 2023`

#### Bug fixes

- [Packaging] Fixed ETL script references in Debian packaging.
- Fixed a 500 error on the Grafana connector when retrieving timeseries for BAM business activities.

### 22.10.4

Release date: `July 28, 2023`

#### Bug fixes

- Fixed centreonBIETL_legacy script by calling only legacy scripts.
- Removed old images in forms.

### 22.10.3

Release date: `July 20, 2023`

#### Bug fixes

- [Compatibility] Fixed the compatibility between Gorgone and MBI by adding the missing no-purge option in eventStatisticsBuilder and perfdataStatisticsBuilder scripts.
- [Configuration] Removed the image beside "Report specific parameters" that was not displayed properly.
- [Install] Added missing Gorgone dependencies required by the MBI ETL.
- [Reporting] Fixed the display of the duration of ongoing alerts in the Hostgroups-Service-Current-Events report.

### 22.10.2

Release date: `June 5, 2023`

#### Bug fixes

- [Core] Improved database column size.
- [UI] Fixed empty "Current usage" column in mbi-storage-list-near-saturation widget.

### 22.10.1

Release date: `February 9, 2023`

#### Bug fixes

- [ETL] Fixed the name of the scripts called by the ETL.

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

#### Performance

- ETL daily and rebuild optimizations
- Move to Java 17

## Centreon Auto Discovery

### 22.10.5

Release date: `November 22, 2023`

- [Core] Updated dependencies.

### 22.10.4

Release date: `October 04, 2023`

- Fixed an issue where new services were created when updating the discovery job on existing hosts.

### 22.10.3

Release date: `August 31, 2023`

- Fixed task execution schedule.

### 22.10.2

Release date: `April 24, 2023`

- [UI] Fixed a cosmetic issue in BAM and Autodiscovery table header.

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

#### Enhancements

- Already monitored hosts can now be updated by Host Discovery in manual mode. It had been made available in automatic mode in the 22.04 release, it is now available in manual mode. Changes can be made to macros, templates, host groups, host categories, host severity and the monitoring server
- When no template mappers apply to a host, one can choose whether the default template must be applied or if the host must not be monitored at all

## Centreon Plugin Packs Manager

### 22.10.1

Release date: `April 17, 2024`

#### Bug fixes

- Fixed the absence of error displayed when the deletion of a Monitoring Connector is not possible.

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

## Centreon License Manager

### 22.10.1

Release date: `June 5, 2023`

#### Enhancements

- [UI] Improved license upload modal.

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

## Centreon Anomaly Detection

### 22.10.6

Release date: `July 4, 2024`

#### Bug fixes

- [Packaging] Added missing dependencies on anomaly detection.
- [Packaging] Various anomaly detection perl installation scripts are now deployed on **/usr/share/perl5/centreon/anomalydetection** instead of **/%\{perl_vendorlib\}/centreon**.

### 22.10.5

Release date: `November 22, 2023`

#### Bug fixes

- [UI] Renamed "massive change" to "mass change" in the "More actions" selectbox.
  
### 22.10.4

Release date: `July 28, 2023`

#### Bug fixes

- [Prediction] Fixed Anomaly Detection script that was not sending data history.

### 22.10.3

Release date: `July 20, 2023`

#### Bug fixes

- [Prediction] Fixed an Anomaly Detection script that was not sending data history.

### 22.10.2

Release date: `April 24, 2023`

#### Bug fixes

- [Install] Fixed a packaging issue that prevented Anomaly Detection from being installed.

### 22.10.1

Release date: `February 9, 2023`

- Fixed an issue that caused the interface to become stuck in a loading state.

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

#### Enhancements

- Added new type of resources in Resource Status (display and filter)
- Added prediction envelope size management by user from Resources Status
- Downtimes on regular services are now propagated to related Anomaly Detection service(s)

## Centreon Data Source For Grafana

Release date: `August 31, 2023`

- Fixed a 500 error on the Grafana connector when retrieving timeseries for BAM business activities.

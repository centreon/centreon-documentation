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

Read more about version 22.10 in our [blog post](https://www.centreon.com/en/blog/centreon-fall22-whats-new-in-the-22-10-software-version/).

## Centreon MAP

### 22.10.5

Release date: `soon`

#### Bug fixes

- Fixed an issue in shapes edition modal that caused scrollbar to be reset when browsing images.
- Fixed an issue preventing the installation of centreon-map-engine on the same machine as centreon-map-server.	
- Fixed an issue that prevent the migration between MAP legacy and MAP.
- Fixed an issue when tooltip don't display for "old perfdata" plugin in the graph.
- Fixed diagnostique.sh script to include storage event from broker output.
- Fixed an issue when tooltip don't display for "old perfdata" plugin in the graph.
- Fixed an issue that prevented the migration between MAP legacy and MAP.
- Fixed an issue that prevented the tooltip for the "old perfdata" plugin to be displayed in the graph.
- Fixed issues and improved the map display (visibility, background and breadcrumb color).
- Fixed an issue to allow more than 25 maps to be migrated.
- [CEIP] Added more details for MAP engine telemetry.
- Fixed bug who display a blank page when user click on host name inside a map.
- Fixed the server startup error due to PF without virtual hosts.
- Fixed an issue with insert an object in a link prevented the map from being saved.
- Fixed an issue with authentication when several sessions are active.
- [API] Fixed an issue with create element in view that could break default icon.
- Fixed an issue with map sharing.
- Fixed an issue with Host and Service icons configuration that were not handled properly.
- Fixed Colors for a "Text" type element is ignored by the viewer. 
- Fixed issue when Dark Theme is not apply on tooltip in Geo Views / MAP ENGINE.
- Fixed bug when custom UR is set, some old media in map are not displayed correctly.
- Fix migration issue with images that could stop migration process.
- Fixed the background layout not fitting large map.
- Fixed an issue when updating a resource that did not display the new resource name.
- Fixed issue that made new hosts and services unavailable until restart. 

#### Enhancements

- Managed view background color.
- Manage font properties in editor.
- Added resource parent name in graph.
- Improve api response when server is starting up.

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

### 22.10.4

Release date : `January 17, 2023`

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

### 22.10.1

Release date: `February 9, 2023`

- [ETL] Fixed the name of the scripts called by the ETL.

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

#### Performance

- ETL daily and rebuild optimizations
- Move to Java 17

## Centreon Auto Discovery

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

#### Enhancements

- Already monitored hosts can now be updated by Host Discovery in manual mode. It had been made available in automatic mode in the 22.04 release, it is now available in manual mode. Changes can be made to macros, templates, host groups, host categories, host severity and the monitoring server
- When no template mappers apply to a host, one can choose whether the default template must be applied or if the host must not be monitored at all

## Centreon Plugin Packs Manager

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

## Centreon License Manager

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

## Centreon Anomaly Detection

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

---
id: introduction
title: Introduction to Centreon MAP
---

The graphical view capabilities in Centreon relies on the Centreon MAP
module.

Centreon MAP is a data-mapping and visualization tool designed for IT
Operations management (ITOM) administrators and developers. It is
capable of displaying efficient graphic insights and mapping correlated
data in customized user-relevant views.

Centreon MAP module is currently available in two modes:
- [Centreon MAP (Legacy)](#centreon-map-legacy) which requires a desktop client installation. See an overview [here](#map-legacy-overview).
- [Centreon MAP](#centreon-map) which is a web interface version. See an overview [here](#map-overview).

Main features are available in the two modes. However, some items such as using system commands or granting access rights were not necessary or had to be reworked in the MAP version.

## Centreon MAP (Legacy)

> Centreon MAP is a Centreon extension that requires a valid [license](../administration/licenses.md).
> To purchase one and retrieve the necessary repositories, contact [Centreon](mailto:sales@centreon.com).

### Procedures

Use the following procedures to use and administrate Centreon MAP (Legacy):

- **Using MAP (Legacy)**
  - [Creating a standard view](create-standard-view.md) using the MAP (Legacy), also named Map4 desktop client. This topic also describes best practices and limitations.
  - [Creating a geo view](create-geo-views.md) using the web interface. This procedure explains how to display your resources across a defined geographical area.
  - [Displaying views](display-view.md) from the web interface. This topic also describes dedicated features.
  - [Sharing a view](share-view.md) allows you to share views to a limited audience.

- **Administrating MAP (Legacy)**
  - [Installing Centreon MAP (Legacy) extension](install.md) describes prerequisites and procedures to install the MAP (Legacy), also named Map4 desktop client.
  - [Updating the extension](update.md) describes the update process of MAP (Legacy).
  - [Upgrading the extension](upgrade.md) describes the update process of MAP (Legacy).
  - [Migrating the extension](migrate.md) describes how to move the MAP (Legacy) server to another server.
  - [Configuring rights](configuration.md) explains how to administrate users rights and describes customization settings.
  - [Installing on a remote server](remote-server.md) explains how to install MAP (Legacy) on a remote server.
  - [Advanced configuration](advanced-configuration.md) describes advanced procedures to configure MAP (Legacy).
  - [Known issues](known-issues.md) is a list of issues you may encounter using MAP (Legacy).
  - [Troubleshooting MAP (Legacy)](troubleshooter.md) helps you to solve some issues occuring in MAP (Legacy).

### MAP (Legacy) overview

Here is an overview of MAP (Legacy). You need first to create logical views using the Desktop client:

![image](../assets/graph-views/desktop.gif)

Then you can visualize them directly in your browser:

![image](../assets/graph-views/first_page_web.png)

You can also use the geographical view to display resources in the way your IT is spread
over a city, country or world:

![image](../assets/graph-views/display_geo_view.gif)

Both types of views may be displayed in the same Centreon web user interface:

- Either from the Centreon MAP dedicated user interface, which also includes a search facility.
- Or within a Custom View, using the dedicated Centreon MAP widget.

## Centreon MAP

Centreon MAP is a solution fully available in the Centreon web interface while offering you the best possible experience in creating, visualizing and sharing graphical representations of your monitored infrastructure.

The difference with the MAP (Legacy) version is that MAP provides you with an edition tool fully embedded in the web interface. You do not need to install anything on your desktop. You can navigate easily between the edition mode and the view mode.

> If you already used the MAP (Legacy) version, note that you can easily import your legacy maps into the MAP interface.

### Procedures

Use the following procedures to use and administrate Centreon MAP:

- **Using MAP**
  - [Managing maps on MAP](map-web-manage.md) gives you information about how to create and manage maps from the Centreon MAP interface.
  - [Using the map editor](map-web-editor.md) explains how to build maps using the editor tool.

- **Administrating MAP**
  - [Installing MAP](map-web-install.md) describes prerequisites and procedures to install MAP.
  - [Installing MAP on a remote server](map-web-install-remote.md) explains how to install MAP on a remote server.
  - [Updating MAP](map-web-update.md) describes the update process of MAP.
  - [Importing legacy maps into MAP](import-into-map-web.md) explains how to migrate your legacy maps into the MAP interface.
  - [Installing on a remote server](remote-server.md) explains how to install MAP on a remote server.
  - [Managing access rights on MAP](map-web-manage.md) describes the different rights and permissions on maps.
  - [MAP known issues](map-web-known-issues.md) is a list of issues you may encounter using MAP.
  - [MAP troubleshooting](map-web-troubleshooting.md) helps you to solve some issues occuring in MAP.

### MAP overview

Create, customize, and visualize your maps within a single web interface.

You need first to create your logical views using the MAP editor:

![image](../assets/graph-views/ng/map-web-editor-view.png)

Then you can visualize your map directly in the view mode:

![image](../assets/graph-views/ng/map-web-global-view.png)

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

You can benefit from Centreon MAP by using it in two modes:
- [Centreon MAP Legacy](#centreon-map-legacy) which requires a desktop client installation.
- [Centreon MAP Web](#centreon-map-web) which is a web interface version.

Main features are available in the two modes. However, some items such as using system commands or granting access rights were not necessary or had to be reworked in the MAP Web version.

## Centreon MAP Legacy

> Centreon MAP is a Centreon **extension** that requires a valid [license](../administration/licenses.md).
> To purchase one and retrieve the necessary repositories, contact
> [Centreon](mailto:sales@centreon.com).

Use the following procedures to use and administrate Centreon MAP Legacy:
- Use MAP Legacy:
  - [Create a standard view](create-standard-view.md)
  - [Create a geo view](create-geo-views.md)
  - [Display views](display-view.md)
  - [Share a view](share-view.md)

- Administrate MAP Legacy:
  - [Install Centreon MAP extension](install.md)
  - [Update the extension](update.md)
  - [Migrate the extension](migrate.md)
  - [Configure](configuration.md)
  - [Install on a remote server](remote-server.md)
  - [Advanced configuration](advanced-configuration.md)
  - [Known issues](known-issues.md)
  - [Troubleshooting MAP](troubleshooter.md)

Here is an overview of MAP Legacy. You need first to create logical views using the Desktop client:

![image](../assets/graph-views/desktop.gif)

Then you can visualize them directly in your browser:

![image](../assets/graph-views/first_page_web.png)

You can also use the geographical view to display resources in the way your IT is spread
over a city, country or world:

![image](../assets/graph-views/display_geo_view.gif)

Both types of views may be displayed in the same Centreon web user interface:

- Either from the Centreon MAP dedicated user interface, which also includes a
  search facility.
- Or within a Custom View, using the dedicated Centreon MAP widget.

## Centreon MAP Web

Use the following procedures to use and administrate Centreon MAP Legacy:
- Use MAP Legacy:
  - [Manage maps on MAP Web](map-web-manage.md)
  - [Use the map editor](map-web-editor.md)

- Administrate MAP Legacy:
  - [Install MAP Web](map-web-install.md)
  - [Install MAP Web on a remote server](map-web-install-remote.md)
  - [Update MAP Web](map-web-update.md)
  - [Import legacy maps into MAP Web](import-into-map-web.md)
  - [Install on a remote server](remote-server.md)
  - [Manage access rights on MAP Web](map-web-manage.md)
  - [MAP Web known issues](map-web-known-issues.md)
  - [MAP Web troubleshooting](map-web-troubleshooting.md)

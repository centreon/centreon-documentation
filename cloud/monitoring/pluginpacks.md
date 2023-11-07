---
id: pluginpacks
title: Monitoring Connectors
---

## What is a Monitoring Connector?

A Monitoring Connector is a downloadable package containing a set of configuration
templates that make it fast and easy to monitor your IT infrastructure.
Applying a Monitoring Connector is the easiest way to monitor a host. There is one Monitoring Connector per type of monitored equipment (e.g. a Monitoring Connector to monitor Linux servers, a Monitoring Connector to monitor Windows servers, etc.).

Monitoring Connectors consist of 2 elements, which are installed separately:

- A plugin that executes the monitoring commands from a poller. All plugins are
already installed on your pollers.

- A pack that contains commands, host templates and service templates.
For each type of equipment,
 the templates determine which indicators will be
monitored and set default warning and critical thresholds (these may be
fine-tuned later on). If you want to use a pack, you must install it on the central server.

  Some packs also contain discovery rules.

## What do I need to do to be able to use a Monitoring Connector?

### Checking the monitoring procedure

Some Monitoring Connectors require extra configuration steps. Read the monitoring procedure for each installed pack
to understand the contents of the pack and to find out about any prerequisites. Go to page **Configuration > Monitoring Connectors Manager** and click the ``i`` icon of each pack to access its documentation:

![image](../assets/configuration/pluginpacks/doc.png)

### Installing the pack

You can access the Monitoring Connectors catalog on the **Configuration > Monitoring Connectors Manager** page:

![image](../assets/configuration/pluginpacks/pp_list.png)

To install a pack, hover over the icon with the mouse and click the ``+``

![image](../assets/configuration/pluginpacks/install_pp.png)

You can also click the Monitoring Connector to display more details and click the ``+``

![image](../assets/configuration/pluginpacks/install_pp_2.png)

Once the pack is installed, it has a green outline and a green check mark.

| **Before installation**                                          | **After installation**                                          |
| ---------------------------------------------------------------- | --------------------------------------------------------------- |
| ![image](../assets/configuration/pluginpacks/before_install.png) | ![image](../assets/configuration/pluginpacks/after_install.png) |

### Managing dependencies

During installation, some objects in the pack may not be installed. These objects are often additional configuration
objects and are not required to deploy the configuration templates provided by the pack.

Most of the time, it is necessary to update your Centreon platform and then reinstall your pack.

In the following example, the "autodiscover" object is a discovery rule for the "Centreon Auto Discovery" module, but
this one is only available for Centreon in version 18.10.x:

![image](../assets/configuration/pluginpacks/objects_not_installed.png)

## How do I use a Monitoring Connector?

Apply a template from a Monitoring Connector to a host or service to start monitoring it:

1. Create the host/the service, and in the **Template(s)** field, choose the template for the Monitoring Connector you want.

2. [Deploy](monitoring-servers/deploying-a-configuration.md) the configuration. Your host or service is now monitored using the Monitoring Connector.

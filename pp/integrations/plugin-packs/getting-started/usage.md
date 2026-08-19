---
id: what-are-connectors-for
title: What are monitoring connectors used for?
---

## What are monitoring connectors used for?

To monitor your equipment, Centreon requires information about it to figure out exaclty which equipment it is, what data you are trying to get out of it and the command lines required to perform the checks. Monitoring connectors can provide all of this to Centreon, allowing you to save time spent configuring Centreon. Connectors also have preconfigured alert and critical thresholds for the equipment it is designed to monitor which can be particularly helpful if you are unsure of what these thresholds should be. 
All of this remains highly-customizable so you can also use connectors as a starting point to build up on.

## What am I getting when I download a connector? What do its different components do?

The monitoring connector is made of a pack (preconfigured templates) and a plugin (the probe that executes the commands). Plugins are not downloaded along the monitoring connectors and must be installed separately, this is more extensively explained in the guides specific to each connector.
Some connectors may also have a "discovery" feature that allows them to find by themselves a certain type of resources to monitor.
The pack contains information such as the services to monitor, their alert thresholds and commands necessary to their checks. The pack allows for the set up of a predetermined configuration for the services but this remains highly customizable later on.
The command lines contain what we call macros: placeholder text that is to be replaced with information specific to each object to monitor.

Service and host templates are preconfigurations. For example, a monitoring connector for servers will have the configuration necessary to monitor the CPU usage but also alert thresholds already established for the servers the user will add to Centreon.
When a check request is made, Centreon Engine takes the corresponding command line, replaces the default text of the macros by the identifiers of the equipment that needs to be checked, adapts to the appropriate protocol (like HTTP for an API) and specifies the information it wants to obtain. Once all the blanks are filled in, the command is sent to the plugin to be executed and retrieve the data from the service.


## Can I still use Centreon without connectors?

Yes, users can, if they prefer it, set up by themselves all the fonctions obtained from connectors (by creating custom commands). The goal of connectors is to save the time that would be spent configuring everything: connectors are ready to be implemented from the moment they are installed.

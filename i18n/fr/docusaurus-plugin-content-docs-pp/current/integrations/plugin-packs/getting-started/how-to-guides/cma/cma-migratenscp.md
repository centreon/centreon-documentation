---
title: Migrate from NSClient++ to CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If you're already using NSClient++ or NRPE with Centreon, this guide will help you gradually switch to Centreon Monitoring Agent.

 

The Centreon Monitoring Agent offers a number of advantages over NSClient and NRPE: 
 

* Better performance in executing controls, i.e. reduced impact on the host.
* Enhanced security, implemented by default (TLS encryption, authentication token).
* Easy configuration with a dedicated interface, especially for connection security.
* An "offline" mode for installing plugins on hosts without internet access.
* Command-line installation mode for mass deployment under Windows.
* A monitoring method based solely on passive checks.
* Full Centreon support and dedicated roadmap.
 

 

Agent deployment & configuration
 
First create a token using the dedicated interface (Administration > Authentication Tokens)
The same token can be used for one or more pollers and agents.

 

Then deploy and configure the Centreon Monitoring Agent using the documentation.
The public certificate and private key (.key) must be stored on the poller (/etc/pki) with the appropriate rights.

The public certificate (.crt) must be stored on the host, and configured within the agent.

The poller endpoint must match the poller's DNS, and the certificate's Common Name.

You can generate a self-signed certificate on the poller using the following command:

Warning: the Common Name (here: "poller") must match the DNS used to configure the agent on the host.

 

openssl req -new -newkey rsa:2048 -days 365 -nodes -x509 -keyout /etc/pki/agent.key -out /etc/pki/agent.crt -subj '/CN=poller' -subj '/CN=poller'.

Monitoring configuration
 
Install the dedicated Windows and/or Linux Monitoring connectors (as required)
Here is the correspondence with NSClient/NRPE Connectors:


Windows NSClient API
Windows Centreon Monitoring Agent
Windows NSClient 0.5 NRPE
Windows Centreon Monitoring Agent
Linux NRPE4
Linux Centreon Monitoring Agent
 
Modifying host templates on existing resources (hosts)
Here is the correspondence with NSClient++/NRPE host templates:

OS-Windows-NSClient-05-Restapi-custom
Windows Centreon Monitoring Agent
OS-Windows-NSClient-05-NRPE-custom
Windows Centreon Monitoring Agent
OS-Linux-NRPE4-custom
Linux Centreon Monitoring Agent

Adapt/replace existing services
Centreon plugin commands
These are the same plugins as those for NSClient/NRPE; only the command changes.

Macros with the same name are kept, so you can replace the existing service template with the one linked to the Centreon Monitoring Agent.

For example: OS-Linux-Memory-NRPE4 → OS-Linux-Memory-NRPE4-custom

Native check commands (NSClient)
The Centreon Monitoring Agent provides native checks that differ in structure (JSON command) from those of NSClient++ and the rest of the Centreon ecosystem.

It will be necessary to create a new service or modify the existing service template by adapting the macros.

For example: OS-Windows-NSClient05-NRPE-Cpu or OS-Windows-NSClient05-Restapi-Cpu

→ OS-Windows-Centreon-Monitoring-Agent-CPU

Customizable check commands
These scripts remain compatible with the Centreon Monitoring Agent. You will need to adapt the commands (or duplicate them to work in double run mode).
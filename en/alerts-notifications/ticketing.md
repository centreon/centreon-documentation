---
id: ticketing
title: Ticketing
---

The **Centreon Open Tickets** is a community module developed to create tickets to an ITSM platform using API.

Once done provider configuration, the module allows for an operator to create tickets for hosts and services in a
non-ok state using a dedicated widget. Indeed, a button associated with each host or service allows you to connect to
the API and create the ticket while offering the possibility to acknowledge in same time the object.

Regarding the widget configuration, it is possible to see the created tickets by presenting tickets ID and date of
creation of these.

## Installation

### Installing packages

Execute the following command:

```Bash
yum install centreon-open-tickets
```

### UI installation

After installing the rpm, you have to finish the module installation through the web frontend. Go to
**Administration \> Extensions \> Manager** menu and search **open tickets**. Click on **Install selection**:

![image](assets/alerts/open_tickets_install_01.png)

Your Centreon DSM Module is now installed.

![image](assets/alerts/open_tickets_install_02.png)

## Configuration

### Select a provider

The module offers many ready-to-use providers:

* [BMC Footprints](../integrations/open-tickets/bmc-footprints)
* [BMC Remedy](../integrations/open-tickets/bmc-remedy)
* [EasyVista](../integrations/open-tickets/easyvista)
* [Generic email](../integrations/open-tickets/mail)
* [GLPI](../integrations/open-tickets/glpi)
* [GLPI RestAPI](../integrations/open-tickets/glpi-restapi)
* [iTop](../integrations/open-tickets/itop)
* [IWS Isilog](../integrations/open-tickets/iws-isilog)
* [Jira](../integrations/open-tickets/jira)
* [OTRS RestAPI](../integrations/open-tickets/otrs-restapi)
* [Request Tracker RestAPI](../integrations/open-tickets/request-tracker-restapi)
* [Serena](../integrations/open-tickets/serena)
* [ServiceNow](../integrations/open-tickets/servicenow)

Each provider has its own configuration, however, adding a provider in Centreon can be done in the following way:

Go to the **Configuration > Notifications > Open Tickets > Rules** menu.
Click on **Add** button:

![image](assets/alerts/open_tickets_add_provider_01.png)

Define **Rule name** and select **Provider**:

![image](assets/alerts/open_tickets_add_provider_02.png)

A new form appear. Configure the provider regarding his own configuraition.

### Hosts & services

In order for resources (hosts and services) to receive a ticket number, it is necessary to add a personalized macro to
them.

The best way is to create these macros in a host template and a service template inherited by all objects using models
from which all resources will inherit.

Go to the **Configuration > Hosts > Templates** menu and look for the **generic-active-host-custom** template and edit
this one. Add the macro **TICKET_ID** and click on **Save**:

![image](assets/alerts/open_tickets_macro.png)

Go to the **Configuration > Services > Templates** menu and look for the **generic-active-service** template and edit
this one. Add the macro **TICKET_ID** and click on **Save**:

![image](assets/alerts/open_tickets_macro.png)

### Widget configuration

To use the widget you have to add it into a custom view. Go to **Home > Custom Views** menu, select your view and click
on **Add widget** button.

Define a title for your widget (for example: Open-Tickets) and select the widget **Open Tickets**. Do the same
manipulation to add again this widget.

On the first widget, to open ticket, click on the **configuration** button:

* Select the **Rule** previously defined
* **Don't check** the box **Opened Tickets**
* Select other filters
* **Don't check** the boxes **Display Ticket ID** and **Display Ticket Time**

On the second widget, to display opened tickets, click on the **configuration** button:

* Select the **Rule** previously defined
* Check the box **Opened Tickets**
* Select other filters
* Check the boxes **Display Ticket ID** and **Display Ticket Time**

![image](assets/alerts/open_tickets_add_widget.png)

## User guide

### Open a ticket

To open a ticket, select object using checkbox and in the **-- More actions --** menu select needed action:

![image](assets/alerts/open_ticket_add_01.png)

A popup appear to define a comment. Click on **Open** button to open ticket:

![image](assets/alerts/open_ticket_add_02.png)

Once the ticket created the popup displays the ticket ID:

![image](assets/alerts/open_ticket_add_03.png)

Select objects disappear form the widget to open tickets:

![image](assets/alerts/open_ticket_add_04.png)

### Close a ticket

To close a ticket, select object using checkbox and in the **-- More actions --** menu select needed action:

![image](assets/alerts/open_ticke_close_ticket_01.png)

The ticket is closed (only for Centreon):

![image](assets/alerts/open_ticket_close_ticket_02.png)

Select objects disappear form the opened tickets widget:

![image](assets/alerts/open_ticket_close_ticket_03.png)

## Advanced configuration

This module offers ready-to-use providers. However, depending on the configuration of your ITSM, it may be necessary to
modify these to adapt them to your environment.

### List definition

Before opening a ticket, an user can choose some options in a popup. An option can be a select list. In the configuration
provider, you can configure it in ``Lists`` and ``Custom list definition``. For each entry in ``Lists``, you can define:

* **Id** : alphanumeric value (must be unique) 
* **Label** : displayed in the popup 
* **Type** : which kind of list. There is 3 kinds of lists

  * Provider lists (data from the ticketting software directly)
  * Centreon lists (like ``Host group``)
  * Custom lists (data from ``Custom list definition`` configuration. **Id** fields must be identical)

* **Mandatory** : checked it if the user needs to set the option

![image](assets/alerts/open_ticket_advanced_list_01.png)

The module stores the user list selection in an array (can be used in smarty section like ``body`` 
or ``mapping ticket arguments``). There are 3 fields (**LIST_ID** must be replaced):

* {$select.LIST_ID.id}
* {$select.LIST_ID.value}
* {$select.LIST_ID.label}

### Chaining rules

After opening a ticket, you may need to send an email. The chaining rules system is designed to do it:

* Create a new rule with the name ``emailme`` and the provider ``Mail``
* Configure the ``emailme`` in the rule of your opening system

![image](assets/alerts/open_ticket_advanced_chain_01.png)
    
### Commands

After opening a ticket, you can also configure some commands to be executed. 

![image](assets/alerts/open_ticket_advanced_cmd_01.png)

---
id: groups
title: Groups
---

## Description

In Centreon, it is possible to group together one or more objects within different groups:

* Host Groups
* Service Groups
* Contact Groups

Generally speaking, groups are containers in which sets of objects having a common property can be grouped together:

* Same material identity (Dell, HP, IBM, etc., servers), logical identity (network equipment) or geographical identity
(Europe, Asia, Africa, North America, etc.)
* Belonging to the same application (CMS application, etc.) or to a same sector of activity (Salary management, etc.)
* Etc.

### Service Groups and Host Groups

Host groups and service groups are used to group together objects by logical entities. They are used to:

* Configure ACLs to link a set of resources to a type of profile
* Allow viewing of availability reports per group. Generate a “Paris Agency” availability report for resources.
* Enable viewing the status of a set of objects by selecting in the search filters of a group of objects
* Search several performance graphs quickly by browsing the object tree structure by group and then by resource

Generally speaking, we try to group together hosts by functional level. E.g.: DELL and HP hosts or Linux, Windows,
etc., hosts.
We also try to group services by application jobs. E.g.: Salary management application, ERP Application, etc.

> For the hosts belonging to a host group, the retention of RRD files can be defined in the host group. This definition
> overrides the global definition. In the event that the same host belongs to several groups each possessing a
> retention definition, the highest value will be selected for the host.

### Contact Groups

Contact Groups are used to notify contacts:

* On definition of a host or of a service
* On definition of an escalation of notifications

In addition, the groups of contacts are also used during the definition of an access group.

Consequently, it is necessary to group together contacts in a logical way. Most of the time, they are grouped together
according to their roles in the information systems. E.g.: DSI, Windows Administrators, Linux Administrators, Person
in charge of the application of Salary Management, etc.

## Creating a host group

Go to the **Configuration > Hosts > Host Groups** menu and click on **Add**

![image](../assets/configuration/07hostgroup.png)

* The **Host Group Name** and **Alias** defines the name and the alias of the host group.
* The **Linked Hosts** list allows us to add hosts in the hostgroup.
* The **Notes** field allows us to add optional notes concerning the host group.
* The **Notes URL** field defined a URL which can be used to give more information on the hostgroup.
* The **Action URL** field defined a URL normally use to give information on actions on the hostgroup (maintenance, etc.).
* The **Icon** field indicates the icon to be use for the host group.
* The **Map Icon** is the icon use for mapping.
* The **RRD retention** field is expressed in days, it serves to define the duration of retention of the services
belonging to this hostgroup in the RRD database. It will be the default duration defined in the
**Administration > Options > CentStorage** menu if this value is not defined.
* The **Status** and **Comments** fields allow to enable or disable the host group and to make comments on it.

## Creating a service group

Go to the **Configuration > Services > Service Groups** menu and click on **Add**

![image](../assets/configuration/07servicegroup.png)

* The **Service Group Name** and **Description** fields describes the name and the description of the service group.
* The **Linked Host Services** list allows us to choose the various services that will be included in this group.
* The **Linked Host Group Services** list allows us to choose the services linked to a host group that will be part
of this group.
* The **Linked Service Templates** list allows to deploy a service based on this template on all hosts linked to this group.
* The **Status** and **Comments** fields allow to enable or disable the service group and to make comment on it.

## Creating a contact group

Go to the **Configuration > Users > Contact Groups** menu and click on **Add**

![image](../assets/configuration/07contactgroup.png)

* The **Contact Group Name** and **Alias** fields define the name and the description of the contact group.
* The **Linked Contacts** list allows us to add contacts to the contact group.
* The **Status** and **Comment** fields allow to enable or disable the group of contacts and to make comment on it.

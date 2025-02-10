---
id: groups
title: Groups
---

## Description

In Centreon, it is possible to group together hosts and services within groups:

Generally speaking, groups are containers in which sets of objects having a common property can be grouped together:

* Same hardware identity (Dell, HP, IBM, etc., servers), logical identity (network equipment) or geographical identity
  (Europe, Asia, Africa, North America, etc.)
* Belonging to the same application (CMS application, etc.) or to a same sector of activity (Salary management, etc.)
* etc.

Host groups and service groups are used to group together objects by logical entities. They are used to:

* Configure ACLs to link a set of resources to a type of profile
* Allow viewing of availability reports by group. Generate a “Paris Agency” availability report for resources.
* Enable viewing of the status of a set of objects by selecting a group of objects in the search filters
* Search several performance graphs quickly by browsing the object tree structure by group and then by resource

Generally speaking, we try to group together hosts by functional level. Example: DELL and HP hosts or Linux, Windows,
etc., hosts.
We also try to group services by application jobs. Example: Salary management application, ERP Application, etc.

> For the hosts belonging to a host group, the retention of RRD files can be defined in the host group. This definition
> overrides the global definition. In the event that the same host belongs to several groups, each possessing a
> retention definition, the highest value will be selected for the host.

## Creating a host group

Go to the **Configuration > Hosts > Host Groups** menu and click **Add**

* The **Name** and **Alias** defines the name and the alias of the host group.
* The **Members** list allows us to add hosts in the hostgroup.
* The **Notes** field allows us to add optional notes concerning the host group.
* The **Notes URL** field defines a URL that can be used to give more information on the hostgroup.
* The **Action URL** field defines a URL normally used to give information on actions on the hostgroup (maintenance, etc.).
* The **Icon** field indicates the icon to be used for the host group.
* The **Map Icon** is the icon used for mapping.
* The **Geographic coordinates** field defines geographical coordinates used by the Centreon MAP module to position the resource on a map
* The **RRD retention** field is expressed in days. It is used to define the duration of retention of the services
  belonging to this hostgroup in the RRD database. It will be the default duration defined in the
  **Administration > Options > CentStorage** menu if this value is not defined.
* The **Enable/disable resource** and **Comments** fields are used to enable or disable the host group and to make comments on it.

## Creating a service group

Go to the **Configuration > Services > Service Groups** menu and click **Add**

* The **Name** and **Description** fields describe the name and description of the service group.
* The **Linked Host Services** list allows us to choose the various services that will be included in this group.
* The **Linked Host Group Services** list allows us to choose the services linked to a host group that will be part
  of this group.
* The **Linked Service Templates** list allows us to deploy a service based on this template on all hosts linked to this group.
* The **Geo coordinates** field defines geographical coordinates used by the Centreon MAP module to position the resource on a map.
  Define "Latitude,Longitude"; for example, the set of coordinates for Paris is "48.51,2.20"
* The **Status** and **Comments** fields allow us to enable or disable the service group and to comment on it.

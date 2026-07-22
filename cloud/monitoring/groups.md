---
id: groups
title: Groups
description: How to create host groups and service groups to organize resources and manage access rules
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

Go to **Configuration > Hosts > Host Groups** and click **Add**.

* Use the **Name** field to define a clear, relevant name for the host group. The name can be used in the **Resource status** search bar using the syntax "host_group:" to display the group's hosts.
* Use the **Alias** field to better describe the host group. The alias is only visible in the host groups list.
* Use the **Group members** field to add hosts to the hostgroup.
* Use the [**Resource access rules**](../administration/resource_access.md) section to grant members of the group access to the resources defined in the rule.
* The **Geographic coordinates** field is used by the Centreon [MAP module](../graph-views/introduction-map.md) to position the resource on a map.
* The selected **Icon** will be displayed in the list of host groups.
* The **Comments** added here are only visible on this window.

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

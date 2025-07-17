---
id: cloud-release-notes
title: Centreon Cloud release notes
---

## July Xth, 2025

### Centreon IT Edition

**Centreon Monitoring Agent**

As the Centreon Monitoring Agent (CMA) is about to be generally available, enhancements in its configuration are now available for our Centreon Cloud customers.

As a reminder, CMA collects metrics and computes statuses on the servers it monitors, and sends them to Centreon. 
Centreon plugins as well as Nagios-compatible plugins can be used with this agent.
More information about configuration is available in our [official documentation](/pp/integrations/plugin-packs/getting-started/how-to-guides/cma/).

This version adds the following enhancements to agent communication configuration:
- A "no TLS" option was added for troubleshooting purposes (valid for a time-limited period)
- It is now possible to store certificates in sub-directories
- It is now possible to generate a token for the CMA agent

**Centreon Dashboards**
The Metrics Graph widget has been enhanced to add the name of the service and/or host when needed in order to more clearly identify metrics that have the same name.

**Resource status**
It is now possible to export the current data being as filtered by Resource Status in CSV format.

**Meta-services**
A meta-service is a virtual service providing the aggregation of metrics from different services via a mathematical operation. 
Meta-services are managed in the same way as a service, i.e. they have thresholds, a notification process, generate a performance graph, etc.

Meta-services can now be configured in Centreon Cloud.

**Host group configuration**
The configuration page for host groups has been improved to provide a better experience with listing, adding, editing etc.

### Centreon Business Edition

**MAP**
The MAP widget is now operational when displayed in Dashboard public playlists.
An option to "display icons" was added to Map containers and resources. If checked, custom and state icons are displayed on the shape.

**Business Activities**
A new Dashboard widget was added: "Business Activity Status Timeline". it displays the distribution of current statuses on a BA, as a chronological timeline for a given time period.
In addition, a new, modern version of the BA monitoring page is now available that includes the BA tree, BA timeline, and lists BA KPIs.

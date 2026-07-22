---
id: introduction
title: Introduction to Centreon MBI
description: "Introduction to Centreon MBI and the reports it generates"
---

## Complete reporting with Centreon MBI

The reporting capabilities in Centreon rely on the **Centreon Monitoring Business Intelligence (MBI)** extension.

> Centreon MBI is a Centreon **extension** that requires a valid [license](../administration/licenses.md). To
> purchase one and retrieve the necessary repositories, contact
> [Centreon](mailto:sales@centreon.com).

Centreon Monitoring Business Intelligence (MBI) is a software tool
designed to help business users make critical decisions and to
facilitate management of an IT environment. Centreon MBI analyzes data
from monitored events, performance counters and capacity accessed from Centreon, providing you with
full visibility of your infrastructures and application activities
through *ITIL compliant* reporting.


Generate insightful statistics using our 30+ reports designs\...

![image](../assets/reporting/first_page.png)

Centreon MBI provides a full package of standard reports that address:

-   Capacity planning and management
-   Availability management
-   SLA (Service Level Agreement) management
-   Performance management.

**Here are some examples of reports available in Centreon MBI**: [Reports examples](../assets/reporting/Centreon-MBI-Sample-Reports.pdf)

or simply create your own reporting dashboard using our widgets.

![image](../assets/reporting/dashboard.png)

Main features:

-   Scheduling and generation of standalone reports in PDF, Excel, Word
    and Powerpoint formats
-   Visualization of web & interactive statistics using reporting
    widgets that are Centreon-compatible
-   Publication of reports by e-mail and other standard protocols (FTP,
    CIFS, etc.)
-   Access control to reports
-   Administration and user interface integrated into Centreon
-   Report development libraries

## What are the possible output formats?
  
* MBI generates reports in different formats: PDF, CSV, XLSX, DOCX, PPTX, ODT, ODS, ODP.
* * Not all reports can be exported to every format. See our [table of supported formats](#supported-formats) below.
* By default, these reports can be downloaded from the **Reports view** page, but they can also be configured to be sent to specific people when generated.
* Report data can also be displayed in your Centreon [custom views](../alerts-notifications/custom-views.md) using dedicated [widgets](widgets.md).

### Supported formats

| Category | Report | PDF | CSV\*| XLSX | DOCX | PPTX | ODT | ODS | ODP |
|---|---|---|---|---|---|---|---|---|---|
| **Business activity monitoring** | BV-BA-Availabilities-1 | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | BA-Availability-1 | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | BV-BA-Availabilities-List | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | BA-Event-List | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | BV-BA-Current-Health-VS-Past | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | BV-BA-Availabilities-Calendars | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| **Availability & Events** | Hostgroups-Incidents-1 | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | Hostgroups-Availability-1 | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | Hostgroup-Availability-2 | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | Hostgroup-Service-Incident-Resolution-2 | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | Hostgroup-Host-Availability-List | OK | Non-OK | BEST | OK | OK | OK | OK | OK |
| | Hostgroup-Host-Event-List | OK | Non-OK | BEST | OK | OK | OK | OK | OK |
| | Hostgroup-Service-Availability-List | OK | Non-OK | BEST | OK | OK | OK | OK | OK |
| | Hostgroup-Service-Event-List | OK | Non-OK | BEST | OK | OK | OK | OK | OK |
| | Hostgroup-Host-Pareto | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | Hostgroups-Host-Current-Events | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | Hostgroups-Service-Current-Events | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| **Performance** | Host-Graphs-V2 | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | Hostgroup-Graphs-v2 | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | Hostgroup-Capacity-Planning-Linear-Regression | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | Hostgroups-Rationalization-Of-Resources-1 | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | Hostgroup-Service-Metric-Performance-List | OK | Non-OK | BEST | OK | OK | OK | OK | OK |
| | Hostgroups-Categories-Performance-List | OK | Non-OK | BEST | OK | OK | OK | OK | OK |
| **Storage** | Hostgroups-Storage-Capacity-1 | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | Hostgroup-Storage-Capacity-2 | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | Hostgroup-Storage-Capacity-List | OK | Non-OK | BEST | OK | OK | OK | OK | OK |
| **Network** | Hostgroup-Traffic-By-Interface-And-Bandwith-Ranges | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | Hostgroup-Traffic-average-By-Interface | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | Hostgroup-monthly-network-percentile | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| **Virtualization** | VMWare-Cluster-Performances-1 | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | VMWare-VM-Performances-List | OK | Non-OK | BEST | OK | OK | OK | OK | OK |
| **Electric consumption** | Hostgroup-Electricity-Consumption-1 | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| **Profiling** | Host-Detail-2 | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | Host-Detail-3 | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | Hostgroup-Host-Details-1 | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| **Inventory & Configuration** | Hostgroups-Host-Templates | OK | Non-OK | BEST | OK | OK | OK | OK | OK |
| | Hostgroups-Service-Templates | OK | Non-OK | BEST | OK | OK | OK | OK | OK |
| | Poller-Performances | BEST | Non-Ok | OK | OK | OK | OK | OK | OK |
| | Hosts-not-classified | OK | Non-OK | BEST | OK | OK | OK | OK | OK |
| | Services-not-classified | OK | Non-OK | BEST | OK | OK | OK | OK | OK |
| **Database diagnostics** | Content-diagnostic | OK | Non-OK | BEST | OK | OK | OK | OK | OK |
| | Content-diagnostic-availability | OK | Non-OK | BEST | OK | OK | OK | OK | OK |
| | Content-diagnostic-performance | OK | Non-OK | BEST | OK | OK | OK | OK | OK |
| | Metric-integrity-check | OK | Non-OK | BEST | OK | OK | OK | OK | OK |

\* The CSV format is only for custom reports.

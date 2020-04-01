---
id: configure
title: Configure
---

Centreon MBI general options are used to configure:

-   Scheduling options for jobs that generate reports
-   Communication between Centreon MBI interface and the CBIS reporting
    engine
-   Notification parameters for Centreon MBI administrators.

## Notification options

The reporting engine can notify Centreon MBI administrators by e-mail
after each report generation. The e-mail includes:

-   The direct download links to the reports
-   Log file pertaining to the job that generated the reports.

Centreon MBI administrators can thus be informed if any job fails. This
notification, however, is different from publication by e-mail of the
actual reports sent to specific users. The notification option sends an
e-mail to Centreon MBI administrators containing only the logs of the
job that generated the report.

The notification option parameters can be modified in the menu:
*Reporting \> Business Intelligence \> General Options \| Notification
Options*

Description:


  Row                                           |  Description
  ----------------------------------------------|-------------------------------------------------
  Enable job notification for administrators    |  Enables the default notification system. This option can be disabled for scheduled jobs.
  E-mail from                                   | E-mail sender
  SMTP server                                   | SMTP server address (IP/DNS)
  SMTP port                                     | SMTP port
  Use credential                                | Uses an authentication (yes/no)
  Use SSL                                       | Uses an SSL authentification (yes/no)
  SMTP user                                     | SMTP user account
  SMTP password                                 | Password for SMTP user (*Set this parameter only if you need to update the password*)
  E-mail default title                          | Default subject line for notification e-mail, if no other is specified
  Default E-mail body                           | Default body of notification e-mail, if no other is specified
  Default E-mail footer                         | Default footer of notification e-mail, if no other is specified               
  Centreon main server web protocol             | The protocol used by Centreon web interface (http / https)
  Centreon web URL extension                    |  The Centreon server URL extension (e.g.: /centreon)
  Centreon main server                          | Centreon server address
  Contact groups                                | Centreon MBI administrators contact groups. Leave empty if you do not want to receive a notification after each report is generated.
  Testing notification                          | Enter an e-mail address into this field, then click on \"test\" to send an e-mail validating your configuration.

## Scheduler options

The following menu allows you to modify the scheduling options of the
reporting engine:

`Reporting > Business Intelligence > General Options | Scheduler options`

### CBIS properties

The Centreon MBI interface can instantly communicate with the CBIS
reporting engine. It opens a connection on the CBIS listening port to:

-   Alert about the modification or creation of a job.
-   Update the available languages for translation of the reports.
-   Test publication rule configurations.
-   Test the configuration of notifications.

Parameters description:

  -----------------------------------------------------------------------
  **Option**     **Description**
  -------------- --------------------------------------------------------
  CBIS host      IP address of server hosting the reporting engine

  CBIS port      TCP listening port for CBIS engine

  CBIS           Time limit (in seconds) for connection to the reporting
  connection     engine
  timeout        
  -----------------------------------------------------------------------

Any modification of these parameters requires restarting the CBIS daemon
(\#service cbis restart).

### Report generation scheduling properties

> Description of parameters:

  -----------------------------------------------------------------------
  **Option**                           **Description**
  ------------------------------------ ----------------------------------
  All cyclic reports generation hour   Hour for generating
                                       daily/weekly/monthly reports

  Day of month for the generation of   Day of month for generating
  monthly reports                      monthly reports

  Day of week for the generation of    Day of week for generating weekly
  weekly reports                       reports

  Maximum load allowed to the          Maximum load authorized for
  scheduler for the jobs execution     running simultaneous jobs
  -----------------------------------------------------------------------

### Custom report properties

Two reports require access to the Centreon main server to generate RRD
graphs. These reports are:

-   Host-graph-v2
-   Hostgroup-graph-v2.

Fill in the following field specifying the server address:

![image](images/10000000000005A100000028486B421A.png)

Any modification of these parameters requires restarting the CBIS
daemon.

The default theme can also be defined in this menu, using the option
\"Default report color theme\".

Extract/load/transform (ETL) options
------------------------------------

::: {#etl_configuration}
Centreon MBI integrates its own ETL capabilities to:
:::

-   Synchronize monitoring raw data with the reporting server
-   Calculate availability and performance statistics on the reporting
    server
-   Manage data retention on the reporting server.

Before proceding, you should have read
`the best practice parts<centreon_best_practices>`{.interpreted-text
role="ref"} to ensure that the objects (e.g., groups, categories) are
configured according to Centreon MBI requirements.

In the Centreon menu \"Reporting \> Business Intelligence \> General
Options \> ETL options\", specify the following options:

+------------------------------+---------------------------------------+
| **Options**                  | **Values**                            |
+==============================+=======================================+
| **General options**          |                                       |
+------------------------------+---------------------------------------+
| Reporting engine uses a      | Yes. You **must** have a dedicated    |
| dedicated MySQL server       | reporting server.                     |
+------------------------------+---------------------------------------+
| Temporary files storage      | Folder on the dedicated reporting     |
| directory on reporting       | server where the dumps will be stored |
| server                       | (depending on your architecture).     |
+------------------------------+---------------------------------------+
| Type of statistics to build  | -   Select \"Availability only\" if   |
|                              |     you only use the availability     |
|                              |     reports.                          |
|                              | -   Select \"Performance and capacity |
|                              |     only\" if you only use reports    |
|                              |     capacity and performance.         |
|                              | -   Select \"All\" to calculate the   |
|                              |     statistics for both types of      |
|                              |     reports.                          |
+------------------------------+---------------------------------------+
| Use large memory tweaks      | No                                    |
| (store MySQL temporary       |                                       |
| tables in memory)            |                                       |
+------------------------------+---------------------------------------+
|                              |                                       |
+------------------------------+---------------------------------------+
| **Reporting perimeter        |                                       |
| selection**                  |                                       |
+------------------------------+---------------------------------------+
| Host groups                  | Select only the host groups for       |
|                              | aggregating data.                     |
+------------------------------+---------------------------------------+
| Host categories              | Select only the host categories for   |
|                              | aggregating data.                     |
+------------------------------+---------------------------------------+
| Service categories           | Select only the service categories    |
|                              | aggregating data.                     |
+------------------------------+---------------------------------------+
|                              |                                       |
+------------------------------+---------------------------------------+
| **Availability statistic     |                                       |
| calculation**                |                                       |
+------------------------------+---------------------------------------+
| Live services for            | Select required time periods for      |
| availability statistics      | calculating host availability and     |
| calculation                  | services.                             |
+------------------------------+---------------------------------------+
|                              |                                       |
+------------------------------+---------------------------------------+
| **Performance and capacity   |                                       |
| statistic calculation**      |                                       |
+------------------------------+---------------------------------------+
| Granularity required for     | Select the degree of granularity for  |
| performance data statistics  | calculating performance data. **(1)** |
+------------------------------+---------------------------------------+
| Live services for            | Select time periods for days of the   |
| performance data statistics  | week used in calculation of capacity  |
| calculation                  | and performance data.                 |
+------------------------------+---------------------------------------+
|                              |                                       |
+------------------------------+---------------------------------------+
| **Capacity statistic         |                                       |
| aggregated by month**        |                                       |
+------------------------------+---------------------------------------+
| Live services for capacity   | Select the \"24x7\" time period.      |
| statistics calculation       |                                       |
+------------------------------+---------------------------------------+
| Service categories related   | Select service categories associated  |
| to capacity data monitoring  | with capacity-type services.          |
+------------------------------+---------------------------------------+
| Exclude metrics from service | Concerns only metrics linked to       |
| categories that does not     | services which return capacity data.  |
| return a capacity USAGE      | Only select metrics that return a     |
| information                  | maximum total capacity value and not  |
|                              | a **usage** value (e.g., the          |
|                              | \"**size**\" metric returned by the   |
|                              | c                                     |
|                              | heck\_centreon\_snmp\_remote\_storage |
|                              | plugin).                              |
+------------------------------+---------------------------------------+
|                              |                                       |
+------------------------------+---------------------------------------+
| **Centile parameters**       |                                       |
+------------------------------+---------------------------------------+
| Calculating centile          | Select the degree of granularity      |
| aggregation by               | required. The standard percentile     |
|                              | report provided with MBI 2.1 uses     |
|                              | Month data.                           |
+------------------------------+---------------------------------------+
| Select service categories to | Select only relevant service          |
| aggregate centile on         | categories for centile statistics     |
|                              | (e.g., Traffic).                      |
+------------------------------+---------------------------------------+
| First day of the week        | Select the first day of the week for  |
|                              | Week aggregation.                     |
+------------------------------+---------------------------------------+
| Centile / Timeperiod         | Create new centile/time period        |
| combination                  | combinations for calculating the      |
|                              | statistics.                           |
+------------------------------+---------------------------------------+

**(1)** Reports requiring precise hourly performance data are listed
below. If these reports are not needed, disable statistics calculation
by hour:

-   Host-detail-v2
-   Hostgroup-traffic-Average-Usage-By-Interface
-   Hostgroup-traffic-by-Interface-And-Bandwith-Ranges.

Data retention options
----------------------

Data retention can be managed on the reporting database. The retention
can apply to raw or aggregated data. The following parameters manage
this retention (in days).

Don\'t forget to activate the data retention using the check box
\"Enable data retention option\".

  ---------------------------------------------
  **Field**
  ---------------------------------------------
  **Performance data retention**

  Raw performance data imported from Centreon

  Performance data aggregated by hour

  Performance data aggregated by day

  Performance data aggregated by month

  **Availability data retention**

  Raw log data imported from Centreon

  Availability data aggregated by day

  Availability data aggregated by month
  ---------------------------------------------

Report Parameter
----------------

This tab enables you to display the dimensions available for a given
user based on ACL restrictions and what was calculated in the data
warehouse.

When updating the groups and categories configuration, make sure to
update the ACL by clicking on \"Update ACL resources\". This will update
available objects when configuring jobs.

Reporting Widgets
-----------------

This menu is used to verify the connection to the reporting database and
edit the connection parameters, which are used to populate the widgets
with data.

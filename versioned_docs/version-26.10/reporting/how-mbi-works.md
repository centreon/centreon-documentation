---
id: how-mbi-works
title: How does MBI work?
description: How Centreon MBI prepares, aggregates, and generates reports each day
---

Each day, MBI follows 3 independent main phases:

* [The central server prepares the raw data](#phase-1-data-is-prepared-by-the-central-server).
* [The ETL copies the data of the previous day to the MBI server and aggregates it](#phase-2-the-etl-is-launched-data-is-copied-to-mbi-and-aggregated). The data is then ready to be used in reports.
* At the scheduled times, [CBIS picks out the data that is relevant for a report and generates it](#phase-3-cbis-generates-the-reports).

Although each phase is independent from the others, incorrect configuration in any of the 3 phases may cause the report generation to fail.

## Phase 1: Data is prepared by the central server

1. As checks are performed, each check result is recorded in the central database (in the **centreon_storage.logs** table for statuses, in **data_bin** for metrics).

2. On the central server, a script (**eventReportBuilder**) is launched by a cronjob every day at 3 AM: it converts check results into [events](concepts.md#event) that will be used to calculate availability. The time this script is launched is defined in **/etc/cron.d/centreon**.

> The conversion of check results into events must be totally finished **before** [the ETL is launched](#phase-2-the-etl-is-launched-data-is-copied-to-mbi-and-aggregated), otherwise the reports will be empty. If in doubt, check this log to see if conversion is finished: **/var/log/centreon/eventReportBuilder.log**.

## Phase 2: The ETL is launched (data is copied to MBI and aggregated)

On the MBI server, a cronjob launches the ETL every day at 4.30 AM. This makes Gorgone execute 4 scripts, taking into account the options defined on the **Reporting > Monitoring Business Intelligence > General options** page:

1. **/usr/share/centreon-bi/etl/importData.pl**: [Events](concepts.md#event) and metrics as well as the configuration (hosts, host categories, ACLs...) are copied from the central database to the MBI database for the last day (from midnight to midnight).
   * The script will only import the host groups, host categories and service categories you have defined in the **Reporting > Monitoring Business Intelligence > General options** page, on the **ETL options** tab, in the **Reporting perimeter selection** section.
   * In all cases, all metrics will be imported.
   * All hosts or services that do not belong to at least one host group and one host category or one service category are excluded.

2. **/usr/share/centreon-bi/etl/dimensionsBuilder.pl**: the ETL prepares a list of all [dimensions](concepts.md#dimension) present in the imported data, for each host, service and metric.

3. **/usr/share/centreon-bi/etl/eventStatisticsBuilder.pl**: the ETL calculates the [availability](concepts.md#availability) of resources, based on the data copied from the central server and the dimensions calculated just before. The availability of each resource is calculated by day and by month, taking into account the [time periods](../monitoring/basic-objects/timeperiods.md) selected in the **Live services for availability statistics calculation** field of the **General options** page, on the **ETL options** tab.

4. **/usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl**: the ETL aggregates all metrics by hour/day/month, taking into account the [time periods](../monitoring/basic-objects/timeperiods.md) selected in the **Live services for performance data statistics calculation** field of the **General options** page, on the **ETL options** tab. The script includes the calculation of centiles, if configured.

Once all aggregations have been calculated, MBI is ready to generate reports.

> Aggregating data must be totally finished **before** [reports can be generated](#phase-3-cbis-generates-the-reports), otherwise the reports will be empty or incomplete. Depending on your amount of data, the 4 steps of the ETL may take a long time. If in doubt, check the logs to know whether the ETL has finished its work (**/var/log/centreon-bi/centreonBIETL.log**).

Note that for [BAM](../service-mapping/introduction.md), aggregated data has already been computed by the central server. The ETL just copies it to the MBI server.

## Phase 3: CBIS generates the reports

Reports can be generated immediately at the user's request, or when they are scheduled.

> In both cases, all aggregation calculations must be finished first. This means that if you have just made changes to host categories, host groups and service categories, the corresponding aggregations will not have been calculated yet. You will need to [rebuild the data](rebuilding-data.md).

* Only one report is generated per format: pdf, xlsx, docx, etc…
* The scope of the data in the report is determined by the **Report parameters** tab of the job. Bear in mind that the report and all of its data will be shared to other users according to what you have defined in [job groups](concepts.md#job-groups), regardless of other users' ACLs on resources.
* The generated reports are copied to the central server, in **/var/lib/centreon/centreon-bi-server/archives**. (This is done by executing the global SFTP [publication rule](reports-publication-rule.md) called [**Default**](reports-publication-rule.md#how-the-default-publication-rule-works).)
* All other **global** [publication rules](reports-publication-rule.md) are then executed.

## Phase 4 (optional): The reports are sent to users

Once it has written the reports to the central server and executed all global publication rules, CBIS checks whether any non-global [publication rules](reports-publication-rule.md) exist for the job - and executes them.

Example: Centreon can send reports by emails according to parameters defined in an SMTP [publication rule](reports-publication-rule.md) ([postfix](../administration/postfix.md) must be configured).

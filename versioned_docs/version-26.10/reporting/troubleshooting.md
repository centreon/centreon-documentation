---
id: troubleshooting
title: Troubleshooting MBI
description: Diagnose and fix common issues with Centreon MBI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> It is strongly advised that you install the [Centreon MBI connector](/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-mbi) which allows you to monitor the status of your MBI server.

Before going further, make sure that MBI is up to date ([update](update.md) or [upgrade](upgrade.md) it if needed).

During the [daily compute](./how-mbi-works.md#phase-2-the-etl-is-launched-data-is-copied-to-mbi-and-aggregated), the ETL may encounter several problems:

- database errors (mysql crashed table, disk full)
- database connection errors (mysql timeout, DNS issues)
- computing errors (a server is down).

If you are [monitoring your MBI server with your Centreon](installation.md#monitor-your-mbi-server-with-centreon), some of these errors will be returned by the connector.

## Running a diagnostic

Use the following command to check that MBI is properly configured:

```shell
/usr/share/centreon-bi/tools/diagnostic.sh
```

Expected result:

```shell
#################### Check connection to databases ####################


 --> Connection to monitoring databases:


########## Java ##########

    [OK]      Java 17 installed
    [OK]      Connection to centreon database on db successful
    [OK]      Connection to centreon_storage database on db successful

 --> Connection to reporting server:

    [OK]      Connection to centreon on db-bi successful
    [OK]      Connection to centreon_storage on db-bi successful

####################          CBIS deamon          ####################

    [OK]      CBIS is running

####################       ETL configuration       ####################

   [INFO]     Use large memory tweaks  option is disabled
    [OK]      ETL log file exists
    [OK]      ETL cron activated 

####################    Retention configuration    ####################

    [OK]      Retention file exists
    [OK]      Purge cron activate 
    [OK]      Purge option is enabled
```

Use this command to check the status of the **CBIS** service:

```shell
systemctl status cbis
```

Expected result:

```shell
● cbis.service - Centreon MBI Scheduler
   Loaded: loaded (/usr/lib/systemd/system/cbis.service; enabled; vendor preset: disabled)
   Active: active (running) since Wed 2025-08-06 09:55:09 IST; 41min ago
 Main PID: 584 (java)
    Tasks: 39 (limit: 24325)
   Memory: 381.4M
   CGroup: /system.slice/cbis.service
           └─584 /usr/bin/java --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/javax.crypto=ALL-UNNAM>
```

If necessary, use the following command to start **CBIS**:

```shell
systemctl start cbis && systemctl enable cbis
```

## Locating missing data or partitions using the --partitions and --db-content commands

The **/usr/share/centreon-bi/etl/centreonbiMonitoring.pl** script has the options **--db-content** and **--partitions** which allow you to potentially identify issues with data.

* **--db-content** will indicate the date of the last data of each table that has a problem
* **--partitions** will indicate the number of missing partitions between the first partition of the table and now, and since when they have been missing. Note that this doesn't work if there are many non-consecutive periods missing.

### --db-content

Check the date of the last data found in the MBI database:

```shell
/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --db-content
```

If everything is OK, you should have the following message: **ETL execution OK, database is up-to-date**. However, if problems have been found, you will get something like:

```shell
[mod_bam_reporting_ba_availabilities: 2025-07-27 00:00:00] [hoststateevents: 2025-07-28 00:00:00] [servicestateevents: 2025-07-28 00:00:00] [mod_bi_hoststateevents: 2025-07-28 00:00:00] [Table mod_bi_servicestateevents: EMPTY] [mod_bi_time: 2025-07-28 00:00:00] [mod_bi_hostavailability: 2025-07-27 00:00:00] [Table mod_bi_serviceavailability: EMPTY] [Table mod_bi_hgmonthavailability: EMPTY] [Table mod_bi_hgservicemonthavailability: EMPTY] [data_bin: 2025-07-27 23:59:55] [mod_bi_metricdailyvalue: 2025-07-27 00:00:00] [Table mod_bi_metricmonthcapacity: EMPTY]
```

In this case, you must [rebuild some of your data](rebuilding-data.md#partial-rebuild-keep-your-data-history). For instance, in the example above, you will need to rebuild **data_bin** for the 28th of July.

### --partitions

You can also check that partitions are up to date (to have a more detailed description of what is missing) using the following command:

```shell
/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --partitions
```

The command should return **All partitions are up-to-date**. If a problem has been found, you will get a message of this type:

```shell
[mod_bi_hostavailability, last partition:2025-07-28 00:00:00 missing 42 part.][mod_bi_serviceavailability, last partition:2025-07-28 00:00:00 missing 42 part.][mod_bi_metrichourlyvalue, last partition:2025-06-05 00:00:00 missing 67 part.][mod_bi_metricdailyvalue, last partition:2025-07-28 00:00:00 missing 42 part.][data_bin, last partition:2025-07-28 00:00:00 missing 14 part.]
```

In the example above, 42 missing partitions have been found for the **mod_bi_hostavailability** table (and the last partition was created on 28th July).

In this case, you must [rebuild some of your data](rebuilding-data.md#partial-rebuild-keep-your-data-history).

### Understanding the commands' output

If the **--partitions** and **--db-content** commands indicate that there is a problem with one of your tables, you may have to do a [partial rebuild of your data](rebuilding-data.md#partial-rebuild-keep-your-data-history). Make sure you use the correct options in all cases when rebuilding (including the **--no-purge** option which stops you from deleting important data).

| Tables                                                   | Meaning                                                                      | What to do                                 |
|------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------|
| `hoststateevents`, `servicestateevents`,<br/>`mod_bam_reporting*`, `data_bin` | Problem with raw data imported from Centreon.                            | Investigate and fix the issue with raw data. (Maybe you need to compute events with [**eventReportBuilder** on the central server](how-mbi-works.md#phase-1-data-is-prepared-by-the-central-server)). After resolving the issue, run the import script to import missing data, [using the correct options](rebuilding-data.md#options-for-a-partial-rebuild) (`/usr/share/centreon-bi/etl/importData.pl`). |
| `mod_bi_servicemetrics`,`mod_bi_hosts`, `mod_bi_services`,  `mod_bi_hostgroups`                                             | Issue with **dimensions data**.                 | After resolving the issue, run the dimension script to restore consistency in dimensions, [using the correct options](rebuilding-data.md#options-for-a-partial-rebuild) (`/usr/share/centreon-bi/etl/importData.pl`).  (`/usr/share/centreon-bi/etl/dimensionsBuilder.pl`)   |
| `mod_bi_*availability`                                             | Issue with **aggregated availability data**, not raw data.            | After resolving the issue, run the availability aggregation script [using the correct options](rebuilding-data.md#options-for-a-partial-rebuild) (`/usr/share/centreon-bi/etl/importData.pl`) (`/usr/share/centreon-bi/etl/eventStatisticsBuilder.pl`). |
| `mod_bi_metric*`                                                   | Issue with **aggregated metrics data** (e.g., performance), not raw data. | After resolving the issue, run the metrics aggregation script [using the correct options](rebuilding-data.md#options-for-a-partial-rebuild) (`/usr/share/centreon-bi/etl/importData.pl`) (`/usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl`).  |

If any issues occur, double check your MBI is configured according to our [post-installation configuration procedure](installation.md#step-4-configure-the-etl).

## CBIS does not start

Use SSH to connect to your MBI reporting server and switch user to root to check the following logs:

* **/var/log/centreon-bi/cbis.out**
* **/var/log/centreon-bi/cbis.date-of-the-day.log**

If you find a relevant issue in one of these two files, fix the problem (e.g. error when connecting to the database) and manually restart the **CBIS** service:

```shell
systemctl restart cbis
```

<!--/etc/centreon-bi/startCBIS.sh-->

## Where can I find the logs?

Use SSH to connect to your MBI server and switch to root.

Navigate to the MBI logs located in **var/log/centreon-bi**.

CBIS creates a new log file for each day, located in **/var/log/centreon-bi**, called **bis.date-of-the-day.log**. The date has the following format: **YYYY-MM-DD**.

## The report I generated is empty

When a report is empty, you should analyse it this way:

![image](../assets/reporting/empty-report-chart.png)

* The first step is to make sure the data is actually available in the database using the [**--partitions** and **--db-content** commands](#locating-missing-data-or-partitions-using-the---partitions-and---db-content-commands).

* Then check if the first 2 steps of data processing have finished in due time : read [**How MBI works**](how-mbi-works.md).

## I can't download the generated reports

* Confirm that the [**Default** publication rule](reports-publication-rule.md#how-the-default-publication-rule-works) using the SFTP protocol is applied and [configured correctly](reports-publication-rule.md#configuration-for-the-default-publication-rule). (The **Default** rule transfers generated reports from the MBI server to the central server.)

* Check that the central server and MBI server are time-synced: the timezone and date must be exactly the same on both servers for reports to be downloadable.

```shell
timedatectl
```

If the timezones are different, edit [the corresponding PHP file](installation.md#software-requirements). For example, add **date.timezone = Europe/Paris** on both servers. You then need to restart **php-fpm**:

```shell
systemctl restart php-fpm
```

* Check that the CBIS process starts with the same time zones as both servers. Check in the CBIS logs if the time displayed in front of the logs is consistent with the time of the server. First, restart CBIS:

```shell
systemctl restart cbis
```

Then check the time and the time zone by executing the command **date** then compare the date with the one in the logs.

```shell
tail -f /var/log/centreon-bi/cbis.YYYY-MM-DD.log
```

The date and time must be consistent with the one which appears in the logs.

<!--Finally, check that the content of /etc/sysconfig/clock is consistent with the date command. If not, modify the clock file and restart CBIS: 

```shell
systemctl restart cbis
```-->

## I cannot see the report design/the hosts I need

If you cannot see some [report designs](concepts.md#report-designs) or some resources, it is possible you have not been authorized to do so by your administrator.
[User rights on MBI can be configured](share.md) by an administrator using the **Administration > ACL > MBI Options > ACL Rules** page. Here, administrators can choose which report designs, jobs and job groups each user is allowed to access.

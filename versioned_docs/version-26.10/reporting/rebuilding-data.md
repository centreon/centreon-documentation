---
id: rebuilding-data
title: Rebuilding MBI data
description: Rebuild MBI data after configuration changes or to repair gaps
---

## What does rebuilding data mean?

Rebuilding data means [executing the ETL to calculate dimensions and aggregations](how-mbi-works.md#phase-2-the-etl-is-launched-data-is-copied-to-mbi-and-aggregated). Reports can only be generated when the ETL has run and all the data is prepared.

## When is rebuilding data necessary?

Rebuilding data is necessary in the following cases:

- Some changes have been applied to the configuration (for instance if the members of a host group have changed and you already have data for these hosts, or if you create a host group including hosts that already have data). You have two options:
    - [**Complete rebuild**](#complete-rebuild-overwrite-all-existing-data): you want to recalculate all of your data with the new configuration applied to it. The typical use case for this is wen you are setting up MBI: you might need to adjust the configuration several times to get it right. After modifying resources on your central server (e.g., host groups or service categories), you'll want to update the data in your datawarehouse accordingly.
    - [**Partial rebuild**](#partial-rebuild-keep-your-data-history): you want to keep your data history (for various reasons such as compliance, audits, referencing current reports, or testing a new configuration without altering historical data). For instance, if a host group no longer exists, you still may want to keep a record that it existed at some point.
- You need to [repair gaps in your data](#repairing-gaps-in-your-data): launch a partial rebuild to do so. Gaps in your data may occur if one or more daily executions of the ETL failed to complete, for instance because of database errors or network failures.

## About the MBI ETL

### When is the ETL executed?

The ETL can run in 3 different contexts:

* When the [initial build of the data](installation.md#step-5-build-the-mbi-database) is run after you install MBI.
* [Every day (at 4:30 by default)](how-mbi-works.md#phase-2-the-etl-is-launched-data-is-copied-to-mbi-and-aggregated), when the data for the previous day is compiled.
* When you do a [manual rebuild](#when-is-rebuilding-data-necessary): this is the case this page addresses.

### How does the ETL work?

* See [**How MBI works**, phase 2](how-mbi-works.md#phase-2-the-etl-is-launched-data-is-copied-to-mbi-and-aggregated).
* See [**ETL command reference**](#etl-command-reference).

### Before starting with the ETL

* Before starting with MBI, make sure you have [prepared your data as described here](preparing-data.md). Then, make sure the **gorgoned** process is running properly, and restart it if necessary.

   ```shell
   systemctl status gorgoned
   ```

   ```shell
   systemctl restart gorgoned 
   ```

* Before starting any rebuild operation, try to estimate the time needed for the rebuild ([look at the logs](troubleshooting.md#where-can-i-find-the-logs) to see how long execution takes). Depending on the volume of data on the central server, the rebuild process may take a long time. If you have a lot of data, to prevent duplicates or interruptions during the reconstruction, temporarily comment out the following line in the **/etc/cron.d/centreon-bi-engine** cron file to disable the daily execution of the ETL:

   ```shell
   #30 4 * * * root /usr/share/centreon-bi/bin/centreonBIETL -d >> /var/log/centreon-bi/centreonBIETL.log 2>&1
   ```

   Then restart crond:

   ```shell
   systemctl restart crond
   ```

   > Don't forget to [uncomment the line in the cron file and to restart **crond**](#after-running-the-rebuild-scripts) after the rebuild is fully completed.

* To stop the data retention manager from running at the same as the rebuild and causing problems, comment the line in **/etc/cron.d/centreon-bi-purge**.

   ```shell
   #30 7 * * 1-5 root /usr/share/centreon-bi//etl/dataRetentionManager.pl >> /var/log/centreon-bi//dataRetentionManager.log 2>&1
   ```

   Then restart crond:

   ```shell
   systemctl restart crond
   ```

   > Don't forget to [uncomment the line in the cron file and to restart **crond**](#after-running-the-rebuild-scripts) after the rebuild is fully completed.

## Complete rebuild: overwrite all existing data

### You have a lot of data

First, read the [**Before starting with the ETL**](#before-starting-with-the-etl) section.

In this use case, we assume you already have the raw data, so this procedure does not include the importing of metrics raw data: this is why all 4 scripts of the ETL are launched separately. Make sure all data imported from Centreon is up to date on your reporting server by running the following command:

```shell
/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --db-content
```

Make sure that the output contains **ETL OK - Database is up to date** OR that the following tables are not listed:
- data_bin
- hoststatevents
- servicestateevents

If there are problems in the output, read [**Locating missing data or partitions**](troubleshooting.md#locating-missing-data-or-partitions-using-the---partitions-and---db-content-commands).

Once you have confirmed that your data is OK, run the following commands to update and rebuild your reporting data:

1. Import the latest Centreon configuration:

   ```shell
   /usr/share/centreon-bi/etl/importData.pl -r --centreon-only
   ```

2. Calculate the reporting dimensions:

   ```shell
   /usr/share/centreon-bi/etl/dimensionsBuilder.pl -r
   ```

3. Aggregate events and availability:

   ```shell
   nohup /usr/share/centreon-bi/etl/eventStatisticsBuilder.pl -r > /var/log/centreon-bi/rebuildAllEvents.log &
   ```

4. Aggregate performance data (storage, traffic, etc.):

   ```shell
   nohup /usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl -r > /var/log/centreon-bi/rebuildAllPerf.log &
   ```

5. Once rebuild is complete, [perform any necessary post-rebuild operations](#after-running-the-rebuild-scripts).

### You don't have a lot of data

First, read the [**Before starting with the ETL**](#before-starting-with-the-etl) section.

If you don't have a lot of data, execution times are not an issue, so you can use the **centreonBI** "wrapper" script with the following options:

```shell
nohup /usr/share/centreon-bi//bin/centreonBIETL -rICDEP >> /var/log/centreon-bi//centreonBIETL.log 2>&1 &
```

- The **-rICDEP** option means that you will extract data from the Centreon configuration database importing only the configuration for hosts, hostgroups, services, service categories, etc...
- This procedure deletes all previously calculated data and links between objects and recalculates data based on the retention period in the latest Centreon configuration.

Once rebuild is complete, [perform any necessary post-rebuild operations](#after-running-the-rebuild-scripts).

## Partial rebuild: keep your data history

### Aggregation granularity

MBI allows data to be rebuilt at different levels of granularity: hourly, daily, or monthly. The granularity depends on the period specified when the rebuild process is launched. For example, if a rebuild is performed for the period from July 1 to August 1, MBI will only rebuild the hourly and daily data for that period. However, monthly data is calculated in a specific way: the calculation for month M takes place on the first day of month M+1. Therefore, to rebuild all data for the month of July, including monthly aggregates, you must include August 1 in the period by specifying an end date of August 2 because the data of the end date is not included.

### Options for a partial rebuild

The **-s** and **-e** options define the time range for the data reconstruction.

- **-s** sets the start date (**YYYY-MM-DD**).
- **-e** sets the end date (**YYYY-MM-DD**). Note that the day specified as the end date will not be included in the data: 
   - To include data through to a specific day (e.g. August 7), set **-e** to the **next day** (**2025-08-08**).
   - To include a full month (e.g., July), set the start date (**-s**) to the **1st day of the month** (**2025-07-01**) and the end date (**-e**) to the **2nd day of the next month** (**2025-08-02**, see [**Aggregation granularity**](#aggregation-granularity)).

The **-d** option for **dimensionBuilder.pl** performs an incremental update, adding or modifying only the changed configuration elements. It is ideal for testing or updating specific periods without affecting historical data.

The **--no-purge** option is extremely important: it preserves existing statistical data outside the specified date range. Only data within the selected period will be deleted and recalculated. If you forget to specify it, the data outside the date range will be deleted.

### Commands for a partial rebuild

First, read the [**Before starting with the ETL**](#before-starting-with-the-etl) section.

If you want to keep previously aggregated statistics and apply the new configuration only to a specific period, use the following commands (note that you MUST use the **--no-purge** option, otherwise all your other data will be deleted):

1. Import the Centreon configuration between the dates you specify:

   ```shell
   /usr/share/centreon-bi/etl/importData.pl -r --centreon-only -s $date_start$ -e $date_end$ --no-purge
   ```

2. Calculate the reporting dimensions:

   ```shell
   /usr/share/centreon-bi/etl/dimensionsBuilder.pl -d
   ```

3. Aggregate events and availability between the dates you specify:

   ```shell
   nohup /usr/share/centreon-bi/etl/eventStatisticsBuilder.pl -r  -s $date_start$ -e $date_end$ --no-purge > /var/log/centreon-bi/rebuildAllEvents.log &
   ```

4. Aggregate performance data (storage, traffic, etc.) between the dates you specify:

   ```shell
   nohup /usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl -r -s $date_start$ -e $date_end$ --no-purge > /var/log/centreon-bi/rebuildAllPerf.log &
   ```

5. Once rebuild is complete, [perform any necessary post-rebuild operations](#after-running-the-rebuild-scripts).

### Rebuilding only events/availability or only metrics

The procedure described above is the standard, recommended procedure. However, if you have large amounts of data and you know for sure that you only need to rebuild events/availability or only metrics, perform the following steps in the table below:

* Only events/availability: steps 1, 3 and 4.
* Only metrics: steps 2, 3, 5 and 6.

Once rebuild is complete, [perform any necessary post-rebuild operations](#after-running-the-rebuild-scripts).

| Steps | Description | Command | Execution Time |
|------|-------------|---------|----------------|
| **1. Import event and availability data (excluding performance data)** | Import event data but not performance data (`data_bin`) between specific dates. (Specifically, use this command if there is a problem with the contents of the `mod_bam_reporting`, `hoststateevents` or `servicestateevents` tables). | `nohup /usr/share/centreon-bi/etl/importData.pl -r -s $date_start$ -e $date_end$ --ignore-databin --no-purge > /var/log/centreon-bi/rebuild_importDataEvents.log &` | **Fast** (minutes) |
| **2. Import metrics (`data_bin`)** | Import only `data_bin` data between specific dates. | `nohup /usr/share/centreon-bi/etl/importData.pl -r --no-purge --databin-only -s $date_start$ -e $date_end$ > /var/log/centreon-bi/rebuild_importDataBin.log &` | A few minutes to several hours |
| **3. Update reporting dimensions** | Update the reporting dimensions. Use `-d` to preserve the history of configuration changes. | `nohup /usr/share/centreon-bi/etl/dimensionsBuilder.pl -d > /var/log/centreon-bi/rebuild_dimensions.log &` | **Fast** (seconds to minutes), depending on the number of groups, categories and metrics imported |
| **4. Rebuild events tables** | Rebuild events based on the retention period defined in **Reporting > Monitoring Business Intelligence > General options** **Data retention options** tab. | `nohup /usr/share/centreon-bi/etl/eventStatisticsBuilder.pl -r --events-only --no-purge > /var/log/centreon-bi/rebuild_events.log &` | **A few minutes to several hours** (rarely more than 24h)  |
| **5. Rebuild availability tables** | Rebuild availability stats between the dates you specify (check `mod_bi_hostavailability` and `mod_bi_serviceavailability` dates using the MBI connector). | `nohup /usr/share/centreon-bi/etl/eventStatisticsBuilder.pl -r --no-purge --availability-only -s $date_start$ -e $date_end$ > /var/log/centreon-bi/rebuild_availability.log &` | **A few minutes to several hours** |
| **6. Rebuild performance statistics** | Rebuild performance stats between the dates you specify (check the dates in the `mod_bi_metrichourlyvalue` and `mod_bi_metricdailyvalue` tables using the MBI connector). | `nohup /usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl -r --no-purge -s $date_start$ -e $date_end$ > /var/log/centreon-bi/rebuild_perfData.log &` | **Few minutes to several hours**. Longer if rebuilding more days than hourly retention allows. |

## Repairing gaps in your data

1. First, read the [**Before starting with the ETL**](#before-starting-with-the-etl) section.
2. [Locate gaps in your data](troubleshooting.md#locating-missing-data-or-partitions-using-the---partitions-and---db-content-commands).
3. [Run a partial rebuild of your data, keeping your data history](#partial-rebuild-keep-your-data-history).
4. Once rebuild is complete, [perform any necessary post-rebuild operations](#after-running-the-rebuild-scripts).

## After running the rebuild scripts

### Case 1: The rebuild takes less than a day

1. Uncomment lines in **/etc/cron.d/centreon-bi-engine** and **/etc/cron.d/centreon-bi-purge**.  
2. Restart crond:

   ```shell
   systemctl restart crond
   ```

When all operations are finished, your [MBI monitoring connector](./installation.md#monitor-your-mbi-server-with-centreon) shows **ETL execution OK, database is up-to-date**.

### Case 2: The rebuild finishes the next day

1. Uncomment lines in **/etc/cron.d/centreon-bi-engine** and **/etc/cron.d/centreon-bi-purge**.  
2. Restart crond:

   ```shell
   systemctl restart crond
   ```

3. Run the daily script manually, as it has not been run for the current day:

   ```shell
   /usr/share/centreon-bi/bin/centreonBIETL -d
   ```

When all operations are finished, your [MBI monitoring connector](./installation.md#monitor-your-mbi-server-with-centreon) shows **ETL execution OK, database is up-to-date**.

### Case 3: The rebuild takes multiple days

1. Uncomment lines in **/etc/cron.d/centreon-bi-engine** and **/etc/cron.d/centreon-bi-purge**.  
2. Restart crond:

   ```shell
   systemctl restart crond
   ```

3. Perform a [partial rebuild](#partial-rebuild-keep-your-data-history), specifying the correct start and end dates for the time the rebuild was being executed. Example: to rebuild data from January 1 to January 4 inclusive, use **date_start=2025-01-01** and **date_end=2025-01-05**.  

When all operations are finished, your [MBI monitoring connector](./installation.md#monitor-your-mbi-server-with-centreon) shows **ETL execution OK, database is up-to-date**.

## How to rebuild missing BAM statistics

BAM statistics are not compiled by the ETL, but by the central server. If BAM statistics are not up to date, follow this procedure:

1. On the central server, execute the following command to rebuild BAM statistics:

   ```shell
   /usr/share/centreon/www/modules/centreon-bam-server/engine/centreon-bam-rebuild-events --all
   ```

2. Then, re-import the updated data on the reporting server:

   ```shell
   /usr/share/centreon-bi/etl/importData.pl -r --bam-only
   ```

## How to rebuild centile statistics

To use the **"Monthly Network Percentile"** report, you must activate centile calculation and storage. Go to:  **Reporting > Business Intelligence > General Options**, **ETL options** tab then configure the **"Centile parameters"** subsection as described below to define the appropriate centile/time period combination(s).

### Required configuration

| Parameter                                      | Value                                                       |
|-----------------------------------------------|-------------------------------------------------------------|
| **Calculate centile aggregation**              | Monthly (minimum)                                           |
| **Select service categories to aggregate on**  | Select at least one traffic service category                |
| **Set first day of the week**                 | Monday (default)                                            |
| **Create centile-time period combination(s)**  | Create at least one, e.g., `99.0000 - 24x7`                 |

Only service categories selected in the **"Reporting perimeter selection"** will appear in the list of service categories available for centile statistics.

You can create as many **centile–time period combinations** as needed. However, note that increasing the number of combinations may **increase calculation time**. It is recommended to start with a **small number** of combinations to evaluate performance impact.

### Import configuration data on the reporting server

```shell
/usr/share/centreon-bi/bin/centreonBIETL -rIC
``` 

### Update centile configuration in the datawarehouse

```shell
/usr/share/centreon-bi/etl/dimensionsBuilder.pl -d
``` 

### Calculate centile statistics only
```shell
/usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl -r --centile-only
```

## ETL command reference

Centreon MBI uses a Perl-based script to orchestrate its ETL (Extract, Transform, Load) operations. The main script responsible for triggering these processes is:

```shell
/usr/share/centreon-bi/bin/centreonBIETL (-c|-d|-r) 
```

This script supports several execution options to perform tasks such as creating [dimensions](concepts.md#dimension), copying and aggregating the previous day's data, or rebuilding the whole MBI database.

This section focuses specifically on the `-r` (rebuild) option and its usage.

### Execution options

| Option | Description |
|--------|-------------|
| `-c`   | Create the reporting dimensions. |
| `-d`   | Calculate statistics on yesterday's data (happens daily). |
| `-r`   | Calculate statistics on a specific period (rebuild mode). |

### Arguments for option `-r`

| Option | Description |
|--------|-------------|
| `-I`   | Extract data from the monitoring server. |
| `-D`   | Calculate dimensions. |
| `-E`   | Calculate event and availability statistics. |
| `-P`   | Calculate perfdata statistics. |

> **Note**: If none of the following is specified (only the "-r" option), these arguments are selected by default: `-IDEP`.

### Extra options for `-rIDEP`

| Option | Description |
|--------|-------------|
| `-s`   | Start date in format `YYYY-MM-DD`. If nothing is specified, the data retention period from Centreon MBI configuration is used. |
| `-e`   | End date in format `YYYY-MM-DD`. If nothing is specified, the data retention period from Centreon MBI configuration is used. |
| `-p`   | Do not empty statistic tables; delete only entries for the processed period. Not applicable to raw data tables. |

> **Note**: If no start or end date is provided, the script calculates them automatically using the retention parameters from the interface under **General Option > Data retention Parameter**.

### Extra arguments for option `-I`

| Option | Description |
|--------|-------------|
| `-C`   | Extract Centreon configuration database only.  |
| `-i`   | Ignore perfdata extraction from monitoring server. |
| `-o`   | Extract only perfdata from monitoring server. |
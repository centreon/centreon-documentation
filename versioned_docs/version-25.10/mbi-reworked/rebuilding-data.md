---
id: rebuilding-data
title: Rebuilding MBI data
---

## Rebuild process

This procedure guides you through resetting the MBI database to a clean state or rebuilding missing data. You need to rebuild the data when you:
- Come-back to healthy start: You need to come-back to healhty start because you made some changes on Resources configurations to create desired dimensions and at this moment data history is not important. You can launch rebuild process to delete previous data, import new data, compute and store them into datawarehouse.
- Rebuild historical data with new configuration: 
    - When you do lot of transformation in your resource and you have finished making changes to groups and categories, you can launch rebuild to delete all previous configuration, import the new configuration (skip import raws data) and aggregated data basing on it. 
    - In other hand, you can also import new configuration, keep old aggregated data and rebuild on specific period only with the new configuration. 
- Troubleshoot on MBI: depending what's happened, it will be necessary to launch partial rebuild to address data gaps. This may be due to one or more daily treatments that failed to complete as database errors, network failure or whatever.


### ETL Process 

Centreon MBI uses a Perl-based script to orchestrate its ETL (Extract, Transform, Load) operations.

The main script responsible for triggering these processes is:

```shell
/usr/share/centreon-bi/bin/centreonBIETL (-c|-d|-r) 
```

This script supports several execution options to perform tasks such as model creation, daily data processing, or historical data rebuild.

>**Note**: This documentation focuses specifically on the `-r` (rebuild) option and its usage.


#### Execution Options

| Option | Description |
|--------|-------------|
| `-c`   | Create the reporting database model. |
| `-d`   | Daily execution to calculate statistics on yesterday. |
| `-r`   | Rebuild mode to calculate statistics on a historical period. |


#### Arguments for option `-r`

| Option | Description |
|--------|-------------|
| `-I`   | Extract data from the monitoring server. |
| `-D`   | Calculate dimensions. |
| `-E`   | Calculate event and availability statistics. |
| `-P`   | Calculate perfdata statistics. |

> **Note**: If none of the following is specified (only "-r" option), these arguments are selected by default: `-IDEP`.

#### Extra Options for `-rIDEP`

| Option | Description |
|--------|-------------|
| `-s`   | Start date in format `YYYY-MM-DD`. Defaults to data retention period from Centreon MBI configuration. |
| `-e`   | End date in format `YYYY-MM-DD`. Defaults to data retention period from Centreon MBI configuration. |
| `-p`   | Do not empty statistic tables; delete only entries for the processed period. Not applicable to raw data tables. |

> **Note**: If no start or end date is provided, the script calculates them automatically using the retention parameters from the interface under **General Option > Data retention Parameter**.


#### Extra Arguments for option `-I` 

| Option | Description |
|--------|-------------|
| `-C`   | Extract Centreon configuration database only.  |
| `-i`   | Ignore perfdata extraction from monitoring server. |
| `-o`   | Extract only perfdata from monitoring server. |


### How ETL works?

This ETL "centreonBIETL" acts as a wrapper of 4 scripts:

1. `/usr/share/centreon-bi/etl/importData.pl`  
   *Imports raw data (configurations, events, metrics, BAM) from the Centreon central server. depending on retention settings or rebuild options. (**Delete existing data** from the reporting server by default)* 

2. `/usr/share/centreon-bi/etl/dimensionsBuilder.pl`  
   *Rebuilds configuration dimensions: hosts, services, categories, metrics, etc.*

3. `/usr/share/centreon-bi/etl/eventStatisticsBuilder.pl`  
   *Computes host and service event statistics, including availability.*

4. `/usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl`  
   *Calculates performance statistics (perfdata), including centile metrics if configured.*
 
> **Note:**  
> For each script (except dimensionBuilder.pl), a **time period can be specified** using the `-s` (start date) and `-e` (end date) options:
> 
> - `--start`: Define this based on the **retention period** or the **first day of missing data**. 
> - `--end`: Typically set to **today’s date**, unless you want to limit the rebuild period. 
> - `--severity`: Adjusts the **logging level**. The default is `info`, but you can set it to `debug` or `error` as needed.  
> - `--help`: Displays **all options** for the script. Useful for discovering advanced or lesser-known parameters.

### Before starting with the ETL
Before starting with MBI, ensure that your Resource configuration on the Central side is properly set up. For guidance, refer to the preparation documentation and [prepared your data](preparing-data.md)
Finally, make sure the Gorgoned process is running properly, and restart it if necessary.

```shell
systemctl status gorgoned

systemctl restart gorgoned 
```

Depending on the data volume on the Central server, the data rebuild process may take a long time. To prevent duplicates or interruptions during the reconstruction, it’s recommended to comment out the following line in the cron file /etc/cron.d/centreon-bi-engine:

```shell
#30 4 * * * root /usr/share/centreon-bi/bin/centreonBIETL -d >> /var/log/centreon-bi/centreonBIETL.log 2>&1
```
and restart crond

```shell
systemctl restart crond
```

> **Note:**  
> Don't forget to uncomment the cron file and restart crond after the rebuild is fully completed.


## Come-back to healthy start

### Complete rebuild

Once cronfile is well deactivated, you have to launch rebuild process to provide all KPI needed in reports, so you will use "-r" option as:

```shell
/usr/share/centreon-bi/bin/centreonBIETL -r 
```

For more comfort, it is better to run it in the background and redirect the script's return to a log:
```shell
nohup /usr/share/centreon-bi//bin/centreonBIETL -r >> /var/log/centreon-bi//centreonBIETL.log 2>&1 &
```

Go to the log file /var/log/centreon-bi//centreonBIETL.log, you will normally see some lines appear with 4 parts like:

```shell
2025-08-01 13:34:16 - INFO - [SCHEDULER] >>>>>>> start
2025-08-01 13:34:16 - INFO - [SCHEDULER][IMPORT] >>>>>>> start
...
2025-08-01 13:35:18 - INFO- [SCHEDULER][IMPORT] <<<<<<< end
2025-08-01 13:35:18 - INFO - [SCHEDULER][DIMENSIONS] >>>>>>> start
...
2025-08-01 13:35:52 - INFO - [SCHEDULER][DIMENSIONS] <<<<<<< end
2025-08-01 13:35:52 - INFO - [SCHEDULER][EVENT] >>>>>>> start
...
2025-08-01 13:38:37 - INFO - [SCHEDULER][EVENT] <<<<<<< end
2025-08-01 13:38:37 - INFO - [SCHEDULER][PERFDATA] >>>>>>> start
...
2025-08-01 13:48:17 - INFO - [SCHEDULER][PERFDATA] <<<<<<< end
2025-08-01 13:58:17 - INFO - [SCHEDULER] <<<<<<< end
```

When the rebuild is complete and the log shows the final **[SCHEDULER] \<\<\<\<\<\<\< end** message without errors, you can proceed to the generated-report article to review your reports.

## Rebuild historical data with new configuration

When setting up Centreon reporting, you might need to adjust the configuration several times to get it right. After modifying resources in your Central instance (e.g., host groups or service categories), you’ll want to update the data in your data warehouse accordingly.

> **Note:**  
> In this use-case, we assume you already have the raw data, so this procedure does not include the importing of metrics raw data. Make sure all data imported from Centreon is up to date on your reporting server by running the following command:
> ```shell
> /usr/share/centreon-bi/etl/centreonbiMonitoring.pl --db-content
> ```
> And make sure than the output plugin contains: "ETL OK - Database is up to date" OR that the following tables are not listed:
> - data_bin
> - hoststatevents
> - servicestateevents


You can now run the following commands to update and rebuild your reporting data:

Import the latest Centreon configuration
```shell
/usr/share/centreon-bi/etl/importData.pl -r --centreon-only
```

Calculate reporting dimensions 
```shell
/usr/share/centreon-bi/etl/dimensionsBuilder.pl -r
```

Aggregate events and availability
```shell
nohup /usr/share/centreon-bi/etl/eventStatisticsBuilder.pl -r > /var/log/centreon-bi/rebuildAllEvents.log &
```
Aggregate performance data (storage, traffic, etc.)
```shell
nohup /usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl -r > /var/log/centreon-bi/rebuildAllPerf.log &
```

if you don't have much data, you can do it also in One-Shot, by using options "-IC" (Extract Centreon configuration database only.) to avoid the long time step, then build new dimensions and rebuild availability and performance thanks to options: "-DEP".

```shell
nohup /usr/share/centreon-bi//bin/centreonBIETL -rICDEP >> /var/log/centreon-bi//centreonBIETL.log 2>&1 &
```

> **Note**: 
> - The "-rICDEP" option means that you will extract Centreon configuration database importing only the configuration from hosts, hostgroups, services, servicecategory, etc... 
> - This procedure deletes all previously calculated data and links between objects and recalculates data based on the retention period in the latest Centreon configuration. 


### Keeping existing statistics

For various reasons—such as compliance, audits, referencing current reports, or testing a new configuration without altering historical data—you may need to retain existing information.
If you want to keep previously aggregated statistics and apply new configuration only to a specific period, use the following command:

```shell
/usr/share/centreon-bi/etl/importData.pl -r --centreon-only -s $date_start$ -e $date_end$ --no-purge
```

```shell
/usr/share/centreon-bi/etl/dimensionsBuilder.pl -d
```

```shell
nohup /usr/share/centreon-bi/etl/eventStatisticsBuilder.pl -r  -s $date_start$ -e $date_end$ --no-purge > /var/log/centreon-bi/rebuildAllEvents.log &
```

```shell
nohup /usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl -r -s $date_start$ -e $date_end$ --no-purge > /var/log/centreon-bi/rebuildAllPerf.log &
```

> **Note**  
> The `-s` and `-e` options define the **time range** for data processing.  
> - `-s` sets the **start date** (`YYYY-MM-DD`)  
> - `-e` sets the **end date** (`YYYY-MM-DD`)  
>
> The `-e` option is **exclusive**. To include data **through** a specific day (e.g. August 7), set `-e` to the **next day** (`2025-08-08`).
> To include a full month (e.g., July), set the start date (`-s`) to the **1st day of the month** (`2025-07-01`) and the end date (`-e`) to the **2nd day of the next month** (`2025-08-02`).
>  
> `-d` option for dimensionBuilder.pl performs an incremental update, adding or modifying only the changed configuration elements. It’s ideal for testing or updating specific periods without affecting historical data.
>
> The `--no-purge` option is used to **preserve existing statistical data** outside the specified date range. Only data within the selected period will be deleted and recalculated. This option applies **only** to Centreon MBI **statistics tables**. It does **not** impact raw data tables like `data_bin`.  
>   
> Use these options together when you need to **rebuild data for a limited period** without impacting previously calculated metrics.



## Troubleshooting 

### Context

During daily compute, you can encounter severals errors:
- database errors (mysql crashed table, disk full)
- database connection errors (mysql timeout, dns issues)
- computing errors (server down or others issues)

When erros occurs, you may watch plugin's informations (normally setup before in your Monitoring Interface) or execute on MBI servers the following command:

```shell
/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --db-content
```

```shell
[Table mod_bam_reporting, last entry: 2025-07-01 00:00:00] [Table mod_bam_reporting_ba_events, last entry: 2025-07-01 00:00:00] [Table hoststateevents, last entry: 2025-07-01 00:00:00]
[Table servicestateevents, last entry: 2025-07-01 00:00:00] [Table mod_bi_hoststateevents, last entry: 2025-07-01 00:00:00]
[Table mod_bi_servicestateevents, last entry: 2025-07-01 00:00:00] [Table mod_bi_hostavailability, last entry: 2025-07-01 00:00:00]
[Table mod_bi_serviceavailability, last entry: 2025-07-01 00:00:00] [Table data_bin, last entry: 2025-08-01 00:00:00] [Table mod_bi_metricdailyvalue, last entry: 2025-08-01 00:00:00]
[Table mod_bi_metrichourlyvalue, last entry: 2025-08-01 23:00:00]
```

Severals tables can be empty on differents periods, it can create some gaps in your reports. 
- mod_bam_reporting
- hoststateevents
- mod_bi_hoststateevents
- mod_bi_hostavailability
- mod_bi_metricdailyvalue
- ...


> **Note**: In normal situation, you have to see OK return like "ETL OK - Database is up to date".


### How to rebuild missing statistics

This is the **official, approved, and most efficient method** to rebuild missing data in Centreon MBI. It follows the standard ETL structure and ensures consistent and complete synchronization of reporting data.



You will manually run the following core ETL scripts:

| Step | Description | Command | Execution Time |
|------|-------------|---------|----------------|
| **1. Import event and availability data (excluding performance data)** | Import data without performance data (`data_bin`) from a specific date. (visible next to `mod_bam_reporting`, `hoststateevents`,`servicestateevents` tables via plugin). | `nohup /usr/share/centreon-bi/etl/importData.pl -r -s $date_start$ -e $date_end$ --ignore-databin > /var/log/centreon-bi/rebuild_importDataEvents.log &` | **Fast** (minutes) |
| **2. Import performance data (`data_bin`)** | Import only `data_bin` data starting from the last available date in the database (visible next to `data_bin` table via plugin). | `nohup /usr/share/centreon-bi/etl/importData.pl -r --no-purge --databin-only -s $date_start$ -e $date_end$ > /var/log/centreon-bi/rebuild_importDataBin.log &` | **Fast** (minutes), depending on number of days imported |
| **3. Update reporting dimensions** | Updates configuration dimensions. Using `-d` preserves history of configuration changes. Avoid `-r` to prevent needing to rebuild all stats. | `nohup /usr/share/centreon-bi/etl/dimensionsBuilder.pl -d > /var/log/centreon-bi/rebuild_dimensions.log &` | **Fast** (seconds to minutes), depending on number of groups, categories and metrics imported |
| **4. Rebuild events tables** | Rebuild events based on the retention period defined in *Centreon MBI > Generation Option > Data Retention Parameters*. | `nohup /usr/share/centreon-bi/etl/eventStatisticsBuilder.pl -r --events-only > /var/log/centreon-bi/rebuild_events.log &` | **Few minutes to several hours**. (rarely more than 24h).  |
| **5. Rebuild availability tables** | Rebuild availability stats starting from the last known data (check `mod_bi_hostavailability` and `mod_bi_serviceavailability` dates via plugin). | `nohup /usr/share/centreon-bi/etl/eventStatisticsBuilder.pl -r --no-purge --availability-only -s $date_start$ -e $date_end$ > /var/log/centreon-bi/rebuild_availability.log &` | **Few minutes to hours**, depending on rebuild duration |
| **6. Rebuild performance statistics** | Rebuild performance stats based on earliest date in `mod_bi_metrichourlyvalue` and `mod_bi_metricdailyvalue` tables (as shown by plugin). | `nohup /usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl -r --no-purge -s $date_start$ -e $date_end$ > /var/log/centreon-bi/rebuild_perfData.log &` | **Few minutes to several hours**. Longer if rebuilding more days than hourly retention allows. |

> **Reminder**  
> The `-s` and `-e` options define the **time range** for data processing.  
> - `-s` sets the **start date** (`YYYY-MM-DD`)  
> - `-e` sets the **end date** (`YYYY-MM-DD`)  
>
> The end date is **exclusive**. To include data **through** a specific day (e.g. August 7), set `-e` to the **next day** (`2025-08-08`).
> To include a full month (e.g., July), set the start date (`-s`) to the **1st day of the month** (`2025-07-01`) and the end date (`-e`) to the **2nd day of the next month** (`2025-08-02`).

### After Running the Scripts

**Case 1: Rebuild done the same day**  
- Uncomment lines in `/etc/cron.d/centreon-bi-engine` and `/etc/cron.d/centreon-bi-purge`  
- Restart cron: `systemctl restart crond`

**Case 2: Rebuild finishes next day**  
- Uncomment cron files and restart cron: `systemctl restart crond`  
- Run daily script manually:  
  `/usr/share/centreon-bi/bin/centreonBIETL -d`

**Case 3: Longer rebuild (multiple days)**  
- Perform a partial rebuild specifying start and end dates 
- Example: to rebuild data from January 1 to January 4 inclusive, use: 
  `date_start=2025-01-01` and `date_end=2025-01-05`  
- When finished, plugin shows:  
  `"ETL execution OK, database is up-to-date"`


### Root gaps issues

The following table summarizes common issues related to Centreon BI database tables, their meaning, and the recommended scripts to run for resolving each type of problem. If only the last step of the process failed (e.g., performance aggregation), you can fix the issue and rerun the corresponding script (such as `perfdataStatisticsBuilder.pl`). However, in most cases, it is recommended to follow the full procedures described earlier to ensure data consistency.



| Visible Tables                                                   | Meaning                                                                      | Moving Forward                                 |
|------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------|
| `hoststateevents`, `servicestateevents`,<br/>`mod_bam_reporting*`, `data_bin` | Problem with **raw data** imported from Centreon.                            | Investigate and fix the issue with **raw data**. (Maybe you need to compute event from eventReportBuilder on Central). After resolving the issue, run the import script to import missing datas (`/usr/share/centreon-bi/etl/importData.pl`). |
| `mod_bi_servicemetrics`,`mod_bi_hosts`, `mod_bi_services`,  `mod_bi_hostgroups` tables                                             | Issue with **dimensions data**.                 | After resolving the issue, run the dimension script to restore consistency in dimensions.  (`/usr/share/centreon-bi/etl/dimensionsBuilder.pl`)   |
| `mod_bi_*availability` tables                                             | Issue with **aggregated availability data**, not raw data.            | After resolving the issue, run the availability aggregation script (`/usr/share/centreon-bi/etl/eventStatisticsBuilder.pl`). |
| `mod_bi_metric*` tables                                                   | Issue with **aggregated metrics data** (e.g., performance), not raw data. | After resolving the issue, run the metrics aggregation script (`/usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl`).  |

### How to rebuild missing BAM statistics

If BAM statistics are not up to date, follow this procedure:

On the central server, execute the following command to rebuild BAM statistics:
```shell
/usr/share/centreon/www/modules/centreon-bam-server/engine/centreon-bam-rebuild-events --all
``` 

Then, re-import the updated data on the reporting server:
```shell
/usr/share/centreon-bi/etl/importData.pl -r --bam-only
``` 

### How to rebuild Centile statistics

To use the **"Monthly Network Percentile"** report, you must activate centile calculation and storage. Go to:  **Reporting > Business Intelligence > General Options > ETL Tab**  , then configure the **"Centile parameters"** subsection as described below to define the appropriate centile/time period combination(s).

#### Required Configuration

| Parameter                                      | Value                                                       |
|-----------------------------------------------|-------------------------------------------------------------|
| **Calculate centile aggregation**              | Monthly (minimum)                                           |
| **Select service categories to aggregate on**  | Select at least one traffic service category                |
| **Set first day of the week**                 | Monday (default)                                            |
| **Create centile-time period combination(s)**  | Create at least one, e.g., `99.0000 - 24x7`                 |

Only service categories selected in the **"Reporting perimeter selection"** will appear in the list of service categories available for centile statistics.

You can create as many **centile–time period combinations** as needed. However, note that increasing the number of combinations may **increase calculation time**. It is recommended to start with a **small number** of combinations to evaluate performance impact.

#### Import configuration data on the reporting server

```shell
/usr/share/centreon-bi/bin/centreonBIETL -rIC
``` 

#### Update centile configuration in the data warehouse

```shell
/usr/share/centreon-bi/etl/dimensionsBuilder.pl -d
``` 

#### Calculate Centile Statistics Only
```shell
/usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl -r --centile-only
``` 

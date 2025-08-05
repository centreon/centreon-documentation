---
id: rebuilding-data
title: Rebuilding MBI data
---

## Rebuild process

This procedure guides you on resetting the MBI database to a healthy start or rebuild data gaps. This type of action is needed when you:
- Start to work on MBI: when you start working on MBI, you can make some changes on Resources or ACL configurations to create desired context (dimensions). When all is done, you have to launch rebuild process to make change, compute and store data into datawarehouse.
- Apply a new configuration to historical data: in the case you do lot of transformation in your resource configuration and you dont want keep old configuration in MBI side, you can launch complete rebuild to delete all previous configuration and make right new aggregated data. In other hand, you can also modify configuration, keep old aggregated data and rebuild on specific period only. 
- Troubleshoot on MBI: Depending what's happened, sometimes it will be necessary to launch complete or partial rebuild to address data gaps. This may be due to one or more daily treatments that failed to complete.



### ETL Process 

Centreon MBI uses a Perl-based script to orchestrate its ETL (Extract, Transform, Load) operations.


The main script responsible for triggering these processes is:

```shell
/usr/share/centreon-bi/bin/centreonBIETL (-c|-d|-r) 
```

This script supports several execution options to perform tasks such as model creation, daily data processing, or historical data rebuild.

#### Execution Options

| Option | Description |
|--------|-------------|
| `-c`   | Create the reporting database model. |
| `-d`   | Daily execution to calculate statistics on yesterday. |
| `-r`   | Rebuild mode to calculate statistics on a historical period. |


>**Note**: This documentation focuses specifically on the `-r` (rebuild) option and its usage.

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
| `-C`   | Extract Centreon configuration database only. Works with `-I`. |
| `-i`   | Ignore perfdata extraction from monitoring server. |
| `-o`   | Extract only perfdata from monitoring server. |


### How it's work?

This ETL "centreonBIETL" acts as a wrapper of 4 scripts:
<!-- 1. **import configuration and raw monitoring data** from the monitoring server to the reporting server depending on retention settings or rebuild options. (**Delete existing data** from the reporting server by default)
2. **Populate dimension tables** containing host,service,business_activity,metrics and other informations as timeperiod, acl, etc...
3. **Populate availability statistics tables** for hosts and services.
4. **Populate performance and capacity statistics tables** for hosts and services based on metrics. -->


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


## Start to work on MBI 

### Prerequisites
When you start on MBI, you need to be sure than your Resource configuration on Central side is ready: Take a look on MBI dimensions documentation.
In more, be sure than gorgoned process works fine or restart it if needed

```shell
systemctl status gorgoned

systemctl restart gorgoned 
```

Last thing before reconstruction
Depending on the data volume on the Central, datas rebuild can take a long time, so it's better to modify the cronfile /etc/cron.d/centreon-bi-engine to comment out the following line to avoid duplicates and breaking the database reconstruction:

```shell
#30 4 * * * root /usr/share/centreon-bi/bin/centreonBIETL -d >> /var/log/centreon-bi/centreonBIETL.log 2>&1
```
and restart crond

```shell
systemctl restart crond
```

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

## Apply a new configuration to historical statistics

When implementing Centreon reporting, you may expect to re-execute your statistical calculations a number of times if the Centreon configuration changes. After You've modified some resources from your Central (ex: hostgroup or service category) you want now update datas into your datawarehouse. This procedure does not include the importing of metrics raw data. Make sure all data imported from Centreon is up to date on your reporting server by running the following command:

```shell
/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --db-content
```

And make sure "ETL OK - Database is up to date" appears OR that the following tables are not listed:

- data_bin
- hoststatevents
- servicestateevents

Now, you can execute the following commands.

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
> - This procedure deletes all previously calculated data (and links between objects) and recalculates data based on the retention period in the latest Centreon configuration.


### Keeping old statistics

If you need to keep old aggregated statistics and apply new configuration only for specific period, you can execute this command:

<!-- ```shell
nohup /usr/share/centreon-bi/bin/centreonBIETL -rICDEP -s 2025-07-01 -e 2025-08-02 -p  >> /var/log/centreon-bi//centreonBIETL.log 2>&1 &
``` -->

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
> The `--no-purge` option is used to **preserve existing statistical data** outside the specified date range. Only data within the selected period will be deleted and recalculated. This option applies **only** to Centreon MBI **statistics tables**—it does **not** impact raw data tables like `data_bin`.  
>   
> Use this combination of options when you want to **rebuild data for a specific period** without erasing previously calculated metrics.


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


### Root cause issues


| Visible Tables                                                   | Meaning                                                                      | Action to Take                                 |
|------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------|
| `hoststateevents`, `servicestateevents`,<br/>`mod_bam_reporting*`, `data_bin` | Problem with **raw data** imported from Centreon.                            | Investigate and fix the issue with **raw data**. Apply the import script to import missing datas. |
| `mod_bi_servicemetrics`,`mod_bi_hosts`, `mod_bi_services`,  `mod_bi_hostgroups` tables                                             | Issue with **dimensions data**.                 | Apply the dimensions builder script.    |
| `mod_bi_*availability`,`mod_bi_metric*` and all others `mod_bi*` tables                                             | Issue with **aggregated data**, not with Centreon raw data.                  | Apply the event or performance aggregation script    |


### How to rebuild missing statistics

This is the **official, approved, and most efficient method** to rebuild missing data in Centreon MBI. It follows the standard ETL structure and ensures consistent and complete synchronization of reporting data.

You will manually run the following core ETL scripts:
<!-- 
1. `/usr/share/centreon-bi/etl/importData.pl`  
   *Imports raw data (configurations, events, metrics, BAM) from the Centreon central server.*

2. `/usr/share/centreon-bi/etl/dimensionsBuilder.pl`  
   *Rebuilds configuration dimensions: hosts, services, categories, metrics, etc.*

3. `/usr/share/centreon-bi/etl/eventStatisticsBuilder.pl`  
   *Recomputes host and service event statistics, including availability.*

4. `/usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl`  
   *Recalculates performance statistics (perfdata), including centile metrics if configured.*
 
> **Note:**  
> For each script, a **time period can be specified** using the `-s` (start date) and `-e` (end date) options:
> 
> - `date_start`: Define this based on the **retention period** or the **first day of missing data**.  (Except dimensionBuilder.pl)
> - `date_end`: Typically set to **today’s date**, unless you want to limit the rebuild period. (Except dimensionBuilder.pl)
> - `--severity`: Adjusts the **logging level**. The default is `info`, but you can set it to `debug` or `error` as needed.  
> - `--help`: Displays **all available options** for the script. Useful for discovering advanced or lesser-known parameters. -->


| Step | Description | Command | Execution Time |
|------|-------------|---------|----------------|
| **1. Import event and availability data (excluding performance data)** | Import data without performance data (`data_bin`) from a specific date. (visible next to `mod_bam_reporting`, `hoststateevents`,`servicestateevents` tables via plugin). | `nohup /usr/share/centreon-bi/etl/importData.pl -r -s $date_start$ -e $date_end$ --ignore-databin > /var/log/centreon-bi/rebuild_importDataEvents.log &` | **Fast** (minutes) |
| **2. Import performance data (`data_bin`)** | Import only `data_bin` data starting from the last available date in the database (visible next to `data_bin` table via plugin). | `nohup /usr/share/centreon-bi/etl/importData.pl -r --no-purge --databin-only -s $date_start$ -e $date_end$ > /var/log/centreon-bi/rebuild_importDataBin.log &` | **Fast** (minutes), depending on number of days imported |
| **3. Update reporting dimensions** | Updates configuration dimensions. Using `-d` preserves history of configuration changes. Avoid `-r` to prevent needing to rebuild all stats. | `nohup /usr/share/centreon-bi/etl/dimensionsBuilder.pl -d > /var/log/centreon-bi/rebuild_dimensions.log &` | **Fast** (seconds to minutes) |
| **4. Rebuild events tables** | Rebuild events based on the retention period defined in *Centreon MBI > Generation Option > Data Retention Parameters*. | `nohup /usr/share/centreon-bi/etl/eventStatisticsBuilder.pl -r --events-only > /var/log/centreon-bi/rebuild_events.log &` | **Few minutes to several hours**. (rarely more than 24h).  |
| **5. Rebuild availability tables** | Rebuild availability stats starting from the last known data (check `mod_bi_hostavailability` and `mod_bi_serviceavailability` dates via plugin). | `nohup /usr/share/centreon-bi/etl/eventStatisticsBuilder.pl -r --no-purge --availability-only -s $date_start$ -e $date_end$ > /var/log/centreon-bi/rebuild_availability.log &` | **Few minutes to hours**, depending on rebuild duration |
| **6. Rebuild performance statistics** | Rebuild performance stats based on earliest date in `mod_bi_metrichourlyvalue` and `mod_bi_metricdailyvalue` tables (as shown by plugin). | `nohup /usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl -r --no-purge -s $date_start$ -e $date_end$ > /var/log/centreon-bi/rebuild_perfData.log &` | **Few minutes to several hours**. Longer if rebuilding more days than hourly retention allows. |

#### Why Use This Method?

- **Standard & supported** by Centreon.
- **Efficient** and works across all types of data (events, availability, performance).
- **Minimal risk** and restores full integrity to reporting data.


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

---
id: rebuilding-data
title: Rebuilding MBI data
---

## Rebuild process

The purpose of this article is to provide a comprehensive way to reset their MBI database to a healthy start or rebuid some data gaps. This type of action is needed when you:
- Start to work on MBI: when you start working on MBI, you can make some changes on Resources or ACL configurations to create desired context (dimensions). When all is done, you have to launch rebuild process to make change, compute and store data into datawarehouse.
- Apply a new configuration to historical data: in the case you do lot of transformation in your resource configuration and you dont want keep old configuration in MBI side, you can launch complete rebuild to delete all previous configuration and make right new aggregated data 
- Modify configuration and keep old aggregated data: 
- Debug on MBI: Depending what's happened, sometimes it will be necessary to launch complete or partial rebuild to address data gaps. This may be due to one or more daily treatments that failed to complete.



### ELT Processing Options

The script used is the following, developped in perl: 

```shell
/usr/share/centreon-bi/bin/centreonBIETL
```
### How it's work?

This script acts in 4 steps:
1. **import configuration and raw monitoring data** from the monitoring server to the reporting server depending on retention settings or rebuild options. (**Delete existing data** from the reporting server by default)
2. **Populate dimension tables** containing host,service,business_activity,metrics and other informations as timeperiod, acl, etc...
3. **Populate availability statistics tables** for hosts and services.
4. **Populate performance and capacity statistics tables** for hosts and services based on metrics.

### Execution Options

| Option | Description |
|--------|-------------|
| `-c`   | Create the reporting database model. |
| `-d`   | Daily execution to calculate statistics on yesterday. |
| `-r`   | Rebuild mode to calculate statistics on a historical period. |


> **Note**: We will focus on "-r" options during this documentation



#### Arguments for option `-r`

| Option | Description |
|--------|-------------|
| `-I`   | Extract data from the monitoring server. |
| `-D`   | Calculate dimensions. |
| `-E`   | Calculate event and availability statistics. |
| `-P`   | Calculate perfdata statistics. |

> **Note**: If none of the following is specified (only "-r" option), these arguments are selected by default: `-IDEP`.


#### Extra Arguments for option `-I`

| Option | Description |
|--------|-------------|
| `-C`   | Extract Centreon configuration database only. Works with `-I`. |
| `-i`   | Ignore perfdata extraction from monitoring server. |
| `-o`   | Extract only perfdata from monitoring server. |


#### Common Options for `-rIDEP`

| Option | Description |
|--------|-------------|
| `-s`   | Start date in format `YYYY-MM-DD`. Defaults to data retention period from Centreon MBI configuration. |
| `-e`   | End date in format `YYYY-MM-DD`. Defaults to data retention period from Centreon MBI configuration. |
| `-p`   | Do not empty statistic tables; delete only entries for the processed period. Not applicable to raw data tables. |

> **Note**: If no start or end date is provided, the script calculates them automatically using the retention parameters from the interface under **General Option > Data retention Parameter**.


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

## Apply a new configuration to historical data

Context: You modify some resources from your Central (ex: hostgroup, service_category) and you want update datas into your datawarehouse. In this case, you dont need to import all raw datas, but only the new configurations tables. You can import only the table configuration with options "-Ii" (Ignore perfdata extraction from monitoring server) to avoid this long time extraction step, build new dimensions and rebuild availability and performance with options: "-DEP".


```shell
nohup /usr/share/centreon-bi//bin/centreonBIETL -rIiDEP >> /var/log/centreon-bi//centreonBIETL.log 2>&1 &
```

The "-rIiDEP" option means that you will exclude the import of data_bin table but import the new configuration from hosts, hostgroups, services, servicecategory, etc... for then compute new dimensions, availability and performance aggregation data. All old data will be delete.

### Keeping old datas

For some reason, you need to keep old configuration and apply new configuration only for the last month, you can execute this command:

```shell
nohup /usr/share/centreon-bi/bin/centreonBIETL -rIiDEP -s 2025-07-01 -e 2025-08-02 -p  >> /var/log/centreon-bi//centreonBIETL.log 2>&1 &
```

> **Note**  
> The `-s` and `-e` options define the **time range** for data processing.  
> - `-s` sets the **start date** (`YYYY-MM-DD`)  
> - `-e` sets the **end date** (`YYYY-MM-DD`)  
>   
> The `-p` option is used to **preserve existing statistical data** outside the specified date range. Only data within the selected period will be deleted and recalculated.  
>   
> This option applies **only** to Centreon MBI **statistics tables**—it does **not** impact raw data tables like `data_bin`.  
>   
> Use this combination of options when you want to **rebuild data for a specific period** without erasing previously calculated metrics.


## Debug on MBI

### Troubleshooting

During daily compute, you can encounter severals errors:
- database errors (mysql crashed table, disk full)
- database connection errors (mysql timeout, dns issues)
- computing errors (server down or others issues)

When erros occurs, you may watch plugin's informations (normally setup before in your Monitoring Interface) or execute on MBI servers the following command:

```shell
/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --db-content
```

> **Note**: In normal situation, you have to see OK return like "ETL OK - Database is up to date".


In this example below, you can see different missed table data as: 
- mod_bam_reporting
- hoststateevents
- mod_bi_hoststateevents
- mod_bi_hostavailability
- mod_bi_metricdailyvalue
- ...


```shell
[Table mod_bam_reporting, last entry: 2025-07-01 00:00:00] [Table mod_bi_ba_incidents, last entry: 2025-07-01 00:00:00] [Table hoststateevents, last entry: 2025-07-01 00:00:00]
[Table servicestateevents, last entry: 2025-07-01 00:00:00] [Table mod_bi_hoststateevents, last entry: 2025-07-01 00:00:00]
[Table mod_bi_servicestateevents, last entry: 2025-07-01 00:00:00] [Table mod_bi_hostavailability, last entry: 2025-07-01 00:00:00]
[Table mod_bi_serviceavailability, last entry: 2025-07-01 00:00:00] [Table data_bin, last entry: 2025-08-01 00:00:00] [Table mod_bi_metricdailyvalue, last entry: 2025-08-01 00:00:00]
[Table mod_bi_metrichourlyvalue, last entry: 2025-08-01 23:00:00]
```

### Root cause issues


| Visible Tables                                                   | Meaning                                                                      | Action to Take                                |
|------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------|
| Only `mod_bi` tables                                             | Issue with **aggregated data**, not with Centreon raw data.                  | **Skip** the "Import Missing Data" section.    |
| `hoststateevents`, `servicestateevents`,<br>`mod_bam_reporting*`, `data_bin` | Problem with **raw data** imported from Centreon.                            | Investigate and fix the issue with **raw data**. |




### How to rebuild missing reporting data

<!-- Take an example: your mbi server goes down from July 21 at 2AM to July 27 at 10 AM, you have to recompute missing data from day 20 to day 26. 

You can launch this command to included only desired period with "-s" and "-e" options to aggregate datas, keeping the other tables intact thanks to "-p" options. -->

<!-- ```shell
/usr/share/centreon-bi/bin/centreonBIETL -rIDEP -s 2025-07-20 -e 2025-07-27 -p 
``` -->

In this case, you will have to use scripts included in the ETL:

- /usr/share/centreon-bi/etl/importData.pl
- /usr/share/centreon-bi/etl/dimensionsBuilder.pl
- /usr/share/centreon-bi/etl/eventStatisticsBuilder.pl
- /usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl


#### Importing and rebuilding missing data 

| Step | Description | Command | Execution Time |
|------|-------------|---------|----------------|
| **1. Import event and availability data (excluding performance data)** | Import data without performance data (`data_bin`) from a specific date according to the *Availability retention period* defined in *Centreon MBI > Generation Option > Data Retention Parameters*. | `nohup /usr/share/centreon-bi/etl/importData.pl -r -s $date_start$ -e $date_end$ --ignore-databin > /var/log/centreon-bi/rebuild_importDataEvents.log &` | **Fast** (minutes) |
| **2. Import performance data (`data_bin`)** | Import only `data_bin` data starting from the last available date in the database (visible next to `data_bin` table via plugin). | `nohup /usr/share/centreon-bi/etl/importData.pl -r --no-purge --databin-only -s $date_start$ -e $date_end$ > /var/log/centreon-bi/rebuild_importDataBin.log &` | **Fast** (minutes), depending on number of days imported |
| **3. Update reporting dimensions** | Updates configuration dimensions. Using `-d` preserves history of configuration changes. Avoid `-r` to prevent needing to rebuild all stats. | `nohup /usr/share/centreon-bi/etl/dimensionsBuilder.pl -d > /var/log/centreon-bi/rebuild_dimensions.log &` | **Fast** (seconds to minutes) |
| **4. Rebuild events and availability** | Rebuild events based on the retention period defined in *Centreon MBI > Generation Option > Data Retention Parameters*. | `nohup /usr/share/centreon-bi/etl/eventStatisticsBuilder.pl -r --events-only > /var/log/centreon-bi/rebuild_events.log &` | Varies: **several hours** (rarely more than 24h). Contact support if exceeded. |
| **5. Rebuild availability tables** | Rebuild availability stats starting from the last known data (check `mod_bi_hostavailability` and `mod_bi_serviceavailability` dates via plugin). | `nohup /usr/share/centreon-bi/etl/eventStatisticsBuilder.pl -r --no-purge --availability-only -s $date_start$ -e $date_end$ > /var/log/centreon-bi/rebuild_availability.log &` | **Few minutes to hours**, depending on rebuild duration |
| **6. Rebuild performance statistics** | Rebuild performance stats based on earliest date in `mod_bi_metrichourlyvalue` and `mod_bi_metricdailyvalue` tables (as shown by plugin). | `nohup /usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl -r --no-purge -s $date_start$ -e $date_end$ > /var/log/centreon-bi/rebuild_perfData.log &` | **Few minutes to several hours**. Longer if rebuilding more days than hourly retention allows. |


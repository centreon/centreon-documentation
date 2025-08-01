---
id: rebuilding-data
title: Rebuilding MBI data
---

The purpose of this documentation is to provide a comprehensive framework in the event that a customer wishes to reset their MBI database to a healthy start. This type of action is requested when you:
- Start to work on MBI: when you start working on MBI, you can make some changes on Resources or ACL configurations to create desired context (dimensions). When all is done, you have to launch rebuild process to make change, compute and store data into datawarehouse.
- Modify configuration from Central: in the case you do lot of transformation in your resource configuration and you dont want keep old configuration in MBI side, you can launch complete rebuild to delete all previous configuration and make right new aggregated data 
- Debug on MBI: Depending what's happened, sometimes it will be necessary to launch complete or partial rebuild to address data gaps. This may be due to one or more daily treatments that failed to complete.

The script used is the following: /usr/share/centreon-bi/bin/centreonBIETL

There are 2 main options: 
-rebuild (-r)
-daily compute (-d)

We will focus on "-r" options during this documentation

How it's work?

This script act in 4 steps:
1/Delete all existing data from the reporting server and import configuration and raw monitoring data from the monitoring server to the reporting server (depending on retention settings).
2/Populate the tables containing host and service dimensions.
3/Populate the tables containing host and service availability statistics.
4/Populate the tables containing host and service performance and capacity statistics.


## Start to work on MBI 

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

## Modify configuration from Central

For some reasons, you modify Resource confiruation from Central and you want update aggregated datas into your datawarehouse, you can import only configuration without raw datas to avoid this long time step.


```shell
nohup /usr/share/centreon-bi//bin/centreonBIETL -rIiDEP >> /var/log/centreon-bi//centreonBIETL.log 2>&1 &
```

The "-rIiDEP" option means that you will exclude the import of raw data but import the new configuration, compute dimensions, availability and performance aggregation data

## Debug on MBI

During daily aggregation, you can encounter erros because some database connection can failed or compute steps can timeout for differents reasons.

Take an example: your mbi server goes down from July 21 at 2AM to July 27 at 10 AM, you have to recompute missing data from day 20 to day 26. You can launch this command to specify desired period to aggregate datas.

```shell
/usr/share/centreon-bi/bin/centreonBIETL -rIDEP -s 2025-07-20 -e 2025-07-27 -p 
```



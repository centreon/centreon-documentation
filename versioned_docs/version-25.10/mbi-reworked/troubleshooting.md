---
id: troubleshooting
title: Troubleshooting MBI
---

> It is strongly advised that you install the [Centreon MBI connector](/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-mbi) which allows you to monitor the status of your MBI server.

Before going further, make sure that [the extension is up to date](update-upgrade-migrate.md).

## How do I know MBI is properly configurated?

Use the following command to verify MBI is properly configured

```shell
/usr/share/centreon-bi/tools/diagnostic.sh | less
```

expected result:

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

Use this command to verify the CBIS service status

```shell
systemctl status cbis
```

expected result:

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

## Review the manual configuration of MBI

Follow our [post-installation configuration procedure](installation.md#step-4-configure-the-etl) to ensure proper configuration.

## The report I generated is empty

A cronjob is launched at approximately 4:30 AM that will compile and calculate all the data of the day before. CBIS then goes into the compiled data at the scheduled time to pick out the data relevant to the report it needs to generate. 

If reports are being generated without data in them, it's possible CBIS is sending its SQL requests before the cronjob is finished and so the data CBIS requests does not exist yet, check this log to see if conversion is finished: **/var/log/centreon/eventReportBuilder.log**. 

Try pushing back the cyclic report generation hour in the **Scheduler options** tab of **Reporting > Monitoring business Intelligence > General options** so that CBIS does not request data before the cronjob has finished.

## All the jobs generated are not dowloadable

Verify the central server and MBI server are time-synced 

```
timedatectl
```


## I cannot see the report design/the hosts I need

MBI follows the rules of ACLs. If you can not see certain report designs or certain resources, it is possible you have not been authorized to do so in the ACLs. 
These can be configured by an administrator inside **Administration > ACL > ACL Rules**. Here, administrators can choose which report designs, jobs and job groups each user is allowed to access.

## Using the partitions and db-content commands.

The script ```/usr/share/centreon-bi/etl/centreonbiMonitoring.pl``` has the options --db-content and --partitions which allow you to potentially identify issues with data.

* --ddb-content will indicate the date of the last data of each table
* --partitions will indicate the number of missing partitions between the first partition of the table and now and since when they have been missing. Note that this doesn't work if there are many non-consecutive periods missins.

## Check the logs

Use SSH to connect to your MBI server and switch to root.

Navigate to the MBI logs located in the file ```var/log/centreon-bi```.

CBIS creates a new log for each day located /var/log/centreon-bi/cbis.date-of-the-day.log the date is in the format YYYY-MM-DD.


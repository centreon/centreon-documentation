---
id: troubleshooting
title: Troubleshooting MBI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


> It is strongly advised that you install the [Centreon MBI connector](/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-mbi) which allows you to monitor the status of your MBI server.

Before going further, make sure that the extension is up to date ([update](https://docs.centreon.com/docs/reporting/update.md) or [upgrade](upgrade.md) it if needed).

## Running a diagnostic

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

If necessary, use the following command to start CBIS:

```
systemctl start cbis && systemctl enable cbis
```

Check that partitions ar eup to date and the status of MBI

```
/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --partitions
```

Check the state of the MBI data

```
/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --db-content
```

Force the MBI and ETL processes

```
/usr/share/centreon-bi/bin/centreonBIETL -r
```

If any issues popped out, double check your MBI is configured according to our [post-installation configuration procedure](installation.md#step-4-configure-the-etl).

## Locate missing data or partitions using the --partitions and db-content commands.

The script ```/usr/share/centreon-bi/etl/centreonbiMonitoring.pl``` has the options --db-content and --partitions which allow you to potentially identify issues with data.

* --ddb-content will indicate the date of the last data of each table
* --partitions will indicate the number of missing partitions between the first partition of the table and now and since when they have been missing. Note that this doesn't work if there are many non-consecutive periods missing.

## CBIS does not start

Use SSH to connect to your MBI reporting server and switch user to root to check the following logs:

* /var/log/centreon-bi/cbis.out
* /var/log/centreon-bi/cbis.date.log

If the issue is indeed located here, you can manually restart the CBIS service:

```
/etc/centreon-bi/startCBIS.sh
```

## Where can I find the logs?

Use SSH to connect to your MBI server and switch to root.

Navigate to the MBI logs located in the file ```var/log/centreon-bi```.

CBIS creates a new log for each day located /var/log/centreon-bi/cbis.date-of-the-day.log the date is in the format YYYY-MM-DD.

## The report I generated is empty

When a report is empty, you should analyse it this way:

![image](../assets/reporting/empty-report-chart.png)

For starters, make sure the data is actually available in the database using the [--partitions and db-content commands](#locate-missing-data-or-partitions-using-the---partitions-and-db-content-commands)

A cronjob is launched at approximately 4:30 AM that will compile and calculate all the data of the day before. CBIS then goes into the compiled data at the scheduled time to pick out the data relevant to the report it needs to generate. 

If reports are being generated without data in them, it's possible CBIS is sending its SQL requests before the cronjob is finished and so the data CBIS requests does not exist yet, check this log to see if conversion is finished: **/var/log/centreon/eventReportBuilder.log**. 

Try pushing back the cyclic report generation hour in the **Scheduler options** tab of **Reporting > Monitoring business Intelligence > General options** so that CBIS does not request data before the cronjob has finished.

If you are getting an error, follow our [rebuild procedure](rebuilding-data.md)

## None of the reports generated are dowloadable

Confirm that a publication rule using the SFTP protocol is applied. The defaul publication rule uses SFTP and is applied to all jobs but it is possible its protocol was changed.

Verify the central server and MBI server are time-synced, the timezone and date must be exactly the same between each server for reports to be downloadable.

```
timedatectl
```

If the timezones are different, reconfigure the php file ```/etc/opt/rh/rh-php73/php.d/php-timezone.ini```

then add the corresponding timezone line, for example: ```date.timezone = Europe/Paris```

After a modification, you need to restart php-fpm:

```
systemctl restart php-fpm
```

<Tabs groupId="sync">
<TabItem value="Time Zones" label="If you use time zones in Centreon">

Is the scheduler set on the same TimeZone as the reporting server?

Check in the CBIS logs if the time displayed in front of the logs is coherent with the time of the server. To know it , you can restart CBIS :

```
/etc/init.d/cbis restart
```

Then check the time and the time zone by executing the command "date" then compare the date with the one in the logs.

```
tailf /var/log/centreon-bi/cbis.YYYY-MM-DD.log
```

The date date & time must be coherent with the one which appears in the logs.

Finally, check that the content of /etc/sysconfig/clock is consistent with the date command. If not, modify the clock file and restart CBIS : 

```
/etc/init.d/cbis restart .
```
</TabItem>
<TabItem value="no time zone" label="If you do NOT use time zones in Centreon">

This configuration is not advised and works only if ALL the Centreon users are in the TimeZone set in the file /etc/php.ini (with variable date.timezone)

Be sure the logs of CBIS are set to the same TimeZone than the file ```/etc/php.ini.``` To know the time of CBIS:

```
systemctl restart cbis
```

Then check the time & the TimeZone with the commande "date" and compare it with the one present in the logs.

```
tailf /var/log/centreon-bi/cbis.YYYY-MM-DD.log
```

If the date is coherent with the TimeZone set in php.ini (date.tiemzone) on the Centreon server (not the date of the server), you have a different problem.

</TabItem>
</Tabs>

## I cannot see the report design/the hosts I need

MBI follows the rules of ACLs. If you can not see certain report designs or certain resources, it is possible you have not been authorized to do so in the ACLs. 
These can be configured by an administrator inside **Administration > ACL > ACL Rules**. Here, administrators can choose which report designs, jobs and job groups each user is allowed to access.

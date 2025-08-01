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

Use this command to verify the CBIS service status

```shell
systemctl status cbis
```

**expected result of these commands**

## Review the manual configuration of MBI

Follow our [post-installation configuration procedure](installation.md) to ensure proper configuration.

## The report I generated is empty

A cronjob is launched at approximately 4h30 AM that will compile and calculate all the data of the day before. CBIS then goes into the compiled data at the scheduled time to pick out the data relevant to the report it needs to generate. 

If reports are being generated without data in them, it's possible CBIS is sending its SQL requests before the cronjob is finished and so the data CBIS requests does not exist yet, check this log to see if conversion is finished: **/var/log/centreon/eventReportBuilder.log**. 

Try pushing back the cyclic report generation hour so that CBIS does not request data before the cronjob has finished in the **Scheduler options** tab of **Reporting > Monitoring business Intelligence > General options**.

## I cannot see the report design/the hosts I need

MBI follows the rules of ACLs. If you can not see certain report designs or certain resources, it is possible you have not been authorized to do so in the ACLs. 
These can be configured by an administrator inside **Administration > ACL > ACL Rules**. Here, administrators can choose which report designs, jobs and job groups each user is allowed to access.

## Using the partitions and db-content commands.

## Check the logs

Use SSH to connect to your MBI server and switch to root.

MBI logs are located in the file ```var/log/centreon-bi```.


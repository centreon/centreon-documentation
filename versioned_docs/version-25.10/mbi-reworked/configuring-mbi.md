---
id: configuring-mbi
title: Configuring MBI
---

## General options

### Notification options

SMTP server properties
- Enable job notification for administrators:
- Email from: the email address from which notifications will be sent
- SMPT server:
- SMPT port:
- use credential:
- use SSL:
- SMTP user:
- SMTP password:

email content properties
- email default title: What will appear as the subject of the email
- default email body: What will appear as the main body of the email
- default email footer: What will appear as a footer of the email

archive direct download link properties
- centreon main web server protocol:
- centreon web url extension:
- centreon main server web address:
- contact groups: groups of users that should be available to choose from for notifications
- testing notification:

### Scheduler options

CBIS properties
- CBIS host: IP address of the MBI server
- CBIS port: 1234 is the default port for MBI 
- CBIS connection timeout: 

Report generation time properties
- All cyclic reports generation hour: the time of the day when daily, weekly or monthly jobs should be executed.
- Day of month for the generation of monthly reports: For monthly reports only, the date of the month where these reports are generated
- Day of week for the generation of weekly reports: For weekly reports only, these reports are generated on the first day of the week, this field lets you decide which day should be considered the first
- maximum load allowed to the scheduler for the jobs execution:

Report custom properties
- Centreon web access url for reporting server:
- Default report color theme: determines which theme will be used when choosing "default" as the theme for a report.

Archives retention properties
- Do you want to activate the automatic purge of generated report ?:
- Number of MONTHS before permanently removing generated reports ? (> 0): number of month before reports 

### ETL options

General options
- Reporting engine uses a dedicated mysql server:
- Temporary files storage directory on reporting server:
- Type of statistics to build: it is possible to exclude availability data or performance and capacity data
- Use large memory tweaks (store MySQL temporary tables in memory):
- Import table containing comments:
- Import table containing downtimes:

Reporting perimeter selection
- Hostgroups:
- Host categories:
- service categories:

Availability statistic calculation
- Live services for availability statistics calculation:

Performance and capacity statistic calculation
- Granularity required for performance data statistics:
- Live services for performance data statistics calculation:

Capacity statistics aggregated by month
- Live services for capacity statistics calculation:
- Service categories related to capacity data monitoring:
- Exclude metrics from service categories that does not return a capacity USAGE information:

Centile parameters
- Calculating centile aggregation by:
- Select service categories to agregate centile on:
- First day of the week:
- Create centile-timeperiod combination(s) that fits your needs. (Centile format: 00.0000):

### Data retention options

General options
- Enable data retention option:

Performance data retention
- Raw performance data imported from Centreon:
- Performance data aggregated by hour:
- Performance data aggregated by day:
- Performance data aggregated by month:

Availability data retention
- Raw log data imported from Centreon:
- Availability data aggregated by day:
- Availability data aggregated by month:

### Report parameter

Syncrhonize ACL
- Update Resources ACL:

General options
- Please selet an user in order to display resources:
- Host groups available for that user:
- Host categories available for that user:
- Service categories available for that user:

### Reporting widgets

Reporting database connection status
- Connection to reporting database:

Parameters to connect to the reporting database
- Reporting MySQL database:
- Reporting MySQL port:
- Reporting MySQL name:
- Reporting MySQL user:
- Reporting MySQL password:

## Disk partitionning

When partitioning for your database, prepare another partition of 60% of your database's size for backups

## ACLs

In addition to [resources ACLs](../administration/access-control-lists.md), MBI will follow ACL Rules(**LINK**). These can be configured by an administrator inside **Administration > ACL > ACL Rules**. 
Here, administrators can choose which report designs, and job groups each user is allowed to access.

Job groups are a tag added to jobs to categorize the contents of the report the job will generate (i.e. reports about the customer side), you then use ACLs to determine which tags each user should be able to see.

> ACLs and ACL rules are only applied within the Centreon environment, using [publication rules](#publication-rules) to send reports outside of Centreon makes all its contents available to anyone who has the report regardless of their authorizations within Centreon.


## Publication rules

By default, reports generated are available on the Centreon platform to be downloaded. It is also possible to make it so generated reports are automatically sent to certain users by email or made available on a DropBox for example.

To do this, go to **Reporting > Monitoring Business Intelligence > Publication Rules**.


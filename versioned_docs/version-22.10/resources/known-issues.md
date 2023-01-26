---
id: known-issues
title: Known issues
---

Below is a list of know issues and/or bugs you may encounter.
We try to provide workarounds. We apply fixes when
necessary and are forever improving our software in order to solve any
issues for future releases.

## Centreon Web

### Inconsistent results when monitoring a metaservice

This issue may occur when you create a metaservice linked to monitored services, such as Ping services for instance. While the Ping services return correct results, the results received in the **Detail panel** for the metaservice may be inconsistent and return an **unknown** status with a message.

#### Workaround

There is currently no workaround.

### Environment variable not found: "hostCentreon"

During a central server (or remote server) installation, an error message appears for a short time in the snackbar when accessing the wizard to complete the installation. The error message is the following:

```sql
The controller for URI "/centreon/api/latest/platform/versions" is not callable: Environment variable not found: "hostCentreon".
```

#### Workaround

There is no workaround and this message does not prevent from finalizing the installation.

### You have reached the maximum of id into centreon_storage.index_data

#### Workaround

Play the following query into MariaDB :

In your monitoring database :
```sql
ALTER TABLE index_data MODIFY id bigint unsigned AUTO_INCREMENT;
ALTER TABLE metrics MODIFY index_id bigint unsigned;
```

In your configuration database :
```sql
ALTER TABLE ods_view_details MODIFY index_id bigint unsigned;
ALTER TABLE virtual_metrics MODIFY index_id bigint unsigned;
```

> Depending on your metrics volumes, this operation could be more or less long.

### Autologin does not work with some pages

#### Description

Autologin is currently not supported on the following pages :

* **Monitoring > Resources Status**
* **Configuration > Hosts > Discovery**
* **Configuration > Business Activity > Business Views**
* **Configuration > Business Activity > Business Activity**

#### Workaround

There is currently no workaround.

## Anomaly Detection

### Cannot monitor an Anomaly Detection service linked to a metaservice

When you create a metaservice with an Anomaly Detection service linked to it, you may not receive data for graphs and predictions.

#### Workaround

There is currently no workaround.

## Centreon MBI

### Error during the ETL script execution

This issue is due to package changes and returns an error similar to the following one:

```shell
Can't open perl script "/usr/share/centreon-bi/etl/perfdataStatisticsBuilder_legacy.pl": No such file or folder
```

#### Workaround

Run the following command as a ``root`` or ``centreonBI`` user:

```shell
sed -i 's/_legacy//g' /usr/share/centreon-bi/bin/centreonBIETL
```

### MBI does not work if databases have custom names

#### Workaround

There is currently no workaround.

### The Report Parameters tab of a job is empty

#### Description

The **Report Parameters** tab of a job is empty (**Reporting > Monitoring Business Intelligence > Jobs**)

#### Workaround

* Go to the **Configuration** tab of the job
* Select a different report design from the **Report design** list
* Select the original report design
* Go back to the **Report Parameters** tab

### You have reached the maximum of id for servicemetric_id columns

#### Description

If you have a very large infrastructure, it is possible that the `servicemetric_id` column size has been reached.

#### Workaround

> Depending on your data volume, this operation could be more or less long.

* Connect in the reporting server
* Disable cron job in `/etc/cron.d/centreon-bi-engine`:

    ```shell
    #30 4 * * * root /usr/share/centreon-bi//bin/centreonBIETL -d >> /var/log/centreon-bi//centreonBIETL.log 2>&1
    ```

* Execute the following queries in `centreon_storage` database:

    ```sql
    ALTER TABLE mod_bi_metricdailyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_metrichourlyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_metricmonthcapacity MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_metriccentiledailyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_metriccentilemonthlyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_metriccentileweeklyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_servicemetrics MODIFY id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
    ```

* Enable cron job in `/etc/cron.d/centreon-bi-engine` :

    ```shell
    30 4 * * * root /usr/share/centreon-bi//bin/centreonBIETL -d >> /var/log/centreon-bi//centreonBIETL.log 2>&1
    ```

* If the operation occured during the usual launch of the scheduled task, run the following command indicating the correct start and end dates:

    ```shell
    /usr/share/centreon-bi/bin/centreonBIETL -rIEDP -s YYYY-MM-DD -e YYYY-MM-DD
    ```

---
id: known-issues
title: Known issues
---

Below is a list of know issues and/or bugs you may encounter.
We try to provide workarounds. We apply fixes when
necessary and are forever improving our software in order to solve any
issues for future releases.

## Centreon web

### Rebuilding the RRD files of a service causes the status RRD file to become invalid

All its historical data is displayed as CRITICAL.

#### Workaround

This is a workaround to perform the rebuild properly (on the central server):

* Make a backup of all status RRD files that are related to the services you are about to rebuild.
* Launch the RRD rebuild.
* Once the rebuild is complete, restore the status RRD files (using the backup).

If the rebuild has already been done, you will not be able to recover the past data. Remove the status RRD file and all the new data will be displayed properly with the right status.

### You have reached the maximum of id into centreon_storage.index_data

#### Workaround

Play the following request into MariaDB :

In your monitoring database :

```mysql
ALTER TABLE index_data MODIFY id bigint unsigned AUTO_INCREMENT;
ALTER TABLE metrics MODIFY index_id bigint unsigned;
```

In your configuration database :

```mysql
ALTER TABLE ods_view_details MODIFY index_id bigint unsigned;
ALTER TABLE virtual_metrics MODIFY index_id bigint unsigned;
```

Depending on your metrics volumes, this operation could be more or less long.

### Autologin does not work with some pages

* Monitoring > Resources Status
* Configuration > Hosts > Discovery
* Configuration > Business Activity > Business Views
* Configuration > Business Activity > Business Activity

#### Workaround

There is currently no workaround.

### The content of the pages is not translated according to the language of the user

#### Workaround

You must install the languages on your operating system with the following command:

```shell
yum install -y glibc-all-langpacks
```

Then restart PHP using the following command:

```shell
systemctl restart php-fpm
```

## Centreon BAM

### BAM refresh problem

On platforms using the BAM module and monitoring tens of thousands of services, after a restart of the `cbd` service, a long time can elapse before the data from the monitoring begins to refresh in the web interface. From our observations, it takes about 20 minutes for a 50k services platform. **No data is lost, and the latency won't happen again until the next restart.**

#### Workaround

There is no workaround apart from disabling the BAM broker outputs, which is equivalent to disabling the BAM module. This bug is present on all major versions currently supported and should be fixed during January 2022.

## Centreon MBI

### Empty tab in MBI

In MBI, the **Report Parameters** tab of a job is empty (in **Reporting > Monitoring Business Intelligence > Jobs**).

#### Workaround

1. Go to the **Configuration** tab of the job
2. Select a different report design from the **Report design** list.
3. Select the original report design
4. Go back to the **Report Parameters** tab.

### MBI does not work if databases have custom names

#### Workaround

There is currently no workaround.

### You have reached the maximum of id for servicemetric_id columns

If you have a very large infrastructure, it is possible that the `servicemetric_id` column size has been reached.

#### Workaround

> Depending on your data volume, this operation could be more or less long.

Connect to the reporting server.

* Disable cron job in `/etc/cron.d/centreon-bi-engine`:

    ```shell
    #30 4 * * * root /usr/share/centreon-bi//bin/centreonBIETL -d >> /var/log/centreon-bi//centreonBIETL.log 2>&1
    ```

* Execute the following queries in the `centreon_storage` database:

    ```sql
    ALTER TABLE mod_bi_metricdailyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_metrichourlyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_metricmonthcapacity MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_metriccentiledailyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_metriccentilemonthlyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_metriccentileweeklyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_servicemetrics MODIFY id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
    ```

* Enable the cron job in `/etc/cron.d/centreon-bi-engine` :

    ```shell
    30 4 * * * root /usr/share/centreon-bi//bin/centreonBIETL -d >> /var/log/centreon-bi//centreonBIETL.log 2>&1
    ```

* If the operation occurred during the usual launch of the scheduled task, run the following command indicating the correct start and end dates:

    ```shell
    /usr/share/centreon-bi/bin/centreonBIETL -rIEDP -s YYYY-MM-DD -e YYYY-MM-DD
    ```

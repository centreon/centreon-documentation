---
id: known-issues
title: Known issues
---

Below is a list of know issues and/or bugs you may encounter.
We try to provide workarounds. We apply fixes when
necessary and are forever improving our software in order to solve any
issues for future releases.

## Centreon Web

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

## Centreon MBI

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

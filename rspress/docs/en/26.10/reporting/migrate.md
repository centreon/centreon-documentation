---
id: migrate
title: Migrate the extension
---

This chapter explains:

* how to move your reporting server to another one (e.g. if you want to switch to another supported OS).
* what to do regarding MBI if you are migrating your central server too: the migration of the interface extension is done at the same time as the migration of the central server. Also, if you are using a remote database, you may have to [recreate views in the central database](#recreate-views-in-the-central-database).

## Install the new reporting server

Install your new reporting server based on the Centreon Business
repository using the [standard documentation](installation.md).

## Synchronizing files & data

Stop mysqld on **both** Reporting servers

```shell
service mysql stop
```

Copy data from the old reporting server to the new one:

```shell
rsync -avz /var/lib/mysql/* root@IP_New_Reporting_Server:/var/lib/mysql/
```

Execute the following command to ensure compatibility of the database files:

```shell
mysql_upgrade
```

-   If no error is visible, restart MariaDB/MySQL and continue to the section
    "Move generated reports"
-   If you see errors, especially on the following tables mysql
    innodb_index_stats, innodb_table_stats, gtid_slave_pos, it
    might be caused by an incompatibility between MySQL/MariaDB 5.5 and
    MariaDB 10.11. In that case, follow the procedure below:

    ```shell
    service mysql stop
    cp -a /var/lib/mysql/ /var/lib/mysql.bak
    cd /var/lib/mysql/mysql/
    rm innodb_index_stats.frm innodb_index_stats.ibd innodb_table_stats.frm innodb_table_stats.ibd gtid_slave_pos.frm gtid_slave_pos.ibd
    service mysql start
    ```

    Then manually recreate the tables:

    ```shell
    mysql mysql < repair_mysql_upgrade.sql
    ```

    Download the following file: [repair_mysql_upgrade.sql](../assets/reporting/administrate/repair_mysql_upgrade.sql)

> Be sure to copy the the custom report & resources you designed to your
> new reporting server in the same folders.

## Move generated reports

In case you also move your Centreon central server, you need to
synchronize the folders containing generated reports on your new
Centreon server to be able to have them on the interface:

```shell
rsync -avz /var/lib/centreon/centreon-bi-server/archives/ root@IP_New_Centreon_Server:/var/lib/centreon/centreon-bi-server/archives/
```

## Recreate views in the central database

This section only applies if you are migrating your **central server** and:

* you are using MBI
* you have a remote database.

If you are in this case, in your database, check who is the owner (definer) of the following views:

```shell
select table_name,definer from information_schema.views where table_schema like '%centreon%';
```

The results may look like this (the owner will be the one you have defined when installing MBI):

```shell
+----------------------------------------+--------------------+
| table_name                             | definer            |
+----------------------------------------+--------------------+
| mod_bam_view_kpi                       | centreon@localhost |
| mod_bi_publication_relations_v01       | centreon@localhost |
| mod_bi_generation_v01                  | centreon@localhost |
| mod_bi_report_v01                      | centreon@localhost |
| mod_bi_generation_output_relations_V01 | centreon@localhost |
| mod_bi_generation_locale_relations_v01 | centreon@localhost |
| mod_bi_host_service_relations_V01      | centreon@localhost |
| mod_bi_locale_v01                      | centreon@localhost |
| mod_bi_publication_v01                 | centreon@localhost |
+----------------------------------------+--------------------+
```

In the example above, the owner of the views is **centreon**, and the central server is defined as **localhost**: you do not need to do anything. However, if the central server is defined by an IP address or FQDN rather than by **localhost**, you need to change it to the new IP address or FQDN for your central server. Run the following query:

```text
use centreon;
CREATE OR REPLACE VIEW `mod_bi_report_v01` AS SELECT `id`, `name`, `description`, `source`, `xml_file`, `trash`, `activate`, `weight`, `is_editable`, `optgroup_id` FROM `mod_bi_report` WHERE `activity_start` <= NOW() AND `activity_end` > NOW();
CREATE OR REPLACE VIEW `mod_bi_generation_v01` AS SELECT `id`, `name`, `id_report`, `task_hour`, `task_day_of_week`, `task_day`, `scheduling`, `task_month`, `trash`, `mail_enable`, `mail_title`, `mail_body`, `mail_footer`, `report_period_start`, `report_period_end`, `is_cyclic`,`mail_attach_file`, `generation_date`, `coefficient`, `enable_notification`FROM `mod_bi_generation` WHERE `activity_start` <= NOW() AND `activity_end` > NOW();
CREATE OR REPLACE VIEW `mod_bi_generation_output_relations_V01` AS SELECT `generation_id`, `generation_output_id` FROM `mod_bi_generation_output_relations` WHERE `activity_start` <= NOW() AND `activity_end` > NOW();
CREATE OR REPLACE VIEW `mod_bi_host_service_relations_V01` AS select `param_obj_id` , `generation_id`, `host_id`, `service_id`, `sg_id`, `hg_id`, `sc_id`, `ba_group_id`, `ba_id` from `mod_bi_host_service_relations` where `activity_start` <= now() and `activity_end` > now();
CREATE OR REPLACE VIEW `mod_bi_locale_v01` AS SELECT `id`, `name` FROM `mod_bi_locale` WHERE `activity_start` <= NOW() AND `activity_end` > NOW();
CREATE OR REPLACE VIEW `mod_bi_publication_v01` AS SELECT `id`, `name`, `description`, `publish_job_log`, `publication_type_id`, `root_directory`, `sub_directory`, `is_global`, `is_default` FROM `mod_bi_publication` WHERE `activity_start` <= NOW() AND `activity_end` > NOW();
CREATE OR REPLACE VIEW `mod_bi_publication_relations_v01` AS SELECT `publication_id`, `generation_id` FROM `mod_bi_publication_relations` WHERE `activity_start` <= NOW() AND `activity_end` > NOW();
CREATE OR REPLACE VIEW `mod_bi_generation_locale_relations_v01` AS SELECT `generation_id`, `locale_id` FROM `mod_bi_generation_locale_relations` WHERE `activity_start` <= NOW() AND `activity_end` > NOW();
CREATE OR REPLACE VIEW mod_bam_view_kpi AS SELECT k.kpi_id, b.ba_id, k.activate AS kpi_activate, b.activate AS ba_activate, b.name AS ba_name,k.host_id, h.host_name AS kpi_host, k.service_id, s.service_description AS kpi_service, k.id_indicator_ba, bk.name AS kpi_ba, k.meta_id, meta.meta_name AS kpi_meta, k.boolean_id, boo.name AS kpi_boolean, anomaly_detection.service_description AS kpi_anomaly_detection, s.service_activate AS kpi_service_activate, b.icon_id, k.kpi_type, k.config_type, k.last_impact, k.last_level, k.last_state_change, k.current_status, k.in_downtime, k.acknowledged,
k.drop_warning, k.drop_critical, k.drop_unknown, k.drop_warning_impact_id, k.drop_critical_impact_id, k.drop_unknown_impact_id, b.current_level as ba_current_level, b.current_status as ba_current_status, b.in_downtime as ba_in_downtime, b.level_w, b.level_c
FROM mod_bam_kpi AS k INNER JOIN mod_bam AS b ON b.ba_id = k.id_ba LEFT JOIN host AS h ON h.host_id = k.host_id LEFT JOIN service AS s ON s.service_id = k.service_id AND s.service_register = '1' LEFT JOIN service AS anomaly_detection ON anomaly_detection.service_id = k.service_id AND anomaly_detection.service_register = '3' LEFT JOIN mod_bam AS bk ON bk.ba_id = k.id_indicator_ba LEFT JOIN meta_service AS meta ON meta.meta_id = k.meta_id LEFT JOIN mod_bam_boolean as boo ON boo.boolean_id = k.boolean_id ORDER BY b.name;
```

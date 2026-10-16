---
id: migrate
title: Migrer l'extension
description: "Migrer votre serveur de reporting Centreon MBI vers un nouveau serveur"
---

Cette section explique que faire :
* pour migrer votre serveur de reporting vers un nouveau serveur (par exemple si vous voulez passser à un OS supporté).
* si vous utilisez MBI et que vous souhaitez migrer votre serveur central: la migration de l'interface se fait en même temps que la [migration du serveur central](../migrate/introduction.md). De plus, si vous utilisez une base de données distante, vous devrez peut-être [recréer les vues dans la base de données centrale](#recréer-les-vues-dans-la-base-de-données-centrale).

## Installer le nouveau serveur de reporting

Installer le nouveau serveur de reporting sur le nouvel OS, installer
le dépôt Centreon Business et utiliser la documentation d'[installation](installation.md).

## Synchroniser les données

Stopper mysqld sur les **deux** serveurs de reporting:

```shell
service mysql stop
```

Copier les fichiers à partir de l'ancien serveur de reporting vers le
nouveau:

```shell
rsync -avz /var/lib/mysql/* root@IP_New_Reporting_Server:/var/lib/mysql/
```

Lancer la commande suivante pour assurer la compatibilité des données:

```shell
mysql_upgrade
```

-   Si aucune erreur n'apparaît, redémarrez MariaDB/MySQL et continuez à la
    section ci-dessous "Déplacer les rapports générés".
-   Si des erreurs sont visibles, notamment sur les tables mysql
    innodb\_index\_stats, innodb\_table\_stats, gtid\_slave\_pos, cela
    peut être dû à une incompatibilité entre MySQL/MariaDB 5.5 et
    MariaDB 10.11. Dans ce cas, effectuer les actions suivantes:

    ```shell
    service mysql stop
    cp -a /var/lib/mysql/ /var/lib/mysql.bak
    cd /var/lib/mysql/mysql/
    rm innodb_index_stats.frm innodb_index_stats.ibd innodb_table_stats.frm innodb_table_stats.ibd gtid_slave_pos.frm gtid_slave_pos.ibd
    service mysql start
    ```

    Puis recréer les tables manuellement en utilisant la commande suivante:

    ```shell
    mysql mysql < repair_mysql_upgrade.sql
    ```

    Téléchargez le fichier ici : [repair_mysql_upgrade.sql](../assets/reporting/administrate/repair_mysql_upgrade.sql).

> Si vous aviez développé des rapports & bibliothèques personnalisées,
> pensez à les copier dans les mêmes dossiers sur votre nouveau serveur de reporting.

## Déplacer les rapports générés

Synchroniser les rapports générés sur votre ancien serveur Centreon vers
le nouveau pour être en mesure de les consulter via l'interface.
Connectez vous sur l'ancien serveur Centreon puis:

```shell
rsync -avz /var/lib/centreon/centreon-bi-server/archives/ root@IP_New_Centreon_Server:/var/lib/centreon/centreon-bi-server/archives/
```

## Recréer les vues dans la base de données centrale

Cette section ne s'applique que si vous migrez votre **serveur central** et :

* vous utilisez MBI
* vous disposez d'une base de données distante.

Si tel est le cas, vérifiez dans votre base de données qui est le propriétaire (definer) des vues suivantes :

```shell
select table_name,definer from information_schema.views where table_schema like '%centreon%';
```

Les résultats pourront ressembler à ceci (le propriétaire sera celui que vous avez défini lors de l'installation de MBI) :

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

Dans l'exemple ci-dessus, le propriétaire des vues est **centreon** et le serveur central est défini par **localhost** : vous n'avez rien à faire. Cependant, si le serveur central est défini par une adresse IP ou un nom de domaine complet (FQDN) plutôt que par **localhost**, vous devez le remplacer par la nouvelle adresse IP ou le nouveau nom de domaine complet (FQDN) de votre serveur central. Exécutez la requête suivante :

```sql
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

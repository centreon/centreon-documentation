CREATE VIEW mod_bi_report_v01 AS

    SELECT id, name, description, source, xml_file, trash, activate, weight, is_editable, optgroup_id

       FROM mod_bi_report
       WHERE activity_start <= NOW() AND activity_end > NOW();

CREATE VIEW mod_bi_generation_v01 AS

        SELECT id, name, id_report, task_hour, task_day_of_week, task_day, scheduling, task_month, trash,
           mail_enable, mail_title, mail_body, mail_footer, report_period_start, report_period_end, is_cyclic,
           mail_attach_file, generation_date, coefficient, enable_notification

          FROM mod_bi_generation
          WHERE activity_start <= NOW() AND activity_end > NOW();

CREATE VIEW mod_bi_locale_v01 AS

    SELECT id, name

       FROM mod_bi_locale
       WHERE activity_start <= NOW() AND activity_end > NOW();

CREATE VIEW mod_bi_publication_v01 AS

    SELECT id, name, description, publish_job_log, publication_type_id, root_directory, sub_directory, is_global, is_default

       FROM mod_bi_publication
       WHERE activity_start <= NOW() AND activity_end > NOW();

CREATE VIEW mod_bi_publication_relations_v01 AS

    SELECT publication_id, generation_id

       FROM mod_bi_publication_relations
       WHERE activity_start <= NOW() AND activity_end > NOW();

CREATE VIEW mod_bi_generation_locale_relations_v01 AS

    SELECT generation_id, locale_id

       FROM mod_bi_generation_locale_relations
       WHERE activity_start <= NOW() AND activity_end > NOW();

CREATE VIEW mod_bi_generation_output_relations_V01 AS

    SELECT generation_id, generation_output_id

       FROM mod_bi_generation_output_relations
       WHERE activity_start <= NOW() AND activity_end > NOW();

CREATE VIEW mod_bi_host_service_relations_V01 AS

    SELECT param_obj_id , generation_id, host_id, service_id,
        sg_id, hg_id, sc_id, ba_group_id, ba_id

       FROM mod_bi_host_service_relations
       WHERE activity_start <= now() and activity_end > now();


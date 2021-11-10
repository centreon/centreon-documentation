---
id: known-issues
title: Known issues
---

Below is a list of know issues and/or bugs you may encounter.
We try to provide workarounds. We apply fixes when
necessary and are forever improving our software in order to solve any
issues for future releases.

| Issues | Workaround if exists |
| ------ | -------------------- |
| You have reached the maximum of id into centreon_storage.index_data | Play the following request into MariaDB :<br/> In your monitoring database :<br /> `ALTER TABLE index_data MODIFY id bigint unsigned AUTO_INCREMENT;`<br /> `ALTER TABLE metrics MODIFY index_id bigint unsigned;`<br/> In your configuration database :<br /> `ALTER TABLE ods_view_details MODIFY index_id bigint unsigned;`<br /> `ALTER TABLE virtual_metrics MODIFY index_id bigint unsigned;`<br /> Depending on your metrics volumes, this operation could be more or less longer. |
|In MBI, the **Report Parameters** tab of a job is empty (in **Reporting > Monitoring Business Intelligence > Jobs**)|<ul><li>Go to the **Configuration** tab of the job</li><li>Select a different report design from the **Report design** list</li><li>Select the original report design</li><li>Go back to the **Report Parameters** tab.</li></ul>|
| When several connections to the database are configured, you may get this kind of message: </br>`Lock wait timeout exceeded; try restarting transaction`. This results in blocking broker’s inserts into the database.| Set the **Number of connections to the database** parameter to 1 on all central broker outputs, on page **Configuration > Pollers > Broker configuration**, on the **Output** tab: </br><ul><li>Output 1 - Broker SQL Database</li><li>Output 3 - Perfdata Generator (Centreon Storage)</li></ul>|
|Autologin does not work with some pages: <ul><li>Monitoring > Resources Status</li><li>Configuration > Hosts > Discovery</li><li>Configuration > Business Activity > Business Views</li><li>Configuration > Business Activity > Business Activity</li></ul>||
| The content of the pages is not translated according to the language of the user | You must install the languages on your operating system with the following command: <br /> `yum install -y glibc-all-langpacks` <br /> then restart PHP using the following command: <br /> `systemctl restart php-fpm` |


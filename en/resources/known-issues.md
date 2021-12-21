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
| On platforms using the BAM module and monitoring tens of thousands of services, after a restart of the `cbd` service, a long time can elapse before the data from the monitoring begins to refresh in the Web interface. From our observations, it takes about 20 minutes for a 50k services platform. **No data is lost, and the latency won't happen again until the next restart.** | There is no workaround apart from disabling the BAM broker outputs, which is equivalent to disabling the BAM module. This bug is present on all major versions currently supported and should be fixed during January 2022. |
| You have reached the maximum of id into centreon_storage.index_data | Play the following request into MySQL / MariaDB :<br/> In your monitoring database :<br /> `ALTER TABLE index_data MODIFY id bigint unsigned AUTO_INCREMENT;`<br /> `ALTER TABLE metrics MODIFY index_id bigint unsigned;`<br/> In your configuration database :<br /> `ALTER TABLE ods_view_details MODIFY index_id bigint unsigned;`<br /> `ALTER TABLE virtual_metrics MODIFY index_id bigint unsigned;`<br /> Depending on your metrics volumes, this operation could be more or less longer. |
|Autologin does not work with some pages.| |
|Autodiscovery module: when saving a host, a warning message indicates that the host hasn't been saved. However, the host has been saved successfully.||
| When several connections to the database are configured, you may get this kind of message: </br>`Lock wait timeout exceeded; try restarting transaction`. This results in blocking broker’s inserts into the database.| Set the **Number of connections to the database** parameter to 1 on all central broker outputs, on page **Configuration > Pollers > Broker configuration**, on the **Output** tab: </br><ul><li>Output 1 - Broker SQL Database</li><li>Output 3 - Perfdata Generator (Centreon Storage)</li></ul>|

---
id: map-web-advanced-configuration
title: Advanced configuration in MAP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


This chapter describes advanced procedures for configuring your Centreon MAP
system.

## Monitoring your Centreon MAP server after installation

Centreon provides a [Monitoring Connector and a plugin](/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-map-engine-actuator) to monitor your Centreon MAP server.

### Configure your services

Access your Centreon Web interface. Go to **Configuration > Host > Add**.

Fill in the basic information about your host and add the following host
templates:

- OS-Linux-SNMP-custom
- App-Jvm-Centreon-Map-Engine-custom

To monitor centreon-map JVM, please use following macro values:

| Name                    | Value                           |
| :---------------------- | :------------------------------ |
| ACTUATORCUSTOMMODE      | ```centreonmap```               |
| ACTUATORAPIURLPATH      | ```/centreon-studio/api/beta``` |
| ACTUATORAPIUSERNAME     | Api username must be set        |
| ACTUATORAPIPASSWORD     | Api password must be set        |

> Remember to check the "Create Services linked to the Template too" checkbox.

You can now export your configuration, and your Centreon MAP server will be
monitored.

You can also simply check by accessing the following URL, which tells you
whether or not the server is up:

<Tabs groupId="sync">
<TabItem value="HTTP" label="HTTP">

```shell
http://<MAP_IP>:8080/centreon-studio/api/beta/actuator/health.
```

</TabItem>
<TabItem value="HTTPS" label="HTTPS">

```shell
https://<MAP_IP>:8443/centreon-studio/api/beta/actuator/health.
```

</TabItem>
</Tabs>

## Backup of Centreon MAP server

### Saved items

The saved items are:

- Saving configuration files (**/etc/centreon-map**)
- Saving database **centreon\_map**

### How it works?

The backup script is executed on a daily basis (2AM) with a cron job located in
**/etc/cron.d/centreon-map-server-backup**:

```text
#
# Cron to backup Centreon MAP server
#
PATH=/sbin:/bin:/usr/sbin:/usr/bin

# rewrite file with new cron line
CRONTAB_EXEC_USER=""

0 2 * * * root bash /usr/share/centreon-map-server/bin/centreon-map-server-backup.sh >> /var/log/centreon-studio/backup.log 2>&1
```

The backup **centreon-map-server-yyyy-mm-dd.tar.gz** is stored in
**BACKUP\_DIR**, which is defined in the configuration file.

### Backup parameters

The backup parameters are stored in **/etc/centreon-studio/backup.conf**

- ENABLE: enable/disable backup mechanism (default value: 0)
- BACKUP\_DIR: where the backup is stored (default value: /var/backup)
- RETENTION\_AGE: backup retention in days (default value: 8)

> **We recommend exporting backups to another resource in order to secure them.**

### Restore data from Centreon MAP server

The restoration process is divided into several steps:

- Extracting backup
- Restoring configuration files
- Restoring database

> **We assume that you have followed the Centreon MAP server installation
> procedure to obtain a fresh install.**

### Extracting backup

Obtain the last **centreon-map-server-yyyy-mm-dd.tar.gz** backup and extract it
into the **/tmp** directory:

```shell
cd /tmp
tar xzf centreon-map-server-yyyy-mm-dd.tar.gz
```

### Restoring configuration files

To restore configuration files, run the following command:

```shell
cp -R etc/centreon-studio/* /etc/centreon-studio/
```

### Restoring database

To restore the **centreon\_studio** database, run the following command:

```shell
systemctl stop centreon-map
mysql -h <db_host> -u <db_user> -p<db_password> <db_name> < centreon-map-server.dump
systemctl start centreon-map
```

## Change Centreon MAP server port

> Mistakes when editing configuration files can lead to malfunctions of the software. We recommend that you make a backup of the file before editing it and that you only change the settings advised by Centreon.

By default, the Centreon MAP server is listening and sending information
through the port 8080. If you set the SSL (see [HTTPS/TLS
Configuration](secure-your-map-platform.md#configure-httpstls-on-the-web-server)),
use the port 8443.

You can change this port (e.g., if you have a firewall on your network
blocking these ports).

> If the new port is below 1024, use the procedure below, "Define
> port below 1024", instead.

On your Centreon MAP server, stop the Centreon MAP server:

```shell
systemctl stop centreon-map
```

Edit the studio-config.properties settings file located in
/etc/centreon-studio:

```shell
vi /etc/centreon-studio/studio-config.properties
```

Add the following line at the MAP SERVER section

```text
centreon-map.port=XXXX
```

> Replace *XXXX* with the port you want.

Then restart the Centreon MAP server:

```shell
systemctl start centreon-map
```

Wait for the Centreon MAP service to start completely (~30 sec to 1 minute).

Test that your server is up and accessible on the new port you defined by
entering the following URL in your web browser:

```shell
http://<MAP_IP>:<NEW_PORT>/centreon-studio/api/beta/actuator/health
```

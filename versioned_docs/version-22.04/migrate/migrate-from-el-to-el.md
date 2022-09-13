---
id: migrate-from-el-to-el
title: Migrate from an EL-type OS to another EL-type OS (from a Centreon 18.10 or newer)
---

## Prerequisites

This procedure only applies if the following conditions are met:

- You wish to migrate from a 64-bit EL-type OS to another supported 64-bit EL-type OS. For instance, if you want to migrate from a CentOS 7 to an Alma 8.
- Your version of Centreon is 18.10 or newer.

> If your Centreon platform includes a Centreon redundancy system, please
> contact [Centreon support](https://centreon.force.com).

## Migrating a central server

### Step 1: Install the new server

1. Install your new OS according to the [prerequisites](../installation/prerequisites.md).

2. Install a new Centreon central server from [packages](../installation/installation-of-a-central-server/using-packages.md), until you
complete the installation process by connecting to the Centreon web interface.

   > Use the same password for the **centreon** user as for the old platform during the web
   > installation process.

3. Perform software and system updates:

   ```shell
   dnf update
   ```

### Step 2 : Synchronize the data

1. Connect to your old Centreon server.

2. Generate a pair of ssh keys for **root**:

   ```shell
   ssh-keygen -t rsa
   ```

   By defaut, the generated key pair will be saved to **/root/.ssh/id_rsa.pub** and **/root/.ssh/id_rsa**.

3. Copy **root**'s public key (**/root/.ssh/id_rsa.pub**) into the **/root/.ssh/authorized_keys** file of the new server. If you are not using **root** for the synchronization, make sure that the user you use has writing rights on the target directory.

4. From the old server, synchronize the following directories to the new server:

   ```shell
   rsync -avz /etc/centreon root@<IP_NEW_CENTREON>:/etc
   rsync -avz /etc/centreon-broker root@<IP_NEW_CENTREON>:/etc
   rsync -avz /var/log/centreon-engine/archives/ root@<IP_NEW_CENTREON>:/var/log/centreon-engine
   rsync -avz --exclude centcore/ --exclude log/ /var/lib/centreon root@<IP_NEW_CENTREON>:/var/lib
   ```

   If you have given a custom name to your private key file, use the following format (just replace **id_rsa_custom** by your file name, and **\<command>** by the commands above):

   ```shell
   rsync -avz -e "ssh -i /root/.ssh/id_rsa_custom" <command>
   ```

   > Replace **<IP_NEW_CENTREON>** by the IP address of the new Centreon server.

### Step 3: Retrieve the databases

1. On the old server, create a dump of the databases:

   ```shell
   mysqldump -u root -p centreon > /tmp/centreon.sql
   mysqldump -u root -p centreon_storage > /tmp/centreon_storage.sql
   ```

2. On the old server, stop MariaDB:

   ```shell
   service mysqld stop
   ```

3. On the old server, export the dumps to the new Centreon 22.04 database server (make sure you
have enough space for large database dumps):

   ```shell
   rsync -avz /tmp/centreon.sql root@<IP_NEW_CENTREON>:/tmp/
   rsync -avz /tmp/centreon_storage.sql root@<IP_NEW_CENTREON>:/tmp/
   ```

4. On the new database server, drop the original databases and
create them again:

   ```shell
   mysql -u root -p
   ```

   ```SQL
   DROP DATABASE centreon;
   DROP DATABASE centreon_storage;
   CREATE DATABASE centreon;
   CREATE DATABASE centreon_storage;
   exit
   ```

5. On the new database server, import the previously transfered dumps into the database:

   ```shell
   mysql -u root centreon -p </tmp/centreon.sql
   mysql -u root centreon_storage -p </tmp/centreon_storage.sql
   ```

6. Upgrade the tables:

   ```shell
   mysql_upgrade
   ```

   If your database is password-protected, enter:

   ```shell
   mysql_upgrade -u <database_admin_user> -p
   ```

   Example: if your database_admin_user is `root`, enter:

   ```shell
   mysql_upgrade -u root -p
   ```

7. Start the mariadb process on the new server:

   ```shell
   systemctl start mariadb
   ```

> Replace **<IP_NEW_CENTREON>** by the IP address of the new Centreon server.

### Step 4: Synchronize the plugins

If you only use Centreon plugins, reinstall them on the new server:

```shell
yum install centreon-plugin-\*
```

If you are using custom plugins, synchronize the directories that contain your custom plugins, including any necessary dependencies.

### Step 5: Upgrade Centreon

1. On the new server, force the update by moving the contents of the
**/var/lib/centreon/installs/install-22.04.x-YYYYMMDD\_HHMMSS** directory to
the **/usr/share/centreon/www/install** directory (**x** is the target version number for your migrated machine):

   ```shell
   cd /var/lib/centreon/installs/
   mv install-22.04.x-YYYYMMDD_HHMMSS/ /usr/share/centreon/www/install/
   ```

2. If you use the same IP address or same DNS name between the old Centreon webserver and the new one, do a full cache cleanup of your browser to avoid JS issues.

3. Go to `http://<IP_NEW_CENTREON>/centreon` and perform the upgrade.

4. If the password for user **centreon** that you specified when installing the new server is different from the password on the old server, you must follow these steps:

   1. Edit the **/etc/centreon/centreon.conf.php** file,
   2. Edit the **/etc/centreon/conf.pm** file,
   3. Edit the Centreon Broker central configuration using the Centreon web interface and change the password for the **Perfdata generator** and **Broker SQL database** output,
   4. Edit the **/etc/centreon/config.d/10-database.yaml** file.

5. If the IP address of your Centreon server has changed, edit the configuration for all
the Centreon Broker modules of your Pollers and change the IP to connect to
the Centreon Central server (output IPv4). See the [Advanced
configuration](../monitoring/monitoring-servers/advanced-configuration.md#tcp-outputs)
chapter for more information.

6. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) for all your monitoring servers (including the central).

7. Restart the following processes:

   ```shell
   systemctl restart cbd centengine
   systemctl restart gorgoned
   systemctl start snmptrapd centreontrapd
   systemctl start snmpd
   ```

8. If your old Centreon server was monitoring itself, and you have changed the username/password for the database during the migration, update the configuration of all related resources (host, services attached to that host).

9. Go to **Configuration > Plugin Packs**, then [update all the plugin packs](../monitoring/pluginpacks.md#updating-one-packall-packs).

### Step 6 (older versions only): Migrate to Gorgone

If you are migrating from a Centreon version 18.10, 19.04 or 19.10, [migrate from Centcore to Gorgone](../developer/developer-gorgone-migrate-from-centcore.md).

### Step 7: Upgrade the modules

To upgrade the modules, go to **Administration > Extensions > Manager** and click **Update all**.
If you have a MAP server or an MBI server, follow the corresponding migration procedures:

- Migration procedure for [MAP](../graph-views/migrate.md),
- Migration procedure for [MBI](../reporting/migrate.md).

## Migrating a remote server

To migrate a remote server:

1. Follow the same procedure as for a central server.
2. [Attach the new remote server](../monitoring/monitoring-servers/add-a-remote-server-to-configuration.md) to your central server.

## Migrating a poller

To migrate a poller:

1. Follow steps 1 and 4 of the procedure to migrate a central server (i.e. [install the new server](#step-1-install-the-new-server) and [synchronize the plugins](#step-4-synchronize-the-plugins)).
2. [Attach the new poller](../monitoring/monitoring-servers/add-a-poller-to-configuration.md) to the remote server you want, or to the central server.

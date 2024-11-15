---
id: migrate-from-el-to-el
title: Migrate from an EL-type OS to another EL-type OS (from a Centreon 18.10 or newer)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prerequisites

This procedure only applies if the following conditions are met:

- You wish to migrate from a 64-bit EL-type OS to another supported 64-bit EL-type OS. For instance, if you want to migrate from a CentOS 7 to an Alma 8 or 9.
- Your version of Centreon is 18.10 or newer.

All servers (central, remote and pollers) in your architecture must have the same major version of Centreon. It is also recommended that they have the same minor version.

> If your Centreon platform includes a Centreon redundancy system, please
> contact [Centreon support](https://support.centreon.com).

## Migrating a platform

### Step 1: Install the new central server

1. Install your new OS: check the [supported operating systems](../installation/compatibility.md#operating-systems).

2. Install a new Centreon central server from [packages](../installation/installation-of-a-central-server/using-packages.md), until you
complete the installation process by connecting to the Centreon web interface.

   > Use the same password for the **centreon** user as for the old platform during the web
   > installation process.

3. Perform software and system updates:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf update
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update
```

</TabItem>
</Tabs>

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
   rsync -avz /usr/share/centreon/www/img/media root@<IP_NEW_CENTREON>:/usr/share/centreon/www/img
   ```

   If you have given a custom name to your private key file, use the following format (just replace **id_rsa_custom** by your file name, and `<command>` by the commands above):

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
   systemctl stop mariadb
   ```

3. On the old server, export the dumps to the new Centreon database server (make sure you
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

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-plugin-\*
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-plugin-\*
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt install centreon-plugin-\*
```

</TabItem>
</Tabs>

If you are using custom plugins, synchronize the directories that contain your custom plugins, including any necessary dependencies.

### Step 5: Upgrade Centreon

1. On the new server, force the update by moving the contents of the
**/var/lib/centreon/installs/install-23.04.x-YYYYMMDD\_HHMMSS** directory to
the **/usr/share/centreon/www/install** directory (**x** is the target version number for your migrated machine):

   ```shell
   cd /var/lib/centreon/installs/
   mv install-23.04.x-YYYYMMDD_HHMMSS/ /usr/share/centreon/www/install/
   ```

2. If you use the same IP address or same DNS name between the old Centreon webserver and the new one, do a full cache cleanup of your browser to avoid JS issues.

3. Go to `http://<IP_NEW_CENTREON>/centreon` and perform the upgrade.

4. If the password for user **centreon** that you specified when installing the new server is different from the password on the old server, you must follow these steps:

   1. Edit the **/etc/centreon/centreon.conf.php** file,
   2. Edit the **/etc/centreon/conf.pm** file,
   3. Edit the Centreon Broker central configuration using the Centreon web interface and change the password for the **unfied-sql** output,
   4. Edit the **/etc/centreon/config.d/10-database.yaml** file.

5. If the IP address of your Centreon server has changed:
   - Edit the configuration for all the Centreon Broker modules of your Pollers and change the IP to connect to
the Centreon Central server (output IPv4). See the [Advanced
configuration](../monitoring/monitoring-servers/advanced-configuration.md#tcp-outputs)
chapter for more information.
   - The fingerprint of your platform has changed too: [contact Centreon](mailto:support@centreon.com) to obtain a new license.

6. The credentials of the newly created **centreon-gorgone** user need to be updated to match those of the **centreon-gorgone** user on the old server. Edit `etc/centreon-gorgone/config.d/31-centreon-api.yaml` and enter the credentials of the old user. Example:

   ```shell
   gorgone:
     tpapi:
       - name: centreonv2
         base_url: "http://127.0.0.1/centreon/api/latest/"
         username: "@GORGONE_USER@"
         password: "@GORGONE_PASSWORD@"
       - name: clapi
         username: "@GORGONE_USER@"
         password: "@GORGONE_PASSWORD@"
   ```

7. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) for all your monitoring servers (including the central).

8. Restart the following processes:

   ```shell
   systemctl restart cbd centengine
   systemctl restart gorgoned
   systemctl start snmptrapd centreontrapd
   systemctl start snmpd
   ```

9. If your old Centreon server was monitoring itself, and you have changed the username/password for the database during the migration, update the configuration of all related resources (host, services attached to that host).

10. Go to **Configuration > Monitoring Connector Manager**, then [update all the Monitoring Connectors](../monitoring/pluginpacks.md#updating-one-packall-packs).

### Step 6 (older versions only): Migrate to Gorgone

If you are migrating from a Centreon version 18.10, 19.04 or 19.10, [migrate from Centcore to Gorgone](../developer/developer-gorgone-migrate-from-centcore.md).

### Step 7: Upgrade the modules

To upgrade the modules, go to **Administration > Extensions > Manager** and click **Update all**.
If you have a MAP server or an MBI server, follow the corresponding migration procedures:

- Migration procedure for [MAP](../graph-views/migrate.md),
- Migration procedure for [MBI](../reporting/migrate.md).

### Step 8: Migrating your other servers (distributed architecture)

#### Migrating a remote server

To migrate a remote server:

1. Follow the same procedure as for a central server.
2. [Attach the new remote server](../monitoring/monitoring-servers/add-a-remote-server-to-configuration.md) to your central server.

#### Migrating a poller

To migrate a poller:

1. [Install a new poller](../installation/installation-of-a-poller/using-packages.md).
2. Synchronize the plugins, as described in [step 4 of the migration procedure for a central server](#step-4-synchronize-the-plugins).
3. On the central server, go to **Configuration > Pollers**. Select the poller that was migrated and update its IP address (if it has changed).
4. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md).
5. If your poller doesn't work after migrating it (e.g. you cannot deploy the configuration, or execute monitoring actions), update the poller's fingerprint, as described in this [knowledge base article](https://thewatch.centreon.com/troubleshooting-41/poller-does-not-work-after-migration-or-reinstallation-fingerprint-changed-for-target-1177).

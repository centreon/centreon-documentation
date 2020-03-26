---
id: poller-display-to-remote-server
title: Migrate a platform with Poller Display module
---

## Migrate your Centreon Central server

If the module **centreon-poller-display-central-1.6.x** is installed:

1. Go to the **Administration > Extensions > Modules** menu and uninstall the
**centreon-poller-display-central**.

2. Remove the associated package:

    ```shell
    yum remove centreon-poller-display-central
    ```

If your server uses the CentOS or Red Hat v7 operating system, refer to the
*[upgrade procedure](../upgrade/upgrade-from-3-4.html)* to upgrade your Central server.
Otherwise, refer to the *[migration procedure](../migrate/migrate-from-3-4.html)*.

> If you use the Centreon EMS modules, you must update these repositories. Be sure
> to contact Centreon support and request new licenses.

## Migrate a Poller from Poller Display module to Remote Server

1. Go to the **Administration > Extensions > Modules** menu and uninstall the
**Centreon Poller Display** module.

2. If you installed the module using an RPM package, remove it with the
following command:

    ```shell
    yum remove centreon-poller-display
    ```

3. If your server uses the CentOS or Red Hat v7 operating system, refer to the
*[upgrade procedure](../upgrade/upgrade-from-3-4.html)* to upgrade your Central server.
Otherwise, refer to the *[migration procedure](../migrate/migrate-from-3-4.html)*.

    > If you use Centreon EMS modules, you must update the repositories. Be sure to
    > contact your Centreon support and request new licenses.

4. Go to **Administration > Extensions > Modules** menu and install the
**centreon-license-manager** module.

5. Execute the following command:

    ```shell
    /usr/share/centreon/bin/centreon -u admin -p <PASSWORD> -a enableRemote -o CentreonRemoteServer -v <IP_CENTREON_CENTRAL>
    ```

    > Replace **\<IP\_CENTREON\_CENTRAL\>** by the IP of the Centreon server seen by the
    > Poller, and **\<PASSWORD\>** by the admin user password.

    This command will enable **Remote Server** mode:

    ```shell
    Starting Centreon Remote enable process:
    Limiting Menu Access...               Success
    Limiting Actions...                   Done
    Authorizing Master...                 Done
    Set 'remote' instance type...         Done
    Notifying Master...
    Trying host '10.1.2.3'... Success
    Centreon Remote enabling finished.
    ```

6. Add rights to centreon database user to use **LOAD DATA INFILE** command:

    ```shell
    $ mysql -h <IP_REMOTE> -u root -p
    MariaDB [(none)]> GRANT FILE on *.* to 'centreon'@'localhost';
    ```

7. Exchange the SSH key. If you do not have a private SSH key for the Centreon
user on the central server:

    ```shell
    su - centreon
    ssh-keygen -t rsa
    ```

    Copy this key to the new server:

    ```shell
    su - centreon
    ssh-copy-id -i .ssh/id_rsa.pub centreon@<IP_REMOTE>
    ```

8. **On the Centreon Central server**, edit all pollers and attach them to the
**Remote Server** using the selection list.

> Remember to *[generate the configuration](../monitoring/deploy.html)* for your
> **Remote Server**.

> A Centreon Remote Server is self-administered.
>
> Thus, the configuration of the
> LDAP directory, users and ACLs are specific to this server and must be
> configured through the **Administration** menu.

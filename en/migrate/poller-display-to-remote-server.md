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
[upgrade procedure](../upgrade/upgrade-from-3-4.html) to upgrade your Central server.
Otherwise, refer to the [migration procedure](../migrate/migrate-from-3-4.html).

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
[upgrade procedure](../upgrade/upgrade-from-3-4.html) to upgrade your Remote Server.
Otherwise, refer to the [migration procedure](../migrate/migrate-from-3-4.html).

    > If you use Centreon EMS modules, you must update the repositories. Be sure to
    > contact your Centreon support and request new licenses.

4. Go to **Administration > Extensions > Modules** menu and install the
**centreon-license-manager** module.

5. Enable the Remote Server option

    To transform the server into a Remote Server, connect to the server and
    execute the following command:

    ``` shell
    /usr/share/centreon/bin/centreon -u admin -p centreon -a enableRemote -o CentreonRemoteServer \
    -v '<IP_CENTREON_CENTRAL>;<not check SSL CA on Central>;<HTTP method>;<TCP port>;<not check SSL CA on Remote>;<no proxy to call Central>'
    ```

    - Replace **\<IP_CENTREON_CENTRAL\>** by the IP of the Centreon server seen by
        the poller. You can define multiple IP address using a coma as separator.

        > To use HTTPS, replace **\<IP_CENTREON_CENTRAL\>** by
        > **https://\<IP_CENTREON_CENTRAL\>**.
        >
        > To use non default port, replace **\<IP_CENTREON_CENTRAL\>** by
        > **\<IP_CENTREON_CENTRAL\>:\<PORT\>**

    - For the **\<not check SSL CA on Central\>** option you can put **1** to do not
        check the SS CA on the Centreon Central Server if HTTPS is enabled, or put
        **0**.

    - The **\<HTTP method\>** is to define how the Centreon Central server can
        contact the Remote server: HTTP or HTTPS.

    - The **\<TCP port\>** is to define on wich TCP port the entreon Central
        server can contact the Remote server.

    - For the **\<not check SSL CA on Remote\>** option you can put **1** to do not
        check the SS CA on the Remote server if HTTPS is enabled, or put **0**.

    - For the **\<no proxy to call Central\>** option you can put **1** to do not use
        HTTP(S) proxy to contact the Centreon Central server.

    This command will enable **Remote Server** mode:
    
    - by limiting menu access,
    - by limiting possible actions,
    - by allowing the Central to connect to it,
    - by pre-registering the server to the Central.

    ```text
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

    ``` SQL
    GRANT FILE on *.* to 'centreon'@'localhost';
    ```

7. **On the Centreon Central server**, edit all pollers and attach them to the
**Remote Server** using the selection list.

> Remember to [generate the configuration](../monitoring/monitoring-servers/deploying-a-configuration.html) for your
> **Remote Server**.

> A Centreon Remote Server is self-administered.
>
> Thus, the configuration of the
> LDAP directory, users and ACLs are specific to this server and must be
> configured through the **Administration** menu.

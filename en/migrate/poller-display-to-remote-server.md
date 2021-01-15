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

5. ## Register the server

To transform the server into a Remote Server and register it to the Centreon Central server, execute the following command:

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u <API_ACCOUNT> \
-t remote -h <IP_TARGET_NODE> -n <REMOTE_SERVER_NAME>
```

Example:

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin -t remote -h 192.168.0.1 -n remote-1
```

> Replace **<IP_TARGET_NODE>** by the IP of the Centreon server seen by the Remote Server.

> The **<API_ACCOUNT>** must have access to configuration API. You can use default **admin** account.

> If you need to change the HTTP method or the port, you can use the following format for the **-h** option:
> HTTPS://<IP_TARGET_NODE>:PORT

Then follow instructions by
1. Entering your password:

``` shell
192.168.0.1: please enter your password:
```

2. Select the IP adress if multiple network interfaces exist:

```shell
Which IP do you want to use as CURRENT NODE IP ?
1) 192.168.0.2
2) 192.168.0.3
1
```

3. Then validate the information:

``` shell
Summary of the informations that will be send:

Api Connection:
username: admin
password: ******
target server: 192.168.0.1

Pending Registration Server:
name: remote-1
type: remote
address: 192.168.0.2

Do you want to register this server with those informations ? (y/n)y
```

4. Add additional information to enable future communication between your Remote Server and its Central
A few more information are required to convert your platform into Remote :

```shell
<CURRENT_NODE_ADDRESS> : Please enter your username:
admin
<CURRENT_NODE_ADDRESS> : Please enter your password:

<CURRENT_NODE_ADDRESS> : Protocol [http]:
<CURRENT_NODE_ADDRESS> : Port [80]:
<CURRENT_NODE_ADDRESS> : centreon root folder [centreon]:
```
5. If you use a proxy, please define credentials:

```shell
Are you using a proxy ? (y/n)
y
enter your proxy Host:
myproxy.example.com
enter your proxy Port [3128]:

Are you using a username/password ? (y/n)
y
enter your username:
my_proxy_username
enter your password:

```

You will receive the validation of the Centreon central server:

``` shell
2020-10-16T17:19:37+02:00 [INFO]: The CURRENT NODE 'remote: 'remote-1@192.168.0.2' has been converted and registered successfully.
```

### Main errors messages

``` shell
2020-10-20T10:23:15+02:00 [ERROR]: Invalid credentials
```

> Your credentials are incorrect for the **<API_ACCOUNT>**.

``` shell
2020-10-20T10:24:59+02:00 [ERROR]: Access Denied.
```

> The **<API_ACCOUNT>** doesn't have access to configuration API.

``` shell
Failed connect to 192.169.0.1:444; Connection refused
```

> Unable to access to the API. Please check **<IP_TARGET_NODE>**, scheme and port.

``` shell
2020-10-20T10:39:30+02:00 [ERROR]: Can’t connect to the API using: https://192.169.0.1:443/centreon/api/latest/login
```

> The access url is not complete or invalide. Use the **--root** option to define the API URL Path. For example: **--root monitoring**.

``` shell
2020-10-20T10:42:23+02:00 [ERROR]: No route found for “POST /centreon/api/latest/platform/topology”
```

> Your Centreon target version is invalid. It should be greater or equal to 20.10.

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

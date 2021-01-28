---
id: upgrade
title: Upgrade the extension
---

This chapter describes how to upgrade your Centreon MAP extension. This
is done by upgrading the three main components:

- Centreon MAP server
- Centreon MAP web interface & its widget
- Desktop client (automatically updated).

Before upgrading Centreon MAP server, we highly recommend performing a
MariaDB dump (backup) of your `centreon_studio` database. This will
allow you easily to roll back to the previous state if necessary.

Be sure to read the release notes for an explanation of features, fixes
& custom procedures.

**When you're upgrading to a new major or minor version (i.e:A.B.x with
A or B that changes) you need to contact our Support service to retrieve
the new repository**

## Centreon MAP Server

> If you are still running version **4.0.X**, you **must first install
> and run the server in version 4.1.X before upgrading to the latest
> version**.

Run the following commands to upgrade your Centreon MAP server:

1. Stop and disable legacy tomcat service coming from precedent version:

    ```shell
    systemctl stop tomcat
    systemctl disable tomcat
    ```

2. Update Centreon & Centreon MAP repositories:

    <!--RHEL / CentOS / Oracle Linux 8-->

    ```shell
    dnf install http://yum.centreon.com/standard/20.10/el8/stable/noarch/RPMS/centreon-release-20.10-2.el8.noarch.rpm
    ```

    <!--CentOS 7-->

    ```shell
    yum install http://yum.centreon.com/standard/20.10/el7/stable/noarch/RPMS/centreon-release-20.10-2.el7.centos.noarch.rpm
    ```

    <!--END_DOCUSAURUS_CODE_TABS-->

    > Install Centreon MAP repository, you can find it on the
    > [support portal](https://support.centreon.com/s/repositories).

3. Update Centreon MAP server:

    ```shell
    yum update centreon-map-server
    ```

4. Enable and start `centreon-map` service:

    ```shell
    systemctl enable centreon-map
    systemctl start centreon-map
    ```

> If you want totally clean up legacy Tomcat service, you can just remove
> Tomcat and move old log file to new log folder:

```shell
yum remove tomcat
cp /var/log/centreon-studio/* /var/log/centreon-map/
rm -rf /var/log/centreon-studio
```

## Centreon MAP web interface

```shell
yum update centreon-map-web-client
```

Complete the upgrade by going to `Administration > Extensions > Manager`
(module & widget parts):

![image](../assets/graph-views/update-web-client.png)

An error message concerning the license is displayed while you don't
have a license on the Central server, don't worry Centreon Map still
works, you can ask for a new license to the support Team to remove this
error message.

![image](../assets/graph-views/license-error.png)

## Centreon MAP desktop client

If the user's computer has an online connection, the desktop client is
automatically upgraded to the latest version that corresponds to the server.

Alternatively, the client can be downloaded through the menu `Monitoring >
Map` and **Desktop client** button.

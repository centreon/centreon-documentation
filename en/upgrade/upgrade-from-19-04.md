---
id: upgrade-from-19-04
title: Upgrade from Centreon 19.04
---

This chapter describes how to upgrade your platform to version Centreon 20.04.

To upgrade your Centreon MAP server, TODO

To upgrade your Centreon MBI server, TODO

## Perform a backup

Be sure that you have fully backed up your environment for the following
servers:

- Central server
- Database server

## Upgrade the Centreon Central server

### Update the operating system

Remember to update your operating system via the command:

```shell
yum update
```

> Accept all GPG keys and consider rebooting your server if a kernel update is
> proposed.

### Update the Centreon repository

Run the following commands:

```shell
yum install -y http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
```

### Upgrade the Centreon solution

Clean yum cache:

```shell
yum clean all --enablerepo=*
```

Upgrade all the components with the following command:

```shell
yum update centreon\*
```

> Accept new GPG keys from the repositories as needed.

### Additional actions

#### Update the PHP version

Centreon 20.04 uses a new version of PHP.

The PHP timezone should be set. Run the command:

```shell
echo "date.timezone = Europe/Paris" > /etc/opt/rh/rh-php72/php.d/php-timezone.ini
```

> Change **Europe/Paris** to your timezone.

> Don't forget your php-fpm specific configuration that you may have set in the
> /etc/opt/rh/rh-php71/php.ini and/or /etc/opt/rh/rh-php71/php-fpm.d/centreon.conf

Then, run the following commands:

```shell
systemctl disable rh-php71-php-fpm
systemctl stop rh-php71-php-fpm
systemctl enable rh-php72-php-fpm
systemctl start rh-php72-php-fpm
systemctl restart httpd24-httpd
```

### Finalizing the upgrade

Log on to the Centreon web interface to continue the upgrade process:

Click on **Next**:

![image](assets/upgrade/web_update_1.png)

Click on **Next**:

![image](assets/upgrade/web_update_2.png)

The release notes describe the main changes. Click on **Next**:

![image](assets/upgrade/web_update_3.png)

This process performs the various upgrades. Click on **Next**:

![image](assets/upgrade/web_update_4.png)

Your Centreon server is now up to date. Click on **Finish** to access the login
page:

![image](assets/upgrade/web_update_5.png)

To upgrade your Centreon BAM module, TODO

### Post-upgrade actions

#### Start the tasks manager

Centreon 20.04 has changed his tasks manager from *Centcore* to *Gorgone*.

To act this change, run the following commands:

```shell
systemctl stop centcore
systemctl enable gorgoned
systemctl start gorgoned
```

> By default, the communication between Central and Pollers or Remote Servers
> will still be using SSH protocol.
>
> Go to the *TODO* procedure to change the communication protocol.

#### Restart monitoring processes

Centreon Broker component has changed his configuration file format.

It now uses JSON instead of XML.

To make sure Broker and Engine's Broker module are using new configuration files,
follow this steps:

1. Deploy Central's configuration from the Centreon web UI by following
*[this procedure](../monitoring/monitoring-servers/deploying-a-configuration.html)*,
2. Restart both Broker and Engine on the Central server by running this
command:

    ```shell
    systemctl restart cbd centengine
    ```

## Upgrade the Pollers

### Update the Centreon repository

Run the following command:

```shell
yum install -y http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
```

### Upgrade the Centreon solution

Upgrade all the components with the following command:

```shell
yum update centreon\*
```

> Accept new GPG keys from the repositories as needed.

### Post-upgrade actions

Due to new configuration file format for Engine's Broker module, the
configuration needs to be re-deployed.

Deploy Poller's configuration from the Centreon web UI by following
*[this procedure](../monitoring/monitoring-servers/deploying-a-configuration.html)*, and choose *Restart* method for Engine process.

## Upgrade the remote servers

This procedure is the same than to update a Centreon server.

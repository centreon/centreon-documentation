---
id: update-centreon-platform
title: Update a Centreon 22.04 platform
---

This chapter describes how to update your Centreon 22.04 platform (i.e. switch from version 22.04.x to version 22.04.y).

## Perform a backup

Be sure that you have fully backed up your environment for the following
servers:

- Central server
- Database server

## Update the Centreon Central server

### Update the Centreon solution

> Please, make sure all users are logged out from the Centreon web interface
> before starting the upgrade procedure.

Clean yum cache:

```shell
yum clean all --enablerepo=*
```

Then upgrade all the components with the following command:

```shell
yum update centreon\*
```

Now you need to clear the Apache cache using the following command:

```shell
sudo -u apache /usr/share/centreon/bin/console cache:clear
```

### Finalizing the update

Log on to the Centreon web interface to continue the update process:

Click on **Next**:

![image](../assets/upgrade/web_update_1.png)

Click on **Next**:

![image](../assets/upgrade/web_update_2.png)

The release notes describe the main changes. Click on **Next**:

![image](../assets/upgrade/web_update_3.png)

This process performs the various upgrades. Click on **Next**:

![image](../assets/upgrade/web_update_4.png)

Your Centreon server is now up to date. Click on **Finish** to access the login
page:

![image](../assets/upgrade/web_update_5.png)

> If the Centreon BAM module is installed, refer to the
> [update procedure](../service-mapping/update.md).

Deploy Central's configuration from the Centreon web UI by following [this
procedure](../monitoring/monitoring-servers/deploying-a-configuration.md),

Finally, restart Broker, Engine and Gorgone on the Central server by running
this command:

```shell
systemctl restart cbd centengine gorgoned
```

### Update extensions

From **Administration > Extensions > Manager**, update all extensions, starting
with the following:

- License Manager,
- Plugin Packs Manager,
- Auto Discovery.

Then you can update all other commercial extensions.

## Update the Remote Servers

This procedure is the same than to update a Centreon Central server.

> At the end of the update, configuration should be deployed from Central
> server.

## Update the Pollers

Clean yum cache:

```shell
yum clean all --enablerepo=*
```

Upgrade all the components with the following command:

```shell
yum update centreon\*
```

> Accept new GPG keys from the repositories as needed.

Deploy Poller's configuration from the Centreon web UI by following [this
procedure](../monitoring/monitoring-servers/deploying-a-configuration.md),
and choose *Restart* method for Engine process.

Finally, restart Gorgone service if it is used on the Poller:

```shell
systemctl restart centengine gorgoned
```

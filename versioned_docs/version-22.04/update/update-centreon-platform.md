---
id: update-centreon-platform
title: Update a Centreon 22.04 platform
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter describes how to update your Centreon 22.04 platform (i.e. switch from version 22.04.x to version 22.04.y).

## Perform a backup

Make sure that you have fully backed up your environment for the following
servers:

- central server,
- database server.

## Update the Centreon central server

### Prerequisites

If you have installed **debuginfo** packages (or **dbgsym** on Debian), remove them before updating your platform. You can reinstall them after the update.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf remove \
centreon-collect-debuginfo-22.04.0-13.el8.x86_64 \
centreon-clib-debuginfo-22.04.0-13.el8.x86_64 \
centreon-engine-extcommands-debuginfo-22.04.0-13.el8.x86_64 \
centreon-engine-daemon-debuginfo-22.04.0-13.el8.x86_64 \
centreon-broker-cbmod-debuginfo-22.04.0-13.el8.x86_64 \
centreon-broker-core-debuginfo-22.04.0-13.el8.x86_64 \
centreon-broker-cbd-debuginfo-22.04.0-13.el8.x86_64
```

</TabItem>
<TabItem value="Centos 7" label="Centos 7">

```shell
yum remove \
centreon-collect-debuginfo-22.04.0-13.el8.x86_64 \
centreon-clib-debuginfo-22.04.0-13.el8.x86_64 \
centreon-engine-extcommands-debuginfo-22.04.0-13.el8.x86_64 \
centreon-engine-daemon-debuginfo-22.04.0-13.el8.x86_64 \
centreon-broker-cbmod-debuginfo-22.04.0-13.el8.x86_64 \
centreon-broker-core-debuginfo-22.04.0-13.el8.x86_64 \
centreon-broker-cbd-debuginfo-22.04.0-13.el8.x86_64
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt remove 'centreon-*-dbgsym'
```

</TabItem>
</Tabs>

### Update the Centreon solution

Please make sure all users are logged out from the Centreon web interface before starting the update procedure.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

1. Clean the cache:

  ```shell
  dnf clean all --enablerepo=*
  ```

2. Then upgrade all the components with the following command:

  ```shell
 dnf update centreon\*
  ```

</TabItem>
<TabItem value="Centos 7" label="Centos 7">

1. Clean the cache:

  ```shell
  yum clean all --enablerepo=*
  ```

2. Then upgrade all the components with the following command:

  ```shell
  yum update centreon\*
  ```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

1. Clean the cache:

  ```shell
  apt clean
  apt update
  ```

2. Then upgrade all the components with the following command:

  ```shell
  apt upgrade centreon
  ```

</TabItem>
</Tabs>

3. Now you can either perform the update:
   - [Using the wizard](#finalize-the-update-using-the-wizard)
   - [Using a dedicated API endpoint](#finalize-the-update-using-the-api-endpoint)

#### Finalize the update using the wizard

1. Log on to the Centreon web interface to continue the update process. Click on **Next**:

  ![image](../assets/upgrade/web_update_1.png)

2. Click on **Next**:

  ![image](../assets/upgrade/web_update_2.png)

3. The release notes describe the main changes. Click on **Next**:

  ![image](../assets/upgrade/web_update_3.png)

4. This process performs the various upgrades. Click on **Next**:

  ![image](../assets/upgrade/web_update_4.png)

5. Your Centreon server is now up to date. Click on **Finish** to access the login
page:

  ![image](../assets/upgrade/web_update_5.png)

  > If the Centreon BAM module is installed, refer to the [update procedure](../service-mapping/update.md).

6. Deploy the central's configuration from the Centreon web UI by following [this
procedure](../monitoring/monitoring-servers/deploying-a-configuration.md).

7. Finally, restart Broker, Engine and Gorgone on the central server by running
this command:

  ```shell
  systemctl restart cbd centengine gorgoned
  ```

You can now move to the [Update extensions](#update-extensions) step.

#### Finalize the update using the API endpoint

1. Log on to the central server through your terminal to continue the update process.

  > You need an authentication token to reach the API endpoint. Perform the following procedure to get a token.

  In our case, we have the configuration described below (you need to adapt the procedure to your configuration).
   - address: 10.25.XX.XX
   -  port: 80
   -  version: 22.04
   -  login: Admin
   -  password: xxxxx

2. Enter the following request:

  ```shell
  curl --location --request POST '10.25.XX.XX:80/centreon/api/v22.04/login' \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  --data '{
    "security": {
      "credentials": {
        "login": "Admin",
        "password": "xxxxx"
      }
    }
  }'
  ```

  This is how the result should look like:

    ```shell
    {"contact":{"id":1,"name":"Admin Centreon","alias":"admin","email":"admin@localhost","is_admin":true},"security":{"token":"hwwE7w/ukiiMce2lwhNi2mcFxLNYPhB9bYSKVP3xeTRUeN8FuGQms3RhpLreDX/S"}}
    ```

3. Retrieve the token number to use it in the next request.

4. Then enter this request:

  ```shell
  curl --location --request PATCH 'http://10.25.XX.XX:80/centreon/api/latest/platform/updates' \
  --header 'X-AUTH-TOKEN: hwwE7w/ukiiMce2lwhNi2mcFxLNYPhB9bYSKVP3xeTRUeN8FuGQms3RhpLreDX/S' \
  --header 'Content-Type: application/json' \
  --data '{
      "components": [
          {
              "name": "centreon-web"
          }
      ]
  }'
  ```

5. This request does not return any result. To check if the update has been successfully applied, read the version number displayed on the Centreon web interface login page.

6. Finally, restart Broker, Engine and Gorgone on the central server by running
this command:

  ```shell
  systemctl restart cbd centengine gorgoned
  ```

### Reinstall **debuginfo** or **dbgsym** packages (optional)

If you uninstalled **debuginfo** or **dbgsym** packages before performing the update, you can reinstall them now.

### Update extensions

From **Administration > Extensions > Manager**, update all extensions, starting
with the following:

- License Manager,
- Plugin Packs Manager,
- Auto Discovery.

Then you can update all other commercial extensions.

## Update the Remote Servers

This procedure is the same as to update a Centreon central server.

> At the end of the update, the configuration should be deployed from the central
> server.

## Update the Pollers

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

1. Clean the cache:

  ```shell
  dnf clean all --enablerepo=*
  ```

2. Then upgrade all the components with the following command:

  ```shell
  dnf update centreon\*  --exclude=centreon-plugin*
  ```

</TabItem>
<TabItem value="Centos 7" label="Centos 7">

1. Clean the cache:

  ```shell
  yum clean all --enablerepo=*
  ```

2. Then upgrade all the components with the following command:

  ```shell
  yum update centreon\*  --exclude=centreon-plugin*
  ```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

1. Clean the cache:

  ```shell
  apt clean
  apt update
  ```

2. Then upgrade all the components with the following command:

  ```shell
  apt upgrade centreon\*  --exclude=centreon-plugin*
  ```

</TabItem>
</Tabs>

  > Accept the new GPG keys from the repositories as needed.

3. Deploy the Poller's configuration from the Centreon web UI by following [this
procedure](../monitoring/monitoring-servers/deploying-a-configuration.md),
and choose the **Restart** method for the Engine process.

4. Finally, restart the Gorgone service if it is used on the Poller:

  ```shell
  systemctl restart centengine gorgoned
  ```

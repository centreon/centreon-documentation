---
id: map-web-install
title: Install MAP Web
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter describes how to install Centreon MAP Web. It is not recommended to use your production environment to test MAP Web Beta. Use your preproduction platform.

## Architecture

Centreon MAP consists of three components:

- Centreon MAP Server, developed in Java, using SpringBoot, Hibernate and CXF
- Centreon MAP Web interface, developed in Javascript, based on
  [Backbone.js](http://backbonejs.org/)
- Centreon MAP Desktop Client, developed in Java, based on [Eclipse RCP
  4](https://wiki.eclipse.org/Eclipse4/RCP).

The diagram below summarizes the architecture: **To update**

![image](../assets/graph-views/map_architect.png)

## Prerequisites

## Centreon version

You must install MAP Web on a Centreon from version 21.10.

It is recommended to install MAP Web on the central server. However, if you have large volumes of data, you can install it on your legacy MAP server. The MAP Web module does not use the **centreon_studio** database.

### License

If you need an additional license for Centreon MAP Web, please contact the [MAP team](team-map@centreon.com) to get & install your license key.

## Installation

### Step 1: Install the business and beta repositories

In your terminal, log on to the central server and run the following commands:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

- For the business repository:

  ```shell
  sudo dnf install https://yum.centreon.com/centreon-business/1a97ff9985262bf3daf7a0919f9c59a6/21.10/el8/stable/noarch/RPMS/centreon-business-release-21.10-5.el8.noarch.rpm
  ```

- For the beta repository:

  ```shell
  sudo dnf install https://yum.centreon.com/centreon-beta/09a7da422206046393db5d3d18ff44922023935f507f56aa5d05e6cf2c618844/21.10/el8/stable/noarch/RPMS/centreon-beta-release-21.10-5.el8.noarch.rpm
  ```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

- For the business repository:

  ```shell
  sudo yum install https://yum.centreon.com/centreon-business/1a97ff9985262bf3daf7a0919f9c59a6/21.10/el7/stable/noarch/RPMS/centreon-business-release-21.10-5.el7.centos.noarch.rpm
  ```

- For the beta repository:

  ```shell
  sudo yum install https://yum.centreon.com/centreon-beta/09a7da422206046393db5d3d18ff44922023935f507f56aa5d05e6cf2c618844/21.10/el7/stable/noarch/RPMS/centreon-beta-release-21.10-5.el7.centos.noarch.rpm
  ```

</TabItem>
</Tabs>

### Step 2: Install the MAP Web module

1. From your terminal, run the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
sudo dnf install centreon-map-web-client --enablerepo=centreon-beta-stable
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
sudo yum install centreon-map-web-client --enablerepo=centreon-beta-stable
```

</TabItem>
</Tabs>

2. Then you need to log on to the Centreon web interface.

3. Go to **Administration > Extensions > Manager** and install the **Map Web Client** module.

4. Go back to your terminal and create a **centreon_map** user in the mysql instance hosting the **centreon** and **centreon_storage** databases.

```shell
mysql -u root -p
CREATE USER 'centreon_map'@'<IP_MAP_SERVER_NG>' IDENTIFIED BY 'centreon_map';
GRANT SELECT ON centreon_storage.* TO 'centreon_map'@'<IP_MAP_SERVER_NG>';
GRANT SELECT, INSERT ON centreon.* TO 'centreon_map'@'<IP_MAP_SERVER_NG>';
exit
```

### Step 3: Install the map-ng server

1. Install the **map-ng** server using the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
sudo dnf install centreon-map-server-ng --enablerepo=centreon-beta-stable
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
sudo yum install centreon-map-server-ng --enablerepo=centreon-beta-stable
```

</TabItem>
</Tabs>

2. Proceed to the configuration with the following command:

```shell
/etc/centreon-map/configure.sh
```

3. Make sure you replace the default values with the ones that match your environment. For instance, when prompted to provide the login and password of an account that has access to all resources and actions, replace admin/centreon by the correct credentials for your platform.

4. If you are not using the BAM (service mapping) module on your platform, go to **Configuration > Pollers > Broker configuration**, click **central-broker-master**, then click **Save**. This is a workaround for a bug that will be fixed in a next release of centreon-broker.

5. [Export the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) of the central server (using the **Reload** method).

6. Restart the cbd service:

```shell
systemctl restart cbd
```

7. Run the Centreon diagnostic tool:

```shell
cd /etc/centreon-map
./diagnostic.sh
```

> In case of any error, see the **Run our diagnostic tool** section in the [Troubleshooting MAP Web] topic.

8. Now the configuration is correct, you can start the server by running this command:

```shell
systemctl start centreon-map-ng
```

9. Then enable the service to be started automatically at server startup:

```shell
systemctl enable centreon-map-ng
```

10. Run the following command to check that the **centreon-map-ng** service is properly started:

```shell
systemctl status centreon-map-ng
● centreon-map-ng.service - Centreon Studio map server
   Loaded: loaded (/usr/lib/systemd/system/centreon-map-ng.service; enabled; vendor preset: disabled)
   Active: active (running) since Tue 2022-09-06 09:29:02 UTC; 15s ago
 Main PID: 19560 (centreon-map-ng)
    Tasks: 23 (limit: 24448)
   Memory: 314.8M
   CGroup: /system.slice/centreon-map-ng.service
           ├─19560 /bin/bash /usr/share/centreon-map-server/bin/centreon-map-ng
           └─19576 /usr/bin/java -Dsun.misc.URLClassPath.disableJarChecking=true -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/var/log/centreon-map -Dcentreon-map.signing-key=NeEmPqd1512l467yKcYkYQsU6XQ1oDZHkBglDH6nmnTWDRz5hIImTollDTZFOhtOB -Dcentreon-map.access-tok>
```

11. Once the installation is finished, you can run the following command to check for problems with the version or the repository (on both central and **map-ng** server, if the latter is installed in a different location):

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

- For the central:

```shell
yum info centreon-map-web-client
```

- For the **map-ng** server:

```shell
yum info centreon-map-server-ng
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

- For the central:

```shell
dnf info centreon-map-web-client
```

- For the **map-ng** server:

```shell
dnf info centreon-map-server-ng
```

</TabItem>
</Tabs>

The output should look like this (for EL8):

- For the central:

```shell
Last metadata expiration check: 0:01:02 ago on Tue Sep  6 15:33:16 2022.
Available Packages
Name         : centreon-map-web-client
Version      : 21.10.5
Release      : 1662465400.5bcd7cb52.el8
Architecture : noarch
Size         : 57 M
Source       : centreon-map-web-client-21.10.5-1662465400.5bcd7cb52.el8.src.rpm
Repository   : centreon-beta-stable-noarch
Summary      : Centreon Map Web Client
License      : ASL
Description  : Centreon module to display maps created with Centreon Studio in Centreon web interface
```

- For the **map-ng** server:

```shell
Last metadata expiration check: 0:09:27 ago on Tue Sep  6 15:23:27 2022.
Installed Packages
Name         : centreon-map-server-ng
Version      : 21.10.5
Release      : 1662465400.5bcd7cb52.el8
Architecture : noarch
Size         : 55 M
Source       : centreon-map-server-ng-21.10.5-1662465400.5bcd7cb52.el8.src.rpm
Repository   : centreon-beta-stable-noarch
Summary      : New generation of Centreon Map service under Spring Boot framework
URL          : www.centreon.com
License      : Proprietary
Description  : 
```

### Step 4: Activate the MAP Web module

By default, the MAP Web module is not enabled. Perform the following procedure to enable it.

1. Log on to the Centreon interface and go to **Administration > Extensions > Map > Options**.

2. In the **Connection information** section, set **Server Map NG** to **Yes**.

3. Enter the IP address of your MAP server in the **Map NG server address** field. (If you installed MAP Web on the central server, this is the IP address of the central server. Use its full IP address, not the localhost.). The default port is 8081. For instance: http://10.10.10.10:8081

4. Click the **Test connection to Map NG server** button to test the connection. This test should return the **Connection test successful** message.

5. Click **Save**.

You can now use the MAP Web module by accessing the **Monitoring > Map** page.

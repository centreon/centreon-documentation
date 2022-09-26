---
id: map-web-install
title: Installing MAP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter describes how to install Centreon MAP. It is recommended to install MAP on the central server. However, if you have large volumes of data, you can install it on your legacy MAP server. The MAP module does not use the **centreon_studio** database.

### License

If you need an additional license for Centreon MAP, please contact the support [Centreon support
team](https://centreon.force.com/) to get and install your license key.

## Architecture

The diagram below summarizes the MAP architecture:

![image](../assets/graph-views/ng/map-web-schema.png)

## Installation

### Step 1: Install the business and beta repositories

Install Centreon MAP repository, you can find it on the
[support portal](https://support.centreon.com/s/repositories).

Then execute the following commands:

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

### Step 2: Install the MAP module

1. From your terminal, run the following command: **to update**

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



### Step 4: Activate the MAP module

By default, the MAP module is not enabled. Perform the following procedure to enable it.

1. Log on to the Centreon interface and go to **Administration > Extensions > Map > Options**.

2. In the **Connection information** section, set **Server Map NG** to **Yes**.

3. Enter the IP address of your MAP server in the **Map NG server address** field. (If you installed MAP on the central server, this is the IP address of the central server. Use its full IP address, not the localhost.). The default port is 8081. For instance: http://10.10.10.10:8081

4. Click the **Test connection to Map NG server** button to test the connection. This test should return the **Connection test successful** message.

5. Click **Save**.

You can now use the MAP Web module by accessing the **Monitoring > Map** page.

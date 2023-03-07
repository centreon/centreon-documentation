---
id: map-web-install
title: Installing MAP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This topic describes how to install Centreon MAP. It is recommended to install MAP on a dedicated server. However, if you do not have large volumes of data, you can install it on the central server.

> Note to users already using the MAP (Legacy) version: the MAP module does not require the **centreon_studio** database (used for a MAP Legacy server). This database can be removed after [migrating your legacy maps to MAP](./import-into-map-web.md). Be aware that it is not possible to migrate from MAP to MAP (legacy).

## License

If you need an additional [license](../administration/licenses.md) for Centreon MAP, please contact the [Centreon support
team](https://support.centreon.com/) to get and install your license key.

## Architecture

The diagram below summarizes the MAP architecture.

- You can either install Centreon MAP on a dedicated server or on the central server.
- Centreon MAP does not require any installation on your machine: this solution is fully available in the Centreon web interface.


![image](../assets/graph-views/ng/map-web-schema.png)

**Table of network flow**

| Application    | Source     | Destination               | Port      | Protocol   | Purpose                                             |
|----------------|------------|---------------------------|-----------|------------|-----------------------------------------------------|
| Map Server     | Map server | Centreon central broker   | 5758      | TCP        | Get real-time status updates                        |
| Map Server     | Map server | Centreon MariaDB database | 3306      | TCP        | Retrieve configuration and other data from Centreon |
| Web            | Map server | Centreon central          | 80/443    | HTTP/HTTPS | Authentication & data retrieval                     |
| Web interface  | User       | Map server                | 8081/9443 | HTTP/HTTPS | Retrieve views & content                            |
| Web interface  | User       | Internet\* (Mapbox)       | 443       | HTTPS      | Retrieve Mapbox data                                |

\* *With or without a proxy*

## Prerequisites

### Centreon MAP Engine server

#### License

The server requires the license to be available and valid on Centreon's central
server. To do this, you must contact the [Centreon support
team](https://support.centreon.com/) to get and install your license key.

#### Software

See the [software requirements](../installation/prerequisites.md#software).

#### Information required during configuration

- Centreon web login with administration rights.

> Even with a correctly sized server, you should have in mind the best
> practices and recommendations when creating views so you do not face
> performance issues.

### Centreon MAP web client

#### License

The web interface requires the license to be available and valid on Centreon's
central server. To do this, you must contact the [Centreon support
team](https://support.centreon.com/) to get and install your license key.

#### Compatibility

Note that the MAP web interface has the same requirements as the Centreon web interface. See the prerequisites for the web browsers compatibility [here](../installation/prerequisites.md).

## MAP Engine server installation

### Step 1: Set authentication parameters

You must provide to Centreon MAP Engine server a dedicated user
**who has access to all resources** through the appropriate [access list groups](../administration/access-control-lists.md). 
Since the password will be stored in human-readable form in a 
configuration file, you should not use a Centreon admin user account.

- Log into Centreon and go to the **Configuration > Users > Contacts/Users** page. Then click the **Centreon Authentication** tab.
- Set the **Reach API Realtime** parameter to **Yes**.

![image](../assets/graph-views/reach-api.png)

Exclude the user from the password expiration policy on page **Administration > Authentication**: their password will never expire.

![image](../assets/graph-views/password-expiration-policy.png)

### Step 2: Create a MySQL user

From the central server terminal, create a user in the MySQL instance hosting 'centreon' and 'centreon_storage'
databases:

```sql
CREATE USER 'centreon_map'@'<IP_SERVER_MAP>' IDENTIFIED BY 'centreon_map';
GRANT SELECT ON centreon_storage.* TO 'centreon_map'@'<IP_SERVER_MAP>';
GRANT SELECT, INSERT ON centreon.* TO 'centreon_map'@'<IP_SERVER_MAP>';
```

The INSERT privilege will only be used during the installation process
in order to create new Centreon Broker output. It will be revoked later.

### Step 3: Install MAP Engine server

If you installed your Centreon MAP server from a "fresh CentOS installation"
you need to install the **centreon-release** package:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

First you need to install an EPEL repository:

```shell
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

The command should return results as follows:

```shell
Installed:
  epel-release-8-17.el8.noarch

Complete!
```

Then install the **centreon-release** package:

```shell
dnf install -y https://yum.centreon.com/standard/22.04/el8/stable/noarch/RPMS/centreon-release-22.04.el8.noarch.rpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

#### Java version requirement
  > Ensure a version of Java 17 (or 18) is installed before you start the procedure.
  
  - If you need to check the Java version, enter the following command:
  
  ```shell
  java -version
  ```
  
  - If you need to upgrade the Java installation to Java 17 (or 18), go to the [Oracle official download](https://www.oracle.com/java/technologies/downloads/#java17) page.

  - If several Java versions are installed, you need to activate the right version. Display the installed versions using the following command and select the Java 17 (or 18) version:
  ```shell
  sudo update-alternatives --config java
  ```
  
  - If you need to use your platform in HTTPS, you will have to generate a keystore file for the Java 17 (or 18) version ([see the procedure](./secure-your-map-platform.md#httpstls-configuration-with-a-recognized-key)).

Now you can install the **centreon-release** package:

```shell
yum install -y https://yum.centreon.com/standard/22.04/el7/stable/noarch/RPMS/centreon-release-22.04.el7.centos.noarch.rpm
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Install the following dependencies:

```shell
apt update && apt install lsb-release ca-certificates apt-transport-https software-properties-common wget gnupg2
```

To install the Centreon repository, execute the following command:

```shell
echo "deb https://apt.centreon.com/repository/22.04/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
```

Then import the repository key:

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
```

</TabItem>
</Tabs>

> If the URL does not work, you can manually find this package in the folder.

Install Centreon MAP repository, you can find it on the
[support portal](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories).

Then install Centreon MAP Engine server using the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-map-engine
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install centreon-map-engine
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update
apt install centreon-map-engine
```

</TabItem>
</Tabs>

When installing Centreon MAP Engine server, it will automatically install java
(OpenJDK 11) if needed.

> You need to have a MariaDB database to store your Centreon MAP data, except if it has already been created at the central level.

To install MariaDB, execute the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install mariadb-client mariadb-server
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install mariadb-client mariadb-server
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt install mariadb-client mariadb-server
```

</TabItem>
</Tabs>

### Step 4: Check the database configuration

Make sure the database that stores Centreon MAP data is optimized
(automatically added by the RPM in **/etc/my.cnf.d/map.cnf**):

```text
max_allowed_packet = 20M
innodb_log_file_size = 200M
```

Then, restart MariaDB:

```shell
systemctl restart mariadb
```

Since MariaDB 10.5, it is mandatory to secure the database's root access before installing Centreon. If you are using a local database, run the following command on the central server:

```shell
mysql_secure_installation
```

* Answer **yes** to all questions except "Disallow root login remotely?".
* It is mandatory to set a password for the **root** user of the database. You will need this password during the [web installation](../installation/web-and-post-installation.md).

> For more information, please see the [official MariaDB documentation](https://mariadb.com/kb/en/mysql_secure_installation/).

### Step 5 - Optional: If MAP Engine and MAP Legacy are installed on the same server

> If you already have MAP Legacy and are installing MAP Engine on the same server, you need to perform the following procedure. Otherwise, move to the [Execute the configure.sh script](#step-6--execute-the-configuresh-script) step.

This procedure is to ensure that the configuration file can be used for both MAP Engine and MAP Legacy.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 / CentOS 7" label="Alma / RHEL / Oracle Linux 8 / CentOS 7">

1. Make a backup of the **/etc/my.cnf.d/map.cnf** file:

  ```shell
  cp map.cnf map.cnf.bk
  ```

2. Execute the Centreon MAP Engine server configuration script.

  Two modes are available:
   - Interactive (no option/default mode): several questions will be asked to interactively fill in the installation variables.
   - Automatic (--automatic or -a): the installation will be done automatically from the values set in **/etc/centreon-map/vars.sh** file.
  
  If it is your first installation, we advise you to use the standard mode (interactive) and choose **No** when asked for advanced installation mode:
    
   ```shell
   /etc/centreon-map/configure.sh
  ```

3. Retrieve the configuration file backup:
  
  ```shell
  cp map.cnf.bk map.cnf
  ```
  
  Answer **Y** when prompted. Then restart MySQL:

  ```shell
  systemctl restart mysql
  ```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

1. Make a backup of the **/etc/mysql/my.cnf** file:

  ```shell
  cp my.cnf my.cnf.bk
  ```

2. Execute the installation script:
  
  ```shell
  apt-get -o Dpkg::Options::="--force-overwrite" install centreon-map-engine
  ```

3. Retrieve the configuration file backup:
  
  ```shell
  cp my.cnf.bk my.cnf
  ```
  
  Answer **Y** when prompted. Then restart MySQL:

  ```shell
  systemctl restart mysql
  ```

</TabItem>
</Tabs>

Then restart the **centreon-map-engine** service:

```shell
systemctl restart centreon-map-engine
```

> Now go directly to the [Restart Centreon Broker](#step-7-restart-centreon-broker) step.

### Step 6 : Execute the configure.sh script

Execute the Centreon MAP Engine server configuration script.

Two modes are available:
  - Interactive (no option/default mode): several questions will be asked to interactively fill in the installation variables.
  - Automatic (--automatic or -a): the installation will be done automatically from the values set in **/etc/centreon-map/vars.sh** file.
  
If it is your first installation, we advise you to use the standard mode (interactive) and choose **No** when asked for advanced installation mode:
   
  ```shell
  /etc/centreon-map/configure.sh
  ```

The output should look like this:

  ```shell
  Configuration completed, enjoy !
  ```

This script generates the **map-config.properties** file.

#### Custom URI 

If you have customized the URI for your Centreon platform, you need to edit the **map-config.properties** file by adding:

```shell
centreon.path=/centreon-custom
```

Replace **/centreon** with your path name:

```shell
Define base_uri "/centreon"
```

Then restart the **centreon-map-engine** service:

```shell
systemctl restart centreon-map-engine
```

### Step 7: Restart Centreon Broker

> Before restarting Broker you must export the configuration from the Centreon
> web interface.

Restart Centreon Broker on the Central server:

```shell
systemctl restart cbd
```

Remove the INSERT privilege from user **centreon_map**:

```sql
REVOKE INSERT ON centreon.* FROM 'centreon_map'@'<IP_SERVER_MAP>';
```

### Step 8: Check the configuration

Check the MAP Engine server configuration by using this command:

```shell
/etc/centreon-map/diagnostic.sh
```

> In case of any error, see the **Run our diagnostic tool** section in the [Troubleshooting MAP](map-web-troubleshooting.md#run-our-diagnostic-tool) topic.

If configuration is correct, the **centreon-map-engine** service can be
started from the Centreon MAP server:

```shell
systemctl restart centreon-map-engine
```

Enable the service to start up automatically on server boot:

```shell
systemctl enable centreon-map-engine
```

Centreon MAP Engine server is now started and enabled, let's install
the interface part of the extension.

## MAP web client installation

### Step 1: Install the business repository

Install the Centreon MAP repository, you can find it on the
[support portal](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories).

### Step 2: Install the MAP module

1. From your terminal, run the following command:

  <Tabs groupId="sync">
  <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

  ```shell
  sudo dnf install centreon-map-web-client
  ```

  </TabItem>
  <TabItem value="CentOS 7" label="CentOS 7">

  ```shell
  sudo yum install centreon-map-web-client
  ```

  </TabItem>
  <TabItem value="Debian" label="Debian">

  ```shell
  sudo apt install centreon-map-web-client
  ```

  </TabItem>
  </Tabs>

2. Then you need to log on to the Centreon web interface.

3. Go to **Administration > Extensions > Manager** and install the **Map Web Client** module.

### Step 3: Activate the MAP module

By default, the MAP module is not enabled. Perform the following procedure to enable it.

1. Log on to the Centreon interface and go to **Administration > Extensions > Map > Options**.
  ![image](../assets/graph-views/ng/switch-map-engine.png)

2. In the **Connection information** section, set **Map Engine server** to **Yes**.

3. Enter the IP address of your MAP server in the **Map Engine server address** field. If you installed MAP on the central server, this is the IP address of the central server. Use its full IP address, not the localhost. The default port is 8081 (for instance: ``http://10.25.xxx:8081``).

4. Click the **Test connection to server** button to test the connection. This test should return the **Connection test successful** message.

5. Click **Save**.

6. Go to the **Configuration > Pollers > Pollers** page. [Export the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) of the central server (using the **Reload** method).

7. From your terminal, restart the cbd service:

  ```shell
  systemctl restart cbd
  ```

8. Now the configuration is correct, you can start the server by running this command:

  ```shell
  systemctl start centreon-map-engine
  ```

9. Run the following command to check that the **centreon-map-engine** service is properly started:
  
  ```shell
  systemctl status centreon-map-engine
  ```

  This is an example of results:

  ```shell
  ● centreon-map-engine.service - Centreon Studio map server
   Loaded: loaded (/usr/lib/systemd/system/centreon-map-engine.service; disabled; vendor preset: disabled)
   Active: active (running) since Thu 2022-11-24 09:10:58 UTC; 6h ago
 Main PID: 39103 (centreon-map-en)
    Tasks: 50 (limit: 23465)
   Memory: 598.1M
   CGroup: /system.slice/centreon-map-engine.service
           ├─39103 /bin/bash /usr/share/centreon-map-engine/bin/centreon-map-engine
           └─39119 /usr/bin/java -Dsun.misc.URLClassPath.disableJarChecking=true -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/var/log/centreon-map
  ```

You can now use the MAP module by accessing the **Monitoring > Map** page.

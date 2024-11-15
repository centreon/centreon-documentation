---
id: map-web-troubleshooting
title: MAP troubleshooting
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter shows some guidelines on how to troubleshoot your MAP installation.

## "Failed to authenticate" error when connecting to the MAP homepage

#### Symptom

A "Failed to authenticate" error occurs in the MAP homepage when trying to connect to the Centreon MAP service.

#### Problem

The credentials used by the **Web interface** user (defined during the installation) to connect to the MAP module are no longer valid because they have been changed, probably due to a password expiration.

#### Solution

You can update the password by accessing this file: **/etc/centreon-map/map-config.properties**.

## MAP configuration is not working in HTTPS

#### Symptom

The MAP configuration is not working. This issue occurs when the MAP module is installed on the Centreon central server while the MAP platform is secured in HTTPS.

#### Problem

The MAP configuration is not set in TLS.

#### Solution

If you are using IPv6, you need to force the MAP server to use IPv4. 

1. Go to the **/etc/centreon-map/centreon-map.conf** file.

2. Edit the file by adding the following option:

  ```shell
  RUN_ARGS="--spring.profiles.active=prod,tls"
  JAVA_OPTS="-Djava.net.preferIPv4Stack=true -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/var/log/centreon-map -Dcentreon-map.signing-key=8uT4BM1RsXRmIPQbTEazUAhQHtyM7xZ4nlFMIUqQ7lRkbWz24yemkGs9tS4eOwDfF -Dcentreon-map.access-token-validity-seconds=15552000 -Xms512m -Xmx4G"
  ``` 

## Make sure you installed the correct RPMs

1. Run the following command:

  <Tabs groupId="sync">
  <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">
  
  ```shell
  dnf info centreon-map-web-client
  dnf info centreon-map-server-engine
  ```
  
  </TabItem>
  <TabItem value="CentOS 7" label="CentOS 7">

  ```shell
  yum info centreon-map-web-client
  yum info centreon-map-server-engine
  ``` 
  
  </TabItem>
  <TabItem value="Debian" label="Debian">

  ```shell
  apt info centreon-map-web-client
  apt info centreon-map-engine
  ``` 
  
  </TabItem>
  </Tabs>

2. In the output, **Repository** should read **centreon-stable-noarch**. If this is not the case, you do not have the correct packages installed. Do the following :

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

## Increase the logs level

1. To increase the logs level, edit the **/etc/centreon-map/map-log.xml** file by changing the following entries to INFO:

  ```shell
  <logger name="com.centreon.studio" level="INFO" />
  <logger name="org.springframework" level="INFO" />
  <logger name="org.springframework.web" level="INFO" />
  <logger name="org.apache" level="INFO" />
  ```
  
2. Restart your **centreon-map-engine** server:

  ```shell
  systemctl restart centreon-map-engine
  ```

## Run our diagnostic tool

1. Run the following script:

  ```shell
  cd /etc/centreon-map
  ./diagnostic.sh
  ```
  
  All entries should be set to **OK** or **INFO**.

2. Try to solve any errors using the guidelines below.

> If you still have an error, send us the complete output of the script (see the [Still stuck?](#still-stuck) section).
 

Here are the main errors that you can encounter:

- Database connection or authentication: if any of these are not OK, check your credentials, network, and mysql users.

  ```shell
  ########## Database connection ##########

  [ok]   Connection to centreon
  [ok]   Connection to centreon_storage
  [ok]   Connection to centreon_map
  ```

- Connection to broker output: if this is not OK, check broker output configuration, network, and TLS configuration (if used).

  ```shell
  ########## Broker connection ##########
  
  [ok]   Connection to 127.0.0.1 5758 port
   ```

- Connection or authentication from MAP NG to central server:  if this is not OK, check your credentials, network, proxies, and TLS configuration (if used).

  ```shell
  ########## Authentication ##########
  
  [ok]   Centreon Central authentication using user admin
  ``` 

## Debug problems with the web interface

1. Make sure the URL specified in **Administration > Extensions > MAP > Options** is reachable (both reachable and resolvable) from the computer accessing the web interface.

2. Check the status of MAP by opening the following URL in the browser (use the same values for **MAP_IP_ADDRESS** and **MAP_PORT** as the ones defined in **Administration > Extensions > MAP > Options**).

  ```shell
  http://[MAP_IP_ADDRESS]:[MAP_PORT]/centreon-map/api/beta/actuator/health
  ```
  
  Example:
  
  ```shell
  http://10.0.0.2:8081/centreon-map/api/beta/actuator/health
  ```
  
  The result should be as follows:
  
  ```shell
  {
    "status" : "UP"
  }
  ```
  
  > If not, send us a screenshot of the error (see the [Still stuck?](#still-stuck) section).

## Still stuck?

If you still need help, please contact the [Centreon support team](https://support.centreon.com/) with the basic information about the way Centreon MAP is installed.

Here is an example for a standard installation:

|            | Central | MAP | MAP (Legacy) |
|------------|------|--------|--------|
|Is there a direct connection between this element and the central (are they on the same network?)|n/a|Y|Y|
|Is this element installed on the same server as the central?   |n/a|Y|N|
|Is HTTPS enabled?  |Y|Y|Y|
|Is it a new installation? |N|Y|N|

### Output of diagnostic.sh

See above [Run our diagnostic tool](#run-our-diagnostic-tool) and send us the complete output of the script.

Provide the following log files (default paths):

  - Centreon MAP server:
   
   ```shell
   /var/log/centreon-map/centreon-map-engine.log
   ```

  - Centreon Central server:
   ```shell
   /var/log/php-fpm/centreon-error.log
   ```

### Screenshots from the web interface

If you encounter issues on the web interface, please provide us with screenshots of the interface with the error, with the browser Dev tool opened on the following tabs:
  
  - Network tab (F12 key), if possible filtered on failing requests.
  - Console tab (F12 key), if possible filtered on errors.

### Output of `yum list` command

Run the following commands and send us their output:

  - On the central:
  
  ```shell
  yum list centreon-map-web-client --showduplicates -q
  ```
    
  - On the server where **centreon-map-engine** is installed:
  
  ```shell
  yum list centreon-map-engine --showduplicates -q
  ```

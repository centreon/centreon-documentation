---
id: map-web-troubleshooting
title: MAP Web troubleshooting
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter shows some guidelines on how to troubleshoot your MAP Web installation.

## Make sure you installed the correct RPMs

1. Run the following command:

  <Tabs groupId="sync">
  <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">
  
  ```shell
  yum info centreon-map-web-client
  yum info centreon-map-server-ng
  ```
  
  </TabItem>
  <TabItem value="CentOS 7" label="CentOS 7">

  ```shell
  dnf info centreon-map-web-client
  dnf info centreon-map-server-ng
  ``` 
  
  </TabItem>
  </Tabs>

2. In the output, **Repository** should read **centreon-beta-stable-noarch**. If this is not the case, you do not have the correct packages installed. Do the following :

  <Tabs groupId="sync">
  <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">
  
  ```shell
  sudo dnf install centreon-map-web-client --enablerepo=centreon-beta-stable*
  ```
  
  </TabItem>
  <TabItem value="CentOS 7" label="CentOS 7">
  
  ```shell
  sudo yum install centreon-map-web-client --enablerepo=centreon-beta-stable*
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
  
2. Restart your **map-ng** server:

  ```shell
  systemctl restart centreon-map-ng
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

2. Check the status of MAP NG by opening the following URL in the browser (use the same values for **MAP_NG_IP_ADDRESS** and **MAP_NG_PORT** as the ones defined in **Administration > Extensions > MAP > Options**).

  ```shell
  http://[MAP_NG_IP_ADDRESS]:[MAP_NG_PORT]/centreon-map/api/beta/actuator/health
  ```
  
  Example:
  
  ```shell
  http://10.0.0.2:8081/centreon-map/api/beta/actuator/health
  ```
  
  The results should be as follows:
  
  ```shell
  {
    "status" : "UP"
  }
  ```
  
  > If not, send us a screenshot of the error (see the [Still stuck?](#still-stuck) section).

## Still stuck?

If you still need help, please post a message to the group, providing us with the basic information about the way Centreon MAP NG is installed.

Here is an example for a standard installation:

|            | Central | MAP ng | MAP legacy |
|------------|------|--------|--------|
|Is there a direct connection between this element and the central (are they on the same network?)|n/a|Y|Y|
|Is this element installed on the same server as the central?   |n/a|Y|N|
|Is HTTPS enabled?  |Y|Y|Y|
|Is it a new installation? |N|Y|N|

### Output of diagnostic.sh

See above [Run our diagnostic tool](#run-our-diagnostic-tool) and send us the complete output of the script.

- Log files
  Provide the following log files (these are the default paths):

  - Centreon MAP NG server:
   
   ```shell
   /var/log/centreon-map/centreon-map-ng.log
   ```

  - Centreon Central server:
   ```shell
   /var/log/php-fpm/centreon-error.log
   ```

### Screenshots from the web interface

If you encounter issues on the web interface, please provide us with screenshots of the interface with the error, with the browser Dev tool opened on the following tabs:
  
  - Network tab (F12 key), if possible filtered on failing requests.
  - Console tab (F12 key), if possible filtered on errors.

### Output of yum list command

Run the following commands and send us their output:

  - On the central:
  
  ```shell
  yum list centreon-map-web-client --showduplicates -q
  ```
    
  - On the server where **map-ng** is installed:
  
  ```shell
  yum list centreon-map-server-ng --showduplicates -q
  ```

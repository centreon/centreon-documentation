---
id: map-web-troubleshooting
title: Troubleshoot MAP Web
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter shows some guidelines on how to troubleshoot your MAP Web installation

## Make sure you installed the correct RPMs

Run the following command:

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

In the output, **Repository** should read **centreon-beta-stable-noarch**. If this is not the case, you do not have the correct packages installed. Do the following :

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

To increase the logs level:

1. Edit the **/etc/centreon-map/map-log.xml** file:

2. Change the following entries to INFO:

```shell
<logger name="com.centreon.studio" level="INFO" />
<logger name="org.springframework" level="INFO" />
<logger name="org.springframework.web" level="INFO" />
<logger name="org.apache" level="INFO" />
```

3. Restart your map-ng server:

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

3. If you still have an error, send us the complete output of the script (see below, “Still stuck?”)
 

Here are the main errors that you can encounter:

database connection or authentication: if any of these are not OK, check your credentials, network, and mysql users.
########## Database connection ##########

  [ok]   Connection to centreon
  [ok]   Connection to centreon_storage
  [ok]   Connection to centreon_map
connection to broker output: if this is not OK, check broker output configuration, network, and TLS configuration (if used).

########## Broker connection ##########

  [ok]   Connection to 127.0.0.1 5758 port
 

connection or authentication from MAP NG to central server:  if this is not OK, check your credentials, network, proxies, and TLS configuration (if used).

########## Authentication ##########

  [ok]   Centreon Central authentication using user admin
 

Debug problems with the Web UI
Make sure the URL specified in Administration > Extensions > MAP > Options is reachable (both reachable and resolvable) from the computer accessing the Web UI.
Check the status of MAP NG by opening the following URL in the browser. (Use the same values for MAP_NG_IP_ADDRESS and MAP_NG_PORT as the ones defined in Administration > Extensions > MAP > Options).
http://[MAP_NG_IP_ADDRESS]:[MAP_NG_PORT]/centreon-map/api/beta/actuator/health
Example:
http://10.0.0.2:8081/centreon-map/api/beta/actuator/health
The results should be as follows:

{
  "status" : "UP"
}
If not, send us a screenshot of the error (see below, “Still stuck?”).

 
Licenses
 

If you need an additional beta license for Centreon MAP NG, please let us know: team-map@centreon.com.

 

Still stuck?
 

If all this didn’t help, please post a message to the group, providing us with the following information.

 

Basic information about the way Centreon MAP NG is installed
Here is an example for a standard installation:

 	Central	MAP ng	MAP legacy
is there a direct connection between this element and the Central (are they on the same network?)	n/a	Y	Y
Is this element installed on the same server as the Central?	n/a	Y	N
Is HTTPS enabled    ? 	Y	Y	Y
Is it a new installation? 	N	Y	N

 

Output of diagnostic.sh
See above, “Run our diagnostic tool”. Send us the complete output of the script.

 

Log files
Provide the following log files (these are the default paths):

Centreon MAP NG server:
/var/log/centreon-map/centreon-map-ng.log
 

Centreon Central server:
/var/log/php-fpm/centreon-error.log
 

Screenshots from the Web UI
If you encounter issues on the Web UI, please provide us with screenshots of the interface with the error, with the browser Dev tool opened on the following tabs:

 * Network tab (F12 key), if possible filtered on failing requests

 * Console tab (F12 key), if possible filtered on errors.

 

Output of yum list command
Run the following commands and send us their output:

on the central:
yum list centreon-map-web-client --showduplicates -q
 

on the server where map-ng is installed:
yum list centreon-map-server-ng --showduplicates -q
 





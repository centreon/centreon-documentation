---
id: helios
title: Installing Centreon Helios
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> This documentation concerns only MSP customers.

## Overview

Centreon Helios is a light piece of software that monitors its host machine and the services that run on it.

Centreon Helios can be used to monitor servers that operate an On-Premise Centreon service (Central, Remote Server, Poller, Map, etc.).

The data is sent to the Centreon SaaS platform. No personal data is collected.

> Although the following procedure and the Helios configuration files in general allow for some customization, we strongly advise you to leave the filenames etc. as shown here.

## Requirements

- In order for the metrics to reach the Centreon SaaS platform (where the monitoring of the monitoring is done), Centreon Helios must be able to access our public endpoint at the following URL:

    ```https://api.a.prod.mycentreon.com/v1/observability``` (port 443)

    You can test whether your machine can access our endpoint using the following command:

    ```
    curl -v https://api.a.prod.mycentreon.com/v1/observability
    ```

    You can also go through a proxy using the following command:

    ```
    curl -v https://api.a.prod.mycentreon.com/v1/observability \
    --proxy [protocol://]host[:port] --proxy-insecure
    ```

    Example:

    ```
    curl -v https://api.a.prod.mycentreon.com/v1/observability \
    --proxy http://proxy.local.net:3128 --proxy-insecure
    ```

    The following message will be returned in case of success:

    ```
    "Missing Authentication Token"
    ```

    If you receive a different answer or no answer, your machine cannot reach our endpoint, probably because of your network rules (firewall, proxy, etc.).

    > If a proxy access is configured on the host machine, you need to copy the address and port of the proxy to Helios’s configuration file (see section [Network](#network)).

- If a host machine does not have direct access to the outside, two options that complement each other are provided: [proxy configuration](#proxy-configuration) and [gateway configuration](#gateway-configuration).

- The RPMs are available in the Centreon official repositories for the currently supported versions. The official Centreon repository must be installed:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/24.04/el8/centreon-24.04.repo
dnf clean all --enablerepo=*
dnf update
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/24.04/el9/centreon-24.04.repo
dnf clean all --enablerepo=*
dnf update
```

</TabItem>
</Tabs>

- You must be in possession of your unique token that allows you to send data to our platform. This token is provided to you by our Support team.

## Installing Helios

All Centreon components you wish to monitor (Central, Poller, Remote Server, Database, etc.) must each have Helios installed on their host machine.

### On a Centreon Central Server

1. Install Helios:

    ```
    dnf install centreon-agent
    ```

2. If this is the first time you are installing Helios on the server, generate the yaml configuration file with the following Shell command:

    >You need to carry out this step only if Helios has not been previously configured; otherwise you will overwrite your previous configuration.

    ```yaml
    /usr/sbin/centreon-agent config \
    --token [your-token] \
    --type central \
    --output /etc/centreon-agent/centreon-agent.yml
    ```

    Example:
    ```yaml
    /usr/sbin/centreon-agent config \
    --token aaaa-aaaa-aaaa-aaaa \
    --type central \
    --output /etc/centreon-agent/centreon-agent.yml
    ```

    Some settings have default values. Edit the file `/etc/centreon-agent/centreon-agent.yml` and check the following values:

    - centreonengine_stats_file: are the name of the file and its path correct (i.e. have you customized them on your platform)?

    - centreonbroker_stats_files: are the name of the file and its path correct (i.e. have you customized them on your platform)?

    - centreonweb: are the database settings ok? This is the correct format:

        ```yaml
        collect:
          centreonweb:
            config_dsn: [user]:[password]@tcp([dbhost])/[centreondbname]
            storage_dsn: [user]:[password]@tcp([dbhost])/[centreon_storagedbname]
        ```

        Example:
        
        ```yaml
        collect:
          centreonweb:
            config_dsn: admin:UzG2b5wcMf8EqM2b@tcp(172.28.2.60)/centreon
            storage_dsn: admin:UzG2b5wcMf8EqM2b@tcp(172.28.2.60)/centreon_storage
        ```

        This example is correct only if the database is on the same machine as the central server. If you have a remote database, see [Remote database](#remote-database).

        > The Topology function uses the `centreon-agent.yml` file to gather the information it needs: this is hard-coded. If you change the name of this YAML file, the function will fail.

3. Add an **environment** [tag](#tags):

    Open the `/etc/centreon-agent/centreon-agent.yml` file generated at installation (cf. `--output` option configured earlier) and add the following instructions under the **collect** section.

    ```yaml
    collect:
      tags:
        environment: [staging|preproduction|production|your-custom-value]
    ```

    Example:
    ```yaml
    collect:
      tags:
        environment: production
    ```

    If you have multiple environments of the same kind, you can suffix your type of environment (for instance: "production_client1").

4. Enable the **centreon-agent** service:

    ```
    systemctl enable centreon-agent.service
    ```

5. Start the **centreon-agent** service:

    ```
    systemctl start centreon-agent.service
    ```

6. Execute the following commands:

   ```shell
   mv /etc/centreon-gorgone/config.d/cron.d/43-centreon-helios.yaml.disabled /etc/centreon-gorgone/config.d/cron.d/43-centreon-helios.yaml
   systemctl restart gorgoned
   ```

7. You can now [configure Helios](#configuring-helios) (gateway, proxy etc.) and then [test](#testing-helios) your overall configuration.

### On other host machines (Remote Server, Poller, MAP, etc.)

1. Install Helios:

    ```
    dnf install centreon-agent
    ```

2. If this is the first time you are installing Helios on the machine, configure the `centreon-agent.yml` file:

    > You need to carry out this step only if Helios has not been previously configured; otherwise you will overwrite your previous configuration.

    ```yaml
    /usr/sbin/centreon-agent config \
    --token [your-token] \
    --type [system|remote|poller|map] \
    --output /etc/centreon-agent/centreon-agent.yml
    ```

    Example:
    
    ```yaml
    /usr/sbin/centreon-agent config \
    --token aaaa-aaaa-aaaa-aaaa \
    --type poller \
    --output /etc/centreon-agent/centreon-agent.yml
    ```

3. Add an **environment** [tag](#tags):

    Open the `centreon-agent.yml` file generated at installation (cf. `--output` option configured earlier) and add the following instructions under the **collect** section.

    ```yaml
    collect:
      tags:
        environment: [staging|preproduction|production|your-custom-value]
    ```

    Example:

    ```yaml
    collect:
      tags:
        environment: production
    ```

    If you have multiple environments of the same kind, you can suffix your type of environment, for instance: "production_client1".

4. Enable the **centreon-agent** service:

    ```
    systemctl enable centreon-agent.service
    ```

5. Start the **centreon-agent** service:

    ```
    systemctl start centreon-agent.service
    ```

7. You can now [configure Helios](#configuring-helios) (Gateway, proxy etc.) and then [test](#testing-helios) your overall configuration.

## Configuring Helios

### Network

If Helios does not have direct access to the outside, two options allow you to circumvent this: access through an HTTP proxy and/or access through the Gateway mode. For Gateway mode, a Helios that needs access (called “Gateway Client”) can get through another Helios instance (called “Gateway Server”) that does have access to the outside.

**Example**

Your infrastructure is protected within a closed system and you have a proxy Server to manage all outgoing traffic. The Helios installed on the machine hosting the Centreon Central Server is the only one you want to grant access to the outside. In this case, you could configure your network as such:

- Configure the proxy option on the Central Helios to grant it access to the outside

- Configure this same Helios as a Gateway Server

- Configure all other Helios instances (installed next to Pollers, Remote Servers, MAP, etc.) as Gateway Clients

#### Proxy Configuration

If you have a proxy access configured on the host machine, copy the proxy settings to the `/etc/centreon-agent/centreon-agent.yml` file under **output**:

```yaml
output:
  token: [your-token]
  proxy_url: [your-proxy-address]:[your-desired-port]
  proxy_ssl_insecure: [true|false]
```

Example:

```yaml
output:
  token: aaaa-aaaa-aaaa-aaaa
  proxy_url: http//proxy.local.net:3128
  proxy_ssl_insecure: false
```

You then need to restart Helios:

```
systemctl restart centreon-agent.service
```

#### Gateway Configuration

- Gateway Server: copy the following code to the `/etc/centreon-agent/centreon-agent.yml` file of the Helios that will act as a Gateway server. To strengthen the security of communications between the gateway client and the gateway server, you can define an authentication token (`auth-token`), i.e. the character string you want (this is not the same token as the one you used to configure the `centreon-agent.yml` file).

    ```yaml
    gateway:
      enable: true
      listen_port: [listening-port]
      auth_token: [your-gateway-token]
    ```
    
    Example:

    ```yaml
    gateway:
      enable: true
      listen_port: 54321
      auth_token: azerty1234
    ```

    You then need to restart Helios:

    ```
    systemctl restart centreon-agent.service
    ```

- Gateway Client

    In a Gateway configuration, the Gateway Client delegates the configuration of its main token to the Gateway Server (since only the latter communicates with our platform).
    As a consequence, the `token` line needs to be commented with the yaml comment operator “#”.
    If you have defined an authentication token (`auth_token`) on the gateway server, you need to add it to the configuration of the gateway client also.

    ```yaml
    output:
    #token: [your-token]
      gateway:
        url: http://[gateway-server-ip-address]:[listening-port]
        auth_token: [your-gateway-token]
    ```

    Example:

    ```yaml
    output:
    #token: aaaa-aaaa-aaaa-aaaa
      gateway:
        url: http://172.28.6.145:54321
        auth_token: azerty1234
    ```

    You then need to restart Helios:

    ```
    systemctl restart centreon-agent.service
    ```

### Enabling the Collection of Centreon Logs

Starting from version 2 and up of Helios, logs generated by the monitored Centreon component can be collected.

To define which logs should be collected, you need to create yml configuration files in the following folder: `/etc/centreon-agent/conf.d`.
To collect a specific log, the configuration file must contain the following arguments: path, type and pattern of the target log file. Example:

```
- path: /var/log/centreon-gorgone/gorgoned.log
  pattern: "%{CENTREONGORGONE}"
  type: file
```

You can have several configuration files. Each file is parsed and its target log files are added to the collection.

#### Using the Templates

To make log collection configuration easier, pre-configured templates are provided. Each template covers a specific scope depending on the target Centreon component, its version, etc.

Templates are located in the following folder:

```
/usr/share/centreon-agent/examples
```

Based on your monitored Centreon component, you can simply copy/paste the corresponding template to your `/etc/centreon-agent/conf.d` folder.

#### Finalize template configuration

> For a Centreon poller, log files are prefixed with the poller’s name, so you need to adapt the poller template:
> open the poller template and replace all `POLLERNAME` placeholders in the “path” section with the actual poller’s name.

The templates provided will work out of the box with a standard Centreon installation. In case of doubt, you can locate the actual targeted log file and compare its path to the one written in your “path” section of the template.

In case of errors, you will find detailed explanations of what happened within Helios's own logs in `/var/log/centreon-agent/centreon-agent.log`.

#### Start log collection

Once your log collection is properly configured, you need to restart Helios with the following command:

```
systemctl restart centreon-agent.service
```

### Tags

Helios can contextualize data collection with your own custom tags to define the perimeter in which it operates. This is used later on to aggregate the monitoring data around your tags and create dashboards or reports in relevant contexts.

> We strongly advise you to define the “environment” tag before any others, so that we can establish a common baseline between all users.

Tags can be configured in the YAML `/etc/centreon-agent/centreon-agent.yml` file generated at installation. Tags are case-sensitive (`production` and `Production` are seen as two different tags).

```yaml
collect:
  tags:
    environment: [staging|preproduction|production|your-custom-value]
    [tag2]: [your-custom-value2]    
    [tag3]: [your-custom-value3]
```

Example:

```yaml
collect:
  tags:
    environment: production
    City: Paris   
```

You then need to restart Helios:

```
systemctl restart centreon-agent.service
```

### Remote Database

If the Centreon component monitored by Helios is configured with a specific or remote database, you can configure Helios to access the database in the YAML `/etc/centreon-agent/centreon-agent.yml` file generated at installation.

```yaml
collect:
    centreonweb:
      config_dsn: [user]:[password]@tcp([dbhost])/[centreondbname]
      storage_dsn: [user]:[password]@tcp([dbhost])/[centreon_storagedbname]
```

Example:

```yaml
collect:
    centreonweb:
      config_dsn: admin:UzG2b5wcMf8EqM2b@tcp(172.28.2.60)/centreon
      storage_dsn: admin:UzG2b5wcMf8EqM2b@tcp(172.28.2.60)/centreon_storage

```

You then need to restart Helios:

```
systemctl restart centreon-agent.service
```

### Log rotation

Helios logs all activity (nominal as well as erroneous) in the `/var/log/centreon-agent/centreon-agent.log` file.

A default `/etc/logrotate.d/centreon-agent` file was created at installation and configured as follows:

```
/var/log/centreon-agent/centreon-agent.log {
  daily
  copytruncate
  rotate 7
  compress
}
```

You can leave it as such or further adjust the log rotation policy to best fit your needs using the parameters of [logrotate](https://linux.die.net/man/8/logrotate).

Use the following command to apply the changes immediately:

```
logrotate /etc/logrotate.d/centreon-agent
```

## Testing Helios

### Testing the centreon-agent service

At this stage, the **centreon-agent** service should be running and set to launch at system start.
The following command checks that the service has been correctly configured:

```
systemctl status centreon-agent
```

If all went well, the command will return results similar to the following example:

```
systemctl status centreon-agent
● centreon-agent.service - The Centreon Agent collect metrics and send them to Centreon SaaS Platform
   Loaded: loaded (/etc/systemd/system/centreon-agent.service; enabled; vendor preset: disabled)
   Active: active (running) since ven. 2019-11-08 14:52:26 CET; 5 days ago
 Main PID: 22331 (centreon-agent)
   CGroup: /system.slice/centreon-agent.service
           └─22331 /usr/sbin/centreon-agent run
```

### Testing data collection

Once installation and configuration are done, the following command can be used to force a collection and return a full sample of collected data:

```
centreon-agent sample
```

The output should look like this:

```
1624977737000000// centreonengine_uptime_seconds{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 693583
1624977737000000// centreonengine_command_buffers_used{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 0
1624977737000000// centreonengine_command_buffers_high{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 0
1624977737000000// centreonengine_command_buffers_total{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 4096
1624977737000000// centreonengine_external_command_1m{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 0
1624977737000000// centreonengine_general_external_command_5m{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 0
```

In case of errors while testing the collection, the logs in the `/var/log/centreon-agent/centreon-agent.log` file can give you further information for troubleshooting purposes.

### Testing that you can access the Centreon SaaS platform

Once installation and configuration are done, the following command can be used to test the connection between Helios and the Centreon SaaS platform:

```
centreon-agent ping --config [path to your centreon-agent.yml file]
```

Helios will then return one of the following:

- **Unable to reach the Centreon Cloud Platform, check your network configuration**

- **Centreon Cloud Platform reached successfully but your token is not recognized**

- **Centreon Cloud Platform reached successfully and authentication was successful**: Helios is properly connected to our platform.

### Help

If you want to know more about `usr/sbin/centreon-agent`, enter:

```
centreon-agent --help
```

## Updating Helios

To update Helios, enter:

```
dnf clean all --enablerepo=*
```

```
dnf update centreon-agent
```

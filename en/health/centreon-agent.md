---
id: centreon-agent
title: Installing the Centreon Agent
---

## Overview

The Centreon Agent is a light piece of software that monitors its host machine and the services that run on it.

The Agent is used to monitor servers that operate an On-Premise Centreon service (Central, Remote Server, Poller, Map, etc.).

The data is sent to our analysis platform. No personal data is collected.

>Although the following procedure and the Agent configuration files in general allow for some customization, we strongly advise you to leave the filenames etc. as shown here.

## Requirements

- In order for the metrics to reach our analysis platform (where the monitoring of the monitoring is done), a Centreon Agent must be able to access our public endpoint at the following URL:

    ```https://api.a.prod.mycentreon.com/v1/observability``` (port 443)

    You can test whether your machine can access our endpoint using the following command:

    ```
    curl -v https://api.a.prod.mycentreon.com/v1/observability
    ```

    You can also configure a proxy using the following command:

    ```
    curl -v https://api.a.prod.mycentreon.com/v1/observability \
    --proxy [protocol://]host[:port] --proxy-insecure
    ```

    The following message will be returned in case of success:

    ```
    "Missing Authentication Token"
    ```

    If you receive a different answer or no answer, your machine cannot reach our endpoint, likely due to your network rules (firewall, proxy, etc.).

    >If a proxy access is configured on the host machine, you need to copy the address and port of the proxy to the Agent’s configuration file (see section [Network](#network)).

- If a host machine does not have direct access to the outside, two options that complement each other are provided: [proxy configuration](#proxy-configuration) and [gateway configuration](#gateway-configuration).

- The RPMs are available in the Centreon official repositories for the currently supported versions. The official Centreon repository must be installed:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf install -y http://yum.centreon.com/standard/21.04/el8/stable/noarch/RPMS/centreon-release-21.04-4.el8.noarch.rpm
```
<!--CentOS 7-->
```shell
yum install -y http://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-4.el7.centos.noarch.rpm
```
<!--END_DOCUSAURUS_CODE_TABS-->

- You must be in possession of your unique Token that allows you send data to our platform. This token is provided to you by our Support team.

## Installing the Agent

- The **centreon-helios** RPM has to be installed on the central server only. The topology is gathered from the central server (i.e. a map of all Centreon elements and the way they communicate with each other).
- All Centreon components you wish to monitor (Central, Poller, Remote Server, etc.) must each have an Agent installed on their host machine.

### On a Centreon Central Server

1. Install **centreon-agent**:

    ```
    yum install centreon-helios
    ```

2. If this is the first time you are installing the Agent on the server, generate the yaml configuration file with the following Shell command:

    >You need to carry out this step only if the Agent has not been previously configured, otherwise you will overwrite your previous configuration.

    ```
    /usr/sbin/centreon-agent config \
    --token [your-token] \
    --type central \
    --output /etc/centreon-agent/centreon-agent.yml
    ```

    Some settings have default values. Edit the file `/etc/centreon-agent/centreon-agent.yml` and check the following values:

    - centreonengine_stats_file : are the name of the file and its path correct (i.e. have you customized them on your platform)?

    - centreonbroker_stats_files : are the name of the file and its path correct (i.e. have you customized them on your platform)?

    - centreonweb : are the database settings ok? This is the correct format:

        ```
        collect:
            centreonweb:
            config_dsn: [user]:[password]@tcp([dbhost])/[centreondbname]
            storage_dsn: [user]:[password]@tcp([dbhost])/[centreon_storagedbname]
        ```

3. Add an **environment** tag:

    Open the `/etc/centreon-agent/centreon-agent.yml` file generated at installation (cf. `--output` option configured earlier) and add the following instructions under the **collect** section.

    ```
    collect:
    tags:
        environment: [staging|preproduction|production|your-custom-value]
    ```

    If you have multiple environnements of the same kind, you can _suffix your type of environnement (for instance: "production_client1").

4. Enable the **centreon-agent** Service:

    ```
    systemctl enable centreon-agent.service
    ```

5. Start the **centreon-agent** service:

    ```
    systemctl restart centreon-agent.service
    ```

6. Enable the topology scheduling by editing the cron file `/etc/cron.d/centreon-helios` and uncommenting the following line (ie. delete the # sign):

    ```
    0 0 * * * centreon /usr/sbin/centreon-helios.phar
    ```

    >If you already have a previous version of the Agent installed, your file may contain a different line to uncomment, in which case you need to overwrite said line with the one provided above.

    >The Topology function uses the `centreon-agent.yml` file to gather the information it needs: this is hard-coded. If you change the name of this YAML file, the function will fail.

7. You can now [configure your Agent](#configuring-the-agent) (gateway, proxy etc.) and then [test](#testing-the-agent) your overall configuration.

### On other host machines (Remote Server, Poller, MAP, etc.)

1. Install the Agent:

    ```
    yum install centreon-agent
    ```

2. If this is the first time you are installing the Agent on the machine, configure the `centreon-agent.yml` file:

    >You need to carry out this step only if the Agent has not been previously configured, otherwise you will overwrite your previous configuration.

    ```yaml
    /usr/sbin/centreon-agent config \
    --token [your-token] \
    --type [system|central|remote|poller|map] \
    --output /etc/centreon-agent/centreon-agent.yml
    ```

3. Add an **environment** tag:

    Open the `centreon-agent.yml` file generated at installation (cf. `--output` option configured earlier) and add the following instructions under the **collect** section.

    ```yaml
    collect:
    tags:
        environment: [staging|preproduction|production|your-custom-value]
    ```

    If you have multiple environnements of the same kind, you can _suffix your type of environnement, for instance: "production_client1".

4. Enable the **centreon-agent** Service:

    ```
    systemctl enable centreon-agent.service
    ```

5. Start the **centreon-agent** service:

    ```
    systemctl restart centreon-agent.service
    ```

7. You can now [configure your Agent](#configuring-the-agent) (Gateway, proxy etc.) and then [test](#testing-the-agent) your overall configuration.

## Configuring the Agent

### Network

If an Agent does not have direct access to the outside, two options allow you to circumvent this: access through an HTTP proxy and/or access through the Gateway mode. In the latter, the Agent that needs access (called “Gateway Client”) can get through an other Agent (called “Gateway Server”) that does have access to the outside.

>**Classic Example**: Your infrastructure is protected within a closed system and you have a proxy Server to manage all outgoing traffic. The Agent installed on the machine hosting the Centreon Central Server is the only one you want to grant access to the outside. In this case, you could configure your network as such:
>
><ul><li>Configure the proxy option on the Central Agent to grant it access to the outside</li>
>
><li>Configure this same Agent as a Gateway Server</li>
>
><li>Configure all other Agents (installed next to Pollers, Remote Servers, MAP, etc.) as Gateway Clients</li></ul>

#### Proxy Configuration

If you have a proxy access configured on the host machine, copy the proxy settings to the `/etc/centreon-agent/centreon-agent.yml` file under **cmass**:

<pre>
cmass:
  token: <span style="color:green">[your-token]</span>
  proxy_url: <span style="color:green">[your-proxy-address]</span>:<span style="color:green">[your-desired-port]</span>
  proxy_ssl_insecure: [true|false]
</pre>

You then need to restart the Agent:

```
systemctl restart centreon-agent.service
```

#### Gateway Configuration

- Gateway Server: copy the following to the `/etc/centreon-agent/centreon-agent.yml` file of the Agent that will act as a Gateway server

    ```
    gateway:
    enable: true
    listen_port: [listening-port]
    ```

    You then need to restart the Agent

    ```
    systemctl restart centreon-agent.service
    ```

- Gateway Client

    In a Gateway configuration, the Gateway Client delegates its Token configuration to the Gateway Server (since only the latter communicates with our platform).
    As a consequence, the “token” line needs to be **commented** with the yaml comment operator “#”.

    ```
    cmass:
    #token: [your-token]
    gateway:
        url: http://[gateway-server-ip-address]:[listening-port]
    ```

    You then need to restart the Agent

    ```
    systemctl restart centreon-agent.service
    ```

### Tags

The Agent can contextualize data collection with your own custom tags to define the perimeter in which it is in action. This is used later on to aggregate the monitoring data around your tags and create dashboards or reports in relevant contexts.

>We strongly advise the first tag you define to be “environment” in order for us to be able to establish a common baseline between all users.

Tags can be configured in the YAML `/etc/centreon-agent/centreon-agent.yml` file generated at installation.

```yaml
collect:
  tags:
    environment: [staging|preproduction|production|your-custom-value]
    [tag2]: [your-custom-value2]    
    [tag3]: [your-custom-value3]
```

You then need to restart the Agent:

```
systemctl restart centreon-agent.service
```

### Remote Database
If the Centreon component monitored by the Agent is configured with a specific or remote database, you can configure the Agent to access the database in the YAML `/etc/centreon-agent/centreon-agent.yml` file generated at installation.

```
collect:
    centreonweb:
      config_dsn: [user]:[password]@tcp([dbhost])/[centreondbname]
      storage_dsn: [user]:[password]@tcp([dbhost])/[centreon_storagedbname]
```

You then need to restart the Agent

```
systemctl restart centreon-agent.service
```

### Logs Rotation
The Agent logs all activity (nominal as well as erroneous) in the `/var/log/centreon-agent/centreon-agent.log` file.

A default `/etc/logrotate.d/centreon-agent` file has been created at installation and configured as follows:

```
/var/log/centreon-agent/centreon-agent.log {
  daily
  copytruncate
  rotate 7
  compress
}
```

You can leave it as such or further adjust the log rotation policy to best fit your needs using the parameters of [logrotate](https://www.unix.com/man-page/redhat/8/LOGROTATE/).

## Testing the Agent

### Agent Service

At this stage, the **agent** Service should be running and set to launch at system start.
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

### Data Collection

Once installation and configuration are done, the following command can be used to force a collection and return a full sample of collected data:

```
centreon-agent sample
```

In case of errors while testing the collection, the logs in the `/var/log/centreon-agent/centreon-agent.log` file can give you further information for troubleshooting purposes.

### Data Sending

Once installation and configuration are done, the following command can be used to test the connection between the Agent and the Centreon Cloud Platform:

```
centreon-agent ping --config [path to your centreon-agent.yml file]
```

The Agent will then return one of the following:

- **Unable to reach the platform**: you must check your network configuration (proxy etc.)

- **Platform reached but authentication failed**: your token is not recognized

- **Platform reached and authentication successful**: the Agent is properly connected to our Platform.

### Topology

By default, the Topology is set to be collected every hour.
The following command can manually force a collection of the Topology and send it to our platform:

```
/usr/sbin/centreon-helios.phar
```
 

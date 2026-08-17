---
id: add-advanced-metrics
title: Install application agents
description: Install application agents for Apache, MySQL, Redis, and more
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Application agents allow you to collect system data from various components of your infrastructure, such as Apache, MySQL, Redis, Varnish, PostgreSQL, and more. The collected data will appear in dedicated tabs on the **System data** page.

## Prerequisites

> Before installing application agents, you must install the [system agent](./install-system-agents.md).

## Apache

1. Install the package.

   <Tabs groupId="os">
   <TabItem value="Debian" label="Debian">

    ```bash
    apt-get install quanta-agent-apache
    ```

   </TabItem>
   <TabItem value="CentOS" label="CentOS">

    ```bash
    yum install quanta-agent-apache
    ```

   </TabItem>
   </Tabs>

2. Verify that the status module (**mod_status** module of Apache) is correctly configured on your server with the following command:

    ```shell
    curl http://127.0.0.1/server-status
    ```

3. If not, you will need to [enable the **mod_status** module in Apache](https://httpd.apache.org/docs/current/en/mod/mod_status.html).
4. If you want to modify the URL used by our module, you can edit the following file:

   ```shell
   /etc/quanta/modules.d/apache.yml
   ```

5. Restart the agent:

    ```bash
    systemctl restart quanta-agent
    ```

   You should see an **Apache** tab with metrics appear in the **System data** page within a few minutes. If not, check the logs using the **journalctl** command.

## MySQL

1. Install the package:

   <Tabs groupId="os">
   <TabItem value="Debian" label="Debian">

    ```bash
    apt-get install quanta-agent-mysql
    ```

   </TabItem>
   <TabItem value="CentOS" label="CentOS">

    ```bash
    yum install quanta-agent-mysql
    ```

   </TabItem>
   </Tabs>

2. We recommend creating a dedicated MySQL user for our probe, although it is not mandatory. For example, use the command below:

    ```bash
    echo "CREATE USER quanta@localhost IDENTIFIED BY 'XXXXX'; " | mysql -u root -p
    ```

3. Enter the username and password you chose in the following file:

    ```shell
    /etc/quanta/modules.d/mysqlstat.yml
    ```

4. Restart the agent:

    ```bash
    systemctl restart quanta-agent
    ```

   You should see a **MySQL** tab with metrics appear in the **System data** page within a few minutes. If not, check the logs using the **journalctl** command.

## PostgreSQL

1. Install the package:

   <Tabs groupId="os">
   <TabItem value="Debian" label="Debian">

    ```bash
    apt-get install quanta-agent-postgresql
    ```

   </TabItem>
   <TabItem value="CentOS" label="CentOS">

    ```bash
    yum install quanta-agent-postgresql
    ```

   </TabItem>
   </Tabs>

2. We recommend creating a dedicated PostgreSQL user for our probe, although it is not mandatory. For example, use the command below:

    ```bash
    echo "CREATE ROLE quanta LOGIN password 'XXXXX';" | sudo -u postgres psql postgres
    ```

3. Enter the username and password you chose in the following file:

   ```shell
   /etc/quanta/modules.d/postgresql.yml.
   ```

4. Restart the agent:

    ```bash
    systemctl restart quanta-agent
    ```

   You should see a **PostgreSQL** tab with metrics appear in the **System data** page within a few minutes. If not, check the logs using the **journalctl** command.

## Nginx

1. Install the package:

   <Tabs groupId="os">
   <TabItem value="Debian" label="Debian">

    ```bash
    apt-get install quanta-agent-nginx
    ```

   </TabItem>
   <TabItem value="CentOS" label="CentOS">

    ```bash
    yum install quanta-agent-nginx
    ```

   </TabItem>
   </Tabs>

2. Check that the status module is correctly configured on your server with the following command:

    ```bash
    curl http://127.0.0.1/status
    ```

3. If not, you will need to set up the correct configuration as [described here](http://nginx.org/en/docs/http/ngx_http_stub_status_module.html).

4. If you want to modify the URL used by our module, you can edit the following file:

   ```shell
   /etc/quanta/modules.d/nginx.yml
   ```

5. Restart the agent:

    ```bash
    systemctl restart quanta-agent
    ```

   You should see an **Nginx** tab with metrics appear in the **System data** page within a few minutes. If not, check the logs using the **journalctl** command.

## Varnish

1. Install the package:

   <Tabs groupId="os">
   <TabItem value="Debian" label="Debian">

    ```bash
    apt-get install quanta-agent-varnish
    ```

   </TabItem>
   <TabItem value="CentOS" label="CentOS">

    ```bash
    yum install quanta-agent-varnish
    ```

   </TabItem>
   </Tabs>

2. If you are using multiple Varnish instances, specify which instance you want to send data to Centreon Experience Monitoring by adding the following lines at the end of the following file: **/etc/quanta/modules.d/varnish.yml**:

    ```bash
    varnish:
        instance: your_instance_name
    ```

3. Restart the agent:

    ```bash
    systemctl restart quanta-agent
    ```

   You should see a **Varnish** tab with metrics appear in the **System data** page within a few minutes. If not, check the logs using the **journalctl** command, and see the troubleshooting information below.

### Troubleshooting Varnish

**I have Varnish on my server and installed the Varnish module but see no data, how can I fix this?**

It's likely that your Varnish instance is not the default one, meaning you use the -n `name` flag to start Varnish and for admin commands.
If so, just add the following configuration in **/etc/quanta/modules.d/varnish.yml**:

```shell
varnish:
instance: your_instance_name
```

## Redis

1. Install the package:

   <Tabs groupId="os">
   <TabItem value="Debian" label="Debian">

    ```bash
    apt-get install quanta-agent-redis
    ```

   </TabItem>
   <TabItem value="CentOS" label="CentOS">

    ```bash
    yum install quanta-agent-redis
    ```

   </TabItem>
   </Tabs>

2. If you are not using the default port (6379), edit the following file:

   ```shell
   /etc/quanta/modules.d/redis.yml
   ```

3. If you are using Redis authentication, uncomment the line and enter the password in the **/etc/quanta/modules.d/redis.yml** file:

    ```bash
    auth: password
    ```

4. If you are using multiple Redis instances, specify which instance you want to send data to Experience Monitoring by adding the following lines at the end of the **/etc/quanta/modules.d/redis.yml** file:

    ```bash
    instance: your_instance_name
    ```

5. Restart the agent:

    ```bash
    systemctl restart quanta-agent
    ```

   You should see a **Redis** tab with metrics appear in the **System data** page within a few minutes. If not, check the logs using the **journalctl** command.

## Memcached

1. Install the package:

   <Tabs groupId="os">
   <TabItem value="Debian" label="Debian">

    ```bash
    apt-get install quanta-agent-memcached
    ```

   </TabItem>
   <TabItem value="CentOS" label="CentOS">

    ```bash
    yum install quanta-agent-memcached
    ```

   </TabItem>
   </Tabs>

2. If you are not using the default port (11211), edit the following file:

   ```shell
   /etc/quanta/modules.d/memcached.yml
   ```

3. Restart the agent:

    ```bash
    systemctl restart quanta-agent
    ```

   You should see a **Memcached** tab with metrics appear in the **System data** page within a few minutes. If not, check the logs using the **journalctl** command.

## Adaptation for managed/cloud services

Some cloud providers offer managed services - for example AWS provides RDS and ElastiCache for managed databases and caching. These managed services are typically provided as a black box and do not allow you to install packages on their instances.

To work around this, install an agent on another instance you control (for example a front) and have it monitor the remote managed service by pointing it at the service's IP and port.

For example, for RDS you can deploy the `quanta-agent-mysql` agent (see the [standard guide](install-system-agents.md)) and edit the `/etc/quanta/modules.d/mysqlstat.yml` agent configuration file to specify the host and port of the managed service (IP and port).

If you use multiple ElastiCache instances or equivalents (multiple cache types and session stores), you can configure the Redis (or Memcached) agent to target the different backends.

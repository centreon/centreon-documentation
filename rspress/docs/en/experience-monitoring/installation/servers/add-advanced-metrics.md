---
id: add-advanced-metrics
title: Add Advanced Metrics
---

The Experience Monitoring agent includes modules (or application agents) that allow you to collect system data from various components of your infrastructure, such as Apache, MySQL, Redis, Varnish, PostgreSQL, and more.

> These application agents must be installed **after** installing the system agent. [Refer to the dedicated page to install the agent](./install-system-agents.md)

## Apache

1. Install the package.

*On Debian*

    ```bash
    apt-get install quanta-agent-apache
    ```

    *On CentOS*

    ```bash
    yum install quanta-agent-apache
    ```

2. Verify that the status module (*mod_status* of Apache) is correctly configured on your server with the following command:

    ```
    curl http://127.0.0.1/server-status
    ```

3. If not, you will need to [enable the **mod_status** module in Apache](https://httpd.apache.org/docs/current/en/mod/mod_status.htmll)
4. If you want to modify the URL used by our module, you can edit the following file: **/etc/quanta/modules.d/apache.yml**.
5. Restart the agent:

    ```bash
    systemctl restart quanta-agent
    ```

You should see metrics appear in Experience Monitoring within a few minutes.

## MySQL

1. Install the package:

*On Debian*

    ```bash
    apt-get install quanta-agent-mysql
    ```

    *On CentOS*

    ```bash
    yum install quanta-agent-mysql
    ```

2. We recommend creating a dedicated MySQL user for our probe, although it is not mandatory. For example, use the command below:

    ```bash
    echo "CREATE USER quanta@localhost IDENTIFIED BY 'supersecret'; " | mysql -u root -p
    ```

3. Enter the username and password you chose in the following file: **/etc/quanta/modules.d/mysqlstat.yml**.
4. Restart the agent:

    ```bash
    systemctl restart quanta-agent
    ```

You should see metrics appear in Experience Monitoring within a few minutes.

## PostgreSQL

1. Install the package:

*On Debian*

    ```bash
    apt-get install quanta-agent-postgresql
    ```

    *On CentOS*

    ```bash
    yum install quanta-agent-postgresql
    ```

2. We recommend creating a dedicated PostgreSQL user for our probe, although it is not mandatory. For example, use the command below:

    ```bash
    echo "CREATE ROLE quanta LOGIN password 'supersecret';" | sudo -u postgres psql postgres
    ```

3. Enter the username and password you chose in the following file: **/etc/quanta/modules.d/postgresql.yml**.
4. Restart the agent:

    ```bash
    systemctl restart quanta-agent
    ```

You should see metrics appear in Experience Monitoring within a few minutes.

## Nginx

1. Install the package:

*On Debian*

    ```bash
    apt-get install quanta-agent-nginx
    ```

    *On CentOS*

    ```bash
    yum install quanta-agent-nginx
    ```

2. Check that the status module is correctly configured on your server with the following command:

    ```bash
    curl http://127.0.0.1/status
    ```

3. If not, you will need to set up the correct configuration as [described here](http://nginx.org/en/docs/http/ngx_http_stub_status_module.html).
4. If you want to modify the URL used by our module, you can edit the following file: **/etc/quanta/modules.d/nginx.yml**.
5. Restart the agent:

    ```bash
    systemctl restart quanta-agent
    ```

You should see metrics appear in Experience Monitoring within a few minutes.

## Varnish

1. Install the package:

*On Debian*

    ```bash
    apt-get install quanta-agent-varnish
    ```

    *On CentOS*

    ```bash
    yum install quanta-agent-varnish
    ```

2. If you are using multiple Varnish instances, specify which instance you want to send data to Quanta by adding the following lines at the end of the following file **/etc/quanta/modules.d/varnish.yml**:

    ```bash
    varnish:
        instance: your_instance_name
    ```

3. Restart the agent:

    ```bash
    systemctl restart quanta-agent
    ```

You should see metrics appear in Experience Monitoring within a few minutes.

## Redis

1. Install the package:

*On Debian*

    ```bash
    apt-get install quanta-agent-redis
    ```

    *On CentOS*

    ```bash
    yum install quanta-agent-redis
    ```

2. If you are not using the default port (6379), edit the following file: **/etc/quanta/modules.d/redis.yml**.
3. If you are using Redis authentication, uncomment the line and enter the password in the **/etc/quanta/modules.d/redis.yml** file:

    ```bash
    auth: password
    ```

4. If you are using multiple Redis instances, specify which instance you want to send data to Quanta by adding the following lines at the end of the **/etc/quanta/modules.d/redis.yml** file:

    ```bash
    instance: your_instance_name
    ```

5. Restart the agent:

    ```bash
    systemctl restart quanta-agent
    ```

You should see metrics appear in Experience Monitoring within a few minutes.

## Memcached

1. Install the package:

*On Debian*

    ```bash
    apt-get install quanta-agent-memcached
    ```

    *On CentOS*

    ```bash
    yum install quanta-agent-memcached
    ```

2. If you are not using the default port (11211), edit the following file: **/etc/quanta/modules.d/memcached.yml**.
3. Restart the agent:

    ```bash
    systemctl restart quanta-agent
    ```

You should see metrics appear in Experience Monitoring within a few minutes.

> The PHP profiler must be installed separately. Refer to the dedicated page, [**Install the PHP / Magento / OroCommerce Profiler**](./install-php-magento-orocommerce-profiler.md)

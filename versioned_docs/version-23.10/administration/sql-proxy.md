---
id: sql-proxy
title: Optimizing database traffic
---

> This procedure concerns very large production environments with numerous users that face interface response time issues.

When the Centreon platform monitors numerous services and the web application places heavy demands on the real-time database, Broker may have difficulty recording all the metrics. This will create retention files, resulting in a delay between the receipt of new statuses and their availability in the web interface.

The aim of this procedure is to reduce the database load by redirecting part of the requests to a second database server.

The aim is to relieve the real-time database (**centreon_storage**) and avoid Broker retention. All read queries (SELECT) to the real-time database will be redirected to the replicated database.

The minimal use case consists in setting up database replication. To ensure proper routing, we will install an SQLproxy server between the Centreon platform and the databases.

![image](../assets/administration/sql-proxy.png)

> When using a database cluster, you must ensure that the ProxySQL server is reconfigured whenever the Master and/or Slave SQL server changes IP address, or in the event of failure of one of the SQL servers.
> In the event of failure, ProxySQL will not be able to handle database failover automatically, and your site will no longer be functional, so it is up to you to set up a fault-tolerance strategy.

We strongly recommend using FQDNs rather than fixed IP addresses.

## Installation

To enable queries to be distributed, we'll be using [ProxySQL](https://proxysql.com/). The following installation assumes that the proxy is installed on the Centreon server.

1. [Download and install](https://proxysql.com/documentation/installing-proxysql/) the correct version for your environment.

2. Start the service :

   ```shell
   service proxysql start
   ```

## Configuration

### Proxy SQL

Configuration is carried out via the proxy administration interface. To do this, log in with a MySQL client (default password is **admin**).

If you have installed ProxySQL on a server other than Centreon, change its IP address.

```shell
mysql -h127.0.0.1 -uadmin -P6032 -p
```

To begin with, define the two SQL servers (Master & Slave). As a reminder, the Slave SQL server will receive all read queries (SELECT) related to real-time data.

```shell
INSERT INTO mysql_servers (hostgroup_id, hostname) VALUES (0, ip_SQL_server_master)
INSERT INTO mysql_servers (hostgroup_id, hostname) VALUES (1, ip_SQL_server_slave)
```

Next, configure the user who will connect to both servers.

The value **0** assigned to the **default_hostgroup** property corresponds to the index of the previously defined server (SQL Master server). This indicates the default destination server for all SQL queries.

```shell
INSERT INTO mysql_users (default_hostgroup, username, password) VALUES (0, SQL_user_login, SQL_user_password)
```

Then specify which SQL queries should be redirected to the SQL Slave server. All real-time queries that can be routed by the proxy server have been modified to contain the **REALTIME** keyword. You can use two regex to identify them.

The value **1** assigned to the **destination_hostgroup** property corresponds to the index of the previously defined server (SQL Slave server). This indicates the destination server for all real-time SQL queries.

```shell
INSERT INTO mysql_query_rules (rule_id, active, match_digest, destination_hostgroup, apply) VALUES (1, 1, '.*? AS REALTIME.*', 1,1)
INSERT INTO mysql_query_rules (rule_id, active, match_digest, destination_hostgroup, apply) VALUES (2, 1, '^SELECT.*FOUND_ROWS\(\).*AS.*REALTIME$', 1,1)
```

Once you've completed this step, run the following commands so that ProxySQL takes the new configuration into account.

```shell
LOAD MYSQL SERVERS TO RUNTIME;
LOAD MYSQL USERS TO RUNTIME;
LOAD MYSQL QUERY RULES TO RUNTIME;
```

Save the configuration so that it will be taken into account if the ProxySQL server is restarted.

```shell
SAVE MYSQL SERVERS TO DISK;
SAVE MYSQL USERS TO DISK;
SAVE MYSQL QUERY RULES TO DISK;
```

### Centreon

Once the ProxySQL server has been correctly configured, you need to modify the Centreon configuration to change the connection parameters to the database server.

1. Make a backup of the **/etc/centreon/centreon.conf.php** file.

2. Open **/etc/centreon/centreon.conf.php**, then modify the SQL server address and connection port.

   ```shell
   $conf_centreon['hostCentreon'] = ip_serveur_proxy;
   $conf_centreon['hostCentstorage'] = ip_serveur_proxy;
   $conf_centreon['port'] = "6033";
   ```

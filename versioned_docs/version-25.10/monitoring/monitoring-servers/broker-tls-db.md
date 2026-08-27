---
id: broker-tls-db
title: Securing Broker database connections with TLS
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Centreon Broker supports secured TLS 1.2/1.3 connections to MySQL/MariaDB databases, allowing you to encrypt communications between Centreon Broker and the database servers.

## Configuration parameters

The following parameters can be added to any database output configuration (`unified_sql`, `sql`, `storage`) in your Centreon Broker configuration file:

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `db_ssl_enabled` | boolean | No | `false` | Enable SSL/TLS for the database connection |
| `db_ssl_ca` | string | No | - | Path to the Certificate Authority (CA) certificate file in PEM format |
| `db_ssl_cert` | string | No | - | Path to the client certificate file in PEM format |
| `db_ssl_key` | string | No | - | Path to the client private key file in PEM format |
| `db_tls_version` | string | No | `TLSv1.3` | TLS protocol version(s) to use (e.g., `TLSv1.2`, `TLSv1.3`, `TLSv1.2,TLSv1.3`) |
| `db_ssl_verify_cert` | boolean | No | `true` | Enable certificate verification (identity check) |

## Configuration examples

### Minimal TLS configuration (server authentication only)

To verify only the server's identity without client certificate authentication:

```json
{
  "centreon-broker-unified-sql": {
    "type": "unified_sql",
    "db_type": "mysql",
    "db_host": "database.example.com",
    "db_port": "3306",
    "db_user": "centreon",
    "db_password": "password",
    "db_name": "centreon_storage",
    "db_ssl_enabled": "true",
    "db_ssl_ca": "/etc/centreon-broker/ssl/ca-cert.pem",
    "db_ssl_verify_cert": "true"
  }
}
```

### TLS without certificate verification

```json
{
  "centreon-broker-unified-sql": {
    "type": "unified_sql",
    "db_type": "mysql",
    "db_host": "database.example.com",
    "db_port": "3306",
    "db_user": "centreon",
    "db_password": "password",
    "db_name": "centreon_storage",
    "db_ssl_enabled": "true",
    "db_ssl_verify_cert": "false"
  }
}
```

## MariaDB/MySQL server configuration

Configure your database server to support SSL connections.

<Tabs groupId="sync">
<TabItem value="MariaDB" label="MariaDB">

Edit `/etc/mysql/mariadb.conf.d/99-tls.cnf`:

```ini
[mysqld]
ssl_ca=/path/to/ca-cert.pem
ssl_cert=/path/to/server-cert.pem
ssl_key=/path/to/server-key.pem
```

</TabItem>
<TabItem value="MySQL" label="MySQL">

Edit `/etc/my.cnf.d/99-tls.cnf`:

```ini
[mysqld]
ssl_ca=/path/to/ca-cert.pem
ssl_cert=/path/to/server-cert.pem
ssl_key=/path/to/server-key.pem
```

</TabItem>
</Tabs>

> To require SSL for specific users, run the following command in the MySQL/MariaDB console:
> - Server authentication only: `ALTER USER 'centreon'@'%' REQUIRE SSL;`
> - Mutual TLS (client certificate required): `ALTER USER 'centreon'@'%' REQUIRE X509;`

Restart the database service after any configuration change:

```bash
systemctl restart mariadb
```

### Verify server SSL configuration

```bash
mysql -u root -p -e "SHOW VARIABLES LIKE '%ssl%';"
```

The `have_ssl` variable should be set to `YES`.

## Verification

### Check Broker logs

After enabling SSL, check the Centreon Broker logs for SSL-related messages:

```bash
grep -i ssl /var/log/centreon-broker/central-broker-master.log
```

Expected log entry:

```
[2026-02-17 10:00:00] [info] SSL/TLS enabled for database connection
```

### Test the connection manually

```bash
mysql --ssl-ca=/path/to/ca-cert.pem \
      --ssl-cert=/path/to/client-cert.pem \
      --ssl-key=/path/to/client-key.pem \
      -h <host> -u <user> -p
```

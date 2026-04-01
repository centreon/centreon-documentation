---
id: secure-your-mbi-platform
title: Secure your MBI platform
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter describes advanced procedures to secure your Centreon MBI platform.

> If you want to use MBI with a secured database connection, we recommend that you also secure your Centreon platform. Follow this [procedure](https://docs.centreon.com/docs/administration/secure-platform/#secure-the-web-server-with-https) if needed.

## Configure TLS on a MySQL or MariaDB database

This section describes how to enable SSL between Centreon MBI and a MySQL or MariaDB server using certificate authority verification (VERIFY\_CA / verify-ca mode).

> **Note:** This procedure covers the VERIFY\_CA mode only. In this mode, the server certificate is validated against a trusted Certificate Authority, but the hostname/IP address is not verified. For other SSL verification modes, see the [SSL Mode reference](#ssl-mode-reference) section.

- Select the tab corresponding to the database you want to use.

### Step 1 - Generate keys and certificates

> If you have already generated certificates (e.g., when configuring Centreon MAP), you can skip this section and reuse the existing CA certificate.

<Tabs groupId="db" queryString>
<TabItem value="MySQL" label="MySQL">

**1. Create a directory** (`/etc/mysql/newcerts` in this example) to store your certificate files:

    ```shell
    mkdir -p /etc/mysql/newcerts
    cd /etc/mysql/newcerts
    ```

**2. Generate the Certificate Authority (CA).** The CA is used to sign both the server and client certificates, establishing a chain of trust.

    ```shell
    # Generate the CA private key
    openssl genrsa 2048 > ca-key.pem
    # Generate the CA self-signed certificate
    openssl req -new -x509 -nodes -days 365000 -key ca-key.pem -out ca-cert.pem
    ```

**3. Generate the server certificate.** The server certificate is presented by MySQL to clients during the SSL handshake.

    ```shell
    # Generate the server private key and CSR (Certificate Signing Request)
    openssl req -newkey rsa:2048 -days 365000 -nodes -keyout server-key.pem -out server-req.pem

    # Convert the server key to RSA format (required by MariaDB)
    openssl rsa -in server-key.pem -out server-key.pem

    # Sign the server certificate with the CA
    openssl x509 -req -in server-req.pem -days 365000 \
      -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 \
      -out server-cert.pem
    ```

**4. Generate the client certificate (optional — mTLS only).** The client certificate is used by the application to authenticate itself to MySQL. Skip this section if you only need `REQUIRE SSL`.

    ```shell
    # Generate the client private key and CSR
    openssl req -newkey rsa:2048 -days 365000 -nodes -keyout client-key.pem -out client-req.pem

    # Convert the client key to RSA format
    openssl rsa -in client-key.pem -out client-key.pem

    # Sign the client certificate with the CA
    openssl x509 -req -in client-req.pem -days 365000 \
      -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 \
      -out client-cert.pem
    ```

**5. Verify the certificates.** Ensure both certificates are correctly signed by the CA before proceeding.

    ```shell
    openssl verify -CAfile ca-cert.pem server-cert.pem client-cert.pem
    # Expected output:
    # server-cert.pem: OK
    # client-cert.pem: OK
    ```

**6. Set the file ownership.**

    ```shell
    chown -Rv mysql:mysql /etc/mysql/newcerts/*.pem
    chmod 600 /etc/mysql/newcerts/server-key.pem /etc/mysql/newcerts/client-key.pem
    chmod 644 /etc/mysql/newcerts/ca-cert.pem /etc/mysql/newcerts/server-cert.pem /etc/mysql/newcerts/client-cert.pem
    ```

</TabItem>
<TabItem value="MariaDB" label="MariaDB">

**1. Create a directory** (`/etc/mariadb/newcerts` in this example) to store your certificate files:

  ```shell
  mkdir -p /etc/mariadb/newcerts
  cd /etc/mariadb/newcerts
  ```

**2. Generate the Certificate Authority (CA).** The CA is used to sign both the server and client certificates, establishing a chain of trust.

```shell
# Generate the CA private key
openssl genrsa 2048 > ca-key.pem
# Generate the CA self-signed certificate
openssl req -new -x509 -nodes -days 365000 -key ca-key.pem -out ca-cert.pem
```

**3. Generate the server certificate.** The server certificate is presented by MariaDB to clients during the SSL handshake.

```shell
# Generate the server private key and CSR (Certificate Signing Request)
openssl req -newkey rsa:2048 -days 365000 -nodes -keyout server-key.pem -out server-req.pem

# Convert the server key to RSA format (required by MySQL)
openssl rsa -in server-key.pem -out server-key.pem

# Sign the server certificate with the CA
openssl x509 -req -in server-req.pem -days 365000 \
  -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 \
  -out server-cert.pem
```

**4. Generate the client certificate (optional — mTLS only).** Skip this section if you only need `REQUIRE SSL`.

```shell
# Generate the client private key and CSR
openssl req -newkey rsa:2048 -days 365000 -nodes -keyout client-key.pem -out client-req.pem

# Convert the client key to RSA format
openssl rsa -in client-key.pem -out client-key.pem

# Sign the client certificate with the CA
openssl x509 -req -in client-req.pem -days 365000 \
  -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 \
  -out client-cert.pem
```

**5. Verify the certificates.**

```shell
openssl verify -CAfile ca-cert.pem server-cert.pem client-cert.pem
# Expected output:
# server-cert.pem: OK
# client-cert.pem: OK
```

**6. Set the file ownership.**

```shell
chown -Rv mariadb:mariadb /etc/mariadb/newcerts/*.pem
chmod 600 /etc/mariadb/newcerts/server-key.pem /etc/mariadb/newcerts/client-key.pem
chmod 644 /etc/mariadb/newcerts/ca-cert.pem /etc/mariadb/newcerts/server-cert.pem /etc/mariadb/newcerts/client-cert.pem
```

</TabItem>
</Tabs>

### Step 2 - Configure the MySQL/MariaDB server

<Tabs groupId="db" queryString>
<TabItem value="MySQL" label="MySQL">

> If the server is already configured for SSL (e.g., for Centreon MAP), skip this section.

> Ensure you are using the directory you previously created (`/etc/mysql/newcerts` in this example).

**1. Edit the MySQL server configuration.** Add the following block to your MySQL server configuration file (typically `/etc/mysql/mysql.conf.d/mysqld.cnf`):

    ```shell
    [mysqld]
    ssl-ca=/etc/mysql/newcerts/ca-cert.pem
    ssl-cert=/etc/mysql/newcerts/server-cert.pem
    ssl-key=/etc/mysql/newcerts/server-key.pem
    # Restrict to secure TLS versions only
    tls_version=TLSv1.2,TLSv1.3
    ```

**3. Verify SSL is active.**

    ```sql
    SHOW VARIABLES LIKE '%ssl%';
    -- have_ssl should be YES
    -- ssl_ca, ssl_cert, ssl_key should point to your certificate files
    ```

</TabItem>
<TabItem value="MariaDB" label="MariaDB">

> If the server is already configured for SSL (e.g., for Centreon MAP), skip this section.

> Ensure you are using the directory you previously created (`/etc/mariadb/newcerts` in this example).

**1. Edit the MariaDB server configuration.** Add the following block to your MariaDB server configuration file (typically `etc/mariadb/mariadb.conf.d/50-server.cnf`):

    ```shell
    [mariadb]
    ssl-ca   = /etc/mariadb/newcerts/ca-cert.pem
    ssl-cert = /etc/mariadb/newcerts/server-cert.pem
    ssl-key  = /etc/mariadb/newcerts/server-key.pem
    
    # Restrict to secure TLS versions only
    tls_version = TLSv1.2,TLSv1.3

    # Restart MariaDB
    systemctl restart mariadb
    ```

**3. Verify SSL is active.**

```shell
SHOW VARIABLES LIKE '%ssl%';
-- have_ssl should be YES
-- ssl_ca, ssl_cert, ssl_key should point to your certificate files
```

</TabItem>
</Tabs>

### Step 3 - Configure the MySQL/MariaDB user

<Tabs groupId="db" queryString>
<TabItem value="MySQL" label="MySQL">

Centreon MBI uses the `centreonbi` user. Apply SSL requirements to this user for each relevant host.

**1. Require SSL for the user.**

    ```sql
    -- SSL only (no client certificate required)
    ALTER USER 'centreonbi'@'<ip_or_hostname>' REQUIRE SSL;

    -- Or mutual TLS (client certificate required)
    -- ALTER USER 'centreonbi'@'<ip_or_hostname>' REQUIRE X509;

    -- Verify: ssl_type should now show ANY (for SSL) or X509 (for mTLS)
    SELECT user, host, ssl_type FROM mysql.user WHERE user='centreonbi';
    ```

**2. Grant privileges.**

    ```sql
    GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
          CREATE TEMPORARY TABLES, LOCK TABLES
      ON `centreon`.*
      TO `centreonbi`@`<ip_or_hostname>`;

    GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
          CREATE TEMPORARY TABLES, LOCK TABLES
      ON `centreon_storage`.*
      TO `centreonbi`@`<ip_or_hostname>`;

    GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
          CREATE TEMPORARY TABLES, LOCK TABLES
      ON `centreon_mbi`.*
      TO `centreonbi`@`<ip_or_hostname>`;

    GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
          CREATE TEMPORARY TABLES, LOCK TABLES
      ON `centreon_storage_mbi`.*
      TO `centreonbi`@`<ip_or_hostname>`;
    ```

</TabItem>
<TabItem value="MariaDB" label="MariaDB">

Centreon MBI uses the `centreonbi` user. Apply SSL requirements to this user for each relevant host.

**1. Require SSL for the user.**

  ```shell
  -- SSL only (no client certificate required)
  ALTER USER 'centreonbi'@'<ip_or_hostname>' REQUIRE SSL;
  -- Or mutual TLS (client certificate required)
  -- ALTER USER 'centreonbi'@'<ip_or_hostname>' REQUIRE X509;
  -- Verify: ssl_type should show ANY (for SSL) or X509 (for mTLS)
  SELECT user, host, ssl_type FROM mysql.user WHERE user='centreonbi';
  ```

**2. Grant privileges.**

  ```shell
  GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
        CREATE TEMPORARY TABLES, LOCK TABLES
    ON `centreon`.*
    TO `centreonbi`@`<ip_or_hostname>`;
  GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
        CREATE TEMPORARY TABLES, LOCK TABLES
    ON `centreon_storage`.*
    TO `centreonbi`@`<ip_or_hostname>`;
  GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
        CREATE TEMPORARY TABLES, LOCK TABLES
    ON `centreon_mbi`.*
    TO `centreonbi`@`<ip_or_hostname>`;
  GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
        CREATE TEMPORARY TABLES, LOCK TABLES
    ON `centreon_storage_mbi`.*
    TO `centreonbi`@`<ip_or_hostname>`;
  ```

</TabItem>
</Tabs>  

### Step 4 - Configure JDBC (Centreon MBI / BIRT)

<Tabs groupId="db" queryString>
<TabItem value="MySQL" label="MySQL">

Centreon MBI uses MySQL Connector/J (`com.mysql.cj.jdbc.Driver`), which does not support PEM files directly. Certificates must be stored in a Java KeyStore (JKS or PKCS12).

| File | Contains | Purpose | Required |
|------|----------|---------|----------|
| `truststore.jks` | CA certificate | Lets Java verify the database server's identity | ✓ Always |
| `keystore.jks` | Client cert + private key | Lets the database verify the application's identity | Only if `REQUIRE X509` |

> **Note: mTLS is optional.** It is only needed if the MySQL user was created with `REQUIRE X509`. If the user was created with `REQUIRE SSL`, only the TrustStore is required.

**1. Create the TrustStore.** The TrustStore contains the CA certificate. Java uses it to validate that the MySQL server's certificate was signed by a trusted authority.

    ```shell
    keytool -importcert -alias mysqlServerCACert \
      -file /etc/mysql/newcerts/ca-cert.pem \
      -keystore /etc/mysql/newcerts/truststore.jks \
      -storepass changeit \
      -noprompt
    ```

**2. Create the KeyStore (optional — mTLS only).** Skip if the `centreonbi` user was created with `REQUIRE SSL`.

      2.1 Bundle the client cert and key into a PKCS12 file:

          ```shell
          openssl pkcs12 -export \
            -in /etc/mysql/newcerts/client-cert.pem \
            -inkey /etc/mysql/newcerts/client-key.pem \
            -out /etc/mysql/newcerts/client.p12 \
            -name mbiClient \
            -passout pass:changeit
          ```
      
      2.2 Convert PKCS12 to JKS:

          ```shell
          keytool -importkeystore \
            -srckeystore  /etc/mysql/newcerts/client.p12   -srcstoretype  PKCS12 -srcstorepass  changeit \
            -destkeystore /etc/mysql/newcerts/keystore.jks  -deststoretype JKS   -deststorepass changeit
          ```

**3. Set file permissions.**

```shell
chown centreon-bi: /etc/mysql/newcerts/*.jks
chmod 640 /etc/mysql/newcerts/*.jks
```

**4. Update the BIRT XML profile files.**

> **Important — XML encoding:** In XML attribute values, the `&` separator between URL parameters must be written as `&amp;`. Failing to do so will cause an XML parse error and prevent MBI from starting.

Two files must be updated, each containing two profiles.

**/etc/cbis-conf/cbis-profile.xml**

  Profile **Centreon** (`centreon` database):

  ```xml
  <property name="odaURL" value="jdbc:mysql://<ip_or_hostname>:3306/centreon?autoReconnect=true&amp;sslMode=VERIFY_CA&amp;trustCertificateKeyStoreUrl=file:/etc/mysql/newcerts/truststore.jks&amp;trustCertificateKeyStorePassword=changeit"/>
  ```

  Profile **Censtorage** (`centreon_storage` database):

  ```xml
  <property name="odaURL" value="jdbc:mysql://<ip_or_hostname>:3306/centreon_storage?autoReconnect=true&amp;sslMode=VERIFY_CA&amp;trustCertificateKeyStoreUrl=file:/etc/mysql/newcerts/truststore.jks&amp;trustCertificateKeyStorePassword=changeit"/>
  ```

**/etc/cbis-conf/reports-profile.xml**

  Profile **Centreon** (`centreon_mbi` database):

  ```xml
  <property name="odaURL" value="jdbc:mysql://<ip_or_hostname>:3306/centreon_mbi?autoReconnect=true&amp;sslMode=VERIFY_CA&amp;trustCertificateKeyStoreUrl=file:/etc/mysql/newcerts/truststore.jks&amp;trustCertificateKeyStorePassword=changeit"/>
  ```

  Profile **Censtorage** (`centreon_storage_mbi` database):

  ```xml
  <property name="odaURL" value="jdbc:mysql://<ip_or_hostname>:3306/centreon_storage_mbi?autoReconnect=true&amp;sslMode=VERIFY_CA&amp;trustCertificateKeyStoreUrl=file:/etc/mysql/newcerts/truststore.jks&amp;trustCertificateKeyStorePassword=changeit"/>
  ```

**Optional — mTLS (REQUIRE X509):** add KeyStore parameters to each URL:

  ```xml
  <property name="odaURL" value="jdbc:mysql://<ip_or_hostname>:3306/centreon?autoReconnect=true&amp;sslMode=VERIFY_CA&amp;trustCertificateKeyStoreUrl=file:/etc/mysql/newcerts/truststore.jks&amp;trustCertificateKeyStorePassword=changeit&amp;clientCertificateKeyStoreUrl=file:/etc/mysql/newcerts/keystore.jks&amp;clientCertificateKeyStorePassword=changeit"/>
  ```

  Apply the same pattern to the three other profiles.

</TabItem>
<TabItem value="MariaDB" label="MariaDB">

Unlike MySQL Connector/J, **MariaDB Connector/J 3.x supports PEM files natively** via the `serverSslCert` parameter directly in the JDBC URL. No Java KeyStore conversion is needed for simple SSL mode.

A PKCS12 keystore is only needed for mTLS (client certificate authentication):

| File | Contains | Purpose | Required |
|------|----------|---------|----------|
| `ca-cert.pem` | CA certificate | Lets the driver verify the MariaDB server's identity | ✓ Always |
| `keystore.p12` | Client cert + private key | Lets MariaDB verify the application's identity | Only if `REQUIRE X509` |

> **Note: mTLS is optional.** It is only needed if the MariaDB user was created with `REQUIRE X509`. If the user was created with `REQUIRE SSL`, only `serverSslCert` pointing to the CA is needed.

**1. (Optional) Create the PKCS12 KeyStore for mTLS.**

Skip this step if `centreonbi` was created with `REQUIRE SSL`.

```shell
openssl pkcs12 -export \
  -in /etc/mysql/newcerts/client-cert.pem \
  -inkey /etc/mysql/newcerts/client-key.pem \
  -out /etc/mysql/newcerts/keystore.p12 \
  -name mbiClient \
  -passout pass:changeit
```

**2. Set file permissions.**

```shell
chown centreon-bi: /etc/mysql/newcerts/ca-cert.pem
chown centreon-bi: /etc/mysql/newcerts/keystore.p12   # only if mTLS
chmod 640 /etc/mysql/newcerts/ca-cert.pem
chmod 640 /etc/mysql/newcerts/keystore.p12             # only if mTLS
```

**3. Update XML profile files.**

The `odaURL` must use the `jdbc:mariadb://` scheme and include SSL parameters.

> **Important — XML encoding:** In XML attribute values, the `&` separator between URL parameters must be written as `&amp;`. Failing to do so will cause an XML parse error and prevent MBI from starting.

Two files must be updated, each containing two profiles.

**/etc/cbis-conf/cbis-profile.xml**

  Profile **Centreon** (`centreon` database):

  ```xml
  <property name="odaDriverClass" value="org.mariadb.jdbc.Driver"/>
  <property name="odaURL" value="jdbc:mariadb://<ip_or_hostname>:3306/centreon?autoReconnect=true&amp;sslMode=verify-ca&amp;serverSslCert=/etc/mysql/newcerts/ca-cert.pem"/>
  ```

  Profile **Censtorage** (`centreon_storage` database):

  ```xml
  <property name="odaURL" value="jdbc:mariadb://<ip_or_hostname>:3306/centreon_storage?autoReconnect=true&amp;sslMode=verify-ca&amp;serverSslCert=/etc/mysql/newcerts/ca-cert.pem"/>
  ```

**/etc/cbis-conf/reports-profile.xml**

  Profile **Centreon** (`centreon_mbi` database):

  ```xml
  <property name="odaURL" value="jdbc:mariadb://<ip_or_hostname>:3306/centreon_mbi?autoReconnect=true&amp;sslMode=verify-ca&amp;serverSslCert=/etc/mysql/newcerts/ca-cert.pem"/>
  ```

  Profile **Censtorage** (`centreon_storage_mbi` database):

  ```xml
  <property name="odaURL" value="jdbc:mariadb://<ip_or_hostname>:3306/centreon_storage_mbi?autoReconnect=true&amp;sslMode=verify-ca&amp;serverSslCert=/etc/mysql/newcerts/ca-cert.pem"/>
  ```

**Optional — mTLS (REQUIRE X509):** add KeyStore parameters to each URL:

  ```xml
  <property name="odaURL" value="jdbc:mariadb://<ip_or_hostname>:3306/centreon?autoReconnect=true&amp;sslMode=verify-ca&amp;serverSslCert=/etc/mysql/newcerts/ca-cert.pem&amp;keyStore=/etc/mysql/newcerts/keystore.p12&amp;keyStorePassword=changeit&amp;keyStoreType=PKCS12"/>
  ```

  Apply the same pattern to the three other profiles.

</TabItem>
</Tabs>

### Step 5 - Restart Centreon MBI

```shell
systemctl restart cbis
```

### Step 6 - Check Certificate Expiry

<Tabs groupId="db" queryString>
<TabItem value="MySQL" label="MySQL">

**TrustStore (CA certificate):**

```shell
keytool -list -v -keystore /etc/mysql/newcerts/truststore.jks -storepass changeit
# Look for: Valid from ... until ...
```

**KeyStore (client certificate, mTLS only):**

```shell
keytool -list -v -keystore /etc/mysql/newcerts/keystore.jks -storepass changeit
# Look for: Valid from ... until ...
```

**CA certificate (PEM):**

```shell
openssl x509 -in /etc/mysql/newcerts/ca-cert.pem -noout -dates
```

</TabItem>
<TabItem value="MariaDB" label="MariaDB">

**CA certificate:**

  ```shell
  openssl x509 -in /etc/mysql/newcerts/ca-cert.pem -noout -dates
  # notBefore=...
  # notAfter=...
  ```

**Server certificate:**

  ```shell
  openssl x509 -in /etc/mysql/newcerts/server-cert.pem -noout -dates
  ```

**PKCS12 KeyStore (mTLS only):**

  ```shell
  keytool -list -v -keystore /etc/mysql/newcerts/keystore.p12 -storepass changeit
  # Look for: Valid from ... until ...
  ```

</TabItem>
</Tabs> 

### SSL Mode reference

<Tabs groupId="db" queryString>
<TabItem value="MySQL" label="MySQL">

The `VERIFY_CA` mode is the recommended minimum for production. This table lists other available modes depending on your security requirements:

| Mode | Server cert verified | Hostname/IP verified | Use case |
|------|---------------------|---------------------|----------|
| `DISABLED` | No | No | Development only — no encryption |
| `PREFERRED` | No | No | Uses SSL if available, fallback to plain |
| `REQUIRED` | No | No | Enforces SSL, but does not validate the server cert |
| `VERIFY_CA` | Yes | No | Used in this procedure — validates the CA chain |
| `VERIFY_IDENTITY` | Yes | Yes | Strictest — also checks hostname/IP against the certificate SAN |

> **Note:** If you want to use the `VERIFY_IDENTITY` mode, the server certificate must include a Subject Alternative Name (SAN) matching the exact IP or hostname used in the JDBC URL.

</TabItem>
<TabItem value="MariaDB" label="MariaDB">

The `verify-ca` mode is the recommended minimum for production. This table lists other available modes depending on your security requirements:

| Mode | Server cert verified | Hostname/IP verified | Use case |
|------|---------------------|---------------------|----------|
| `disable` | No | No | Development only — no encryption |
| `trust` | No | No | Encrypts traffic but does not validate the server cert |
| `verify-ca` | Yes | No | Used in this procedure — validates the CA chain |
| `verify-full` | Yes | Yes | Strictest — also checks hostname/IP against the certificate SAN |

> **Note:** If you want to use the `verify-full` mode, the server certificate must include a Subject Alternative Name (SAN) matching the exact IP or hostname used in the JDBC URL. The CN field alone is not sufficient for IP-based connections.

</TabItem>
</Tabs>

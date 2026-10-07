---
id: secure-your-map-platform
title: Securing your MAP platform
description: "Secure Centreon MAP with HTTPS/TLS and encrypted database connections"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This chapter describes advanced procedures to secure your Centreon MAP platform.

> If you want to use MAP in HTTPS, you must both secure your Centreon platform and MAP. Follow this [procedure](../administration/secure-platform.md#secure-the-web-server-with-https) if you need to secure your Centreon platform.

> Mistakes when editing configuration files can lead to malfunctions of the software. We recommend that you make a backup of the file before editing it and that you only change the settings advised by Centreon.

All TLS settings described in this chapter are configured through properties in **/etc/centreon-map/map-config.properties**. Two certificate formats are supported:

- **PEM** (recommended): use your `.crt` certificate and `.key` private key files directly. This is the default format and requires no conversion.
- **JKS**: use a Java keystore, if you already have one.

> If you are upgrading from a version that used the `tls` / `tls_broker` Spring profiles in **/etc/centreon-map/centreon-map.conf**, you don't need to change anything manually: the postinstall script automatically migrates your existing configuration to the property-based format described below.

## Configure HTTPS/TLS on the MAP server

This section describes how to secure the MAP web server itself (the interface reached by your browser and by Centreon Central).

### HTTPS/TLS configuration with a recognized key

> This section describes how to use a **recognized key** with the Centreon MAP server.
>
> If you want to use a self-signed certificate instead, please refer to the [following
> section](#httpstls-configuration-with-an-auto-signed-key).

You will require:

- A private key file, referred to as *map-server.key*.
- A certificate file, referred to as *map-server.crt*.

<Tabs groupId="tls-format" queryString>
<TabItem value="pem" label="PEM (recommended)">

1. Copy the key and certificate files to the MAP server, for example into **/etc/centreon-map/**.

2. Set the following parameters in **/etc/centreon-map/map-config.properties**:

    ```properties
    centreon-map.tls.enabled=true
    centreon-map.tls.pem.keystore.certificate=/etc/centreon-map/map-server.crt
    centreon-map.tls.pem.keystore.private-key=/etc/centreon-map/map-server.key
    centreon-map.tls.pem.keystore.private-key-pass=xxx
    ```

    > Only set `private-key-pass` if your private key is encrypted. Adapt the paths if you stored the files elsewhere.

</TabItem>
<TabItem value="jks" label="JKS">

1. Access the Centreon MAP server through SSH and create a PKCS12 file with the following command line:

    ```shell
    openssl pkcs12 -inkey map-server.key -in map-server.crt -export -out keys.pkcs12
    ```

2. Import this file into a new keystore (a Java repository of security certificates):

    ```shell
    keytool -importkeystore -srckeystore keys.pkcs12 -srcstoretype pkcs12 -destkeystore /etc/centreon-map/map.jks
    ```

3. Set the following parameters in **/etc/centreon-map/map-config.properties**:

    ```properties
    centreon-map.tls.enabled=true
    centreon-map.tls.type=map-jks-tls
    centreon-map.tls.jks.keystore=/etc/centreon-map/map.jks
    centreon-map.tls.jks.keystore-pass=xxx
    ```

    > Replace the keystore-pass value "xxx" with the password you used for the keystore, and adapt the path if it was changed.

</TabItem>
</Tabs>

### HTTPS/TLS configuration with an auto-signed key

> Enabling the TLS mode with an auto-signed key will force every user to add an
> exception for the certificate before using the web interface.
>
> Enable it only if your Centreon also uses this protocol.
>
> Users will have to open the URL:
>
> ```shell
>https://<MAP_IP>:9443/centreon-map/api/beta/actuator/health
> ```
>
> **The solution we recommend is to use a recognized key, as explained
> above.**

<Tabs groupId="tls-format" queryString>
<TabItem value="pem" label="PEM (recommended)">

1. Generate a self-signed certificate and private key:

    ```shell
    openssl req -x509 -newkey rsa:2048 -nodes -keyout /etc/centreon-map/map-server.key -out /etc/centreon-map/map-server.crt -days 365
    ```

2. Set the following parameters in **/etc/centreon-map/map-config.properties**:

    ```properties
    centreon-map.tls.enabled=true
    centreon-map.tls.pem.keystore.certificate=/etc/centreon-map/map-server.crt
    centreon-map.tls.pem.keystore.private-key=/etc/centreon-map/map-server.key
    ```

</TabItem>
<TabItem value="jks" label="JKS">

1. Move to the Java installation folder:

    ```shell
    cd $JAVA_HOME/bin
    ```

2. Generate a keystore file with the following command:

    ```shell
    keytool -genkey -alias map -keyalg RSA -keystore /etc/centreon-map/map.jks
    ```

    The alias value "map" and the keystore file path
    **/etc/centreon-map/map.jks** may be changed, but unless there is a
    specific reason, we advise keeping the default values.

    Provide the needed information when creating the keystore.

    At the end of the screen form, when the "key password" is requested, use
    the same password as the one used for the keystore itself by pressing the
    ENTER key.

3. Set the following parameters in **/etc/centreon-map/map-config.properties**:

    ```properties
    centreon-map.tls.enabled=true
    centreon-map.tls.type=map-jks-tls
    centreon-map.tls.jks.keystore=/etc/centreon-map/map.jks
    centreon-map.tls.jks.keystore-pass=xxx
    ```

    > Replace the keystore-pass value "xxx" with the password you used for
    > the keystore.

</TabItem>
</Tabs>

### Apply the configuration

Restart the Centreon MAP service to apply the change:

```shell
systemctl restart centreon-map-engine
```

Centreon MAP server is now configured to respond to requests from HTTPS. The
default listening port automatically switches to **9443** (or a port previously configured) instead of 8081.

To use a different port, set the following parameter in
**/etc/centreon-map/map-config.properties**:

```properties
centreon-map.port=9443
```

To change the default port, refer to the [dedicated procedure](./map-web-change-port.md).

> Don't forget to modify the URL on Centreon side in the **MAP server address**
> field in the **Administration > Extensions > Map > Options** menu.

## Configure TLS on the Broker connection

An additional Broker output for Centreon Central (centreon-broker-master) has
been created during the installation.

You can check it in your Centreon web interface, from the **Configuration > Pollers > Broker Configuration**, 
by editing the **centreon-broker-master** configuration.

The output configuration should look like this:

![image](../assets/graph-views/output_broker.png)

### Broker configuration

You can enable TLS output and set up Broker's private key and public
certificate as described below:

![image](../assets/graph-views/output_broker_tls.png)

1. Create a self-signed certificate with the following commands: 

    ```text
    openssl req -new -newkey rsa:2048 -nodes -keyout broker_private.key -out broker.csr
    openssl x509 -req -in broker.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out broker_public.crt -days 365 -sha256
    ```

2. Copy the private key and the certificate into **/etc/centreon/broker_cert/** directory:

    ```text
    mv broker_private.key /etc/centreon/broker_cert/
    mv broker_public.crt /etc/centreon/broker_cert/
    ```

> "Trusted CA's certificate" field is optional. If you activate Broker's client
> authentication by setting this "ca\_certificate.crt", then you must also
> configure the [MAP server's own
> TLS](#configure-httpstls-on-the-map-server).
>
> You MUST push the new broker configuration and restart the broker after
> configuration.

### MAP engine configuration

Set the following parameters in **/etc/centreon-map/map-config.properties** to
enable the TLS socket connection to Broker:

<Tabs groupId="tls-format" queryString>
<TabItem value="pem" label="PEM (recommended)">

```properties
broker.tls.enabled=true
broker.tls.pem.keystore.certificate=/etc/centreon-map/map-broker.crt
```

Point directly to the Broker public certificate (or its CA certificate) in PEM
format — no truststore creation needed.

</TabItem>
<TabItem value="jks" label="JKS">

If the Broker public certificate is self-signed, you must create a truststore
containing the certificate (or its CA certificate) with the following command
line:

```shell
keytool -import -alias centreon-broker -file broker_public.crt -keystore /etc/centreon-map/map-broker.jks
```

- "broker\_public.crt" is Broker's public certificate or its CA certificate
  in PEM format,
- "map-broker.jks" is the generated truststore in JKS format,
- a store password is required during generation.

Add the truststore parameters in **/etc/centreon-map/map-config.properties**:

```properties
broker.tls.enabled=true
broker.tls.type=broker-jks-tls
broker.tls.jks.truststore=/etc/centreon-map/map-broker.jks
broker.tls.jks.truststore-pass=xxxx
```

> `broker.tls.jks.truststore-pass` is optional — only set it if the truststore
> was created with a password.

If the Broker certificate is signed by a recognized CA, the JVM default trust
store (**cacerts**, **/etc/pki/java/cacerts**) is used automatically —
nothing to configure.

</TabItem>
</Tabs>

Restart the Centreon MAP service to apply the change:

```shell
systemctl restart centreon-map-engine
```

Once you configure a trusted certificate, Centreon MAP will use it to validate
Broker's certificate. This means that if you use a self-signed certificate for
Broker, you must add it as shown above. If you don't, the
**Monitoring > Map** page will be blank, and the logs (**/var/log/centreon-map/centreon-map.log**)
will show the following error:
`unable to find valid certification path to requested target`.

## Configure TLS for the connection to Centreon Central

> You must [secure your Centreon platform with HTTPS](../administration/secure-platform.md#secure-the-web-server-with-https).

Set the **centreon.url** parameter inside **/etc/centreon-map/map-config.properties**
to use HTTPS instead of HTTP:

```properties
centreon.url=https://<server-address>
```

If Centreon Central uses a self-signed certificate or a certificate signed by
a custom/internal CA, you must give Centreon MAP a way to trust it:

<Tabs groupId="tls-format" queryString>
<TabItem value="pem" label="PEM (recommended)">

```properties
centreon.tls.pem.keystore.certificate=/etc/centreon-map/central-ca.crt
```

Point directly to Central's public certificate or its CA certificate, in PEM
format.

</TabItem>
<TabItem value="jks" label="JKS">

1. Copy the central server's **.crt** certificate to the MAP server.

2. Create a truststore containing the certificate (or its CA certificate):

    ```shell
    keytool -import -alias centreon-central -file central_public.crt -keystore /etc/centreon-map/central-truststore.jks
    ```

3. Set the following parameters:

    ```properties
    centreon.tls.jks.truststore=/etc/centreon-map/central-truststore.jks
    centreon.tls.jks.truststore-pass=xxxx
    ```

    > `centreon.tls.jks.truststore-pass` is optional — only set it if the
    > truststore was created with a password.

</TabItem>
</Tabs>

> Centreon MAP defaults to the PEM format for this setting; if the PEM
> certificate file doesn't exist, it falls back to JKS. There is no
> `centreon.tls.type` property to set for this connection.

If the certificate is signed by a recognized CA, nothing needs to be
configured: the JVM default trust store (**cacerts**,
**/etc/pki/java/cacerts**) is used automatically.

## Configure TLS on a MySQL or MariaDB database

This section describes how to enable SSL on a MySQL/MariaDB server and configure Centreon MAP to connect to it securely using certificate authority verification (`verify-ca` mode).

> **Note:** This procedure covers the `verify-ca` mode only. In this mode, the server certificate is validated against a trusted Certificate Authority, but the hostname/IP address is not verified. For other SSL verification modes, see the [SSL Mode reference](#ssl-mode-reference) section.

- Select the tab corresponding to the database you want to use.

### Step 1 - Generate keys and certificates

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

# Convert the server key to RSA format (required by MySQL)
openssl rsa -in server-key.pem -out server-key.pem

# Sign the server certificate with the CA
openssl x509 -req -in server-req.pem -days 365000 -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 -out server-cert.pem
```

**4. Generate the client certificate.** The client certificate is used by the application to authenticate itself to MySQL (mutual TLS).

```shell
# Generate the client private key and CSR
openssl req -newkey rsa:2048 -days 365000 -nodes -keyout client-key.pem -out client-req.pem
# Convert the client key to RSA format
openssl rsa -in client-key.pem -out client-key.pem
# Sign the client certificate with the CA
openssl x509 -req -in client-req.pem -days 365000 -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 -out client-cert.pem
```

**5. Verify the certificates.** Ensure both certificates are correctly signed by the CA before proceeding.

```shell
openssl verify -CAfile ca-cert.pem server-cert.pem client-cert.pem
# Expected output:
# server-cert.pem: OK
# client-cert.pem: OK
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

# Convert the server key to RSA format (required by MariaDB)
openssl rsa -in server-key.pem -out server-key.pem

# Sign the server certificate with the CA
openssl x509 -req -in server-req.pem -days 365000 \
-CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 \
-out server-cert.pem
```

**4. Generate the client certificate.** The client certificate is used by the application to authenticate itself to MariaDB (mutual TLS). Skip this section if you only need `REQUIRE SSL`.

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

</TabItem>
</Tabs>

### Step 2 - Configure the MySQL/MariaDB server

<Tabs groupId="db" queryString>
<TabItem value="MySQL" label="MySQL">

**1. Set the file ownership.** MySQL requires ownership of all certificate files.

> Ensure you are using the directory you previously created (`/etc/mysql/newcerts` in this example).

```shell
chown -Rv mysql:root /etc/mysql/newcerts/*
```

**2. Edit the MySQL server configuration.** Add the following block to your MySQL server configuration file (typically `/etc/mysql/mysql.conf.d/mysqld.cnf`):

```shell
[mysqld]
ssl-ca   = /etc/mysql/newcerts/ca-cert.pem
ssl-cert = /etc/mysql/newcerts/server-cert.pem
ssl-key  = /etc/mysql/newcerts/server-key.pem
# Restrict to secure TLS versions only
tls_version = TLSv1.2,TLSv1.3
```

**3. Optional - Edit the MySQL client configuration.** This allows the mysql CLI tool to connect using SSL as well.

```shell
[mysql]
ssl-ca   = /etc/mysql/newcerts/ca-cert.pem
ssl-cert = /etc/mysql/newcerts/client-cert.pem
ssl-key  = /etc/mysql/newcerts/client-key.pem
```

**4. Restart MySQL.**

```shell
systemctl restart mysqld
```

**5. Verify SSL is active.**

```shell
SHOW VARIABLES LIKE '%ssl%';
-- have_ssl should be YES
-- ssl_ca, ssl_cert, ssl_key should point to your certificate files
```

</TabItem>
<TabItem value="MariaDB" label="MariaDB">

**1. Set the file ownership.** MariaDB requires ownership of all certificate files.

> Ensure you are using the directory you previously created (`/etc/mariadb/newcerts` in this example).

```shell
chown -Rv mysql:root /etc/mariadb/newcerts/*
```

**2. Edit the MariaDB server configuration.** Add the following block to your MariaDB server configuration file (typically `/etc/mariadb/mariadb.conf.d/50-server.cnf`):

```shell
[mariadb]
ssl-ca   = /etc/mariadb/newcerts/ca-cert.pem
ssl-cert = /etc/mariadb/newcerts/server-cert.pem
ssl-key  = /etc/mariadb/newcerts/server-key.pem

# Restrict to secure TLS versions only
tls_version = TLSv1.2,TLSv1.3
```

**3. Optional - Edit the MariaDB client configuration.** This allows the mariadb CLI tool to connect using SSL as well (/etc/mariadb/mariadb.conf.d/client.cnf):

```shell
[client-mariadb]
ssl-ca   = /etc/mariadb/newcerts/ca-cert.pem
ssl-cert = /etc/mariadb/newcerts/client-cert.pem
ssl-key  = /etc/mariadb/newcerts/client-key.pem
```

**4. Restart MariaDB.**

```shell
systemctl restart mariadb
```

**5. Verify SSL is active.**

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

**1. Require SSL for the user.**

```shell
ALTER USER 'centreon_map'@'<ip_or_hostname>' REQUIRE SSL;
-- Verify: ssl_type should now show ANY
SELECT user, host, ssl_type FROM mysql.user WHERE user='centreon_map';
```

**2. Grant privileges.**

```shell
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
      CREATE TEMPORARY TABLES, LOCK TABLES
  ON `centreon_map`.*
  TO `centreon_map`@`<ip_or_hostname>`;
-- Verify grants
SHOW GRANTS FOR 'centreon_map'@'<ip_or_hostname>';
```

</TabItem>
<TabItem value="MariaDB" label="MariaDB">

**1. Require SSL for the user.**

```shell
-- SSL only (no client certificate required)
ALTER USER 'centreon_map'@'<ip_or_hostname>' REQUIRE SSL;

-- Or mutual TLS (client certificate required)
-- ALTER USER 'centreon_map'@'<ip_or_hostname>' REQUIRE X509;

-- Verify: ssl_type should now show ANY (for SSL) or X509 (for mTLS)
SELECT user, host, ssl_type FROM mysql.user WHERE user='centreon_map';
```

**2. Grant privileges.**

```shell
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
    CREATE TEMPORARY TABLES, LOCK TABLES
ON `centreon_map`.*
TO `centreon_map`@`<ip_or_hostname>`;
-- Verify grants
SHOW GRANTS FOR 'centreon_map'@'<ip_or_hostname>';
```

</TabItem>
</Tabs>

### Step 4 - Configure JDBC (Spring Boot)

<Tabs groupId="db" queryString>
<TabItem value="MySQL" label="MySQL">

Since the migration to MariaDB Connector/J, the MySQL connector is no longer bundled. Even when your database server is **MySQL**, the JDBC URL uses the `jdbc:mariadb://` scheme and the `org.mariadb.jdbc.Driver` driver. **MariaDB Connector/J 3.x supports PEM files natively** via the `serverSslCert` parameter directly in the JDBC URL. No Java keystore conversion is needed for SSL simple mode.

A keystore file is only needed for mTLS (client certificate authentication):

| File         | Contains                  | Purpose                                            | Required             |
|--------------|---------------------------|----------------------------------------------------|----------------------|
| ca-cert.pem  | CA certificate            | Lets the driver verify the MySQL server's identity | Yes - Always         |
| keystore.p12 | Client cert + private key | Lets MySQL verify the application's identity       | Only if REQUIRE X509 |

> **Note: mTLS is optional.** It is only needed if the MySQL user was created with REQUIRE X509. If the user was created with REQUIRE SSL, only `serverSslCert` pointing to the CA is needed and the keystore steps below can be skipped.

**1. Optional - Create the KeyStore for mTLS.**

Skip this step if the MySQL user was created with REQUIRE SSL. It is only required for REQUIRE X509 (mutual TLS).

`keytool` cannot import a PEM private key directly, so we first bundle via PKCS12.

1.1. Bundle the client cert and key into a PKCS12 file:

```shell
openssl pkcs12 -export \
-in /etc/mysql/newcerts/client-cert.pem \
-inkey /etc/mysql/newcerts/client-key.pem \
-out /etc/mysql/newcerts/keystore.p12 \
-name mysqlClient \
-passout pass:changeit
```

**2. Set file permissions.** Ensure only the user running the Java application can read the keystore files.

```shell
chown your_java_user: /etc/mysql/newcerts/keystore.p12
chmod 640 /etc/mysql/newcerts/keystore.p12
```

**3. Set the JDBC URL.** Add the following to your configuration file (/etc/centreon-map/*-database.properties):

```shell
*.connection.url=jdbc:mariadb://<ip_or_hostname>:3306/centreon_map?sslMode=verify-ca&serverSslCert=/etc/mysql/newcerts/ca-cert.pem&rewriteBatchedStatements=true
```

> **Note: sslMode=trust for MySQL 8.** On a MySQL 8 server, the `sslMode=trust` parameter is added by default: the `caching_sha2_password` authentication hardened setup, replace `trust` with `verify-ca` (as shown above) or `verify-full`. Never use `sslMode=disable` on MySQL 8, as it would break authentication.

**4. Optional — only if mTLS is enabled (REQUIRE X509).** Add options `keyStore`, `keyStorePassword` and `keyStoreType`:

```shell
*.connection.url=jdbc:mariadb://<ip_or_hostname>:3306/centreon_map?sslMode=verify-ca&serverSslCert=/etc/mysql/newcerts/ca-cert.pem&keyStore=/etc/mysql/newcerts/keystore.p12&keyStorePassword=changeit&keyStoreType=PKCS12&rewriteBatchedStatements=true
```

</TabItem>
<TabItem value="MariaDB" label="MariaDB">

Unlike MySQL Connector/J, **MariaDB Connector/J 3.x supports PEM files natively** via the `serverSslCert` parameter directly in the JDBC URL. No Java keystore conversion is needed for SSL simple mode.

A keystore file is only needed for mTLS (client certificate authentication):

| File         | Contains                  | Purpose                                              | Required             |
|--------------|---------------------------|------------------------------------------------------|----------------------|
| ca-cert.pem  | CA certificate            | Lets the driver verify the MariaDB server's identity | Yes - Always         |
| keystore.p12 | Client cert + private key | Lets MariaDB verify the application's identity       | Only if REQUIRE X509 |

> **Note: mTLS is optional.** It is only needed if the MariaDB user was created with REQUIRE X509. If the user was created with REQUIRE SSL, only serverSslCert pointing to the CA is needed and the keystore steps below can be skipped.

**1. Optional - Create the KeyStore for mTLS.**

Skip this step if the MariaDB user was created with REQUIRE SSL. It is only required for REQUIRE X509 (mutual TLS).

`keytool` cannot import a PEM private key directly, so we first bundle via PKCS12.

1.1. Bundle the client cert and key into a PKCS12 file:

```shell
openssl pkcs12 -export \
-in /etc/mariadb/newcerts/client-cert.pem \
-inkey /etc/mariadb/newcerts/client-key.pem \
-out /etc/mariadb/newcerts/keystore.p12 \
-name mariadbClient \
-passout pass:changeit
```

**2. Set file permissions.** Ensure only the user running the Java application can read the keystore files.

```shell
chown your_java_user: /etc/mariadb/newcerts/keystore.p12
chmod 640 /etc/mariadb/newcerts/keystore.p12
```

**3. Set the JDBC URL.** Add the following to your configuration file (/etc/centreon-map/*-database.properties):

```shell
*.connection.url=jdbc:mariadb://<ip_or_hostname>:3306/centreon_map?sslMode=verify-ca&serverSslCert=/etc/mariadb/newcerts/ca-cert.pem&rewriteBatchedStatements=true
```

**4. Optional — only if mTLS is enabled (REQUIRE X509).** Add options `keyStore`, `keyStorePassword` and `keyStoreType`:

```shell
*.connection.url=jdbc:mariadb://<ip_or_hostname>:3306/centreon_map?sslMode=verify-ca&serverSslCert=/etc/mariadb/newcerts/ca-cert.pem&keyStore=/etc/mariadb/newcerts/keystore.p12&keyStorePassword=changeit&keyStoreType=PKCS12&rewriteBatchedStatements=true
```

</TabItem>
</Tabs>

### Step 5 - Check Certificate Expiry

<Tabs groupId="db" queryString>
<TabItem value="MySQL" label="MySQL">

**1. Check the CA certificate.**

```shell
openssl x509 -in /etc/mysql/newcerts/ca-cert.pem -noout -dates
# notBefore=...
# notAfter=...
```

**2. Check the server certificate.**

```shell
openssl x509 -in /etc/mysql/newcerts/server-cert.pem -noout -dates
```

**3. Check the KeyStore (mTLS only).**

```shell
keytool -list -v -keystore /etc/mysql/newcerts/keystore.p12 -storepass changeit
# Look for: Valid from ... until ...
```

</TabItem>
<TabItem value="MariaDB" label="MariaDB">

**1. Check the CA certificate.**

```shell
openssl x509 -in /etc/mariadb/newcerts/ca-cert.pem -noout -dates
# notBefore=...
# notAfter=...
```

**2. Check the server certificate.**

```shell
openssl x509 -in /etc/mariadb/newcerts/server-cert.pem -noout -dates
```

**3. Check the KeyStore (mTLS only).**

```shell
keytool -list -v -keystore /etc/mariadb/newcerts/keystore.p12 -storepass changeit
# Look for: Valid from ... until ...
```

</TabItem>
</Tabs>

### SSL Mode reference

The `verify-ca` mode is the recommended minimum for production. This table lists other available modes depending on your security requirements:

| Mode          | Server cert verified | Hostname/IP verified | Use case                                                        |
|---------------|----------------------|----------------------|-----------------------------------------------------------------|
| `disable`     | No                   | No                   | Development only — no encryption                                |
| `trust`       | No                   | No                   | Encrypts traffic but does not validate the server cert          |
| `verify-ca`   | Yes                  | No                   | Used in this procedure — validates the CA chain                 |
| `verify-full` | Yes                  | Yes                  | Strictest — also checks hostname/IP against the certificate SAN |

> **Note:** If you want to use the `verify-full` mode, the server certificate must include a Subject Alternative Name (SAN) matching the exact IP or hostname used in the JDBC URL. The CN field alone is not sufficient for IP-based connections.

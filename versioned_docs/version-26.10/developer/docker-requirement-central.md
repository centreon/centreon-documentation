---
id: docker-requirement-central
title : Configuring Centreon for receiving docker poller connection
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This procedure describes how to configure Gorgone (a submodule of Centreon) between a distant poller and a Central server using **pullwss** mode. This is the only method allowed for pollers running in a Docker container, because the poller cannot be reached from the Central server.

- In pullwss mode, the poller opens a WebSocket connection to the Central.

- Because the connection uses HTTP(S), certificates are needed to secure the connection. To simplify certificate lifecycle management, apache (which already host the Centreon web interface) is used as a reverse proxy to terminate the TLS connection and forward the traffic to Gorgone.


### Installation requirements

Ensure the Central server and Gorgone are already installed and up to date to the last major version.

>Requirement : If not already done, configure certificates for apache, you can see the documentation to auto generate them [here](secure-platform.md#secure-the-web-server-with-https)

> The poller must be able to reach the Central server and use the last major version of Centreon.

### Configure Gorgone

In previous version of Centreon, gorgone could listen for pullwss connections directly on the network if manually configured to do so. Starting with version 26.10, the default method is to use Apache as a reverse proxy for Gorgone.
If you already use pullwss, see the [compatibility mode](#apache-reverse-proxy-configuration) section below.

update the file **/etc/centreon-gorgone/config.d/40-gorgoned.yaml** as follows:

```yaml
gorgone:
  modules:
    - name: proxy
      package: "gorgone::modules::core::proxy::hooks"
      enable: true
      httpserver:
        enable: true
        ssl: false
        address: "127.0.0.1"
        port: 8087

    - name: nodes
      package: "gorgone::modules::core::nodes::hooks"
      enable: true
```

the `nodes` module should already be present, and do not need modifications in a default installation. The proxy module is already present too, but not the `httpserver` sub-key, which you should add.

Explanation of the configuration:

- `ssl: false` and `address: "127.0.0.1"`: Gorgone only accepts connections from the local machine, in plain HTTP. Apache is the one terminating TLS for the pollers and forwarding the traffic locally, so Gorgone itself does not need a certificate.
- `port: 8087`: internal port used only for the connection between Apache and Gorgone on the same host. It does not need to be exposed to the network.

Restart Gorgone after this change:

```shell
systemctl restart gorgoned
```

### Configure Apache as a reverse proxy

## apache modules prerequisites

Make sure the `proxy_wstunnel` Apache module is enabled:

  <Tabs groupId="sync">

  <TabItem value="Alma / RHEL / Oracle Linux 8/9" label="Alma / RHEL / Oracle Linux 8/9">
   contrary to deb packages, alma9 httpd package already have proxy_wstunnel module enabled by default, nothing to do.
  </TabItem>

  <TabItem value="Debian 13" label="Debian 13">
  ```shell
  a2enmod proxy proxy_wstunnel
  systemctl restart apache2
  ```
  </TabItem>

  </Tabs>
  

### Apache reverse proxy configuration

Starting from 26.10, apache already redirect the traffic from `/gorgone/pullwss/websocket` to gorgone.

If this is the first time you setup pullwss on your Central, you don't need to do anything.

If you already used pullwss in previous version, you have multiples options : 
- Update all poller to the same version, and configure them to acces the central on port 443.
- If you can not update all poller in the same time, you can add an apache configuration to hold the legacy pullwss port 8086, and redirect the traffic to gorgone. This is explained in the next section.

#### Old poller configuration with no certificate (plain HTTP)

This section should be used only if you already configured pullwss in previous version of Centreon, and you have many pollers that cannot be reconfigured easily.

there is an example of apache configuration to redirect the traffic from port 8086 to gorgone to keep the older poller working.
Please note that using pullwss without TLS is not recommended in production, and this configuration is only for compatibility with old poller that cannot be configured to use TLS.

  <Tabs groupId="sync">

  <TabItem value="Alma / RHEL / Oracle Linux 8/9" label="Alma / RHEL / Oracle Linux 8/9">
   ```shell
   cp /usr/share/centreon/examples/centreon-apache-gorgone.conf /etc/httpd/conf.d/
   systemctl restart httpd
   ```
  </TabItem>

  <TabItem value="Debian 13" label="Debian 13">
  ```shell
  cp /usr/share/centreon/examples/centreon-apache-gorgone.conf /etc/apache2/sites-available/
  a2ensite centreon-apache-gorgone
  systemctl restart apache2
  ```
  </TabItem>
  </Tabs>

#### Old poller configuration with certificate (HTTPS)

This section should be used only if you already configured pullwss in previous version of Centreon, and you have many pollers that cannot be reconfigured easily.

there is an example of apache configuration to redirect the traffic from port 8086 to gorgone to keep the older poller working.

  <Tabs groupId="sync">

  <TabItem value="Alma / RHEL / Oracle Linux 8/9" label="Alma / RHEL / Oracle Linux 8/9">
   ```shell
   cp /usr/share/centreon/examples/centreon-apache-https-gorgone.conf /etc/httpd/conf.d/
   systemctl restart httpd
   ```
  </TabItem>

  <TabItem value="Debian 13" label="Debian 13">
  ```shell
  cp /usr/share/centreon/examples/centreon-apache-https-gorgone.conf /etc/apache2/sites-available/
  a2ensite centreon-apache-https-gorgone
  systemctl restart apache2
  ```
  </TabItem>
  </Tabs>





```apache
Listen 8086

<VirtualHost *:8086>
    <IfModule mod_proxy_wstunnel.c>
        ProxyPass "/" "ws://127.0.0.1:8087/"
        ProxyPassReverse "/" "ws://127.0.0.1:8087/"
    </IfModule>
</VirtualHost>
```

If pollers must reach the Central over TLS (recommended in production), terminate SSL/TLS on this virtual host instead, using a certificate signed by a trusted CA:

```apache
Listen 8086

<VirtualHost *:8086>
    SSLEngine On
    SSLCertificateFile /etc/pki/tls/certs/your_cert.crt
    SSLCertificateKeyFile /etc/pki/tls/private/your_key.key

    <IfModule mod_proxy_wstunnel.c>
        ProxyPass "/" "ws://127.0.0.1:8087/"
        ProxyPassReverse "/" "ws://127.0.0.1:8087/"
    </IfModule>
</VirtualHost>
```

Enable the site and reload Apache:

```shell
# Debian/Ubuntu
a2ensite centreon-gorgone-pullwss
systemctl reload apache2

# RHEL/CentOS/Alma
systemctl reload httpd
```

Make sure port 8086 is open on the firewall between the poller and the Central.

## On the distant poller side

### Installation requirements

Ensure the poller and Gorgone are already installed.

### Configuration

Configure the file **/etc/centreon-gorgone/config.d/40-gorgoned.yaml** as follows:

```yaml
name: distant-server
description: Configuration for distant server
gorgone:
  gorgonecore:
    id: 6
    privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"
    pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"

  modules:
    - name: engine
      package: gorgone::modules::centreon::engine::hooks
      enable: true
      command_file: "/var/lib/centreon-engine/rw/centengine.cmd"

    - name: pullwss
      package: "gorgone::modules::core::pullwss::hooks"
      enable: true
      ssl: true
      port: 8086
      token: "your_secret_token"
      address: 10.30.2.203
```

- `address` and `port`: point to the Central's address and the port 8086 Apache is listening on, not to Gorgone's internal port.
- `ssl`: set to `true` if Apache terminates TLS on port 8086 (recommended), or `false` if you kept the plain HTTP example above.
- `token`: shared secret used to authenticate the poller; it must match the `httpserver.token` directive configured on the Central, or be a valid Centreon API token name.

Restart Gorgone on the poller:

```shell
systemctl restart gorgoned
```

The poller then opens a WebSocket connection to `https://10.30.2.203:8086/`, which Apache forwards locally to Gorgone.

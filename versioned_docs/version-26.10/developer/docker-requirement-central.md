---
id: docker-requirement-central
title: Configuring Centreon to receive a Docker poller connection
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This procedure describes how to configure Gorgone (a submodule of Centreon) between a distant poller and a Central server using **pullwss** mode. This is the only method allowed for pollers running in a Docker container, because the poller cannot be reached from the Central server.

- In pullwss mode, the poller opens a WebSocket connection to the Central.

- Because the connection uses HTTP(S), certificates are needed to secure the connection. To simplify certificate lifecycle management, Apache (which already hosts the Centreon web interface) is used as a reverse proxy to terminate the TLS connection and forward the traffic to Gorgone.

## Installation requirements

If you are using Centreon cloud, you can skip shit configuration, and directly use the one-line command to configure the poller to connect to the Central using pullwss.
You can retrieve this command in the Centreon web interface, in the poller configuration page.

Ensure the Central server and Gorgone are already installed and up to date with the latest major version.

> Requirement: If not already done, configure certificates for Apache. See the documentation to auto-generate them TODO

> The poller must be able to reach the Central server and use the latest major version of Centreon.

## Configure Gorgone

In previous versions of Centreon, Gorgone could listen for pullwss connections directly on the network if manually configured to do so. Starting with version 26.10, the recommended method is to use Apache as a reverse proxy for Gorgone.
If you already use pullwss, see the [compatibility mode](#apache-reverse-proxy-configuration) section below.

Update the file **/etc/centreon-gorgone/config.d/40-gorgoned.yaml** on the central as follows:

```yaml
gorgone:
  modules:
    - name: nodes
      package: "gorgone::modules::core::nodes::hooks"
      enable: true
      
    - name: proxy
      package: "gorgone::modules::core::proxy::hooks"
      enable: true
      httpserver:
        enable: true
        ssl: false
        address: "localhost"
        port: 8087

```

Please note this file is a yaml file, so indentation are important. Use 2 spaces for each indentation level.

The `nodes` module should already be present, and does not need modification in a default installation. The proxy module is already present too, but not the `httpserver` sub-key, which you should add.

Explanation of the configuration:

- `ssl: false` and `address: "localhost"`: Gorgone only accepts connections from the local machine, in plain HTTP. Apache is the one terminating TLS for the pollers and forwarding the traffic locally, so Gorgone itself does not need a certificate.
- `port: 8087`: internal port used only for the connection between Apache and Gorgone on the same host. It should not be exposed to the network.

Restart Gorgone after this change:

```shell
systemctl restart gorgoned
```

Check gorgone correctly listen to port 8087:

```shell
sudo ss -tnlp | grep 8087
```

Should return one line similar to this:

```text
LISTEN 0      4096                [::1]:8087          [::]:*    users:(("gorgone-proxy-h",pid=2305,fd=28))
```


## Configure Apache as a reverse proxy

## Apache modules prerequisites

Make sure the `proxy_wstunnel` Apache module is enabled:

  <Tabs groupId="sync">

  <TabItem value="Alma / RHEL / Oracle Linux 8/9" label="Alma / RHEL / Oracle Linux 8/9">
   Contrary to deb packages, the Alma 9 httpd package already has the proxy_wstunnel module enabled by default, so there is nothing to do.
  </TabItem>

  <TabItem value="Debian 13" label="Debian 13">
  ```shell
  a2enmod proxy proxy_wstunnel
  systemctl restart apache2
  ```
  </TabItem>

  </Tabs>
  

### Apache reverse proxy configuration

Centreon offers an example of a configuration file to enable HTTPS and serving gorgone as a reverse proxy, available in the following directory: `/usr/share/centreon/examples/centreon.apache.https.conf`

if your configuration is specific, this is the required configuration to add inside your Apache virtual host:

```apache
    <IfModule mod_proxy_wstunnel.c>
        ProxyPass "/${base_uri}/gorgone/pullwss/websocket"  "ws://localhost:8087/"
        ProxyPassReverse "/${base_uri}/gorgone/pullwss/websocket"  "ws://localhost:8087/"
    </IfModule>
```

If you already used pullwss in a previous version, you have multiple options:
- Update all pollers to the same version, and configure them to access the Central on port 443.
- If you cannot update all pollers at the same time, you can add an Apache configuration to keep the legacy pullwss port 8086, and redirect the traffic to Gorgone. This is explained in the next section.

#### Old poller configuration with no certificate (plain HTTP)

This section should be used only if you already configured pullwss in a previous version of Centreon, and you have many pollers that cannot be reconfigured easily.

Centreon offers an example of an Apache configuration file to redirect the traffic from port 8086 to Gorgone to keep the older pollers working.
Please note that using pullwss without TLS is not recommended in production, and should be migrated as soon as possible. This configuration is only for compatibility with old pollers that cannot be configured to use TLS.

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

This section should be used only if you already configured pullwss in a previous version of Centreon, and you have many pollers that cannot be reconfigured easily.

Centreon offers an example of an apache configuration file to redirect the traffic from port 8086 to Gorgone to keep the older pollers working.

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


## Poller configuration

You can now add a poller in the Central web interface and configure it as a "docker" poller.
Once done, you can use the one-line command to configure the poller to connect to the Central using pullwss.

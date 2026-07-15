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

>Requirement : If not already done, configure certificates for apache, you can see the documentation to auto generate them [here](../administration/secure-platform.md#secure-the-web-server-with-https).

> The poller must be able to reach the Central server and use the last major version of Centreon.

### Configure Gorgone

In previous version of Centreon, gorgone could listen for pullwss connections directly on the network if manually configured to do so. Starting with version 26.10, the recommended method is to use Apache as a reverse proxy for Gorgone.
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
- `port: 8087`: internal port used only for the connection between Apache and Gorgone on the same host. It should not be exposed to the network.

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


## Poller configuration

You can now add a poller in the Central web interface, and configure it as a "docker" poller.
Once done, you can use the one line command to configure the poller to connect to the Central using pullwss.

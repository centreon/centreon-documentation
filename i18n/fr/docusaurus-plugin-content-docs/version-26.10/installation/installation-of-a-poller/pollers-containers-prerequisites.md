---
id: pollers-containers-prerequisites
title: Pollers in containers prerequisites
description: "Configuring Centreon to receive connections from pollers in containers"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page explains how to configure your platform to be able to use pollers in containers.

## When to use this procedure

This page describes what to do if the following conditions are met:

* You have just installed a platform in version 26.10, or upgraded a platform that did not have any pollers in pullwss mode.
* You want to use pollers in containers for the first time.

> If your platform had pollers in pullwss mode and you now wish to use pollers in containers, follow [Adapting legacy pullwss poller setups](./adapt-legacy-pullwss.md).

### Pullwss mode

By default, the central server initiates the connection to its pollers. However, a poller running in a container cannot accept incoming connections, so this default does not work.

**pullwss** mode reverses the direction: the poller opens a WebSocket connection to the central server and keeps it open. You need to perform this procedure once for the whole platform, when you first install a poller in a container. This has no impact on other types of poller deployments.

The recomended and secure way is to use HTTPS. This means that certificates are needed to secure the connection. To simplify certificate lifecycle management, Apache (which already hosts the Centreon web interface) is used as a reverse proxy to terminate the TLS connection and forward the traffic to the central server's Gorgone.

## Installation requirements

* Ensure the central server and Gorgone are already installed and up to date with the latest major version.

* If not already done, configure certificates for Apache. (This is described in the standard installation procedure for this version.)

* The poller must be able to reach the central server.

## Step 1: Configure Gorgone on the central server

In previous versions of Centreon, Gorgone could listen for pullwss connections directly on the network if manually configured to do so. Starting with version 26.10, the recommended method is to use Apache as a reverse proxy for Gorgone.

1. On the central server, update the file **/etc/centreon-gorgone/config.d/40-gorgoned.yaml** as follows. The `nodes` module should already be present, and does not need modification in a default installation. The `proxy` module is already present too, but not the `httpserver` sub-key, which you should add.

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

  > Please note this is a yaml file, so indentation is important. Use 2 spaces for each indentation level.

  Explanation of the configuration:

  * `ssl: false` and `address: "localhost"`: Gorgone only accepts connections from the local machine, in plain HTTP. Apache is the one terminating TLS for the pollers and forwarding the traffic locally, so Gorgone itself does not need a certificate.
  * `port: 8087`: internal port used only for the connection between Apache and Gorgone on the same host. It should not be exposed to the network.

2. Restart Gorgone after this change:

  ```shell
  systemctl restart gorgoned
  ```

3. Check that Gorgone is listening on port 8087 correctly:

  ```shell
  sudo ss -tnlp | grep 8087
  ```

  The command should return one line similar to this:

  ```text
  LISTEN 0      4096                [::1]:8087          [::]:*    users:(("gorgone-proxy-h",pid=2305,fd=28))
  ```

## Step 2: Configure Apache as a reverse proxy

This step is also done on the central server.

### Apache modules prerequisites

Make sure the `proxy_wstunnel` Apache module is enabled:

<Tabs groupId="os">

<TabItem value="Alma / RHEL / Oracle Linux 9/10" label="Alma / RHEL / Oracle Linux 9/10">
  
Unlike .deb packages, the Alma Linux 9 **httpd** package already has the **proxy_wstunnel** module enabled by default, so there is nothing to do.

</TabItem>

<TabItem value="Debian 13" label="Debian 13">

```shell
a2enmod proxy proxy_wstunnel
systemctl restart apache2
```

</TabItem>
</Tabs>
  
### Apache reverse proxy configuration

1. Edit your Apache configuration file. This is located here:

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9/10" label="Alma / RHEL / Oracle Linux 9/10">
    
  ```shell
  /etc/httpd/conf.d/10-centreon.conf
  ``` 

  </TabItem>

  <TabItem value="Debian 13" label="Debian 13">

  ```shell
  /etc/apache2/sites-availables/centreon.conf
  ```

  </TabItem>
  </Tabs>

2. Add the correct contents to the Apache virtual host:

   * Centreon offers an example configuration file to enable HTTPS and serve Gorgone as a reverse proxy, available at: `/usr/share/centreon/examples/centreon.apache.https.conf`. You can copy and paste the contents.
   * However, if you have a custom configuration and cannot just copy and paste the example file, this is the required configuration to add inside your Apache virtual host:

    ```apache
        <IfModule mod_proxy_wstunnel.c>
            ProxyPass "/${base_uri}/gorgone/pullwss/websocket"  "ws://localhost:8087/"
            ProxyPassReverse "/${base_uri}/gorgone/pullwss/websocket"  "ws://localhost:8087/"
        </IfModule>
    ```

3. Restart Apache

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9/10" label="Alma / RHEL / Oracle Linux 9/10">
    
  ```shell
  systemctl restart httpd
  ``` 

  </TabItem>

  <TabItem value="Debian 13" label="Debian 13">

  ```shell
  systemctl restart apache2
  ```

  </TabItem>
  </Tabs>

## Step 3: Add the poller to the platform's configuration

You can now add a poller in a container. To do so, retrieve the correct command from the Centreon web interface. 
The poller will automatically connect to the central server using pullwss.

## If you delete all your pollers in containers

If in th efuture you sould delete all your pollers in containers, do not forget to undo the steps above.

## Troubleshooting the installation

If your installation does not work, there are multiple things you can check:

### Can the poller reach the central server on port 443?

You can check from the poller with the following command:

```shell
nc -zv <central_hostname> 443
```

### Is Gorgone correctly listening on port 8087?

```bash
curl --header "Connection: Upgrade" --header "Upgrade: websocket" http://localhost:8087/
```

The expected output is:

```text
HTTP/1.1 101 Switching Protocols
Connection: Upgrade
Sec-WebSocket-Accept: Kfh9QIsMVZcl6xEPYxPHzW8SZ8w=
Server: Mojolicious (Perl)
Upgrade: websocket
```

### Does Apache2 redirect the traffic to Gorgone correctly?

```bash
curl -v --header "Connection: Upgrade" --header "Upgrade: websocket" https://localhost:443/centreon/gorgone/pullwss/websocket
```

The expected output is:

```text
< HTTP/1.1 101 Switching Protocols
< Connection: Upgrade
< Sec-WebSocket-Accept: Kfh9QIsMVZcl6xEPYxPHzW8SZ8w=
< Server: Mojolicious (Perl)
< Upgrade: websocket
```

If you see an HTML page indicating `You need to enable JavaScript to run this app`, the Apache reverse proxy is not configured correctly, and the traffic is redirected to the Centreon web interface instead of to Gorgone. Check your Apache configuration and restart Apache after any change.

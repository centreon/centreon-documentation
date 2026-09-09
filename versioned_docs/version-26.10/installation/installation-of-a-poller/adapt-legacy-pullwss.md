---
id: adapt-legacy-pullwss
title: Adapting legacy pullwss poller setups
description: How to adapt legacy pullwss connections to the new pollers in containers configuration
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## When to use this procedure

This page describes what to do if the following conditions are met:

* You have upgraded an existing platform to version 26.10.
* This platform used some pollers in pullwss mode.
* You now wish to use pollers in containers. (If you do not wish to use pollers in containers, your old pollers in pullwss mode will work just fine, there is nothing to do.)

Depending on your setup, you can [configure your old pollers to use port 443 (recommended)](#configure-your-old-pollers-to-use-port-443-recommended), or [redirect traffic to Gorgone (not recommended)](#redirect-traffic-to-gorgone-not-recommended).

## Configure your old pollers to use port 443 (recommended)

1. Enable the central server to receive pullwss traffic from your pollers in containers, as described in [Pollers in containers prerequisites](./docker-requirement-central.md).
2. Update all your pollers to version 26.10.
3. On the poller, change the target port number to 443 in **/etc/centreon-gorgone/config.d/40-gorgoned.yaml** in the **pullwss** module configuration.

```json
modules:
    - name: pullwss
      package: "gorgone::modules::core::pullwss::hooks"
      enable: true
      ssl: true
      port: 443
      token: "secret_token"
      address: <your-central-address-here>
      ping: 1
```

## Redirect traffic to Gorgone (not recommended)

This section should be used only if you have many pollers whose configuration cannot be reconfigured easily as described above. In that case, edit the Apache configuration on your central server to keep the legacy pullwss port 8086 and redirect the traffic to Gorgone.

### Poller with HTTPS

1. Enable the central server to receive pullwss traffic from your pollers in containers, as described in [Pollers in containers prerequisites](./docker-requirement-central.md).
2. Update your pollers to version 26.10.
3. On the central server, execute the following commands to redirect the traffic from port 8086 to the central server's Gorgone.

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9/10" label="Alma / RHEL / Oracle Linux 9/10">

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

### Poller without HTTPS (plain HTTP, not recommended)

> This configuration is only for compatibility with old pollers that cannot be configured to use TLS. Please note that using pullwss without TLS is not recommended in production. Update your configuration as soon as possible.

1. Enable the central server to receive pullwss traffic from your pollers in containers, as described in [Pollers in containers prerequisites](./docker-requirement-central.md).
2. Update your pollers to version 26.10.
3. On the central server, execute the following commands to redirect the traffic from port 8086 to the central server's Gorgone.

  <Tabs groupId="os">
  <TabItem value="Alma / RHEL / Oracle Linux 9/10" label="Alma / RHEL / Oracle Linux 9/10">

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
  </Tabs>.

## Troubleshooting your setup

See [Troubleshooting the installation](./pollers-containers-prerequisites.md#troubleshooting-the-installation).

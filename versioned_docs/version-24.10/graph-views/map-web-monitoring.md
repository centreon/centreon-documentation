---
id: map-web-monitoring
title: Monitoring your MAP server
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page describes how to monitor your Centreon MAP server after installation.

> Please note that the endpoints specified on this page have been updated following the deprecation of the beta version. From 24.10, `beta` is replaced with `latest` in the paths.

## Install Centreon MAP Engine connector

Centreon provides a [Monitoring Connector and a plugin](/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-map-engine-actuator) to monitor your Centreon MAP server.

## Configure your services

Access your Centreon Web interface. Go to **Configuration > Host > Add**.

Fill in the basic information about your host and add the following host
templates:

- OS-Linux-SNMP-custom
- App-Jvm-Centreon-Map-Engine-custom

To monitor centreon-map JVM, please use following macro values:

| Name                    | Value                           |
| :---------------------- | :------------------------------ |
| ACTUATORCUSTOMMODE      | ```centreonmap```               |
| ACTUATORAPIURLPATH      | ```/centreon-map/api/latest```    |
| ACTUATORAPIUSERNAME     | Api username must be set        |
| ACTUATORAPIPASSWORD     | Api password must be set        |

> Remember to check the "Create Services linked to the Template too" checkbox.

You can now export your configuration, and your Centreon MAP server will be
monitored.

You can also simply check by accessing the following URL, which tells you
whether or not the server is up:

<Tabs groupId="sync">
<TabItem value="HTTP" label="HTTP">

```shell
http://<MAP_IP>:8080/centreon-map/api/latest/actuator/health.
```

</TabItem>
<TabItem value="HTTPS" label="HTTPS">

```shell
https://<MAP_IP>:8443/centreon-map/api/latest/actuator/health.
```

</TabItem>
</Tabs>

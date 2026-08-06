---
id: map-web-change-port
title: Changing the MAP server's port
description: "Change the default port used by the Centreon MAP server"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Mistakes when editing configuration files can lead to malfunctions of the software. We recommend that you make a backup of the file before editing it and that you only change the settings advised by Centreon.

By default, the Centreon MAP server is listening and sending information
through the port 8080. If you set the SSL 
(see [HTTPS/TLS Configuration](secure-your-map-platform.md#configure-httpstls-on-the-map-server)),
use port 8443.

You can change this port (e.g., if you have a firewall on your network
blocking these ports).

On your Centreon MAP server, stop the centreon-map service:

```shell
systemctl stop centreon-map
```

Edit the map-config.properties settings file located in
/etc/centreon-map:

```shell
vi /etc/centreon-map/map-config.properties
```

Add the following line in the MAP SERVER section:

```text
centreon-map.port=XXXX
```

> Replace *XXXX* with the port you want.

Then restart the Centreon MAP server:

```shell
systemctl start centreon-map
```

Wait for the Centreon MAP service to start completely (~30 sec to 1 minute).

Test that your server is up and accessible on the new port you defined by
entering the following URL in your web browser:

<Tabs groupId="sync" queryString>
<TabItem value="HTTP" label="HTTP">

```shell
http://<MAP_IP>:<8080>/centreon-map/api/latest/actuator/health
```

</TabItem>
<TabItem value="HTTPS" label="HTTPS">

```shell
https://<MAP_IP>:<8443>/centreon-map/api/latest/actuator/health
```

</TabItem>
</Tabs>

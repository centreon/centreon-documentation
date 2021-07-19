---
id: sc-servicenow-mid-server
title: ServiceNow MID Server
---

## How it works

* Every time a service or a host's state is checked, the event passes through Centreon Broker, which uses the functions defined in the Stream Connector to send state changes to ServiceNow MID Server.
* State changes can occur in case of an anomaly detection or metrics falling out of range.

### Filters

Several filters have been set in the ServiceNow MID Server Stream Connector:

* Only services and hosts' status changes are processed
* Only the HARD state type are processed
* If the host or the service is in downtime, acknowledged, or if notifications are disabled, it's not processed
* Pending states are ignored

### Data format

Here is an example of how the POST data are formatted by the Stream Connector for a host and a service event:

```json
[
  {
    "message_key": "24/0/1596634138",
    "type": "HOST",
    "resource": "HOST",
    "metric_name": "HOST",
    "severity": 0,
    "source_instance": "Centreon central server",
    "description": "OK: dummy\n",
    "time_of_event": "2020-08-05T13:30:55.000",
    "source": "Centreon",
    "node": "test-host_10",
    "additional_info": {
      "host_groups": [
        "Test-Machines",
        "Serveurs-Linux",
        "gold"
      ]
    }
  },
  {
    "message_key": "24/93/1595260330",
    "type": "test-svc",
    "resource": "test-svc",
    "metric_name": "test-svc",
    "severity": 2,
    "source_instance": "Centreon central server",
    "description": "CRITICAL: sample output\n",
    "time_of_event": "2020-08-06T08:26:13.000",
    "source": "Centreon",
    "node": "test-host_10",
    "additional_info": {
      "host_groups": [
        "Test-Machines",
        "Serveurs-Linux",
        "gold"
      ],
      "service_groups": [
        "Groupe-de-Services",
        "Autre-groupe-de-services"
      ]
    }
  }
]
```

## Requirements

* This integration requires at least one ServiceNow MID Server, and you must have been provided with one of the following types of account:
    * an account with `evt_mgmt_admin` privilege to be able to configure the event collector (according to [Configure the MID WebService Event Collector Context](https://docs.servicenow.com/bundle/newyork-it-operations-management/page/product/event-management/task/configure-em-context-extension.html#event-collection-extension)). 
    * an account entitled to log in to the JSONv2 API, whose URL looks like `http://{MID_Server_IP}:{MID_Web_Server_Port}/api/mid/em/jsonv2`.
* It is also necessary to use a Centreon account with either **admin privileges** or **Export configuration** and **Broker configuration** menu access in the WUI, as well as a **`root` access in command-line interface**.

## Support

If you need help with this integration, depending on how you are using Centreon, you can:

* **Commercial Edition customers**: please contact the [Centreon Support team](mailto:support@centreon.com).
* **Open Source Edition users** or **Centreon IT-100 users** (free versions): please reach our [Community Slack](https://centreon.github.io) where our users and staff will try to help you.

## Integration Walkthrough

### In ServiceNow MID Server

You can follow this link to find out how to [configure the MID WebService Event Collector Context](https://docs.servicenow.com/bundle/newyork-it-operations-management/page/product/event-management/task/configure-em-context-extension.html).

### In Centreon

#### Installation 

Login as `root` on the Centreon central server using your favorite SSH client.

In case your Centreon central server must use a proxy server to reach the Internet, you will have to export the `https_proxy` environment variable and configure `yum` to be able to install everything.

```bash
export https_proxy=http://my.proxy.server:3128
echo "proxy=http://my.proxy.server:3128" >> /etc/yum.conf
```

Now that your Centreon central server is able to reach the Internet, you can run:

```bash
yum install -y lua-curl epel-release
yum install -y luarocks
luarocks install luatz
```

These packages are necessary to run the script. Now let's download the script:

```bash
wget -O /usr/share/centreon-broker/lua/servicenow-mid-server.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/servicenow/servicenow-mid-server.lua
chmod 644 /usr/share/centreon-broker/lua/servicenow-mid-server.lua
```

The ServiceNow MID Server StreamConnnector is now installed on your Centreon central server!

#### Broker configuration

1. Login to the Centreon WUI using an administrator account.
2. Navigate to the **Configuration** > **Pollers** menu and select **Broker configuration**.
3. Click on the **central-broker-master** broker configuration object and navigate to the **Output** tab.
4. Add a new **Generic - Stream connector** output.
5. Name it as you want (eg. **ServiceNow**) and set the right path for the LUA script: `/usr/share/centreon-broker/lua/servicenow-mid-server.lua`.
6. Add at least the following parameters:

| Name               | Type   | Value                                                                                           |
|--------------------|--------|-------------------------------------------------------------------------------------------------|
| `MID_Servers_List` | String | Comma-separated MID Servers list with protocol and port (eg. `http://srv1:80,https://srv2:443`) |
| `MID_Login`        | String | Login for basic authentication on MID Server JSON v2 API                                        |
| `MID_Password`     | String | Password for basic authentication on MID Server JSON v2 API                                     |

7. Save your configuration, then navigate to the **Configuration** > **Pollers** menu and select **Pollers**.
8. Select the **Central** poller and click on **Export configuration**.
9. Keep **Generate Configuration Files** and **Run monitoring engine debug (-v)** checked and select **Move Export Files** and then click on the **Export** button.
10. Restart the `cbd` service:

```bash
systemctl restart cbd
```

Now your central server has loaded the ServiceNow MID Server Stream Connector and has started to send data!

> To make sure that everything goes fine, you should have a look at `central-broker-master.log` and `stream-connector-snow-mid-server.log`, both located in `/var/log/centreon-broker`.

#### Advanced configuration

**Parameters table**

| Name                | Type   | Value example                                    | Explanation                                                                                  |
| ------------------- | ------ | ------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| `http_proxy_string` | String | `http://your.proxy.server:3128`                  | Proxy string needed to reach the Internet in HTTP/HTTPS                                      |
| `log_level`         | Number | 2 (default value)                                | Verbosity level for logs 0: errors only 1: +warnings, 2: +verbose, 3: +debug                 |
| `log_path`          | String | `/var/log/centreon-broker/my-custom-logfile.log` | Log file full path and name                                                                  |
| `max_buffer_size`   | Number | 1 (default value)                                | Number of events to enqueue in buffer before sending                                         |
| `max_buffer_age`    | Number | 5 (default value)                                | Maximum number of seconds before sending an event when `max_buffer_size` hasn't been reached |

**Remarks**

* The default value of 2 for `log_level` is fine for initial troubleshooting, but can generate a huge amount of logs if you monitor a lot of hosts. In order to get less log messages, you should tune this parameter.
* The default value of 1 for `max_buffer_size` works fine and ensures the best response times. You might want to tune it (*ie.* increase it) if you have an important amount of data to send to ServiceNow MID Server.

---------------

## How to Uninstall

1. Login to the Centreon WUI using an administrator account.
2. Navigate to the **Configuration** > **Pollers** menu and select **Broker configuration**.
3. Click on the **central-broker-master** broker configuration object and navigate to the **Output** tab.
4. Delete the **Generic - Stream connector** output by clicking on the red circled cross at the end of the line.
5. Save your configuration, then navigate to the **Configuration** > **Pollers** menu and select **Pollers**.
6. Select the **Central** poller and click on **Export configuration**.
7. Keep **Generate Configuration Files** and **Run monitoring engine debug (-v)** checked and select **Move Export Files** and then click on the **Export** button.
8. Restart the `cbd` service:

```bash
systemctl restart cbd
```

The Stream Connector is not loaded anymore!

9. Optionally, you can even delete the script file:

```bash
rm -f /usr/share/centreon-broker/lua/servicenow-mid-server.lua
```


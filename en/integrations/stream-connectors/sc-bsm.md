---
id: bsm
title: BSM
---

## BSM + Centreon Integration Benefits

BSM Stream Connector sends events related data from **Centreon** to **Micro Focus BSM** (Business Service Management).

## How it Works

* Every time a service or a host's state is checked, the event passes through Centreon Broker, which uses the functions defined in the Stream Connector to send state changes to BSM.

## Requirements

* Integration with BSM requires the ability to access a **webservice on you BSM platform**. Please contact your BSM expert for this part.
* A Centreon account is required with either **admin privileges** or **Export configuration** and **Broker configuration** menu access in the WUI.
* A **`root` access in command-line interface on Centreon central server** is required as well.

## Support

If you need help with this integration, depending on how you are using Centreon, you can:

* **Commercial Edition customers**: please contact the [Centreon Support team](mailto:support@centreon.com).
* **Open Source Edition users** or **Centreon IT-100 users** (free versions): please reach our [Community Slack](https://centreon.github.io) where our users and staff will try to help you.

## Integration Walkthrough

### Installation 

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
luarocks install luaxml
```

This package is necessary for the script to run. Now let's download the script:

```bash
wget -O /usr/share/centreon-broker/lua/bsm_connector.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/bsm/bsm_connector.lua
chmod 644 /usr/share/centreon-broker/lua/bsm_connector.lua
```

The BSM StreamConnnector is now installed on your Centreon central server!

### Broker configuration

1. Login to the Centreon WUI using an administrator account.
2. Navigate to the **Configuration** > **Pollers** menu and select **Broker configuration**.
3. Click on the **central-broker-master** broker configuration object and navigate to the **Output** tab.
4. Add a new **Generic - Stream connector** output.
5. Name it as you want (eg. **BSM**) and set the right path for the LUA script: `/usr/share/centreon-broker/lua/bsm_connector.lua`.
6. The parameter `http_server_url` has to be set according to your BSM platforms characteristics:

| Name              | Type   | Value                                                             |
|-------------------|--------|-------------------------------------------------------------------|
| `http_server_url` | String | `https://<my.bsm.server>:30005/bsmc/rest/events/<my-webservice>/` |

7. Save your configuration, then navigate to the **Configuration** > **Pollers** menu and select **Pollers**.
8. Select the **Central** poller and click on **Export configuration**.
9. Keep **Generate Configuration Files** and **Run monitoring engine debug (-v)** checked and select **Move Export Files** and then click on the **Export** button.
10. Restart the `cbd` service:

```bash
systemctl restart cbd
```

Now your central server has loaded the BSM Stream Connector and has started to send data!

> To make sure that everything goes fine, you should have a look at `central-broker-master.log` and `stream-connector-bsm.log`, both located in `/var/log/centreon-broker`.

#### Advanced configuration

**Parameters table**

| Name                | Type   | Value example                                                     | Explanation                                                                                  |
|---------------------|--------|-------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| `http_server_url`   | String | `https://<my.bsm.server>:30005/bsmc/rest/events/<my-webservice>/` | URL of your BSM platform                                                                     |
| `http_proxy_string` | String | `http://your.proxy.server:3128`                                   | Proxy string needed to reach the Internet in HTTP/HTTPS                                      |
| `source_ci`         | String | `Centreon` (default value)                                        | Name used to identify the transmitter                                                        |
| `log_level`         | Number | 2 (default value)                                                 | Verbosity level for logs 0: errors only 1: +warnings, 2: +verbose, 3: +debug                 |
| `log_path`          | String | `/var/log/centreon-broker/my-custom-logfile.log`                  | Log file full path and name                                                                  |
| `max_buffer_size`   | Number | 1 (default value)                                                 | Number of events to enqueue in buffer before sending                                         |
| `max_buffer_age`    | Number | 5 (default value)                                                 | Maximum number of seconds before sending an event when `max_buffer_size` hasn't been reached |

**Remarks**

* The default value of 2 for `log_level` is fine for initial troubleshooting, but can generate a huge amount of logs if you monitor a lot of hosts. In order to get less log messages, you should tune this parameter.
* The default value of 1 for `max_buffer_size` works fine and ensures the best response times. You might want to tune it (*ie.* increase it) if you have an important amount of data to send to BSM.

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
rm -f /usr/share/centreon-broker/lua/bsm_connector.lua
```


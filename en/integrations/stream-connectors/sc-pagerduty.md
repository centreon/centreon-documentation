---
id: pagerduty
title: PagerDuty
---

## PagerDuty + Centreon Integration Benefits

* Notify on-call system or application administrators when an alert is detected by Centreon.
* Incidents will automatically resolve in PagerDuty when Centreon detects that the check point is back to normal.
* Create high and low urgency incidents based on the state of the alert.
* Send metrics when available to give more insight about the alert.

## How it Works

* Every time a service or a host's state is checked, the event passes through Centreon Broker, which loads the Stream Connector to send state changes.
* State changes can occur in case of an anomaly detection or metrics falling out of range.
* Once the check point is back to normal, a resolve event will be sent to the PagerDuty service to resolve the alert.

## Requirements

* PagerDuty integrations require an **Admin base role** for account authorization. If you do not have this role, please reach out to an Admin or Account Owner within your organization to configure the integration.
* It is also necessary to use a Centreon account with either **admin privileges** or **Export configuration** and **Broker configuration** menu access in the WUI, as well as a **`root` access in command-line interface**.

## Support

If you need help with this integration, depending on how you are using Centreon, you can:

* **Commercial Edition customers**: please contact the [Centreon Support team](mailto:support@centreon.com).
* **Open Source Edition users** or **Centreon IT-100 users** (free versions): please reach our [Community Slack](https://centreon.github.io) where our users and staff will try to help you.

## Integration Walkthrough

### In PagerDuty

There are two ways to integrate with PagerDuty: via Global Event Routing or on a PagerDuty Service.

If you are adding this integration to an existing PagerDuty service, please skip to the Integrating with a PagerDuty Service section of this guide.

#### Integrating With Global Event Routing

Integrating with Global Event Routing enables you to route events to specific services based on the payload of the event from your tool. If you would like to learn more, please visit [this article on Global Event Routing](https://community.pagerduty.com/forum/t/service-configuration-guide/1660).

1. From the Configuration menu, select Event Rules.
2. On the Event Rules screen, click on the arrow next to Incoming Event Source to display the Integration key information. Copy your Integration Key. This is the same integration key you will use for any other tool you want to integrate with using event rules. When you have finished setting up the integration in your tool, you will return to this interface to specify how to route events from your tool to services in PagerDuty.

![](https://pdpartner.s3.amazonaws.com/ig-template-incoming-event-source-key.png)

#### Integrating With a PagerDuty Service

1. From the **Configuration** menu, select **Services**.
2. There are two ways to add an integration to a service:
   * **If you are adding your integration to an existing service**: Click the **name** of the service you want to add the integration to. Then, select the **Integrations** tab and click the **New Integration** button.
   * **If you are creating a new service for your integration**: Please read this documentation in section [Configuring Services and Integrations](https://support.pagerduty.com/docs/services-and-integrations#section-configuring-services-and-integrations) and follow the steps outlined in the [Create a New Service](https://support.pagerduty.com/docs/services-and-integrations#section-create-a-new-service) section, selecting **Centreon** as the **Integration Type** in step 4. Continue with the "[In Centreon](#in-centreon)" section once you have finished these steps.
3. Enter an **Integration Name** in the format `monitoring-tool-service-name` (e.g. `Centreon-Shopping-Cart`) and select **Centreon** from the Integration Type menu.
4. Click the **Add Integration** button to save your new integration. You will be redirected to the Integrations tab for your service.
5. An **Integration Key** will be generated on this screen. Keep this key saved in a safe place, as it will be used when you configure the integration with Centreon in the next section.

![](https://pdpartner.s3.amazonaws.com/ig-template-copy-integration-key.png)

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

These packages are necessary for the script to run. Now let's download the script:

```bash
wget -O /usr/share/centreon-broker/lua/pagerduty.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/pagerduty/pagerduty.lua
chmod 644 /usr/share/centreon-broker/lua/pagerduty.lua
```

The PagerDuty StreamConnnector is now installed on your Centreon central server!

#### Broker configuration

1. Login to the Centreon WUI using an administrator account.
2. Navigate to the **Configuration** > **Pollers** menu and select **Broker configuration**.
3. Click on the **central-broker-master** broker configuration object and navigate to the **Output** tab.
4. Add a new **Generic - Stream connector** output.
5. Name it as you want (eg. **PagerDuty**) and set the right path for the LUA script: `/usr/share/centreon-broker/lua/pagerduty.lua`.
6. Add at least one string parameter containing your PagerDuty routing key/token (the parameter name *must be* `pdy_routing_key`):

| Name              | Type   | Value                   |
| ----------------- | ------ | ----------------------- |
| `pdy_routing_key` | String | `<paste your key here>` |

7. Save your configuration, then navigate to the **Configuration** > **Pollers** menu and select **Pollers**.
8. Select the **Central** poller and click on **Export configuration**.
9. Keep **Generate Configuration Files** and **Run monitoring engine debug (-v)** checked and select **Move Export Files** and then click on the **Export** button.
10. Restart the `cbd` service:

```bash
systemctl restart cbd
```

Now your central server has loaded the PagerDuty Stream Connector and has started to send data!

To make sure that everything goes fine, you should have a look at `central-broker-master.log` and `stream-connector-pagerduty.log`, both located in `/var/log/centreon-broker`.

#### Advanced configuration

**Parameters table**

| Name                | Type   | Value example                                    | Explanation                                                                                  |
| ------------------- | ------ | ------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| `http_proxy_string` | String | `http://your.proxy.server:3128`                  | Proxy string needed to reach the Internet in HTTP/HTTPS                                      |
| `pdy_centreon_url`  | String | `http://your.centreon.server`                    | URL of your Centreon server                                                                  |
| `log_level`         | Number | 2 (default value)                                | Verbosity level for logs 0: errors only 1: +warnings, 2: +verbose, 3: +debug                 |
| `log_path`          | String | `/var/log/centreon-broker/my-custom-logfile.log` | Log file full path and name                                                                  |
| `max_buffer_size`   | Number | 1 (default value)                                | Number of events to enqueue in buffer before sending                                         |
| `max_buffer_age`    | Number | 5 (default value)                                | Maximum number of seconds before sending an event when `max_buffer_size` hasn't been reached |

**Remarks**

* The default value of 2 for `log_level` is fine for initial troubleshooting, but can generate a huge amount of logs if you monitor a lot of hosts. In order to get less log messages, you should tune this parameter.
* The default value of 1 for `max_buffer_size` works fine and ensures the best response times. You might want to tune it (*ie.* increase it) if you have an important amount of data to send to PagerDuty.

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
rm -f /usr/share/centreon-broker/lua/pagerduty.lua
```


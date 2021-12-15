---
id: applications-slack-restapi
title: Slack
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack assets

### Monitored objects

The Pack Slack collects metrics for:
* Channels
* Members
* Services

### Discovery rules

<Tabs groupId="operating-systems">
<TabItem value="Services" label="Services">

| Rule name                       | Description                                |
| ------------------------------- | :----------------------------------------- |
| App-Slack-Restapi-Services-Name | Discover services and monitor their status |

</TabItem>
</Tabs>

## Monitored metrics

<Tabs groupId="operating-systems">
<TabItem value="Countchannels" label="Countchannels">

| Metric name                            | Description                      | Unit |
| :------------------------------------- | :------------------------------- | :--- |
| channels.total.count                   | Number of channels               |      |
| *channel\_name*\#channel.members.count | Number of members in the channel |      |

</TabItem>
<TabItem value="Countmembers" label="Countmembers">

| Metric name         | Description     | Unit |
| :------------------ | :-------------- | :--- |
| members.total.count | Number of users |      |

</TabItem>
<TabItem value="Services" label="Services">

| Metric name          | Description                            | Unit |
| :------------------- | :------------------------------------- | :--- |
| slack.services.count | Number of services currently monitored |      |
| status               | Status of the service                  |      |

</TabItem>
</Tabs>

## Prerequisites

The Centreon Poller that will be used to monitor Slack must be able to reach the related servers (slack.com) on the Internet
using the TCP/443 HTTPS port. The plugin allows you to use a proxy if needed.

| Service        | API Token ? | Scope         |
| :------------- | :---------- | :------------ |
| count-channels | Yes         | channels.read |
| count-members  | Yes         | users.read    |
| services       | No          |               |

## Setup

<Tabs groupId="licence-systems">
<TabItem value="online" label="Online License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Slack-Restapi
```

2. On the Centreon Web interface, install the *Slack* Centreon Pack on the **Configuration > Plugin Packs > Manager** page

</TabItem>
<TabItem value="offline" label="Offline License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Slack-Restapi
```

2. Install the Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-slack-restapi
```

3. On the Centreon Web interface, install the *Slack* Centreon Pack on the **Configuration > Plugin Packs > Manager** page

</TabItem>
</Tabs>

## Host configuration

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Fill the "IP Address / DNS" field with a localhost IP address (e.g 127.0.0.1)
* Select the *App-Slack-Restapi-custom*

| Mandatory | Name                 | Description                                                                        |
| :-------- | :------------------- | :--------------------------------------------------------------------------------- |
|           | SLACKAPITOKEN        | Slack API Token                                                                    |
|           | SLACKAPIEXTRAOPTIONS | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

> This template will deploy one "Global" Service that will monitor all of the services.
> Use the **Service Discovery** feature if you wish to get one Service per slack service.

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account and test the Plugin
by running the following command (Some of the parameters such as ```proxyurl``` have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_slack_restapi.pl \
--plugin='apps::slack::restapi::plugin' \
--mode=services \
--proxyurl='http://myproxy.mycompany.org:8080' \
--filter-name='Connections|Messaging' \
--warning-status='%{status} eq "active" and %{type} eq "incident"' \
--critical-status='%{status} eq "active" and %{type} eq "outage"' \
--verbose
```

Expected command output is shown below:

```bash
OK: All slack services are ok | 'slack.services.count'=2;;;0;
Service 'Connections' status is ok
Service 'Messaging' status is ok
```

In this example, the Plugin gets the status Slack services (```--plugin='apps::slack::restapi::plugin' --mode=services```)
by requesting the official Slack API. Only the status of the *Connections* and *Messaging* services will be displayed (```--filter-name='Connections|Messaging'```).

This command would trigger a WARNING alert if one of the service is reported as *degraded* (```--warning-status='%{status} eq "active" and %{type} eq "incident"'```)
and a CRITICAL alert for a total outage on an service (```--critical-status='%{status} eq "active" and %{type} eq "outage"'```).

All the filters that can be used as well as all the available thresholds parameters can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_slack_restapi.pl \
--plugin='apps::slack::restapi::plugin' \
--mode=services \
--help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins)

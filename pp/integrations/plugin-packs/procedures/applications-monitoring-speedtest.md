---
id: applications-monitoring-speedtest
title: Speedtest
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack Speedtest brings a host template:
* App-Monitoring-Speedtest-custom

It brings the following service template:

| Service Alias      | Service Template                            | Default | Discovery |
|:-------------------|:--------------------------------------------|:--------|:----------|
| Internet-Bandwidth | App-Monitoring-Speedtest-Internet-Bandwidth |         |           |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Internet-Bandwidth" label="Internet-Bandwidth">

| Metric name                               | Description                                                                             | Unit  |
| :---------------------------------------- | :-------------------------------------------------------------------------------------- | :---- |
| ping.time.milliseconds                    | Round trip time for the packet to reach the test serveur and for the response to return | ms    |
| internet.bandwidth.download.bitspersecond | Download speed                                                                          | b/s   |
| internet.bandwidth.upload.bitspersecond   | Upload speed                                                                            | b/s   |

</TabItem>
</Tabs>

## Prerequisites

`speedtest.net` must be reachable from the Centreon Poller.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Speedtest** resources:

```bash
yum install centreon-plugin-Applications-Monitoring-Speedtest
```

2. On the Centreon web interface, install the **Speedtest** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Speedtest** resources:

```bash
yum install centreon-plugin-Applications-Monitoring-Speedtest
```

2. Install the **Speedtest** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-monitoring-speedtest
```

3. On the Centreon web interface, install the **Speedtest** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address / DNS**.
* Apply the **App-Monitoring-Speedtest-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name                      | Description                                                                |
| :-------- | :------------------------ | :------------------------------------------------------------------------- |
|           | PROTOCOLWHOISEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_speedtest.pl \
    --plugin=apps::monitoring::speedtest::plugin \
    --mode=internet-bandwidth
```

The expected command output is shown below:

```bash
OK: speedtest ping time: 35 ms, download: 97.15 Mb/s, upload: 105.55 Mb/s | 'ping.time.milliseconds'=35.768ms;;;0; 'internet.bandwidth.download.bitspersecond'=97153647b/s;;;0; 'internet.bandwidth.upload.bitspersecond'=105554658b/s;;;0;
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_speedtest.pl \
    --plugin=apps::monitoring::speedtest::plugin \
    --mode=internet-bandwidth
    --help
```

All available modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_speedtest.pl \
    --plugin=apps::monitoring::speedtest::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md).

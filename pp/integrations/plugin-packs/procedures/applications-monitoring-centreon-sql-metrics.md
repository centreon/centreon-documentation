---
id: applications-monitoring-centreon-sql-metrics
title: Centreon SQL Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

This Pack ships metrics collected from the Centreon SQL real-time database. Get a complete
overview of its virtual curves capabilities [here](https://thewatch.centreon.com/product-how-to-21/get-to-know-app-centreon-sql-metric-pack-and-start-building-some-virtual-curves-296)

## Pack Assets

### Templates

The Centreon Plugin Pack Centreon SQL Metrics brings a host template:

* App-Monitoring-Centreon-SQL-Metrics-custom

It brings the following service templates:

| Service Alias   | Service Template                            | Service Description                         | Default |
| :-------------- | :------------------------------------------ | :------------------------------------------ | :------ |
| Poller-Delay    | App-Monitoring-Centreon-SQL-Poller-Delay    | Check the poller lag delay                  |         |
| Virtual-Curve   | App-Monitoring-Centreon-SQL-Virtual-Curves  | Mix your metrics from several services      |         |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Poller-Delay" label="Poller-Delay">

| Metric Name                    | Unit   |
| :----------------------------- | :----- |
| centreon.poller.delay.seconds  |    s   |

</TabItem>
<TabItem value="Virtual-Curve" label="Virtual-Curve">

Metrics depend on the service configuration. Check our [The Watch blog post](https://thewatch.centreon.com/product-how-to-21/get-to-know-app-centreon-sql-metric-pack-and-start-building-some-virtual-curves-296).
</TabItem>
</Tabs>

## Prerequisites

The poller executing the check must be able to connect to the centreon_storage database over the 3306/TCP port with values supplied through **--username** and **--password** options.

The SQL user must hold required privileges to "SELECT" data within **index_data**, **metrics**, and **instances** tables tables in the **centreon_storage** database.

When using the **Virtual-Curve** service, the configuration file must be readable by the **centreon-engine** user. 

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon plugin package on the central server:

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-SQL-Metrics
```

2. On the Centreon web interface, install the **Centreon SQL Metrics** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon plugin package on the central server:

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-SQL-Metrics
```

2. Install the **Centreon SQL Metrics** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-applications-monitoring-centreon-sql-metrics
```

3. On the Centreon web interface, install the **Centreon SQL Metrics** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** and **IP Address/DNS** fields according to your Centreon database server server settings.
* Apply the **App-Monitoring-Centreon-SQL-Metrics-custom** to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name                     | Description                                                  |
| :-------- | :----------------------- | :----------------------------------------------------------- |
|     x     | CENTREONDATABASEUSER     | Username of the Centreon centreon_storage database           |
|     x     | CENTREONDATABASEPASSWORD | Password of the Centreon centreon_storage database           |
|           | EXTRAOPTIONS             | Any additional option.                                       |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the **centreon-engine** user account (`su - centreon-engine`) and test the plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins/centreon_centreon_sql_metrics.pl \
    --plugin=database::mysql::plugin \
    --dyn-mode=apps::centreon::sql::mode::pollerdelay \
    --host=10.25.14.139 \
    --username=readerstorage \
    --password=rostorage
```

The expected command output is shown below:

```bash
OK: All poller delay for last update are ok | 'Central#centreon.poller.delay.seconds'=30s;;;; 'poller#centreon.poller.delay.seconds'=14s;;;;
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_centreon_sql_metrics.pl \
    --plugin=database::mysql::plugin \
    --dyn-mode=apps::centreon::sql::mode::pollerdelay \
    --help
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon plugins in the [dedicated page](../getting-started/how-to-guides/troubleshooting-plugins.md).
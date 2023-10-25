---
id: network-aruba-orchestrator-restapi
title: Aruba Orchestrator Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Monitored Objects

The Centreon Pack **Aruba Orchestrator** brings a host template:
* Net-Aruba-Orchestrator-Restapi-custom

It brings the following service templates:

| Service Alias | Service Template                          | Description      | Default |
|:--------------|:------------------------------------------|:-----------------|:--------|
| Alarms        | Net-Aruba-Orchestrator-Alarms-Restapi     | Check alarms     | X       |
| Appliances    | Net-Aruba-Orchestrator-Appliances-Restapi | Check appliances | X       |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Rule Name                    | Description         |
|:-----------------------------|:--------------------|
| Aruba Orchestrator Appliance | Discover appliances |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Metric name                    | Unit  |
| :----------------------------- | :---- |
| alerms.problems.current.count  |       |
| alarms.severity.minor.count    |       |
| alarms.severity.warning.count  |       |
| alarms.severity.major.count    |       |
| alarms.severity.critical.count |       |

</TabItem>
<TabItem value="Appliances" label="Appliances">

| Metric name               | Unit  |
| :------------------------ | :---- |
| appliances.detected.count |       |
| appliance status          |       |

</TabItem>
</Tabs>

## Prerequisites

To control your Aruba Orchestrator, the Rest API must be configured.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon package on every Centreon poller expected to monitor **Aruba Orchestrator** resources:

```bash
yum install centreon-plugin-Network-Aruba-Orchestrator-Restapi
```

2. On the Centreon web interface, install the **Aruba Orchestrator Rest API** Centreon Pack on the **Configuration > Monitoring Connector Manager** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor **Aruba Orchestrator** resources:

```bash
yum install centreon-plugin-Network-Aruba-Orchestrator-Restapi
```

2. Install the **Aruba Orchestrator Rest API** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-aruba-orchestrator-restapi
```

3. On the Centreon web interface, install the **Aruba Orchestrator Rest API** Centreon Pack on the **Configuration > Monitoring Connector Manager** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** and **IP Address / DNS** fields according to your **Aruba Orchestrator** equipment settings.
* Apply the **Net-Aruba-Orchestrator-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name            | Description                                                                |
| :-------- | :-------------- | :------------------------------------------------------------------------- |
| X         | APIPORT         | Port used (Default: 443)                                                   |
| X         | APIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | APIACCESSTOKEN  | API token                                                                  |
|           | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_aruba_orchestrator_restapi.pl \
    --plugin=network::aruba::orchestrator::restapi::plugin \
    --mode=appliances \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-token='mytoken' \
    --verbose
```

The expected command output is shown below:

```bash
OK: appliances detected: 2 - All appliances are ok | 'appliances.detected.count'=2;;;0;
appliance 'EU-FRA-IDF-PARIS-ARCHIVES-SP2' [group: Network > France > Paris] state: normal
appliance 'EU-FRA-IDF-SPATHUS-ARCHIVES-SP2' [group: Network > France > Saint-Pathus] state: normal
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aruba_orchestrator_restapi.pl \
    --plugin=network::aruba::orchestrator::restapi::plugin \
    --mode=appliances \
    --help
```

All available modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aruba_orchestrator_restapi.pl \
    --plugin=network::aruba::orchestrator::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

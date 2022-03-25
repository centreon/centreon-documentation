---
id: applications-monitoring-iplabel-ekara-restapi
title: IP-Label Ekara Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Plugin Pack **IP-Label Ekara Rest API** brings 1 host template:

* App-Monitoring-Iplabel-Ekara-Restapi-custom

It brings the following Service Templates:

| Service Alias   | Service Template                                     | Service Description            | Default |
|:----------------|:-----------------------------------------------------|:-------------------------------|:--------|
| Incidents       | App-Monitoring-Iplabel-Ekara-Incidents-Restapi       | Check IP-Label Ekara incidents | X       |
| Scenario-Status | App-Monitoring-Iplabel-Ekara-Scenario-Status-Restapi | Check IP-Label Ekara scenarios | X       |

### Discovery rules

The Centreon Plugin-Pack **IP-Label Ekara Rest API** includes a Host Discovery provider to automatically discover the Ekara scenarios and add them as hosts to the Centreon inventory.
This provider is named **IP-Label Ekara**.

More information about the Host Discovery module is available in the Centreon documentation:
[Host Discovery](/docs/monitoring/discovery/hosts-discovery)

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Incidents" label="Incidents">

| Metric Name                         | Unit   |
|:------------------------------------|:-------|
| ekara.incidents.current.total.count | count  |
| ekara.incident.duration.seconds     | s      |
| incident-severity                   | string |
| incident-status                     | string |
| trigger-status                      | string |

</TabItem>
<TabItem value="Scenario-Status" label="Scenario-Status">

| Metric Name                                    | Unit   |
|:-----------------------------------------------|:-------|
| scenario.availability.percentage               | %      |
| scenario-status                                | string |
| scenario.time.interaction.milliseconds         | ms     |
| scenario.time.allsteps.total.milliseconds      | ms     |
| *steps*#scenario.step.time.milliseconds        | ms     |
| *steps*#scenario.steps.time.total.milliseconds | ms     |

</TabItem>
</Tabs>

## Prerequisites

* A valid user account (username/password) with RO rights is required to authenticate against the Ekara Rest API
* The Ekara API must be reachable on port TCP/443 from the Centreon Poller

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **IP-Label Ekara** resources:

  ```bash
  yum install centreon-plugin-Applications-Monitoring-Iplabel-Ekara-Restapi
  ```

2. On the Centreon Web interface, install the **IP-Label Ekara Rest API** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **IP-Label Ekara** resources:

  ```bash
  yum install centreon-plugin-Applications-Monitoring-Iplabel-Ekara-Restapi
  ```

2. Install the **IP-Label Ekara Rest API** Centreon Plugin Pack RPM on the Centreon Central server:

  ```bash
  yum install centreon-pack-applications-monitoring-iplabel-ekara-restapi
  ```

3. On the Centreon Web interface, install the **IP-Label Ekara Rest API** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Fill the **Name** & **Alias**
* Set the **IP Address/DNS** to **127.0.0.1**.
* Select the **App-Monitoring-Iplabel-Ekara-Restapi-custom** template to apply to the Host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro                | Description                                                                            |
|:------------|:---------------------|:---------------------------------------------------------------------------------------|
|             | DUMMYOUTPUT          | This is a dummy check                                                                  |
|             | DUMMYSTATUS          | OK                                                                                     |
|             | EKARAAPIEXTRAOPTIONS | Any extra option you may want to add to every command\_line (eg. a --verbose flag)     |
| X           | EKARAAPIHOSTNAME     | api.ekara.ip-label.net                                                                 |
| X           | EKARAAPIUSERNAME     |                                                                                        |
| X           | EKARAAPIPASSWORD     |                                                                                        |
| X           | EKARAAPIPORT         | 443                                                                                    |
| X           | EKARAAPIPROTO        | https                                                                                  |
|             | FILTERID             |                                                                                        |
|             | FILTERNAME           |                                                                                        |
|             | PROXYURL             |                                                                                        |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the Plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_iplabel_ekara_restapi.pl \
    --plugin=apps::monitoring::iplabel::ekara::restapi::plugin \
    --mode=scenarios \
    --hostname='api.ekara.ip-label.net' \
    --api-username='johndoe@company.com' \
    --api-password='MyPassw0rd' \
    --port='443' \
    --proto='https' \
    --proxyurl='' \
    --timeframe='900' \
    --filter-name='MyScenario' \
    --filter-id='' \
    --verbose
```

The expected command output is shown below:

```bash
OK: Scenario 'MyScenario': status: Success (1), availability: 100% | 'MyScenario#scenario.availability.percentage'=100%;;;0;100
Scenario 'MyScenario':
    status: Success (1), availability: 100%
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_iplabel_ekara_restapi.pl \
    --plugin=apps::monitoring::iplabel::ekara::restapi::plugin \
    --mode=scenarios \
    --help
```

All available options for a given mode can be displayed by adding the
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_monitoring_iplabel_ekara_restapi.pl \
    --plugin=apps::monitoring::iplabel::ekara::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the API-based Plugins in
the [dedicated chapter](../tutorials/troubleshooting-plugins.md#http-and-api-checks)
of the Centreon documentation.

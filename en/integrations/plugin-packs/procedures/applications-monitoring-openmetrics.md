---
id: pp-applications-monitoring-openmetrics
title: OpenMetrics
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Sep 12 2019 |


## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Monitoring-Openmetrics

## Centreon Configuration

### Create a host using the appropriate template

#### Checking using a web page

Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
    <thead>
        <tr class="header">
            <th align="left" width="10%">Field</th>
            <th align="left" width="20%">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left"><p>Name</p></td>
            <td align="left"><p><em>Name of the host</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Alias</p></td>
            <td align="left"><p><em>Description</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>IP Address / DNS</p></td>
            <td align="left"><p><em>Can be localhost</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Monitored from</p></td>
            <td align="left"><p><em>Poller used to monitor</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Templates</p></td>
            <td align="left"><p>App-Monitoring-Openmetrics-Web</p></td>
        </tr>
    </tbody>
</table>

The following host macros should be set as shown:

<table>
    <thead>
        <tr class="header">
            <th align="left" width="10%">Macro</th>
            <th align="left" width="20%">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left"><p>OPENMETRICSPORT</p></td>
            <td align="left"><p><em>OpenMetrics web page port</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>OPENMETRICSPROTO</p></td>
            <td align="left"><p><em>OpenMetrics web page protocol</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>OPENMETRICSURLPATH</p></td>
            <td align="left"><p><em>OpenMetrics web page url path</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>OPENMETRICSUSERNAME</p></td>
            <td align="left"><p><em>OpenMetrics web page username (if needed)</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>OPENMETRICSPASSWORD</p></td>
            <td align="left"><p><em>OpenMetrics web page password(if needed)</em></p></td>
        </tr>
    </tbody>
</table>

Check the *Create Services linked to the Template too* box and click on the *Save* button.

The following service will be created:

* Scrape-Metrics

#### Checking using a remote file

Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
    <thead>
        <tr class="header">
            <th align="left" width="10%">Field</th>
            <th align="left" width="20%">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left"><p>Name</p></td>
            <td align="left"><p><em>Name of the host</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Alias</p></td>
            <td align="left"><p><em>Description</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>IP Address / DNS</p></td>
            <td align="left"><p><em>Can be localhost</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Monitored from</p></td>
            <td align="left"><p><em>Poller used to monitor</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Templates</p></td>
            <td align="left"><p>App-Monitoring-Openmetrics-File</p></td>
        </tr>
    </tbody>
</table>

The following host macros should be set as shown:

<table>
    <thead>
        <tr class="header">
            <th align="left" width="10%">Macro</th>
            <th align="left" width="20%">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left"><p>OPENMETRICSFILEPATH</p></td>
            <td align="left"><p><em>OpenMetrics file path on remote host</em></p></td>
        </tr>
    </tbody>
</table>

Check the *Create Services linked to the Template too* box and click on the *Save* button.

The following service will be created:

* Scrape-Metrics

### Set the service macros

The following service macros should be set as shown:

<table>
    <thead>
        <tr class="header">
            <th align="left" width="10%">Macro</th>
            <th align="left" width="20%">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left"><p>FILTERMETRICS</p></td>
            <td align="left"><p><em>Name of the metrics to filter on</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>WARNING</p></td>
            <td align="left"><p><em>Warning threshold</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>CRITICAL</p></td>
            <td align="left"><p><em>Critical threshold</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>INSTANCE</p></td>
            <td align="left"><p><em>Label from dimensions to get the instance value from</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>FILTERINSTANCE</p></td>
            <td align="left"><p><em>Filter on some instance</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>SUBINSTANCE</p></td>
            <td align="left"><p><em>Set the label from dimensions to get the subinstance value from</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>FILTERSUBINSTANCE</p></td>
            <td align="left"><p><em>Filter on some subinstance</em></p></td>
        </tr>
    </tbody>
</table>

Examples on command line:

`# perl centreon_plugins.pl --plugin=apps::monitoring::openmetrics::plugin --mode=scrape-metrics
--custommode=web --hostname=10.2.3.4 --port=9100 --verbose --filter-metrics='node_network_up'
--critical='0:0' --instance='device' --new-perfdata`

`# perl centreon_plugins.pl --plugin=apps::monitoring::openmetrics::plugin --mode=scrape-metrics
--custommode=web --hostname=10.2.3.4 --port=9100 --verbose --filter-metrics='node_cpu_seconds_total'
--instance='cpu' --subinstance='mode' --filter-subinstance='idle'`

`# perl centreon_plugins.pl --plugin=apps::monitoring::openmetrics::plugin --mode=scrape-metrics
--custommode=file --command-options='/tmp/metrics' --filter-metrics='cpu' --verbose`

`# perl centreon_plugins.pl --plugin=apps::monitoring::openmetrics::plugin --mode=scrape-metrics
--custommode=file --hostname=10.2.3.4 --ssh-option='-l=centreon-engine' --ssh-option='-p=52'
--command-options='/my/app/path/metrics' --verbose`

### Duplicate service to monitor more metrics

You can now duplicate the service to monitor several metrics.



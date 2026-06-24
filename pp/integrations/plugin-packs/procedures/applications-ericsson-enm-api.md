---
id: applications-ericsson-enm-api
slug: /applications-ericsson-enm-api
title: Ericsson ENM API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Ericsson ENM API** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Ericsson ENM API** brings a host template:

* **App-Ericsson-Enm-Api-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Ericsson-Enm-Api-custom" label="App-Ericsson-Enm-Api-custom">

| Service Alias | Service Template                  | Service Description | Discovery  |
|:--------------|:----------------------------------|:--------------------|:----------:|
| Cache         | App-Ericsson-Enm-Cache-Api-custom | Create cache files  |            |
| Nodes         | App-Ericsson-Enm-Nodes-Api-custom | Check nodes         | X          |

> The services listed above are created automatically when the **App-Ericsson-Enm-Api-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                |
|:----------------|:-------------------------------------------|
| Ericsson ENM    | Discover nodes from Ericsson ENM inventory |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                            | Description |
|:-------------------------------------|:------------|
| App-Ericsson-Enm-Api-Node-Celltdd-Id | Discover cells tdd and monitor status            |
| App-Ericsson-Enm-Api-Node-Fru-Id     | Discover field replaceable units and monitor status            |
| App-Ericsson-Enm-Api-Node-Id         | Discover nodes and monitor components (frus, cells)            |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Cache" label="Cache">

No metrics.

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Name              | Unit  |
|:------------------|:------|
| nodes.total.count | count |
| node-sync-status  | N/A   |
| fru-status        | N/A   |
| cell-tdd-status   | N/A   |

</TabItem>
</Tabs>

## Prerequisites

To control your Ericsson Network Manager, the Rest API must be configured.
The pack supports only the authentication by username/password.

## Installing the monitoring connector

### Pack

The installation procedures for monitoring connectors are slightly different depending on [whether your license is offline or online](../getting-started/how-to-guides/connectors-licenses.md).

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-ericsson-enm-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-ericsson-enm-api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-ericsson-enm-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-ericsson-enm-api
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Ericsson ENM API** connector through
the **Configuration > Connectors > Monitoring Connectors** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Ericsson-Enm-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Ericsson-Enm-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-ericsson-enm-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Ericsson-Enm-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Ericsson-Enm-Api-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                   | Description                                                                                          | Default value     | Mandatory   |
|:------------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| ERICSSONENMAPIUSERNAME  | API username                                                                                         |                   | X           |
| ERICSSONENMAPIPASSWORD  | API password                                                                                         |                   | X           |
| ERICSSONENMAPIPROTO     | Specify https if needed (default: 'https')                                                           | https             |             |
| ERICSSONENMAPIPORT      | Port used (default: 443)                                                                             | 443               |             |
| ERICSSONENMEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cache" label="Cache">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Macro                  | Description                                                                                                                                                                                                            | Default value                          | Mandatory   |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|:-----------:|
| FILTERNODEID           | Filter nodes by ID (can be a regexp)                                                                                                                                                                                   |                                        |             |
| EXCLUDENODEID          | Exclude nodes from the check if their ID matches the specified regular expression                                                                                                                                                                                                                       |                                        |             |
| FILTERFRUID            | Filter field replaceable units by ID (can be a regexp)                                                                                                                                                                 |                                        |             |
| EXCLUDEFRUID           | Exclude field replaceable units from the check if their ID matches the specified regular expression                                                                                                                                                                                                                       |                                        |             |
| FILTERCELLTDDID        | Filter tdd cells by ID (can be a regexp)                                                                                                                                                                               |                                        |             |
| EXCLUDECELLTDDID       | Exclude TDD cells from the check if their ID matches the specified regular expression                                                                                                                                                                                                                       |                                        |             |
| WARNINGCELLTDDSTATUS   | Set warning threshold for cell tdd status. You can use the following variables: %\{node\_id\}, %\{cell\_tdd\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}          |                                        |             |
| CRITICALCELLTDDSTATUS  | Set critical threshold for cell tdd status. You can use the following variables: %\{node\_id\}, %\{cell\_tdd\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}         |                                        |             |
| WARNINGFRUSTATUS       | Set warning threshold for field replaceable unit status. You can use the following variables: %\{node\_id\}, %\{fru\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}  |                                        |             |
| CRITICALFRUSTATUS      | Set critical threshold for field replaceable unit status. You can use the following variables: %\{node\_id\}, %\{fru\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\} |                                        |             |
| WARNINGNODESTOTAL      | Threshold                                                                                                                                                                                                              |                                        |             |
| CRITICALNODESTOTAL     | Threshold                                                                                                                                                                                                              |                                        |             |
| CRITICALNODESYNCSTATUS | Set critical threshold for synchronization status (default: '%\{sync\_status\} =~ /unsynchronized/i'). You can use the following variables: %\{node\_id\}, %\{sync\_status\}                                           | %\{sync\_status\} =~ /unsynchronized/i |             |
| WARNINGNODESYNCSTATUS  | Set warning threshold for synchronization status. You can use the following variables: %\{node\_id\}, %\{sync\_status\}                                                                                                |                                        |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                     | --verbose --cache-use                  |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_ericsson_enm_api.pl \
	--plugin=apps::ericsson::enm::api::plugin \
	--mode=nodes \
	--hostname='10.0.0.1' \
	--port='443' \
	--proto='https' \
	--api-username='xxxxxxx' \
	--api-password='xxxxxxx'  \
	--filter-node-id='' \
	--exclude-node-id='' \
	--filter-fru-id='' \
	--exclude-fru-id='' \
	--filter-cell-tdd-id='' \
	--exclude-cell-tdd-id='' \
	--warning-node-sync-status='' \
	--critical-node-sync-status='%\{sync\_status\} =~ /unsynchronized/i' \
	--warning-nodes-total='' \
	--critical-nodes-total='' \
	--warning-cell-tdd-status='' \
	--critical-cell-tdd-status='' \
	--warning-fru-status='' \
	--critical-fru-status='' \
	--verbose \
	--cache-use
```

The expected command output is shown below:

```bash
OK: Node 'ORA01200E_02' synchronization status: synchronized - All field replaceable units are ok - All tdd cells are ok | 'nodes.total.count'=1;;;0;
checking node 'ORA01200E_02'
    synchronization status: synchronized
    field replaceable unit 'BB-1' [label: ORA01200E_02] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-1' [label: RRU-1_ORA4043_11] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-10' [label: RRU-10_ORA4010_11] operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-11' [label: RRU-11_ORA4019_11] operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-12' [label: RRU-12_ORA4024_11_12] operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-13' operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-14' operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-15' operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-2' [label: RRU-2_ORA4045_11_12] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-3' [label: RRU-3_ORA4047_11_12] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-4' [label: RRU-4_ORA4049_11] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-5' [label: RRU-5_ORA4056_11] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-6' [label: RRU-6_ORA4054_11_12] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-7' [label: RRU-7_ORA4052_11_12] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-8' [label: RRU-8_ORA4050_11] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-9' [label: RRU-9_ORA4005_11_12] operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    tdd cell 'ORA4005_11' [label: ORA-Metro-S31A_85] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4005_12' [label: ORA-Metro-S31B_85] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4010_11' [label: ORA-Metro-S36_265] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4019_11' [label: ORA-Metro-S41_85] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4024_11' [label: ORA-Metro-S46A_265] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4024_12' [label: ORA-Metro-S46B_265] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4043_11' [label: ORA-Metro-T2F04_245] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4045_11' [label: ORA-Metro-T2F16_325] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4045_12' [label: ORA-Metro-T2F16-RDS_140] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4047_11' [label: ORA-Metro-T2F28_10] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4047_12' [label: ORA-Metro-T2F28-RDS_195] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4049_11' [label: ORA-Metro-T2F34_80] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4050_11' [label: ORA-Metro-T2F94_100] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4052_11' [label: ORA-Metro-T2F90_65] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4052_12' [label: ORA-Metro-T2F90-RDS_215] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4054_11' [label: ORA-Metro-T2F80_0] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4054_12' [label: ORA-Metro-T2F80-RDS_150] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4056_11' [label: ORA-Metro-T2F68_270] operational state: enabled, admin state: unlocked

```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_ericsson_enm_api.pl \
	--plugin=apps::ericsson::enm::api::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                      | Linked service template           |
|:------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|
| cache [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/ericsson/enm/api/mode/cache.pm)]                         | App-Ericsson-Enm-Cache-Api-custom |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/ericsson/enm/api/mode/discovery.pm)]                 | Used for host discovery           |
| list-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/ericsson/enm/api/mode/listnodes.pm)]                | Used for service discovery        |
| list-nodes-celltdd [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/ericsson/enm/api/mode/listnodescelltdd.pm)] | Used for service discovery        |
| list-nodes-fru [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/ericsson/enm/api/mode/listnodesfru.pm)]         | Used for service discovery        |
| nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/ericsson/enm/api/mode/nodes.pm)]                         | App-Ericsson-Enm-Nodes-Api-custom |

### Available options

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Nodes" label="Nodes">

| Option                      | Description                                                                                                                                                                                                                |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters           |   Only display some counters (regexp can be used). Example: --filter-counters='total'                                                                                                                                      |
| --filter-node-id            |   Filter nodes by ID (can be a regexp).                                                                                                                                                                                    |
| --filter-fru-id             |   Filter field replaceable units by ID (can be a regexp).                                                                                                                                                                  |
| --filter-cell-tdd-id        |   Filter tdd cells by ID (can be a regexp).                                                                                                                                                                                |
| --unknown-node-sync-status  |   Set unknown threshold for synchronization status. You can use the following variables: %\{node\_id\}, %\{sync\_status\}                                                                                                  |
| --warning-node-sync-status  |   Set warning threshold for synchronization status. You can use the following variables: %\{node\_id\}, %\{sync\_status\}                                                                                                  |
| --critical-node-sync-status |   Set critical threshold for synchronization status (default: '%\{sync\_status\} =~ /unsynchronized/i'). You can use the following variables: %\{node\_id\}, %\{sync\_status\}                                             |
| --unknown-fru-status        |   Set unknown threshold for field replaceable unit status. You can use the following variables: %\{node\_id\}, %\{fru\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}    |
| --warning-fru-status        |   Set warning threshold for field replaceable unit status. You can use the following variables: %\{node\_id\}, %\{fru\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}    |
| --critical-fru-status       |   Set critical threshold for field replaceable unit status. You can use the following variables: %\{node\_id\}, %\{fru\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}   |
| --unknown-cell-tdd-status   |   Set unknown threshold for cell tdd status. You can use the following variables: %\{node\_id\}, %\{cell\_tdd\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}            |
| --warning-cell-tdd-status   |   Set warning threshold for cell tdd status. You can use the following variables: %\{node\_id\}, %\{cell\_tdd\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}            |
| --critical-cell-tdd-status  |   Set critical threshold for cell tdd status. You can use the following variables: %\{node\_id\}, %\{cell\_tdd\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}           |
| --warning-* --critical-*    |   Thresholds. Can be: 'nodes-total'.                                                                                                                                                                                       |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ericsson_enm_api.pl \
	--plugin=apps::ericsson::enm::api::plugin \
	--mode=nodes \
	--help
```

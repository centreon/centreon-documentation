---
id: applications-databases-rrdtool
title: RRDtool
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Plugin-Pack Assets

### Monitored Objects

The plugin-pack includes monitoring of Query.

### Collected Metrics

<Tabs groupId="operating-systems">
<TabItem value="Query" label="Query">

| Metric name                             | Description                | Unit |
| :-------------------------------------- | :------------------------- | :--- |
| *dsname*#datasource.value.minimum.count | Minimun value on timeframe |      |
| *dsname*#datasource.value.average.count | Average value on timeframe |      |
| *dsname*#datasource.value.maximum.count | Maximul value on timeframe |      |

</TabItem>
</Tabs>

## Prerequisites

The plugin support query with:

* ```rrdtool``` cli (executed locally or through ssh)
* perl binding (executed locally only)

```rrdcached``` is not supported (yet).

## Setup

<Tabs groupId="licence-systems">
<TabItem value="online" label="Online License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Databases-Rrdtool
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *RRDtool* Plugin-Pack

</TabItem>
<TabItem value="offline" label="Offline License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Databases-Rrdtool
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-applications-databases-rrdtool
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *RRDtool* Plugin-Pack

</TabItem>
</Tabs>

## Service configuration

<Tabs groupId="operating-systems">
<TabItem value="Local" label="Local">

* Create a service and apply the *App-DB-Rrdtool-Local-Query* service template.

> Once the template applied, some Macros have to be configured:

| Mandatory | Name      | Description                                                                   |
| :-------- | :-------- | :---------------------------------------------------------------------------- |
| X         | RRDFILE   | rrd file to query                                                             |
| X         | DSNAME    | Datasource to query (Default: 'value')                                        |
| X         | TIMEFRAME | Set timeframe in seconds (E.g '3600' to check last 60 minutes) (Default: 600) |

</TabItem>
<TabItem value="SSH" label="SSH">

* Create a service and apply the *App-DB-Rrdtool-SSH-Query* service template.

> Once the template applied, some Macros have to be configured:

| Mandatory | Name      | Description                                                                   |
| :-------- | :-------- | :---------------------------------------------------------------------------- |
| X         | RRDFILE   | rrd file to query                                                             |
| X         | DSNAME    | Datasource to query (Default: 'value')                                        |
| X         | TIMEFRAME | Set timeframe in seconds (E.g '3600' to check last 60 minutes) (Default: 600) |

* On your host, 3 SSH backends are available to connect to the remote server: *sshcli*, *plink* and *libssh* which are detailed below.

</TabItem>
</Tabs>

<Tabs groupId="operating-systems">
<TabItem value="sshcli backend" label="sshcli backend">

| Mandatory | Name            | Description                                                                        |
| :-------- | :-------------- | :--------------------------------------------------------------------------------- |
| X         | SSHBACKEND      | Name of the backend: ```sshcli```                                                  |
| X         | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your Poller       |
|           | SSHPASSWORD     | Cannot be used with backend. Only ssh key authentication                           |
|           | SSHPORT         | By default: 22                                                                     |
|           | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa``` |

> With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

</TabItem>
<TabItem value="plink backend" label="plink backend">

| Mandatory | Name            | Description                                                                        |
| :-------- | :-------------- | :--------------------------------------------------------------------------------- |
| X         | SSHBACKEND      | Name of the backend: ```plink```                                                   |
| X         | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your Poller       |
|           | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                            |
|           | SSHPORT         | By default: 22                                                                     |
|           | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa``` |

> With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

</TabItem>
<TabItem value="libssh backend (default)" label="libssh backend (default)">

| Mandatory | Name            | Description                                                                        |
| :-------- | :-------------- | :--------------------------------------------------------------------------------- |
| X         | SSHBACKEND      | Name of the backend: ```libssh```                                                  |
| X         | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your Poller       |
|           | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                            |
|           | SSHPORT         | By default: 22                                                                     |
|           | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa``` |

With that backend, you do not have to validate the target server fingerprint manually.

</TabItem>
</Tabs>


## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your poller using the *centreon-engine* user account and test by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_rrdtool.pl \
--plugin=database::rrdtool::local::plugin \
--custommode=perlmod \
--mode=query \
--rrd-file='/var/lib/centreon/metrics/1490.rrd' \
--ds-name='value' \
--timeframe='3600' \
--warning-value-maximum=50 \
--critical-value-maximum=100
```

Output example:
```
OK: datasource 'value': 3.12 (min), 4.52 (avg), 5.13 (max) | 'value#datasource.value.minimum.count'=3.12;;;; 'value#datasource.value.average.count'=4.52;;;; 'value#datasource.value.maximum.count'=5.13;0:50;0:100;;
```

The command above monitors rrdtool (```--mode=query```) database */var/lib/centreon/metrics/1490.rrd* (found Centreon metrics file in interface: ```Administration  >  Parameters  >  Data```).

It check the datasource *value* (```--ds-name='value'```. Centreon always use ```value```. Otherwise use command to find datasource name: ```rrdtool info /var/lib/centreon/metrics/1490.rrd```) during the last hour (--timeframe='3600').

This command would trigger a WARNING alert if maximum value is over 50 (--warning-value-maximum=50) and a CRITICAL alarm over 100 (--critical-value-maximum=100).

All the options that can be used with this plugin can be found over the ```--help``` command:

```bash
/usr/lib/centreon/plugins/centreon_rrdtool.pl \
--plugin=database::rrdtool::local::plugin \
--custommode=perlmod \
--help
```

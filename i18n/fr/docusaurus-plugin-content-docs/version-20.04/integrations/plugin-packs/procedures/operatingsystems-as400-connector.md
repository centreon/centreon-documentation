---
id: operatingsystems-as400-connector
title: IBM AS400 Connector
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Hello community! We're looking for a contributor to help us to translate this 
content in french. If it's you, let us know and ping us on [slack](https://centreon.slack.com)
or propose a PR on the documentation [github](https://github.com/centreon/centreon-documentation).


## Pack Assets

### Templates

The Centreon Plugin Pack IBM AS400 Connector brings 1 host template:
* OS-AS400-Connector-custom

It brings the following Service Templates:

| Service Alias | Service Template                 | Default | Discovery |
|:--------------|:---------------------------------|:--------|:----------|
| Command       | OS-AS400-Command-Connector       |         |           |
| Disks         | OS-AS400-Disks-Connector         |         | X         |
| Job-Queues    | OS-AS400-Job-Queues-Connector    |         |           |
| Jobs          | OS-AS400-Jobs-Connector          | X       |           |
| Message-Queue | OS-AS400-Message-Queue-Connector |         |           |
| Page-Faults   | OS-AS400-Page-Faults-Connector   | X       |           |
| SubSystem     | OS-AS400-SubSystem-Connector     |         | X         |
| System        | OS-AS400-System-Connector        | X       |           |

### Discovery rules

| Rule name                         | Description                        |
|:----------------------------------|:-----------------------------------|
| OS-AS400-Connector-SubSystem-Name | Discover Subsystems and libraries  |
| OS-AS400-Connector-Disk-Name      | Discover disks                     |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Command" label="Command">

| Metric name | Description                                  |
|:------------|:---------------------------------------------|
| status      | Status of the remote command (failed or not) |

</TabItem>
<TabItem value="Disks" label="Disks">

* Global

| Metric name                      | Unit  |
|:---------------------------------|:------|
| disks.total.count                | count |
| disks.active.count               | count |
| disks.errors.count               | count |
| disks.gap.repartition.percentage | %     |

* Per *disks*

| Metric name                 | Unit |
|:----------------------------|:-----|
| status                      |      |
| disk.space.usage.bytes      | B    |
| disk.space.free.bytes       | B    |
| disk.space.usage.percentage | %    |
| disk.space.reserved.bytes   | B    |

</TabItem>
<TabItem value="JobQueues" label="JobQueues">

* Global

| Metric name           | Unit  |
|:----------------------|:------|
| jobqueues.total.count | count |

* Per *jobq*

| Metric name                   | Unit  |
|:------------------------------|:------|
| status                        |       |
| jobqueue.jobs.active.count    | count |
| jobqueue.jobs.scheduled.count | count |
| jobqueue.jobs.held.count      | count |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Metric name      | Unit  |
|:-----------------|:------|
| jobs.total.count | count |

</TabItem>
<TabItem value="MessageQueue" label="MessageQueue">

| Metric name       | Unit  |
|:------------------|:------|
| mq.messages.count | count |

</TabItem>
<TabItem value="PageFaults" label="PageFaults">

| Metric name                             | Unit |
|:----------------------------------------|:-----|
| pagefaults.database.ratio.percentage    | %    |
| pagefaults.nondatabase.ratio.percentage | %    |

</TabItem>
<TabItem value="SubSystem" label="SubSystem">

* Global

| Metric name            | Unit  |
|:-----------------------|:------|
| subsystems.total.count | count |

* Per *subsys*

| Metric name                 | Unit  |
|:----------------------------|:------|
| status                      |       |
| subsystem.jobs.active.count | count |

</TabItem>
<TabItem value="System" label="System">

* *CPU*

| Metric name                                | Unit |
|:-------------------------------------------|:-----|
| system.processing.units.usage.percentage   | %    |
| system.storage.pool.space.usage.percentage | %    |

* *jobs*

| Metric name              | Description | Unit  |
|:-------------------------|:------------|:------|
| system.jobs.total.count  | total: %s   | count |
| system.jobs.active.count | active: %s  | count |

* *batch_jobs*

| Metric name                     | Unit  |
|:--------------------------------|:------|
| system.batch_jobs.running.count | count |
| system.batch_jobs.waiting.count | count |

</TabItem>
</Tabs>

## Prerequisites

This plugin works in a slightly different way than the common ones. It requires 
a connector to communicate with the AS400/iSeries system. 

You can install the connector using this command: 

```shell
yum install centreon-plugin-Operatingsystems-AS400-daemon
```

A connector can act as a relay between several Hosts and several AS400 systems. 

## Setup

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT100 Editions" label="Online IMP Licence & IT100 Editions">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *AS400/iSeries* ressources:

```bash
yum install centreon-plugin-Operatingsystems-AS400-Connector
```

2. On the Centreon Web interface, install the *IBM AS400 Connector* Centreon Plugin Pack on the **Configuration > Plugin Packs** page:

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *AS400/iSeries* ressources:

```bash
yum install centreon-plugin-Operatingsystems-AS400-Connector
```

2. Install the *IBM AS400 Connector* Centreon Plugin Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-operatingsystems-as400-connector
```

3. On the Centreon Web interface, install the *IBM AS400 Connector* Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your *IBM AS400* settings
* Select the *operatingsystems-as400-connector-custom* template to apply to the Host
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.

| Mandatory | Name                   | Description                                                                                     |
|:----------|:-----------------------|:------------------------------------------------------------------------------------------------|
|           | AS400PASSWORD          |                                                                                                 |
|           | AS400USERNAME          |                                                                                                 |
|           | CENTREONCONNECOTRHOST  | (Default: 'localhost')                                                                          |
|           | CENTREONCONNECTORPORT  | (Default: '8091')                                                                               |
|           | CENTREONCONNECTORPROTO | (Default: 'http')                                                                               |
|           | EXTRAOPTIONS           | (Default: 'Any extra option you may want to add to every command\_line (eg. a --verbose flag)') |

## How to check in the CLI that the configuration is OK and what are the main options for ? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins//centreon_as400_connector_client.pl \
    --plugin=os::as400::connector::plugin \
    --mode=job-queues \
    --as400-hostname=10.1.2.3 \
    --as400-username='myuser' \
    --as400-password='mypassword' \
    --jobq="QGPL:QBASE" \
    --jobq="QGPL:QPGMR" \
    --verbose
```

The expected command output is shown below:

```bash
OK: Job queues total: 2 - All job queues are ok | 'jobqueues.total.count'=2;;;0; 'QGPL~QBASE#jobqueue.jobs.active.count'=0;;;0; 'QGPL~QBASE#jobqueue.jobs.scheduled.count'=0;;;0; 'QGPL~QBASE#jobqueue.jobs.held.count'=0;;;0; 'QGPL~QPGMR#jobqueue.jobs.active.count'=0;;;0; 'QGPL~QPGMR#jobqueue.jobs.scheduled.count'=0;;;0; 'QGPL~QPGMR#jobqueue.jobs.held.count'=0;;;0;
Job queue 'QBASE' [library: QGPL] status: RELEASED, active jobs: 0, scheduled jobs: 0, held jobs: 0
Job queue 'QPGMR' [library: QGPL] status: RELEASED, active jobs: 0, scheduled jobs: 0, held jobs: 0
```

This command checks two different JOBQ (`--jobq="QGPL:QBASE" --jobq="QGPL:QPGMR"`) on a 
given AS400 system (`--as400-hostname=10.1.2.3`) using some credentials (`--as400-username='myuser' --as400-password='mypassword'`).

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_as400_connector_client.pl \
    --plugin=os::as400::connector::plugin \
    --mode=queues \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_as400_connector_client.pl \
    --plugin=os::as400::connector::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins)
---
id: operatingsystems-as400-connector
title: IBM AS400 Connector
---

## Pack Assets

### Templates

The Centreon Plugin Pack IBM AS400 Connector brings 1 host template :
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

<!--DOCUSAURUS_CODE_TABS-->

| Rule name                         | Description |
|:----------------------------------|:------------|
| OS-AS400-Connector-SubSystem-Name |             |
| OS-AS400-Connector-Disk-Name      |             |

<!--END_DOCUSAURUS_CODE_TABS-->

### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Command-->

| Metric name | Description                                  |
|:------------|:---------------------------------------------|
| status      | Status of the remote command (failed or not) |

<!--Disks-->

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

<!--Job-Queues-->

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

<!--Jobs-->

| Metric name      | Unit  |
|:-----------------|:------|
| jobs.total.count | count |

<!--Message-Queue-->

| Metric name       | Unit  |
|:------------------|:------|
| mq.messages.count | count |

<!--Page-Faults-->

| Metric name                             | Unit |
|:----------------------------------------|:-----|
| pagefaults.database.ratio.percentage    | %    |
| pagefaults.nondatabase.ratio.percentage | %    |

<!--SubSystem-->

* Global

| Metric name            | Unit  |
|:-----------------------|:------|
| subsystems.total.count | count |

* Per *subsys*

| Metric name                 | Unit  |
|:----------------------------|:------|
| status                      |       |
| subsystem.jobs.active.count | count |

<!--System-->

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

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

This plugin works in a slightly different way than the common ones. It requires 
a connector to communicate with the AS400/iSeries system. 

You can install the connector using this command: 

```shell
yum install centreon-plugin-Operatingsystems-AS400-daemon
```

A connector can act as a boilerplate between several Hosts and several AS400 systems. 

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *AS400/iSeries* ressources:

```bash
yum install centreon-plugin-Operatingsystems-AS400-Connector
```

2. On the Centreon Web interface, install the *IBM AS400 Connector* Centreon Plugin Pack on the **Configuration > Plugin Packs** page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *AS400/iSeries* ressources:

```bash
yum install centreon-plugin-Operatingsystems-AS400-Connector
```

2. Install the *IBM AS400 Connector* Centreon Plugin Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-operatingsystems-as400-connector
```

3. On the Centreon Web interface, install the *IBM AS400 Connector* Centreon Plugin Pack on the **Configuration > Plugin Packs** page

<!--END_DOCUSAURUS_CODE_TABS-->

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

Once the plugin installed, log into your Centreon Poller CLI using the 
*centreon-engine* user account and test the Plugin by running the following 
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

Expected command output is shown below:

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
in the [dedicated page](../tutorials/troubleshooting-plugins.html)
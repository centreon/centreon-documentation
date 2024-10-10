---
id: cloud-talend-tmc-api
title: Talend TMC API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **Talend TMC API** brings a host template:

* Cloud-Talend-Tmc-Api-custom

It brings the following service templates:

| Service Alias  | Service Template                    | Service Description  | Default | Discovery |
|:---------------|:------------------------------------|:---------------------|:--------|:----------|
| Cache          | Cloud-Talend-Tmc-Cache-Api          | Create cache files   |         |           |
| Plans          | Cloud-Talend-Tmc-Plans-Api          | Check plans          |         | X         |
| Remote-Engines | Cloud-Talend-Tmc-Remote-Engines-Api | Check remote engines | X       | X         |
| Tasks          | Cloud-Talend-Tmc-Tasks-Api          | Check tasks          |         | X         |

### Discovery rules

| Rule Name                               | Description                                |
|:----------------------------------------|:-------------------------------------------|
| Cloud-Talend-Tmc-Api-Task-Id            | Discover tasks and monitor status          |
| Cloud-Talend-Tmc-Api-Plan-Id            | Discover plans and monitor status          |
| Cloud-Talend-Tmc-Api-Remote-Engine-Name | Discover remote engines and monitor status |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cache" label="Cache">

No metrics.

</TabItem>
<TabItem value="Plans" label="Plans">

| Metric Name                                   | Unit  |
|:----------------------------------------------|:------|
| plans.executions.detected.count               |       |
| *plan_name*#plan.executions.failed.percentage | %     |
| *plan_name*#plan.execution.last.seconds       | s     |
| *plan_name*#plan.running.duration.seconds     | s     |
| plan execution status                         |       |

</TabItem>
<TabItem value="Remote-Engines" label="Remote-Engines">

| Metric Name                   | Unit  |
|:------------------------------|:------|
| remote_engines.detected.count |       |
| remote_engines.unpaired.count |       |
| remote engine status          |       |

</TabItem>
<TabItem value="Tasks" label="Tasks">

| Metric Name                                   | Unit  |
|:----------------------------------------------|:------|
| tasks.executions.detected.count               |       |
| *task_name*#task.executions.failed.percentage | %     |
| *task_name*#task.execution.last.seconds       | s     |
| *task_name*#task.running.duration.seconds     | s     |
| task execution status                         |       |

</TabItem>
</Tabs>

## Prerequisites

To monitor, a token is required.

Please refer to the official documentation:: https://help.talend.com/r/en-US/Cloud/management-console-user-guide/cloud-access-token?utm_source=tadoc&utm_medium=learn_more

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-talend-tmc-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-talend-tmc-api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-talend-tmc-api
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Talend TMC API** Pack through
the **Configuration > Monitoring Connector Manager** menu.

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
dnf install centreon-plugin-Cloud-Talend-Tmc-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Talend-Tmc-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-talend-tmc-api
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Talend TMC** server settings.
* Apply the **Cloud-Talend-Tmc-Api-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro           | Description                                                                            |
|:------------|:----------------|:---------------------------------------------------------------------------------------|
|             | APIEXTRAOPTIONS | Any extra option you may want to add to every command line (eg. a --verbose flag)      |
| X           | APIREGION       | (Default: 'eu')                                                                        |
| X           | APITOKEN        |                                                                                        |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_talend_tmc_api.pl \
    --plugin=cloud::talend::tmc::plugin \
    --mode=remote-engines \
    --region='eu' \
    --api-token='mytoken' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All remote engines are ok | 'remote_engines.detected.count'=2;;;0; 'remote_engines.unpaired.count'=0;;;0;2
remote engine 'talre-01-dev' status: paired [availability: available]
remote engine 'talre-02-dev' status: paired [availability: available]
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_talend_tmc_api.pl \
    --plugin=cloud::talend::tmc::plugin \
    --mode=remote-engines \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_talend_tmc_api.pl \
    --plugin=cloud::talend::tmc::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

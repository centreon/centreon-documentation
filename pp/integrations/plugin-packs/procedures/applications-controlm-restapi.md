---
id: applications-controlm-restapi
title: Control-M Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **Control-M Rest API** brings a host template:

* App-Controlm-Restapi-custom

It brings the following service template:

| Service Alias | Service Template          | Service Description | Default | Discovery |
|:--------------|:--------------------------|:--------------------|:--------|:----------|
| Jobs          | App-Controlm-Restapi-Jobs | Check jobs          |         | X         |

### Discovery rules

| Rule Name                     | Description                      |
|:------------------------------|:---------------------------------|
| App-Controlm-Restapi-Job-Name | Discover jobs and monitor status |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Metric Name                                  | Unit  |
|:---------------------------------------------|:------|
| jobs.executing.count                         |       |
| jobs.failed.count                            |       |
| jobs.succeeded.count                         |       |
| jobs.waiting.count                           |       |
| job status                                   |       |
| *application_name~job_name*#job.failed.count |       |

</TabItem>
</Tabs>

## Prerequisites

To monitor, a user with read privileges on the Control-M [Automation API](https://docs.bmc.com/docs/automation-api/918/) is required.

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
dnf install centreon-pack-applications-controlm-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-controlm-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-controlm-restapi
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Control-M Rest API** Pack through
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
dnf install centreon-plugin-Applications-Controlm-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Controlm-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-controlm-restapi
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Control-M** server settings.
* Apply the **App-Controlm-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro                   | Description        |
|:------------|:------------------------|:-------------------|
| X           | CONTROLMAPIUSERNAME     |                    |
| X           | CONTROLMAPIPASSWORD     |                    |
|             | CONTROLMAPIPORT         | (Default: '8443')  |
|             | CONTROLMAPIPROTOCOL     | (Default: 'https') |
|             | CONTROLMAPIEXTRAOPTIONS | --insecure         |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_controlm_restapi.pl \
    --plugin=apps::controlm::restapi::plugin \
    --mode=jobs \
    --hostname='10.0.0.1' \
    --port='8443' \
    --proto='https' \
    --api-username='myuser' \
    --api-password='mypass' \
    --filter-name='P2TLNBUS20|P2TLNBUS203' \
    --verbose
```

The expected command output is shown below:

```bash
OK: Number of jobs succeeded: 5, errors: 0, jobs-executing : skipped (no value(s)), waiting: 0 - All jobs are ok | 'jobs.succeeded.count'=5;;;0;5 'jobs.failed.count'=0;;;0;5 'jobs.waiting.count'=0;;;0;5 'TALEND~P2TLNBUS200#job.failed.count'=1;;;0; 'TALEND~P2TLNBUS201#job.failed.count'=1;;;0; 'TALEND~P2TLNBUS202#job.failed.count'=1;;;0; 'TALEND~P2TLNBUS203#job.failed.count'=1;;;0; 'TALEND~P2TLNBUS204#job.failed.count'=1;;;0;
job 'TALEND/P2TLNBUS200' status: ended ok
job 'TALEND/P2TLNBUS201' status: ended ok
job 'TALEND/P2TLNBUS202' status: ended ok
job 'TALEND/P2TLNBUS203' status: ended ok
job 'TALEND/P2TLNBUS204' status: ended ok
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_controlm_restapi.pl \
    --plugin=apps::controlm::restapi::plugin \
    --mode=jobs \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_controlm_restapi.pl \
    --plugin=apps::controlm::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

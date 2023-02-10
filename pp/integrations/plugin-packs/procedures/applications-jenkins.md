---
id: applications-jenkins
title: Jenkins API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **Jenkins API** brings a host template:

* App-Jenkins-Api-custom

It brings the following service template:

| Service Alias | Service Template     | Service Description | Default | Discovery |
|:--------------|:---------------------|:--------------------|:--------|:----------|
| Jobs          | App-Jenkins-Jobs-Api | Check jobs          |         | X         |

### Discovery rules

| Rule Name                | Description                      |
|:-------------------------|:---------------------------------|
| App-Jenkins-Api-Job-Name | Discover jobs and monitor status |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Metric Name                     | Unit  |
|:--------------------------------|:------|
| *job_name*#job.score.percentage | %     |
| *job_name*#job.violations.count | count |

</TabItem>
</Tabs>

## Prerequisites

*Specify prerequisites that are relevant. You may want to just provide a link
to the manufacturer official documentation BUT you should try to be as complete
as possible here as it will save time to everybody.*

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Plugin Packs > Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-jenkins
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-jenkins
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-jenkins
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Jenkins API** Pack through
the **Configuration > Plugin Packs > Manager** menu.

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
dnf install centreon-plugin-Applications-Jenkins
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Jenkins
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-jenkins
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Jenkins** server settings.
* Apply the **App-Jenkins-Api-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro                  | Description        |
|:------------|:-----------------------|:-------------------|
|             | JENKINSAPIEXTRAOPTIONS | --insecure         |
|             | JENKINSAPIPASSWORD     |                    |
|             | JENKINSAPIPORT         | (Default: '443')   |
|             | JENKINSAPIPROTO        | (Default: 'https') |
|             | JENKINSAPIUSERNAME     |                    |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_jenkins.pl \
    --plugin=apps::jenkins::plugin \
    --mode=jobs \
    --hostname='10.0.0.1' \
    --port='443' \
    --proto='https' \
    --username='' \
    --password='' \
    --insecure \
    --filter-job-name='' \
    --warning-score='' \
    --critical-score='' \
    --warning-violations='' \
    --critical-violations='' \
    --verbose \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: score: %.2f %% violations: %s | 'job.score.percentage'=9000%;;;0;100 'job.violations.count'=9000;;;0; 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_jenkins.pl \
    --plugin=apps::jenkins::plugin \
    --mode=jobs \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_jenkins.pl \
    --plugin=apps::jenkins::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

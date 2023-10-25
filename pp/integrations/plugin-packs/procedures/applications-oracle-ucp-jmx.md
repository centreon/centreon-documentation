---
id: applications-oracle-ucp-jmx
title: Oracle UCP JMX
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **Oracle UCP JMX** brings a host template to monitor **Oracle Universal Connection Pool**:

* App-Oracle-Ucp-JMX-custom

It brings the following service template:

| Service Alias    | Service Template                    | Service Description    | Default | Discovery |
|:-----------------|:------------------------------------|:-----------------------|:--------|:----------|
| Connection-Pools | App-Oracle-Ucp-Connection-Pools-JMX | Check connection pools |         | X         |

### Discovery rules

| Rule Name                               | Description                                       |
|:----------------------------------------|:--------------------------------------------------|
| App-Oracle-Ucp-Jmx-Connection-Pool-Name | Discover connection pools and monitor utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Connection-Pools" label="Connection-Pools">

| Metric Name                                  | Unit  |
|:---------------------------------------------|:------|
| *pool_name*#connection_pool.usage.count      |       |
| *pool_name*#connection_pool.free.count       |       |
| *pool_name*#connection_pool.usage.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

Please install the Jolokia agent on your JVM: [Jolokia download page](https://jolokia.org/download.html). Ask to your admin to deploy it and give you the URL.

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
dnf install centreon-pack-applications-oracle-ucp-jmx
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-oracle-ucp-jmx
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-oracle-ucp-jmx
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Oracle UCP JMX** Pack through
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
dnf install centreon-plugin-Applications-Oracle-Ucp-Jmx
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Oracle-Ucp-Jmx
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-oracle-ucp-jmx
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Oracle UCP** server settings.
* Apply the **App-Oracle-Ucp-JMX-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro               | Description                                                                            |
|:------------|:--------------------|:---------------------------------------------------------------------------------------|
| X           | JOLOKIAURL          | Jolokia URL (eg: http://jvm.centreon.com:8080/jolokia)                                 |
|             | JOLOKIAPASSWORD     |                                                                                        |
|             | JOLOKIAUSERNAME     |                                                                                        |
|             | JOLOKIAEXTRAOPTIONS | Any extra option you may want to add to every command line (eg. a --verbose flag)      |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_oracle_ucp_jmx.pl \
    --plugin=apps::oracle::ucp::jmx::plugin \
    --mode=connection-pools \
    --url='http://jvm.centreon.com:8080/jolokia' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All connection pools are ok | 'DATASOURCE_FLUX#connection_pool.usage.count'=2B;;;0;50 'DATASOURCE_FLUX#connection_pool.free.count'=48B;;;0;50 'DATASOURCE_FLUX#connection_pool.usage.percentage'=4.00%;;;0;100 'DATASOURCE_MS#connection_pool.usage.count'=2B;;;0;50 'DATASOURCE_MS#connection_pool.free.count'=48B;;;0;50 'DATASOURCE_MS#connection_pool.usage.percentage'=4.00%;;;0;100
Connection pool 'DATASOURCE_FLUX' total: 50 used: 2 (4.00%) free: 48 (96.00%)
Connection pool 'DATASOURCE_MS' total: 50 used: 2 (4.00%) free: 48 (96.00%)
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_oracle_ucp_jmx.pl \
    --plugin=apps::oracle::ucp::jmx::plugin \
    --mode=connection-pools \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_oracle_ucp_jmx.pl \
    --plugin=apps::oracle::ucp::jmx::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

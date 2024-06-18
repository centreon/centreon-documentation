---
id: cloud-iics-restapi
title: IICS Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Monitored Objects

The Centreon Pack **Informatica Intelligent Cloud Services** brings a host template:
* Cloud-Iics-Restapi-custom

It brings the following service templates:

| Service Alias | Service Template          | Description  | Default |
|:--------------|:--------------------------|:-------------|:--------|
| Agents        | Cloud-Iics-Agents-Restapi | Check agents | X       |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Rule name                     | Description                        |
|:------------------------------|:-----------------------------------|
| Cloud-Iics-Restapi-Agent-Name | Discover agents and monitor status |

More information about discovering services automatically is available on the [dedicated page](/onprem/monitoring/discovery/services-discovery)
and in the [following chapter](/onprem/monitoring/discovery/services-discovery/#discovery-rules).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Agents" label="Agents">

| Metric name           | Unit  |
| :---------------------| :---- |
| agents.detected.count |       |
| agent status          |       |
| application status    |       |

</TabItem>
</Tabs>

## Prerequisites

To control **Informatica Intelligent Cloud Services**, the Rest API must be configured.
E.g: https://docs.informatica.com/integration-cloud/cloud-platform/current-version/rest-api-reference/informatica-intelligent-cloud-services-rest-api.html

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon package on every Centreon poller expected to monitor **Informatica Intelligent Cloud Services** resources:

```bash
yum install centreon-plugin-Cloud-Iics-Restapi
```

2. On the Centreon web interface, install the **IICS Rest API** Centreon Pack on the **Configuration > Monitoring Connector Manager** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor **Informatica Intelligent Cloud Services** resources:

```bash
yum install centreon-plugin-Cloud-Iics-Restapi
```

2. Install the **IICS Rest API** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-iics-restapi
```

3. On the Centreon web interface, install the **IICS Rest API** Centreon Pack on the **Configuration > Monitoring Connector Manager** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
* Fill the **Name** and **Alias** fields according to your **Informatica Intelligent Cloud Services** settings.
* Apply the **Cloud-Iics-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name            | Description                                                                |
| :-------- | :-------------- | :------------------------------------------------------------------------- |
| X         | APIREGION       | Region used (Default: 'eu')                                                |
| X         | APIUSERNAME     | API username                                                               |
| X         | APIPASSWORD     | API password                                                               |
|           | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_iics_restapi.pl \
    --plugin=cloud::iics::restapi::plugin \
    --mode=agents \
    --region='eu' \
    --api-username='myusername' \
    --api-password='mypassword' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All agents are ok | 'agents.detected.count'=2;;;0;
checking agent 'agent1.centreon.com'
    readyToRun: yes [active: yes]
    engine application 'Elastic Server' status: running [desired: running]
    engine application 'Common Integration Components' status: running [desired: running]
    engine application 'Data Integration Server' status: running [desired: running]
    engine application 'Discovery Agent Application' status: running [desired: running]
    engine application 'File Integration Service' status: running [desired: running]
    engine application 'GitRepoConnectApp' status: running [desired: running]
    engine application 'Mass Ingestion' status: running [desired: running]
    engine application 'Metadata Foundation Application' status: running [desired: running]
    engine application 'OI Data Collector' status: running [desired: running]
    engine application 'Process Server' status: running [desired: running]
checking agent 'agent2.centreon.com'
    readyToRun: yes [active: yes]
    engine application 'Elastic Server' status: running [desired: running]
    engine application 'CIH Processor' status: running [desired: running]
    engine application 'Common Integration Components' status: running [desired: running]
    engine application 'Data Integration Server' status: running [desired: running]
    engine application 'Discovery Agent Application' status: running [desired: running]
    engine application 'File Integration Service' status: running [desired: running]
    engine application 'GitRepoConnectApp' status: running [desired: running]
    engine application 'Mass Ingestion' status: running [desired: running]
    engine application 'Metadata Foundation Application' status: running [desired: running]
    engine application 'OI Data Collector' status: running [desired: running]
    engine application 'CMI Streaming Agent' status: running [desired: running]
    engine application 'Process Server' status: running [desired: running]
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_iics_restapi.pl \
    --plugin=cloud::iics::restapi::plugin \
    --mode=agents \
    --help
```

All available modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_iics_restapi.pl \
    --plugin=cloud::iics::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

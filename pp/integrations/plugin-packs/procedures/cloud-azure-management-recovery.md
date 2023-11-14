---
id: cloud-azure-management-recovery
title: Azure Recovery

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector **Azure Recovery** brings a host template:

* Cloud-Azure-Management-Recovery-Backup-custom

It brings the following service templates:

| Service Alias       | Service Template                                        | Service Description                         | Default |
| :------------------ | :------------------------------------------------------ | :------------------------------------------ | :------ |
| Backup-Items-Status | Cloud-Azure-Management-Recovery-Backup-Items-Status-Api | Check items backup state for a given vault | X       |
| Backup-Jobs-Status  | Cloud-Azure-Management-Recovery-Backup-Jobs-Status-Api  | Check backup jobs state for a given vault  | X       |
| Replication-Health  | Cloud-Azure-Management-Recovery-Replication-Health-Api  | Check replication and failover health for a given vault | X      |

### Discovery rules

The Centreon Monitoring Connector **Azure Recovery** includes a Host Discovery provider to
automatically discover the Azure instances of a given subscription and add them
to the Centreon configuration. This provider is named **Microsoft Azure Recovery Vaults**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-management-recovery-provider.png)

> This discovery feature is only compatible with the **api** custom mode. **azcli** is not supported.

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Backup-Items-Status" label="Backup-Items-Status">

| Metric Name                 | Unit  |
|:----------------------------|:------|
| Backup item status          |       |

</TabItem>
<TabItem value="Backup-Jobs-Status" label="Backup-Jobs-Status">

| Metric Name                 | Unit  |
|:----------------------------|:------|
| Backup job status           |       |

</TabItem>

<TabItem value="Replication-Health" label="Replication-Health">

| Metric Name                 | Unit  |
|:----------------------------|:------|
| Replication health          |       |
| Failover health             |       |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the package on every Centreon poller expected to monitor **Azure Recovery** resources:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Recovery-Api
```

2. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Azure Recovery** Centreon Monitoring Connector.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the package on every Centreon poller expected to monitor **Azure Recovery** resources:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Recovery-Api
```

2. Install the **Azure Recovery** Centreon Monitoring Connector RPM on the Centreon central server:

```bash
yum install centreon-pack-cloud-azure-management-recovery
```

3. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Azure Recovery** Centreon Monitoring Connector.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
* Apply the **Cloud-Azure-Management-Recovery-Backup-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.
  These mandatory macros differ depending on the custom mode used.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory | Macro              | Description                                  |
| :-------- | :----------------- | :------------------------------------------- |
| X         | AZUREAPICUSTOMMODE | Custom mode **api**                          |
| X         | AZUREVAULTNAME     | Backup vault name                            |
| X         | AZURECLIENTID      | Client ID                                    |
| X         | AZURECLIENTSECRET  | Client secret                                |
| X         | AZURERESOURCEGROUP | Resource group name                          |
| X         | AZURESUBSCRIPTION  | Subscription ID                              |
| X         | AZURETENANT        | Tenant ID                                    |
|           | PROXYURL           | Proxy URL                                    |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Macro              | Description                                  |
| :-------- | :----------------- | :------------------------------------------- |
|  X        | AZURECLICUSTOMMODE | Custom mode **azcli**                        |
|  X        | AZURERESOURCEGROUP | Resource group name                          |
|  X        | AZURESUBSCRIPTION  | Subscription ID                              |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_azure_management_recovery_api.pl \
    --plugin=cloud::azure::management::recovery::plugin \
    --mode=backup-jobs-status \
    --custommode='api' \
    --resource-group='GPBACK1234' \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --proxyurl='' \
    --vault-name='vault123' \
    --warning-status='' \
    --critical-status='%{status} eq "Failed"' \
    --warning-total-completed='' \
    --critical-total-completed='' \
    --warning-total-failed='' \
    --critical-total-failed='' \
    --warning-total-inprogress='' \
    --critical-total-inprogress='' 
```

The expected command output is shown below:

```bash
OK: Backup Job 'backupjob456' Status 'Completed' [Duration: 41m 12s]
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_management_recovery_api.pl \
    --plugin=cloud::azure::management::recovery::plugin \
    --mode=backup-jobs-status \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_management_recovery_api.pl \
    --plugin=cloud::azure::management::recovery::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
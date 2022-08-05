---
id: cloud-azure-compute-virtualmachine
title: Azure Virtual Machine
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Azure Virtual Machine** brings a host template:

* Cloud-Azure-Compute-VirtualMachine-custom

It brings the following service templates:

| Service Alias    | Service Template                                        | Service Description               | Default |
|:-----------------|:--------------------------------------------------------|:----------------------------------|:--------|
| Cpu-Credit       | Cloud-Azure-Compute-VirtualMachine-Cpu-Credit-Api       | Check CPU credits usage           |         |
| Cpu-Usage        | Cloud-Azure-Compute-VirtualMachine-Cpu-Usage-Api        | Check CPU usage                   | X       |
| Diskio           | Cloud-Azure-Compute-VirtualMachine-Diskio-Api           | Check disks                       | X       |
| Health           | Cloud-Azure-Compute-VirtualMachine-Health-Api           | Check virtual machine state       | X       |
| Memory           | Cloud-Azure-Compute-VirtualMachine-Memory-Api           | Check memory usage                | X       |
| Network          | Cloud-Azure-Compute-VirtualMachine-Network-Api          | Check network usage               | X       |
| Vm-Sizes-Global  | Cloud-Azure-Compute-VirtualMachine-Vm-Sizes-Global-Api  | Check vitual machines types count |         |
| Vms-State-Global | Cloud-Azure-Compute-VirtualMachine-Vms-State-Global-Api | Check vitual machines status      |         |

### Discovery rules

The Centreon Plugin Pack **Azure Virtual Machine** includes a Host Discovery provider to
automatically discover the Azure instances of a given subscription and add them
to the Centreon configuration. This provider is named **Microsoft Azure Virtual Machine**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-compute-virtualmachine-provider.png)

> This discovery feature is only compatible with the **api** custom mode. **azcli** is not supported.

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu-Credit" label="Cpu-Credit">

| Metric Name                      | Unit  |
|:---------------------------------|:------|
| azvm.cpu.credits.consumed.count  |       |
| azvm.cpu.credits.remaining.count |       |
| azvm.cpu.utilization.percentage  | %     |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Metric Name                      | Unit  |
|:---------------------------------|:------|
| azvm.cpu.credits.consumed.count  |       |
| azvm.cpu.credits.remaining.count |       |
| azvm.cpu.utilization.percentage  | %     |

</TabItem>
<TabItem value="Diskio" label="Diskio">

| Metric Name               | Unit  |
|:--------------------------|:------|
| azvm.disk.read.bytes      | B     |
| azvm.disk.read.persecond  |       |
| azvm.disk.write.bytes     | B     |
| azvm.disk.write.persecond |       |

</TabItem>
<TabItem value="Health" label="Health">

| Status Name | Description                 |
|:------------|:----------------------------|
| status      | Current operational status  |
| summary     | Last related status message |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name                 | Unit  |
|:----------------------------|:------|
| azvm.memory.available.bytes | B     |

</TabItem>
<TabItem value="Network" label="Network">

| Metric Name            | Unit  |
|:-----------------------|:------|
| azvm.network.in.bytes  | B     |
| azvm.network.out.bytes | B     |

</TabItem>
<TabItem value="Vm-Sizes-Global" label="Vm-Sizes-Global">

One metric corresponding to each available machine size you can deploy with Azure. 

</TabItem>
<TabItem value="Vms-State-Global" label="Vms-State-Global">

| Metrics/Status Name            | Unit  |
|:-------------------------------|:------|
| status                         |       |
| azure.compute.vm.running.count | count |
| azure.compute.vm.stopped.count | count |

</TabItem>
</Tabs>

## Prerequisites

Please find all the prerequisites needed for Centreon to get information from Azure on the [dedicated page](../getting-started/how-to-guides/azure-credential-configuration.md).

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Azure Virtual Machine** resources:

```bash
yum install centreon-plugin-Cloud-Azure-Compute-VirtualMachine-Api
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Azure Virtual Machine** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Azure Virtual Machine** resources:

```bash
yum install centreon-plugin-Cloud-Azure-Compute-VirtualMachine-Api
```

2. Install the **Azure Virtual Machine** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-cloud-azure-compute-virtualmachine
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Azure Virtual Machine** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
* Aplly the **Cloud-Azure-Compute-VirtualMachine-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.
These mandatory macros differ depending on the custom mode used.

> Two methods can be used to set the macros:

>> * Full ID of the Resource (`/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXX/XXXXX/<resource_name>`)
in **AZURERESOURCE**
> * Resource name in the **AZURERESOURCE** macro, and resource group name in the **AZURERESOURCEGROUP** macro.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory   | Macro              | Description                                      |
|:------------|:-------------------|:-------------------------------------------------|
|             | AZUREAPICUSTOMMODE | Custom mode **api**                              |
|             | AZURECLIENTID      | Client ID                                        |
|             | AZURECLIENTSECRET  | Client secret                                    |
|             | AZURERESOURCE      | ID or name of the Azure Virtual Machine resource |
|             | AZURERESOURCEGROUP | Resource group name if resource name is used     |
|             | AZURESUBSCRIPTION  | Subscription ID                                  |
|             | AZURETENANT        | Tenant ID                                        |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory   | Macro              | Description                                      |
|:------------|:-------------------|:-------------------------------------------------|
|             | AZURECLICUSTOMMODE | Custom mode **azcli**                            |
|             | AZURERESOURCE      | ID or name of the Azure Virtual Machine resource |
|             | AZURERESOURCEGROUP | Resource group name if resource name is used     |
|             | AZURESUBSCRIPTION  | Subscription ID                                  |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_azure_compute_virtualmachine_api.pl \
    --plugin=cloud::azure::compute::virtualmachine::plugin \
    --mode=health \
    --custommode='api' \
    --resource='VM001ABCD' \
    --resource-group='RSG1234' \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --proxyurl='' \
    --ok-status='%{status} =~ /^Available$/' \
    --warning-status='' \
    --critical-status='%{status} =~ /^Unavailable$/' \
    --unknown-status='%{status} =~ /^Unknown$/' \
    --api-version=2017-07-01\
```

The expected command output is shown below:

```bash
OK: Status: '%s', Summary: '%s'|
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_compute_virtualmachine_api.pl \
    --plugin=cloud::azure::compute::virtualmachine::plugin \
    --mode=health \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_compute_virtualmachine_api.pl \
    --plugin=cloud::azure::compute::virtualmachine::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
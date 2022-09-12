---
id: cloud-azure-management-costs
title: Azure Management Costs 
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Azure Costs** brings a host template:

* Cloud-Azure-Management-Costs-Api-custom

It brings the following service template:

| Service Alias   | Service Template                      | Service Description                  | Default | Discovery |
|:----------------|:--------------------------------------|:-------------------------------------|:--------|:----------|
| Budget          | Cloud-Azure-Management-Budgets-Api    | Check Azure budget consumption       |         |     x     |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Rule name                                  | Description                                   |
| :----------------------------------------- | :-------------------------------------------- |
| Cloud-Azure-Management-Costs-Budgets       | Discover and list configured Azure budget     |

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Budgets" label="Budgets">

| Metric Name                          | Unit  |
|:-------------------------------------|:------|
| azure.budget.consumption.currency    |       |

</TabItem>
</Tabs>

## Prerequisites

Check out the endpoint documentation [here](https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/consumption-api-overview). It describes the required privileges to use the API.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Azure Costs** resources:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Costs-Api
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Azure Costs** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Azure Costs** resources:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Costs-Api
```

2. Install the **Azure Costs** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-cloud-azure-management-costs
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Azure Costs** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Azure Costs** server settings.
* Apply the **Cloud-Azure-Management-Costs-Api-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro              | Description                                      |
|:------------|:-------------------|:-------------------------------------------------|
| X           | AZURECLIENTID      | Client ID                                        |
| X           | AZURECLIENTSECRET  | Client secret                                    |
| X           | AZURESUBSCRIPTION  | Subscription ID                                  |
| X           | AZURETENANT        | Tenant ID                                        |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_azure_management_costs_api.pl \
    --plugin=cloud::azure::management::costs::plugin \
    --mode=budgets \
    --tenant='abcd1234-5678-90ab-cd12-34567890abcd' \
    --client-id='9876dcba-5432-10dc-ba98-76543210dcba' \
    --client-secret='8/RON4vUGhAcg6DRmSxc4AwgxSRoNfKg4d8xNizIMnwg=' \
    --budget-name='myBudgetName' \
    --lookup-days='30' \
    --warning-usage='95' \
    --critical-usage='98' \
    --units='%' \
    --verbose
```

The expected command output is shown below:

```bash
OK: Spent amount is 1400.25EUR on 1500EUR of allowed budget (93.33% consumption) for the past 30 days | 'azure.budget.consumption.currency'=1400.25;0:1425;0:1485;0;1500
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_management_costs_api.pl \
    --plugin=cloud::azure::management::costs::plugin \
    --mode=budgets \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_management_costs_api.pl \
    --plugin=cloud::azure::management::costs::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
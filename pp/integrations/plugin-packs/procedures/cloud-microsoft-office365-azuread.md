---
id: cloud-microsoft-office365-azuread
title: Office 365 Azure AD
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector **Office 365 Azure AD** brings a host template:

* Cloud-Microsoft-Office365-AzureAD-Api-custom

It brings the following service template:

| Service Alias   | Service Template                                      | Service Description                  | Default |
|:----------------|:------------------------------------------------------|:-------------------------------------|:--------|
| Directory-Quota | Cloud-Microsoft-Office365-AzureAD-Directory-Quota-Api | Check Azure AD Directory Quota usage | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Directory-Quota" label="Directory-Quota">

| Metric Name                          | Unit  |
|:-------------------------------------|:------|
| azure.ad.directory.usage.count       |       |

</TabItem>
</Tabs>

## Prerequisites

### Register an application 

Refer to the documentation available [here](./cloud-microsoft-office365-management.md#prerequisites) to register your application.

### Office365 Management API authorization

To collect data from OneDrive Online, you need to specify the following
authorization:

* Microsoft Graph :
    * Organization.Read.All
    * Directory.Read.All

Check out the endpoint documentation [here](https://docs.microsoft.com/en-us/graph/api/organization-get?view=graph-rest-beta&tabs=http#permissions). It describes the required privileges to obtain information about the organization directory quota.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the package on every Centreon poller expected to monitor **Azure AD** resources:

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-AzureAD-Api
```

2. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Office 365 Azure AD** Centreon Monitoring Connector.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the package on every Centreon poller expected to monitor **Azure AD** resources:

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-AzureAD-Api
```

2. Install the **Office 365 Azure AD** Centreon Monitoring Connector RPM on the Centreon central server:

```bash
yum install centreon-pack-cloud-microsoft-office365-azuread
```

3. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Office 365 Azure AD** Centreon Monitoring Connector.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Azure AD** server settings.
* Apply the **Cloud-Microsoft-Office365-AzureAD-Api-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro                 | Description                                                                            |
|:------------|:----------------------|:---------------------------------------------------------------------------------------|
|      x      | OFFICE365CLIENTID     |                                                                                        |
|      x      | OFFICE365CLIENTSECRET |                                                                                        |
|             | OFFICE365EXTRAOPTIONS | Any extra option you may want to add to every command line (eg. a --verbose flag)      |
|      x      | OFFICE365TENANT       |                                                                                        |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_office365_azauread_api.pl \
    --plugin=cloud::microsoft::office365::azuread::plugin \
    --mode=directory-size-usage \
    --tenant='abcd1234-5678-90ab-cd12-34567890abcd' \
    --client-id='9876dcba-5432-10dc-ba98-76543210dcba' \
    --client-secret='8/RON4vUGhAcg6DRmSxc4AwgxSRoNfKg4d8xNizIMnwg=' \
    --warning-usage='90' \
    --critical-usage='95' \
    --units='%' \
    --verbose \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: Directory size usage : 265079/309000 (85.79%) | 'azure.ad.directory.usage.count'=265079;0:278100;0:293550;0;309000
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_office365_azauread_api.pl \
    --plugin=cloud::microsoft::office365::azuread::plugin \
    --mode=directory-size-usage \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_office365_azauread_api.pl \
    --plugin=cloud::microsoft::office365::azuread::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
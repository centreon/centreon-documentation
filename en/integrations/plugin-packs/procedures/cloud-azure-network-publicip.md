---
id: cloud-azure-network-publicip
title: Azure Public IP
---

## Overview

Public IP addresses enable Azure resources to communicate to Internet and public-facing Azure services. The address is dedicated
to the resource, until it's unassigned by you. A resource without a public IP assigned can communicate outbound. Azure dynamically
assigns an available IP address that isn't dedicated to the resource.

The Centreon Plugin-Pack *Azure Public IP* can rely on Azure API or Azure CLI to collect the metrics related to the
Public IP service.

## Plugin Pack Assets

### Monitored Objects

* Azure *Public IP* instances

### Discovery rules

The Centreon Plugin-Pack *Azure Public IP* includes a Host Discovery *provider* to automatically discover the Azure instances of a given
subscription and add them to the Centreon configuration.
This provider is named **Microsoft Azure Public IP**:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-network-publicip-provider.png)

> This discovery feature is only compatible with the 'api' custom mode. 'azcli' is not supported yet.

More information about the Host Discovery module is available in the Centreon documentation:
[Host Discovery](../../../monitoring/discovery/hosts-discovery.html)

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Ddos-Traffic-->

| Metric name                          | Description                   | Unit    |
|:-------------------------------------|:------------------------------|:--------|
| publicip.ddos.dropped.bytes          | Inbound bytes dropped DDoS    | B       |
| publicip.ddos.forwarded.bytes        | Inbound bytes forwarded DDoS' | B       |
| publicip.ddos.inbound.bytes          | Inbound bytes DDoS            | B       |
| publicip.ddos.packets.countpersecond | Inbound packets dropped DDoS  | count/s |

<!--Status-->

| Status name        | Description                                 |
|:-------------------|:--------------------------------------------|
| ddos-status        | Is the Public IP under Ddos attack          |
| provisioning-state | Current operational status of the Public IP |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To get data from Azure Services, following methods are available:
    * Azure API ('api') 
    * Azure CLI ('azcli')

Centreon recommends to use the API instead of the CLI for the following reasons:
    * API is much more efficient by avoiding CLI binary execution
    * API supports application authentication while CLI does not (yet)

<!--DOCUSAURUS_CODE_TABS-->

<!--Azure Monitor API-->

To use the 'api' custom mode, make sure to obtain the required information using the 
how-to below. Keep it safe until including it in a Host or Host Template definition.

* Create an *application* in Azure Active Directory:
    - Log in to your Azure account.
    - Select *Azure Active directory* in the left sidebar.
    - Click on *App registrations*.
    - Click on *+ Add*.
    - Enter Centreon as the application name (or any name of your choice), select application type(api) and sign-on-url.
    - Click on the *Create* button.

* Get *Subscription ID*
    - Log in to your Azure account.
    - Select *Subscriptions* in the left sidebar.
    - Select whichever subscription is needed.
    - Click on *Overview*.
    - **Copy the Subscription ID.**

* Get *Tenant ID*
    - Log in to your Azure account.
    - Select *Azure Active directory* in the left sidebar.
    - Click on *Properties*.
    - **Copy the directory ID.**

* Get *Client ID*
    - Log in to your Azure account.
    - Select *Azure Active directory* in the left sidebar.
    - Click on *Enterprise applications*.
    - Click on *All applications*.
    - Select the application previously created.
    - Click on *Properties*.
    - **Copy the Application ID.**

* Get *Client secret*
    - Log in to your Azure account.
    - Select *Azure Active directory* in the left sidebar.
    - Click on *App registrations*.
    - Select the application previously created.
    - Click on *All settings*.
    - Click on *Keys*.
    - Enter the key description and select the duration.
    - Click on *Save*.
    - **Copy and store the key value. You won't be able to retrieve it after you leave this page.**

<!--Azure AZ CLI-->

To use the 'azcli' custom mode, install the required packages on every Centreon Poller expected to 
monitor Azure Resources using CLI:

- The CLI needs at least Python version 2.7
(<https://github.com/Azure/azure-cli/blob/dev/doc/install_linux_prerequisites.md>).

On RPM-Based distributions, use the command below to install it using *root* or 'sudo':

```shell
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo echo -e "[azure-cli]\nname=Azure CLI\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo
sudo yum install azure-cli
```

Then, use the *centreon-engine* account to obtain a token using command below: 

```shell
su - centreon-engine
az login
```

The shell will output this message including an authentication code:

    *To sign in, use a web browser to open the page https://microsoft.com/devicelogin* 
    *and enter the code CWT4WQZAD to authenticate.*

Go to <https://microsoft.com/devicelogin> and enter the code. 

Connect using a monitoring service account, as a result, the shell should prompt
information below:

```shell
    [
      {
        "cloudName": "AzureCloud",
        "id": "0ef83f3a-d83e-2039-d930-309df93acd93d",
        "isDefault": true,
        "name": "N/A(tenant level account)",
        "state": "Enabled",
        "tenantId": "0ef83f3a-03cd-2039-d930-90fd39ecd048",
        "user": {
          "name": "email@mycompany.onmicrosoft.com",
          "type": "user"
        }
      }
    ]
```

Credentials are now stored locally in the .accessTokens.json file so the Plugin 
can use it. 

<!--END_DOCUSAURUS_CODE_TABS-->

## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1.  Install the Centreon Plugin package on every Centreon Poller expected to monitor Azure Public IP resources:

```bash
yum install centreon-plugin-Cloud-Azure-Network-PublicIP-Api
```

2. On the Centreon Web interface, install the *Azure Public IP* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor Azure Public IP resources:

```bash
yum install centreon-plugin-Cloud-Azure-Network-PublicIP-Api
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-azure-network-publicip.noarch
```

3. On the Centreon Web interface, install the *Azure Public IP* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* In the *IP Address/FQDN* field, set the following IP address: '127.0.0.1'.

* Select the *Cloud-Azure-Network-PublicIP-custom* template to apply to the Host.
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.
These mandatory Macros differ regarding the custom mode used:

<!--DOCUSAURUS_CODE_TABS-->

<!--Azure Monitor API-->

| Mandatory | Nom               | Description                  |
|:----------|:------------------|:-----------------------------|
| X         | AZURECUSTOMMODE   | Custom mode 'api'            |
| X         | AZURESUBSCRIPTION | Subscription ID              |
| X         | AZURETENANT       | Tenant ID                    |
| X         | AZURECLIENTID     | Client ID                    |
| X         | AZURECLIENTSECRET | Client secret                |
| X         | AZURERESOURCE     | Id of the Public IP instance |

<!--Azure AZ CLI-->

| Mandatory | Nom               | Description                  |
|:----------|:------------------|:-----------------------------|
| X         | AZURECUSTOMMODE   | Custom mode 'azcli'          |
| X         | AZURESUBSCRIPTION | Subscription ID              |
| X         | AZURERESOURCE     | Id of the Public IP instance |

<!--END_DOCUSAURUS_CODE_TABS-->

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* 
user account and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_azure_network_publicip_api.pl \
    --plugin=cloud::azure::network::publicip::plugin \
    --mode=status \
    --custommode=api \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --resource='IPA001ABCD' \
    --timeframe='900' \
    --interval='PT5M' \
    --critical-provisioning-state='%{state} =~ /Failed/i' \
    --critical-ddos-status='%{status} =~ /DDOS Attack ongoing/i'
```

Expected command output is shown below:

```bash
OK: Public IP instance 'IPA001ABCD', IP: 1.2.3.4 (IPv4) current DDOS status: "OK", current provisioning state: "Succeeded" |
```

The command above collects the *status* of an Azure Public IP instance using the 'api' custom-mode
(```--plugin=cloud::azure::network::publicip::plugin --mode=status --custommode=api```).
This Public IP is identified by its id (```--resource='LBA001ABCD'```) and the authentication parameters
to be used with the custom mode are specified in the options (```--subscription='xxxxxxxxx' --tenant='xxxxxxx'
--client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```).

The calculated status would be based on the worst status collected of a 900 secondes / 15 min period (```--timeframe='900'```) sample
where a status would be fetched every 5 minutes (```--interval='PT5M'```).

This command would trigger a CRITICAL alarm in the following cases:
* The operational status of the resource is *Failed* (```--critical-provisioning-state='%{state} =~ /Failed/i'```)
* a DDOS attack on the Public IP is ongoing (```--critical-ddos-status='%{status} =~ /DDOS Attack ongoing/i'```)

All the available options for a given mode can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_azure_network_publicip_api.pl \
    --plugin=cloud::azure::network::publicip::plugin \
    --mode=datapath \
    --help
```

### Troubleshooting

#### The Azure credentials have changed and the Plugin does not work anymore

The Plugin is using a cache file to keep connection information and avoid an authentication at each call. 
If some of the authentication parameters change, you must delete the cache file. 

The cache file can be found within  ```/var/lib/centreon/centplugins/``` folder with a name similar to azure_api_<md5>_<md5>_<md5>_<md5>.

#### ```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```

When I run my command I obtain the following error message:
```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```.

It means that some parameters used to authenticate the API request are wrong. The 'ERROR_NAME' string gives 
some hints about where the problem stands. 

As an example, if my Client ID or Client Secret are wrong, 'ERROR_DESC' value will be 'invalid_client'. 

#### ```UNKNOWN: 500 Can't connect to login.microsoftonline.com:443```

This error message means that the Centreon Plugin couldn't successfully connect to the Azure Login API. Check that no third party
device (such as a firewall) is blocking the request. A proxy connection may also be necessary to connect to the API.
This can be done by using this option in the command: ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values```

This command result means that Azure does not have any value for the requested period.
This result can be overriden by adding the ```--zeroed``` option in the command. This will force a value of 0 when no metric has
been collected and will prevent the UNKNOWN error message.

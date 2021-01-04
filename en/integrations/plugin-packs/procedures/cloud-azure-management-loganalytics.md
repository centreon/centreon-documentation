---
id: cloud-azure-management-loganalytics
title: Azure Log Analytics
---

## Overview

Log Analytics is a tool in the Azure portal to edit and run log queries from data 
collected by Azure Monitor Logs and interactively analyze their results.

The *Azure Log Analytics* Plugin-Pack allows you to run KQL queries and monitor 
number of matched items. It can rely on both Azure API and Azure CLI.

## Plugin Pack Assets

### Monitored Objects

* Number of logs lines matching query expression

### Collected Metrics


<!--DOCUSAURUS_CODE_TABS-->

<!--Kusto-Query-->

| Metric name               | Description                                        | Unit  |
|:--------------------------|:-------------------------------------------------- |:----- |
| match.count               | The number of logs matching the query expression.  | count |

The KUSTOQUERY Macro is mandatory. 

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

To use 'api' custom-mode, make sure to obtain the required information using the 
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

To use the *azcli* custom mode, install the required packages on every Centreon poller expected to 
monitor Azure Resources using CLI:

- The CLI needs at least Python version 2.7
(<https://github.com/Azure/azure-cli/blob/dev/doc/install_linux_prerequisites.md>).

On RPM-Based distributions, use the command below to install it using root or sudo:

```shell
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo echo -e "[azure-cli]\nname=Azure CLI\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo
sudo yum install azure-cli
```

Then, use the centreon-engine account to obtain a token using command below: 

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

1.  Install the Centreon Plugin package on every Centreon poller expected to run query against Azure Log Analytics:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Log-Analytics-Api
```

2. On the Centreon Web interface, install the *Azure Log Analytics* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to run query against Azure Log Analytics:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Log-Analytics-Api
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Log-Analytics-Api
```

3. On the Centreon Web interface, install the *Azure Log Analytics* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* In the *IP Address/FQDN* field, set the following IP address: '127.0.0.1'.

* Select the *Cloud-Azure-Management-Log-Analytics-custom* template to apply to the Host.
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.

The Macros vary depending on the custom-mode used.

<!--DOCUSAURUS_CODE_TABS-->

<!--Azure Monitor API-->

| Mandatory   | Name              | Description       |
| :---------- | :---------------- | :---------------- |
| X           | AZURECUSTOMMODE   | Custom mode 'api' |
| X           | AZURESUBSCRIPTION | Subscription ID   |
| X           | AZURETENANT       | Tenant ID         |
| X           | AZURECLIENTID     | Client ID         |
| X           | AZURECLIENTSECRET | Client secret     |

<!--Azure AZ CLI-->

| Mandatory   | Name              | Description         |
| :---------- | :---------------- | :------------------ |
| X           | AZURECUSTOMMODE   | Custom mode 'azcli' |
| X           | AZURESUBSCRIPTION | Subscription ID     |

<!--END_DOCUSAURUS_CODE_TABS-->

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* 
user account and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins//centreon_azure_management_loganalytics_api.pl \
    --plugin=cloud::azure::management::loganalytics::plugin \
    --mode=kusto-query --custommode='api' --management-endpoint='https://api.loganalytics.io' \
    --subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'
    --workspace-id='xxxxxxxxxxxxxxx' --custom-output='Number of computer without heartbeat for more than 2 days: %d' \
    --query='Heartbeat | summarize LastCall = max(TimeGenerated) by Computer | where LastCall < ago(2d)' \
    --critical-match='0'
```

Expected command output is shown below:

```bash
OK: Number of computer without heartbeat for more than 2 days: 1 | 'match.count'=1;;;0;
```

The command above runs a KustoQL query against Azure Log Analytics using 'api' custom-mode (```-plugin=cloud::azure::management::loganalytics::plugin --mode=kusto-query --custommode='api'```).

All the parameters to obtain a token are specified in the corresponding options 
(```--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```). 

The query runs in a specific workspace (```--workspace-id='xxxxxxxxxxxxxxx'```) and you can customize 
the output message to make it more relevant (```--custom-output='Number of computer without heartbeat for more than 2 days: %d'```). 

The Query expression itself is included and can be copy/pasted from the one used in the Azure Analytics Web UI. The example is
a query returning the number of lines where the LastCall is older than two days. 
(```--query='Heartbeat | summarize LastCall = max(TimeGenerated) by Computer | where LastCall < ago(2d)'```)

The query's timespan uses the ISO-8601 time format and can be specified with the option ```--timespan```.

All the available options for a given mode can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_azure_management_loganalytics_api.pl \
    --plugin=cloud::azure::management::loganalytics::plugin \
    --mode=kusto-query
    --help
```

### Troubleshooting

#### ```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```

When I run my command I obtain the following error message:
```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```.

It means that some parameters used to authenticate the API request are wrong. The 'ERROR_NAME' string gives 
some hints about where the problem stands. 

As an example, if my Client ID or Client Secret are wrong, 'ERROR_DESC' value will be 'invalid_client'. 

#### The Azure credentials have changed and the Plugin does not work anymore

The Plugin is using a cache file to keep connection information and avoid an authentication at each call. 
If some of the authentication parameters change, you must delete the cache file. 

The cache file can be found within  ```/var/lib/centreon/centplugins/``` folder with a name similar to azure_api_<md5>_<md5>_<md5>_<md5>.

#### UNKNOWN: 500 Can't connect to login.microsoftonline.com:443 

This error message means that the Centreon Plugin couldn't successfully connect 
to the Azure Login API. Check that no third party device (such as a firewall)
is blocking the request. A proxy connection may also be necessary to connect to the API.
This can be done by using this option in the command: ```--proxyurl='http://proxy.mycompany:8080'```.

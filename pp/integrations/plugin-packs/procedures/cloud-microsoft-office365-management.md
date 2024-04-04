---
id: cloud-microsoft-office365-management
title: Office 365 Management
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Office 365 is a line of online subscription services offered by Microsoft in their Microsoft Office product suite. 
Office 365 covers document creation and management, emailing, video conferencing and many more collaboration offerings.
The Centreon Plugin relies on the Office 365 Graph API to collect and monitor the Office 365 information and metrics.

## Pack assets

### Templates

The Monitoring Connector **Office 365** brings a host template:

* **Cloud-Microsoft-Office365-Management-Api-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Microsoft-Office365-Management-Api-custom" label="Cloud-Microsoft-Office365-Management-Api-custom">

| Service Alias  | Service Template                                               | Service Description   |
|:---------------|:---------------------------------------------------------------|:----------------------|
| Service-Status | Cloud-Microsoft-Office365-Management-Service-Status-Api-custom | Check services status |

> The services listed above are created automatically when the **Cloud-Microsoft-Office365-Management-Api-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias   | Service Template                                                | Service Description                      |
|:----------------|:----------------------------------------------------------------|:-----------------------------------------|
| App-Credentials | Cloud-Microsoft-Office365-Management-App-Credentials-Api-custom | Check application credentials expiration |
| Subscriptions   | Cloud-Microsoft-Office365-Management-Subscriptions-Api-custom   | Check subscriptions                      |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="App-Credentials" label="App-Credentials">

| Metric name                                                    | Unit  |
|:---------------------------------------------------------------|:------|
| *applications*~*password*#password-status                      | N/A   |
| *applications*~*password*#application.password.expires.seconds | s     |
| *applications*~*key*#key-status                                | N/A   |
| *applications*~*key*#application.key.expires.seconds           | s     |

</TabItem>
<TabItem value="Service-Status" label="Service-Status">

| Metric name       | Unit  |
|:------------------|:------|
| *services*#status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Subscriptions" label="Subscriptions">

| Metric name                                   | Unit  |
|:----------------------------------------------|:------|
| *subscriptions*#status                        | N/A   |
| *subscriptions*#subscription.usage.count      | count |
| *subscriptions*#subscription.free.count       | count |
| *subscriptions*#subscription.usage.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

More information is available in the official Microsoft documentation: https://docs.microsoft.com/en-us/graph/use-the-api?context=graph%2Fapi%2F1.0&view=graph-rest-1.0

### Register an application in Azure AD

The Office 365 Management APIs use Azure AD to provide secure authentication to Office 365 tenant data. 
To access the Office 365 Management APIs, you need to register your app in Azure AD, and as part of the configuration, you will specify the permission levels your app needs to access the APIs.

To register your app in Azure AD, you need a subscription to Office 365 and a subscription to Azure that has been associated with your Office 365 subscription.
After you have a Microsoft tenant with the proper subscriptions, you can register your application in Azure AD.

1. Sign into the Azure management portal, using the credential of your Microsoft tenant that has the subscription to Office 365 you wish to use. 
You can also access the Azure Management Portal via a link that appears in the left navigation pane in the Office admin portal.
2. In the left navigation panel, choose *Active Directory*. Make sure the *Directory* tab is selected, and then select the directory name.
3. On the directory page, select *Applications*. Azure AD displays a list of the applications currently installed in your tenancy.
4. Choose *Add*.
5. Select *Add an application my organization is developing*.
6. Enter the name of your application and specify the Type as "CENTREON API WEB".
7. Enter the appropriate App properties:
* *SIGN-ON URL*: The URL where users can sign in and use your app. You can change this later as needed.
* *APP ID URI*. The URI used as a unique logical identifier for your app. The URI must be in a verified custom domain for an external user to grant your app access to their data in Windows Azure AD. 

#### Configure your application properties in Azure AD

Now that your application is registered, there are several important properties you must specify that determine how your application functions within Azure AD 
and how tenant admins will grant consent to allow your application to access their data by using the Office 365 Management APIs.

1. *CLIENT ID*: This value is automatically generated by Azure AD. Your application will use this value when requesting consent from tenant admins and when requesting app-only tokens from Azure AD.
2. *APPLICATION IS MULTI-TENANT*: This property must be set to YES to allow tenant admins to grant consent to your app to access their data by using the Office 365 Management APIs. 
If this property is set to NO, your application will only be able to access your own tenant's data.
3. *REPLY URL*: This is the URL that a tenant admin will be redirected to after granting consent to allow your application to access their data by using the Office 365 Management APIs. 
You can configure multiple reply URLs as needed. Azure automatically sets the first one to match the sign-on URL you specified when you created the application, but you can change this value as needed.

Be sure to choose *Save* after making any changes to these properties.

#### Generate a new key for your application

1. In the Azure Management Portal, select your application and choose *Configure* in the top menu. Scroll down to *keys*.
2. Select the duration for your key, and choose *Save*.
3. Azure displays the app secret only after saving it. Select the Clipboard icon to copy the client secret to the Clipboard.
> Warning : As the app secret will only be displayed once, remember to save it for later.

#### Configure an X.509 certificate to enable service-to-service calls

You must configure an X.509 certificate with your application to be used as client credentials when requesting app-only access tokens from Azure AD. There are two steps to the process:

* Obtain an X.509 certificate: You can use a self-signed certificate or a certificate issued by publicly trusted certificate authority.
* Modify your application manifest to include the thumbprint and public key of your certificate.

#### Specify the permissions your app requires to access the Office 365 Management APIs

Finally, you need to specify exactly what permissions your app requires of the Office 365 Management APIs. To do so, you add access to the Office 365 Management APIs to your app, and then you specify the permission(s) you need:
1. In the Azure Management Portal, select your application, and choose *Configure* in the top menu. 
Scroll down to *permissions to other applications*, and choose *Add application*.
2. Select the *Office 365 Management APIs* so that it appears in the *Selected* column, and then select the check mark in the lower right 
to save your selection and return to the main configuration page for your application.
3. The Office Management APIs now appear in the list of applications to which your application requires permissions. 
Under both *Application Permissions* and *Delegated Permissions*, select the permissions your application requires. 
Refer to the specific API reference for more details about each permission.

#### Add permissions to Microsoft Graph

You also need to specify permissions for **Microsoft Graph** for both the *Application* and *Delegated* types of permissions. You will have to set the following privileges:

```
  "roles": [
    "ServiceMessage.Read.All",
    "ServiceHealth.Read.All",
    "Reports.Read.All",
    "Directory.Read.All",
    "User.Read.All",
    "Application.Read.All"
  ],
```

#### Request access tokens from Azure AD

After a tenant admin grants consent, your application receives an authorization code as a query string parameter 
when Azure AD redirects the tenant admin to your designated URL.

More information on how to get the token based on the authorization code is detailed here:
https://docs.microsoft.com/en-us/office/office-365-management-api/get-started-with-office-365-management-apis#request-an-access-token-using-the-authorization-code

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-microsoft-office365-management
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-microsoft-office365-management
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-microsoft-office365-management
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-microsoft-office365-management
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Office 365** connector through
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
dnf install centreon-plugin-Cloud-Microsoft-Office365-Management-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Microsoft-Office365-Management-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-microsoft-office365-management-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Management-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Cloud-Microsoft-Office365-Management-Api-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                 | Description                                                                                          | Default value     | Mandatory   |
|:----------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| OFFICE365CLIENTID     | Set Office 365 client ID                                                                             |                   | X           |
| OFFICE365CLIENTSECRET | Set Office 365 client secret                                                                         |                   | X           |
| OFFICE365TENANT       | Set Office 365 tenant ID                                                                             |                   | X           |
| OFFICE365EXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="App-Credentials" label="App-Credentials">

| Macro                   | Description                                                                                                                                                            | Default value           | Mandatory   |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERAPPNAME           | Filter applications (can be a regexp)                                                                                                                                  |                         |             |
| WARNINGKEYEXPIRES       | Thresholds                                                                                                                                                             |                         |             |
| CRITICALKEYEXPIRES      | Thresholds                                                                                                                                                             |                         |             |
| CRITICALKEYSTATUS       | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /expired/i'). You can use the following variables: %{status}, %{id}, %{app\_name} | %{status} =~ /expired/i |             |
| WARNINGKEYSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{id}, %{app\_name}                                       |                         |             |
| WARNINGPASSWORDEXPIRES  | Thresholds                                                                                                                                                             |                         |             |
| CRITICALPASSWORDEXPIRES | Thresholds                                                                                                                                                             |                         |             |
| CRITICALPASSWORDSTATUS  | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /expired/i'). You can use the following variables: %{status}, %{id}, %{app\_name} | %{status} =~ /expired/i |             |
| WARNINGPASSWORDSTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{id}, %{app\_name}                                       |                         |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                     | --verbose               |             |

</TabItem>
<TabItem value="Service-Status" label="Service-Status">

| Macro             | Description                                                                                                                                                                                                        | Default value                                       | Mandatory   |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| FILTERSERVICENAME | Filter services (can be a regexp)                                                                                                                                                                                  |                                                     |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /serviceOperational\|serviceRestored/i'). You can use the following variables: %{service\_name}, %{status}, %{classification} | %{status} !~ /serviceOperational\|serviceRestored/i |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %{service\_name}, %{status}, %{classification}                                                                   |                                                     |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                 |                                                     |             |

</TabItem>
<TabItem value="Subscriptions" label="Subscriptions">

| Macro                         | Description                                                                                                                                                                  | Default value                     | Mandatory   |
|:------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| FILTERSKUPARTNUMBER           | Filter subscriptions by SKU part number (can be a regexp)                                                                                                                    |                                   |             |
| WARNINGSTATUS                 | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /warning/i'). You can use the following variables: %{capabilityStatus}, %{skuPartNumber} | %{capabilityStatus} =~ /warning/i |             |
| CRITICALSTATUS                | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{capabilityStatus}, %{skuPartNumber}                                     |                                   |             |
| WARNINGSUBSCRIPTIONUSAGE      | Thresholds                                                                                                                                                                   |                                   |             |
| CRITICALSUBSCRIPTIONUSAGE     | Thresholds                                                                                                                                                                   |                                   |             |
| WARNINGSUBSCRIPTIONUSAGEFREE  | Thresholds                                                                                                                                                                   |                                   |             |
| CRITICALSUBSCRIPTIONUSAGEFREE | Thresholds                                                                                                                                                                   |                                   |             |
| WARNINGSUBSCRIPTIONUSAGEPRCT  | Thresholds                                                                                                                                                                   |                                   |             |
| CRITICALSUBSCRIPTIONUSAGEPRCT | Thresholds                                                                                                                                                                   |                                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                           | --verbose                         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_office365_management_api.pl \
	--plugin=cloud::microsoft::office365::management::plugin \
	--mode=subscriptions \
	--tenant='' \
	--client-id='' \
	--client-secret=''  \
	--filter-sku-part-number='' \
	--warning-status='%{capabilityStatus} =~ /warning/i' \
	--critical-status='' \
	--warning-subscription-usage='' \
	--critical-subscription-usage='' \
	--warning-subscription-usage-free='' \
	--critical-subscription-usage-free='' \
	--warning-subscription-usage-prct='' \
	--critical-subscription-usage-prct='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All subscriptions are ok | '*subscriptions*#subscription.usage.count'=;;;0;total'*subscriptions*#subscription.free.count'=;;;0;total'*subscriptions*#subscription.usage.percentage'=%;;;0;100
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_office365_management_api.pl \
	--plugin=cloud::microsoft::office365::management::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                      | Linked service template                                         |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------|
| app-credentials [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/microsoft/office365/management/mode/appcredentials.pm)]       | Cloud-Microsoft-Office365-Management-App-Credentials-Api-custom |
| list-services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/microsoft/office365/management/mode/listservices.pm)]           | Not used in this Monitoring Connector                           |
| list-subscriptions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/microsoft/office365/management/mode/listsubscriptions.pm)] | Not used in this Monitoring Connector                           |
| service-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/microsoft/office365/management/mode/servicestatus.pm)]         | Cloud-Microsoft-Office365-Management-Service-Status-Api-custom  |
| subscriptions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/microsoft/office365/management/mode/subscriptions.pm)]          | Cloud-Microsoft-Office365-Management-Subscriptions-Api-custom   |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Microsoft Office 365 Graph API      To connect to the Office 365 Graph API, you must register an     application.      Follow the 'How-to guide' at     https://docs.microsoft.com/en-us/graph/auth-register-app-v2?view=graph-r     est-1.0      This custom mode is using the 'OAuth 2.0 Client Credentials Grant Flow'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --tenant                                   | Set Office 365 tenant ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --client-id                                | Set Office 365 client ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --client-secret                            | Set Office 365 client secret.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --login-endpoint                           | Set Office 365 login endpoint URL (default: 'https://login.microsoftonline.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --graph-endpoint                           | Set Office 365 graph endpoint URL (default: 'https://graph.microsoft.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --timeout                                  | Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="App-Credentials" label="App-Credentials">

| Option                     | Description                                                                                                                                                               |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-app-name          | Filter applications (can be a regexp).                                                                                                                                    |
| --warning-key-status       | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{id}, %{app\_name}.                                         |
| --critical-key-status      | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /expired/i'). You can use the following variables: %{status}, %{id}, %{app\_name}.   |
| --warning-password-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{id}, %{app\_name}.                                         |
| --critical-password-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /expired/i'). You can use the following variables: %{status}, %{id}, %{app\_name}.   |
| --unit                     | Select the time unit for the expiration thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is secondss.              |
| --warning-* --critical-*   | Thresholds. Can be: 'key-expires', 'password-expires'.                                                                                                                    |

</TabItem>
<TabItem value="Service-Status" label="Service-Status">

| Option                | Description                                                                                                                                                                                                           |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-service-name | Filter services (can be a regexp).                                                                                                                                                                                    |
| --warning-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{service\_name}, %{status}, %{classification}                                                                      |
| --critical-status     | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /serviceOperational\|serviceRestored/i'). You can use the following variables: %{service\_name}, %{status}, %{classification}    |

</TabItem>
<TabItem value="Subscriptions" label="Subscriptions">

| Option                   | Description                                                                                                                                                                    |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-sku-part-number | Filter subscriptions by SKU part number (can be a regexp).                                                                                                                     |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /warning/i'). You can use the following variables: %{capabilityStatus}, %{skuPartNumber}   |
| --critical-status        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{capabilityStatus}, %{skuPartNumber}                                       |
| --warning-* --critical-* | Thresholds. Can be: 'subscription-usage', 'subscription-usage-free', 'subscription-usage-prct'.                                                                                |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_office365_management_api.pl \
	--plugin=cloud::microsoft::office365::management::plugin \
	--mode=subscriptions \
	--help
```

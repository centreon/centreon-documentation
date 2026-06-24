---
id: cloud-microsoft-office365-onedrive
slug: /cloud-microsoft-office365-onedrive
title: Office 365 OneDrive
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Office 365 OneDrive** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Office 365 OneDrive** brings a host template:

* **Cloud-Microsoft-Office365-Onedrive-Api-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Microsoft-Office365-Onedrive-Api-custom" label="Cloud-Microsoft-Office365-Onedrive-Api-custom">

| Service Alias           | Service Template                                             | Service Description                                                          | Discovery |
|:------------------------|:-------------------------------------------------------------|:-----------------------------------------------------------------------------|:---------:|
| Site-Usage-OneDrive     | Cloud-Microsoft-Office365-Onedrive-Usage-Api-custom          | Check OneDrive sites usage                                                   |     X     |
| Users-Activity-OneDrive | Cloud-Microsoft-Office365-Onedrive-Users-Activity-Api-custom | Check OneDrive users activity (reporting period over the last refreshed day) |           |

> The services listed above are created automatically when the **Cloud-Microsoft-Office365-Onedrive-Api-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                                         | Description                                     |
|:--------------------------------------------------|:------------------------------------------------|
| Cloud-Microsoft-Office365-Onedrive-Api-Site-Usage | Discover OneDrive sites and monitor their usage |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Site-Usage-OneDrive" label="Site-Usage-OneDrive">

| Name                                       | Unit  |
|:-------------------------------------------|:------|
| active-sites                               | N/A   |
| onedrive.sites.active.usage.total.bytes    | B     |
| onedrive.sites.inactive.usage.total.bytes  | B     |
| onedrive.sites.active.files.total.count    | count |
| onedrive.sites.inactive.files.total.count  | count |
| onedrive.sites.files.active.total.count    | count |
| usage                                      | N/A   |
| usage                                      | N/A   |
| *sites1*#onedrive.sites.files.count        | count |
| *sites2*#onedrive.sites.files.count        | count |
| *sites1*#onedrive.sites.files.active.count | count |
| *sites2*#onedrive.sites.files.active.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Users-Activity-OneDrive" label="Users-Activity-OneDrive">

| Name                                                 | Unit  |
|:-----------------------------------------------------|:------|
| active-users                                         | N/A   |
| onedrive.users.files.viewed.total.count              | count |
| onedrive.users.files.synced.total.count              | count |
| onedrive.users.files.shared.internally.total.count   | count |
| onedrive.users.files.shared.externally.total.count   | count |
| *users*#onedrive.users.files.viewed.count            | count |
| *users*#onedrive.users.files.synced.count            | count |
| *users*#onedrive.users.files.shared.internally.count | count |
| *users*#onedrive.users.files.shared.externally.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

Refer to the official documentation of Office 365 Management or follow the link
in the [More information section](#more-information) to create an Office 365 account and get help
about the management features.

### Register an application

The Office 365 Management API uses Azure AD to authenticate against Office 365. To
access the Office 365 Management API, you need to register your application in
Azure AD. *Application* is here used by Microsoft as a conceptual term,
referring not only to the application software, but also to the Azure AD
registration and role in authentication/authorization "conversations" at runtime.
(https://docs.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals)

More detailed information is available [here](./cloud-microsoft-office365-management.md#prerequisites).

### Office 365 Management API authorization

To collect data from OneDrive Online, you need to specify the following
authorization:

* Microsoft Graph :
    * Reports.Read.All (Type : Application)
    * User.Read (Type : Delegated)
* Office 365 Management APIs :
    * ServiceHealth.Read (Type : Application)
    * ActivityFeed.Read (Type : Application)

### More information

You can access to the official documentation to register your application,
get your *ID client*, *ID secret* and your *Tenant ID* by following this link:
https://docs.microsoft.com/en-us/office/office-365-management-api/get-started-with-office-365-management-apis

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-microsoft-office365-onedrive
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-microsoft-office365-onedrive
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-microsoft-office365-onedrive
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-microsoft-office365-onedrive
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Office 365 OneDrive** connector through
the **Configuration > Connectors > Monitoring Connectors** menu.

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
dnf install centreon-plugin-Cloud-Microsoft-Office365-Onedrive-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Microsoft-Office365-Onedrive-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-microsoft-office365-onedrive-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Onedrive-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Cloud-Microsoft-Office365-Onedrive-Api-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                 | Description                                                                                                                              | Default value | Mandatory |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| OFFICE365CLIENTID     | Set Office 365 client ID                                                                                                                 |               |     X     |
| OFFICE365CLIENTSECRET | Set Office 365 client secret                                                                                                             |               |     X     |
| OFFICE365TENANT       | Set Office 365 tenant ID                                                                                                                 |               |     X     |
| OFFICE365EXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Site-Usage-OneDrive" label="Site-Usage-OneDrive">

| Macro                          | Description                                                                                                                            | Default value | Mandatory |
|:-------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| UNITS                          | Unit of thresholds ('%', 'count')                                                                                                      | %             |           |
| FILTERCOUNTERS                 | Only display some counters (regexp can be used). Example to hide per user counters: --filter-counters='active-sites\                   | total'        | active-sites\|total |             |
| FILTERURL                      | Filter on url                                                                                                                          |               |           |
| FILTEROWNER                    | Filter on owner                                                                                                                        |               |           |
| WARNINGACTIVEFILECOUNT         | Threshold                                                                                                                              |               |           |
| CRITICALACTIVEFILECOUNT        | Threshold                                                                                                                              |               |           |
| WARNINGACTIVESITES             | Threshold                                                                                                                              |               |           |
| CRITICALACTIVESITES            | Threshold                                                                                                                              |               |           |
| WARNINGFILECOUNT               | Threshold                                                                                                                              |               |           |
| CRITICALFILECOUNT              | Threshold                                                                                                                              |               |           |
| WARNINGTOTALACTIVEFILECOUNT    | Threshold                                                                                                                              |               |           |
| CRITICALTOTALACTIVEFILECOUNT   | Threshold                                                                                                                              |               |           |
| WARNINGTOTALFILECOUNTACTIVE    | Threshold                                                                                                                              |               |           |
| CRITICALTOTALFILECOUNTACTIVE   | Threshold                                                                                                                              |               |           |
| WARNINGTOTALFILECOUNTINACTIVE  | Threshold                                                                                                                              |               |           |
| CRITICALTOTALFILECOUNTINACTIVE | Threshold                                                                                                                              |               |           |
| WARNINGTOTALUSAGEACTIVE        | Threshold                                                                                                                              |               |           |
| CRITICALTOTALUSAGEACTIVE       | Threshold                                                                                                                              |               |           |
| WARNINGTOTALUSAGEINACTIVE      | Threshold                                                                                                                              |               |           |
| CRITICALTOTALUSAGEINACTIVE     | Threshold                                                                                                                              |               |           |
| WARNINGUSAGE                   | Threshold                                                                                                                              |               |           |
| CRITICALUSAGE                  | Threshold                                                                                                                              |               |           |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="Users-Activity-OneDrive" label="Users-Activity-OneDrive">

| Macro                              | Description                                                                                                                            | Default value     | Mandatory |
|:-----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:---------:|
| FILTERCOUNTERS                     | Only display some counters (regexp can be used). Example to hide per user counters: --filter-counters='active\                         |total'   | active\|total     |             |
| UNITS                              | Unit of thresholds  ('%', 'count')                                                                                                     | %                 |           |
| FILTERUSER                         | Filter users                                                                                                                           |                   |           |
| WARNINGACTIVEUSERS                 | Threshold                                                                                                                              |                   |           |
| CRITICALACTIVEUSERS                | Threshold                                                                                                                              |                   |           |
| WARNINGSHAREDEXTFILECOUNT          | Threshold                                                                                                                              |                   |           |
| CRITICALSHAREDEXTFILECOUNT         | Threshold                                                                                                                              |                   |           |
| WARNINGSHAREDINTFILECOUNT          | Threshold                                                                                                                              |                   |           |
| CRITICALSHAREDINTFILECOUNT         | Threshold                                                                                                                              |                   |           |
| WARNINGSYNCEDFILECOUNT             | Threshold                                                                                                                              |                   |           |
| CRITICALSYNCEDFILECOUNT            | Threshold                                                                                                                              |                   |           |
| WARNINGTOTALSHAREDEXTFILECOUNT     | Threshold                                                                                                                              |                   |           |
| CRITICALTOTALSHAREDEXTFILECOUNT    | Threshold                                                                                                                              |                   |           |
| WARNINGTOTALSHAREDINTFILECOUNT     | Threshold                                                                                                                              |                   |           |
| CRITICALTOTALSHAREDINTFILECOUNT    | Threshold                                                                                                                              |                   |           |
| WARNINGTOTALSYNCEDFILECOUNT        | Threshold                                                                                                                              |                   |           |
| CRITICALTOTALSYNCEDFILECOUNT       | Threshold                                                                                                                              |                   |           |
| WARNINGTOTALVIEWEDEDITEDFILECOUNT  | Threshold                                                                                                                              |                   |           |
| CRITICALTOTALVIEWEDEDITEDFILECOUNT | Threshold                                                                                                                              |                   |           |
| WARNINGVIEWEDEDITEDFILECOUNT       | Threshold                                                                                                                              |                   |           |
| CRITICALVIEWEDEDITEDFILECOUNT      | Threshold                                                                                                                              |                   |           |
| EXTRAOPTIONS                       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_office365_onedrive_api.pl \
	--plugin=cloud::microsoft::office365::onedrive::plugin \
	--mode=site-usage \
	--tenant='XXXX' \
	--client-id='XXXX' \
	--client-secret='XXXX'  \
	--filter-url='' \
	--filter-owner='' \
	--warning-usage='' \
	--critical-usage='' \
	--warning-file-count='' \
	--critical-file-count='' \
	--warning-active-file-count='' \
	--critical-active-file-count='' \
	--warning-total-usage-active='' \
	--critical-total-usage-active='' \
	--warning-total-usage-inactive='' \
	--critical-total-usage-inactive='' \
	--warning-total-file-count-active='' \
	--critical-total-file-count-active='' \
	--warning-total-file-count-inactive='' \
	--critical-total-file-count-inactive='' \
	--warning-total-active-file-count='' \
	--critical-total-active-file-count='' \
	--warning-active-sites='' \
	--critical-active-sites='' \
	--units=% \
	--filter-counters='active-sites|total' 
```

The expected command output is shown below:

```bash
OK: Usage (active sites): 75 75 Usage (inactive sites): 46 46 File Count (active sites): 13 File Count (inactive sites): 19 Active File Count (active sites): 55 All sites usage are ok | 'active-sites'=56;;;;'onedrive.sites.active.usage.total.bytes'=75B;;;0;'onedrive.sites.inactive.usage.total.bytes'=46B;;;0;'onedrive.sites.active.files.total.count'=13;;;0;'onedrive.sites.inactive.files.total.count'=19;;;0;'onedrive.sites.files.active.total.count'=55;;;0;'*sites*#usage'=;;;;'*sites*#onedrive.sites.files.count'=;;;0;'*sites*#onedrive.sites.files.active.count'=;;;0;
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
/usr/lib/centreon/plugins/centreon_office365_onedrive_api.pl \
	--plugin=cloud::microsoft::office365::onedrive::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                            | Linked service template                                      |
|:------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------|
| list-sites [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/microsoft/office365/onedrive/mode/listsites.pm)]         | Used for service discovery                                   |
| site-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/microsoft/office365/onedrive/mode/siteusage.pm)]         | Cloud-Microsoft-Office365-Onedrive-Usage-Api-custom          |
| users-activity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/microsoft/office365/onedrive/mode/usersactivity.pm)] | Cloud-Microsoft-Office365-Onedrive-Users-Activity-Api-custom |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --memcached                                |   Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 |   Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --memexpiration                            |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --tenant                                   |   Set Office 365 tenant ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --client-id                                |   Set Office 365 client ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --client-secret                            |   Set Office 365 client secret.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --login-endpoint                           |   Set Office 365 login endpoint URL (default: 'https://login.microsoftonline.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --graph-endpoint                           |   Set Office 365 graph endpoint URL (default: 'https://graph.microsoft.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --timeout                                  |   Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Site-Usage-OneDrive" label="Site-Usage-OneDrive">

| Option            | Description                                                                                                                                                                                                                                                                                  |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-*        |   Filter sites. Can be: 'url', 'owner' (can be a regexp).                                                                                                                                                                                                                                    |
| --warning-*       |   Warning threshold. Can be: 'active-sites', 'total-usage-active' (count), 'total-usage-inactive' (count), 'total-file-count-active' (count), 'total-file-count-inactive' (count), 'total-active-file-count' (count), 'usage' (count), 'file-count' (count), 'active-file-count' (count).    |
| --critical-*      |   Critical threshold. Can be: 'active-sites', 'total-usage-active' (count), 'total-usage-inactive' (count), 'total-file-count-active' (count), 'total-file-count-inactive' (count), 'total-active-file-count' (count), 'usage' (count), 'file-count' (count), 'active-file-count' (count).   |
| --filter-counters |   Only display some counters (regexp can be used). Example to hide per user counters: --filter-counters='active-sites\|total' (default: 'active-sites\|total')                                                                                                                               |
| --units           |   Unit of thresholds (default: '%') ('%', 'count').                                                                                                                                                                                                                                          |

</TabItem>
<TabItem value="Users-Activity-OneDrive" label="Users-Activity-OneDrive">

| Option            | Description                                                                                                                                                                                                                                                                                                                                   |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-user     |   Filter users.                                                                                                                                                                                                                                                                                                                               |
| --warning-*       |   Warning threshold. Can be: 'active-users', 'total-viewed-edited-file-count' (count), 'total-synced-file-count' (count), 'total-shared-int-file-count' (count), 'total-shared-ext-file-count' (count), 'viewed-edited-file-count' (count), 'synced-file-count' (count), 'shared-int-file-count' (count), 'shared-ext-file-count' (count).    |
| --critical-*      |   Critical threshold. Can be: 'active-users', 'total-viewed-edited-file-count' (count), 'total-synced-file-count' (count), 'total-shared-int-file-count' (count), 'total-shared-ext-file-count' (count), 'viewed-edited-file-count' (count), 'synced-file-count' (count), 'shared-int-file-count' (count), 'shared-ext-file-count' (count).   |
| --filter-counters |   Only display some counters (regexp can be used). Example to hide per user counters: --filter-counters='active\|total' (default: 'active\|total')                                                                                                                                                                                            |
| --units           |   Unit of thresholds (default: '%') ('%', 'count').                                                                                                                                                                                                                                                                                           |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_office365_onedrive_api.pl \
	--plugin=cloud::microsoft::office365::onedrive::plugin \
	--mode=site-usage \
	--help
```

---
id: cloud-microsoft-office365-skype
title: Office365 Skype
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
Microsoft’s Office365 suite includes Skype, which is an application that
provides video chat, voice calls and message services between different types
of hardware.

The monitoring information of Microsoft's Office365 is available
through the Office365 API Management.

> The data provided by the Office365 Management API are not real-time.
> They're based on a 7 days reporting period.

## Monitoring Connector assets

### Monitored objects

* Skype devices usage
* Skype users activity

### Monitored metrics

See link for details about metrics : 

* https://docs.microsoft.com/en-us/SkypeForBusiness/skype-for-business-online-reporting/device-usage-report
* https://docs.microsoft.com/en-us/SkypeForBusiness/skype-for-business-online-reporting/activity-report

<Tabs groupId="sync">
<TabItem value="Devices-Usage" label="Devices-Usage">

| Metric name                 | Description                                                  | Unit   |
| :-------------------------- | :----------------------------------------------------------- | :----- |
| skype.active.devices.count  | Number of active devices                                     | Count  |
| skype.devices.\*.count      | Number of windows/ipad/iphone/android/windows phone devices  | Count  |

</TabItem>
<TabItem value="User-Activity" label="User-Activity">

| Metric name                                       | Description                           | Unit   |
| :------------------------------------------------ | :------------------------------------ | :----- |
| skype.users.active.count                          | Total number of active users          | Count  |
| skype.users.sessions.p2p.total.count              | Number of Peer-to-Peer sessions       | Count  | 
| skype.users.conferences.organized.total.count     | Number of organized conferences       | Count  |
| skype.users.conferences.participated.total.count  | Number of participed conferences      | Count  |

</TabItem>
</Tabs>

Once the host is created, you can configure some macros on the service to filter 
information by user. More info in the [Configuration](#Configuration)
section.

## Prerequisites

Refer to the official documentation of Office365 Management or follow the link 
in the 'More information' section to create an Office365 account and get help 
about the management features.

### Register an application

The Office365 Management API use Azure AD to authenticate against Office365.
To access the Office365 Management API, you need to register your application in
Azure AD. *Application* is here used by Microsoft as a conceptual term,
referring not only to the application software, but also to the Azure AD
registration and role in authentication/authorization "conversations" at runtime.
(https://docs.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals)

More detailed information is available [here](./cloud-microsoft-office365-management.md#prerequisites).

### Office365 Management API authorization

To collect data from Skype Online, you need to specify the following
authorization:

* Microsoft Graph :
    * Reports.Read.All (Type : Application)
    * User.Read (Type : Delegated)
* Office365 Management APIs :
    * ServiceHealth.Read (Type : Application)
    * ActivityFeed.Read (Type : Application)

### More information

You can access to the official documentation to register your application,
get your *ID client*, *ID secret* and your *Tenant ID* by following this link:
https://docs.microsoft.com/en-us/office/office-365-management-api/get-started-with-office-365-management-apis

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
dnf install centreon-pack-cloud-microsoft-office365-skype
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-microsoft-office365-skype
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-microsoft-office365-skype
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Office365 Skype** Pack through
the **Configuration > Monitoring Connector Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet.

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Cloud-Microsoft-Office365-Skype-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Skype-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-microsoft-office365-skype-api
```

</TabItem>
</Tabs>

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the *Cloud-Microsoft-Office365-Skype-Api-custom* template and configure all the mandatory Macros :

| Mandatory | Name                  | Description                                                                |
| :-------- | :-------------------- | :------------------------------------------------------------------------- |
| X         | OFFICE365CUSTOMMODE   | Access mode for the Plugin (default: 'graphapi')                           |
| X         | OFFICE365TENANT       | Tenant-id of your Office365 organization                                   |
| X         | OFFICE365CLIENTID     | Client-id of your registered application                                   |
| X         | OFFICE365CLIENTSECRET | Secret-if of your registered application                                   |
|           | OFFICE365EXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

The metric perfdate will record the date the metric was collected. You can
filter it by entering ```--filter-perfdata='^(?!.*perfdate).*$'``` into the
*OFFICE365EXTRAOPTIONS* macro.

Once the host is created, you can configure some macros on the services to filter
information:

| Mandatory | Name          | Description                |
| :-------- | :------------ | :------------------------- |
|           | FILTERUSERS   | Filter by specific users   |
|           | FILTERCOUNTER | Filter specific counters   |

## FAQ

### How can I test the Plugin in the CLI and what do the main parameters stand for ?

Once the Centreon Plugin installed, you can test it directly in the CLI of the
Centreon poller by logging with the *centreon-engine* user:

```bash
/usr/lib/centreon/plugins//centreon_office365_skype_api.pl \
  --plugin=cloud::microsoft::office365::skype::plugin \
  --mode=devices-usage \
  --tenant='abcd1234-5678-90ab-cd12-34567890abcd' \
  --client-id='9876dcba-5432-10dc-ba98-76543210dcba' \
  --client-secret='8/RON4vUGhAcg6DRmSxc4AwgxSRoNfKg4d8xNizIMnwg='
```

Expected output:

```bash
OK: Active devices on 2020-09-27 : 0/1 (0.00%) - Users count by device type : 
Windows: 0, iPad: 0, iPhone: 0, Android Phone: 0, Windows Phone: 0 |
active_devices'=0devices;;;0;1
'windows'=0;;;0;
'ipad'=0;;;0;
'iphone'=0;;;0;
'android_phone'=0;;;0;
'windows_phone'=0;;;0;
```

The available thresholds as well as all of the options that can be used with
this Plugin can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_office365_skype_api.pl \
  --plugin=cloud::microsoft::office365::skype::plugin \
  --mode=devices-usage \
  --custommode='graphapi'\
  --help
```

You can display all of the modes that come with the Plugin with the command below:

```bash
/usr/lib/centreon/plugins//centreon_office365_skype_api.pl \
  --plugin=cloud::microsoft::office365::skype::plugin \
  --list-mode
```

### Troubleshooting

Refer to the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
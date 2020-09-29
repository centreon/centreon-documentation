---
id: cloud-microsoft-office365-skype
title: Office365 Skype
---

## Overview
Microsoft’s Office365 suite includes Skype, which is an application that
provides video chat, voice calls and messages services between different types
of hardware.

The monitoring information of Microsoft's Office365 is available
through the Office365 API Management.

> The data provided by the Office365 Management API are not real-time.
> They're based on a 7 days reporting period

## Plugin-Pack assets

### Monitored objects

* Skype devices usage
* Skype users activity

### Monitored metrics

See link for details about metrics : 

* https://docs.microsoft.com/en-us/SkypeForBusiness/skype-for-business-online-reporting/device-usage-report
* https://docs.microsoft.com/en-us/SkypeForBusiness/skype-for-business-online-reporting/activity-report

<!--DOCUSAURUS_CODE_TABS-->

<!--Devices-Usage-->

| Metric name            | Description                                                  | Unit   |
| :--------------------- | :----------------------------------------------------------- | :----- |
| active\_devices        | Number of active devices                                     | Count  |
| skype.devices.*.count  | Number of windows/ipad/iphone/android/windows phone devices  | Count  |

<!--User-Activity-->

| Metric name                                       | Description                           | Unit   |
| :------------------------------------------------ | :------------------------------------ | :----- |
| active\_users                                     | Total number of active users          | Count  |
| skype.users.sessions.p2p.total.count              | Number of Peer-to-Peer sessions       | Count  | 
| skype.users.conferences.organized.total.count     | Number of organized conferences       | Count  |
| skype.users.conferences.participated.total.count  | Number of participed conferences      | Count  |

Once the host created, you can configure some macros on the service to filter 
information by user. More info in the [Configuration](#Configuration)
section.

<!--END_DOCUSAURUS_CODE_TABS-->

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

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every poller expected to monitor Office365 Skype:

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Skype-Api
```

2. On the Centreon Web interface, install the Centreon Plugin-Pack *Office365 Skype* from the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every poller expected to monitor Office365 Skype:

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Skype-Api
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-microsoft-office365-skype
```

3. On the Centreon Web interface, install the Centreon Plugin-Pack *Office365 Skype* from the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

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

The metric perfdateY will record the date the metric was collected. You can
filter it by entering ```--filter-perfdata='^(?!.*perfdate).*$'``` into the
*OFFICE365EXTRAOPTIONS* macro.

Once the host created, you can configure some Macros on the services to filter
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

### Why do I get the following error:

#### ```UNKNOWN: 500 Can't connect to ...:443```

This error message means that the Centreon Plugin couldn't successfully connect to the Office365 Management API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl``` option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

When using a proxy to connect to the Office365 Management API, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.

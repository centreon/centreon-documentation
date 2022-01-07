---
id: cloud-microsoft-office365-exchange
title: Office365 Exchange
---

## Overview

Microsoft’s Office365 suite includes Exchange Online, which is a hosted messaging application 
that provides organizations access to the full-featured version of Exchange Server.

The monitoring information of Microsoft's Office365 is available
through the Office365 API Management.

> The data provided by the Office365 Management API are not real-time
> They're based on a 7 days reporting period

## Plugin-Pack assets

### Monitored objects

* Users email activity
* Mailboxes usage

### Monitored metrics

See link for details about metrics : 
* https://docs.microsoft.com/en-us/office365/admin/activity-reports/email-activity?view=o365-worldwide
* https://docs.microsoft.com/en-us/microsoft-365/admin/activity-reports/mailbox-usage?view=o365-worldwide

<!--DOCUSAURUS_CODE_TABS-->

<!--Email-activity-->

| Metric name                                  | Description                            |
| :------------------------------------------- | :------------------------------------- |
| exchange.users.active.count                  | Number of active users                 |
| exchange.users.emails.sent.total.count       | Number of total sent mails             |
| exchange.users.emails.received.total.count   | Number of total received mails         |
| exchange.users.emails.read.total.count       | Number of total read mails             |

<!--Mailbox-usage-->

| Metric name                                   | Description                             | Unit    |
| :-------------------------------------------- | :-------------------------------------- |-------- |
| exchange.mailboxes.active.count               | Number of active mailboxes              | Count   |
| exchange.mailboxes.active.usage.total.bytes   | Total usage space (active mailboxes)    | Bytes   |
| exchange.mailboxes.inactive.usage.total.bytes | Total usage space (inactive mailboxes)  | Bytes   |

<!--END_DOCUSAURUS_CODE_TABS-->

Once the host created, you can configure some macros on the services to filter
information by user or by mailbox. More information in the [Configuration](#Configuration)
section.

## Prerequisites

Refer to the official documentation of Office365 Management or follow the link 
in the 'More information' section to create an Office365 account and get help 
about the management features.

### Register an application

The Office365 Management API use Azure AD to authenticate against Office365.
To access the Office365 Management API, you need to register your application 
in Azure AD. *Application* is here used by Microsoft as a conceptual term,
referring not only to the application software, but also to the Azure AD
registration and role in authentication/authorization "conversations" at runtime.
(https://docs.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals)

### Office365 Management API authorization

To collect data from Exchange Online, you need to specify the following
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

1. Install the Centreon Plugin package on every poller expected to monitor Office365 Exchange:

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Exchange-Api
```

2. On the Centreon Web interface, install the Centreon Plugin-Pack *Office365 Exchange* from the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every poller expected to monitor Office365 Exchange:

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Exchange-Api
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-microsoft-office365-exchange
```

3. On the Centreon Web interface, install the Centreon Plugin-Pack *Office365 Exchange* from the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the *Cloud-Microsoft-Office365-Exchange-Api-custom* template and configure all the mandatory Macros :

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

| Mandatory | Name          | Description                                        |
| :-------- | :------------ | :------------------------------------------------- |
|           | FILTERUSER    | Filter specific users                              |
|           | FILTERMAILBOX | Filter specific mailboxes                          |
|           | FILTERCOUNTER | Filter specific counters (default:'active\|total') |

## FAQ

### How can I test the Plugin in the CLI and what do the main parameters stand for ?

Once the Centreon Plugin installed, you can test it directly in the CLI of the
Centreon poller by logging with the *centreon-engine* user:

```bash
/usr/lib/centreon/plugins//centreon_office365_exchange_api.pl \
  --plugin=cloud::microsoft::office365::exchange::plugin \
  --mode=email-activity \
  --tenant='abcd1234-5678-90ab-cd12-34567890abcd' \
  --client-id='9876dcba-5432-10dc-ba98-76543210dcba' \
  --client-secret='8/RON4vUGhAcg6DRmSxc4AwgxSRoNfKg4d8xNizIMnwg='
```

Expected output:

```bash
OK: Active mailboxes on 2019-03-10 : 141/1532 (9.20%) - Total (active mailboxes)
Send Count: 9478, Receive Count: 62197, Read Count: 24401 |
'active_mailboxes'=141mailboxes;;;0;1532
'total_send_count'=9478;;;0;
'total_receive_count'=62197;;;0;
'total_read_count'=24401;;;0;
```

The available thresholds as well as all of the options that can be used with
this Plugin can be displayed by adding the ```--help``` parameter to the 
command:

```bash
/usr/lib/centreon/plugins//centreon_office365_exchange_api.pl \
  --plugin=cloud::microsoft::office365::exchange::plugin \
  --mode=email-activity \
  --custommode='graphapi'\
  --help
```

You can display all of the modes that come with the Plugin with the command
below:

```bash
/usr/lib/centreon/plugins//centreon_office365_exchange_api.pl \
  --plugin=cloud::microsoft::office365::exchange::plugin \
  --list-mode
```

### Why do I get the following error:

#### ```UNKNOWN: 500 Can't connect to ...:443```

This error message means that the Centreon Plugin couldn't successfully connect
to the Office365 Management API. Check that no third party device
(such as a firewall) is blocking the request. A proxy connection may also be 
necessary to connect to the API. This can be done by using the ```--proxyurl```
option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

When using a proxy to connect to the Office365 Management API, this error
message means that the Centreon Plugin library does not support the proxy
connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the
following option to the command: ```--http-backend='curl'```.

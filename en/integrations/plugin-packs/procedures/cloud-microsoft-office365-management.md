---
id: cloud-microsoft-office365-management
title: Office 365
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.1 | `STABLE` | Apr 24 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Cloud-Microsoft-Office365-Management-Api
```

### Perl dependencies

By installing the plugin, some perl depencies will be installed :

    JSON::XS
    DateTime
    Digest::MD5
    Digest::SHA
    LWP::UserAgent
    LWP::Protocol::https
    IO::Socket::SSL
    URI
    HTTP::ProxyPAC

### Register an application

To connect to the Office 365 Management API, you must register an application.

Follow the 'How-to guide' in
<https://docs.microsoft.com/en-us/office/office-365-management-api/get-started-with-office-365-management-apis#register-your-application-in-azure-ad>
for a complete explanation on how to register an application and get a client ID and secret.

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                                           |
| :---------------------- | :---------------------------------------------- |
| Host name               | *Name of the host*                              |
| Alias                   | *Host description*                              |
| IP                      | *Host IP Address*                               |
| Monitored from          | *Monitoring Poller to use*                      |
| Host Multiple Templates | Cloud-Microsoft-Office365-Management-Api-custom |

Click on the *Save* button.

### Set host macros

The following macros must be configured on host.

| Macro                 | Description                 |
| :-------------------- | :-------------------------- |
| OFFICE365CUSTOMMODE   | Custom mode 'managementapi' |
| OFFICE365TENANT       | Office 365 tenant ID        |
| OFFICE365CLIENTID     | Office 365 client ID        |
| OFFICE365CLIENTSECRET | Office 365 client secret    |

Click on the *Save* button.


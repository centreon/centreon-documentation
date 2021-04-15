---
id: cloud-azure-compute-virtualmachine
title: Azure Virtual Machine
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Cloud-Azure-Compute-VirtualMachine-Api
```

### Perl dependencies (for 'api' custom mode)

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

The login and access token handling will be made by the plugin itself.

> Using a proxy? Add this non-mandatory dependancy to your central server / all the pollers that will perform discovery using a proxy. 
>
> `yum install perl-LWP-Protocol-connect̀`

### Azure CLI 2.0 (for 'azcli' custom mode)

The CLI needs at least Python version 2.7
(<https://github.com/Azure/azure-cli/blob/dev/doc/install_linux_prerequisites.md>).

On CentOS/RedHat, install with following commands:

    (As root)
    # rpm --import https://packages.microsoft.com/keys/microsoft.asc
    # echo -e "[azure-cli]\nname=Azure CLI\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo
    # yum install azure-cli
    (As centreon-engine)
    # az login

The shell should prompt:

    To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code CWT4WQZAD to authenticate.

Go to <https://microsoft.com/devicelogin> and enter the given code.

Log in with your account credentials. You should use a service account.
Application is not yet supported.

The command line should now show:

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

You now have a hidden azure directory where your token is stored in an
accessTokens.json file.

### Host Discovery

To benefit from the host discovery rule brought by this pack, the Azure Monitor
plugin needs to be installed:

``` shell
yum install centreon-plugin-Cloud-Azure-Management-Monitor-Api
```

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                                     |
| :---------------------- | :---------------------------------------- |
| Host name               | *Name of the host*                        |
| Alias                   | *Host description*                        |
| IP                      | *Host IP Address*                         |
| Monitored from          | *Monitoring Poller to use*                |
| Host Multiple Templates | Cloud-Azure-Compute-VirtualMachine-custom |

Click on the *Save* button.

### Set host macros

The following macros must be configured on host.

#### Common macros

| Macro              | Description                                          |
| :----------------- | :--------------------------------------------------- |
| AZURERESOURCE      | Resource name or id                                  |
| AZURERESOURCEGROUP | Resource group (Required if resource's name is used) |

#### 'api' custom mode macros

| Macro             | Description       |
| :---------------- | :---------------- |
| AZURECUSTOMMODE   | Custom mode 'api' |
| AZURESUBSCRIPTION | Subscription ID   |
| AZURETENANT       | Tenant ID         |
| AZURECLIENTID     | Client ID         |
| AZURECLIENTSECRET | Client secret     |

#### 'azcli' custom mode macros

| Macro             | Description         |
| :---------------- | :------------------ |
| AZURECUSTOMMODE   | Custom mode 'azcli' |
| AZURESUBSCRIPTION | Subscription ID     |

Click on the *Save* button.

## Available metrics

Go to
<https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-supported-metrics#microsoftcomputevirtualmachines>
to see the description of return metrics for this Azure service.

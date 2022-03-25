---
id: applications-google-workspace-api
title: Google Workspace
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

Google Workspace, is a collection of cloud computing, productivity and collaboration tools, software and products developed and marketed by Google.

The Centreon Plugin Pack aims to collect the real-time status and availability of the services by requesting the
dedicated Status API available on Google servers.

## Plugin Pack assets

### Monitored objects

* Services: Gmail, Meet, Drive, etc...

The list of the applications that can be monitored is available here:
https://workspace.google.fr/intl/en/features/

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Rule name                          | Description                                |
| :--------------------------------- | :----------------------------------------- |
| App-Google-Workspace-Services-Name | Discover services and monitor their status |

</TabItem>
</Tabs>

## Monitored metrics 

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Metric name                     | Description                            |
| :------------------------------ | :------------------------------------- |
| google.workspace.services.count | Number of services currently monitored |
| status                          | Status of the service                  |

</TabItem>
</Tabs>

## Prerequisites

The Centreon Poller that will be used to monitor Google Workspace must be able to reach the related servers (www.google.com) on the Internet
using the TCP/443 HTTPS port. The plugin allows you to use a proxy if needed.

## Setup 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *Google Workspace* services:

```bash
yum install centreon-plugin-Applications-Google-Workspace-Api
```

2. On the Centreon Web interface, install the *Google Workspace* Centreon Pack on the **Configuration > Plugin Packs > Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *Google Workspace* services:

```bash
yum install centreon-plugin-Applications-Google-Workspace-Api
```

2. Install the Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-google-workspace-api
```

3. On the Centreon Web interface, install the *Google Workspace* Centreon Pack on the **Configuration > Plugin Packs > Manager** page

</TabItem>
</Tabs>

## Host configuration

* Log into Centreon and add a new Host through **Configuration > Hosts**. 
* Fill the "IP Address / DNS" field with a localhost IP address (e.g 127.0.0.1)
* Select the *App-Google-Workspace-Api-custom*

> This Host Template is a *dummy* type so the Host check command won't initiate a *ping*
> request to an Internet ressource (this kind of request usually being denied). The Host status would then always be *OK*

| Mandatory | Name                          | Description                                                                                 |
| :-------- | :---------------------------- | :------------------------------------------------------------------------------------------ |
| X         | GOOGLEWORKSPACESTATUSHOSTNAME | IP or name of the Status server (Default: 'www.google.com')                                 |
| X         | GOOGLEWORKSPACESTATUSPORT     | Port used to reach the Google server (Default: '443')                                       |
| X         | GOOGLEWORKSPACESTATUSPROTO    | Protocol used to reach the Google server (Default: 'https')                                 |
|           | PROXYURL                      | Configure a proxy URL to use if needed                                                      |
|           | GOOGLEWORKSPACEEXTRAOPTIONS   | Any extra option you may want to add to every command\_line (eg. a --verbose flag)          |
|           | DUMMYSTATUS                   | Host state. Default is OK, do not modify it unless you know what you are doing              |
|           | DUMMYOUTPUT                   | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

> This template will deploy one "Global" Service that will monitor all of the services.
> Use the **Service Discovery** feature if you wish to get one Service per google workspace service.

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account and test the Plugin 
by running the following command (Some of the parameters such as ```proxyurl``` have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_google_workspace_api.pl \
    --plugin='apps::google::workspace::plugin' \
    --mode=services \
    --hostname='www.google.com' \
    --proto='https' \
    --port='443' \
    --proxyurl='http://myproxy.mycompany.org:8080' \
    --filter-name='mail|drive|meet' \
    --warning-status='%{status} eq "disruption"' \
    --critical-status='%{status} eq "outage"' \
    --verbose
```

Expected command output is shown below: 

```bash
OK: All Google workspace services are ok | 'google.workspace.services.count'=3;;;0;
Service 'Gmail' status is available
Service 'Google Drive' status is available
Service 'Google Meet' status is available
```

In this example, the Plugin gets the status and availability of Google workspace services (```--plugin='apps::google::workspace::plugin' --mode=services```)
by requesting the official Google status server API (```--hostname='www.google.com' --proto='https' --port='443'```). Only the status of
the *gmail*, *drive* and *meet* applications will be displayed (```--filter-name='gmail|drive|meet'```).

This command would trigger a WARNING alert if one of the service is reported as *degraded* (```--warning-status='%{status} eq "disruption"'```)
and a CRITICAL alert for a total outage on an service (```--critical-status='%{status} eq "outage"'```).

All the filters that can be used as well as all the available thresholds parameters can be displayed by adding the  ```--help``` 
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_google_workspace_api.pl \
    --plugin='apps::google::workspace::plugin' \
    --mode=services \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins.md)

---
id: applications-google-gsuite-api
title: Google Gsuite
---

## Overview

Google GSuite, is a collection of cloud computing, productivity and collaboration tools, software and products developed and marketed by Google.

The Centreon Plugin-Pack aims to collect the real-time status and availability of the GSuite's applications by requesting the
dedicated Status API available on Google servers.

## Plugin-Pack assets

### Monitored objects

* Applications: Gmail, Meet, Drive, etc...

The list of the applications that can be monitored is available here:
https://workspace.google.fr/intl/en/features/

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Applications-->

| Rule name                                | Description                                                        |
| :--------------------------------------- | :----------------------------------------------------------------- |
| App-Google-Gsuite-Api--Application-Name  | Discover GSuite applications and monitor their status              |

<!--END_DOCUSAURUS_CODE_TABS-->

## Monitored metrics 

<!--DOCUSAURUS_CODE_TABS-->

<!--Gsuite-Application-*-->

| Metric name               | Description                                |
|:--------------------------|:-------------------------------------------|
| google.apps.current.count | Number of applications currently monitored |
| status                    | status of the Gsuite application           |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### AWS Configuration

The Centreon Poller that will be used to monitor Google GSuite must be able to reach the related servers (www.google.com) on the Internet
using the TCP/443 HTTPS port. The plugin allows you to use a proxy if needed.

## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *Google GSuite* applications:

```bash
yum install centreon-plugin-centreon-plugin-Applications-Google-Gsuite-Api
```

2. On the Centreon Web interface, install the *Google GSuite* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *Google GSuite* applications:

```bash
yum install centreon-plugin-centreon-plugin-Applications-Google-Gsuite-Api
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-google-gsuite-api
```

3. On the Centreon Web interface, install the *Google GSuite* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts". 
* Fill the "IP Address / DNS" field with a localhost IP address (e.g 127.0.0.1)
* Select the *App-Google-Gsuite-Api.

> This Host Template is a *dummy* type so the Host check command won't initiate a *ping*
> request to an Internet ressource (this kind of request usually being denied). The Host status would then always be *OK*

| Mandatory | Name                     | Description                                                                                 |
|:----------|:-------------------------|:--------------------------------------------------------------------------------------------|
| X         | GOOGLEAPPSSTATUSHOSTNAME | IP or name of the Status server (Default: 'www.google.com')                                 |
| X         | GOOGLEAPPSSTATUSPORT     | Port used to reach the Google server (Default: '443')                                       |
| X         | GOOGLEAPPSSTATUSPROTO    | Protocol used to reach the Google server (Default: 'https')                                 |
| X         | GOOGLEAPPSSTATUSLANGUAGE | Language for the Application names (Default: 'en')                                          |
|           | PROXYURL                 | Configure a proxy URL to use if needed                                                      |
|           | EXTRAOPTIONS             | Any extra option you may want to add to every command\_line (eg. a --verbose flag)          |
|           | DUMMYSTATUS              | Host state. Default is OK, do not modify it unless you know what you are doing              |
|           | DUMMYOUTPUT              | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

> This template will deploy one "Global" Service that will monitor all of the applications.
> Use the **Service Discovery** feature if you wish to get one Service per application.

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account and test the Plugin 
by running the following command (Some of the parameters such as ```proxyurl``` have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_google_gsuite_api.pl \
    --plugin='apps::google::gsuite::plugin' \
    --mode=applications \
    --hostname='www.google.com' \
    --proto='https' \
    --port='443' \
	--proxyurl='http://myproxy.mycompany.org:8080' \
    --language='en' \
    --filter-app='mail|drive|meet' \
    --warning-status='%{status} eq "DEGRADED"' \
    --critical-status='%{status} eq "UNAVALAIBLE"' \
    --verbose
```

Expected command output is shown below: 

```bash
OK: 3 GApps - All Google Apps are ok | 'google.apps.current.count'=3;;;0;
Gmail (OK): '' (since '2020-10-10T10:00:00')
Google Drive (OK): '' (since '2020-10-10T10:00:00')
Google Meet (OK): '' (since '2020-10-10T10:00:00')
```

In this example, the Plugin gets the status and availability of GSuite applications (```--plugin='apps::google::gsuite::plugin' --mode=applications```)
by requesting the official Google status server API (```--hostname='www.google.com' --proto='https' --port='443'```). Only the status of
the *gmail*, *drive* and *meet* applications will be displayed (```--filter-app='gmail|drive|meet'```).

This command would trigger a WARNING alert if one of the applications is reported as *degraded* (```--warning-status='%{status} eq "DEGRADED"'```)
and a CRITICAL alert for a total outage on an application (```--critical-status='%{status} eq "UNAVALAIBLE"'```).

All the filters that can be used as well as all the available thresholds parameters can be displayed by adding the  ```--help``` 
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_google_gsuite_api.pl --plugin='apps::google::gsuite::plugin' --mode=applications --help
```

### Why do I get the following message: ```UNKNOWN: 500 Can't connect to www.google.com.443 |```

This error message means that the Centreon Plugin couldn't successfully connect to the Google API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. 
This can be done by using this option in the command: ```--proxyurl='http://proxy.mycompany:8080'```.
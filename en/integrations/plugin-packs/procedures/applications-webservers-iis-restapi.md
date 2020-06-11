---
id: applications-webservers-iis-restapi
title: Microsoft IIS Server Restapi
---

## Overview

Internet Information Services (IIS, formerly Internet Information Server) is an extensible web server software created by Microsoft for use with the Windows NT family. IIS supports HTTP, HTTP/2, HTTPS, FTP, FTPS, SMTP and NNTP.

## Plugin-Pack assets

### Monitored objects

* ApplicationPools
* Websites

### Discovery rules

<!--Services-->

| Rule name                             | Description                                          |
| :------------------------------------ | :--------------------------------------------------- |
| App-IIS-Restapi-ApplicationPools-Name | Discover application pools hosted by your IIS server |
| App-IIS-Restapi-Websites-Name         | Discover websites hosted by your IIS server          |


### Monitored metrics 

<!--DOCUSAURUS_CODE_TABS-->

<!--ApplicationPools-->

| Metric name                        | Description                                                               |
| :--------------------------------- | :------------------------------------------------------------------------ |
| status                             | Status of the application pool.                                           |
| applicationpool.requests.persecond | Number of requests per second by application pools. Unit: requests/second |

<!--Websites-->

| Metric name                         | Description                                                             |
| :---------------------------------- | :---------------------------------------------------------------------- |
| status                              | Status of the website.                                                  |
| website.traffic.in.bitspersecond    | Incoming traffic going through the website. Unit: bits/second           |
| website.traffic.out.bitspersecond   | Outgoing traffic going through the website. Unit: bits/second           |
| website.connections.current.count   | Nomber of current connections by website. Unit: count                   |
| website.connections.total.persecond | Number of total connecions per second by website. Unit: requests/second |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### IIS configuration

To use this Plugin-Pack, you must enable the Microsoft IIS Administration API. Microsoft provides an official documentation to achieve this: https://docs.microsoft.com/en-us/iis-administration/


## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor IIS ressources:

```bash
yum install centreon-plugin-Applications-Webservers-Iis-Restapi
```

2. On the Centreon Web interface, install the 'IIS Restapi' Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor IIS ressources:

```bash
yum install centreon-plugin-Applications-Webservers-Iis-Restapi
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-webservers-iis-restapi.noarch
```

3. On the Centreon Web interface, install the 'IIS Restapi' Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the template "App-Webserver-IIS-Restapi-custom" and configure all the Macros :


| Mandatory   | Nom                | Description                                                                |
| :---------- | :----------------- | :------------------------------------------------------------------------- |
| X           | IISAPIPORT         | Port used. Default is 55539                                                |
| X           | IISAPIPROTO        | Protocol used. Default is https                                            |
| X           | IISAPIUSERNAME     | Username to access to the API.                                             |
| X           | IISAPIPASSWORD     | Password to access to the API.                                             |
| X           | IISTOKENAPI        | Token to access to the API.                                                |
|             | IISAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

By default ```IISAPIEXTRAOPTIONS``` contains : ```--http-backend=curl --curl-opt="CURLOPT_SSL_VERIFYPEER => 0"``` options to use the *curl* backend and to ignore the validity's check of the SSL certificate.


**Use the discovery module to add the monitoring of your *application pools* and *websites*, Go to *Configuration > Services > Scan* to perform a scan**


## FAQ

### How do I test my configuration through the CLI and what do the main parameters stand for ? 

Once the Centreon plugin installed, you can test it logging with the centreon-engine user:

```bash
/usr/lib/centreon/plugins/centreon_iis_restapi.pl \	
	--plugin apps::iis::restapi::plugin \
	--mode websites \
	--hostname='www.int.centreon.com' \
	--port='55539' \
	--proto='https' \
	--api-username='John.Doe' \
	--api-password='6fbadZEJbsLG' \
	--api-token='ZHppZCWPzREgSb9SDYOegsY0_D4KJKgZ5q8QavEWBPmmi8fgt2-8Cw' \
	--http-backend='curl' \
	--curl-opt="CURLOPT_SSL_VERIFYPEER => 0" \
	--filter-name='^www$' \
	--critical-status='%{status} !~ /starting|started/' \
	--verbose
```

The command above checks the status and the usage of the Website *www* (```--filter-name=^www$```) hosted by the IIS server *www.int.centreon.com* (```--hostname='www.int.centroen.com'```).
It uses an API username (```--api-username='John.doe'```), API password (```--api-password='6fbadZEJbsLG'```) and API token (```--api-token='ZHppZCWPzREgSb9SDYOegsY0_D4KJKgZ5q8QavEWBPmmi8fgt2-8Cw'```) generated from the IIS Administration API.
The *curl* backend is used (```--http-backend='curl'```) and the SSL certificate validity is not checked (```--curl-opt="CURLOPT_SSL_VERIFYPEER => 0"```).


This command would trigger a CRITICAL alert if:
  * the status of the website is different of *starting* or *started*.

Expected command output is shown below:

```bash
OK: Website 'www' traffic in: 5.41 Kb/s, traffic out: 59.74 Kb/s, current connections: 0, total connections: 8.05/s | 'www#website.traffic.in.bitspersecond'=5407.86206896552b/s;;;0; 'www#website.traffic.out.bitspersecond'=59744b/s;;;0; 'www#website.connections.current.count'=0;;;0; 'www#website.connections.total.persecond'=8.05/s;;;0;
Website 'www' traffic in: 5.41 Kb/s, traffic out: 59.74 Kb/s, current connections: 0, total connections: 8.05/s
```

Some thresholds can also be set on metrics with options ```--warning-*``` and ```--critical-*```.

The available thresholds as well as all of the options that can be used with this Plugin can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_iis_restapi.pl \	
	--plugin apps::iis::restapi::plugin \
	--mode websites \
        --help
```
You can display all modes that come with the Plugin with the command below: 


```bash
/usr/lib/centreon/plugins//centreon_iis_restapi.pl \
    --plugin=apps::iis::restapi::plugin \
    --list-mode
```

### Why do I get the following error: 

#### ```UNKNOWN: Cannot load module 'Net::Curl::Easy'```

This error message means that a Perl library required to use the *curl* backend is missing.

In order to fix this issue, install the Net::Curl::Easy Perl library using the following command:


```bash
yum install perl-Net-Curl
```

#### ```UNKNOWN: curl perform error : Couldn't connect to server```

This error message means that the Centreon Plugin couldn't successfully connect to the IIS API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl``` option in the command.

---
id: applications-nginx-plus-restapi
title: Nginx Plus Restapi
---

## Overview

NGINX Plus is a software load balancer, web server, and content cache built on top of open source NGINX.

The Centreon Plugin and Plugin-Packs rely on the Nginx Plus Rest API to collect the status of the Nginx resources.

## Plugin-Pack Assets

### Monitored Objects

* Applications
* Web Server
* Load Balancer
* Content cache

### Collected Metrics

More information about collected metrics is available in the official Nginx Plus API documentation: https://docs.nginx.com/nginx/admin-guide/load-balancer/dynamic-configuration-api/

<!--DOCUSAURUS_CODE_TABS-->

<!--Connections-->

| Metric name                 | Description                    |
| :-------------------------- | :----------------------------- |
| connections.active.count    | Number of active connections   |
| connections.idle.count      | Number of idle connections     |
| connections.accepted.count  | Number of accepted connections |
| connections.dropped.count   | Number of dropped connections  |

<!--Http-Zone-->

| Metric name                                             | Description                                              |
| :------------------------------------------------------ | :------------------------------------------------------- |
| http.$name.zone.requests.persecond                      | Requests http-zone per second. Unit : /s                 |
| http.$name.zone.requests.discarded.count                | Number of requests http-zone discarded.                  |
| http.$name.zone.traffic.in.bitspersecond                | Traffic in of http-zone in Bytes per second. Unit : b/s  |
| http.$name.zone.traffic.out.bitspersecond               | Traffic out of http-zone in Bytes per second. Unit : b/s |
| http.$name.zone.responses.total.count                   | Number total of http-zone responses                      |
| http.$name.zone.responses.[1xx,2xx,3xx,4xx,5xx].count   | Number 1xx,2xx,3xx,4xx,5xx of http-zone responses        |

<!--Ssl-->

| Metric name                      | Description                         |
| :------------------------------- | :---------------------------------- |
| ssl.handshakes.succeeded.count   | Number of SSL Handshakes succeeded  |
| ssl.handshakes.failed.count      | Number of SSL Handshakes failed     |
| ssl.sessions.reuses.count        | Number of SSL sessions reuses       |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

A service account is required to request the Nginx Plus API. It needs to have sufficient reading privileges in the environment.
More infomation is avaible in official Nginx documentation : https://docs.nginx.com/nginx/admin-guide/monitoring/live-activity-monitoring/#getting-statistics-with-the-api

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every poller monitoring Nginx Plus resources: :

```bash
yum install centreon-plugin-Applications-Nginx-Plus-Restapi.noarch
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Nginx Plus* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every poller monitoring Nginx Plus resources :

```bash
yum install centreon-plugin-Applications-Nginx-Plus-Restapi.noarch
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-applications-nginx-plus-restapi.noarch
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Nginx Plus* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

This Plugin-Pack is designed to have in Centreon one host per Nginx Plus environment.
Adding a host into Centreon, link it to the template named *App-Nginx-Plus-Restapi-custom*.
Once the template applied, some Macros have to be configured:
| Mandatory | Name            | Description                                                                |
| :-------- | :-------------- | :------------------------------------------------------------------------- |
| X         | APIPORT         | Port used (Default: 443)                                                   |
| X         | APIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | APIUSERNAME     | Nginx basic username                                                       |
| X         | APIPASSWORD     | Nginx basic password.                                                      |
| X         | APIPATH         | Specify api path (Default: '/api/6')                                       |
|           | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

### How to test the Plugin and what are the main options for ?

Once the Plugin installed, log into your poller using the *centreon-engine* user account and test 
by running the following command (Parameters such as ```api-username``` or ```api-path``` have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_nginx_plus_restapi.pl \
	--plugin=apps::nginx::nginxplus::restapi::plugin \
	--mode=connections \
	--hostname='mynginxplus.com' \
	--port='443' \
	--proto='https' \
	--api-username='myapiuser' \
	--api-password='myapipassword' \
	--api-path='/api/6' \
	--warning-active='60' \
	--critical-active='80'
	--warning-idle='8' \
	--critical-idle='10' \
	--warning-accepted='50' 
	--critical-accepted='65' \
	--warning-dropped='3' \
	--critical-dropped='5' \
	--verbose

OK: Active : 5, Idle : 0, Accepted : 5, Dropped : 0|
'connections.active.count'=5;;60;80; 'connections.idle.count'=1;;8;10; 'connections.accepted.count'=5;;50;65; 'connections.dropped.count'=0;;3;5;
```

The above command checks the Nginx PLus connections (```--mode=connections```).
It uses an api-username (```--api-username='myapiuser'```), an api-password (```--api-password='myapipassword'```)
and it connects to the host *mynginxplus.com* (```--hostname='mynginxplus.com'```) on the port 443 (```--port='/443'```)
on the url */api/6* (```--api-path='/api/6'```) using https (```--proto='https'```).
This command will trigger a WARNING alarm if the active connections increase to 60 (```--warning-active='60'```)
and a CRITICAL alarm if it increases to 80 (```--critical-active='80'```).


All the options that can be used with this plugin can be found over the ```--help``` command:

```bash
/usr/lib/centreon/plugins/centreon_nginx_plus_restapi.pl --plugin=apps::nginx::nginxplus::restapi::plugin 
--mode=connections --help
```
### Why do I get the following error: 

#### ```UNKNOWN: 500 Can't connect to mynginxplus.com:443```

This error message means that the Centreon Plugin couldn't successfully connect to the Nginx Plus API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl``` option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

When using a proxy to connect to the Nginx Plus API, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.

### How do I remove the *count* perfdatas if I want to filter on just one application ?

The Plugin adds the count of objects by default. This can be useless if the objects are filtered with the ```--filter-name``` parameter.
Therefore, these useless perfdatas can be omitted by adding a perfdata filter : ```--filter-perfdata='^$'```.

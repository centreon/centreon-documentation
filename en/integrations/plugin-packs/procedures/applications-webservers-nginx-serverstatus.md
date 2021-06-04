---
id: applications-webservers-nginx-serverstatus
title: Nginx Server
---

## Overview

Nginx is an open-source Web Server also used as a proxy server for email (IMAP, POP3, and SMTP) and a reverse proxy and load balancer for HTTP, TCP, and UDP servers.

## Plugin Pack assets

### Monitored objects

* Nginx Server

### Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Requests--> 

| Metric name                               | Description                      | Unit 			    |
| :---------------------------------------- | :------------------------------- | :----------------- |
| server.connections.accepted.persecond     | Number of accepted connections   | Connections/second |
| server.connections.handled.persecond      | Number of handled connections	   | Connections/second |
| server.connections.dropped.count          | Number of dropped connections	   | Count              |
| server.requests.persecond                 | Number of requests    		   | Requests/second    |


<!--Connections-->

| Metric name                        | Description                           | Unit |
| :--------------------------------- | :------------------------------------ | :--- |
| server.connections.active.count    |  The number of active connections     | Count|
| server.connections.waiting.count   |  The number of waiting connections    | Count|
| server.connections.writing.count   |  The number of writing connections    | Count|
| server.connections.reading.count   |  The number of reading connections    | Count|

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

Warning: The following procedure is an example. Cannot be applied on all context.

The module allows the generation of a live Nginx report, available on a dedicated web page. This report is used to generate statistics in Centreon. 
To activate this module, you have to open your nginx configuration file:

    $ vi /etc/nginx/nginx.conf

and check that if not already configured, add the followings lines in 'server'
bracket:

    server { 
        ... 
        location /nginx_status { 
            stub_status on; 
            access_log off;
            allow <centreon-poller_@IP>;
            deny all; 
        }
        ...
    }

Make sure you are allowing Pollers to access this URL.

You can check the validity of your configuration using:

    $ nginx -t nginx: the configuration file
    /etc/nginx/nginx.conf syntax is ok nginx: configuration file
    /etc/nginx/nginx.conf test is successful

Nginx must be reloaded to take this modification into account:

    $ /etc/init.d/nginx reload

You can now check the result by accessing the URL

    http://<nginx_address>/nginx_status


## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor Nginx Servers:

```bash
yum install centreon-plugin-Applications-Webservers-Nginx-Serverstatus
```

2. On the Centreon Web interface, install the *Nginx Server* Plugin Pack through "Configuration > Plugin Packs > Manager" page.

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor Nginx Servers:

```bash
yum install centreon-plugin-Applications-Webservers-Nginx-Serverstatus
```

2. Install the Centreon Plugin Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-applications-webservers-nginx-serverstatus
```

3. On the Centreon Web interface, install the *Nginx Server* Plugin Pack through "Configuration > Plugin Packs > Manager" page.

<!--END_DOCUSAURUS_CODE_TABS-->

### Host configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the *App-Webserver-Nginx-ServerStatus-custom* template and configure all the mandatory Macros :

| Mandatory | Name         			   | Description                                                                 |
| :-------- | :----------------------- | :-------------------------------------------------------------------------- |
|    X      | NGINXPORT                | Port used by Apache. Default is 80                                          |
|    X      | NGINXPROTOCOL			   | Protocol used. Default is http				                                 |
|           | NGINXSTATUSEXTRAOPTIONS  | Any extra option you may want to add to the command (eg. a --verbose flag)  |

By default ```NGINXSTATUSEXTRAOPTIONS``` contains : ```--http-backend=curl --curl-opt="CURLOPT_SSL_VERIFYPEER => 0"``` options to use the *curl* backend and to ignore the validity's check of the SSL certificate.

## How to test my Plugin and what do the main parameters stand for ?

Once the Plugin is installed, you can test it logging into the CLI with the centreon-engine user.

```bash
/usr/lib/centreon/plugins//centreon_nginx_serverstatus.pl \
	--plugin=apps::nginx::serverstatus::plugin \
	--mode=requests \
	--hostname=10.30.2.11 \
	--proto=https \
	--port=443 \
	--warning-connections-dropped=10 \
	--critical-connections-dropped=20 \
	--http-backend=curl \
	--curl-opt="CURLOPT_SSL_VERIFYPEER => 0" \
	--verbose   

```

The above command checks requests statistics on the Nginx server (``` --mode=requests ```). Mandatory options are the IP/FQDN of the device

(``` --hostname=10.30.2.11 ```), the port used by Apache (``` --port=443 ```) and the protocol (``` --proto=https ```).

The *curl* backend is used (```--http-backend='curl'```) and the SSL certificate validity is not checked (```--curl-opt="CURLOPT_SSL_VERIFYPEER => 0"```).

This command would trigger a WARNING alarm if the number of dropped connections on the server is greater than 10 (``` --warning-connections-dropped=10 ```) and 

a CRITICAL alarm if the number of dropped connections on the server is greater than 20 (``` --critical-connections-dropped=20 ```).

Expected command output is shown below:

```bash
OK: connections accepted: 0.36/s - connections handled: 0.36/s - connections dropped: 0 - requests: 13.00/s | 'server.connections.accepted.persecond'=0.36;;;0; 'server.connections.handled.persecond'=0.36;;;0; 'server.connections.dropped.count'=0;0:0;0:20;0; 'server.requests.persecond'=13.00;;;0;
```

Some thresholds can also be set on metrics with options ```--warning-*``` and ```--critical-*```.

All available options for a given mode can be displayed by adding the ``` --help ``` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_nginx_serverstatus.pl \
	--plugin=apps::nginx::serverstatus::plugin \
	--mode=requests \
	--help
```

All Plugin modes can be listed with the following command:

```bash
usr/lib/centreon/plugins//centreon_nginx_serverstatus.pl \
	--plugin=apps::nginx::serverstatus::plugin \
    --list-mode 
```

## Troubleshooting

#### ```UNKNOWN: Cannot load module 'Net::Curl::Easy'```

This error message means that a Perl library required to use the *curl* backend is missing.

In order to fix this issue, install the Net\:\:Curl\:\:Easy Perl library using the following command:

```bash
yum install perl-Net-Curl
```

#### ```UNKNOWN: curl perform error : Couldn't connect to server```

This error message means that the Centreon Plugin couldn't successfully connect to the URL of the Nginx Server.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the server. This can be done by using the ```--proxyurl``` option in the command.

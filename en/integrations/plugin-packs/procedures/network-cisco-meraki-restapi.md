---
id: network-cisco-meraki-restapi
title: Cisco Meraki Rest API
---

## Overview


Cisco Meraki is a cloud-managed IT company headquartered in San Francisco, California. 
Their products include wireless, switching, security, enterprise mobility management (EMM) and security cameras, all centrally managed from the web.


## Plugin-Pack assets

### Monitored objects

* Meraki Access Points devices

* Meraki Networks


### Monitored metrics 

<!--DOCUSAURUS_CODE_TABS-->

<!--Api-Requests-->

| Metric name                         | Description                                                                     |
| :---------------------------------- | :------------------------------------------------------------------------------ |
| organization.api.requests.200.count | Number of requests returning a HTTP Status 200 (OK). Unit: Count                |
| organization.api.requests.404.count | Number of requests returning a HTTP Status 404 (Not found). Unit: Count         |
| organization.api.requests.429.count | Number of requests returning a HTTP Status 249 (TOO MANY REQUESTS). Unit: Count |

<!--Device-->

| Metric name                      | Description                                                       |
| :------------------------------- | :---------------------------------------------------------------- |
| status                           | Device status                                                     |
| devices.total.online.count       | Number of total devices online (in case of regexp). Unit: Count   |
| devices.total.offline.count      | Number of total devices offline (in case of regexp). Unit: Count  |
| devices.total.alerting.count     | Number of total devices alerting (in case of regexp). Unit: Count |
| device.connections.success.count | Number of sucessful connections by device. Unit: Count            |
| device.connections.auth.count    | Number of authentication connnections by device. Unit: Count      |
| device.connections.assoc.count   | Number of association connections by device. Unit: Count          |
| device.connections.dhcp.count    | Number of DHCP connections by device. Unit: Count                 |
| device.connections.dns.count     | Number of DNS connections by device. Unit: Count                  |
| device.traffic.in.bitspersecond  | Incoming traffic going through the device. Unit: bits/second      |
| device.traffic.out.bitspersecond | Outcoming traffic going through the device. Unit: bits/second     |

<!--Network-->

| Metric name                       | Description                                                    |
| :-------------------------------- | :------------------------------------------------------------- |
| network.connections.success.count | Number of sucessful connections by network. Unit: Count        |
| network.connections.auth.count    | Number of authentication connnections by network. Unit: Count  |
| network.connections.assoc.count   | Number of association connections by network. Unit: Count      |
| network.connections.dhcp.count    | Number of DHCP connections by network. Unit: Count             |
| network.connections.dns.count     | Number of DNS connections by network. Unit: Count              |
| network.traffic.in.bitspersecond  | Incoming traffic going through the network. Unit: bits/second  |
| network.traffic.out.bitspersecond | Outcoming traffic going through the network. Unit: bits/second |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

More information about the Cisco Meraki API can be found in the official documentation: 
https://documentation.meraki.com/zGeneral_Administration/Other_Topics/The_Cisco_Meraki_Dashboard_API

To get access to the API, first enable the API for your organization on the Cisco Meraki dashboard. 
This can be found under *Organization > Settings > Dashboard API access*.

After enabling the API, go to the *my profile* page to generate an API key. The API key is associated with a Dashboard administrator account. 
You can generate, revoke, and regenerate your API key on your profile.

> Keep your API key safe as it provides authentication to all of your organizations with the API enabled. 
> If your API key is shared, you can regenerate your API key at any time. This will revoke the existing API key.


## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Cisco Meraki ressources:

```bash
yum install centreon-plugin-Network-Cisco-Meraki-Restapi
```

2. On the Centreon Web interface, install the *Cisco Meraki Rest API* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Cisco Meraki ressources:

```bash
yum install centreon-plugin-Network-Cisco-Meraki-Restapi
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-cisco-meraki-restapi.noarch
```

3. On the Centreon Web interface, install the *Cisco Meraki Rest API* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->


## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the relevant Host Template. They all look like "Net-Cisco-Meraki%Restapi". 

All of the Host Templates share the following configuration Macros:

| Mandatory   | Nom                | Description                                                                |
| :---------- | :----------------- | :------------------------------------------------------------------------- |
| X           | MERAKIAPIHOSTNAME  | FQDN of the Meraki API. usually api.meraki.com                             |
| X           | MERAKIAPIPORT      | Port used. Must be 443.                                                    |
| X           | MERAKIAPIPROTO     | Protocole used. Must be HTTPS.                                             |
| X           | MERAKIAPITOKEN     | Meraki API key of your profile. Password checkbox must be checked          |
|             | MERAKIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |


Set additionnal Macros that come with the Host Templates: 

<!--DOCUSAURUS_CODE_TABS-->


<!--Net-Cisco-Meraki-Device-Restapi-custom-->

| Mandatory   | Nom              | Description                                                |
| :---------- | :--------------- | :--------------------------------------------------------- |
| X           | MERAKIDEVICENAME | Name of the device you want to monitor (can be a regexp)   |


<!--Net-Cisco-Meraki-Network-Restapi-custom-->

| Mandatory   | Nom               | Description                                              |
| :---------- | :---------------- | :------------------------------------------------------- |
| X           | MERAKINETWORKNAME | Name of the network you want to monitor (can be a regexp)|



## FAQ

### How to test the Plugin and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account 
and test the Plugin by running the following command 
(Some of the parameters such as *api-token*, *filter-device-name* or *proxyurl* have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_cisco_meraki_restapi.pl \
--plugin='network::cisco::meraki::cloudcontroller::restapi::plugin' \
--mode='devices' \
--hostname='api.meraki.com' \
--api-token='12345abcd6789efgh0123abcd4567efgh8901abcd' \
--proxyurl='proxy.mycompany:8080' \
--filter-device-name='centreon-par-training-ap' \
--critical-status='%{status} =~ /alerting/i' \
--critical-link-status='%{link_status} =~ /failed/i' \
--verbose
```

Expected command output is shown below:

```
OK: Device 'centreon-par-training-ap' status: online - connection success: 0 - traffic in: 51.66 b/s, out: 515.86 b/s - link 'WAN 1' status: active | 
'devices.total.online.count'=0;;;0;1 'devices.total.offline.count'=0;;;0;1 'devices.total.alerting.count'=0;;;0;1 
'centreon-par-training-ap#device.connections.success.count'=0;;;0; 'centreon-par-training-ap#device.connections.auth.count'=0;;;0; 
'centreon-par-training-ap#device.connections.assoc.count'=0;;;0; 'centreon-par-training-ap#device.connections.dhcp.count'=0;;;0; 
'centreon-par-training-ap#device.connections.dns.count'=0;;;0; 'centreon-par-training-ap#device.traffic.in.bitspersecond'=51.6626907073509b/s;;;0; 
'centreon-par-training-ap#device.traffic.out.bitspersecond'=515.864632454924b/s;;;0;
checking device 'centreon-par-training-ap'
    status: online
    connection success: 0
    traffic in: 51.66 b/s, out: 515.86 b/s
    link 'WAN 1' status: active
```

The above command checks a specific Cisco AP device named *centreon-par-training-ap* (```--mode=devices --filter-device-name='centreon-par-training-ap'```) managed by Meraki. 
It uses an API token (```--api-token='12345abcd6789efgh0123abcd4567efgh8901abcd'```) generated from the Cisco Meraki management dashboard 
and uses the company proxy (```--proxyurl='proxy.mycompany:8080'```) to connect to the Meraki API.


This command would trigger a CRITICAL alert if:
* The returned device's status is "alerting" (```--critical-status='%{status} =~ /alerting/i'```)
* The device link is "failed" (```--critical-link-status='%{link_status} =~ /failed/i'```)

Some thresholds can also be set on metrics, for instance ```--warning-traffic-in``` and ```--critical-traffic-in```.

The available thresholds as well as all of the options that can be used with this Plugin 
can be displayed by adding the ```--help``` parameter to the command:

```
/usr/lib/centreon/plugins/centreon_cisco_meraki_restapi.pl --plugin='network::cisco::meraki::cloudcontroller::restapi::plugin' --mode='devices' --help
```


### Why do I get the following error: 

#### ```UNKNOWN: 500 Can't connect to api.meraki.com:443```

This error message means that the Centreon Plugin couldn't successfully connect to the Cisco Meraki API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl``` option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

When using a proxy to connect to the Meraki API, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.

#### ```UNKNOWN: cannot check than 5 networks at once (api rate limit)```

This error message means that the Centreon Plugin request is beyond the API capabilities limits.
Adjust the ```--filter-network-name``` or ```--filter-device-name``` filters to limit the search field.

---
id: applications-protocol-dns
title: DNS Service
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The Domain Name System (DNS) is a naming system for resources connected to the Internet or a private network. A DNS Service provides a way to match domain names to IP addresses.

The Centreon Monitoring Connector * DNS Service * checks if a resolution for a domain name (default: google.com) can be obtained.

## Monitoring Connector assets

### Monitored objects

* DNS Server

### Monitored metrics

<Tabs groupId="sync">
<TabItem value="DNS-Request-1" label="DNS-Request">

| Metric name                 | Description                                | Unit |
| :-------------------------- | :----------------------------------------- | :--- |
| time                        | Elapsed time to complete DNS request       |  s   |

This mode allow to check that the server executing the probe correctly resolve its own address.

</TabItem>
<TabItem value="DNS-Request-2" label="DNS-Request">

| Metric name                 | Description                                | Unit |
| :-------------------------- | :----------------------------------------- | :--- |
| time                        | Elapsed time to complete DNS request       |  s   |

This mode is meant to be used on a server with the DNS role. 

</TabItem>
</Tabs>

## Prerequisites

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon package on every poller expected to monitor a DNS server:

```bash
yum install centreon-plugin-Applications-Protocol-Dns
```

2. On the Centreon Web interface, install the Centreon Monitoring Connector *DNS Service* from the **Configuration > Monitoring Connector Manager** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every poller expected to monitor a DNS server:

```bash
yum install centreon-plugin-Applications-Protocol-Dns
```

2. Install the Centreon Monitoring Connector RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-protocol-dns
```

3. On the Centreon Web interface, install the Centreon Monitoring Connector *DNS Service* from the **Configuration > Monitoring Connector Manager** page

</TabItem>
</Tabs>

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the *App-Protocol-DNS-custom* template and fill the form.  

Once the Host created, you can configure the Services following macro on the Services:

| Mandatory | Name           | Description                                      |
| :-------- | :------------- | :----------------------------------------------- |
|           | SEARCH         | The domain name for which you want a resolution  |

## FAQ
### How can I test the Plugin in the CLI and what do the main parameters stand for ?

Once the Centreon Plugin installed, you can test it directly in the CLI of the
Centreon poller by logging with the *centreon-engine* user:

```bash
/usr/lib/centreon/plugins//centreon_protocol_dns.pl \
--plugin=apps::protocols::dns::plugin \
--mode=request \
--nameservers 10.0.0.1 \
--search='google.com' 
```

Expected output:

```bash
OK: Response time 0.011 second(s) (answer: 142.250.74.238) | 'time'=0.011s;;;;
```

The available thresholds as well as all of the options that can be used with
this Plugin can be displayed by adding the ```--help``` parameter to the 
command:

```bash
/usr/lib/centreon/plugins//centreon_protocol_dns.pl \
--plugin=apps::protocols::dns::plugin \
--mode=request \
--search='google.com' \
--help
```

You can display all of the modes that come with the Plugin with the command
below:
 ```bash
/usr/lib/centreon/plugins//centreon_protocol_dns.pl \
--plugin=apps::protocols::dns::plugin \
--list-mode
```

### Why do I get the following message: ```CRITICAL: DNS query failed: query timed out |```

This message indicates that the number of seconds to wait for the DNS request to complete has elapsed.
It means that there is probably no DNS server providing DNS service on the specified server.
The command ```time``` can be used to determine how long the DNS request takes to execute.

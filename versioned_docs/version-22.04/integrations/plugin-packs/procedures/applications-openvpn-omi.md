---
id: applications-openvpn-omi
title: OpenVPN OMI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack OpenVPN OMI brings 1 host template :
* App-Openvpn-OMI-custom

It brings the following Service Template:

| Service Alias | Service Template             | Default |
|:--------------|:-----------------------------|:--------|
| Server-Usage  | App-Openvpn-Server-Usage-OMI | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Server-Usage" label="Server-Usage">

| Metric name                      | Description               | Unit  |
|:---------------------------------|:--------------------------|:------|
| clients.current.count            | Number of current Clients | count |
| server.traffic.in.bitspersecond  | Server traffic in         | b/s   |
| server.traffic.out.bitspersecond | Server traffic out        | b/s   |

</TabItem>
</Tabs>

## Prerequisites

The Open VPN server must have an management interface running and available. 
A user and password dedicated to monitoring is needed for security reasons.

## Setup

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT-100 Editions" label="Online IMP Licence & IT-100 Editions">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor your *Open VPN* server:

```bash
yum install centreon-plugin-Applications-Openvpn-Omi
```

2. On the Centreon Web interface, install the *OpenVPN OMI* Centreon Plugin Pack on the **Configuration > Plugin Packs** page

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor your *Open VPN* server:

```bash
yum install centreon-plugin-Applications-Openvpn-Omi
```

2. Install the *OpenVPN OMI* Centreon Plugin Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-openvpn-omi
```

3. On the Centreon Web interface, install the *OpenVPN OMI* Centreon Plugin Pack on the **Configuration > Plugin Packs** page

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your *Open VPN* server settings
* Select the *Applications-Openvpn-Omi-custom* template to apply to the Host
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.

| Mandatory | Name            | Description                                                                        |
|:----------|:----------------|:-----------------------------------------------------------------------------------|
|           | OMIEXTRAOPTIONS |                                                                                    |
| X         | OMIPASSWORD     |                                                                                    |
| X         | OMIPORT         | 7505                                                                               |
|           | EXTRAOPTIONS    | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for ? 

Once the plugin installed, log into your Centreon Poller CLI using the 
*centreon-engine* user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins//centreon_openvpn_omi.pl \
    --plugin=apps::openvpn::omi::plugin \
    --mode=server-usage \
    --omi-hostname='10.0.0.1' \
    --omi-password='' \
    --omi-port='7505' \
    --warning-num-clients='' \
    --critical-num-clients='' \
    --warning-traffic-in='' \
    --critical-traffic-in='' \
    --warning-traffic-out='1000000' \
    --critical-traffic-out='2000000' \
    --use-new-perfdata 
```

Expected command output is shown below:

```bash
OK : Current Clients: 9000 Traffic In: 900 kb/s Traffic Out: 900 kb/s | 'clients.current.count'=9000;;;0; 'server.traffic.in.bitspersecond'=900000b/s;;;0; 'server.traffic.out.bitspersecond'=900000b/s;1000000;2000000;0; 
```

This command would trigger a WARNING alarm if *the traffic out* is reported as
over  1000000b/s (`--warning-traffic-out=1000000`) and a CRITICAL alarm if over
than 2000000b/s (`--critical-traffic-out='2000000'`).

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_openvpn_omi.pl \
    --plugin=apps::openvpn::omi::plugin \
    --mode=server-usage \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_openvpn_omi.pl \
    --plugin=apps::openvpn::omi::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins)
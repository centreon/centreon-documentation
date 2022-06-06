---
id: applications-protocol-whois
title: Protocol WHOIS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack WHOIS brings a host template:
* App-Protocol-Whois-custom

It brings the following Service Templates:

| Service Alias | Service Template          | Default | Discovery |
|:--------------|:--------------------------|:--------|:----------|
| Domain        | App-Protocol-Whois-Domain |         |           |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Domain" label="Domain">

| Metric name                                    | Description                                   | Unit  |
| :--------------------------------------------- | :-------------------------------------------- | :---- |
| domain status                                  | Domain status: checkError, notRegistered,...  |       |
| *domain_name*#whois.response.time.milliseconds | Time to retrieve whois domain information     | ms    |
| *domain_name*#domain.expires.seconds           | Registration expiration time                  | s     |

</TabItem>
</Tabs>

## Prerequisites

To monitor your domains, the system command `whois` must be operational.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Protocol WHOIS** resources:

```bash
yum install centreon-plugin-Applications-Protocol-Whois
```

2. On the Centreon web interface, install the **Protocol WHOIS** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Protocol WHOIS** resources:

```bash
yum install centreon-plugin-Applications-Protocol-Whois
```

2. Install the **Protocol WHOIS** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-protocol-whois
```

3. On the Centreon web interface, install the **Protocol WHOIS** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Protocol WHOIS** domain settings.
* Apply the **App-Protocol-Whois-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name                      | Description                                                                |
| :-------- | :------------------------ | :------------------------------------------------------------------------- |
|           | PROTOCOLWHOISEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_whois.pl \
    --plugin=apps::protocols::whois::plugin \
    --mode=domain \
    --domain='centreon.com' \
    --domain='centreon.fr' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All domains are ok | 'centreon.com#whois.response.time.milliseconds'=237ms;;;0; 'centreon.com#domain.expires.seconds'=27417843s;;;0; 'centreon.fr#whois.response.time.milliseconds'=125ms;;;0; 'centreon.fr#domain.expires.seconds'=24120041s;;;0;
checking domain 'centreon.com'
    whois reponse time: 237 ms
    status: clientDeleteProhibited,clientTransferProhibited,clientDeleteProhibited,clientTransferProhibited
    expires in 10M 1w 5d 23h 13m 33s
checking domain 'centreon.fr'
    whois reponse time: 125 ms
    status: ACTIVE
    expires in 9M 5d 5h 39m 14s
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_whois.pl \
    --plugin=apps::protocols::whois::plugin \
    --mode=domain \
    --help
```

All available modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_whois.pl \
    --plugin=apps::protocols::whois::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md).

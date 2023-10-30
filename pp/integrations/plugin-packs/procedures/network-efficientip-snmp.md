---
id: network-efficientip-snmp
title: Efficient IP
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector **Efficient IP** brings a host template:

* Net-Efficientip-SNMP-custom

It brings the following service templates:

| Service Alias       | Service Template                         | Service Description                                          | Default |
| :------------------ | :--------------------------------------- | :----------------------------------------------------------- | :------ |
| SOLID-Server-status | Net-Efficientip-Status-SNMP              | Check SOLID server role and status                           | X       |
| Dnssec-Validation   | Net-Efficientip-Dnssec-Validation-SNMP   | Check DNSSEC Validation Statistics                           | X       |
| Dns-Transfer        | Net-Efficientip-Dns-Transfer-SNMP        | Check DNS transfer requests statistics                       | X       |
| Dns-General         | Net-Efficientip-Dns-General-SNMP         | Check dns general usage                                      | X       |
| Dns-Anwsers         | Net-Efficientip-Dns-Answers-SNMP         | Check dns answers statistics                                 | X       |
| Dhcp-Usage          | Net-Efficientip-Dhcp-Usage-SNMP          | Check dhcp usage                                             | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="SOLID-Server-status" label="SOLID-Server-status">

| Metric Name | Unit |
| :---------- | :--- |
| status      |      |

</TabItem>
<TabItem value="Dnssec-Validation" label="Dnssec-Validation">

| Metric Name             | Unit  |
| :---------------------- | :---- |
| res-val                 | count |
| res-valsuccess          | count |
| res-valnegsuccess       | count |
| res-valfail             | count |

</TabItem>
<TabItem value="Dns-Transfer" label="Dns-Transfer">

| Metric Name  | Unit  |
| :----------- | :---- |
| xfrdone      | count |
| xfrrej       | count |

</TabItem>
<TabItem value="Dns-General" label="Dns-General">

| Metric Name     | Unit  |
| :-------------- | :---- |
| udp             | count |
| tcp             | count |
| requestv4       | count |
| requestv6       | count |
| recursion       | count |
| response        | count |
| recurserej      | count |
| duplicate       | count |
| dropped         | count |
| res-queryv4     | count |
| res-queryv6     | count |
| res-retry       | count |
| res-responsev4  | count |
| res-responsev6  | count |

</TabItem>
<TabItem value="Dns-Anwsers" label="Dns-Anwsers">

| Metric Name     | Unit  |
| :-------------- | :---- |
| success         | count |
| formerr         | count |
| servfail        | count |
| nxdomain        | count |
| nxrrset         | count |
| failure         | count |

</TabItem>
<TabItem value="Dhcp-Usage" label="Dhcp-Usage">

| Metric Name     | Unit  |
| :-------------- | :---- |
| ack             | count |
| nack            | count |
| offer           | count |
| inform          | count |
| decline         | count |
| release         | count |
| request         | count |
| discover        | count |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Efficient IP**
server. Please refer to the manufacturer official documentation.

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the package on every Centreon poller expected to monitor **Efficient IP** resources:

```bash
yum install centreon-plugin-Network-Efficientip-Snmp
```

2. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Efficient IP** Centreon Monitoring Connector.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the package on every Centreon poller expected to monitor **Efficient IP** resources:

```bash
yum install centreon-plugin-Network-Efficientip-Snmp
```

2. Install the **Efficient IP** Centreon Monitoring Connector RPM on the Centreon central server:

```bash
yum install centreon-pack-network-efficientip-snmp
```

3. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Efficient IP** Centreon Monitoring Connector.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Efficient IP** server settings.
* Apply the **Net-Efficientip-SNMP-custom** template to the host.

If you are using SNMP Version 3, use the **SNMPEXTRAOPTIONS** macro to configure
your own SNMPv3 credentials combo.

| Mandatory | Macro            | Description                                 |
| :-------- | :--------------- | :------------------------------------------ |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_efficientip_snmp.pl --plugin=network::efficientip::snmp::plugin --mode=dns-usage --hostname=10.0.0.1 --snmp-version='2c' --snmp-community='my-community'   --filter-counters='^(success|formerr|servfail|nxdomain|nxrrset|failure)$' --warning-udp='' --critical-udp='' --warning-tcp='' --critical-tcp='' --warning-requestv4='' --critical-requestv4='' --warning-requestv6='' --critical-requestv6='' --warning-recursion='' --critical-recursion='' --warning-response='' --critical-response='' --warning-recurserej='' --critical-recurserej='' --warning-duplicate='' --critical-duplicate='' --warning-dropped='' --critical-dropped='' --warning-res-queryv4='' --critical-res-queryv4='' --warning-res-queryv6='' --critical-res-queryv6='' --warning-res-retry='' --critical-res-retry='' --warning-res-responsev4='' --critical-res-responsev4='' --warning-res-responsev6='' --critical-res-responsev6='' --warning-success='' --critical-success='' --warning-formerr='' --critical-formerr='' --warning-servfail='' --critical-servfail='' --warning-nxdomain='' --critical-nxdomain='' --warning-nxrrset='' --critical-nxrrset='' --warning-failure='' --critical-failure='' --warning-xfrdone='' --critical-xfrdone='' --warning-xfrrej='' --critical-xfrrej='' --warning-res-val='' --critical-res-val='' --warning-res-valsuccess='' --critical-res-valsuccess='' --warning-res-valnegsuccess='' --critical-res-valnegsuccess='' --warning-res-valfail='' --critical-res-valfail='' 
```

The expected command output is shown below:

```bash
OK: Sent NOERROR : 0, Sent FORMERR : 0, Sent SERVFAIL : 0, Sent NXDOMAIN : 0, Sent nxrrset : 0, Sent Other failure : 0 | 'success'=0;;;0; 'formerr'=0;;;0; 'servfail'=0;;;0; 'nxdomain'=0;;;0; 'nxrrset'=0;;;0; 'failure'=0;;;0;
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_efficientip_snmp.pl \
    --plugin=network::efficientip::snmp::plugin \
    --mode=dns-usage \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_efficientip_snmp.pl \
    --plugin=network::efficientip::snmp::plugin \
    --mode=dns-usage \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
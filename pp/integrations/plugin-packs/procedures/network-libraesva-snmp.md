---
id: network-libraesva-snmp
title: Libraesva SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack Libraesva brings a host template:
* Net-Libraesva-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template              | Default | Discovery |
|:--------------|:------------------------------|:--------|:----------|
| Interfaces    | Net-Libraesva-Interfaces-SNMP |         | X         |
| Load          | Net-Libraesva-Load-SNMP       | X       |           |
| Memory        | Net-Libraesva-Memory-SNMP     | X       |           |
| Storage       | Net-Libraesva-Storage-SNMP    |         | X         |
| Swap          | Net-Libraesva-Swap-SNMP       | X       |           |
| System        | Net-Libraesva-System-SNMP     | X       |           |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Rule name                         | Description                                         |
|:----------------------------------|:----------------------------------------------------|
| Net-Libraesva-SNMP-Interface-Name | Discover network interfaces and monitor utilization |
| Net-Libraesva-SNMP-Storage-Name   | Discover disks and monitor utilization              |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Interface" label="Interface">

| Metric name                                               | Description                                             | Unit |
|:--------------------------------------------------------- |:------------------------------------------------------- |:---- |
| status                                                    | Status of the interface                                 |      |
| *interface_name*#interface.traffic.in.bitspersecond       | Incoming traffic going through the interface            | b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface            | b/s  |
| *interface_name*#interface.packets.in.error.percentage    | Incoming errored packets going through the interface    | %    |
| *interface_name*#interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface  | %    |
| *interface_name*#interface.packets.out.error.percentage   | Outgoing errored packets going through the interface    | %    |
| *interface_name*#interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface  | %    |

</TabItem>
<TabItem value="Load" label="Load">

| Metric name            | Description                   | Unit |
| :--------------------- | :---------------------------- | :--- |
| load.1m.count          | System load 1 minute-sample   |      |
| load.5m.count          | System load 5 minutes-sample  |      |
| load.15m.count         | System load 15 minutes-sample |      |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name             | Description                              | Unit  |
| :---------------------  | :--------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage on the device               | B     |
| memory.free.bytes       | Free memory on the device                | B     |
| memory.usage.percentage | Percentage of memory usage on the device | %     |
| memory.buffer.bytes     | Buffered memory allocation               | B     |
| memory.cached.bytes     | Cached memory allocation                 | B     |
| memory.shared.bytes     | Shared memory allocation                 | B     |

</TabItem>
<TabItem value="Storage" label="Storage">

| Metric name                                  | Description                     | Unit  |
| :------------------------------------------- | :------------------------------ |:----- |
| storage.partitions.count                     | Number of disk partition.       |       |
| *partition\_name*\#storage.space.usage.bytes | Used space on a disk partition. | B     |
| *partition\_name*\#storage.access            | Access disk partition.          |       |

</TabItem>
<TabItem value="Swap" label="Swap">

| Metric name                 | Description   | Unit |
| :-------------------------- | :------------ | :--- |
| swap.usage.bytes            | Swap usage    | B    |
| swap.free.bytes             | Swap free     | B    |
| swap.usage.percentage       | Swap usage    | %    |

</TabItem>
<TabItem value="System" label="System">

| Metric name                  | Description                          | Unit |
| :--------------------------- | :----------------------------------- | :--- |
| system.mails.sent.count      | Number of sent mails                 |      |
| system.mails.received.count  | Number of received mails             |      |
| system.mails.rejected.count  | Number of rejected mails             |      |
| system.mails.bounced.count   | Number of bounced mails              |      |
| system.messages.spam.count   | Number of messages marked as spam    |      |
| system.messages.virus.count  | Number of messages marked as a virus |      |
| system.mails.queue.in.count  | Number of mails in incoming queue    |      |
| system.mails.queue.out.count | Number of mails in outgoing queue    |      |
| cluster status               | Overall cluster status               |      |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this Pack, the SNMP service must be properly configured on your device.

### Network flow

The target equipment must be reachable from the Centreon Poller on the UDP/161 SNMP
port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Libraesva SNMP** resources:

```bash
yum install centreon-plugin-Network-Libraesva-Snmp
```

2. On the Centreon web interface, install the **Libraesva SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Libraesva SNMP** resources:

```bash
yum install centreon-plugin-Network-Libraesva-Snmp
```

2. Install the **Libraesva SNMP** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-libraesva-snmp
```

3. On the Centreon web interface, install the **Libraesva SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Libraesva SNMP** equipment settings.
* Apply the **Net-Libraesva-SNMP-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name             | Description                                              |
| :-------- | :--------------- | :------------------------------------------------------- |
|           | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_libraesva_snmp.pl \
    --plugin=network::libraesva::snmp::plugin \
    --mode=memory \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community'
```

The expected command output is shown below:

```bash
OK: Ram Total: 7.66 GB Used (-buffers/cache): 3.23 GB (42.20%) Free: 4.43 GB (57.80%), Buffer: 252.45 MB, Cached: 3.80 GB, Shared: 396.42 MB | 'memory.usage.bytes'=3470262272B;;;0;8223875072 'memory.free.bytes'=4753612800B;;;0;8223875072 'memory.usage.percentage'=42.20%;;;0;100 'memory.buffer.bytes'=264708096B;;;0; 'memory.cached.bytes'=4079517696B;;;0; 'memory.shared.bytes'=415678464B;;;0;
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_libraesva_snmp.pl \
    --plugin=network::libraesva::snmp::plugin \
    --mode=memory \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_libraesva_snmp.pl \
    --plugin=network::libraesva::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

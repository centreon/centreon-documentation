---
id: network-cisco-umbrella-snmp
title: Cisco Umbrella

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector **Cisco Umbrella** brings a host template:

* Net-Cisco-Umbrella-SNMP-custom

It brings the following service templates:

| Service Alias    | Service Template                         | Service Description                                          | Default |
| :--------------- | :--------------------------------------- | :----------------------------------------------------------- | :------ |
| Appliance-Status | Net-Cisco-Umbrella-Appliance-Status-SNMP | Check virtual appliance status                               | X       |
| Connectivity     | Net-Cisco-Umbrella-Connectivity-SNMP     | Check connectivity between Umbrella virtual appliance and DNS, local DNS, Umbrella dashboard | X       |
| Cpu              | Net-Cisco-Umbrella-Cpu-SNMP              | Check CPU usage                                              | X       |
| Load-Average     | Net-Cisco-Umbrella-Load-Average-SNMP     | Check Load on 5m and 15m                                     | X       |
| Memory           | Net-Cisco-Umbrella-Memory-SNMP           | Check memory usage                                           | X       |
| Query            | Net-Cisco-Umbrella-Query-SNMP            | Check number of DNS queries per second over the last 5 and 15 minutes | X       |
| Storage-Usage    | Net-Cisco-Umbrella-Storage-SNMP          | Check storage usage                                          | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Appliance-Status" label="Appliance-Status">

| Metric Name | Unit |
| :---------- | :--- |
| status      |      |

</TabItem>
<TabItem value="Connectivity" label="Connectivity">

| Metric Name                                    | Unit  |
| :--------------------------------------------- | :---- |
| DNS connectivity status                        |       |
| Local DNS connectivity status                  |       |
| Umbrella dashboard (cloud) connectivity status |       |
| AD connectors connectivity status              |       |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric Name                           | Unit  |
| :------------------------------------ | :---- |
| cpu.user.utilization.percentage       | %     |
| cpu.nice.utilization.percentage       | %     |
| cpu.system.utilization.percentage     | %     |
| cpu.idle.utilization.percentage       | %     |
| cpu.wait.utilization.percentage       | %     |
| cpu.kernel.utilization.percentage     | %     |
| cpu.interrupt.utilization.percentage  | %     |
| cpu.softirq.utilization.percentage    | %     |
| cpu.steal.utilization.percentage      | %     |
| cpu.guest.utilization.percentage      | %     |
| cpu.guestnice.utilization.percentage  | %     |

</TabItem>
<TabItem value="Load-Average" label="Load-Average">

| Metric Name            | Unit  |
| :--------------------- | :---- |
| load.1m.count          | count |
| load.5m.count          | count |
| load.15m.count         | count |

</TabItem>
<TabItem value="Memory" label="Memory">

Could not retrive metrics

</TabItem>
<TabItem value="Query" label="Query">

| Metric Name                        | Unit  |
| :--------------------------------- | :---- |
| dns.query.last.15m.persecond.count | count |
| dns.query.last.5m.persecond.count  | count |

</TabItem>
<TabItem value="Storage-Usage" label="Storage-Usage">

| Metric Name                    | Unit |
| :----------------------------- | :--- |
| storage.utilization.percentage | %    |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Cisco Umbrella**
server. Please refer to the official documentation from Cisco:

* [Cisco Umbrella](https://docs.umbrella.com/deployment-umbrella/docs/appendix-c-enable-snmp-monitoring)

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the package on every Centreon poller expected to monitor **Cisco Umbrella** resources:

```bash
yum install centreon-plugin-Network-Cisco-Umbrella-Snmp
```

2. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Cisco Umbrella** Centreon Monitoring Connector.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the package on every Centreon poller expected to monitor **Cisco Umbrella** resources:

```bash
yum install centreon-plugin-Network-Cisco-Umbrella-Snmp
```

2. Install the **Cisco Umbrella** Centreon Monitoring Connector RPM on the Centreon central server:

```bash
yum install centreon-pack-network-cisco-umbrella-snmp
```

3. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Cisco Umbrella** Centreon Monitoring Connector.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Cisco Umbrella** server settings.
* Apply the **Net-Cisco-Umbrella-SNMP-custom** template to the host.

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
/usr/lib/centreon/plugins//centreon_cisco_umbrella_snmp.pl \
    --plugin=network::cisco::umbrella::snmp::plugin \
    --mode=query \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-5m='' \
    --critical-5m='' \
    --warning-15m='' \
    --critical-15m='' \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: Query rate: 3/s (5m), 5/s (15m) | 'dns.query.last.5m.persecond.count'=3;;;0; 'dns.query.last.15m.persecond.count'=5;;;0; 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_cisco_umbrella_snmp.pl \
    --plugin=network::cisco::umbrella::snmp::plugin \
    --mode=query \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_cisco_umbrella_snmp.pl \
    --plugin=network::cisco::umbrella::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
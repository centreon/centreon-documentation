---
id: network-fortinet-fortigate-restapi
title: Fortinet Fortigate Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Monitored Objects

The Centreon Pack **Fortinet Fortigate** brings a host template:
* Net-Fortinet-Fortigate-Restapi-custom

It brings the following service templates:

| Service Alias | Service Template                        | Description                                             | Default |
|:--------------|:----------------------------------------|:--------------------------------------------------------|:--------|
| Ha            | Net-Fortinet-Fortigate-Ha-Restapi       | Check cluster members system (cpu, memory and sessions) |         |
| Health        | Net-Fortinet-Fortigate-Health-Restapi   | Check firewall health                                   | X       |
| Licenses      | Net-Fortinet-Fortigate-Licenses-Restapi | Check licenses                                          | X       |
| System        | Net-Fortinet-Fortigate-System-Restapi   | Check VDOM systems (cpu, memory and sessions)           | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Ha" label="Ha">

| Metric name                                     | Unit  |
| :---------------------------------------------- | :---- |
| members.detected.count                          |       |
| *member_name*#member.cpu.utilization.percentage | %     |
| *member_name*#member.memory.usage.percentage    | %     |
| *member_name*#member.sessions.active.count      |       |

</TabItem>
<TabItem value="Health" label="Health">

| Metric name   | Unit  |
| :-------------| :---- |
| health status |       |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Metric name                            | Unit  |
| :------------------------------------- | :---- |
| license status                         |       |
| *license_name*#license.expires.seconds |       |

</TabItem>
<TabItem value="System" label="System">

| Metric name                            | Unit  |
| :------------------------------------- | :---- |
| *vdom_name*#cpu.utilization.percentage | %     |
| *vdom_name*#memory.usage.percentage    | %     |
| *vdom_name*#sessions.active.count      |       |

</TabItem>
</Tabs>

## Prerequisites

To control your Fortinet Fortigate, the Rest API must be configured.
E.g: https://docs.fortinet.com/document/fortigate/7.2.1/administration-guide/399023/rest-api-administrator

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon package on every Centreon poller expected to monitor **Fortinet Fortigate** resources:

```bash
yum install centreon-plugin-Network-Fortinet-Fortigate-Restapi
```

2. On the Centreon web interface, install the **Fortinet Fortigate Rest API** Centreon Pack on the **Configuration > Monitoring Connectors Manager** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor **Fortinet Fortigate** resources:

```bash
yum install centreon-plugin-Network-Fortinet-Fortigate-Restapi
```

2. Install the **Fortinet Fortigate Rest API** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-fortinet-fortigate-restapi
```

3. On the Centreon web interface, install the **Fortinet Fortigate Rest API** Centreon Pack on the **Configuration > Monitoring Connectors Manager** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** and **IP Address / DNS** fields according to your **Fortinet Fortigate** equipment settings.
* Apply the **Net-Fortinet-Fortigate-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name            | Description                                                                |
| :-------- | :-------------- | :------------------------------------------------------------------------- |
| X         | APIPORT         | Port used (Default: 443)                                                   |
| X         | APIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | APIACCESSTOKEN  | API token                                                                  |
|           | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_fortinet_fortigate_restapi.pl \
    --plugin=network::fortinet::fortigate::restapi::plugin \
    --mode=system \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-token='mytoken' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All vdom systems are ok | 'ABS#cpu.utilization.percentage'=0.00%;;;0;100 'ABS#memory.usage.percentage'=0.00%;;;0;100 'ABS#sessions.active.count'=155;;;0; 'ADV#cpu.utilization.percentage'=0.00%;;;0;100 'ADV#memory.usage.percentage'=1.00%;;;0;100 'ADV#sessions.active.count'=553;;;0; 'BGN#cpu.utilization.percentage'=0.00%;;;0;100 'BGN#memory.usage.percentage'=0.00%;;;0;100 'BGN#sessions.active.count'=244;;;0; 'LHE#cpu.utilization.percentage'=0.00%;;;0;100 'LHE#memory.usage.percentage'=0.00%;;;0;100 'LHE#sessions.active.count'=100;;;0; 'MED#cpu.utilization.percentage'=3.00%;;;0;100 'MED#memory.usage.percentage'=11.00%;;;0;100 'MED#sessions.active.count'=6280;;;0; 'MIC#cpu.utilization.percentage'=0.00%;;;0;100 'MIC#memory.usage.percentage'=5.00%;;;0;100 'MIC#sessions.active.count'=3244;;;0; 'MLC#cpu.utilization.percentage'=0.00%;;;0;100 'MLC#memory.usage.percentage'=0.00%;;;0;100 'MLC#sessions.active.count'=431;;;0; 'PRN#cpu.utilization.percentage'=0.00%;;;0;100 'PRN#memory.usage.percentage'=0.00%;;;0;100 'PRN#sessions.active.count'=0;;;0; 'SSTRN#cpu.utilization.percentage'=5.00%;;;0;100 'SSTRN#memory.usage.percentage'=12.00%;;;0;100 'SSTRN#sessions.active.count'=6559;;;0; 'root#cpu.utilization.percentage'=2.00%;;;0;100 'root#memory.usage.percentage'=4.00%;;;0;100 'root#sessions.active.count'=228;;;0;
checking vdom 'ABS'
    cpu load: 0.00 %
    memory used: 0.00 %
    active sessions: 155
checking vdom 'ADV'
    cpu load: 0.00 %
    memory used: 1.00 %
    active sessions: 553
checking vdom 'BGN'
    cpu load: 0.00 %
    memory used: 0.00 %
    active sessions: 244
checking vdom 'LHE'
    cpu load: 0.00 %
    memory used: 0.00 %
    active sessions: 100
checking vdom 'MED'
    cpu load: 3.00 %
    memory used: 11.00 %
    active sessions: 6280
checking vdom 'MIC'
    cpu load: 0.00 %
    memory used: 5.00 %
    active sessions: 3244
checking vdom 'MLC'
    cpu load: 0.00 %
    memory used: 0.00 %
    active sessions: 431
checking vdom 'PRN'
    cpu load: 0.00 %
    memory used: 0.00 %
    active sessions: 0
checking vdom 'SSTRN'
    cpu load: 5.00 %
    memory used: 12.00 %
    active sessions: 6559
checking vdom 'root'
    cpu load: 2.00 %
    memory used: 4.00 %
    active sessions: 228
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_fortinet_fortigate_restapi.pl \
    --plugin=network::fortinet::fortigate::restapi::plugin \
    --mode=system \
    --help
```

All available modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_fortinet_fortigate_restapi.pl \
    --plugin=network::fortinet::fortigate::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

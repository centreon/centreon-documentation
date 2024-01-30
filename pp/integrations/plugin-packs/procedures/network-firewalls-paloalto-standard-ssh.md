---
id: network-firewalls-paloalto-standard-ssh
title: Palo Alto firewall SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Monitoring Connector Assets

### Monitored Objects

The Centreon Monitoring Connector includes monitoring of the system, interfaces, licenses, ipsec, high availability between nodes and hardware components using system commands.

### Discovery Rules

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Rule name                                     | Description                                                              |
| :-------------------------------------------- | :----------------------------------------------------------------------- |
| Net-PaloAlto-Standard-SNMP-Packet-Errors-Name | Discover network interfaces and monitor errors and discards              |
| Net-PaloAlto-Standard-SNMP-Traffic-Name       | Discover network interfaces and monitor status and bandwidth utilization |

</TabItem>
</Tabs>

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Environnement" label="Environnement">

| Metric name                               | Description                            | Unit |
| :---------------------------------------- | :------------------------------------- | :--- |
| hardware.temperature.celsius              | Temperature of the different sensors   | C    |
| hardware.voltage.volt                     | Voltage of the different sensors       | V    |

</TabItem>
<TabItem value="HA" label="HA">

| Metric name                               | Description         | Unit |
| :---------------------------------------- | :------------------ | :--- |
| sync status                               | HA Sync status      |      |
| member status                             | HA member status    |      |
| link status                               | HA Link status      |      |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                               | Description                                                       | Unit  |
| :---------------------------------------- | :---------------------------------------------------------------- | :---- |
| interfaces.total.count                    | Total number of interfaces	                                    | count |
| interfaces status                         | Status of the interface operationnal and high availability state	|       |

</TabItem>
<TabItem value="IPSec" label="IPSec">

| Metric name                               | Description                            | Unit  |
| :---------------------------------------- | :------------------------------------- | :---- |
| tunnels.ipsec.total.count                 | Total number of ipsec tunnels          | count |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Metric name                               | Description                                             | Unit |
| :---------------------------------------- | :------------------------------------------------------ | :--- |
| status                                    | Licence validity check of enabled features Sync status  |      |

</TabItem>
<TabItem value="System" label="System">

| Metric name                               | Description                            | Unit  |
| :---------------------------------------- | :------------------------------------- | :---- |
| system.antivirus.lastupdate.time.seconds  | Last antivirus update                  | s     |
| system.threat.lastupdate.time.seconds     | Last threat update                     | s     |
| system.sessions.traffic.count             | Number of traffic sessions             | count |
| system.sessions.total.active.count        | Total number of active sessions        | count |

</TabItem>
</Tabs>

## Prerequisites

In order to work, the Plugin requires an SSH connection between the Poller and the Palo Alto firewall. 
The remote user must have enough privileges to execute system commands. 

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Firewalls-Paloalto-Standard-Ssh
```

2. On the Centreon Web interface in **Configuration > Monitoring Connector Manager**, install the *Palo Alto firewall SSH* Monitoring Connector

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Firewalls-Paloalto-Standard-Ssh
```

2. On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:

```bash
yum install centreon-pack-network-firewalls-paloalto-standard-ssh
```

3. On the Centreon Web interface in **Configuration > Monitoring Connector Manager**, install the *Palo Alto firewall SSH* Monitoring Connector

</TabItem>
</Tabs>

## Host Configuration

* Add a new Host and apply the *Net-PaloAlto-Standard-SSH-custom* Host Template

> Three SSH backends are available to connect to the remote server: *sshcli*, *plink* and *libssh* which are detailed below.

<Tabs groupId="sync">
<TabItem value="sshcli backend" label="sshcli backend">

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```sshcli```                                                           |
| X           | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your Poller                |
|             | SSHPASSWORD     | Cannot be used with backend. Only ssh key authentication                                    |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

> With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

</TabItem>
<TabItem value="plink backend" label="plink backend">

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```plink```                                                            |
| X           | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your Poller                |
|             | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                                     |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

> With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

</TabItem>
<TabItem value="libssh backend (default)" label="libssh backend (default)">

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```libssh```                                                           |
| X           | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your Poller                |
|             | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                                     |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

With that backend, you do not have to validate the target server fingerprint manually.

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your Poller using the *centreon-engine* user account and run the following command :

```bash
/usr/lib/centreon/plugins/centreon_paloalto_ssh.pl \
    --plugin=network::paloalto::ssh::plugin \
    --mode=environment \
    --hostname=10.30.2.81 \
    --ssh-username=centreon \
    --ssh-password='centreon-password' \
    --ssh-backend=sshcli \
    --component='.*' \
    --verbose
```

Which output something similar to:

```bash
OK: All 12 components are ok [4/4 psus, 4/4 temperatures, 4/4 voltages].
Checking power supplies
Power supply 'Power Supply A1' status is normal [instance: 1].
Power supply 'Power Supply B1' status is normal [instance: 2].
Power supply 'Power Supply A2' status is normal [instance: 1].
Power supply 'Power Supply B2' status is normal [instance: 2].
Checking temperatures
Temperature sensor on slot 1' temperature is 69C [instance: 18.1].
Temperature sensor on slot 2' temperature is 59C [instance: 40.1].
Temperature sensor on slot 3' temperature is 57C [instance: 89.1].
Temperature sensor on slot 4' temperature is 67C [instance: 89.2].
Checking voltages
1,500V voltage sensor, slot 1' voltage is 1,732 V [instance: 18.1].
1,800V voltage sensor, slot 1' voltage is 1,072 V [instance: 18.2].
1,500V voltage sensor, slot 2' voltage is 1,732 V [instance: 89.1].
1,800V voltage sensor, slot 2' voltage is 1,072 V [instance: 89.2].
```

The above command gets the state of the Palo Alto firewall environment (```--mode=environment```).
It uses a SSH username _centreon_ (```--ssh-username=centreon```), a SSH password _centreon-password_ (```--ssh-password='centreon-password'```),
uses a SSH backend _sshcli_ (```--ssh-backend='sshcli'```) and it connects to the host _10.30.2.81_ (```--hostname=10.30.2.81```).

All the options that can be used with this plugin can be found over the ```--help``` options:

```bash
/usr/lib/centreon/plugins/centreon_paloalto_ssh.pl \
    --plugin=network::paloalto::ssh::plugin \
    --mode=environment \
    --help
```

## Troubleshooting

### I have that error message: ```UNKNOWN: Command error: Host key verification failed.```. What does it mean ?

It means you haven't manually validated the target server fingerprint with ```libssh``` or ```plink``` on the Centreon Poller.

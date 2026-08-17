---
id: applications-voip-xivo
title: XiVO VoIP Server
description: "Monitor XiVO VoIP Server via SNMP: check critical process status for nginx, postgres, and xivo services."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **XiVO VoIP Server** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)
* [Asterisk VoIP SNMP](./applications-voip-asterisk-snmp.md)
* [HTTP Server](./applications-protocol-http.md)
* [Linux SNMP](./operatingsystems-linux-snmp.md)
* [NTP Server](./applications-protocol-ntp.md)

## Pack assets

### Templates

The Monitoring Connector **XiVO VoIP Server** brings a host template:

* **App-VoIP-XiVO-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-VoIP-XiVO-custom" label="App-VoIP-XiVO-custom">

| Service Alias              | Service Template                           | Service Description         |
|:---------------------------|:-------------------------------------------|:----------------------------|
| XiVO-process-nginx         | App-VoIP-XiVO-Process-nginx-custom         | Check nginx process         |
| XiVO-process-postgres      | App-VoIP-XiVO-Process-postgres-custom      | Check postgres process.     |
| XiVO-process-xivo-agentd   | App-VoIP-XiVO-Process-xivo-agentd-custom   | Check xivo-agentd process   |
| XiVO-process-xivo-agid     | App-VoIP-XiVO-Process-xivo-agid-custom     | Check xivo-agid process     |
| XiVO-process-xivo-amid     | App-VoIP-XiVO-Process-xivo-amid-custom     | Check xivo-amid process     |
| XiVO-process-xivo-confgend | App-VoIP-XiVO-Process-xivo-confgend-custom | Check xivo-confgend process |
| XiVO-process-xivo-ctid     | App-VoIP-XiVO-Process-xivo-ctid-custom     | Check xivo-ctid process     |

> The services listed above are created automatically when the **App-VoIP-XiVO-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias               | Service Template                            | Service Description          |
|:----------------------------|:--------------------------------------------|:-----------------------------|
| XiVO-process-xivo-call-logd | App-VoIP-XiVO-Process-xivo-call-logd-custom | Check xivo-call-logd process |
| XiVO-process-xivo-confd     | App-VoIP-XiVO-Process-xivo-confd-custom     | Check xivo-confd process     |
| XiVO-process-xivo-dxtora    | App-VoIP-XiVO-Process-xivo-dxtora-custom    | Check xivo-dxtora process    |
| XiVO-process-xivo-provd     | App-VoIP-XiVO-Process-xivo-provd-custom     | Check xivo-provd process     |
| XiVO-process-xivo-sysconfd  | App-VoIP-XiVO-Process-xivo-sysconfd-custom  | Check xivo-sysconfd process  |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="XiVO-process-nginx" label="XiVO-process-nginx">

| Name      | Unit  |
|:----------|:------|
| nbproc    | N/A   |
| mem_total | B     |
| mem_avg   | B     |
| cpu_total | %     |

</TabItem>
<TabItem value="XiVO-process-postgres" label="XiVO-process-postgres">

| Name      | Unit  |
|:----------|:------|
| nbproc    | N/A   |
| mem_total | B     |
| mem_avg   | B     |
| cpu_total | %     |

</TabItem>
<TabItem value="XiVO-process-xivo-agentd" label="XiVO-process-xivo-agentd">

| Name      | Unit  |
|:----------|:------|
| nbproc    | N/A   |
| mem_total | B     |
| mem_avg   | B     |
| cpu_total | %     |

</TabItem>
<TabItem value="XiVO-process-xivo-agid" label="XiVO-process-xivo-agid">

| Name      | Unit  |
|:----------|:------|
| nbproc    | N/A   |
| mem_total | B     |
| mem_avg   | B     |
| cpu_total | %     |

</TabItem>
<TabItem value="XiVO-process-xivo-amid" label="XiVO-process-xivo-amid">

| Name      | Unit  |
|:----------|:------|
| nbproc    | N/A   |
| mem_total | B     |
| mem_avg   | B     |
| cpu_total | %     |

</TabItem>
<TabItem value="XiVO-process-xivo-call-logd" label="XiVO-process-xivo-call-logd">

| Name      | Unit  |
|:----------|:------|
| nbproc    | N/A   |
| mem_total | B     |
| mem_avg   | B     |
| cpu_total | %     |

</TabItem>
<TabItem value="XiVO-process-xivo-confd" label="XiVO-process-xivo-confd">

| Name      | Unit  |
|:----------|:------|
| nbproc    | N/A   |
| mem_total | B     |
| mem_avg   | B     |
| cpu_total | %     |

</TabItem>
<TabItem value="XiVO-process-xivo-confgend" label="XiVO-process-xivo-confgend">

| Name      | Unit  |
|:----------|:------|
| nbproc    | N/A   |
| mem_total | B     |
| mem_avg   | B     |
| cpu_total | %     |

</TabItem>
<TabItem value="XiVO-process-xivo-ctid" label="XiVO-process-xivo-ctid">

| Name      | Unit  |
|:----------|:------|
| nbproc    | N/A   |
| mem_total | B     |
| mem_avg   | B     |
| cpu_total | %     |

</TabItem>
<TabItem value="XiVO-process-xivo-dxtora" label="XiVO-process-xivo-dxtora">

| Name      | Unit  |
|:----------|:------|
| nbproc    | N/A   |
| mem_total | B     |
| mem_avg   | B     |
| cpu_total | %     |

</TabItem>
<TabItem value="XiVO-process-xivo-provd" label="XiVO-process-xivo-provd">

| Name      | Unit  |
|:----------|:------|
| nbproc    | N/A   |
| mem_total | B     |
| mem_avg   | B     |
| cpu_total | %     |

</TabItem>
<TabItem value="XiVO-process-xivo-sysconfd" label="XiVO-process-xivo-sysconfd">

| Name      | Unit  |
|:----------|:------|
| nbproc    | N/A   |
| mem_total | B     |
| mem_avg   | B     |
| cpu_total | %     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration
The SNMP service must be configured and activated on the host. 
Please refer to the official documentation. 
Your resource may require a list of addresses authorized to query it to be set up. 
Please ensure that the addresses of the Centreon pollers are included in this list.

### Network flow

The target resource must be reachable from the Centreon poller on the UDP/161 SNMP port.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-voip-xivo
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-voip-xivo
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-voip-xivo
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-voip-xivo
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **XiVO VoIP Server** connector through
the **Configuration > Monitoring Connector Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Operatingsystems-Linux-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-Linux-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-operatingsystems-linux-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-Linux-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-VoIP-XiVO-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro            | Description                                                                                                                              | Default value | Mandatory |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="XiVO-process-nginx" label="XiVO-process-nginx">

| Macro        | Description                                                                                                                            | Default value | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| PROCESSNAME  | Filter process name                                                                                                                    | nginx         |           |
| PROCESSPATH  | Filter process path                                                                                                                    |               |           |
| PROCESSARGS  | Filter process arguments                                                                                                               |               |           |
| CRITICAL     | Critical threshold of matching processes count                                                                                         | 5:5           |           |
| WARNING      | Warning threshold of matching processes count                                                                                          |               |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="XiVO-process-postgres" label="XiVO-process-postgres">

| Macro        | Description                                                                                                                            | Default value | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| PROCESSNAME  | Filter process name                                                                                                                    | postgres      |           |
| PROCESSPATH  | Filter process path                                                                                                                    |               |           |
| PROCESSARGS  | Filter process arguments                                                                                                               |               |           |
| CRITICAL     | Critical threshold of matching processes count                                                                                         | 5:            |           |
| WARNING      | Warning threshold of matching processes count                                                                                          |               |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="XiVO-process-xivo-agentd" label="XiVO-process-xivo-agentd">

| Macro        | Description                                                                                                                            | Default value | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| PROCESSNAME  | Filter process name                                                                                                                    | xivo-agentd   |           |
| PROCESSPATH  | Filter process path                                                                                                                    |               |           |
| PROCESSARGS  | Filter process arguments                                                                                                               |               |           |
| CRITICAL     | Critical threshold of matching processes count                                                                                         | 1:1           |           |
| WARNING      | Warning threshold of matching processes count                                                                                          |               |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="XiVO-process-xivo-agid" label="XiVO-process-xivo-agid">

| Macro        | Description                                                                                                                            | Default value | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| PROCESSNAME  | Filter process name                                                                                                                    | xivo-agid     |           |
| PROCESSPATH  | Filter process path                                                                                                                    |               |           |
| PROCESSARGS  | Filter process arguments                                                                                                               |               |           |
| CRITICAL     | Critical threshold of matching processes count                                                                                         | 1:1           |           |
| WARNING      | Warning threshold of matching processes count                                                                                          |               |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="XiVO-process-xivo-amid" label="XiVO-process-xivo-amid">

| Macro        | Description                                                                                                                            | Default value | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| PROCESSNAME  | Filter process name                                                                                                                    | xivo-amid     |           |
| PROCESSPATH  | Filter process path                                                                                                                    |               |           |
| PROCESSARGS  | Filter process arguments                                                                                                               |               |           |
| CRITICAL     | Critical threshold of matching processes count                                                                                         | 1:1           |           |
| WARNING      | Warning threshold of matching processes count                                                                                          |               |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="XiVO-process-xivo-call-logd" label="XiVO-process-xivo-call-logd">

| Macro        | Description                                                                                                                            | Default value  | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:---------------|:---------:|
| PROCESSNAME  | Filter process name                                                                                                                    | xivo-call-logd |           |
| PROCESSPATH  | Filter process path                                                                                                                    |                |           |
| PROCESSARGS  | Filter process arguments                                                                                                               |                |           |
| CRITICAL     | Critical threshold of matching processes count                                                                                         | 1:1            |           |
| WARNING      | Warning threshold of matching processes count                                                                                          |                |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                |           |

</TabItem>
<TabItem value="XiVO-process-xivo-confd" label="XiVO-process-xivo-confd">

| Macro        | Description                                                                                                                            | Default value | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| PROCESSNAME  | Filter process name                                                                                                                    | xivo-confd    |           |
| PROCESSPATH  | Filter process path                                                                                                                    |               |           |
| PROCESSARGS  | Filter process arguments                                                                                                               |               |           |
| CRITICAL     | Critical threshold of matching processes count                                                                                         | 1:1           |           |
| WARNING      | Warning threshold of matching processes count                                                                                          |               |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="XiVO-process-xivo-confgend" label="XiVO-process-xivo-confgend">

| Macro        | Description                                                                                                                            | Default value | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| PROCESSARGS  | Filter process arguments                                                                                                               | xivo-confgend |           |
| PROCESSNAME  | Filter process name                                                                                                                    |               |           |
| PROCESSPATH  | Filter process path                                                                                                                    |               |           |
| CRITICAL     | Critical threshold of matching processes count                                                                                         | 1:1           |           |
| WARNING      | Warning threshold of matching processes count                                                                                          |               |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="XiVO-process-xivo-ctid" label="XiVO-process-xivo-ctid">

| Macro        | Description                                                                                                                            | Default value | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| PROCESSNAME  | Filter process name                                                                                                                    | xivo-ctid     |           |
| PROCESSPATH  | Filter process path                                                                                                                    |               |           |
| PROCESSARGS  | Filter process arguments                                                                                                               |               |           |
| CRITICAL     | Critical threshold of matching processes count                                                                                         | 1:1           |           |
| WARNING      | Warning threshold of matching processes count                                                                                          |               |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="XiVO-process-xivo-dxtora" label="XiVO-process-xivo-dxtora">

| Macro        | Description                                                                                                                            | Default value | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| PROCESSNAME  | Filter process name                                                                                                                    | xivo-dxtora   |           |
| PROCESSPATH  | Filter process path                                                                                                                    |               |           |
| PROCESSARGS  | Filter process arguments                                                                                                               |               |           |
| CRITICAL     | Critical threshold of matching processes count                                                                                         | 1:1           |           |
| WARNING      | Warning threshold of matching processes count                                                                                          |               |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="XiVO-process-xivo-provd" label="XiVO-process-xivo-provd">

| Macro        | Description                                                                                                                            | Default value | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| PROCESSARGS  | Filter process arguments                                                                                                               | xivo-provd    |           |
| PROCESSNAME  | Filter process name                                                                                                                    |               |           |
| PROCESSPATH  | Filter process path                                                                                                                    |               |           |
| CRITICAL     | Critical threshold of matching processes count                                                                                         | 1:1           |           |
| WARNING      | Warning threshold of matching processes count                                                                                          |               |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="XiVO-process-xivo-sysconfd" label="XiVO-process-xivo-sysconfd">

| Macro        | Description                                                                                                                            | Default value | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| PROCESSNAME  | Filter process name                                                                                                                    | xivo-sysconfd |           |
| PROCESSPATH  | Filter process path                                                                                                                    |               |           |
| PROCESSARGS  | Filter process arguments                                                                                                               |               |           |
| CRITICAL     | Critical threshold of matching processes count                                                                                         | 1:1           |           |
| WARNING      | Warning threshold of matching processes count                                                                                          |               |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_linux_snmp.pl \
	--plugin=os::linux::snmp::plugin \
	--mode=processcount \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--process-name='xivo-sysconfd' \
	--process-path='' \
	--process-args='' \
	--regexp-name \
	--regexp-path \
	--regexp-args \
	--warning='' \
	--critical='1:1' 
```

The expected command output is shown below:

```bash
OK: Number of current processes running: 1 | 'nbproc'=1;;;0; 'mem_total'=63850B;;;0; 'mem_avg'=93737B;;;0; 'cpu_total'=25%;;;0; 
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_linux_snmp.pl \
	--plugin=os::linux::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                 | Linked service template                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| arp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/arp.pm)]                                | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| channel-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/voip/asterisk/snmp/mode/channelusage.pm)]   | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| collection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/http/mode/collection.pm)]            | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpu.pm)]                                | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpudetailed.pm)]               | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| disk-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/diskusage.pm)]                   | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/diskio.pm)]                          | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| expected-content [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/http/mode/expectedcontent.pm)] | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| inodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/inodes.pm)]                          | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/interfaces.pm)]                  | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| json-content [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/http/mode/jsoncontent.pm)]         | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| list-diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listdiskio.pm)]                 | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| list-diskspath [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listdiskspath.pm)]           | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]         | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| list-processes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listprocesses.pm)]           | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/liststorages.pm)]             | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/loadaverage.pm)]                       | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/memory.pm)]                          | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| offset [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/ntp/mode/offset.pm)]                     | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| processcount [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/processcount.pm)]              | App-VoIP-XiVO-Process-nginx-custom<br />App-VoIP-XiVO-Process-postgres-custom<br />App-VoIP-XiVO-Process-xivo-agentd-custom<br />App-VoIP-XiVO-Process-xivo-agid-custom<br />App-VoIP-XiVO-Process-xivo-amid-custom<br />App-VoIP-XiVO-Process-xivo-call-logd-custom<br />App-VoIP-XiVO-Process-xivo-confd-custom<br />App-VoIP-XiVO-Process-xivo-confgend-custom<br />App-VoIP-XiVO-Process-xivo-ctid-custom<br />App-VoIP-XiVO-Process-xivo-dxtora-custom<br />App-VoIP-XiVO-Process-xivo-provd-custom<br />App-VoIP-XiVO-Process-xivo-sysconfd-custom |
| response [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/http/mode/response.pm)]                | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| response-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/ntp/mode/responsetime.pm)]        | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| soap-content [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/http/mode/soapcontent.pm)]         | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/storage.pm)]                        | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/swap.pm)]                              | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| tcpcon [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/tcpcon.pm)]                          | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/ntp.pm)]                               | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| udpcon [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/udpcon.pm)]                          | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/uptime.pm)]                          | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Available options

#### Generic options

All generic options are listed here:

| Option                 | Description                                                                                                                                                                                                                                     |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --process-status       |   Filter process status. Can be a regexp.  (default: 'running\|runnable').                                                                                                                                                                      |
| --process-name         |   Filter process name.                                                                                                                                                                                                                          |
| --regexp-name          |   Allows to use regexp to filter process  name (with option --process-name).                                                                                                                                                                    |
| --process-path         |   Filter process path.                                                                                                                                                                                                                          |
| --regexp-path          |   Allows to use regexp to filter process  path (with option --process-path).                                                                                                                                                                    |
| --process-args         |   Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args          |   Allows to use regexp to filter process  arguments (with option --process-args).                                                                                                                                                               |
| --warning              |   Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical             |   Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory               |   Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each     |   Warning threshold of memory  used by each matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-each    |   Critical threshold of memory  used by each matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-total    |   Warning threshold of total  memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --critical-mem-total   |   Critical threshold of total  memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --warning-mem-avg      |   Warning threshold of average  memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --critical-mem-avg     |   Critical threshold of average  memory used by matching processes (in Bytes).                                                                                                                                                                  |
| --cpu                  |   Check CPU usage. Should be used with fix processes. If processes pid changes too much, the plugin can't compute values.                                                                                                                       |
| --warning-cpu-total    |   Warning threshold of CPU usage for all processes (in percent). CPU usage is in % of one CPU, so maximum can be 100% * number of CPU  and a process can have a value greater than 100%.                                                        |
| --critical-cpu-total   |   Critical threshold of CPU usage for all processes (in percent). CPU usage is in % of one CPU, so maximum can be 100% * number of CPU  and a process can have a value greater than 100%.                                                       |
| --top                  |   Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num              |   Number of processes in top memory display (default: 5).                                                                                                                                                                                       |
| --top-size             |   Minimum memory usage to be in top memory display  (default: 52428800 -\> 50 MB).                                                                                                                                                              |

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_linux_snmp.pl \
	--plugin=os::linux::snmp::plugin \
	--mode=processcount \
	--help
```

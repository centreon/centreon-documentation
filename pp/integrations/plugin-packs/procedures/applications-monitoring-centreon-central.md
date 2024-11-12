---
id: applications-monitoring-centreon-central
title: Centreon Central
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

The Centreon Central Monitoring Connector will help you set up monitoring for your Centreon Central server.

> The best practice is to have the central server monitored by a poller if you have one. If not, you will need to add the `--hostname=''` option to the host's `EXTRAOPTIONS` macro to avoid host key verification issues.

### Templates

The Monitoring Connector **Centreon Central** brings a host template:

* **App-Monitoring-Centreon-Central-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Centreon-Central-custom" label="App-Monitoring-Centreon-Central-custom">

| Service Alias   | Service Template                                    | Service Description                        |
|:----------------|:----------------------------------------------------|:-------------------------------------------|
| Broker-Stats    | App-Monitoring-Centreon-Broker-Stats-Central-custom | Check Centreon Broker processes statistics |
| proc-broker-rrd | App-Monitoring-Centreon-Process-broker-rrd-custom   | Check Broker RRD process                   |
| proc-broker-sql | App-Monitoring-Centreon-Process-broker-sql-custom   | Check Broker SQL process                   |
| proc-centengine | App-Monitoring-Centreon-Process-centengine-custom   | Check centreon-engine process              |
| proc-crond      | App-Monitoring-Centreon-Process-crond-custom        | Check crond process                        |
| proc-gorgoned   | App-Monitoring-Centreon-Process-gorgoned-custom     | Check centcore process                     |
| proc-httpd      | App-Monitoring-Centreon-Process-httpd-custom        | Check Apache process                       |
| proc-ntpd       | App-Monitoring-Centreon-Process-ntpd-custom         | Check NTP process                          |
| proc-sshd       | App-Monitoring-Centreon-Process-sshd-custom         | Check sshd process                         |

> The services listed above are created automatically when the **App-Monitoring-Centreon-Central-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias      | Service Template                                     | Service Description         |
|:-------------------|:-----------------------------------------------------|:----------------------------|
| proc-centcore      | App-Monitoring-Centreon-Process-centcore-custom      | Check centcore process      |
| proc-centreontrapd | App-Monitoring-Centreon-Process-centreontrapd-custom | Check centreontrapd process |
| proc-snmptrapd     | App-Monitoring-Centreon-Process-snmptrapd-custom     | Check snmptrapd process     |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Broker-Stats" label="Broker-Stats">

| Metric name                      | Unit     |
|:---------------------------------|:---------|
| *endpoint*#status                | string      |
| *endpoint*#speed-events          | events/s |
| *endpoint*#queued-events         | events   |
| *endpoint*#unacknowledged-events | events   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="proc-broker-rrd" label="proc-broker-rrd">

| Metric name | Unit  |
|:------------|:------|
| nbproc      | count   |
| mem_total   | B     |
| mem_avg     | B     |
| cpu_total   | %     |

</TabItem>
<TabItem value="proc-broker-sql" label="proc-broker-sql">

| Metric name | Unit  |
|:------------|:------|
| nbproc      | count   |
| mem_total   | B     |
| mem_avg     | B     |
| cpu_total   | %     |

</TabItem>
<TabItem value="proc-centcore" label="proc-centcore">

| Metric name | Unit  |
|:------------|:------|
| nbproc      | count   |
| mem_total   | B     |
| mem_avg     | B     |
| cpu_total   | %     |

</TabItem>
<TabItem value="proc-centengine" label="proc-centengine">

| Metric name | Unit  |
|:------------|:------|
| nbproc      | count   |
| mem_total   | B     |
| mem_avg     | B     |
| cpu_total   | %     |

</TabItem>
<TabItem value="proc-centreontrapd" label="proc-centreontrapd">

| Metric name | Unit  |
|:------------|:------|
| nbproc      | count   |
| mem_total   | B     |
| mem_avg     | B     |
| cpu_total   | %     |

</TabItem>
<TabItem value="proc-crond" label="proc-crond">

| Metric name | Unit  |
|:------------|:------|
| nbproc      | count   |
| mem_total   | B     |
| mem_avg     | B     |
| cpu_total   | %     |

</TabItem>
<TabItem value="proc-gorgoned" label="proc-gorgoned">

| Metric name | Unit  |
|:------------|:------|
| nbproc      | count   |
| mem_total   | B     |
| mem_avg     | B     |
| cpu_total   | %     |

</TabItem>
<TabItem value="proc-httpd" label="proc-httpd">

| Metric name | Unit  |
|:------------|:------|
| nbproc      | count   |
| mem_total   | B     |
| mem_avg     | B     |
| cpu_total   | %     |

</TabItem>
<TabItem value="proc-ntpd" label="proc-ntpd">

| Metric name | Unit  |
|:------------|:------|
| nbproc      | count   |
| mem_total   | B     |
| mem_avg     | B     |
| cpu_total   | %     |

</TabItem>
<TabItem value="proc-snmptrapd" label="proc-snmptrapd">

| Metric name | Unit  |
|:------------|:------|
| nbproc      | count   |
| mem_total   | B     |
| mem_avg     | B     |
| cpu_total   | %     |

</TabItem>
<TabItem value="proc-sshd" label="proc-sshd">

| Metric name | Unit  |
|:------------|:------|
| nbproc      | count   |
| mem_total   | B     |
| mem_avg     | B     |
| cpu_total   | %     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP

SNMP must be configured on each poller being monitored. You can refer to this [documentation](operatingsystems-linux-snmp.md#prerequisites) describing how to set up a quick SNMP configuration.

### SSH key exchange

The checks related to the **Broker-Stats** service should be done from a poller and are done through SSH. 
If you only have a central server, then checks will be initiated and performed on and by the central server itself. 
You can skip the steps below for SSH key exchange if the central server monitors itself.

> NB : It is strongly recommended to monitor the central from an external poller rather than from the central itself.

Open a `root` command-line session on:

* the poller that will monitor the central
* the central

Then switch to `centreon-engine`'s bash environment on both:

```
su - centreon-engine
```

Then run these commands:

```bash
ssh-keygen -t ed25519 -a 100
```

We have generated a pair of keys on each server, and created the `~/.ssh` directory. 

Run this command on the poller to display the user's public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

Once done, copy the content of the public key file displayed by `cat` and paste it to `~/.ssh/authorized_keys` (must be created) on the central and apply the correct file permissions (still as the `centreon-engine` user):

```
chmod 600 ~/.ssh/authorized_keys
```

Initiate a first connection from the poller to the central (still as the `centreon-engine` user):

```
ssh <central-ip-address>
```

Then exit the `centreon-engine` session typing `exit` or `Ctrl-D`.

The `centreon-engine` user is now able to log in via SSH to central.

### Self-monitored central server

If your central server is monitoring itself, you will need to add the `--hostname=''` option to the host's `EXTRAOPTIONS` macro to avoid host key verification issues. (It is however best practice that a central server is monitored by a poller.)

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-monitoring-centreon-central
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-centreon-central
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-monitoring-centreon-central
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-centreon-central
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Centreon Central** connector through
the **Configuration > Monitoring Connectors Manager** menu.

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
dnf install centreon-plugin-Applications-Monitoring-Centreon-Central
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Monitoring-Centreon-Central
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-monitoring-centreon-central
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-Central
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Monitoring-Centreon-Central-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro            | Description                                                                                           | Default value                                             | Mandatory   |
|:-----------------|:------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|:-----------:|
| MODULESTATSFILE  | Specify the centreon-broker json stats file (Required). Can be multiple                               | /var/lib/centreon-engine/central-module-master-stats.json | X           |
| RRDSTATSFILE     | Specify the centreon-broker json stats file (Required). Can be multiple                               | /var/lib/centreon-broker/central-rrd-master-stats.json    | X           |
| SQLSTATSFILE     | Specify the centreon-broker json stats file (Required). Can be multiple                               | /var/lib/centreon-broker/central-broker-master-stats.json | X           |
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (e.g. a --verbose flag). All options are listed [here](#available-options) |                                                           |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Broker-Stats" label="Broker-Stats">

| Macro                        | Description                                                                                                                                                                                                                                 | Default value                                                   | Mandatory   |
|:-----------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------|:-----------:|
| FILTERNAME                   | Filter endpoint name                                                                                                                                                                                                                        |                                                                 |             |
| WARNINGQUEUEDEVENTS          | Thresholds                                                                                                                                                                                                                                  |                                                                 |             |
| CRITICALQUEUEDEVENTS         | Thresholds                                                                                                                                                                                                                                  |                                                                 |             |
| WARNINGSPEEDEVENTS           | Thresholds                                                                                                                                                                                                                                  |                                                                 |             |
| CRITICALSPEEDEVENTS          | Thresholds                                                                                                                                                                                                                                  |                                                                 |             |
| CRITICALSTATUS               | Define the conditions to match for the status to be CRITICAL (Default: '%{type} eq "output" and %{queue\_file\_enabled} =~ /yes/i'). You can use the following variables: %{queue\_file\_enabled}, %{state}, %{status}, %{type}, %{display} | %{type} eq "output" and %{queue\_file\_enabled} =~ /true\|yes/i |             |
| WARNINGSTATUS                | Define the conditions to match for the status to be WARNING. You can use the following variables: %{queue\_file\_enabled}, %{state}, %{status}, %{type}, %{display}                                                                         |                                                                 |             |
| WARNINGUNACKNOWLEDGEDEVENTS  | Thresholds                                                                                                                                                                                                                                  |                                                                 |             |
| CRITICALUNACKNOWLEDGEDEVENTS | Thresholds                                                                                                                                                                                                                                  |                                                                 |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                                         | --verbose                                                       |             |

</TabItem>
<TabItem value="proc-broker-rrd" label="proc-broker-rrd">

| Macro        | Description                                                                                         | Default value                                   | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------------------------------------|:-----------:|
| PROCESSNAME  | Filter process name                                                                                 | cbd                                             |             |
| PROCESSARGS  | Filter process arguments                                                                            | '/etc/centreon-broker/central-rrd(.xml\|.json)' |             |
| PROCESSPATH  | Filter process path                                                                                 |                                                 |             |
| CRITICAL     | Critical threshold of matching processes count                                                      | 1:1                                             |             |
| WARNING      | Warning threshold of matching processes count                                                       |                                                 |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --cpu --memory                                  |             |

</TabItem>
<TabItem value="proc-broker-sql" label="proc-broker-sql">

| Macro        | Description                                                                                         | Default value                                      | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:---------------------------------------------------|:-----------:|
| PROCESSNAME  | Filter process name                                                                                 | cbd                                                |             |
| PROCESSARGS  | Filter process arguments                                                                            | '/etc/centreon-broker/central-broker(.xml\|.json)' |             |
| PROCESSPATH  | Filter process path                                                                                 |                                                    |             |
| CRITICAL     | Critical threshold of matching processes count                                                      | 1:1                                                |             |
| WARNING      | Warning threshold of matching processes count                                                       |                                                    |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --cpu --memory                                     |             |

</TabItem>
<TabItem value="proc-centcore" label="proc-centcore">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROCESSNAME  | Filter process name                                                                                 | centcore          |             |
| PROCESSPATH  | Filter process path                                                                                 |                   |             |
| PROCESSARGS  | Filter process arguments                                                                            |                   |             |
| CRITICAL     | Critical threshold of matching processes count                                                      | 1:1               |             |
| WARNING      | Warning threshold of matching processes count                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="proc-centengine" label="proc-centengine">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROCESSNAME  | Filter process name                                                                                 | centengine        |             |
| PROCESSPATH  | Filter process path                                                                                 | /usr/sbin/        |             |
| PROCESSARGS  | Filter process arguments                                                                            |                   |             |
| CRITICAL     | Critical threshold of matching processes count                                                      | 1:1               |             |
| WARNING      | Warning threshold of matching processes count                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="proc-centreontrapd" label="proc-centreontrapd">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROCESSNAME  | Filter process name                                                                                 | centreontrapd     |             |
| PROCESSPATH  | Filter process path                                                                                 |                   |             |
| PROCESSARGS  | Filter process arguments                                                                            |                   |             |
| CRITICAL     | Critical threshold of matching processes count                                                      | 1:1               |             |
| WARNING      | Warning threshold of matching processes count                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="proc-crond" label="proc-crond">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROCESSNAME  | Filter process name                                                                                 | crond\|cron       |             |
| PROCESSPATH  | Filter process path                                                                                 |                   |             |
| PROCESSARGS  | Filter process arguments                                                                            |                   |             |
| WARNING      | Warning threshold of matching processes count                                                       |                   |             |
| CRITICAL     | Critical threshold of matching processes count                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="proc-gorgoned" label="proc-gorgoned">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROCESSNAME  | Filter process name                                                                                 | perl              |             |
| PROCESSARGS  | Filter process arguments                                                                            | /usr/bin/gorgoned |             |
| PROCESSPATH  | Filter process path                                                                                 |                   |             |
| CRITICAL     | Critical threshold of matching processes count                                                      | 1:1               |             |
| WARNING      | Warning threshold of matching processes count                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) | --cpu --memory    |             |

</TabItem>
<TabItem value="proc-httpd" label="proc-httpd">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROCESSNAME  | Filter process name                                                                                 | httpd\|apache2    |             |
| PROCESSPATH  | Filter process path                                                                                 |                   |             |
| PROCESSARGS  | Filter process arguments                                                                            |                   |             |
| WARNING      | Warning threshold of matching processes count                                                       |                   |             |
| CRITICAL     | Critical threshold of matching processes count                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="proc-ntpd" label="proc-ntpd">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROCESSNAME  | Filter process name                                                                                 | ntpd\|chronyd     |             |
| PROCESSPATH  | Filter process path                                                                                 |                   |             |
| PROCESSARGS  | Filter process arguments                                                                            |                   |             |
| CRITICAL     | Critical threshold of matching processes count                                                      | 1:1               |             |
| WARNING      | Warning threshold of matching processes count                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="proc-snmptrapd" label="proc-snmptrapd">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROCESSNAME  | Filter process name                                                                                 | snmptrapd         |             |
| PROCESSPATH  | Filter process path                                                                                 |                   |             |
| PROCESSARGS  | Filter process arguments                                                                            |                   |             |
| CRITICAL     | Critical threshold of matching processes count                                                      | 1:1               |             |
| WARNING      | Warning threshold of matching processes count                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="proc-sshd" label="proc-sshd">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROCESSNAME  | Filter process name                                                                                 | sshd              |             |
| PROCESSPATH  | Filter process path                                                                                 |                   |             |
| PROCESSARGS  | Filter process arguments                                                                            |                   |             |
| WARNING      | Warning threshold of matching processes count                                                       |                   |             |
| CRITICAL     | Critical threshold of matching processes count                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

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
	--process-name='cbd' \
	--process-path='' \
	--process-args=''/etc/centreon-broker/central-rrd(.xml|.json)'' \
	--regexp-name \
	--regexp-path \
	--regexp-args \
	--warning='' \
	--critical='1:1' \
	--cpu \
	--memory
```

The expected command output is shown below:

```bash
OK: Number of current processes running: 1 | 'nbproc'=1;;;0;

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

| Mode                                                                                                                                                | Linked service template                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| arp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/arp.pm)]                                               | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| bamservice [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/bamservice.pm)]                           | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| broker-stats [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/brokerstats.pm)]                        | App-Monitoring-Centreon-Broker-Stats-Central-custom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| centengine-stats [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/centenginestats.pm)]                | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| centreon-plugins-version [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/centreonpluginsversion.pm)] | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpu.pm)]                                               | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpudetailed.pm)]                              | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| disk-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/diskusage.pm)]                                  | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/diskio.pm)]                                         | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| downtime-trap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/downtimetrap.pm)]                      | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| dummy [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/dummy.pm)]                                     | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| inodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/inodes.pm)]                                         | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/interfaces.pm)]                                 | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| list-diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listdiskio.pm)]                                | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| list-diskspath [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listdiskspath.pm)]                          | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]                        | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| list-processes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listprocesses.pm)]                          | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/liststorages.pm)]                            | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/loadaverage.pm)]                                      | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/memory.pm)]                                         | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| metaservice [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/metaservice.pm)]                         | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| not-so-dummy [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/notsodummy.pm)]                         | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| processcount [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/processcount.pm)]                             | App-Monitoring-Centreon-Process-broker-rrd-custom<br />App-Monitoring-Centreon-Process-broker-sql-custom<br />App-Monitoring-Centreon-Process-centcore-custom<br />App-Monitoring-Centreon-Process-centengine-custom<br />App-Monitoring-Centreon-Process-centreontrapd-custom<br />App-Monitoring-Centreon-Process-crond-custom<br />App-Monitoring-Centreon-Process-gorgoned-custom<br />App-Monitoring-Centreon-Process-httpd-custom<br />App-Monitoring-Centreon-Process-ntpd-custom<br />App-Monitoring-Centreon-Process-snmptrapd-custom<br />App-Monitoring-Centreon-Process-sshd-custom |
| retention-broker [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/retentionbroker.pm)]                | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/storage.pm)]                                       | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/swap.pm)]                                             | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| tcpcon [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/tcpcon.pm)]                                         | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/ntp.pm)]                                              | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| udpcon [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/udpcon.pm)]                                         | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/uptime.pm)]                                         | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Broker-Stats" label="Broker-Stats">

| Option                   | Description                                                                                                                                                                                                                                    |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --ssh-backend            | Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                             |
| --ssh-username           | Define the user name to log in to the host.                                                                                                                                                                                                    |
| --ssh-password           | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                           |
| --ssh-port               | Define the TCP port on which SSH is listening.                                                                                                                                                                                                 |
| --ssh-priv-key           | Define the private key file to use for user authentication.                                                                                                                                                                                    |
| --sshcli-command         | ssh command (default: 'ssh').                                                                                                                                                                                                                  |
| --sshcli-path            | ssh command path (default: none)                                                                                                                                                                                                               |
| --sshcli-option          | Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                                                                                                                                              |
| --plink-command          | plink command (default: 'plink').                                                                                                                                                                                                              |
| --plink-path             | plink command path (default: none)                                                                                                                                                                                                             |
| --plink-option           | Specify plink options (example: --plink-option='-T').                                                                                                                                                                                          |
| --libssh-strict-connect  | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                                                                                            |
| --hostname               | Hostname to query in ssh.                                                                                                                                                                                                                      |
| --timeout                | Timeout in seconds for the command (Default: 30).                                                                                                                                                                                              |
| --sudo                   | Use 'sudo' to execute the command.                                                                                                                                                                                                             |
| --broker-stats-file      | Specify the centreon-broker json stats file (Required). Can be multiple.                                                                                                                                                                       |
| --filter-name            | Filter endpoint name.                                                                                                                                                                                                                          |
| --warning-* --critical-* | Thresholds. Can be: 'speed-events', 'queued-events', 'unacknowledged-events'.                                                                                                                                                                  |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{queue\_file\_enabled}, %{state}, %{status}, %{type}, %{display}                                                                            |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%{type} eq "output" and %{queue\_file\_enabled} =~ /yes/i'). You can use the following variables: %{queue\_file\_enabled}, %{state}, %{status}, %{type}, %{display}    |

</TabItem>
<TabItem value="proc-broker-rrd" label="proc-broker-rrd">

| Option                    | Description                                                                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                | Name or address of the host to monitor (mandatory).                                                                                                                                                                                           |
| --snmp-community          | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                       |
| --snmp-version            | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                         |
| --snmp-port               | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                          |
| --snmp-timeout            | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                |
| --snmp-retries            | Maximum number of retries (default: 5).                                                                                                                                                                                                       |
| --maxrepetitions          | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                |
| --subsetleef              | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                      |
| --snmp-autoreduce         | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                       |
| --snmp-force-getnext      | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                            |
| --snmp-cache-file         | Use SNMP cache file.                                                                                                                                                                                                                          |
| --snmp-username           | SNMP v3 only: User name (securityName).                                                                                                                                                                                                       |
| --authpassphrase          | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                      |
| --authprotocol            | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                        |
| --privpassphrase          | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                 |
| --privprotocol            | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                         |
| --contextname             | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                 |
| --contextengineid         | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                         |
| --securityengineid        | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                              |
| --snmp-errors-exit        | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                |
| --snmp-tls-transport      | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                       |
| --snmp-tls-our-identity   | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                             |
| --snmp-tls-their-identity | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                      |
| --snmp-tls-their-hostname | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                       |
| --snmp-tls-trust-cert     | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                  |
| --memcached               | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file           | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration           | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir           | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix        | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd    | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format        | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key           | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher        | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --process-status          | Filter process status. Can be a regexp. (Default: 'running\|runnable').                                                                                                                                                                       |
| --process-name            | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name             | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path            | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path             | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args            | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args             | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning                 | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical                | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory                  | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each        | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each       | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total       | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total      | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg         | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg        | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                     | Check cpu usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total       | Warning threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total      | Critical threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                     | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num                 | Number of processes in top memory display (Default: 5).                                                                                                                                                                                       |
| --top-size                | Minimum memory usage to be in top memory display (Default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
<TabItem value="proc-broker-sql" label="proc-broker-sql">

| Option                    | Description                                                                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                | Name or address of the host to monitor (mandatory).                                                                                                                                                                                           |
| --snmp-community          | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                       |
| --snmp-version            | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                         |
| --snmp-port               | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                          |
| --snmp-timeout            | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                |
| --snmp-retries            | Maximum number of retries (default: 5).                                                                                                                                                                                                       |
| --maxrepetitions          | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                |
| --subsetleef              | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                      |
| --snmp-autoreduce         | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                       |
| --snmp-force-getnext      | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                            |
| --snmp-cache-file         | Use SNMP cache file.                                                                                                                                                                                                                          |
| --snmp-username           | SNMP v3 only: User name (securityName).                                                                                                                                                                                                       |
| --authpassphrase          | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                      |
| --authprotocol            | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                        |
| --privpassphrase          | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                 |
| --privprotocol            | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                         |
| --contextname             | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                 |
| --contextengineid         | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                         |
| --securityengineid        | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                              |
| --snmp-errors-exit        | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                |
| --snmp-tls-transport      | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                       |
| --snmp-tls-our-identity   | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                             |
| --snmp-tls-their-identity | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                      |
| --snmp-tls-their-hostname | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                       |
| --snmp-tls-trust-cert     | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                  |
| --memcached               | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file           | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration           | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir           | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix        | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd    | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format        | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key           | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher        | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --process-status          | Filter process status. Can be a regexp. (Default: 'running\|runnable').                                                                                                                                                                       |
| --process-name            | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name             | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path            | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path             | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args            | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args             | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning                 | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical                | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory                  | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each        | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each       | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total       | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total      | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg         | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg        | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                     | Check cpu usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total       | Warning threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total      | Critical threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                     | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num                 | Number of processes in top memory display (Default: 5).                                                                                                                                                                                       |
| --top-size                | Minimum memory usage to be in top memory display (Default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
<TabItem value="proc-centcore" label="proc-centcore">

| Option                    | Description                                                                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                | Name or address of the host to monitor (mandatory).                                                                                                                                                                                           |
| --snmp-community          | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                       |
| --snmp-version            | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                         |
| --snmp-port               | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                          |
| --snmp-timeout            | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                |
| --snmp-retries            | Maximum number of retries (default: 5).                                                                                                                                                                                                       |
| --maxrepetitions          | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                |
| --subsetleef              | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                      |
| --snmp-autoreduce         | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                       |
| --snmp-force-getnext      | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                            |
| --snmp-cache-file         | Use SNMP cache file.                                                                                                                                                                                                                          |
| --snmp-username           | SNMP v3 only: User name (securityName).                                                                                                                                                                                                       |
| --authpassphrase          | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                      |
| --authprotocol            | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                        |
| --privpassphrase          | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                 |
| --privprotocol            | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                         |
| --contextname             | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                 |
| --contextengineid         | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                         |
| --securityengineid        | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                              |
| --snmp-errors-exit        | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                |
| --snmp-tls-transport      | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                       |
| --snmp-tls-our-identity   | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                             |
| --snmp-tls-their-identity | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                      |
| --snmp-tls-their-hostname | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                       |
| --snmp-tls-trust-cert     | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                  |
| --memcached               | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file           | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration           | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir           | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix        | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd    | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format        | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key           | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher        | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --process-status          | Filter process status. Can be a regexp. (Default: 'running\|runnable').                                                                                                                                                                       |
| --process-name            | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name             | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path            | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path             | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args            | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args             | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning                 | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical                | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory                  | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each        | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each       | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total       | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total      | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg         | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg        | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                     | Check cpu usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total       | Warning threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total      | Critical threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                     | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num                 | Number of processes in top memory display (Default: 5).                                                                                                                                                                                       |
| --top-size                | Minimum memory usage to be in top memory display (Default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
<TabItem value="proc-centengine" label="proc-centengine">

| Option                    | Description                                                                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                | Name or address of the host to monitor (mandatory).                                                                                                                                                                                           |
| --snmp-community          | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                       |
| --snmp-version            | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                         |
| --snmp-port               | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                          |
| --snmp-timeout            | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                |
| --snmp-retries            | Maximum number of retries (default: 5).                                                                                                                                                                                                       |
| --maxrepetitions          | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                |
| --subsetleef              | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                      |
| --snmp-autoreduce         | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                       |
| --snmp-force-getnext      | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                            |
| --snmp-cache-file         | Use SNMP cache file.                                                                                                                                                                                                                          |
| --snmp-username           | SNMP v3 only: User name (securityName).                                                                                                                                                                                                       |
| --authpassphrase          | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                      |
| --authprotocol            | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                        |
| --privpassphrase          | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                 |
| --privprotocol            | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                         |
| --contextname             | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                 |
| --contextengineid         | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                         |
| --securityengineid        | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                              |
| --snmp-errors-exit        | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                |
| --snmp-tls-transport      | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                       |
| --snmp-tls-our-identity   | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                             |
| --snmp-tls-their-identity | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                      |
| --snmp-tls-their-hostname | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                       |
| --snmp-tls-trust-cert     | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                  |
| --memcached               | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file           | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration           | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir           | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix        | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd    | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format        | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key           | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher        | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --process-status          | Filter process status. Can be a regexp. (Default: 'running\|runnable').                                                                                                                                                                       |
| --process-name            | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name             | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path            | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path             | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args            | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args             | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning                 | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical                | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory                  | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each        | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each       | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total       | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total      | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg         | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg        | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                     | Check cpu usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total       | Warning threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total      | Critical threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                     | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num                 | Number of processes in top memory display (Default: 5).                                                                                                                                                                                       |
| --top-size                | Minimum memory usage to be in top memory display (Default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
<TabItem value="proc-centreontrapd" label="proc-centreontrapd">

| Option                    | Description                                                                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                | Name or address of the host to monitor (mandatory).                                                                                                                                                                                           |
| --snmp-community          | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                       |
| --snmp-version            | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                         |
| --snmp-port               | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                          |
| --snmp-timeout            | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                |
| --snmp-retries            | Maximum number of retries (default: 5).                                                                                                                                                                                                       |
| --maxrepetitions          | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                |
| --subsetleef              | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                      |
| --snmp-autoreduce         | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                       |
| --snmp-force-getnext      | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                            |
| --snmp-cache-file         | Use SNMP cache file.                                                                                                                                                                                                                          |
| --snmp-username           | SNMP v3 only: User name (securityName).                                                                                                                                                                                                       |
| --authpassphrase          | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                      |
| --authprotocol            | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                        |
| --privpassphrase          | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                 |
| --privprotocol            | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                         |
| --contextname             | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                 |
| --contextengineid         | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                         |
| --securityengineid        | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                              |
| --snmp-errors-exit        | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                |
| --snmp-tls-transport      | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                       |
| --snmp-tls-our-identity   | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                             |
| --snmp-tls-their-identity | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                      |
| --snmp-tls-their-hostname | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                       |
| --snmp-tls-trust-cert     | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                  |
| --memcached               | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file           | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration           | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir           | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix        | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd    | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format        | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key           | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher        | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --process-status          | Filter process status. Can be a regexp. (Default: 'running\|runnable').                                                                                                                                                                       |
| --process-name            | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name             | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path            | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path             | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args            | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args             | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning                 | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical                | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory                  | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each        | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each       | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total       | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total      | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg         | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg        | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                     | Check cpu usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total       | Warning threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total      | Critical threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                     | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num                 | Number of processes in top memory display (Default: 5).                                                                                                                                                                                       |
| --top-size                | Minimum memory usage to be in top memory display (Default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
<TabItem value="proc-crond" label="proc-crond">

| Option                    | Description                                                                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                | Name or address of the host to monitor (mandatory).                                                                                                                                                                                           |
| --snmp-community          | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                       |
| --snmp-version            | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                         |
| --snmp-port               | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                          |
| --snmp-timeout            | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                |
| --snmp-retries            | Maximum number of retries (default: 5).                                                                                                                                                                                                       |
| --maxrepetitions          | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                |
| --subsetleef              | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                      |
| --snmp-autoreduce         | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                       |
| --snmp-force-getnext      | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                            |
| --snmp-cache-file         | Use SNMP cache file.                                                                                                                                                                                                                          |
| --snmp-username           | SNMP v3 only: User name (securityName).                                                                                                                                                                                                       |
| --authpassphrase          | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                      |
| --authprotocol            | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                        |
| --privpassphrase          | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                 |
| --privprotocol            | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                         |
| --contextname             | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                 |
| --contextengineid         | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                         |
| --securityengineid        | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                              |
| --snmp-errors-exit        | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                |
| --snmp-tls-transport      | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                       |
| --snmp-tls-our-identity   | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                             |
| --snmp-tls-their-identity | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                      |
| --snmp-tls-their-hostname | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                       |
| --snmp-tls-trust-cert     | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                  |
| --memcached               | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file           | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration           | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir           | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix        | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd    | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format        | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key           | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher        | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --process-status          | Filter process status. Can be a regexp. (Default: 'running\|runnable').                                                                                                                                                                       |
| --process-name            | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name             | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path            | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path             | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args            | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args             | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning                 | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical                | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory                  | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each        | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each       | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total       | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total      | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg         | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg        | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                     | Check cpu usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total       | Warning threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total      | Critical threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                     | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num                 | Number of processes in top memory display (Default: 5).                                                                                                                                                                                       |
| --top-size                | Minimum memory usage to be in top memory display (Default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
<TabItem value="proc-gorgoned" label="proc-gorgoned">

| Option                    | Description                                                                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                | Name or address of the host to monitor (mandatory).                                                                                                                                                                                           |
| --snmp-community          | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                       |
| --snmp-version            | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                         |
| --snmp-port               | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                          |
| --snmp-timeout            | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                |
| --snmp-retries            | Maximum number of retries (default: 5).                                                                                                                                                                                                       |
| --maxrepetitions          | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                |
| --subsetleef              | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                      |
| --snmp-autoreduce         | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                       |
| --snmp-force-getnext      | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                            |
| --snmp-cache-file         | Use SNMP cache file.                                                                                                                                                                                                                          |
| --snmp-username           | SNMP v3 only: User name (securityName).                                                                                                                                                                                                       |
| --authpassphrase          | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                      |
| --authprotocol            | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                        |
| --privpassphrase          | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                 |
| --privprotocol            | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                         |
| --contextname             | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                 |
| --contextengineid         | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                         |
| --securityengineid        | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                              |
| --snmp-errors-exit        | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                |
| --snmp-tls-transport      | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                       |
| --snmp-tls-our-identity   | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                             |
| --snmp-tls-their-identity | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                      |
| --snmp-tls-their-hostname | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                       |
| --snmp-tls-trust-cert     | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                  |
| --memcached               | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file           | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration           | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir           | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix        | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd    | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format        | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key           | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher        | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --process-status          | Filter process status. Can be a regexp. (Default: 'running\|runnable').                                                                                                                                                                       |
| --process-name            | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name             | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path            | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path             | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args            | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args             | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning                 | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical                | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory                  | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each        | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each       | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total       | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total      | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg         | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg        | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                     | Check cpu usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total       | Warning threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total      | Critical threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                     | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num                 | Number of processes in top memory display (Default: 5).                                                                                                                                                                                       |
| --top-size                | Minimum memory usage to be in top memory display (Default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
<TabItem value="proc-httpd" label="proc-httpd">

| Option                    | Description                                                                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                | Name or address of the host to monitor (mandatory).                                                                                                                                                                                           |
| --snmp-community          | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                       |
| --snmp-version            | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                         |
| --snmp-port               | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                          |
| --snmp-timeout            | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                |
| --snmp-retries            | Maximum number of retries (default: 5).                                                                                                                                                                                                       |
| --maxrepetitions          | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                |
| --subsetleef              | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                      |
| --snmp-autoreduce         | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                       |
| --snmp-force-getnext      | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                            |
| --snmp-cache-file         | Use SNMP cache file.                                                                                                                                                                                                                          |
| --snmp-username           | SNMP v3 only: User name (securityName).                                                                                                                                                                                                       |
| --authpassphrase          | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                      |
| --authprotocol            | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                        |
| --privpassphrase          | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                 |
| --privprotocol            | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                         |
| --contextname             | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                 |
| --contextengineid         | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                         |
| --securityengineid        | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                              |
| --snmp-errors-exit        | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                |
| --snmp-tls-transport      | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                       |
| --snmp-tls-our-identity   | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                             |
| --snmp-tls-their-identity | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                      |
| --snmp-tls-their-hostname | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                       |
| --snmp-tls-trust-cert     | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                  |
| --memcached               | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file           | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration           | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir           | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix        | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd    | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format        | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key           | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher        | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --process-status          | Filter process status. Can be a regexp. (Default: 'running\|runnable').                                                                                                                                                                       |
| --process-name            | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name             | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path            | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path             | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args            | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args             | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning                 | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical                | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory                  | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each        | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each       | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total       | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total      | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg         | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg        | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                     | Check cpu usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total       | Warning threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total      | Critical threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                     | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num                 | Number of processes in top memory display (Default: 5).                                                                                                                                                                                       |
| --top-size                | Minimum memory usage to be in top memory display (Default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
<TabItem value="proc-ntpd" label="proc-ntpd">

| Option                    | Description                                                                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                | Name or address of the host to monitor (mandatory).                                                                                                                                                                                           |
| --snmp-community          | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                       |
| --snmp-version            | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                         |
| --snmp-port               | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                          |
| --snmp-timeout            | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                |
| --snmp-retries            | Maximum number of retries (default: 5).                                                                                                                                                                                                       |
| --maxrepetitions          | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                |
| --subsetleef              | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                      |
| --snmp-autoreduce         | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                       |
| --snmp-force-getnext      | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                            |
| --snmp-cache-file         | Use SNMP cache file.                                                                                                                                                                                                                          |
| --snmp-username           | SNMP v3 only: User name (securityName).                                                                                                                                                                                                       |
| --authpassphrase          | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                      |
| --authprotocol            | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                        |
| --privpassphrase          | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                 |
| --privprotocol            | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                         |
| --contextname             | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                 |
| --contextengineid         | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                         |
| --securityengineid        | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                              |
| --snmp-errors-exit        | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                |
| --snmp-tls-transport      | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                       |
| --snmp-tls-our-identity   | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                             |
| --snmp-tls-their-identity | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                      |
| --snmp-tls-their-hostname | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                       |
| --snmp-tls-trust-cert     | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                  |
| --memcached               | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file           | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration           | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir           | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix        | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd    | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format        | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key           | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher        | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --process-status          | Filter process status. Can be a regexp. (Default: 'running\|runnable').                                                                                                                                                                       |
| --process-name            | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name             | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path            | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path             | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args            | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args             | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning                 | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical                | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory                  | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each        | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each       | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total       | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total      | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg         | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg        | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                     | Check cpu usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total       | Warning threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total      | Critical threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                     | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num                 | Number of processes in top memory display (Default: 5).                                                                                                                                                                                       |
| --top-size                | Minimum memory usage to be in top memory display (Default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
<TabItem value="proc-snmptrapd" label="proc-snmptrapd">

| Option                    | Description                                                                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                | Name or address of the host to monitor (mandatory).                                                                                                                                                                                           |
| --snmp-community          | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                       |
| --snmp-version            | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                         |
| --snmp-port               | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                          |
| --snmp-timeout            | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                |
| --snmp-retries            | Maximum number of retries (default: 5).                                                                                                                                                                                                       |
| --maxrepetitions          | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                |
| --subsetleef              | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                      |
| --snmp-autoreduce         | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                       |
| --snmp-force-getnext      | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                            |
| --snmp-cache-file         | Use SNMP cache file.                                                                                                                                                                                                                          |
| --snmp-username           | SNMP v3 only: User name (securityName).                                                                                                                                                                                                       |
| --authpassphrase          | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                      |
| --authprotocol            | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                        |
| --privpassphrase          | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                 |
| --privprotocol            | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                         |
| --contextname             | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                 |
| --contextengineid         | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                         |
| --securityengineid        | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                              |
| --snmp-errors-exit        | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                |
| --snmp-tls-transport      | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                       |
| --snmp-tls-our-identity   | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                             |
| --snmp-tls-their-identity | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                      |
| --snmp-tls-their-hostname | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                       |
| --snmp-tls-trust-cert     | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                  |
| --memcached               | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file           | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration           | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir           | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix        | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd    | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format        | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key           | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher        | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --process-status          | Filter process status. Can be a regexp. (Default: 'running\|runnable').                                                                                                                                                                       |
| --process-name            | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name             | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path            | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path             | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args            | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args             | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning                 | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical                | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory                  | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each        | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each       | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total       | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total      | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg         | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg        | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                     | Check cpu usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total       | Warning threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total      | Critical threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                     | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num                 | Number of processes in top memory display (Default: 5).                                                                                                                                                                                       |
| --top-size                | Minimum memory usage to be in top memory display (Default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
<TabItem value="proc-sshd" label="proc-sshd">

| Option                    | Description                                                                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                | Name or address of the host to monitor (mandatory).                                                                                                                                                                                           |
| --snmp-community          | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                       |
| --snmp-version            | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                         |
| --snmp-port               | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                          |
| --snmp-timeout            | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                |
| --snmp-retries            | Maximum number of retries (default: 5).                                                                                                                                                                                                       |
| --maxrepetitions          | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                |
| --subsetleef              | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                      |
| --snmp-autoreduce         | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                       |
| --snmp-force-getnext      | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                            |
| --snmp-cache-file         | Use SNMP cache file.                                                                                                                                                                                                                          |
| --snmp-username           | SNMP v3 only: User name (securityName).                                                                                                                                                                                                       |
| --authpassphrase          | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                      |
| --authprotocol            | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                        |
| --privpassphrase          | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                 |
| --privprotocol            | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                         |
| --contextname             | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                 |
| --contextengineid         | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                         |
| --securityengineid        | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                              |
| --snmp-errors-exit        | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                |
| --snmp-tls-transport      | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                       |
| --snmp-tls-our-identity   | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                             |
| --snmp-tls-their-identity | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                      |
| --snmp-tls-their-hostname | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                       |
| --snmp-tls-trust-cert     | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                  |
| --memcached               | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file           | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration           | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir           | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix        | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd    | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format        | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key           | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher        | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --process-status          | Filter process status. Can be a regexp. (Default: 'running\|runnable').                                                                                                                                                                       |
| --process-name            | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name             | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path            | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path             | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args            | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args             | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning                 | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical                | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory                  | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each        | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each       | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total       | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total      | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg         | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg        | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                     | Check cpu usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total       | Warning threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total      | Critical threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                     | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num                 | Number of processes in top memory display (Default: 5).                                                                                                                                                                                       |
| --top-size                | Minimum memory usage to be in top memory display (Default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_linux_snmp.pl \
	--plugin=os::linux::snmp::plugin \
	--mode=processcount \
	--help
```

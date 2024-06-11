---
id: applications-bluemind-ssh
title: BlueMind SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

BlueMind is a complete unified enterprise messaging and communication solution.

## Pack assets

### Templates

The Monitoring Connector **BlueMind SSH** brings a host template:

* **App-Bluemind-SSH-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Bluemind-SSH-custom" label="App-Bluemind-SSH-custom">

| Service Alias | Service Template                  | Service Description             |
|:--------------|:----------------------------------|:--------------------------------|
| Core          | App-Bluemind-Core-SSH-custom      | Check main BlueMind engine      |
| Eas           | App-Bluemind-Eas-SSH-custom       | Check mobile connection service |
| Hps           | App-Bluemind-Hps-SSH-custom       | Check authentication service    |
| Ips           | App-Bluemind-Ips-SSH-custom       | Check IMAP operations tracking  |
| Lmtpd         | App-Bluemind-Lmtpd-SSH-custom     | Check email delivery service    |
| Milter        | App-Bluemind-Milter-SSH-custom    | Check milter service            |
| Webserver     | App-Bluemind-Webserver-SSH-custom | Check web application server    |
| Xmpp          | App-Bluemind-Xmpp-SSH-custom      | Check instant messaging service |

> The services listed above are created automatically when the **App-Bluemind-SSH-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Core" label="Core">

| Metric name                              | Unit  |
|:-----------------------------------------|:------|
| core.calls.received.success.count        | count |
| core.calls.received.failure.count        | count |
| core.heartbeat.broadcast.running.count   | count |
| core.directory.cluster.events.count      | count |
| core.request.handling.total.milliseconds | ms    |
| core.request.handling.mean.milliseconds  | ms    |

</TabItem>
<TabItem value="Eas" label="Eas">

| Metric name                      | Unit  |
|:---------------------------------|:------|
| eas.responses.size.total.bytes   | B     |
| eas.execution.total.milliseconds | ms    |
| eas.execution.mean.milliseconds  | ms    |

</TabItem>
<TabItem value="Hps" label="Hps">

| Metric name                                                    | Unit  |
|:---------------------------------------------------------------|:------|
| hps.authentication.success.count                               | count |
| hps.authentication.failure.count                               | count |
| hps.requests.protected.count                                   | count |
| hps.requests.maintenance.count                                 | count |
| *bm_hps_upstream*#hps.upstream.requests.time.milliseconds      | ms    |
| *bm_hps_upstream*#hps.upstream.requests.time.mean.milliseconds | ms    |
| *bm_hps_upstream*#hps.upstream.requests.size.total.bytes       | B     |
| *bm_hps_upstream*#hps.upstream.requests.total.count            | count |

</TabItem>
<TabItem value="Ips" label="Ips">

| Metric name                  | Unit  |
|:-----------------------------|:------|
| ips.connections.active.count | count |

</TabItem>
<TabItem value="Lmtpd" label="Lmtpd">

| Metric name                                        | Unit  |
|:---------------------------------------------------|:------|
| lmtpd.connections.active.count                     | count |
| lmtpd.connections.total.count                      | count |
| lmtpd.deliveries.success.count                     | count |
| lmtpd.deliveries.failure.count                     | count |
| lmtpd.emails.size.total.bytes                      | B     |
| lmtpd.sessions.duration.total.milliseconds         | ms    |
| lmtpd.sessions.duration.mean.milliseconds          | ms    |
| lmtpd.traffic.transport.latency.total.milliseconds | ms    |
| lmtpd.traffic.transport.latency.mean.milliseconds  | ms    |

</TabItem>
<TabItem value="Milter" label="Milter">

| Metric name                                 | Unit  |
|:--------------------------------------------|:------|
| milter.connections.total.count              | count |
| milter.traffic.class.inbound.count          | count |
| milter.traffic.class.outbound.count         | count |
| milter.traffic.size.inbound.bytes           | B     |
| milter.traffic.size.outbound.bytes          | B     |
| milter.sessions.duration.total.milliseconds | ms    |
| milter.sessions.duration.mean.milliseconds  | ms    |

</TabItem>
<TabItem value="Webserver" label="Webserver">

| Metric name                               | Unit  |
|:------------------------------------------|:------|
| webserver.requests.time.milliseconds      | ms    |
| webserver.requests.time.mean.milliseconds | ms    |
| webserver.requests.total.count            | count |
| webserver.requests.status.200.count       | count |
| webserver.requests.status.304.count       | count |

</TabItem>
<TabItem value="Xmpp" label="Xmpp">

| Metric name             | Unit  |
|:------------------------|:------|
| xmpp.packets.all.count  | count |
| xmpp.packets.chat.count | count |

</TabItem>
</Tabs>

## Prerequisites

### SSH configuration

A user is required to query the resource by SSH. There is no need for root or sudo
privileges. There are two possible ways to log in through SSH, either by
exchanging the SSH key from **centreon-engine** user to the target resource, or by
setting your unique user and password directly in the host macros.

### BlueMind Configuration

A monitoring account allowed to access Unix sockets within the `/var/run/bm-metrics/` directory must be created on the BlueMind system and be part of the `telegraph` group.

You can check that the proper monitoring account permissions are set by logging on to the BlueMind system using this newly created user and executing this test command:

```bash
curl --unix-socket /var/run/bm-metrics/metrics-bm-core.sock http://127.0.0.1/metrics
```

The command result should look like:

```
bm-core.callsByRPC,rpc=GET-/api/todolist/{containerUid}/{uid}/_itemchangelog,status=success,meterType=Counter count=1
bm-core.callsByRPC,rpc=GET-/api/externaluser/{domainUid}/{uid}/groups,status=success,meterType=Counter count=2
bm-core.heartbeat.broadcast,state=core.state.stopping,meterType=Counter count=2
...
```

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
dnf install centreon-pack-applications-bluemind-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-bluemind-ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-bluemind-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-bluemind-ssh
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Bluemind SSH** connector through
the **Configuration > Monitoring Connector Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/onprem/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Bluemind-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Bluemind-Ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-bluemind-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Bluemind-Ssh
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Bluemind-SSH-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                                                         | Default value     | Mandatory   |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                          |                   |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead |                   |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                       |                   |             |
| SSHBACKEND      | Define the backend you want to use. It can be: sshcli (default), plink and libssh                                                                                   | sshcli            |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                                                                |                   |             |

5. [Deploy the configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/onprem/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Core" label="Core">

| Macro                          | Description                                                                                        | Default value     | Mandatory   |
|:-------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCALLSRECEIVEDFAILED     | Thresholds                                                                                         |                   |             |
| CRITICALCALLSRECEIVEDFAILED    | Thresholds                                                                                         |                   |             |
| WARNINGCALLSRECEIVEDSUCCESS    | Thresholds                                                                                         |                   |             |
| CRITICALCALLSRECEIVEDSUCCESS   | Thresholds                                                                                         |                   |             |
| WARNINGDIRECTORYCLUSTEREVENTS  | Thresholds                                                                                         |                   |             |
| CRITICALDIRECTORYCLUSTEREVENTS | Thresholds                                                                                         |                   |             |
| WARNINGHEARTBEATBROADCAST      | Thresholds                                                                                         |                   |             |
| CRITICALHEARTBEATBROADCAST     | Thresholds                                                                                         |                   |             |
| WARNINGREQUESTHANDLINGMEAN     | Thresholds                                                                                         |                   |             |
| CRITICALREQUESTHANDLINGMEAN    | Thresholds                                                                                         |                   |             |
| WARNINGREQUESTHANDLINGTOTAL    | Thresholds                                                                                         |                   |             |
| CRITICALREQUESTHANDLINGTOTAL   | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Eas" label="Eas">

| Macro                      | Description                                                                                        | Default value     | Mandatory   |
|:---------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGEXECUTIONMEAN       | Thresholds                                                                                         |                   |             |
| CRITICALEXECUTIONMEAN      | Thresholds                                                                                         |                   |             |
| WARNINGEXECUTIONTOTAL      | Thresholds                                                                                         |                   |             |
| CRITICALEXECUTIONTOTAL     | Thresholds                                                                                         |                   |             |
| WARNINGRESPONSESSIZETOTAL  | Thresholds                                                                                         |                   |             |
| CRITICALRESPONSESSIZETOTAL | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Hps" label="Hps">

| Macro                             | Description                                                                                        | Default value     | Mandatory   |
|:----------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERUPSTREAM                    | Filter upstream name (can be a regexp)                                                             |                   |             |
| WARNINGAUTHENTICATIONFAILURE      | Thresholds                                                                                         |                   |             |
| CRITICALAUTHENTICATIONFAILURE     | Thresholds                                                                                         |                   |             |
| WARNINGAUTHENTICATIONSUCCESS      | Thresholds                                                                                         |                   |             |
| CRITICALAUTHENTICATIONSUCCESS     | Thresholds                                                                                         |                   |             |
| WARNINGREQUESTSMAINTENANCE        | Thresholds                                                                                         |                   |             |
| CRITICALREQUESTSMAINTENANCE       | Thresholds                                                                                         |                   |             |
| WARNINGREQUESTSPROTECTED          | Thresholds                                                                                         |                   |             |
| CRITICALREQUESTSPROTECTED         | Thresholds                                                                                         |                   |             |
| WARNINGUPSTREAMREQUESTSSIZETOTAL  | Thresholds                                                                                         |                   |             |
| CRITICALUPSTREAMREQUESTSSIZETOTAL | Thresholds                                                                                         |                   |             |
| WARNINGUPSTREAMREQUESTSTIMEMEAN   | Thresholds                                                                                         |                   |             |
| CRITICALUPSTREAMREQUESTSTIMEMEAN  | Thresholds                                                                                         |                   |             |
| WARNINGUPSTREAMREQUESTSTIMETOTAL  | Thresholds                                                                                         |                   |             |
| CRITICALUPSTREAMREQUESTSTIMETOTAL | Thresholds                                                                                         |                   |             |
| WARNINGUPSTREAMREQUESTSTOTAL      | Thresholds                                                                                         |                   |             |
| CRITICALUPSTREAMREQUESTSTOTAL     | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS                      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Ips" label="Ips">

| Macro                     | Description                                                                                        | Default value     | Mandatory   |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONNECTIONSACTIVE  | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSACTIVE | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Lmtpd" label="Lmtpd">

| Macro                                | Description                                                                                        | Default value     | Mandatory   |
|:-------------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONNECTIONSACTIVE             | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSACTIVE            | Thresholds                                                                                         |                   |             |
| WARNINGCONNECTIONSTOTAL              | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSTOTAL             | Thresholds                                                                                         |                   |             |
| WARNINGDELIVERIESFAILURE             | Thresholds                                                                                         |                   |             |
| CRITICALDELIVERIESFAILURE            | Thresholds                                                                                         |                   |             |
| WARNINGDELIVERIESSUCCESS             | Thresholds                                                                                         |                   |             |
| CRITICALDELIVERIESSUCCESS            | Thresholds                                                                                         |                   |             |
| WARNINGEMAILSSIZETOTAL               | Thresholds                                                                                         |                   |             |
| CRITICALEMAILSSIZETOTAL              | Thresholds                                                                                         |                   |             |
| WARNINGSESSIONSDURATIONMEAN          | Thresholds                                                                                         |                   |             |
| CRITICALSESSIONSDURATIONMEAN         | Thresholds                                                                                         |                   |             |
| WARNINGSESSIONSDURATIONTOTAL         | Thresholds                                                                                         |                   |             |
| CRITICALSESSIONSDURATIONTOTAL        | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICTRANSPORTLATENCYMEAN   | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICTRANSPORTLATENCYMEAN  | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICTRANSPORTLATENCYTOTAL  | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICTRANSPORTLATENCYTOTAL | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS                         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Milter" label="Milter">

| Macro                         | Description                                                                                        | Default value     | Mandatory   |
|:------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONNECTIONSTOTAL       | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSTOTAL      | Thresholds                                                                                         |                   |             |
| WARNINGSESSIONSDURATIONMEAN   | Thresholds                                                                                         |                   |             |
| CRITICALSESSIONSDURATIONMEAN  | Thresholds                                                                                         |                   |             |
| WARNINGSESSIONSDURATIONTOTAL  | Thresholds                                                                                         |                   |             |
| CRITICALSESSIONSDURATIONTOTAL | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICCLASSINBOUND    | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICCLASSINBOUND   | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICCLASSOUTBOUND   | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICCLASSOUTBOUND  | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICSIZEINBOUND     | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICSIZEINBOUND    | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICSIZEOUTBOUND    | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICSIZEOUTBOUND   | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Webserver" label="Webserver">

| Macro                     | Description                                                                                        | Default value               | Mandatory   |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| WARNINGREQUESTSSTATUS200  | Thresholds                                                                                         |                             |             |
| CRITICALREQUESTSSTATUS200 | Thresholds                                                                                         |                             |             |
| WARNINGREQUESTSSTATUS304  | Thresholds                                                                                         |                             |             |
| CRITICALREQUESTSSTATUS304 | Thresholds                                                                                         |                             |             |
| WARNINGREQUESTSTIMEMEAN   | Thresholds                                                                                         |                             |             |
| CRITICALREQUESTSTIMEMEAN  | Thresholds                                                                                         |                             |             |
| WARNINGREQUESTSTIMETOTAL  | Thresholds                                                                                         |                             |             |
| CRITICALREQUESTSTIMETOTAL | Thresholds                                                                                         |                             |             |
| WARNINGREQUESTSTOTAL      | Thresholds                                                                                         |                             |             |
| CRITICALREQUESTSTOTAL     | Thresholds                                                                                         |                             |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --statefile-format=storable |             |

</TabItem>
<TabItem value="Xmpp" label="Xmpp">

| Macro               | Description                                                                                        | Default value     | Mandatory   |
|:--------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGPACKETSALL   | Thresholds                                                                                         |                   |             |
| CRITICALPACKETSALL  | Thresholds                                                                                         |                   |             |
| WARNINGPACKETSCHAT  | Thresholds                                                                                         |                   |             |
| CRITICALPACKETSCHAT | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_bluemind_ssh.pl \
	--plugin=apps::bluemind::local::plugin \
	--mode=xmpp \
	--hostname='10.0.0.1' \
	--ssh-backend='sshcli' \
	--ssh-username='' \
	--ssh-password='' \
	--ssh-port=''  \
	--warning-packets-all='' \
	--critical-packets-all='' \
	--warning-packets-chat='' \
	--critical-packets-chat='' 
```

The expected command output is shown below:

```bash
OK: all packets sent: 46 chat packets sent: 0 | 'xmpp.packets.all.count'=46;;;0;'xmpp.packets.chat.count'=0;;;0;
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
/usr/lib/centreon/plugins/centreon_bluemind_ssh.pl \
	--plugin=apps::bluemind::local::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                    | Linked service template           |
|:------------------------------------------------------------------------------------------------------------------------|:----------------------------------|
| core [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/bluemind/local/mode/core.pm)]           | App-Bluemind-Core-SSH-custom      |
| eas [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/bluemind/local/mode/eas.pm)]             | App-Bluemind-Eas-SSH-custom       |
| hps [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/bluemind/local/mode/hps.pm)]             | App-Bluemind-Hps-SSH-custom       |
| ips [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/bluemind/local/mode/ips.pm)]             | App-Bluemind-Ips-SSH-custom       |
| lmtpd [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/bluemind/local/mode/lmtpd.pm)]         | App-Bluemind-Lmtpd-SSH-custom     |
| milter [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/bluemind/local/mode/milter.pm)]       | App-Bluemind-Milter-SSH-custom    |
| webserver [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/bluemind/local/mode/webserver.pm)] | App-Bluemind-Webserver-SSH-custom |
| xmpp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/bluemind/local/mode/xmpp.pm)]           | App-Bluemind-Xmpp-SSH-custom      |

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
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Timeout in seconds for the command (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --sudo                                     | Use 'sudo' to execute the command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --command                                  | Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --command-path                             | Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          | Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --ssh-backend                              | Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-username                             | Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ssh-password                             | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-port                                 | Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-priv-key                             | Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --sshcli-command                           | ssh command (default: 'ssh').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --sshcli-path                              | ssh command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sshcli-option                            | Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-command                            | plink command (default: 'plink').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-path                               | plink command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --plink-option                             | Specify plink options (example: --plink-option='-T').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --libssh-strict-connect                    | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Core" label="Core">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^calls'                                                                                                                                                          |
| --warning-* --critical-* | Thresholds. Can be: 'calls-received-success', 'calls-received-failed', 'heartbeat-broadcast', 'directory-cluster-events', 'request-handling-total', 'request-handling-mean'.                                                                  |

</TabItem>
<TabItem value="Eas" label="Eas">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^execution'                                                                                                                                                      |
| --warning-* --critical-* | Thresholds. Can be: 'responses-size-total', 'execution-total', 'execution-mean'.                                                                                                                                                              |

</TabItem>
<TabItem value="Hps" label="Hps">

| Option                   | Description                                                                                                                                                                                                                                       |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                        |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                   |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                           |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                         |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                               |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                    |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                            |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                    |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.       |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                             |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                      |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='maintenance'                                                                                                                                                         |
| --filter-upstream        | Filter upstream name (can be a regexp).                                                                                                                                                                                                           |
| --warning-* --critical-* | Thresholds. Can be: 'authentication-success', 'authentication-failure', 'requests-protected', 'requests-maintenance', 'upstream-requests-time-total', 'upstream-requests-time-mean', 'upstream-requests-size-total, 'upstream-requests-total'.    |

</TabItem>
<TabItem value="Ips" label="Ips">

| Option                   | Description                                  |
|:-------------------------|:---------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'active-connections'.    |

</TabItem>
<TabItem value="Lmtpd" label="Lmtpd">

| Option                   | Description                                                                                                                                                                                                                                                  |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                   |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                              |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                      |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                    |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                               |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                       |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                               |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                  |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                        |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                 |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                           |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^deliveries'                                                                                                                                                                    |
| --warning-* --critical-* | Thresholds. Can be: 'connections-active', 'connections-total', 'deliveries-success', 'deliveries-failure', 'emails-size-total', 'sessions-duration-total', 'sessions-duration-mean', 'traffic-transport-latency-total', 'traffic-transport-latency-mean'.    |

</TabItem>
<TabItem value="Milter" label="Milter">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^deliveries'                                                                                                                                                     |
| --warning-* --critical-* | Thresholds. Can be: 'connections-total', 'traffic-class-inbound', 'traffic-class-outbound', 'traffic-size-inbound', 'traffic-size-outbound', 'sessions-duration-total', 'sessions-duration-mean' .                                            |

</TabItem>
<TabItem value="Webserver" label="Webserver">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='requests-time-mean'                                                                                                                                              |
| --filter-upstream        | Filter upstream name (can be a regexp).                                                                                                                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'requests-time-total', 'requests-time-mean', 'requests-total', 'requests-status-200', 'requests-status-304'.                                                                                                              |

</TabItem>
<TabItem value="Xmpp" label="Xmpp">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='chat'                                                                                                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'packets-all', 'packets-chat'.                                                                                                                                                                                            |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_bluemind_ssh.pl \
	--plugin=apps::bluemind::local::plugin \
	--mode=xmpp \
	--help
```

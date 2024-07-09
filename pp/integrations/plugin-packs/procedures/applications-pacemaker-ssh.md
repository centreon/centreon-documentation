---
id: applications-pacemaker-ssh
title: Pacemaker
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Pacemaker** brings a host template:

* **App-Pacemaker-SSH-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Pacemaker-SSH-custom" label="App-Pacemaker-SSH-custom">

| Service Alias | Service Template                     | Service Description                                             |
|:--------------|:-------------------------------------|:----------------------------------------------------------------|
| CRM           | App-Pacemaker-CRM-SSH-custom         | Check cluster state with crm_mon command                        |
| Clustat       | App-Pacemaker-Clustat-SSH-custom     | [Deprecated] Check cluster state with clustat command                        |
| Constraints   | App-Pacemaker-Constraints-SSH-custom | Check if there are any constraints applied to a cluster resource |

> The services listed above are created automatically when the **App-Pacemaker-SSH-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="CRM" label="CRM">

| Metric name                                             | Unit  |
|:--------------------------------------------------------|:------|
| *cluster*~connection-status                             | N/A   |
| *cluster*~quorum-status                                 | N/A   |
| *cluster*~cluster.nodes.online.count                    | count |
| *cluster*~cluster.nodes.offline.count                   | count |
| *cluster*~cluster.nodes.standby.count                   | count |
| *cluster*~cluster.actions.failed.count                  | count |
| *resources*#resource-status                             | N/A   |
| *resources*#resource.actions.failed.count               | count |
| *resources*#resource.migration.failed.count             | count |
| *clone_resources*#clone-resource-status                 | N/A   |
| *clone_resources*#clone_resource.actions.failed.count   | count |
| *clone_resources*#clone_resource.migration.failed.count | count |

</TabItem>
<TabItem value="Clustat" label="Clustat">

> This service template is deprecated and is no longer provided with the latest versions of the connector since `clustat` is no longer part of Pacemaker's command-line tools since RHEL7.

| Metric name    | Unit  |
|:---------------|:------|
| *nodes*#node   | N/A   |
| *groups*#group | N/A   |


</TabItem>
<TabItem value="Constraints" label="Constraints">

| Métrique   | Unité |
|:-----------|:------|
| status | N/A   |

</TabItem>
</Tabs>

## Prerequisites

### SSH configuration

A user is required to query the resource by SSH. There is no need for root or sudo
privileges. There are two possible ways to log in through SSH, either by
exchanging the SSH key from **centreon-engine** user to the target resource, or by
setting your unique user and password directly in the host macros.

### Local user privileges

The local user on the monitored host must be added to the `haclient` group if it is not already part of it (i.e. any other user than `hacluster`). For example if the local user is `centreon-engine`, run:

```bash
usermod -a -G haclient centreon-engine
```

You will then need to authenticate to the cluster:

```bash
pcs client local-auth
```

Then type `hacluster` as login and the appropriate password.

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
dnf install centreon-pack-applications-pacemaker-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-pacemaker-ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-pacemaker-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-pacemaker-ssh
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Pacemaker** connector through
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
dnf install centreon-plugin-Applications-Pacemaker-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Pacemaker-Ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-pacemaker-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Pacemaker-Ssh
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Pacemaker-SSH-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                                                         | Default value     | Mandatory   |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                          |                   |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead |                   |             |
| SSHPRIVKEY     | Define the path to the private key file for user authentication. | `/var/lib/centreon-engine/.ssh/id_ed25519` |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                       |                   |             |
| SSHBACKEND      | Define the backend you want to use. It can be: sshcli (default), plink and libssh                                                                                   | libssh            |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                                                                |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="CRM" label="CRM">

| Macro                                | Description                                                                                                                                                                                                                  | Default value                      | Mandatory   |
|:-------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|:-----------:|
| FILTERRESOURCENAME                   | Filter resource (also clone resource) by name (can be a regexp)                                                                                                                                                              |                                    |             |
| WARNINGCLONERESOURCEACTIONSFAILED    | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALCLONERESOURCEACTIONSFAILED   | Thresholds                                                                                                                                                                                                                   |                                    |             |
| WARNINGCLONERESOURCEMIGRATIONFAILED  | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALCLONERESOURCEMIGRATIONFAILED | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALCLONERESOURCESTATUS          | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /failed/i'). You can use the following variables: %{name}, %{status}, %{masters\_nodes\_name}, %{slaves\_nodes\_name}, %{is\_unmanaged} | %{status} =~ /failed/i             |             |
| WARNINGCLONERESOURCESTATUS           | Define the conditions to match for the status to be WARNING. You can use the following variables: %{name}, %{status}, %{masters\_nodes\_name}, %{slaves\_nodes\_name}, %{is\_unmanaged}                                      |                                    |             |
| CRITICALCLUSTERACTIONSFAILED         | Thresholds                                                                                                                                                                                                                   | 0                                  |             |
| WARNINGCLUSTERACTIONSFAILED          | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALCONNECTIONSTATUS             | Define the conditions to match for the status to be CRITICAL (default: '%{connection\_status} =~ /failed/i'). You can use the following variables: %{connection\_status}, %{connection\_error}                               | %{connection\_status} =~ /failed/i |             |
| WARNINGCONNECTIONSTATUS              | Define the conditions to match for the status to be WARNING. You can use the following variables: %{connection\_status}, %{connection\_error}                                                                                |                                    |             |
| CRITICALNODESOFFLINE                 | Thresholds                                                                                                                                                                                                                   | 0                                  |             |
| WARNINGNODESOFFLINE                  | Thresholds                                                                                                                                                                                                                   |                                    |             |
| WARNINGNODESONLINE                   | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALNODESONLINE                  | Thresholds                                                                                                                                                                                                                   |                                    |             |
| WARNINGNODESSTANDBY                  | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALNODESSTANDBY                 | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALQUORUMSTATUS                 | Define the conditions to match for the status to be CRITICAL (default: '%{quorum\_status} =~ /noQuorum/i'). You can use the following variables: %{quorum\_status}                                                           | %{quorum\_status} =~ /noQuorum/i   |             |
| WARNINGQUORUMSTATUS                  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{quorum\_status}                                                                                                          |                                    |             |
| WARNINGRESOURCEACTIONSFAILED         | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALRESOURCEACTIONSFAILED        | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALRESOURCEMIGRATIONFAILED      | Thresholds                                                                                                                                                                                                                   | 0                                  |             |
| WARNINGRESOURCEMIGRATIONFAILED       | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALRESOURCESTATUS               | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /stopped\|failed/i'). You can use the following variables: %{name}, %{status}, %{node}, %{is\_unmanaged}                                | %{status} =~ /stopped\|failed/i    |             |
| WARNINGRESOURCESTATUS                | Define the conditions to match for the status to be WARNING. You can use the following variables: %{name}, %{status}, %{node}, %{is\_unmanaged}                                                                              |                                    |             |
| EXTRAOPTIONS                         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                           | --verbose                          |             |

</TabItem>
<TabItem value="Clustat" label="Clustat">

> This service template is deprecated and is no longer provided with the latest versions of the connector since `clustat` is no longer part of Pacemaker's command-line tools since RHEL7.

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Constraints" label="Constraints">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| RESOURCENAME | Set the resource name you want to check                                                            | RESOURCENAME      | X           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \
	--plugin=apps::pacemaker::local::plugin \
	--mode=crm \
	--hostname='10.0.0.1' \
	--ssh-backend='libssh' \
	--ssh-username='' \
	--ssh-password='' \
	--ssh-port=''  \
	--filter-resource-name='' \
	--warning-nodes-online='' \
	--critical-nodes-online='' \
	--warning-nodes-offline='' \
	--critical-nodes-offline='0' \
	--warning-nodes-standby='' \
	--critical-nodes-standby='' \
	--warning-clone-resource-status='' \
	--critical-clone-resource-status='%{status} =~ /failed/i' \
	--warning-clone-resource-actions-failed='' \
	--critical-clone-resource-actions-failed='' \
	--warning-clone-resource-migration-failed='' \
	--critical-clone-resource-migration-failed='' \
	--warning-connection-status='' \
	--critical-connection-status='%{connection_status} =~ /failed/i' \
	--warning-cluster-actions-failed='' \
	--critical-cluster-actions-failed='0' \
	--warning-resource-status='' \
	--critical-resource-status='%{status} =~ /stopped|failed/i' \
	--warning-resource-actions-failed='' \
	--critical-resource-actions-failed='' \
	--warning-resource-migration-failed='' \
	--critical-resource-migration-failed='0' \
	--warning-quorum-status='' \
	--critical-quorum-status='%{quorum_status} =~ /noQuorum/i' \
	--verbose
```

The expected command output is shown below:

```bash
OK:    actions failed: 31 actions failed: 63 migration failed: 93 actions failed: 67 migration failed: 5 | '*cluster*~cluster.nodes.online.count'=94;;;0;'*cluster*~cluster.nodes.offline.count'=25;;;0;'*cluster*~cluster.nodes.standby.count'=69;;;0;'*cluster*~cluster.actions.failed.count'=31;;;0;'*resources*#resource.actions.failed.count'=63;;;0;'*resources*#resource.migration.failed.count'=93;;;0;'*clone_resources*#clone_resource.actions.failed.count'=67;;;0;'*clone_resources*#clone_resource.migration.failed.count'=5;;;0;
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
/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \
	--plugin=apps::pacemaker::local::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                         | Linked service template              |
|:-----------------------------------------------------------------------------------------------------------------------------|:-------------------------------------|
| clustat [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pacemaker/local/mode/clustat.pm)]         | App-Pacemaker-Clustat-SSH-custom     |
| constraints [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pacemaker/local/mode/constraints.pm)] | App-Pacemaker-Constraints-SSH-custom |
| crm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pacemaker/local/mode/crm.pm)]                 | App-Pacemaker-CRM-SSH-custom         |

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
| --hostname                                 | Hostname to query in ssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --timeout                                  | Timeout in seconds for the command (default: 45). Default value can be override by the mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --command                                  | Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --command-path                             | Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          | Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sudo                       | Use 'sudo' to execute the command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
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
<TabItem value="CRM" label="CRM">

| Option                           | Description                                                                                                                                                                                                                    |
|:---------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-resource-name           | Filter resource (also clone resource) by name (can be a regexp).                                                                                                                                                               |
| --warning-connection-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{connection\_status}, %{connection\_error}                                                                                  |
| --critical-connection-status     | Define the conditions to match for the status to be CRITICAL (default: '%{connection\_status} =~ /failed/i'). You can use the following variables: %{connection\_status}, %{connection\_error}                                 |
| --warning-quorum-status          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{quorum\_status}                                                                                                            |
| --critical-quorum-status         | Define the conditions to match for the status to be CRITICAL (default: '%{quorum\_status} =~ /noQuorum/i'). You can use the following variables: %{quorum\_status}                                                             |
| --warning-resource-status        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{name}, %{status}, %{node}, %{is\_unmanaged}                                                                                |
| --critical-resource-status       | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /stopped\|failed/i'). You can use the following variables: %{name}, %{status}, %{node}, %{is\_unmanaged}                                  |
| --warning-clone-resource-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{name}, %{status}, %{masters\_nodes\_name}, %{slaves\_nodes\_name}, %{is\_unmanaged}                                        |
| --critical-clone-resource-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /failed/i'). You can use the following variables: %{name}, %{status}, %{masters\_nodes\_name}, %{slaves\_nodes\_name}, %{is\_unmanaged}   |
| --ignore-failed-actions          | Failed actions errors (that match) are skipped.                                                                                                                                                                                |
| --resources                      | If resources not started on the node specified, send a warning message: (format: \<rsc\_name\>:\<node\>,\<rsc\_name\>:\<node\>,...)                                                                                            |
| --warning-* --critical-*         | Thresholds. Can be: 'cluster-actions-failed', 'clone-resource-actions-failed', 'clone-resource-migration-failed', 'nodes-online', 'nodes-offline', 'nodes-standby', 'resource-actions-failed', 'resource-migration-failed'.    |

</TabItem>
<TabItem value="Clustat" label="Clustat">

| Option       | Description                                                                                                                                                                                      |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-*  | Can be ('group','node') Define the conditions to match for the status to be WARNING.                                                                                                             |
| --critical-* | Can be ('group','node') Define the conditions to match for the status to be CRITICAL. (default: --critical-node '%{state} !~ /up\|clean/' --critical-group '%{state} !~ /started\|starting/')    |

</TabItem>
<TabItem value="Constraints" label="Constraints">

| Option     | Description                               |
|:-----------|:------------------------------------------|
| --resource | Set the resource name you want to check   |
| --warning  | Return a warning instead of a critical    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \
	--plugin=apps::pacemaker::local::plugin \
	--mode=crm \
	--help
```

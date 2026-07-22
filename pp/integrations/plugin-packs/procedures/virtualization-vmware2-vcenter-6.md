---
id: virtualization-vmware2-vcenter-6
title: VMware vCenter v6
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **VMware vCenter v6** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)
* [VMware vCenter](./virtualization-vmware2-vcenter-generic.md)

## Pack assets

### Templates

The Monitoring Connector **VMware vCenter v6** brings a host template:

* **Virt-VMWare2-VCenter-6-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Virt-VMWare2-VCenter-6-custom" label="Virt-VMWare2-VCenter-6-custom">

| Service Alias      | Service Template                        | Service Description                                         |
|:-------------------|:----------------------------------------|:------------------------------------------------------------|
| Vm-Snapshot-Global | Virt-VMWare2-Vc6-Snapshot-Global-custom | Check snapshot age of multiple virtual machines (Vsphere 6) |

> The services listed above are created automatically when the **Virt-VMWare2-VCenter-6-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias   | Service Template                     | Service Description                                                     |
|:----------------|:-------------------------------------|:------------------------------------------------------------------------|
| Vm-Limit-Global | Virt-VMWare2-Vc6-Limit-Global-custom | Check limit definition (cpu, memory, disk) on multiple virtual machines |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Vm-Limit-Global" label="Vm-Limit-Global">

| Name          | Unit  |
|:--------------|:------|
| cpu-status    | N/A   |
| memory-status | N/A   |
| disk-status   | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Vm-Snapshot-Global" label="Vm-Snapshot-Global">

| Name                                | Unit  |
|:------------------------------------|:------|
| vm.snapshots.warning.current.count  | count |
| vm.snapshots.critical.current.count | count |

</TabItem>
</Tabs>

## Prerequisites

### VMware Perl SDK

To make the connector work, you will need the Perl VMware SDK.
To download it, you'll need a (free of charge) account at Broadcom's.
At the time of writing, it can be downloaded from [this page](https://developer.broadcom.com/sdks/vsphere-perl-sdk/latest/). Download the latest version (the archive that has `f9ef0fc7a4e4983cf0ca6aea08d9a778` as MD5 checksum).

If you have vSAN clusters to monitor, you'll also need to download another archive from [this page](https://developer.broadcom.com/sdks/vsan-management-sdk-for-perl/latest/).

Copy the downloaded files in a `/tmp/` directory on all the servers where this program must run (usually pollers).

### Centreon VMware daemon

To monitor VMWare resources, Centreon uses a daemon to connect to and send requests to the vCenter (or the ESX, but it is recommended to use the vCenter).

Install this daemon on each needed poller:

<Tabs groupId="sync">
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

- Install the package with necessary tools

```bash
apt -y install patch make unzip centreon-plugin-virtualization-vmware-daemon
```

- Install the SDK

```bash
cd /tmp
tar zxf VMware-vSphere-Perl-SDK-*.tar.gz
cd vmware-vsphere-cli-distrib
patch --backup lib/VMware/share/VMware/VICommon.pm <<'EOF'
--- lib/VMware/share/VMware/VICommon.pm	2025-04-24 17:18:24.938290503 +0200
+++ VICommon.pm	2025-04-24 17:18:18.690399614 +0200
@@ -2319,6 +2319,8 @@
    my $user_agent = $self->{user_agent};
    $user_agent->cookie_jar->as_string
       =~ m/(.*)vmware_soap_session=\"\\\"([0-9a-zA-Z-](.*)+)\\\"\"(.*)/;
+   $user_agent->cookie_jar->as_string
+      =~ m/(.*)vmware_soap_session=[\\\"]*([0-9a-zA-Z-]+)/ unless $2;
    return $2;
 }
EOF

perl Makefile.PL
make pure_install
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

- Install the package with necessary tools

```bash
dnf install -y patch make unzip 'perl(ExtUtils::MakeMaker)' centreon-plugin-Virtualization-VMWare-daemon
```

- Install the SDK

```bash
cd /tmp
tar zxf VMware-vSphere-Perl-SDK-*.tar.gz
cd vmware-vsphere-cli-distrib

perl Makefile.PL
make pure_install
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

- Install the package with necessary tools

```bash
dnf install -y patch make unzip 'perl(ExtUtils::MakeMaker)' centreon-plugin-Virtualization-VMWare-daemon
```

- Install the SDK

```bash
cd /tmp
tar zxf VMware-vSphere-Perl-SDK-*.tar.gz
cd vmware-vsphere-cli-distrib
patch --backup lib/VMware/share/VMware/VICommon.pm <<'EOF'
--- lib/VMware/share/VMware/VICommon.pm	2025-04-24 17:18:24.938290503 +0200
+++ VICommon.pm	2025-04-24 17:18:18.690399614 +0200
@@ -2319,6 +2319,8 @@
    my $user_agent = $self->{user_agent};
    $user_agent->cookie_jar->as_string
       =~ m/(.*)vmware_soap_session=\"\\\"([0-9a-zA-Z-](.*)+)\\\"\"(.*)/;
+   $user_agent->cookie_jar->as_string
+      =~ m/(.*)vmware_soap_session=[\\\"]*([0-9a-zA-Z-]+)/ unless $2;
    return $2;
 }
EOF

perl Makefile.PL
make pure_install
```

</TabItem>
</Tabs>

- Install the vSAN modules

```bash
cd /tmp
unzip vsan-sdk-perl.zip
mkdir -p /usr/local/share/perl5/VMware
cp ./vsan-sdk-perl/bindings/VIM25Vsanmgmt* /usr/local/share/perl5/VMware/
```

### Configure Centreon VMWare Connector

<Tabs groupId="sync">
<TabItem value="Centreon Cloud and OnPrem from version 24.10" label="Centreon Cloud and OnPrem from version 24.10">

Go to [**Configuration > Connectors > Additional configurations**](../getting-started/how-to-guides/acc.md) to configure the connection to your vCenter.

</TabItem>
<TabItem value="Versions of Centreon OnPrem older than 24.10" label="Versions of Centreon OnPrem older than 24.10">

To configure the access to your infrastructure, edit the
"/etc/centreon/centreon\_vmware.pm" configuration file:

``` perl
%centreon_vmware_config = (
    vsphere_server => {
        default => {
            url => 'https://<ip_hostname>/sdk',
            username => '<username>',
            password => '<password>'
        }
    }
);

1;
```

Make sure to replace the variables with the necessary information:

- _ip\_hostname_: IP address or hostname of the vCenter or ESX (if standalone),
- _username_: username with at least "read only" access to the vCenter or ESX (you can use a domain user),
- _password_: password for this user.

You can configure multiple vCenter or ESXi connections using this
structure:

``` perl
%centreon_vmware_config = (
    vsphere_server => {
        'my_first_vcenter' => {
            url => 'https://<ip_hostname>/sdk',
            username => '<username>',
            password => '<password>'
        },
        'my_other_vcenter' => {
            url => 'https://<ip_hostname>/sdk',
            username => '<DOMAIN>\<username>',
            password => '<password>'
        },
    },
    port => 5700
);

1;
```

Each entry is called a **container** (it corresponds to the `$_HOSTCENTREONVMWARECONTAINER$` host macro).

> You can also define the "port" attribute to change the listening port.

</TabItem>
</Tabs>

Then start the daemon and make sure it is configured to start at server boot:

``` bash
systemctl start centreon_vmware
systemctl enable centreon_vmware
```

Make sure that the daemon configuration works fine by looking for errors in
"/var/log/centreon/centreon\_vmware.log".

### Tags and custom attributes

To discover tags and custom attributes, you must :

* use version **3.2.5** of **centreon-vmware-daemon**
* add **--tags** in the additional discovery options: go to the **Configuration > Hosts > Discovery** page, and to the 3rd step (**Set discovery parameters**), in the section **Additional parameters**, in the **Additional options** field, type **--tags**.

### Network flows

The Centreon poller (with the VMWare daemon installed on it) needs to access the vCenter using HTTPS (TCP/443).

If several pollers use the same daemon, then they must access the poller that has the VMware daemon installed on it using TCP/5700.

## Installing the monitoring connector

### Pack

The installation procedures for monitoring connectors are slightly different depending on [whether your license is offline or online](../getting-started/how-to-guides/connectors-licenses.md).

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-virtualization-vmware2-vcenter-6
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-vmware2-vcenter-6
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-virtualization-vmware2-vcenter-6
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-vmware2-vcenter-6
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **VMware vCenter v6** connector through
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
dnf install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-virtualization-vmware2-connector-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Virt-VMWare2-VCenter-6-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                      | Description                                                                                           | Default value     | Mandatory   |
|:---------------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CENTREONVMWAREPORT         | Port of the daemon (default: 5700)                                                                        | 5700              |             |
| CENTREONVMWARECONTAINER    | Container to use (it depends on the daemon's configuration)                                          | default           |              |
| CENTREONVMWAREHOST         | Hostname of the server on which the daemon is installed (required)                                                                        | localhost         | X            |
| CENTREONVMWAREEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Vm-Limit-Global" label="Vm-Limit-Global">

| Macro                | Description                                                                                                                                              | Default value                                                  | Mandatory   |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|:-----------:|
| FILTER               | VM hostname to check. If not set, we check all VMs                                                                                                       |                                                                |             |
| VMUUID               | Specify the VM's UUID                                                                                                                                    |                                                                |             |
| CRITICALCPUSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\} | %\{connection\_state\} !~ /^connected$/i \|\| %\{limit\} != -1 |             |
| WARNINGCPUSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}  |                                                                |             |
| CRITICALDISKSTATUS   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\} | %\{connection\_state\} !~ /^connected$/i \|\| %\{limit\} != -1 |             |
| WARNINGDISKSTATUS    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}  |                                                                |             |
| CRITICALMEMORYSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\} | %\{connection\_state\} !~ /^connected$/i \|\| %\{limit\} != -1 |             |
| WARNINGMEMORYSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}  |                                                                |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                   |  --check-disk-limit --verbose                                  |             |

</TabItem>
<TabItem value="Vm-Snapshot-Global" label="Vm-Snapshot-Global">

| Macro        | Description                                                                                                                            | Default value                                                               | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------|:---------:|
| FILTER       | VM hostname to check. If not set, we check all VMs                                                                                     |                                                                             |           |
| VMUUID       | Specify the VM's UUID                                                                                                                  |                                                                             |           |
| WARNING      | Warning threshold for snapshot's age                                                                                                   |                                                                             |           |
| CRITICAL     | Critical threshold for snapshot's age                                                                                                  |                                                                             |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --disconnect-status='ok' --nopoweredon-skip --check-consolidation --verbose |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--mode=snapshot-vm \
	--custommode=connector \
    --connector-hostname='localhost' \
    --connector-port='5700' \
    --container='vcenter01' \
    --vm-hostname='.*' \
    --filter \
    --filter-uuid='' \
    --warning='259200' \
    --critical='432000' \
	--disconnect-status='ok' \
	--nopoweredon-skip \
	--check-consolidation \
	--verbose
```

The expected command output is shown below:

```bash
CRITICAL: Snapshots for VM older than 432000 seconds: [TLS-LIN-001] | 'num_warning'=0;;;0; 'num_critical'=1;;;0;
'TLS-LIN-001' snapshot create time: 2020-07-20T12:19:16.246902Z [only base os image]
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
/usr/lib/centreon/plugins/centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                         | Linked service template                 |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|
| alarm-datacenter [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/alarmdatacenter.pm)]       | Not used in this Monitoring Connector   |
| alarm-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/alarmhost.pm)]                   | Not used in this Monitoring Connector   |
| countvm-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/countvmhost.pm)]               | Not used in this Monitoring Connector   |
| cpu-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpucluster.pm)]                 | Not used in this Monitoring Connector   |
| cpu-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpuhost.pm)]                       | Not used in this Monitoring Connector   |
| cpu-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpuvm.pm)]                           | Not used in this Monitoring Connector   |
| datastore-countvm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorecountvm.pm)]     | Not used in this Monitoring Connector   |
| datastore-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorehost.pm)]           | Not used in this Monitoring Connector   |
| datastore-io [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreio.pm)]               | Not used in this Monitoring Connector   |
| datastore-iops [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreiops.pm)]           | Not used in this Monitoring Connector   |
| datastore-snapshot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoresnapshot.pm)]   | Not used in this Monitoring Connector   |
| datastore-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreusage.pm)]         | Not used in this Monitoring Connector   |
| datastore-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorevm.pm)]               | Not used in this Monitoring Connector   |
| device-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/devicevm.pm)]                     | Not used in this Monitoring Connector   |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/discovery.pm)]                    | Not used in this Monitoring Connector   |
| getmap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/getmap.pm)]                          | Not used in this Monitoring Connector   |
| health-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/healthhost.pm)]                 | Not used in this Monitoring Connector   |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/licenses.pm)]                      | Not used in this Monitoring Connector   |
| limit-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/limitvm.pm)]                       | Virt-VMWare2-Vc6-Limit-Global-custom    |
| list-clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listclusters.pm)]             | Not used in this Monitoring Connector   |
| list-datacenters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listdatacenters.pm)]       | Not used in this Monitoring Connector   |
| list-datastores [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listdatastores.pm)]         | Not used in this Monitoring Connector   |
| list-nichost [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listnichost.pm)]               | Not used in this Monitoring Connector   |
| maintenance-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/maintenancehost.pm)]       | Not used in this Monitoring Connector   |
| memory-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/memoryhost.pm)]                 | Not used in this Monitoring Connector   |
| memory-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/memoryvm.pm)]                     | Not used in this Monitoring Connector   |
| net-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/nethost.pm)]                       | Not used in this Monitoring Connector   |
| net-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/netvm.pm)]                           | Not used in this Monitoring Connector   |
| service-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/servicehost.pm)]               | Not used in this Monitoring Connector   |
| snapshot-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/snapshotvm.pm)]                 | Virt-VMWare2-Vc6-Snapshot-Global-custom |
| stat-connectors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statconnectors.pm)]         | Not used in this Monitoring Connector   |
| status-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statuscluster.pm)]           | Not used in this Monitoring Connector   |
| status-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statushost.pm)]                 | Not used in this Monitoring Connector   |
| status-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statusvm.pm)]                     | Not used in this Monitoring Connector   |
| storage-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/storagehost.pm)]               | Not used in this Monitoring Connector   |
| swap-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/swaphost.pm)]                     | Not used in this Monitoring Connector   |
| swap-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/swapvm.pm)]                         | Not used in this Monitoring Connector   |
| thinprovisioning-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/thinprovisioningvm.pm)] | Not used in this Monitoring Connector   |
| time-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/timehost.pm)]                     | Not used in this Monitoring Connector   |
| tools-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/toolsvm.pm)]                       | Not used in this Monitoring Connector   |
| uptime-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/uptimehost.pm)]                 | Not used in this Monitoring Connector   |
| vmoperation-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/vmoperationcluster.pm)] | Not used in this Monitoring Connector   |
| vsan-cluster-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/vsanclusterusage.pm)]    | Not used in this Monitoring Connector   |

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
| --filter-perfdata                          | Keep only perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource. Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --connector-hostname                       | Connector hostname (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --connector-port                           | Connector port (default: 5700).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --container                                | Container to use (it depends on the connector's configuration).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --vsphere-address                          | Address of the vpshere/ESX instance to connect to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --vsphere-username                         | Username to use to connect to the vpshere/ESX instance (with --vsphere-address).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --vsphere-password                         | Password used to connect to the vpshere/ESX instance (with --vsphere-address).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  | Set global execution timeout (Default: 50)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --sampling-period                          | Choose the sampling period (can change the default sampling for counters). Should be not different from 300 or 20.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --time-shift                               | Can shift the time. With the following option you can average X counters values (default: 0).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --case-insensitive                         | Searches are case insensitive.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --unknown-connector-status                 | Set unknown threshold for connector status (Default: '%\{code\} \< 0 \|\| (%\{code\} \> 0 && %\{code\} \< 200)'). You can use the following variables: %\{code\}, %\{short_message\}, %\{extra_message\}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --warning-connector-status                 | Set warning threshold for connector status. You can use the following variables: %\{code\}, %\{short_message\}, %\{extra_message\}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --critical-connector-status                | Set critical threshold for connector status. You can use the following variables: %\{code\}, %\{short_message\}, %\{extra_message\}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Vm-Limit-Global" label="Vm-Limit-Global">

| Option                   | Description                                                                                                                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname            | Hostnames of the VMs to monitor. If not set, we check all VMs.                                                                                                                                                                           |
| --filter                 | VM hostname is a regexp.                                                                                                                                                                                                      |
| --filter-description     | Filter also virtual machines description (can be a regexp).                                                                                                                                                                   |
| --filter-os              | Filter also virtual machines OS name (can be a regexp).                                                                                                                                                                       |
| --display-description    | Display virtual machine description.                                                                                                                                                                                          |
| --check-disk-limit       | Check disk limits (since vsphere 5.0).                                                                                                                                                                                        |
| --warning-disk-status    | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %\{connection_state\}, %\{power_state\}, %\{limit\}                                                               |
| --critical-disk-status   | Define the conditions to match for the status to be CRITICAL (Default: '%\{connection_state\} !~ /^connected$/i \|\| %\{limit\} != -1'). You can use the following variables: %\{connection_state\}, %\{power_state\}, %\{limit\}    |
| --warning-cpu-status     | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %\{connection_state\}, %\{power_state\}, %\{limit\}                                                               |
| --critical-cpu-status    | Define the conditions to match for the status to be CRITICAL (Default: '%\{connection_state\} !~ /^connected$/i \|\| %\{limit\} != -1'). You can use the following variables: %\{connection_state\}, %\{power_state\}, %\{limit\}    |
| --warning-memory-status  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %\{connection_state\}, %\{power_state\}, %\{limit\}                                                               |
| --critical-memory-status | Define the conditions to match for the status to be CRITICAL (Default: '%\{connection_state\} !~ /^connected$/i \|\| %\{limit\} != -1'). You can use the following variables: %\{connection_state\}, %\{power_state\}, %\{limit\}    |

</TabItem>
<TabItem value="Vm-Snapshot-Global" label="Vm-Snapshot-Global">

| Option                | Description                                                                                                                                                   |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname         | Hostnames of the VMs to monitor. If not set, we check all VMs.                                                                                                           |
| --filter              | VM hostname is a regexp.                                                                                                                                      |
| --filter-description  | Filter also virtual machines description (can be a regexp).                                                                                                   |
| --filter-os           | Filter also virtual machines OS name (can be a regexp).                                                                                                       |
| --scope-datacenter    | Search in following datacenter(s) (can be a regexp).                                                                                                          |
| --scope-cluster       | Search in following cluster(s) (can be a regexp).                                                                                                             |
| --scope-host          | Search in following host(s) (can be a regexp).                                                                                                                |
| --display-description | Display virtual machine description.                                                                                                                          |
| --check-consolidation | Check if VM needs consolidation (since vsphere 5.0).                                                                                                          |
| --disconnect-status   | Status if VM disconnected (default: 'unknown').                                                                                                               |
| --nopoweredon-skip    | Skip check if VM is not poweredOn.                                                                                                                            |
| --empty-continue      | Ask to the connector that an empty response is ok.                                                                                                            |
| --unit                | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds   |
| --warning             | Warning threshold for snapshot's age.                                                                                                                         |
| --critical            | Critical threshold for snapshot's age.                                                                                                                        |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--mode=snapshot-vm \
	--help
```

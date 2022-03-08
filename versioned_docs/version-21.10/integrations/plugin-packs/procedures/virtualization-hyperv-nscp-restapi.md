---
id: virtualization-hyperv-nscp-restapi
title: Hyper-V NSCP Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack Hyper-V brings 2 host templates:
* Virt-Hyperv-Node-Nscp-Restapi-custom
* Virt-Hyperv-Scvmm-Nscp-Restapi-custom

It brings the following Service Templates:

| Service Alias             | Service Template                                   | Default | Discovery |
|:--------------------------|:---------------------------------------------------|:--------|:----------|
| Node-Integration-Service  | Virt-Hyperv-Node-Integration-Service-Nscp-Restapi  | X       |           |
| Node-Replication          | Virt-Hyperv-Node-Replication-Nscp-Restapi          | X       |           |
| Node-Snapshot             | Virt-Hyperv-Node-Snapshot-Nscp-Restapi             | X       |           |
| Node-Vm-Status            | Virt-Hyperv-Node-Vm-Status-Nscp-Restapi            | X       |           |
| Scvmm-Integration-Service | Virt-Hyperv-Scvmm-Integration-Service-Nscp-Restapi | X       |           |
| Scvmm-Snapshot            | Virt-Hyperv-Scvmm-Snapshot-Nscp-Restapi            | X       |           |
| Scvmm-Vm-Status           | Virt-Hyperv-Scvmm-Vm-Status-Nscp-Restapi           | X       |           |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

| Rule name                                       | Description                       |
| :---------------------------------------------- | :-------------------------------- |
| Virt-Hyperv-Nscp-Restapi-HostDiscovery-Scvmm-Vm | Discover the VMs bound to a SCVMM |

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Node-Integration-Service" label="Node-Integration-Service">

| Metric name    | Description                                                    | Unit  |
| :------------- | :------------------------------------------------------------- | :---- |
| global status  | Global status of virtual machines integration services         |       |
| service status | Primary and secondary status of each virtual machines services |       |

</TabItem>

<TabItem value="Node-Replication" label="Node-Replication">

| Metric name         | Description                                        | Unit  |
| :------------------ | :------------------------------------------------- | :---- |
| replication status  | Health replication status of each virtual machines |       |

</TabItem>

<TabItem value="Node-Snapshot" label="Node-Snapshot">

| Metric name                             | Description                                           | Unit  |
| :-------------------------------------- | :---------------------------------------------------- | :---- |
| vm.snapshot.time.last.execution.seconds | Last snapshot execution time of each virtual machines | s     |

</TabItem>

<TabItem value="Node-Vm-Status" label="Node-Vm-Status">

| Metric name  | Description                     | Unit  |
| :----------- | :------------------------------ | :---- |
| vm status    | Status of each virtual machines |       |

</TabItem>

<TabItem value="Scvmm-Integration-Service" label="Scvmm-Integration-Service">

| Metric name         | Description                                               | Unit  |
| :------------------ | :-------------------------------------------------------- | :---- |
| status              | Addition status of each virtual machines                  |       |
| osshutdown status   | Operating system shutdown status of each virtual machines |       |
| timesync status     | Time synchronization status of each virtual machines      |       |
| dataexchange status | Data exchange status of each virtual machines             |       |
| heartbeat status    | Heartbeat status of each virtual machines                 |       |
| backup status       | Backup status of each virtual machines                    |       |

</TabItem>

<TabItem value="Scvmm-Snapshot" label="Scvmm-Snapshot">

| Metric name                             | Description                                           | Unit  |
| :-------------------------------------- | :---------------------------------------------------- | :---- |
| vm.snapshot.time.last.execution.seconds | Last snapshot execution time of each virtual machines | s     |

</TabItem>

<TabItem value="Scvmm-Vm-Status" label="Scvmm-Vm-Status">

| Metric name  | Description                     | Unit  |
| :----------- | :------------------------------ | :---- |
| vm status    | Status of each virtual machines |       |

</TabItem>
</Tabs>

## Prerequisites

### NSClient Configuration

To use this Pack, NSClient must be installed on your Windows Hyper-V server.
Please download and install the last release of **Centreon-NSClient-xxx.exe**: https://github.com/centreon/centreon-nsclient-build/releases

By default, the username/password is **centreon/centreon**.

### Network flow

The target equipment must be reachable from the Centreon Poller on the TCP/8443 port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Hyper-V NSCP API** resources:

```bash
yum install centreon-plugin-Applications-Protocol-Nrpe
```

2. On the Centreon Web interface, install the **Hyper-V NSCP API** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Hyper-V NSCP API** resources:

```bash
yum install centreon-plugin-Applications-Protocol-Nrpe
```

2. Install the **Hyper-V NSCP API** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-virtualization-hyperv-nscp-restapi
```

3. On the Centreon Web interface, install the **Hyper-V NSCP API** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Add a new Host and apply one of following Host Templates

> Once the template applied, some Macros have to be configured.

<Tabs groupId="sync">
<TabItem value="Virt-Hyperv-Node-Nscp-Restapi-custom" label="Virt-Hyperv-Node-Nscp-Restapi-custom">

| Mandatory | Name                      | Description                                                                  |
| :-------- | :------------------------ | :--------------------------------------------------------------------------- |
|           | NSCPRESTAPIPORT           | Port used (Default: 8443)                                                    |
|           | NSCPRESTAPIPROTO          | Protocol used (Default: https)                                               |
|           | NSCPRESTAPIUSERNAME       | NSClient API username                                                        |
|           | NSCPRESTAPIPASSWORD       | NSClient API password                                                        |
|           | NSCPRESTAPILEGACYPASSWORD | NSClient API legacy authentication password                                  |
|           | NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to the command (eg. a --insecure)       |

</TabItem>
<TabItem value="Virt-Hyperv-Scvmm-Nscp-Restapi-custom" label="Virt-Hyperv-Scvmm-Nscp-Restapi-custom">

| Mandatory | Name                      | Description                                                                  |
| :-------- | :------------------------ | :--------------------------------------------------------------------------- |
|           | NSCPRESTAPIPORT           | Port used (Default: 8443)                                                    |
|           | NSCPRESTAPIPROTO          | Protocol used (Default: https)                                               |
|           | NSCPRESTAPIUSERNAME       | NSClient API username                                                        |
|           | NSCPRESTAPIPASSWORD       | NSClient API password                                                        |
|           | NSCPRESTAPILEGACYPASSWORD | NSClient API legacy authentication password                                  |
|           | NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to the command (eg. a --insecure)       |
| X         | SCVMMHOSTNAME             | SCVMM address (Default: localhost)                                           |
| X         | SCVMMUSERNAME             | SCVMM username                                                               |
| X         | SCVMMPASSWORD             | SCVMM password                                                               |
| X         | SCVMMPORT                 | SCVMM port used (Default: 8001)                                              |

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account and test the Plugin by running the following 
command to check NSClient configuration:

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --username=centreon \
    --password=centreon \
    --insecure \
    --http-backend=curl \
    --command=check_version
```

The expected command output is shown below:

```bash
0.5.2.41 2018-04-26
```

Check Hyper-V Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --username=centreon \
    --password=centreon \
    --insecure \
    --http-backend=curl \
    --command=check_centreon_plugins \
    --arg='apps::microsoft::hyperv::2012::local::plugin' \
    --arg='node-vm-status' \
    --arg='--filter-vm="" --verbose' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All virtual machines are ok 
VM 'vm1' status: Operating normally (state: Running, is clustered: 1)
VM 'vm2' status: Operating normally (state: Running, is clustered: 0)
VM 'vm3' status: Operating normally (state: Running, is clustered: 1)
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --username=centreon \
    --password=centreon \
    --insecure \
    --http-backend=curl \
    --command=check_centreon_plugins \
    --arg='apps::microsoft::hyperv::2012::local::plugin' \
    --arg='node-vm-status' \
    --arg='--help'
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --username=centreon \
    --password=centreon \
    --insecure \
    --http-backend=curl \
    --command=check_centreon_plugins \
    --arg='apps::microsoft::hyperv::2012::local::plugin' \
    --arg='xxx' \
    --arg='--list-mode'
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins.md)

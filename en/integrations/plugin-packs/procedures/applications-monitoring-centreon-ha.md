---
id: applications-monitoring-centreon-ha
title: Centreon-HA
---

## Overview

Centreon-HA is Centreon central server's high availability implementation. More information available [here](administration/centreon-ha/architecture.md).

This Plugin-Pack relies on two other Plugin-Packs:

* [Pacemaker](integrations/plugin-packs/procedures/applications-pacemaker-ssh.md)
* [Linux SNMP](integrations/plugin-packs/procedures/operatingsystems-linux-snmp.md)

It consequently uses both **SNMP** and **SSH** protocols to access a Centreon-HA cluster's nodes to get status and metrics related to the cluster's health.

## Plugin-Pack assets

### Monitored objects

* Centreon-HA cluster nodes
* Centreon-HA cluster's active member *via* the virtual IP address
* Third party server supporting the Quorum Device role (`corosync-qnetd` service)

### Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--PCS-Status-->

This template does not collect metrics, but provides the general state of the cluster:

* presence of "failed actions"
* resources state:
  * `php7`
  * `cbd_rrd`
  * `vip`
  * `http`
  * `gorgone`
  * `centreon_central_sync`
  * `cbd_central_broker`
  * `centengine`
  * `centreontrapd`
  * `snmptrapd`


<!--proc-corosync-->

| Metric name | Description                                         | Unit  |
|:------------|:----------------------------------------------------|:------|
| nbproc      | Number of processes matching the filter: `corosync` | Count |

<!--proc-pacemakerd-->

| Metric name | Description                                           | Unit  |
|:------------|:------------------------------------------------------|:------|
| nbproc      | Number of processes matching the filter: `pacemakerd` | Count |

<!--proc-pcsd-->

| Metric name | Description                                     | Unit  |
|:------------|:------------------------------------------------|:------|
| nbproc      | Number of processes matching the filter: `pcsd` | Count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Device Configuration

The configuration of SNMP on a Linux server is detailed in [the *Linux SNMP* Plugin-Pack's documentation page](/integrations/plugin-packs/procedures/operatingsystems-linux-snmp#net-snmp-server-configuration).

### Network flows

The Centreon Poller must be able to reach UDP/161 (SNMP) and TCP/22 (SSH) ports of the central nodes.

### SSH keys exchange

> NB : It is strongly recommended to monitor the cluster from an external poller rather than from the cluster's active node.

Open a `root` command-line session on:

* the poller that will monitor the cluster
* both of the cluster nodes

Then switch to `centreon-engine`'s bash environment on both nodes:

```
su - centreon-engine
```

Then run these commands on both nodes:

```bash
ssh-keygen -t ed25519 -a 100
```

We have generated a pair of keys on each server, and the `~/.ssh` directory. 

Run this command on the poller to display the user's public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

Once done, copy the content of the public key file displayed by `cat` and paste it to `~/.ssh/authorized_keys` (must be created) on both of the cluster's nodes and apply the correct file permissions (sill as `centreon-engine` user):

```
chmod 600 ~/.ssh/authorized_keys
```

The keys exchange must be validated by an initial connection from each node to the other in order to accept and register the peer node's SSH fingerprint (sill as `centreon-engine` user):

```
ssh <cluster-node-ip-address>
```

Then exit the `centreon-engine` session typing `exit` or `Ctrl-D`.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor the Centreon-HA cluster:

```bash
yum install centreon-plugin-Operatingsystems-Linux-Snmp centreon-plugin-Applications-Pacemaker-Ssh
```

2. On the Centreon Web interface, install the *Centreon-HA* Plugin-Pack through "Configuration > Plugin packs > Manager" page.

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor the Centreon-HA cluster:

```bash
yum install centreon-plugin-Operatingsystems-Linux-Snmp centreon-plugin-Applications-Pacemaker-Ssh
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-monitoring-centreon-ha
```

3. On the Centreon Web interface, install the *Centreon-HA* Plugin-Pack through "Configuration > Plugin packs > Manager" page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and apply the *App-Monitoring-Centreon-HA-Cluster-Node-custom* Host Template
* Fill the SNMP Version and Community fields according to the device's configuration

> When using SNMP v3, use the SNMPEXTRAOPTIONS Host Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for?

Once the prerequisites have been met and the Plugin has been installed, the monitoring can be performed from the poller, using the command-line interface, running this command **as user `centreon-engine`**:

```bash
/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \
    --plugin=apps::pacemaker::local::plugin \
	--mode=crm \
	--hostname=10.0.0.1 \
	--command='pcs' \
	--command-options='status --full' \
	--verbose
```

The output of this command should look like this:

```text
OK: Cluster is OK |
Resource 'php7' is started on node 'central-primary'
Resource 'php7' is started on node 'central-secondary'
Resource 'cbd_rrd' is started on node 'central-primary'
Resource 'cbd_rrd' is started on node 'central-secondary'
Resource 'vip' is started on node 'central-secondary'
Resource 'http' is started on node 'central-secondary'
Resource 'gorgone' is started on node 'central-secondary'
Resource 'centreon_central_sync' is started on node 'central-secondary'
Resource 'cbd_central_broker' is started on node 'central-secondary'
Resource 'centengine' is started on node 'central-secondary'
Resource 'centreontrapd' is started on node 'central-secondary'
Resource 'snmptrapd' is started on node 'central-secondary'
```

In this example, the Plugin queries the node at *10.0.0.1* to collect the overall state of the cluster and makes sure that all resources are started.

It will return a *WARNING* state if *failed actions* are displayed by the `pcs status --full` command. It will return a *CRITICAL* state if one or more resources are stopped.

For each mode, all the available options can be displayed by adding the `--help` option:

```bash
/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl --plugin=apps::pacemaker::local::plugin --mode=crm --help
```

The `--command='pcs'` and `--command-options='status --full'` overload the default command and options, using `pcs status --full` instead of `crm_mon -1 -r -f 2>&1`.

### I get this error message. What does it mean?

#### The authenticity of host 'x.x.x.x (x.x.x.x)' can't be established

> Warning: all the SSH and monitoring commands must be executed as `centreon-engine` on the poller.

The full message looks like:

```text
The authenticity of host 'x.x.x.x (x.x.x.x)' can't be established.
ECDSA key fingerprint is SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.
ECDSA key fingerprint is MD5:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.
Are you sure you want to continue connecting (yes/no)? UNKNOWN: Command too long to execute (timeout)...
```

If you are getting this error message, this means that you have not yet accepted the server's fingerprint.

To fix that issue, run:

```bash
ssh x.x.x.x
```

Then type 'yes' (without quotes) at this prompt:

```text
The authenticity of host 'x.x.x.x (x.x.x.x)' can't be established.
ECDSA key fingerprint is SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.
ECDSA key fingerprint is MD5:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.
Are you sure you want to continue connecting (yes/no)?
```

#### UNKNOWN: Command error: Permission denied, please try again

The full message looks like:

```text
UNKNOWN: Command error: Permission denied, please try again. - Permission denied, please try again. - Permission denied (publickey,gssapi-keyex,gssapi-with-mic,password).
```

If the Plugin returns this message, it means that `centreon-engine`'s public key has not correctly been added to the list of authorized keys on the server that we are trying to monitor.

First we have to make sure that this key (stored in `/var/lib/centreon-engine/.ssh/id_ed25519.pub`) is present in the file `/var/lib/centreon-engine/.ssh/authorized_keys`.

If the check point above is valid, then make sure that the `authorized_keys` file and `.ssh` directory permissions are correct. You can check the permissions with this command:

```bash
ls -al /var/lib/centreon-engine/.ssh
```

The permissions (first part of the line) should be the same as:

```text
total 20
drwx------  2 centreon-engine centreon-engine 4096 Sep  4 14:44 .
drwxr-xr-x. 5 centreon-engine centreon-engine 4096 Sep  4 14:44 ..
-rw-------  1 centreon-engine centreon-engine    0 Sep  4 14:44 authorized_keys
```

To fix any read/write/execute permission difference, just run:

```bash
chmod 700 /var/lib/centreon-engine/.ssh
chmod 600 /var/lib/centreon-engine/.ssh/authorized_keys
```




---
id: applications-netbackup-ssh
title: Symantec Netbackup SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack Netbackup SSH brings 1 host template:
* App-Netbackup-SSH-custom

It brings the following Service Templates:

| Service Alias  | Service Template                 | Default | Discovery |
|:---------------|:---------------------------------|:--------|:----------|
| Dedup-Status   | App-Netbackup-SSH-Dedup-Status   | X       |           |
| Drive-Cleaning | App-Netbackup-SSH-Drive-Cleaning | X       |           |
| Drive-Status   | App-Netbackup-SSH-Drive-Status   | X       |           |
| Job-Status     | App-Netbackup-SSH-Job-Status     | X       | X         |
| Tape-Usage     | App-Netbackup-SSH-Tape-Usage     | X       |           |

### Discovery rules

| Rule name                    | Description              |
|:-----------------------------|:-------------------------|
| App-Netbackup-Job-Per-Policy | Discovery Netbackup Jobs |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Dedup-Status" label="Dedup-Status">

| Metric name                                   | Unit |
|:----------------------------------------------|:-----|
| status                                        |      |
| disk_pool.deduplication.usage.percentage      | %    |

</TabItem>
<TabItem value="Drive-Cleaning" label="Drive-Cleaning">

| Metric name          | Description                        | Unit  |
|:---------------------|:-----------------------------------|:------|
| drives.unclean.count | %d drives needs a reset mount time | count |

</TabItem>
<TabItem value="Drive-Status" label="Drive-Status">

| Metric name | Description |
|:------------|:------------|
| status      |             |

</TabItem>
<TabItem value="Job-Status" label="Job-Status">

* Global

| Metric name         | Description     |
|:--------------------|:----------------|
| jobs.total.count    | total jobs : %s |

* Per *job*

| Metric name | Description |
|:------------|:------------|
| status      |             |

</TabItem>
<TabItem value="Tape-Usage" label="Tape-Usage">

| Metric name            | Description |
|:-----------------------|:------------|
| tape.usage.bytes       |             |
| tape.usage.percentage  |             |

</TabItem>
</Tabs>

## Prerequisites

### SSH configuration

A user is required to query the server by SSH. There are two possible ways to log in through SSH, either by 
exchanging the SSH key from **centreon-engine** user to the target server, or by
setting your unique user and password directly in the Host Macros.

The remote user must have enough privileges to execute system commands. 

## Setup

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT-100 Editions" label="Online IMP Licence & IT-100 Editions">

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor **Netbackup** ressources:

```bash
yum install centreon-plugin-Applications-Netbackup-Ssh
```

2. On the Centreon Web interface, install the **Netbackup SSH** Centreon Plugin Pack on the **Configuration > Plugin Packs** page

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Netbackup** ressources:

```bash
yum install centreon-plugin-Applications-Netbackup-Ssh
```

2. Install the **Netbackup SSH** Centreon Plugin Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-netbackup-ssh
```

3. On the Centreon Web interface, install the **Netbackup SSH** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your *Netbackup* server settings
* Select the **applications-netbackup-ssh-custom** template to apply to the Host
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.

> 3 SSH backends are available to connect to the remote server: *sshcli*, *plink* and *libssh* which are detailed below.

<Tabs groupId="sync">
<TabItem value="sshcli backend" label="sshcli backend">

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: `sshcli`                                                               |
| X           | SSHUSERNAME     | By default, it uses the user running process **centengine** on your Poller                  |
|             | SSHPASSWORD     | Cannot be used with backend. Only ssh key authentication                                    |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: `--ssh-priv-key=/user/.ssh/id_rsa`              |

> With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

</TabItem>
<TabItem value="plink backend" label="plink backend">

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: `plink`                                                                |
| X           | SSHUSERNAME     | By default, it uses the user running process **centengine** on your Poller                  |
|             | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                                     |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: `--ssh-priv-key=/user/.ssh/id_rsa`              |

> With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

</TabItem>
<TabItem value="libssh backend (default)" label="libssh backend (default)">

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: `libssh`                                                               |
| X           | SSHUSERNAME     | By default, it uses the user running process **centengine** on your Poller                  |
|             | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                                     |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: `--ssh-priv-key=/user/.ssh/id_rsa`              |

With that backend, you do not have to validate the target server fingerprint manually.

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin is installed, log into your Poller using the **centreon-engine** user account and run the following command:

```bash
/usr/lib/centreon/plugins/centreon_netbackup_ssh.pl \
    --plugin=apps::backup::netbackup::local::plugin \
    --mode=job-status \
    --hostname=10.30.2.81 \
    --ssh-username=centreon \
    --ssh-password='centreon-password' \
    --ssh-backend=sshcli \
    --critical-status='%{status} !~ /up/i' \ 
    --verbose
```

The above command gets the state of the Symantec Netbackup jobs (`--mode=job-status`).
It uses a SSH username _centreon_ (`--ssh-username=centreon`), a SSH password _centreon-password_ (`--ssh-password='centreon-password'`),
uses a SSH backend _sshcli_ (`--ssh-backend='sshcli'`) and it connects to the host _10.30.2.81_ (`--hostname=10.30.2.81`).

This command will return a CRITICAL state if one of the jobs isn't in the 'up' status.

All the options that can be used with this plugin can be found using the `--help` option:

```bash
/usr/lib/centreon/plugins/centreon_netbackup_ssh.pl \
    --plugin=apps::backup::netbackup::local::plugin \
    --mode=job-status \
    --help
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
on the [dedicated page](../tutorials/troubleshooting-plugins#ssh-and-cli-checks)
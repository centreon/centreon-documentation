---
id: operatingsystems-aix-ssh
title: AIX SSH
---

## Plugin Pack Assets

### Monitored Objects

The Plugin Pack includes monitoring the AIX system commands using SSH, such as:
* Command return
* Errpt messages
* Inodes
* Group volumes
* Processes
* Storage 

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Cmdreturn-->

| Metric name                               | Description                            | Unit  |
| :---------------------------------------- | :------------------------------------- | :---- |
| command.exit.code.count                   | Number of exit code return             | count |

<!--Inodes-->

| Metric name                               | Description                            | Unit  |
| :---------------------------------------- | :------------------------------------- | :---- |
| storage.inodes.usage.percentage           | Inodes usage in percentage             | %     |

<!--Process-->

| Metric name                               | Description                            | Unit  |
| :---------------------------------------- | :------------------------------------- | :---- |
| processes.alerts.count                    | Number of alerts processes             | count |
| processes.total.count                     | Total number of alerts processes       | count |

<!--Storage-->

| Metric name                               | Description                            | Unit  |
| :---------------------------------------- | :------------------------------------- | :---- |
| storage.space.usage.bytes                 | Storage space usage                    | B     |
| storage.space.free.bytes                  | Storage free space usage               | B     |
| storageresource.space.usage.percentage    | Storage percentage space usage         | %     |



<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

A user is required to query the OS AIX by SSH. There is no need for root or sudo privileges.
There are two possible ways to perform SSH check, either by exchanging the SSH key from centreon-engine to the target server, 
or by setting your unique user and password directly in the host macros.

<!--DOCUSAURUS_CODE_TABS-->

<!--SSH keys exchange-->

Add and generate a password for your user on the **Target sever**:

```bash
adduser ro_ssh_centreon
passwd ro_ssh_centreon
```

Switch to `centreon-engine`'s bash environment on your Central server and Poller :

```bash
su - centreon-engine
```

Then, copy this key on to the **Target server** with the following commands:

```bash
ssh-keygen -t ed25519 -a 100
ssh-copy-id -i .ssh/id_ed25519.pub ro_ssh_centreon@<IP_TARGET_SERVER>
```

<!--User/Password Authentication-->

After setting the Name, Alias, IP, and Host Template parameters, you need to set up in the macros described in the **Configuration** part below.

<!--END_DOCUSAURUS_CODE_TABS-->

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Operatingsystems-Aix-Local
```

2. On the Centreon Web interface in "Configuration > Plugin Packs > Manager", install the *AIX SSH* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Operatingsystems-Aix-Local
```

2. On the Centreon Central server, install the Centreon Plugin Pack from the RPM:

```bash
yum install centreon-pack-operatingsystems-aix-ssh
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *AIX SSH* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Add a new Host and apply the *OS-AIX-SSH-custom* Host Template

> 3 SSH backends are available to connect to the remote server: *sshcli*, *plink* and *libssh* which are detailed below.

<!--DOCUSAURUS_CODE_TABS-->

<!--sshcli backend-->

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```sshcli```                                                           |
| X           | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your Poller                |
|             | SSHPASSWORD     | Cannot be used with backend. Only ssh key authentication                                    |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

**Warning** With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

<!--plink backend-->

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```plink```                                                            |
| X           | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your Poller                |
|             | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                                     |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

**Warning** With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

<!--libssh backend (default)-->

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```libssh```                                                           |
| X           | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your Poller                |
|             | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                                     |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

With that backend, you do not have to validate the target server fingerprint manually.

<!--END_DOCUSAURUS_CODE_TABS-->

## How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your Poller using the *centreon-engine* user account and test by running the following command :

```bash
/usr/lib/centreon/plugins/centreon_aix_local.pl \
    --plugin=os::aix::local::plugin \
    --mode=lvsync \
    --hostname=10.30.2.81 \
    --ssh-username=centreon \
    --ssh-password='centreon-password' \
    --ssh-backend=sshcli \
    --filter-type='SVG' \
	  --critical-status='%{state} =~ /stale/i'\
    --verbose
```

The above command controls the state of volumes groups mirroring (```--mode=lvsync```).
It uses a SSH username _centreon_ (```--ssh-username=centreon```), a SSH password _centreon-password_ (```--ssh-password='centreon-password'```),
uses a SSH backend _libssh_ (```--ssh-backend='libssh'```) and it connects to the host _10.30.2.81_ (```--hostname=10.30.2.81```).

All the options that can be used with this plugin can be found over the ```--help``` options:

```bash
/usr/lib/centreon/plugins/centreon_aix_local.pl \
    --plugin=os::aix::local::plugin \
    --mode=lvsync \
    --help
```

## Troubleshooting

### I have that error message: ```UNKNOWN: Command error: Host key verification failed.```. What does it mean ?

It means you haven't manually validated the target server fingerprint with ```libssh``` or ```plink``` on the Centreon Poller.

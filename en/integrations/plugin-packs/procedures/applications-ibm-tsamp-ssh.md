---
id: applications-ibm-tsamp-ssh
title: IBM TSAMP SSH
---

## Pack Assets

### Monitored Objects

The Pack IBM Tivoli System Automation for Multiplatforms collects metrics for:
* Resource-groups

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                             | Description                                 |
| :------------------------------------ | :------------------------------------------ |
| App-Ibm-Tsamp-SSH-Resource-Group-Name | Discover resource groups and monitor status |

<!--END_DOCUSAURUS_CODE_TABS-->

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Resource-groups-->

| Metric name                           | Description                               | Unit  |
| :------------------------------------ | :---------------------------------------- | :---- |
| resource_groups.unknown.count         | Number of unknown resource groups         |       |
| resource_groups.offline.count         | Number of offline resource groups         |       |
| resource_groups.online.count          | Number of online resource groups          |       |
| resource_groups.failed_offline.count  | Number of failed offline resource groups  |       |
| resource_groups.stuck_online.count    | Number of stuck online resource groups    |       |
| resource_groups.pending_online.count  | Number of pending online resource groups  |       |
| resource_groups.pending_offline.count | Number of pending offline resource groups |       |
| resource_groups.ineligible.count      | Number of ineligible resource groups      |       |
| status resource group                 | Current state of the resource group       |       |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

The centreon-engine user performs a SSH connection to a remote system user. This user must have enough privileges to run ```lssam``` command.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Ibm-Tsamp-Ssh
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *IBM TSAMP SSH* Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Ibm-Tsamp-Ssh
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-applications-ibm-tsamp-ssh
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *IBM TSAMP SSH* Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and apply the *App-Ibm-Tsamp-SSH-custom* Host Template

> Once the template applied, some Macros have to be configured.
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

## How to test the Plugin and what are the main options for?

Once the Plugin installed, log into your Poller using the *centreon-engine* user account and test by running the following command :

```bash
/usr/lib/centreon/plugins/centreon_ibm_tsamp_ssh.pl \
    --plugin=apps::ibm::tsamp::local::plugin \
    --mode=resource-groups \
    --hostname=10.30.2.81 \
    --ssh-username=centreon \
    --ssh-password='centreon-password' \
    --ssh-backend=libssh \
    --verbose
```

Expected command output is shown below:

```bash
OK: All resource groups are ok | 'resource_groups.unknown.count'=0;;;0; 'resource_groups.offline.count'=0;;;0; 'resource_groups.online.count'=5;;;0; 'resource_groups.failed_offline.count'=0;;;0; 'resource_groups.stuck_online.count'=0;;;0; 'resource_groups.pending_online.count'=0;;;0; 'resource_groups.pending_offline.count'=0;;;0; 'resource_groups.ineligible.count'=0;;;0;
Resource group 'db2_db2inst1_db2inst1_AUDIT-rg' operational state: online [nominal: online]
Resource group 'db2_db2inst1_db2inst1_AUDIT2-rg' operational state: online [nominal: online]
Resource group 'db2_db2inst1_db2inst1_TCDB-rg' operational state: online [nominal: online]
Resource group 'db2_db2inst1_netdb101-v_0-rg' operational state: online [nominal: online]
Resource group 'db2_db2inst1_netdb102-v_0-rg' operational state: online [nominal: online]
```

The command above gets resource groups statuses (```--mode=resource-groups```).

It uses a SSH username _centreon_ (```--ssh-username=centreon```), a SSH password _centreon-password_ (```--ssh-password='centreon-password'```),
uses a SSH backend _libssh_ (```--ssh-backend='libssh'```) and it connects to the host _10.30.2.81_ (```--hostname=10.30.2.81```)
on the SSH default port _22_ (```--ssh-port=22```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ibm_tsamp_ssh.pl \
    --plugin=apps::ibm::tsamp::local::plugin \
    --mode=resource-groups \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins.html#ssh-and-cli-checks)

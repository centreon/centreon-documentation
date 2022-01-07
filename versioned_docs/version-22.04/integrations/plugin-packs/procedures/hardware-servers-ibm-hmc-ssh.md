---
id: hardware-servers-ibm-hmc-ssh
title: IBM HMC SSH
---

## Plugin-Pack Assets

### Monitored Objects

The Plugin-Pack IBM HMC SSH collects metrics for:
* Hardware errors
* Led status

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Hardware-errors-->

No metrics.

<!--Led-status-->

| Metric name                     | Description                                         | Unit |
| :------------------------------ | :-------------------------------------------------- | :--- |
| physical status                 | Physical system attention led status                |      |
| virtuallpar status              | Logical partition system attention led status       |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

The centreon-engine user performs a SSH connection to a remote system user. This user must have enough privileges to run ```lssvcevents``` and ```lsled``` commands.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Servers-Ibm-Hmc-Ssh
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *IBM HMC SSH* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Servers-Ibm-Hmc-Ssh
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-hardware-servers-ibm-hmc-ssh
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *IBM HMC SSH* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Add a new Host and apply the *HW-Server-IBM-Hmc-SSH-custom* Host Template

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

## FAQ

### How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_ibm_hmc_ssh.pl \
    --plugin=hardware::server::ibm::hmc::ssh::plugin \
    --mode=led-status \
    --hostname=10.30.2.114 \
    --ssh-username=centreon \
    --ssh-password='centreon-password' \
    --ssh-backend=libssh \
    --verbose
```

Expected command output is shown below:

```bash
OK: System 'Server-8203-E4Z-SNE6DFXA5' physical led state : off - All virtual partition status are ok |
System 'Server-8203-E4Z-SNE6DFXA5' physical led state : off
Virtual partition 'Server-8203-E4Z-SNE6DFXA5:LPAR1' led state : off
Virtual partition 'Server-8203-E4Z-SNE6DFXA5:LPAR2' led state : off
```

The command above gets the led status of IBM HMC (```--mode=led-status```).
It uses a SSH username _centreon_ (```--ssh-username=centreon```), a SSH password _centreon-password_ (```--ssh-password='centreon-password'```),
uses a SSH backend _libssh_ (```--ssh-backend='libssh'```) and it connects to the host _10.30.2.114_ (```--hostname=10.30.2.114```)
on the SSH default port _22_ (```--ssh-port=22```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ibm_hmc_ssh.pl \
    --plugin=hardware::server::ibm::hmc::ssh::plugin \
    --mode=led-status \
    --help
```

## Troubleshooting

### I have that error message: ```UNKNOWN: Command error: Host key verification failed.```. What does it mean ?

It means you haven't manually validated the target server fingerprint with ```ssh``` or ```plink``` on the Centreon Poller.

---
id: applications-oracle-goldengate-ssh
title: Oracle GoldenGate SSH
---

## Plugin-Pack Assets

### Monitored Objects

The Plugin-Pack includes monitoring of status and lags of Oracle GG Processes thanks to GGSCI command-line utility. 

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Processes-->

| Metric name                                   | Description                     | Unit |
| :-------------------------------------------- | :------------------------------ | :--- |
| process status                                | Process status                  |      |
| *processname*#process.lag.seconds             | processus lag at checkpoint     |      |
| *processname*#process.time.checkpoint.seconds | processus time since checkpoint |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

The centreon-engine user performs a SSH connection to a remote system user. This user must have enough privileges to run ```ggsci``` command.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Oracle-Goldengate-Ssh
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Oracle GoldenGate SSH* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Oracle-Goldengate-Ssh
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-applications-oracle-goldengate-ssh
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Oracle GoldenGate SSH* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Add a new Host and apply the *App-Oracle-Goldengate-SSH-custom* Host Template

> Once the template applied, some Macros have to be configured:

| Mandatory | Name               | Description                                                                |
| :-------- | :----------------- | :------------------------------------------------------------------------- |
|           | GGSHOME            | Directory of ```ggsci```                                                   |
|           | ORACLEHOME         | Oracle home directory                                                      |

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

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your Poller using the *centreon-engine* user account and test by running the following command :

```bash
/usr/lib/centreon/plugins/centreon_oracle_gg_ssh.pl \
    --plugin=apps::oracle::gg::local::plugin \
    --mode=processes \
    --hostname=10.30.2.81 \
    --ssh-username=centreon \
    --ssh-password='centreon-password' \
    --ssh-backend=libssh \
    --filter-type=REPLICAT \
    --verbose
```

Which output something similar to:

```bash
CRITICAL: Process 'REPLICAT:RP_TS02' status: ABENDED | 'REPLICAT:RP_TSO1#process.lag.seconds'=0s;;;0; 'REPLICAT:RP_TSO1#process.time.checkpoint.seconds'=4s;;;0; 'REPLICAT:RP_TS02#process.lag.seconds'=172472s;;;0; 'REPLICAT:RP_TS02#process.time.checkpoint.seconds'=1462s;;;0; 'REPLICAT:RP_TS03#process.lag.seconds'=0s;;;0; 'REPLICAT:RP_TS03#process.time.checkpoint.seconds'=4s;;;0;
Process 'REPLICAT:RP_TSO1' status: RUNNING, lag: 0, time since checkpoint: 4s
Process 'REPLICAT:RP_TS02' status: ABENDED, lag: 1d 23h 54m 32s, time since checkpoint: 24m 22s
Process 'REPLICAT:RP_TS03' status: RUNNING, lag: 0, time since checkpoint: 4s
```

The command above gets the status of Oracle GoldenGate processes (```--mode=processes```).
It uses a SSH username _centreon_ (```--ssh-username=centreon```), a SSH password _centreon-password_ (```--ssh-password='centreon-password'```),
uses a SSH backend _libssh_ (```--ssh-backend='libssh'```) and it connects to the host _10.30.2.81_ (```--hostname=10.30.2.81```)
on the SSH default port _22_ (```--ssh-port=22```).

All the options that can be used with this plugin can be found over the ```--help``` options:

```bash
/usr/lib/centreon/plugins/centreon_oracle_gg_ssh.pl \
    --plugin=apps::oracle::gg::local::plugin \
    --mode=processes \
    --help
```

### I have that error message: ```UNKNOWN: Command error: Host key verification failed.```. What does it mean ?

It means you haven't manually validated the target server fingerprint with ```ssh``` or ```plink``` on the Centreon Poller.

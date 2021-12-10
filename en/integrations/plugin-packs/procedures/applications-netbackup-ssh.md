---
id: applications-netbackup-ssh
title: Netbackup SSH
---

## Plugin Pack Assets

### Monitored Objects

The Centreon Plugin Pack includes monitoring of job status, tape usage, drive cleaning, and drive status using system commands.

### Discovery Rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                                 | Description                                 |
| :---------------------------------------- | :------------------------------------------ |
| App-Netbackup-Job-Per-Policy              | Discover Job  per policy                    |

<!--END_DOCUSAURUS_CODE_TABS-->

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Dedup-status -->

| Metric name                               | Description                            | Unit |
| :---------------------------------------- | :------------------------------------- | :--- |
| status                                    | Status of dedup                        |      |
| usage                                     | Dedup usage                            |  %   |

<!--Drive-cleaning-->

| Metric name                               | Description                         | Unit  |
| :---------------------------------------- | :---------------------------------- | :---  |
| cleaning                                  | Total number of drive cleaning      | count |

<!--Drive-status-->

| Metric name                               | Description                                                       | Unit  |
| :---------------------------------------- | :---------------------------------------------------------------- | :---- |
| status                                    | Status of drive            	                                    |       |

<!--Job-status-->

| Metric name                               | Description                            | Unit  |
| :---------------------------------------- | :------------------------------------- | :---- |
| status                                    | Status of jobs                         |       |
| total                                     | Total of jobs                          | count |
| frozen                                    | Jobs in frozen state                   |       |

<!--Tape-usage-->

| Metric name                               | Description                                             | Unit  |
| :---------------------------------------- | :------------------------------------------------------ | :---  |
| used                                      | Usage tape on the deivce                                |   %   |
| free                                      | Free tape on the device                                 |   %   |
| usage                                     | Total of tape usage                                     | count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

In order to work, the Plugin requires an SSH connection between the Poller and the Netbackup server. 
The remote user must have enough privileges to execute system commands. 

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Netbackup-Ssh
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Netbackup SSH* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Netbackup-Ssh
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-applications-netbackup-ssh
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Netbackup SSH* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host Configuration

* Add a new Host and apply the *App-Netbackup-SSH* Host Template

> Three SSH backends are available to connect to the remote server: *sshcli*, *plink* and *libssh* which are detailed below.

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

Once the Plugin installed, log into your Poller using the *centreon-engine* user account and run the following command :

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

The above command gets the state of the Symantec Netbackup jobs (```--mode=job-status```).
It uses a SSH username _centreon_ (```--ssh-username=centreon```), a SSH password _centreon-password_ (```--ssh-password='centreon-password'```),
uses a SSH backend _sshcli_ (```--ssh-backend='sshcli'```) and it connects to the host _10.30.2.81_ (```--hostname=10.30.2.81```).

All the options that can be used with this plugin can be found over the ```--help``` options:

```bash
/usr/lib/centreon/plugins/centreon_netbackup_ssh.pl \
    --plugin=apps::backup::netbackup::local::plugin \
    --mode=job-status \
    --help
```

## Troubleshooting

### I have that error message: ```UNKNOWN: Command error: Host key verification failed.```. What does it mean ?

It means you haven't manually validated the target server fingerprint with ```libssh``` or ```plink``` on the Centreon Poller.

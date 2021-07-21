---
id: applications-antivirus-clamav-ssh
title: Antivirus ClamAV
---

## Pack assets

### Monitored objects

* Engine version
* main.cvd version
* daily.cvd version

## Prerequisites

### SSH configuration

A user is required to query the ClamAV server by SSH. There is no need for root 
or sudo privileges. There are two possible ways to perform SSH check, either by 
exchanging the SSH key from `centreon-engine` user to the target server, 
or by setting your unique user and password directly in the Host Macros.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *ClamAV* ressources:

```bash
yum install centreon-plugin-Applications-Clamav-Ssh
```

2. On the Centreon Web interface, install the *Antivirus ClamAV* Centreon Plugin Pack on the `Configuration > Plugin Packs` page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *ClamAV* ressources:

```bash
yum install centreon-plugin-Applications-Clamav-Ssh
```

2. Install the *Antivirus ClamAV* Centreon Plugin Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-applications-antivirus-clamav-ssh
```

3. On the Centreon Web interface, install the *Antivirus ClamAV* Centreon Plugin Pack on the `Configuration > Plugin Packs` page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through `Configuration > Hosts`.
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your *Antivirus ClamAV* Server settings
* Select the *Applications-Antivirus-Clamav-Ssh-custom* template to apply to the Host
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.

| Mandatory | Name         | Description                                                                        |
|:----------|:-------------|:-----------------------------------------------------------------------------------|
|           | EXTRAOPTIONS | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for ? 

Once the plugin installed, log into your Centreon Poller CLI using the 
*centreon-engine* user account and test the Plugin by running the following 
command:

```bash
 /usr/lib/centreon/plugins//centreon_clamav_ssh.pl \
    --plugin=apps::antivirus::clamav::local::plugin \
    --mode=update-status \
    --hostname=10.0.0.1 \
    --remote \
    --critical-maindb-status='%{last_maindb_version} ne %{current_maindb_version}' \
    --use-new-perfdata
 ```

 Expected command output is shown below:

```bash
OK : clamav engine version '0.103.2/0.103.2' main.cvd version '60/60', last update 1d 3h 46m 40s daily.cvd version '25839/25839', last update 1d 3h 46m 40s | 
 ```

This command would trigger a CRITICAL alarm if the last *maindb version* is not
equal to the current *maindb version*
(`-critical-maindb-status='%{last_maindb_version} ne %{current_maindb_version}'`).

All available options for a given mode can be displayed by adding the 
`--help` parameter to thecommand:

```bash
/usr/lib/centreon/plugins//centreon_clamav_ssh.pl  \
    --plugin=apps::antivirus::clamav::local::plugin  \
    --mode=update-status  \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to thecommand:

```bash
 /usr/lib/centreon/plugins//centreon_clamav_ssh.pl  \
    --plugin=apps::antivirus::clamav::local::plugin  \
    --list-mode
```

### Troubleshooting

#### `UNKNOWN: Command error: Host key verification failed.`

This error means you haven't manually validated the target server fingerprint 
with `ssh` or `plink` on the Centreon poller.

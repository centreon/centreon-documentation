---
id: applications-hddtemp-tcp
title: Hddtemp TCP
---

## Pack Assets

### Templates

The Centreon Plugin Pack Hddtemp TCP brings 1 host template:
* App-Hddtemp-Tcp-custom

It brings the following Service Template:

| Service Alias | Service Template             | Default |
|:--------------|:-----------------------------|:--------|
| Temperatures  | App-Hddtemp-Temperatures-Tcp | X       |

### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Temperatures-->

| Metric Name                              | Unit                    |
|:-----------------------------------------|:------------------------|
| status                                   | string                  |
| drive_name#drive.temperature.<temp_unit> | celsius or fahrenheit   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To use this Pack, install the Hddtemp utility on your Linux server. Most of the 
distributions make it available as a standard package. 

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Hddtemp** resources:

```bash
yum install centreon-plugin-Applications-Hddtemp
```

2. On the Centreon Web interface, install the **Hddtemp TCP** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

<!--Offline License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Hddtemp** resources:

```bash
yum install centreon-plugin-Applications-Hddtemp
```

2. Install the **Hddtemp TCP** Centreon Plugin Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-applications-hddtemp-tcp
```

3. On the Centreon Web interface, install the **Hddtemp TCP** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Hddtemp** server settings
* Select the **App-Hddtemp-Tcp** template to apply to the Host
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name           | Description                                                                         |
|:----------|:---------------|:------------------------------------------------------------------------------------|
|           | HDDTEMPTCPPORT | HDD Listening port (Default: '7634')                                                |
|           | EXTRAOPTIONS   | Any extra option you may want to add to every command\_line (eg. a --verbose flag)' |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins//centreon_hddtemp.pl \
    --plugin=apps::hddtemp::plugin \
    --mode=temperatures \
    --custommode=tcp \
    --hostname='10.0.0.1' \
    --port=7634 \
    --filter-name='' \
    --unknown-status='' \
    --warning-status='' \
    --critical-status='%{status} !~ /ok/i' \
    --warning-temperature='30' \
    --critical-temperature='50' \
    --verbose \
    --use-new-perfdata 
```

The expected command output is shown below:

```bash
OK: Drive '/dev/sda' temperature: 24 C status: ok | '/dev/sda#drive.temperature.celsius'=24C;0:30;0:50;;
```

This command would trigger a WARNING alarm if the disk's temperature was reported as over 
30° (`---warning-temperature='30'`). 

A CRITICAL alarm would be triggered if the temperature was reported as over 50° or the status 
wasn't equal to 'ok' (`--critical-temperature='50' --critical-status='%{status} !~ /ok/i'`).

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_hddtemp.pl \
    --plugin=apps::hddtemp::plugin \
    --mode=temperatures \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_hddtemp.pl \
    --plugin=apps::hddtemp::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins.html)
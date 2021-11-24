---
id: applications-php-fpm-web
title: PHP FPM
---

## Pack Assets

### Templates

The Centreon Plugin Pack PHP FPM brings 1 host template :
* App-Php-Fpm-Web-custom

It brings the following Service Template:

| Service Alias | Service Template      | Default |
|:--------------|:----------------------|:--------|
| Php-Fpm-Usage | App-Php-Fpm-Usage-Web | X       |

### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Php-Fpm-Usage-->

| Metric name                | Description                               | Unit  |
|:---------------------------|:------------------------------------------|:------|
| fpm.processes.active.count | Number of active processes                | count |
| fpm.processes.idle.count   | Number of idle processes                  | count |
| fpm.queue.listen.count     | Number of connections in the listen queue | count |
| fpm.requests.persecond     | Number of requests per seconds            | /s    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

The target PHP FPM Web page must be reachable from the Centreon Poller on the 
specified port in the *PHPFPMWEBPORT* Host Macro. More information in the 
[Configuration](#Configuration) section.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor your *PHP FPM* ressources:

```bash
yum install centreon-plugin-Applications-Php-Fpm-Web
```

2. On the Centreon Web interface, install the *PHP FPM* Centreon Plugin Pack on the **Configuration > Plugin Packs** page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor your *PHP FPM* ressources:

```bash
yum install centreon-plugin-Applications-Php-Fpm-Web
```

2. Install the *PHP FPM* Centreon Plugin Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-applications-php-fpm-web
```

3. On the Centreon Web interface, install the *PHP FPM* Centreon Plugin Pack on the **Configuration > Plugin Packs** page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your *PHP FPM* server settings
* Select the *Applications-Php-Fpm-Web-custom* template to apply to the Host
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.

| Mandatory | Name             | Description                                                                                     |
|:----------|:-----------------|:------------------------------------------------------------------------------------------------|
|           | PHPFPMWEBPORT    | (Default: '80')                                                                                 |
|           | PHPFPMWEBPROTO   | (Default: 'http')                                                                               |
|           | PHPFPMWEBURLPATH | (Default: '/fpm-status')                                                                        |
|           | EXTRAOPTIONS     | (Default: 'Any extra option you may want to add to every command\_line (eg. a --verbose flag)') |

## How to check in the CLI that the configuration is OK and what are the main options for ? 

Once the plugin installed, log into your Centreon Poller CLI using the 
*centreon-engine* user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins//centreon_php_fpm_web.pl \
    --plugin=apps::php::fpm::web::plugin \
    --mode=usage \
    --hostname=10.0.0.1 \
    --proto='http' \
    --port='80' \
    --urlpath='/fpm-status' \
    --warning-active-processes='30' \
    --critical-active-processes='35' \
    --warning-idle-processes='' \
    --critical-idle-processes='' \
    --warning-listen-queue='' \
    --critical-listen-queue='' \
    --warning-requests='' \
    --critical-requests='' \
    --use-new-perfdata 
```

Expected command output is shown below:

```bash
OK : active processes: 8 (40%) idle processes: 12 (60%) listen queue: 2 requests: 90/s | 'fpm.processes.active.count'=8;30;35;0; 'fpm.processes.idle.count'=12;;;0; 'fpm.queue.listen.count'=2;;;0; 'fpm.requests.persecond'=90/s;;;0; 
```

This command would trigger a WARNING alarm if the number of active processes is
reported as over 30 (`--warning-active-processes='30'`) and a CRITICAL alarm if over 
35 (`--critical-active-processes='35'`).

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_php_fpm_web.pl \
    --plugin=apps::php::fpm::web::plugin \
    --mode=usage \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_php_fpm_web.pl \
    --plugin=apps::php::fpm::web::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugin
in the [dedicated page](../tutorials/troubleshooting-plugins.html)
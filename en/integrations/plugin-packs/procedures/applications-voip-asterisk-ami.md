---
id: applications-voip-asterisk-ami
title: Asterisk VoIP Server
---

## Pack Assets

### Templates

The Centreon Plugin Pack Asterisk VoIP Server brings 1 host template:
* App-VoIP-Asterisk-AMI-custom

It brings the following Service Templates:

| Service Alias   | Service Template                      | Service Description                | Default |
|:----------------|:--------------------------------------|:-----------------------------------|:--------|
| Channel-Usage   | App-Voip-Asterisk-AMI-Channel-Usage   | Check number of calls and channels | X       |
| Dahdi-Status    | App-Voip-Asterisk-AMI-Dahdi-Status    | Check status of dahdi lines        |         |
| Sip-Peers-Usage | App-Voip-Asterisk-AMI-Sip-Peers-Usage | Check SIP peers usage              | X       |

### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Channel-Usage-->

| Metric Name           | Unit  |
|:----------------------|:------|
| calls.active.count    | count |
| calls.processed.count | count |
| channels.active.count | count |
| extcalls.active.count | count |

<!--Dahdi-Status-->

| Metric Name | Unit   |
|:------------|:-------|
| status      | string |

<!--Sip-Peers-Usage-->

| Metric Name                       | Unit   |
|:----------------------------------|:-------|
| sip.peers.monitor.offline.count   | count  |
| sip.peers.monitor.online.count    | count  |
| sip.peers.total.count             | count  |
| sip.peers.unmonitor.offline.count | count  |
| sip.peers.unmonitor.online.count  | count  |
| status                            | string |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Asterisk Manager Interface (AMI)

In order to collect the necessary metrics and status, an user accounts with the 
"read" permission need to be configured in the **/etc/asterisk/manager.conf file**.
More information in the [official documentation](https://wiki.asterisk.org/wiki/pages/viewpage.action?pageId=4817239).

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *Asterisk* resources:

```bash
yum install centreon-plugin-Applications-Voip-Asterisk-Ami
```

2. On the Centreon Web interface, install the **Asterisk VoIP Server** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

<!--Offline License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *Asterisk* resources:

```bash
yum install centreon-plugin-Applications-Voip-Asterisk-Ami
```

2. Install the **Asterisk VoIP Server** Centreon Plugin Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-applications-voip-asterisk-ami
```

3. On the Centreon Web interface, install the **Asterisk VoIP Server** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your *Asterisk* server settings.
* Select the *App-VoIP-Asterisk-AMI-custom* template to apply to the Host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro                   | Description                                                                        |
|:------------|:------------------------|:-----------------------------------------------------------------------------------|
|             | ASTERISKAMIEXTRAOPTIONS | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |
| X           | ASTERISKAMIPASSWORD     | AMI user password                                                                  |
|             | ASTERISKAMIPORT         | AMI port                                                                           |
| X           | ASTERISKAMIUSERNAME     | AMI user                                                                           |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account (`su - centreon-engine`) and test the Plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_asterisk_ami.pl \
    --plugin=apps::voip::asterisk::ami::plugin \
    --mode=channel-usage \
    --ami-hostname='10.0.0.1' \
    --ami-port='' \
    --ami-username='' \
    --ami-password='' \
    --warning-channels-active='' \
    --critical-channels-active='' \
    --warning-calls-active='100' \
    --critical-calls-active='200' \
    --warning-calls-count='' \
    --critical-calls-count='' \
    --warning-extcalls-active='' \
    --critical-extcalls-active='' \
    --verbose \
    --use-new-perfdata 
```

The expected command output is shown below:

```bash
OK: channels active: 54 calls active: 73 external calls active: 5 calls count: 746 | 'channels.active.count'=54;;;0; 'calls.active.count'=73;0:100;0:200;0; 'extcalls.active.count'=5;;;0; 'calls.processed.count'=746;;;0;
```

This command would trigger a WARNING alarm if the number of active calls is 
reported as over 100 (`--warning-calls-active='100'`) and a CRITICAL alarm if 
over 200than 50% (`--critical-calls-active='200'`).

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_asterisk_ami.pl \
    --plugin=apps::voip::asterisk::ami::plugin \
    --mode=channel-usage \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_asterisk_ami.pl \
    --plugin=apps::voip::asterisk::ami::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins.html)
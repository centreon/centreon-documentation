---
id: applications-ibmmq-mqi
title: IBM MQ MQI
---

## Pack Assets

### Templates

The Centreon Plugin Pack IBM MQ MQI brings 1 host template:
* App-Ibmmq-Mqi-custom

It brings the following Service Templates:

| Service Alias | Service Template            | Default |
|:--------------|:----------------------------|:--------|
| Channels      | App-Ibmmq-Channels-Mqi      | X       |
| Queue-Manager | App-Ibmmq-Queue-Manager-Mqi | X       |
| Queues        | App-Ibmmq-Queues-Mqi        | X       |

### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Channels-->

| Metric Name                       | Unit   |
|:----------------------------------|:-------|
| status                            | string |
| channel.traffic.in.bitspersecond  | b/s    |
| channel.traffic.out.bitspersecond | b/s    |

<!--Queue-Manager-->

| Metric Name                    | Unit   |
|:-------------------------------|:-------|
| queuemanager.connections.count | count  |
| status                         | string |

<!--Queues-->

| Metric Name                   | Unit  |
|:------------------------------|:------|
| queue.connections.input.count | count |
| queue.message.oldest.seconds  |       |
| queue.messages.depth.count    | count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To take advantage of this Monitoring Pack, you must deploy the Linux MQ client 
library on the Poller expected to monitor IBM MQ servers. Please refer to the 
official IBM documentation:
* https://www.ibm.com/docs/en/ibm-mq/8.0?topic=server-installing-mq-linux. 

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **IBM MQ MQI** resources:

```bash
yum install centreon-plugin-Applications-Ibmmq-Mqi
```

2. On the Centreon Web interface, install the **IBM MQ MQI** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

<!--Offline License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **IBM MQ MQI** resources:

```bash
yum install centreon-plugin-Applications-Ibmmq-Mqi
```

2. Install the **IBM MQ MQI** Centreon Plugin Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-applications-ibmmq-mqi
```

3. On the Centreon Web interface, install the **IBM MQ MQI** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **IBM MQ MQI** server settings
* Select the **App-Ibmmq-Mqi-custom** template to apply to the Host
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name                 | Description                                                                         |
|:----------|:---------------------|:------------------------------------------------------------------------------------|
|           | IBMMQMQIEXTRAOPTIONS | Specify a username which will run the command (Default: '--runas=centreon')         |
|           | IBMMQMQIPORT         | IBM MQ Listening port (Default: '1414')                                             |
|           | EXTRAOPTIONS         | Any extra option you may want to add to every command\_line (eg. a --verbose flag)) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins//centreon_ibmmq_mqi.pl \
    --plugin=apps::mq::ibmmq::mqi::plugin \
    --mode=queues \
    --hostname='10.0.0.1' \
    --channel='' \
    --port='1414' \
    --runas=centreon \
    --filter-name='^(?!(SYSTEM|PERL.COMMAND))' \
    --warning-connections-input='' \
    --critical-connections-input='' \
    --warning-messages-depth='200' \
    --critical-messages-depth='' \
    --warning-message-oldest='' \
    --critical-message-oldest='3600' \
    --verbose \
    --use-new-perfdata 
```

The expected command output is shown below:

```bash
WARNING: current input connections: 9000 | 'queue.connections.input.count'=9000;200;;0; 'queue.messages.depth.count'=20;200;;0; 'queue.message.oldest.seconds'=150;;3600;; 
```

This command triggers a WARNING because the size of the message queur is greater than 200 which is the warning threshold (`--warning-messages-depth='200'`).

It would trigger a CRITICAL alarm if a message was in a queue for more than one hour / 3600 seconds (`--critical-message-oldest='3600'`).

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_ibmmq_mqi.pl \
    --plugin=apps::mq::ibmmq::mqi::plugin \
    --mode=queues \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_ibmmq_mqi.pl \
    --plugin=apps::mq::ibmmq::mqi::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins.html)
---
id: applications-php-apc-web
title: PHP APC
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack PHP APC brings 1 host template :
* App-Php-Apc-Web-custom

It brings the following Service Templates:

| Service Alias      | Service Template           | Default |
|:-------------------|:---------------------------|:--------|
| Php-Apc-File-Cache | App-Php-Apc-File-Cache-Web | X       |
| Php-Apc-Memory     | App-Php-Apc-Memory-Web     | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Php-Apc-File-Cache" label="Php-Apc-File-Cache">

| Metric name                      | Description                     | Unit |
|:---------------------------------|:--------------------------------|:-----|
| filecache.requests.persecond     | Global request rate per seconds | r/s  |
| filecache.requests.now.persecond | Request Rate per seconds        | r/s  |
| filecache.hits.persecond         | Global hit rate per seconds     | r/s  |
| filecache.hits.now.persecond     | Hit rate per seconds            | r/s  |
| filecache.misses.persecond       | Global miss rate per seconds    | r/s  |
| filecache.misses.now.persecond   | Miss rate per seconds           | r/s  |
| filecache.hits.percentage        | GLobal hit ratio                | %    |
| filecache.hits.now.percentage    | Hit ratio                       | %    |

</TabItem>
<TabItem value="Php-Apc-Memory" label="Php-Apc-Memory">

| Metric name                     | Description                   | Unit |
|:--------------------------------|:------------------------------|:-----|
| memory.usage.bytes              | Memory usage in bytes         | B    |
| memory.fragmentation.percentage | Memory Fragmentation          | %    |

</TabItem>
</Tabs>

## Prerequisites

The target PHP APC Web page must be reachable from the Centreon Poller on the 
specified port in the *PHPAPCWEBPORT* Host Macro. More information in the 
[Configuration](#Configuration) section.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor your *PHP APC* ressources:

```bash
yum install centreon-plugin-Applications-Php-Apc-Web
```

2. On the Centreon Web interface, install the *PHP APC* Centreon Plugin Pack on the **Configuration > Plugin Packs** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor your *PHP APC* ressources:

```bash
yum install centreon-plugin-Applications-Php-Apc-Web
```

2. Install the *PHP APC* Centreon Plugin Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-php-apc-web
```

3. On the Centreon Web interface, install the *PHP APC* Centreon Plugin Pack on the **Configuration > Plugin Packs** page

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your *PHP APC* server settings
* Select the *Applications-Php-Apc-Web-custom* template to apply to the Host
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.

| Mandatory | Name             | Description                                                                                     |
|:----------|:-----------------|:------------------------------------------------------------------------------------------------|
|           | PHPAPCWEBPORT    | (Default: '80')                                                                                 |
|           | PHPAPCWEBPROTO   | (Default: 'http')                                                                               |
|           | PHPAPCWEBURLPATH | (Default: '/apc.php')                                                                           |
|           | EXTRAOPTIONS     | (Default: 'Any extra option you may want to add to every command\_line (eg. a --verbose flag)') |

## How to check in the CLI that the configuration is OK and what are the main options for ? 

Once the plugin installed, log into your Centreon Poller CLI using the 
*centreon-engine* user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins//centreon_php_apc_web.pl \
    --plugin=apps::php::apc::web::plugin \
    --mode=memory \
    --hostname=10.0.0.1 \
    --proto='http' \
    --port='80' \
    --urlpath='/apc.php' \
    --warning-used='80' \
    --critical-used='90' \
    --warning-fragmentation='' \
    --critical-fragmentation='' \
    --use-new-perfdata 
```

Expected command output is shown below:

```bash
OK : Memory Usage Total: 985.22 MB Used: 500.68 MB (50.82%) Free: 484.54 MB (49.18%) Memory Fragmentation: 10% | 'memory.usage.bytes'=525000704B;80;90;0;1033080832 'memory.fragmentation.percentage'=10%;;;0;100 
```

This command would trigger a WARNING alarm if the memory usage is reported as
over 80% (`--warning-used='80'`) and a CRITICAL alarm if over than 90%
(`--critical-used='90'`).

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_php_apc_web.pl \
    --plugin=apps::php::apc::web::plugin \
    --mode=memory \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_php_apc_web.pl \
    --plugin=apps::php::apc::web::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins.md)
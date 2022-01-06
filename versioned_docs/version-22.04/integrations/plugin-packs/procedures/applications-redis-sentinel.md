---
id: applications-redis-sentinel
title: Redis Sentinel
---

## Pack Assets

### Templates

The Centreon Pack Redis Sentinel brings 1 host template:
* App-Redis-Sentinel-custom

It brings the following Service Templates:

| Service Alias     | Service Template                     | Default | Discovery |
|:------------------|:-------------------------------------|:--------|:----------|
| Redis-Clusters    | App-Redis-Sentinel-Redis-Clusters    | X       | X         |
| Sentinel-Clusters | App-Redis-Sentinel-Sentinel-Clusters | X       | X         |

### Discovery rules

| Rule name                                | Description                                        |
|:-----------------------------------------|:---------------------------------------------------|
| App-Redis-Sentinel-Redis-Cluster-Name    | Discover clusters and monitor redis utilization    |
| App-Redis-Sentinel-Sentinel-Cluster-Name | Discover clusters and monitor sentinel utilization |

### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Redis-Clusters-->

| Metric name                                                                        | Description                                                      | Unit |
|:---------------------------------------------------------------------------------- |:---------------------------------------------------------------- |:---- |
| cluster.redis.slaves.detected.count                                                | Number of detected slaves                                        |      |
| cluster.redis.subjectively_down.count                                              | Number of subjectively down redis instances                      |      |
| cluster.redis.objectively_down.count                                               | Number of objectively down redis instances                       |      |
| cluster.redis.slave_replication_offset.stddev.count                                | Slave replication offset standard deviation (between all slaves) |      |
| status                                                                             | Status of redis instance                                         |      |
| *cluster_name~redis_address:redis_port*#cluster.redis.ping_ok.latency.milliseconds | Last ok ping latency                                             | ms   |

<!--Sentinel-Clusters-->

| Metric name                                                                                 | Description                                    | Unit |
|:------------------------------------------------------------------------------------------- |:---------------------------------------------- |:---- |
| cluster.sentinels.slaves.detected.count                                                     | Number of detected sentinels                   |      |
| cluster.sentinels.subjectively_down.count                                                   | Number of subjectively down sentinel instances |      |
| cluster.sentinels.objectively_down.count                                                    | Number of objectively down sentinel instances  |      |
| quorum status                                                                               | Status of sentinel voted quorum                |      |
| status                                                                                      | Status of sentinel instance                    |      |
| *cluster_name~sentinel_address:sentinel_port*#cluster.sentinel.ping_ok.latency.milliseconds | Last ok ping latency                           | ms   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Redis Sentinel, the Poller should be able to perform ```redis-cli``` requests over the TCP/26379 port (by default).
The following commands are used:
* sentinel ckquorum <cluster_name>
* sentinel masters
* sentinel replicas <cluster_name>
* sentinel sentinels <cluster_name>

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Redis Sentinel** resources:

```bash
yum install centreon-plugin-Applications-Redis-Sentinel
```

2. On the Centreon Web interface, install the **Redis Sentinel** Centreon Pack on the **Configuration > Plugin Packs** page.

<!--Offline License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Redis Sentinel** resources:

```bash
yum install centreon-plugin-Applications-Redis-Sentinel
```

2. Install the **Redis Sentinel** Centreon Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-applications-redis-sentinel
```

3. On the Centreon Web interface, install the **Redis Sentinel** Centreon Pack on the **Configuration > Plugin Packs** page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Redis Sentinel** server settings
* Select the *applications-redis-sentinel-custom* template to apply to the Host
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name             | Description                                                                  |
|:----------|:-----------------|:-----------------------------------------------------------------------------|
|           | SENTINELPORT     | (Default: '26379')                                                           |
|           | SENTINELUSERNAME | Sentinel username (redis-cli >= 6.x mandatory)                               |
|           | SENTINELPASSWORD | Sentinel password                                                            |
|           | EXTRAOPTIONS     | Any extra option you may want to add to the command (eg. a --tls --insecure) |

## How to install redis-cli 6.x ?

To support TLS and/or ACL users, you need **redis-cli** >= 6.x.

<!--DOCUSAURUS_CODE_TABS-->

<!--Centos 7-->

```bash
yum install epel-release
yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm 
yum --enablerepo=remi install redis
```

<!--END_DOCUSAURUS_CODE_TABS-->

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins/centreon_redis_sentinel.pl \
    --plugin=apps::redis::sentinel::plugin \
    --server='10.0.0.1' \
    --port='26379' \
    --mode=redis-clusters \
    --filter-cluster-name='' \
    --verbose
```

The expected command output is shown below:

```bash
OK: cluster 'mymaster' number of detected slaves: 2, subjectively down instances: 0, objectively down instances: 0 - slave replication offset standard deviation: 843.00 - All redis instances are ok | 'mymaster#cluster.redis.slaves.detected.count'=2;;;0; 'mymaster#cluster.redis.subjectively_down.count'=0;;;0; 'mymaster#cluster.redis.objectively_down.count'=0;;;0; 'cluster.redis.slave_replication_offset.stddev.count'=843.00;;;; 'mymaster~10.25.52.107:6379#cluster.redis.ping_ok.latency.milliseconds'=1024s;;;0; 'mymaster~10.25.52.90:6379#cluster.redis.ping_ok.latency.milliseconds'=185s;;;0; 'mymaster~10.25.52.98:6379#cluster.redis.ping_ok.latency.milliseconds'=355s;;;0;
checking cluster 'mymaster'
    number of detected slaves: 2, subjectively down instances: 0, objectively down instances: 0
    slave replication offset standard deviation: 843.00
    instance '10.25.52.107:6379' status: master [role: master], last ok ping: 1024 ms
    instance '10.25.52.90:6379' status: slave [role: slave], last ok ping: 185 ms
    instance '10.25.52.98:6379' status: slave [role: slave], last ok ping: 355 ms
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_redis_sentinel.pl \
    --plugin=apps::redis::sentinel::plugin \
    --mode=redis-clusters \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_redis_sentinel.pl \
    --plugin=apps::redis::sentinel::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins)

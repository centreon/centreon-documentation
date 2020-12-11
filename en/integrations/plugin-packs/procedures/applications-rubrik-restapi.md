---
id: applications-rubrik-restapi
title: Rubrik Rest API
---

## Plugin-Pack assets

The Centreon Plugin-Pack *Rubrik Rest API* aims to collect (thanks to the Restful API) 
the execution status of the backup tasks and the health of the components supporting it 
like Cluster, Nodes, Disks, etc.

## Monitored metrics 

<!--DOCUSAURUS_CODE_TABS-->

<!--Disk-->

| Metric name                                          | Description                                      | Unit |
|:---------------------------------------------------- |:------------------------------------------------ |:---- |
| cluster.disks.total.count                            | Total number cluster disks                       |      |
| cluster.disks.active.count                           | Number of active disks                           | ms   |

<!--Cluster-->

| Metric name                                          | Description                                      | Unit |
|:---------------------------------------------------- |:------------------------------------------------ |:---- |
| cluster.io.read.usage.bytespersecond                 | Usage of cluster read I/Os                       | B/s  |
| cluster.io.write.usage.bytespersecond                | Usage of cluster write I/Os                      | B/s  |
| cluster.io.read.usage.iops                           | Usage of cluster read I/Os                       | iops |
| cluster.io.write.usage.iops                          | Usage IOPS of cluster write I/Os                 | iops |

<!--Compliance-->

| Metric name                                          | Description                                      | Unit |
|:---------------------------------------------------- |:------------------------------------------------ |:---- |
| backup.objects.incompliance.24h.count                | Number of backup objects compliance in 24h       |      |
| backup.objects.noncompliance.24h.count               | Number of backup objects no compliance in 24h    |      |

<!--Node-->

| Metric name                                          | Description                                      | Unit |
|:---------------------------------------------------- |:------------------------------------------------ |:---- |
| cluster.nodes.total.count                            | Total number of node in the cluster              |      |
| cluster.nodes.ok.count                               | Number of node "OK" in the cluster               |      |

<!--Storage-->

| Metric name                                          | Description                                      | Unit |
|:---------------------------------------------------- |:------------------------------------------------ |:---- |
| storage.space.usage.bytes                            | Usage space storage                              | B    |
| storage.space.free.bytes                             | Free space storage                               | B    |
| storage.space.usage.percentage                       | Percentage usage space storage                   | %    |
| storage.full.remaining.days.count                    | Number of remaining day storage full             | d    |

<!--Task-->

| Metric name                                          | Description                                      | Unit |
|:---------------------------------------------------- |:------------------------------------------------ |:---- |
| tasks.succeeded.24h.count                            | Number of task succeeded in 24h                  |      |
| tasks.failed.24h.count                               | Number of task failed in 24h                     |      |
| tasks.canceled.24h.count                             | Number of task canceled in 24h                   |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

Rubrik App provides a RESTful API on top of Cluster and Edge components. 

You can get a closer look to the API directly on the Cluster using this address:
https://{{node_ip}}/docs/{{{v1|v2|internal}}/playground

Information about its configuration is available on github: https://github.com/rubrikinc/api-documentation

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *Rubrik Rest API* resources:

```bash
yum install centreon-plugin-Applications-Rubrik-Restapi
```

2. On the Centreon Web interface, install the *Rubrik Rest API* Centreon Plugin-Pack 
on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *Rubrik Rest API* resources:

```bash
yum install centreon-plugin-Applications-Rubrik-Restapi
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-rubrik-restapi
```

3. On the Centreon Web interface, install the *Rubrik Rest API* Centreon Plugin-Pack 
on the "Configuration > Plugin Packs > Manager" page

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts". 
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your Rubrik App settings 
* Select the *App-Rubrik-Restapi-custom*

Les Macros d'Hôte ci-après doivent être renseignées le cas échéant:

| Mandatory | Name                       | Description                                                                        |
|:----------|:-------------------------- |:-----------------------------------------------------------------------------------|
| X         | RUBRIKAPIPORT              | RestAPI port of the Rubrik RestAPI (Default: '443')                                |
| X         | RUBRIKAPIPROTO             | Protocol used to reach the Rubrik RestAPI (Default: 'https')                       |
|           | RUBRIKAPIEXTRAOPTIONS      | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account and test the Plugin 
by running the following command (some of the parameters such as ```--proxyurl``` have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_rubrik_restapi.pl \
    --plugin=apps::backup::rubrik::restapi::plugin \
    --mode=nodes \
    --hostname='10.0.0.1' \
    --proto='https' \
    --port='443' \
    --proxyurl='http://myproxy.mycompany.org:8080' \
    --api-password='****'
	--api-username='centreon'
    --verbose
```

Expected command output is shown below: 

```bash
OK: cluster 'RubrikOne' nodes are ok | 'RubrikOne#cluster.nodes.total.count'=7;;;0; 'RubrikOne#cluster.nodes.ok.count'=7;;;0;7
checking cluster 'RubrikOne'
node 'RVM15CS00XXXX' [ip address: 172.10.69.92] status: ok
node 'RVM15CS00XXXX' [ip address: 172.10.69.93] status: ok
node 'RVM15CS00XXXX' [ip address: 172.10.69.94] status: ok
node 'RVM18BS00XXXX' [ip address: 172.10.69.91] status: ok
node 'RVMHM194S00XXXX' [ip address: 172.10.69.95] status: ok
node 'RVMHM194S00XXXX' [ip address: 172.10.69.96] status: ok
node 'RVMHM194S00XXXX' [ip address: 172.10.69.97] status: ok
```

The Plugin mode collects the status of the nodes (```--plugin=apps::backup::rubrik::restapi::plugin --mode=nodes```)
linked to a cluster reachable over 10.0.0.1 IP Address and port 443 (```--hostname='10.0.0.1' --port='443'```).

All the filters that can be used as well as all the available thresholds parameters 
can be displayed by adding the  ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_rubrik_restapi.pl \
    --plugin=apps::backup::rubrik::restapi::plugin \
    --mode=nodes \
    --help
```

### J'obtiens le message d'erreur suivant: ```UNKNOWN: 500 Can't connect to 10.0.0.1:80 |```

This error message means that the Centreon Plugin couldn't successfully connect to the Rubriik App RestAPI.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. 
This can be done by using this option in the command: ```--proxyurl='http://proxy.mycompany:8080'```.

If a self-signed certificate is used, you must add an option to ignore its validity.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

When using a proxy to connect to the Alyvix Server RestAPI, this error
message means that the Centreon Plugin library does not support the proxy
connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the
following option to the command: ```--http-backend='curl'```.
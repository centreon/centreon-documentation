---
id: applications-oracle-ovm-api
title: Oracle VM Manager API
---

## Plugin-Pack Assets

### Monitored Objects

The plugin-pack includes monitoring of File-servers, manager, Server-pools, Servers and Vm.

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--File-servers-->

| Metric name                                                         | Description               | Unit |
| :------------------------------------------------------------------ | :------------------------ | :--- |
| *serverpoolname*~*filesystemname*#serverpool.space.usage.bytes      | Space usage               | B    |
| *serverpoolname*~*filesystemname*#serverpool.space.free.bytes       | Free space                | B    |
| *serverpoolname*~*filesystemname*#serverpool.space.usage.percentage | Space usage in percentage | %    |

<!--Manager-->

| Metric name                                | Description                                          | Unit |
| :----------------------------------------- | :--------------------------------------------------- | :--- |
| manager status                             | Manager status, possible to set string-based alerts  |      |
| *managername*#manager.jobs.succeeded.count | Number of jobs succeeded                             |      |
| *managername*#manager.jobs.failed.count    | Number of jobs failed                                |      |

<!--Server-pools-->

| Metric name                                         | Description                | Unit |
|:--------------------------------------------------- |:-------------------------- | :--- |
| *serverpoolname*#serverpool.servers.running.count   | Number of servers running  |      |
| *serverpoolname*#serverpool.servers.stopped.count   | Number of servers stopped  |      |
| *serverpoolname*#serverpool.vm.running.count        | Number of vm running       |      |
| *serverpoolname*#serverpool.vm.stopped.count        | Number of vm stopped       |      |
| *serverpoolname*#serverpool.memory.usage.bytes      | Memory usage               | B    |
| *serverpoolname*#serverpool.memory.free.bytes       | Free memory                | B    |
| *serverpoolname*#serverpool.memory.usage.percentage | Memory usage in percentage | %    |

<!--Servers-->

| Metric name                                 | Description                | Unit |
| :------------------------------------------ | :------------------------- | :--- |
| servers.running.count                       | Number of servers running  |      |
| servers.stopped.count                       | Number of servers stopped  |      |
| server status                               | server status              |      |
| *servername*#server.memory.usage.bytes      | Memory usage               | B    |
| *servername*#server.memory.free.bytes       | Free memory                | B    |
| *servername*#server.memory.usage.percentage | Memory usage in percentage | %    |

<!--Vm-->

| Metric name                             | Description          | Unit |
| :---------------------------- --------- | :--------------------| :--- |
| virtualmachines.running.count           | Number of vm running |      |
| virtualmachines.stopped.count           | Number of vm stopped |      |
| vm status                               | vm status            |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Oracle VM Manager, the Rest API must be configured (SOAP legacy is not supported).

E.g: https://docs.oracle.com/en/virtualization/oracle-vm/3.4/developer/vmapi-preface.html

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Oracle-Ovm-Api
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Oracle VM Manager API* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Oracle-Ovm-Api
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-applications-oracle-ovm-api
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Oracle VM Manager API* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Add a new Host and apply the *App-Oracle-Ovm-Api-custom* Host Template

> Once the template applied, some Macros have to be configured:

| Mandatory | Name               | Description                                                                |
| :-------- | :----------------- | :------------------------------------------------------------------------- |
| X         | OVMAPICUSTOMMODE   | API mode (Default: 'rest')                                                 |
| X         | OVMAPIPORT         | Port used (Default: 7002)                                                  |
| X         | OVMAPIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | OVMAPIPASSWORD     | Oracle VM Manager username                                                 |
| X         | OVMAPIUSERNAME     | Oracle VM Manager password                                                 |
|           | OVMAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your poller using the *centreon-engine* user account and test by running the following command
(Parameters such as ```api-username``` or ```api-password```have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_oracle_ovm_api.pl \
    --plugin=apps::oracle::ovm::api::plugin \
    --mode=server-pools \
    --hostname='10.30.2.79' \
    --port='7002' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --filter-server-pool-name='TESTPOOL01' \
    --warning-memory-usage-prct='90' \
    --critical-memory-usage-prct='95' \
    --verbose
OK: Server pool 'TESTPOOL01' servers running: 2, stopped: 0 - virtual machines running: 3, stopped: 0 - memory usage total: 255.32 GB used: 217.87 GB (85.33%) free: 37.45 GB (14.67%) | 'TESTPOOL01#serverpool.servers.running.count'=2;;;0;2 'TESTPOOL01#serverpool.servers.stopped.count'=0;;;0;2 'TESTPOOL01#serverpool.vm.running.count'=3;;;0;3 'TESTPOOL01#serverpool.vm.stopped.count'=0;;;0;3 'TESTPOOL01#serverpool.memory.usage.bytes'=233939402752B;;;0;274148098048 'TESTPOOL01#serverpool.memory.free.bytes'=40208695296B;;;0;274148098048 'TESTPOOL01#serverpool.memory.usage.percentage'=85.33%;90;95;0;100
checking server pool 'TESTPOOL01'
servers running: 2, stopped: 0
virtual machines running: 3, stopped: 0
memory usage total: 255.32 GB used: 217.87 GB (85.33%) free: 37.45 GB (14.67%)
```

The command above monitors Oracle VM Manager server pools usage  (```--mode=server-pools```) named *TESTPOOL01* (```--filter-server-pool-name='TESTPOOL01'```).

It uses api-username (```--api-username='myapiusername'```), an api-password (```--api-password='myapipassword'```)
and it connects to the host _10.30.2.79_ (```--hostname='10.30.2.79'```)
on the port 7002 (```--port='7002'```) using https (```--proto='https'```).

This command would trigger a WARNING alert if the memory used to raise over 90% of the memory capacity (--warning-memory-usage-prct='60') and a CRITICAL alarm over 95% (--critical-memory-usage-prct='75').

All the options that can be used with this plugin can be found over the ```--help``` command:

```bash
/usr/lib/centreon/plugins/centreon_oracle_ovm_api.pl --plugin=apps::oracle::ovm::api::plugin \
     --mode=server-pools \
     --help
```

### Why do I get the following error: 

#### ```UNKNOWN: 500 Can't connect to 10.30.2.79:443```

This error message means that the Centreon Plugin couldn't successfully connect to the Oracle VM Manager API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl='http://proxy.mycompany:8080'``` option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported```

When using a proxy to connect to the Oracle VM Manager API, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.


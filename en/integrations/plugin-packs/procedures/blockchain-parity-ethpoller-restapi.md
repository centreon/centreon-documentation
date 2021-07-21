---
id: blockchain-parity-ethpoller-restapi
title: Ethpoller API
---

## Overview

Event poller with RESTful API for both Ethereum and Hyperledger Fabric Blockchain technologies. 

The Centreon Plugin-Pack *Ethpoller API* connects to various API endpoints to gather application, 
adoption and utilization metrics of a Blockchain implementation. 

## Pack assets

### Monitored objects

* Blockchain Parity Ethpoller endpoint
    * Tracking
    * Stats
    * Disk  

### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Tracking-->

| Metric name                               | Description                          | Unit |
|:----------------------------------------- |:------------------------------------ | ---- |
| parity.tracking.events.perminute          | Number of events by minute           |      |
| parity.tracking.mined.block.prct          | Percentage of block mined            |  %   |
| parity.tracking.balance.changes.perminute | Number of balance changes per minute | wei  |

<!--Stats-->

* Per *block*

| Metric name                        | Description                      | Unit |
|:---------------------------------- |:-------------------------------- |----- |
| parity.stats.block.perminute       | Number of block per minute       |      |
| parity.stats.transaction.perminute | Number of transaction per minute |      |
| parity.stats.fork.perminute        | Number of fork per minute        |      |

<!--Disk-->

| Metric name                     | Description                   | Unit |
|:--------------------------------|:------------------------------|:-----|
| eth.poller.disk.free            |  Free space                   |  B   |
| eth.poller.disk.available       |  Availability space           |  B   |
| eth.poller.disk.size            |  Total size                   |  B   |
| eth.poller.disk.used            |  Used space                   |  B   |
| eth.poller.disk.usage           |  Disk usage                   |  %   |
| eth.poller.blockchain.directory |  Size of blockchain directory |  B   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To get data from the BCM/ETH Poller, deploy it within your Blockchain network thanks to 
IRT-Systemx's [official documentation](https://github.com/IRT-SystemX/bcm-poller#getting-started)

To get data from the API, the Poller must be able to communicate with it over the configured port (default: 8000). 

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor *Parity or Hyperledger* blockchains:

```bash
yum install centreon-plugin-Blockchain-Parity-Ethpoller-Restapi
```

2. On the Centreon Web interface, install the *Ethpoller API* Centreon Plugin Pack on the "Configuration > Plugin Packs" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor *Parity or Hyperledger* blockchains:

```bash
yum install centreon-plugin-Blockchain-Parity-Ethpoller-Restapi
```

2. Install the *Ethpoller API* Centreon Plugin-Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-blockchain-parity-ethpoller-restapi
```

3. On the Centreon Web interface, install the *Ethpoller API* Centreon Plugin Pack on the "Configuration > Plugin Packs" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your *TO CHANGE* Server settings
* Apply the *Blockchain-Parity-Ethpoller-Restapi-custom* template and configure all the mandatory Macros:

| Mandatory | Name                  | Description                                                                        |
|:----------|:--------------------- |:-----------------------------------------------------------------------------------|
|     X     | ETHPOLLERAPIPORT      | Port used (Default: '8000')                                                          |
|     X     | ETHPOLLERPROTO        | Protocol used (Default: 'http')                                                    |
|     X     | ETHPOLLERAPIURLPATH   | Path to the API - (Default: '/')                                                   |
|           | TIMEOUT               | Request timeout                                                                    |
|           | ETHPOLLEREXTRAOPTIONS | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## How to check with the CLI that the configuration is OK and what are the main options for ? 

Once the plugin installed, log into your Centreon Poller CLI using the 
*centreon-engine* user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins//centreon_blockchain_parity_ethpoller_api.pl  \ 
   --plugin=blockchain::parity::ethpoller::plugin  \ 
   --mode=tracking  \ 
   --hostname=10.0.0.1  \ 
   --port='8000'  \ 
   --proto='http'  \ 
   --url-path='/'  \ 
   --timeout='10' \ 
   --warning-balance-changes=''  \ 
   --critical-balance-changes=''  \ 
   --warning-events-frequency=''  \ 
   --critical-events-frequency=''  \ 
   --warning-mining-frequency=''  \ 
   --critical-mining-frequency=''  \ 
   --warning-mining-prct=''  \ 
   --critical-mining-prct='50:'   
```

Expected command output is shown below:

 ```bash
OK: Events metrics are ok - Mining metrics are ok - Balances metrics are ok |
'agent1#parity.tracking.events.perminute'=5.00;;;; 'agent2#parity.tracking.events.perminute'=15.00;;;; 'agent3#parity.tracking.events.perminute'=15.00;;;; 'agent4#parity.tracking.events.perminute'=10.00;;;; 'agent5#parity.tracking.events.perminute'=0.00;;;; 'credit#parity.tracking.events.perminute'=10.00;;;; 'deploy#parity.tracking.events.perminute'=20.00;;;; 'registry#parity.tracking.events.perminute'=5.00;;;; 'black#parity.tracking.mined.block.perminute'=5.00;;;; 'black#parity.tracking.mined.block.prct'=33.41%;;;0; 'gray#parity.tracking.mined.block.perminute'=10.00;;;; 'gray#parity.tracking.mined.block.prct'=33.14%;;;0; 'white#parity.tracking.mined.block.perminute'=10.00;;;; 'white#parity.tracking.mined.block.prct'=33.46%;;;0; 'master#parity.tracking.balance.changes.perminute'=0.00wei;;;; 'random#parity.tracking.balance.changes.perminute'=729999999999997378560.00wei;;;; 
```

This command would trigger a CRITICAL alarm if a node mined less than 50% of all blocks (`--critical-mining-prct=50:`). 

All available options for a given mode can be displayed by adding the 
```--help``` parameter to the command:

 All plugin modes can be listed with the following command:

 ```bash
 /usr/lib/centreon/plugins//centreon_blockchain_parity_ethpoller_api.pl  \ 
    --plugin=blockchain::parity::ethpoller::plugin  \ 
    --mode=tracking  \ 
    --help
 ```

## Troubleshooting 

### UNKNOWN: Can't connect to ... 

This error message means that the Centreon Plugin couldn't successfully connect to the Ethpoller API. Check that no third party
device (such as a firewall) is blocking the request. 

### UNKNOWN: Cannot decode json response

This error message means that the Centreon Plugin couldn't successfully connect to the Ethpoller API. Check that no third party
device (such as a firewall) is blocking the request. A proxy connection may also be necessary to connect to the API.
This can be done by using this option in the command: ```--proxyurl='http://proxy.mycompany:8080'```.
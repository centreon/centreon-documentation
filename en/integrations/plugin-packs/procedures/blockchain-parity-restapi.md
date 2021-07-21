---
id: blockchain-parity-restapi
title: Parity API
---

## Overview

Parity Blockchain is a fork of the Ethereum Blockchain. 

The Centreon Plugin Pack *Parity API* aims to get information and metrics from the 
Parity API. 

## Pack assets

### Monitored objects

* Blockchain Parity nodes
     * Parity
     * Info
     * Eth
     * Net

### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Parity-->

| Metric name                 | Description                      | Unit |
|:----------------------------|:---------------------------------|------|
| parity.pending.transactions | Number of pending transactions   |      |
| parity.mempol.usage         | Memory pool usage                |   B  |
| parity.mempol.size          | Memory pool size                 |   B  |
| parity.peers.connected      | Number of connected peers        |      |
| parity.peers.max            | Maximum number of peers          |      |
| parity.peers.usage          | Peers usage expressed in percent |   %  |

<!--Eth-->

| Metric name                          | Description                   |
|:-------------------------------------|:------------------------------|
| parity.eth.sync.status               | State of node synchronization |
| parity.eth.block.gas                 | Gas                           |
| parity.eth.block.usage               | Block Usage                   |
| parity.eth.block.size                | Size of Block                 |
| parity.eth.block.transactions.number | Number of block transactions  |
| parity.eth.block.uncles              | Number of block uncles        |
| parity.eth.gas.limit                 | Maximum Gas available         |
| parity.eth.gas.price                 | Gas price                     |
| parity.eth.gas.used                  | Gas consumption               |

<!--Net-->

| Metric name                   | Description              |
|:------------------------------|:-------------------------|
| parity.network.peers.count    | Number of known peers    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To get data from the API, the Poller must be able to communicate with it over the 
configured port (default: 8545). 

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor 
Parity network nodes:

```bash
yum install centreon-plugin-Blockchain-Parity-Restapi
```

2. On the Centreon Web interface, install the *Parity API* Centreon Plugin-Pack on 
the "Configuration > Plugin Packs" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor 
Blockchain Parity nodes:

```bash
yum install centreon-plugin-Blockchain-Parity-Restapi
```

2. Install the *Parity API* Centreon Plugin-Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-blockchain-parity-restapi
```

3. On the Centreon Web interface, install the *Parity API* Centreon Plugin-Pack on 
the "Configuration > Plugin Packs" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your Blockchain 
Parity Server settings
* Apply the *Blockchain-Parity-Restapi-custom* template and configure all the 
mandatory Macros:

| Mandatory | Name               | Description                                                                        |
|:----------|:-------------------|:-----------------------------------------------------------------------------------|
|           | PARITYAPIPORT      | (Default: '8545')                                                                  |
|           | PARITYPROTO        | (Default: 'http')                                                                  |
|           | PARITYAPIURLPATH   | (Default: '/')                                                                     |
|           | TIMEOUT            |                                                                                    |
|           | PARITYEXTRAOPTIONS | Any extra option you may want to add to every command_line (eg. a --verbose flag)  |

## How to check in the CLI that the configuration is OK and what are the main options for ? 

Once the plugin installed, log into your Centreon Poller CLI using the 
*centreon-engine* user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins//centreon_blockchain_parity_api.pl  \ 
   --plugin=blockchain::parity::restapi::plugin  \ 
   --mode=net  \ 
   --hostname=10.0.0.1  \ 
   --port=8545  \ 
   --proto=http \
   --timeout=10  \ 
   --proto=http  \ 
   --api-path=/  \ 
   --warning-peers=''  \ 
   --critical-peers='1:'   
```

Expected command output is shown below:

`OK: Parity network module: connected peers: 2`

This command would trigger a WARNING alarm if the number of peers is reported as (--warning-peers) and a CRITICAL alarm if less than 1 (`--critical-peers=1:`).

All the available options for a given mode can be displayed by adding the `--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_blockchain_parity_api.pl  \ 
    --plugin=blockchain::parity::restapi::plugin  \ 
    --mode=net  \ 
    --help
```

## Troubleshooting 

### UNKNOWN: Can't connect to ... 

This error message means that the Centreon Plugin couldn't successfully connect to the Parity API. Check that no third party
device (such as a firewall) is blocking the request. 

### UNKNOWN: Cannot decode json response

This error message means that the Centreon Plugin couldn't successfully connect to the Parity API. Check that no third party
device (such as a firewall) is blocking the request. 

A proxy connection may also be necessary to connect to the API.
This can be done by using this option in the command: ```--proxyurl='http://proxy.mycompany:8080'```.
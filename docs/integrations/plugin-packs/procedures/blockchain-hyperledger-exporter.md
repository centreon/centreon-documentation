---
id: blockchain-hyperledger-exporter
title: Hyperledger API
---

## Overview

Hyperledger Exporter is a tool exploiting the Hyperledger Fabric built-in APIs.

The Centreon Plugin Pack *Hyperledger API* aims to collect relative metrics about
channels and processing.

## Pack assets

### Monitored objects

* Hyperledger private subnets / Channels 

### Monitored metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Channels-->

| Metric name                                       | Description                     |
|-------------------------------------------------- |---------------------------------|
| channel.ledger.transaction.count                  | Number of processed transaction |
| channel.gossip.membership.total.peers.known.count | Total known peers               | 
| channel.gossip.state.height.count                 | Current ledger height           |
| channel.ledger.blockchain.height.count            | Height of the chain in blocks   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *Hyperledger API* ressources:

```bash
yum install centreon-plugin-Blockchain-Hyperledger-Exporter
```

2. On the Centreon Web interface, install the *Hyperledger API* Centreon Plugin-Pack on the `Configuration > Plugin Packs` page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *Hyperledger API* ressources:

```bash
yum install centreon-plugin-Blockchain-Hyperledger-Exporter
```

2. Install the *Hyperledger API* Centreon Plugin-Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-blockchain-hyperledger-exporter
```

3. On the Centreon Web interface, install the *Hyperledger API* Centreon Plugin-Pack on the `Configuration > Plugin Packs` page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your Hyperledger node settings
* Apply the *Blockchain-Hyperledger-Exporter-custom* template and configure all the mandatory Macros:

| Mandatory | Name               | Description                                                                        |
|:----------|:-------------------|:-----------------------------------------------------------------------------------|
|    x      | EXPORTERAPIPORT    | Port used by the Hyperledger Exporter (Default: '80')                              |
|    x      | EXPORTERPROTO      | Protocol used by the Hyperledger Exporter (Default: 'http')                        |
|    X      | EXPORTERAPIURLPATH | URL to access the Hyperledger Exporter (Default: '/')                              |
|           | TIMEOUT            | Timeout (Default: '10')                                                            |
|           | EXTRAOPTIONS       | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## Troubleshooting 

### UNKNOWN: Can't connect to ... 

This error message means that the Centreon Plugin couldn't successfully connect to the Hyperledger API. Check that no third party
device (such as a firewall) is blocking the request. 

### UNKNOWN: Cannot decode json response

This error message means that the Centreon Plugin couldn't successfully connect to the Hyperledger Exporter API. Check that no third party
device (such as a firewall) is blocking the request. A proxy connection may also be necessary to connect to the API.
This can be done by using this option in the command: ```--proxyurl='http://proxy.mycompany:8080'```.
---
id: architectures
title: Architectures
description: "Compare Centreon architectures (standalone central server, distributed with pollers and remote servers, remote DBMS) and choose one that fits your volume."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If you are monitoring a small number of hosts and services, a central server is enough. However, to monitor a large number of hosts and services, you will need to distribute the load over multiple servers.

All servers (central, remote and pollers) in your architecture must have the same major version of Centreon. It is also recommended that they have the same minor version.

> If you do not know what remote servers and pollers are, see [Elements of a Centreon platform](../getting-started/platform.md).

## Available architectures

### Standalone central server

If you are not monitoring many hosts, you may only need one central server. The central server will do all of the monitoring itself. Check our [sizing guide](./prerequisites.md#architecture-and-centraldatabase-sizing) to figure out the right architecture for your case.

### Distributed architecture

A distributed architecture consists of:

* A Centreon Central server to configure monitoring and to display and operate on collected data
* One or more remote servers to display and operate on a subset of collected data

and/or

* One or more pollers to collect data.

Example of a distributed architecture with 3 remote servers and 7 pollers. A poller can be attached to a remote server or directly to the central server.

```mermaid
flowchart LR
  accTitle: Example of a distributed architecture
  accDescr: A central server, with 3 remote servers and one poller attached to it. Each remote server has 2 pollers.

  central["Central server"]:::central

  remote1["Remote server 1"]:::remote
  remote2["Remote server 2"]:::remote
  remote3["Remote server 3"]:::remote

  poller1(["Poller 1"]):::poller
  poller2(["Poller 2"]):::poller
  poller3(["Poller 3"]):::poller
  poller4(["Poller 4"]):::poller
  poller5(["Poller 5"]):::poller
  poller6(["Poller 6"]):::poller
  poller7(["Poller 7"]):::poller

  central --- remote1 & remote2 & remote3 & poller7
  remote1 --- poller1 & poller2
  remote2 --- poller3 & poller4
  remote3 --- poller5 & poller6
```

### Architecture with remote DBMS

Your central server can have a remote DBMS. An architecture with a remote DBMS consists of:

* A Centreon Central server to configure monitoring and display collected data
* A DBMS server to store collected data
* Optionally, one or more remote servers and/or pollers to collect data

## What kind of architecture do you need?

**Do you need pollers?**

```mermaid
flowchart LR
  accTitle: Do you need pollers?
  accDescr: If you monitor segregated networks or distant sites, or 500 hosts or more, add pollers to the central server. Otherwise, a standalone central server is enough.

  sites("Segregated networks or distant sites to monitor?"):::question
  hosts("How many hosts to monitor?"):::question
  withPollers["Central server + pollers"]:::answer
  standalone["Standalone central server"]:::answer

  sites -- Yes --> withPollers
  sites -- No --> hosts
  hosts -- "500 or more" --> withPollers
  hosts -- "Fewer than 500" --> standalone
```

**Where to install the database?**

```mermaid
flowchart LR
  accTitle: Where to install the database?
  accDescr: Above 5,000 hosts, the database must be on a separate server. Otherwise, it can be on the central server.

  volume("More than 5,000 hosts to monitor?"):::question
  remoteDb[("Separate database server")]:::database
  localDb[("Database on the central server")]:::answer

  volume -- Yes --> remoteDb
  volume -- No --> localDb
```

When designing your Centreon platform, bear the following considerations in mind:

* The number of hosts you will monitor is not enough to determine how big your platform should be. You will also need to take into account the number of services per host and the number of metrics per service.
* Another criterion to consider is whether you need to use pollers or remote servers to separate your resources according to geographical or logical criteria. Example: If your monitoring architecture has to monitor a DMZ area, it is easier (and safer) to place a remote server in the DMZ network.
* A central server should only monitor a small number of hosts and services because its CPU should primarily handle the data sent by remote servers and pollers (the same applies to remote servers). The more hosts and services you monitor on your central server, the higher the risk of the interface being slowed down, because the monitoring engine will use more resources.
* The central server should monitor all remote servers and pollers.
* The central server should be monitored by a poller or a remote server.
* Use a remote server instead of a poller if you need to view data on a site other than where the central server is located.

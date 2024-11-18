---
id: ha-prerequisites
title: Prerequisites for an HA architecture
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Sizing

See the [general sizing infomation](https://docs.centreon.com/docs/installation/prerequisites/) for a standard Centreon platform. In addition, you **must** have at least 5 Go available on the VG that contains the **/var/lib/mysql** partition, otherwise you will not be able to set up the replication.

## Table of HA network flows

| Source | Destination | Port/Protocol | Comments |
|--------|-------------|----------------|----------|
| Active central node | Passive central node | TCP 22 | To synchronize configuration files (the flow must also be open in the passive --> active direction) |
| Active central node | Passive central node | TCP 5670 | To synchronize RRD files (the flow must also be open in the passive --> active direction) |
| Active DB node | Passive DB node | TCP 3306 | MySQL synchronization (the flow must also be open in the passive --> active direction) |
| Active DB node | Passive DB node | TCP 22 | MySQL Synchronization (the flow must also be open in the passive --> active direction) |
| Central servers + DB + QDevice | Central servers + DB + QDevice | UDP 5404 | Communication inside the cluster (Multicast) |
| Central servers + DB + QDevice | Central servers + DB + QDevice | UDP 5405 | Communication inside the cluster (Unicast)|
| Central servers + DB + QDevice | Central servers + DB + QDevice | TCP 2224 | Communication inside the cluster |
| Central servers + DB + QDevice | Central servers + DB + QDevice | TCP 5403 | Communication with the QDevice |

See also the general [tables of network flows](https://docs.centreon.com/docs/installation/technical/#tables-of-network-flows).

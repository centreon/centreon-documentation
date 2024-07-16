---
id: overview
title: How Centreon HA works
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## How does a Centreon HA cluster work?

In the central cluster, all Centreon processes ("resources") are managed by the clustering tools (Pacemaker and Corosync).

1. Everything is OK : central node 1 (the current active node) receives data from the pollers, and all relevant files are synchronized by a dedicated script  (**centreon_central_sync**) onto central node 2 (the current passive node) so that the passive node is ready to become the active node at all times.
2. An incident occurs and central node 1 (the active node) goes down.
   - Corosync detects that it is down: after consulting with the quorum device, it tells central node 2 to become the active node.
   - An operator is notified that central node 1 is down, thanks to the Centreon monitoring that has been set up on the poller.
3. Central node 2 is now the active node. It receives data from the pollers. During this time, the operator tries to understand why central node 1 is down. They must fix the problem, then restat the processes using the cluster management tool **pcs**, not by manipulating central node 1 directly.
4. Central node 1 is fixed and comes back online. The **centreon_central_sync** script synchronizes all relevant files from central node 2 to central node 1, so that central node 1 can catch up on what has happened during its down time. Central node 1 is ready to become the active node if central node 2 goes down.

The process is the same for the database cluster.

## What happens when the cluster fails over?

[If you have monitored your cluster as described here](../../administration/centreon-ha/monitoring-guide.md), when the cluster fails over (e.g. when the active node is affected by a network outage, if its Broker partitions are full...):

* The host for the VIP should be OK in the **Resource status** page (it may temporarily go down in a SOFT state if the corresponding monitoring check is performed at the exact same time the cluster fails over.)
* The host for the central node that failed will show up as DOWN and/or with CRITICAL services.
* You may receive notifications if you have configured them.
* You may have to log on to the interface again.

You need to take action and fix the problem so that the central node that failed (let's say, central node 1) comes back online. Once central node 1 comes back online:

* Central node 1 is still the passive node: the cluster does **not** switch back automatically.
* If you are using EL8 or Debian, you need to clear manually the constraint created by the failover (using `pcs resource clear centreon`).
* In a production context, you do not **have** to go back to central node 1 being the active node - but you can do it if you want to (e.g. if central node 2 has limited performance), by [performing a failover](../../administration/centreon-ha/acceptance-guide.md#perform-a-failover) on central node 2.

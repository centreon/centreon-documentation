---
id: upgrade-from-centreon-failover
title: Upgrade from Centreon-Failover to Centreon-HA
---

## Prerequisites

### Understanding

This procedure is reserved to advanced-users. Read it completely before starting any operation. 
Make sure to understand the whole thing as it helps to minimize service disruption when 
the time to do it on production servers will come.

### Scope of application

This procedure aims to provide a detailed guide on how to upgrade a Centreon version installed in version < 20.04 with 
the centreon-failover solution deployed. 

If you never worked with Centreon Professional Services Team or one of our Partner, you are probably not concerned by the content 
below.

Please always open a support ticket to ensure that your platform is compliant with the upgrade process described here.

## Legacy Cluster destruction

To migrate from centreon-failover to centreon-ha, it's necessary to destroy the existing Cluster. Be aware that the 
Web UI will be unavaible during this process.

Connect by SSH to a node within the Cluster to run the following command:

Disable the resources: 

```bash
pcs resource disable ms_mysql
pcs resource disable centreon
pcs resource unmanage centreon
pcs resource unmanage ms_mysql
```

Destroy the Cluster: 

```bash
pcs cluster destroy
```

At this step, none of the processes managed by the cluster should run on any node.

> **WARNING:** Make sure to check on both Central and Database servers. 

## Upgrade MariaDB / MySQL

Centreon >= 20.04 comes with a compatibility with MariaDB 10.3.

Upgrade of both database nodes following [official MariaDB upgrade procedure](../../upgrade/upgrade-from-19-10.html#upgrade-mariadb-server). 

Once both nodes are running the 10.3 MariaDB version, stop mysql/mariadb processes. 

## Upgrade Centreon Packages 

Follow these steps on each Central Web nodes.

If you upgrade from the 19.10: 
* [Update your repositories](../../upgrade/upgrade-from-19-10.html#update-the-centreon-repository). Also those of the Business Edition modules if installed.
* [Update your packages](../../upgrade/upgrade-from-19-10.html#upgrade-the-centreon-solution)
* [Take required additionnal actions](../../upgrade/upgrade-from-19-10.html#additional-actions)

If you upgrade from the 19.04: 
* [Update your repositories](../../upgrade/upgrade-from-19-04.html#update-the-centreon-repository). Also those of the Business Edition modules if installed.
* [Update your packages](../../upgrade/upgrade-from-19-04.html#upgrade-the-centreon-solution)
* [Take required additionnal actions](../../upgrade/upgrade-from-19-04.html#additional-actions)

Stop the apache process after these operations and check again that none of the 
processes managed by the cluster are running.

## Create the new cluster

Depending on your Cluster architecture, the procedure to create the cluster is different. 
* If the webserver and the databases are running on the same node, follow this [installation guide](../centreon-ha/installation-2-nodes.html#setting-up-the-centreon-cluster)
* If databases are running on a dedicated server, follow this [installation guide](../centreon-ha/installation-4-nodes.html#setting-up-the-centreon-cluster)

Before taking the next steps, make sure that all resources are running smoothly without any failed actions.

If any problem shows up at this step, make sure that the following prerequisites are met: 
* [SSH key exchange](../centreon-ha/installation-2-nodes.html#ssh-keys-exchange), Centreon-HA is more secured as it does not requires root privileges
* [Database credentials and privileges](../centreon-ha/installation-2-nodes.html#creating-the-centreon-mariadb-account), same as above, root SQL account is not needed anymore  

Once the centreon and mysql SSH keys have been exchanged, you might want to remove the root SSH public keys from /root/.ssh/authorized_keys.

### Finalizing the upgrade

First, complete Web wizard steps to finish the Central upgrade process:
* If you upgrade from the 19.10, follow this [chapter](../../upgrade/upgrade-from-19-10.html#finalizing-the-upgrade).
* If you upgrade from the 19.04, follow this [chapter](../../upgrade/upgrade-from-19-04.html#finalizing-the-upgrade).

Then, modify the Centreon-Broker reload command of your Central Server in 'Configuration > Pollers' as described [here](../centreon-ha/installation-2-nodes.html#customizing-poller-reload-command).

Finally, upgrade your Poller(s) as described [here](../../upgrade/upgrade-from-19-04.html#upgrade-the-poller)

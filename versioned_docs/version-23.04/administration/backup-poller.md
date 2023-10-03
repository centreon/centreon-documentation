---
id: backup-poller
title: Back up and restore your pollers
---

## Case n°1: Making backups to be able to install a new poller from scratch

### What you need to back up on your active poller

You need to back up the following elements to be able to rebuild your poller from scratch in case of a problem.

- Custom plugins (example: community plugins, or custom developments)
- If you are using it, the **centreon-vmware-daemon** connector (installation and configuration)
- Synchronize the following files regularly:
   - **/var/log/centreon-engine/retention.dat** every 15 minutes, to keep acknowledgements and downtimes
   - **/var/lib/centreon/centplugins/\*** every 5 minutes, to keep the plugins cache.

### Switching to the new poller

If your poller has died, [install a new poller](../installation/installation-of-a-poller/using-packages.md), in the correct version for your platform, attach it to the central server, then restore all the elements listed above.

If you want to keep the same IP address for your new poller, you will need to change the poller's fingerprint in the configuration of the central server. Read [the following article](https://thewatch.centreon.com/troubleshooting-41/poller-does-not-work-after-migration-or-reinstallation-fingerprint-changed-for-target-1177) on our community platform The Watch.

## Case n°2: "Standby" poller

Another way to prepare for disaster is to have a "standby" poller on which you synchronize the data from your active poller. If your poller dies, just switch to the standby poller.

### What you need to synchronize

Install and configure the same elements on your standby poller as on your active poller, and synchronize the following data:
rsync of local data files (acknowledgement and downtimes, etc)
/var/log/centreon-engine/retention.dat keeps the acknowledgements and the downtimes

### How to switch to the standby poller

1. Start the standby poller.
2. Attach the poller to the central?
3. Install - centreon-engine/broker packages
4. To restore ssh keys for monitoring via SSH:

```shell
   mkdir -p /var/lib/centreon-engine/.ssh/
   chmod 700 /var/lib/centreon-engine/.ssh/
   cp -p * /var/lib/centreon-engine/.ssh/
   ```

5. Transfer the monitored hosts to the new poller:

   1. Go to **Configuration > hosts**, then select the old poller.
   2. Select all the hosts monitored by this poller and then select **Mass change** from the **More actions** menu.
   3. Select the new poller and then click **OK**.
5. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md).
6. If you want to keep the same IP address for your new poller, you will need to change the poller's fingerprint in the configuration of the central server. Read [the following article](https://thewatch.centreon.com/troubleshooting-41/poller-does-not-work-after-migration-or-reinstallation-fingerprint-changed-for-target-1177) on our community platform The Watch.

## Case n°3: VM snapshots

If your poller is running on a VM, take regular snapshots of your poller. In case a problem occurs, restore the snapshot as with any virtual machine.


> extra info, not sure where it fits
/etc/centreon-gorgone  then the communication from the central server to the poller can be restored and the engine/broker configuration can be deployed. 

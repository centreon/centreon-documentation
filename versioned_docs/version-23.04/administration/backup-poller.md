---
id: backup-poller
title: Back up and restore your pollers
---

## Case n°1: Making backups to be able to install a new poller from scratch

### What you need to back up on your active poller

You need to back up the following elements to be able to rebuild your poller from scratch in case of a problem.

- Custom plugins (example: community plugins, or custom developments)
- If you are using it, the **centreon-vmware-daemon** connector (installation and configuration): backup **/etc/centreon/centreon_vmware.pm**
- If you are using it, the **centreon-as400** connector (installation and configuration): backup **/etc/centreon-as400/**
- Synchronize the following files regularly:
   - **/var/log/centreon-engine/retention.dat** (up to every 15 minutes) to keep acknowledgements, downtimes and statuses.
   - **/var/lib/centreon/centplugins/\*** (up to every 5 minutes) to keep the plugins cache.
   - **/etc/centreon-gorgone/config.d/\*** (once) to keep the connection information to the central server.
   - **/var/lib/centreon-gorgone/.keys/\*** (once) to keep the same fingerprint for ZeroMQ authentication.

### Switching to the new poller

If your poller has died, [install a new poller](../installation/installation-of-a-poller/using-packages.md), in the correct version for your platform, attach it to the central server, then restore all the elements listed above.

If you didn't backup **/var/lib/centreon-gorgone/.keys/\***, you will need to change the poller's fingerprint in the configuration of the central server. Read [the following article](https://thewatch.centreon.com/troubleshooting-41/poller-does-not-work-after-migration-or-reinstallation-fingerprint-changed-for-target-1177) on our community platform The Watch.

## Case n°2: "Standby" poller

Another way to prepare for disaster is to have a "standby" poller on which you synchronize the data from your active poller. If your poller dies, just switch to the standby poller.

### What you need to synchronize

Install and configure the same elements on your standby poller as on your active poller, and synchronize your data [as described here](#what-you-need-to-back-up-on-your-active-poller).

### How to switch to the standby poller

1. Start the standby poller if it is stopped.
2. Change the new poller's network configuration to give it the old poller's IP address.
3. Restart **gorgoned** on the poller first, then on the central.
   ```shell
   systemctl restart gorgoned
   ```
4. Make sure there are no communication errors in Gorgone's log.
   ```shell
   tail -F /var/log/centreon-gorgone/gorgoned.log | grep ERROR
   ```
5. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) for the poller using the **Restart** method.
6. If you didn't backup **/var/lib/centreon-gorgone/.keys/\***, you will need to change the poller's fingerprint in the cache of the central server. Read [the following article](https://thewatch.centreon.com/troubleshooting-41/poller-does-not-work-after-migration-or-reinstallation-fingerprint-changed-for-target-1177) on our community platform The Watch.

## Case n°3: VM snapshots

If your poller is running on a VM, take regular snapshots of your poller. In case a problem occurs, restore the snapshot as with any virtual machine.

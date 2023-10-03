---
id: disaster-recovery
title: Disaster recovery
---

To make sure your platform is resilient to failure, make sure you have backups stored on another server. You can:

- make snapshots of your VMs.
- back up the configuration [of your central server](backup.md) or [of your pollers](backup-poller.md) regularly.
- [set up a "standby poller"](backup-poller.md#standby-poller) that you sync with your poller so that it can take over in case of a crash.

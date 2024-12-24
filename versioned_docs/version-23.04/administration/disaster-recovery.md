---
id: disaster-recovery
title: Disaster recovery
---

For your platform to be resilient to failure, make sure you have backups stored on another server. You can:

- make snapshots of your VMs.
- back up the configuration [of your central server](backup.md) and [of your pollers](backup-poller.md) regularly.
- [set up a "standby poller"](backup-poller.md#case-n°2-standby-poller) that you sync with your poller so that it can take over in case of a crash.

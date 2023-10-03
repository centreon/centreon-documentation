---
id: disaster-recovery
title: Reprise après sinistre
---

Pour que votre plateforme résiste aux pannes, assurez-vous que faire des sauvegardes, stockées sur un autre serveur. Vous pouvez :

- faire des snapshots de vos VMs.
- faire des sauvegardes régulières de la configuration [de votre serveur central](backup.md) et [de vos collecteurs](backup-poller.md).
- [installer un collecteur d'appoint](backup-poller.md#standby-poller) synchronisé avec votre collecteur actif, afin que le collecteur d'appoint puisse prendre le relais en cas de panne.

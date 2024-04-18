---
id: monitoring-guide
title: Monitoring Centreon HA
---

Monitoring your HA setup using Centreon itself helps you keep track of the health of your cluster. It is strongly recommended to implement it.

## What to monitor

All elements of the cluster must be monitored by a poller, not by a central (to avoid having resources in a **Pending** status when the cluster fails over). For the same reason, each poller should be monitored by another poller.

* Create 1 host for the VIP, and monitor it with:
   * the [Centron Central monitoring connector](/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-central).
   * the [HTTP Server monitoring connector](/pp/integrations/plugin-packs/procedures/applications-protocol-http) to check the interface's response time.
* Create 1 host for each central node, and monitor it with:
    * the [Linux SNMP monitoring connector](/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp), to monitor the system of the host machine.
    * the [Centreon HA monitoring connector](/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha) to monitor the clustering services.
* Create 1 host per poller and monitor them with the [Centreon Poller monitoring connector](/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-poller).
* Create 1 host per database and monitor them with the [Centreon Database monitoring connector](/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-database).
* Monitor the quorum device:
   * if your quorum device is one of your pollers, create a service called something like **proc-corosync-qnetd** and apply the **App-Monitoring-Centreon-HA-Process-corosync-qnetd-custom** service template to it.
   * if your quorum device is hosted on another server, monitor its system with the [Linux SNMP monitoring connector](/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp), then add the **proc-corosync-qnetd** service mentioned above.

Make sure all the prerequisites are satisfied for all instances of these monitoring connectors (e.g. that the correct key exchanges have been made and the correct users have been authorized on each monitored server).

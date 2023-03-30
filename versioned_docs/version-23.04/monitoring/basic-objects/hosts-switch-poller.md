---
id: hosts-switch-poller
title: Switch poller
---

## Switch for one host

If you want that your host to be monitored by another poller than it is curently, you need to edit the host's configuration, and export the configuration to its new poller **AND the one it came from** :

1. Change the host configuration :

![image](../../assets/configuration/switch_poller.png)

2. [Deploy](../monitoring-servers/deploying-a-configuration.md) the configuration to the pollers :

![image](../../assets/configuration/export_conf_button.png)

## Switch for multiple hosts

You can use the [massive change](../generic-actions.md#massive-change) feature in order to change the monitoring poller for multiple hosts :

1. Select the hosts and use the massive change function :

![image](../../assets/configuration/massive_change_button.png)

2. Change the configuration :

![image](../../assets/configuration/massive_change_host_conf.png)

3. [Deploy](../monitoring-servers/deploying-a-configuration.md) the configuration to the pollers :

![image](../../assets/configuration/export_conf_button.png)

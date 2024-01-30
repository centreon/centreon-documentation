---
id: hosts-switch-poller
title: Change the monitoring server for a host
---

If you want to change the monitoring server that is monitoring a host, you need to edit the host's configuration and deploy the configuration for both the new poller and the one it used to be monitored by.

## Switch for one host

1. On the page **Configuration > Hosts > Hosts**, click the host you want to make changes to.

2. On the tab **Host configuration**, in the **Host basic information** section, update the **Monitoring server** field.

3. [Deploy the configuration](../monitoring-servers/deploying-a-configuration.md) for both the former monitoring server and the new one.

## Switch for multiple hosts

If you want to define the same new monitoring server for several hosts:

1. On the page **Configuration > Hosts**, select all the hosts you want to change.

2. In the **More actions** menu, select **Mass change**.

3. On the tab **Host configuration**, in the **Host basic information** section, update the **Monitoring server** field.

4. [Deploy the configuration](../monitoring-servers/deploying-a-configuration.md) for both the former monitoring server and the new one.

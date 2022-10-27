---
id: remote-server
title: Install on a remote server
---

## Installation of Centreon MAP for a Centreon remote server

Installation of Centreon MAP extension on a Centreon
remote server has to be done exactly like the installation on a
central server, only configuration and uninstallation are different.

If your Centreon remote server has not been installed yet, please refer to
the following
[documentation](../installation/installation-of-a-remote-server/using-packages.md)

Then refer to the [installation procedure](install.md) to install
the 2 mains components:

- The web interface.
- The server.

After that, you will have to perform the additional steps explained below, to finish
installing Centreon Map on your remote server.

## Images synchronisation

Add an access to the images synchronisation page **Administration  >  Parameters  >  Images**:
```shell
[root@remote ~]# mysql centreon
MariaDB [centreon]> update topology SET topology_show='1' where topology_name='Images' ;
```

## Centreon Broker configuration

In order to display real time statuses, **Centreon MAP** needs to receive this data from the Centreon remote server's Broker.
Broker output on the Centreon remote server, Centreon MAP can receive
real time data directly from its Centreon remote server.

To do so, you need to modify the Centreon Broker Master configuration of the
Centreon remote poller. Go to the **Configuration > Pollers > Broker
configuration** menu and edit the **remote server's** configuration.

In the **Output** tab, create a new output with the following parameters:

![image](../assets/graph-views/output_broker.png)

To complete the installation process, generate and deploy the Centreon remote
server configuration by selecting **Restart**.

## Uninstalling Centreon MAP

On a remote poller, you can uninstall **Centreon MAP** module the same
way as on the Centreon central server. All Centreon Broker configuration for the Centreon remote server linked to the Centreon
MAP module have to be manually removed. Look at the [Centreon Broker configuration](#centreon-broker-configuration) section above to
know what output you need to delete for your Centreon remote server(s).

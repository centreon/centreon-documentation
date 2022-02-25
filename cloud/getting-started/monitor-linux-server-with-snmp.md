---
id: monitor-linux-server-with-snmp
title: Monitor your first Linux host
---

## Monitoring a Linux server with SNMP

In this tutorial, we're assuming that your Centreon platform is installed and running well.

Your Linux server will be monitored using the Linux SNMP Plugin Pack. (More about Plugin Packs [here](../monitoring/pluginpacks.md)).

## Prerequisites

### On the Linux server you want to monitor

The first step is to activate and configure an SNMP agent on your monitored host.
Please refer to the documentation of your Linux distribution to know how to configure the SNMP agent.

Find below a minimalist snmpd.conf/net-snmp configuration file:

- replace **my-snmp-community** by the correct value for your environment.
- Add the line **view  centreon  included .1.3.6.1** to have access to all information in the MIB required by the plugin

```shell
#       sec.name  source          community
com2sec notConfigUser  default       my-snmp-community

####
# Second, map the security name into a group name:

#       groupName      securityModel securityName
group   notConfigGroup v1           notConfigUser
group   notConfigGroup v2c           notConfigUser

####
# Third, create a view for us to let the group have rights to:

# Make at least  snmpwalk -v 1 localhost -c public system fast again.
#       name           incl/excl     subtree         mask(optional)
view centreon included .1.3.6.1
view    systemview    included   .1.3.6.1.2.1.1
view    systemview    included   .1.3.6.1.2.1.25.1.1

```

The SNMP server must be restarted each time the configuration is modified. Also make sure that the SNMP server is configured to automatically start on boot. Use the following commands for recent distributions:

```shell
systemctl restart snmpd
systemctl enable snmpd
```

> The target server must be reachable from the Centreon Poller on the UDP/161 SNMP port.

### On the central server

On the web interface, go to **Configuration > Plugin Packs** and install the **Linux SNMP** Plugin Pack:

![image](../assets/getting-started/quick_start_linux_0.gif)

## Configure the host and deploy the configuration

1. Go to **Configuration > Hosts > Hosts** and click on **Add**:

   ![image](../assets/getting-started/quick_start_linux_1.gif)

2. Fill in the following information:

   * The name of the server (1)
   * A description of the server (2)
   * Its IP address (3)
   * The SNMP version and community (4)
   * Select the poller that will monitor your Linux server (5)

3. Click on **+ Add a new entry** in the **Templates** field (6), then select the **OS-Linux-SNMP-custom** template (7) from the list:

   ![image](../assets/getting-started/quick_start_linux_2.png)

4. Click on **Save** (8). Your equipment has been added to the list of hosts:

   ![image](../assets/getting-started/quick_start_linux_3.png)

5. Go to **Configuration > Services > Services by host**. A set of indicators has been created automatically.

   ![image](../assets/getting-started/quick_start_linux_4a.png)

   You can also use the shortcut beside the host's name to go directly to **Configuration > Services > Services by host**. The list will be filtered by the name of the host:

   ![image](../assets/getting-started/quick_start_linux_4b.png)

   ![image](../assets/getting-started/quick_start_linux_5.png)

6. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md).

7. Go to **Monitoring > Resources Status** and select **All** from the **Resource status** filter. At first, the resources appear with the status **Pending**, which means that no checks have been executed yet:

   ![image](../assets/getting-started/quick_start_linux_6.png)

   After a few minutes, the first results of the monitoring appear:

   ![image](../assets/getting-started/quick_start_linux_7.png)

   If not all services are in an OK state, check what causes the error and fix the problem.

---
id: monitor-windows-server-with-snmp
title: Monitor your first Windows host
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Monitoring a Windows server with SNMP

In this tutorial, we're assuming that your Centreon platform is installed and running well, and that you have at least a [Centreon IT 100 Edition](it100.md) that provides Centreon Plugin Packs (your [license](../administration/licenses.md) is already set up).

Your Windows server will be monitored using the [Windows SNMP Plugin Pack](/pp/integrations/plugin-packs/procedures/operatingsystems-windows-snmp). (More about Plugin Packs [here](../monitoring/pluginpacks.md)).

## Prerequisites

### On the Windows server you want to monitor

The first step is to install and configure the SNMP service on the Windows host you
want to monitor. Please refer to the documentation of your Windows distribution
to know how to configure the SNMP service.

Find below some steps to install and configure SNMP on Windows 10.

#### Installing SNMP on Windows 10

There are several ways to enable SNMP: from the **Settings** menu or by using PowerShell.

<Tabs groupId="sync">
<TabItem value="From the Settings menu" label="From the Settings menu">

1. Go to **Settings > Apps & features > Optional features**.

2. Click on **Add a feature** and search for SNMP:

  ![image](../assets/getting-started/quick_start_windows_snmp_4.png)

3. Select **Simple Network Management Protocol** (SNMP) and click on **Install**.

</TabItem>
<TabItem value="By using PowerShell" label="By using PowerShell">

1. Check if the SNMP service is installed:

  ```shell
  Get-WindowsCapability  -Online -Name "SNMP*"
  ```

  ![image](../assets/getting-started/quick_start_windows_snmp_1.png)

2. To install the SNMP service from Microsoft's servers, run the following command:

  ```shell
  Add-WindowsCapability  -Online -Name "SNMP.Client~~~~0.0.1.0"
  ```

   ![image](../assets/getting-started/quick_start_windows_snmp_2.png)

3. Check if the SNMP service has been installed successfully:

  ```shell
  Get-WindowsCapability  -Online -Name "SNMP*"
  ```

  ![image](../assets/getting-started/quick_start_windows_snmp_3.png)

</TabItem>
</Tabs>

#### Configuring SNMP on Windows 10

After installing SNMP, you need to configure it.

1. In the search bar, type **services.msc** and press **Enter** to launch the **Services** panel.

2. Look for the SNMP service in the list.

  ![image](../assets/getting-started/quick_start_windows_snmp_55.png)

3. On the **Agent** tab, fill in the **Contact** and **Location** parameters. Then in the **Service** section, check the boxes for services from which you want to collect data for forwarding it to the Centreon Poller which will monitor the host.

  ![image](../assets/getting-started/quick_start_windows_snmp_6.png)

4. On the **Security** tab, write the SNMP community in the **Accepted community names** section and choose the **READ ONLY** option.
Then select **Accept SNMP packets from these hosts** and add the IP address of the Centreon poller.

  ![image](../assets/getting-started/quick_start_windows_snmp_8.png)

5. Restart the SNMP Service:

  ![image](../assets/getting-started/quick_start_windows_snmp_5.png)

### On the Centreon poller

Connect to your poller using SSH and install the Windows SNMP plugin (see the [monitoring procedure for the **Windows SNMP** Plugin Pack](/pp/integrations/plugin-packs/procedures/operatingsystems-windows-snmp) for more information):

```shell
yum install centreon-plugin-Operatingsystems-Windows-Snmp
```

### On the central server

In the web interface, go to **Configuration > Plugin Packs** and install the **Windows SNMP** Plugin Pack:

![image](../assets/getting-started/quick_start_windows_snmp_10.gif)

## Configure the host and deploy the configuration

1. Go to **Configuration > Hosts > Hosts** and click on **Add**:

  ![image](../assets/getting-started/quick_start_windows_snmp_11.gif)

2. Fill in the following information:

   * The name of the server (1)
   * A description of the server (2)
   * The IP address of the server (3)
   * The SNMP version and community (4)
   * Select the poller that will monitor your Windows server (keep "Central" if you have no other poller) (5)

3. Click on **+ Add a new entry** in the **Templates** field (6), then select the **OS-Windows-SNMP-custom** template (7) from the list.

  ![image](../assets/getting-started/quick_start_windows_snmp_12.png)

4. Click on **Save**. Your equipment has been added to the list of hosts:

  ![image](../assets/getting-started/quick_start_windows_snmp_13.png)

5. Go to **Configuration > Services > Services by host**. A set of indicators has been automatically deployed:

  ![image](../assets/getting-started/quick_start_windows_snmp_14.png)

6. [Deploy the configuration](first-supervision.md#deploying-a-configuration).

7. Go to **Monitoring > Resources Status** and select **All** from the **Resource status** filter. At first, the resources appear with the status **Pending**, which means that no checks have been executed yet:

   ![image](../assets/getting-started/quick_start_windows_snmp_15.png)

   After a few minutes, the first results of the monitoring appear:

   ![image](../assets/getting-started/quick_start_windows_snmp_16.png)

   If not all services are in an OK state, check what causes the error and [fix the problem](/pp/integrations/plugin-packs/tutorials/troubleshooting-plugins).

## To go further

The **Windows SNMP** Plugin Pack provides several monitoring templates. Go to **Configuration > Services > Templates** to know the complete list:

   ![image](../assets/getting-started/quick_start_windows_snmp_18.png)

With **Centreon IT Edition** you can add very quickly and very simply the monitoring of your network cards, partitions, processes and services using the [Service Discovery](../monitoring/discovery/services-discovery.md) functionality.

1. Go to **Configuration > Services > Scan**. Start writing the name of the host and the web interface automatically completes the name:

	![image](../assets/getting-started/quick_start_windows_snmp_19.png)

2. Select the discovery command to run from the list that has just appeared below the **Rule** field. Then click on the **Scan** button and wait during the discovery. The result is displayed. Select items to add to the monitoring and click on the **Save** button:

	![image](../assets/getting-started/quick_start_windows_snmp_20.png)

The item was added. You can select another discovery command below **Rule** and repeat the process.

3. The services are added and can be displayed in the **Configuration > Services > Services by host** menu:

	![image](../assets/getting-started/quick_start_windows_snmp_21.png)

4. [Deploy the configuration](first-supervision.md#deploying-a-configuration).

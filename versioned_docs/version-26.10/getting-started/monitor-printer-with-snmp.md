---
id: monitor-printer-snmp
title: Monitor a printer with SNMP
description: "Monitor a network printer with Centreon over SNMP: install the Printer Standard monitoring connector, create the host with its SNMP settings and deploy it."
---

Go to the **Configuration > Connectors > Monitoring Connectors** menu, search for **Printer Standard**, then click the **+** icon on the Monitoring Connector's tile to install it.

Go to the **Configuration \> Hosts \> Hosts** menu and click **Add**.

Input the following information:

* **Name**: the name of the server
* **Alias**: a description of the server
* **Address**: the IP address
* **SNMP Community & Version**: the SNMP version and community

Click the **+ Add a new entry** button in **Templates** field, and then select the **HW-Printer-standard-rfc3805-custom**
template in the list.

Click **Save**.

Your device has been added to the list of hosts in **Configuration > Hosts > Hosts**.

Go to **Configuration \> Services \> Services by host**. A set of indicators has been automatically deployed:

![image](../assets/getting-started/quick_start_printer_3.png)

It is now time to [deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md).

Then go to **Monitoring > Resources Status** and select **All** from the **Resource status** filter. After a few minutes, the first results of the monitoring appear.

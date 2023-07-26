---
id: monitor-printer-snmp
title: Monitor a printer with SNMP
---

Go to the **Configuration \> Monitoring Connectors** menu and install the **Printer Standard** Monitoring Connector:

![image](../assets/getting-started/quick_start_printer_0.gif)

Go to the **Configuration \> Hosts \> Hosts** menu and click **Add**:

![image](../assets/getting-started/quick_start_printer_1.png)

Input the following information:

* The name of the server
* A description of the server
* The IP address
* The SNMP version and community

Click the **+ Add a new entry** button in **Templates** field, and then select the **HW-Printer-standard-rfc3805-custom**
template in the list.

Click **Save**.

Your device has been added to the monitoring configuration:

![image](../assets/getting-started/quick_start_printer_2.png)

Go to **Configuration \> Services \> Services by host**. A set of indicators has been automatically deployed:

![image](../assets/getting-started/quick_start_printer_3.png)

It is now time to [deploy the supervision](#deploying-a-configuration).

Then go to **Monitoring \> Status Details \> Services** and select the value **All** for the **Service Status**
filter. After a few minutes, the first results of the monitoring appear:

![image](../assets/getting-started/quick_start_printer_4.png)

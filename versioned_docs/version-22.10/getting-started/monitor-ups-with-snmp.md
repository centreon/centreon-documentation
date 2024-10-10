---
id: monitor-ups-snmp
title: Monitor UPS equipment with SNMP
---

Go to the **Configuration \> Plugin Packs** menu and install **UPS Standard** Plugin Pack:

![image](../assets/getting-started/quick_start_ups_0.gif)

Go to the **Configuration \> Hosts \> Hosts** menu and click on **Add**:

![image](../assets/getting-started/quick_start_ups_1.png)

Fill in the following information:

* The name of the server
* A description of the server
* The IP address
* The SNMP version and community

Click on **+ Add a new entry** button in **Templates** field, then select the **HW-UPS-Standard-Rfc1628-SNMP-custom**
template in the list.

Click on **Save**.

Your equipment has been added to the monitoring configuration:

![image](../assets/getting-started/quick_start_ups_2.png)

Go to **Configuration \> Services \> Services by host** menu. A set of indicators has been automatically deployed:

![image](../assets/getting-started/quick_start_ups_3.png)

It is now time to [deploy the configuration](first-supervision.md#deploying-a-configuration).

Then go to the **Monitoring \> Status Details \> Services** menu and select **All** value for the **Service Status**
filter. After a few minutes, the first results of the monitoring appear:

![image](../assets/getting-started/quick_start_ups_4.png)
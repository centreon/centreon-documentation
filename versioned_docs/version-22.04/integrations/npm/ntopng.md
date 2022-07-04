---
id: ntopng
title: Widget NtopNG
---

Use the NtopNG widget in [custom views](../../alerts-notifications/custom-views.md) to view data about network usage collected by an NtopNG server.

The widget can display the following views (see [**Examples**](#examples) below):

* **Top N Local address** : Display the n local hosts that receive/emit the most traffic
* **Top N Remote address** : Display the n remote hosts that receive/emit the most traffic
* **Top N Flows** : Display the top n flows by network usage (local/remote hosts and ports)
* **Top N Applications** : Display the n applications that emit/receive the most traffic (group flows by application)

## Configure the widget

To configure the widget, click on the wrench icon in its top right corner. A window opens:

![Parameters](../../assets/integrations/npm/Widget_NtopNG_Options.png)

### NtopNG Probe

* **Login**: Account used to access NtopNG (we recommend not to use an admin account)
* **Password**: Password for this account
* **Probe**: IP address of your NtopNG server
* **Protocol**: Protocol to use to connect to NtopNG (https by default)
* **Port**: Network port to connect to NtopNG (TCP/3000 by default)
* **Interface**: ID of the interface. You can find it in the NtopNG interface, on page **Interface**:

![Interface ID](../../assets/integrations/npm/NtopNG_Interface_ID.png)

### View

* **Mode**: Select the data you want to display
* **Top**: Define how many lines should be displayed

### Filters

Those filters only work for the **Top N Flows** view. You can filter on an IP address, on a port, or on both.

* **IP Address**: Display only the traffic related to a specific IP Address (do not use a hostname)
* **Port**: Display only the traffic on this particular port.

### Misc

* **Refresh interval (seconds)**: Define how often the data should be refreshed.

## Examples

### Top N Local address

![Top N Local address](../../assets/integrations/npm/Widget_NtopNG_Top_N_Local.png)

### Top N Remote address

![Top N Remote address](../../assets/integrations/npm/Widget_NtopNG_Top_N_Remote.png)

### Top N Flows

Widget without a filter:

![Top N Flows](../../assets/integrations/npm/Widget_NtopNG_Top_N_Flows.png)

Widget with a filter on an IP address:

![Top N Flows Address Filter](../../assets/integrations/npm/Widget_NtopNG_Top_N_Flows_Address_Filter.png)

Widget with a filter on a port and an IP address:

![Top N Flows Address Port Filters](../../assets/integrations/npm/Widget_NtopNG_Top_N_Flows_Address_Port_Filters.png)

### Top N Applications

![Top N Applications](../../assets/integrations/npm/Widget_NtopNG_Top_N_Applications.png)
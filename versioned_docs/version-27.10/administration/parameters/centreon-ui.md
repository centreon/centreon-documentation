---
id: centreon-ui
title: Centreon UI
description: "Configure the general options of the Centreon web interface: proxy, notification inheritance, page sizes, refresh intervals, sorting, charts, autologin, time zone and search."
---

The **Centreon UI** page holds the options that apply to the whole Centreon web interface, for every user.

To change them, go to **Administration > Parameters > Centreon UI**, edit the fields, then click **Save**.

## Configure a proxy {#proxy-configuration}

Configure a proxy if your central server reaches the internet through one. Centreon needs internet access to [check your license](../licenses.md) and to download Monitoring Connectors.

1. In the **Proxy options** section, fill in the following fields:

   | Field              | Value                                                                   |
   | ------------------ | ----------------------------------------------------------------------- |
   | **Proxy URL**      | URL of the proxy, including the protocol: `http://` or `https://`.      |
   | **Proxy port**     | Port of the proxy.                                                      |
   | **Proxy user**     | User for the proxy. Only if the proxy uses basic authentication.        |
   | **Proxy password** | Password of this user. Only if the proxy uses basic authentication.     |

2. Click **Test Internet Connection**. Centreon tries to reach its servers (`api.imp.centreon.com`) through the proxy, using the URL and port you entered: you do not need to save first.

   - If **Connection Successful** appears, the proxy works.
   - Otherwise, the message gives the error. Check the URL and the port, then test again.

   > The test does not use **Proxy user** and **Proxy password**. If your proxy requires authentication, check these two fields carefully.

3. Click **Save**.

## Options reference

The options below are listed in the order of the page, section by section.

### Centreon information

| Option        | What it does                                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------- |
| **Directory** | Directory where Centreon is installed. Centreon checks that it can write to it when you save. |

### Notification

| Option                                           | What it does                                                                                                                                                                                                                                                                                                  | Default                    |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| **Contacts & Contact groups method calculation** | How Centreon finds the contacts and contact groups to notify for a host or a service that inherits them from templates: **Vertical Inheritance Only**, **Closest Value** or **Cumulative inheritance**. See [Contacts & Contact groups method calculation](../../alerts-notifications/notif-configuration.md#contacts--contact-groups-method-calculation). | **Cumulative inheritance** |

### Maximum page size

| Option                                  | What it does                                                                         | Default |
| --------------------------------------- | ------------------------------------------------------------------------------------ | ------- |
| **Limit per page (default)**            | Number of objects per page in the **Configuration** menu lists.                      | 30      |
| **Limit per page for Monitoring**       | Number of objects per page in the monitoring consoles, from 10 to 100.               | 30      |
| **Graph per page for Performances**     | Number of charts per page on the **Performances** page.                              | 18      |
| **Number of elements loaded in select** | Number of items loaded at a time in drop-down lists. The next ones load as you scroll. | 60      |

### Sessions properties

| Option                       | What it does                                                                                                                                       | Default     |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **Sessions Expiration Time** | How long a session lasts, in minutes. The value cannot be greater than the `session.gc_maxlifetime` value set in the `centreon.ini` PHP file. | 120 minutes |

### Refresh properties

| Option                              | What it does                                                                     | Default    |
| ----------------------------------- | -------------------------------------------------------------------------------- | ---------- |
| **Refresh Interval for statistics** | How often the top counters refresh, in seconds. Minimum: 10.                     | 15 seconds |
| **Refresh Interval for monitoring** | How often the monitoring consoles refresh, in seconds. Minimum: 10.              | 15 seconds |

### Display properties

| Option         | What it does                                                                                                                                           | Default       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| **Sort by**    | Default sort column of host and service lists in the monitoring consoles: **Hosts**, **Duration**, **Services**, **Status**, **Last check**, **Output**, **Criticality** or **Attempt**. | **Hosts**     |
| **Order sort** | Default sort order of these lists: **Ascending** or **Descending**.                                                                                    | **Ascending** |

### Problem display properties

| Option                  | What it does                                                                                                                                       | Default       |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| **Sort problems by**    | Default sort column of problem lists in the monitoring consoles: **Duration**, **Hosts**, **Services**, **Status**, **Last check**, **Output** or **Criticality**. | **Duration**  |
| **Order sort problems** | Default sort order of problem lists: **Ascending** or **Descending**.                                                                              | **Ascending** |

### Chart options

| Option                                           | What it does                                                                         | Default  |
| ------------------------------------------------ | ------------------------------------------------------------------------------------ | -------- |
| **Display downtime and acknowledgment on chart** | Shows downtimes and acknowledgments on metric charts. Charts may take longer to display. | Disabled |
| **Display comment on chart**                     | Shows comments on status charts. Charts may take longer to display.                  | Disabled |

### Authentication properties

| Option                         | What it does                                                                                                         | Default  |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------- | -------- |
| **Enable Autologin**           | Lets users connect through a URL, without typing their credentials. See [Configuring Autologin](../../connect/autologin.md). | Disabled |
| **Display Autologin shortcut** | Adds **Copy autologin link** to the profile menu, to get the autologin URL of the current page.                      | Enabled  |

### Time zone

| Option       | What it does                                                          |
| ------------ | --------------------------------------------------------------------- |
| **Timezone** | Default time zone of hosts and contacts that have no time zone set.   |

### Support information

| Option                     | What it does                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------ |
| **Centreon Support Email** | Email address of your help desk. It is shown at the bottom of the interface, so users can contact it. |

### Statistics

| Option                        | What it does                                                                                                                                                         |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Send anonymous statistics** | Takes part in the Centreon Customer Experience Improvement Program: the platform sends anonymous usage data to Centreon, only to improve the product. You can opt out at any time. |

### Resource status performance

| Option                        | What it does                                                                                                                                                                                                                                                                     | Default         |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| **Free text search behavior** | Fields searched by the free text search of the **Resource Status** page. **Limited search**: host name, alias and address, and service name. Choose it if you have a lot of resources, to keep the search fast. **Full search**: also searches the output of the checks. Use it only with a small number of resources, as it slows down the search. | **Full search** |

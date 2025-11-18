---
id: centreon-ui
title: Centreon UI
---

This part covers the configuration of the general options of the Centreon web
interface.

Go to **Administration > Parameters > Centreon UI**.

## General options

- **Directory** indicates the directory where Centreon is installed
- **Contacts & Contact groups method calculation** lets you define how
notification inheritance for hosts and services will be calculated.
- The **Limit per page (default)** field defines the number of objects displayed
per **Configuration** page
- The **Limit per page for Monitoring** field defines the number of objects
displayed per page in the **Monitoring** menu
- The **Graph per page for Performances** field defines the maximum number of
charts displayed on the **Performance** page
- The **Number of elements loaded in select** field defines the maximum number in
the selection box
- The **Sessions Expiration Time** field, expressed in minutes, indicates the
maximum session duration
- The **Refresh Interval for statistics** field, expressed in seconds, indicates
the refreshment interval for the statistics page
- The **Refresh Interval for monitoring** field, expressed in seconds, indicates
the refreshment interval for the objects on the monitoring page
- The **Sort problems by** field is used to choose how to sort the incidents in
the **Monitoring** menu
- The **Order sort problems** field indicates the display order for incidents, by
ascending or descending order of gravity
- **Display downtime and acknowledgment on chart** is used to display downtime
and acknowledgments on a chart
- **Display comment on chart** is used to display comments from the service on a chart
- The **Timezone** field indicates the timezone of your monitoring server.
- The **Centreon Support Email** field indicates the e-mail address of the
**Customer service support center** for the Centreon platform. This e-mail
address will be displayed at the bottom of the page on the **Centreon
Support** link.
- The **Send anonymous statistics** box defines whether or not the platform will
send anonymous information for **Centreon Customer Experience Improvement**

## Proxy configuration

The proxy configuration is mandatory when using the Centreon IT Edition.

![image](../../assets/administration/proxy_configuration.png)

Define the required information:

- **Proxy URL**
- **Proxy port**
- **Proxy user**
- **Proxy password**

Once you have defined the settings, test your configuration by clicking the **Test Internet Connection** button.

To validate the configuration, click the **Test Internet Connection** button. If the message
**Connection Successful** appears, your configuration is valid. If not, modify your parameters.

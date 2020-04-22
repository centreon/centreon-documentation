---
id: notif-configuration
title: Configuration
---

## Engine

The first step is to verify that the scheduler (Centreon Engine) is programmed to send notifications.

Go to the **Configuration > Pollers > Engine configuration** menu and select the scheduler.

![image](assets/alerts/notif_engine_conf.png)

In the **Check Options**, select **Yes** for the **Notification Option** option. Then click on the **Save** button.

> You will also need to configure the **mail relay** in the configuration of the associated server.
> By default, the mail manager installed is postfix. Check the [official documentation](http://www.postfix.org/BASIC_CONFIGURATION_README.html) to help you.


## Contacts & Contact groups method calculation

Since Centreon version **19.10**, 3 methods for determining the contacts and groups of contacts that will be notified
are available:

* **Vertical Inheritance Only**: get contacts and contactgroups of resources and linked templates, using additive
  inheritance enabled option (Legacy method, keep for upgrade)
* **Closest Value**: get most closed contacts and contactgroups of resources including templates
* **Cumulative inheritance**: Cumulate all contacts and contactgroups of resources and linked templates (method used
  for new installation)

Go to the **Administration > Parameters > Centreon UI** menu and select the desired option:

![image](assets/alerts/notif_centreon_config.png)

Then click on the **Save** button.

> The **Cumulative inheritance** option is the easiest to program.

## Contact

To receive notification, the parameters of the contact must be configured.

Go to the **Configuration > Users > Contacts / Users** menu and select your contact:

![image](assets/alerts/notif_contact_config.png)

1. Select the statuses of which you wish to receive notifications using **Notification Option** option.
2. Select the **Notification Period** on which you want to receive notification.
3. Then select the method to receive notification using **Notification Commands**

Then click on the **Save** button.

Once your contacts are ready to receive notifications, you must link them to the resources from which you want to
receive notifications.

> You can use **[template of contact](../monitoring/templates.html#contact-templates)** to define default parameters and
> inherit all your contacts from this model. 

## Host

Go to the **Configuration > Hosts > Hosts** menu and select a host. Go to the **Notification** tab and adjust the
parameters:

![image](assets/alerts/notif_host_config.png)

* **Notification Options**: Select the statuses of which you wish to receive notifications
* **Notification Interval**: Define the number of "time units" to wait before re-notifying a contact that this host is
  still down or unreachable. With the default time unit of 60s, this number will mean multiples of 1 minute. A value of
  0 disables re-notifications of contacts about problems for this host - only one problem notification will be sent out.
* **Notification Period**: Specify the time period during which notifications of events for this host can be sent out
  to contacts. If a state change occurs during a time which is not covered by the time period, no notifications will be
  sent out.
* **First notification delay**: Define the number of "time units" to wait before sending out the first problem
  notification when this host enters a non-UP state. With the default time unit of 60s, this number will mean multiples
  of 1 minute. If you set this value to 0, monitoring engine will start sending out notifications immediately.
* **Recovery notification delay**: Define the number of "time units" to wait before sending out the recovery
  notification when this host enters an UP state. With the default time unit of 60s, this number will mean multiples of
  1 minute. If you set this value to 0, monitoring engine will start sending out notifications immediately.

> To facilitate the configuration of the notification, you can adjust the parameters on a host template. All hosts that
> inherit this template will also inherit these settings.

## Service

Go to the **Configuration > Services > Services by host** menu and select a service. Go to the **Notification** tab and
adjust the parameters:

![image](assets/alerts/notif_service_config.png)

* **Notification Options**: Select the statuses of which you wish to receive notifications
* **Notification Interval**: Define the number of "time units" to wait before re-notifying a contact that this host is
  still down or unreachable. With the default time unit of 60s, this number will mean multiples of 1 minute. A value of
  0 disables re-notifications of contacts about problems for this host - only one problem notification will be sent out.
* **Notification Period**: Specify the time period during which notifications of events for this host can be sent out
  to contacts. If a state change occurs during a time which is not covered by the time period, no notifications will be
  sent out.
* **First notification delay**: Define the number of "time units" to wait before sending out the first problem
  notification when this host enters a non-UP state. With the default time unit of 60s, this number will mean multiples
  of 1 minute. If you set this value to 0, monitoring engine will start sending out notifications immediately.
* **Recovery notification delay**: Define the number of "time units" to wait before sending out the recovery
  notification when this host enters an UP state. With the default time unit of 60s, this number will mean multiples of
  1 minute. If you set this value to 0, monitoring engine will start sending out notifications immediately.

> To facilitate the configuration of the notification, you can adjust the parameters on a service template. All services
> that inherit this template will also inherit these settings.

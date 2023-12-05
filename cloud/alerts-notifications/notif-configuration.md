---
id: notif-configuration
title: Configuring notifications
---

By default, no notifications are sent by Centreon Cloud. To activate notification emails for specific resources, you need to create notification rules.

Notifications are sent from the central server, according to the central server's time zone.

## In which cases can notifications be sent?

For each notification rule, you define in which cases the notifications will be sent:

* when a resource enters a non-ok status (**Warning**, **Critical** or **Unknown** for a service, **Down** or **Unreachable** for a host)
* when a resource goes back to an OK status (**Recovery** notification).

## How are resources checked?

Resources are checked according to the following parameters:

* Checks are made 24x7, every 5 minutes for as long as the host or service is in an OK state.
* When a host or service enters a non-ok status (SOFT status type, e.g. Down SOFT for a host), Centreon checks 3 times that the host or service is still in a non-ok state (1 minute elapses between each of these checks).
* If, after these 3 checks, the resource is still in a non-ok status, its status type becomes HARD. If notifications are activated for this status, a notification email is sent.
* When the resource goes back to an OK state, an email notification is sent if you have activated notifications in case of **Recovery**.
* Contacts receive one notification email when the status of the resource changes (according to the statuses you have defined) - and one only. Example: if you have only selected **Critical**, no email will be sent when the service enters a **Warning** status. One email will be sent when the service becomes **Critical**, but no more.
* If a service already had a critical status before you created a rule that activates notifications for the critical status, then no email notification will be sent.

## Creating a notification rule

1. Go to **Configuration > Notifications > Notifications**.
2. Click the **Add** button above the list, on the left. The details panel for the new notification opens.
3. Configure the notification rule:

   - Enter a name for the rule in the **Name** field at the top of the panel.
   - Select the host groups and/or service groups you want to send notifications for. For each type of resource, select the events that will trigger a notification.
   - Select the users (contacts) you want to be notified in case of an event.
   - Define an email template. A default template is provided. You can modify it and use macros (variables). To insert a macro in your template, use the **Macros** button at the bottom right of the preview box.
	
    | Macro | Description | Example |
    | ----- | ----------- |-------- |
	|{{NOTIFICATIONTYPE}}| **Recovery**, **Warning**, **Critical** or **Unknown** for a service; **Recovery**, **Down** or **Unreachable** for a host. | CRITICAL |
	{{NAME}}| The name of the service or host. For a service, the name of the host it is attached to is also given. | central/proc-ntpd |
	{{ID}}| An internal ID for the resource. This can be used for API calls. | 41:209 |
	{{STATE}}| The [status](./concepts.md) that the resource has just entered. | CRITICAL |
	{{SHORTDATETIME}}| Date and time in the following format: MM/DD/YY h:mm:ss | 10/18/23 12:20:42 |
    {{LONGDATETIME}}| Date and time, including the day of the week.  | Wednesday October 18, 2023, 12:20:42 |
	{{OUTPUT}}| The output of the check command, i.e. the text that is displayed in the **Information** column in the **Resources status** page. | CRITICAL: Number of current processes running: 0 |

3. Click the **Save** button at the top right of the panel. The new notification rule appears in the list. You may have to wait up to 5 minutes before the rule starts being applied.

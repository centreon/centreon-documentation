---
id: notif-escalation
title: Escalation
---

## Definition

Generally, if an alert is triggered, a notification serves to contact one or more contacts (or groups of contacts). In
the same way it is possible to send multiple notifications at regular time intervals.

An escalation of notifications serves to contact various groups of contacts during the notifications process or to
change the means of notification (replace mails by an SMS).
The definition of a notification escalation to a host, a host group, a service, a service group or a meta-service
overwrites the normal configuration of notifications for this object.

E.g.: a service A is set to send notifications to a group of contacts “A” in case of Not-OK status. These notifications
are sent every 5 minutes. If during a certain number of notifications sent the status of the service is still Not-OK,
it is possible to contact the individuals of the group of contacts “B” etc...

Escalations of notification are convenient in the situation where level 1, level 2, level 3, etc., support level teams
exist within a company. When a problem appears the level 1 support team is contacted. If after a certain time the level
1 team has not succeeded in solving the problem, the level 2 team is alerted, etc.

## Principle

Notifications escalations allow two things:

* Notifying various contacts according to the number of notifications sent
* Changing the command of notification over time

In case of the use of notifications escalations, the retrieval of the list of contacts is a little different:

1. A service (or a host) is checked at regular intervals according to the check period defined for it
2. If an anomaly occurs (Not-OK status), the service (or the host) goes into the SOFT state
3. After the Max Check Attempts exceeded and if the service (or the host) persists in its Not-OK status its state changes
  from SOFT to HARD. The monitoring engine caches the notification number for the service (or the host): i.e. 0.

At each interval or sending of notification to the service (or the host) and until the end of the Not-OK status, the
monitoring engine performs the following operations:

1. If no notification escalation is defined for the service (or the host) and the current notification number, the
  notification is processed in the same way as for a normal notification: the monitoring engine uses the notification
  configuration defined for the service (or the host).
2. If a notification escalation is defined for the service (or the host) and the current notification number, the
  monitoring engine bases itself on the configuration of the escalation to select the contacts to be notified and the
  mechanism to be used.
3. The processing mechanism for a notification is the same as the sending of a normal notification

## Configuration

To add an escalation of notification, go into the menu: **Configuration > Notifications > Escalations** and click on
**Add**

![image](assets/alerts/04notificationsescalation.png)

* The **Escalation Name** and **Alias** fields serve to define a name and an alias for the notification escalation.
* The **First Notification** field allows us to choose the notification number as of which the group of contacts is
  alerted.
* The **Last Notification** allows us to choose the last notification number at which the group of contacts is alerted.
  If the group of contacts is the last level of the escalation the value of this field is 0.
* The **Notification Interval** field defines the notification interval between alerts.
* The **Escalation Period** field defines the notification time period.
* The **Hosts Escalation Options** and **Services Escalation Options** service escalation fields define the statuses of
  hosts and of services for which the escalation is used.
* The **Linked Contact Groups** defines the group of contacts to be contacted on triggering the escalation.
* The **Comments** field can be used to comment on the escalation.

### Application of the escalation

To select the various objects that will be concerned by this escalation, the **Hosts Escalation**, **Services Escalation**,
**Hostgroups Escalation**, **Meta Service Escalation** and **Servicegroups Escalation** tabs serve to choose the objects
to which the escalations are applied.

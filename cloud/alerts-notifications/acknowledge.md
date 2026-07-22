---
id: acknowledge
title: Acknowledging an alert
description: How to acknowledge an alert to pause notifications, and how to disacknowledge it from the Resources Status page
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Principle

When a host or a service has an incident and this incident is
confirmed, the notification process is triggered. This can generate a
notification sent to a contact.

The acknowledgment of an alert can be used to stop the notification
process (sending of notifications) until the host or the service
resumes its nominal status.

Example of use:

A service is in charge of checking the health of the hard disks in a
disk array. A hard disk on a disk array goes down, and a notification is
sent. The monitoring operator acknowledges the service, specifying that a
team is in the process of dealing with the problem. Notifications are no
longer sent. The service will return to its nominal state after a change
of disk.

> The acknowledgment of an alert means that a monitoring user
> has taken the problem into account - not that the incident has been
> corrected; this can only take effect when the check returns to its
> nominal state.

### Specific behavior for Business Activities

> If you are using the **Business Activity Monitoring** module, acknowledgments apply only to the specific object (BA or KPI).

Acknowledgements apply to Business Activities (BAs) as follows:
- Acknowledging a BA does not acknowledge its underlying KPIs (whether these KPIs are BAs, services, or meta-services).
- Acknowledging a KPI does not acknowledge the BA that depends on it.

### Practice

To acknowledge an alert:

1. Go to **Monitoring > Resources Status**.
2. Use one of the following methods:
    - Select the object(s) that you want to acknowledge, then click the **Acknowledge** button above the list of resources.
    - Hover over the resource you want to acknowledge, then click the **Acknowledge** icon that appears on the left.

        ![image](../assets/alerts/resources-status/ack-hover.gif)

    A window appears:

    -   The **Comment** field is generally used to provide the reason for the
    acknowledgment. It is mandatory.

    -   If the **Notify** box is checked, a notification is sent to the
    contacts linked to the object to warn them that the incident on the
    resource has been acknowledged (if the contact
    possesses the activity acknowledgment notification filter).

    -   If the **Sticky for any non-OK status** box is checked, the acknowledgment will be
    maintained in case of a change of Not-OK status (e.g.: DOWN to
    UNREACHABLE or WARNING to CRITICAL). Otherwise, the acknowledgment
    disappears and the notification process is reactivated.

    - If, for a host, the **Acknowledge services attached to host** box is checked, acknowledging the alert on the host will acknowledge all services for this host automatically.

### Disacknowledging resources

To delete the acknowledgment of an incident on an object:

1. Go to **Monitoring > Resources Status**.
2. Select the objects you want to disacknowledge.
3. In the **More actions** menu, click **Disacknowledge**.

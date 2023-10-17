---
id: acknowledge
title: Acknowledging an alert
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

### Practice

To acknowledge an alert:

1. Go to **Monitoring > Resources Status**.
2. Use one of the following methods:
    - Select the object(s) that you want to acknowledge, then click the **Acknowledge** button above the list of resources.
    - Hover over the resource you want to acknowledge, then click the **Acknowledge** icon that appears on the left.

        ![image](../assets/alerts/resources-status/ack-hover.gif)

    The following window appears:

    ![image](../assets/alerts/resources-status/ack-popup.png)

    -   The **Comment** field is generally used to provide the reason for the
    acknowledgment. It is mandatory.

    -   If the **Notify** box is checked, a notification is sent to the
    contacts linked to the object to warn them that the incident on the
    resource has been acknowledged (if the contact
    possesses the activity acknowledgment notification filter).

    -   If the **Persistent** box is checked, the acknowledgment will be
    maintained even if the monitoring engine is restarted. Otherwise, the
    acknowledgment disappears and the notification process is
    reactivated.

    -   If the **Sticky** box is checked, the acknowledgment will be
    maintained in case of a change of Not-OK status (e.g.: DOWN to
    UNREACHABLE or WARNING to CRITICAL). Otherwise, the acknowledgment
    disappears and the notification process is reactivated.

### Disacknowledging resources

To delete the acknowledgment of an incident on an object:

1. Go to **Monitoring > Resources Status**.
2. Select the objects you want to disacknowledge.
3. In the **More actions** menu, click **Disacknowledge**.

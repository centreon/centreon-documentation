---
id: other
title: Other actions
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Adding a comment

### Principle

Centreon allows us to add comments on an object. This comment is visible by
anyone having access to the resource (host or service). A comment has the
following properties:

-   Hostname
-   Servicename if the comment is associated with a service
-   Date of entry of the comment
-   Author of the comment
-   The contents of the comment
-   The validity of the comment against a restart of the scheduler

### Practice

There are two solutions to add a comment:

<Tabs groupId="sync">
<TabItem value="From the detailed sheet of an object" label="From the detailed sheet of an object">

1.  Access to the details page of the object
2.  In the **Host/Service Commands** category , click **Add a comment
    for this host/this service**

</TabItem>
<TabItem value="From the Comment menu" label="From the Comment menu">

1.  Go to **Monitoring > Downtimes > Comments**
2.  Click **Add a Service Comment** or **Add a Host Comment**

</TabItem>
</Tabs>

The following window appears:

![image](../assets/alerts/comment.png)

-   The **Host Name** field defines the host concerned by the comment.
-   If you have chosen to add a comment to a service, the **Service**
    field can be used to select the service concerned by the comment.
-   If the **Persistent** box is checked, the comment will be maintained
    in the event of a restart of the scheduler.
-   The **Comments** field contains the comment itself.

## Management of checks

### Principle

It is possible to temporarily enable or disable a check on a host or a service.

> Changes to settings checks do not affect the configuration of the
> object in the database. These changes are made on the supervision in
> real time, and they are canceled if the scheduler is restarted.

### Practice

<Tabs groupId="sync">
<TabItem value="From the detailed sheet of an object" label="From the detailed sheet of an object">

1.  Access the details page of the object
2.  In the category: **Options** go to the line: **Active checks** to
    check the state of the checks.

To:

-   Enable the check, click ![image](../assets/configuration/common/enabled.png)
-   Disable the check, click ![image](../assets/configuration/common/disabled.png)

</TabItem>
<TabItem value="From real time monitoring" label="From real time monitoring">

1.  Go into the **Monitoring > Status Details > Hosts** (or **Services**)
    menu.
2.  Select the object(s) on which you want to enable or disable the
    check.
3.  In the menu: **More actions** click

-   **Hosts: Disable Check** or **Services: Disable Check** to stop the
    checks for a host or a service
-   **Hosts: Enable Check** or **Services: Enable Check** to enable the
    check of a host or of a service

</TabItem>
</Tabs>


## Management of notifications

### Principle

It is possible to temporarily enable or disable the notification of a
host or a service.

> Changes to the notification settings do not affect the configuration of
> the object in the database. These changes are made on the real time
> monitoring, and they are canceled if the scheduler is restarted.

### Practice

There are two ways of managing notifications:

<Tabs groupId="sync">
<TabItem value="From the detailed sheet of an object" label="From the detailed sheet of an object">

1.  Access the details page of the object
2.  In the category: **Options** go to the line: **Service
    Notifications**

To:

-   Enable the notification, click ![image](../assets/configuration/common/enabled.png)
-   Disable the notification, click ![image](../assets/configuration/common/disabled.png)

</TabItem>
<TabItem value="From real time monitoring" label="From real time monitoring">

1.  Go into the **Monitoring > Status Details > Hosts** (or **Services**)
    menu.
2.  Select the host(s) / service(s) whose notification you want
    to enable or disable
3.  In the menu: **More actions** click

-   **Hosts: Disable Notification** or **Services: Disable
    Notification** to stop the notification of a host or of a service
-   **Hosts: Enable Notification** or **Services: Enable Notification**
    to enable the notification of a host or a service

</TabItem>
</Tabs>

## Reprogramming checks

### Principle

By default, the checks (checks on a service) are executed at regular
intervals following the configuration defined by the user. It is
possible to act on the check scheduling pile to change the
programming of the checks.

There are two types of programming:

-   Normal programming: the service check is given priority in the
    scheduler queue (asap).
-   Forced programming: the service check is given priority in the
    scheduler queue (asap) even if the time of the execution request is
    outside the check period or if the service is not of the active
    type.

### Practice

There are two ways of forcing the check of a service:

<Tabs groupId="sync">
<TabItem value="From the detailed sheet of an object" label="From the detailed sheet of an object">

1.  Access the detail page of the object
2.  In the category **Host Commands** (or **Service Commands**), click
    **Re-schedule the next check for this host / service** or
    **Re-schedule the next check for this host / service (forced)**

</TabItem>
<TabItem value="From real time monitoring" label="From real time monitoring">

1.  Go into the following menu: **Monitoring > Status Details > Hosts** (or
    **Services**)
2.  Select the objects for which you want to force the check
3.  In the menu: **More actions…** click **Schedule immediate check**
    or **Schedule immediate check (Forced)**

</TabItem>
</Tabs>
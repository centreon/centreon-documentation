---
id: manage-alerts
title: Manage alerts
---

This chapter presents the different methods to manage alerts.

## Acknowledging a problem

### Principle

When a host or a service presents an incident and this incident is
confirmed, the notification process is triggered, it can generate a
notification sent to a contact. If the problem persists and depending on
the configuration produced (resend a notification at regular time
intervals, escalation of notification, etc.) it is possible that other
alerts be send.

The acknowledgment of an incident can be used to stop the notification
process (sending of notifications) until the host or the service
recovers its nominal status.

Example of use:

A service is charged with checking the health of the hard disks in a
disc array. A hard disk goes down on a disk array, a notification is
sent. The monitoring operator acknowledges the service specifying that a
team is in the process of dealing with the problem. Notifications are no
longer sent. The service will return to its nominal state after a change
of disk.

> The acknowledgment of an incident signifies the taking into account of
> the problem by a user of the supervision (and not the correction of
> the incident which can only be effective when the check returns to its
> nominal state).

### Practice

To acknowledge an incident, there are two solutions:

<!--DOCUSAURUS_CODE_TABS-->

<!--From real time monitoring-->

1.  Go into the `Monitoring > Status Details > Hosts` (or `Services`)
    menu
2.  Select the object(s) that you want acknowledge
3.  In the menu: **More actions** click on **Hosts: Acknowledge** or on
    **Services: Acknowledge**

<!--From the detailed sheet of an object-->

From of the detail page of an object, click on the icon |enabled| associated
with the **Acknowledged** field in the **Options** frame

<!--END_DOCUSAURUS_CODE_TABS-->

The following window appears:

![image](../assets/alerts/acknowledged.png)

-   If the **Sticky** box is checked, the acknowledgment will be
    maintained in case of a change of Not-OK status (E.g.: DOWN to
    UNREACHABLE or WARNING to CRITICAL). Otherwise, the acknowledgment
    disappears and the notification process is reactivated.
-   If the **Notify** box is checked, a notification is sent to the
    contacts linked to the object to warn that the incident on the
    resource has been acknowledged (in the situation the contact
    possesses the activity acknowledgment notification filter).
-   If the **Persistent** box is checked, the acknowledgment will be
    maintained in the case of a restart of the scheduler. Otherwise, the
    acknowledgment disappears and the notification process is
    reactivated.
-   The **Comment** field is generally used to provide the reason of the
    acknowledgment, it is mandatory
-   If the **Acknowledge services attached to hosts** box is checked,
    all the services linked to the host will be acknowledged (option
    visible only if we acknowledge a host).
-   If the **Force active checks** box is checked, a command will be
    sent to the scheduler to recheck the resource as soon as possible.

To delete the acknowledgment of an incident on an object:

1.  Go into the `Monitoring > Status Details > Hosts` (or `Services`)
    menu
2.  Select the objects you want to delete the acknowledgment
3.  In the **More actions** menu, click on **Hosts: Disacknowledge** or
    on **Services: Disacknowledge**

## Add a downtime

### Principle

A downtime period is a time period during which the notifications to a
resource are disabled. Downtimes period are used during a programmed
maintenance operation, they save us receiving false-positive alerts.

> It is important to select the all the resources necessary to prevent
> false-positives and false-negatives. In addition, the time spent in
> this state is taken into account during the generation of the
> availability data.

There are two types of downtime:

-   The **fixed** downtime: it starts and stops at the preview time.
-   The **flexible** downtime: it starts during the preview time window
    as soon as an incident is detected and finishes when preview time in
    seconds expires.

### Practice

There are three different possibilities to define a downtime:

-   From the detail sheets of a host or of the service
-   From the real time monitoring interface
-   From the **Downtime** menu

<!--DOCUSAURUS_CODE_TABS-->
<!--From the detailed sheet of an object-->

1.  Access the detail page of an object
2.  In the category: **Commands**, click on **Schedule downtime for this
    host/service**

<!--From real time monitoring-->

1.  Go into the `Monitoring > Status Details > Hosts` (or `Services`)
    menu
2.  Select the(s) object(s) on which you want to program a downtime
    period
3.  In the **More actions…** menu, click on **Hosts : Set Downtime** or
    **Services : Set Downtime**

<!--From the Downtime menu-->

1.  Go into the `Monitoring > Downtimes > Downtimes` menu
2.  Click on **Add a service downtime** or **Add a host downtime**

<!--END_DOCUSAURUS_CODE_TABS-->

The following window appears:

![image](../assets/alerts/downtime.png)

-   The **Host Name** field defines the host concerned by the downtime
-   The **Service** field defines the service concerned by the downtime
-   If the **Fixed** box is checked the downtime is fixed. Otherwise, it
    is flexible
-   If the downtime is flexible, the **Duration** field defines the
    length of the downtime
-   The **Start Time** and **End Time** fields define the beginning and
    end date of the downtime
-   The **Comments** field can be used to indicate why the downtime is
    defined

## Recurrent downtimes

### Principle

A downtime period is a time period during which the notifications to a
host or a service are disabled. Downtime periods are convenient during
maintenance operations on a host or a service: they allow us to avoid
receiving false positive.

Recurrent Downtime periods are Downtime periods that recurs
repetitively.

E.g.: A back-up of the virtual machines is performed every day from
20h00 to midnight. This type of back-up has a tendency to saturate the
CPU use of all the virtual machines. It is necessary to program
recurrent Downtime periods on the services concerned to avoid receiving
notifications from 20h00 to midnight.

> The Downtime periods are taken into account in the calculation of the
> availability ratio of the resource in the
> **[Dashboard](../reporting/introduction.html#simple-reporting)**.

### Practice

There are two types of Downtime periods:

-   The **fixed** downtime period: This means that the downtime period
    takes place during exactly the time period defined.
-   The **flexible** downtime period: This means that if during the time
    period defined the service or the host returns a Not-OK status the
    downtime period lasts a certain number of seconds (to be defined in
    the form) from the moment when the host or the status returns a
    Not-OK status.

To add a recurrent downtime period go into the
`Monitoring > Downtimes > Recurrent Downtimes` menu and click on
**Add**.

![image](../assets/alerts/05recurrentdowntimes.png)

#### Configuration of Downtime periods

-   The **Name** and **Description** fields serve to give a name and
    describe the recurrent downtime period.
-   The **Enable** field serves to enable or disable the downtime
    period.
-   The **Periods** field serves to define one or more periods of
    recurrent downtime periods. To add a period, click on the symbol
    ![image](../assets/common/navigate_plus.png).

It is possible to choose three types of period:

-   Weekly: to choose the days of the week
-   Monthly: to choose the days of the month
-   Specific date: to choose specific dates

-   The **Days** field defines the day(s) concerned.
-   The **Time period** field contains the time period concerned
    (expressed in HH:MM - HH:MM).
-   The **Downtime type** field defines the type of downtime period
    desired.

> It is possible to combine several types of periods within the same
> downtime period.

#### Relations

-   The **Linked with Hosts** list can be used to choose the host(s)
    concerned by the recurrent downtime period.
-   If **Linked with Host Groups** is chosen with the list Linked with
    the host group all the hosts belonging to this group are concerned
    by the recurrent downtime period.
-   The **Linked with Services** list can be used to choose the
    service(s) concerned by the recurrent downtime period.
-   If a service group is chosen with the list **Linked with Service
    Groups** all the services belonging to this group are concerned by
    the recurrent downtime period.

## Add comment

### Principle

Centreon allows us to add comments on an object. This Comment is visible by
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

<!--DOCUSAURUS_CODE_TABS-->
<!--From the detailed sheet of an object-->

1.  Access to the details page of the object
2.  In the category **Host/Service Commands**, click on **Add a comment
    for this host/this service**

<!--From the Comment menu-->

1.  Go into the `Monitoring > Downtimes > Comments` menu
2.  Click on **Add a Service Comment** or **Add a Host Comment**

<!--END_DOCUSAURUS_CODE_TABS-->

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

It is possible to temporarily enable or disable check on a host or a service.

> Changes to settings checks do not affect the configuration of the
> object in the database. These changes are made on the supervision in
> real time, they are canceled if the scheduler is restarted.

### Practice

<!--DOCUSAURUS_CODE_TABS-->
<!--From the detailed sheet of an object-->

1.  Access the details page of the object
2.  In the category: **Options** go to the line: **Active checks** to
    check the state of the checks.

To:

-   Enable the check, click on ![image](../assets/configuration/common/enabled.png)
-   Disable the check, click on ![image](../assets/configuration/common/disabled.png)

<!--From real time monitoring-->

1.  Go into the `Monitoring > Status Details > Hosts` (or `Services`)
    menu
2.  Select the object(s) on which you want to enable or disable the
    check
3.  In the menu: **More actions…** click on:

-   **Hosts : Disable Check** or **Services: Disable Check** to stop the
    check on a host or a service
-   **Hosts: Enable Check** or **Services: Enable Check** to enable the
    check of a host or of a service

<!--END_DOCUSAURUS_CODE_TABS-->

## Submitting a result

### Principle

For passively checked services, it is possible send a result manually to the
scheduler so that it is taken into account.

### Practice

To submit a result, access the details page of the object. In the category
**Service Commands** click on **Submit result for this service**

The following window appears:

![image](../assets/alerts/submitresult.png)

-   The **Host Name** and **Service** fields define the host and the
    service the result will be submitted
-   The **Check result** field defines the status of the service
-   The **Check output** field defines the message to be displayed for
    the service
-   The **Performance data** field can be used to define performance
    data for the generation of graphs

## Management of notifications

### Principle

It is possible to temporarily enable or disable the notification of a
host or a service.

> Changes the notifications settings do not affect the configuration of
> the object in the database. These changes are made on the real time
> monitoring, they are canceled if the scheduler is restarted.

### Practice

There are two ways of managing the notifications:

<!--DOCUSAURUS_CODE_TABS-->
<!--From the detailed sheet of an object-->

1.  Access the details page of the object
2.  In the category: **Options** go to the line: **Service
    Notifications**

To:

-   Enable the notification, click on ![image](../assets/configuration/common/enabled.png)
-   Disable the notification, click on ![image](../assets/configuration/common/disabled.png)

<!--From real time monitoring-->

1.  Go into the `Monitoring > Status Details > Hosts` (or `Services`)
    menu
2.  Select the host(s) / service(s) you want enable or disable the
    notification
3.  In the menu: **More actions…** click on:

-   **Hosts: Disable Notification** or **Services: Disable
    Notification** to stop the notification of a host or of a service
-   **Hosts: Enable Notification** or **Services: Enable Notification**
    to enable the notification of a host or a service

<!--END_DOCUSAURUS_CODE_TABS-->

## Reprogramming checks

### Principle

By default, the checks (checks on a service) are executed at regular
intervals following the configuration defined by the user. It is
possible to interact on the check scheduling pile to change the
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

<!--DOCUSAURUS_CODE_TABS-->
<!--From the detailed sheet of an object-->

1.  Access the detail page of the object
2.  In the category **Host Commands** (or **Service Commands**), click
    on **Re-schedule the next check for this host / service** or
    **Re-schedule the next check for this host / service (forced)**

<!--From real time monitoring-->

1.  Go into the menu: `Monitoring > Status Details > Hosts` (or
    `Services`)
2.  Select the objects to for which you want to force the check
3.  In the menu: **More actions…** click on **Schedule immediate check**
    or **Schedule immediate check (Forced)**

<!--END_DOCUSAURUS_CODE_TABS-->
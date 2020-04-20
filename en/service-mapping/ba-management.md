---
id: ba-management
title: Manage Business Activities
---

## Business Activity Management

### Business View (BV)

#### Definition

BVs are used to gather multiple BAs into a single group. Similar to Centreon
host groups, BV groups can be used in different Centreon BAM screens.

Access restrictions (via ACL) for visualising BAs are managed by linking them to
BVs, which are in turn linked to one or more *Centreon Access Groups*.

> For root cause analysis purpose, as soon as you give access to a user to a
> business activity, he'll see all indicators linked to it, no matter his
> restriction concerning resources used in the BA definition

A BV is not an indicator as such by which data can be calculated. The
information in a BV depends on its content and is displayed in real time.

### List Business Views

Configure a BV in the **Configuration \> Business Activity \> Business Views**
menu.

![image](assets/service-mapping/guide/conf_bv.png)

| Column      | Description                                                                          |
| ----------- | ------------------------------------------------------------------------------------ |
| Name        | Business view name                                                                   |
| Description | Brief description of BV                                                              |
| Displayed   | The BV is either displayed or not displayed on the Centreon BAM screens (deprecated) |
| Actions     | List of actions to be performed on the BV (modification/display)                     |

> Deleting a BV:
>
>   - Does not delete the BAs that are linked to it.
>   - Is permanent.

### Create a Business View

![image](assets/service-mapping/guide/conf_add_bv.png)

| Column              | Description                                            |
| ------------------- | ------------------------------------------------------ |
| Name                | BV name                                                |
| Description         | Brief description of the BV                            |
| Business activities | The BA(s) linked to the BV                             |
| ACL Groups          | The access group(s) that can consult the BV and its BA |

## Business Activities (BA)

> When you modify a business activity, you need to push & reload the
> configuration using the "Poller" menu so that it's applied

### Definition

Business Activities form the core of the Centreon BAM module. As aggregated indicators they are
monitored by the software in real time using spécific calculation methods. 
The Centreon BAM system is able to notify users depending on 
business activities status, revealing a problem with the IT service or application.

### List Business Activities

The BA is managed through the `Configuration > Business Activity > Business Activity` menu.

![image](assets/service-mapping/guide/conf_ba.png)

You have inline actions & global action to delete, duplicate, enable/disable the
BA and massively change thresholds.

### Create a Business Activity

To add a Business Activity, click on the **Add** button. The following panel
appears:

![image](assets/service-mapping/guide/conf_add_ba.png)

In this configuration panel, after giving a unique name (mandatory), you need to configure multiple sections to 
have an agregated indicator. The name is the only parameter mandatory but to have a BA that works, you need at least
to configure some indicators and an calculation methods. This can be done in the "Indicator" section.

#### Indicators

This section is the most important section for a business activity: this is where you define the way
the status will be calculated by attaching resources to the business activity and setting the calculation 
method.

The type of indicator you can use are :

- Services
- Other business activities: that is really important to understand that you can create "infinite" multi-level BA to model 
simple to highly complex IT services or App.
- Meta services
- Boolean rules: a combination of services with AND/OR/XOR rules

The default calculation method applied to the indicators is the **"Best"** status. You can
change the way the calculation is done. 

##### Calculation methods

Business activities are agregated indicators based on resources monitored by Centreon. Therer are four 
calculation method that you can use:

- Best status: When you only need to be warned that ALL indicators are critical at the same times 
- Wors status: When you immediately want to know that at least 1 indicator is not-ok
- Ratio: When you want to model Cluster concepts by specifying a number of percentage of critical resources that you don't want to exceed
- Impact: When you want to precisely define the weight of each indicators and reflect that on your BA status 

Some example / explanations

<!--DOCUSAURUS_CODE_TABS-->

<!-- Best Status -->

![image](assets/service-mapping/best.png)

The following order will be applied to find the "Best" status: OK > Unknown > Warning > Critical > Pending

The configuration is as follow:

![image](assets/service-mapping/conf-best.png)

<!-- Worst Status -->

![image](assets/service-mapping/worst.png)

The configuration is as follow:

![image](assets/service-mapping/conf-worst.png)

The following order will be applied fto find the "Worst" status : CRITICAL > Warning > Unknown > OK > Pending

<!-- Ratio -->

For ratio, you can base the calculation of the **number of CRITICAL** indicators or a **percentage of CRITICAL**
indicators that you don't want to exceed. 

In the following example, we defined that we want number of Critical to be less than 80%.

![image](assets/service-mapping/ratio.png)

The configuration is as follow:

![image](assets/service-mapping/conf-ratio.png)

After choosing wether you want to define in percentage or number, the thresholds parameters 
have to be configured as follow after :

 - Critical: if the number/percentage of **Critical** indicators exceed that number of percentage, the Business activity will be Critical
 - Warning: if the number/percentage of **Critical** indicators exceed that number of percentage, the Business activity will be Warning

<!-- Impact -->

This mode is complex to use but may help you model heighly severity-related concepts.

When you use the mode impact, the business activity has a "Health" between 100% and 0%. When you attach
indicators to it, you have to define the impact (in %) of each status for each indicator. When this indicators switch
to these status (unknwon, critical etc..) Then the calculation is simple: BA Health = 100% - Current impacts.

You then use the Warning & Critical thresholds to determine at what level you want the BA to become Warning or Critical

- **Warning threshold**: Between 100 and 0, the threshold below which the BA
    will switch to Warning status (orange) and send a notification (if
    configured).
- **Critical threshold**: Between 100 and 0 (\< the Warning threshold) below
    which the BA will switch to Critical status (red) and send a notification
    (if configured).

![image](assets/service-mapping/conf-impact.png)

The health value between 100% and 0% is often related to a service quality measurement. 
A variation in this value is used to determine whether the modelized IT service or application 
is in an **OK**, **Warning** or **Critical** state.

<!--END_DOCUSAURUS_CODE_TABS-->

##### How indicators in planned downtime should be handled ?

Now that you've choosen the way the business activity status will be calculated, you can manage how planned
maintenance time will be handled. You have three choices:

- **Ignore the downtime**: In that case, the planned downtime positionned on child indicators will be ignored, the BA will 
be impacted
- **Inherit the downtime**: the BA is automatically sets in "planned downtime" whenever an indicators in non-ok state is in
    planned downtime AND impact the BA. The BA will still be impacted but also set in planned downtime based on the rule defined below
- **Ignore the indicatore in the calculation**: when the indicator impacts the BA and is it planned downtime, it's ignore from the calculation.

**Rules for planned downtime inheritance**

  - A BA inherits planned downtime from its indicators only when its status is
    not **OK**.
  - When a BA is in planned downtime due to indicators downtime inheritance: If
    the BA status switches to OK, planned downtime is stopped.
  - When a BA is in planned downtime due to indicators downtime inheritance: If
    an impact comes from an indicators that has no planned downtime, the BA
    downtime is stopped.

To have the BA level & status reflecting IT service or application
availability/performance, you have to link indicators to the BA and configure
the impact for each indicator depending on their status.

![image](assets/service-mapping/guide/indicators_configuration.png)

##### Other settings

After configuring the way the business activity status is computed, you'll be able to configure the following properties:

  - Business View: what BV(s) to link the BA to. Mandatory if you want to give
    access to this BA to non-admin users
  - Display: All parameters concerning the way the BA will be accessible outside
    the BA monitoring page
  - Notification: who & when users get notified
  - Reporting: What SLA & timeperiod you want to use to calculate the BA
    availability statistics
  - Event handler: parameters to auto-remediate the BA when state becomes non-ok

**Business View**

Link the BA to one or multiple business view so it becomes available for
non-admin users.

**Display**

  - Display on remote server: If you're using a remote server, you can send the
    business activity to it so that it's also available for remote teams. This
    is possible only if ALL the indicators under the BA (at any level) are
    visible by the remote server.
  - Geo-coordinates: Geo-coordinate to position the BA on a geoview
  - Associated infrastructure view name: the BA probably corresponds to an
    agregated/customer's point of view state of an IT service or application
    that rely on a complexe infrastructure. If this infrastructure has been
    designed in Centreon Map, you can ease access from this BA to the
    corresponding view to help users to drill down when a problem occurs on that
    BA.

**Notification**

Configure when, for what status and who should be notified when the BA's status
changes. You can also define escalation that applies to that BA.

The escalation is the same as with other **Centreon** objects, when you select
an escalation, the service escalation definition will be applied to the BA.

**Reporting**

  - Default reporting time period: Availability statistics for widgets & reports
    will be automatically calculated using this time period
  - Service Level Agreement in % (SLA): whenever the availability is compared to
    a SLA in %, this will be the value that it will be compared to
  - Service Level Agreement in minutes (SLA): whenever the availability is
    compared to a SLA in minutes, this will be the value that it will be
    compared to
  - Service Level Objective in % (SLO): additonnal threshold in % to compare the
    availability. It can be seen as a "SLA warning" threshold.
  - Service Level Objective in minutes (SLO): additonnal threshold in minutes to
    compare the availability. It can be seen as a "SLA warning" threshold..
  - Extra reporting time periods: Additionnal time period you may want to use in
    widget & reports

**Event handler**

Activate or not the auto-remediation command that you may execute when the BA
status switches.



> In order for the new BA to be calculated and monitored, you must regenerate
> the configuration on the scheduler and restart the monitoring services through
> the interface in the `Configuration > Poller` menu.

## Indicators (KPI)

> To update indicator configuration, you need to push & reload the configuration
> using the "Poller" menu

### Definition

An indicator is a resources in the monitoring system that is linked to a BA. A
BA may have multiple indicators & sub-indicators. There are four types of
indicators:

  - *Service* (Service by hostgroups are **NOT** usable as indicators)
  - *Meta service*
  - *Boolean*
  - *Another business activity*

An indicator can only impact a BA when status of its object (e.g., a service) is
*Hard* (validated).

The indicator can impact the health of a BA and change its value according to
the indicator status. We recommend for you to use the standard impact mode
(based on keywords *Minor*, *Major*, etc.) instead of the advanced mode based on
numeric impact values, which involve more complex calculation.

Any time an indicator status changes, the BA engine evaluates the impact and
subtracts its value from the BA health level. The minimum health of a BA is 0,
even if the sum of its indicators impact is \> 100.

### List Indicators

Indicators can be configured through the **Configuration \> Business Activity \>
Indicators** menu or directly in the business activity configuration form:

![image](assets/service-mapping/guide/conf_kpi.png)

| Column          | Description                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------- |
| Indicator (KPI) | Indicator or Key Performance Indicator: Name of the indicator based on the object used                               |
| Type            | Indicator type in(service, meta service, BA, boolean rule)                                                           |
| Warning Impact  | Impact weight in the event of a *Warning* condition, in real-time monitoring Ignored if indicators is a boolean rule |
| Critical Impact | Impact weight in the event of a *Critical* condition, in real-time monitoring                                        |
| Unknown Impact  | Impact weight in the event of a *Unknown* condition, in real-time monitoring Ignored if indicators is a boolean rule |
| Actions         | Actions can be performed (modification,activation/deactivation)                                                      |

The **More Actions** menu allows an action to be applied to several indicator at
once:

  - Activate the indicator within their BA.
  - Update impact types collectively.
  - Deactivate indicator within their BA.
  - Delete indicator.

### Create an indicators (KPI)

There are several ways to create an indicator:

![image](assets/service-mapping/guide//add_kpi_types.png)

#### Add an indicator

To add an indicator, click on the **Add a KPI** link, which takes you to the
following form.

**Regular Mode**:

![image](assets/service-mapping/guide/kpi_standard.png)

**Advanced mode**:

To be able to manually define an impact:

![image](assets/service-mapping/guide/kpi_advanced.png)

| Column                    | Description                                                                   |
| ------------------------- | ----------------------------------------------------------------------------- |
| Configuration Mode        | Configuration mode: regular or advanced                                       |
| KPI Type                  | KPI type (service, meta service, boolean rule or a BA)                        |
| Key Performance Indicator | Choice of KPI based on the objects in Centreon                                |
| Warning Business Impact   | Impact weight in the event of a *Warning* condition, in real-time monitoring  |
| Critical Business Impact  | Impact weight in the event of a *Critical* condition, in real-time monitoring |
| Unknown Business Impact   | Impact weight in the event of an *Unknown* condition, in real-time monitoring |
| Linked Business Activity  | BA related to KPI                                                             |

*To add a boolean rule: First create the boolean rule (see below), and then add
the KPI.*

**Boolean Rules**

To create a boolean rule, go to : **Configuration \> Business Activity \>
Boolean Rules**

![image](assets/service-mapping/guide//kpi_booleen.png)

| Column                                    | Description                                         |
| ----------------------------------------- | --------------------------------------------------- |
| KPI name                                  | Name for identifying KPI                            |
| Configuration Mode                        | Configuration mode: regular or advanced             |
| Expression                                | Logical expression, see below                       |
| Impact is applied when expression returns | State of logical expression that triggers theimpact |
| Comments                                  | Comments regarding the boolean KPI                  |
| Status                                    | Enabled or Disabled                                 |

Logical expression:

1.  Field for editing the logical expression
2.  Toolbox
3.  Services that compose the logical expression
4.  Button for evaluating the expression with real-time monitored status
5.  Boolean state after evaluation (whether it is real-time or simulated)
6.  Enter simulation mode, thus allowing user to simulate statuses of the
    defined services

#### Adding multiple KPIs

In order to add multiple KPIs, click on **Add multiple KPIs** link which takes
you to a data entry form.

| Column                            | Description                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------- |
| Configuration Mode                | Configuration mode: Standard or Advanced                                              |
| Object Type                       | Type of object from which the indicators will be loaded                               |
| Hosts, Host Groups, Service group | Depending on the selected object type, a list of objects will be automatically loaded |
| Linked Business Activity          | BA related to indicators                                                              |

Clicking on the **Retrieve KPI** button, a list of indicators will be displayed.
You can filter and apply thresholds, collectively one by one:

![image](assets/service-mapping/guide//kpi_multiple_retrieve.png)

| Column          | Description                                                                   |
| --------------- | ----------------------------------------------------------------------------- |
| Host            | Host                                                                          |
| Service         | Service                                                                       |
| Warning Impact  | Impact weight in the event of a *Warning* condition, in real-time monitoring  |
| Critical Impact | Impact weight in the event of a *Critical* condition, in real-time monitoring |
| Unknown Impact  | Impact weight in the event of an *Unknown* condition, in real-time monitoring |

#### Load .ssv file (deprecated)

To add several KPIs loading an .ssv file, click on **Load .ssv file**:

![image](assets/service-mapping/guide/ssv.png)

| Column         | Description                                                     |
| -------------- | --------------------------------------------------------------- |
| .ssv File      | Opens a file browser                                            |
| KPI Type       | Type of indicator (KPI) to load                                 |
| Format         | Formats of the SSV file depending on the chosen indicators type |
| Manual Filling | Possibility to fill the field instead of loading a file         |

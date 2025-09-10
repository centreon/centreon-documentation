---
id: notif-flapping
title: Flapping
---

## Introduction

Centreon Engine can detect when hosts and services are “flapping”. Flapping occurs when a service or host changes its status too
frequently. Enabling flapping detection stops Centreon from sending many alert and recovery notifications: you can configure a resource so that only one flapping notification is sent (one when flapping starts and one when it stops).
Flapping can be indicative of configuration problems (i.e. thresholds
set too low), troublesome services, or real network problems.

Note that the option is disabled by default.

## How flapping detection works

Whenever Centreon Engine checks the status of a host or service, it will
check to see if it has started or stopped flapping. It does this by:

* Storing the results of the last 21 checks of the host or service
* Determining the percentage of state changes that occurred for the host or service over these 21 checks
* Comparing the percentage of state change against low and high flapping thresholds.

A host or service is determined to have started flapping when its
percent state change first **exceeds a high flapping threshold**. When a host or service is flapping:

* it has a green background in the **Resources status** page.
* it has the following icon in its **Details** panel and in the **State** column:
    ![image](../assets/alerts/flapping_icon.png)
* if flapping notifications are enabled, one notification is sent when the resource starts flapping, and another one is sent when it stops flapping. Alert and recovery notifications are temporarily disabled.

In the **Resource status** page, you can filter the view to display only flapping resources.

A host or service is determined to have stopped flapping when its
percent state goes below a low flapping threshold (assuming that it was
previously flapping).

## Configuration

### Enabling flapping detection on a poller

Go to the **Configuration > Pollers > Engine configuration** menu and
select a scheduler (Centreon Engine). In the **Check Options** tab, set **Flap detection option** to **Yes**.

You can modify the thresholds or keep the preconfigured ones.

The settings will apply to all resources monitored by this poller, provided their **Flap detection enabled** option is not set to **No**, and they haven't overridden the thresholds at host or service level.

### Flapping detection for hosts

If you enable flapping detection for a scheduler (Centreon Engine),
the process will be applied for all hosts monitored by it (provided their **Flap detection enabled** option is not set to **No**).

You can disable/enable flapping detection for a specific host through its configuration menu.

Go to **Configuration > Hosts > Hosts** and select the host you want. If you want to disable flapping for this host, on the **Data Processing** tab, set **Flap detection enabled** to **No**.

If you set **Flap detection enabled** to **Yes**, you can also adapt flapping thresholds for this specific host.
**Default** means that the value defined on the poller will be used.

> Use [host templates](../monitoring/basic-objects/hosts-templates.md) to make configuration easier.

### Flapping detection for services

If you enable flapping detection for a scheduler (Centreon Engine),
the process will be applied for all services monitored by it (provided their **Flap detection enabled** option is not set to **No**).

You can disable/enable flapping detection for a specific service through its configuration menu.

Go to **Configuration > Services > Services by host** and select the service you want. If you want to disable flapping for this service, on the **Data Processing** tab, set **Flap detection enabled** to **No**.

If you set **Flap detection enabled** to **Yes**, you can also adapt flapping thresholds for this specific service.
**Default** means that the value defined on the poller will be used.

> Use [service templates](../monitoring/basic-objects/services-templates.md) to make configuration easier.

## Example

Let’s describe in more detail how flapping detection works with services.

The image below shows a chronological history of service states from the
most recent 21 service checks. OK states are shown in green, WARNING
states in yellow, CRITICAL states in red, and UNKNOWN states in orange.

![image](../assets/alerts/statetransitions.png)

The historical service check results are examined to determine where
state changes/transitions occur. State changes occur when an archived
state is different from the archived state that immediately precedes it
chronologically. Since we keep the results of the last 21 service checks
in the array, there is a possibility of having at most 20 state changes.
In this example there are 7 state changes, indicated by blue arrows in
the image above.

The flap detection logic uses the state changes to determine an overall
percent state change for the service. This is a measure of
volatility/change for the service. Services that never change state will
have a 0% state change value, while services that change state each time
they’re checked will have 100% state change. Most services will have a
percent state change somewhere in between.

When calculating the percent state change for the service, the flap
detection algorithm will give more weight to new state changes compared
to older ones. Specifically, the flap detection routines are currently
designed to make the newest possible state change carry 50% more weight
than the oldest possible state change. The image below shows how recent
state changes are given more weight than older state changes when
calculating the overall or total percent state change for a particular
service.

![image](../assets/alerts/statetransitions2.png)

Using the images above, let’s do a calculation of percent state change
for the service. You will notice that there is a total of 7 state
changes (at t\_3, t\_4, t\_5, t\_9, t\_12, t\_16 and t\_19). Without any
weighting of the state changes over time, this would give us a total
state change of 35%:

(7 observed state changes / possible 20 state changes) \* 100 = 35%

Since the flap detection logic will give newer state changes a higher
rate than older state changes, the actual calculated percent state
change will be slightly less than 35% in this example. Let’s say that
the weighted percent of state change turned out to be 31%…

The calculated percent state change for the service (31%) will then be
compared against flapping thresholds to see what should happen:

-   If the service was not previously flapping and 31% is equal to or
    greater than the high flap threshold, Centreon Engine considers the
    service to have just started flapping.
-   If the service was previously flapping and 31% is less than the low
    flap threshold, Centreon Engine considers the service to have just
    stopped flapping.

If neither of those two conditions are met, the flap detection logic
won’t do anything else with the service, since it is either not
currently flapping or it is still flapping.

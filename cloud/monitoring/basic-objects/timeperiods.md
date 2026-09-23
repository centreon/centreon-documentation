---
id: timeperiods
title: Time periods
description: "How to define time periods and time range exceptions to control when checks are executed"
---

## Definition

Time periods define a time interval for each day of the week. They enable the execution of check commands over a given period of time.
Time periods are applied according to the time zone configured on the poller which will execute the check.

## Configuration

To configure a time period, go to **Configuration \> Users \> Time periods**.

1. In the **Time Period Name** and **Alias** fields, enter a name and a description.

2. In the **Basic settings** section, for each day of the week, define the time periods during which the checks will be enabled. (Use the [syntax described below](#syntax-of-a-time-period).) 

    - These definitions are applied every week, indefinitely.
    - If you leave the field blank for a specific day, there will be no monitoring on that day for actions to which this time period is applied.

3. Use the [**Time Range Exceptions** tab](#time-range-exceptions-tab) to include days that would not normally belong to the time period.

4. Once you have created your time period, you can use it in the **Check Period** field for hosts, host templates, services and service templates.

### Syntax of a time period

Use the following characters to define time periods:

* The character “:” separates the hours from the minutes, e.g.: HH:MM
* The character “-” indicates continuity between two time periods
* The character ”,” separates two time periods

Here are a few examples:

* 24 hours a day and 7 days a week: 00:00-24:00 (to be applied to every day of the week).
* From 8 AM to noon and from 2 PM to 6:45 PM on weekdays: 08:00-12:00,14:00-18:45 (to be applied to weekdays only).

### Time Range Exceptions tab

The **Time Range Exceptions** tab allows you to include exceptional days in the time period. The periods you define here override the definition of regular days defined in **Basic Settings**.

Example: An administrator wants to define a time period which covers the times when the offices are closed, i.e.:

* From 6 PM to 7:59 AM on weekdays
* Around the clock on weekends
* National holidays and exceptional closure days.

To be able to define the national holiday days and the exceptional closure days, it is necessary to use exceptions.

To add an exception, in the **Exceptions** field, click **Add new entry**. For each exceptional day, you will need to define a time period. 

> Use the following syntax to exclude whole days from the monitoring: 00:00-00:00.

The table below shows some possible examples:

| Day(s)            | Time period             | Meaning                                                   |
| ----------------- | ----------------------- | --------------------------------------------------------- |
| january 1         | 00:00-24:00             | All day on the 1st of January, every year.                |
| 2014-02-10        | 00:00-24:00             | All day on 10 February 2014                               |
| july 1 - august 1 | 00:00-24:00             | All day, every day from July 1 to August 1, every year    |
| november 30       | 08:00-19:00             | From 08h00 to 19h00 every November 30, every year         |
| day 1 - 20        | 00:00-24:00             | All day from the 1st to the 20th of every month           |
| saturday -1       | 08:00-12:00,14:00-18:45 | Every last Saturday of the month during opening hours     |
| monday -2         | 00:00-24:00             | All day every second to last Monday of the month          |
| june 6 - june 21  | 00:00-00:00             | Do not monitor all day, every day from June 6th to the 21st        |
| june 12           | 00:00-08:00,18:00-24:00 | Monitor every June 12th, except between 08h00 and 18h00 |

> Exceptions are not taken into account in [BAM](../../service-mapping/introduction.md) and in [notifications](../../alerts-notifications/notif-configuration.md).

## Check period and CMA

When a host is monitored by the [Centreon Monitoring Agent (CMA)](../../cma/cma.md), the **Check Period** configured on the host is propagated by Centreon Engine to the agent. The agent uses this time period to decide whether a scheduled check should be executed at any given moment.

This feature affects two aspects:

* **Check scheduling**: the agent only triggers a check if the current time on the monitored host falls within a valid window of the configured time period.
* **Freshness calculation**: Centreon Engine calculates freshness on the poller side, also using the configured `check_period`. The timezone of the monitored host and the poller (Centreon Engine) must therefore be aligned: a timezone mismatch will produce incorrect behavior without generating any error message on the engine side.

A **forced check** (triggered manually) always bypasses the check period and is executed regardless of the configured time window.

> **Timezone alignment constraint**: the timezone of the monitored host machine must be identical to that of the poller (Centreon Engine). If they are not aligned, the freshness calculation and the check window will be inconsistent between the agent and the engine.

| # | Monitored host timezone | Poller (engine) timezone | Timezone in Centreon .cfg | Result |
| --- | --- | --- | --- | --- |
| **Case 1** | Reference | Same as host | Same as host | ✅ Checks and freshness calculation respect the configured timezone |
| **Case 2** | Reference | Same as host | _(not set)_ | ✅ Checks and freshness calculation respect the host machine's timezone |
| **Case 3** | Reference | Different from host | _(not set)_ | ❌ Incorrect behavior — no error message in logs |
| **Case 4** | Reference | Same as host | Different from host | ❌ Error in CMA logs — no error in Centreon Engine logs |

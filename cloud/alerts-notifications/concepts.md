---
id: concepts
title: Possible statuses of a resource
---

Statuses show the availability of a host, and the availability or performance of a service. Each status has a
precise meaning for the resource.

* The statuses and states of a resource
can be seen on page [Resources Status](resources-status.md). You can filter the page according to these statuses and to certain states.
* Some statuses are determined according to user-defined thresholds.

### Host status

The table below summarizes all the possible statuses for a host.

| Status                                             | Description                                                                                   |
|----------------------------------------------------|-----------------------------------------------------------------------------------------------|
| <span style={{color:'#88b917'}}>UP</span>          | The host is available and reachable                                                           |
| <span style={{color:'#e00b3d'}}>DOWN</span>        | The host is unavailable                                                                       |
| <span style={{color:'#2ad1d4'}}>PENDING</span>     | The host has just been created and has not been checked yet by the monitoring engine |

### Service status

The table below summarizes all the possible statuses for a service.

| Status                                          | Description                                                               |
|-------------------------------------------------|---------------------------------------------------------------------------|
| <span style={{color:'#88b917'}}>OK</span>       | The service presents no problem                                           |
| <span style={{color:'#ff9a13'}}>WARNING</span>  | The service has reached the warning threshold                             |
| <span style={{color:'#e00b3d'}}>CRITICAL</span> | The service has reached the critical threshold                            |
| <span style={{color:'#bcbdc0'}}>UNKNOWN</span>  | The status of the service cannot be checked (e.g.: SNMP agent down, etc.) |
| <span style={{color:'#2ad1d4'}}>PENDING</span>  | The service has just been created and has not been checked yet by the monitoring engine |

## States

In addition to their status, resources can be in several states:

- [Acknowledged](acknowledge.md): indicates that the incident on the service or on the host
    has been taken into account by a user. Acknowledged resources have a yellow background.
- [In downtime](downtimes.md): indicates that notifications are temporarily stopped. Downtime can be [planned in advance](downtimes.md#recurrent-downtimes) to avoid receiving alerts during maintenance periods, or can be set following an incident. Resources in downtime have a purple background.

## Status types

The status of a resource can be one of these two types:

- SOFT: Means that an incident has just been detected and that it
    has to be confirmed.
- HARD: Means that the status of the incident is confirmed. Once
    the status is confirmed, the notification process is engaged
    (sending of an email, SMS, etc.).

You can filter the view on the [Resources Status](resources-status.md) page according to the status type.

### Explanation

An incident (Not-OK status) is confirmed as soon as the number of
validation attempts has reached its end. As soon as the first incident is detected, the state is "SOFT" until its
confirmation into "HARD", triggering the notification process.

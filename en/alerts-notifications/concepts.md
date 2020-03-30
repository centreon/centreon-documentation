---
id: concepts
title: Concepts
---

## Resources status

Statuses are indicators for the hosts or the services. Each status has a precise meaning for the resource.
Each status is determined following the monitoring of the resource according to user-defined thresholds.

### Host status

The table below summarizes all the possible statuses for a host.

| Status                                         | Description                         |
|------------------------------------------------|-------------------------------------|
| <span style="color:#88b917">UP</span>          | The host is available and reachable |
| <span style="color:#e00b3d">DOWN</span>        | The host is unavailable             |
| <span style="color:#818185">UNREACHABLE</span> | The host is unreachable             |


### Service status

The table below summarizes all the possible statuses for a service.

| Status                                     | Description                                                               |
|--------------------------------------------|---------------------------------------------------------------------------|
| <span style="color:#88b917">OK</span>      | The service presents no problem                                           |
| <span style="color:#ff9a13">WARNING</span> | The service has reached the warning threshold                             |
| <span style="color:#e00b3d">DOWN</span>    | The service has reached the critical threshold                            |
| <span style="color:#bcbdc0">UNKNOWN</span> | The status of the service cannot be checked (e.g.: SNMP agent down, etc.) |


### Advanced statuses

In addition to the standard statuses, new statuses can be used to add additional information:

* The <span style="color:#2ad1d4">PENDING</span> status is a status displayed for a service or a host freshly
  configured but which has not yet been checked by the scheduler.
* The <span style="color:#818185">UNREACHABLE</span> status is a status indicating that the host (parental
  relationship) is situated downstream of a host with a DOWN status.
* The FLAPPING status is a status indicating that the status change percentage of the resource is very high. This
  percentage is obtained from calculations performed by the network monitoring engine.
* The <span style="color:#ae9500">ACKNOWLEDGED</span> status is a status indicating that the incident of the service or
  of the host has been taken into account by a user.
* The <span style="color:#cc99ff">DOWNTIME</span> status is a status indicating that the incident of the service or of
  the host occurred during a downtime period.

## Status confirmation

A resource can have two states:

* SOFT: Signifies that an incident has just been detected and that it has to be confirmed.
* HARD: Signifies that the status of the incident is confirmed. Once the status is confirmed, the notification process
  is engaged (sending of a mail, SMS, etc.).

### Explanation

An incident (Not-OK status) is confirmed as soon as the number of validation attempts has reached its end. The
configuration of a resource (host or service) requires a regular check interval, a number of attempts to confirm a
Not-OK status and an irregular check interval. As soon as the first incident is detected, the state is "SOFT" until its
confirmation into "HARD", triggering the notification process.

Example:

A service has the following check settings:

* Max check attempts: 3
* Normal check interval: 5 minutes
* Retry check interval: 1 minute

Let us imagine the following scenario:

* Instant t + 0: The service is checked, it has the OK status.
* Instant t + 5: The second check shows that the service has the CRITICAL status. The service goes into the SOFT state (attempt 1/3).
* Instant t + 6: The third check is performed, the service still has the CRITICAL status in SOFT (attempt 2/3).
* Instant t + 7: The fourth check shows that the service still has the CRITICAL status (attempt 3/3). The number of tests has been completed; the state is configured (HARD). The notification process is triggered.
* Instant t + 8: The service recovers OK status. It goes directly into the HARD state. The notification process is triggered.
* Instant t + 13: The service has the WARNING status. It goes into the SOFT state (attempt 1/3).
* Instant t + 14: The service still has the WARNING status (attempt 2/3).
* Instant t + 15: The service has the CRITICAL status. It remains in the SOFT state because it has changed status.
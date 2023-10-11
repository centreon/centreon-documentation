---
id: notif-configuration
title: Configuring notifications
---

By default, notifications are active for all hosts and services. In Centreon Cloud, notifications are sent by the central server.

## In which cases are notifications sent?

Notifications are sent in the following cases:

* when a resource is in a non-ok state (**Warning** or **Critical** for a service, **Down** or **Unreachable** for a host)
* when a resource goes back to an OK state
* when a downtime period starts.

## Who are notifications sent to?

Notifications are sent to all users.

## How are resources checked?

Resources are checked according to the following parameters:

* Checks are made 24x7, every five minutes for as long as the host or service is in an OK state.
* When a host or service enters a non-ok status (SOFT status type, e.g. DOWN SOFT for a host), Centreon checks three times that the host or service is still in a non-ok state (one minute elapses between each of these checks).
* If, after these three checks, the resource is still in a non-ok status, its status type becomes HARD and notifications start being sent.
* Checks are then performed every five minutes to see if the resource is still in a HARD state. Notifications are sent every five minutes.

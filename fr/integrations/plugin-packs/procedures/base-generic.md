---
id: base-generic
title: Base Pack
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.2.2 | `STABLE` | Oct 15 2019 |

## Prerequisites

There is no prerequisites needed for this Plugin Pack.

This Plugin Pack gives you all basic templates.

You can use it to create your own service templates, active as well as passive,
with the following templates:

  - generic-active-service
  - generic-passive-service

Same for hosts:

  - generic-active-host
  - generic-passive-host

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | generic-host-custom        |

Click on the *Save* button.

The following service will be created and linked to the host:

| Service | Description                |
| :------ | :------------------------- |
| Ping    | Monitor host response time |

### Service Macro configuration

The following macros must be configured on services:

| Service | Macro        | Description        | Default Value | Example |
| :------ | :----------- | :----------------- | :------------ | :------ |
| Ping    | PACKETNUMBER | Number of packet   | 5             | 5       |
| Ping    | WARNING      | Warning threshold  | 200,20%       | 200,20% |
| Ping    | CRITICAL     | Critical Threshold | 400,50%       | 400,50% |


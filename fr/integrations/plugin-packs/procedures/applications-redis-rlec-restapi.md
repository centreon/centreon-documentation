---
id: applications-redis-rlec-restapi
title: Redis Labs Enterprise Cluster Rest API
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller: \# yum install
centreon-plugin-Applications-Redis-Rlec-Restapi

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-Redis-Restapi          |

Click on the *Save* button.

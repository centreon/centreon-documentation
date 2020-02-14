---
id: applications-redis-restapi
title: Redis Restapi
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.4 | `STABLE` | Jan 17 2018 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller: \# yum install
centreon-plugin-Applications-Redis-Restapi

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

### Host Macro Configuration

The following macros must be configured on host:

| Macro         | Description           | Default value |
| :------------ | :-------------------- | :------------ |
| REDISPORT     | Redis server port     | 6379          |
| REDISUSERNAME | Redis server username |               |
| REDISPASSWORD | Redis server password |               |


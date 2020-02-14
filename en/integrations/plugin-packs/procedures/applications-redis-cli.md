---
id: applications-redis-cli
title: Redis Cli
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.2 | `STABLE` | Dec  8 2017 |

## Prerequisites

### Centreon Plugin

The plugin is using the perl-Redis library. To install it, you will need the EPEL repository : \# yum install
epel-release \# yum install perl-Redis \# yum remove epel-release This library installs 2 dependencies :
perl-IO-Socket-Timeout and perl-PerlIO-via-Timeout.

Then install this plugin : \# yum install centreon-plugin-Applications-Redis-Cli

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-Redis-Cli              |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro     | Description       | Default value |
| :-------- | :---------------- | :------------ |
| REDISPORT | Redis server port | 6379          |


---
id: applications-rabbitmq-restapi
title: RabbitMQ RestAPI
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jun 14 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Rabbitmq-Restapi
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                       |
| :---------------------- | :-------------------------- |
| Host name               | *Name of the host*          |
| Alias                   | *Host description*          |
| IP                      | *Host IP Address*           |
| Monitored from          | *Monitoring Poller to use*  |
| Host Multiple Templates | App-Rabbitmq-Restapi-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro               | Description                       | Default value |
| :------------------ | :-------------------------------- | :------------ |
| RABBITMQAPIPORT     | Port of the RabbitMQ API instance | 15672         |
| RABBITMQAPIPROTO    | Protocol used by the RabbitMQ API | http          |
| RABBITMQAPIUSERNAME | Username to access RabbitMQ API   |               |
| RABBITMQAPIPASSWORD | Password to access RabbitMQ API   |               |

Click on the *Save* button.


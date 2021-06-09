---
id: developer-broker-mapping
title: Centreon Broker Event Mapping
---

Centreon Broker uses global mapping tables for events that can be
exchanged. How exactly these mapping tables work is left to discover to
the reader. This page list properties available for each event type.

## NEB

### Acknowledgement

| Property                                     | Type             | Description                                                              |
|----------------------------------------------|------------------|--------------------------------------------------------------------------|
| acknowledgement\_type                        | short integer    | Host acknowledgement when 0, service acknowledgement when 1.             |
| author                                       | string           | Acknowledgement author.                                                  |
| comment                                      | string           | Comment associated to the acknowledgement.                               |
| deletion\_time                               | time             | Time at which the acknowledgement was deleted. If 0, it was not deleted. |
| entry\_time                                  | time             | Time at which the acknowledgement was created.                           |
| host\_id                                     | unsigned integer | Host ID.                                                                 |
| instance\_id                                 | unsigned integer | Instance ID.                                                             |
| is\_sticky                                   | boolean          | Sticky flag.                                                             |
| notify\_contacts                             | boolean          | Notification flag.                                                       |
| persistent\_comment                          | boolean          | True if the comment is persistent.                                       |
| service\_id                                  | unsigned integer | Service ID. 0 for a host acknowledgement.                                |
| state                                        | short integer    | Host / service state.                                                    |
| notify\_only\_if\_not\_already\_acknowledged | boolean          | A notification should be sent only if not already ack.                   |

### Comment

| Property       | Type             | Description                                                                                                                               |
|----------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| author         | string           | Comment author.                                                                                                                           |
| comment\_type  | short integer    | 1 for a host comment, 2 for a service comment.                                                                                            |
| data           | string           | Comment data (text).                                                                                                                      |
| deletion\_time | time             | Time at which the comment was deleted. 0 if the comment was not deleted (yet).                                                            |
| entry\_time    | time             | Time at which the comment was created.                                                                                                    |
| entry\_type    | short integer    | 1 for a user comment (through external command), 2 for a downtime comment, 3 for a flapping comment and 4 for an acknowledgement comment. |
| expire\_time   | time             | Comment expiration time. 0 if no expiration time.                                                                                         |
| expires        | bool             | True if the comment expires.                                                                                                              |
| host\_id       | unsigned integer | Host ID.                                                                                                                                  |
| internal\_id   | unsigned integer | Internal monitoring engine ID of the comment.                                                                                             |
| persistent     | boolean          | True if the comment is persistent.                                                                                                        |
| instance\_id   | unsigned integer | Instance ID.                                                                                                                              |
| service\_id    | unsigned integer | Service ID. 0 if this is a host comment.                                                                                                  |
| source         | short integer    | 0 when the comment originates from the monitoring engine (internal) or 1 when the comment comes from another source (external).           |

### Custom variable

| Property       | Type             | Description                                                    |
|----------------|------------------|----------------------------------------------------------------|
| enabled        | boolean          | True if the custom variable is enabled.                        |
| host\_id       | unsigned integer | Host ID.                                                       |
| modified       | boolean          | True if the variable was modified.                             |
| name           | string           | Variable name.                                                 |
| service\_id    | unsigned integer | Service ID. 0 if this is a host custom variable.               |
| update\_time   | time             | Last time at which the variable was updated.                   |
| var\_type      | short integer    | 0 for a host custom variable, 1 for a service custom variable. |
| value          | string           | Variable value.                                                |
| default\_value | string           | The default value of the custom var.                           |

### Custom variable status

Custom variable status events are generated when a custom variable needs
to be updated.

| Property     | Type             | Description                                      |
|--------------|------------------|--------------------------------------------------|
| host\_id     | unsigned integer | Host ID.                                         |
| modified     | boolean          | True if the variable was modified.               |
| name         | string           | Variable name.                                   |
| service\_id  | unsigned integer | Service ID. 0 if this is a host custom variable. |
| update\_time | time             | Last time at which the variable was updated.     |
| value        | string           | Variable value.                                  |

### Downtime

| Property            | Type             | Description                                                |
|---------------------|------------------|------------------------------------------------------------|
| actual\_end\_time   | time             | Actual time at which the downtime ended.                   |
| actual\_start\_time | time             | Actual time at which the downtime started.                 |
| author              | string           | Downtime creator.                                          |
| downtime\_type      | short integer    | 1 for a service downtime, 2 for a host downtime.           |
| deletion\_time      | time             | Time at which the downtime was deleted.                    |
| duration            | time             | Downtime duration.                                         |
| end\_time           | time             | Scheduled downtime end time.                               |
| entry\_time         | time             | Time at which the downtime was created.                    |
| fixed               | boolean          | True if the downtime is fixed, false if it is flexible.    |
| host\_id            | unsigned integer | Host ID.                                                   |
| instance\_id        | unsigned integer | Instance ID.                                               |
| internal\_id        | unsigned integer | Internal monitoring engine ID.                             |
| service\_id         | unsigned integer | Service ID. 0 if this is a host downtime.                  |
| start\_time         | time             | Scheduled downtime start time.                             |
| triggered\_by       | unsigned integer | Internal ID of the downtime that triggered this downtime.  |
| was\_cancelled      | boolean          | True if the downtime was cancelled.                        |
| was\_started        | boolean          | True if the downtime has been started.                     |
| comment             | string           | Downtime comment.                                          |
| is\_recurring       | boolean          | True if this downtime is recurring.                        |
| recurring\_tp       | string           | The recurring timepriod of the recurring downtime.         |
| come\_from          | short            | Id of the parent recurring downtime for spawned downtimes. |

### Event handler

| Property        | Type             | Description                                                                                                                                      |
|-----------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| early\_timeout  | boolean          | True if the event handler timed out.                                                                                                             |
| end\_time       | time             | Time at which the event handler execution ended.                                                                                                 |
| execution\_time | real             | Execution time in seconds.                                                                                                                       |
| handler\_type   | short integer    | 0 for host-specific event handler, 1 for service-specific event handler, 2 for global host event handler and 3 for global service event handler. |
| host\_id        | unsigned integer | Host ID.                                                                                                                                         |
| return\_code    | short integer    | Value returned by the event handler.                                                                                                             |
| service\_id     | unsigned integer | Service ID. 0 if this is a host event handler.                                                                                                   |
| start\_time     | time             | Time at which the event handler started.                                                                                                         |
| state           | short integer    | Host / service state.                                                                                                                            |
| state\_type     | short integer    | 0 for SOFT, 1 for HARD.                                                                                                                          |
| timeout         | short integer    | Event handler timeout in seconds.                                                                                                                |
| command\_args   | string           | Event handler arguments.                                                                                                                         |
| command\_line   | string           | Event handler command line.                                                                                                                      |
| output          | string           | Output returned by the event handler.                                                                                                            |
| source\_id      | unsigned integer | The id of the source instance of this event.                                                                                                     |
| destination\_id | unsigned integer | The id of the destination instance of this event.                                                                                                |

### Flapping status

| Property               | Type             | Description                                     |
|------------------------|------------------|-------------------------------------------------|
| event\_time            | time             |                                                 |
| event\_type            | integer          |                                                 |
| flapping\_type         | short integer    |                                                 |
| high\_threshold        | real             | High flapping threshold.                        |
| host\_id               | unsigned integer | Host ID.                                        |
| low\_threshold         | real             | Low flapping threshold.                         |
| percent\_state\_change | real             |                                                 |
| reason\_type           | short integer    |                                                 |
| service\_id            | unsigned integer | Service ID. 0 if this is a host flapping entry. |

### Host

| Property                          | Type             | Description | Version |
|-----------------------------------|------------------|-------------|---------|
| acknowledged                      | boolean          |             |         |
| acknowledgement\_type             | short integer    |             |         |
| action\_url                       | string           |             |         |
| active\_checks\_enabled           | boolean          |             |         |
| address                           | string           |             |         |
| alias                             | string           |             |         |
| check\_freshness                  | boolean          |             |         |
| check\_interval                   | real             |             |         |
| check\_period                     | string           |             |         |
| check\_type                       | short integer    |             |         |
| current\_check\_attempt           | short integer    |             |         |
| current\_state                    | short integer    |             |         |
| default\_active\_checks\_enabled  | boolean          |             |         |
| default\_event\_handler\_enabled  | boolean          |             |         |
| default\_flap\_detection\_enabled | boolean          |             |         |
| default\_notifications\_enabled   | boolean          |             |         |
| default\_passive\_checks\_enabled | boolean          |             |         |
| downtime\_depth                   | short integer    |             |         |
| display\_name                     | string           |             |         |
| enabled                           | boolean          |             |         |
| event\_handler                    | string           |             |         |
| event\_handler\_enabled           | boolean          |             |         |
| execution\_time                   | real             |             |         |
| first\_notification\_delay        | real             |             |         |
| flap\_detection\_enabled          | boolean          |             |         |
| flap\_detection\_on\_down         | boolean          |             |         |
| flap\_detection\_on\_unreachable  | boolean          |             |         |
| flap\_detection\_on\_up           | boolean          |             |         |
| freshness\_threshold              | real             |             |         |
| has\_been\_checked                | boolean          |             |         |
| high\_flap\_threshold             | real             |             |         |
| host\_name                        | string           |             |         |
| host\_id                          | unsigned integer |             |         |
| icon\_image                       | string           |             |         |
| icon\_image\_alt                  | string           |             |         |
| instance\_id                      | unsigned integer |             |         |
| is\_flapping                      | boolean          |             |         |
| last\_check                       | time             |             |         |
| last\_hard\_state                 | short integer    |             |         |
| last\_hard\_state\_change         | time             |             |         |
| last\_notification                | time             |             |         |
| last\_state\_change               | time             |             |         |
| last\_time\_down                  | time             |             |         |
| last\_time\_unreachable           | time             |             |         |
| last\_time\_up                    | time             |             |         |
| last\_update                      | time             |             |         |
| latency                           | real             |             |         |
| low\_flap\_threshold              | real             |             |         |
| max\_check\_attempts              | short integer    |             |         |
| next\_check                       | time             |             |         |
| next\_notification                | time             |             |         |
| no\_more\_notifications           | boolean          |             |         |
| notes                             | string           |             |         |
| notes\_url                        | string           |             |         |
| notification\_interval            | real             |             |         |
| notification\_number              | short integer    |             |         |
| notification\_period              | string           |             |         |
| notifications\_enabled            | boolean          |             |         |
| notify\_on\_down                  | boolean          |             |         |
| notify\_on\_downtime              | boolean          |             |         |
| notify\_on\_flapping              | boolean          |             |         |
| notify\_on\_recovery              | boolean          |             |         |
| notify\_on\_unreachable           | boolean          |             |         |
| obsess\_over                      | boolean          |             |         |
| passive\_checks\_enabled          | boolean          |             |         |
| percent\_state\_change            | real             |             |         |
| retry\_interval                   | real             |             |         |
| should\_be\_scheduled             | boolean          |             |         |
| stalk\_on\_down                   | boolean          |             |         |
| stalk\_on\_unreachable            | boolean          |             |         |
| stalk\_on\_up                     | boolean          |             |         |
| statusmap\_image                  | string           |             |         |
| state\_type                       | short integer    |             |         |
| check\_command                    | string           |             |         |
| output                            | string           |             |         |
| perf\_data                        | string           |             |         |
| retain\_nonstatus\_information    | boolean          |             |         |
| retain\_status\_information       | boolean          |             |         |
| timezone                          | string           |             |         |

### Host check

| Property                | Type             | Description                                       | Version |
|-------------------------|------------------|---------------------------------------------------|---------|
| active\_checks\_enabled | boolean          | True if active checks are enabled on the host.    |         |
| check\_type             | short integer    |                                                   |         |
| host\_id                | unsigned integer | Host ID.                                          |         |
| next\_check             | time             | Time at which the next check is scheduled.        |         |
| command\_line           | string           | Check command line.                               |         |
| source\_id              | unsigned integer | The id of the source instance this event.         |         |
| destination\_id         | unsigned integer | The id of the destination instance of this event. |         |

### Host dependency

| Property                       | Type             | Description | Version |
|--------------------------------|------------------|-------------|---------|
| dependency\_period             | string           |             |         |
| dependent\_host\_id            | unsigned integer |             |         |
| enabled                        | boolean          |             |         |
| execution\_failure\_options    | string           |             |         |
| inherits\_parent               | boolean          |             |         |
| host\_id                       | unsigned integer |             |         |
| notification\_failure\_options | string           |             |         |

### Host group

| Property        | Type             | Description                                                  | Version |
|-----------------|------------------|--------------------------------------------------------------|---------|
| host\_group\_id | unsigned integer |                                                              |         |
| name            | string           | Group name.                                                  |         |
| enabled         | boolean          | True if the group is enabled, false if it is not (deletion). |         |
| poller\_id      | unsigned integer |                                                              |         |

### Host group member

| Property        | Type             | Description                                                       | Version |
|-----------------|------------------|-------------------------------------------------------------------|---------|
| enabled         | boolean          | True if the membership is enabled, false if it is not (deletion). |         |
| group           | string           | Group name.                                                       |         |
| instance\_id    | unsigned integer | Instance ID.                                                      |         |
| host\_id        | unsigned integer | Host ID.                                                          |         |
| source\_id      | unsigned integer | The id of the source instance this event.                         |         |
| destination\_id | unsigned integer | The id of the destination instance of this event.                 |         |

### Host parent

| Property   | Type             | Description                                                  | Version |
|------------|------------------|--------------------------------------------------------------|---------|
| enabled    | boolean          | True if parenting is enabled, false if it is not (deletion). |         |
| child\_id  | unsigned integer | Child host ID.                                               |         |
| parent\_id | unsigned integer | Parent host ID.                                              |         |

### Host status

| Property                  | Type             | Description | Version |
|---------------------------|------------------|-------------|---------|
| acknowledged              | boolean          |             |         |
| acknowledgement\_type     | short integer    |             |         |
| active\_checks\_enabled   | boolean          |             |         |
| check\_interval           | real             |             |         |
| check\_period             | string           |             |         |
| check\_type               | short integer    |             |         |
| current\_check\_attempt   | short integer    |             |         |
| current\_state            | short integer    |             |         |
| downtime\_depth           | short integer    |             |         |
| enabled                   | boolean          |             |         |
| event\_handler            | string           |             |         |
| event\_handler\_enabled   | boolean          |             |         |
| execution\_time           | real             |             |         |
| flap\_detection\_enabled  | boolean          |             |         |
| has\_been\_checked        | boolean          |             |         |
| host\_id                  | unsigned integer |             |         |
| is\_flapping              | boolean          |             |         |
| last\_check               | time             |             |         |
| last\_hard\_state         | short integer    |             |         |
| last\_hard\_state\_change | time             |             |         |
| last\_notification        | time             |             |         |
| last\_state\_change       | time             |             |         |
| last\_time\_down          | time             |             |         |
| last\_time\_unreachable   | time             |             |         |
| last\_time\_up            | time             |             |         |
| last\_update              | time             |             |         |
| latency                   | real             |             |         |
| max\_check\_attempts      | short integer    |             |         |
| next\_check               | time             |             |         |
| next\_host\_notification  | time             |             |         |
| no\_more\_notifications   | boolean          |             |         |
| notification\_number      | short integer    |             |         |
| notifications\_enabled    | boolean          |             |         |
| obsess\_over              | boolean          |             |         |
| passive\_checks\_enabled  | boolean          |             |         |
| percent\_state\_change    | real             |             |         |
| retry\_interval           | real             |             |         |
| should\_be\_scheduled     | boolean          |             |         |
| state\_type               | short integer    |             |         |
| check\_command            | string           |             |         |
| output                    | string           |             |         |
| perf\_data                | string           |             |         |

### Instance

| Property       | Type             | Description                                             | Version |
|----------------|------------------|---------------------------------------------------------|---------|
| engine         | string           | Name of the monitoring engine used on this instance.    |         |
| id             | unsigned integer | Instance ID.                                            |         |
| name           | string           | Instance name.                                          |         |
| is\_running    | boolean          | Whether or not this instance is running.                |         |
| pid            | unsigned integer | Monitoring engine PID.                                  |         |
| program\_end   | time             | Time at which the instance shut down.                   |         |
| program\_start | time             | Time at which the instance started.                     |         |
| version        | string           | Version of the monitoring engine used on this instance. |         |

### Instance status

| Property                          | Type             | Description                                                       | Version |
|-----------------------------------|------------------|-------------------------------------------------------------------|---------|
| active\_host\_checks\_enabled     | boolean          | Whether or not active host checks are globally enabled.           |         |
| active\_service\_checks\_enabled  | boolean          | Whether or not active service checks are globally enabled.        |         |
| check\_hosts\_freshness           | boolean          | Whether or not hosts freshness checking is globally enabled.      |         |
| check\_services\_freshness        | boolean          | Whether or not services freshness checking is globally enabled.   |         |
| event\_handler\_enabled           | boolean          | Whether or not event handlers are globally enabled.               |         |
| flap\_detection\_enabled          | boolean          | Whether or not flap detection is globally enabled.                |         |
| id                                | unsigned integer | Instance ID.                                                      |         |
| last\_alive                       | time             | Last time the instance was known alive.                           |         |
| last\_command\_check              | time             | Last time a check command was executed.                           |         |
| notifications\_enabled            | boolean          | Whether or not notifications are globally enabled.                |         |
| obsess\_over\_hosts               | boolean          | Whether or not the monitoring engine should obsess over hosts.    |         |
| obsess\_over\_services            | boolean          | Whether or not the monitoring engine should obsess over services. |         |
| passive\_host\_checks\_enabled    | boolean          | Whether or not passive host checks are globally enabled.          |         |
| passive\_service\_checks\_enabled | boolean          | Whether or not passive service checks are globally enabled.       |         |
| global\_host\_event\_handler      | string           | Global host event handler.                                        |         |
| global\_service\_event\_handler   | string           | Global service event handler.                                     |         |

### Log entry

| Property              | Type             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Version |
|-----------------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| c\_time               | time             | Log time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |         |
| host\_id              | unsigned integer | Host ID. 0 if log entry does not refer to a specific host or service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| host\_name            | string           | Host name. Can be empty if log entry does not refer to a specific host or service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |         |
| instance\_name        | string           | Instance name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |         |
| issue\_start\_time    | time             | Issue start time if correlation is enabled and log entry refers to an issue.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |         |
| log\_type             | short integer    | 0 for SOFT, 1 for HARD.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |         |
| msg\_type             | short integer    | 0 for SERVICE ALERT (sent on service state change), 1 for HOST ALERT (sent on host state change(, 2 for SERVICE NOTIFICATION (notification sent out for a service), 3 for HOST NOTIFICATION (notification sent out for a host), 4 for Warning (Centreon Engine warning), 5 for EXTERNAL COMMAND (external command received), 6 for CURRENT SERVICE STATE (current state of monitored service, usually sent at configuration reload), 7 for CURRENT HOST STATE (current state of monitored host, usually sent at configuration reload), 8 for INITIAL SERVICE STATE (initial state of service, after retention processing, sent at process start), 9 for INITIAL HOST STATE (initial state of monitored host, after retention processing, sent at process start), 10 for ACKNOWLEDGE\_SVC\_PROBLEM external command (special case of EXTERNAL COMMAND for service acknowledgement), 11 for ACKNOWLEDGE\_HOST\_PROBLEM external command (special case of EXTERNAL COMMAND for host acknowledgement). |         |
| notification\_cmd     | string           | Notification command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| notification\_contact | string           | Notification contact.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| retry                 | integer          | Current check attempt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |         |
| service\_description  | string           | Service description. Empty if log entry does not refer to a specific service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |         |
| service\_id           | unsigned integer | Service ID. 0 if log entry does not refer to a specific service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| status                | short integer    | Host / service status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |         |
| output                | string           | Output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |         |

### Module

Module events are generated when Centreon Broker modules get loaded
or unloaded.

| Property           | Type             | Description                                                     | Version |
|--------------------|------------------|-----------------------------------------------------------------|---------|
| args               | string           | Module arguments.                                               |         |
| enabled            | boolean          | Whether or not this module is enabled.                          |         |
| filename           | string           | Path to the module file.                                        |         |
| instance\_id       | unsigned integer | Instance ID.                                                    |         |
| loaded             | boolean          | Whether or not this module is loaded.                           |         |
| should\_be\_loaded | boolean          | Whether or not this module should be (should have been) loaded. |         |

### Service

| Property                          | Type             | Description | Version |
|-----------------------------------|------------------|-------------|---------|
| acknowledged                      | boolean          |             |         |
| acknowledged\_type                | short integer    |             |         |
| action\_url                       | string           |             |         |
| active\_checks\_enabled           | boolean          |             |         |
| check\_freshness                  | boolean          |             |         |
| check\_interval                   | real             |             |         |
| check\_period                     | string           |             |         |
| check\_type                       | short integer    |             |         |
| current\_check\_attempt           | short integer    |             |         |
| current\_state                    | short integer    |             |         |
| default\_active\_checks\_enabled  | boolean          |             |         |
| default\_event\_handler\_enabled  | boolean          |             |         |
| default\_flap\_detection\_enabled | boolean          |             |         |
| default\_notifications\_enabled   | boolean          |             |         |
| default\_passive\_checks\_enabled | boolean          |             |         |
| dowtine\_depth                    | short integer    |             |         |
| display\_name                     | string           |             |         |
| enabled                           | boolean          |             |         |
| event\_handler                    | string           |             |         |
| event\_handler\_enabled           | boolean          |             |         |
| execution\_time                   | real             |             |         |
| first\_notification\_delay        | real             |             |         |
| flap\_detection\_enabled          | boolean          |             |         |
| flap\_detection\_on\_critical     | boolean          |             |         |
| flap\_detection\_on\_ok           | boolean          |             |         |
| flap\_detection\_on\_unknown      | boolean          |             |         |
| flap\_detection\_on\_warning      | boolean          |             |         |
| freshness\_threshold              | real             |             |         |
| has\_been\_checked                | boolean          |             |         |
| high\_flap\_threshold             | real             |             |         |
| host\_id                          | unsigned integer |             |         |
| host\_name                        | string           |             |         |
| icon\_image                       | string           |             |         |
| icon\_image\_alt                  | string           |             |         |
| service\_id                       | unsigned integer |             |         |
| is\_flapping                      | boolean          |             |         |
| is\_volatile                      | boolean          |             |         |
| last\_check                       | time             |             |         |
| last\_hard\_state                 | short integer    |             |         |
| last\_hard\_state\_change         | time             |             |         |
| last\_notification                | time             |             |         |
| last\_state\_change               | time             |             |         |
| last\_time\_critical              | time             |             |         |
| last\_time\_ok                    | time             |             |         |
| last\_time\_unknown               | time             |             |         |
| last\_time\_warning               | time             |             |         |
| last\_update                      | time             |             |         |
| latency                           | real             |             |         |
| low\_flap\_threshold              | real             |             |         |
| max\_check\_attempts              | short integer    |             |         |
| next\_check                       | time             |             |         |
| next\_notification                | time             |             |         |
| no\_more\_notifications           | boolean          |             |         |
| notes                             | string           |             |         |
| notes\_url                        | string           |             |         |
| notification\_interval            | real             |             |         |
| notification\_number              | short integer    |             |         |
| notification\_period              | string           |             |         |
| notifications\_enabled            | boolean          |             |         |
| notify\_on\_critical              | boolean          |             |         |
| notify\_on\_downtime              | boolean          |             |         |
| notify\_on\_flapping              | boolean          |             |         |
| notify\_on\_recovery              | boolean          |             |         |
| notify\_on\_unknown               | boolean          |             |         |
| notify\_on\_warning               | boolean          |             |         |
| obsess\_over                      | boolean          |             |         |
| passive\_checks\_enabled          | boolean          |             |         |
| percent\_state\_change            | real             |             |         |
| retry\_interval                   | real             |             |         |
| scheduled\_downtime\_depth        | short integer    |             |         |
| service\_description              | string           |             |         |
| should\_be\_scheduled             | boolean          |             |         |
| stalk\_on\_critical               | boolean          |             |         |
| stalk\_on\_ok                     | boolean          |             |         |
| stalk\_on\_unknown                | boolean          |             |         |
| stalk\_on\_warning                | boolean          |             |         |
| state\_type                       | short integer    |             |         |
| check\_command                    | string           |             |         |
| output                            | string           |             |         |
| perf\_data                        | string           |             |         |
| retain\_nonstatus\_information    | boolean          |             |         |
| retain\_status\_information       | boolean          |             |         |

### Service check

| Property                | Type             | Description                                       | Version |
|-------------------------|------------------|---------------------------------------------------|---------|
| active\_checks\_enabled | boolean          | True if active checks are enabled on the service. |         |
| check\_type             | short            |                                                   |         |
| host\_id                | unsigned integer | Host ID.                                          |         |
| next\_check             | time             | Time at which the next check is scheduled.        |         |
| service\_id             | unsigned integer | Service ID.                                       |         |
| command\_line           | string           | Check command line.                               |         |

### Service dependency

| Property                       | Type             | Description | Version |
|--------------------------------|------------------|-------------|---------|
| dependency\_period             | string           |             |         |
| dependent\_host\_id            | unsigned integer |             |         |
| dependent\_service\_id         | unsigned integer |             |         |
| enabled                        | boolean          |             |         |
| execution\_failure\_options    | string           |             |         |
| host\_id                       | unsigned integer |             |         |
| inherits\_parent               | boolean          |             |         |
| notification\_failure\_options | string           |             |         |
| service\_id                    | unsigned integer |             |         |

### Service group

| Property   | Type             | Description                                                 | Version |
|------------|------------------|-------------------------------------------------------------|---------|
| id         | unsigned integer |                                                             |         |
| name       | string           | Group name.                                                 |         |
| enabled    | enabled          | True if the group is enable, false if it is not (deletion). |         |
| poller\_id | unsigned integer |                                                             |         |

### Service group member

| Property                  | Type             | Description | Version |
|---------------------------|------------------|-------------|---------|
| acknowledged              | boolean          |             |         |
| acknowledgement\_type     | short integer    |             |         |
| active\_checks\_enabled   | boolean          |             |         |
| check\_interval           | real             |             |         |
| check\_period             | string           |             |         |
| check\_type               | short integer    |             |         |
| current\_check\_attempt   | short integer    |             |         |
| current\_state            | short integer    |             |         |
| downtime\_depth           | short integer    |             |         |
| enabled                   | boolean          |             |         |
| event\_handler            | string           |             |         |
| event\_handler\_enabled   | boolean          |             |         |
| execution\_time           | real             |             |         |
| flap\_detection\_enabled  | boolean          |             |         |
| has\_been\_checked        | boolean          |             |         |
| host\_id                  | unsigned integer |             |         |
| host\_name                | string           |             |         |
| is\_flapping              | boolean          |             |         |
| last\_check               | time             |             |         |
| last\_hard\_state         | short integer    |             |         |
| last\_hard\_state\_change | time             |             |         |
| last\_notification        | time             |             |         |
| last\_state\_change       | time             |             |         |
| last\_time\_critical      | time             |             |         |
| last\_time\_ok            | time             |             |         |
| last\_time\_unknown       | time             |             |         |
| last\_time\_warning       | time             |             |         |
| last\_update              | time             |             |         |
| latency                   | real             |             |         |
| max\_check\_attempts      | short integer    |             |         |
| modified\_attributes      | unsigned integer |             |         |
| next\_check               | time             |             |         |
| next\_notification        | time             |             |         |
| no\_more\_notifications   | boolean          |             |         |
| notification\_number      | short integer    |             |         |
| notifications\_enabled    | boolean          |             |         |
| obsess\_over              | boolean          |             |         |
| passive\_checks\_enabled  | boolean          |             |         |
| percent\_state\_change    | real             |             |         |
| retry\_interval           | real             |             |         |
| service\_description      | string           |             |         |
| service\_id               | unsigned integer |             |         |
| should\_be\_scheduled     | boolean          |             |         |
| state\_type               | short integer    |             |         |
| check\_command            | string           |             |         |
| output                    | string           |             |         |
| perf\_data                | string           |             |         |

### Instance configuration

| Property   | Type             | Description                                                              | Version |
|------------|------------------|--------------------------------------------------------------------------|---------|
| loaded     | boolean          | True if the instance loaded successfully.                                |         |
| poller\_id | unsigned integer | ID of the poller which received a configuration update request (reload). |         |

## Storage

### Metric

This event is generated by a Storage endpoint to notify that a RRD metric
graph should be updated.

| Property         | Type             | Description                                                                 | Version     |
|------------------|------------------|-----------------------------------------------------------------------------|-------------|
| ctime            | time             | Time at which the metric value was generated.                               |             |
| interval         | unsigned integer | Normal service check interval in seconds.                                   |             |
| metric\_id       | unsigned integer | Metric ID (from the metrics table).                                         |             |
| name             | string           | Metric name.                                                                |             |
| rrd\_len         | integer          | RRD retention length in seconds.                                            |             |
| value            | real             | Metric value.                                                               |             |
| value\_type      | short integer    | Metric type (1 =3D counter, 2 =3D derive, 3 =3D absolute, other =3D gauge). |             |
| is\_for\_rebuild | boolean          | Set to true when a graph is being rebuild (see the rebuild event).          |             |
| host\_id         | unsigned integer | The id of the host this metric is attached to.                              | Since 3.0.0 |
| service\_id      | unsigned integer | The id of the service this metric is attached to.                           | Since 3.0.0 |

### Rebuild

Rebuild events are generated when a Storage endpoint detects that some
graph should be rebuild. It first sends a rebuild start event (end =3D
false), then metric values (metric event with is\_for\_rebuild set to
true) and finally a rebuild end event (end =3D true).

| Property  | Type             | Description                                                                                                   | Version |
|-----------|------------------|---------------------------------------------------------------------------------------------------------------|---------|
| end       | boolean          | End flag. Set to true if rebuild is starting, false if it is ending.                                          |         |
| id        | unsigned integer | ID of metric to rebuild if is\_index is false, or ID of index to rebuild (status graph) if is\_index is true. |         |
| is\_index | boolean          | Index flag. Rebuild index (status) if true, rebuild metric if false.                                          |         |

### Remove graph

A Storage endpoint generates a remove graph event when some graph
must be deleted.

| Property  | Type             | Description                                                                                            | Version |
|-----------|------------------|--------------------------------------------------------------------------------------------------------|---------|
| id        | unsigned integer | Index ID (is\_index =3D true) or metric ID (is\_index =3D false) to remove.                            |         |
| is\_index | boolean          | Index flag. If true, a index (status) graph will be deleted. If false, a metric graph will be deleted. |         |

### Status

| Property         | Type             | Description                                                        | Version |
|------------------|------------------|--------------------------------------------------------------------|---------|
| ctime            | time             | Time at which the status was generated.                            |         |
| index\_id        | unsigned integer | Index ID.                                                          |         |
| interval         | unsigned integer | Normal service check interval in seconds.                          |         |
| rrd\_len         | time             | RRD retention in seconds.                                          |         |
| state            | short integer    | Service state.                                                     |         |
| is\_for\_rebuild | boolean          | Set to true when a graph is being rebuild (see the rebuild event). |         |

### Metric mapping

| Property  | Type             | Description | Version |
|-----------|------------------|-------------|---------|
| index\_id | unsigned integer | Index ID.   |         |
| metric\_d | unsigned integer | Index ID.   |         |

### Index mapping

| Property    | Type             | Description | Version |
|-------------|------------------|-------------|---------|
| index\_id   | unsigned integer | Index ID.   |         |
| host\_id    | unsigned integer | Index ID.   |         |
| service\_id | unsigned integer | Index ID.   |         |

## BBDO

### Version response

| Property    | Type          | Description                                                                                                               | Version |
|-------------|---------------|---------------------------------------------------------------------------------------------------------------------------|---------|
| bbdo\_major | short integer | BBDO protocol major used by the peer sending this *version\_response* packet. The sole current protocol version is 1.0.0. |         |
| bbdo\_minor | short integer | BBDO protocol minor used by the peer sending this *version\_response* packet.                                             |         |
| bbdo\_patch | short integer | BBDO protocol patch used by the peer sending this *version\_response* packet.                                             |         |
| extensions  | string        | Space-separated string of extensions supported by the peer sending this *version\_response* packet.                       |         |

### Ack

| Property            | Type             | Description                                                                                                                   | Version |
|---------------------|------------------|-------------------------------------------------------------------------------------------------------------------------------|---------|
| acknowledged events | unsigned integer | Number of acknowledged events. Only used by "smart" clients (i.e able to acknowledge events). Not to be used by dumb clients. |         |

## BAM

### BA status event

This event is sent when a BA's status changed.

| Property               | Type             | Description                                  | Version                   |
|------------------------|------------------|----------------------------------------------|---------------------------|
| ba\_id                 | unsigned integer | The id of the BA.                            | Since 2.8.0 (BBDO 1.2.0). |
| in\_downtime           | boolean          | True of the BA is in downtime.               | Since 2.8.0 (BBDO 1.2.0). |
| last\_state\_change    | time             | The time of the last state change of the BA. | Since 2.8.0 (BBDO 1.2.0). |
| level\_acknowledgement | real             | The acknowledgment level of the BA.          | Since 2.8.0 (BBDO 1.2.0). |
| level\_downtime        | real             | The downtime level of the BA.                | Since 2.8.0 (BBDO 1.2.0). |
| level\_nominal         | real             | The nominal level of the BA.                 | Since 2.8.0 (BBDO 1.2.0). |
| state                  | short integer    | The state of the BA.                         | Since 2.8.0 (BBDO 1.2.0). |
| state\_changed         | boolean          | True if the state of the BA just changed.    | Since 2.8.0 (BBDO 1.2.0). |

### KPI status event</h3>

This event is sent when a KPI's status changed.

| Property                     | Type             | Description                                   | Version                   |
|------------------------------|------------------|-----------------------------------------------|---------------------------|
| kpi\_id                      | unsigned integer | The id of the KPI.                            | Since 2.8.0 (BBDO 1.2.0). |
| in\_downtime                 | bool             | True if the KPI is in downtime.               |                           |
| level\_acknowledgement\_hard | real             | The hard acknowledgement level of the KPI.    | Since 2.8.0 (BBDO 1.2.0). |
| level\_acknowledgement\_soft | real             | The soft acknowledgement level of the KPI.    | Since 2.8.0 (BBDO 1.2.0). |
| level\_downtime\_hard        | real             | The hard downtime level of the KPI.           | Since 2.8.0 (BBDO 1.2.0). |
| level\_downtime\_soft        | real             | The soft downtime level of the KPI.           | Since 2.8.0 (BBDO 1.2.0). |
| level\_nominal\_hard         | real             | The hard nominal level of the KPI.            | Since 2.8.0 (BBDO 1.2.0). |
| level\_nominal\_soft         | real             | The soft nominal level of the KPI.            | Since 2.8.0 (BBDO 1.2.0). |
| state\_hard                  | short integer    | The hard state of the KPI.                    | Since 2.8.0 (BBDO 1.2.0). |
| state\_soft                  | short integer    | The soft state of the KPI.                    | Since 2.8.0 (BBDO 1.2.0). |
| last\_state\_change          | time             | The time of the last state change of the KPI. | Since 2.8.0 (BBDO 1.2.0). |
| last\_impact                 | real             | The last impact of the KPI.                   | Since 2.8.0 (BBDO 1.2.0). |
| valid                        | bool             | True if the KPi is valid.                     |                           |

### Meta service status event

This event is sent when a meta service's status changed.

| Property          | Type             | Description                     | Version                   |
|-------------------|------------------|---------------------------------|---------------------------|
| meta\_service\_id | unsigned integer | The id of the meta service.     | Since 2.8.0 (BBDO 1.2.0). |
| value             | real             | The value of the meta service.  | Since 2.8.0 (BBDO 1.2.0). |
| state\_changed    | boolean          | True if the state just changed. | Since 2.8.0 (BBDO 1.2.0). |

### BA-event event

This event is sent when a new BA event is opened, or an old one is closed.

| Property     | Type             | Description                                                    | Version                   |
|--------------|------------------|----------------------------------------------------------------|---------------------------|
| ba\_id       | unsigned integer | The id of the BA.                                              | Since 2.8.0 (BBDO 1.2.0). |
| first\_level | real             | The first level of the BA event.                               | Since 2.8.0 (BBDO 1.2.0). |
| end\_time    | time             | The end\_time of the event. 0 or (time)-1 for an opened event. | Since 2.8.0 (BBDO 1.2.0). |
| in\_downtime | boolean          | True if BA was in downtime during the BA event.                | Since 2.8.0 (BBDO 1.2.0). |
| start\_time  | time             | The start\_time of the event.                                  | Since 2.8.0 (BBDO 1.2.0). |
| status       | short integer    | The status of the BA during the event.                         | Since 2.8.0 (BBDO 1.2.0). |

### KPI-event event

This event is sent when a new KPI event is opened, or an old one is closed.

| Property      | Type             | Description                                                    | Version                   |
|---------------|------------------|----------------------------------------------------------------|---------------------------|
| kpi\_id       | unsigned integer | The id of the KPI.                                             | Since 2.8.0 (BBDO 1.2.0). |
| end\_time     | time             | The end\_time of the event. 0 or (time)-1 for an opened event. | Since 2.8.0 (BBDO 1.2.0). |
| impact\_level | integer          | The level of the impact.                                       | Since 2.8.0 (BBDO 1.2.0). |
| in\_downtime  | boolean          | True if BA was in downtime during the BA event.                | Since 2.8.0 (BBDO 1.2.0). |
| first\_output | string           | The first output of the KPI during the event.                  | Since 2.8.0 (BBDO 1.2.0). |
| perfdata      | string           | The first perfdata of the KPI during the event.                | Since 2.8.0 (BBDO 1.2.0). |
| start\_time   | time             | The start\_time of the event.                                  | Since 2.8.0 (BBDO 1.2.0). |
| status        | short integer    | The status of the BA during the event.                         | Since 2.8.0 (BBDO 1.2.0). |

### BA duration event event

This event is sent when a new BA duration event is computed by BAM broker.

| Property                | Type             | Description                                            | Version                   |
|-------------------------|------------------|--------------------------------------------------------|---------------------------|
| ba\_id                  | unsigned integer | The id of the BA.                                      | Since 2.8.0 (BBDO 1.2.0). |
| real\_start\_time       | time             | The first level of the BA event.                       | Since 2.8.0 (BBDO 1.2.0). |
| end\_time               | time             | The end\_time of the event, in the given timeperiod.   | Since 2.8.0 (BBDO 1.2.0). |
| start\_time             | time             | The start\_time of the event, in the given timeperiod. | Since 2.8.0 (BBDO 1.2.0). |
| duration                | unsigned integer | end\_time - start\_time.                               | Since 2.8.0 (BBDO 1.2.0). |
| sla\_duration           | unsigned integer | The duration of the event in the given timperiod.      | Since 2.8.0 (BBDO 1.2.0). |
| timeperiod\_is\_default | boolean          | True if the timeperiod if the default for this BA.     | Since 2.8.0 (BBDO 1.2.0). |

### Dimension BA

This event is part of the dimension (i.e configuration) dump occuring at
startup and after each BAM configuration reload.

| Property                   | Type             | Description                | Version                   |
|----------------------------|------------------|----------------------------|---------------------------|
| ba\_id                     | unsigned integer | The id of the BA.          | Since 2.8.0 (BBDO 1.2.0). |
| ba\_name                   | string           | The name of the BA.        | Since 2.8.0 (BBDO 1.2.0). |
| ba\_description            | string           | The description of the BA. | Since 2.8.0 (BBDO 1.2.0). |
| sla\_month\_percent\_crit  | real             |                            | Since 2.8.0 (BBDO 1.2.0). |
| sla\_month\_percent\_warn  | real             |                            | Since 2.8.0 (BBDO 1.2.0). |
| sla\_month\_duration\_crit | unsigned integer |                            | Since 2.8.0 (BBDO 1.2.0). |
| sla\_month\_duration\_warn | unsigned integer |                            | Since 2.8.0 (BBDO 1.2.0). |

### Dimension KPI

This event is part of the dimension (i.e configuration) dump occuring at
startup and after each BAM configuration reload.

| Property             | Type             | Description                                                                  | Version                   |
|----------------------|------------------|------------------------------------------------------------------------------|---------------------------|
| kpi\_id              | unsigned integer | The id of the KPI.                                                           | Since 2.8.0 (BBDO 1.2.0). |
| ba\_id               | unsigned integer | The id of the parent BA of this KPI.                                         | Since 2.8.0 (BBDO 1.2.0). |
| ba\_name             | string           | The name of the parent BA of this KPI.                                       | Since 2.8.0 (BBDO 1.2.0). |
| host\_id             | unsigned integer | The id of the host associated with this KPI for service KPI.                 | Since 2.8.0 (BBDO 1.2.0). |
| host\_name           | string           | The name of the host associated with this KPI for service KPI.               | Since 2.8.0 (BBDO 1.2.0)  |
| service\_id          | unsigned integer | The id of the service associated with this KPI for service KPI.              | Since 2.8.0 (BBDO 1.2.0). |
| service\_description | string           | The description of the service associated with this KPI for service KPI.     | Since 2.8.0 (BBDO 1.2.0). |
| kpi\_ba\_id          | unsigned integer | The id of the BA associated with this KPI for BA KPI.                        | Since 2.8.0 (BBDO 1.2.0). |
| kpi\_ba\_name        | string           | The name of the BA associated with this KPI for BA KPI.                      | Since 2.8.0 (BBDO 1.2.0). |
| meta\_service\_id    | unsigned int     | The id of the meta-service associated with this KPI for meta-service KPI.    | Since 2.8.0 (BBDO 1.2.0). |
| meta\_service\_name  | string           | The name of the meta-service associated with this KPI for meta-service KPI.  | Since 2.8.0 (BBDO 1.2.0). |
| boolean\_id          | unsigned int     | The id of the boolean expression associated with this KPI for boolean KPI.   | Since 2.8.0 (BBDO 1.2.0). |
| boolean\_name        | string           | The name of the boolean expression associated with this KPI for boolean KPI. | Since 2.8.0 (BBDO 1.2.0). |
| impact\_warning      | real             | The impact of a warning state for this KPI.                                  | Since 2.8.0 (BBDO 1.2.0). |
| impact\_critical     | real             | The impact of a critical state for this KPI.                                 | Since 2.8.0 (BBDO 1.2.0). |
| impact\_unknown      | real             | The impact of a unknown state for this KPI.                                  | Since 2.8.0 (BBDO 1.2.0). |

### Dimension BA BV relation

This event is part of the dimension (i.e configuration) dump occuring at
startup and after each BAM configuration reload.

| Property | Type             | Description       | Version                   |
|----------|------------------|-------------------|---------------------------|
| ba\_id   | unsigned integer | The id of the BA. | Since 2.8.0 (BBDO 1.2.0). |
| bv\_id   | unsigned integer | The id of the BV. | Since 2.8.0 (BBDO 1.2.0). |



### Dimension BV

This event is part of the dimension (i.e configuration) dump occuring at
startup and after each BAM configuration reload.

| Property        | Type             | Description                | Version                   |
|-----------------|------------------|----------------------------|---------------------------|
| bv\_id          | unsigned integer | The id of the BV.          | Since 2.8.0 (BBDO 1.2.0). |
| bv\_name        | string           | The name of the BV.        | Since 2.8.0 (BBDO 1.2.0). |
| bv\_description | string           | The description of the BV. | Since 2.8.0 (BBDO 1.2.0). |

### Dimension table signal

This event is part of the dimension (i.e configuration) dump occuring at
startup and after each BAM configuration reload.

This signal is sent before the dump of all the dimensions, and again at
the end of the dump.

| Property        | Type    | Description                                                   | Version                   |
|-----------------|---------|---------------------------------------------------------------|---------------------------|
| update\_started | boolean | True if this is the start of the dump, false if it's the end. | Since 2.8.0 (BBD0 1.2.0). |

### Rebuild signal

This event is sent when a rebuild of the event durations and availabilities
is asked to the BAM broker endpoint.

| Property         | Type   | Description                                                                                                 | Version                   |
|------------------|--------|-------------------------------------------------------------------------------------------------------------|---------------------------|
| bas\_to\_rebuild | string | A string containing the id of all the BAs to rebuild, separated by a comma and a space (i.e "1, 5, 8, 12"). | Since 2.8.0 (BBDO 1.2.0). |

### Dimension timeperiod

This event is part of the dimension (i.e configuration) dump occuring at
startup and after each BAM configuration reload.

| Property  | Type             | Description                       | Version                   |
|-----------|------------------|-----------------------------------|---------------------------|
| tp\_id    | unsigned integer | The id of the timeperiod.         | Since 2.8.0 (BBDO 1.2.0). |
| name      | string           | The name of the timeperiod.       | Since 2.8.0 (BBDO 1.2.0). |
| monday    | string           | The timeperiod rule for this day. | Since 2.8.0 (BBDO 1.2.0). |
| tuesday   | string           | The timeperiod rule for this day. | Since 2.8.0 (BBDO 1.2.0). |
| wednesday | string           | The timeperiod rule for this day. | Since 2.8.0 (BBDO 1.2.0). |
| thursday  | string           | The timeperiod rule for this day. | Since 2.8.0 (BBDO 1.2.0). |
| friday    | string           | The timeperiod rule for this day. | Since 2.8.0 (BBDO 1.2.0). |
| saturday  | string           | The timeperiod rule for this day. | Since 2.8.0 (BBDO 1.2.0). |
| sunday    | string           | The timeperiod rule for this day. | Since 2.8.0 (BBDO 1.2.0). |

### Dimension BA timeperiod relation

This event is part of the dimension (i.e configuration) dump occuring at
startup and after each BAM configuration reload.

| Property       | Type             | Description                                            | Version                   |
|----------------|------------------|--------------------------------------------------------|---------------------------|
| ba\_id         | unsigned integer | The id of the BA.                                      | Since 2.8.0 (BBDO 1.2.0). |
| timeperiod\_id | unsigned integer | The id of the timeperiod.                              | Since 2.8.0 (BBDO 1.2.0). |
| is\_default    | boolean          | True if the timeperiod is the default one for this BA. | Since 2.8.0 (BBDO 1.2.0). |

### Dimension timeperiod exception

This event is part of the dimension (i.e configuration) dump occuring at
startup and after each BAM configuration reload.

| Property       | Type             | Description                                     | Version                   |
|----------------|------------------|-------------------------------------------------|---------------------------|
| timeperiod\_id | unsigned integer | The id of the timeperiod having this exception. | Since 2.8.0               |
| daterange      | string           | A string containing the date of the range.      | Since 2.8.0               |
| timerange      | string           | A string containing the time of the range.      | Since 2.8.0 (BBDO 1.2.0). |



### Dimension timeperiod exclusion

This event is part of the dimension (i.e configuration) dump occuring at
startup and after each BAM configuration reload.

| Property                 | Type             | Description                                     | Version                   |
|--------------------------|------------------|-------------------------------------------------|---------------------------|
| timeperiod\_id           | unsigned integer | The id of the timeperiod having this exclusion. | Since 2.8.0 (BBDO 1.2.0). |
| excluded\_timeperiod\_id | unsigned integer | The id of the excluded timeperiod.              | Since 2.8.0 (BBDO 1.2.0). |

### Inherited downtime

| Property     | Type             | Description                    | Version |
|--------------|------------------|--------------------------------|---------|
| bad\_id      | unsigned integer | The id of the BA in downtime.  |         |
| in\_downtime | boolean          | True if the BA is in downtime. |         |

## Extcmd

### Command request

| Property              | Type    | Description                                                 | Version |
|-----------------------|---------|-------------------------------------------------------------|---------|
| command               | string  | The command request.                                        |         |
| endp                  | string  | The endpoint this command is destined to.                   |         |
| uuid                  | string  | The uuid of this request.                                   |         |
| with\_partial\_result | boolean | True if the command should be answered with partial result. |         |

### Command result

| Property | Type    | Description                                            | Version |
|----------|---------|--------------------------------------------------------|---------|
| code     | integer | The return code of this command.                       |         |
| uuid     | string  | The uuid of the request this command is the result of. |         |
| msg      | string  | The string message of the command result.              |         |

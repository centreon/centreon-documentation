---
id: developer-broker-mapping
title: Centreon Broker Event Mapping
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Centreon Broker uses global mapping tables for events that can be
exchanged. This page list properties available for each event type.

## NEB

### Acknowledgement

The acknowledgement of an incident means that the problem has been taken into
account by a user of the monitoring. When the user acknowledges the problem,
Centreon Engine emits an **acknowledgement** event. 

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Acknowledgement

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 1       | 65537 |

The content of this message is serialized as follows:

| Property                                     | Type             | Description                                                              |
| -------------------------------------------- | ---------------- | ------------------------------------------------------------------------ |
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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Comment

In several situations, the user has to enter a comment in the Centreon
interface. When they validate it, Centreon Engine emits a **comment** event. 

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Comment

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 2       | 65538 |

The content of this message is serialized as follows:

| Property       | Type             | Description                                                                                                                               |
| -------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Custom variable

A **custom variable** is essentially a variable with a **name** and a **value**. It
often comes from Centreon Engine macros. For Centreon to work correctly, these
custom variables must be sent to Centreon Broker. Each one is sent thanks to
a **custom variable** event.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::CustomVariable

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 3       | 65539 |

The content of this message is serialized as follows:

| Property       | Type             | Description                                                    |
| -------------- | ---------------- | -------------------------------------------------------------- |
| enabled        | boolean          | True if the custom variable is enabled.                        |
| host\_id       | unsigned integer | Host ID.                                                       |
| modified       | boolean          | True if the variable was modified.                             |
| name           | string           | Variable name.                                                 |
| service\_id    | unsigned integer | Service ID. 0 if this is a host custom variable.               |
| update\_time   | time             | Last time at which the variable was updated.                   |
| var\_type      | short integer    | 0 for a host custom variable, 1 for a service custom variable. |
| value          | string           | Variable value.                                                |
| default\_value | string           | The default value of the custom var.                           |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Custom variable status

**Custom variable status** events are generated when a custom variable needs
to be updated.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::CustomVariableStatus

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 4       | 65540 |

The content of this message is serialized as follows:

| Property     | Type             | Description                                      |
| ------------ | ---------------- | ------------------------------------------------ |
| host\_id     | unsigned integer | Host ID.                                         |
| modified     | boolean          | True if the variable was modified.               |
| name         | string           | Variable name.                                   |
| service\_id  | unsigned integer | Service ID. 0 if this is a host custom variable. |
| update\_time | time             | Last time at which the variable was updated.     |
| value        | string           | Variable value.                                  |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Downtime

This event is emitted by Centreon Engine when a downtime is set on a resource.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Downtime

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 5       | 65541 |

The content of this message is serialized as follows:

| Property            | Type             | Description                                                |
| ------------------- | ---------------- | ---------------------------------------------------------- |
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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Event handler

**Event handlers** are optional system commands (scripts or executables) that are
run whenever a resource state change occurs. When such a command is configured,
an **event handler** event is emitted by Centreon Engine. These BBDO events are
usually sent when Centreon Engine is restarted or reloaded.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::EventHandler

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 6       | 65542 |

The content of this message is serialized as follows:

| Property        | Type             | Description                                                                                                                                      |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Flapping status

When the status of a resource is unstable, Centreon Engine tags it as **flapping**.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::FlappingStatus

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 6       | 65543 |

The content of this message is serialized as follows:

| Property               | Type             | Description                                       |
| ---------------------- | ---------------- | ------------------------------------------------- |
| event\_time            | time             | Time at witch the flapping event has been occured |
| event\_type            | integer          | 1000 for start, 1001 stop                         |
| flapping\_type         | short integer    | 0 for host, 1 for service                         |
| high\_threshold        | real             | High flapping threshold.                          |
| host\_id               | unsigned integer | Host ID.                                          |
| low\_threshold         | real             | Low flapping threshold.                           |
| percent\_state\_change | real             | percent of state change                           |
| reason\_type           | short integer    | not used                                          |
| service\_id            | unsigned integer | Service ID. 0 if this is a host flapping entry.   |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Tag

The **tag** is a new configuration event currently used for categories and groups.

At the moment, it is used in parallel with **group** events and other things but
in a near future should be more global.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

There are no **tag** events in BBDO v2.

</TabItem>

<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbTag

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 34      | 65570 |

This event is a Protobuf event so items are not serialized as in BBDO v2
events but using the Protobuf 3 serialization mechanism. When BBDO v3 is
used, no more **NEB::Tag** events should be sent, instead you
should see **NEB::PbTag** events.

The [protobuf message](https://developers.google.com/protocol-buffers/docs/proto3)
is the following:

```cpp
enum TagType {
  SERVICEGROUP = 0;       // Tag representing a service group
  HOSTGROUP = 1;          // Tag representing a host group
  SERVICECATEGORY = 2;    // Tag representing a service category
  HOSTCATEGORY = 3;       // Tag representing a host category
}

message Tag {
  uint64 id = 1;          // Tag ID (unicity obtained by coupling it with the type)
  enum Action {
    ADD = 0;              // With this action, the event adds a new tag.
    DELETE = 1;           // With this action, the event removes a tag.
    MODIFY = 2;           // With this action, the event modifies a tag.
  }

  Action action = 2;      // The current action for this event.
  TagType type = 3;       // The type of this tag.
  string name = 4;        // Name of this tag.
  int64 poller_id = 5;    // Poller ID.
}
```

</TabItem>
</Tabs>

This event is emitted every time a change is made to the configuration of a host and the configuration is deployed.

### Host

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Host

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 12      | 65548 |

The content of this message is serialized as follows:

| Property                          | Type             | Description                                                                   |
| --------------------------------- | ---------------- | ----------------------------------------------------------------------------- |
| acknowledged                      | boolean          | true if the problem has been acknowledged                                     |
| acknowledgement\_type             | short integer    | 0 none, 1 normal, 2 sticky                                                    |
| action\_url                       | string           | url to obtain information about host                                          |
| active\_checks\_enabled           | boolean          | active check                                                                  |
| address                           | string           | IP of the host                                                                |
| alias                             | string           | alias                                                                         |
| check\_freshness                  | boolean          | passive freshness check activated                                             |
| check\_interval                   | real             | interval in units (usually 60s) between 2 checks                              |
| check\_period                     | string           | time period when checks are authorized                                        |
| check\_type                       | short integer    | 0 active, 1 passive                                                           |
| current\_check\_attempt           | short integer    | number of failed checks                                                       |
| current\_state                    | short integer    | 0 up, 1 down, 2 unreachable                                                   |
| default\_active\_checks\_enabled  | boolean          | same as active\_checks\_enabled                                               |
| default\_event\_handler\_enabled  | boolean          | same as event\_handler\_enabled                                               |
| default\_flap\_detection\_enabled | boolean          | same as flap\_detection\_enabled                                              |
| default\_notifications\_enabled   | boolean          | same as notifications\_enabled                                                |
| default\_passive\_checks\_enabled | boolean          | same as passive\_checks\_enabled                                              |
| downtime\_depth                   | short integer    | number of active downtimes                                                    |
| display\_name                     | string           | name displayed in UI                                                          |
| enabled                           | boolean          | enabled                                                                       |
| event\_handler                    | string           | command executed when state changes                                           |
| event\_handler\_enabled           | boolean          | event\_handler enabled                                                        |
| execution\_time                   | real             | duration of last check                                                        |
| first\_notification\_delay        | real             | delay before notify in units (usually 60s)                                    |
| flap\_detection\_enabled          | boolean          | flap detection enabled                                                        |
| flap\_detection\_on\_down         | boolean          | down state is taken into account for flap detection                           |
| flap\_detection\_on\_unreachable  | boolean          | unreachable state is taken into account for flap detection                    |
| flap\_detection\_on\_up           | boolean          | up state is taken into account for flap detection                             |
| freshness\_threshold              | real             | delay after check result is stale                                             |
| has\_been\_checked                | boolean          | check has been executed at least once                                         |
| high\_flap\_threshold             | real             | if percent state change is higher than this, host is considered flapping      |
| host\_id                          | unsigned integer | id of the host                                                                |
| host\_name                        | string           | name of the host                                                              |
| icon\_image                       | string           | icon displayed in the UI for the host                                         |
| icon\_image\_alt                  | string           | alternate string for icon\_image                                              |
| instance\_id                      | unsigned integer | id of the poller that checks host                                             |
| is\_flapping                      | boolean          | host is flapping                                                              |
| last\_check                       | time             | time of last check                                                            |
| last\_hard\_state                 | short integer    | last hard state                                                               |
| last\_hard\_state\_change         | time             | time of last hard state change                                                |
| last\_notification                | time             | time of last notification sent                                                |
| last\_state\_change               | time             | time of last state change                                                     |
| last\_time\_down                  | time             | time of the last failed check                                                 |
| last\_time\_unreachable           | time             | time of the last failed check with all parent hosts down                      |
| last\_time\_up                    | time             | time of the last successful check                                             |
| last\_update                      | time             | time of message create                                                        |
| latency                           | real             | delay between scheduled check time and real check time                        |
| low\_flap\_threshold              | real             | if percent state change is lower than this, host is not considered flapping   |
| max\_check\_attempts              | short integer    | number of failed check after witch host state become a hard fail state        |
| next\_check                       | time             | next scheduled check time                                                     |
| next\_notification                | time             | next renotification time                                                      |
| no\_more\_notifications           | boolean          | no other notification will be sent                                            |
| notes                             | string           | tooltip in resources status page                                              |
| notes\_url                        | string           | clickable url in resources status page                                        |
| notification\_interval            | real             | interval between two notifications                                            |
| notification\_number              | short integer    | number of notifications sent since the start of the problem                   |
| notification\_period              | string           | time period during witch notifications are allowed                            |
| notifications\_enabled            | boolean          | notifications allowed                                                         |
| notify\_on\_down                  | boolean          | users are notified if host becomes down                                       |
| notify\_on\_downtime              | boolean          | users are notified if host enters in downtime                                 |
| notify\_on\_flapping              | boolean          | users are notified if host is flapping                                        |
| notify\_on\_recovery              | boolean          | users are notified if host becomes up                                         |
| notify\_on\_unreachable           | boolean          | users are notified if host becomes down and parents are down                  |
| obsess\_over                      | boolean          | true if ocsp command if executed after check or notification command          |
| passive\_checks\_enabled          | boolean          | passive check                                                                 |
| percent\_state\_change            | real             | used by flapping and compared with high and low flap thresholds               |
| retry\_interval                   | real             | interval between two check when host isn't in up state and state type is soft |
| should\_be\_scheduled             | boolean          | no next check should be scheduled                                             |
| stalk\_on\_down                   | boolean          | logs check output event changes if state is down                              |
| stalk\_on\_unreachable            | boolean          | logs check output event if state is unreachable                               |
| stalk\_on\_up                     | boolean          | logs check output event if state is up                                        |
| statusmap\_image                  | string           | image displayed in map                                                        |
| state\_type                       | short integer    | state soft 0 or hard 1                                                        |
| check\_command                    | string           | command executed                                                              |
| output                            | string           | output of the command                                                         |
| perf\_data                        | string           | perfdata extracted from the command's output                                  |
| retain\_nonstatus\_information    | boolean          | unused                                                                        |
| retain\_status\_information       | boolean          | unused                                                                        |
| timezone                          | string           | time zone of the host                                                         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbHost

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 30      | 65566 |

This event is a Protobuf event so items are not serialized as in BBDO v2
events but using the Protobuf 3 serialization mechanism. When BBDO v3 is
used, no more **NEB::Host** events should be sent, instead you
should see **NEB::PbHost** events.

The [protobuf message](https://developers.google.com/protocol-buffers/docs/proto3)
is the following:

```cpp
enum AckType {
  NONE = 0;
  NORMAL = 1;
  STICKY = 2;
}

message TagInfo {
  uint64 id = 1;
  TagType type = 2;
}

message Host {
  uint64 host_id = 1;                     // Host ID.

  bool acknowledged = 2;                  // True if the problem has been acknowledged.
  AckType acknowledgement_type = 3;       // Acknowledgement type.

  bool active_checks = 4;                 // True if active checks are enabled.
  bool enabled = 5;                       // True if this host is enabled.
  int32 scheduled_downtime_depth = 6;     // Number of active downtimes.
  string check_command = 7;               // Check command.
  int32 check_interval = 8;               // Interval in units (usually 60s) between 2 checks.
  string check_period = 9;                // Time period when checks are authorized

  enum CheckType {
    ACTIVE = 0;
    PASSIVE = 1;
  }
  CheckType check_type = 10;              // Type of the last check.
  int32 check_attempt = 11;               // Number of failed checks.
  enum State {
    UP = 0;
    DOWN = 1;
    UNREACHABLE = 2;
  }
  State state = 12;                       // Current state.
  bool event_handler_enabled = 13;        // True if an event handler is configured on this host.
  string event_handler = 14;              // Command executed when state changes.
  double execution_time = 15;             // Duration of the last check.
  bool flap_detection = 16;               // True if flap detection is enabled.
  bool checked = 17;                      // check has been executed at least once.
  bool flapping = 18;                     // True if the host is flapping.
  int64 last_check = 19;                  // Timestamp of the last check.
  State last_hard_state = 20;             // Last hard state.
  int64 last_hard_state_change = 21;      // Timestamp of the last hard state change.
  int64 last_notification = 22;           // Timestamp of the last notification.
  int32 notification_number = 23;         // Current notification number or 0 if not.
  int64 last_state_change = 24;           // Timestamp of the last state change.
  int64 last_time_down = 25;              // Timestamp of the last failed check.
  int64 last_time_unreachable = 26;       // Timestamp of the last failed check with all parent hosts down.
  int64 last_time_up = 27;                // Timestamp of the last successful check.
  int64 last_update = 28;                 // Timestamp of the last message creation.
  double latency = 29;                    // Delay between scheduled check time and real check time.
  int32 max_check_attempts = 30;          // Number of failed check after which host state becomes a hard fail state.
  int64 next_check = 31;                  // Next scheduled check timestamp.
  int64 next_host_notification = 32;      // Next renotification timestamp.
  bool no_more_notifications = 33;        // If true, no other notification will be sent.
  bool notify = 34;                       // Notifications allowed
  string output = 35;                     // Output of the check command.
  bool passive_checks = 36;               // Passive checks are enabled.
  double percent_state_change = 37;       // Used by flapping and compared with high and low flap thresholds.
  string perfdata = 38;                   // perfdata extracted from the command's output.
  double retry_interval = 39;             // interval between two checks when host isn't in up state and state type is soft.
  bool should_be_scheduled = 40;          // True if next check should be scheduled
  bool obsess_over_host = 41;             // True if OCSP command is executed after check or notification command.

  enum StateType {
    SOFT = 0;                             // State not still confirmed.
    HARD = 1;                             // State confirmed.
  }

  StateType state_type = 42;              // The state type.
  string action_url = 43;                 // Optional url available in the WUI linked to this host.
  string address = 44;                    // An address
  string alias = 45;                      // An alias for this host.
  bool check_freshness = 46;              // Passive freshness check activated
  bool default_active_checks = 47;        // Same as active_checks but the default value.
  bool default_event_handler_enabled = 48;// Same as event_handler but the default value.
  bool default_flap_detection = 49;       // Same as flap_detection but the default value.
  bool default_notify = 50;               // Same as notify byt the default value.
  bool default_passive_checks = 51;       // Same as passive checks but the default value.
  string display_name = 52;               // Name displayed in the WUI
  double first_notification_delay = 53;   // Delay before notify in units (usually 60s).
  bool flap_detection_on_down = 54;       // Down state is taken into account for flap detection.
  bool flap_detection_on_unreachable = 55;// Unreachable state is taken into account for flap detection.
  bool flap_detection_on_up = 56;         // Up state is taken into account for flap detection.
  double freshness_threshold = 57;        // Delay after check result is stale.
  double high_flap_threshold = 58;        // If percent state change is higher than this, host is considered flapping.
  string name = 59;                       // Host name.
  string icon_image = 60;                 // Icon displayed in the WUI for the host.
  string icon_image_alt = 61;             // Alternative string for icon_image.
  int32 instance_id = 62;                 // Instance ID.
  double low_flap_threshold = 63;         // If percent state change is lower than this, host is not considered flapping.
  string notes = 64;                      // Tooltip in resources status page.
  string notes_url = 65;                  // clickable url in resources status page.
  double notification_interval = 66;      // Interval between two notifications.
  string notification_period = 67;        // Time period during which notifications are allowed.
  bool notify_on_down = 68;               // Users are notified if host becomes down.
  bool notify_on_downtime = 69;           // Users are notified if host enters in downtime.
  bool notify_on_flapping = 70;           // Users are notified if host is flapping.
  bool notify_on_recovery = 71;           // Users are notified if host becomes up.
  bool notify_on_unreachable = 72;        // Users are notified if host becomes unreachable.
  bool stalk_on_down = 73;                // Logs check output changes if state is down.
  bool stalk_on_unreachable = 74;         // Logs check output changes if state is unreachable.
  bool stalk_on_up = 75;                  // Logs check output changes if state is up.
  string statusmap_image = 76;            // Image displayed in map.
  bool retain_nonstatus_information = 77; // Unused
  bool retain_status_information = 78;    // Unused
  string timezone = 79;                   // Time zone of the host.
  uint64 severity_id = 80;                // Severity ID.
  repeated TagInfo tags = 81;             // Tags linked to this host.
  uint64 icon_id = 82;                    // Icon ID.
}
```

</TabItem>
</Tabs>

### Host check

This type of event is emitted by Centreon Engine when a check is performed on a host.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::HostCheck

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 8       | 65544 |

The content of this message is serialized as follows:

| Property                | Type             | Description                                       |
| ----------------------- | ---------------- | ------------------------------------------------- |
| active\_checks\_enabled | boolean          | True if active checks are enabled on the host.    |
| check\_type             | short integer    |                                                   |
| host\_id                | unsigned integer | Host ID.                                          |
| next\_check             | time             | Time at which the next check is scheduled.        |
| command\_line           | string           | Check command line.                               |
| source\_id              | unsigned integer | The id of the source instance this event.         |
| destination\_id         | unsigned integer | The id of the destination instance of this event. |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

This event is emitted every time a change is made to the configuration of a host and the configuration is deployed.

</TabItem>
</Tabs>

### Host dependency

This event is emitted when a dependency between hosts is defined, and the configuration is deployed.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::HostDependency

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 9       | 65545 |

The content of this message is serialized as follows:

| Property                       | Type             | Description | Version |
| ------------------------------ | ---------------- | ----------- | ------- |
| dependency\_period             | string           |             |         |
| dependent\_host\_id            | unsigned integer |             |         |
| enabled                        | boolean          |             |         |
| execution\_failure\_options    | string           |             |         |
| inherits\_parent               | boolean          |             |         |
| host\_id                       | unsigned integer |             |         |
| notification\_failure\_options | string           |             |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Host group

This event is emitted when a host group is created.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::HostGroup

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 10      | 65546 |

The content of this message is serialized as follows:

| Property        | Type             | Description                                                  | Version |
| --------------- | ---------------- | ------------------------------------------------------------ | ------- |
| host\_group\_id | unsigned integer | id of the group                                              |         |
| name            | string           | Group name.                                                  |         |
| enabled         | boolean          | True if the group is enabled, false if it is not (deletion). |         |
| poller\_id      | unsigned integer | id of the poller                                             |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Host group member

This is a configuration event. It is sent just after a **hostgroup** event to
detail members of the group to configure. Even in BBDO v3, we still use the
BBDO v2 version of this event.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::HostGroupMember

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 11      | 65547 |

The content of this message is serialized as follows:

| Property        | Type             | Description                                                       |
| --------------- | ---------------- | ----------------------------------------------------------------- |
| enabled         | boolean          | True if the membership is enabled, false if it is not (deletion). |
| group           | string           | Group name.                                                       |
| instance\_id    | unsigned integer | Instance ID.                                                      |
| host\_id        | unsigned integer | Host ID.                                                          |
| source\_id      | unsigned integer | The id of the source instance this event.                         |
| destination\_id | unsigned integer | The id of the destination instance of this event.                 |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Host parent

This is a configuration event sent when a host parent is defined. Even in BBDO v3,
we still use the BBDO v2 version of this event.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::HostParent

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 13      | 65549 |

The content of this message is serialized as follows:

| Property   | Type             | Description                                                  |
| ---------- | ---------------- | ------------------------------------------------------------ |
| enabled    | boolean          | True if parenting is enabled, false if it is not (deletion). |
| child\_id  | unsigned integer | Child host ID.                                               |
| parent\_id | unsigned integer | Parent host ID.                                              |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Host status

This is an event emitted by Centreon Engine when a host has real time modifications (status, output, metrics...).

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::HostStatus

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 14      | 65550 |

The content of this message is serialized as follows:

| Property                  | Type             | Description                                                                   |
| ------------------------- | ---------------- | ----------------------------------------------------------------------------- |
| acknowledged              | boolean          | problem has been acknowledged                                                 |
| acknowledgement\_type     | short integer    | 0 none, 1 normal, 2 sticky                                                    |
| active\_checks\_enabled   | boolean          | True if active checks are enabled on the host.                                |
| check\_interval           | real             | interval in units (usually 60s) between 2 checks                              |
| check\_period             | string           | time period when checks are authorized                                        |
| check\_type               | short integer    | 0 active, 1 passive                                                           |
| current\_check\_attempt   | short integer    | number of failed checks                                                       |
| current\_state            | short integer    | 0 up, 1 down, 2 unreachable                                                   |
| downtime\_depth           | short integer    | number of active downtimes                                                    |
| enabled                   | boolean          | enabled                                                                       |
| event\_handler            | string           | command executed when state changes                                           |
| event\_handler\_enabled   | boolean          | event\_handler enabled                                                        |
| execution\_time           | real             | duration of last check                                                        |
| flap\_detection\_enabled  | boolean          | flap detection enabled                                                        |
| has\_been\_checked        | boolean          | check has been executed at least once                                         |
| host\_id                  | unsigned integer | id of the host                                                                |
| is\_flapping              | boolean          | host is flapping                                                              |
| last\_check               | time             | time of last check                                                            |
| last\_hard\_state         | State            | last hard state                                                               |
| last\_hard\_state\_change | time             | time of last hard state change                                                |
| last\_notification        | time             | time of last notification sent                                                |
| last\_state\_change       | time             | time of last state change                                                     |
| last\_time\_down          | time             | time of the last failed check                                                 |
| last\_time\_unreachable   | time             | time of the last failed check with all parent hosts down                      |
| last\_time\_up            | time             | time of the last successful check                                             |
| last\_update              | time             | time of message create                                                        |
| latency                   | real             | delay between scheduled check time and real check time                        |
| max\_check\_attempts      | short integer    | number of failed check after which host state become a hard fail state        |
| next\_check               | time             | Time at which the next check is scheduled.                                    |
| next\_host\_notification  | time             | next renotification time                                                      |
| no\_more\_notifications   | boolean          | no other notification will be sent                                            |
| notification\_number      | short integer    | number of notifications sent since the start of the problem                   |
| notifications\_enabled    | boolean          | notifications allowed                                                         |
| obsess\_over              | boolean          | true if ocsp command if executed after check or notification command          |
| passive\_checks\_enabled  | boolean          | passive check                                                                 |
| percent\_state\_change    | real             | used by flapping and compared with high and low flap thresholds               |
| retry\_interval           | real             | interval between two check when host isn't in up state and state type is soft |
| should\_be\_scheduled     | boolean          | next check should be scheduled                                                |
| state\_type               | StateType        | SOFT HARD                                                                     |
| check\_command            | string           | command executed                                                              |
| output                    | string           | output of the command                                                         |
| perf\_data                | string           | perfdata extracted from the command's output                                  |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbHostStatus

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 32      | 65538 |

This event is a Protobuf event so items are not serialized as in BBDO v2
events but using the Protobuf 3 serialization mechanism. When BBDO v3 is
used, no more **NEB::HostStatus** events should be sent, instead you
should see **NEB::PbHostStatus** events.

Here is the definition of this [protobuf](https://developers.google.com/protocol-buffers/docs/proto3) event:

```cpp
enum AckType {
  NONE = 0;
  NORMAL = 1;
  STICKY = 2;
}

message HostStatus {
  uint64 host_id = 1;                 // Host ID.

  bool checked = 2;                   // True if the host is checked.
  enum CheckType {
    ACTIVE = 0;
    PASSIVE = 1;
  }
  CheckType check_type = 3;           // Type of the last check (ACTIVE/PASSIVE).

  enum State {
    UP = 0;
    DOWN = 1;
    UNREACHABLE = 2;
  }
  State state = 4;                    // Current state of the host.
  enum StateType {
    SOFT = 0;
    HARD = 1;
  }
  StateType state_type = 5;           // Confirmed or not state (HARD/SOFT).
  int64 last_state_change = 6;        // Timestamp of the last state change.
  State last_hard_state = 7;          // Last hard state.
  int64 last_hard_state_change = 8;   // Timestamp of the last hard state.
  int64 last_time_up = 9;             // Timestamp of the last up state.
  int64 last_time_down = 10;          // Timestamp of the last down state.
  int64 last_time_unreachable = 11;   // Timestamp of the last unreachable state.

  string output = 12;                 // Check output.
  string long_output = 13;            // Check long output.
  string perfdata = 14;               // Performance data.

  bool flapping = 15;                 // True if the host is flapping.
  double percent_state_change = 16;   // Used by flapping and compared with high and low flap thresholds
  double latency = 17;                // Delay between scheduled check time and real check time.
  double execution_time = 18;         // Duration of last check.
  int64 last_check = 19;              // Timestamp of the last check.
  int64 next_check = 20;              // Timestamp at which the next check is scheduled.
  bool should_be_scheduled = 21;      // True if the next check should be scheduled.
  int32 check_attempt = 22;           // Number of failed checks.

  int32 notification_number = 23;     // Number of notifications sent since the start of the problem.
  bool no_more_notifications = 24;    // No other notification will be sent.
  int64 last_notification = 25;       // Timestamp of last notification sent.
  int64 next_host_notification = 26;  // Timestamp of next renotification.

  AckType acknowledgement_type = 27;  // One value of the AckType enum.
  int32 scheduled_downtime_depth = 28;// Number of active downtimes.
}
```

</TabItem>
</Tabs>

### Instance

This event is emitted by Centreon Engine when Engine starts to send its configuration or when Engine stops.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Instance

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 15      | 65551 |

The content of this message is serialized as follows:

| Property       | Type             | Description                                             |
| -------------- | ---------------- | ------------------------------------------------------- |
| engine         | string           | Name of the monitoring engine used on this instance.    |
| id             | unsigned integer | Instance ID.                                            |
| name           | string           | Instance name.                                          |
| is\_running    | boolean          | Whether or not this instance is running.                |
| pid            | unsigned integer | Monitoring engine PID.                                  |
| program\_end   | time             | Time at which the instance shut down.                   |
| program\_start | time             | Time at which the instance started.                     |
| version        | string           | Version of the monitoring engine used on this instance. |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Instance status

This event is emitted by Centreon Engine regularly as a watchdog. This event tells Broker that the poller
is still alive (with various other information).

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::InstanceStatus

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 16      | 65552 |

The content of this message is serialized as follows:

| Property                          | Type             | Description                                                       | Version |
| --------------------------------- | ---------------- | ----------------------------------------------------------------- | ------- |
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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Log entry

Centreon Engine generates many logs. Some of them are sent to Centreon Broker
to be stored into the database. These logs are sent using **log entry** events.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::LogEntry

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 17      | 65553 |

The content of this message is serialized as follows:

| Property              | Type             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Version |
| --------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| c\_time               | time             | Log time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |         |
| host\_id              | unsigned integer | Host ID. 0 if log entry does not refer to a specific host or service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |         |
| host\_name            | string           | Host name. Can be empty if log entry does not refer to a specific host or service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |         |
| instance\_name        | string           | Instance name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |         |
| log\_type             | short integer    | 0 for SOFT, 1 for HARD.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |         |
| msg\_type             | short integer    | 0 for SERVICE ALERT (sent on service state change), 1 for HOST ALERT (sent on host state change(, 2 for SERVICE NOTIFICATION (notification sent out for a service), 3 for HOST NOTIFICATION (notification sent out for a host), 4 for Warning (Centreon Engine warning), 5 for EXTERNAL COMMAND (external command received), 6 for CURRENT SERVICE STATE (current state of monitored service, usually sent at configuration reload), 7 for CURRENT HOST STATE (current state of monitored host, usually sent at configuration reload), 8 for INITIAL SERVICE STATE (initial state of service, after retention processing, sent at process start), 9 for INITIAL HOST STATE (initial state of monitored host, after retention processing, sent at process start), 10 for ACKNOWLEDGE\_SVC\_PROBLEM external command (special case of EXTERNAL COMMAND for service acknowledgement), 11 for ACKNOWLEDGE\_HOST\_PROBLEM external command (special case of EXTERNAL COMMAND for host acknowledgement). |         |
| notification\_cmd     | string           | Notification command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |         |
| notification\_contact | string           | Notification contact.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |         |
| retry                 | integer          | Current check attempt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| service\_description  | string           | Service description. Empty if log entry does not refer to a specific service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |         |
| service\_id           | unsigned integer | Service ID. 0 if log entry does not refer to a specific service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |         |
| status                | short integer    | Host / service status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| output                | string           | Output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Module

Module events are generated when Centreon Broker modules get loaded
or unloaded.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Module

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 18      | 65554 |

The content of this message is serialized as follows:

| Property           | Type             | Description                                                     | Version |
| ------------------ | ---------------- | --------------------------------------------------------------- | ------- |
| args               | string           | Module arguments.                                               |         |
| enabled            | boolean          | Whether or not this module is enabled.                          |         |
| filename           | string           | Path to the module file.                                        |         |
| instance\_id       | unsigned integer | Instance ID.                                                    |         |
| loaded             | boolean          | Whether or not this module is loaded.                           |         |
| should\_be\_loaded | boolean          | Whether or not this module should be (should have been) loaded. |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Service

This is a configuration event. It is emitted by Centreon Engine when a change is made to the configuration of a service, and the configuration is deployed.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::Service

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 23      | 65559 |

The content of this message is serialized as follows:

| Property                          | Type             | Description                                                                      |
| --------------------------------- | ---------------- | -------------------------------------------------------------------------------- |
| acknowledged                      | boolean          | true if the problem has been acknowledged                                        |
| acknowledgement\_type             | short integer    | 0 none, 1 normal, 2 sticky                                                       |
| action\_url                       | string           | url to obtain information about service                                          |
| active\_checks\_enabled           | boolean          | active check                                                                     |
| check\_freshness                  | boolean          | passive freshness check activated                                                |
| check\_interval                   | real             | interval in units (usually 60s) between 2 checks                                 |
| check\_period                     | string           | time period when checks are authorized                                           |
| check\_type                       | short integer    | 0 active, 1 passive                                                              |
| current\_check\_attempt           | short integer    | number of failed checks                                                          |
| current\_state                    | short integer    | 0 up, 1 down, 2 unreachable                                                      |
| default\_active\_checks\_enabled  | boolean          | same as active\_checks\_enabled                                                  |
| default\_event\_handler\_enabled  | boolean          | same as event\_handler\_enabled                                                  |
| default\_flap\_detection\_enabled | boolean          | same as flap\_detection\_enabled                                                 |
| default\_notifications\_enabled   | boolean          | same as notifications\_enabled                                                   |
| default\_passive\_checks\_enabled | boolean          | same as passive\_checks\_enabled                                                 |
| downtime\_depth                   | short integer    | number of active downtimes                                                       |
| display\_name                     | string           | name displayed in UI                                                             |
| enabled                           | boolean          | enabled                                                                          |
| event\_handler                    | string           | command executed when state changes                                              |
| event\_handler\_enabled           | boolean          | event\_handler enabled                                                           |
| execution\_time                   | real             | duration of last check                                                           |
| first\_notification\_delay        | real             | delay before notify in units (usually 60s)                                       |
| flap\_detection\_enabled          | boolean          | flap detection enabled                                                           |
| flap\_detection\_on\_critical     | boolean          | critical state is taken into account for flap detection                          |
| flap\_detection\_on\_ok           | boolean          | ok state is taken into account for flap detection                                |
| flap\_detection\_on\_unknown      | boolean          | unknown state is taken into account for flap detection                           |
| flap\_detection\_on\_warning      | boolean          | warning state is taken into account for flap detection                           |
| freshness\_threshold              | real             | delay after check result is stale                                                |
| has\_been\_checked                | boolean          | check has been executed at least once                                            |
| high\_flap\_threshold             | real             | if percent state change is higher than this, service is considered flapping      |
| host\_id                          | unsigned integer | id of the host                                                                   |
| host\_name                        | string           | name of the host                                                                 |
| icon\_image                       | string           | icon displayed in the UI for the service                                         |
| icon\_image\_alt                  | string           | alternate string for icon\_image                                                 |
| service\_id                       | unsigned integer | id of the service                                                                |
| is\_flapping                      | boolean          | service is flapping                                                              |
| is\_volatile                      | boolean          | service is volatile                                                              |
| last\_check                       | time             | time of last check                                                               |
| last\_hard\_state                 | short integer    | last hard state                                                                  |
| last\_hard\_state\_change         | time             | time of last hard state change                                                   |
| last\_notification                | time             | time of last notification sent                                                   |
| last\_state\_change               | time             | time of last state change                                                        |
| last\_time\_critical              | time             | time of the last check critical return code                                      |
| last\_time\_ok                    | time             | time of the last check ok return code                                            |
| last\_time\_unknown               | time             | time of the last check unknown return code                                       |
| last\_time\_warning               | time             | time of the last check warning return code                                       |
| last\_update                      | time             | time of message create                                                           |
| latency                           | real             | delay between scheduled check time and real check time                           |
| low\_flap\_threshold              | real             | if percent state change is lower than this, service is not considered flapping   |
| max\_check\_attempts              | short integer    | number of failed check after which service state become a hard fail state        |
| next\_check                       | time             | next scheduled check time                                                        |
| next\_notification                | time             | next renotification time                                                         |
| no\_more\_notifications           | boolean          | no other notification will be sent                                               |
| notes                             | string           | tooltip in resources status page                                                 |
| notes\_url                        | string           | clickable url in resources status page                                           |
| notification\_interval            | real             | interval between two notifications                                               |
| notification\_number              | short integer    | number of notifications sent since the start of the problem                      |
| notification\_period              | string           | time period during which notifications are allowed                               |
| notifications\_enabled            | boolean          | notifications enabled                                                            |
| notify\_on\_critical              | boolean          | users are notified if service state becomes critical                             |
| notify\_on\_downtime              | boolean          | users are notified if service enters in downtime                                 |
| notify\_on\_flapping              | boolean          | users are notified if service is flapping                                        |
| notify\_on\_recovery              | boolean          | users are notified if service becomes ok                                         |
| notify\_on\_unknown               | boolean          | users are notified if service state becomes unknown                              |
| notify\_on\_warning               | boolean          | users are notified if service state becomes warning                              |
| obsess\_over                      | boolean          | true if ocsp command if executed after check or notification command             |
| passive\_checks\_enabled          | boolean          | passive check                                                                    |
| percent\_state\_change            | real             | used by flapping and compared with high and low flap thresholds                  |
| retry\_interval                   | real             | interval between two check when service isn't in up state and state type is soft |
| scheduled\_downtime\_depth        | short integer    | number of active downtimes                                                       |
| service\_description              | string           | name of the service                                                              |
| should\_be\_scheduled             | boolean          | no next check should be scheduled                                                |
| stalk\_on\_critical               | boolean          | logs check output event change if state is critical                              |
| stalk\_on\_ok                     | boolean          | logs check output event change if state is ok                                    |
| stalk\_on\_unknown                | boolean          | logs check output event change if state is unknown                               |
| stalk\_on\_warning                | boolean          | logs check output event change if state is warning                               |
| state\_type                       | short integer    | state soft 0 or hard 1                                                           |
| check\_command                    | string           | command executed                                                                 |
| output                            | string           | output of the command                                                            |
| perf\_data                        | string           | perfdata extracted from the command's output                                     |
| retain\_nonstatus\_information    | boolean          | unused                                                                           |
| retain\_status\_information       | boolean          | unused                                                                           |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbService

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 27      | 65563 |

This event is a Protobuf event so items are not serialized as in BBDO v2
events but using the Protobuf 3 serialization mechanism. When BBDO v3 is
used, no more **NEB::Service** events should be sent, instead you
should see **NEB::PbService** events.

Here is the definition of this [protobuf](https://developers.google.com/protocol-buffers/docs/proto3) event:

```cpp
enum ServiceType {
  SERVICE = 0;
  METASERVICE = 2;
  BA = 3;
  ANOMALY_DETECTION = 4;
}

enum AckType {
  NONE = 0;
  NORMAL = 1;
  STICKY = 2;
}

message Service {
  uint64 host_id = 1;                         // Host ID.
  uint64 service_id = 2;                      // Service ID.

  bool acknowledged = 3;                      // Is it currently acknowledged?
  AckType acknowledgement_type = 4;           // AckType value.

  bool active_checks = 5;                     // Are active checks enabled?
  bool enabled = 6;                           // Is this service active?
  int32 scheduled_downtime_depth = 7;         // Number of active downtimes.
  string check_command = 8;                   // Command executed.
  uint32 check_interval = 9;                  // Interval in units (usually 60s) between 2 checks.
  string check_period = 10;                   // Time period when checks are authorized.

  enum CheckType {
    ACTIVE = 0;
    PASSIVE = 1;
  }
  CheckType check_type = 11;                  // CheckType value.
  int32 check_attempt = 12;                   // Number of failed checks.
  enum State {
    OK = 0;
    WARNING = 1;
    CRITICAL = 2;
    UNKNOWN = 3;
    PENDING = 4;
  }
  State state = 13;                           // Current state of this service.
  bool event_handler_enabled = 14;            // Event handler enabled?
  string event_handler = 15;                  // Command executed when state changes.
  double execution_time = 16;                 // Duration of last check.
  bool flap_detection = 17;                   // Is flap detection enabled?
  bool checked = 18;                          // Is this service checked?
  bool flapping = 19;                         // Is this service flapping?
  int64 last_check = 20;                      // Timestamp of the last check.
  State last_hard_state = 21;                 // Last hard state.
  int64 last_hard_state_change = 22;          // Timestamp of the last hard state change.
  int64 last_notification = 23;               // Timestamp of the last notification.
  int32 notification_number = 24;             // Number of notifications sent since the start of the problem.
  int64 last_state_change = 25;               // Timestamp of the last state change.
  int64 last_time_ok = 26;                    // Timestamp of the last check OK return code.
  int64 last_time_warning = 27;               // Timestamp of the last check WARNING return code.
  int64 last_time_critical = 28;              // Timestamp of the last check CRITICAL return code.
  int64 last_time_unknown = 29;               // Timestamp of the last check UNKNOWN return code.
  int64 last_update = 30;                     // Timestamp of this event creation.
  double latency = 31;                        // Delay between scheduled check time and real check time.
  uint32 max_check_attempts = 32;             // Number of failed checks after which service state becomes a hard fail state.
  int64 next_check = 33;                      // Next scheduled check timestamp.
  int64 next_notification = 34;               // Next notification timestamp.
  bool no_more_notifications = 35;            // No other notification will be sent.
  bool notify = 36;                           // Are notifications enabled on this service?
  string output = 37;                         // Output of the check command.
  string long_output = 38;                    // Long output of the check command.
  bool passive_checks = 39;                   // Are passive checks enabled?
  double percent_state_change = 40;           // Used by flapping and compared with high and low flap thresholds.
  string perfdata = 41;                       // Perfdata extracted from the command's output.
  double retry_interval = 42;                 // Interval between two checks when service isn't in ok state and state type is SOFT.
  string host_name = 43;                      // Host name of this service.
  string description = 44;                    // Description of this service
  bool should_be_scheduled = 45;              // Is there a next check scheduled?
  bool obsess_over_service = 46;              // True if OCSP command is executed after check or notification command.

  enum StateType {
    SOFT = 0;
    HARD = 1;
  }

  StateType state_type = 47;                  // StateType value.
  string action_url = 48;                     // Url to obtain information about this service.
  bool check_freshness = 49;                  // Passive freshness check activated?
  bool default_active_checks = 50;            // Default value of active_checks.
  bool default_event_handler_enabled = 51;    // Default value of event_handler_enabled.
  bool default_flap_detection = 52;           // Default value of flap detection.
  bool default_notify = 53;                   // Default value of notify.
  bool default_passive_checks = 54;           // Default value of passive checks.
  string display_name = 55;                   // Name displayed in WUI.
  double first_notification_delay = 56;       // Delay before notify in units (usually 60s).
  bool flap_detection_on_critical = 57;       // Critical state is taken into account for flap detection.
  bool flap_detection_on_ok = 58;             // Ok state is taken into account for flap detection.
  bool flap_detection_on_unknown = 59;        // Unknown state is taken into account for flap detection.
  bool flap_detection_on_warning = 60;        // Warning state is taken into account for flap detection.
  double freshness_threshold = 61;            // Delay after check result is stale.
  double high_flap_threshold = 62;            // If percent state change is higher than this, service is considered flapping.
  string icon_image = 63;                     // Icon displayed in the WUI for the service.
  string icon_image_alt = 64;                 // Alternate string for icon_image.
  bool is_volatile = 65;                      // Is the service volatile?
  double low_flap_threshold = 66;             // If percent state change is lower than this, service is not considered flapping.
  string notes = 67;                          // Tooltip in resources status page.
  string notes_url = 68;                      // Clickable url in resources status page.
  double notification_interval = 69;          // Interval between two notifications.
  string notification_period = 70;            // Time period during which notifications are allowed.
  bool notify_on_critical = 71;               // Users are notified if service state becomes critical.
  bool notify_on_downtime = 72;               // Users are notified if service enters in downtime.
  bool notify_on_flapping = 73;               // Users are notified if service is flapping.
  bool notify_on_recovery = 74;               // Users are notified if service becomes OK.
  bool notify_on_unknown = 75;                // Users are notified if service state becomes unknown.
  bool notify_on_warning = 76;                // Users are notified if service state becomes warning.
  bool stalk_on_critical = 77;                // Users are notified if service state becomes critical.
  bool stalk_on_ok = 78;                      // Logs check output event change if state is OK.
  bool stalk_on_unknown = 79;                 // Logs check output event change if state is unknown.
  bool stalk_on_warning = 80;                 // Logs check output event change if state is warning.
  bool retain_nonstatus_information = 81;     // unused.
  bool retain_status_information = 82;        // unused.
  uint64 severity_id = 83;                    // Severity ID or 0.
  repeated TagInfo tags = 84;                 // Tag IDs.

  ServiceType type = 85;                      // What kind of service is it?

  /* In case of metaservice and ba, they also have an internal id. We keep it
   * here. */
  uint64 internal_id = 86;                    // ID of metaservice or ba.
  uint64 icon_id = 87;                        // Icon ID.
}
```

</TabItem>
</Tabs>

### Service check

This event is emitted by Centreon Engine when a check is performed on a service.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::ServiceCheck

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 19      | 65555 |

The content of this message is serialized as follows:

| Property                | Type             | Description                                       | Version |
| ----------------------- | ---------------- | ------------------------------------------------- | ------- |
| active\_checks\_enabled | boolean          | True if active checks are enabled on the service. |         |
| check\_type             | short            |                                                   |         |
| host\_id                | unsigned integer | Host ID.                                          |         |
| next\_check             | time             | Time at which the next check is scheduled.        |         |
| service\_id             | unsigned integer | Service ID.                                       |         |
| command\_line           | string           | Check command line.                               |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Service dependency

This is a configuration event sent when a dependency between services is defined.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::ServiceDependency

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 20      | 65556 |

The content of this message is serialized as follows:

| Property                       | Type             | Description | Version |
| ------------------------------ | ---------------- | ----------- | ------- |
| dependency\_period             | string           |             |         |
| dependent\_host\_id            | unsigned integer |             |         |
| dependent\_service\_id         | unsigned integer |             |         |
| enabled                        | boolean          |             |         |
| execution\_failure\_options    | string           |             |         |
| host\_id                       | unsigned integer |             |         |
| inherits\_parent               | boolean          |             |         |
| notification\_failure\_options | string           |             |         |
| service\_id                    | unsigned integer |             |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Service group

This is a configuration event that is emitted when a service group is created.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::ServiceGroup

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 21      | 65557 |

The content of this message is serialized as follows:

| Property   | Type             | Description                                                 | Version |
| ---------- | ---------------- | ----------------------------------------------------------- | ------- |
| id         | unsigned integer |                                                             |         |
| name       | string           | Group name.                                                 |         |
| enabled    | enabled          | True if the group is enable, false if it is not (deletion). |         |
| poller\_id | unsigned integer |                                                             |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Service group member

This is a configuration event. It is sent just after a **servicegroup** event to
detail members of the group to configure. Even in BBDO v3, we still use the
BBDO v2 version of this event.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::ServiceGroupMember

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 22      | 65558 |

The content of this message is serialized as follows:

| Property    | Type             | Description                                                 |
| ----------- | ---------------- | ----------------------------------------------------------- |
| id          | unsigned integer |                                                             |
| host\_id    | unsigned integer |                                                             |
| service\_id | unsigned integer |                                                             |
| enabled     | enabled          | True if the group is enable, false if it is not (deletion). |
| group\_name | string           | Group name.                                                 |
| poller\_id  | unsigned integer |                                                             |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Service status

This is an event emitted by Centreon Engine when a service has real time modifications.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::ServiceStatus

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 24      | 65560 |

The content of this message is serialized as follows:

| Property                  | Type             | Description                                                                      |
| ------------------------- | ---------------- | -------------------------------------------------------------------------------- |
| acknowledged              | boolean          | true if the problem has been acknowledged                                        |
| acknowledgement\_type     | short integer    | 0 none, 1 normal, 2 sticky                                                       |
| active\_checks\_enabled   | boolean          | active check                                                                     |
| check\_interval           | real             | interval in units (usually 60s) between 2 checks                                 |
| check\_period             | string           | time period when checks are authorized                                           |
| check\_type               | short integer    | 0 active, 1 passive                                                              |
| current\_check\_attempt   | short integer    | number of failed checks                                                          |
| current\_state            | short integer    | 0 up, 1 down, 2 unreachable                                                      |
| downtime\_depth           | short integer    | number of active downtimes                                                       |
| enabled                   | boolean          | enabled                                                                          |
| event\_handler            | string           | command executed when state changes                                              |
| event\_handler\_enabled   | boolean          | event\_handler enabled                                                           |
| execution\_time           | real             | duration of last check                                                           |
| flap\_detection\_enabled  | boolean          | flap detection enabled                                                           |
| has\_been\_checked        | boolean          | check has been executed at least once                                            |
| host\_id                  | unsigned integer | id of the host                                                                   |
| host\_name                | string           | name of the host                                                                 |
| is\_flapping              | boolean          | service is flapping                                                              |
| last\_check               | time             | time of last check                                                               |
| last\_hard\_state         | short integer    | last hard state                                                                  |
| last\_hard\_state\_change | time             | time of last hard state change                                                   |
| last\_notification        | time             | time of last notification sent                                                   |
| last\_state\_change       | time             | time of last state change                                                        |
| last\_time\_critical      | time             | time of the last check critical return code                                      |
| last\_time\_ok            | time             | time of the last check ok return code                                            |
| last\_time\_unknown       | time             | time of the last check unknown return code                                       |
| last\_time\_warning       | time             | time of the last check warning return code                                       |
| last\_update              | time             | time of message create                                                           |
| latency                   | real             | delay between scheduled check time and real check time                           |
| max\_check\_attempts      | short integer    | number of failed check after which service state become a hard fail state        |
| next\_check               | time             | next scheduled check time                                                        |
| next\_notification        | time             | next renotification time                                                         |
| no\_more\_notifications   | boolean          | no other notification will be sent                                               |
| notification\_number      | short integer    | number of notifications sent since the start of the problem                      |
| notifications\_enabled    | boolean          | notifications enabled                                                            |
| obsess\_over              | boolean          | true if ocsp command if executed after check or notification command             |
| passive\_checks\_enabled  | boolean          | passive check                                                                    |
| percent\_state\_change    | real             | used by flapping and compared with high and low flap thresholds                  |
| retry\_interval           | real             | interval between two check when service isn't in up state and state type is soft |
| service\_description      | string           | name of the service                                                              |
| service\_id               | unsigned integer | id of the service                                                                |
| should\_be\_scheduled     | boolean          | no next check should be scheduled                                                |
| state\_type               | short integer    | state soft 0 or hard 1                                                           |
| check\_command            | string           | command executed                                                                 |
| output                    | string           | output of the command                                                            |
| perf\_data                | string           | perfdata extracted from the command's output                                     |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbServiceStatus

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 29      | 65565 |

This event is a Protobuf event so items are not serialized as in BBDO v2
events but using the Protobuf 3 serialization mechanism. When BBDO v3 is
used, no more **NEB::ServiceStatus** events should be sent, instead you
should see **NEB::PbServiceStatus**.

Here is the definition of this [protobuf](https://developers.google.com/protocol-buffers/docs/proto3) event:

```cpp
message ServiceStatus {
  uint64 host_id = 1;                         // Host ID.
  uint64 service_id = 2;                      // Service ID.

  bool checked = 3;                          // Is this service checked?
  enum CheckType {
    ACTIVE = 0;
    PASSIVE = 1;
  }
  CheckType check_type = 4;                  // CheckType value.

  enum State {
    OK = 0;
    WARNING = 1;
    CRITICAL = 2;
    UNKNOWN = 3;
    PENDING = 4;
  }
  State state = 5;                           // Current state of this service.
  enum StateType {
    SOFT = 0;
    HARD = 1;
  }
  StateType state_type = 6;                  // StateType value.
  int64 last_state_change = 7;               // Timestamp of the last state change.
  State last_hard_state = 8;                 // Last hard state.
  int64 last_hard_state_change = 9;          // Timestamp of the last hard state change.
  int64 last_time_ok = 10;                   // Timestamp of the last check OK return code.
  int64 last_time_warning = 11;              // Timestamp of the last check WARNING return code.
  int64 last_time_critical = 12;             // Timestamp of the last check CRITICAL return code.
  int64 last_time_unknown = 13;              // Timestamp of the last check UNKNOWN return code.

  string output = 14;                        // Output of the check command.
  string long_output = 15;                   // Long output of the check command.
  string perfdata = 16;                      // Perfdata extracted from the command's output.

  bool flapping = 17;                        // Is this service flapping?
  double percent_state_change = 18;          // Used by flapping and compared with high and low flap thresholds.
  double latency = 19;                       // Delay between scheduled check time and real check time.
  double execution_time = 20;                // Duration of last check.
  int64 last_check = 21;                     // Timestamp of the last check.
  int64 next_check = 22;                     // Next scheduled check timestamp.
  bool should_be_scheduled = 23;             // Is there a next check scheduled?
  int32 check_attempt = 24;                  // Number of failed checks after which service state becomes a hard fail state.

  int32 notification_number = 25;            // Number of notifications sent since the start of the problem.
  bool no_more_notifications = 26;           // No other notification will be sent.
  int64 last_notification = 27;              // Timestamp of the last notification.
  int64 next_notification = 28;              // Next notification timestamp.

  AckType acknowledgement_type = 29;         // AckType value.
  int32 scheduled_downtime_depth = 30;       // Number of active downtimes.

  ServiceType type = 31;                     // What kind of service is it?

  /* In case of metaservice and ba, they also have an internal id. We keep it
   * here. */
  uint64 internal_id = 32;                   // ID of metaservice or ba.
}
```

</TabItem>
</Tabs>

### Instance configuration

Here is a configuration event announcing all the configuration events that are
going to be sent by a poller.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::InstanceConfiguration

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 25      | 65561 |

The content of this message is serialized as follows:

| Property   | Type             | Description                                                              | Version |
| ---------- | ---------------- | ------------------------------------------------------------------------ | ------- |
| loaded     | boolean          | True if the instance loaded successfully.                                |         |
| poller\_id | unsigned integer | ID of the poller which received a configuration update request (reload). |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Responsive instance

This event is emitted by cbd. It tells if a poller is responsive or not.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### NEB::ResponsiveInstance

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 26      | 65562 |

The content of this message is serialized as follows:

| Property   | Type             | Description                                                                  | Version |
| ---------- | ---------------- | ---------------------------------------------------------------------------- | ------- |
| poller\_id | unsigned integer | ID of the poller which received a configuration update request (reload).     |         |
| responsive | boolean          | A boolean telling if the poller with ID **poller\_id** is responsive or not. |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Adaptive service

This event was introduced with BBDO v3. It is emitted when a service has its configuration
updated on the fly (for example with an external command)

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

No **Adaptive service** available in BBDO v2.

</TabItem>

<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbAdaptiveService

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 41      | 65577 |

This event is a Protobuf event so items are not serialized as in BBDO v2
events but using the Protobuf 3 serialization mechanism. When BBDO v3 is
used, no more **NEB::AdaptiveService** events should be sent, instead you
should see **NEB::PbAdaptiveService** events.

The [protobuf message](https://developers.google.com/protocol-buffers/docs/proto3)
is the following:

```cpp
message AdaptiveService {
  uint64 host_id = 1;                         // Host ID.
  uint64 service_id = 2;                      // Service ID.

  optional bool notify = 3;                   // Are notifications enabled on this service?
  optional bool active_checks = 4;            // Are active checks enabled?
  optional bool should_be_scheduled = 5;      // Is there a next check scheduled?
  optional bool passive_checks = 6;           // Are passive checks enabled?
  optional bool event_handler_enabled = 7;    // Event handler enabled?
  optional bool flap_detection_enabled = 8;   // Is flap detection enabled?
  optional bool obsess_over_service = 9;      // True if OCSP command is executed after check or notification command.
  optional string event_handler = 10;         // Command executed when state changes.
  optional string check_command = 11;         // Command executed.
  optional uint32 check_interval = 12;        // Interval in units (usually 60s) between 2 checks.
  optional uint32 retry_interval = 13;        // Interval between two checks when service isn't in ok state and state type is SOFT.
  optional uint32 max_check_attempts  = 14;   // Number of failed checks after which service state becomes a hard fail state.
  optional bool check_freshness = 15;         // Passive freshness check activated?
  optional string check_period = 16;          // Time period when checks are authorized.
  optional string notification_period = 17;   // Time period when notifications are authorized.
}
```

</TabItem>
</Tabs>

### Adaptive host

This event was introduced with BBDO v3. It is emitted when a host has its configuration
updated on the fly (for example with an external command).

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

No **Adaptive host** available in BBDO v2.

</TabItem>

<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbAdaptiveHost

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 31      | 65567 |

This event is a Protobuf event so items are not serialized as in BBDO v2
events but using the Protobuf 3 serialization mechanism. When BBDO v3 is
used, no more **NEB::AdaptiveHost** events should be sent, instead you
should see **NEB::PbAdaptiveHost** events.

The [protobuf message](https://developers.google.com/protocol-buffers/docs/proto3)
is the following:

```cpp
message AdaptiveHost {
  uint64 host_id = 1;                         // Host ID.

  optional bool notify = 2;                   // Are notifications enabled on this service?
  optional bool active_checks = 3;            // Are active checks enabled?
  optional bool should_be_scheduled = 4;      // Is there a next check scheduled?
  optional bool passive_checks = 5;           // Are passive checks enabled?
  optional bool event_handler_enabled = 6;    // Event handler enabled?
  optional bool flap_detection = 7;           // Is flap detection enabled?
  optional bool obsess_over_host = 8;         // True if OCSP command is executed after check or notification command.
  optional string event_handler = 9;          // Command executed when state changes.
  optional string check_command  = 10;        // Command executed.
  optional uint32 check_interval  = 11;       // Interval in units (usually 60s) between 2 checks.
  optional uint32 retry_interval  = 12;       // Interval between two checks when service isn't in ok state and state type is SOFT.
  optional uint32 max_check_attempts  = 13;   // Number of failed checks after which service state becomes a hard fail state.
  optional bool check_freshness = 14;         // Passive freshness check activated?
  optional string check_period  = 15;         // Time period when checks are authorized.
  optional string notification_period  = 16;  // Time period when notifications are authorized.
}
```

</TabItem>
</Tabs>


### Severity

This is a configuration event. It defines a severity. This event was introduced
with BBDO v3.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

No BBDO v2 version of this event exists.

</TabItem>

<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbSeverity

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 33      | 65569 |

This event comes with BBDO 3. It contains the severity of a resource.

Here is the definition of this [protobuf](https://developers.google.com/protocol-buffers/docs/proto3) event:

```text
message Severity {
  uint64 id = 1;
  enum Action {
    ADD = 0;
    DELETE = 1;
    MODIFY = 2;
  }
  Action action = 2;
  uint32 level = 3;
  uint64 icon_id = 4;
  string name = 5;
  enum Type {
    SERVICE = 0;
    HOST = 1;
  }
  Type type = 6;
  uint64 poller_id = 7;
}
```

</TabItem>
</Tabs>

### Tag
This event comes with BBDO 3. It is used to associate a tag to a resource.
There are four types of tag, **SERVICEGROUP**, **HOSTGROUP**, **SERVICECATEGORY**,
**HOSTCATEGORY**. A tag is not associated with a poller, but we must know for
internal handling which poller sent the tag, that is why there is a **poller\_id**
item in the message.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

No BBDO v2 version of this event exists.

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### NEB::PbTag

| Category | element | ID    |
| -------- | ------- | ----- |
| 1        | 33      | 65570 |

The [protobuf message](https://developers.google.com/protocol-buffers/docs/proto3)
is the following:

```text
enum TagType {
  SERVICEGROUP = 0;
  HOSTGROUP = 1;
  SERVICECATEGORY = 2;
  HOSTCATEGORY = 3;
}

message Tag {
  uint64 id = 1;
  enum Action {
    ADD = 0;
    DELETE = 1;
    MODIFY = 2;
  }

  Action action = 2;
  TagType type = 3;
  string name = 4;
  int64 poller_id = 5;
}
```

</TabItem>
</Tabs>

## Storage

### Metric

This event is generated by a Storage endpoint to notify that a RRD metric
graph should be updated.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### Storage::Metric

| Category | element | ID     |
| -------- | ------- | ------ |
| 3        | 1       | 196609 |

The content of this message is serialized as follows:

| Property         | Type             | Description                                                                 | Version |
| ---------------- | ---------------- | --------------------------------------------------------------------------- | ------- |
| ctime            | time             | Time at which the metric value was generated.                               |         |
| interval         | unsigned integer | Normal service check interval in seconds.                                   |         |
| metric\_id       | unsigned integer | Metric ID (from the metrics table).                                         |         |
| name             | string           | Metric name.                                                                |         |
| rrd\_len         | integer          | RRD retention length in seconds.                                            |         |
| value            | real             | Metric value.                                                               |         |
| value\_type      | short integer    | Metric type (1 =3D counter, 2 =3D derive, 3 =3D absolute, other =3D gauge). |         |
| is\_for\_rebuild | boolean          | Set to true when a graph is being rebuild (see the rebuild event).          |         |
| host\_id         | unsigned integer | The id of the host this metric is attached to.                              |         |
| service\_id      | unsigned integer | The id of the service this metric is attached to.                           |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Rebuild

Rebuild events are generated when a Storage endpoint detects that some
graph should be rebuild. It first sends a rebuild start event (end =3D
false), then metric values (metric event with is\_for\_rebuild set to
true) and finally a rebuild end event (end =3D true).

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### Storage::Rebuild

| Category | element | ID     |
| -------- | ------- | ------ |
| 3        | 2       | 196610 |

The content of this message is serialized as follows:

| Property  | Type             | Description                                                                                                   | Version |
| --------- | ---------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| end       | boolean          | End flag. Set to true if rebuild is starting, false if it is ending.                                          |         |
| id        | unsigned integer | ID of metric to rebuild if is\_index is false, or ID of index to rebuild (status graph) if is\_index is true. |         |
| is\_index | boolean          | Index flag. Rebuild index (status) if true, rebuild metric if false.                                          |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Remove graph

A Storage endpoint generates a remove graph event when some graph
must be deleted.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### Storage::RemoveGraph

| Category | element | ID     |
| -------- | ------- | ------ |
| 3        | 3       | 196611 |

The content of this message is serialized as follows:

| Property  | Type             | Description                                                                                            | Version |
| --------- | ---------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| id        | unsigned integer | Index ID (is\_index =3D true) or metric ID (is\_index =3D false) to remove.                            |         |
| is\_index | boolean          | Index flag. If true, a index (status) graph will be deleted. If false, a metric graph will be deleted. |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Status

This event is emitted by cbd when a **Service Status** or a **Host Status** event is received.
It essentially contains a resource with its status.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### Storage::Status

| Category | element | ID     |
| -------- | ------- | ------ |
| 3        | 4       | 196612 |

The content of this message is serialized as follows:

| Property         | Type             | Description                                                        | Version |
| ---------------- | ---------------- | ------------------------------------------------------------------ | ------- |
| ctime            | time             | Time at which the status was generated.                            |         |
| index\_id        | unsigned integer | Index ID.                                                          |         |
| interval         | unsigned integer | Normal service check interval in seconds.                          |         |
| rrd\_len         | time             | RRD retention in seconds.                                          |         |
| state            | short integer    | Service state.                                                     |         |
| is\_for\_rebuild | boolean          | Set to true when a graph is being rebuild (see the rebuild event). |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Metric mapping

This event is emitted by Centreon Broker when a new service configuration is
received. It associates an index ID (the one created for a service - see
[Index mapping](#indexmapping)) to a metric ID.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### Storage::MetricMapping

| Category | element | ID     |
| -------- | ------- | ------ |
| 3        | 6       | 196614 |

The content of this message is serialized as follows:

| Property  | Type             | Description | Version |
| --------- | ---------------- | ----------- | ------- |
| index\_id | unsigned integer | Index ID.   |         |
| metric\_d | unsigned integer | Index ID.   |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Index mapping

This event is emitted by Centreon Broker when a new service configuration is
received. It associates an ID to the pair **(host ID/service ID)**. This new
ID is useful for the service metrics declaration.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### Storage::IndexMapping

| Category | element | ID     |
| -------- | ------- | ------ |
| 3        | 5       | 196613 |

The content of this message is serialized as follows:

| Property    | Type             | Description | Version |
| ----------- | ---------------- | ----------- | ------- |
| index\_id   | unsigned integer | Index ID.   |         |
| host\_id    | unsigned integer | Index ID.   |         |
| service\_id | unsigned integer | Index ID.   |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Rebuild Message

This event comes with BBDO 3, when some graphs have to be rebuilt. Messages
handling these rebuilds are of that type. They replace the old BBDO v2 rebuild
message.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

Not available with BBDO v2.

See [Storage::Rebuild](#storagerebuild)

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### Storage::PbRebuildMessage

| Category | element | ID     |
| -------- | ------- | ------ |
| 3        | 7       | 196615 |

There are three states for this message:

* START: here is the first state, this message initializes which metrics have
to be rebuilt.
* DATA: once the START state has been sent, one or more messages with DATA state
may be sent to the RRD broker.
* END: When all the rebuild events have been sent, this one is sent to close the
rebuilds. And the RRD broker falls back into a nominal state.

The [protobuf message](https://developers.google.com/protocol-buffers/docs/proto3)
is the following:

```text
message Point {
  int64 ctime = 1;
  double value = 2;
}

message Timeserie {
  repeated Point pts = 1;
  int32 data_source_type = 2;
  uint32 check_interval = 3;
  uint32 rrd_retention = 4;
}

message RebuildMessage {
  enum State {
    START = 0;
    DATA = 1;
    END = 2;
  }
  State state = 1;
  /* Only used on DATA state */
  map<uint64, Timeserie> timeserie = 2;

  /* Only used on START/END state */
  repeated uint64 metric_id = 3;
}
```

</TabItem>
</Tabs>

### Remove Graph Message

This event comes with BBDO 3. When we want to remove graph files, we can use
the centengine gRPC API and this call makes cbd generate a **Storage::PbRemoveGraphMessage** event.
There are two possibilities concerning this event. We can remove graphs
matching some index data or graphs matching some metric data. It is also
possible to mix the two kinds.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

Not available with BBDO v2.

See [Storage::RemoveGraph](#storageremovegraph)

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

#### Storage::PbRemoveGraphMessage

| Category | element | ID     |
| -------- | ------- | ------ |
| 3        | 8       | 196616 |

Here is the definition of this [protobuf](https://developers.google.com/protocol-buffers/docs/proto3) event:

```text
message RemoveGraphMessage {
  repeated uint64 index_ids = 1;
  repeated uint64 metric_ids = 2;
}
```

</TabItem>
</Tabs>

## BBDO

### Version response

This is the negociation message. Each time a BBDO
connection is established, this message is sent by the connector and by the
acceptor to negociate options.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BBDO::VersionResponse

| Category | element | ID     |
| -------- | ------- | ------ |
| 2        | 1       | 131073 |

The content of this message is serialized as follows:

| Property    | Type          | Description                                                                                                                 | Version |
| ----------- | ------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| bbdo\_major | short integer | BBDO protocol major used by the peer sending this **version\_response** packet. The sole current protocol version is 1.0.0. |         |
| bbdo\_minor | short integer | BBDO protocol minor used by the peer sending this **version\_response** packet.                                             |         |
| bbdo\_patch | short integer | BBDO protocol patch used by the peer sending this **version\_response** packet.                                             |         |
| extensions  | string        | Space-separated string of extensions supported by the peer sending this **version\_response** packet.                       |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Ack

Usually, a **BBDO sender** sends events and a **BBDO receiver** consumes events.
But the sender keeps events until the receiver tells it they have been handled.
To do that, the receiver emits an **Ack** message with the number of events
already handled.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BBDO::Ack

| Category | element | ID     |
| -------- | ------- | ------ |
| 2        | 2       | 131074 |

The content of this message is serialized as follows:

| Property            | Type             | Description                                                                                                                   | Version |
| ------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------- |
| acknowledged events | unsigned integer | Number of acknowledged events. Only used by "smart" clients (i.e able to acknowledge events). Not to be used by dumb clients. |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Stop

When one side of a BBDO connection is going to exit, it emits a **Stop** event
so that if the other side has events already handled it can send an **Ack**
event.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BBDO::Stop

| Category | element | ID     |
| -------- | ------- | ------ |
| 2        | 3       | 131075 |

The content of this message is empty.

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>


## BAM

### BA status event

This event is sent when a BA's status changed.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::BaStatus

| Category | element | ID     |
| -------- | ------- | ------ |
| 6        | 1       | 393217 |

The content of this message is serialized as follows:

| Property               | Type             | Description                                  | Version                   |
| ---------------------- | ---------------- | -------------------------------------------- | ------------------------- |
| ba\_id                 | unsigned integer | The id of the BA.                            | Since 2.8.0 (BBDO 1.2.0). |
| in\_downtime           | boolean          | True of the BA is in downtime.               | Since 2.8.0 (BBDO 1.2.0). |
| last\_state\_change    | time             | The time of the last state change of the BA. | Since 2.8.0 (BBDO 1.2.0). |
| level\_acknowledgement | real             | The acknowledgment level of the BA.          | Since 2.8.0 (BBDO 1.2.0). |
| level\_downtime        | real             | The downtime level of the BA.                | Since 2.8.0 (BBDO 1.2.0). |
| level\_nominal         | real             | The nominal level of the BA.                 | Since 2.8.0 (BBDO 1.2.0). |
| state                  | short integer    | The state of the BA.                         | Since 2.8.0 (BBDO 1.2.0). |
| state\_changed         | boolean          | True if the state of the BA just changed.    | Since 2.8.0 (BBDO 1.2.0). |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### KPI status event

This event is sent when a KPI's status changed.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

| Category | element | ID     |
| -------- | ------- | ------ |
| 6        | 2       | 393218 |

The content of this message is serialized as follows:

| Property                     | Type             | Description                                   | Version                   |
| ---------------------------- | ---------------- | --------------------------------------------- | ------------------------- |
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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Meta service status event

This event is sent when a meta service's status changed.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::MetaServiceStatus

| Category | element | ID     |
| -------- | ------- | ------ |
| 6        | 3       | 393219 |

The content of this message is serialized as follows:

| Property          | Type             | Description                     | Version                   |
| ----------------- | ---------------- | ------------------------------- | ------------------------- |
| meta\_service\_id | unsigned integer | The id of the meta service.     | Since 2.8.0 (BBDO 1.2.0). |
| value             | real             | The value of the meta service.  | Since 2.8.0 (BBDO 1.2.0). |
| state\_changed    | boolean          | True if the state just changed. | Since 2.8.0 (BBDO 1.2.0). |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### BA-event event

This event is sent when a new BA event is opened, or an old one is closed.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::BaEvent

| Category | element | ID     |
| -------- | ------- | ------ |
| 6        | 4       | 393220 |

The content of this message is serialized as follows:

| Property     | Type             | Description                                                    | Version                   |
| ------------ | ---------------- | -------------------------------------------------------------- | ------------------------- |
| ba\_id       | unsigned integer | The id of the BA.                                              | Since 2.8.0 (BBDO 1.2.0). |
| first\_level | real             | The first level of the BA event.                               | Since 2.8.0 (BBDO 1.2.0). |
| end\_time    | time             | The end\_time of the event. 0 or (time)-1 for an opened event. | Since 2.8.0 (BBDO 1.2.0). |
| in\_downtime | boolean          | True if BA was in downtime during the BA event.                | Since 2.8.0 (BBDO 1.2.0). |
| start\_time  | time             | The start\_time of the event.                                  | Since 2.8.0 (BBDO 1.2.0). |
| status       | short integer    | The status of the BA during the event.                         | Since 2.8.0 (BBDO 1.2.0). |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### KPI-event event

This event is sent when a new KPI event is opened, or an old one is closed.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::KpiEvent

| Category | element | ID     |
| -------- | ------- | ------ |
| 6        | 5       | 393221 |

The content of this message is serialized as follows:

| Property      | Type             | Description                                                    | Version                   |
| ------------- | ---------------- | -------------------------------------------------------------- | ------------------------- |
| kpi\_id       | unsigned integer | The id of the KPI.                                             | Since 2.8.0 (BBDO 1.2.0). |
| end\_time     | time             | The end\_time of the event. 0 or (time)-1 for an opened event. | Since 2.8.0 (BBDO 1.2.0). |
| impact\_level | integer          | The level of the impact.                                       | Since 2.8.0 (BBDO 1.2.0). |
| in\_downtime  | boolean          | True if BA was in downtime during the BA event.                | Since 2.8.0 (BBDO 1.2.0). |
| first\_output | string           | The first output of the KPI during the event.                  | Since 2.8.0 (BBDO 1.2.0). |
| perfdata      | string           | The first perfdata of the KPI during the event.                | Since 2.8.0 (BBDO 1.2.0). |
| start\_time   | time             | The start\_time of the event.                                  | Since 2.8.0 (BBDO 1.2.0). |
| status        | short integer    | The status of the BA during the event.                         | Since 2.8.0 (BBDO 1.2.0). |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### BA duration event event

This event is sent when a new BA duration event is computed by BAM broker.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::BaDurationEvent

| Category | element | ID     |
| -------- | ------- | ------ |
| 6        | 6       | 393222 |

The content of this message is serialized as follows:

| Property                | Type             | Description                                            | Version                   |
| ----------------------- | ---------------- | ------------------------------------------------------ | ------------------------- |
| ba\_id                  | unsigned integer | The id of the BA.                                      | Since 2.8.0 (BBDO 1.2.0). |
| real\_start\_time       | time             | The first level of the BA event.                       | Since 2.8.0 (BBDO 1.2.0). |
| end\_time               | time             | The end\_time of the event, in the given timeperiod.   | Since 2.8.0 (BBDO 1.2.0). |
| start\_time             | time             | The start\_time of the event, in the given timeperiod. | Since 2.8.0 (BBDO 1.2.0). |
| duration                | unsigned integer | end\_time - start\_time.                               | Since 2.8.0 (BBDO 1.2.0). |
| sla\_duration           | unsigned integer | The duration of the event in the given timperiod.      | Since 2.8.0 (BBDO 1.2.0). |
| timeperiod\_is\_default | boolean          | True if the timeperiod if the default for this BA.     | Since 2.8.0 (BBDO 1.2.0). |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Dimension BA

This event is part of the dimension (i.e configuration) dump occuring at
startup and after each BAM configuration reload.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::DimensionBaEvent

| Category | element | ID     |
| -------- | ------- | ------ |
| 6        | 7       | 393223 |

The content of this message is serialized as follows:

| Property                   | Type             | Description                | Version                   |
| -------------------------- | ---------------- | -------------------------- | ------------------------- |
| ba\_id                     | unsigned integer | The id of the BA.          | Since 2.8.0 (BBDO 1.2.0). |
| ba\_name                   | string           | The name of the BA.        | Since 2.8.0 (BBDO 1.2.0). |
| ba\_description            | string           | The description of the BA. | Since 2.8.0 (BBDO 1.2.0). |
| sla\_month\_percent\_crit  | real             |                            | Since 2.8.0 (BBDO 1.2.0). |
| sla\_month\_percent\_warn  | real             |                            | Since 2.8.0 (BBDO 1.2.0). |
| sla\_month\_duration\_crit | unsigned integer |                            | Since 2.8.0 (BBDO 1.2.0). |
| sla\_month\_duration\_warn | unsigned integer |                            | Since 2.8.0 (BBDO 1.2.0). |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Dimension KPI

This event is part of the dimension (i.e configuration) dump occuring at
startup and after each BAM configuration reload.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::DimensionKpiEvent

| Category | element | ID     |
| -------- | ------- | ------ |
| 6        | 8       | 393224 |

The content of this message is serialized as follows:

| Property             | Type             | Description                                                                  | Version                   |
| -------------------- | ---------------- | ---------------------------------------------------------------------------- | ------------------------- |
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

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Dimension BA BV relation

This event is part of the dimension (i.e configuration) dump occuring at
startup and after each BAM configuration reload.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::DimensionBaBvRelationEvent

| Category | element | ID     |
| -------- | ------- | ------ |
| 6        | 9       | 393225 |

The content of this message is serialized as follows:

| Property | Type             | Description       | Version                   |
| -------- | ---------------- | ----------------- | ------------------------- |
| ba\_id   | unsigned integer | The id of the BA. | Since 2.8.0 (BBDO 1.2.0). |
| bv\_id   | unsigned integer | The id of the BV. | Since 2.8.0 (BBDO 1.2.0). |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Dimension BV

This event is part of the dimension (i.e configuration) dump occuring at
startup and after each BAM configuration reload.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::DimensionBvEvent

| Category | element | ID     |
| -------- | ------- | ------ |
| 6        | 10      | 393226 |

The content of this message is serialized as follows:

| Property        | Type             | Description                | Version                   |
| --------------- | ---------------- | -------------------------- | ------------------------- |
| bv\_id          | unsigned integer | The id of the BV.          | Since 2.8.0 (BBDO 1.2.0). |
| bv\_name        | string           | The name of the BV.        | Since 2.8.0 (BBDO 1.2.0). |
| bv\_description | string           | The description of the BV. | Since 2.8.0 (BBDO 1.2.0). |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Dimension Truncate Table Signal

This event is part of the dimension (i.e configuration) dump occuring at
startup and after each BAM configuration reload.

This signal is sent before the dump of all the dimensions, and again at
the end of the dump.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::DimensionTruncateTableSignal

| Category | element | ID     |
| -------- | ------- | ------ |
| 6        | 11      | 393228 |

The content of this message is serialized as follows:

| Property        | Type    | Description                                                   |
| --------------- | ------- | ------------------------------------------------------------- |
| update\_started | boolean | True if this is the start of the dump, false if it's the end. |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Rebuild signal

This event is sent when a rebuild of the event durations and availabilities
is asked to the BAM broker endpoint.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::Rebuild

| Category | element | ID     |
| -------- | ------- | ------ |
| 6        | 12      | 393228 |

The content of this message is serialized as follows:

| Property         | Type   | Description                                                                                                 | Version                   |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------------- | ------------------------- |
| bas\_to\_rebuild | string | A string containing the id of all the BAs to rebuild, separated by a comma and a space (i.e "1, 5, 8, 12"). | Since 2.8.0 (BBDO 1.2.0). |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Dimension timeperiod

This event is part of the dimension (i.e configuration) dump occuring at
startup and after each BAM configuration reload.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::DimensionTimeperiod

| Category | element | ID     |
| -------- | ------- | ------ |
| 6        | 13      | 393230 |

The content of this message is serialized as follows:

| Property  | Type             | Description                       | Version                   |
| --------- | ---------------- | --------------------------------- | ------------------------- |
| tp\_id    | unsigned integer | The id of the timeperiod.         | Since 2.8.0 (BBDO 1.2.0). |
| name      | string           | The name of the timeperiod.       | Since 2.8.0 (BBDO 1.2.0). |
| monday    | string           | The timeperiod rule for this day. | Since 2.8.0 (BBDO 1.2.0). |
| tuesday   | string           | The timeperiod rule for this day. | Since 2.8.0 (BBDO 1.2.0). |
| wednesday | string           | The timeperiod rule for this day. | Since 2.8.0 (BBDO 1.2.0). |
| thursday  | string           | The timeperiod rule for this day. | Since 2.8.0 (BBDO 1.2.0). |
| friday    | string           | The timeperiod rule for this day. | Since 2.8.0 (BBDO 1.2.0). |
| saturday  | string           | The timeperiod rule for this day. | Since 2.8.0 (BBDO 1.2.0). |
| sunday    | string           | The timeperiod rule for this day. | Since 2.8.0 (BBDO 1.2.0). |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

### Dimension BA timeperiod relation

This event is part of the dimension (i.e configuration) dump occuring at
startup and after each BAM configuration reload.

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::DimensionBaTimeperiodRelation

| Category | element | ID     |
| -------- | ------- | ------ |
| 6        | 14      | 393231 |

The content of this message is serialized as follows:

| Property       | Type             | Description                                            | Version                   |
| -------------- | ---------------- | ------------------------------------------------------ | ------------------------- |
| ba\_id         | unsigned integer | The id of the BA.                                      | Since 2.8.0 (BBDO 1.2.0). |
| timeperiod\_id | unsigned integer | The id of the timeperiod.                              | Since 2.8.0 (BBDO 1.2.0). |
| is\_default    | boolean          | True if the timeperiod is the default one for this BA. | Since 2.8.0 (BBDO 1.2.0). |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>


### Inherited downtime

<Tabs groupId="sync">
<TabItem value="BBDO v2" label="BBDO v2">

#### BAM::InheritedDowntime

| Category | element | ID     |
| -------- | ------- | ------ |
| 6        | 17      | 393233 |

The content of this message is serialized as follows:

| Property     | Type             | Description                    | Version |
| ------------ | ---------------- | ------------------------------ | ------- |
| bad\_id      | unsigned integer | The id of the BA in downtime.  |         |
| in\_downtime | boolean          | True if the BA is in downtime. |         |

</TabItem>
<TabItem value="BBDO v3" label="BBDO v3">

The event is the same as in BBDO v2. There is no Protobuf event.

</TabItem>
</Tabs>

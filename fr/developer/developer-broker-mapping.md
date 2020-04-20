---
id: developer-broker-mapping
title: Centreon Broker Event Mapping
---

Centreon Broker uses global mapping tables for events that can be
exchanged. How exactly these mapping tables work is left to discover to
the reader. This page list properties available for each event type.

## NEB

### Acknowledgement

| Property                                | Type             | Description
|-----------------------------------------|------------------|--------------------------------------------------------------------------
| acknowledgement_type                    | short integer    | Host acknowledgement when 0, service acknowledgement when 1.
| author                                  | string           | Acknowledgement author.
| comment                                 | string           | Comment associated to the acknowledgement.
| deletion_time                           | time             | Time at which the acknowledgement was deleted. If 0, it was not deleted.
| entry_time                              | time             | Time at which the acknowledgement was created.
| host_id                                 | unsigned integer | Host ID.
| instance_id                             | unsigned integer | Instance ID.
| is_sticky                               | boolean          | Sticky flag.
| notify_contacts                         | boolean          | Notification flag.
| persistent_comment                      | boolean          | True if the comment is persistent.
| service_id                              | unsigned integer | Service ID. 0 for a host acknowledgement.
| state                                   | short integer    | Host / service state.
| notify_only_if_not_already_acknowledged | boolean          | A notification should be sent only if not already ack.

### Comment

| Property       | Type             | Description
|----------------|------------------|----------------------------------------
| author         | string           | Comment author.
| comment_type   | short integer    | 1 for a host comment, 2 for a service comment.
| data           | string           | Comment data (text).
| deletion_time  | time             | Time at which the comment was deleted. 0 if the comment was not deleted (yet).
| entry_time     | time             | Time at which the comment was created.
| entry_type     | short integer    | 1 for a user comment (through external command), 2 for a downtime comment, 3 for a flapping comment and 4 for an acknowledgement comment.
| expire_time    | time             | Comment expiration time. 0 if no expiration time.
| expires        | bool             | True if the comment expires.
| host_id        | unsigned integer | Host ID.
| internal_id    | unsigned integer | Internal monitoring engine ID of the comment.
| persistent     | boolean          | True if the comment is persistent.
| instance_id    | unsigned integer | Instance ID.
| service_id     | unsigned integer | Service ID. 0 if this is a host comment.
| source         | short integer    | 0 when the comment originates from the monitoring engine (internal) or 1 when the comment comes from another source (external).

### Custom variable

| Property       | Type             | Description
|----------------|------------------|----------------------------------------
| enabled        | boolean          | True if the custom variable is enabled.
| host_id        | unsigned integer | Host ID.
| modified       | boolean          | True if the variable was modified.
| name           | string           | Variable name.
| service_id     | unsigned integer | Service ID. 0 if this is a host custom variable.
| update_time    | time             | Last time at which the variable was updated.
| var_type       | short integer    | 0 for a host custom variable, 1 for a service custom variable.
| value          | string           | Variable value.
| default_value  | string           | The default value of the custom var.

### Custom variable status

Custom variable status events are generated when a custom variable needs
to be updated.

| Property       | Type             | Description
|----------------|------------------|----------------------------------------
| host_id        | unsigned integer | Host ID.
| modified       | boolean          | True if the variable was modified.
| name           | string           | Variable name.
| service_id     | unsigned integer | Service ID. 0 if this is a host custom variable.
| update_time    | time             | Last time at which the variable was updated.
| value          | string           | Variable value.

### Downtime

| Property          |  Type            | Description
|-------------------|------------------|----------------------------------------
| actual_end_time   | time             | Actual time at which the downtime ended.
| actual_start_time | time             | Actual time at which the downtime started.
| author            | string           | Downtime creator.
| downtime_type     | short integer    | 1 for a service downtime, 2 for a host downtime.
| deletion_time     | time             | Time at which the downtime was deleted.
| duration          | time             | Downtime duration.
| end_time          | time             | Scheduled downtime end time.
| entry_time        | time             | Time at which the downtime was created.
| fixed             | boolean          | True if the downtime is fixed, false if it is flexible.
| host_id           | unsigned integer | Host ID.
| instance_id       | unsigned integer | Instance ID.
| internal_id       | unsigned integer | Internal monitoring engine ID.
| service_id        | unsigned integer | Service ID. 0 if this is a host downtime.
| start_time        | time             | Scheduled downtime start time.
| triggered_by      | unsigned integer | Internal ID of the downtime that triggered this downtime.
| was_cancelled     | boolean          | True if the downtime was cancelled.
| was_started       | boolean          | True if the downtime has been started.
| comment           | string           | Downtime comment.
| is_recurring      | boolean          | True if this downtime is recurring.
| recurring_tp      | string           | The recurring timepriod of the recurring downtime.
| come_from         | short            | Id of the parent recurring downtime for spawned downtimes.

### Event handler

| Property       | Type             | Description
|----------------|------------------|----------------------------------------
| early_timeout  | boolean          | True if the event handler timed out.
| end_time       | time             | Time at which the event handler execution ended.
| execution_time | real             | Execution time in seconds.
| handler_type   | short integer    | 0 for host-specific event handler, 1 for service-specific event handler, 2 for global host event handler and 3 for global service event handler.
| host_id        | unsigned integer | Host ID.
| return_code    | short integer    | Value returned by the event handler.
| service_id     | unsigned integer | Service ID. 0 if this is a host event handler.
| start_time     | time             | Time at which the event handler started.
| state          | short integer    | Host / service state.
| state_type     | short integer    | 0 for SOFT, 1 for HARD.
| timeout        | short integer    | Event handler timeout in seconds.
| command_args   | string           | Event handler arguments.
| command_line   | string           | Event handler command line.
| output         | string           | Output returned by the event handler.
| source_id      | unsigned integer | The id of the source instance of this event.
| destination_id | unsigned integer | The id of the destination instance of this event.

### Flapping status

| Property             | Type             | Description
|----------------------|------------------|----------------------------------------
| event_time           | time             | 
| event_type           | integer          | 
| flapping_type        | short integer    | 
| high_threshold       | real             | High flapping threshold.
| host_id              | unsigned integer | Host ID.
| low_threshold        | real             | Low flapping threshold.
| percent_state_change | real             |
| reason_type          | short integer    |
| service_id           | unsigned integer | Service ID. 0 if this is a host flapping entry.

### Host

<table>
<thead valign="bottom">
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tbody valign="top">
<tr><td>acknowledged</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>acknowledgement_type</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>action_url</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>active_checks_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>address</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>alias</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_freshness</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_interval</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_period</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_type</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>current_check_attempt</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>current_state</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>default_active_checks_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>default_event_handler_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>default_flap_detection_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>default_notifications_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>default_passive_checks_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>downtime_depth</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>display_name</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>event_handler</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>event_handler_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>execution_time</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>first_notification_delay</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>flap_detection_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>flap_detection_on_down</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>flap_detection_on_unreachable</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>flap_detection_on_up</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>freshness_threshold</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>has_been_checked</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>high_flap_threshold</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_name</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>icon_image</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>icon_image_alt</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>instance_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>is_flapping</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_check</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_hard_state</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_hard_state_change</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_notification</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_state_change</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_time_down</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_time_unreachable</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_time_up</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_update</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>latency</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>low_flap_threshold</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>max_check_attempts</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>next_check</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>next_notification</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>no_more_notifications</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notes</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notes_url</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notification_interval</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notification_number</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notification_period</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notifications_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notify_on_down</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notify_on_downtime</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notify_on_flapping</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notify_on_recovery</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notify_on_unreachable</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>obsess_over</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>passive_checks_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>percent_state_change</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>retry_interval</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>should_be_scheduled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>stalk_on_down</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>stalk_on_unreachable</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>stalk_on_up</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>statusmap_image</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>state_type</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_command</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>output</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>perf_data</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>retain_nonstatus_information</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>retain_status_information</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>timezone</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Host check

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>active_checks_enabled</td>
<td>boolean</td>
<td>True if active checks are enabled
on the host.</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_type</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_id</td>
<td>unsigned integer</td>
<td>Host ID.</td>
<td>&nbsp;</td>
</tr>
<tr><td>next_check</td>
<td>time</td>
<td>Time at which the next check is
scheduled.</td>
<td>&nbsp;</td>
</tr>
<tr><td>command_line</td>
<td>string</td>
<td>Check command line.</td>
<td>&nbsp;</td>
</tr>
<tr><td>source_id</td>
<td>unsigned integer</td>
<td>The id of the source
instance this event.</td>
<td>&nbsp;</td>
</tr>
<tr><td>destination_id</td>
<td>unsigned integer</td>
<td>The id of the destination
instance of this event.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Host dependency

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>dependency_period</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>dependent_host_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>execution_failure_options</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>inherits_parent</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notification_failure_options</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Host group

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>host_group_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>name</td>
<td>string</td>
<td>Group name.</td>
<td>&nbsp;</td>
</tr>
<tr><td>enabled</td>
<td>boolean</td>
<td>True if the group is enabled, false if it
is not (deletion).</td>
<td>&nbsp;</td>
</tr>
<tr><td>poller_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Host group member

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>enabled</td>
<td>boolean</td>
<td>True if the membership is enabled, false if
it is not (deletion).</td>
<td>&nbsp;</td>
</tr>
<tr><td>group</td>
<td>string</td>
<td>Group name.</td>
<td>&nbsp;</td>
</tr>
<tr><td>instance_id</td>
<td>unsigned integer</td>
<td>Instance ID.</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_id</td>
<td>unsigned integer</td>
<td>Host ID.</td>
<td>&nbsp;</td>
</tr>
<tr><td>source_id</td>
<td>unsigned integer</td>
<td>The id of the source instance this event.</td>
<td>&nbsp;</td>
</tr>
<tr><td>destination_id</td>
<td>unsigned integer</td>
<td>The id of the destination instance of this
event.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Host parent

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>enabled</td>
<td>boolean</td>
<td>True if parenting is enabled, false if it is
not (deletion).</td>
<td>&nbsp;</td>
</tr>
<tr><td>child_id</td>
<td>unsigned integer</td>
<td>Child host ID.</td>
<td>&nbsp;</td>
</tr>
<tr><td>parent_id</td>
<td>unsigned integer</td>
<td>Parent host ID.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Host status

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>acknowledged</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>acknowledgement_type</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>active_checks_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_interval</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_period</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_type</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>current_check_attempt</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>current_state</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>downtime_depth</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>event_handler</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>event_handler_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>execution_time</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>flap_detection_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>has_been_checked</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>is_flapping</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_check</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_hard_state</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_hard_state_change</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_notification</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_state_change</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_time_down</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_time_unreachable</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_time_up</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_update</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>latency</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>max_check_attempts</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>next_check</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>next_host_notification</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>no_more_notifications</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notification_number</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notifications_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>obsess_over</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>passive_checks_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>percent_state_change</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>retry_interval</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>should_be_scheduled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>state_type</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_command</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>output</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>perf_data</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Instance

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>engine</td>
<td>string</td>
<td>Name of the monitoring engine used on
this instance.</td>
<td>&nbsp;</td>
</tr>
<tr><td>id</td>
<td>unsigned integer</td>
<td>Instance ID.</td>
<td>&nbsp;</td>
</tr>
<tr><td>name</td>
<td>string</td>
<td>Instance name.</td>
<td>&nbsp;</td>
</tr>
<tr><td>is_running</td>
<td>boolean</td>
<td>Whether or not this instance is running.</td>
<td>&nbsp;</td>
</tr>
<tr><td>pid</td>
<td>unsigned integer</td>
<td>Monitoring engine PID.</td>
<td>&nbsp;</td>
</tr>
<tr><td>program_end</td>
<td>time</td>
<td>Time at which the instance shut down.</td>
<td>&nbsp;</td>
</tr>
<tr><td>program_start</td>
<td>time</td>
<td>Time at which the instance started.</td>
<td>&nbsp;</td>
</tr>
<tr><td>version</td>
<td>string</td>
<td>Version of the monitoring engine used on
this instance.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Instance status

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>active_host_checks_enabled</td>
<td>boolean</td>
<td>Whether or not active
host checks are globally
enabled.</td>
<td>&nbsp;</td>
</tr>
<tr><td>active_service_checks_enabled</td>
<td>boolean</td>
<td>Whether or not active
service checks are
globally enabled.</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_hosts_freshness</td>
<td>boolean</td>
<td>Whether or not hosts
freshness checking is
globally enabled.</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_services_freshness</td>
<td>boolean</td>
<td>Whether or not services
freshness checking is
globally enabled.</td>
<td>&nbsp;</td>
</tr>
<tr><td>event_handler_enabled</td>
<td>boolean</td>
<td>Whether or not event
handlers are globally
enabled.</td>
<td>&nbsp;</td>
</tr>
<tr><td>flap_detection_enabled</td>
<td>boolean</td>
<td>Whether or not flap
detection is globally
enabled.</td>
<td>&nbsp;</td>
</tr>
<tr><td>id</td>
<td>unsigned integer</td>
<td>Instance ID.</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_alive</td>
<td>time</td>
<td>Last time the instance
was known alive.</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_command_check</td>
<td>time</td>
<td>Last time a check
command was executed.</td>
<td>&nbsp;</td>
</tr>
<tr><td>notifications_enabled</td>
<td>boolean</td>
<td>Whether or not
notifications are
globally enabled.</td>
<td>&nbsp;</td>
</tr>
<tr><td>obsess_over_hosts</td>
<td>boolean</td>
<td>Whether or not the
monitoring engine should
obsess over hosts.</td>
<td>&nbsp;</td>
</tr>
<tr><td>obsess_over_services</td>
<td>boolean</td>
<td>Whether or not the
monitoring engine should
obsess over services.</td>
<td>&nbsp;</td>
</tr>
<tr><td>passive_host_checks_enabled</td>
<td>boolean</td>
<td>Whether or not passive
host checks are globally
enabled.</td>
<td>&nbsp;</td>
</tr>
<tr><td>passive_service_checks_enabled</td>
<td>boolean</td>
<td>Whether or not passive
service checks are
globally enabled.</td>
<td>&nbsp;</td>
</tr>
<tr><td>global_host_event_handler</td>
<td>string</td>
<td>Global host event
handler.</td>
<td>&nbsp;</td>
</tr>
<tr><td>global_service_event_handler</td>
<td>string</td>
<td>Global service event
handler.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Log entry
<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>c_time</td>
<td>time</td>
<td>Log time.</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_id</td>
<td>unsigned integer</td>
<td>Host ID. 0 if log entry does not
refer to a specific host or
service.</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_name</td>
<td>string</td>
<td>Host name. Can be empty if log
entry does not refer to a specific
host or service.</td>
<td>&nbsp;</td>
</tr>
<tr><td>instance_name</td>
<td>string</td>
<td>Instance name.</td>
<td>&nbsp;</td>
</tr>
<tr><td>issue_start_time</td>
<td>time</td>
<td>Issue start time if correlation is
enabled and log entry refers to an
issue.</td>
<td>&nbsp;</td>
</tr>
<tr><td>log_type</td>
<td>short integer</td>
<td>0 for SOFT, 1 for HARD.</td>
<td>&nbsp;</td>
</tr>
<tr><td>msg_type</td>
<td>short integer</td>
<td>0 for SERVICE ALERT (sent on
service state change), 1 for HOST
ALERT (sent on host state change(,
2 for SERVICE NOTIFICATION
(notification sent out for a
service), 3 for HOST NOTIFICATION
(notification sent out for a host),
4 for Warning (Centreon Engine
warning), 5 for EXTERNAL COMMAND
(external command received), 6 for
CURRENT SERVICE STATE (current
state of monitored service, usually
sent at configuration reload), 7
for CURRENT HOST STATE (current
state of monitored host, usually
sent at configuration reload), 8
for INITIAL SERVICE STATE (initial
state of service, after retention
processing, sent at process start),
9 for INITIAL HOST STATE (initial
state of monitored host, after
retention processing, sent at
process start), 10 for
ACKNOWLEDGE_SVC_PROBLEM external
command (special case of EXTERNAL
COMMAND for service
acknowledgement), 11 for
ACKNOWLEDGE_HOST_PROBLEM external
command (special case of EXTERNAL
COMMAND for host acknowledgement).</td>
<td>&nbsp;</td>
</tr>
<tr><td>notification_cmd</td>
<td>string</td>
<td>Notification command.</td>
<td>&nbsp;</td>
</tr>
<tr><td>notification_contact</td>
<td>string</td>
<td>Notification contact.</td>
<td>&nbsp;</td>
</tr>
<tr><td>retry</td>
<td>integer</td>
<td>Current check attempt.</td>
<td>&nbsp;</td>
</tr>
<tr><td>service_description</td>
<td>string</td>
<td>Service description. Empty if log
entry does not refer to a specific
service.</td>
<td>&nbsp;</td>
</tr>
<tr><td>service_id</td>
<td>unsigned integer</td>
<td>Service ID. 0 if log entry does
not refer to a specific service.</td>
<td>&nbsp;</td>
</tr>
<tr><td>status</td>
<td>short integer</td>
<td>Host / service status.</td>
<td>&nbsp;</td>
</tr>
<tr><td>output</td>
<td>string</td>
<td>Output.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Module

Module events are generated when Centreon Broker modules get loaded or unloaded

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>args</td>
<td>string</td>
<td>Module arguments.</td>
<td>&nbsp;</td>
</tr>
<tr><td>enabled</td>
<td>boolean</td>
<td>Whether or not this module is enabled.</td>
<td>&nbsp;</td>
</tr>
<tr><td>filename</td>
<td>string</td>
<td>Path to the module file.</td>
<td>&nbsp;</td>
</tr>
<tr><td>instance_id</td>
<td>unsigned integer</td>
<td>Instance ID.</td>
<td>&nbsp;</td>
</tr>
<tr><td>loaded</td>
<td>boolean</td>
<td>Whether or not this module is loaded.</td>
<td>&nbsp;</td>
</tr>
<tr><td>should_be_loaded</td>
<td>boolean</td>
<td>Whether or not this module should be
(should have been) loaded.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Service

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>acknowledged</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>acknowledgement_type</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>action_url</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>active_checks_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_freshness</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_interval</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_period</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_type</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>current_check_attempt</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>current_state</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>default_active_checks_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>default_event_handler_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>default_flap_detection_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>default_notifications_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>default_passive_checks_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>dowtine_depth</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>display_name</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>event_handler</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>event_handler_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>execution_time</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>first_notification_delay</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>flap_detection_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>flap_detection_on_critical</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>flap_detection_on_ok</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>flap_detection_on_unknown</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>flap_detection_on_warning</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>freshness_threshold</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>has_been_checked</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>high_flap_threshold</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_name</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>icon_image</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>icon_image_alt</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>service_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>is_flapping</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>is_volatile</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_check</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_hard_state</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_hard_state_change</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_notification</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_state_change</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_time_critical</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_time_ok</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_time_unknown</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_time_warning</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_update</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>latency</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>low_flap_threshold</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>max_check_attempts</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>next_check</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>next_notification</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>no_more_notifications</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notes</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notes_url</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notification_interval</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notification_number</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notification_period</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notifications_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notify_on_critical</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notify_on_downtime</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notify_on_flapping</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notify_on_recovery</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notify_on_unknown</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notify_on_warning</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>obsess_over</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>passive_checks_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>percent_state_change</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>retry_interval</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>scheduled_downtime_depth</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>service_description</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>should_be_scheduled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>stalk_on_critical</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>stalk_on_ok</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>stalk_on_unknown</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>stalk_on_warning</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>state_type</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_command</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>output</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>perf_data</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>retain_nonstatus_information</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>retain_status_information</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Service check

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>active_checks_enabled</td>
<td>boolean</td>
<td>True if active checks are enabled
on the service.</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_type</td>
<td>short</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_id</td>
<td>unsigned integer</td>
<td>Host ID.</td>
<td>&nbsp;</td>
</tr>
<tr><td>next_check</td>
<td>time</td>
<td>Time at which the next check is
scheduled.</td>
<td>&nbsp;</td>
</tr>
<tr><td>service_id</td>
<td>unsigned integer</td>
<td>Service ID.</td>
<td>&nbsp;</td>
</tr>
<tr><td>command_line</td>
<td>string</td>
<td>Check command line.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Service dependency

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>dependency_period</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>dependent_host_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>dependent_service_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>execution_failure_options</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>inherits_parent</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notification_failure_options</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>service_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Service group

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>name</td>
<td>string</td>
<td>Group name.</td>
<td>&nbsp;</td>
</tr>
<tr><td>enabled</td>
<td>enabled</td>
<td>True if the group is enable, false if it is
not (deletion).</td>
<td>&nbsp;</td>
</tr>
<tr><td>poller_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Service group member

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>service_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>enabled</td>
<td>enabled</td>
<td>True if the group is enable, false if it is
not (deletion).</td>
<td>&nbsp;</td>
</tr>
<tr><td>group_name</td>
<td>string</td>
<td>Group name.</td>
<td>&nbsp;</td>
</tr>
<tr><td>poller_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Service status
<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>acknowledged</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>acknowledgement_type</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>active_checks_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_interval</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_period</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_type</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>current_check_attempt</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>current_state</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>downtime_depth</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>event_handler</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>event_handler_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>execution_time</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>flap_detection_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>has_been_checked</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_name</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>is_flapping</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_check</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_hard_state</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_hard_state_change</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_notification</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_state_change</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_time_critical</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_time_ok</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_time_unknown</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_time_warning</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>last_update</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>latency</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>max_check_attempts</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>modified_attributes</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>next_check</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>next_notification</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>no_more_notifications</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notification_number</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>notifications_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>obsess_over</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>passive_checks_enabled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>percent_state_change</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>retry_interval</td>
<td>real</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>service_description</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>service_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>should_be_scheduled</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>state_type</td>
<td>short integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>check_command</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>output</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>perf_data</td>
<td>string</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Instance configuration

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>loaded</td>
<td>boolean</td>
<td>True if the instance loaded successfully.</td>
<td>&nbsp;</td>
</tr>
<tr><td>poller_id</td>
<td>unsigned integer</td>
<td>ID of the poller which received a
configuration update request (reload).</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

## Storage

This event is generated by a Storage endpoint to notify that a RRD metric graph should be updated.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>ctime</td>
<td>time</td>
<td>Time at which the metric value was
generated.</td>
<td>&nbsp;</td>
</tr>
<tr><td>interval</td>
<td>unsigned integer</td>
<td>Normal service check interval in
seconds.</td>
<td>&nbsp;</td>
</tr>
<tr><td>metric_id</td>
<td>unsigned integer</td>
<td>Metric ID (from the metrics table).</td>
<td>&nbsp;</td>
</tr>
<tr><td>name</td>
<td>string</td>
<td>Metric name.</td>
<td>&nbsp;</td>
</tr>
<tr><td>rrd_len</td>
<td>integer</td>
<td>RRD retention length in seconds.</td>
<td>&nbsp;</td>
</tr>
<tr><td>value</td>
<td>real</td>
<td>Metric value.</td>
<td>&nbsp;</td>
</tr>
<tr><td>value_type</td>
<td>short integer</td>
<td>Metric type (1 =3D counter, 2 =3D derive,
3 =3D absolute, other =3D gauge).</td>
<td>&nbsp;</td>
</tr>
<tr><td>is_for_rebuild</td>
<td>boolean</td>
<td>Set to true when a graph is being
rebuild (see the rebuild event).</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_id</td>
<td>unsigned integer</td>
<td>The id of the host this metric is
attached to.</td>
<td>Since 3.0.0</td>
</tr>
<tr><td>service_id</td>
<td>unsigned integer</td>
<td>The id of the service this metric is
attached to.</td>
<td>Since 3.0.0</td>
</tr>
</tbody>
</table>

### Rebuild

Rebuild events are generated when a Storage endpoint detects that some
graph should be rebuild. It first sends a rebuild start event
(end =3D false), then metric values (metric event with is_for_rebuild set
to true) and finally a rebuild end event (end =3D true).

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>end</td>
<td>boolean</td>
<td>End flag. Set to true if rebuild is starting,
false if it is ending.</td>
<td>&nbsp;</td>
</tr>
<tr><td>id</td>
<td>unsigned integer</td>
<td>ID of metric to rebuild if is_index is false,
or ID of index to rebuild (status graph) if
is_index is true.</td>
<td>&nbsp;</td>
</tr>
<tr><td>is_index</td>
<td>boolean</td>
<td>Index flag. Rebuild index (status) if true,
rebuild metric if false.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Remove graph

A Storage endpoint generates a remove graph event when some graph must be deleted.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>id</td>
<td>unsigned integer</td>
<td>Index ID (is_index =3D true) or metric ID
(is_index =3D false) to remove.</td>
<td>&nbsp;</td>
</tr>
<tr><td>is_index</td>
<td>boolean</td>
<td>Index flag. If true, a index (status) graph
will be deleted. If false, a metric graph will
be deleted.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Status

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>ctime</td>
<td>time</td>
<td>Time at which the status was generated.</td>
<td>&nbsp;</td>
</tr>
<tr><td>index_id</td>
<td>unsigned integer</td>
<td>Index ID.</td>
<td>&nbsp;</td>
</tr>
<tr><td>interval</td>
<td>unsigned integer</td>
<td>Normal service check interval in
seconds.</td>
<td>&nbsp;</td>
</tr>
<tr><td>rrd_len</td>
<td>time</td>
<td>RRD retention in seconds.</td>
<td>&nbsp;</td>
</tr>
<tr><td>state</td>
<td>short integer</td>
<td>Service state.</td>
<td>&nbsp;</td>
</tr>
<tr><td>is_for_rebuild</td>
<td>boolean</td>
<td>Set to true when a graph is being
rebuild (see the rebuild event).</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Metric Mapping

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>index_id</td>
<td>unsigned integer</td>
<td>Index ID.</td>
<td>&nbsp;</td>
</tr>
<tr><td>metric_d</td>
<td>unsigned integer</td>
<td>Index ID.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Index Mapping

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>index_id</td>
<td>unsigned integer</td>
<td>Index ID.</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_id</td>
<td>unsigned integer</td>
<td>Index ID.</td>
<td>&nbsp;</td>
</tr>
<tr><td>service_id</td>
<td>unsigned integer</td>
<td>Index ID.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Engine state
Engine state events are sent when the correlation engine starts or stops.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>started</td>
<td>boolean</td>
<td>True if the correlation engine is starting, false if it
is stopping.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### State

<table>
<thead valign=3D"bottom">
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>ack_time</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>current_state</td>
<td>integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>end_time</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>in_downtime</td>
<td>boolean</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>service_id</td>
<td>unsigned integer</td>
<td>0 for a host.</td>
<td>&nbsp;</td>
</tr>
<tr><td>start_time</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Issue

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>ack_time</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>end_time</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>service_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>start_time</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Issue parent

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>child_host_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>child_service_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>child_start_time</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>end_time</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>parent_host_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>parent_service_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>parent_start_time</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>start_time</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Log issue

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>log_ctime</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>host_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>service_id</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr><td>issue_start_time</td>
<td>time</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

## BBDO

### Version response

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>bbdo_major</td>
<td>short integer</td>
<td>BBDO protocol major used by the peer sending
this <em>version_response</em> packet. The sole
current protocol version is 1.0.0.</td>
<td>&nbsp;</td>
</tr>
<tr><td>bbdo_minor</td>
<td>short integer</td>
<td>BBDO protocol minor used by the peer sending
this <em>version_response</em> packet.</td>
<td>&nbsp;</td>
</tr>
<tr><td>bbdo_patch</td>
<td>short integer</td>
<td>BBDO protocol patch used by the peer sending
this <em>version_response</em> packet.</td>
<td>&nbsp;</td>
</tr>
<tr><td>extensions</td>
<td>string</td>
<td>Space-separated string of extensions supported
by the peer sending this <em>version_response</em>
packet.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Ack

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>acknowledged events</td>
<td>unsigned integer</td>
<td>Number of acknowledged events. Only used by
"smart" clients (i.e able to acknowledge
events).
Not to be used by dumb clients.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### BA status event

This event is sent when a BA's status changed.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>ba_id</td>
<td>unsigned integer</td>
<td>The id of the BA.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>in_downtime</td>
<td>boolean</td>
<td>True of the BA is in downtime.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>last_state_change</td>
<td>time</td>
<td>The time of the last state change of the BA.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>level_acknowledgement</td>
<td>real</td>
<td>The acknowledgment level of the BA.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>level_downtime</td>
<td>real</td>
<td>The downtime level of the BA.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>level_nominal</td>
<td>real</td>
<td>The nominal level of the BA.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>state</td>
<td>short integer</td>
<td>The state of the BA.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>state_changed</td>
<td>boolean</td>
<td>True if the state of the BA just changed.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
</tbody>
</table>

### KPI status event</h3>

This event is sent when a KPI's status changed.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>kpi_id</td>
<td>unsigned integer</td>
<td>The id of the KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>in_downtime</td>
<td>bool</td>
<td>True if the KPI is in downtime.</td>
<td>&nbsp;</td>
</tr>
<tr><td>level_acknowledgement_hard</td>
<td>real</td>
<td>The hard acknowledgement level of the KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>level_acknowledgement_soft</td>
<td>real</td>
<td>The soft acknowledgement level of the KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>level_downtime_hard</td>
<td>real</td>
<td>The hard downtime level of the KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>level_downtime_soft</td>
<td>real</td>
<td>The soft downtime level of the KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>level_nominal_hard</td>
<td>real</td>
<td>The hard nominal level of the KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>level_nominal_soft</td>
<td>real</td>
<td>The soft nominal level of the KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>state_hard</td>
<td>short integer</td>
<td>The hard state of the KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>state_soft</td>
<td>short integer</td>
<td>The soft state of the KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>last_state_change</td>
<td>time</td>
<td>The time of the last state change of the KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>last_impact</td>
<td>real</td>
<td>The last impact of the KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>valid</td>
<td>bool</td>
<td>True if the KPi is valid.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Meta service status event

This event is sent when a meta service's status changed.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>meta_service_id</td>
<td>unsigned integer</td>
<td>The id of the meta service.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>value</td>
<td>real</td>
<td>The value of the meta service.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>state_changed</td>
<td>boolean</td>
<td>True if the state just changed.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
</tbody>
</table>

### BA-event event

This event is sent when a new BA event is opened, or an old one is closed.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>ba_id</td>
<td>unsigned integer</td>
<td>The id of the BA.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>first_level</td>
<td>real</td>
<td>The first level of the BA event.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>end_time</td>
<td>time</td>
<td>The end_time of the event. 0 or (time)-1 for
an opened event.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>in_downtime</td>
<td>boolean</td>
<td>True if BA was in downtime during the BA event.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>start_time</td>
<td>time</td>
<td>The start_time of the event.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>status</td>
<td>short integer</td>
<td>The status of the BA during the event.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
</tbody>
</table>

### KPI-event event
This event is sent when a new KPI event is opened, or an old one is closed.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>kpi_id</td>
<td>unsigned integer</td>
<td>The id of the KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>end_time</td>
<td>time</td>
<td>The end_time of the event. 0 or (time)-1 for
an opened event.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>impact_level</td>
<td>integer</td>
<td>The level of the impact.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>in_downtime</td>
<td>boolean</td>
<td>True if BA was in downtime during the BA event.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>first_output</td>
<td>string</td>
<td>The first output of the KPI during the event.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>perfdata</td>
<td>string</td>
<td>The first perfdata of the KPI during the event.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>start_time</td>
<td>time</td>
<td>The start_time of the event.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>status</td>
<td>short integer</td>
<td>The status of the BA during the event.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
</tbody>
</table>

### BA duration event event

This event is sent when a new BA duration event is computed by BAM broker.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>ba_id</td>
<td>unsigned integer</td>
<td>The id of the BA.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>real_start_time</td>
<td>time</td>
<td>The first level of the BA event.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>end_time</td>
<td>time</td>
<td>The end_time of the event, in the given
timeperiod.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>start_time</td>
<td>time</td>
<td>The start_time of the event, in the given
timeperiod.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>duration</td>
<td>unsigned integer</td>
<td>end_time - start_time.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>sla_duration</td>
<td>unsigned integer</td>
<td>The duration of the event in the given
timperiod.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>timeperiod_is_default</td>
<td>boolean</td>
<td>True if the timeperiod if the default for
this BA.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
</tbody>
</table>

### Dimension BA

This event is part of the dimension (i.e configuration) dump occuring at startup and after each BAM configuration reload.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>ba_id</td>
<td>unsigned integer</td>
<td>The id of the BA.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>ba_name</td>
<td>string</td>
<td>The name of the BA.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>ba_description</td>
<td>string</td>
<td>The description of the BA.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>sla_month_percent_crit</td>
<td>real</td>
<td>&nbsp;</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>sla_month_percent_warn</td>
<td>real</td>
<td>&nbsp;</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>sla_month_duration_crit</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>sla_month_duration_warn</td>
<td>unsigned integer</td>
<td>&nbsp;</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
</tbody>
</table>

### Dimension KPI

This event is part of the dimension (i.e configuration) dump occuring at startup and after each BAM configuration reload.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>kpi_id</td>
<td>unsigned integer</td>
<td>The id of the KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>ba_id</td>
<td>unsigned integer</td>
<td>The id of the parent BA of this KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>ba_name</td>
<td>string</td>
<td>The name of the parent BA of this KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>host_id</td>
<td>unsigned integer</td>
<td>The id of the host associated with this KPI
for service KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>host_name</td>
<td>string</td>
<td>The name of the host associated with this KPI
for service KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0)</td>
</tr>
<tr><td>service_id</td>
<td>unsigned integer</td>
<td>The id of the service associated with this KPI
for service KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>service_description</td>
<td>string</td>
<td>The description of the service associated with
this KPI for service KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>kpi_ba_id</td>
<td>unsigned integer</td>
<td>The id of the BA associated with this KPI for
BA KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>kpi_ba_name</td>
<td>string</td>
<td>The name of the BA associated with this KPI
for BA KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>meta_service_id</td>
<td>unsigned int</td>
<td>The id of the meta-service associated with this
KPI for meta-service KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>meta_service_name</td>
<td>string</td>
<td>The name of the meta-service associated with
this KPI for meta-service KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>boolean_id</td>
<td>unsigned int</td>
<td>The id of the boolean expression associated
with this KPI for boolean KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>boolean_name</td>
<td>string</td>
<td>The name of the boolean expression
associated with this KPI for boolean KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>impact_warning</td>
<td>real</td>
<td>The impact of a warning state for this KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>impact_critical</td>
<td>real</td>
<td>The impact of a critical state for this KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>impact_unknown</td>
<td>real</td>
<td>The impact of a unknown state for this KPI.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
</tbody>
</table>

### Dimension BA BV relation

This event is part of the dimension (i.e configuration) dump occuring at startup and after each BAM configuration reload.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>ba_id</td>
<td>unsigned integer</td>
<td>The id of the BA.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>bv_id</td>
<td>unsigned integer</td>
<td>The id of the BV.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
</tbody>
</table>

### Dimension BV

This event is part of the dimension (i.e configuration) dump occuring at startup and after each BAM configuration reload.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>bv_id</td>
<td>unsigned integer</td>
<td>The id of the BV.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>bv_name</td>
<td>string</td>
<td>The name of the BV.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>bv_description</td>
<td>string</td>
<td>The description of the BV.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
</tbody>
</table>

### Dimension table signal

This event is part of the dimension (i.e configuration) dump occuring at startup and after each BAM configuration reload.

This signal is sent before the dump of all the dimensions, and again at the end of the dump.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>update_started</td>
<td>boolean</td>
<td>True if this is the start of the dump,
false if it's the end.</td>
<td>Since 2.8.0
(BBD0 1.2.0).</td>
</tr>
</tbody>
</table>

### Rebuild signal

This event is sent when a rebuild of the event durations and availabilities is asked to the BAM broker endpoint.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>bas_to_rebuild</td>
<td>string</td>
<td>A string containing the id of all the BAs
to rebuild, separated by a comma and a space
(i.e "1, 5, 8, 12").</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
</tbody>
</table>

### Dimension timeperiod

This event is part of the dimension (i.e configuration) dump occuring at startup and after each BAM configuration reload.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>tp_id</td>
<td>unsigned integer</td>
<td>The id of the timeperiod.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>name</td>
<td>string</td>
<td>The name of the timeperiod.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>monday</td>
<td>string</td>
<td>The timeperiod rule for this day.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>tuesday</td>
<td>string</td>
<td>The timeperiod rule for this day.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>wednesday</td>
<td>string</td>
<td>The timeperiod rule for this day.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>thursday</td>
<td>string</td>
<td>The timeperiod rule for this day.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>friday</td>
<td>string</td>
<td>The timeperiod rule for this day.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>saturday</td>
<td>string</td>
<td>The timeperiod rule for this day.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>sunday</td>
<td>string</td>
<td>The timeperiod rule for this day.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
</tbody>
</table>

### Dimension BA timeperiod relation

This event is part of the dimension (i.e configuration) dump occuring at startup and after each BAM configuration reload.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>ba_id</td>
<td>unsigned integer</td>
<td>The id of the BA.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>timeperiod_id</td>
<td>unsigned integer</td>
<td>The id of the timeperiod.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>is_default</td>
<td>boolean</td>
<td>True if the timeperiod is the default one for
this BA.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
</tbody>
</table>

### Dimension timeperiod exception

This event is part of the dimension (i.e configuration) dump occuring at startup and after each BAM configuration reload.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>timeperiod_id</td>
<td>unsigned integer</td>
<td>The id of the timeperiod having this exception.</td>
<td>Since 2.8.0</td>
</tr>
<tr><td>daterange</td>
<td>string</td>
<td>A string containing the date of the range.</td>
<td>Since 2.8.0</td>
</tr>
<tr><td>timerange</td>
<td>string</td>
<td>A string containing the time of the range.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
</tbody>
</table>

### Dimension timeperiod exclusion

This event is part of the dimension (i.e configuration) dump occuring at startup and after each BAM configuration reload.

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>timeperiod_id</td>
<td>unsigned integer</td>
<td>The id of the timeperiod having this exclusion.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
<tr><td>excluded_timeperiod_id</td>
<td>unsigned integer</td>
<td>The id of the excluded timeperiod.</td>
<td>Since 2.8.0
(BBDO 1.2.0).</td>
</tr>
</tbody>
</table>

### Inherited downtime

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>bad_id</td>
<td>unsigned integer</td>
<td>The id of the BA in downtime.</td>
<td>&nbsp;</td>
</tr>
<tr><td>in_downtime</td>
<td>boolean</td>
<td>True if the BA is in downtime.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

## Extcmd

### Command request

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>command</td>
<td>string</td>
<td>The command request.</td>
<td>&nbsp;</td>
</tr>
<tr><td>endp</td>
<td>string</td>
<td>The endpoint this command is destined to.</td>
<td>&nbsp;</td>
</tr>
<tr><td>uuid</td>
<td>string</td>
<td>The uuid of this request.</td>
<td>&nbsp;</td>
</tr>
<tr><td>with_partial_result</td>
<td>boolean</td>
<td>True if the command should be answered
with partial result.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Command result

<table>
<tr><th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tr><td>code</td>
<td>integer</td>
<td>The return code of this command.</td>
<td>&nbsp;</td>
</tr>
<tr><td>uuid</td>
<td>string</td>
<td>The uuid of the request this command is the
result of.</td>
<td>&nbsp;</td>
</tr>
<tr><td>msg</td>
<td>string</td>
<td>The string message of the command result.</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>
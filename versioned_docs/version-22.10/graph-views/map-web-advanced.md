---
id: map-web-advanced
title: Advanced parameters in MAP
---

## Define status computation parameters

Centreon MAP Engine gives you the possibility to customize how the inherited status is computed and rendered in views. You may use the following parameters to adapt the behavior of inherited status computation to your use case.

### What's an inherited status?

An inherited status is a Centreon MAP custom status associated with some objects that is based on the worst status of its children. Here are the rules:

- A host has two statuses: its own status (up/down/pending) and an inherited status that is based on the worst status of its services. For more readability, the status displayed is the result of calculating the worst status between the two statuses.
- A hostgroup only has an inherited status corresponding to the worst status of its children (hosts, services).
- A servicegroup has only an inherited status: the worst status of its children (services).
- A container has only an inherited status: the worst status of its children (hosts, services, meta-services, hotsgroups, servicegroups, BA, widgets).

### Status computation parameters

| Parameter                           | Possible value | Default value | Description                                                                                  |
| ----------------------------------- | -------------- | ------------- | -------------------------------------------------------------------------------------------- |
| resource.status.use-hard              | true or false  | false         | Only use hard status value for inherited status propagation. If the parameter is set to TRUE, SOFT status changes are not taken into account in the calculation. See more about [status types](../alerts-notifications/concepts.md#status-types).                                   |
| resource.status.ignore-on-downtime  | true or false  | false         | Do not propagate state for resources in downtime. If the parameter is set to TRUE, the status is not taken into account when calculating the inherited status.                                            |
| resource.status.ignore-on-acknowledgement | true or false  | false         | Do not propagate state for acknowledged resources. If the parameter is set to TRUE, the status is not taken into account when calculating the inherited status.                                           |
| resource.status.ignore-above-severity    | integer        | max value           | Do not propagate state for resources having severity superior to this value. The lower the severity number, the more critical the resource.                 |

### Edit parameters

- You can configure these parameters in the **/etc/centreon-map/map-config.properties** file.

- If you add, remove or update a parameter, make sure to restart **centreon-map-engine**.

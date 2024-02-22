---
id: map-web-advanced
title: Advanced parameters in MAP
---

## Define views & status computation parameters

Centreon MAP Engine gives you the possibility to customize how this inherited status is computed and rendered in views. You may use the following parameters to adapt the behavior of inherited status computation to your use case.

| Parameter                           | Possible value | Default value | Description                                                                                  |
| ----------------------------------- | -------------- | ------------- | -------------------------------------------------------------------------------------------- |
| resource.status.use-hard              | true or false  | false         | Only use hard state value for inherited status propagation                                   |
| resource.status.ignore-on-downtime  | true or false  | false         | Do not propagate status for resources in downtime and use the default status                                            |
| resource.status.ignore-on-acknowledgement | true or false  | false         | Do not propagate status for acknowledged resources and use the default status                                           |
| resource.status.ignore-above-severity    | integer        | max value           | Do not propagate status for resources having severity superior to this value and use the default status                 |

If the parameter (downtime, acknowledgement, severity) is with the:
- **true** value, the HARD state value (use-hard parameter) is not used but the SOFT one is.
- **false** value, the HARD state value is used.


The following parameters can be configured in
**/etc/centreon-map/map-config.properties**.

If you add, remove or update a parameter, make sure to restart **centreon-map-engine**.

**What's an inherited status ?**

An inherited status is a Centreon MAP custom status associated with some objects that is based on the worst status of its children; here are the rules:

- A host has two statuses: its own status (up/down/pending) and an inherited status that is based on the worst state of its services.
- A hostgroup only has an inherited status corresponding to the worst status of its children (hosts, services).
- A servicegroup has only an inherited status: the worst status of its children (services).
- A container has only an inherited status: the worst status of its children (hosts, services, meta-services, hotsgroups, servicegroups, BA, widgets).

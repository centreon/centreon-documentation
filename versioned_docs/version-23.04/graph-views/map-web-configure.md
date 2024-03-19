---
id: map-web-configure
title: Configuring in MAP
---

## Define views & status computation parameters

Centreon MAP Engine gives you the possibility to customize how this inherited status is computed and rendered in views. You may use the following parameters to adapt the behavior of inherited status computation to your use case.

| Parameter                           | Possible value | Default value | Description                                                                                  |
| ----------------------------------- | -------------- | ------------- | -------------------------------------------------------------------------------------------- |
| resource.status.use-hard              | true or false  | false         | Only use hard state value for inherited status propagation                                   |
| resource.status.ignore-on-downtime  | true or false  | false         | Do not propagate status for resources in downtime                                            |
| resource.status.ignore-on-acknowledgement | true or false  | false         | Do not propagate status for acknowledged resources                                           |
| resource.status.ignore-above-severity    | integer        | 0             | Do not propagate status for resources having severity superior to this value                 |
| gate.useResourcesAccess  ???        | true or false  | true          | Should Centreon Map consider resources ACL when calculating inherited status of view content |

The following parameters can be configured in
`/etc/centreon-map/map-config.properties`.

If you add, remove or update a parameter, make sure to restart **centreon-map-engine**.

**What's an inherited status ?**

An inherited status is a Centreon MAP custom status associated with some objects that is based on the worst status of its children; here are the rules:

- A host has two statuses: its own status (up/down/pending) and an inherited status that is based on the worst state of its services.
- A hostgroup only has an inherited status corresponding to the worst status of its children (hosts, services).
- A servicegroup has only an inherited status: the worst status of its children (services).
- A container has only an inherited status: the worst status of its children (hosts, services, meta-services, hotsgroups, servicegroups, BA, widgets).

**Inherited status customization**

Centreon MAP Engine gives you the possibility to customize how this inherited status is computed and rendered in views. You may use the following parameters to adapt the behavior of inherited status computation to your use case:

Specificity of **gate.useResourcesAccess**: Setting this parameter to "false" may highly improve Centreon Map performance. Here is why:

- gate.useResourcesAccess = false: all users see the same status and same resources in views, irrespective of the ACL resources they have, they are ignored. In that case, be careful who you're giving access to views.
- gate.useResourcesAccess = true: users see different status and views regarding resource ACLs (decreased performance because you need to have one instance of each view for each user).

To configure these parameters, you need to edit the following Centreon MAP Engine configuration file (modify or add missing parameters), then restart **centreon-map-engine**:

```shell
vi /etc/centreon-map/map-config.properties
systemctl restart centreon-map-engine
```

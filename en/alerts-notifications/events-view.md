---
id: events-view
title: Events view (beta)
---

The event view page is your main view to track resource events & status, analyze & quickly handle them.

This view mixes host & services to have a unified interface and way to manage events. 

> This feature is in beta, we highly recommand you to use and send your feedbacks via [Github](https://github.com/centreon/centreon/issues/new/choose)

<iframe width="640" height="480" src="https://www.youtube.com/embed/FVjuIbBDuYU" frameborder="0" allowfullscreen></iframe>

## Events list

The event list is a condensed & efficient view of all alerts or resource status monitored by Centreon.

![image](assets/alerts/events-view/listing.png)

It's possible to sort by the column of your choice. 

![image](assets/alerts/events-view/orderby.gif)

## Take actions on events

### Acknowledge an event 

When one or more alerts are visible, you may need to acknowledge them to tell your team that the problem
is handled, you can do that in two ways:

- By directly acknowledging on the line, a "Acknowledgement" button apper on mouse over
- By selecting multiple lines and clicking on the "Acknowledgement" button, above the table

![image](assets/alerts/events-view/acknowledgement.gif)

> Only "non-ok" resources can be ackwnoledged

When a resource is acknowledged, the alert is not visible anymore in the "Unhandled problems" filter and 
notifications for this resource are stopped.

### Set a planned downtime

When a maintenance is planned on one or multiple resources, you can set this planned downtime
in Centreon in two ways: 

- By directly setting a planned downtime on the line when the mouse is over 
- By selecting multiple lines and clicking on the "Downtime" button, above the table

![image](assets/alerts/events-view/downtime.gif)

When a resource is in planned downtime, the alert is not visible anymore in the "Unhandled problems" filter and 
notifications for this resource are stopped.

### Refresh a status

In many situations, you need to quickly re-check one or multiple service to refresh their status. 
You can set this planned downtime in Centreon in two ways: 

- By directly clicking on the "Check" button on the line when the mouse is over 
- By selecting multiple lines and clicking on the "Check" button, above the table 

![image](assets/alerts/events-view/check.gif)


## Filter 

###  Pre-defined filters

When you open the Events view, the default filter is "Unhandled problems". This filter quickly show all problems/alerts
that are not yet handled so you can focus on choosing the most relevant alerts to take care of.
You can choose two other filters that are "Resources problems" and "All".

The following rules apply;

- Unhandled problems: resource status is Warning or Critical or Unknown or Down AND the resource is not acknowledged nor in planned downtime 
- Resource problems: resource status is Warning or Critical or Unknown or Down
- All: All resources

![image](assets/alerts/events-view/predefined-filters.gif)

### Search bar

It's possible to filter out the events by name of resources. You can use the power of regular expression mechanism 
to finely search for resources (host or services)

By default, the search bar with look for your expression to match with 

- Host name
- Host alias
- Address or FQDN
- Service description 

![image](assets/alerts/events-view/simple-search.png)

It's possible to force search on a defined fields by using the following labels:

- h.name: only search in host.name field
- h.alias: only search in host alias field
- h.address: only search in host address field
- s.description: only search in service description field

![image](assets/alerts/events-view/label-search.png)

### By advanced criteria

If pre-defined filter and the search bar are not enough, it's possible to expand the filter bar to access
the following additionnal criteria:

- Resource types (host or service)
- Statuses (Ok,Warning, Critical, Unknown, Pending, Up, Down)
- States: Is the problem already acknowledged, in a planned downtime or simply unhandled
- Host groups
- Service groups

![image](assets/alerts/events-view/advanced-search.png)

## Detail panel

When you click on a line, a detail panel opens to display main information concerning the resource.
Regarding the type of resource, the detail panel displays different information.

### Host panel

The host panel contains only information about the host status.

![image](assets/alerts/events-view/host-panel.gif)

If an acknowledgement or downtime is set on the host, it'll be display in the panel and the header will be 
accordingly colored

### Service panel

The service panel contains detail information about the status and a "Graph" tab. The graph tab displays 
a chart letting you quickly see metrics evolution.

![image](assets/alerts/events-view/service-panel.gif)

If an acknowledgement or downtime is set on the service, it'll be display in the panel and the header will be 
accordingly colored
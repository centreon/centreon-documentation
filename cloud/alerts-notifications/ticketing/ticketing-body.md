---
id: ticketing-advanced-body
title: Customizing tickets
description: How to customize the Open Tickets body template using Smarty syntax, static text, and dynamic fields
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The body of the ticket to be created is managed by the text block located in the **Body list definition** field, on the **Configuration > Notifications > Open Tickets > Rules** page. It uses the syntax of the Smarty templating language.

## Default ticket body

By default, the ticket body definition is as follows (the same definition handles both opening a ticket on a host and opening a ticket on a service):

```smarty
{$user.alias} open ticket at {$smarty.now|date_format:"%d/%m/%y %H:%M:%S"}

{$custom_message}

{include file="file:$centreon_open_tickets_path/providers/Abstract/templates/display_selected_lists.ihtml" separator=""}

{if $host_selected|@count gt 0}
  {foreach from=$host_selected item=host}
    Host: {$host.name}
    State: {$host.state_str}
    Duration: {$host.last_hard_state_change_duration}
    Output: {$host.output|substr:0:1024}
  {/foreach}
{/if}

{if $service_selected|@count gt 0}
  {foreach from=$service_selected item=service}
    Host: {$service.host_name}
    Service: {$service.description}
    State: {$service.state_str}
    Duration: {$service.last_hard_state_change_duration}
    Output: {$service.output|substr:0:1024}
{/foreach}
{/if}
```

If a ticket is opened on a service using this template, it may give the following results:

```txt
t.rex open ticket at 03/02/2025 16:50:35

This is a test ticket

Urgency: 1
Priority: 1
Category: Food

Host: srv-Earth
Service: health
State: Critical
Duration: 5m
Output: a meteorite has just crashed on srv-Earth
```

## Customization

You can customize the contents of the ticket body. You can :

- add static text to the ticket body.
- define fields to be displayed in the [ticket creation popup](mapping.md), to be filled in by the user. Information entered by the user will be inserted into the ticket body when the ticket is created.
- add to the ticket body information specific to the resource on which the ticket is created or to the user creating the ticket, using pre-configured Smarty [variables](smarty_variables.md) or [functions](smarty_functions.md).
- use standard Smarty functions (not covered by this documentation), e.g. @count like in `$service_selected|@count`.

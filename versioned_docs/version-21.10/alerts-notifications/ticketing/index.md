---
sidebar_position: 1
id: ticketing-intro
title: Open Tickets Configuration
---

## Overview

:::note

Make sure Open Tickets is [installed](../ticketing-install.md) before proceeding. 

:::

### Configuration

To configure Open Tickets, you need to:

1. Select a [provider](./config/provider.md)
2. Add  [macros](./config/macros.md) for hosts and services 
3. Define [wídgets](./config/widgets.md) for the interface

### Advanced configuration

Depending on your [ITSM](../../../integrations/itsm/itsm-overview.md) configuration, you may need to modify providers to fit your environment. 

Things that you may need to adapt include:

* Defining [custom lists](./advanced/list-definition.md) to show when creating a ticket.
* Chaining [rules](./advanced/rules.md) to perform actions (e.g. sending an email) when a ticket is created.
* Adding [commands](./advanced/commands.md) to be performed when a ticket is created.


### Operation

For information on how to manage tickets, see the [operation guide](./operation/operation.md)

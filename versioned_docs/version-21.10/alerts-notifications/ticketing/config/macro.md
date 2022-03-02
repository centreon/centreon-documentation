---
sidebar_position: 2
id: ticketing-config-macro
title: Open Tickets - Hosts & Services
---

## Hosts & services for Open Tickets

In order for resources (hosts and services) to receive a ticket number,
it is necessary to add a custom macro for them.

The best way to do this, is to create these macros in a **host template** and a **service template**. 

This allows all objects using these models to inherit the macro.

### Host Template

To add a Host template:

![image](../../../assets/alerts-notifications/ticketing/config/open_tickets_macro.png)

1. Open the **Configuration > Hosts > Templates** menu 
2. Find the **generic-active-host-custom** template 
3. Click **Add a new entry**
4. Enter the name **TICKET\_ID** 
5. Click **Save**

### Service Template

To add a Service template:

![image](../../../assets/alerts-notifications/ticketing/config/open_tickets_macro.png)

1. Open the **Configuration > Services > Templates** menu 
2. Find the **generic-active-service-custom** template 
3. Click **Add a new entry**
4. Enter the name **TICKET\_ID** 
5. Click **Save**

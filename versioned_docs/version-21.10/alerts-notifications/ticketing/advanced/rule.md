---
sidebar_position: 2
id: ticketing-advanced-rule
title: Advanced - Chaining Rules for Open Tickets
---

## Chaining rules

As rules can be chained, you can create additional rules and refer to them from other rules, creating a chain of rules to perform more complex actions. 

For example: 

To add a rule that sends an email when a ticket is added:

1. Open the menu **Configuration > Notifications > Open Tickets > Rules** 

![image](../../../assets/alerts-notifications/ticketing/config/open_tickets_add_provider_01.png)

2. Click **Add**

![image](../../../assets/alerts-notifications/ticketing/config/open_tickets_add_provider_02.png)

4. Add a **Rule name**  (`emailme`)
5. Select the **Provider**  (`Mail`)

A dialog is shown where you can configure the provider.

![image](../../../assets/alerts/open_ticket_advanced_chain_01.png)


6. Open your provider in the list of rules
7. Open the **Advanced** configuration tab
8. Find the **Chain Rules** section
9. Click **Add a new entry**
10. Select your `emailme` from the dropdown list
12. Click **Save**

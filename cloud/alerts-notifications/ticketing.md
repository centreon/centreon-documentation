---
id: ticketing
title: Configuring Open Tickets
description: "How administrators set up notification rules, macros, and widgets to enable ticket creation in Centreon Cloud"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page is intended for the administrators who will set up Open Tickets so that operators can create and close tickets in Centreon.

## Step 1: Create a notification rule

1. To create a notification rule, go to **Configuration > Notifications > Open Tickets > Rules** and then click **Add**.
2. Select a provider (the tool in which you want to open the tickets): the form is updated with default fields for this integration.
3. [Adapt the form to your needs](./ticketing/ticketing-body.md#customization), according to how [your provider](../integrations/itsm/itsm-overview.md) works.
4. Fill in the form.

## Step 2: Add a custom macro to all host and service templates

You must add a custom macro to the host and service templates that will apply to all hosts and services; i.e. **generic-active-host-custom** and **generic-active-service-custom**.

1. Go to **Configuration > Hosts > Templates**.
2. Look for the **generic-active-host-custom** template, then edit it.
3. Add a **TICKET_ID** macro and then click **Save**.
4. Do the same for services (look for the **generic-active-service-custom** template in the **Configuration > Services > Templates** page).

## Step 3: Configure the widgets where users will be able to open and close tickets

Open Tickets can be used in 2 different places in Centreon:

* in the **Resource table** widget [in a dashboard](../alerts-notifications/dashboards.md)
* in the **Open tickets** widget in [a custom view](../alerts-notifications/custom-views.md) (legacy).

Typically, you would add the same widget twice, to create 2 different views:

* a view that will allow users to open tickets
* a view that will allow users to view all open tickets, and to close them (whether the ticket is also closed in the ITSM tool depends on the provider).

Make sure you give your two widgets relevant titles so that your users know which is which.

<Tabs groupId="sync">
<TabItem value="Dashboards" label="Dashboards">

1. Go to **Home > Dashboards**, select your dashboard and add two **Resource table** widgets.

2. In the **Widget properties** and **Value settings** sections, fill in the properties you want. Check carefully which statuses, states and status types you want the widget to display. To ensure consistency between displayed resources, apply the same parameters to both widgets.

3. Set the parameters for your tickets in the **Ticket management** section.
   - In **Rule (ticket provider)**, you can define if you want to display **Resources with no tickets** or **Resources linked to a ticket**.
   - In **Display ticket creation buttons**, you can **Enable ticket creation for hosts** and **Enable ticket creation for services**.

4. Save your changes.

Your dashboard now displays two **Resource table** widgets containing your two views.
* When a user creates a ticket on a service, the service is automatically acknowledged.
* When a user creates a ticket on a host, all services for this host will be included in the ticket and displayed in the "open tickets" widget.
* When a user closes a ticket, if your provider allows it, the ticket will be automtically closed in your ITSM tool too.

</TabItem>
<TabItem value="Custom Views (legacy)" label="Custom Views (legacy)">

1. Go to **Home > Custom Views**, select your view and add two **Open Tickets** widgets.

2. In the first widget, create a view that will allow users to open tickets. Click the **Configuration** button:
   - Select the **Rule** you created at step 1.
   - Don’t check the **Opened Tickets** box.
   - Don’t check the **Display Ticket ID** and **Display Ticket Time** boxes.
   - Define which services you want to display in this table, i.e. the services you want to be able to open tickets on. For instance, you can filter them according to their status.
   - Define whether creating a ticket on a service automatically acknowledges the service. (In that case, creating a ticket on the host will include all problematic services in the ticket and they will all be displayed in the "open tickets" widget.)

3. **Apply** your changes.

4. In the second widget, create a view that will allow users to view all open tickets and to close them. Click the
**Configuration** button:
   - Select the **Rule** you created at step 1.
   - Check the **Opened Tickets** box.
   - Check the **Display Ticket ID** and **Display Ticket Time** boxes.
   - Define whether closing a ticket in Centreon should automatically close it in your ITSM tool too (if your provider allows it).
   - Define any other option you want.

5. **Apply** your changes.

Your custom view now displays two widgets containing your two views.

</TabItem>
</Tabs>

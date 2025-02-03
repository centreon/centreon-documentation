---
id: ticketing-use
title: Using Open Tickets
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page is intended for the operators who will create and close tickets in Centreon.

## Where can I open and close tickets?

Depending on what your admin has configured, you may be able to open and close tickets from:

* the **Resource table** widget [in a dashboard](../alerts-notifications/dashboards.md)
* the **Open tickets** widget in [a custom view](../alerts-notifications/custom-views.md) (legacy).

Typically, your admin will have created 2 widgets, with relevant titles:

* a widget that allows you to open tickets. This widget displays services with the characteristics your admin has defined (e.g. all CRITICAL services).
* a widget that allows you to view all open tickets and to close them (whether the ticket is also closed in the ITSM tool depends on the provider).

## How do I open a ticket?

<Tabs groupId="sync">
<TabItem value="In dashboards" label="In dashboards">

1. To open a ticket, in the ticket-opening widget, click the **Open ticket for service** button for the service you want. Alternatively, you can open a ticket for the host, using the **Open ticket for host** button: all services for this host will be included in the ticket and displayed in the "open tickets" widget.
2. A popup appears: fill in the characteristics of your ticket.
3. Click **Open**.
3. Once the ticket is created, the popup displays the ticket's ID (which is the one it will have in your ITSM tool).
4. The service(s) disappear from the ticket-opening widget and appear in the widget that displays all open tickets. (You may need to refresh your page to see it.) The alert(s) are automatically acknowledged.

</TabItem>
<TabItem value="In Custom Views (legacy)" label="In Custom Views (legacy)">

1. To open a ticket, select a service in the ticket-opening widget, and in the **More actions** menu, select **Service: Open ticket**. Alternatively, you can open a ticket for the host, using the **Host: Open ticket** option: all services for this host will be included in the ticket and displayed in the "open tickets" widget.
2. A popup appears: fill in the characteristics of your ticket.
3. Click **Open**.
3. Once the ticket is created, the popup displays the ticket's ID (which is the one it will have in your ITSM tool).
4. The service(s) disappear from the ticket-opening widget and appear in the widget that displays all open tickets. (You may need to refresh your page to see it.) If your admin has configured it, the service(s) will be automatically acknowlegded.

</TabItem>
</Tabs>

## How do I close a ticket?

You can close tickets in Centreon: for some providers, the ticket will be automatically closed in your ITSM tool too.

<Tabs groupId="sync">
<TabItem value="In dashboards" label="In dashboards">

1. To close a ticket, in the open tickets widget, click the **Close ticket** button in the **Actions** column.
2. The ticket is closed in Centreon, and, if your provider allows it, in your ITSM tool.
3. The service disappears from the open tickets widget.

> Opening a ticket automatically acknowledges the service. If you close a ticket in Centreon while the alert is still ongoing in Centreon, the service will be disacknowledged.

> Closing a ticket in your ITSM tool does not close it automatically in Centreon.

</TabItem>
<TabItem value="In Custom Views (legacy)" label="In Custom Views (legacy)">

1. To close a ticket, in the open tickets widget, select the service you want and in the **More actions** menu, select **Close tickets**.
2. The ticket is closed in Centreon, and, if your provider allows it and your admin has configured it, in your ITSM tool.
3. The service disappears from the open tickets widget.

> If your admin has configured it, opening a ticket automatically acknowledges the service. If you close a ticket in Centreon while the alert is still ongoing in Centreon, the service will be disacknowledged.

> Closing a ticket in your ITSM tool does not close it automatically in Centreon.

</TabItem>
</Tabs>

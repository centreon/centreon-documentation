---
id: interface
title: Overview of the Centreon interface
---

## Video tutorials

Take a tour of the interface to get familiar with Centreon Cloud, according to your [user role](../users/users.md#user-roles).

<details>
<summary>I'm an Editor</summary>

- Discover the main menu:

<iframe width="100%" height="650" src="https://demo.arcade.software/piyJh7IO1OtnMvuHEh5o?embed" frameborder="0" allowfullscreen></iframe>

- Discover the top banner:

<iframe width="100%" height="650" src="https://demo.arcade.software/j1cCyYghLIVpGAs2wW0x?embed" frameborder="0" allowfullscreen></iframe>

</details>

<details>
<summary>I'm a User</summary>

- Discover the main menu:

<iframe width="100%" height="650" src="https://demo.arcade.software/rlazq3RJUcApVO6Vw3V3?embed" frameborder="0" allowfullscreen></iframe>

- Discover the top banner:

<iframe width="100%" height="650" src="https://demo.arcade.software/I7RA2Mj8n4BNi22LVTbr?embed" frameborder="0" allowfullscreen></iframe>

</details>

## Accessing the central server's interface

To connect to Centreon Cloud for the first time, connect to the [CIAM](../ciam/ciam.md) and click on your platform in the **Applications** list on your organization's home page. You can then mark the URL as a favorite to access the platform faster.

A Centreon Cloud URL looks like this: `https://<organization>.<region>.centreon.cloud`.

## Menus

![image](../assets/getting-started/menus.png)

The Centreon web interface contains several menus, each with a specific function (click the Centreon logo at the top left of the screen to expand the menus):

![image](../assets/getting-started/expand_menu.png)

* **Home** shows [custom views](create-custom-view.md).
  Your workspace may be blank for now. Once you configure customizable widgets, you will see data and charts according
  to your customization.
* **Monitoring** provides a combined view of the statuses of all monitored items in real and delayed time using logs and
  performance graphics.
* **Reporting** provides an intuitive view (using diagrams) of the evolution of monitoring over a given period.
* **Configuration** allows you to configure all monitored items and the monitoring infrastructure.
* **Administration** lets you access your user account.

## Top banner

### Pollers section

![image](../assets/getting-started/banner_pollers.png)

The left part of the top banner shows the health of your platform in real time:

* whether all pollers are running or not: the icon becomes red when a poller has not sent data to the central server for at least 15 minutes
* whether checks are running late or not. If the icon is orange or red, this may mean that your pollers are monitoring too many resources.

Click the **pollers** icon to expand the menu. On the menu, click **Configure pollers** to access page **Configuration > Pollers > Pollers**.

### Hosts and services section (top counters)

![image](../assets/getting-started/top_counters.png)

To the right of the top banner, statistics show the number of resources that are being monitored, with a specific status:

* For hosts: number of hosts with a **Down**, **Unreachable** and **Up** status.
* For services: number of services with a **Critical**, **Warning**, **Unknown** and **OK** status.

These numbers include unconfirmed (SOFT) alerts, but do not include resources that are acknowledged or in downtime. Pending resources are shown by a blue dot on the **hosts** or **services** icons.

Click a circle representing a status:

* The **Monitoring > Resources status** page opens.
* The page is filtered according to the type of resource and the corresponding status.

Click the **hosts** or **services** icon to expand the menu and display the details of the hosts and services.

### Switch to dark mode

When you first connect to the interface, Centreon is displayed in light mode by default.

On the banner, click the profile icon and use the switch button to turn on dark mode.
The next time you connect to the interface, the mode you previously selected remains on.

- Light mode:

![image](../assets/getting-started/menu_light_mode.png)

- Dark mode:

![image](../assets/getting-started/menu_dark_mode.png)

### Change the user interface language

On the banner, click the profile icon, then click **Edit profile**:

![image](../assets/getting-started/menu_edit_profile.png)

In the **Language** list, choose your language.

Then click **Save**. Your interface is now translated.

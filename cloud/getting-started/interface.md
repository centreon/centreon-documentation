---
id: interface
title: Overview of the Centreon interface
---

## Accessing the central server's interface

When you first connect to Centreon Cloud, use the URL and credentials that the Centreon support team has provided to you. The connection URL looks like this: `https://<organization>.<region>.centreon.cloud`.

Fill in your user name and associated password and click on the **Connect** button:

![image](../assets/getting-started/aconnection.png)

You are now connected to the Centreon web interface.

## Menus

![image](../assets/getting-started/menus.png)

The Centreon web interface contains several menus, each with a specific function (click the Centreon logo at the top left of the screen to expand the menus):

![image](../assets/getting-started/expand_menu.png)

* **Home** shows [custom views](create-custom-view.md).
  Your workspace may be blank for now. Once you configure customizable widgets, you will see data and charts according
  to your customization.
* **Monitoring** provides a combined view of the statuses of all monitored items in real and delayed time using logs and
  performance graphics.
* **Reporting** provides an intuitive view (using diagrams) of the evolution of monitoring over a given time period.
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

Click on a circle representing a status:

* Page **Monitoring > Resources status** opens.
* The page is filtered according to the type of resource and the corresponding status.

Click the **hosts** or **services** icon to expand the menu and display the details of the hosts and services.

### Switch to dark mode

When you first connect to the interface, Centreon is displayed in light mode by default.

On the banner, click on the profile icon and use the switch button to turn on the dark mode.
Next time you connect to the interface, the mode you previously selected remains on.

- Light mode:

![image](../assets/getting-started/menu_light_mode.png)

- Dark mode:

![image](../assets/getting-started/menu_dark_mode.png)

You can also switch to dark mode by changing the theme in the account parameters.

Go to **Administration > Parameters > My Account** and select the **General Information** tab.
Select **Light** or **Dark** in the **Front-end Theme** field.

Then click on **Save**. The theme is now in the mode you have chosen.

### Change the user interface language

On the banner, click on the profile icon, then click on **Edit profile**:

![image](../assets/getting-started/menu_edit_profile.png)

In the **Language** list, choose your language.

Then click on **Save**. Your interface is now translated.

## Reset your password

### Reset your password before expiration

When your password is going to expire in the next 7 days, an orange dot appears in the banner on the right
next to the profile icon:

![image](../assets/administration/password_will_expire.png)

Click on **Edit profile**, then change your password:

![image](../assets/administration/password_expiration.png)

### Reset your password when expired

If you have not changed your password before it expires, you will be redirected after login
to a dedicated page where you can update it:

![image](../assets/administration/password_expired.png)

Fill in your current password, define a new one and then click on **Reset Password**.

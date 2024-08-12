---
id: notif-config-for-teams
title: Integrating Microsoft Teams notifications
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page explains how to integrate and configure notifications from Centreon to Microsoft Teams channels.

## Prerequisites

- To use the Teams notification plugin, you need to set up a Teams workflow using the Workflows app in Microsoft Teams. 
Go to this page to see how to [migrate your connectors to Workflows](https://devblogs.microsoft.com/microsoft365dev/retirement-of-office-365-connectors-within-microsoft-teams/).

- You need to configure your webhook with **MS Power Automate**.

 > To ensure an optimal integration, Microsoft recommends to use *Power Automate workflows as the solution to relay information into and out of Teams in a scalable, flexible, and secure way*.

## Configuring Microsoft Teams

To allow Centreon to send an alert in a Teams channel, you must configure an **Incoming Webhook** in your workspace.
 
 > The **Incoming Webhook** connector enables external services to notify you about activities that you want to track.

1. In your Teams workspace, click the **...** (three dots) button and search for **Incoming Webhook** in the search bar. It opens the Incoming Webhook configuration.

 You can also access it from the **...** (three dots) shortcut on the left of the interface.

2. Click **Add to a team** to associate your application with a team.

3. Select your team in the **Type a team or channel name** drop down list.

4. Click **Set up a connector**.

5. Give a name to your application. You can also customize it with an image associated with the data from this Incoming webhook.

6. Click **Create**. You will obtain a URL that you can easily copy/paste.

7. Store the URL carefully. You will need it when you go to the service that you want to send data to your group.

8. Click the **Done** button to validate.

You should receive a Teams notification confirming the configuration of the connector.

## Configuring Centreon

### Install the Microsoft Teams notification plugin

You need to Install the Teams notification plugin with the package manager on each poller expected to send notifications to a Teams channel.

- Enter the following command:
 
 <Tabs groupId="sync">
 <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">
 
 ``` shell
 dnf install centreon-plugin-Notification-Teams
 ```
 
 </TabItem>
 <TabItem value="CentOS 7" label="CentOS 7">
 
 ``` shell
 yum install centreon-plugin-Notification-Teams
 ```
 
 </TabItem>
 <TabItem value="Debian 11" label="Debian 11">
 
 ``` shell
 apt install centreon-plugin-Notification-Teams
 ```
 
 </TabItem>
 </Tabs>

### Set up your configuration objects using CLAPI

To benefit from the plugin's capabilities, you need to create the following Centreon objects:
- A **Notification Command** corresponding to all types  of resources (Hosts, Services, Business Activities). 
- A **Centreon Contact**, corresponding to a channel within Teams. It means that you'll need several Contacts if you need to notify several channels. 

1. To facilitate the creation of these objects, you can copy the following content from a CLAPI file, and paste it into a file on your Central server’s /tmp directory (for instance /tmp/clapi-teams.import).
 
 > **Warning:** Before loading the file, replace these values with yours:
 >
 > **<SET_CENTREON_URL>** with the URL you use to access Centreon web UI.
 > **<SET_TEAMSWEBHOOK_URL>** with the Teams Webhook URL obtained previously.
 
 ``` shell
 CMD;ADD;bam-notify-by-microsoft-teams;1;$CENTREONPLUGINS$/centreon_notification_teams.pl --plugin=notification::microsoft::office365::teams::plugin --mode=alert --custommode=webhookapi --teams-webhook='$CONTACTPAGER$' --bam --service-description='$SERVICEDISPLAYNAME$' --service-state='$SERVICESTATE$' --service-output='$SERVICEOUTPUT$' --date='$DATE$ $TIME$' --centreonurl='$CONTACTADDRESS1$'
CMD;setparam;bam-notify-by-microsoft-teams;enable_shell;0
CMD;setparam;bam-notify-by-microsoft-teams;command_activate;1
CMD;setparam;bam-notify-by-microsoft-teams;command_locked;0
CMD;ADD;host-notify-by-microsoft-teams;1;$CENTREONPLUGINS$/centreon_notification_teams.pl --plugin=notification::microsoft::office365::teams::plugin --mode=alert --custommode=webhookapi --teams-webhook='$CONTACTPAGER$' --notification-type='$NOTIFICATIONTYPE$' --host-name='$HOSTNAME$' --host-state='$HOSTSTATE$' --host-output='$HOSTOUTPUT$' --date='$DATE$ $TIME$' --action-links --centreon-url='$CONTACTADDRESS1$' --extra-info='$NOTIFICATIONAUTHOR$//$NOTIFICATIONCOMMENT$'
CMD;setparam;host-notify-by-microsoft-teams;enable_shell;0
CMD;setparam;host-notify-by-microsoft-teams;command_activate;1
CMD;setparam;host-notify-by-microsoft-teams;command_locked;0
CMD;ADD;host-notify-by-microsoft-teams;1;
CMD;ADD;service-notify-by-microsoft-teams;1;$CENTREONPLUGINS$/centreon_notification_teams.pl --plugin=notification::microsoft::office365::teams::plugin --mode=alert --custommode=webhookapi --teams-webhook='$CONTACTPAGER$' --notification-type='$NOTIFICATIONTYPE$' --host-name='$HOSTNAME$' --service-description='$SERVICEDESC$' --service-state='$SERVICESTATE$' --service-output='$SERVICEOUTPUT$' --date='$DATE$ $TIME$' --action-links --centreon-url='$CONTACTADDRESS1$' --extra-info='$NOTIFICATIONAUTHOR$//$NOTIFICATIONCOMMENT$'
CMD;setparam;service-notify-by-microsoft-teams;enable_shell;0
CMD;setparam;service-notify-by-microsoft-teams;command_activate;1
CMD;setparam;service-notify-by-microsoft-teams;command_locked;0
CONTACT;ADD;Microsoft-Teams-Consulting-Channel;notify_teams_consulting_channel;node@deadend;md5__2995dea107230ea9a8c4d6e5;0;0;browser;local
CONTACT;setparam;notify_teams_consulting_channel;hostnotifperiod;24x7
CONTACT;setparam;notify_teams_consulting_channel;svcnotifperiod;24x7
CONTACT;setparam;notify_teams_consulting_channel;hostnotifopt;d,u
CONTACT;setparam;notify_teams_consulting_channel;servicenotifopt;w,u,c
CONTACT;setparam;notify_teams_consulting_channel;contact_pager;<SET_TEAMSWEBHOOK_URL>
CONTACT;setparam;notify_teams_consulting_channel;contact_address1;<SET_CENTREON_URL>
CONTACT;setparam;notify_teams_consulting_channel;contact_js_effects;0
CONTACT;setparam;notify_teams_consulting_channel;reach_api;0
CONTACT;setparam;notify_teams_consulting_channel;reach_api_rt;0
CONTACT;setparam;notify_teams_consulting_channel;contact_enable_notifications;1
CONTACT;setparam;notify_teams_consulting_channel;contact_activate;1
CONTACT;setparam;notify_teams_consulting_channel;show_deprecated_pages;0
CONTACT;setparam;notify_teams_consulting_channel;contact_ldap_last_sync;0
CONTACT;setparam;notify_teams_consulting_channel;contact_ldap_required_sync;0
CONTACT;setparam;notify_teams_consulting_channel;hostnotifcmd;host-notify-by-microsoft-teams
CONTACT;setparam;notify_teams_consulting_channel;svcnotifcmd;service-notify-by-microsoft-teams
 ```

2. If your Teams webhook URL is longer than 200 characters, extend the size of the **contact_pager** row in the Centreon configuration database, using the following query:
 ``` shell
 ALTER TABLE centreon.contact MODIFY contact_pager VARCHAR(255);
 ```

3. Use your Centreon credentials and CLAPI to load the file:
 ``` shell
 centreon -u ‘<adminuser>’ -p ‘<password>’ -i /tmp/clapi-teams.import
 ```

If the import is successful, you will obtain something similar to **[ajouter un exemple de comparaison]**

> Depending on what you want to do, you can assign this Contact to a Group or link it with one or several resources and get notifications in your channel.

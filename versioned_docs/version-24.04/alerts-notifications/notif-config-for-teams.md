---
id: notif-config-for-teams
title: Microsoft Teams notifications
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page explains how to integrate and configure notifications from Centreon to Microsoft Teams channels.

## Prerequisites

- To use the Teams notification plugin, you need to set up a Teams workflow using the Workflows app in Microsoft Teams. 
Go to this page to see how to [migrate your connectors to Workflows](https://devblogs.microsoft.com/microsoft365dev/retirement-of-office-365-connectors-within-microsoft-teams/).

- You need to configure your workflow with **MS Power Automate**.

 > To ensure an optimal integration, Microsoft recommends to use *Power Automate workflows as the solution to relay information into and out of Teams in a scalable, flexible, and secure way*.

## Configuring Microsoft Teams

Follow this Microsoft procedure that explains how to [Post a workflow when a webhook request is received in Microsoft Teams](https://support.microsoft.com/en-us/office/post-a-workflow-when-a-webhook-request-is-received-in-microsoft-teams-8ae491c7-0394-4861-ba59-055e33f75498#:~:text=You%20can%20post%20to%20a,a%20webhook%20request%20is%20received.&text=next%20to%20the%20channel%20or,that%20best%20suits%20your%20needs). It will allow Centreon to send an alert in a Teams channel.

> You will obtain a URL that you can easily copy/paste. Store the URL carefully. You will need it when you go to the service that you want to send data to your group.

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
 <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">
 
 ``` shell
 dnf install centreon-plugin-Notification-Teams
 ```
 
 </TabItem>
 <TabItem value="Debian 11 & 12" label="Debian 11 & 12">
 
 ``` shell
 apt install centreon-plugin-notification-teams
 ```
 
 </TabItem>
 </Tabs>

### Set up your configuration objects using CLAPI

To benefit from the plugin's capabilities, you need to create the following Centreon objects:
- A **Notification Command** corresponding to all types  of resources (Hosts, Services, Business Activities). 
- A **Centreon Contact**, corresponding to a channel within Teams. It means that you'll need several Contacts if you need to notify several channels. 

1. To facilitate the creation of these objects, you can copy the following content from a CLAPI file, and paste it into a file on your Central server’s /tmp directory (for instance /tmp/clapi-teams.import).
 
 > Before loading the file, replace these values with yours:
   - **\<SET_CENTREON_URL\>** with the URL you use to access Centreon web UI.
   - **\<SET_TEAMSWORKFLOW_URL\>** with the Teams workflow URL obtained previously.
   - **\<SET_CONTACT_PASSWORD\>** with the password you want for the new contact.
 
 ``` shell
 CMD;ADD;bam-notify-by-microsoft-teams;1;$CENTREONPLUGINS$/centreon_notification_teams.pl --plugin=notification::microsoft::office365::teams::plugin --mode=alert --custommode=workflowapi --teams-workflow='$CONTACTPAGER$' --bam --service-description='$SERVICEDISPLAYNAME$' --service-state='$SERVICESTATE$' --service-output='$SERVICEOUTPUT$' --date='$DATE$ $TIME$' --centreonurl='$CONTACTADDRESS1$'
CMD;setparam;bam-notify-by-microsoft-teams;enable_shell;0
CMD;setparam;bam-notify-by-microsoft-teams;command_activate;1
CMD;setparam;bam-notify-by-microsoft-teams;command_locked;0
CMD;ADD;host-notify-by-microsoft-teams;1;$CENTREONPLUGINS$/centreon_notification_teams.pl --plugin=notification::microsoft::office365::teams::plugin --mode=alert --custommode=workflowapi --teams-workflow='$CONTACTPAGER$' --notification-type='$NOTIFICATIONTYPE$' --host-name='$HOSTNAME$' --host-state='$HOSTSTATE$' --host-output='$HOSTOUTPUT$' --date='$DATE$ $TIME$' --action-links --centreon-url='$CONTACTADDRESS1$' --extra-info='$NOTIFICATIONAUTHOR$//$NOTIFICATIONCOMMENT$'
CMD;setparam;host-notify-by-microsoft-teams;enable_shell;0
CMD;setparam;host-notify-by-microsoft-teams;command_activate;1
CMD;setparam;host-notify-by-microsoft-teams;command_locked;0
CMD;ADD;host-notify-by-microsoft-teams;1;
CMD;ADD;service-notify-by-microsoft-teams;1;$CENTREONPLUGINS$/centreon_notification_teams.pl --plugin=notification::microsoft::office365::teams::plugin --mode=alert --custommode=workflowapi --teams-workflow='$CONTACTPAGER$' --notification-type='$NOTIFICATIONTYPE$' --host-name='$HOSTNAME$' --service-description='$SERVICEDESC$' --service-state='$SERVICESTATE$' --service-output='$SERVICEOUTPUT$' --date='$DATE$ $TIME$' --action-links --centreon-url='$CONTACTADDRESS1$' --extra-info='$NOTIFICATIONAUTHOR$//$NOTIFICATIONCOMMENT$'
CMD;setparam;service-notify-by-microsoft-teams;enable_shell;0
CMD;setparam;service-notify-by-microsoft-teams;command_activate;1
CMD;setparam;service-notify-by-microsoft-teams;command_locked;0
CONTACT;ADD;Microsoft-Teams-Consulting-Channel;notify_teams_consulting_channel;node@deadend;<SET_CONTACT_PASSWORD>;0;0;browser;local
CONTACT;setparam;notify_teams_consulting_channel;hostnotifperiod;24x7
CONTACT;setparam;notify_teams_consulting_channel;svcnotifperiod;24x7
CONTACT;setparam;notify_teams_consulting_channel;hostnotifopt;d,u
CONTACT;setparam;notify_teams_consulting_channel;servicenotifopt;w,u,c
CONTACT;setparam;notify_teams_consulting_channel;contact_pager;<SET_TEAMSWORKFLOW_URL>
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

2. If your Teams workflow URL is longer than 200 characters, extend the size of the **contact_pager** row in the Centreon configuration database, using the following query:
 ``` shell
 ALTER TABLE centreon.contact MODIFY contact_pager VARCHAR(255);
 ```

3. Use your Centreon credentials and CLAPI to load the file:
 ``` shell
 centreon -u ‘<adminuser>’ -p ‘<password>’ -i /tmp/clapi-teams.import
 ```

4. The file will create the **Microsoft-Teams-Consulting-Channel** contact. Use this contact at the [Configuring notifications](../alerts-notifications/notif-configuration.md) step so that you can receive notifications in your Teams channel.

---
id: notif-advanced
title: To go further
---

## Commands

The notification is based on a command which will be executed by the scheduler when the notification is issued. This
command is attached to each contact to be notified. Centreon has default commands that you can modify.

Go to the [configuration commands chapter](../monitoring/commands.html#definition) to edit / add new notification commands.

> You can also find in the [Centreon plugins](https://github.com/centreon/centreon-plugins/tree/master/notification) to
> send preformated HTML email, etc. You must install the plugin on all pollers, add a command to use this plugin and
> change the command of your contacts.

## Chatops

A [Centreon-Chatops](https://github.com/centreon/centreon-chatops) community project has been develop to allows
communication between a Team chat like Mattermost or Slack and Centreon throught slash command

## Stream connector

You can also forward event to a third party application using the **Centreon Stream Connector** functionality.
See the **Intregration / Stream-Connectors** chapter.

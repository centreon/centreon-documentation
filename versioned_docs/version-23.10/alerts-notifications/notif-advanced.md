---
id: notif-advanced
title: To go further
---

## Commands

The notification is based on a command that will be executed by the scheduler
when the notification is issued. This command is attached to each contact to be
notified. Centreon has default commands that you can modify.

Go to the [configuration commands
chapter](../monitoring/basic-objects/commands.md#definition) to edit / add new notification
commands.

> Some plugins [available here](https://github.com/centreon/centreon-plugins/tree/master/src/notification) allow you to send preformated HTML or emails.
> You have to install the plugin on your pollers, create a new notification command based on this plugin and bind this command to the contacts you want to be notified by this plugin.

## Chatops

A [Centreon-Chatops](https://github.com/centreon/centreon-chatops) community
project has been developed to allow communication in a Team chat like
Mattermost or Slack and Centreon through slash commands

## Stream connector

You can also forward events to a third-party application using the **Centreon
Stream Connector** feature.

See the **Integration / Stream-Connectors** chapter.

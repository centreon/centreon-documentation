---
id: notif-email
title: Email notifications
description: "Send Centreon notifications by email: set up notifications for your resources and configure a local SMTP server such as Postfix on each poller."
---

The standard way notifications are sent in Centreon is by email. Follow the [Configuring notifications](./notif-configuration.md) procedure to set these up.

Bear in mind that for your Centreon to be able to send notification emails, you need to configure a local SMTP server, e.g. [Postfix](../administration/postfix.md). Notifications are sent by the poller that monitors the resource, which means you need to have an SMTP server on every poller that will send notifications.

---
id: ot-mail
title: Mail
description: "Comment configurer le fournisseur de tickets Mail, qui s'appuie sur un serveur SMTP pour envoyer vos incidents par e-mail, avec une commande de test"
---

The Mail Open Tickets provider uses the SMTP server to open incidents about your monitoring alerts.

## Feature information

| Open ticket | Close ticket (from email) | Handle custom fields |
| -- | -- | -- |
| ✓ | ✘ | ✘ |

## Prerequisites

### Network flow

| Source | Destination | Protocol/Port |
| -- | -- | -- |
| Centreon central server | SMTP server | TCP/25 (smtp) |

### Mail info

You need the following information:

- the receiver email address

## Test commands

```bash
echo "This is a test" | s-nail -r "<from_address>" -s "this is a test ticket"  <to_address>
```

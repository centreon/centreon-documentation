---
id: ot-mail
title: Mail
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

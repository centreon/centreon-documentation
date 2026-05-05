---
id: mail
title: Mail
---

## Features information

| open ticket | close ticket (from email) | Handle custom fields |
| -- | -- | -- |
| ✓ | ✘ | ✘ |

## Prerequisites

### Network Flow

| Source | Destination | Protocol/Port |
| -- | -- | -- |
| Centreon central server | SMTP server | TCP/25 (smtp) |

### Mail info

You need the following information

- the receiver email address

Some test commands that you can run from your Centreon central server are available in the [Test commands chapter](#test-commands)

## Test commands

```bash
echo "Believe it or not, but it is just a test" | s-nail -r "<from_address>" -s "this is a test ticket"  <to_address>
```

---
id: request-tracker-2
title: Request Tracker 2
---

## Features information

| open ticket | close ticket (from Centreon to Request Tracker) | Handle custom fields |
| -- | -- | -- |
| ✓ | ✘ | ✓ |

## Prerequisites

### Network Flow

| Source | Destination | Protocol/Port |
| -- | -- | -- |
| Centreon central server | Request Tracker | TCP/443 (https) or TCP/80 (http) |

### Account

You need the following information

- Address
- Token

The aformentioned account must be able to at least be able to open a ticket through the **/ticket API endpoint**.

The connector will also try to access the following API endpoints depending on the configuration of your open ticket rule.

- /queues/all
- /customfields
- /customfield

Some test commands that you can run from your Centreon central server are available in the [Test commands chapter](#test-commands)

## Retrieved data

This open ticket connector can retrieve the following information from your Glpi server

- Custom fields
- Queues

If you need more information regarding retrieved data from an open ticket connector, please read the [retrieved data chapter](../mapping.md) from the Open Ticket module global documentation.

## Additionnal data

This open ticket connector can also send the following information when opening a ticket

- Requestor
- Cc

Those information are not retrieved from Request Tracker. They are configured in your open ticket rule as [custom lists](../mapping.md#custom-list-definition)

## Test commands

The Curl commands listed below must be run from your central server. You need to replace everything between `<>` for example `<rt_address>` may be replaced with **my_rt.local**

### Get queues

```bash
curl 'https://<rt_address>/REST/2.0/queues/all?fields=id,Name&per_page=100&page=1' \
--header 'Content-Type: application/json' \
--header 'Authorization: token <token>' \
```

### Get custom fields

list custom fields based on the filter

```bash
curl 'https://<rt_address>/REST/2.0/customfields?fields=Name' \
--header 'Content-Type: application/json' \
--header 'Authorization: token <token>' \
--data '[{"field": "Name","operator":"LIKE","value":"<filter_value>"}]'
```

get custom field info from previous result

```bash
curl 'https://<rt_address>/REST/2.0/customfield/<customfield_id>' \
--header 'Content-Type: application/json' \
--header 'Authorization: token <token>'
```

### Open a ticket

Keep in mind that the data in the command down below is just an example and your Glpi server may ask you to add mandatory data

```bash
curl --location 'https://<rt_address>/REST/2.0//Ticket' \
--header 'Content-Type: application/json' \
--header 'Authorization: token <token>' \
--data '{
  "Queue": "queue_name",
  "Subject":"this is a test ticket",
  "Content":"Believe it or not, but it is just a test"
}'
```

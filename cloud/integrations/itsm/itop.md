---
id: itop
title: Itop
---

## Features information

| open ticket | close ticket (from Centreon to Itop) | Handle custom fields |
| -- | -- | -- |
| ✓ | ✓ | ✘ |

## Prerequisites

### Network Flow

| Source | Destination | Protocol/Port |
| -- | -- | -- |
| Centreon central server | Itop | TCP/443 (https) or TCP/80 (http) |

### Account

You need the following information

- Itop Address (also known as app token)
- Username
- Password

The aforementioned account must at least be able to open a ticket using through the **API operation core/create** using the **UserRequest class**.

The connector will also try to access the following classes using the **core/get opration** depending on the configuration of your open ticket rule.

- Person
- Organization
- Service
- ServiceSubcategory

It will also use the **core/update operation** when closing a ticket from Centreon.

Some test commands that you can run from your Centreon central server are available in the [Test commands chapter](#test-commands)

## Retrieved data

This open ticket connector can retrieve the following information from your Itop server

- Caller (Person)
- Organization
- Service
- ServiceSubcategory

If you need more information regarding retrieved data from an open ticket connector, please read the [retrieved data chapter](../../alerts-notifications/ticketing/mapping.md) from the Open Ticket module global documentation.

## Additionnal data

This open ticket connector can also send the following information when opening a ticket

- Urgency
- Impact
- Origin

Those information are not retrieved from Glpi. They are configured in your open ticket rule as [custom lists](../../alerts-notifications/ticketing/mapping.md#custom-list-definition)

## Test commands

The Curl commands listed below must be run from your central server. You need to replace everything between `<>` for example `<glpi_address>` may be replaced with **my_glpi.local**

### Get Itop organizations

```bash
curl --location 'https://<itop_address>/webservice/rest.php?version=<api_version>' \
--data 'auth_user=<username>&auth_pwd=<password>&json_data={"operation":"core/get","class":"Organization","key":"SELECT Organization WHERE status=\'active\'","output_fields":"name"}'
```

### Get Itop callers (persons)

```bash
curl --location 'https://<itop_address>/webservice/rest.php?version=<api_version>' \
--data 'auth_user=<username>&auth_pwd=<password>&json_data={"operation":"core/get","class":"Person","key":"SELECT Person WHERE status=\'active\' AND org_id = <org_id>","output_fields":"friendlyname"}'
```

### Get Itop services

```bash
curl --location 'https://<itop_address>/webservice/rest.php?version=<api_version>' \
--data 'auth_user=<username>&auth_pwd=<password>&json_data={"operation":"core/get","class":"Service","key":"SELECT Service WHERE org_id = <org_id>","output_fields":"friendlyname"}'
```

### Get Itop services subcategories

```bash
curl --location 'https://<itop_address>/webservice/rest.php?version=<api_version>' \
--data 'auth_user=<username>&auth_pwd=<password>&json_data={"operation":"core/get","class":"Service","key":"SELECT ServiceSubcategory WHERE service_id = <service_id>","output_fields":"friendlyname"}'
```

### Open a ticket

Keep in mind that the data in the command down below is just an example and your Glpi server may ask you to add mandatory data

```bash
curl --location 'https://<itop_address>/webservice/rest.php?version=<api_version>' \
--data 'auth_user=<username>&auth_pwd=<password>&json_data={"operation":"core/create","class":"UserRequest","output_fields":"id","comment":"Opened from Centreon","fields":{"description":"Believe it or not, but it is just a test","title":"this is a test ticket"}}'
```

### Close a ticket

```bash
curl --location 'https://<itop_address>/webservice/rest.php?version=<api_version>' \
--data 'auth_user=<username>&auth_pwd=<password>&json_data={"operation":"core/update","class":"UserRequest","comment":"Closing ticket from Centreon","key":"<ticket_id>","fields":{"status":"closed"}}'
```

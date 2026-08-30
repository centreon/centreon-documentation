---
id: itop
title: Itop
---

## Feature information

| Open ticket | Close ticket (from Centreon to iTop) | Handle custom fields |
| -- | -- | -- |
| ✓ | ✓ | ✘ |

## Prerequisites

### Network Flow

| Source | Destination | Protocol/Port |
| -- | -- | -- |
| Centreon central server | iTop | TCP/443 (https) or TCP/80 (http) |

### Account

You need the following information:

- iTop Address (also known as app token)
- Username
- Password

The aforementioned account must at least be able to open a ticket using the **UserRequest class** through the **API operation core/create**.

The connector will also try to access the following classes using the **core/get opration** depending on the configuration of your open ticket rule:

- Person
- Organization
- Service
- ServiceSubcategory

It will also use the **core/update operation** when closing a ticket from Centreon.

Some test commands that you can run from your Centreon central server are available in the [Test commands](#test-commands) section.

## Retrieved data

This open ticket connector can retrieve the following information from your iTop server:

- Caller (Person)
- Organization
- Service
- ServiceSubcategory

If you need more information regarding retrieved data from an open ticket connector, please read the [retrieved data chapter](../../alerts-notifications/ticketing/mapping.md) from the Open Ticket global documentation.

## Additionnal data

This open ticket connector can also send the following information when opening a ticket:

- Urgency
- Impact
- Origin

Those information are not retrieved from iTop. They are configured in your open ticket rule as [custom lists](../../alerts-notifications/ticketing/mapping.md#custom-list-definition)

## Test commands

The curl commands listed below must be run from your central server. You need to replace all elements between `<>` for example `<itop_address>` may be replaced with `my_itop.local`.

### Get iTop organizations

```bash
curl --location 'https://<itop_address>/webservice/rest.php?version=<api_version>' \
--data 'auth_user=<username>&auth_pwd=<password>&json_data={"operation":"core/get","class":"Organization","key":"SELECT Organization WHERE status=\'active\'","output_fields":"name"}'
```

### Get iTop callers (persons)

```bash
curl --location 'https://<itop_address>/webservice/rest.php?version=<api_version>' \
--data 'auth_user=<username>&auth_pwd=<password>&json_data={"operation":"core/get","class":"Person","key":"SELECT Person WHERE status=\'active\' AND org_id = <org_id>","output_fields":"friendlyname"}'
```

### Get iTop services

```bash
curl --location 'https://<itop_address>/webservice/rest.php?version=<api_version>' \
--data 'auth_user=<username>&auth_pwd=<password>&json_data={"operation":"core/get","class":"Service","key":"SELECT Service WHERE org_id = <org_id>","output_fields":"friendlyname"}'
```

### Get iTop service subcategories

```bash
curl --location 'https://<itop_address>/webservice/rest.php?version=<api_version>' \
--data 'auth_user=<username>&auth_pwd=<password>&json_data={"operation":"core/get","class":"Service","key":"SELECT ServiceSubcategory WHERE service_id = <service_id>","output_fields":"friendlyname"}'
```

### Open a ticket

Keep in mind that the data in the command below is just an example and your iTop server may ask you to add mandatory data.

```bash
curl --location 'https://<itop_address>/webservice/rest.php?version=<api_version>' \
--data 'auth_user=<username>&auth_pwd=<password>&json_data={"operation":"core/create","class":"UserRequest","output_fields":"id","comment":"Opened from Centreon","fields":{"description":"This is a test","title":"this is a test ticket"}}'
```

### Close a ticket

```bash
curl --location 'https://<itop_address>/webservice/rest.php?version=<api_version>' \
--data 'auth_user=<username>&auth_pwd=<password>&json_data={"operation":"core/update","class":"UserRequest","comment":"Closing ticket from Centreon","key":"<ticket_id>","fields":{"status":"closed"}}'
```

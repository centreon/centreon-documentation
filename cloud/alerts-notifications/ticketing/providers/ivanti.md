---
id: ivanti
title: Ivanti
---

## Features information

| open ticket | close ticket (from Centreon to Service Now) | Handle custom fields |
| -- | -- | -- |
| ✓ | ✓ | ✓ |

## Prerequisites

### Network Flow

| Source | Destination | Protocol/Port |
| -- | -- | -- |
| Centreon central server | Ivanti | TCP/443 (https) or TCP/80 (http) |

### Account

You need the following information

- REST API key

The aforementioned account must at least be able to open a ticket through the **/incidents endpoint from the /HEAT/api/odata/businessobject API**.

The connector will also try to access the following API endpoints depending on the configuration of your open ticket rule.

- /Categorys
- /Employees
- /standarduserteams

Some test commands that you can run from your Centreon central server are available in the [Test commands chapter](#test-commands)

## Retrieved data

This open ticket connector can retrieve the following information from your Ivanti server

- Categories
- Users
- Teams

If you need more information regarding retrieved data from an open ticket connector, please read the [retrieved data chapter](../mapping.md) from the Open Ticket module global documentation.

## Additionnal data

This open ticket connector can also send the following information when opening a ticket

- Urgency
- Impact
- Service
- Source
- Profile Link
- Alternate Contact Link

Those information are not retrieved from Glpi. They are configured in your open ticket rule as [custom lists](../mapping.md#custom-list-definition)

## Ivanti Custom fields

With the Ivanti connector, you can send fields that are not handled by the connector by default. Values for said fields need to be configured in your Open Ticket rule. This requires specific actions and syntax. This chapter is going to guide you through this configuration.

### Add a custom field in the provider configuration

- Add a new **Mapping ticket arguments** with the **+ Add a new entry** button.
  - In the **Argument** field, select **Ivanti Custom Field**
  - In the **Value** field, write `{$select._cf_<your_field_name>.value}` where `<your_field_name>` must be replaced with the name of your custom field in Ivanti. For exemple, a **city** custom field could become **\{$select._cf_city.value\}**

- Add a new **List** for your custom field with the **+Add a new entry** button.
  - In the **Id** field you **must** keep the same syntax than before. So for a **_cf_city** custom field, the Id will be **_cf_city**.
  - In the **Label** field, feel free to be creative. It is up to you to find a meaningful label.
  - In the **Type** field, select **Custom**
  - The **Filters**, **Mandatory** and **Sort** parameters are optionals.

- Add a new **Custom list definitions** for your custom field with the **+Add a new entry** button. This is where you set up the possible values for your fields.
  - In the **Id** field you **must** keep the same syntax than before. So for a **_cf_city** custom field, the Id will be **_cf_city**
  - In the **Value** field, you usually put the value that will be sent to Ivanti. For a city field it can its Zip Code for example.
  - In the **Label** field, put a value that is meaningful for your users (or more human-readable if the value is some kind of internal id not meant for end users). Therefore, in our example, it is going to be name of the city
  - The **Default** parameter is optional

## Test commands

The Curl commands listed below must be run from your central server. You need to replace everything between `<>` for example `<ivanti_address>` may be replaced with **my_ivanti.local**

If you are using the user/password authentication, replace the `--header 'Authorization: Bearer <token>'` part by `-u '<user>:<password>'`

### Open a ticket

```bash
curl -X POST 'https://<ivanti_address>/HEAT/api/odata/businessobject/incidents' \
--header 'Content-Type: application/json' \
--header 'Authorization: rest_api_key=<REST_API_KEY>' \
--data '{"Symptom":"can not find my homework","Subject":"My dog ate my homework","Status":"Logged"}'
```

### Close a ticket

```bash
curl -X PATCH 'https://<ivanti_address>/HEAT/api/odata/businessobject/incidents(<ticket_id>)' \
--header 'Content-Type: application/json' \
--header 'Authorization: rest_api_key=<REST_API_KEY>' \
--data '{"Status":"Closed"}'
```

### Get Ivanti categories

```bash
curl -X GET 'https://<ivanti_address>/HEAT/api/odata/businessobject/Categorys' \
--header 'Content-Type: application/json' \
--header 'Authorization: rest_api_key=<REST_API_KEY>'
```

### Get Ivanti users

```bash
curl -X GET 'https://<ivanti_address>/HEAT/api/odata/businessobject/Employees' \
--header 'Content-Type: application/json' \
--header 'Authorization: rest_api_key=<REST_API_KEY>'
```

### Get Ivanti teams

```bash
curl -X GET 'https://<ivanti_address>/HEAT/api/odata/businessobject/standarduserteams' \
--header 'Content-Type: application/json' \
--header 'Authorization: rest_api_key=<REST_API_KEY>'
```

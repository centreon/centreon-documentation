---
id: ot-matrix42
title: Matrix42
---

The Matrix42 Open Tickets provider uses the Matrix42 Enterprise REST API to open (and close) incidents or
service requests about your monitoring alerts. It can also fetch users, responsible roles (groups), services,
assets and categories directly from your Matrix42 instance so that you don't have to maintain them by hand as
custom lists.

## Features information

| Open ticket | Close ticket (from Centreon to Matrix42) | Handle custom fields |
| -- | -- | -- |
| ✓ | ✓ | ✘ |

## Requirements

### Network flow

| Source | Destination | Protocol/Port |
| -- | -- | -- |
| Centreon central server | Matrix42 instance | TCP/443 (https) or TCP/80 (http) |

### Account

You need the following information:

- Address of your Matrix42 instance
- An **API Token**

The aforementioned API Token must at least be able to open a ticket through the **Ticket API**
(`POST /m42Services/api/ticket/Create`).

The connector will also try to access the following API endpoints depending on the configuration of your
open ticket rule:

- `/ApiToken/GenerateAccessTokenFromApiToken/`, to exchange the configured API Token for a short-lived
  access token used to authenticate every other call
- `/ticket/close`, to close a ticket back from Centreon
- `/data/fragments/{ddname}`, to list users, responsible roles (groups), services, assets and categories

Some test commands that you can run from your Centreon central server are available in the
[Test commands](#test-commands) section.

## Retrieved data

This open ticket connector can retrieve the following information from your Matrix42 instance, through the
Matrix42 **Fragments Data Service** API:

- Users
- Responsible roles (groups)
- Services
- Assets
- Categories

Each of these is read from a Matrix42 "Data Definition" (its technical object name). Centreon ships with the
following defaults:

| List | Default data definition name |
| -- | -- |
| Users | `SPSUserClassBase` |
| Responsible roles (groups) | `SPSScRoleClassBase` |
| Assets | `SPSComputerClassBase` |
| Categories | `SPSScCategoryClassBase` |
| Services | `SPSArticleClassBase` |

> If you need more information regarding retrieved data from an open ticket connector, please read the
> [retrieved data chapter](../../alerts-notifications/ticketing/mapping.md) from the Open Ticket global
> documentation.

### Filters

You can filter data retrieved from Matrix42 using their A-SQL syntax in the Filter field. For more information, head over Matrix42's documentation.

## Additional data

This open ticket connector can also send the following information when opening a ticket:

- Priority
- Impact
- Urgency

## Test commands

The curl commands listed below must be run from your central server. You need to replace everything between
`<>`. For example `<matrix42_address>` may be replaced with `mycompany.matrix42.cloud`.

### Get an access token

Matrix42 API Tokens can't be used directly: they must first be exchanged for a short-lived access token,
which is the token actually sent as a bearer token on every other call.

```bash
curl --location 'https://<matrix42_address>/m42Services/api/ApiToken/GenerateAccessTokenFromApiToken/' \
--header 'Content-Type: application/json;charset=UTF-8' \
--header 'Authorization: Bearer <api_token>' \
--data '{}'
```

### Get Matrix42 users

```bash
curl --location 'https://<matrix42_address>/m42Services/api/data/fragments/SPSUserClassBase?columns=ID' \
--header 'Authorization: Bearer <access_token>' \
--header 'Content-Type: application/json;charset=UTF-8'
```

### Get Matrix42 responsible roles (groups)

```bash
curl --location 'https://<matrix42_address>/m42Services/api/data/fragments/SPSScRoleClassBase?columns=ID' \
--header 'Authorization: Bearer <access_token>' \
--header 'Content-Type: application/json;charset=UTF-8'
```

### Get Matrix42 services

```bash
curl --location 'https://<matrix42_address>/m42Services/api/data/fragments/SPSArticleClassBase?columns=ID' \
--header 'Authorization: Bearer <access_token>' \
--header 'Content-Type: application/json;charset=UTF-8'
```

### Get Matrix42 assets

```bash
curl --location 'https://<matrix42_address>/m42Services/api/data/fragments/SPSComputerClassBase?columns=ID' \
--header 'Authorization: Bearer <access_token>' \
--header 'Content-Type: application/json;charset=UTF-8'
```

### Get Matrix42 categories

```bash
curl --location 'https://<matrix42_address>/m42Services/api/data/fragments/SPSScCategoryClassBase?columns=ID' \
--header 'Authorization: Bearer <access_token>' \
--header 'Content-Type: application/json;charset=UTF-8'
```

### Open a ticket

Keep in mind that the data in the command below is just an example: `Priority`, `Impact`, `Urgency`,
`User`, `ResponsibleUser`, `ResponsibleRole`, `Service`, `Asset` and `Category` are all optional, and
`User`/`ResponsibleUser`/`ResponsibleRole`/`Service`/`Asset`/`Category` expect the id (guid) of the
corresponding Matrix42 object.

```bash
curl --location 'https://<matrix42_address>/m42Services/api/ticket/Create?activityType=<activity_type_id>' \
--header 'Content-Type: application/json;charset=UTF-8' \
--header 'Authorization: Bearer <access_token>' \
--data '{
    "Subject": "This a test ticket",
    "DescriptionHTML": "Believe it or not, but it is just a test.",
    "Priority": 2
}'
```

### Close a ticket

```bash
curl --location 'https://<matrix42_address>/m42Services/api/ticket/close' \
--header 'Content-Type: application/json;charset=UTF-8' \
--header 'Authorization: Bearer <access_token>' \
--data '{
    "ObjectIds": ["<ticket_id>"],
    "Comments": "<p>Closed from Centreon</p>"
}'
```

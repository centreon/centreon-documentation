---
id: rest-api-v1
title: Rest API (v1)
---

:::warning
This is the legacy v1 API. New integrations should use the [v2 REST API](rest-api-v2.md), which is OpenAPI-based and follows standard REST conventions. The v1 API is maintained for backward compatibility only.
:::

## Overview

The Centreon REST API v1 provides programmatic access to Centreon's monitoring configuration and realtime data. It exposes two main areas:

- **[Configuration API](#configuration-api)**: Create, read, update, and delete monitoring objects (hosts, services, contacts, templates, ACLs, etc.)
- **[Realtime API](#realtime-api)**: Query live monitoring status for hosts, services, Business Activities, and KPIs

### Data model

The main objects and their relationships:

| Object | Description | Key relationships |
|--------|-------------|-------------------|
| Host | A monitored device or server | Belongs to HostGroups, uses HostTemplates, checked by an Instance (Poller) |
| Service | A check performed on a host | Belongs to a Host, can use ServiceTemplates |
| HostTemplate (HTPL) | Reusable host configuration | Applied to Hosts |
| ServiceTemplate (STPL) | Reusable service configuration | Applied to Services |
| HostGroup (HG) | Logical grouping of hosts | Contains Hosts |
| ServiceGroup (SG) | Logical grouping of services | Contains Services |
| Contact | A user who receives notifications | Belongs to ContactGroups, linked to Hosts/Services |
| ContactGroup (CG) | A group of contacts | Linked to Hosts/Services for notifications |
| Instance | A monitoring poller | Executes checks on Hosts |
| ACL | Access control definitions | Controls what users can see and do |
| TimePeriod | Time-based schedule | Used in check and notification periods |
| Command (CMD) | A plugin command | Used as check command or event handler |
| Trap | SNMP trap definition | Associated with Services |
| Downtime | Scheduled maintenance window | Applied to Hosts, Services, or Groups |

### How the Configuration API works

All configuration calls use a single endpoint and pass the operation details in the JSON body:

- **`action`**: The operation to perform (e.g. `show`, `add`, `del`, `setparam`)
- **`object`**: The object type to operate on (e.g. `host`, `service`, `contact`)
- **`values`**: A semicolon-separated string of parameters (see [Values format](#values-format))

The key difference between `add` and `set` actions: **`add`** appends without overwriting existing configuration; **`set`** overwrites the existing configuration first.

### Values format

The `values` field is a semicolon-separated string of parameters in a fixed positional order. When a field accepts multiple values (e.g. multiple host groups), separate them with a pipe (`|`):

```
"values": "object-name;param1;param2"           // positional fields
"values": "object-name;value1|value2|value3"    // multiple values for one field
```

If you need to pass no values (e.g. for `show`), omit the `values` key entirely.

---

## Authentication

Obtain a token before making any API call. Tokens remain valid for the duration of the server-side session. There is no dedicated logout endpoint; invalidating the session via the Centreon web interface will also invalidate the token.

**Endpoint:** `POST api.domain.tld/centreon/api/index.php?action=authenticate`

**Body (form-data):**

| Parameter | Type   | Description            |
|-----------|--------|------------------------|
| username  | string | Your Centreon username |
| password  | string | Your Centreon password |

**Response:**

```json
{
    "authToken": "NTc1MDU3MGE3M2JiODIuMjA4OTA2OTc="
}
```

Use this token in the `centreon-auth-token` header for all subsequent requests.

**Example (curl):**

```bash
curl -X POST \
  "https://api.domain.tld/centreon/api/index.php?action=authenticate" \
  -d "username=admin&password=centreon"
```

---

## Permissions

| API | Who can call it |
|-----|-----------------|
| Configuration API | Administrators only |
| Realtime API | Any user with "Reach API Real Time" enabled in their contact profile |
| CLAPI | Administrators only |

Administrators can call both APIs regardless of their contact configuration. Permission settings are found at **Configuration > Users > Contacts/Users > Centreon Authentication tab**.

---

## Error codes

| Code | Meaning | Common causes |
|------|---------|---------------|
| 200 | Success | — |
| 400 | Bad request | Missing parameter, unknown parameter, objects not linked |
| 401 | Unauthorized | Invalid or missing token |
| 404 | Not found | Object does not exist, action not implemented |
| 409 | Conflict | Object already exists, name already in use, objects already linked |
| 500 | Internal server error | See the custom message in the response body |

**Example error response:**

```json
{
    "result": [],
    "status": "failed",
    "message": "Object not found"
}
```

---

## Configuration API

### Common request format

All configuration calls use the following endpoint and headers.

**Endpoint:**

```
POST api.domain.tld/centreon/api/index.php?action=action&object=centreon_clapi
```

**Headers:**

| Key | Value |
|-----|-------|
| Content-Type | application/json |
| centreon-auth-token | The token obtained from the authentication call |

The examples below show only the **Body** and **Response** for each call. Apply the endpoint and headers above to all of them.

**Full example (curl):**

```bash
curl -X POST \
  "https://api.domain.tld/centreon/api/index.php?action=action&object=centreon_clapi" \
  -H "Content-Type: application/json" \
  -H "centreon-auth-token: NTc1MDU3MGE3M2JiODIuMjA4OTA2OTc=" \
  -d '{"action": "show", "object": "host"}'
```

---

### Object and action reference

Quick reference for all available objects and their supported actions.

| Object | CLAPI name | Available actions |
|--------|-----------|-------------------|
| [Host](#host) | HOST | show, add, del, setparam, getparam, setinstance, getmacro, setmacro, delmacro, gettemplate, settemplate, addtemplate, deltemplate, applytpl, getparent, addparent, setparent, delparent, getchild, addchild, setchild, delchild, getcontactgroup, addcontactgroup, setcontactgroup, delcontactgroup, getcontact, addcontact, setcontact, delcontact, gethostgroup, addhostgroup, sethostgroup, delhostgroup, enable, disable |
| [ACL](#acl) | ACL | reload, lastreload |
| [Action ACL](#action-acl) | ACLACTION | show, add, del, setparam, getaclgroup, grant, revoke |
| [ACL Groups](#acl-groups) | ACLGROUP | show, add, del, setparam, getmenu, getaction, getresource, getcontact, getcontactgroup, setmenu, setaction, setresource, addmenu, addaction, addresource, delmenu, delaction, delresource, setcontact, setcontactgroup, addcontact, addcontactgroup, delcontact, delcontactgroup |
| [Menu ACL](#menu-acl) | ACLMENU | show, add, del, setparam, getaclgroup, grant, revoke |
| [Resource ACL](#resource-acl) | ACLRESOURCE | show, add, del, setparam, getaclgroup, grant, revoke |
| [Centreon Broker](#centreon-broker) | CENTBROKERCFG | show, add, del, setparam, listinput/output/logger/…, getinput/output/logger/…, addinput/output/logger/…, delinput/output/logger/…, setinput/output/logger/… |
| [CGI CFG](#cgi-cfg) | CGICFG | show, add, del, setparam |
| [Commands](#commands) | CMD | show, add, del, setparam |
| [Contacts](#contacts) | CONTACT | show, add, del, setparam, enable, disable |
| [Contact Templates](#contact-templates) | CONTACTTPL | show, add, del, setparam, enable, disable |
| [Contact Groups](#contact-groups) | CG | show, add, del, setparam, enable, disable, getcontact, addcontact, setcontact, delcontact |
| [Dependencies](#dependencies) | DEP | show, add, del, setparam, listdep, addparent, addchild, delparent, delchild |
| [Downtimes](#downtimes) | DOWNTIME | show, add, del, listperiods, addweeklyperiod, addmonthlyperiod, addspecificperiod, addhost/hostgroup/service/servicegroup, delhost/hostgroup/service/servicegroup, sethost/hostgroup/service/servicegroup |
| [Host Templates](#host-template) | HTPL | show, add, del, setparam, getmacro, setmacro, delmacro, getparent, addparent, setparent, delparent, getcontactgroup, addcontactgroup, setcontactgroup, delcontactgroup, getcontact, addcontact, setcontact, delcontact, gethostgroup, addhostgroup, sethostgroup, delhostgroup, setseverity, unsetseverity, enable, disable |
| [Host Categories](#host-categories) | HC | show, add, del, getmember, addmember, setmember, setseverity, unsetseverity, delmember |
| [Host Groups](#hostgroups) | HG | show, add, del, setparam, getmember, addmember, setmember, delmember |
| [Instances (Pollers)](#instances-pollers) | INSTANCE | show, add, del, setparam, gethosts |
| [Resource CFG](#resource-cfg-pollers-related-macros) | RESOURCECFG | show, add, del, setparam |
| [Service Templates](#service-templates) | STPL | show, add, del, setparam, gethosttemplate, addhosttemplate, sethosttemplate, delhosttemplate, getmacro, setmacro, delmacro, getcontact, addcontact, setcontact, delcontact, getcontactgroup, setcontactgroup, delcontactgroup, gettrap, settrap, deltrap |
| [Services](#services) | SERVICE | show, add, del, setparam, addhost, sethost, delhost, getmacro, setmacro, delmacro, setseverity, unsetseverity, getcontact, addcontact, setcontact, delcontact, getcontactgroup, setcontactgroup, delcontactgroup, gettrap, settrap, deltrap |
| [Service Groups](#service-groups) | SG | show, add, del, setparam, getservice, gethostgroupservice, addservice, setservice, addhostgroupservice, sethostgroupservice, delservice, delhostgroupservice |
| [Service Categories](#service-categories) | SC | show, add, del, setparam, getservice, getservicetemplate, addservice, setservice, addservicetemplate, setservicetemplate, delservice, delservicetemplate, setseverity, unsetseverity |
| [Time Periods](#time-periods) | TIMEPERIOD | show, add, del, setparam, getexception, setexception, delexception |
| [Traps](#traps) | TRAP | show, add, del, setparam, getmatching, addmatching, delmatching, updatematching |
| [Vendors](#vendors) | VENDOR | show, add, del, setparam, generatetraps |

---

### Host

The `HOST` object represents a monitored device or server.

#### List hosts

**Body:**

```json
{
    "action": "show",
    "object": "host"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "79",
            "name": "mail-uranus-frontend",
            "alias": "mail-uranus-frontend",
            "address": "mail-uranus-frontend",
            "activate": "1"
        },
        {
            "id": "80",
            "name": "mail-neptune-frontend",
            "alias": "mail-neptune-frontend",
            "address": "mail-neptune-frontend",
            "activate": "1"
        }
    ]
}
```

#### Add host

The `values` field follows: `name;alias;address;template;instance;hostgroup`

**Body:**

```json
{
    "action": "add",
    "object": "host",
    "values": "test;Test host;127.0.0.1;generic-host;central;Linux-SerVers"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Delete host

**Body:**

```json
{
    "action": "del",
    "object": "host",
    "values": "test"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Set parameters

Updates one parameter on a host.

**Body:**

```json
{
    "action": "setparam",
    "object": "host",
    "values": "test;ParameterToSet;NewValue"
}
```

Available parameters:

| Parameter | Description |
|-----------|-------------|
| 2d\_coords | 2D coordinates (used by statusmap) |
| 3d\_coords | 3D coordinates (used by statusmap) |
| geo\_coords | Geo coordinates (used by Centreon MAP) |
| action\_url | Action URL |
| activate | Whether or not host is enabled |
| active\_checks\_enabled | Whether or not active checks are enabled |
| acknowledgement\_timeout | Acknowledgement timeout (in seconds) |
| address | Host IP address |
| alias | Alias |
| check\_command | Check command |
| check\_command\_arguments | Check command arguments |
| check\_interval | Normal check interval |
| check\_freshness | Check freshness (in seconds) |
| check\_period | Check period |
| checks\_enabled | Whether or not checks are enabled |
| contact\_additive\_inheritance | Enables contact additive inheritance |
| cg\_additive\_inheritance | Enables contactgroup additive inheritance |
| event\_handler | Event handler command |
| event\_handler\_arguments | Event handler command arguments |
| event\_handler\_enabled | Whether or not event handler is enabled |
| first\_notification\_delay | First notification delay (in seconds) |
| flap\_detection\_enabled | Whether or not flap detection is enabled |
| flap\_detection\_options | Flap detection options |
| icon\_image | Icon image |
| icon\_image\_alt | Icon image text |
| max\_check\_attempts | Maximum number of attempts before a HARD state is declared |
| name | Host name |
| notes | Notes |
| notes\_url | Notes URL |
| notifications\_enabled | Whether or not notification is enabled |
| notification\_interval | Notification interval |
| notification\_options | Notification options |
| notification\_period | Notification period |
| obsess\_over\_host | Whether or not obsess over host option is enabled |
| passive\_checks\_enabled | Whether or not passive checks are enabled |
| process\_perf\_data | Process performance data command |
| retain\_nonstatus\_information | Whether or not there is non-status retention |
| retain\_status\_information | Whether or not there is status retention |
| retry\_check\_interval | Retry check interval |
| snmp\_community | SNMP community |
| snmp\_version | SNMP version |
| stalking\_options | Comma separated options: 'o' for OK, 'd' for Down, 'u' for Unreachable |
| statusmap\_image | Status map image (used by statusmap) |
| host\_notification\_options | Notification options (d,u,r,f,s) |
| timezone | Timezone |

**Response:**

```json
{
    "result": []
}
```

#### Get parameters

Pipe-separate multiple parameter names to retrieve them in a single call.

**Body:**

```json
{
    "action": "getparam",
    "object": "host",
    "values": "test;alias|address|timezone"
}
```

Available parameters are the same as for `setparam` (see table above), minus `acknowledgement_timeout`.

**Response:**

```json
{
    "result": [
        {
            "alias": "test",
            "address": "192.168.56.101",
            "timezone": "Europe/Berlin"
        }
    ]
}
```

#### Set instance (poller)

Assigns a host to a specific monitoring poller.

**Body:**

```json
{
    "action": "setinstance",
    "object": "host",
    "values": "test;Poller-2"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Get macros

**Body:**

```json
{
    "action": "getmacro",
    "object": "host",
    "values": "mail-uranus-frontend"
}
```

**Response:**

```json
{
    "result": [
        {
            "macro name": "ALIVENUM",
            "macro value": "1",
            "is_password": "",
            "description": "",
            "source": "generic-host-bench"
        },
        {
            "macro name": "ALIVEWARNING",
            "macro value": "3000.80",
            "is_password": "",
            "description": "",
            "source": "generic-host-bench"
        },
        {
            "macro name": "ALIVECRITICAL",
            "macro value": "5000.100",
            "is_password": "",
            "description": "",
            "source": "generic-host-bench"
        }
    ]
}
```

#### Set macro

Creates or updates a custom macro. If the macro does not exist on the host, it is created.

**Body:**

```json
{
    "action": "setmacro",
    "object": "host",
    "values": "mail-uranus-frontend;MacroName;NewValue"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Delete macro

The macro must exist in the host's Custom Macros.

**Body:**

```json
{
    "action": "delmacro",
    "object": "host",
    "values": "mail-uranus-frontend;MacroName"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Get templates

**Body:**

```json
{
    "action": "gettemplate",
    "object": "host",
    "values": "mail-uranus-frontend"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "3",
            "name": "Servers-Linux"
        },
        {
            "id": "62",
            "name": "Postfix-frontend"
        },
        {
            "id": "59",
            "name": "Cyrus-murder-frontend"
        }
    ]
}
```

#### Set template

Replaces all linked templates with the specified template.

**Body:**

```json
{
    "action": "settemplate",
    "object": "host",
    "values": "mail-uranus-frontend;MyHostTemplate"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Add template

Adds a template without removing existing linked templates.

**Body:**

```json
{
    "action": "addtemplate",
    "object": "host",
    "values": "mail-uranus-frontend;MyHostTemplate"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Delete template

**Body:**

```json
{
    "action": "deltemplate",
    "object": "host",
    "values": "mail-uranus-frontend;MyHostTemplate"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Apply template

Applies all templates linked to the host, propagating template configuration to the host.

**Body:**

```json
{
    "action": "applytpl",
    "object": "host",
    "values": "mail-uranus-frontend"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Get parents

**Body:**

```json
{
    "action": "getparent",
    "object": "host",
    "values": "mail-uranus-frontend"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "219",
            "name": "mail-uranus-frontdad"
        }
    ]
}
```

#### Add parent

Adds a parent host without removing existing parents.

**Body:**

```json
{
    "action": "addparent",
    "object": "host",
    "values": "mail-uranus-frontend;fw-berlin"
}
```

To add multiple parents at once, pipe-separate them: `"values": "mail-uranus-frontend;fw-berlin|fw-dublin"`

**Response:**

```json
{
    "result": []
}
```

#### Set parent

Replaces all existing parents with the specified parent(s).

**Body:**

```json
{
    "action": "setparent",
    "object": "host",
    "values": "mail-uranus-frontend;fw-berlin"
}
```

To set multiple parents: `"values": "mail-uranus-frontend;fw-berlin|fw-dublin"`

**Response:**

```json
{
    "result": []
}
```

#### Delete parent

**Body:**

```json
{
    "action": "delparent",
    "object": "host",
    "values": "mail-uranus-frontend;fw-berlin"
}
```

To delete multiple parents: `"values": "mail-uranus-frontend;fw-berlin|fw-dublin"`

**Response:**

```json
{
    "result": []
}
```

#### Get children

**Body:**

```json
{
    "action": "getchild",
    "object": "host",
    "values": "mail-uranus-frontdad"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "219",
            "name": "mail-uranus-frontchild"
        }
    ]
}
```

#### Add child

Adds a child host without removing existing children.

**Body:**

```json
{
    "action": "addchild",
    "object": "host",
    "values": "fw-berlin;mail-uranus-frontend"
}
```

To add multiple children: `"values": "fw-berlin;mail-uranus-frontend|mail-neptune-frontend"`

**Response:**

```json
{
    "result": []
}
```

#### Set child

Replaces all existing children with the specified child(ren).

**Body:**

```json
{
    "action": "setchild",
    "object": "host",
    "values": "fw-berlin;mail-uranus-frontend"
}
```

To set multiple children: `"values": "fw-berlin;mail-uranus-frontend|mail-neptune-frontend"`

**Response:**

```json
{
    "result": []
}
```

#### Delete child

**Body:**

```json
{
    "action": "delchild",
    "object": "host",
    "values": "fw-berlin;mail-uranus-frontend"
}
```

To delete multiple children: `"values": "fw-berlin;mail-uranus-frontend|mail-neptune-frontend"`

**Response:**

```json
{
    "result": []
}
```

#### Get contact groups

**Body:**

```json
{
    "action": "getcontactgroup",
    "object": "host",
    "values": "mail-uranus-frontend"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "6",
            "name": "Mail-Operators"
        }
    ]
}
```

#### Add contact group

Adds a contact group without removing existing contact groups.

**Body:**

```json
{
    "action": "addcontactgroup",
    "object": "host",
    "values": "mail-uranus-frontend;Supervisors"
}
```

To add multiple: `"values": "mail-uranus-frontend;Supervisors|Guest"`

**Response:**

```json
{
    "result": []
}
```

#### Set contact group

Replaces all existing contact groups.

**Body:**

```json
{
    "action": "setcontactgroup",
    "object": "host",
    "values": "mail-uranus-frontend;Supervisors"
}
```

To set multiple: `"values": "mail-uranus-frontend;Supervisors|Guest"`

**Response:**

```json
{
    "result": []
}
```

#### Delete contact group

**Body:**

```json
{
    "action": "delcontactgroup",
    "object": "host",
    "values": "mail-uranus-frontend;Guest"
}
```

To delete multiple: `"values": "mail-uranus-frontend;Guest|Supervisors"`

**Response:**

```json
{
    "result": []
}
```

#### Get contacts

**Body:**

```json
{
    "action": "getcontact",
    "object": "host",
    "values": "mail-uranus-frontend"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "20",
            "name": "user-mail"
        }
    ]
}
```

#### Add contact

Adds a contact without removing existing contacts.

**Body:**

```json
{
    "action": "addcontact",
    "object": "host",
    "values": "mail-uranus-frontend;admin"
}
```

To add multiple: `"values": "mail-uranus-frontend;admin|SuperAdmin"`

**Response:**

```json
{
    "result": []
}
```

#### Set contact

Replaces all existing contacts.

**Body:**

```json
{
    "action": "setcontact",
    "object": "host",
    "values": "mail-uranus-frontend;admin"
}
```

To set multiple: `"values": "mail-uranus-frontend;admin|SuperAdmin"`

**Response:**

```json
{
    "result": []
}
```

#### Delete contact

**Body:**

```json
{
    "action": "delcontact",
    "object": "host",
    "values": "mail-uranus-frontend;admin"
}
```

To delete multiple: `"values": "mail-uranus-frontend;admin|SuperAdmin"`

**Response:**

```json
{
    "result": []
}
```

#### Get host groups

**Body:**

```json
{
    "action": "gethostgroup",
    "object": "host",
    "values": "mail-uranus-frontend"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "53",
            "name": "Linux-Servers"
        },
        {
            "id": "63",
            "name": "Mail-Cyrus-Frontend"
        }
    ]
}
```

#### Add host group

Adds a host group without removing existing host groups.

**Body:**

```json
{
    "action": "addhostgroup",
    "object": "host",
    "values": "mail-uranus-frontend;Mail-Postfix-Frontend"
}
```

To add multiple: `"values": "mail-uranus-frontend;Mail-Postfix-Frontend|Linux-Servers"`

**Response:**

```json
{
    "result": []
}
```

#### Set host group

Replaces all existing host groups.

**Body:**

```json
{
    "action": "sethostgroup",
    "object": "host",
    "values": "mail-uranus-frontend;Linux-Servers"
}
```

To set multiple: `"values": "mail-uranus-frontend;Linux-Servers|Mail-Postfix-Frontend"`

**Response:**

```json
{
    "result": []
}
```

#### Delete host group

**Body:**

```json
{
    "action": "delhostgroup",
    "object": "host",
    "values": "mail-uranus-frontend;Linux-Servers"
}
```

To delete multiple: `"values": "mail-uranus-frontend;Linux-Servers|Mail-Postfix-Frontend"`

**Response:**

```json
{
    "result": []
}
```

#### Enable

**Body:**

```json
{
    "action": "enable",
    "object": "host",
    "values": "mail-uranus-frontend"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Disable

**Body:**

```json
{
    "action": "disable",
    "object": "host",
    "values": "mail-uranus-frontend"
}
```

**Response:**

```json
{
    "result": []
}
```

---

### ACL

Manages the global ACL cache. Useful after making bulk changes to ACL configuration.

#### Reload

Forces a reload of all ACL definitions.

**Body:**

```json
{
    "action": "reload",
    "object": "ACL"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Last reload

Returns the timestamp of the last ACL reload.

**Body:**

```json
{
    "action": "lastreload",
    "object": "ACL"
}
```

**Response:**

```json
{
    "result": [
        {
            "last_reload": "1528884076"
        }
    ]
}
```

---

### Action ACL

Manages ACL rules that control which monitoring actions users can perform (e.g. acknowledge, schedule downtime).

**Object:** `ACLACTION`

**Available actions:** show, add, del, setparam, getaclgroup, grant, revoke

#### List action ACLs

**Body:**

```json
{
    "action": "show",
    "object": "ACLACTION"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "AllActions",
            "description": "All monitoring actions",
            "activate": "1"
        }
    ]
}
```

#### Add action ACL

The `values` field follows: `name;description`

**Body:**

```json
{
    "action": "add",
    "object": "ACLACTION",
    "values": "AllActions;All monitoring actions"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Grant or revoke an action

Available action names: `acknowledgement`, `disacknowledgement`, `schedule_check`, `schedule_downtime`, `comment`, `delete_comment`, `add_downtime`, `cancel_downtime`, `enable_host`, `disable_host`, `enable_service`, `disable_service`.

**Body:**

```json
{
    "action": "grant",
    "object": "ACLACTION",
    "values": "AllActions;acknowledgement"
}
```

**Response:**

```json
{
    "result": []
}
```

---

### ACL Groups

Manages groups that bundle menu, action, and resource ACL rules and assign them to contacts.

**Object:** `ACLGROUP`

**Available actions:** show, add, del, setparam, getmenu, getaction, getresource, getcontact, getcontactgroup, setmenu, setaction, setresource, addmenu, addaction, addresource, delmenu, delaction, delresource, setcontact, setcontactgroup, addcontact, addcontactgroup, delcontact, delcontactgroup

#### List ACL groups

**Body:**

```json
{
    "action": "show",
    "object": "ACLGROUP"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "Operators",
            "alias": "Operators group",
            "activate": "1"
        }
    ]
}
```

#### Add ACL group

The `values` field follows: `name;alias`

**Body:**

```json
{
    "action": "add",
    "object": "ACLGROUP",
    "values": "Operators;Operators group"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Assign a contact to an ACL group

**Body:**

```json
{
    "action": "addcontact",
    "object": "ACLGROUP",
    "values": "Operators;john.doe"
}
```

**Response:**

```json
{
    "result": []
}
```

All other relationship actions (getmenu, setmenu, addresource, etc.) follow the same pattern with `values` as `"group-name;item-name"`.

---

### Menu ACL

Controls which Centreon web menus are accessible to users in an ACL group.

**Object:** `ACLMENU`

**Available actions:** show, add, del, setparam, getaclgroup, grant, revoke

#### List menu ACLs

**Body:**

```json
{
    "action": "show",
    "object": "ACLMENU"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "AllMenus",
            "alias": "Full menu access",
            "activate": "1"
        }
    ]
}
```

#### Grant menu access

The `values` field follows: `acl-name;top-level-menu;sub-menu`

**Body:**

```json
{
    "action": "grant",
    "object": "ACLMENU",
    "values": "AllMenus;Configuration;Hosts"
}
```

**Response:**

```json
{
    "result": []
}
```

---

### Resource ACL

Controls which monitored resources (hosts, host groups, etc.) users in an ACL group can see.

**Object:** `ACLRESOURCE`

**Available actions:** show, add, del, setparam, getaclgroup, grant, revoke

#### List resource ACLs

**Body:**

```json
{
    "action": "show",
    "object": "ACLRESOURCE"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "AllResources",
            "alias": "All resources",
            "activate": "1"
        }
    ]
}
```

#### Grant resource access

**Body:**

```json
{
    "action": "grant",
    "object": "ACLRESOURCE",
    "values": "AllResources;host;mail-uranus-frontend"
}
```

**Response:**

```json
{
    "result": []
}
```

---

### Centreon Broker

Manages Centreon Broker configuration — the event-brokering daemon that handles monitoring data flows.

**Object:** `CENTBROKERCFG`

**Available actions:**

| Category | Actions |
|----------|---------|
| Core | show, add, del, setparam |
| List flow items | listinput, listoutput, listlogger, listcorrelation, listtemporary, liststats |
| Get flow items | getinput, getoutput, getlogger, getcorrelation, gettemporary, getstats |
| Add flow items | addinput, addoutput, addlogger, addcorrelation, addtemporary, addstats |
| Delete flow items | delinput, deloutput, dellogger, delcorrelation, deltemporary, delstats |
| Set flow items | setinput, setoutput, setlogger, setcorrelation, settemporary, setstats |

#### List Broker configurations

**Body:**

```json
{
    "action": "show",
    "object": "CENTBROKERCFG"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "central-broker-master",
            "instance": "Central",
            "activate": "1"
        }
    ]
}
```

#### List outputs for a Broker configuration

**Body:**

```json
{
    "action": "listoutput",
    "object": "CENTBROKERCFG",
    "values": "central-broker-master"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "type": "sql",
            "name": "central-broker-master-sql"
        }
    ]
}
```

---

### CGI CFG

Manages the CGI configuration file used by the Centreon Engine web interface.

**Object:** `CGICFG`

**Available actions:** show, add, del, setparam

#### List CGI configurations

**Body:**

```json
{
    "action": "show",
    "object": "CGICFG"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "Centreon Default CGI",
            "instance": "Central"
        }
    ]
}
```

---

### Commands

Manages check commands and event handler commands used by Centreon Engine.

**Object:** `CMD`

**Available actions:** show, add, del, setparam

#### List commands

**Body:**

```json
{
    "action": "show",
    "object": "CMD"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "check_centreon_ping",
            "type": "check",
            "line": "$CENTREONPLUGINS$/check_icmp -H $HOSTADDRESS$ -n $_HOSTALIVENUM$ -w $_HOSTALIVEWARNING$ -c $_HOSTALIVE CRITICAL$"
        }
    ]
}
```

#### Add command

The `values` field follows: `name;type;command_line`

Valid types: `check`, `notif`, `misc`, `discovery`

**Body:**

```json
{
    "action": "add",
    "object": "CMD",
    "values": "check_ssh;check;$CENTREONPLUGINS$/check_ssh -H $HOSTADDRESS$"
}
```

**Response:**

```json
{
    "result": []
}
```

---

### Contacts

Manages Centreon users and contacts who receive notifications.

**Object:** `CONTACT`

**Available actions:** show, add, del, setparam, enable, disable

#### List contacts

**Body:**

```json
{
    "action": "show",
    "object": "CONTACT"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "admin",
            "alias": "Administrator",
            "email": "admin@example.com",
            "activate": "1"
        }
    ]
}
```

#### Add contact

The `values` field follows: `name;alias;email;password;admin(0/1);reach_api(0/1);reach_api_rt(0/1)`

**Body:**

```json
{
    "action": "add",
    "object": "CONTACT",
    "values": "jdoe;John Doe;john.doe@example.com;MyP@ssw0rd;0;1;1"
}
```

**Response:**

```json
{
    "result": []
}
```

---

### Contact Templates

Reusable contact configurations that can be applied to multiple contacts.

**Object:** `CONTACTTPL`

**Available actions:** show, add, del, setparam, enable, disable

All actions follow the same patterns as [Contacts](#contacts). Substitute `CONTACTTPL` for `CONTACT` in the object field.

---

### Contact Groups

Groups of contacts used to route notifications.

**Object:** `CG`

**Available actions:** show, add, del, setparam, enable, disable, getcontact, addcontact, setcontact, delcontact

#### List contact groups

**Body:**

```json
{
    "action": "show",
    "object": "CG"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "Supervisors",
            "alias": "Supervisors",
            "activate": "1"
        }
    ]
}
```

#### Add contact group

The `values` field follows: `name;alias`

**Body:**

```json
{
    "action": "add",
    "object": "CG",
    "values": "Supervisors;Supervisors"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Add contact to group

**Body:**

```json
{
    "action": "addcontact",
    "object": "CG",
    "values": "Supervisors;jdoe"
}
```

**Response:**

```json
{
    "result": []
}
```

---

### Dependencies

Defines parent-child relationships between monitored objects to suppress notifications when a parent is down.

**Object:** `DEP`

**Available actions:** show, add, del, setparam, listdep, addparent, addchild, delparent, delchild

#### List dependencies

**Body:**

```json
{
    "action": "show",
    "object": "DEP"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "Firewall dependency",
            "description": "Services depend on firewall",
            "inherits_parent": "1",
            "execution_failure_criteria": "n",
            "notification_failure_criteria": "w,u,c"
        }
    ]
}
```

#### Add dependency

The `values` field follows: `name;description;dependency_type;inherits_parent;execution_failure_criteria;notification_failure_criteria`

Valid dependency types: `HOST`, `SVC`, `HG`, `SG`, `META`

**Body:**

```json
{
    "action": "add",
    "object": "DEP",
    "values": "Firewall dependency;Services depend on firewall;HOST;1;n;w,u,c"
}
```

**Response:**

```json
{
    "result": []
}
```

---

### Downtimes

Manages recurring downtime schedules for planned maintenance windows.

**Object:** `DOWNTIME`

**Available actions:** show, add, del, listperiods, addweeklyperiod, addmonthlyperiod, addspecificperiod, addhost, addhostgroup, addservice, addservicegroup, delhost, delhostgroup, delservice, delservicegroup, sethost, sethostgroup, setservice, setservicegroup

#### List downtime schedules

**Body:**

```json
{
    "action": "show",
    "object": "DOWNTIME"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "Weekend-Maintenance",
            "description": "Weekly maintenance window",
            "activate": "1"
        }
    ]
}
```

#### Add a downtime schedule

The `values` field follows: `name;description`

**Body:**

```json
{
    "action": "add",
    "object": "DOWNTIME",
    "values": "Weekend-Maintenance;Weekly maintenance window"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Add a weekly period

The `values` field follows: `downtime-name;day(1=Mon…7=Sun);start-time;end-time;fixed(0/1);duration(seconds);with-services(0/1)`

**Body:**

```json
{
    "action": "addweeklyperiod",
    "object": "DOWNTIME",
    "values": "Weekend-Maintenance;6;22:00;06:00;1;0;1"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Add a monthly period

The `values` field follows: `downtime-name;day-of-month;start-time;end-time;fixed(0/1);duration(seconds);with-services(0/1)`

**Body:**

```json
{
    "action": "addmonthlyperiod",
    "object": "DOWNTIME",
    "values": "Monthly-Maintenance;1;00:00;06:00;1;0;1"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Add host to downtime schedule

**Body:**

```json
{
    "action": "addhost",
    "object": "DOWNTIME",
    "values": "Weekend-Maintenance;mail-uranus-frontend"
}
```

**Response:**

```json
{
    "result": []
}
```

---

### Host Template

Reusable host configurations that can be applied to multiple hosts.

> **Note:** The `APPLYTPL` and `SETINSTANCE` actions are not available on host templates.

**Object:** `HTPL`

**Available actions:** show, add, del, setparam, getmacro, setmacro, delmacro, getparent, addparent, setparent, delparent, getcontactgroup, addcontactgroup, setcontactgroup, delcontactgroup, getcontact, addcontact, setcontact, delcontact, gethostgroup, addhostgroup, sethostgroup, delhostgroup, setseverity, unsetseverity, enable, disable

#### List host templates

**Body:**

```json
{
    "action": "show",
    "object": "HTPL"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "3",
            "name": "generic-host",
            "alias": "Generic Host Template",
            "activate": "1"
        }
    ]
}
```

All other actions follow the same patterns as [Host](#host). Substitute `HTPL` for `HOST` in the object field.

---

### Host Categories

Groups hosts by functional category (e.g. "Web Servers", "Databases"). Categories can have a severity level.

**Object:** `HC`

**Available actions:** show, add, del, getmember, addmember, setmember, setseverity, unsetseverity, delmember

#### List host categories

**Body:**

```json
{
    "action": "show",
    "object": "HC"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "web-servers",
            "alias": "Web Servers",
            "severity_level": "",
            "severity_icon": "",
            "activate": "1"
        }
    ]
}
```

#### Add host category

The `values` field follows: `name;alias`

**Body:**

```json
{
    "action": "add",
    "object": "HC",
    "values": "web-servers;Web Servers"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Add member to category

**Body:**

```json
{
    "action": "addmember",
    "object": "HC",
    "values": "web-servers;mail-uranus-frontend"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Set severity

The `values` field follows: `category-name;severity-level;severity-icon`

**Body:**

```json
{
    "action": "setseverity",
    "object": "HC",
    "values": "web-servers;3;icon-warning"
}
```

**Response:**

```json
{
    "result": []
}
```

---

### Hostgroups

Logical groupings of hosts, used for filtering in views and for applying ACLs or notifications.

**Object:** `HG`

**Available actions:** show, add, del, setparam, getmember, addmember, setmember, delmember

#### List host groups

**Body:**

```json
{
    "action": "show",
    "object": "HG"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "53",
            "name": "Linux-Servers",
            "alias": "Linux Servers"
        }
    ]
}
```

#### Add host group

The `values` field follows: `name;alias`

**Body:**

```json
{
    "action": "add",
    "object": "HG",
    "values": "Linux-Servers;Linux Servers"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Add member to host group

**Body:**

```json
{
    "action": "addmember",
    "object": "HG",
    "values": "Linux-Servers;mail-uranus-frontend"
}
```

**Response:**

```json
{
    "result": []
}
```

---

### Instances (Pollers)

Manages Centreon monitoring pollers — the engines that execute checks.

**Object:** `INSTANCE`

**Available actions:** show, add, del, setparam, gethosts

#### List pollers

**Body:**

```json
{
    "action": "show",
    "object": "INSTANCE"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "Central",
            "localhost": "1",
            "ip_address": "127.0.0.1",
            "activate": "1",
            "status": "1"
        }
    ]
}
```

#### Get hosts for a poller

**Body:**

```json
{
    "action": "gethosts",
    "object": "INSTANCE",
    "values": "Central"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "79",
            "name": "mail-uranus-frontend"
        }
    ]
}
```

---

### Resource CFG (pollers related macros)

`RESOURCECFG` objects define `$USERn$` and custom resource macros that apply to one or more pollers. The same macro can be defined in multiple `RESOURCECFG` objects with complementary lists of pollers.

More information: [Resource macros](../monitoring/basic-objects/macros.md#resource-macros)

**Object:** `RESOURCECFG`

**Available actions:** show, add, del, setparam

#### List RESOURCECFG objects

**Body:**

```json
{
    "action": "show",
    "object": "resourcecfg"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "$USER1$",
            "value": "/usr/lib64/nagios/plugins",
            "comment": "Nagios Plugins Path",
            "activate": "1",
            "instance": [
                "Central"
            ]
        },
        {
            "id": "2",
            "name": "$CENTREONPLUGINS$",
            "value": "/usr/lib/centreon/plugins",
            "comment": "Centreon Plugins Path",
            "activate": "1",
            "instance": [
                "Central"
            ]
        }
    ]
}
```

#### Add a RESOURCECFG object

The `values` field follows: `macro-name;macro-value;poller-list;comment`

Pipe-separate poller names for multiple pollers.

**Body:**

```json
{
    "action": "add",
    "object": "resourcecfg",
    "values": "$MYMACRO$;my-value;Central|Poller-2;My custom macro"
}
```

**Response:**

```json
{"result":[]}
```

#### Delete a RESOURCECFG object

**Body:**

```json
{
    "action": "del",
    "object": "resourcecfg",
    "values": "1"
}
```

**Response:**

```json
{"result":[]}
```

#### Change a RESOURCECFG object

The `values` field follows: `macro-id;parameter;new-value`

Valid parameters: `instance`, `comment`, `value`, `activate`

**Body:**

```json
{
    "action": "setparam",
    "object": "resourcecfg",
    "values": "1;value;/usr/lib/nagios/plugins"
}
```

**Response:**

```json
{"result":[]}
```

---

### Service templates

Reusable service configurations that can be applied to multiple services.

**Object:** `STPL`

**Available actions:** show, add, del, setparam, gethosttemplate, addhosttemplate, sethosttemplate, delhosttemplate, getmacro, setmacro, delmacro, getcontact, addcontact, setcontact, delcontact, getcontactgroup, setcontactgroup, delcontactgroup, gettrap, settrap, deltrap

#### List service templates

**Body:**

```json
{
    "action": "show",
    "object": "STPL"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "generic-service",
            "alias": "Generic Service Template",
            "activate": "1"
        }
    ]
}
```

#### Add service template

The `values` field follows: `description;name;check-command`

**Body:**

```json
{
    "action": "add",
    "object": "STPL",
    "values": "Ping-template;Ping check template;check_centreon_ping"
}
```

**Response:**

```json
{
    "result": []
}
```

All relationship actions (getmacro, setmacro, getcontact, addcontact, etc.) follow the same patterns as [Host](#host). Substitute `STPL` for `HOST` in the object field.

---

### Services

Individual monitoring checks associated with a specific host.

**Object:** `SERVICE`

**Available actions:** show, add, del, setparam, addhost, sethost, delhost, getmacro, setmacro, delmacro, setseverity, unsetseverity, getcontact, addcontact, setcontact, delcontact, getcontactgroup, setcontactgroup, delcontactgroup, gettrap, settrap, deltrap

#### List services

**Body:**

```json
{
    "action": "show",
    "object": "SERVICE"
}
```

**Response:**

```json
{
    "result": [
        {
            "host id": "79",
            "host name": "mail-uranus-frontend",
            "id": "1",
            "description": "Ping",
            "check command": "check_centreon_ping",
            "activate": "1"
        }
    ]
}
```

#### Add service

The `values` field follows: `host-name;service-description;service-template`

**Body:**

```json
{
    "action": "add",
    "object": "SERVICE",
    "values": "mail-uranus-frontend;Ping;Ping-template"
}
```

**Response:**

```json
{
    "result": []
}
```

---

### Service groups

Logical groupings of services, used for filtering in views and for ACLs.

**Object:** `SG`

**Available actions:** show, add, del, setparam, getservice, gethostgroupservice, addservice, setservice, addhostgroupservice, sethostgroupservice, delservice, delhostgroupservice

#### List service groups

**Body:**

```json
{
    "action": "show",
    "object": "SG"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "Mail-Services",
            "alias": "Mail Services"
        }
    ]
}
```

#### Add service group

The `values` field follows: `name;alias`

**Body:**

```json
{
    "action": "add",
    "object": "SG",
    "values": "Mail-Services;Mail Services"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Add service to group

The `values` field follows: `servicegroup-name;host-name,service-description`

**Body:**

```json
{
    "action": "addservice",
    "object": "SG",
    "values": "Mail-Services;mail-uranus-frontend,Ping"
}
```

**Response:**

```json
{
    "result": []
}
```

---

### Service categories

Groups services by functional category. Categories can have a severity level.

**Object:** `SC`

**Available actions:** show, add, del, setparam, getservice, getservicetemplate, addservice, setservice, addservicetemplate, setservicetemplate, delservice, delservicetemplate, setseverity, unsetseverity

#### List service categories

**Body:**

```json
{
    "action": "show",
    "object": "SC"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "ping-services",
            "description": "Ping checks",
            "severity_level": "",
            "severity_icon": ""
        }
    ]
}
```

#### Add service category

The `values` field follows: `name;description`

**Body:**

```json
{
    "action": "add",
    "object": "SC",
    "values": "ping-services;Ping checks"
}
```

**Response:**

```json
{
    "result": []
}
```

---

### Time periods

Defines time schedules used for check periods and notification periods.

**Object:** `TIMEPERIOD`

**Available actions:** show, add, del, setparam, getexception, setexception, delexception

#### List time periods

**Body:**

```json
{
    "action": "show",
    "object": "TIMEPERIOD"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "24x7",
            "alias": "Always",
            "sunday": "00:00-24:00",
            "monday": "00:00-24:00",
            "tuesday": "00:00-24:00",
            "wednesday": "00:00-24:00",
            "thursday": "00:00-24:00",
            "friday": "00:00-24:00",
            "saturday": "00:00-24:00"
        }
    ]
}
```

#### Add time period

The `values` field follows: `name;alias`

**Body:**

```json
{
    "action": "add",
    "object": "TIMEPERIOD",
    "values": "business-hours;Business Hours"
}
```

**Response:**

```json
{
    "result": []
}
```

Then use `setparam` to define the time ranges for each day (e.g. `setparam;business-hours;monday;09:00-18:00`).

#### Add exception

An exception overrides the normal schedule for a specific date or date pattern (e.g. holidays).

The `values` field follows: `timeperiod-name;exception-date-or-pattern;timerange`

**Body:**

```json
{
    "action": "setexception",
    "object": "TIMEPERIOD",
    "values": "business-hours;december 25;00:00-00:00"
}
```

**Response:**

```json
{
    "result": []
}
```

---

### Traps

Manages SNMP trap definitions that can trigger service state changes.

**Object:** `TRAP`

**Available actions:** show, add, del, setparam, getmatching, addmatching, delmatching, updatematching

#### List traps

**Body:**

```json
{
    "action": "show",
    "object": "TRAP"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "linkDown",
            "oid": ".1.3.6.1.6.3.1.1.5.3",
            "manufacturer": "Generic",
            "comments": "Link down trap"
        }
    ]
}
```

#### Add trap

The `values` field follows: `name;oid`

**Body:**

```json
{
    "action": "add",
    "object": "TRAP",
    "values": "linkDown;.1.3.6.1.6.3.1.1.5.3"
}
```

**Response:**

```json
{
    "result": []
}
```

---

### Vendors

Manages SNMP MIB vendors, used to organize traps by manufacturer.

**Object:** `VENDOR`

**Available actions:** show, add, del, setparam, generatetraps

#### List vendors

**Body:**

```json
{
    "action": "show",
    "object": "VENDOR"
}
```

**Response:**

```json
{
    "result": [
        {
            "id": "1",
            "name": "Generic",
            "alias": "Generic SNMP MIBs",
            "description": "Standard SNMP traps"
        }
    ]
}
```

#### Add vendor

The `values` field follows: `name;alias;description`

**Body:**

```json
{
    "action": "add",
    "object": "VENDOR",
    "values": "Generic;Generic SNMP MIBs;Standard SNMP traps"
}
```

**Response:**

```json
{
    "result": []
}
```

#### Generate traps from MIB

Parses a MIB file for this vendor and imports its trap definitions.

**Body:**

```json
{
    "action": "generatetraps",
    "object": "VENDOR",
    "values": "Generic"
}
```

**Response:**

```json
{
    "result": []
}
```

---

### Get business views

Business Views are logical groupings of Business Activities (requires the BAM module).

**Body:**

```json
{
    "action": "show",
    "object": "BV"
}
```

**Response:**

```json
{
    "result": [
        {
            "id_ba_group": "1",
            "name": "BA-Mail-View",
            "description": "BA Mail View"
        },
        {
            "id_ba_group": "2",
            "name": "BA-CIO-View",
            "description": "BA CIO View"
        }
    ]
}
```

---

## Realtime API

The Realtime API provides read-only access to live monitoring data. It uses **GET** requests (unlike the Configuration API which uses POST), with filter and field parameters passed in the query string.

### Common request format

**Endpoint:**

```
GET api.domain.tld/centreon/api/index.php?object=<object>&action=list[&param=value...]
```

**Headers:**

| Key | Value |
|-----|-------|
| Content-Type | application/json |
| centreon-auth-token | The token obtained from the authentication call |

### Pagination

Realtime endpoints support pagination via two query parameters:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| limit | integer | 30 | Number of results per page |
| number | integer | 0 | Page number (zero-based) |

When the response contains fewer results than the `limit`, you have reached the last page.

---

### Host Status

Returns real-time status for monitored hosts.

**Endpoint:**

```
GET api.domain.tld/centreon/api/index.php?object=centreon_realtime_hosts&action=list
```

**Query parameters:**

| Parameter | Type | Values | Description |
|-----------|------|--------|-------------|
| viewType | string | `all`, `unhandled`, `problems` | Predefined filter matching the monitoring view |
| fields | string | Comma-separated field names | Fields to include in the response (default: all) |
| status | string | `up`, `down`, `unreachable`, `pending`, `all` | Filter by host status |
| hostgroup | integer | Host group ID | Filter by host group |
| instance | integer | Poller ID | Filter by poller instance |
| search | string | Pattern | Filter applied to host name |
| criticality | integer | Criticality ID | Filter by criticality level |
| sortType | string | Any field name | Field to sort by |
| order | string | `ASC`, `DESC` | Sort direction |
| limit | integer | — | Results per page (default: 30) |
| number | integer | — | Page number, zero-based (default: 0) |

**Available fields:**

| Field | Type | Description |
|-------|------|-------------|
| id | integer | Host ID |
| name | string | Host name |
| alias | string | Host alias (description) |
| address | string | IP address or hostname |
| state | integer | Host state: 0=UP, 2=DOWN, 3=UNREACHABLE |
| state\_type | integer | State type: 0=SOFT, 1=HARD |
| output | string | Plugin output message |
| max\_check\_attempts | integer | Maximum check attempts |
| check\_attempt | integer | Current attempt count |
| last\_check | timestamp | Last check time |
| last\_state\_change | timestamp | Last state change time |
| last\_hard\_state\_change | timestamp | Last HARD state change time |
| acknowledged | boolean | Whether the host is acknowledged |
| instance | string | Poller name |
| instance\_id | integer | Poller ID |
| criticality | integer | Criticality level |
| passive\_checks | boolean | Whether passive checks are accepted |
| active\_checks | boolean | Whether active checks are enabled |
| notify | boolean | Whether notifications are enabled |
| action\_url | string | Action URL shortcut |
| notes\_url | string | Notes URL shortcut |
| notes | string | Notes |
| icon\_image | string | Icon image path |
| icon\_image\_alt | string | Icon image alt text |
| scheduled\_downtime\_depth | integer | Number of active downtimes |
| flapping | boolean | Whether the host is flapping |

**Example:**

```
GET api.domain.tld/centreon/api/index.php?object=centreon_realtime_hosts&action=list&limit=60&viewType=all&sortType=name&order=desc&fields=id,name,alias,address,state,output,next_check
```

---

### Service Status

Returns real-time status for monitored services. Each result also includes host information.

**Endpoint:**

```
GET api.domain.tld/centreon/api/index.php?object=centreon_realtime_services&action=list
```

**Query parameters:**

| Parameter | Type | Values | Description |
|-----------|------|--------|-------------|
| viewType | string | `all`, `unhandled`, `problems` | Predefined filter |
| fields | string | Comma-separated field names | Fields to include (default: all) |
| status | string | `ok`, `warning`, `critical`, `unknown`, `pending`, `all` | Filter by service status |
| hostgroup | integer | Host group ID | Filter by host group |
| servicegroup | integer | Service group ID | Filter by service group |
| instance | integer | Poller ID | Filter by poller |
| search | string | Pattern | Filter applied to service description |
| searchHost | string | Pattern | Filter applied to host name |
| searchOutput | string | Pattern | Filter applied to plugin output |
| criticality | integer | Criticality ID | Filter by criticality level |
| sortType | string | Any field name | Field to sort by |
| order | string | `ASC`, `DESC` | Sort direction |
| limit | integer | — | Results per page (default: 30) |
| number | integer | — | Page number, zero-based (default: 0) |

**Available fields:**

| Field | Type | Description |
|-------|------|-------------|
| host\_id | integer | Host ID |
| host\_name | string | Host name |
| host\_alias | string | Host alias |
| host\_address | string | Host IP address |
| host\_state | integer | Host state: 0=UP, 2=DOWN, 3=UNREACHABLE |
| host\_state\_type | integer | Host state type: 0=SOFT, 1=HARD |
| host\_output | string | Host plugin output |
| host\_max\_check\_attempts | integer | Maximum check attempts for host |
| host\_check\_attempt | integer | Current attempt count for host |
| host\_last\_check | timestamp | Last check time for host |
| host\_acknowledged | boolean | Whether the host is acknowledged |
| instance | string | Poller name |
| instance\_id | integer | Poller ID |
| host\_action\_url | string | Host action URL shortcut |
| host\_notes\_url | string | Host notes URL shortcut |
| host\_notes | string | Host notes |
| description | string | Service description (name) |
| display\_name | string | Service display name |
| service\_id | integer | Service ID |
| state | integer | Service state: 0=OK, 1=WARNING, 2=CRITICAL, 3=UNKNOWN |
| state\_type | integer | Service state type: 0=SOFT, 1=HARD |
| output | string | Service plugin output |
| perfdata | string | Performance data |
| current\_attempt | integer | Current attempt count |
| last\_update | timestamp | Last data update |
| last\_state\_change | timestamp | Last state change |
| last\_hard\_state\_change | timestamp | Last HARD state change |
| next\_check | timestamp | Next scheduled check |
| max\_check\_attempts | integer | Maximum check attempts for service |
| action\_url | string | Service action URL shortcut |
| notes\_url | string | Service notes URL shortcut |
| notes | string | Service notes |
| icon\_image | string | Service icon image path |
| passive\_checks | boolean | Whether passive checks are accepted |
| active\_checks | boolean | Whether active checks are enabled |
| acknowledged | boolean | Whether the service is acknowledged |
| notify | boolean | Whether notifications are enabled |
| scheduled\_downtime\_depth | integer | Number of active downtimes |
| flapping | boolean | Whether the service is flapping |
| event\_handler\_enabled | boolean | Whether the event handler is enabled |
| criticality | integer | Criticality level |

**Example:**

```
GET api.domain.tld/centreon/api/index.php?action=list&object=centreon_realtime_services&limit=60&viewType=all&sortType=name&order=desc&fields=id,description,host_id,host_name,state,output
```

---

### Submit results

Submits passive check results to the monitoring engine. Results are forwarded to the poller managing the target host or service.

**Required permissions:** Administrator, or a user with "Reach API Configuration" enabled in their contact profile.

**Endpoint:** `POST api.domain.tld/centreon/api/index.php?action=submit&object=centreon_submit_results`

#### Service result fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| host | string | Yes | Host name |
| service | string | Yes | Service description |
| status | string or integer | Yes | `0`/`ok`, `1`/`warning`, `2`/`critical`, `3`/`unknown` |
| output | string | Yes | Status message |
| perfdata | string | No | Performance data in Nagios plugin format |
| updatetime | timestamp | Yes | Check time as a Unix timestamp |

#### Host result fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| host | string | Yes | Host name |
| status | string or integer | Yes | `0`/`up`, `1`/`down`, `2`/`unknown` |
| output | string | Yes | Status message |
| updatetime | timestamp | Yes | Check time as a Unix timestamp |

#### Example — submit service results

**Body:**

```json
{
    "results": [
        {
            "updatetime": "1528884076",
            "host": "Centreon-Central",
            "service": "Memory",
            "status": "2",
            "output": "CRITICAL: Memory usage at 95%",
            "perfdata": "used=3800MB;3000;3500;0;4096"
        },
        {
            "updatetime": "1528884076",
            "host": "Centreon-Central",
            "service": "CPU",
            "status": "1",
            "output": "WARNING: CPU usage at 82%",
            "perfdata": "cpu=82%;70;90;0;100"
        }
    ]
}
```

**Response:**

```json
{
    "results": [
        {
            "code": 202,
            "message": "The status send to the engine"
        },
        {
            "code": 202,
            "message": "The status send to the engine"
        }
    ]
}
```

**Example error response (service not found):**

```json
{
    "results": [
        {
            "code": 404,
            "message": "The service is not present."
        }
    ]
}
```

---

### Business activity

Returns real-time status for Business Activities (requires the BAM module). Results are sorted by impact.

**Endpoint:**

```
GET api.domain.tld/centreon/api/index.php?object=centreon_bam_realtime_ba&action=list
```

**Query parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ba\_id | integer | Filter by BA ID |
| search | string | Filter pattern on BA name |
| business\_view | string | Filter pattern on business view name |
| status | string | Filter by status: `OK`, `Warning`, `Critical`, `Unknown` (comma-separate for multiple) |
| limit | integer | Results per page (default: 30) |
| number | integer | Page number, zero-based (default: 0) |

**Example:**

```
GET api.domain.tld/centreon/api/index.php?object=centreon_bam_realtime_ba&action=list&status=ok&number=0&limit=2
```

**Response:**

```json
[
    {
        "id": "49",
        "name": "Africa Office Availability",
        "description": "Africa Office Availability",
        "level_w": "12",
        "level_c": "12",
        "current_level": "100",
        "acknowledged": "0",
        "last_state_change": "1518663959",
        "current_status": "0",
        "in_downtime": "0",
        "kpis": [
            "372",
            "373",
            "401",
            "402"
        ]
    },
    {
        "id": "50",
        "name": "Asia Office Availability",
        "description": "Asia Office Availability",
        "level_w": "12",
        "level_c": "12",
        "current_level": "100",
        "acknowledged": "0",
        "last_state_change": "1519029327",
        "current_status": "0",
        "in_downtime": "0",
        "kpis": [
            "374",
            "375",
            "376"
        ]
    }
]
```

**Response field descriptions:**

| Field | Description |
|-------|-------------|
| current\_status | 0=OK, 1=Warning, 2=Critical, 3=Unknown |
| current\_level | Health level as a percentage (0–100) |
| level\_w | Warning threshold |
| level\_c | Critical threshold |
| kpis | List of KPI IDs contributing to this BA |
| number | Page number (first page is 0) |
| limit | Page limit (default: 30) |

---

### KPI

Returns real-time status for Key Performance Indicators. Results are sorted by impact.

**Endpoint:**

```
GET api.domain.tld/centreon/api/index.php?object=centreon_bam_realtime_kpi&action=list
```

**Query parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| kpi\_id | integer | Filter by KPI ID |
| kpi\_search | string | Filter pattern on KPI name |
| ba\_search | string | Filter pattern on BA name |
| is\_impacting | boolean | Filter on impacting KPIs: `true`, `false` |
| kpi\_status | string | Filter by KPI status: `ok`, `warning`, `critical`, `unknown` (comma-separate for multiple) |
| ba\_status | string | Filter by BA status: `OK`, `Warning`, `Critical`, `Unknown` (comma-separate for multiple) |
| limit | integer | Results per page (default: 30) |
| number | integer | Page number, zero-based (default: 0) |

**Example:**

```
GET api.domain.tld/centreon/api/index.php?object=centreon_bam_realtime_kpi&action=list&kpi_status=ok,warning&number=0&limit=2
```

**Response:**

```json
[
    {
        "id": "366",
        "activate": "1",
        "ba_id": "47",
        "ba_name": "DB-Oracle-Accounting",
        "ba_activate": "1",
        "type": "0",
        "kpi_host": "srv-oracle-accounting",
        "kpi_host_id": "149",
        "kpi_service": "Query -Stores-",
        "kpi_service_id": "1172",
        "kpi_ba": "",
        "kpi_ba_id": "",
        "kpi_meta": "",
        "kpi_meta_id": "",
        "kpi_boolean": "",
        "kpi_boolean_id": "",
        "last_state_change": "1517297343",
        "current_impact": "0",
        "in_downtime": "0",
        "acknowledged": "0",
        "warning_impact": "0",
        "critical_impact": "30",
        "unknown_impact": "10",
        "name": "srv-oracle-accounting / Query -Stores-",
        "type_label": "Service",
        "output": "Query <Stores> executed on 0.021 second",
        "current_status": "0",
        "current_status_label": "OK",
        "ba_current_status": "0",
        "ba_current_status_label": "OK"
    },
    {
        "id": "365",
        "activate": "1",
        "ba_id": "47",
        "ba_name": "DB-Oracle-Accounting",
        "ba_activate": "1",
        "type": "0",
        "kpi_host": "srv-oracle-accounting",
        "kpi_host_id": "149",
        "kpi_service": "Query -Stock-",
        "kpi_service_id": "1171",
        "kpi_ba": "",
        "kpi_ba_id": "",
        "kpi_meta": "",
        "kpi_meta_id": "",
        "kpi_boolean": "",
        "kpi_boolean_id": "",
        "last_state_change": "1511356592",
        "current_impact": "0",
        "in_downtime": "0",
        "acknowledged": "0",
        "warning_impact": "0",
        "critical_impact": "30",
        "unknown_impact": "10",
        "name": "srv-oracle-accounting / Query -Stock-",
        "type_label": "Service",
        "output": "Query <Stock> executed on 0.786 second",
        "current_status": "0",
        "current_status_label": "OK",
        "ba_current_status": "0",
        "ba_current_status_label": "OK"
    }
]
```

**Response field descriptions:**

| Field | Description |
|-------|-------------|
| type | KPI type: 0=service, 1=metaservice, 2=BA, 3=boolean rule |
| current\_status | 0=OK, 1=Warning, 2=Critical, 3=Unknown |
| ba\_current\_status | 0=OK, 1=Warning, 2=Critical, 3=Unknown |
| current\_impact | Current impact on the linked BA (percentage) |
| warning/critical/unknown\_impact | Configured impact weights |
| number | Page number (first page is 0) |
| limit | Page limit (default: 30) |

---
id: ega-rest-api-v1
title: EGA REST API (v1)
---

This reference material will benefit developers familiar with HTTP requests and JSON.
It explains how to use the Service Mapping API (Centreon BAM). If you are not familiar with the JSON API,
we recommend for you to use the Centreon command line API (CLAPI)
documentation.

*This documentation is only available in English.*

## Authentication

**Permissions**

Performing API calls as a specific Centreon user requires the necessary
permission. You must edit the user settings through the **Configuration
\> Users \> Contacts/Users** menu. First edit the user, and then on the
second tab, check the **Reach API** box.

**How to authenticate**

Using the POST request method and the URL below: :

    api.domain.tld/centreon/api/index.php?action=authenticate

Body form-data:

  Parameter    |     Type       |        Value
  -------------|----------------|-------------------------------------------------------
  username     |     Text       |        The user name you use to log in to Centreon
  password     |     Text       |        Your Centreon password

The response is a JSON flow returning the authentication token:

    {
    "authToken": "NTc1MDU3MGE3M2JiODIuMjA4OTA2OTc="
    }

This token will be used later on the other API actions.

> The token is available for one hour and is refreshed after each request.
If no request is sent within one hour, you must authenticate again to
get a new token.

## Error codes

+------------------------+---------------------------------------------+
| **Code**               | > **Messages**                              |
+------------------------+---------------------------------------------+
| > 200                  | Successful                                  |
+------------------------+---------------------------------------------+
| > 400                  | -   Missing parameter                       |
|                        | -   Missing name parameter                  |
|                        | -   Unknown parameter                       |
|                        | -   Objects are not linked                  |
+------------------------+---------------------------------------------+
| > 401                  | Unauthorized                                |
+------------------------+---------------------------------------------+
| > 404                  | -   Object not found                        |
|                        | -   Method not implemented into Centreon    |
|                        |     API                                     |
+------------------------+---------------------------------------------+
| > 409                  | -   Object already exists                   |
|                        | -   Name is already in use                  |
|                        | -   Objects already linked                  |
+------------------------+---------------------------------------------+
| > 500                  | Internal server error (custom message)      |


## Configuration 


Actions performed through the command line API(CLAPI) are available in the REST API.

> Example à améliorer pour donner un truc plus parlant que les BV

Here is an example on how to list a Business View (BV) using the REST
API.

Use the POST method and URL below: :

    api.domain.tld/centreon/api/index.php?action=action&object=centreon_clapi

**Header:**

key               | value                        
------------------|---------------------------------
Content-Type      | application/JSON              
centreon-auth-token | the value of authToken received from authentication response

**Body:** :

    {
     "action":"show",
     "object":"bv"
    }

-   The **action** key corresponds to the option **-a** in Centreon
    CLAPI. The value **show** corresponds to the **-a** option value.
-   The **object** key corresponds to the option **-o** in Centreon
    CLAPI. The value **bv** corresponds to the **-o** option value.

The equivalent action using Centreon CLAPI is: :

    [root@centreon ~]# ./centreon -u $USER$ -p $PASS$ -o BV -a show

**Response:**

The response is a JSON flow listing all hosts, formated as follows: :

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

> Some actions require the values key (the option **-v** in Centreon
CLAPI). Depending on the action called, the body may contain the
**values** key. This will be discussed in detail below.

The CLAPI chapter in this documentation describes all add/update/delete
actions possible for Centreon BAM objects.

## Real Time

###  Business activity

All monitoring information on Business Activites is available through
the Centreon API. The BA list is sorted by *impact*.

Use the GET method and URL below: :

    api.domain.tld/centreon/api/index.php?object=centreon_bam_realtime_ba&action=list

**Header:**

  key                  | value
  ---------------------|-----------------------------------------------------------------------
  Content-Type         | application/JSON
  centreon-auth-token  | value of authToken received from the authentication response

**Parameters**

You can pass a number of parameters to select the data you want.


  Parameters      |values
  ----------------|------------------------------------------------------
  ba_id           | filter on BA ID
  search          | filter pattern on BA name
  business_view   | filter pattern on business view name
  status          | filter on BA status (OK, Warning, Critical, Unknown); multiple statuses separated by commas
  limit           | number of desired lines
  number          | page number

Use the GET method and URL below: :

    api.domain.tld/centreon/api/index.php?object=centreon_bam_ba_realtime&action=list&status=ok&number=0&limit=2

**Response** :

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

Additionnal information:

* current_status: 0 = OK, 1 = warning, 2 = Critical, 3 = Unknown
* current_impact: impact on linked BA in \%
* number: page number (first page is 0)
* limit: page limit (default= 30)

###  KPI real-time information

All monitoring information for Key Performance Indicators(KPI) is
available through the Centreon API. The kpi list is sorted by *impact*.

Use the GET method and URL below: :

    api.domain.tld/centreon/api/index.php?object=centreon_bam_realtime_kpi&action=list

**Header:**

  key                   | value
  ---------------------|---------------------------------
  Content-Type         | application/JSON
  centreon-auth-token  | the value of authToken you got on the authentication response

**Parameters**

You can pass a number of parameters to select the data you want:

  Parameters      | values
  ----------------|------------------------------------------------------
  kpi\_id         | filter on KPI ID
  kpi\_search     | filter pattern on KPI name
  ba\_search      | filter pattern on BA name
  is\_impacting   | filter on impacting KPI (false, true)
  kpi\_status     | filter on KPI status (ok, warning, critical, unknown) multiple statuses can be set separated by commas
  ba\_status      | filter on BA status (OK, Warning, Critical, Unknown) multiple status separated by commas
  limit           | number of desired lines
  number          | page number

Use the GET method and URL below: :

    api.domain.tld/centreon/api/index.php?object=centreon_bam_realtime_kpi&action=list&kpi_status=ok,warning&number=0&limit=2

**Response** :

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

Additionnal information:

-   kpi\_type: 0 = service, 1 = metaservice, 2 = BA, 3 = boolean rule
-   kpi\_name: name of the kpi (\<host\> / \<service\> or
    \<metaservice\> or \<ba\_name\> or \<boolean\_rule\>)
-   kpi\_current\_status: 0 = OK, 1 = Warning, 2 = Critical, 3 = Unknown
-   ba\_current\_status: 0 = OK, 1 = Warning, 2 = Critical, 3 = Unknown
-   current\_impact: impact on linked BA in %
-   number: page number (first page is 0)
-   limit: page limit (default= 30)

KPI real-time information
=========================

All monitoring information for Key Performance Indicators(KPI) is
available through the Centreon API. The kpi list is sorted by *impact*.

Use the GET method and URL below: :

    api.domain.tld/centreon/api/index.php?object=centreon_bam_realtime_kpi&action=list

**Header:**

  -------------------------------------------------------
  key                   value
  --------------------- ---------------------------------
  Content-Type          application/JSON

  centreon-auth-token   the value of authToken you got on
                        the authentication response
  -------------------------------------------------------

**Parameters**

You can pass a number of parameters to select the data you want:

  -----------------------------------------------------------------------
  Parameters       values
  ---------------- ------------------------------------------------------
  kpi\_id          filter on KPI ID

  kpi\_search      filter pattern on KPI name

  ba\_search       filter pattern on BA name

  is\_impacting    filter on impacting KPI (false, true)

  kpi\_status      filter on KPI status (ok, warning, critical, unknown)
                   multiple statuses can be set separated by commas

  ba\_status       filter on BA status (OK, Warning, Critical, Unknown)
                   multiple status separated by commas

  limit            number of desired lines

  number           page number
  -----------------------------------------------------------------------

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

**Notes**

-   kpi\_type: 0 = service, 1 = metaservice, 2 = BA, 3 = boolean rule
-   kpi\_name: name of the kpi (\<host\> / \<service\> or
    \<metaservice\> or \<ba\_name\> or \<boolean\_rule\>)
-   kpi\_current\_status: 0 = OK, 1 = Warning, 2 = Critical, 3 = Unknown
-   ba\_current\_status: 0 = OK, 1 = Warning, 2 = Critical, 3 = Unknown
-   current\_impact: impact on linked BA in %
-   number: page number (first page is 0)
-   limit: page limit (default= 30)

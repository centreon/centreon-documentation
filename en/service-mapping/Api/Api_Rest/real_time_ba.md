BA real-time information
========================

All monitoring information on Business Activites is available through
the Centreon API. The BA list is sorted by *impact*.

Use the GET method and URL below: :

    api.domain.tld/centreon/api/index.php?object=centreon_bam_realtime_ba&action=list

**Header:**

  -------------------------------------------------------
  key                   value
  --------------------- ---------------------------------
  Content-Type          application/JSON

  centreon-auth-token   value of authToken received from
                        the authentication response
  -------------------------------------------------------

**Parameters**

You can pass a number of parameters to select the data you want.

  -----------------------------------------------------------------------
  Parameters       values
  ---------------- ------------------------------------------------------
  ba\_id           filter on BA ID

  search           filter pattern on BA name

  business\_view   filter pattern on business view name

  status           filter on BA status (OK, Warning, Critical, Unknown);
                   multiple statuses separated by commas

  limit            number of desired lines

  number           page number
  -----------------------------------------------------------------------

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

**Notes**

-   current\_status: 0 = OK, 1 = warning, 2 = Critical, 3 = Unknown
-   current\_impact: impact on linked BA in %
-   number: page number (first page is 0)
-   limit: page limit (default= 30)

---
id: monitoring-guide
title: Monitoring Centreon-HA
---

## Monitoring the cluster processes and resources

First, please refer to the [Linux SNMP Plugin-Pack documentation page](integrations/plugin-packs/procedures/operatingsystems-linux-snmp.md) to install all the required components and monitor the basic system health indicators of both of the central nodes.

Then refer to the [Centreon-HA Plugin-Pack documentation page](integrations/plugin-packs/procedures/applications-monitoring-centreon-ha.md) to monitor the clustering services and cluster resources on both of the central nodes.

## Monitoring the MariaDB Replication

Refer to the [MySQL/MariaDB Plugin-Pack documentation page](integrations/plugin-packs/procedures/applications-databases-mysql.md) to install all the required components and monitor the standard MariaDB health indicators of both of the central nodes.

The poller's IP address must be a recognized login source for the databases. These *GRANT* requests must therefore be run on the primary database and they will be immediately replicated to the secondary node (replace the fields between brackets):

```sql
CREATE USER '<login>'@'<poller ip address>' IDENTIFIED BY '<password>';
GRANT SELECT on centreon.* TO '<login>'@'<poller ip address>' ;
GRANT SELECT on centreon_storage.* TO '<login>'@'<poller ip address>' ;
GRANT REPLICATION CLIENT on *.* TO '<login>'@'<poller ip address>' ;
```

After having applied the *App-DB-MySQL-custom* host template and set the correct values for *PORT*, *USERNAME* and *PASSWORD* macros, make sure that all the default services are checked successfully (no *UNKNOWN* states).

Then add a new service by browsing to `Configuration` > `Services` > `Services by host` and clicking `Add` and fill the form according to this table:

| Field               | Value                                                           |
|:--------------------|:----------------------------------------------------------------|
| *Description*       | MariaDB-Replication                                             |
| *Linked with Hosts* | Central node                                                    |
| *Template*          | App-DB-MySQL-MariaDB-Replication                                |
| `PEERHOST`          | IP address of the other central node                            |
| `PEERPORT`          | Port of the other central node's MariaDB server (default: 3306) |
| `PEERUSERNAME`      | Login of the other central node's MariaDB server                |
| `PEERPASSWORD`      | Password of the other central node's MariaDB server             |

Then click `Save` and export and apply your poller's configuration.

The output of this service should look like:

```text
OK: No problems. Replication is ok.
Connection Status 'mysql:host=<host ip address>;port=3306' [OK]
Connection Status 'mysql:host=<peer node ip address>;port=3306' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

## Monitoring the Quorum Device

First refer to the [Linux SNMP Plugin-Pack documentation page](integrations/plugin-packs/procedures/operatingsystems-linux-snmp.md) to install all the required components and monitor the basic system health indicators of the server supporting the Quorum Device.

Then add a new service by browsing to `Configuration` > `Services` > `Services by host` and clicking `Add` and fill the form according to this table:

| Field               | Value                                                    |
|:--------------------|:---------------------------------------------------------|
| *Description*       | proc-corosync-qnetd                                      |
| *Linked with Hosts* | Server supporting the Quorum Device                      |
| *Template*          | App-Monitoring-Centreon-HA-Process-corosync-qnetd-custom |


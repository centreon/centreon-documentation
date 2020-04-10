---
id: remote-server
title: Install on a Remote Server
---

The procedure for installing the Centreon BAM module on a Centreon Remote Server
is the same as on a Central server and needs additionnal action.

  Step 1: Install the extension using the standard install procedure
  Step 2: Follow the extra steps described below.

## Step 2: Configure Centreon Broker

Configuring the Centreon BAM module on a Centreon Remote Server requires
configuring the Centreon Broker *from* the Centreon Central Server. This allows
the Centreon Remote Server to manage calculations on Centreon BAM. The
configuration will be automatically sent to the Centreon Remote Server when you
export your business activities to the Centreon Remote Server from the central
server.

To do so, you need to modify the Centreon Broker Master configuration of the
Centeon Remote poller. Go to the **Configuration \> Pollers \> Broker
configuration** menu and edit the remote poller configuration.

### Monitoring output

In the Output tab, select **BAM - Monitoring engine (BAM)** and click on
**Add**:

![image](assets/service-mapping/remote-server/conf_poller_bam_monitoring.png)

Please consult the following table for the appropriate field values:

| **Fields**                      | **Values**                                                             |
| ------------------------------- | ---------------------------------------------------------------------- |
| Name                            | remote-server-bam-monitoring                                           |
| Filter category                 | *None*                                                                 |
| Storage DB Name                 | centreon\_storage                                                      |
| Cache                           | No                                                                     |
| Replication enabled             | No                                                                     |
| Command file path               | /var/lib/centreon-engine/rw/centengine.cmd                             |
| DB host                         | localhost                                                              |
| DB name                         | centreon                                                               |
| DB password                     | *Retrieve it from /etc/centreon/conf.pm on the Centreon Remote Server* |
| DB port                         | 3306                                                                   |
| DB type                         | MariaDB                                                                  |
| DB user                         | centreon                                                               |
| Maximum queries per transaction | 0                                                                      |
| Transaction commit timeout      | 5                                                                      |
| Retry interval                  | 5                                                                      |

### Reporting output

Select the **BAM - BI engine (BAM)** configuration type and click on **Add**:

![image](assets/service-mapping/remote-server/conf_poller_bam_reporting.png)

Please consult the following table for the appropriate field values:

| **Fields**                      | **Values**                                                             |
| ------------------------------- | ---------------------------------------------------------------------- |
| Name                            | remote-server-bam-reporting                                            |
| Filter category                 | BAM                                                                    |
| Replication enabled             | No                                                                     |
| DB host                         | localhost                                                              |
| DB name                         | centreon\_storage                                                      |
| DB password                     | *Retrieve it from /etc/centreon/conf.pm on the Centreon Remote Server* |
| DB port                         | 3306                                                                   |
| DB type                         | MariaDB                                                                  |
| DB user                         | centreon                                                               |
| Maximum queries per transaction | 0                                                                      |
| Transaction commit timeout      | 5                                                                      |
| Retry interval                  | 5                                                                      |

To complete the installation process, generate and export the Centreon Remote
Server configuration by selecting **Restart**.

---
id: remote-server
title: Install on a remote server
---

The procedure for installing the Centreon BAM module on a Centreon remote server
is the same as on a central server and needs additionnal action.

> After you installed the Centreon BAM module using the standard installation procedure, please follow the additional steps described below.

## Configure Centreon Broker

Configuring the Centreon BAM module on a Centreon remote server requires
configuring the Centreon Broker from the Centreon central server. This allows
the Centreon remote server to manage calculations on Centreon BAM. The
configuration will be automatically sent to the Centreon remote server when you
export your business activities to the Centreon remote server from the central
server.

To do so, you need to modify the Centreon Broker Master configuration of the
Centreon remote poller. Go to the **Configuration > Pollers > Broker
configuration** menu and edit the **remote server's** configuration.

### Monitoring output

In the **Output** tab, select **BAM - Monitoring engine (BAM)** and click on
**Add**:

![image](../assets/service-mapping/remote-server/conf_poller_bam_monitoring.png)

Please refer to the following table for the appropriate field values:

| Fields                          | Values                                                                 |
|---------------------------------|------------------------------------------------------------------------|
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
| DB type                         | MySQL                                                                  |
| DB user                         | centreon                                                               |
| Maximum queries per transaction | 0                                                                      |
| Transaction commit timeout      | 5                                                                      |
| Retry interval                  | 5                                                                      |

### Reporting output

Select the **BAM - BI engine (BAM)** configuration type and click on **Add**:

![image](../assets/service-mapping/remote-server/conf_poller_bam_reporting.png)

Please refer to the following table for the appropriate field values:

| Fields                          | Values                                                                 |
|---------------------------------|------------------------------------------------------------------------|
| Name                            | remote-server-bam-reporting                                            |
| Filter category                 | BAM                                                                    |
| Replication enabled             | No                                                                     |
| DB host                         | localhost                                                              |
| DB name                         | centreon\_storage                                                      |
| DB password                     | *Retrieve it from /etc/centreon/conf.pm on the Centreon Remote Server* |
| DB port                         | 3306                                                                   |
| DB type                         | MySQL                                                                  |
| DB user                         | centreon                                                               |
| Maximum queries per transaction | 0                                                                      |
| Transaction commit timeout      | 5                                                                      |
| Retry interval                  | 5                                                                      |

To complete the installation process, generate and deploy the Centreon remote
server configuration by selecting **Restart**.

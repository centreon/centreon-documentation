---
id: prerequisites
title: Prerequisites
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This topic gives you broad guidelines to determine the size of your platform. For more complex cases, here is a [workbook](../assets/files/Centreon_platform_sizing.xlsx) to calculate the size of your platform (number of servers, disk space, etc).

## Architecture

First, use the guildelines described on the [Architectures](./architectures.md#what-kind-of-architecture-do-you-need) page to determine the type of architecture you need.

## Characteristics of the servers

* The more services you monitor, the more CPU you need.
* The space used to store collected performance data depends on several criteria:

   * Frequency of checks
   * Number of checks
   * Retention time
   * Average number of metrics per service

* The number of users simultaneously connected to the interface of the central/remote server has an impact on performance. If a lot of users will have to log in to the Centreon interface at the same time, you will need more CPU.

The following data is meant for:

* An average of 10 services per host.
* Data is collected every 5 minutes.
* The retention period is 6 months.
* Each service has 2 metrics.

You need to adapt the following figures to your actual values.

<Tabs groupId="sync">
<TabItem value="<200 hosts" label="<200 hosts">

Standalone central server:

* 4 CPU
* RAM: 4 GB

This is how your central server should be partitioned:

| File system                | Description | Size                                                     |
|----------------------------|-------------|----------------------------------------------------------|
| swap                       | swap | 1 to 1.5 total size of RAM space                                |
| /                          | system root            | at least 20 GB                                |
| /var/log                   | contains all log files | at least 10 GB                                |
| /var/lib/centreon-broker   | contains retention files | at least 5 GB                               |
| /var/cache/centreon/backup | backup directory | at least 10 GB (export the backups and delete the exported data daily) |
| /var/lib/centreon          | contains mostly RRD files | 2 GB       |
| /var/lib/mysql (only if the DBMS is on the central server)          | database | 5 GB        |

> Your system must use LVM to manage the file system.

</TabItem>
<TabItem value="200 to 2000 hosts" label="200 to 2000 hosts">

Distributed architecture:

* 1 central server
* 1 poller for every 500 hosts

### Central server

* 4 CPU
* RAM: 4 GB

This is how your central server should be partitioned:

| File system                | Description | Size                                                     |
|----------------------------|-------------|----------------------------------------------------------|
| swap                       | swap | 1 to 1.5 total size of RAM space                                |
| /                          | system root            | at least 20 GB                                |
| /var/log                   | contains all log files | at least 10 GB                                |
| /var/lib/centreon-broker   | contains retention files | at least 5 GB                               |
| /var/cache/centreon/backup | backup directory | at least 10 GB (export the backups and delete the exported data daily) |
| /var/lib/centreon          | contains mostly RRD files | 2 to 5 GB       |
| /var/lib/mysql (only if the DBMS is on the central server)          | database | 5 to 10 GB        |

> Your system must use LVM to manage the file system.

> At least 1 GB of non-allocated free space must be available for the **volume group** containing **/var/lib/mysql**,
> if you wish to use **snapshot LVM** as a backup method.

### Pollers

* To handle between 2000 services with checks every 5 minutes to 500 services with checks every minute:

  | Element                     | Value     |
  | ----------------------------| --------- |
  | CPU  (logical core at 3Ghz) | 2 vCPU    |
  | RAM                         | 2 GB      |

* To handle up to 7000 services with checks every 5 minutes:

  | Element                     | Value     |
  | ----------------------------| --------- |
  | CPU  (logical core at 3Ghz) | 4 vCPU    |
  | RAM                         | 4 GB      |

This is how the pollers sould be partitioned:

| File system                | Description | Size                                                     |
|----------------------------|-------------|----------------------------------------------------------|
| swap                       | swap | 1 to 1.5 total size of RAM space                                |
| /                          | system root            | at least 20 GB                                |
| /var/log                   | contains all log files | at least 10 GB                                |
| /var/lib/centreon-broker   | contains retention files | at least 5 GB                               |

> Your system must use LVM to manage the file system.

> The number of
> vCPU depends of the complexity of checks. If you use connectors or perform a large number of system/third-party
> binary calls, you should add more vCPU.

</TabItem>
<TabItem value="2000 to 10000 hosts" label="2000 to 10000 hosts">

Distributed architecture:

* 1 central server
* 1 poller for every 500 hosts

### Central server

* 8 CPU
* RAM: 8 GB

This is how your central server should be partitioned:

| File system                | Description | Size                                                     |
|----------------------------|-------------|----------------------------------------------------------|
| swap                       | swap | 1 to 1.5 total size of RAM space                                |
| /                          | system root            | at least 20 GB                                |
| /var/log                   | contains all log files | at least 10 GB                                |
| /var/lib/centreon-broker   | contains retention files | at least 5 GB                               |
| /var/cache/centreon/backup | backup directory | at least 10 GB (export the backups and delete the exported data daily) |
| /var/lib/centreon          | contains mostly RRD files | 54 to 270 GB       |
| /var/lib/mysql (only if the DBMS is on the central server)          | database | 186 to 930 GB        |

> Your system must use LVM to manage the file system.

> At least 1 GB of non-allocated free space must be available for the **volume group** containing **/var/lib/mysql**,
> if you wish to use **snapshot LVM** as a backup method.

### Pollers

* To handle between 2000 services with checks every 5 minutes to 500 services with checks every minute:

  | Element                     | Value     |
  | ----------------------------| --------- |
  | CPU  (logical core at 3Ghz) | 2 vCPU    |
  | RAM                         | 2 GB      |

* To handle up to 7000 services with checks every 5 minutes:

  | Element                     | Value     |
  | ----------------------------| --------- |
  | CPU  (logical core at 3Ghz) | 4 vCPU    |
  | RAM                         | 4 GB      |

This is how the pollers sould be partitioned:

| File system                | Description | Size                                                     |
|----------------------------|-------------|----------------------------------------------------------|
| swap                       | swap | 1 to 1.5 total size of RAM space                                |
| /                          | system root            | at least 20 GB                                |
| /var/log                   | contains all log files | at least 10 GB                                |
| /var/lib/centreon-broker   | contains retention files | at least 5 GB                               |

> Your system must use LVM to manage the file system.

> The number of
> vCPU depends of the complexity of checks. If you use connectors or perform a large number of system/third-party
> binary calls, you should add more vCPU.

</TabItem>
<TabItem value=">10000 hosts" label=">10000 hosts">

For very large amounts of data, contact your sales representative.

</TabItem>
</Tabs>

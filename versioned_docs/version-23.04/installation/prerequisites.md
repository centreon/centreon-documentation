---
id: prerequisites
title: Prerequisites
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This topic gives you broad guidelines to determine the size of your platform.

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
* The retention period is 12 months.
* Each service has on average 8 metrics.

You need to adapt the following figures to your actual values. Bear in mind that you may need to adjust the size of your platform as you add more hosts over time.

<Tabs groupId="Sizing" queryString>
<TabItem value="Up to 500 hosts" label="Up to 500 hosts">

Standalone central server:

| Element                     | Value     |
| ----------------------------| --------- |
| CPU                         | 4 vCPU    |
| RAM                         | 4 GB      |

This is how your central server should be partitioned:

| Volume group (LVM) | File system                | Description | Size                                                     |
| - |----------------------------|-------------|----------------------------------------------------------|
| | /boot | boot images | 1 GB |
| vg_root | /                          | system root            | 20 GB                                |
| vg_root | swap                       | swap | 4 GB                               |
| vg_root | /var/log                   | contains all log files | 10 GB                                |
| vg_data | /var/lib/centreon          | contains mostly RRD files | 34 GB |
| vg_data | /var/lib/centreon-broker   | contains broker retention files | 5 GB                               |
| vg_data | /var/lib/centreon-engine | contains engine retention files | 5 GB |
| vg_data | /var/lib/mysql (only if the DBMS is on the central server)          | database | 106 GB        |
| vg_data | /var/cache/centreon/backup | backup directory | 10 GB <br/>If you perform backups, use the following characteristics: <ul><li>size of the /var/lib/mysql partition * 0,6</li><li>this size is meant for 1 full backup and 6 partial ones</li><li>this is only an estimate, size should be checked manually</li></ul> |
| vg_data |  | Free space (unallocated) | 5 GB |

> Your system must use LVM to manage the file system.

In some cases, you may want to set up a distributed architecture, even for less than 500 hosts. The poller will have the same characteristics as for up to 1,000 hosts.

</TabItem>
<TabItem value="Up to 1,000 hosts" label="Up to 1,000 hosts">

Distributed architecture:

* 1 central server
* 1 poller for every 500 hosts

**Central server**

| Element                     | Value     |
| ----------------------------| --------- |
| CPU                         | 4 vCPU    |
| RAM                         | 8 GB      |

This is how your central server should be partitioned:

| Volume group (LVM) | File system                | Description | Size                                                     |
| - |----------------------------|-------------|----------------------------------------------------------|
| | /boot | boot images | 1 GB |
| vg_root | /                          | system root            | 20 GB                                |
| vg_root | swap                       | swap | 4 GB                               |
| vg_root | /var/log                   | contains all log files | 10 GB                                |
| vg_data | /var/lib/centreon          | contains mostly RRD files | 68 GB |
| vg_data | /var/lib/centreon-broker   | contains retention files | 10 GB                               |
| vg_data | /var/lib/centreon-engine | | 5 GB |
| vg_data | /var/lib/mysql (only if the DBMS is on the central server)          | database | 213 GB        |
| vg_data | /var/cache/centreon/backup | backup directory | 10 GB <br/>If you perform backups, use the following characteristics: <ul><li>size of the /var/lib/mysql partition * 0,6</li><li>this size is meant for 1 full backup and 6 partial ones</li><li>this is only an estimate, size should be checked manually</li></ul> |
| vg_data |  | Free space (unallocated) | 5 GB |

> Your system must use LVM to manage the file system.

> At least 1 GB of non-allocated free space must be available for the **volume group** containing **/var/lib/mysql**,
> if you wish to use **snapshot LVM** as a backup method.

**Pollers**

* To handle testing or small environments (up to 2000 services with checks every 5 minutes, or up to 500 services with checks every minute):

| Element                     | Value     |
| ----------------------------| --------- |
| CPU  (logical core at 3Ghz) | 2 vCPU    |
| RAM                         | 2 GB      |
| HDD                         | 40 GB     |

* To handle production environments (up to 7000 services with checks every 5 minutes):

| Element                     | Value     |
| ----------------------------| --------- |
| CPU  (logical core at 3Ghz) | 4 vCPU    |
| RAM                         | 4 GB      |
| HDD                         | 40 GB     |

This is how the pollers should be partitioned:

| Volume group (LVM) | File system                | Description | Size                                                     |
|-| ----------------------------|-------------|----------------------------------------------------------|
| | /boot | boot images | 1 GB |
|  vg_root | /                          | system root            | 20 GB                                |
| vg_root | swap                       | swap | 4 GB                               |
| vg_root | /var/log                   | contains all log files | 10 GB                                |
| vg_data | /var/lib/centreon-engine   |  | 5 GB                               |

> Your system must use LVM to manage the file system.

> The number of
> vCPU depends of the complexity of checks. If you use connectors or perform a large number of system/third-party
> binary calls, you should add more vCPU.

</TabItem>
<TabItem value="Up to 2,500 hosts" label="Up to 2,500 hosts">

Distributed architecture:

* 1 central server
* 1 poller for every 500 hosts

**Central server**

| Element                     | Value     |
| ----------------------------| --------- |
| CPU                         | 4 vCPU    |
| RAM                         | 8 GB      |

This is how your central server should be partitioned:

| Volume group (LVM) | File system                | Description | Size                                                     |
| - |----------------------------|-------------|----------------------------------------------------------|
| | /boot | boot images | 1 GB |
| vg_root | /                          | system root            | 20 GB                                |
| vg_root | swap                       | swap | 4 GB                               |
| vg_root | /var/log                   | contains all log files | 10 GB                                |
| vg_data | /var/lib/centreon          | contains mostly RRD files | 169 GB |
| vg_data | /var/lib/centreon-broker   | contains retention files | 25 GB                               |
| vg_data | /var/lib/centreon-engine | | 5 GB |
| vg_data | /var/lib/mysql (only if the DBMS is on the central server)          | database | 538 GB        |
| vg_data | /var/cache/centreon/backup | backup directory | 10 GB <br/>If you perform backups, use the following characteristics: <ul><li>size of the /var/lib/mysql partition * 0,6</li><li>this size is meant for 1 full backup and 6 partial ones</li><li>this is only an estimate, size should be checked manually</li></ul>    |
| vg_data |  | Free space (unallocated) | 5 GB |

> Your system must use LVM to manage the file system.

> At least 1 GB of non-allocated free space must be available for the **volume group** containing **/var/lib/mysql**,
> if you wish to use **snapshot LVM** as a backup method.

**Pollers**

* To handle testing or small environments (up to 2000 services with checks every 5 minutes, or up to 500 services with checks every minute):

| Element                     | Value     |
| ----------------------------| --------- |
| CPU  (logical core at 3Ghz) | 2 vCPU    |
| RAM                         | 2 GB      |
| HDD                         | 40 GB     |

* To handle production environments (up to 7000 services with checks every 5 minutes):

| Element                     | Value     |
| ----------------------------| --------- |
| CPU  (logical core at 3Ghz) | 4 vCPU    |
| RAM                         | 4 GB      |
| HDD                         | 40 GB     |

This is how the pollers should be partitioned:

| Volume group (LVM) | File system                | Description | Size                                                     |
|-| ----------------------------|-------------|----------------------------------------------------------|
| | /boot | boot images | 1 GB |
|  vg_root | /                          | system root            | 20 GB                                |
| vg_root | swap                       | swap | 4 GB                               |
| vg_root | /var/log                   | contains all log files | 10 GB                                |
| vg_data | /var/lib/centreon-engine   |  | 5 GB                               |

> Your system must use LVM to manage the file system.

> The number of
> vCPU depends of the complexity of checks. If you use connectors or perform a large number of system/third-party
> binary calls, you should add more vCPU.

</TabItem>
<TabItem value="Up to 5,000 hosts" label="Up to 5,000 hosts">

Distributed architecture:

* 1 central server without a database
* 1 database server
* 1 poller for every 500 hosts

**Central server**

| Element                     | Value     |
| ----------------------------| --------- |
| CPU                         | 4 vCPU    |
| RAM                         | 8 GB      |

This is how your central server should be partitioned:

| Volume group (LVM) | File system                | Description | Size                                                     |
| - |----------------------------|-------------|----------------------------------------------------------|
| | /boot | boot images | 1 GB |
| vg_root | /                          | system root            | 20 GB                                |
| vg_root | swap                       | swap | 4 GB                               |
| vg_root | /var/log                   | contains all log files | 10 GB                                |
| vg_data | /var/lib/centreon          | contains mostly RRD files | 339 GB |
| vg_data | /var/lib/centreon-broker   | contains retention files | 50 GB                               |
| vg_data | /var/lib/centreon-engine | | 5 GB |
| vg_data | /var/cache/centreon/backup | backup directory | 10 GB <br/>If you perform backups, use the following characteristics: <ul><li>size of the /var/lib/mysql partition * 0,6</li><li>this size is meant for 1 full backup and 6 partial ones</li><li>this is only an estimate, size should be checked manually</li></ul>   |

**Database server**

| Element                     | Value     |
| ----------------------------| --------- |
| CPU                         | 4 vCPU    |
| RAM                         | 8 GB      |

This is how the database server should be partitioned:

| Volume group (LVM) | File system                | Description | Size                                                     |
| - |----------------------------|-------------|----------------------------------------------------------|
| | /boot | boot images | 1 GB |
| vg_root | /                          | system root            | 20 GB                                |
| vg_root | swap                       | swap | 4 GB                               |
| vg_root | /var/log                   | contains all log files | 10 GB                                |
| vg_data | /var/lib/mysql             | database | 1094 GB        |

| vg_data |  | Free space (unallocated) | 5 GB |

> Your system must use LVM to manage the file system.

> At least 1 GB of non-allocated free space must be available for the **volume group** containing **/var/lib/mysql**,
> if you wish to use **snapshot LVM** as a backup method.

**Pollers**

* To handle testing or small environments (up to 2000 services with checks every 5 minutes, or up to 500 services with checks every minute):

| Element                     | Value     |
| ----------------------------| --------- |
| CPU  (logical core at 3Ghz) | 2 vCPU    |
| RAM                         | 2 GB      |
| HDD                         | 40 GB     |

* To handle production environments (up to 7000 services with checks every 5 minutes):

| Element                     | Value     |
| ----------------------------| --------- |
| CPU  (logical core at 3Ghz) | 4 vCPU    |
| RAM                         | 4 GB      |
| HDD                         | 40 GB     |

This is how the pollers should be partitioned:

| Volume group (LVM) | File system                | Description | Size                                                     |
|-| ----------------------------|-------------|----------------------------------------------------------|
| | /boot | boot images | 1 GB |
|  vg_root | /                          | system root            | 20 GB                                |
| vg_root | swap                       | swap | 4 GB                               |
| vg_root | /var/log                   | contains all log files | 10 GB                                |
| vg_data | /var/lib/centreon-engine   |  | 5 GB                               |

> Your system must use LVM to manage the file system.

> The number of
> vCPU depends of the complexity of checks. If you use connectors or perform a large number of system/third-party
> binary calls, you should add more vCPU.

</TabItem>
<TabItem value="Up to 10,000 hosts" label="Up to 10,000 hosts">

Distributed architecture:

* 1 central server without a database
* 1 database server
* 1 poller for every 500 hosts

**Central server**

| Element                     | Value     |
| ----------------------------| --------- |
| CPU                         | 8 vCPU    |
| RAM                         | 8 GB      |

This is how your central server should be partitioned:

| Volume group (LVM) | File system                | Description | Size                                                     |
| - |----------------------------|-------------|----------------------------------------------------------|
| | /boot | boot images | 1 GB |
| vg_root | /                          | system root            | 20 GB                                |
| vg_root | swap                       | swap | 4 GB                               |
| vg_root | /var/log                   | contains all log files | 10 GB                                |
| vg_data | /var/lib/centreon          | contains mostly RRD files | 677 GB |
| vg_data | /var/lib/centreon-broker   | contains retention files | 50 GB                               |
| vg_data | /var/lib/centreon-engine | | 5 GB |
| vg_data | /var/cache/centreon/backup | backup directory | 10 GB <br/>If you perform backups, use the following characteristics: <ul><li>size of the /var/lib/mysql partition * 0,6</li><li>this size is meant for 1 full backup and 6 partial ones</li><li>this is only an estimate, size should be checked manually</li></ul> |

**Database server**

| Element                     | Value     |
| ----------------------------| --------- |
| CPU                         | 8 vCPU    |
| RAM                         | 8 GB      |

This is how the database server should be partitioned:

| Volume group (LVM) | File system                | Description | Size                                                     |
| - |----------------------------|-------------|----------------------------------------------------------|
| | /boot | boot images | 1 GB |
| vg_root | /                          | system root            | 20 GB                                |
| vg_root | swap                       | swap | 4 GB                               |
| vg_root | /var/log                   | contains all log files | 10 GB                                |
| vg_data | /var/lib/mysql             | database | 2257 GB        |
| vg_data |  | Free space (unallocated) | 5 GB |

> Your system must use LVM to manage the file system.

> At least 1 GB of non-allocated free space must be available for the **volume group** containing **/var/lib/mysql**,
> if you wish to use **snapshot LVM** as a backup method.

**Pollers**

* To handle testing or small environments (up to 2000 services with checks every 5 minutes, or up to 500 services with checks every minute):

| Element                     | Value     |
| ----------------------------| --------- |
| CPU  (logical core at 3Ghz) | 2 vCPU    |
| RAM                         | 2 GB      |
| HDD                         | 40 GB     |

* To handle production environments (up to 7000 services with checks every 5 minutes):

| Element                     | Value     |
| ----------------------------| --------- |
| CPU  (logical core at 3Ghz) | 4 vCPU    |
| RAM                         | 4 GB      |
| HDD                         | 40 GB     |

This is how the pollers should be partitioned:

| Volume group (LVM) | File system                | Description | Size                                                     |
|-| ----------------------------|-------------|----------------------------------------------------------|
| | /boot | boot images | 1 GB |
|  vg_root | /                          | system root            | 20 GB                                |
| vg_root | swap                       | swap | 4 GB                               |
| vg_root | /var/log                   | contains all log files | 10 GB                                |
| vg_data | /var/lib/centreon-engine   |  | 5 GB                               |

> Your system must use LVM to manage the file system.

> The number of
> vCPU depends of the complexity of checks. If you use connectors or perform a large number of system/third-party
> binary calls, you should add more vCPU.

</TabItem>
<TabItem value="Over 10,000 hosts" label="Over 10,000 hosts">

For very large amounts of data, contact your sales representative.

</TabItem>
</Tabs>

## Network flows

If you have firewalls or security equipments in place, check the [table of network flows](./technical.md#tables-of-network-flows).

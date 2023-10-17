---
id: cloud-aws-rds
title: Amazon RDS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching and backups. It frees you to focus on your applications so you can give them the fast performance, high availability, security and compatibility they need.

## Pack assets

### Templates

The Monitoring Connector **Amazon RDS** brings 7 host templates:

* **Cloud-Aws-Rds-Cluster-custom**
* **Cloud-Aws-Rds-Instance-Aurora-custom**
* **Cloud-Aws-Rds-Instance-MSSQL-custom**
* **Cloud-Aws-Rds-Instance-MariaDB-custom**
* **Cloud-Aws-Rds-Instance-MySQL-custom**
* **Cloud-Aws-Rds-Instance-Oracle-custom**
* **Cloud-Aws-Rds-Instance-PostgreSQL-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Aws-Rds-Cluster-custom" label="Cloud-Aws-Rds-Cluster-custom">

| Service Alias    | Service Template                      | Service Description                       |
|:-----------------|:--------------------------------------|:------------------------------------------|
| Rds-Connections  | Cloud-Aws-Rds-Connections-Api-custom  | Check the number of connections to the instance       |
| Rds-Cpu-Credit   | Cloud-Aws-Rds-Cpu-Credit-Api-custom   | Check CPU credits usage                   |
| Rds-Cpu-Usage    | Cloud-Aws-Rds-Cpu-Usage-Api-custom    | Check CPU usage                           |
| Rds-Network      | Cloud-Aws-Rds-Network-Api-custom      | Check network usage                       |
| Rds-Queries      | Cloud-Aws-Rds-Queries-Api-custom      | Check the number of requests made on the instance    |
| Rds-Transactions | Cloud-Aws-Rds-Transactions-Api-custom | Check the number of transactions made on the instance |
| Rds-Volume-Iops  | Cloud-Aws-Rds-Volume-Iops-Api-custom  | Check volumes I/O utilization              |
| Rds-Volume-Usage | Cloud-Aws-Rds-Volume-Usage-Api-custom | Check volumes usage                       |

> The services listed above are created automatically when the **Cloud-Aws-Rds-Cluster-custom** host template is used.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-Aurora-custom" label="Cloud-Aws-Rds-Instance-Aurora-custom">

| Service Alias    | Service Template                      | Service Description                       |
|:-----------------|:--------------------------------------|:------------------------------------------|
| Rds-Connections  | Cloud-Aws-Rds-Connections-Api-custom  | Check the number of connections to the instance       |
| Rds-Cpu-Credit   | Cloud-Aws-Rds-Cpu-Credit-Api-custom   | Check CPU credits usage                   |
| Rds-Cpu-Usage    | Cloud-Aws-Rds-Cpu-Usage-Api-custom    | Check CPU usage                           |
| Rds-Network      | Cloud-Aws-Rds-Network-Api-custom      | Check network usage                       |
| Rds-Queries      | Cloud-Aws-Rds-Queries-Api-custom      | Check the number of requests made on the instance    |
| Rds-Transactions | Cloud-Aws-Rds-Transactions-Api-custom | Check the number of transactions made on the instance |

> The services listed above are created automatically when the **Cloud-Aws-Rds-Instance-Aurora-custom** host template is used.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-MSSQL-custom" label="Cloud-Aws-Rds-Instance-MSSQL-custom">

| Service Alias   | Service Template                     | Service Description                 |
|:----------------|:-------------------------------------|:------------------------------------|
| Rds-Connections | Cloud-Aws-Rds-Connections-Api-custom | Check the number of connections to the instance |
| Rds-Cpu-Credit  | Cloud-Aws-Rds-Cpu-Credit-Api-custom  | Check CPU credits usage             |
| Rds-Cpu-Usage   | Cloud-Aws-Rds-Cpu-Usage-Api-custom   | Check CPU usage                     |
| Rds-Network     | Cloud-Aws-Rds-Network-Api-custom     | Check network usage                 |

> The services listed above are created automatically when the **Cloud-Aws-Rds-Instance-MSSQL-custom** host template is used.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-MariaDB-custom" label="Cloud-Aws-Rds-Instance-MariaDB-custom">

| Service Alias   | Service Template                     | Service Description                 |
|:----------------|:-------------------------------------|:------------------------------------|
| Rds-Connections | Cloud-Aws-Rds-Connections-Api-custom | Check the number of connections to the instance |
| Rds-Cpu-Credit  | Cloud-Aws-Rds-Cpu-Credit-Api-custom  | Check CPU credits usage             |
| Rds-Cpu-Usage   | Cloud-Aws-Rds-Cpu-Usage-Api-custom   | Check CPU usage                     |
| Rds-Diskio      | Cloud-Aws-Rds-Diskio-Api-custom      | Check disks I/O utilization          |
| Rds-Network     | Cloud-Aws-Rds-Network-Api-custom     | Check network usage                 |

> The services listed above are created automatically when the **Cloud-Aws-Rds-Instance-MariaDB-custom** host template is used.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-MySQL-custom" label="Cloud-Aws-Rds-Instance-MySQL-custom">

| Service Alias   | Service Template                     | Service Description                 |
|:----------------|:-------------------------------------|:------------------------------------|
| Rds-Connections | Cloud-Aws-Rds-Connections-Api-custom | Check the number of connections to the instance |
| Rds-Cpu-Credit  | Cloud-Aws-Rds-Cpu-Credit-Api-custom  | Check CPU credits usage             |
| Rds-Cpu-Usage   | Cloud-Aws-Rds-Cpu-Usage-Api-custom   | Check CPU usage                     |
| Rds-Diskio      | Cloud-Aws-Rds-Diskio-Api-custom      | Check disks I/O utilization          |
| Rds-Network     | Cloud-Aws-Rds-Network-Api-custom     | Check network usage                 |

> The services listed above are created automatically when the **Cloud-Aws-Rds-Instance-MySQL-custom** host template is used.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-Oracle-custom" label="Cloud-Aws-Rds-Instance-Oracle-custom">

| Service Alias   | Service Template                     | Service Description                 |
|:----------------|:-------------------------------------|:------------------------------------|
| Rds-Connections | Cloud-Aws-Rds-Connections-Api-custom | Check the number of connections to the instance |
| Rds-Cpu-Credit  | Cloud-Aws-Rds-Cpu-Credit-Api-custom  | Check CPU credits usage             |
| Rds-Cpu-Usage   | Cloud-Aws-Rds-Cpu-Usage-Api-custom   | Check CPU usage                     |
| Rds-Network     | Cloud-Aws-Rds-Network-Api-custom     | Check network usage                 |

> The services listed above are created automatically when the **Cloud-Aws-Rds-Instance-Oracle-custom** host template is used.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-PostgreSQL-custom" label="Cloud-Aws-Rds-Instance-PostgreSQL-custom">

| Service Alias   | Service Template                     | Service Description                 |
|:----------------|:-------------------------------------|:------------------------------------|
| Rds-Connections | Cloud-Aws-Rds-Connections-Api-custom | Check the number of connections to the instance |
| Rds-Cpu-Credit  | Cloud-Aws-Rds-Cpu-Credit-Api-custom  | Check CPU credits usage             |
| Rds-Cpu-Usage   | Cloud-Aws-Rds-Cpu-Usage-Api-custom   | Check CPU usage                     |
| Rds-Network     | Cloud-Aws-Rds-Network-Api-custom     | Check network usage                 |

> The services listed above are created automatically when the **Cloud-Aws-Rds-Instance-PostgreSQL-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias       | Service Template                         | Service Description        |
|:--------------------|:-----------------------------------------|:---------------------------|
| Rds-Instance-Status | Cloud-Aws-Rds-Instance-Status-Api-custom | Check RDS instances status |
| Rds-Storage         | Cloud-Aws-Rds-Storage-Api-custom         | Check storage usage        |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                       |
|:----------------|:----------------------------------|
| Amazon AWS RDS  | Discover Amazon AWS RDS instances |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Rds-Connections" label="Rds-Connections">

| Metric name         | Description                             | Unit:  |
| :------------------ | :-------------------------------------- |:------ |
| DatabaseConnections | Number of connections to the database.  | Count  |

</TabItem>
<TabItem value="Rds-Cpu-Credit" label="Rds-Cpu-Credit">

| Metric name      | Description                                                | Unit                    |                   
| :--------------- | :--------------------------------------------------------- |:----------------------- |
| CPUCreditBalance | Balance of allocated CPU credit for this type of instance.  | Credits (vCPU-minutes)  |
| CPUCreditUsage   | Number of CPU credits consumed.                             | Credits (vCPU-minutes)  |

</TabItem>
<TabItem value="Rds-Cpu-Usage" label="Rds-Cpu-Usage">

| Metric name      | Description                                                | Unit                    |                   
| :--------------- | :--------------------------------------------------------- |:----------------------- |
| CPUUtilization   | The percentage of CPU utilization.                         | Percentage              |

</TabItem>
<TabItem value="Rds-Diskio" label="Rds-Diskio">

| Metric name     | Description                                                                     | Unit         |
| :-------------- | :------------------------------------------------------------------------------ |:------------ |
| ReadIOPS        | The average number of disk read I/O operations per second.                      | Count/Second |
| WriteIOPS       | The average number of disk write I/O operations per second.                     | Count/Second |
| ReadThroughput  | The average number of bytes read from disk per second.                          | Bytes/Second |
| WriteThroughput | The average number of bytes write to disk per second.                           | Bytes/Second |
| ReadLatency     | The average amount of time taken per disk I/O read operation.                   | Seconds      |
| WriteLatency    | The average amount of time taken per disk I/O write operation.                  | Seconds      |
| DiskQueueDepth  | The number of outstanding I/Os (read/write requests) waiting to access the disk. | Count        |

</TabItem>
<TabItem value="Rds-Instance-Status" label="Rds-Instance-Status">

| Metric name            | Unit  |
|:-----------------------|:------|
| total-available        | N/A   |
| total-failed           | N/A   |
| total-backing-up       | N/A   |
| total-maintenance      | N/A   |
| total-stopped          | N/A   |
| total-storage-full     | N/A   |
| *aws_instances*#status | N/A   |

</TabItem>
<TabItem value="Rds-Network" label="Rds-Network">

| Metric name               | Description                                                                                                                          | Unit          |
| :------------------------ | :----------------------------------------------------------------------------------------------------------------------------------- |:------------- |
| NetworkReceiveThroughput  | The incoming traffic on the DB instance, including both customer DB traffic and AWS/RDS traffic used for monitoring and replication. | Bytes/Second  |
| NetworkTransmitThroughput | The outgoing traffic on the DB instance, including both customer DB traffic and AWS/RDS traffic used for monitoring and replication. | Bytes/Second  |

</TabItem>
<TabItem value="Rds-Queries" label="Rds-Queries">

| Metric name      | Description                                                                                             |
| :--------------- | :------------------------------------------------------------------------------------------------------ |
| Queries          | The average number of queries executed per second **(Only available on Aurora MySQL)**                  |
| InsertThroughput | The average number of insert queries per second **(Only available on Aurora MySQL)**                    |
| SelectThroughput | The average number of select queries per second **(Only available on Aurora MySQL)**                    |
| DeleteThroughput | The average number of delete queries per second **(Only available on Aurora MySQL)**                    |
| UpdateThroughput | The average number of update queries per second **(Only available on Aurora MySQL)**                    |
| DDLThroughput    | The average number of DataDefinitionLanguage requests per second **(Only available on Aurora MySQL)**   |
| DMLThroughput    | The average number of DataModificationLanguage requests per second. **(Only available on Aurora MySQL)** |

</TabItem>
<TabItem value="Rds-Storage" label="Rds-Storage">

| Metric name                    | Unit  |
|:-------------------------------|:------|
| storage.space.free.bytes       | B     |
| storage.space.usage.percentage | %     |
| memory.free.bytes              | B     |

</TabItem>
<TabItem value="Rds-Transactions" label="Rds-Transactions">

| Metric name         | Description                                                                                                                                                                                                                  |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ActiveTransactions  | The average number of current transactions executing on an Aurora database instance per second. **(Only available on Aurora MySQL) Set innodb\_monitor\_enable='all' in the DB parameter group for a specific DB instance.** |
| BlockedTransactions | The average number of transactions in the database that are blocked per second **(Only available on Aurora MySQL)**                                                                                                          |
| CommitLatency       | The amount of latency for commit operations, in milliseconds **(Only available on Aurora MySQL and Postgres)**                                                                                                               |
| CommitThroughput    | The average number of commit operations per second. **(Only available on Aurora MySQL and Postgres)**                                                                                                                         |

</TabItem>
<TabItem value="Rds-Volume-Iops" label="Rds-Volume-Iops">

| Metric name     | Description                                                                                                                                                    |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VolumeReadIOPs  | The number of billed read I/O operations from a cluster volume, reported at 5-minute intervals. **(Only available on Aurora MySQL and Postgres)**              |
| VolumeWriteIOPs | The number of write disk I/O operations to the cluster volume, reported at 5-minute intervals. **(Only available on Aurora MySQL and Postgres)**               |

</TabItem>
<TabItem value="Rds-Volume-Usage" label="Rds-Volume-Usage">

| Metric name     | Description                                                                                                                                                    |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VolumeBytesUsed | The amount of storage used by your Aurora DB instance, in bytes and then affecting the cost of your instance. **(Only available on Aurora MySQL and Postgres)** |

</TabItem>
</Tabs>

## Prerequisites

### AWS Configuration

Configure a service account (access/secret key combo) for which the following privileges have to be granted:

| AWS Privilege                  | Description                                                     |
| :----------------------------- | :-------------------------------------------------------------- |
| XXXXX:XXXXXXXXXXXXXXXX         | Get XXXXX.                                                      |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/EC2 namespace on Cloudwatch.           |

### Plugin dependencies

To interact with the Amazon APIs, you can use either use the *awscli* binary provided by Amazon or *paws*, a Perl AWS SDK (recommended). You must install it on every poller expected to monitor AWS resources.

> For now, it is not possible to use *paws* if you are using a proxy to reach the AWS Cloudwatch APIs.

<Tabs groupId="sync">
<TabItem value="perl-Paws-installation" label="perl-Paws-installation">

```bash
yum install perl-Paws
```

</TabItem>
<TabItem value="aws-cli-installation" label="aws-cli-installation">

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

</TabItem>
</Tabs>

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-aws-rds
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-aws-rds
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-aws-rds
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-aws-rds
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Amazon RDS** connector through
the **Configuration > Monitoring Connectors Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Cloud-Aws-Rds-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Aws-Rds-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-aws-rds-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Aws-Rds-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="Cloud-Aws-Rds-Cluster-custom" label="Cloud-Aws-Rds-Cluster-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Cloud-Aws-Rds-Cluster-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory, in particular the macro for defining the [custom mode](#available-custom-modes), i.e. the connection method to the resource.

| Macro           | Description                                                                                                                | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                                          |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name (required) (can be defined multiple times)                                                            |                   | X           |
| AWSINSTANCETYPE | Set the instance type (required) (can be: 'cluster')                                                                       | cluster           | X           |
| AWSREGION       | Set the region name (required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)                      |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-Aurora-custom" label="Cloud-Aws-Rds-Instance-Aurora-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Cloud-Aws-Rds-Instance-Aurora-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory, in particular the macro for defining the [custom mode](#available-custom-modes), i.e. the connection method to the resource.

| Macro           | Description                                                                                                                | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                                          |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name (required) (can be defined multiple times)                                                            |                   | X           |
| AWSINSTANCETYPE | Set the instance type (required) (can be: 'cluster','instance')                                                            | instance          | X           |
| AWSREGION       | Set the region name (required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)                      |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-MSSQL-custom" label="Cloud-Aws-Rds-Instance-MSSQL-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Cloud-Aws-Rds-Instance-MSSQL-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory, in particular the macro for defining the [custom mode](#available-custom-modes), i.e. the connection method to the resource.

| Macro           | Description                                                                                                                | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                                          |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name (required) (can be defined multiple times)                                                            |                   | X           |
| AWSINSTANCETYPE | Set the instance type (required) (can be: 'cluster','instance')                                                            | instance          | X           |
| AWSREGION       | Set the region name (required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)                      |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-MariaDB-custom" label="Cloud-Aws-Rds-Instance-MariaDB-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Cloud-Aws-Rds-Instance-MariaDB-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory, in particular the macro for defining the [custom mode](#available-custom-modes), i.e. the connection method to the resource.

| Macro           | Description                                                                                                                | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                                          |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name (required) (can be defined multiple times)                                                            |                   | X           |
| AWSINSTANCETYPE | Set the instance type (required) (can be: 'cluster','instance')                                                            | instance          | X           |
| AWSREGION       | Set the region name (required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)                      |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-MySQL-custom" label="Cloud-Aws-Rds-Instance-MySQL-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Cloud-Aws-Rds-Instance-MySQL-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory, in particular the macro for defining the [custom mode](#available-custom-modes), i.e. the connection method to the resource.

| Macro           | Description                                                                                                                | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                                          |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name (required) (can be defined multiple times)                                                            |                   | X           |
| AWSINSTANCETYPE | Set the instance type (required) (can be: 'cluster','instance')                                                            | instance          | X           |
| AWSREGION       | Set the region name (required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)                      |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-Oracle-custom" label="Cloud-Aws-Rds-Instance-Oracle-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Cloud-Aws-Rds-Instance-Oracle-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory, in particular the macro for defining the [custom mode](#available-custom-modes), i.e. the connection method to the resource.

| Macro           | Description                                                                                                                | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                                          |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name (required) (can be defined multiple times)                                                            |                   | X           |
| AWSINSTANCETYPE | Set the instance type (required) (can be: 'cluster','instance')                                                            | instance          | X           |
| AWSREGION       | Set the region name (required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)                      |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Cloud-Aws-Rds-Instance-PostgreSQL-custom" label="Cloud-Aws-Rds-Instance-PostgreSQL-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **Cloud-Aws-Rds-Instance-PostgreSQL-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory, in particular the macro for defining the [custom mode](#available-custom-modes), i.e. the connection method to the resource.

| Macro           | Description                                                                                                                | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                                          |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name (required) (can be defined multiple times)                                                            |                   | X           |
| AWSINSTANCETYPE | Set the instance type (required) (can be: 'cluster','instance')                                                            | instance          | X           |
| AWSREGION       | Set the region name (required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options)                      |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Rds-Connections" label="Rds-Connections">

| Macro                              | Description                                                                                         | Default value     | Mandatory   |
|:-----------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                          | Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum')                          | average           |             |
| TIMEFRAME                          | Set timeframe in seconds                                                                            | 600               |             |
| PERIOD                             | Set period in seconds                                                                               | 60                |             |
| FILTERMETRIC                       | Filter metrics (Can be: 'DatabaseConnections') (Can be a regexp)                                    |                   |             |
| WARNINGDATABASECONNECTIONSAVERAGE  |                                                                                                     |                   |             |
| CRITICALDATABASECONNECTIONSAVERAGE |                                                                                                     |                   |             |
| EXTRAOPTIONS                       | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Rds-Cpu-Credit" label="Rds-Cpu-Credit">

| Macro                               | Description                                                                                         | Default value     | Mandatory   |
|:------------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMETRIC                        | Filter metrics (Can be: 'CPUCreditBalance', 'CPUCreditUsage', CPUUtilization') (Can be a regexp)    | Credit            |             |
| STATISTIC                           |                                                                                                     | average           |             |
| TIMEFRAME                           |                                                                                                     | 600               |             |
| PERIOD                              |                                                                                                     | 60                |             |
| WARNINGCPUCREDITBALANCEAVERAGE      |                                                                                                     |                   |             |
| CRITICALCPUCREDITBALANCEAVERAGE     |                                                                                                     |                   |             |
| WARNINGCPUCREDITUSAGEAVERAGE        |                                                                                                     |                   |             |
| CRITICALCPUCREDITUSAGEAVERAGE       |                                                                                                     |                   |             |
| WARNINGCPUCREDITUTILIZATIONAVERAGE  |                                                                                                     |                   |             |
| CRITICALCPUCREDITUTILIZATIONAVERAGE |                                                                                                     |                   |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Rds-Cpu-Usage" label="Rds-Cpu-Usage">

| Macro                               | Description                                                                                         | Default value     | Mandatory   |
|:------------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMETRIC                        | Filter metrics (Can be: 'CPUCreditBalance', 'CPUCreditUsage', CPUUtilization') (Can be a regexp)    | Utilization       |             |
| STATISTIC                           |                                                                                                     | average           |             |
| TIMEFRAME                           |                                                                                                     | 600               |             |
| PERIOD                              |                                                                                                     | 60                |             |
| WARNINGCPUCREDITBALANCEAVERAGE      |                                                                                                     |                   |             |
| CRITICALCPUCREDITBALANCEAVERAGE     |                                                                                                     |                   |             |
| WARNINGCPUCREDITUSAGEAVERAGE        |                                                                                                     |                   |             |
| CRITICALCPUCREDITUSAGEAVERAGE       |                                                                                                     |                   |             |
| WARNINGCPUCREDITUTILIZATIONAVERAGE  |                                                                                                     | 80                |             |
| CRITICALCPUCREDITUTILIZATIONAVERAGE |                                                                                                     | 90                |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Rds-Diskio" label="Rds-Diskio">

| Macro                          | Description                                                                                                                                              | Default value     | Mandatory   |
|:-------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                      |                                                                                                                                                          | average           |             |
| TIMEFRAME                      |                                                                                                                                                          | 600               |             |
| PERIOD                         |                                                                                                                                                          | 60                |             |
| FILTERMETRIC                   | Filter metrics (Can be: 'ReadThroughput', 'WriteThroughput', 'ReadIOPS', 'WriteIOPS', 'ReadLatency', 'WriteLatency', 'DiskQueueDepth') (Can be a regexp) |                   |             |
| CRITICREADTHROUGHPUTALAVERAGE  |                                                                                                                                                          |                   |             |
| CRITICWRITETHROUGHPUTALAVERAGE |                                                                                                                                                          |                   |             |
| CRITICREADLATENCYALAVERAGE     |                                                                                                                                                          |                   |             |
| CRITICWRITELATENCYALAVERAGE    |                                                                                                                                                          |                   |             |
| CRITICDISKQUEUEDEPTHALAVERAGE  |                                                                                                                                                          |                   |             |
| WARNINGDISKQUEUEDEPTHAVERAGE   |                                                                                                                                                          |                   |             |
| WARNINGREADIOPSAVERAGE         |                                                                                                                                                          |                   |             |
| CRITICALREADIOPSAVERAGE        |                                                                                                                                                          |                   |             |
| WARNINGREADLATENCYAVERAGE      |                                                                                                                                                          |                   |             |
| WARNINGREADTHROUGHPUTAVERAGE   |                                                                                                                                                          |                   |             |
| WARNINGWRITEIOPSAVERAGE        |                                                                                                                                                          |                   |             |
| CRITICALWRITEIOPSAVERAGE       |                                                                                                                                                          |                   |             |
| WARNINGWRITELATENCYAVERAGE     |                                                                                                                                                          |                   |             |
| WARNINGWRITETHROUGHPUTAVERAGE  |                                                                                                                                                          |                   |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                      | --verbose         |             |

</TabItem>
<TabItem value="Rds-Instance-Status" label="Rds-Instance-Status">

| Macro                    | Description                                                                                                                           | Default value     | Mandatory   |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSCUSTOMMODE            |                                                                                                                                       | awscli            |             |
| AWSREGION                |                                                                                                                                       |                   | X           |
| FILTERINSTANCEID         | Filter by instance id (can be a regexp)                                                                                               |                   |             |
| WARNINGSTATUS            | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{state}, %{display}  |                   |             |
| CRITICALSTATUS           | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{state}, %{display} |                   |             |
| WARNINGTOTALAVAILABLE    | Warning threshold                                                                                                                     |                   |             |
| CRITICALTOTALAVAILABLE   | Critical threshold                                                                                                                    |                   |             |
| WARNINGTOTALBACKINGUP    | Warning threshold                                                                                                                     |                   |             |
| CRITICALTOTALBACKINGUP   | Critical threshold                                                                                                                    |                   |             |
| WARNINGTOTALFAILED       | Warning threshold                                                                                                                     |                   |             |
| CRITICALTOTALFAILED      | Critical threshold                                                                                                                    |                   |             |
| WARNINGTOTALMAINTENANCE  | Warning threshold                                                                                                                     |                   |             |
| CRITICALTOTALMAINTENANCE | Critical threshold                                                                                                                    |                   |             |
| WARNINGTOTALSTOPPED      | Warning threshold                                                                                                                     |                   |             |
| CRITICALTOTALSTOPPED     | Critical threshold                                                                                                                    |                   |             |
| WARNINGTOTALSTORAGEFULL  | Warning threshold                                                                                                                     |                   |             |
| CRITICALTOTALSTORAGEFULL | Critical threshold                                                                                                                    |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                   | --verbose         |             |

</TabItem>
<TabItem value="Rds-Network" label="Rds-Network">

| Macro                                    | Description                                                                                         | Default value     | Mandatory   |
|:-----------------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                                |                                                                                                     | average           |             |
| TIMEFRAME                                |                                                                                                     | 600               |             |
| PERIOD                                   |                                                                                                     | 60                |             |
| FILTERMETRIC                             | Filter metrics (Can be: 'NetworkReceiveThroughput', 'NetworkTransmitThroughput') (Can be a regexp)  |                   |             |
| WARNINGNETWORKRECEIVETHROUGHPUTAVERAGE   |                                                                                                     |                   |             |
| CRITICALNETWORKRECEIVETHROUGHPUTAVERAGE  |                                                                                                     |                   |             |
| WARNINGNETWORKTRANSMITTHROUGHPUTAVERAGE  |                                                                                                     |                   |             |
| CRITICALNETWORKTRANSMITTHROUGHPUTAVERAGE |                                                                                                     |                   |             |
| EXTRAOPTIONS                             | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Rds-Queries" label="Rds-Queries">

| Macro                           | Description                                                                                                                                                                                                                                                            | Default value     | Mandatory   |
|:--------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                       |                                                                                                                                                                                                                                                                        | average           |             |
| TIMEFRAME                       |                                                                                                                                                                                                                                                                        | 600               |             |
| PERIOD                          |                                                                                                                                                                                                                                                                        | 60                |             |
| FILTERMETRIC                    | Filter metrics (Can be: 'Queries', 'InsertThroughput', 'DeleteThroughput', 'SelectThroughput', 'UpdateThroughput', 'DMLThroughput', 'DDLThroughput', 'InsertLatency', 'DeleteLatency', 'SelectLatency', 'UpdateLatency', 'DMLLatency', 'DDLLatency') (Can be a regexp) |                   |             |
| WARNINGDDLLATENCYAVERAGE        |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALDDLLATENCYAVERAGE       |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGDDLTHROUGHPUTAVERAGE     |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALDDLTHROUGHPUTAVERAGE    |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGDELETELATENCYAVERAGE     |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALDELETELATENCYAVERAGE    |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGDELETETHROUGHPUTAVERAGE  |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALDELETETHROUGHPUTAVERAGE |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGDMLLATENCYAVERAGE        |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALDMLLATENCYAVERAGE       |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGDMLTHROUGHPUTAVERAGE     |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALDMLTHROUGHPUTAVERAGE    |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGINSERTLATENCYAVERAGE     |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALINSERTLATENCYAVERAGE    |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGINSERTTHROUGHPUTAVERAGE  |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALINSERTTHROUGHPUTAVERAGE |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGQUERIESAVERAGE           |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALQUERIESAVERAGE          |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGSELECTLATENCYAVERAGE     |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALSELECTLATENCYAVERAGE    |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGSELECTTHROUGHPUTAVERAGE  |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALSELECTTHROUGHPUTAVERAGE |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGUPDATELATENCYAVERAGE     |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALUPDATELATENCYAVERAGE    |                                                                                                                                                                                                                                                                        |                   |             |
| WARNINGUPDATETHROUGHPUTAVERAGE  |                                                                                                                                                                                                                                                                        |                   |             |
| CRITICALUPDATETHROUGHPUTAVERAGE |                                                                                                                                                                                                                                                                        |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                                                                    | --verbose         |             |

</TabItem>
<TabItem value="Rds-Storage" label="Rds-Storage">

| Macro                         | Description                                                                                         | Default value     | Mandatory   |
|:------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                     |                                                                                                     | average           |             |
| TIMEFRAME                     |                                                                                                     | 600               |             |
| PERIOD                        |                                                                                                     | 60                |             |
| FILTERMETRIC                  | Filter on a specific metric. Can be: FreeStorageSpace, FreeableMemory                               |                   |             |
| WARNINGMEMORYFREE             |                                                                                                     |                   |             |
| CRITICALMEMORYFREE            |                                                                                                     |                   |             |
| WARNINGSTORAGESPACEFREE       |                                                                                                     |                   |             |
| CRITICALSTORAGESPACEFREE      |                                                                                                     |                   |             |
| WARNINGSTORAGESPACEUSAGEPRCT  |                                                                                                     |                   |             |
| CRITICALSTORAGESPACEUSAGEPRCT |                                                                                                     |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Rds-Transactions" label="Rds-Transactions">

| Macro                              | Description                                                                                                                 | Default value     | Mandatory   |
|:-----------------------------------|:----------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                          |                                                                                                                             | average           |             |
| TIMEFRAME                          |                                                                                                                             | 600               |             |
| PERIOD                             |                                                                                                                             | 60                |             |
| FILTERMETRIC                       | Filter metrics (Can be: 'ActiveTransactions', 'BlockedTransactions', 'CommitThroughput', 'CommitLatency') (Can be a regexp) |                   |             |
| WARNINGACTIVETRANSACTIONSAVERAGE   |                                                                                                                             |                   |             |
| CRITICALACTIVETRANSACTIONSAVERAGE  |                                                                                                                             |                   |             |
| WARNINGBLOCKEDTRANSACTIONSAVERAGE  |                                                                                                                             |                   |             |
| CRITICALBLOCKEDTRANSACTIONSAVERAGE |                                                                                                                             |                   |             |
| WARNINGCOMMITLATENCYAVERAGE        |                                                                                                                             |                   |             |
| CRITICALCOMMITLATENCYAVERAGE       |                                                                                                                             |                   |             |
| WARNINGCOMMITTHROUGHPUTAVERAGE     |                                                                                                                             |                   |             |
| CRITICALCOMMITTHROUGHPUTAVERAGE    |                                                                                                                             |                   |             |
| EXTRAOPTIONS                       | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                         | --verbose         |             |

</TabItem>
<TabItem value="Rds-Volume-Iops" label="Rds-Volume-Iops">

| Macro                          | Description                                                                                         | Default value       | Mandatory   |
|:-------------------------------|:----------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| FILTERMETRIC                   | Filter metrics (Can be: 'VolumeBytesUsed', 'VolumeReadIOPs', 'VolumeWriteIOPs') (Can be a regexp)   | IOPs                |             |
| STATISTIC                      |                                                                                                     | average             |             |
| TIMEFRAME                      |                                                                                                     | 600                 |             |
| PERIOD                         |                                                                                                     | 60                  |             |
| WARNINGVOLUMEBYTESUSEDAVERAGE  |                                                                                                     |                     |             |
| CRITICALVOLUMEBYTESUSEDAVERAGE |                                                                                                     |                     |             |
| WARNINGVOLUMEREADIOPSAVERAGE   |                                                                                                     |                     |             |
| CRITICALVOLUMEREADIOPSAVERAGE  |                                                                                                     |                     |             |
| WARNINGVOLUMEWRITEIOPSAVERAGE  |                                                                                                     |                     |             |
| CRITICALVOLUMEWRITEIOPSAVERAGE |                                                                                                     |                     |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --per-sec --verbose |             |

</TabItem>
<TabItem value="Rds-Volume-Usage" label="Rds-Volume-Usage">

| Macro                          | Description                                                                                         | Default value       | Mandatory   |
|:-------------------------------|:----------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| FILTERMETRIC                   | Filter metrics (Can be: 'VolumeBytesUsed', 'VolumeReadIOPs', 'VolumeWriteIOPs') (Can be a regexp)   | VolumeBytesUsed     |             |
| STATISTIC                      |                                                                                                     | average             |             |
| TIMEFRAME                      |                                                                                                     | 600                 |             |
| PERIOD                         |                                                                                                     | 60                  |             |
| WARNINGVOLUMEBYTESUSEDAVERAGE  |                                                                                                     |                     |             |
| CRITICALVOLUMEBYTESUSEDAVERAGE |                                                                                                     |                     |             |
| WARNINGVOLUMEREADIOPSAVERAGE   |                                                                                                     |                     |             |
| CRITICALVOLUMEREADIOPSAVERAGE  |                                                                                                     |                     |             |
| WARNINGVOLUMEWRITEIOPSAVERAGE  |                                                                                                     |                     |             |
| CRITICALVOLUMEWRITEIOPSAVERAGE |                                                                                                     |                     |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --per-sec --verbose |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor an AWS Instance using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_aws_rds_api.pl \
	--plugin=cloud::aws::rds::plugin \
	--mode=storage \
	--custommode='' \
	--aws-secret-key='' \
	--aws-access-key='' \
	--aws-role-arn='' \
	--region='' \
	--type='' \
	--name='' \
	--proxyurl=''  \
	--filter-metric='' \
	--statistic='average' \
	--timeframe='600' \
	--period='60' \
	--warning-memory-free='' \
	--critical-memory-free='' \
	--warning-storage-space-free='' \
	--critical-storage-space-free='' \
	--warning-storage-space-usage-prct='' \
	--critical-storage-space-usage-prct='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: storage space free: 12 B storage space usage: 80 % memory free: 78 B | 'storage.space.free.bytes'=12B;;;;'storage.space.usage.percentage'=80%;;;;'memory.free.bytes'=78B;;;;
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_rds_api.pl \
	--plugin=cloud::aws::rds::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                         | Linked service template                                                         |
|:-----------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------|
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/connections.pm)]        | Cloud-Aws-Rds-Connections-Api-custom                                            |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/cpu.pm)]                        | Cloud-Aws-Rds-Cpu-Credit-Api-custom<br />Cloud-Aws-Rds-Cpu-Usage-Api-custom     |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/discovery.pm)]            | Used for host discovery                                                         |
| diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/diskio.pm)]                  | Cloud-Aws-Rds-Diskio-Api-custom                                                 |
| instance-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/instancestatus.pm)] | Cloud-Aws-Rds-Instance-Status-Api-custom                                        |
| list-clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/listclusters.pm)]     | Not used in this Monitoring Connector                                           |
| list-instances [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/listinstances.pm)]   | Not used in this Monitoring Connector                                           |
| network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/network.pm)]                | Cloud-Aws-Rds-Network-Api-custom                                                |
| queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/queries.pm)]                | Cloud-Aws-Rds-Queries-Api-custom                                                |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/storage.pm)]                | Cloud-Aws-Rds-Storage-Api-custom                                                |
| transactions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/transactions.pm)]      | Cloud-Aws-Rds-Transactions-Api-custom                                           |
| volume [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/rds/mode/volume.pm)]                  | Cloud-Aws-Rds-Volume-Iops-Api-custom<br />Cloud-Aws-Rds-Volume-Usage-Api-custom |

### Available custom modes

This connector offers several ways to connect to the resource (CLI, library, etc.), called **custom modes**.
All available custom modes can be displayed by adding the `--list-custommode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_rds_api.pl \
	--plugin=cloud::aws::rds::plugin \
	--list-custommode
```

The plugin brings the following custom modes:

* awscli
* paws

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Custom modes options

All **custom modes** specific options are listed here:

<Tabs groupId="sync">
<TabItem value="awscli" label="awscli">

| Option              | Description                                                                                                                                                                                                                           |
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --aws-secret-key    | Set AWS secret key.                                                                                                                                                                                                                   |
| --aws-access-key    | Set AWS access key.                                                                                                                                                                                                                   |
| --aws-session-token | Set AWS session token.                                                                                                                                                                                                                |
| --aws-role-arn      | Set arn of the role to be assumed.                                                                                                                                                                                                    |
| --aws-profile       | Set AWS profile.                                                                                                                                                                                                                      |
| --endpoint-url      | Override AWS service endpoint URL if necessary.                                                                                                                                                                                       |
| --region            | Set the region name (Required).                                                                                                                                                                                                       |
| --period            | Set period in seconds.                                                                                                                                                                                                                |
| --timeframe         | Set timeframe in seconds.                                                                                                                                                                                                             |
| --statistic         | Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum').                                                                                                                                                           |
| --zeroed            | Set metrics value to 0 if none. Useful when CloudWatch does not return value when not defined.                                                                                                                                        |
| --timeout           | Set timeout in seconds (Default: 50).                                                                                                                                                                                                 |
| --sudo              | Use 'sudo' to execute the command.                                                                                                                                                                                                    |
| --command           | Command to get information (Default: 'aws'). Can be changed if you have output in a file.                                                                                                                                             |
| --command-path      | Command path (Default: none).                                                                                                                                                                                                         |
| --command-options   | Command options (Default: none). Only use for testing purpose, when you want to set ALL parameters of a command by yourself.                                                                                                          |
| --proxyurl          | Proxy URL if any                                                                                                                                                                                                                      |
| --skip-ssl-check    | Avoid certificate issuer verification. Useful when AWS resources are hosted by a third-party.  Note that it strips all stderr from the command result. Will be enhanced someday. Debug will only display CLI instead of evreything.   |

</TabItem>
<TabItem value="paws" label="paws">

| Option              | Description                                                                                      |
|:--------------------|:-------------------------------------------------------------------------------------------------|
| --aws-secret-key    | Set AWS secret key.                                                                              |
| --aws-access-key    | Set AWS access key.                                                                              |
| --aws-session-token | Set AWS session token.                                                                           |
| --aws-role-arn      | Set arn of the role to be assumed.                                                               |
| --region            | Set the region name (Required).                                                                  |
| --period            | Set period in seconds.                                                                           |
| --timeframe         | Set timeframe in seconds.                                                                        |
| --statistic         | Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum').                      |
| --zeroed            | Set metrics value to 0 if none. Useful when CloudWatch does not return value when not defined.   |
| --proxyurl          | Proxy URL if any                                                                                 |

</TabItem>
</Tabs>

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Rds-Connections" label="Rds-Connections">

| Option                          | Description                                                                                                                |
|:--------------------------------|:---------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster','instance').                                                           |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                           |
| --filter-metric                 | Filter metrics (Can be: 'DatabaseConnections') (Can be a regexp).                                                          |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'databaseconnections' $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |
| --critical-$metric$-$statistic$ | Thresholds warning ($metric$ can be: 'databaseconnections' $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
<TabItem value="Rds-Cpu-Credit" label="Rds-Cpu-Credit">

| Option                          | Description                                                                                                                                                   |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster','instance').                                                                                              |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                                                              |
| --filter-metric                 | Filter metrics (Can be: 'CPUCreditBalance', 'CPUCreditUsage', CPUUtilization') (Can be a regexp).                                                             |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'cpucreditusage', 'cpucreditbalance', 'cpuutilization', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').     |
| --critical-$metric$-$statistic$ | Thresholds critical ($metric$ can be: 'cpucreditusage', 'cpucreditbalance', 'cpuutilization', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
<TabItem value="Rds-Cpu-Usage" label="Rds-Cpu-Usage">

| Option                          | Description                                                                                                                                                   |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster','instance').                                                                                              |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                                                              |
| --filter-metric                 | Filter metrics (Can be: 'CPUCreditBalance', 'CPUCreditUsage', CPUUtilization') (Can be a regexp).                                                             |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'cpucreditusage', 'cpucreditbalance', 'cpuutilization', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').     |
| --critical-$metric$-$statistic$ | Thresholds critical ($metric$ can be: 'cpucreditusage', 'cpucreditbalance', 'cpuutilization', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
<TabItem value="Rds-Diskio" label="Rds-Diskio">

| Option                          | Description                                                                                                                                                                                                          |
|:--------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster','instance').                                                                                                                                                     |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                                                                                                                     |
| --filter-metric                 | Filter metrics (Can be: 'ReadThroughput', 'WriteThroughput', 'ReadIOPS', 'WriteIOPS', 'ReadLatency', 'WriteLatency', 'DiskQueueDepth') (Can be a regexp).                                                            |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'readthroughput', 'writethroughput', 'readiops', 'writeiops', 'readlatency', 'writelatency', 'diskqueuedepth', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').     |
| --critical-$metric$-$statistic$ | Thresholds critical ($metric$ can be: 'readthroughput', 'writethroughput', 'readiops', 'writeiops', 'readlatency', 'writelatency', 'diskqueuedepth', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
<TabItem value="Rds-Instance-Status" label="Rds-Instance-Status">

| Option              | Description                                                                                                                                       |
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters   | Only display some counters (regexp can be used). Example: --filter-counters='^total-available$'                                                   |
| --filter-instanceid | Filter by instance id (can be a regexp).                                                                                                          |
| --warning-status    | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{state}, %{display}              |
| --critical-status   | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{state}, %{display}             |
| --warning-*         | Warning threshold. Can be: 'total-available', 'total-backing-up', 'total-failed', 'total-maintenance', 'total-stopped', 'total-storage-full'.     |
| --critical-*        | Critical threshold. Can be: 'total-available', 'total-backing-up', 'total-failed', 'total-maintenance', 'total-stopped', 'total-storage-full'.    |

</TabItem>
<TabItem value="Rds-Network" label="Rds-Network">

| Option                          | Description                                                                                                                                                   |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster','instance').                                                                                              |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                                                              |
| --filter-metric                 | Filter metrics (Can be: 'NetworkReceiveThroughput', 'NetworkTransmitThroughput') (Can be a regexp).                                                           |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'networkreceivethroughput', 'networktransmitthroughput', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |
| --critical-$metric$-$statistic$ | Thresholds warning ($metric$ can be: 'networkreceivethroughput', 'networktransmitthroughput', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
<TabItem value="Rds-Queries" label="Rds-Queries">

| Option                          | Description                                                                                                                                                                                                                                                                                                                        |
|:--------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster','instance').                                                                                                                                                                                                                                                                   |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                                                                                                                                                                                                                                   |
| --filter-metric                 | Filter metrics (Can be: 'Queries', 'InsertThroughput', 'DeleteThroughput', 'SelectThroughput', 'UpdateThroughput', 'DMLThroughput', 'DDLThroughput', 'InsertLatency', 'DeleteLatency', 'SelectLatency', 'UpdateLatency', 'DMLLatency', 'DDLLatency') (Can be a regexp).                                                            |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'queries', 'insertthroughput', 'deletethroughput', 'selectthroughput', 'updatethroughput', 'dmlthroughput', 'ddlthroughput', 'insertlatency', 'deletelatency', 'selectlatency', 'updatelatency', 'dmllatency', 'ddllatency', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').     |
| --critical-$metric$-$statistic$ | Thresholds critical ($metric$ can be: 'queries', 'insertthroughput', 'deletethroughput', 'selectthroughput', 'updatethroughput', 'dmlthroughput', 'ddlthroughput', 'insertlatency', 'deletelatency', 'selectlatency', 'updatelatency', 'dmllatency', 'ddllatency', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
<TabItem value="Rds-Storage" label="Rds-Storage">

| Option                                 | Description                                                                                       |
|:---------------------------------------|:--------------------------------------------------------------------------------------------------|
| --type                                 | Set the instance type (Required) (Can be: 'cluster','instance').                                  |
| --name                                 | Set the instance name (Required) (can be defined multipletimes).                                  |
| --filter-metric                        | Filter on a specific metric. Can be: FreeStorageSpace, FreeableMemory.                            |
| --add-space-usage-percent              | Check storage usage space percentage (need privileges to describe rds).                           |
| --warning-$metric$ --critical-$metric$ | Thresholds ($metric$ can be: 'storage-space-free', 'storage-space-usage-prct', 'memory-free').    |

</TabItem>
<TabItem value="Rds-Transactions" label="Rds-Transactions">

| Option                          | Description                                                                                                                                                                             |
|:--------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster','instance').                                                                                                                        |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                                                                                        |
| --filter-metric                 | Filter metrics (Can be: 'ActiveTransactions', 'BlockedTransactions', 'CommitThroughput', 'CommitLatency') (Can be a regexp).                                                            |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'activetransactions', 'blockedtransactions', 'committhroughput', 'commitlatency', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').     |
| --critical-$metric$-$statistic$ | Thresholds critical ($metric$ can be: 'activetransactions', 'blockedtransactions', 'committhroughput', 'commitlatency', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
<TabItem value="Rds-Volume-Iops" label="Rds-Volume-Iops">

| Option                          | Description                                                                                                                                                   |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster').                                                                                                         |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                                                              |
| --filter-metric                 | Filter metrics (Can be: 'VolumeBytesUsed', 'VolumeReadIOPs', 'VolumeWriteIOPs') (Can be a regexp).                                                            |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'volumebytesused', 'volumereadiops', 'volumewriteiops', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').     |
| --critical-$metric$-$statistic$ | Thresholds critical ($metric$ can be: 'volumebytesused', 'volumereadiops', 'volumewriteiops', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
<TabItem value="Rds-Volume-Usage" label="Rds-Volume-Usage">

| Option                          | Description                                                                                                                                                   |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                          | Set the instance type (Required) (Can be: 'cluster').                                                                                                         |
| --name                          | Set the instance name (Required) (can be defined multipletimes).                                                                                              |
| --filter-metric                 | Filter metrics (Can be: 'VolumeBytesUsed', 'VolumeReadIOPs', 'VolumeWriteIOPs') (Can be a regexp).                                                            |
| --warning-$metric$-$statistic$  | Thresholds warning ($metric$ can be: 'volumebytesused', 'volumereadiops', 'volumewriteiops', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').     |
| --critical-$metric$-$statistic$ | Thresholds critical ($metric$ can be: 'volumebytesused', 'volumereadiops', 'volumewriteiops', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_rds_api.pl \
	--plugin=cloud::aws::rds::plugin \
	--mode=storage \
	--custommode='paws' \
	--help
```

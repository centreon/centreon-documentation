---
id: installation
title: Install Centreon MBI extension
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


This chapter presents the software architecture of the **Centreon MBI** extension
and provides an overview of the integration of the extension with Centreon monitoring software.

This document is intended for administrators who will install or configure Centreon MBI.

Four main steps are required to install Centreon MBI:

- Check the system requirements.
- Install the Centreon MBI interface in the Centreon application (Centreon MBI Server).
- Install the reporting server (Centreon MBI Reporting Server).
- Configure the extraction, transformation and loading (ETL) in the Centreon MBI interface.

## Architecture

### A dedicated reporting server

The architecture and these requirements apply to :

- test
- pre-production
- production environments.

The diagram below highlights the main components of Centreon MBI:

![image](../assets/reporting/installation/architecture.png)

*The monitoring database is not necessarily on the same server as the Centreon server*.

- **ETL**: Process that extracts, transforms and loads data into the reporting database.
- **CBIS**: The scheduler that manages the execution and publication of reports.
- **Reporting Database**: The MariaDB database that contains the reporting data and some raw data extracted from the monitoring database.

### Network Flow Tables

The table below shows the different types of flows, by default,
between the dedicated BI server, the Centreon server and the databases:

| **Application** | **Source**               | **Destination**                      | **Port** | **Protocol** |
|-----------------|--------------------------|--------------------------------------|----------|--------------|
| ETL/CBIS        | Reporting server         | Centreon database server             | 3306     | TCP          |
| SSH             | Reporting server         |  Centreon Server                     | 22       | TCP          |
| CBIS            | Reporting server         | Centreon Server                      | 80       | HTTP*        |
| CBIS            | Centreon                 | Reporting server                     | 1234     | TCP          |
| Widgets         | Centreon central server  | Reporting server                     | 3306     | TCP          |

*Only required for Host-Graph-v2 and Hostgroup-Graph-v2 reports that use the Centreon API to generate graphs.*

### Information about the packages

The Centreon MBI installation is based on two RPM packages:

- **Centreon-bi-server:** Installs the MBI interface integrated with the Centreon interface. The package is installed on the Centreon central server.
- **Centreon-bi-reporting-server**: Contains all the components needed to run the reporting server
  (report scheduler, ETL, standard reports). It must be installed on a server dedicated to reporting processes.

The installation of the database must be done at the same time. We strongly recommend installing the MariaDB database on the
reporting server for performance & isolation reasons.

## Prerequisites

### Central Centreon server


#### Software requirements

See the [software requirements](../installation/prerequisites.md#software).

You should install the MariaDB database at the same time. We highly recommend
installing the database on the same server for performance & isolation
considerations.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

- Centreon Web 22.04
- Check that `date.timezone` is correctly configured in the `/etc/php.d/50-centreon.ini`
  file (same as the one returned by the `timedatectl status` command).
- Avoid using the following variables in the configuration file `/etc/my.cnf`. They interrupt the
  execution of long queries and can stop ETL or report generation jobs:
  - wait_timeout
  - interactive_timeout
  
#### Users and groups

| User                 | Group                      |
|----------------------|----------------------------|
| centreonBI (new)     | apache,centreon,centreonBI |
| apache (existing)    | centreonBI                 |
  
</TabItem>
<TabItem value="Debian 11" label="Debian 11">

- Centreon Web 22.04
- Check that `date.timezone` is correctly configured in the `/etc/php/8.0/mods-available/centreon.ini` file
  (same as the one returned by the `timedatectl status` command).
- Avoid using the following variables in the configuration file `/etc/mysql/mariadb.cnf`. They interrupt the
  execution of long queries and can stop ETL or report generation jobs:
  - wait_timeout
  - interactive_timeout
  
#### Users and groups

| User                 | Group                        |
|----------------------|------------------------------|
| centreonBI (new)     | www-data,centreon,centreonBI |
| apache (existing)    | centreonBI                   |
  
</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

- Centreon Web 22.04
- Check that `date.timezone` is correctly configured in the `/etc/php.d/50-centreon.ini`  file

  (same as the one returned by the `timedatectl status` command).
- Avoid using the following variables in the configuration file `/etc/my.cnf`. They interrupt the
  execution of long queries and can stop ETL or report generation jobs:
  - wait_timeout
  - interactive_timeout

#### Users and groups

| User                 | Group                      |
|----------------------|----------------------------|
| centreonBI (new)     | apache,centreon,centreonBI |
| apache (existing)    | centreonBI                 |
  
</TabItem>
</Tabs>

#### Description of users, umask and home directory

| User        | umask | home             |
|-------------|-------|------------------|
| centreonBI  | 0002  | /home/centreonBI |

### Dedicated reporting server

#### Hardware layer

| Number of services supervised | Minimum CPU          | RAM           |
|-------------------------------|----------------------|---------------|
| < 4 000                       | 2 CPU ( 3Ghz )       | 12Go minimum  |
| < 20 000                      | 4 CPU (3GHz) minimum | 16 Go minimum |
| >= 20 000 and < 40 000        | 4 CPU (3GHz) minimum | 24 Go minimum |
| >= 40 000 and < 100 000       | 8 CPU (3GHz) minimum | 32 Go minimum |
| > 100 000                     | > Contact Centreon   |               |

#### Storage space
Use [the following file](../assets/reporting/installation/Centreon-MBI-QuickGuide-Storage-Sizing_EN.xlsx)

#### Partitioning



| File system                    | Size                                                                                         |
|--------------------------------|----------------------------------------------------------------------------------------------|
| /                              | 5GB minimum                                                                                  |
| /var (containing MariaDB data) | Use the result of the above disk space simulation file                                       |
| MariaDB temporary folder       | Strongly recommended to place it in /var                                                     |
| Volume group*                  | 5G minimum free space on the **Volume group** hosting the MariaDB **data**.                  |


To check the free space, use the following command by replacing **vg_data** with the name of the group volume:

```shell
vgdisplay vg_data | grep -i free*
```

#### Firmware and software layer

- OS : CentOS / Redhat 7 ou 8 / Oracle Linux 8 / Alma 8 / Debian 11
- SGBD : MariaDB 10.5
- Firewalld : Disabled ([look here](../installation/installation-of-a-central-server/using-packages.md#Configurer-ou-désactiver-le-pare-feu))
- SELinux : Disabled ([look here](../installation/installation-of-a-central-server/using-packages.md#Désactiver-SELinux))

> Make sure that the time zone of the reporting server is the same as that of the central server, otherwise report publications will fail (link to download missing).
> The same time zone must be displayed with the `timedatectl` command.
> You can change the time zone with this command:
>
>```shell
>timedatectl set-timezone Europe/Paris
>```

Be sure to optimize MariaDB on your reporting server.
You will need at least 12GB of RAM in order to use the [next file](../assets/reporting/installation/centreon.cnf).

Make sure you have a **tmp** folder in **/var/lib/mysql**.

> Do not set these MariaDB optimizations on your monitoring server.

Users and groups :

| User        | Group      |
|-------------|------------|
| centreonBI  | centreonBI |

Description of users, umask and user directory:

| User        | umask | home             |
|-------------|-------|------------------|
| centreonBI  | 0002  | /home/centreonBI |

## Install the extension on Centreon

The actions listed in this chapter must be performed on the **Centreon Central Server**.

1. Install the Business repository, you can find it on the [support portal](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories).

2. Then run the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-bi-server
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install centreon-bi-server
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Add the following external repository (for Java 8):

```shell
wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | apt-key add -
add-apt-repository --yes https://adoptopenjdk.jfrog.io/adoptopenjdk/deb/
apt update
```

Then install Centreon MBI:

```shell
apt update && apt install centreon-bi-server
```

</TabItem>
</Tabs>

### Enable the extension

The menu **Administration > Extension > Manager** allows you to install the different extensions detected by Centreon. Click on the **Centreon MBI** tile to install it.

Then, download the license sent by the Centreon team to start configuring the general options.

### Configure the extension

Enter the following values in the Centreon general options
MBI menu, *Reports > Monitoring Business Intelligence > General Options* :


| Tabs                                                                                   | Option                     | Value                                                                                |
|----------------------------------------------------------------------------------------|----------------------------|--------------------------------------------------------------------------------------|
| Scheduler options                                                                      | CBIS Host                  | IP address of the reporting server                                                   |
| ETL options A MariaDB database dedicated to reporting has been set up.                 | Yes                        |                                                                                      |
| Reporting widgets                                                                      | Reporting MariaDB database | IP address of the reporting base (default = IP address of the reporting server)      |

\**The connection test will not work at this point in the installation*.

### Access to the Central database

Download the license sent by the Centreon team to start configuring the general options.

<Tabs groupId="sync">
<TabItem value="Local monitoring base at the central office" label="Local monitoring base at the central office">

The MariaDB monitoring database is hosted on the central monitoring server.

Run the command below to allow the reporting server to connect to the databases on the monitoring server.

Use the following option:

```shell
/usr/share/centreon/www/modules/centreon-bi-server/tools/centreonMysqlRights.pl --root-password=@ROOTPWD@
```

**@ROOTPWD@** : Root password of the MariaDB database of supervision.
If there is no password for the "root" user, do not specify the **root-password** option.

</TabItem>
<TabItem value="Remote monitoring base in relation to the central office" label="Remote monitoring base in relation to the central office">

The MariaDB monitoring database is hosted on a dedicated server.

Connect via SSH to the database server, and run the following commands:

```SQL
CREATE USER 'centreonbi'@'$BI_ENGINE_IP$' IDENTIFIED BY 'centreonbi';
GRANT ALL PRIVILEGES ON centreon.* TO 'centreonbi'@'$BI_ENGINE_IP$';
GRANT ALL PRIVILEGES ON centreon_storage.* TO 'centreonbi'@'$BI_ENGINE_IP$';
```

**$BI_ENGINE_IP$** : IP address of the reporting server.

</TabItem>
</Tabs>

If you use MariaDB replication for your **monitoring databases**, some views
are created during the installation of Centreon MBI.
You must exclude them from replication by adding the following line to the **my.cnf**
file of the slave server or mariadb.cnf on Debian 11.

```shell
replicate-wild-ignore-table=centreon.mod_bi_%v01,centreon.mod_bi_%V01
```

Then, create the views manually on the slave server:

1. Download [the following file](../assets/reporting/installation/view_creation.sql) to a temporary folder (in our example, **/tmp**), for instance using **wget**.

2. Run the following command (change the name of your temporary folder if necessary):

```bash
mysql centreon < /tmp/view_creation.sql
```

#### Debian 11 specific configuration

MariaDB must listen on all interfaces instead of listening on localhost/127.0.0.1 (default value). Edit the following file:

```shell
/etc/mysql/mariadb.conf.d/50-server.cnf
```

Set **bind-address** to **0.0.0.0** and restart **mariadb**.

```shell
systemctl restart mariadb
```

### Give rights to the cbis user


When you install Centreon MBI, a [user](../monitoring/basic-objects/contacts.md) named **cbis** is automatically created.
It allows the report generation engine to extract data from Centreon (using the APIs) in order to insert them in the report.
This user must [have access to all resources monitored by Centreon](../administration/access-control-lists.md) in order to extract the performance graphs for the following reports:

- Host-Graph-v2
- Hostgroup-Graph-v2.

To test the connection between the MBI reporting server and the Centreon API, use the following command to download a graph. Replace the graph parameters and timestamps, and replace XXXXXXXXX with the user's autologin token **cbis**:

```bash
curl -XGET 'https://IP_CENTRAL/centreon/include/views/graphs/generateGraphs/generateImage.php?akey=XXXXXXXXX&username=CBIS&hostname=<host_name>&service=<service_description>&start=<start_date>&end=<end_date>' --output /tmp/image.png

```

Example :

```bash
curl -XGET 'https://10.1.1.1/centreon/include/views/graphs/generateGraphs/generateImage.php?akey=otmw3n1hu03bvt9e0caphuf50ph8sdthcsk8ofdk&username=CBIS&hostname=my-poller&service=Cpu&start=1623016800&end=1623621600' --output /tmp/image.png
```

The result should look like the code below, and the desired graph image must have been uploaded to the `/tmp` directory:

```text
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 18311  100 18311    0     0  30569      0 --:--:-- --:--:-- --:--:-- 30569
```

## Install the reporting server

### Install the packages

You must have the following information before proceeding with the installation process:

- IP/DNS of the monitoring database
- IP/DNS of the Centreon web interface
- IP/DNS of the reporting database (localhost strongly recommended)

- Access (user/password) to the reporting database
- Define and retrieve the ssh password of the centreonBI user, on the Central server (for the availability of the reports generated on the interface)

#### Procedure


1. To start installing the reporting server, install the Business repository. You can find it on the [support portal](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories).

2. Then run the following command:

<Tabs groupId="sync">
<TabItem value="RHEL 8" label="RHEL 8">

Enable codeready-builder repositories:

```shell
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

Then launch the installation:

```shell
dnf install centreon-bi-reporting-server MariaDB-server MariaDB-client
```

In the case of an installation based on a blank distribution, install the GPG key:

```shell
cd /etc/pki/rpm-gpg/
wget https://yum-gpg.centreon.com/RPM-GPG-KEY-CES

```

</TabItem>
<TabItem value="Oracle Linux 8" label="Oracle Linux 8">

Enable codeready-builder repositories:

```shell
dnf config-manager --set-enabled ol8_codeready_builder
```

Then launch the installation:

```shell
dnf install centreon-bi-reporting-server MariaDB-server MariaDB-client
```

In the case of an installation based on a blank distribution, install the GPG key:

```shell
cd /etc/pki/rpm-gpg/
wget https://yum-gpg.centreon.com/RPM-GPG-KEY-CES

```

</TabItem>
<TabItem value="Alma 8" label="Alma 8">

Enable powertools repositories:

```shell
dnf config-manager --set-enabled 'powertools'
```

Then launch the installation:

```shell
dnf install centreon-bi-reporting-server MariaDB-server MariaDB-client
```

In the case of an installation based on a blank distribution, install the GPG key:

```shell
cd /etc/pki/rpm-gpg/
wget https://yum-gpg.centreon.com/RPM-GPG-KEY-CES

```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Install the prerequisite packages:

```shell
apt install lsb-release ca-certificates apt-transport-https software-properties-common wget gnupg2
```

Add the following external repository (for Java 8):

```shell
wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | apt-key add -
add-apt-repository --yes https://adoptopenjdk.jfrog.io/adoptopenjdk/deb/
apt update
```

Then launch the installation:

```shell
apt update
apt install centreon-bi-reporting-server MariaDB-server MariaDB-client
```

In the case of an installation based on a blank distribution, install the GPG key:

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">
  
Install MBI:

```shell
yum install centreon-bi-reporting-server MariaDB-server MariaDB-client
```

In the case of an installation based on a blank distribution, import the :

```shell
cd /etc/pki/rpm-gpg/
wget https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
```

</TabItem>
</Tabs>

Enable the cbis service:

```shell
systemctl enable cbis
```

### Configure the reporting server

#### MariaDB Optimizations

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 / RHEL 7 / CentOS 7" label="Alma / RHEL / Oracle Linux 8 /  RHEL 7 / CentOS 7">

Make sure that the optimized configuration [file](../assets/reporting/installation/centreon.cnf) provided
in the prerequisites is present in `/etc/my.cnf.d/`, then restart the MariaDB service:

```shell
systemctl restart mariadb
```

It is necessary to change the limitation **LimitNOFILE**. Changing this
option in `/etc/my.cnf` will NOT work.

```shell
mkdir -p  /etc/systemd/system/mariadb.service.d/
echo -ne "[Service]\nLimitNOFILE=32000\n" | tee /etc/systemd/system/mariadb.service.d/limits.conf
systemctl daemon-reload
systemctl restart mariadb
```

If the MariaDB service fails to start, remove the files *ib_logfile*
(MariaDB must absolutely be stopped)and then restart MariaDB again:

```shell
rm -f /var/lib/mysql/ib_logfile*
systemctl start mariadb
```

If you are using a specific socket file for MariaDB, modify the file `/etc/my.cnf` and
in the [client] section, add :

```shell
socket=$PATH_TO_SOCKET$
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Make sure that the optimized configuration [file](../assets/reporting/installation/centreon.cnf)
provided in the requirements is present in `/etc/mysql/mariadb.conf.d/`.

Rename the file to `80-centreon.cnf` :

```shell
mv centreon.cnf 80-centreon.cnf
```

MariaDB should listen to all interfaces instead of localhost/127.0.0.1, which is the default.
Edit the following file:

```shell
/etc/mysql/mariadb.conf.d/50-server.cnf
```

Set the **bind-address** parameter to **0.0.0.0** and restart MariaDB.

```shell
systemctl restart mariadb
```

It is necessary to change the **LimitNOFILE** limitation. Changing this option in `/etc/mysql/mariadb.cnf` will not work.

```shell
mkdir -p  /etc/systemd/system/mariadb.service.d/
echo -ne "[Service]\nLimitNOFILE=32000\n" | tee /etc/systemd/system/mariadb.service.d/limits.conf
systemctl daemon-reload
systemctl restart mariadb
```

If the MariaDB service fails at the time of starting, remove the files *ib_logfile*
(MariaDB must absolutely be stopped)and then restart MariaDB again:

```shell
rm -f /var/lib/mysql/ib_logfile*
systemctl start mariadb
```

If you are using a specific socket file for MariaDB, edit the
file `/etc/mysql/mariadb.cnf` and in the [client] section, add :

```shell
socket=$PATH_TO_SOCKET$
```

</TabItem>
</Tabs>

### Secure the database

Since MariaDB 10.5, it is mandatory to secure the root access of the database before installing Centreon.
If you use a local database, execute the following command on the central server, otherwise on the database server:

```shell
mysql_secure_installation
```

- Answer **yes** to all questions except "Disallow root login remotely?"
- It is mandatory to define a password for the **root** user of the database. You will need this password during the [web-installation](../installation/web-and-post-installation.md).

> For more information, please see the [official MariaDB documentation](https://mariadb.com/kb/en/mysql_secure_installation/).

#### Start configuring

Make sure the MariaDB reporting system is started and then run the commands below and answer the commands below and answer the questions:

```shell
/usr/share/centreon-bi/config/install.sh
```

The script manages the exchange of SSH keys between the monitoring server and the reporting server, and configures the default SFTP publishing rule
in order to publish the reports on the Centreon web interface. Finally, it enables the backup and starts the CBIS service.

Once the installation is complete, continue to the next chapter to configure the ETL.

#### Problem with the SSH exchange key

In some cases, SSH key exchange fails.
To solve the problem, do the following manually:

**On the monitoring server**. To start, switch to the `bash` environment of `centreonBI` :

```bash
su - centreonBI
```

Next, generate an SSH key to prepare the :

```bash
ssh-keygen -t ed25519 -a 100
```

Then, **on the reporting server**, switch to the `bash` environment of `centreonBI` :

```bash
su - centreonBI
```

Generate the SSH key:

```bash
ssh-keygen -t ed25519 -a 100
cat ~/.ssh/id_ed25519.pub | tee ~/.ssh/authorized_keys
```

After executing these commands, copy the contents of the file that was displayed by the `cat` command and paste it into the **~/.ssh/authorized_keys** **file on the monitoring server**
and then apply the correct permissions to the file (still as the `centreon` user) and then apply the correct permissions to the file (still as the `centreon` user):

```bash
chmod 600 ~/.ssh/authorized_keys
```

The key exchange must then be validated by a first connection that will accept the SSH server signature (always as the `centreonBI` user) **from the reporting server** :

```bash
ssh centreonBI@@MONITORING_SERVER@
```

Then exit the `centreonBI` session with `exit` or `Ctrl-D` on both servers.

To continue, run the installation script (`/usr/share/centreon-bi/config/install.sh`) as above and answer **Yes** when asked to proceed with the SSH key exchange.
You will get an error when creating the USER, because it already exists. This is not a blocking step.

### ETL : Configuration

Centreon MBI integrates an ETL that allows you to :

- Synchronize the raw data from the supervision to the reporting server
- Feed statistical data to the reporting server databases statistical data
- Control the retention of data on the reporting server

Before proceeding to the next steps, it is necessary to read the
chapter on [best practices](concepts.md#best-practices-for-monitoring) to make sure that the configuration of
the objects in Centreon (groups, categories...) is in accordance with the expectations of Centreon MBI.

In the `Reporting > Monitoring Business Intelligence > General Options > ETL Options` tab, specify the following options the following options:

| **Options**                                                                            | **Values**                                                                                                                                                                                                                            |
|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **General options**                                                                    |                                                                                                                                                                                                                                       |
| Reporting engine uses a dedicated dedicated MariaDB server                             | Yes. You **must** use a reporting server                                                                                                                                                                                              |
| Temporary file storage directory on reporting server                                   | Folder where dumps will be stored on the reporting server                                                                                                                                                                             |
| Type of statistics to build                                                            | Select “Availability only” if you only use availability reports. Select “Performance and capacity only” if you only want to use capacity and performance reports. Select “All” to calculate the statistics for both types of reports. |
| Use large memory tweaks (store MariaDB temporary tables in memory)                     | Activated only if your MariaDB configuration and allocated physical memory on the server permits.                                                                                                                                     |
| **Reporting perimeter selection**                                                      |                                                                                                                                                                                                                                       |
| Hostgroups                                                                             | Select only host groups for which you want to aggregate data.                                                                                                                                                                         |
| Hostcategories                                                                         | Select only host categories for which you want to aggregate data.                                                                                                                                                                     |
| Service categories                                                                     | Select only service categories for which you want to aggregate data.                                                                                                                                                                  |
| **Availability statistic calculation**                                                 |                                                                                                                                                                                                                                       |
| Live services for availability statistics calculation                                  | Select required time periods.                                                                                                                                                                                                         |
| **Performance and capacity statistic calculation**                                     |                                                                                                                                                                                                                                       |
| Granularity required for performance data statistics                                   | Select the level of granularity required to run the desired performance reports (1).                                                                                                                                                  |
| Live services for performance data statistics calculation                              | Select the required time periods.                                                                                                                                                                                                     |
| **Capacity statistic aggregated by month**                                             |                                                                                                                                                                                                                                       |
| Live services for capacity statistics calculation                                      | Select the “24x7” time period.                                                                                                                                                                                                        |
| Service categories related to capacity data monitoring                                 | Select the service categories that have been associated with capacity-type services.                                                                                                                                                  |
| Exclude metrics from service categories that do not return capacity USAGE information  | Concerns the metrics linked to services which return capacity data. Select the metrics that do not return capacity usage information. but a maximum or total value. (e.g., the metric “size”).                                        |
| **Centile parameters**                                                                 |                                                                                                                                                                                                                                       |
| Calculating centile aggregation by                                                     | Select the desired aggregation level. The standard percentile report provided with BI 2.1 uses Month data.                                                                                                                            |
| Select service categories to aggregate centile on                                      | Filter on relevant service categories for centile statistics (e.g., Traffic).                                                                                                                                                         |
| First day of the week                                                                  | Select the first day of the week for Week aggregation.                                                                                                                                                                                |
| Centile / Timeperiod combination                                                       | Create a new centile/timeperiod combination on which to perform the calculation.                                                                                                                                                      |

**(1)** Reports requiring data granularity by the hour are listed below. 
If you do not wish to use these reports, disable the calculation of hourly statistics:

- Hostgroup-Host-details-1

- Host-detail-v2
- Hostgroup-traffic-Average-Usage-By-Interface
- Hostgroup-traffic-by-Interface-And-Bandwith-Ranges

### ETL: Data retention

The reporting server contains tables of statistics specific to Centreon MBI in the "centreon_storage" database.
The storage space used by these tables is increasing every day.
It is possible to control the size of these tables by defining data retention rules.

Under **Reports > Monitoring Business Intelligence > General Options > Data Retention Options** menu,
data retention can be managed by :

- Type of data (availability, performance).
- Data granularity (raw data, hourly, daily or monthly values)

> Before enabling the data retention options, make sure that the reporting engine
> uses a dedicated MariaDB server, and the corresponding option is set to
> **Yes** in the menu **Reporting > Business Intelligence > General Options ETL Options**.

Enable data retention management by selecting **Yes**, then set the configuration options (example below).

![image](../assets/reporting/installation/bi_retention.png)

To enable automatic purging of old data, edit the cron file **/etc/cron.d/centreon-bi-purge**
on the reporting server, then uncomment the following line:

```shell
#0 20 * * * root @CENTREON_BI_HOME@/*etl*/dataRetentionManager.pl >> @CENTREON_BI_LOG@/dataRetentionManager.log 2>&1
```

Avoid scheduled periods for statistical calculations with Centreon MBI ETL and report generation.
You can run this cron daily or weekly, depending on the batch execution time and the load generated on the server.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 / RHEL 7 / CentOS 7" label="Alma / RHEL / Oracle Linux 8 / RHEL 7 / CentOS 7">

Restart the cron service:

```shell
systemctl restart crond
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Restart the cron service:

```shell
systemctl restart cron
```

</TabItem>
</Tabs>

**BEST PRACTICES** : Select different retention periods depending on the granularity of the statistical data:

- Aggregated values per hour are used to analyze a metric over a short period of time, they take up a lot of disk space. You may not
  need to keep these statistics for more than two or three months.

- Beyond five or six months, you may only need to view the trend for availability or performance statistics.
  You could then retain daily aggregate data for up to six months, for example, and set up retention of monthly aggregate data for a period of several dozen months.

Please proceed to the next section to continue the installation.

### ETL : Execution

> Before continuing, make sure you have installed the MariaDB configuration file as described above in the prerequisites. Configure 
> and enable data retention so that only the required data is imported and calculated.

#### Reconstruction of statistics from historical data

Run the following command on the reporting server. This will:

- Delete all existing data from the reporting server.
- Import raw monitoring data from the monitoring server to the reporting server (depending on retention settings).
- Fill tables containing availability statistics for hosts and services.
- Fill in tables containing performance and capacity statistics for hosts and services.

```shell
/usr/share/centreon-bi/bin/centreonBIETL -r
```

#### Enable daily script execution

Once the data rebuilding process is complete, you can enable the calculation of statistics.
On the reporting server, edit the file **/etc/cron.d/centreon-bi-engine** and uncomment the following line:

```shell
#30 4 * * * root /usr/share/centreon-bi/bin/centreonBIETL -d >> /var/log/centreon-bi/centreonBIETL.log 2>&1
```

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 / RHEL 7 / CentOS 7" label="Alma / RHEL / Oracle Linux 8 / RHEL 7 / CentOS 7">

Restart the cron service on the reporting server:

```shell
systemctl restart crond
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Restart the cron service on the reporting server:

```shell
systemctl restart cron
```

</TabItem>
</Tabs>

> Make sure that the **centreonBIETL** batch only starts after the **eventReportBuilder** 
> batch has finished on the monitoring server (check the **/etc/cron.d/centreon** cron file on the monitoring server).

The installation of Centreon MBI is now complete, see [the tutorial](../getting-started/analyze-resources-availability.md).

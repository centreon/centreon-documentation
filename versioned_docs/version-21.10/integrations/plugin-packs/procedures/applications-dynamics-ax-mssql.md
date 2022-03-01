---
id: applications-dynamics-ax-mssql
title: Microsoft Dynamics AX Database
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

This Plugin Pack allow to get metrics and statuses collected through SQL queries.

## Pack assets

### Monitored objects

* Microsoft SQL AX Database

### Collected metrics

<Tabs groupId="sync">
<TabItem value="EDI-Order" label="EDI-Order">

| Service           | Description                  |
| :---------------- | :--------------------------- |
| EDI-Order         | Check the EDI Orders errors. |

</TabItem>
</Tabs>

## Prerequisites

## Username

The username string should not be longer than 32 chararacters. Username must be
in the following form: \[Servername|Domainname\] In order for the plugin to
operate correctly, a database user with specific privileges is required. The
most simple way is to assign the Nagios-user the role “serveradmin”. As an
alternative you can use the sa-User for the database connection. Alas, this
opens a serious security hole, as the (cleartext) administrator password can be
found in the nagios configuration files Birk Bohne wrote the following script
which allows the automated creation of a minimal, yet sufficient privileged
monitoring-user.

    declare @dbname varchar(255)
    declare @check_mssql_health_USER varchar(255)
    declare @check_mssql_health_PASS varchar(255)
    declare @check_mssql_health_ROLE varchar(255)
    declare @source varchar(255)
    declare @options varchar(255)
    declare @backslash int
    
    /*******************************************************************/
    SET @check_mssql_health_USER = '"[Servername|Domainname]\Username"'
    SET @check_mssql_health_PASS = 'Password'
    SET @check_mssql_health_ROLE = 'Rolename'
    /******************************************************************
    
    PLEASE CHANGE THE ABOVE VALUES ACCORDING TO YOUR REQUIREMENTS
    
    - Example for Windows authentication:
      SET @check_mssql_health_USER = '"[Servername|Domainname]\Username"'
      SET @check_mssql_health_ROLE = 'Rolename'
    
    - Example for SQL Server authentication:
      SET @check_mssql_health_USER = 'Username'
      SET @check_mssql_health_PASS = 'Password'
      SET @check_mssql_health_ROLE = 'Rolename'
    
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    It is strongly recommended to use Windows authentication. Otherwise
    you will get no reliable results for database usage.
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    *********** NO NEED TO CHANGE ANYTHING BELOW THIS LINE *************/
    
    SET @options = 'DEFAULT_DATABASE=MASTER, DEFAULT_LANGUAGE=English'
    SET @backslash = (SELECT CHARINDEX('\', @check_mssql_health_USER))
    IF @backslash > 0
      BEGIN
        SET @source = ' FROM WINDOWS'
        SET @options = ' WITH ' + @options
      END
    ELSE
      BEGIN
        SET @source = ''
        SET @options = ' WITH PASSWORD=''' + @check_mssql_health_PASS + ''',' + @options
      END
    
    PRINT 'create Nagios plugin user ' + @check_mssql_health_USER
    EXEC ('CREATE LOGIN ' + @check_mssql_health_USER + @source + @options)
    EXEC ('USE MASTER GRANT VIEW SERVER STATE TO ' + @check_mssql_health_USER)
    EXEC ('USE MASTER GRANT ALTER trace TO ' + @check_mssql_health_USER)
    EXEC ('USE MSDB GRANT SELECT ON sysjobhistory TO ' + @check_mssql_health_USER)
    EXEC ('USE MSDB GRANT SELECT ON sysjobschedules TO ' + @check_mssql_health_USER)
    EXEC ('USE MSDB GRANT SELECT ON sysjobs TO ' + @check_mssql_health_USER)
    PRINT 'User ' + @check_mssql_health_USER + ' created.'
    PRINT ''
    
    declare dblist cursor for
      select name from sysdatabases WHERE name NOT IN ('master', 'tempdb', 'msdb') open dblist
        fetch next from dblist into @dbname
        while @@fetch_status = 0 begin
          EXEC ('USE [' + @dbname + '] print ''Grant permissions in the db '' + ''"'' + DB_NAME() + ''"''')
          EXEC ('USE [' + @dbname + '] CREATE ROLE ' + @check_mssql_health_ROLE)
          EXEC ('USE [' + @dbname + '] GRANT EXECUTE TO ' + @check_mssql_health_ROLE)
          EXEC ('USE [' + @dbname + '] GRANT VIEW DATABASE STATE TO ' + @check_mssql_health_ROLE)
          EXEC ('USE [' + @dbname + '] GRANT VIEW DEFINITION TO ' + @check_mssql_health_ROLE)
          EXEC ('USE [' + @dbname + '] CREATE USER ' + @check_mssql_health_USER + ' FOR LOGIN ' + @check_mssql_health_USER)
          EXEC ('USE [' + @dbname + '] EXEC sp_addrolemember ' + @check_mssql_health_ROLE + ' , ' + @check_mssql_health_USER)
          EXEC ('USE [' + @dbname + '] print ''Permissions in the db '' + ''"'' + DB_NAME() + ''" granted.''')
          fetch next from dblist into @dbname
        end
    close dblist
    deallocate dblist

Please keep in mind that check\_mssql\_health’s functionality is limited when
using SQL Server authentication. This method is strongly discouraged . Normally
there is already a Nagios-(Windows-)-user which can be used for the Windows
authentication method.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">
1. Install the Centreon plugin package on every Poller:

```bash
yum install centreon-plugin-Applications-Dynamics-Ax-Mssql
```

2. On the Centreon Web interface, install the Centreon Pack *Dynamics AX Database* 
from the **Configuration > Plugin Packs > Manager** page


</TabItem>
<TabItem value="Offline License" label="Offline License">

### Centreon Plugin

1. Install the Centreon plugin package on every Poller:

```bash
yum install centreon-plugin-Applications-Dynamics-Ax-Mssql
```

2. Install the Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-dynamics-ax-mssql
```

3. On the Centreon Web interface, install the Centreon Pack *Dynamics AX Database* 
from the **Configuration > Plugin Packs > Manager** page

</TabItem>
</Tabs>

### RPM

In order to use this template, the following RPM are needed:

  - freetds-0.82-6.el6.$ARCH.rpm
  - perl-DBD-Sybase-1.10-1.el6.rf.$ARCH.rpm
  - unixODBC-2.2.14-14.el6.$ARCH.rpm
  - unixODBC-libs-2.2.6-15.5.el6.$ARCH.rpm

### Configuration of freetds.conf file

The /etc/freetds.conf file have to be modified in order to encrypt the password.
To do that :

```bash
vi /etc/freetds.conf
```

Modify line tds 'version = auto' to 'tds version = 8.0'. Then remove comment
symbol at the beginning of this line.


## Host configuration

* Log into Centreon and add a new host thfough "Configuration > Hosts". 
* Apply the *App-Dynamics-AX-Database-Mssql-custom* template and configure all the mandatory Macros:

| Mandatory | Name          | Description                                       |
| :-------- | :------------ | :------------------------------------------------ |
| X         | MSSQLPASSWORD | MSSQL password to connect to the database         |
| X         | MSSQLPORT     | MSSQL port of the target database (Default: 1433) |
| X         | MSSQLUSERNAME | MSSQL username to connect to the database         |
|           | EXTRAOPTIONS  | Extraoptions to use if needed                     |


Click "Save" button.
---
id: pp/applications-databases-mssql
title: Microsoft SQL Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.19 | `STABLE` | Oct 23 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Databases-Mssql

## Username

The username string should not be longer than 32 chararacters. Username
must be in the following form: [Servername|Domainname]
In order for the plugin to operate correctly, a database user with specific privileges is required.
The most simple way is to assign the Nagios-user the role “serveradmin”. As an alternative you can use the sa-User for the database connection. Alas, this opens a serious security hole, as the (cleartext) administrator password can be found in the nagios configuration files
Birk Bohne wrote the following script which allows the automated creation of a minimal, yet sufficient privileged monitoring-user.

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

Please keep in mind that check_mssql_health’s functionality is limited when using SQL Server authentication. This method is strongly discouraged . Normally there is already a Nagios-(Windows-)-user which can be used for the Windows authentication method.

### RPM
In order to use this template, the following RPM are needed:

* freetds-0.82-6.el6.$ARCH.rpm
* perl-DBD-Sybase-1.10-1.el6.rf.$ARCH.rpm
* unixODBC-2.2.14-14.el6.$ARCH.rpm
* unixODBC-libs-2.2.6-15.5.el6.$ARCH.rpm

### Configuration of freetds.conf file
The /etc/freetds.conf file have to be modified in order to encrypt the
password. To do that :

    vi /etc/freetds.conf

Modify line tds 'version = 4.2' to 'tds version = 8.0'.
Then remove comment symbol at the beginning of this line.

## Centreon Configuration
### Create a new MSSQL database server
Go to "Configuration &gt; Hosts" and click "Add". Then, fill the form as
shown by the following table :

<table>
<colgroup>
<col width="58%" />
<col width="41%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field</th>
<th align="left">Value</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Host name</p></td>
<td align="left"><p><em>Name of the host</em></p></td>
</tr>
<tr class="even">
<td align="left"><p>Alias</p></td>
<td align="left"><p><em>Host description</em></p></td>
</tr>
<tr class="odd">
<td align="left"><p>IP</p></td>
<td align="left"><p><em>Host IP Address</em></p></td>
</tr>
<tr class="even">
<td align="left"><p>Monitored from</p></td>
<td align="left"><p><em>Monitoring Poller to use</em></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Host Multiple Templates</p></td>
<td align="left"><p>App-DB-MSSQL-custom</p></td>
</tr>
</tbody>
</table>

Click "Save" button.

Those services were automatically created for this host:

<table>
<colgroup>
<col width="24%" />
<col width="75%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Service</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Backup-Age</p></td>
<td align="left"><p>Check database backups of the server. This time is given in minutes.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Blocked-Processes</p></td>
<td align="left"><p>Check blocked processes on the server. Service cannot work because of a SQL request It depends of your MS SQL Server version.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Cache-Hitratio</p></td>
<td align="left"><p>Check the 'Data Buffer Cache Hit Ratio' of the server.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Connection-Time</p></td>
<td align="left"><p>Check the connection time to the server.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Database-Free</p></td>
<td align="left"><p>Check free space of databases on the server.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Deadlocks</p></td>
<td align="left"><p>Check deadlocks per second of the server.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Failed-Jobs</p></td>
<td align="left"><p>Check failed jobs of the server.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Ping</p></td>
<td align="left"><p>Monitor host response time</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Transactions</p></td>
<td align="left"><p>Check transactions per second of the server.</p></td>
</tr>
</tbody>
</table>

### Host Macro Configuration
The following macros must be configured on host:

<table>
<colgroup>
<col width="19%" />
<col width="48%" />
<col width="19%" />
<col width="13%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Macro</th>
<th align="left">Description</th>
<th align="left">Default value</th>
<th align="left">Example</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>MSSQLUSERNAME</p></td>
<td align="left"><p>the MSSQL user</p></td>
<td align="left"><p>USERNAME</p></td>
<td align="left"><p>root</p></td>
</tr>
<tr class="even">
<td align="left"><p>MSSQLPASSWORD</p></td>
<td align="left"><p>the MSSQL password</p></td>
<td align="left"><p>PASSWORD</p></td>
<td align="left"><p>p@ssw0rd</p></td>
</tr>
<tr class="odd">
<td align="left"><p>MSSQLPORT</p></td>
<td align="left"><p>Port to connect to database</p></td>
<td align="left"><p>1433</p></td>
<td align="left"><p>1433</p></td>
</tr>
</tbody>
</table>


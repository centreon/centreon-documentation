---
id: pp/applications-lync-2013-mssql
title: Lync 2013
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.2 | `STABLE` | Jan 17 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Lync-2013-Mssql

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
* freetds-0.82-6.el6.$ARCH
* perl-DBD-Sybase-1.10-1.el6.rf.$ARCH
* unixODBC-2.2.14-14.el6.$ARCH
* unixODBC-devel-2.2.14-14.el6.$ARCH

#### Configuration of freetds.conf file
The /etc/freetds.conf file have to be modified in order to encrypt the
password. To do that :

    vi /etc/freetds.conf
Modify line tds 'version = 4.2' to 'tds version = 8.0'.
Then remove comment symbol at the beginning of this line.

## Centreon Configuration
### Create a new Lync MSSQL instance
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
<td align="left"><p>App-Lync-2013-MSSQL-custom</p></td>
</tr>
</tbody>
</table>

Click "Save" button.

#### Host Macro Configuration
The following macros must be configured on host:

<table>
<colgroup>
<col width="25%" />
<col width="50%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Macro</th>
<th align="left">Description</th>
<th align="left">Default value</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>MSSQLUSERNAME</p></td>
<td align="left"><p>MSSQL username</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>MSSQLPASSWORD</p></td>
<td align="left"><p>MSSQL password</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>MSSQLPORT</p></td>
<td align="left"><p>Port Of the MSSQL instance (need to check in the SQL Studio if dynamic)</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>


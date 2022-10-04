---
id: applications-databases-mssql
title: Microsoft SQL Server
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Databases-Mssql
```

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

### RPM

In order to use this template, the following RPM are needed:

  - freetds-0.82-6.el6.$ARCH.rpm
  - perl-DBD-Sybase-1.10-1.el6.rf.$ARCH.rpm
  - unixODBC-2.2.14-14.el6.$ARCH.rpm
  - unixODBC-libs-2.2.6-15.5.el6.$ARCH.rpm

### Configuration of freetds.conf file

The /etc/freetds.conf file have to be modified in order to encrypt the password.
To do that :

    vi /etc/freetds.conf

Modify line tds 'version = 4.2' to 'tds version = 8.0'. Then remove comment
symbol at the beginning of this line.

## Centreon Configuration

### Create a new MSSQL database server

Go to "Configuration \> Hosts" and click "Add". Then, fill the form as shown by
the following table :

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-DB-MSSQL-custom        |

Click "Save" button.

Those services were automatically created for this host:

| Service           | Description                                                                                                                   |
| :---------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| Backup-Age        | Check database backups of the server. This time is given in minutes.                                                          |
| Blocked-Processes | Check blocked processes on the server. Service cannot work because of a SQL request It depends of your MS SQL Server version. |
| Cache-Hitratio    | Check the 'Data Buffer Cache Hit Ratio' of the server.                                                                        |
| Connection-Time   | Check the connection time to the server.                                                                                      |
| Database-Free     | Check free space of databases on the server.                                                                                  |
| Deadlocks         | Check deadlocks per second of the server.                                                                                     |
| Failed-Jobs       | Check failed jobs of the server.                                                                                              |
| Ping              | Monitor host response time                                                                                                    |
| Transactions      | Check transactions per second of the server.                                                                                  |

### Host Macro Configuration

The following macros must be configured on host:

| Macro         | Description                 | Default value | Example  |
| :------------ | :-------------------------- | :------------ | :------- |
| MSSQLUSERNAME | the MSSQL user              | USERNAME      | root     |
| MSSQLPASSWORD | the MSSQL password          | PASSWORD      | p@ssw0rd |
| MSSQLPORT     | Port to connect to database | 1433          | 1433     |

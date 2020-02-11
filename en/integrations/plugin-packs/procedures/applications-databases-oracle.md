---
id: pp/applications-databases-oracle
title: Oracle Database
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.6.1 | `STABLE` | Dec 20 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Databases-Oracle

## RPM
In order to use this template, the following RPM is needed to compile
Perl library:
*  gcc

### Oracle instant client
Go to [Instant Client Downloads](http://www.oracle.com/technetwork/database/features/instant-client/index-097480.html), choose the right OS (the one running monitoring engine, probably Linux x86-64) and download the following packages:
* oracle-instantclient-basic
* oracle-instantclient-sqlplus
* oracle-instantclientdevel

Install them:

    $ rpm -ivh oracle-*.rpm

### Perl library for oracle

<aside class="notice">
Replace 12.1 by the version of instantclient installed
</aside>

As root, run:

    $ cd /usr/local/src 
    $ wget http://www.cpan.org/modules/by-module/DBD/DBD-Oracle-1.64.tar.gz 
    $ tar xzf DBD-Oracle-1.64.tar.gz 
    $ cd DBD-Oracle-1.64 
    $ export ORACLE_HOME=/usr/lib/oracle/12.1/client64/ 
    $ export LD_LIBRARY_PATH=$ORACLE_HOME/lib 
    $ perl Makefile.PL -m /usr/share/oracle/12.1/client64/demo/demo.mk

<aside class="notice">
If `DBD::Oracle-1.28` is used, the last command line should be:
</aside>

    $ perl Makefile.PL -V 12.1

The following message should appear:

    LD_RUN_PATH=/usr/lib/oracle/12.1/client64/lib*
    Using DBD::Oracle 1.64. 
    Using DBD::Oracle 1.64. 
    Using DBI 1.52 (for perl 5.008008 on x86_64-linux-thread-multi) installed in /usr/lib64/perl5/vendor_perl/5.8.8/x86\_64-linux-thread-multi/auto/DBI/
    Writing Makefile for DBD::Oracle

Compile the library:

    $ make

Then install it:

    $ make install

Then create the file : /etc/ld.so.conf.d/oracle.conf and link to the Oracle Perl Library:

    $ touch /etc/ld.so.conf.d/oracle.conf
    $ vi /etc/ld.so.conf.d/oracle.conf

You just have to enter in the file : /usr/lib/oracle/12.1/client64/lib/

Then :

    /sbin/ldconfig

### user account
The safest way to retrieve information from the Oracle server is to
create a dedicated user for Centreon.

This user account must have the read permission on following tables:

-   dba\_free\_space
-   dba\_data\_files
-   dba\_temp\_files
-   dba\_segments
-   dba\_jobs
-   v$sysstat
-   v$sgastat
-   v$parameter
-   v$process
-   v$session
-   v$filestat
-   v$log
-   v$instance

## Centreon Configuration
### Create a new Oracle server
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

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
<td align="left"><p>App-DB-Oracle-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

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
<td align="left"><p>ping</p></td>
<td align="left"><p>Monitor host response time</p></td>
</tr>
<tr class="even">
<td align="left"><p>Connection-Number</p></td>
<td align="left"><p>Check connection number to the Oracle server</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Connection-Time</p></td>
<td align="left"><p>Check the time to connect to the server</p></td>
</tr>
<tr class="even">
<td align="left"><p>Corrupted-Blocks</p></td>
<td align="left"><p>Check the number of corrupted blocks in database</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Datacache-Hitratio</p></td>
<td align="left"><p>Check the 'Data Buffer Cache Hit Ratio' of the server.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Tablespace-Usage</p></td>
<td align="left"><p>Check the used space in tablespaces</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Rman-Backup-Problems</p></td>
<td align="left"><p>Check RMAN backup errors of the server during the last three days</p></td>
</tr>
<tr class="even">
<td align="left"><p>Tnsping</p></td>
<td align="left"><p>Check the connection to a remote listener</p></td>
</tr>
</tbody>
</table>

### Host macro configuration
The following macros must be configured on host:

<table>
<colgroup>
<col width="21%" />
<col width="47%" />
<col width="18%" />
<col width="12%" />
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
<td align="left"><p>ORACLEPORT</p></td>
<td align="left"><p>Port used to connect to the DB server</p></td>
<td align="left"><p>1521</p></td>
<td align="left"><p>1521</p></td>
</tr>
<tr class="even">
<td align="left"><p>ORACLESID</p></td>
<td align="left"><p>The name of the oracle instance</p></td>
<td align="left"><p>SID</p></td>
<td align="left"><p>ORCLB55</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ORACLEUSERNAME</p></td>
<td align="left"><p>the oracle user</p></td>
<td align="left"><p>USERNAME</p></td>
<td align="left"><p>root</p></td>
</tr>
<tr class="even">
<td align="left"><p>ORACLEPASSWORD</p></td>
<td align="left"><p>the oracle user's password</p></td>
<td align="left"><p>PASSWORD</p></td>
<td align="left"><p>p@ssw0rd</p></td>
</tr>
</tbody>
</table>


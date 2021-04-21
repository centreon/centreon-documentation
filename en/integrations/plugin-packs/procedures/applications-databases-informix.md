---
id: applications-databases-informix
title: Informix DB
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Databases-Informix
```

## Informix Client SDK:

Go to download "Informix Client Software Development Kit for Linux x86\_64,
64-bit" (clientsdk.3.50.FC9.LINUX.tar) on IBM website.

Install with the following procedure::

1.  Copy archive on the poller

2.  Create an user informix
    
    useradd informix chmod 775 /home/informix

3.  Need to install Sun JRE 1.6.x

4.  Install SDK (choose Typical Installation)::
    
    ./installclientsdk -javahome /usr/java/jre1.6.0\_45/ .... Please specify a
    directory or press Enter to accept the default directory. Directory Name:
    \[/root/informix/sdkclient/\] /home/informix/sdkclient

### Perl DBD Informix

To compile DBD Informix, you need an access to an Informix Database, run:

    # cd /usr/local/src 
    # wget http://search.cpan.org/CPAN/authors/id/J/JO/JOHNL/DBD-Informix-2013.0521.tar.gz
    # tar xzf DBD-Informix-2013.0521.tar.gz 
    # cd DBD-Informix-2013.0521 
    # export INFORMIXDIR=/home/informix/sdkclient 
    # export LD\_LIBRARY\_PATH=$ORACLE\_HOME/lib  
    # export PATH=${PATH}:/home/informix/sdkclient/bin
    # export LD\_LIBRARY\_PATH=/home/informix/sdkclient/lib/esql/:/home/informix/sdkclient/lib/
    # export DBD\_INFORMIX\_USERNAME=root 
    # export DBD\_INFORMIX\_PASSWORD=xxxx # export DBD\_INFORMIX\_DATABASE=xxxx

Set Informix Instance in "/home/informix/sdkclient/etc/sqlhosts" file:

    INSTANCE onsoctcp IP PORT

Compile the library:

    $ perl Makefile.PL $ make

Then install it:

    $ make install

Then create the file : /etc/ld.so.conf.d/informix.conf and link to the Informix
Library:

    $ touch /etc/ld.so.conf.d/informix.conf vi /etc/ld.so.conf.d/informix.conf

You just have to enter in the file:

    /home/informix/sdkclient/lib/esql/ /home/informix/sdkclient/lib/

Then:

    /sbin/ldconfig

### user account

The safest way to retrieve information from the Oracle server is to create a
dedicated user for Centreon.

This user account must have the read permission on "sysmaster" database.

## Centreon Configuration

### Create a new Informix server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                      |
| :----------------------------------- | :------------------------- |
| Host name                            | *Name of the host*         |
| Alias                                | *Host description*         |
| IP                                   | *Host IP Address*          |
| Monitored from                       | *Monitoring Poller to use* |
| Host Multiple Templates              | App-DB-Informix-custom     |

Click on the *Save* button.
